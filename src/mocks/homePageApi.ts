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
    title: 'Some anime title will be here in future',
    placement: 'TV',
    duration: '23m',
    date: new Date(),
    tags: ['HD', 'SUB', 'DUB'],
    description: `
      Get ready for an anime experience like no other! We're excited to announce that a new anime title is coming soon, and it's one that you won't want to miss. Though we can't reveal too much just yet, we can promise that this anime will feature stunning animation, unforgettable characters, and an epic story that will keep you hooked from beginning to end.In a world where magic and technology coexist, a group of unlikely heroes must band together to save their kingdom from a powerful and mysterious threat. As they journey through dangerous lands and face treacherous enemies, they must learn to work together and harness their unique abilities to overcome seemingly impossible obstacles. Along the way, they discover the true meaning of friendship, courage, and sacrifice, and their bond grows stronger with each passing challenge. With stunning visuals and heart-pounding action, this epic anime adventure is sure to leave you on the edge of your seat until the very end.`,
  },
];

// For now we have only 8 images so we should keep this in sync
for (let i = 0; i < 7; i++) {
  homePageApiResponse.push(homePageApiResponse[0]);
}

export const getHomePageData = () =>
  Promise.resolve(
    homePageApiResponse.map((film, index) => ({
      ...film,
      id: index,
    })),
  );
