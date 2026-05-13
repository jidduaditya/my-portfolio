# Selected Work & Experience

Content for adityajiddu.com. Five sections: two PRD case studies, four professional roles, one independent phase.

---

# Selected Work

## Peak Guardian
### Real-time decision support for dark store managers during peak hours

*Product case study, February 2026. Team Thala.*

**The brief.** Blinkit's high-demand dark stores fall apart during the 7 to 10 PM evening peak. Customers see late deliveries, missing items, "item unavailable" notifications. The case study framed it as a manager problem: react instead of anticipate, no unified control layer, no priority signals during the chaos.

**The reframe that changed the solution.** Every existing platform treats inventory as a number, the current stock count. None treats it as a signal stream: velocity, trajectory, phantom risk, readiness. That single reframe gave us five features that are not in any competitor's dashboard today.

### How we ran discovery

We deliberately did not start with the manager. We started with all three stakeholder groups inside the dark store and built a case for who the right user was before designing for them.

The rider perspective came from a primary interview with a Blinkit delivery partner in Bangalore (split shifts, 6 AM to 1 PM and 5 PM to 10 PM). Order packing is too slow during peak, riders wait 30+ minutes, roughly 60 delivery personnel were observed waiting at a single store on busy days. But the rider's view was narrow by design. Scan in, wait, get called, deliver, return. No visibility into store-side operations.

The picker perspective came from Play Store reviews and Glassdoor: items misplaced in wrong aisles, 70% of QR codes on shelves faded and unscannable at poorly managed stores, pickers financially penalised for "missing items" that are actually inventory errors. Pickers see one order at a time. They can execute or report problems. They cannot throttle a category, push substitutes, or anticipate the next two hours of demand.

The store manager perspective was triangulated from Glassdoor, Indeed, and field research. The delivery partner we interviewed confirmed the manager is occupied through the entire day ("come after 11 PM"). That insight, that the manager is structurally unreachable during the very hours they need help most, became central to the solution constraint. We were honest about the research gap (no direct sit-down manager interview) and flagged it inside the PRD rather than papering over it.

Every research path led to the same convergence point: **inventory mismatch at the SKU level, invisible to the manager until a picker hits it mid-order during peak.** The 25 to 30 minute lag between first picker failure and manager action was the gap worth closing. That lag causes 15 to 50 failed orders per night per store.

### What we built (MVP)

- **Real-time RAG status per SKU with depletion velocity.** A SKU at 12 units depleting at 6 per hour reads Amber because it will be Red in two hours. A SKU at 4 units depleting at 0.5 per hour stays Green because it will last the entire peak. Depletion velocity is what makes RAG predictive rather than reactive.
- **Phantom inventory detection.** Three "not found" reports from different pickers within one hour triggers auto-OOS and auto-delist from the customer app. The threshold of three was chosen deliberately: one could be a picker error, five means five customers already impacted, three balances sensitivity against accuracy. A "Reinstate" button covers the false-positive case.
- **Peak Readiness Score (0 to 100).** Generated at 5 PM and 6 PM before the 7 PM peak. Weighted across inventory health, depletion trajectory, phantom risk, external amplifiers (IPL, rain, festival, weekend), replenishment status, and audit freshness. Top three recommended actions surfaced so the manager knows where to focus before peak begins.
- **Unified activity feed.** Replaces the WhatsApp + Excel + WMS exception log fragmentation managers currently operate in. Four priority levels with appropriate notification intensity.

### What we deliberately scoped out, and why

Demand forecasting, rider dispatch optimisation, and multi-store dashboards each address real problems, but none is the bottleneck for manager decision clarity during peak. The Picker Confidence Indicator (showing each picker the likelihood of finding an item before they walk to the shelf) was deferred to Phase 2 because it requires picker app UI changes, a cross-team dependency that would have blocked MVP.

### The bold idea, for what comes after MVP

Assisted one-tap actions. The system pre-computes recommended responses based on live signals every 60 seconds and presents them as one-tap decisions ("12 riders waiting, 9 orders unpacked. Move 2 pickers to packing?"). The manager skips the figuring-out step, which is where most time is lost during peak. The system pre-computes, the manager approves or overrides. Authority stays with the manager. Effort moves to the system.

**Prototype:** [peak-guardian-flow.lovable.app](https://peak-guardian-flow.lovable.app)
**Full PRD:** [link to document]

---

## NoSheeet
### A WhatsApp-first, AI-powered CRM for founder-led sales

*Product case study, March 2026. Team Thala.*

**The thesis.** Every CRM on the market is designed for sales teams. None is designed for the founder who *is* the sales team. Early-stage founders (0 to 20 employees) lose warm leads not because they are bad at selling, but because the tools available to them are built for someone else's workflow.

### The three failure modes we converged on

Across five in-depth founder interviews, three patterns surfaced consistently. We named them, because naming a failure mode is what lets you design against it.

1. **Context Collapse.** Founders run conversations across WhatsApp, Meta ads, Instagram DMs, Gmail, and LinkedIn. Moving between channels loses the thread of a deal. Every follow-up starts with mentally reconstructing what was last said, what was promised, what the prospect's actual pain is. That reconstruction cost is the primary driver of follow-up abandonment.

2. **Administrative Debt.** Manual CRM logging is the first activity dropped when founders get busy. Gnanesh in our research: "HubSpot feels like a second job. I want to close, not be a data entry clerk." His team took 15 days to reach basic competency with Zoho. Nobody on the team reached expert level.

3. **Post-Sale Blind Spot.** Every existing CRM ends at "Closed Won." But retention is harder than acquisition. No lightweight CRM tracks post-sale health. Gnanesh again: "The major issue is not onboarding the customer, it's maintaining the customer. After-sales support is a bigger headache."

### How we ran discovery

Five qualitative interviews with India-based founders across fintech/BD (Gnanesh), D2C cricket bats (Daman), an AI fashion app (Shreya), legal services sales (Legal Nextt), and a 2-person digital marketing agency. Each was layered against secondary research on follow-up behaviour (44% of salespeople give up after one attempt, 80% of sales need 5-12 follow-ups), CRM adoption (91% of 11+ employee businesses use a CRM, only 50% of those with 10 or fewer), and a feature-by-feature gap analysis across HubSpot, Pipedrive, Folk, Streak, Zoho, and Clay.

### The Kano prioritisation

Every feature was mapped against importance to the founder (Y-axis) and satisfaction gain if solved (X-axis), with persona attribution baked in (G, D, S, L, A). Five features cleared the High/High quadrant and became the MVP build list:

1. **Channel Integration Hub.** Gmail + WhatsApp Business + Google Calendar as ingestion sources. LinkedIn and Instagram DM deferred (API constraints and TOS risk).
2. **Reminder & Follow-Up Engine.** Auto-cadence (3/7/14/30 day escalation), founder confirms via WhatsApp, no manual reminder setup.
3. **Call/Meeting Recording with Auto-Summarisation.** Manual trigger in MVP. AI feeds the deal card directly.
4. **WhatsApp AI Sales Agent.** The founder queries and updates their CRM through natural language messages on the channel they already live in.
5. **AI-Structured Deal Cards.** Living deal cards that auto-populate from conversations across all connected channels.

Build sequence was determined by research-validated importance, differentiation versus existing tools, and dependency (features that unblock other features built first).

### Primary persona

Daman. D2C cricket bats. ~100 active customers built over a year. 15 deals per month. 15-day average deal cycle. 60% leads from Meta performance marketing, 40% cold outreach. His current "CRM" is memory plus Facebook CRM plus WhatsApp Business Labels plus a Python script he wrote himself to extract Instagram IDs. His quote: "No tool, all jugaad." Daman represents the segment at its critical inflection: functional enough at current scale not to feel urgent pain, structurally broken the moment volume increases or a co-founder leaves. His DIY Python script signals high intent and low tool satisfaction. He loses deals from missed follow-ups, acknowledges it, and has no replacement system.

### Pricing was a product decision

Our research surfaced three specific things founders explicitly reject: per-contact pricing (punishes pipeline growth), feature add-ons (Zoho's email sync, call logging, and recording were each separate paid SKUs for Gnanesh), and tier-gated escalation (Streak removed its free plan and jumped to $49 per user per month in 2024). We designed against all three. Flat ₹999 per month, unlimited contacts, all features included. A free tier covers up to 50 contacts with no credit card.

### The moonshot: Ghost CRM

The CRM that doesn't exist as a separate app. No tab to open, no app to switch to, no login to remember. NoSheeet lives entirely inside the founder's existing channels. A WhatsApp contact they chat with to query or update any deal. A Gmail sidebar that surfaces deal context as they type a reply. A calendar overlay that briefs them before every meeting with a known contact. The founder never opens the CRM. The CRM comes to them, in the channel they are already in, at the moment they need it.

**Full PRD:** [link to document]

---

# Experience

## Amadeus
### Product Definition Analyst (Product Manager), Altea Seating
*June 2023 to August 2025. Bangalore.*

Owned the product backlog and roadmap for Altea Seating, a platform contributing approximately €4M in annual recurring revenue, working with airline customers globally. Translated complex business and operational requirements into epics, user stories, and acceptance criteria across multiple Agile teams under SAFe.

The work was as much about decision discipline as it was about delivery. Airlines operate on razor-thin margins and zero tolerance for booking errors. Seat assignment logic affects passenger experience and revenue directly. My job was to make sure engineering teams were building the right thing in the right order, with edge cases mapped out before a sprint began, not after a defect was raised.

A few specific contributions:

- Established a UAT strategy and execution framework. Structured acceptance criteria, broader test coverage, and disciplined defect triage contributed to a 25% reduction in post-release issues.
- Made the hard prioritisation calls under release pressure. On one Altea release, clients requested adding more distribution channels in the final build phase. The right answer was to defer, but framed as a business decision rather than a "we can't do it." I analysed projected volume for the requested channels, showed they were low-adoption risk, and proposed Phase 2 inclusion. Phase 1 shipped on schedule. Phase 2 added the channels without rework.
- Participated in SAFe PI Planning across Program Increments. Brought prepared feature candidates, negotiated cross-team dependencies on the program board, identified risks early, and helped define MVP boundaries so teams did not over-engineer in the first increment.
- Balanced short-term tactical enhancements with long-term platform modernisation. Managed dependencies and competing priorities across teams in a matrixed environment.

---

## Infosys
### Solution Designer (Product Manager), TalkTalk UK
*May 2021 to June 2023. Bangalore (Remote).*

Managed the product backlog and delivery for an AWS-hosted digital sales platform serving 1.9M+ monthly active users in the UK consumer broadband market. The platform was a direct revenue channel: every broken journey, slow page, or failed integration translated to lost conversions and customer drop-off.

Specific outcomes:

- Contributed to a 10% lift in conversion through partnership with UX on customer journey redesign, using behavioural data and support feedback to prioritise the right friction points.
- Maintained a 95% on-time release cadence across multiple release cycles. The cadence was a function of disciplined backlog governance, clear acceptance criteria, and proactive cross-team coordination, not heroics.
- Coordinated REST-based API integrations across services. Validated data flows, interface contracts, and edge cases alongside engineering teams using Postman. Acted as the primary bridge between business stakeholders and delivery teams.
- Contributed to a 20% improvement in transaction reliability during the platform's AWS migration phase, through disciplined scope management and structured defect triage.

---

## Tata Consultancy Services / Vodacom South Africa
### Solution Architect (Product), VodaBucks
*August 2018 to December 2020. Johannesburg.*

Contributed to the end-to-end delivery of VodaBucks, a payments-adjacent loyalty and e-commerce platform built on Vodacom South Africa's 26M monthly subscriber base, reaching 1M daily active users at peak. VodaBucks is the work I learned the most from, and the work I am most proud of.

What I owned:

- Defined platform capabilities, roadmap priorities, and backlog items for loyalty mechanics, catalogue management, payment processing (Magento), and redemption workflows.
- Designed API-based integrations and data flows across multiple platforms in a multi-LOB environment spanning telecoms, loyalty, and e-commerce. Documented interface specifications, data models, and entity relationships to support engineering and QA.
- Took ownership of vendor onboarding for the Magento e-commerce layer at a point when the process was stalled and ownership was unclear. Mapped the technical constraints, identified three critical system gaps, and built a standardised onboarding playbook. Outcome: seven vendors onboarded in one week after the playbook was in place, versus a previously chaotic and stalled state. The playbook became the repeatable template for future onboarding.
- Ran stakeholder workshops across telecoms, loyalty, and e-commerce workstreams to align business objectives, technical delivery, and customer experience goals.

Recognised with the Vodacom CEO Award for platform innovation and cross-functional leadership.

---

## Tata Consultancy Services / Openreach UK
### Process Designer
*July 2015 to July 2018. Chennai.*

Designed and optimised broadband fulfilment processes for FTTP and FTTC rollouts in a regulated UK telecoms environment. The work was operational transformation at national-infrastructure scale.

- Contributed to a 20% reduction in operational costs and a 15% improvement in delivery timelines through process re-engineering and data-informed decision frameworks.
- Drove process standardisation across geographies: documented to-be workflows, aligned business and technology teams, and embedded controls into operational processes to ensure compliance with regulatory and delivery commitments.
- Supported large-scale business transformation initiatives, partnering with stakeholders across operations, technology, and regulatory functions.

Received an internal Innovation Award for contributions to operational transformation and process optimisation.

---

## Independent Product Work
### Building AI-native products solo
*August 2025 to Present. Bengaluru.*

Stepped off full-time employment to build AI-native products solo and to develop AI-PM craft with depth rather than at a distance. Two products in active development:

**groupism.space** — A group trip coordinator. The hardest part of group travel is not booking, it's consensus. One organiser usually absorbs the planning load and has the worst trip. groupism puts everyone's preferences (destination votes, per-member budget dropdowns, multi-member availability calendar, activity category cards with voice-to-text) in the same room. An AI insights panel powered by Gemini 2.5 Flash reads the room and surfaces where the group is quietly misaligned before the trip starts. Seven-table Supabase Realtime subscription so nothing ever feels stale. Stack: React 18 + Vite, Supabase (Postgres + Realtime), Express/TypeScript on Railway, Vercel.

**Inaya + Saaya** — A family preparedness platform for NRI families with elderly parents in India. Saaya is the acquisition product, an open-source Android app (Kotlin, on-device, zero backend) that detects the exact moment a phone scam turns dangerous: when a banking app opens during an unknown call. Full-screen warning overlay with 30-second lockout, Hindi TTS on STREAM_ALARM, SMS-to-guardian from the parent's own SIM. 18 Kotlin files across 6 modules, solved for OEM service survival across Xiaomi, Samsung, Oppo, Vivo. Inaya is the vault and Care Score platform. Public GitHub at github.com/jidduaditya/fraud-guard.

The independent phase has also been a period of deepening AI-PM craft, including structured model evaluations comparing Claude Sonnet, Claude Haiku, an OpenAI frontier model, and Gemini 2.5 Flash on real production tasks, with a public portfolio repo as output.
