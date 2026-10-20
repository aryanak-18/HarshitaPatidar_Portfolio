// QUICK PERSONALISATION: update these values before publishing.
// The LinkedIn link is hidden until `linkedin` is set to a full profile URL.
export const config = {
  name: 'Harshita Patidar',
  email: 'harshitapatidar003@gmail.com',
  linkedin: '',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'approach', label: 'Approach' },
  { id: 'credentials', label: 'Credentials' },
]

export const hero = {
  status: "Founder's Office · Product & Growth at Nubra",
  setup: 'Anyone can bring users in.',
  headline: 'I make them ',
  emphasis: 'stay.',
  copy: 'Product and growth at Nubra. I ship the features users touch first, from homepage to onboarding, and instrument the funnels that prove they keep coming back.',
  facts: [
    ['Currently', "Founder's Office, Nubra"],
    ['Focus', 'Activation · Retention · Analytics'],
    ['Education', 'B.Com (Hons.), SRCC'],
  ],
  marquee: ['Product-led growth', 'Activation', 'Retention', 'SQL', 'Python', 'Playwright', 'Metabase', 'GTM strategy', 'CRM', 'Push notifications', 'API specs', 'Power BI'],
  // Illustrative push notifications floating around the hero card.
  toasts: [
    { title: 'KYC verified', body: "You're all set to start trading", tone: 'green', icon: '✓' },
    { title: 'Funds added', body: 'Ready for your first order', tone: 'amber', icon: '₹' },
    { title: 'Welcome back', body: 'Day 3 · Your watchlist moved', tone: 'violet', icon: '↗' },
  ],
}

// Hero card: features shipped at Nubra, then what they moved.
export const productLog = {
  shipped: [
    { name: 'Homepage', detail: 'New landing page for every session' },
    { name: 'Watchlist & Search', detail: 'Core discovery surfaces' },
    { name: 'Login & onboarding', detail: 'First-run flow for new users' },
    { name: 'Push notification system', detail: 'Marketing + product alerts' },
    { name: 'Retention analytics', detail: 'Python · Playwright · Metabase' },
  ],
  impact: [
    { value: '20%', label: 'User activation', from: 'from ~3%' },
    { value: '33%', label: 'Monthly retention', from: 'from 15%' },
    { value: '16.4%', label: 'D0 funded rate', from: 'from 12.2%' },
    { value: '5.6x', label: 'Weekly brokerage revenue' },
  ],
}

export const about = {
  lead: 'Commerce roots, product instincts, and a habit of measuring everything that moves.',
  paragraphs: [
    "I work in the Founder's Office at Nubra, a SEBI-registered retail stock broker. In a lean team of three, I've owned product-led growth from scratch across acquisition, activation and retention.",
    'I like owning problems end to end: shaping UX direction with design, writing frontend and backend requirements down to the API specs, testing what ships, and instrumenting the analytics that prove whether it worked. Broker-side workflows, order flows and margin logic are where I do some of my best thinking.',
    "To me, growth isn't a campaign bolted onto a product. It comes from fixing the moments where users hesitate, then telling them clearly what changed.",
  ],
  capabilities: [
    {
      title: 'Product & Growth',
      items: ['Product management', 'Product-led growth', 'GTM strategy', 'Onboarding & activation funnels', 'CRM & push notification strategy', 'PRDs & API specs', 'Product testing'],
    },
    {
      title: 'Analytics & Data',
      items: ['SQL', 'Python', 'Playwright', 'Metabase', 'Power BI', 'Excel', 'Event tracking & cohort analysis'],
    },
    {
      title: 'Leadership',
      items: ['Cross-functional alignment', 'Design & engineering collaboration', 'Stakeholder management', 'Leading intern teams', 'Webinars & public speaking'],
    },
  ],
}

export const experience = [
  {
    company: 'Nubra',
    logo: '/logos/nubra.png',
    role: "Founder's Office — Product & Growth",
    context: 'Retail SEBI-registered stock broker',
    period: 'Jul 2024 — Present',
    bullets: [
      ['Activation lift.', 'Owned and shipped the new Homepage, plus Watchlist, Search and Login/onboarding, lifting D0 funded rate from 12.2% to 16.4% and D3 funded from 19.9% to 26.1%. D1 and D3 trade rates hit all-time highs of 6.7% and 11.9%.'],
      ['Full product redesign.', 'Single-handedly drove the App and Web redesign at the same time: partnered with the designer on customer-centric flows, wrote end-to-end frontend and backend requirements including API specs, and owned product testing.'],
      ['Growth engine from zero.', 'Built the CRM, onboarding funnels, activation triggers and retention framework with no prior infrastructure, taking activation from ~3% to 20% in 3 months and scaling weekly brokerage revenue 5.6x.'],
      ['Product analytics.', "Architected the company's analytics layer end to end in SQL (event tracking, funnel drop-offs, activation and feature adoption), driving monthly retention from 15% to 33%."],
      ['Communication & launches.', 'Owned push notification logic across marketing (campaigns, activation, re-engagement) and product alerts (KYC, funds, orders, feature updates), and led communications for every launch.'],
      ['Leadership.', 'Led a team of 3 interns, defined complex broker-side workflows and margin logic, and represented Nubra at 5+ fintech events and 10+ product webinars.'],
    ],
    tags: ['Product-led growth', 'Activation & retention', 'SQL', 'Python', 'Metabase', 'API specs', 'CRM'],
  },
  {
    company: 'KPMG India',
    logo: '/logos/kpmg.svg',
    role: 'Summer Intern',
    context: 'Trade & market research',
    period: 'Jun 2023 — Jul 2023',
    bullets: [
      ['', 'Researched import patterns, trade data and market trends for 5+ products across HS codes outlined by the DPIIT.'],
      ['', 'Analysed a notable surge in imports of 7+ products and identified the pivotal factors behind it.'],
      ['', 'Worked in a cross-functional cohort, scrutinising data from 25+ sources and synthesising insights into 5+ reports.'],
    ],
    tags: ['Market research', 'Trade data', 'Reporting'],
  },
  {
    company: 'Michael Page',
    logo: '/logos/michaelpage.png',
    role: 'Intern — Healthcare & Lifesciences',
    context: 'PageGroup recruitment consultancy',
    period: 'Feb 2023 — Apr 2023',
    bullets: [
      ['Fastest turnaround.', 'Executed 2 client mandates in a record 48 hours, boosting client satisfaction and brand image.'],
      ['', 'Managed 8+ client mandates with a notional budget of INR 45.5 million by meeting their human capital needs.'],
      ['', 'Led a team of 2 interns, headed the research, and mapped 250+ niche and challenging recruitment mandates.'],
    ],
    tags: ['Client management', 'Research', 'Team lead'],
  },
  {
    company: 'Tata Capital HF',
    logo: '/logos/tata.png',
    role: 'Finance Intern',
    context: 'Housing finance',
    period: 'Nov 2022 — Dec 2022',
    bullets: [
      ['', 'Used market trend analysis to recommend strategic adjustments, contributing to an 89% improvement in average monthly return across 3+ client portfolios.'],
      ['', 'Ran data analysis for 4+ financial projects and evaluated system-generated comparative and trend reports across KPIs and ratios.'],
    ],
    tags: ['Financial analysis', 'KPIs & ratios'],
  },
]

// Body blocks: { p: '...' } or { ul: [...] }; wrap text in **...** for bold.
export const cases = [
  {
    id: 'activation',
    org: 'Nubra',
    category: 'Product · Activation',
    title: 'Redesigning the first-run experience',
    metric: '16.4%',
    metricLabel: 'D0 funded rate, up from 12.2%',
    meta: { role: 'Product owner', team: 'Founders, design, frontend & backend engineering', focus: 'New-user activation' },
    sections: [
      ['What I owned', [{ ul: [
        'Shipped the **Homepage** as the new landing page for the app.',
        'Owned **Watchlist**, **Search** and **Login/onboarding**, the surfaces every new user touches first.',
      ] }]],
      ['How it was built', [{ ul: [
        'Spearheaded the full product redesign of both **App and Web at the same time**, single-handedly.',
        'Collaborated directly with the designer on customer-centric flows and UX direction.',
        'Wrote end-to-end frontend and backend requirements, **including API specs**.',
        'Owned product testing across both platforms before rollout.',
      ] }]],
      ['Outcome', [{ ul: [
        '**D0 funded rate:** 12.2% → 16.4%.',
        '**D3 funded rate:** 19.9% → 26.1%.',
        '**D1 and D3 trade rates** reached all-time highs of 6.7% and 11.9%.',
      ] }]],
    ],
    callout: 'The biggest activation levers sat in the first few screens. Owning homepage, search, watchlist and onboarding together meant the whole first-run journey could be redesigned as one flow.',
  },
  {
    id: 'analytics',
    org: 'Nubra',
    category: 'Analytics · Retention',
    title: 'Building product analytics from zero',
    metric: '33%',
    metricLabel: 'Monthly retention, up from 15%',
    meta: { role: 'Analytics owner', team: 'Founders, engineering', focus: 'Retention & feature adoption' },
    sections: [
      ['The starting point', [{ p: 'There was no product analytics layer to measure how users moved through the app, where they dropped off, or which features they actually adopted.' }]],
      ['What I built', [{ ul: [
        "Architected the company's **entire product analytics framework** and owned the analytics layer end to end.",
        'Used **SQL** to instrument event tracking, funnel drop-offs, activation metrics and feature adoption.',
        "Built the company's first-ever **Retention Analytics framework**, automated end to end using **Python and Playwright on Metabase**.",
      ] }]],
      ['Outcome', [{ p: 'Directly drove **monthly retention from 15% to 33%**, with funnel and cohort views feeding product and growth decisions.' }]],
    ],
    callout: 'Automating retention reporting meant the team could act on cohort changes as they happened, instead of rebuilding reports by hand.',
  },
  {
    id: 'growth',
    org: 'Nubra',
    category: 'Growth · Lifecycle',
    title: 'A growth engine with no prior infrastructure',
    metric: '5.6x',
    metricLabel: 'Weekly brokerage revenue',
    meta: { role: 'Sole growth hire', team: 'Founders, marketing, product, engineering', focus: 'Acquisition, activation & retention' },
    sections: [
      ['The problem', [{ p: 'As the sole growth hire, I started with **no prior infrastructure**: no CRM, onboarding funnels, activation triggers or retention framework.' }]],
      ['What I built', [{ ul: [
        'Architected funnel flows and engagement triggers from scratch, driving **user activation from ~3% to 20% in 3 months**.',
        'Built the CRM, onboarding funnels, activation triggers and retention framework.',
        "Owned the firm's entire **push notification strategy**, covering marketing (campaigns, activation, re-engagement) and product alerts (KYC, funds, orders, feature updates), from logic-building to deployment.",
      ] }]],
      ['Product-marketing fit', [{ ul: [
        'Identified cost-optimisation levers and architected campaigns around new feature releases.',
        'Owned and led all communications end to end across every launch and rollout.',
        'Represented Nubra at **5+ large-scale fintech events** and led **10+ product webinars**, channelling client feedback into the roadmap.',
      ] }]],
      ['Outcome', [{ p: 'Weekly brokerage revenue scaled **5.6x**, with ownership across customer acquisition, activation and retention.' }]],
    ],
    callout: 'Growth was treated as a system: every product launch shipped with its own activation trigger, notification logic and communication plan.',
  },
  {
    id: 'nikore',
    org: 'Nikore Associates',
    category: 'Research · Policy',
    title: "Gendered effects in India's labour markets",
    metric: '30+',
    metricLabel: "Women's development organisations engaged",
    meta: { role: 'Research associate', team: "Women's development organisations, government stakeholders", focus: 'Women empowerment' },
    sections: [
      ['Scope', [{ p: "Conducted first-hand primary and secondary research by collaborating with **30+ women's development organisations** working on women empowerment, to understand gendered effects in India's labour markets." }]],
      ['Stakeholder work', [{ p: 'Orchestrated and synthesised insights from **10+ consultation sessions** involving diverse government stakeholders.' }]],
    ],
    callout: '',
  },
  {
    id: 'refract',
    org: 'Refract Consulting',
    category: 'Research · Strategy',
    title: 'Business research across 15+ client profiles',
    metric: '14+',
    metricLabel: 'Research projects delivered',
    meta: { role: 'Research consultant', team: 'Client teams', focus: 'Strategy & market sizing' },
    sections: [
      ['Framing the research', [{ p: 'Defined research objectives tailored to **15+ client profiles**, scrutinising data for precision and comprehensiveness.' }]],
      ['Execution', [{ ul: [
        'Conducted primary and secondary research and turned the findings into a comprehensive research report.',
        'Executed **14+ business research projects** across strategy, market sizing and competitor benchmarking.',
      ] }]],
    ],
    callout: '',
  },
  {
    id: 'yarnbazaar',
    org: 'Yarn Bazaar',
    category: 'Consulting · Operations',
    title: 'Remodelling a partner acquisition model',
    metric: '8+',
    metricLabel: 'Benchmark interviews with Urban Company',
    meta: { role: 'Consulting project', team: 'Urban Company personnel', focus: 'Partner programme design' },
    sections: [
      ['The question', [{ p: "Studied the company's **partner acquisition and retention model**, analysing training, onboarding, L&D and quality control." }]],
      ['Benchmarking', [{ p: 'Ran **8+ interviews** with Urban Company personnel to understand how their partner programme and operating framework work.' }]],
      ['Recommendation', [{ p: 'Delivered a detailed research report with recommendations to **restructure and remodel the operational paradigm** of Yarn Bazaar.' }]],
    ],
    callout: '',
  },
]

export const approach = {
  title: 'Growth is a product problem first.',
  intro: 'Start where users hesitate. Instrument the funnel, find the screen that loses them, fix it end to end with design and engineering, then measure whether it actually moved behaviour.',
  steps: [
    ['Find where users drop off', 'Instrument the funnel before optimising it. Activation and retention problems show up in event data long before they show up in revenue.'],
    ['Fix the moments that matter', 'Prioritise the screens users hit first: homepage, search, watchlist, onboarding. Small lifts there compound across every cohort.'],
    ['Specify it end to end', 'Turn feature logic into precise frontend and backend requirements, API specs and test cases, so nothing gets lost between design and engineering.'],
    ['Launch, then measure', 'Pair every release with the right communication (push, CRM, webinars) and let funded and trade-rate metrics decide what to iterate next.'],
  ],
}

export const credentials = {
  education: [
    { qualification: 'B.Com (Hons.)', institution: 'Shri Ram College of Commerce, University of Delhi', year: '2024', result: '7.2 CGPA' },
    { qualification: 'Class XII (CBSE)', institution: 'Sagar Public School, Bhopal', year: '2021', result: '98% · AIR 11' },
    { qualification: 'Class X (CBSE)', institution: 'Sagar Public School, Bhopal', year: '2019', result: '95.2%' },
  ],
  leadership: {
    role: 'Director of Consulting',
    org: 'The Marketing Society, SRCC',
    period: 'May 2022 — Oct 2022',
    copy: "Led the management consulting arm, running projects on the McKinsey 7S framework and BCG matrix. Organised the Shri Ram Marketing Mentorship Programme, helped ideate and execute the Shri Ram Marketing Summit (Asia's largest marketing festival), and hosted Peeyush Dubey, CFO at LTI.",
    stats: [
      ['16', 'Member consulting arm'],
      ['12K+', 'Summit participants'],
      ['500+', 'Schools reached'],
    ],
  },
  recognition: [
    { title: 'NISM Series V-A: Mutual Fund Distributors', detail: 'Regulatory certification', year: '2024' },
    { title: "3rd position, IRIS'22 live marketing case competition", detail: 'IIM Indore', year: '2022' },
    { title: 'Corporate Finance Fundamentals', detail: 'Corporate Finance Institute (CFI)', year: '2022' },
    { title: '3rd in school across all streams, CBSE Class XII', detail: 'Among 100+ students', year: '2021' },
    { title: '₹75,000 merit scholarship', detail: '2nd in commerce, Class XI', year: '2020' },
    { title: '₹75,000 merit scholarship', detail: 'CBSE Class X board performance', year: '2019' },
  ],
}

export const contact = {
  title: 'Have a product to grow? ',
  emphasis: "Let's talk.",
  copy: "I'm always happy to talk product-led growth, fintech, analytics, and opportunities to build products people return to.",
}
