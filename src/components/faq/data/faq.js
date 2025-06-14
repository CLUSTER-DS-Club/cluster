// src/data/faqs.js
// Seed this with common questions. Maintainers can edit later.

export const faqs = [
  {
    id: "what-is-cluster",
    category: "General",
    question: "What is CLUSTER?",
    answer: `CLUSTER is the Data Science Club’s official website, showcasing events, projects, and opportunities. It’s a community-driven platform where students collaborate on data-science-related initiatives, share knowledge, and build real-world solutions.`,
  },
  {
    id: "how-to-join",
    category: "Membership",
    question: "How can I join the Data Science Club?",
    answer: `You can join by attending one of our recruitment drives or filling out the membership form when recruitment is open. Keep an eye on our social media or GitHub issues for announcements. Once selected, you’ll get access to our projects and resources.`,
  },
  {
    id: "tech-stack-used",
    category: "Tech",
    question: "What tech stack is used for the CLUSTER website?",
    answer: `The website is built with React.js for UI, Tailwind CSS for styling, Framer Motion for animations, and React Router for navigation. The backend (if any) may use Node.js, but the main site is a static/front-end React app deployed on platforms like Vercel or Netlify.`,
  },
  {
    id: "how-to-contribute",
    category: "Contribution",
    question: "How do I contribute to projects under CLUSTER?",
    answer: `Browse the GitHub repo’s Issues page. Issues tagged 'Task' are planned by maintainers. Comment “May I work on this?” to get assigned. For large tasks, create separate sub-issues as instructed by the admin, tag the parent issue number, and then submit PRs. Follow the code style & project conventions.`,
  },
  {
    id: "events-and-workshops",
    category: "Events",
    question: "How can I know about upcoming events or workshops?",
    answer: `We announce events on our website’s Events page and social channels. You can also check the ‘Events’ section on the site, or subscribe to our newsletter (if available). Keep monitoring the repo issues or Slack/Discord for real-time updates.`,
  },
  // Add more FAQs here...
];
