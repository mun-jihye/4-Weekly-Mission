export interface FolderLink {
  id: number;
  title?: string;
  url: string;
  description?: string;
  createdAt?: string;
  created_at?: string;
  imageSource?: string;
  image_source?: string;
  folder_id?: number;
  updated_at?: string;
}
export interface FolderLinkData {
  data: FolderLink[];
}
interface Link {
  count: number;
}
export interface Category {
  id: string;
  link?: Link;
  created_at?: string;
  favorite?: boolean;
  name: string;
  user_id?: number;
}
export interface CategoryData {
  data: Category[];
}
