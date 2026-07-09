// ============================================================
//  YOUR BLOGS — this is the only file you need to edit.
//
//  Each section has a "title" and a list of "blogs".
//  Each blog has:
//    name  – the blog or author's name (required)
//    url   – the link it opens (required)
//    note  – an optional one-line description (can be left out)
//    feed  – OPTIONAL. The RSS feed address, used to show the
//            latest posts. For Substack you can usually leave
//            this out — it auto-tries <url>/feed. Only set it if
//            the "Latest posts" line says it couldn't load.
//
//  To add a blog: copy a line, paste it, change the text.
//  To add a section: copy a whole { ... } block.
//  Save the file and refresh the page in your browser.
// ============================================================

// RECOMMENDATIONS: the short list shown to everyone who is NOT signed in.
const RECOMMENDATIONS = [
  { name: "Astral Codex Ten", url: "https://www.astralcodexten.com/", note: "Scott Alexander — rationality, science, society" },
  { name: "Bentham's Bulldog", url: "https://benthams.substack.com/", note: "Utilitarianism, ethics, effective altruism" },
  { name: "80,000 Hours", url: "https://80000hours.substack.com/", note: "High-impact careers and cause areas" },
  { name: "EA Forum", url: "https://forum.effectivealtruism.org/", feed: "https://forum.effectivealtruism.org/feed.xml", note: "Effective Altruism Forum — frontpage posts" },
];

// SECTIONS: your full curated list. Signed-in users can import this whole
// set into their own account with one click ("Import recommended starter set").
const SECTIONS = [
  {
    title: "Most Read",
    blogs: [
      { name: "Astral Codex Ten", url: "https://www.astralcodexten.com/", note: "Scott Alexander — rationality, science, society" },
      { name: "Bentham's Bulldog", url: "https://benthams.substack.com/", note: "Utilitarianism, ethics, effective altruism" },
    ],
  },
  {
    title: "Rationality & Philosophy",
    blogs: [
      { name: "Slate Star Codex", url: "https://slatestarcodex.com/", feed: "https://slatestarcodex.com/feed/", note: "Scott Alexander's archived blog (no longer updated)" },
      { name: "Thing of Things", url: "https://thingofthings.substack.com/", note: "Ozy Brennan — ethics, EA, culture" },
      { name: "Dynomight", url: "https://dynomight.substack.com/", note: "Careful, curious essays on everything" },
      { name: "Good Thoughts", url: "https://www.goodthoughts.blog/", note: "Richard Yetter Chappell — moral philosophy" },
      { name: "Going AWOL", url: "https://wollenblog.substack.com/", note: "Amos Wollen — philosophy, wittily" },
    ],
  },
  {
    title: "Effective Altruism & Global Priorities",
    blogs: [
      { name: "80,000 Hours", url: "https://80000hours.substack.com/", note: "High-impact careers and cause areas" },
      { name: "RP Research Digest", url: "https://rpresearchdigest.substack.com/", note: "Rethink Priorities — research, condensed" },
      { name: "Good Bones", url: "https://acotra.substack.com/", note: "Ajeya Cotra — EA thinking and practice" },
      { name: "Forethought", url: "https://forethought.org/", note: "Research on navigating the transition to advanced AI" },
      { name: "Forethought Newsletter", url: "https://newsletter.forethought.org/", note: "Forethought's essays and updates by email" },
      { name: "From Matter", url: "https://frommatter.substack.com/", note: "Matt Reardon — EA, AI, politics, philosophy" },
      { name: "Andy Masley", url: "https://blog.andymasley.com/", note: "AI, environment, EA, rationality" },
      { name: "Celeste-land", url: "https://ceselder.substack.com/", note: "Celeste, AIS, other things" },
      { name: "The Update", url: "https://www.update.news/" },
    ],
  },
  {
    title: "Animal Welfare – Research",
    blogs: [
      { name: "Coefficient Giving — Farm Animal Welfare", url: "https://farmanimalwelfare.substack.com/", note: "Lewis Bollard on helping factory-farmed animals" },
      { name: "RP Strategic Animal Insights", url: "https://rpstrategicanimalinsights.substack.com/", note: "Rethink Priorities — animal research for advocates" },
      { name: "Alt Protein Planet", url: "https://thegoodfoodinstitute.substack.com/", note: "Good Food Institute — alternative proteins" },
      { name: "Animal Think Tank Newsletter", url: "https://animalthinktank.substack.com/", note: "Narrative & movement strategy for animals" },
      { name: "regressiontothemeat", url: "https://regressiontothemeat.substack.com/", note: "Seth Ariel Green — meat-reduction research" },
      { name: "Anima International", url: "https://animainternational.substack.com/", note: "Animal advocacy, alignment" },
      ],
  },
  {
  title: "Animal Welfare – Organisations",
  blogs: [
  { name: "Sentient Futures", url: "https://sentientfutures.substack.com/", note: "AI and the welfare of sentient beings" },
      { name: "Hive", url: "https://joinhive.substack.com/", note: "Biweekly farmed-animal movement roundup" },
     ],
  },
  {
  title: "Animal Welfare – Other",
  blogs: [
  { name: "Sandcastles", url: "https://sandcastlesblog.substack.com/", note: "Aidan Kankyoku — animal advocacy strategy" },
  { name: "Frontier Animals", url: "https://frontieranimals.substack.com/", note: "Itsi Weinstock — ending factory farming, AI" },
  { name: "The Simple Heart", url: "https://simpleheart.substack.com/", note: "Wayne Hsiung — compassion & investigations" },
     ],
  },
  {
    title: "AI Safety",
    blogs: [
      { name: "AI Safety Newsletter", url: "https://newsletter.safe.ai/", note: "Center for AI Safety — weekly roundup" },
      { name: "ControlAI", url: "https://controlai.news/", note: "Keeping humanity in control of AI" },
      { name: "Redwood Research Blog", url: "https://blog.redwoodresearch.org/", note: "AI control & catastrophic-risk research" },
      { name: "The Power Law", url: "https://peterwildeford.substack.com/", note: "Peter Wildeford — AI, forecasting, policy" },
      { name: "Don't Worry About The Vase", url: "https://thezvi.substack.com/", note: "Zvi Mowshowitz"},
      { name: "AI Safety Events & Training", url: "https://aisafetyeventsandtraining.substack.com/", note: "Weekly roundup of events, courses and fellowships" },
    ],
  },
  {
    title: "Economics & Policy",
    blogs: [
      { name: "Noahpinion", url: "https://www.noahpinion.blog/", note: "Noah Smith — economics and current events" },
      { name: "By the Numbers", url: "https://hannahritchie.substack.com/", note: "Hannah Ritchie — sustainability, data-driven" },
    ],
  },
  {
    title: "Research",
    blogs: [
      { name: "Appetite", url: "https://www.sciencedirect.com/journal/appetite", feed: "https://rss.sciencedirect.com/publication/science/01956663", note: "Journal — eating behaviour and food choice" },
      { name: "Nature Food", url: "https://www.nature.com/natfood/", feed: "https://www.nature.com/natfood.rss", note: "Journal — food science, policy and sustainability" },
      { name: "Faunalytics", url: "https://faunalytics.org/category/blog/", feed: "https://faunalytics.org/category/blog/feed/", note: "Research for effective animal advocacy" },
      { name: "Bryant Research", url: "https://bryantresearch.co.uk/insights/", feed: "https://bryantresearch.co.uk/insights/feed/", note: "Insights on the future of food and diets" },
    ],
  },
  {
    title: "Forums",
    blogs: [
      { name: "EA Forum", url: "https://forum.effectivealtruism.org/", feed: "https://forum.effectivealtruism.org/feed.xml", note: "Effective Altruism Forum — frontpage posts" },
      { name: "LessWrong", url: "https://www.lesswrong.com/", feed: "https://www.lesswrong.com/feed.xml", note: "Rationality community — frontpage posts" },
    ],
  },
];