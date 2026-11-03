// TERCET LAW — site settings and shared content (rev 2026-10-31: Texas / Austin launch).
// Change a value here and every page that uses it updates on the next build.

// The attorney responsible for this website (Texas advertising rules).
// This is the ONE place to change it: the footer, the disclaimers page, llms.txt and the
// structured data all read it from here.
export const RESPONSIBLE_ATTORNEY = "Russ Michael Schmidtberger";

export const firm = {
  name: "Tercet Law",
  legalName: "Tercet Law, PLLC",
  city: "Austin",
  state: "Texas",
  license: "Licensed in Texas",
  attorney: "Russ Michaels", // the name used in page copy
  responsibleAttorney: RESPONSIBLE_ATTORNEY,
  // Phone: swap these three lines for the Texas (512/737) number once Russ picks it.
  phone: "(888) 833-2510",
  phoneHref: "tel:+18888332510",
  phoneSchema: "+1-888-833-2510",
  // Texas office address (footer, structured data). Leave street blank to show city only.
  street: "1401 Lavaca Street, Suite 211",
  zip: "78701",
  // State Bar of Texas bar number. Leave blank until the State Bar issues it; the footer,
  // disclaimers and structured data show it automatically once filled in.
  barNumber: "",
  email: "russ@tercetlaw.com",
  url: "https://www.tercetlaw.com",
  linkedin: "https://www.linkedin.com/in/russ-michaels/",
};

// Primary call to action, used on every page.
export const cta = { label: "Book your Estate Map Session", short: "Book", href: "/start" };

export const session = { name: "Estate Map Session", minutes: 45, where: "Zoom" };

// Booking (Calendly). One place for the event link used by the modal and /start.
export const booking = {
  url: "https://calendly.com/vaulthuman/tercet-law-estate-map-session",
  embed: "https://calendly.com/vaulthuman/tercet-law-estate-map-session?hide_gdpr_banner=1&hide_landing_page_details=1",
};

// Transitional call to action: the free checklist for visitors not ready to book.
export const guideCta = { label: "Get the free Texas checklist", href: "/checklist" };

// Header navigation: one-word labels. The primary button reads "Book".
export const nav = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Writing", href: "/writing/" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
];

// Client portal. Tercet Law uses Clio for Clients; Clio's own guidance is to link clients.clio.com from the firm site.
// Sign-in is passwordless: invited clients enter their email and receive a one-time link.
export const clientPortal = {
  label: "Client Login",
  href: "/login",
  url: "https://clients.clio.com/login",
  name: "Clio for Clients",
};

// StoryBrand message (SB7). The client is the hero; Tercet Law is the guide.
export const story = {
  oneLiner: "Most families put off estate planning because it feels complicated and hard to start. Tercet Law brings your whole picture into one plan, with three clear steps and a flat fee set before we begin, so the people you love know exactly what you wanted.",
  problem: {
    external: "No current will, trust or powers of attorney, and no clear picture of how everything you own would pass.",
    internal: "It feels overwhelming and uncomfortable, and it is hard to know where to start or what it will cost.",
    philosophical: "Your family should not have to guess what you wanted, or ask a court for permission to care for you.",
  },
  empathy: "Most people we talk with have meant to do this for years. That is normal. It is hard to sit down and think about, and the legal side can seem built to confuse.",
  authority: [
    { k: "Licensed in Texas", d: "Texas wills, trusts, deeds and powers of attorney, drafted under Texas law." },
    { k: "20+ years leading", d: "As a CEO, executive director and board president, before and alongside the law." },
    { k: "Flat fee, in writing", d: "Your fee is set in your engagement letter before any work begins." },
  ],
  promises: [
    "Your fee in writing before any work begins.",
    "You read every page before you sign.",
    "No pressure. We recommend the plan that fits, not the biggest one.",
  ],
  failure: [
    "Texas law, not you, decides who inherits.",
    "A court may decide who manages your affairs, or who raises your children.",
    "Your family may face delay, cost and a public probate file.",
    "A trust that was never funded protects nothing.",
  ],
  success: [
    "Your wishes are in writing, clear and complete.",
    "The people you chose can act for you without asking a court.",
    "Your family knows where everything is and what to do.",
  ],
};

// Practice areas (eight, matching the eight parts of the Whole Picture wheel). Fees: the four plans cover estate planning; everything else is a flat fee quoted after the free session.
export const servicesFeeNote = "Flat fee quoted after your Estate Map Session";
export const services = [
  {
    id: "estate-planning", title: "Estate Planning", short: "Wills, trusts, powers of attorney and directives",
    for: "Adults, parents and couples who want their wishes in writing and the right people in charge.",
    includes: [
      "Wills and revocable living trusts",
      "Statutory durable and medical powers of attorney",
      "Directive to physicians and HIPAA authorization",
      "Guardian choices for minor children",
    ],
    fee: "plans",
  },
  {
    id: "probate", title: "Probate & Estate Administration", short: "Settling an estate in Texas, step by step",
    for: "Executors and families after a death, with or without a will.",
    includes: [
      "Probating a will, including independent administration where it fits",
      "Heirship and small-estate options when there is no will",
      "Inventory, notices and paying debts",
      "Distributing property and closing the estate",
    ],
  },
  {
    id: "trust-administration", title: "Trust Administration", short: "Guidance for trustees and fiduciaries",
    for: "Successor trustees, executors and agents who have been asked to take charge.",
    includes: [
      "What you are required to do, and in what order",
      "Notices and communication with beneficiaries",
      "Records, accountings and coordination with your CPA",
      "Distributions and closing out the trust",
    ],
  },
  {
    id: "elder-law", title: "Elder Law & Incapacity Planning", short: "Planning ahead for aging and incapacity",
    for: "Older adults, and adult children helping a parent plan ahead.",
    includes: [
      "Powers of attorney and health care documents that keep decisions with people you chose",
      "Alternatives to guardianship, such as supported decision-making agreements",
      "Declaration of guardian, in case a court is ever involved",
      "Guidance for families when a parent can no longer manage alone",
    ],
  },
  {
    id: "special-needs", title: "Special Needs Planning", short: "Care for a loved one with a disability",
    for: "Families with a child or adult who has a disability.",
    includes: [
      "Supplemental needs trusts drafted to help protect eligibility for public benefits",
      "Choosing who will look after your loved one, and how",
      "Alternatives to guardianship for adult children",
      "Coordination with the rest of your family's plan",
    ],
  },
  {
    id: "business-succession", title: "Business Succession", short: "Your company inside your estate plan",
    for: "Owners of family and closely held businesses.",
    includes: [
      "Who takes over, and how ownership passes",
      "Placing business interests in your trust where it fits",
      "Review of company agreement and buy-sell terms",
      "Coordination with your CPA and financial advisor",
    ],
  },
  {
    id: "real-estate", title: "Real Estate & Deeds", short: "Texas deeds, homestead and inherited property",
    for: "Texas homeowners, and families who have inherited property.",
    includes: [
      "Transfer on death deeds",
      "Deeds to place your home in your trust",
      "Homestead questions when you plan",
      "Clearing title to inherited property",
    ],
  },
  {
    id: "digital-life", title: "Digital Life & Likeness", short: "Your accounts, your data, your AI tools, your voice and image",
    for: "Anyone with email, photos, online accounts or AI tools that know them. Which is almost everyone.",
    includes: [
      "Written authority for the person you choose to reach your digital accounts and records",
      "Who takes over your AI assistants and accounts, and what happens to what they remember",
      "Your wishes on how your name, voice and image may be used after you die",
      "A values file, and a family code word against voice-clone scams",
    ],
  },
];

// The Whole Picture: Tercet Law's approach. Eight parts of a life, each with its own keys
// (the documents and decisions that protect it). Drives the home-page wheel and the plan coverage rings.
export const picture = {
  name: "The Whole Picture",
  parts: [
    { id: "family", top: "Your", word: "Family", t: "Who you love, and who inherits", d: "Who receives what you leave, who is in charge, and who raises your children if you can't.", keys: ["Will", "Living trust", "Guardian for your children", "Beneficiary forms"], service: "estate-planning" },
    { id: "decisions", top: "Your", word: "Decisions", t: "Who decides if you can't", d: "People you trust to handle your money and talk to your doctors, without asking a court first.", keys: ["Durable power of attorney", "Medical power of attorney", "Directive to physicians", "HIPAA authorization"], service: "estate-planning" },
    { id: "home", top: "Your", word: "Home", t: "The house and the land", d: "Your homestead, a family ranch, a rental. How each one passes, and whether it has to go through court.", keys: ["Transfer on death deed", "Deed to your trust", "Texas homestead", "Inherited title"], service: "real-estate" },
    { id: "business", top: "Your", word: "Business", t: "What you built at work", d: "Who takes over, how ownership passes, and how the company fits inside the rest of your plan.", keys: ["Succession plan", "Buy-sell review", "Company agreement", "Business in your trust"], service: "business-succession" },
    { id: "digital", top: "Your", word: "Digital life", t: "Accounts, AI, voice and likeness", d: "Email, photos, the AI assistant that knows you, and your voice and image. Who can reach them, what is kept, and what may never act in your name.", keys: ["Digital assets authority", "Your AI assistant", "Voice and likeness", "Family code word"], service: "digital-life" },
    { id: "care", top: "Special", word: "Needs", t: "Someone who counts on you", d: "A child or adult with a disability, cared for by the people you choose, with benefits protected where possible.", keys: ["Supplemental needs trust", "Caregiver choices", "Benefits eligibility", "Guardianship alternatives"], service: "special-needs" },
    { id: "later", top: "Your", word: "Later years", t: "Planning for the years ahead", d: "A plan for aging that keeps choices with you and your family, so a court never has to step in.", keys: ["Declaration of guardian", "Supported decision-making", "Care decisions", "Help for adult children"], service: "elder-law" },
    { id: "loss", top: "After", word: "A loss", t: "When someone you love dies", d: "Settling an estate or carrying out a trust in Texas, one step at a time, with someone beside you.", keys: ["Probate", "Independent administration", "Heirship", "Trust administration"], service: "probate" },
  ],
};

// Free Texas estate planning checklist (the transitional CTA). Used on /checklist and in the PDF.
export const checklist = [
  {
    t: "Your people",
    items: [
      "Who depends on you: spouse, children, parents, anyone you support",
      "Who should inherit, and whether anyone needs help managing what they receive",
      "Who you trust to act for you on money matters if you cannot",
      "Who you trust to make health care decisions if you cannot",
      "Who should settle your estate (your executor or successor trustee)",
      "If you have minor children: who should raise them",
    ],
  },
  {
    t: "What you own",
    items: [
      "Your home and any other real estate, and how each is titled",
      "Bank and investment accounts",
      "Retirement accounts and life insurance, and who is named as beneficiary",
      "Business interests, and any company agreement",
      "Vehicles and valuable personal property",
      "Debts: mortgage, loans, anything others would need to know about",
    ],
  },
  {
    t: "What you already have",
    items: [
      "Any existing will or trust, and the date it was signed",
      "Powers of attorney, a directive to physicians, a HIPAA authorization",
      "Beneficiary forms that may need an update after a marriage, divorce or birth",
      "Where the originals are kept, and who knows where to find them",
    ],
  },
];

// Advertised prices are honored through this date (Texas advertising rules). Update it when prices change.
export const pricesEffectiveThrough = "March 31, 2027";

// Add-ons, quoted flat in writing (rev 11/3).
export const addOns = "Additional Texas deed $500. Supplemental needs trust, added to any plan, +$3,500.";

// Plans and prices. Prices show exactly as written here.
export const plans = [
  {
    id: "starter",
    covers: ["home", "decisions"],
    name: "Deed & POA Starter",
    tag: "One focused need",
    price: "$1,150",
    unit: "one person",
    alt: "$1,550 for a couple",
    amount: 1150,
    amountCouple: 1550,
    blurb: "One Texas deed and your powers of attorney, when you need a specific piece in place now.",
    features: [
      "One Texas deed, such as a transfer on death deed",
      "Statutory durable power of attorney",
      "Medical power of attorney",
      "A guided signing meeting",
    ],
  },
  {
    id: "foundations",
    covers: ["family", "decisions", "later"],
    name: "Foundations",
    tag: "The core documents",
    price: "$2,950",
    unit: "one person",
    alt: "$3,850 for a couple",
    amount: 2950,
    amountCouple: 3850,
    blurb: "The documents every adult should have, drafted to fit your family and signed properly.",
    features: [
      "Wills",
      "Statutory durable power of attorney",
      "Medical power of attorney",
      "Directive to physicians (the Texas living will)",
      "HIPAA authorization",
      "Declaration of guardian",
    ],
  },
  {
    id: "trust",
    covers: ["family", "decisions", "later", "home"],
    name: "Trust Plan",
    tag: "Built around a trust",
    featured: true,
    price: "$5,500",
    unit: "one person",
    alt: "$6,900 for a couple",
    amount: 5500,
    amountCouple: 6900,
    blurb: "Everything in Foundations, built around a revocable living trust that can keep assets out of probate once funded.",
    features: [
      "Everything in Foundations",
      "Revocable living trust",
      "Pour-over wills",
      "Certification of trust",
      "Funding instructions for your accounts",
      "One Texas deed to place your home in the trust",
    ],
  },
  {
    id: "legacy",
    covers: ["family", "decisions", "later", "home", "business"],
    name: "Legacy",
    tag: "Complex estates",
    from: true,
    price: "$15,000",
    amount: 15000,
    blurb: "For larger or more complex estates, business interests and charitable goals. Quoted in writing after your Estate Map Session.",
    features: [
      "Everything in the Trust Plan",
      "Planning for business interests",
      "Charitable giving goals",
      "Coordination with your CPA and financial advisor",
    ],
  },
];

// The all-in plan: every part of the whole picture, built to suit and quoted flat after the session.
// Kept out of `plans` so price summaries and ranges stay numeric.
export const wholePlan = {
  id: "whole",
  covers: ["family", "decisions", "home", "business", "digital", "care", "later", "loss"],
  name: "The Whole Picture",
  tag: "All eight parts, built to suit",
  price: "Built to suit",
  alt: "One flat fee, quoted in writing",
  blurb: "Every part of your picture in one plan, connected. Russ designs it around your family after your Estate Map Session and quotes one flat fee in writing before any work begins.",
  features: [
    "Everything in the Trust Plan",
    "Business succession and ownership planning",
    "Your digital life: accounts, AI, voice and likeness",
    "Special needs planning, with a supplemental needs trust where it fits",
    "Planning for the later years",
    "A clear roadmap for your family and trustee after a loss",
  ],
};

// One-line price summary, built from the plans above (used on /start and /faq).
export const priceSummary = plans
  .map((p) => `${p.name} ${p.from ? 'from ' : ''}${p.price}${p.alt ? ` for one person or ${p.alt.replace(' for a couple', '')} for a couple` : ''}`)
  .join(', ');
const trustPlan = plans.find((p) => p.id === 'trust');
export const trustPriceNote = `The Trust Plan is ${trustPlan.price} for one person and ${trustPlan.alt.replace(' for a couple', '')} for a couple.`;
const legacyPlan = plans.find((p) => p.from);
export const legacyPriceNote = `Legacy starts at ${legacyPlan.price} and is quoted in writing after your Estate Map Session.`;
const byAmount = [...plans].sort((a, b) => a.amount - b.amount);
export const priceRange = `${byAmount[0].price}–${byAmount[byAmount.length - 1].price}+`;

// How it works: three steps. Map → Design → Sign & Fund.
export const steps = [
  {
    n: "01", title: "Map", when: "Free · 45 minutes on Zoom",
    short: "a free 45-minute Estate Map Session on Zoom, where the client sees their whole estate on one screen",
    body: "Your free 45-minute Estate Map Session on Zoom. Russ lays out what you own, who depends on you and who you trust, on one screen you can see. You leave knowing which plan fits and its flat fee.",
  },
  {
    n: "02", title: "Design", when: "Drafts in about 10 days",
    short: "a flat-fee engagement and a plan designed with you, with drafts typically in about 10 days",
    body: "You choose a plan and sign a flat-fee engagement letter. Russ designs your plan with you, then drafts every document himself. Your drafts arrive in about 10 days, to read at your own pace.",
  },
  {
    n: "03", title: "Sign & Fund", when: "Signed in about 21 days",
    short: "a guided signing, typically within about 21 days, then help moving assets into the plan",
    body: "A guided signing meeting with the witnesses and notary your documents need, with every question answered first. Then we help you move your assets into the plan, so it holds what it is meant to hold.",
  },
];
export const timingNote = "Timing is typical, not guaranteed. Drafts and signing are counted from the day you engage Tercet Law, and depend on receiving the information the plan needs.";

// The Tercet way: a tercet is three lines that work together. Used on the home page, About and llms.txt.
export const tercet = {
  meaning: "A tercet is a set of three lines that work together.",
  promise: "We don't complicate things.",
  // Home: the three things a plan protects.
  protects: [
    { t: "You", d: "Powers of attorney and a directive to physicians keep decisions with the people you chose, if a day comes when you cannot make them yourself." },
    { t: "Your family", d: "A guardian for minor children, clear choices about who inherits and who is in charge, and fewer questions left for the people you love." },
    { t: "What you've built", d: "Your home, your accounts and your business, planned to pass the way you intend: by will, trust, deed or beneficiary form." },
  ],
  // About: your past, present and future.
  lines: [
    { k: "Your past", t: "What you've built", d: "A home, savings, a business: the work of a lifetime, written into a plan that says where it goes." },
    { k: "Your present", t: "What you want now", d: "Who acts for you if you cannot, and what you want, in documents you can read and sign with confidence." },
    { k: "Your future", t: "Who comes next", d: "The people you love, with clear instructions and the documents they need to act." },
  ],
};

// Texas FAQ. General information only. Used on /faq (and its structured data) and on the home page.
export const faqs = [
  {
    id: "will-or-trust",
    q: "Do I need a will or a living trust in Texas?",
    a: [
      "It depends on what you own and what you want. A will names who receives your property and who is in charge, and it generally goes through probate before it takes effect. A revocable living trust can pass assets without probate, as long as the assets are actually placed in it.",
      "Probate in Texas is often more manageable than in many other states, so a will-based plan is a sound choice for many families. A trust tends to make more sense if you own real estate in more than one state, want more privacy, have a blended family, or want a plan that can manage your affairs if you become unable to. Your Estate Map Session is where you find out which fits.",
    ],
  },
  {
    id: "probate",
    q: "What is probate?",
    a: [
      "Probate is the court process that confirms a will is valid and gives someone legal authority to settle the estate: gather the assets, pay the debts and distribute what is left.",
      "Many Texas estates use independent administration, which lets the executor act with less court supervision. Probate court files are generally public. Assets that pass by beneficiary designation, by right of survivorship, or through a funded trust generally pass outside probate.",
    ],
  },
  {
    id: "no-will",
    q: "What happens if I die without a will in Texas?",
    a: [
      "Texas law decides who inherits, based on your family relationships, and the result may not match what you would have chosen. In some families, for example where there are children from another relationship, a surviving spouse does not receive everything.",
      "A court also decides who settles the estate and, if your children are minors and no parent can care for them, who raises them.",
    ],
  },
  {
    id: "homestead",
    q: "What is the Texas homestead, and does my plan affect it?",
    a: [
      "Your homestead is your primary home, and Texas gives it special protections. They include a property tax exemption you apply for through your county appraisal district, and strong protection from most creditors. Homestead rules also affect who may live in the home after a death; a surviving spouse, for example, generally has the right to keep living there.",
      "Placing a Texas home in a revocable living trust is common. The deed and the trust should be drafted so those protections carry over.",
    ],
  },
  {
    id: "community-property",
    q: "Is Texas a community property state?",
    a: [
      "Yes. Property acquired during a marriage is generally community property, owned equally by both spouses. Property owned before the marriage, or received by gift or inheritance, is generally separate property. The difference shapes how a married couple's plan should be built.",
    ],
  },
  {
    id: "poa",
    q: "Which powers of attorney does a Texas plan include?",
    a: [
      "Usually two. A statutory durable power of attorney names someone to handle your finances if you cannot. A medical power of attorney names someone to make health care decisions when you cannot make them yourself.",
      "Most plans also include a directive to physicians, the Texas form of a living will, and a HIPAA authorization so the people you choose can speak with your doctors. Without these documents, your family may need to go to court to get the authority to act for you.",
    ],
  },
  {
    id: "bring",
    q: "What should I bring to my Estate Map Session?",
    a: [
      "Nothing has to be sent ahead of time, and a rough picture is enough. It helps to know the main things you own (your home, bank and investment accounts, retirement accounts, life insurance and any business interests), who depends on you, who you would trust to make decisions for you, who you want to inherit, and whether you already have wills, trusts or powers of attorney.",
    ],
  },
  {
    id: "remote",
    q: "Can I do this without coming to an office?",
    a: [
      "Mostly, yes. Your Estate Map Session and planning conversations happen on Zoom. Your signing is a guided meeting with the witnesses and notary your documents need, arranged where it is convenient for you.",
    ],
  },
];

export const faqDisclaimer = "This is general information, not legal advice. Laws change, and every family is different. Reading this page does not create an attorney-client relationship.";
