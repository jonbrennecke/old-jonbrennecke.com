/* @flow */
import type {
  PostObject,
  PageObject,
  CategoryObject,
  MediaObject,
} from './wordpress';

export type ReceivePostsPayload = {
  posts: PostObject[],
};

export type ReceivePostPayload = {
  post: PostObject,
};

export type ReceivePagesPayload = {
  pages: PageObject[],
};

export type ReceiveCategoriesPayload = {
  categories: CategoryObject[],
};

export type ReceiveMediaPayload = {
  media: MediaObject,
};

export type ReceiveMultipleMediaPayload = {
  media: MediaObject[],
};
