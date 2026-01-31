
export interface SectionProps {
  id: string;
  title: string;
  year?: string;
  content: string[];
  image?: string;
  imageCaption?: string;
  videoId?: string;
  videoTitle?: string;
  alignment?: 'left' | 'right';
}
