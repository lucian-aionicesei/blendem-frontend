export interface HomeContent {
  heading: string;
  hero_video: string;
}
export interface Response {
  data: Data;
  headers: Headers;
  perPage: number;
  total: number;
}

export interface Data {
  stories: Story[];
  cv: number;
  rels: any[];
  links: any[];
}

export interface Story {
  name: string;
  created_at: Date;
  published_at: Date;
  id: number;
  uuid: string;
  content: Content;
  slug: string;
  full_slug: string;
  sort_by_date: null;
  position: number;
  tag_list: any[];
  is_startpage: boolean;
  parent_id: number;
  meta_data: null;
  group_id: string;
  first_published_at: Date;
  release_id: null;
  lang: string;
  path: null;
  alternates: any[];
  default_full_slug: null;
  translated_slugs: null;
}

export interface Content {
  _uid: string;
  heading: string;
  component: string;
  hero_video: HeroVideo;
  slider_images: ImageAsset[];
}

export interface HeroVideo {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  meta_data: MetaData;
  is_external_url: boolean;
}

export interface ImageAsset {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  meta_data: MetaData;
}

export interface MetaData {}

export interface Headers {
  "cache-control": string;
  "content-length": string;
  "content-type": string;
  "per-page": string;
  total: string;
}
