-- ═══════════════════════════════════════════════════════════════
-- Deal Intelligence Agent — Supabase Migration Script
-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor)
-- ═══════════════════════════════════════════════════════════════

-- 1. Deals table
CREATE TABLE IF NOT EXISTS deals (
  id BIGSERIAL PRIMARY KEY,
  deal_id INTEGER UNIQUE NOT NULL,
  company TEXT NOT NULL,
  industry TEXT NOT NULL,
  value NUMERIC NOT NULL,
  stage TEXT DEFAULT 'Discovery',
  status TEXT DEFAULT 'active',
  outcome TEXT,
  win_probability NUMERIC DEFAULT 50,
  deal_cycle_days INTEGER DEFAULT 0,
  created_date TEXT,
  close_date TEXT,
  description TEXT DEFAULT '',
  key_factors TEXT[] DEFAULT '{}',
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Stakeholders table
CREATE TABLE IF NOT EXISTS stakeholders (
  id BIGSERIAL PRIMARY KEY,
  stakeholder_id INTEGER UNIQUE NOT NULL,
  deal_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  influence_level TEXT DEFAULT 'Influencer',
  concerns TEXT[] DEFAULT '{}',
  sentiment TEXT DEFAULT 'Neutral',
  engagement_score NUMERIC DEFAULT 50,
  last_contact TEXT,
  email TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Objections table
CREATE TABLE IF NOT EXISTS objections (
  id BIGSERIAL PRIMARY KEY,
  objection_id INTEGER UNIQUE NOT NULL,
  deal_id INTEGER NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  resolution TEXT DEFAULT 'Pending resolution',
  outcome TEXT DEFAULT 'unresolved',
  raised_date TEXT,
  resolved_date TEXT,
  historical_success_rate NUMERIC DEFAULT 50,
  severity TEXT DEFAULT 'Medium',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Interactions table
CREATE TABLE IF NOT EXISTS interactions (
  id BIGSERIAL PRIMARY KEY,
  interaction_id INTEGER UNIQUE NOT NULL,
  deal_id INTEGER NOT NULL,
  type TEXT NOT NULL,
  content TEXT NOT NULL,
  stakeholder_name TEXT,
  timestamp TEXT,
  sentiment TEXT DEFAULT 'neutral',
  key_topics TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. System State table (single-row config store)
CREATE TABLE IF NOT EXISTS system_state (
  id INTEGER PRIMARY KEY DEFAULT 1,
  knowledge_base JSONB DEFAULT '{}',
  memory_stats JSONB DEFAULT '{}',
  learning_state JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════════════════════════════════════
-- Row Level Security (RLS) — allow full access via service key
-- ═══════════════════════════════════════════════════════════════
ALTER TABLE deals ENABLE ROW LEVEL SECURITY;
ALTER TABLE stakeholders ENABLE ROW LEVEL SECURITY;
ALTER TABLE objections ENABLE ROW LEVEL SECURITY;
ALTER TABLE interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE system_state ENABLE ROW LEVEL SECURITY;

-- Policies: allow all operations for the service_role (backend)
CREATE POLICY "service_role_all" ON deals FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "service_role_all" ON stakeholders FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "service_role_all" ON objections FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "service_role_all" ON interactions FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "service_role_all" ON system_state FOR ALL USING (true) WITH CHECK (true);
