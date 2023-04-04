export interface HomePageApiResponse {
  id?: number | string;
  title: string;
  placement: string;
  duration: string;
  date: Date;
  tags: string[];
  description: string;
  image?: string;
}

const homePageApiResponse = [
  {
    title: "Don't Toy with Me, Miss Nagatoro 2nd Season",
    placement: 'TV',
    duration: '23m',
    date: new Date(),
    tags: ['HD', 'SUB', 'DUB'],
    description: `
    Hayase Nagatoro and Naoto Hachiouji have grown closer: the girl spends more time than ever in the art club room with her senpai. Although he is always on edge, Naoto no longer seems to mind Nagatoro's presence. Time and again, Naoto demonstrates his hidden, cool demeanor, and Nagatoro displays her possessive tendencies. However, they still can not seem to completely close the distance between them. It is clear to everyone else that the pair have feelings for each other.

For Nagatoro, there is nothing more entertaining than toying with Naoto. But as the girl shows no plans to stop teasing her senpai, it is only a matter of time before they realize how they truly feel.
`,
  },
];

// For now we have only 4 images so we should keep this in sync
for (let i = 0; i < 3; i++) {
  homePageApiResponse.push(homePageApiResponse[0]);
}

export const getHomePageData = () =>
  Promise.resolve(
    homePageApiResponse.map((film, index) => ({
      ...film,
      id: index,
    })),
  );
