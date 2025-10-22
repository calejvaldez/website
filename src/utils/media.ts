export type Media = {
  label: string;
  note: string;
  url?: string;
};

export const mediaCollection: Media[] = [
  {
    label: "Oppenheimer (2023)",
    note: "This movie showed me the beauty and dangers of academic research, while showing the human within the researchers themselves. It inspired me to do academic research, which led to my involvement in UC Irvine's Undergraduate Research Lab.",
  },
  {
    label: "Financial Audit (2022)",
    note: "Caleb Hammer's Financial Audit helped me better understand money in a dramatic yet entertaining way. Understanding money, debt, and consumer culture is an absolute must in the United States, and Caleb made it consumable.",
    url: "https://www.youtube.com/@CalebHammer/",
  },
  {
    label: "Gazi's video (2021)",
    note: "I watched Gazi's video at a time when I was unsure of what to pursue. This convinced me to become a software developer, as well as to be excited for my academic journey in software.",
    url: "https://www.tiktok.com/@gazi.ai/video/6985345810724588806",
  },
  {
    label: "The Social Dilemma (2020)",
    note: "These are interviews and dramatic interpretation of the dangers of social media, and how tech companies manipulate our brains. I think it's important to know about this *before* participating in social media.",
    url: "https://www.netflix.com/watch/81254224/",
  },
  {
    label: "History 101: Robots (2020)",
    note: "The episode gave me an introduction to how computing is used in the real world, and the different applications it can have that isn't just a website or an app. The good, the bad, and the deadly. It made me want to make my mark in software history, one way or another.",
    url: "https://www.netflix.com/watch/81187213",
  },
  {
    label: "Steve Jobs (2015)",
    note: "I used to be a big fan of Steve Jobs in high school because I looked up to his obsession with a product being *good* rather than being marketable, even if it was just a tiny detail.",
    url: "https://www.legendary.com/film/steve-jobs/",
  },
];
