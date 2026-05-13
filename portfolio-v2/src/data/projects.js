export const projects = [
  {
    slug: 'peak-guardian',
    tag: 'Product Case Study · Team Thala · 2026',
    title: 'Peak Guardian',
    outcome:
      'Real-time decision support for dark store managers during peak hours. Predictive RAG status, phantom inventory detection, and a Peak Readiness Score.',
    linkText: 'Read case study',
    hero: {
      company: 'Team Thala',
      role: 'Product Manager',
      years: 'February 2026',
      location: 'Case Study',
    },
    sections: [
      {
        title: 'The Problem',
        content:
          "Blinkit's high-demand dark stores fall apart during the 7 to 10 PM evening peak. Customers see late deliveries, missing items, \"item unavailable\" notifications. The reframe that changed the solution: every existing platform treats inventory as a number. None treats it as a signal stream with velocity, trajectory, phantom risk, and readiness.",
      },
      {
        title: 'Discovery',
        content: [
          'Started with all three stakeholder groups (rider, picker, manager) before choosing the right user to design for.',
          'Rider perspective from a primary interview with a Blinkit delivery partner: 30+ minute wait times, ~60 riders observed waiting at a single store during peak.',
          'Picker perspective from Play Store reviews and Glassdoor: items misplaced, 70% of QR codes faded at poorly managed stores, pickers financially penalised for inventory errors.',
          'Store manager structurally unreachable during peak hours. 25 to 30 minute lag between first picker failure and manager action causes 15 to 50 failed orders per night per store.',
        ],
      },
      {
        title: 'What We Built',
        content: [
          'Real-time RAG status per SKU with depletion velocity. A SKU at 12 units depleting at 6/hr reads Amber because it will be Red in two hours.',
          'Phantom inventory detection: three "not found" reports from different pickers within one hour triggers auto-OOS and auto-delist.',
          'Peak Readiness Score (0 to 100): generated at 5 PM and 6 PM, weighted across inventory health, depletion trajectory, phantom risk, and external amplifiers.',
          'Unified activity feed replacing WhatsApp + Excel + WMS exception log fragmentation.',
        ],
      },
      {
        title: 'Scoping Discipline',
        content:
          'Demand forecasting, rider dispatch optimisation, and multi-store dashboards each address real problems, but none is the bottleneck for manager decision clarity during peak. Picker Confidence Indicator deferred to Phase 2 due to cross-team dependency.',
      },
    ],
    impact: [
      { number: '15-50', label: 'Failed orders prevented per store per night' },
      { number: '25min', label: 'Decision lag eliminated' },
    ],
    skills: [
      'Discovery & Validation',
      'Stakeholder Research',
      'SKU-level Analytics',
      'Predictive Signals',
      'MVP Scoping',
      'Dark Store Operations',
    ],
  },
  {
    slug: 'nosheeet',
    tag: 'Product Case Study · Team Thala · 2026',
    title: 'NoSheeet',
    outcome:
      'A WhatsApp-first, AI-powered CRM for founder-led sales. Designed against context collapse, administrative debt, and post-sale blind spots.',
    linkText: 'Read case study',
    hero: {
      company: 'Team Thala',
      role: 'Product Manager',
      years: 'March 2026',
      location: 'Case Study',
    },
    sections: [
      {
        title: 'The Thesis',
        content:
          'Every CRM on the market is designed for sales teams. None is designed for the founder who is the sales team. Early-stage founders (0 to 20 employees) lose warm leads not because they are bad at selling, but because the tools are built for someone else\'s workflow.',
      },
      {
        title: 'Three Failure Modes',
        content: [
          'Context Collapse: founders run conversations across WhatsApp, Meta ads, Instagram DMs, Gmail, and LinkedIn. Every follow-up starts with mentally reconstructing the deal state.',
          'Administrative Debt: manual CRM logging is the first activity dropped when founders get busy. One founder took 15 days to reach basic competency with Zoho.',
          'Post-Sale Blind Spot: every existing CRM ends at "Closed Won." No lightweight CRM tracks post-sale health.',
        ],
      },
      {
        title: 'Discovery',
        content: [
          'Five qualitative interviews with India-based founders across fintech, D2C, AI fashion, legal services, and digital marketing.',
          'Secondary research: 44% of salespeople give up after one follow-up attempt, 80% of sales need 5-12 follow-ups.',
          'Feature-by-feature gap analysis across HubSpot, Pipedrive, Folk, Streak, Zoho, and Clay.',
          'Kano model prioritisation with persona attribution to identify the five High/High quadrant features for MVP.',
        ],
      },
      {
        title: 'MVP Features',
        content: [
          'Channel Integration Hub: Gmail + WhatsApp Business + Google Calendar as ingestion sources.',
          'Reminder & Follow-Up Engine: auto-cadence (3/7/14/30 day escalation), founder confirms via WhatsApp.',
          'Call/Meeting Recording with Auto-Summarisation feeding directly into the deal card.',
          'WhatsApp AI Sales Agent: query and update CRM through natural language messages.',
          'AI-Structured Deal Cards: auto-populate from conversations across all connected channels.',
        ],
      },
      {
        title: 'Pricing as Product Decision',
        content:
          'Research surfaced three things founders explicitly reject: per-contact pricing, feature add-ons, and tier-gated escalation. Designed against all three. Flat pricing, unlimited contacts, all features included. Free tier covers up to 50 contacts.',
      },
    ],
    impact: [
      { number: '5', label: 'Founder interviews' },
      { number: '6', label: 'Competitor gap analysis' },
    ],
    skills: [
      'Qualitative Research',
      'Kano Prioritisation',
      'Competitive Analysis',
      'Pricing Strategy',
      'WhatsApp Business API',
      'Founder-led Sales',
    ],
  },
  {
    slug: 'inaya',
    tag: 'AI-Native · Independent · 2025',
    title: 'Inaya: Family Care Platform',
    outcome:
      'NRI family coordination product with on-device scam detection. Built with Claude SDK, Supabase, React.',
    linkText: 'Visit product',
    externalUrl: 'https://inaya.info',
    hero: {
      company: 'Independent Product Work',
      role: 'AI-Native Product Builder',
      years: 'August 2025 — Present',
      location: 'Bengaluru, India',
    },
    sections: [
      {
        title: 'About',
        content:
          'A family preparedness platform for NRI children managing aging parents in India remotely. Built end-to-end: user research, product, UX, full-stack implementation, deployment, and monetisation.',
      },
      {
        title: 'Key Features',
        content: [
          'Family members store health records, documents, expenses, assets, and emergency contacts into a structured vault.',
          'Vault completeness drives the Care Score, a live readiness indicator and upgrade trigger.',
          'Free tier so the aging parent never sees a paywall. Paid vault subscription targeting the NRI child who controls billing.',
          'Includes Saaya: an on-device Android feature that detects when a user opens a payment app during an active unknown call.',
          'Saaya fires a full-screen warning overlay and sends an SMS alert to a nominated guardian. Zero-backend, entirely on-device.',
          'Saaya: 18 Kotlin files across 6 modules (~1,500 LOC). Solved OEM service survival across Xiaomi, Samsung, Oppo, Vivo.',
        ],
      },
    ],
    impact: [
      { number: '1,500', label: 'Lines of Kotlin (Saaya)' },
      { number: '6', label: 'Android modules' },
    ],
    skills: [
      'React 18',
      'Supabase',
      'Claude API',
      'Kotlin / Android',
      'Vercel',
    ],
  },
  {
    slug: 'groupism',
    tag: 'AI-Native · Independent · 2025',
    title: 'groupism.space',
    outcome:
      'Group travel planning with AI-assisted itinerary generation and real-time coordination. React + Supabase Realtime + Gemini.',
    linkText: 'Visit product',
    externalUrl: 'https://groupism.space',
    hero: {
      company: 'Independent Product Work',
      role: 'AI-Native Product Builder',
      years: 'August 2025 — Present',
      location: 'Bengaluru, India',
    },
    sections: [
      {
        title: 'About',
        content:
          'A group trip coordinator built around one insight: the problem is unspoken disagreement, not logistics. One person always absorbs the planning load and has the worst trip.',
      },
      {
        title: 'Key Features',
        content: [
          'AI insights panel (Gemini 2.5 Flash) surfaces group friction across destinations, budgets, and availability before the trip happens.',
          'Destination voting, per-member budget dropdowns with auto-computed group averages, multi-member availability calendar.',
          'Activity cards with voice-to-text, and real-time sync via seven-table Supabase Realtime subscription.',
          'Analytics dashboard: 13 parallel Supabase queries, 14-day engagement chart, cohort table, 60s auto-refresh.',
          'Discovery: 8 user interviews. Core finding validated the consensus problem, not the booking problem.',
        ],
      },
    ],
    impact: [
      { number: '8', label: 'User interviews' },
      { number: '7', label: 'Realtime tables' },
    ],
    skills: [
      'React 18',
      'Vite',
      'TypeScript',
      'Supabase Realtime',
      'Gemini 2.5 Flash',
      'Vercel',
    ],
  },
  // Experience detail pages (hidden from Product Building grid)
  {
    slug: 'independent',
    hidden: true,
    tag: 'Independent · 2025 — Present',
    title: 'Independent Product Work',
    outcome: '',
    linkText: '',
    hero: {
      company: 'Independent',
      role: 'AI-Native Product Builder',
      years: 'August 2025 — Present',
      location: 'Bengaluru, India',
    },
    sections: [
      {
        title: 'About',
        content:
          'Stepped off full-time employment to build AI-native products and to develop AI-PM craft with depth rather than at a distance. Two products in active development.',
      },
      {
        title: 'groupism.space',
        content: [
          'A group trip coordinator. The hardest part of group travel is not booking, it\'s consensus. One organiser usually absorbs the planning load and has the worst trip.',
          'groupism puts everyone\'s preferences (destination votes, per-member budget dropdowns, multi-member availability calendar, activity category cards with voice-to-text) in the same room.',
          'An AI insights panel powered by Gemini 2.5 Flash reads the room and surfaces where the group is quietly misaligned before the trip starts.',
          'Seven-table Supabase Realtime subscription so nothing ever feels stale.',
          'Stack: React 18 + Vite, Supabase (Postgres + Realtime), Express/TypeScript on Railway, Vercel.',
        ],
      },
      {
        title: 'Inaya + Saaya',
        content: [
          'A family preparedness platform for NRI families with elderly parents in India.',
          'Saaya is the acquisition product: an open-source Android app (Kotlin, on-device, zero backend) that detects when a banking app opens during an unknown call.',
          'Full-screen warning overlay with 30-second lockout, Hindi TTS on STREAM_ALARM, SMS-to-guardian from the parent\'s own SIM.',
          '18 Kotlin files across 6 modules (~1,500 LOC). Solved for OEM service survival across Xiaomi, Samsung, Oppo, Vivo.',
          'Inaya is the vault and Care Score platform. Public GitHub at github.com/jidduaditya/fraud-guard.',
        ],
      },
      {
        title: 'AI-PM Craft',
        content:
          'The independent phase has also been a period of deepening AI-PM craft, including structured model evaluations comparing Claude Sonnet, Claude Haiku, an OpenAI frontier model, and Gemini 2.5 Flash on real production tasks.',
      },
    ],
    impact: [
      { number: '2', label: 'Live products' },
      { number: '18', label: 'Kotlin files (Saaya)' },
      { number: '7', label: 'Realtime tables (groupism)' },
    ],
    skills: [
      'React 18',
      'Supabase',
      'Claude API',
      'Kotlin / Android',
      'Gemini 2.5 Flash',
      'Vercel',
      'TypeScript',
    ],
  },
  {
    slug: 'amadeus',
    hidden: true,
    tag: 'Airline SaaS · Amadeus',
    title: 'Altea Seating, Amadeus Labs',
    outcome: '',
    linkText: '',
    hero: {
      company: 'Amadeus Labs',
      role: 'Product Definition Analyst (Product Manager)',
      years: 'June 2023 — August 2025',
      location: 'Bangalore, India',
    },
    sections: [
      {
        title: 'About the Role',
        content:
          'Owned the product backlog and roadmap for Altea Seating, a platform contributing approximately €4M in annual recurring revenue, working with airline customers globally. Translated complex business and operational requirements into epics, user stories, and acceptance criteria across multiple Agile teams under SAFe.',
      },
      {
        title: 'Context',
        content:
          'The work was as much about decision discipline as it was about delivery. Airlines operate on razor-thin margins and zero tolerance for booking errors. Seat assignment logic affects passenger experience and revenue directly. My job was to make sure engineering teams were building the right thing in the right order, with edge cases mapped out before a sprint began, not after a defect was raised.',
      },
      {
        title: 'Key Contributions',
        content: [
          'Established a UAT strategy and execution framework. Structured acceptance criteria, broader test coverage, and disciplined defect triage contributed to a 25% reduction in post-release issues.',
          'Made the hard prioritisation calls under release pressure. On one Altea release, clients requested adding more distribution channels in the final build phase. Analysed projected volume, showed they were low-adoption risk, and proposed Phase 2 inclusion. Phase 1 shipped on schedule. Phase 2 added the channels without rework.',
          'Participated in SAFe PI Planning across Program Increments. Brought prepared feature candidates, negotiated cross-team dependencies on the program board, identified risks early, and helped define MVP boundaries so teams did not over-engineer in the first increment.',
          'Balanced short-term tactical enhancements with long-term platform modernisation. Managed dependencies and competing priorities across teams in a matrixed environment.',
        ],
      },
    ],
    impact: [
      { number: '€4M', label: 'Annual recurring revenue' },
      { number: '25%', label: 'Reduction in post-release issues' },
    ],
    skills: [
      'Product Roadmapping',
      'SAFe PI Planning',
      'UAT Strategy',
      'Prioritisation under Pressure',
      'Stakeholder Management',
      'Agile Delivery',
    ],
  },
  {
    slug: 'infosys',
    hidden: true,
    tag: 'Telecom · Infosys · TalkTalk UK',
    title: 'Digital Sales Platform, TalkTalk UK',
    outcome: '',
    linkText: '',
    hero: {
      company: 'Infosys Limited',
      role: 'Solution Designer (Product Manager)',
      years: 'May 2021 — June 2023',
      location: 'Bangalore (Remote) · Client: TalkTalk, UK',
    },
    sections: [
      {
        title: 'About the Role',
        content:
          'Managed the product backlog and delivery for an AWS-hosted digital sales platform serving 1.9M+ monthly active users in the UK consumer broadband market. The platform was a direct revenue channel: every broken journey, slow page, or failed integration translated to lost conversions and customer drop-off.',
      },
      {
        title: 'Key Contributions',
        content: [
          'Contributed to a 10% lift in conversion through partnership with UX on customer journey redesign, using behavioural data and support feedback to prioritise the right friction points.',
          'Maintained a 95% on-time release cadence across multiple release cycles. The cadence was a function of disciplined backlog governance, clear acceptance criteria, and proactive cross-team coordination.',
          'Coordinated REST-based API integrations across services. Validated data flows, interface contracts, and edge cases alongside engineering teams using Postman. Acted as the primary bridge between business stakeholders and delivery teams.',
          'Contributed to a 20% improvement in transaction reliability during the platform\'s AWS migration phase, through disciplined scope management and structured defect triage.',
        ],
      },
    ],
    impact: [
      { number: '1.9M+', label: 'Monthly active users' },
      { number: '10%', label: 'Conversion lift' },
      { number: '95%', label: 'On-time release rate' },
    ],
    skills: [
      'Backlog Governance',
      'UX Partnership',
      'API Integration',
      'AWS Migration',
      'Release Management',
      'Stakeholder Communication',
    ],
  },
  {
    slug: 'vodacom',
    hidden: true,
    tag: 'Loyalty · TCS · Vodacom SA',
    title: 'VodaBucks, Vodacom South Africa',
    outcome: '',
    linkText: '',
    hero: {
      company: 'Tata Consultancy Services',
      role: 'Solution Architect (Product)',
      years: 'August 2018 — December 2020',
      location: 'Johannesburg, South Africa · Client: Vodacom',
    },
    sections: [
      {
        title: 'About the Role',
        content:
          'Contributed to the end-to-end delivery of VodaBucks, a payments-adjacent loyalty and e-commerce platform built on Vodacom South Africa\'s 26M monthly subscriber base, reaching 1M daily active users at peak. VodaBucks is the work I learned the most from, and the work I am most proud of.',
      },
      {
        title: 'What I Owned',
        content: [
          'Defined platform capabilities, roadmap priorities, and backlog items for loyalty mechanics, catalogue management, payment processing (Magento), and redemption workflows.',
          'Designed API-based integrations and data flows across multiple platforms in a multi-LOB environment spanning telecoms, loyalty, and e-commerce.',
          'Took ownership of vendor onboarding for the Magento e-commerce layer at a point when the process was stalled and ownership was unclear. Mapped the technical constraints, identified three critical system gaps, and built a standardised onboarding playbook. Seven vendors onboarded in one week after the playbook was in place.',
          'Ran stakeholder workshops across telecoms, loyalty, and e-commerce workstreams to align business objectives, technical delivery, and customer experience goals.',
        ],
      },
    ],
    impact: [
      { number: '26M', label: 'Monthly subscribers' },
      { number: '1M', label: 'Daily active users at peak' },
      { number: '7', label: 'Vendors onboarded in one week' },
    ],
    skills: [
      'Platform Ownership',
      'Solution Architecture',
      'Loyalty & Payments',
      'Vendor Onboarding',
      'Magento / E-commerce',
      'Cross-functional Leadership',
    ],
  },
  {
    slug: 'openreach',
    hidden: true,
    tag: 'Telecom · TCS · Openreach UK',
    title: 'Broadband Fulfilment, Openreach UK',
    outcome: '',
    linkText: '',
    hero: {
      company: 'Tata Consultancy Services',
      role: 'Process Designer',
      years: 'July 2015 — July 2018',
      location: 'Chennai, India · Client: Openreach, UK',
    },
    sections: [
      {
        title: 'About the Role',
        content:
          'Designed and optimised broadband fulfilment processes for FTTP and FTTC rollouts in a regulated UK telecoms environment. The work was operational transformation at national-infrastructure scale.',
      },
      {
        title: 'Key Contributions',
        content: [
          'Contributed to a 20% reduction in operational costs and a 15% improvement in delivery timelines through process re-engineering and data-informed decision frameworks.',
          'Drove process standardisation across geographies: documented to-be workflows, aligned business and technology teams, and embedded controls into operational processes to ensure compliance with regulatory and delivery commitments.',
          'Supported large-scale business transformation initiatives, partnering with stakeholders across operations, technology, and regulatory functions.',
        ],
      },
    ],
    impact: [
      { number: '20%', label: 'Reduction in operational costs' },
      { number: '15%', label: 'Improvement in delivery timelines' },
    ],
    skills: [
      'Process Design',
      'FTTP / FTTC Rollouts',
      'Business Transformation',
      'Regulatory Compliance',
      'Operational Efficiency',
      'Stakeholder Alignment',
    ],
  },
];
