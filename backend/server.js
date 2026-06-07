require('dotenv').config();
const express = require('express');
const path = require('path');
const supabase = require('./api/db');

const app = express();
app.use(express.json({ limit: '5mb' }));
app.use(express.static(path.join(__dirname, '../frontend')));

// ── GET /api/data — Fetch all data from Supabase ──────────────
app.get('/api/data', async (req, res) => {
  try {
    const [deals, stakeholders, objections, interactions, stateRes] = await Promise.all([
      supabase.from('deals').select('*'),
      supabase.from('stakeholders').select('*'),
      supabase.from('objections').select('*'),
      supabase.from('interactions').select('*'),
      supabase.from('system_state').select('*').limit(1).single()
    ]);

    if (deals.error) throw deals.error;
    if (stakeholders.error) throw stakeholders.error;
    if (objections.error) throw objections.error;
    if (interactions.error) throw interactions.error;

    const state = stateRes.data || { knowledge_base: {}, memory_stats: {}, learning_state: {} };

    // Map snake_case DB columns → camelCase for the frontend
    const mappedDeals = (deals.data || []).map(d => ({
      id: d.deal_id, company: d.company, industry: d.industry, value: d.value,
      stage: d.stage, status: d.status, outcome: d.outcome,
      winProbability: d.win_probability, dealCycleDays: d.deal_cycle_days,
      createdDate: d.created_date, closeDate: d.close_date,
      description: d.description, keyFactors: d.key_factors || [], tags: d.tags || []
    }));

    const mappedStakeholders = (stakeholders.data || []).map(s => ({
      id: s.stakeholder_id, dealId: s.deal_id, name: s.name, role: s.role,
      influenceLevel: s.influence_level, concerns: s.concerns || [],
      sentiment: s.sentiment, engagementScore: s.engagement_score,
      lastContact: s.last_contact, email: s.email
    }));

    const mappedObjections = (objections.data || []).map(o => ({
      id: o.objection_id, dealId: o.deal_id, category: o.category,
      description: o.description, resolution: o.resolution, outcome: o.outcome,
      raisedDate: o.raised_date, resolvedDate: o.resolved_date,
      historicalSuccessRate: o.historical_success_rate, severity: o.severity
    }));

    const mappedInteractions = (interactions.data || []).map(i => ({
      id: i.interaction_id, dealId: i.deal_id, type: i.type, content: i.content,
      stakeholderName: i.stakeholder_name, timestamp: i.timestamp,
      sentiment: i.sentiment, keyTopics: i.key_topics || []
    }));

    res.json({
      deals: mappedDeals,
      stakeholders: mappedStakeholders,
      objections: mappedObjections,
      interactions: mappedInteractions,
      knowledgeBase: state.knowledge_base || {},
      memoryStats: state.memory_stats || {},
      learningState: state.learning_state || {}
    });
  } catch (error) {
    console.error('/api/data error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// ── POST /api/deals — Insert a single deal ────────────────────
app.post('/api/deals', async (req, res) => {
  try {
    const { data, error } = await supabase.from('deals').insert(req.body).select();
    if (error) throw error;
    res.json(data[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ── POST /api/seed — Seed / re-seed all tables ────────────────
app.post('/api/seed', async (req, res) => {
  try {
    const payload = req.body;

    // Clear all tables
    await supabase.from('interactions').delete().neq('id', -1);
    await supabase.from('objections').delete().neq('id', -1);
    await supabase.from('stakeholders').delete().neq('id', -1);
    await supabase.from('deals').delete().neq('id', -1);
    await supabase.from('system_state').delete().neq('id', 0);

    // Insert deals
    if (payload.deals && payload.deals.length > 0) {
      const dealsToInsert = payload.deals.map(d => ({
        deal_id: d.id,
        company: d.company,
        industry: d.industry,
        value: d.value,
        stage: d.stage || 'Discovery',
        status: d.status || 'active',
        outcome: d.outcome || null,
        win_probability: d.winProbability || 50,
        deal_cycle_days: d.dealCycleDays || 0,
        created_date: d.createdDate || null,
        close_date: d.closeDate || null,
        description: d.description || '',
        key_factors: d.keyFactors || [],
        tags: d.tags || []
      }));
      const { error } = await supabase.from('deals').insert(dealsToInsert);
      if (error) throw error;
    }

    // Insert stakeholders
    if (payload.stakeholders && payload.stakeholders.length > 0) {
      const stakeholdersToInsert = payload.stakeholders.map(s => ({
        stakeholder_id: s.id,
        deal_id: s.dealId,
        name: s.name,
        role: s.role,
        influence_level: s.influenceLevel || 'Influencer',
        concerns: s.concerns || [],
        sentiment: s.sentiment || 'Neutral',
        engagement_score: s.engagementScore || 50,
        last_contact: s.lastContact || null,
        email: s.email || null
      }));
      const { error } = await supabase.from('stakeholders').insert(stakeholdersToInsert);
      if (error) throw error;
    }

    // Insert objections
    if (payload.objections && payload.objections.length > 0) {
      const objectionsToInsert = payload.objections.map(o => ({
        objection_id: o.id,
        deal_id: o.dealId,
        category: o.category,
        description: o.description,
        resolution: o.resolution || 'Pending resolution',
        outcome: o.outcome || 'unresolved',
        raised_date: o.raisedDate || null,
        resolved_date: o.resolvedDate || null,
        historical_success_rate: o.historicalSuccessRate || 50,
        severity: o.severity || 'Medium'
      }));
      const { error } = await supabase.from('objections').insert(objectionsToInsert);
      if (error) throw error;
    }

    // Insert interactions
    if (payload.interactions && payload.interactions.length > 0) {
      const interactionsToInsert = payload.interactions.map(i => ({
        interaction_id: i.id,
        deal_id: i.dealId,
        type: i.type,
        content: i.content,
        stakeholder_name: i.stakeholderName || null,
        timestamp: i.timestamp || null,
        sentiment: i.sentiment || 'neutral',
        key_topics: i.keyTopics || []
      }));
      const { error } = await supabase.from('interactions').insert(interactionsToInsert);
      if (error) throw error;
    }

    // Upsert system state
    const { error: stateError } = await supabase.from('system_state').upsert({
      id: 1,
      knowledge_base: payload.knowledgeBase || {},
      memory_stats: payload.memoryStats || {},
      learning_state: payload.learningState || {}
    });
    if (stateError) throw stateError;

    res.json({ message: 'Database seeded successfully' });
  } catch (error) {
    console.error('/api/seed error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// ── POST /api/analyze — AI analysis endpoint ──────────────────
app.post('/api/analyze', async (req, res) => {
  res.json({
    status: 'success',
    message: 'AI analyzed the deals history from Supabase'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
