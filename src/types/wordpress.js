/* @flow */
import type { Id } from './general';

export type PostObject = {
  id: Id,
  title: {
    rendered: string,
  },
  excerpt: {
    rendered: string,
  },
  content: {
    rendered: string,
  },
  date_gmt: string,
  featured_media: Id,
};

export type PageObject = {
  id: Id,
  slug: string,
  title: {
    rendered: string,
  },
  excerpt: {
    rendered: string,
  },
  date_gmt: string,
};

export type CategoryObject = {
  id: Id,
  slug: string,
  name: string,
  date_gmt: string,
};

export type MediaSizeObject = {
  width: number,
  height: number,
  file: string,
  mime_type: string,
  source_url: string,
};

export type MediaObject = {
  id: Id,
  slug: string,
  name: string,
  date_gmt: string,
  media_details: {
    width: number,
    height: number,
    file: string,
    sizes: {
      thumbnail: MediaSizeObject,
      medium: MediaSizeObject,
      medium_large: MediaSizeObject,
      large: MediaSizeObject,
      full: MediaSizeObject,
    },
  },
  post: Id,
  source_url: string,
};
