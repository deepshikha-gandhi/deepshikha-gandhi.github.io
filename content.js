/*
 * ─────────────────────────────────────────────────────────────
 *  YOUR CONTENT LIVES HERE.
 *  Edit this file to update the site — no HTML needed.
 *
 *  To add an achievement: copy one block in `achievements`,
 *  paste it at the TOP of the list, and edit it.
 * ─────────────────────────────────────────────────────────────
 */
window.SITE = {
  profile: {
    name: "Deepshikha Gandhi",
    title: "Platform, Architecture & AI Engineering Leader",
    tagline:
      "I set platform, architecture and cloud strategy for the platforms engineering teams ship on — and turn that strategy into dependable execution.",
    location: "Detroit, MI (Remote)",
    availability: "", // e.g. "Open to platform leadership roles and consulting" — leave "" to hide
    email: "contact.deepshikhagandhi@gmail.com",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/deepshikha-gandhi-69708159/" },
      // { label: "GitHub", url: "https://github.com/your-handle" },
      // { label: "Resume (PDF)", url: "resume.pdf" }, // add a public copy of your resume next to index.html
    ],
  },

  about: [
    "Technology leader with 13+ years across infrastructure, platform engineering and engineering leadership, including 5+ years building and leading teams across the US and India.",
    "At Deloitte I set platform, architecture and cloud strategy for a self-service, multi-cloud internal developer platform that underpins the firm's engineering foundation across 1,000+ environments for internal and client teams.",
    "I turn strategy into dependable execution: modernizing how software ships, raising the bar on reliability and security, and leading the shift to AI-assisted, agentic engineering with the guardrails a regulated enterprise needs. A player-coach, as at home in an executive review as in a design review or a production incident.",
    "I also help teams get their cloud bill under control. I've cut roughly $1M a year from spend across AWS, GCP and Azure, and with AI adoption pushing compute costs up fast, building cost visibility and guardrails into the platform early matters more than ever.",
  ],

  // Headline numbers shown near the top. Keep to 3–4.
  stats: [
    { value: "13+ yrs", label: "Infrastructure, platform & engineering leadership" },
    { value: "1–2 days", label: "Release lead time, down from weeks" },
    { value: "1,000+", label: "Clusters on the Kubernetes foundation I built" },
    { value: "~$1M/yr", label: "Cloud spend cut across AWS, GCP & Azure" },
  ],

  expertise: [
    {
      area: "Platform & Architecture Strategy",
      items: ["Internal developer platforms", "Vision & roadmap", "Standards", "GCP", "AWS", "Azure"],
    },
    {
      area: "Engineering Effectiveness",
      items: ["Delivery model design", "Trunk-based development", "Immutable releases", "Environment parity", "CI/CD"],
    },
    {
      area: "Reliability, Security & Risk",
      items: ["Kubernetes", "Least privilege", "Certificate automation", "Root-cause discipline", "Regulated enterprise"],
    },
    {
      area: "AI & Agentic Engineering",
      items: ["AI-assisted development", "Claude", "Tooling & enablement", "Verification guardrails"],
    },
    {
      area: "Cloud Cost Optimization (FinOps)",
      items: ["~$1M/yr saved", "Spend visibility", "Right-sizing", "Spot capacity", "Spotinst", "CloudHealth", "AI workload costs"],
    },
    {
      area: "Infrastructure as Code",
      items: ["Terraform", "Codefresh", "Jenkins", "Linux at scale", "Hadoop / Spark"],
    },
    {
      area: "Leadership",
      items: ["Hiring & growing leaders", "US–India teams", "Executive & client communication", "Vendor strategy"],
    },
  ],

  /*
   * Achievements / career milestones — newest first.
   * `tags` power the filter buttons; reuse the same tag words.
   * `link` is optional (case study, talk, article…).
   */
  achievements: [
    {
      date: "2025–",
      title: "Leading the shift to AI-assisted, agentic engineering",
      org: "Deloitte · Internal Developer Platform",
      summary:
        "Introduced Claude for investigation, code review and release analysis, with standards and verification guardrails that keep AI-generated changes trustworthy and reviewable.",
      impact: [],
      tags: ["AI", "Leadership"],
      link: "",
    },
    {
      date: "2025–",
      title: "Redesigned how software ships",
      org: "Deloitte · Internal Developer Platform",
      summary:
        "Authored and led adoption of trunk-based delivery with immutable release promotion and environment parity.",
      impact: ["Release lead time: weeks → 1–2 days"],
      tags: ["Delivery", "Platform"],
      link: "",
    },
    {
      date: "2025–",
      title: "Raised workspace provisioning success from 50% to 90%",
      org: "Deloitte · Internal Developer Platform",
      summary:
        "Built a forward-deployed model for production issues, connecting users with platform, application and QA teams.",
      impact: ["Provisioning success: 50% → 90%"],
      tags: ["Reliability", "Platform"],
      link: "",
    },
    {
      date: "2025–",
      title: "Grew a secure Kubernetes foundation to 1,000+ clusters",
      org: "Deloitte · Ascend Engineering Foundation",
      summary:
        "Took the Kubernetes foundation from a small-team initiative to the backbone of a multi-cloud developer platform across GCP, AWS and Azure.",
      impact: ["1,000+ clusters", "1,000+ environments", "Hundreds of workspaces"],
      tags: ["Platform", "Cloud"],
      link: "",
    },
    {
      date: "2025–",
      title: "Hardened platform security and reliability at scale",
      org: "Deloitte · Internal Developer Platform",
      summary:
        "Removed hardcoded credentials, closed network exposure, applied least-privilege controls, automated the certificate lifecycle and upgraded Kubernetes across the fleet.",
      impact: [],
      tags: ["Security", "Reliability"],
      link: "",
    },
    {
      date: "2025",
      title: "Built and lead a 15+ person platform team",
      org: "Deloitte · Platform Services",
      summary:
        "Architects and engineers owning the Platform Services layer for dozens of teams, with a roadmap aligned to product, client and executive priorities.",
      impact: ["15+ architects & engineers"],
      tags: ["Leadership"],
      link: "",
    },
    {
      date: "2023–25",
      title: "Multi-cloud accelerator for a 10,000+ engineer network",
      org: "Deloitte Digital · Engineering Acceleration",
      summary:
        "Defined the strategy for a reusable, Kubernetes-based multi-cloud accelerator for Deloitte Consulting, owning product vision, roadmap and release cadence, while leading a 12+ person team across the US and India.",
      impact: ["80% less duplicated build effort", "30+ projects", "12+ person US–India team"],
      tags: ["Platform", "Cloud", "Leadership"],
      link: "",
    },
    {
      date: "2021–23",
      title: "Led DevOps for an AI/ML customer-data product",
      org: "Hux by Deloitte Digital",
      summary:
        "Owned scope, roadmap, budget and timelines, and set the multi-cloud infrastructure architecture and automation strategy for production AI/ML workloads.",
      impact: [],
      tags: ["AI", "Cloud", "Leadership"],
      link: "",
    },
    {
      date: "2016–21",
      title: "Cut ~$1M a year from multi-cloud spend",
      org: "Magnetic · Hux by Deloitte Digital",
      summary:
        "Led cloud cost optimization across AWS, GCP and Azure. Used Spotinst, CloudHealth and each cloud's native cost reporting to find where spend was going, then right-sized compute, moved suitable workloads to spot capacity and removed idle and over-provisioned resources, without giving up reliability.",
      impact: ["~$1M annual savings", "3 clouds"],
      tags: ["FinOps", "Cloud"],
      link: "",
    },
    {
      date: "2016–18",
      title: "Ran 1,000+ Linux servers at 99.99% uptime",
      org: "Magnetic",
      summary: "Ran AWS infrastructure and Hadoop/Spark data infrastructure.",
      impact: ["1,000+ servers", "99.99% uptime"],
      tags: ["Reliability", "Cloud"],
      link: "",
    },
  ],

  // Roles, newest first.
  experience: [
    {
      role: "Technical Manager, Internal Developer Platform",
      org: "Deloitte",
      period: "Mar 2025 – Present",
      summary:
        "Lead platform strategy, architecture and delivery for the Ascend Engineering Foundation, the self-service, multi-cloud internal developer platform behind Deloitte's engineering work for internal and client teams.",
    },
    {
      role: "Manager, DevOps Product Architecture (Engineering Acceleration)",
      org: "Deloitte Digital",
      period: "Mar 2023 – Mar 2025",
      summary:
        "Led a 12+ person team across the US and India, owning hiring, development and promotions. Shaped technology and vendor strategy and represented the platform to clients and partners.",
    },
    {
      role: "Manager, DevOps Product Architecture",
      org: "Hux by Deloitte Digital",
      period: "May 2021 – Mar 2023",
      summary: "Led DevOps and infrastructure for an AI/ML customer-data product.",
    },
    {
      role: "DevOps Product Architect 2",
      org: "Hux by Deloitte Digital",
      period: "Sep 2018 – May 2021",
      summary:
        "Joined through Deloitte's acquisition of Magnetic's AI platform. Built infrastructure as code on AWS, GCP and Azure with Terraform, and CI/CD with Codefresh and Jenkins.",
    },
    {
      role: "Earlier roles",
      org: "Magnetic · Pindrop · AirSage · Internap",
      period: "2013 – 2018",
      summary:
        "Staff DevOps Engineer at Magnetic; migrated QA infrastructure to hybrid AWS and colocation at Pindrop; operations software at AirSage; DevOps intern at Internap.",
    },
  ],

  certifications: [
    { name: "M.S., Electrical and Computer Engineering — Georgia Institute of Technology", year: "2013" },
    { name: "B.Tech., Electronics and Communication Engineering — Guru Gobind Singh Indraprastha University", year: "2012" },
    { name: "AWS Certified Solutions Architect – Associate", year: "" },
  ],

  // Talks, articles, open source. Set to [] to hide.
  writing: [
    // { title: "Talk or article title", where: "Conference / blog", year: "2026", url: "https://…" },
  ],
};
