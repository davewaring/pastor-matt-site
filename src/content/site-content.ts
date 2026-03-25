// ============================================================
// SITE CONTENT — Edit this file to update all website content
// ============================================================
// Matt: Use Claude Code to update any of these values.
// Just say "update my bio" or "change my rates" and point
// Claude at this file.
// ============================================================

export const siteContent = {
  // ----------------------------------------------------------
  // PERSONAL INFO
  // ----------------------------------------------------------
  name: "Matt",
  fullName: "Rev. Matthew Moroney",
  title: "Guest Preacher & Pulpit Supply",
  tagline: "Faithful preaching for your congregation",
  email: "matt@example.com", // TODO: Matt to provide real email
  phone: "", // TODO: Matt to provide if desired
  location: "New Jersey",
  headshot: "/images/matt-moroney.jpg", // Update after adding photo

  // ----------------------------------------------------------
  // HERO SECTION
  // ----------------------------------------------------------
  hero: {
    headline: "Bringing God's Word to Your Congregation",
    subheadline:
      "26 years of ministry experience — from local church leadership to international missions. Available for Sunday pulpit supply across the greater New Jersey area.",
    ctaText: "Invite Me to Speak",
    ctaLink: "/contact",
  },

  // ----------------------------------------------------------
  // ABOUT / BIO
  // ----------------------------------------------------------
  about: {
    shortBio:
      "An ordained minister with the Christian and Missionary Alliance, Matt has spent 26 years in ministry — from leading outreach and spiritual formation at Risen King Church in New York to serving as an international worker across the Middle East and Europe. He brings a rich, cross-cultural perspective to the pulpit every Sunday.",
    fullBio: [
      "I'm an ordained minister with the Christian and Missionary Alliance, and I've been in ministry for over 26 years. My journey has taken me from local church leadership in New York to international relief and development work in Palestine, Jerusalem, and Barcelona.",
      "For 10 years I served with the Alliance as an International Worker, doing relief and development work across the Middle East and Europe. That experience gave me a deep appreciation for the global Church and a perspective on Scripture that's shaped by real-world encounter with God's faithfulness in every context.",
      "At Risen King Church in New City, New York, I served in multiple roles — Outreach Pastor, Spiritual Formation and Emotional Healing Leader, Home Group Leader, Ministry Team, and Trustee. I know the rhythms of the local church from the inside.",
      "I now live in New Jersey with my wife, Alicia, and our four children. When your church needs a guest preacher — whether your pastor is on vacation, sabbatical, or you're in a season of transition — I'd be honored to bring God's Word to your people.",
    ],
    philosophy:
      "I believe preaching should say yes to God — fully, honestly, and with courage. Every message I bring is rooted in Scripture and shaped by a conviction that God is inviting us into the fullness of life He has for us.",
    credentials: [
      "Ordained Reverend, Christian and Missionary Alliance (June 2014)",
      "Doctor of Educational Leadership (EdD), AI Leadership — Trevecca Nazarene University",
      "MA in Intercultural Studies — Alliance Theological Seminary",
      "MA in Biblical Literature, Hebrew Language — Alliance Theological Seminary",
      "BS in Interdisciplinary Studies, Pastoral Ministry & Philosophy — Nyack College",
    ],
  },

  // ----------------------------------------------------------
  // SERVICES
  // ----------------------------------------------------------
  services: [
    {
      name: "Sunday Morning Sermon",
      description:
        "A full Sunday morning message for your congregation. I'll arrive early, meet your team, and stay after to greet your people.",
      rate: "", // TODO: Matt to set rate
      details: [
        "30-40 minute sermon",
        "Comfortable with congregations of 20 to 1,000",
        "Happy to lead the full service or just the message",
        "Can adapt to your worship style and order of service",
        "Travel expenses covered by host church",
      ],
    },
  ],

  // ----------------------------------------------------------
  // SERMON TOPICS / STRENGTHS
  // ----------------------------------------------------------
  sermonTopics: [
    "Saying Yes to God",
    "Living in the Fullness of God",
    "Identity in Jesus",
  ],
  speakingStyle:
    "My preaching style is a mix of expository, narrative, conversational, and at times academic — with humor woven in. I aim to meet people where they are and take them deeper into God's Word.",

  // ----------------------------------------------------------
  // EXPERIENCE HIGHLIGHTS
  // ----------------------------------------------------------
  experienceHighlights: [
    {
      title: "26 Years in Ministry",
      description:
        "From local church leadership to international missions across three continents.",
    },
    {
      title: "10 Years International",
      description:
        "Relief and development work in Palestine, Jerusalem, and Barcelona with the C&MA.",
    },
    {
      title: "Local Church Roots",
      description:
        "Outreach Pastor, Spiritual Formation Leader, Home Group Leader, Trustee at Risen King Church.",
    },
    {
      title: "Congregations of All Sizes",
      description:
        "Experienced preaching to groups of 20 to 1,000 people.",
    },
  ],

  // ----------------------------------------------------------
  // TESTIMONIALS (add as Matt collects them)
  // ----------------------------------------------------------
  testimonials: [] as { quote: string; author: string; church: string }[],

  // ----------------------------------------------------------
  // FAQ
  // ----------------------------------------------------------
  faq: [
    {
      question: "How far in advance should I book?",
      answer:
        "I recommend reaching out at least one month in advance so we have time to discuss your church's needs and I can prepare well. That said, I understand things come up — don't hesitate to reach out even on shorter notice.",
    },
    {
      question: "Do you travel?",
      answer:
        "Yes. I'm based in New Jersey and am happy to travel to your church. I ask that the host church cover travel expenses.",
    },
    {
      question: "Can you preach on a specific topic or text?",
      answer:
        "Absolutely. I'm happy to work with your sermon series, preach on a specific passage, or choose a text that fits your church's current season.",
    },
    {
      question: "What denomination are you?",
      answer:
        "I'm an ordained minister with the Christian and Missionary Alliance (C&MA). I'm comfortable preaching in a variety of church traditions and worship styles.",
    },
    {
      question: "Do you handle the entire service or just the sermon?",
      answer:
        "Either way. I can lead the full order of service — welcome, prayer, Scripture reading, sermon, and benediction — or simply step in for the message. Whatever serves your church best.",
    },
    {
      question: "What about the fee?",
      answer:
        "Reach out and we'll work something out. I want to serve your church — finances shouldn't be a barrier.",
    },
  ],

  // ----------------------------------------------------------
  // BOOKING INFO
  // ----------------------------------------------------------
  booking: {
    method: "email", // "email" or "calcom"
    leadTime: "One month recommended",
    travelNote: "Travel expenses covered by host church",
    process:
      "Send me an email with your church name, preferred date, and any details about what you're looking for. I'll get back to you within a few days to confirm availability and discuss the service.",
  },

  // ----------------------------------------------------------
  // SOCIAL LINKS (add as needed)
  // ----------------------------------------------------------
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
  },
};
