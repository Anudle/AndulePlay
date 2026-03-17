export interface Game {
  id: string;
  title: string;
  developer: string;
  category: string;
  rating: number;
  reviewCount: number;
  price: number | 'Free';
  iconUrl: string;
  bannerUrl: string;
  coverUrl?: string;
  description: string;
  tagline?: string;
  badge?: string;
  tags: string[];
  isFeatured?: boolean;
  themeColor?: string;
}

export interface Category {
  id: string;
  label: string;
}
