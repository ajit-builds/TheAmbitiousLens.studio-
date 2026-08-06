export interface WorkVideo {
  id: string;
  title: string;
  youtubeUrl: string;
  thumbnail?: string;
  category: "Partnership with Coca-Cola" | "Partnership with Kinder Joy" | "Partnership with Santoor" | "Partnership with Asian Paints" | "Partnership with Thing";
}

export const workVideos: WorkVideo[] = [
  {
    id: "work-coca-cola",
    title: "Partnership with Coca-Cola",
    youtubeUrl: "https://www.youtube.com/watch?v=wON_BvZPSRI",
    category: "Partnership with Coca-Cola"
  },
  {
    id: "work-kinder-joy",
    title: "Partnership with Kinder Joy",
    youtubeUrl: "https://www.youtube.com/watch?v=Wg3mNx4m9UU",
    category: "Partnership with Kinder Joy"
  },
  {
    id: "work-santoor",
    title: "Partnership with Santoor",
    youtubeUrl: "https://www.youtube.com/watch?v=emuojFEjjVo",
    category: "Partnership with Santoor"
  },
  {
    id: "work-asian-paints",
    title: "Partnership with Asian Paints",
    youtubeUrl: "https://www.youtube.com/watch?v=WJkeZxgc4fw",
    category: "Partnership with Asian Paints"
  },
  {
    id: "work-thing",
    title: "Partnership with NAVI UPI",
    youtubeUrl: "https://www.youtube.com/watch?v=k9-l-fAZcgc",
    category: "Partnership with NAVI UPI"
  }
];
