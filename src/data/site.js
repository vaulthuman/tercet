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
  phone: "(888) 833-2510",
  phoneHref: "tel:+18888332510",
  phoneSchema: "+1-888-833-2510",
  email: "russ@tercetlaw.com",
  url: "https://www.tercetlaw.com",
  linkedin: "https://www.linkedin.com/in/russ-michaels/",
};

// Primary call to action, used on every page.
export const cta = { label: "Book your Estate Map Session", href: "/start" };

export const session = { name: "Estate Map Session", minutes: 45, where: "Zoom" };

// Plans and prices. Prices show exactly as written here.
export const plans = [
  {
    id: "starter",
    name: "Deed & POA Starter",
    tag: "One focused need",
    price: "$750",
    amount: 750,
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
    name: "Foundations",
    tag: "The core documents",
    price: "$2,500",
    amount: 2500,
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
    name: "Trust Plan",
    tag: "Built around a trust",
    featured: true,
    price: "$4,500",
    unit: "one person",
    alt: "$5,500 for a couple",
    amount: 4500,
    amountCouple: 5500,
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
    name: "Legacy",
    tag: "Complex estates",
    from: true,
    price: "$12,500",
    amount: 12500,
    blurb: "For larger or more complex estates, business interests and charitable goals. Quoted in writing after your Estate Map Session.",
    features: [
      "Everything in the Trust Plan",
      "Planning for business interests",
      "Charitable giving goals",
      "Coordination with your CPA and financial advisor",
    ],
  },
];

// One-line price summary, built from the plans above (used on /start and /faq).
export const priceSummary = plans
  .map((p) => `${p.name} ${p.from ? 'from ' : ''}${p.price}${p.alt ? ` for one person or ${p.alt.replace(' for a couple', '')} for a couple` : ''}`)
  .join(', ');
const trustPlan = plans.find((p) => p.id === 'trust');
export const trustPriceNote = `The Trust Plan is ${trustPlan.price} for one person and ${trustPlan.alt.replace(' for a couple', '')} for a couple.`;

// How it works: Map → Design → Sign → Fund.
export const steps = [
  {
    n: "01", title: "Map", when: "Within 3 days",
    body: "Your free 45-minute Estate Map Session on Zoom. Russ lays out what you own, who depends on you and who you trust, on one screen you can see. You leave knowing which plan fits and its flat fee.",
  },
  {
    n: "02", title: "Design", when: "Drafts in 10 days",
    body: "You choose a plan and sign a flat-fee engagement letter. Russ designs and drafts every document himself, and you get drafts in plain English to read at your own pace.",
  },
  {
    n: "03", title: "Sign", when: "Signed within 21 days",
    body: "A guided signing meeting with the witnesses and notary your documents need. Every question answered before you sign a page.",
  },
  {
    n: "04", title: "Fund", when: "Right after signing",
    body: "A trust only works if it holds your assets. You get clear funding instructions, and the Trust Plan includes one Texas deed to place your home in the trust.",
  },
];
export const timingNote = "Timing is typical, not guaranteed. Drafts and signing are counted from the day you engage Tercet Law, and depend on receiving the information the plan needs.";

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
