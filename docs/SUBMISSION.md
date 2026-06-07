# Hackathon Project Submission — CODE BUSTERS

## Description

This document contains all submission details for the **Deal Intelligence Agent** project built by **Team CODE BUSTERS**. All links are publicly accessible and all information is accurate.

---

# Participant Information

### Email ID

> *(Enter the email address used during registration)*

**Purpose:** Enables organizers to contact the team regarding evaluation, results, or any clarification required during verification.

---

### Phone Number

> *(Enter the primary contact number of the team leader)*

**Purpose:** Serves as an alternate communication channel for urgent updates or queries.

---

### Team Name

**CODE BUSTERS**

---

### Team Members

| # | Full Name | Role |
|---|-----------|------|
| 1 | Dharam Chaniyara | Team Lead / Full Stack Developer |
| 2 | *(Add member name)* | *(Add role)* |
| 3 | *(Add member name)* | *(Add role)* |
| 4 | *(Add member name)* | *(Add role)* |

---

# Repository / Project Files

### GitHub Repository

🔗 **https://github.com/DharmChaniyara/CODE-BUSTERS-**

> ✅ Repository is public and accessible without authentication.

---

### Required Contents — Checklist

#### Source Code

| Item | Location | Status |
|------|----------|--------|
| Frontend Code | `frontend/` (HTML, CSS, JS) | ✅ Complete |
| Backend Code | `backend/server.js` | ✅ Complete |
| APIs and Integrations | `backend/api/db.js` (Supabase client) | ✅ Complete |
| Multi-Agent System | `frontend/js/agents.js` (5 AI agents) | ✅ Complete |
| AI Reasoning Engine | `frontend/js/ai.js` (NLP + recommendations) | ✅ Complete |
| Memory Graph (D3.js) | `frontend/js/graph.js` (force-directed visualization) | ✅ Complete |

#### Documentation

| Item | Location | Status |
|------|----------|--------|
| README file | `README.md` | ✅ Complete |
| Problem statement selected | See below | ✅ Documented |
| Solution overview | See below | ✅ Documented |
| Features implemented | See below | ✅ Documented |
| Technology stack used | See below | ✅ Documented |
| Setup instructions | `README.md` → Setup Instructions | ✅ Complete |

#### Media Assets

| Item | Location | Status |
|------|----------|--------|
| Dashboard Screenshot | `docs/screenshots/dashboard.png` | ✅ Included |
| All Deals Screenshot | `docs/screenshots/deals.png` | ✅ Included |
| Memory Replay Screenshot | `docs/screenshots/memory_replay.png` | ✅ Included |
| Sales Copilot Screenshot | `docs/screenshots/copilot.png` | ✅ Included |
| Knowledge Base Screenshot | `docs/screenshots/knowledge_base.png` | ✅ Included |
| Memory Graph Screenshot | `docs/screenshots/memory_graph.png` | ✅ Included |
| Learning Dashboard Screenshot | `docs/screenshots/learning_dashboard.png` | ✅ Included |
| Judge Demo Screenshot | `docs/screenshots/judge_demo.png` | ✅ Included |

#### Additional Files

| Item | Location | Status |
|------|----------|--------|
| Database Schema | `backend/supabase_migration.sql` | ✅ Complete |
| API Documentation | `backend/server.js` (REST endpoints documented) | ✅ Complete |
| Sample Dataset | `frontend/js/data.js` (500 procedurally generated deals) | ✅ Complete |
| Deployment Config | `vercel.json` | ✅ Complete |

---

# Problem Statement

### Problem Selected

**AI-Powered Enterprise Sales Intelligence with Organizational Memory**

### Problem Description

Enterprise sales teams lose institutional knowledge when reps leave, deals are forgotten, or winning strategies go undocumented. This results in:

- **Repeated mistakes** — Teams encounter the same objections deal after deal without knowing what worked before
- **Lost patterns** — Winning strategies in specific industries (e.g., "early security workshops increase win rate by 34% in Healthcare") are never extracted or shared
- **No organizational learning** — Each new deal starts from scratch instead of building on collective experience
- **Stakeholder blind spots** — Sentiment shifts, influence dynamics, and engagement patterns go untracked across the organization

---

# Solution Overview

**Deal Intelligence Agent** is a multi-agent AI system that creates a **persistent organizational memory** from every deal interaction. It uses five specialized AI agents:

| Agent | Function |
|-------|----------|
| 🧠 Memory Agent | Stores, indexes, and retrieves organizational memory |
| 🕵️ Stakeholder Intel | Tracks sentiment, influence, and engagement patterns |
| 🛡️ Objection Intel | Catalogs objections and maps resolution strategies |
| 🎯 Strategy Agent | Identifies winning patterns from historical data |
| 📚 Learning Agent | Continuously extracts lessons and updates knowledge base |

### Architecture

```
Frontend (Vanilla JS + D3.js)
    ↕
Multi-Agent System (5 AI Agents)
    ↕
Backend (Node.js + Express 5)
    ↕
Database (Supabase / PostgreSQL)
```

### Key Innovation

Unlike traditional CRMs that store data passively, our system **actively learns from every deal** and builds a connected memory graph with 13,947 nodes and 10,000+ connections. The "Show Why" feature provides full **reasoning transparency** — you can trace exactly how the AI arrives at any recommendation through the memory network.

---

# Features Implemented

### 1. Executive Dashboard
Real-time KPIs: $23.1M pipeline value, 50% win rate, 65-day average deal cycle. Interactive charts for industry and stage distribution.

### 2. Deal Management Grid
Searchable, filterable grid of 500 deals across 10 industries. Each deal shows stakeholder maps, interaction timelines, and objection histories.

### 3. Memory Replay Engine
"What If" scenario simulator. Select scenarios like "Healthcare HIPAA Objection" and watch how organizational memory would change the approach.

### 4. AI Sales Copilot
Natural language chat interface. Ask "What's the best strategy for a healthcare deal with HIPAA concerns?" and get recommendations synthesized from organizational memory.

### 5. Knowledge Base
Auto-extracted rules: "Deals with champion identification in discovery have 3.1x close rate" and "Compliance documentation provided upfront eliminates 89% of late objections."

### 6. Organizational Memory Graph
Interactive D3.js force-directed graph with 420+ nodes. Features animated "Show Why" reasoning chain, node search, and type-based filtering.

### 7. Learning Dashboard
Live learning metrics: strategy confidence before/after, pattern extraction rates, and knowledge base growth.

### 8. Judge Demo Mode
Automated 90-second walkthrough of all features — one-click demo for hackathon judges.

---

# Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | HTML5, CSS3, Vanilla JavaScript | ES2022 |
| Visualization | D3.js | v7 |
| Styling | Custom CSS (Dark Mode, Glassmorphism) | CSS3 |
| Backend | Node.js + Express | v5.2.1 |
| Database | Supabase (PostgreSQL) | v2.49.0 client |
| Deployment | Vercel | Serverless |
| Version Control | Git + GitHub | — |

---

# Community Engagement and Outreach

## LinkedIn Post

> 🔗 *(Paste your LinkedIn post URL here after publishing)*

**Suggested Content for LinkedIn Post:**

```
🧠 Thrilled to share our hackathon project: Deal Intelligence Agent!

🎯 Problem: Enterprise sales teams lose institutional knowledge when reps 
leave, deals are forgotten, or strategies go undocumented.

💡 Our Solution: A multi-agent AI system with organizational memory that 
learns from every deal — 500 deals, 2,500+ stakeholders, 13,947 memory nodes.

✨ Key Features:
• 5 specialized AI agents (Memory, Stakeholder, Objection, Strategy, Learning)
• Interactive D3.js Memory Graph with reasoning transparency
• AI Sales Copilot with natural language queries
• "Show Why" animated reasoning chain

🛠️ Tech Stack: Vanilla JS, D3.js, Node.js, Express, Supabase, Vercel

👥 Team CODE BUSTERS: [Tag team members]

GitHub: https://github.com/DharmChaniyara/CODE-BUSTERS-

#Hackathon #AI #SalesIntelligence #WebDev #Innovation #CodeBusters
```

---

## Article Link

> 🔗 *(Paste your article/blog URL here after publishing)*

**Suggested Platforms:** Medium, Dev.to, Hashnode

**Suggested Outline:**

1. Introduction — The Problem of Lost Sales Knowledge
2. Solution Approach — Multi-Agent Architecture with Organizational Memory
3. Architecture Deep Dive — 5 AI Agents and How They Collaborate
4. Memory Graph — Visualizing 13,947 Interconnected Memory Nodes
5. Technical Implementation — D3.js, Supabase, Express
6. Challenges — Scaling D3 force-simulation with thousands of nodes, zoom handler conflicts
7. Results — Demo walkthrough with screenshots
8. Future Scope — LLM integration, real CRM connectors, team-based memory partitioning

---

## Video Link

> 🔗 *(Paste your video URL here after uploading)*

**Recommended Duration:** 3–7 minutes

**Suggested Video Script:**

```
[0:00 - 0:30] Introduction
- "Hi, we're Team CODE BUSTERS"
- Problem: Sales teams lose institutional knowledge

[0:30 - 1:30] Solution Overview
- Architecture: 5 AI agents, Supabase backend, D3.js graph
- Show the architecture diagram from README

[1:30 - 5:00] Live Demonstration
- Dashboard KPIs and charts
- All Deals grid with search/filter
- Click into a specific deal → stakeholder map, objection panel
- Memory Replay → run a "What If" scenario
- Sales Copilot → ask a question about strategy
- Knowledge Base → auto-extracted lessons
- Memory Graph → "Show Why" animation
- Judge Demo Mode → automated walkthrough

[5:00 - 6:00] Conclusion
- Future: LLM integration, real CRM connectors
- Impact: Could reduce deal cycle by 20-30%
- Scalability: Architecture supports multi-team, multi-org deployment
```

---

## Reddit Post Link

> 🔗 *(Paste your Reddit post URL here after publishing)*

**Suggested Subreddits:** r/webdev, r/javascript, r/SaaS, r/dataisbeautiful

**Suggested Content:**

```
Title: [Hackathon Project] Built an AI Sales Copilot with 13,947-node 
Organizational Memory Graph using D3.js

We built Deal Intelligence Agent for a hackathon — an AI system that learns 
from every sales deal and builds persistent organizational memory.

Key features:
• 5 specialized AI agents (Memory, Stakeholder, Objection, Strategy, Learning)
• Interactive D3.js memory graph with "Show Why" reasoning animation
• Processes 500 deals, 2,500+ stakeholders, 1,500+ objections
• Natural language AI copilot for sales strategy questions

Tech stack: Vanilla JS, D3.js v7, Node.js/Express, Supabase, Vercel

GitHub: https://github.com/DharmChaniyara/CODE-BUSTERS-

Screenshots in comments! Would love feedback.
```

---

# Feedback

> *(Fill in your hackathon experience feedback below)*

### What aspects of the competition were conducted well?

> *(Your response here)*

### Which activities or sessions were particularly useful?

> *(Your response here)*

### What improvements would you recommend for future editions?

> *(Your response here)*

### Was communication and timeline management effective?

> *(Your response here)*

### Would you recommend this hackathon to others?

> *(Your response here)*

---

# Submission Checklist

| Item | Status |
|------|--------|
| ✅ All participant details provided | ⬜ *(Fill in email, phone above)* |
| ✅ Team information is accurate | ✅ Done |
| ✅ All team members listed | ⬜ *(Add remaining members above)* |
| ✅ GitHub repository is publicly accessible | ✅ [CODE-BUSTERS-](https://github.com/DharmChaniyara/CODE-BUSTERS-) |
| ✅ LinkedIn post shared | ⬜ *(Paste URL above after posting)* |
| ✅ Technical article/blog published | ⬜ *(Paste URL above after posting)* |
| ✅ Project demo video uploaded | ⬜ *(Paste URL above after uploading)* |
| ✅ Reddit post created | ⬜ *(Paste URL above after posting)* |
| ✅ Feedback submitted | ⬜ *(Fill in feedback above)* |

---

# Important Notes

- All links must remain active until the evaluation process is completed.
- Teams are responsible for ensuring the originality and authenticity of their work.
- Organizers reserve the right to request additional information for verification purposes.
- Incomplete submissions or inaccessible links may result in delays or disqualification from the verification process.

---

**Thank you for evaluating our project. We're proud of what Team CODE BUSTERS has built! 🚀**
