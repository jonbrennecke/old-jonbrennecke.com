/* @flow */
import React from 'react';
import classnames from 'classnames';

import Navigation from '../navigation/Navigation';
import HeroPostExcerpt from '../hero-post-excerpt/HeroPostExcerpt';
import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from '../layout/horizontally-centered/HorizontallyCentered';

// $FlowFixMe
import './Hero.scss';

import type Post from '../../models/Post';
import type CategoryCollection from '../../models/CategoryCollection';
import type MediaCollection from '../../models/MediaCollection';

type Props = {
  className?: ?string,
  post: ?Post,
  categories: CategoryCollection,
  media: MediaCollection,
  colorScheme?: 'violet' | 'teal' | 'pink',
};

export default function Hero({
  className,
  colorScheme,
  post,
  categories,
  media,
}: Props) {
  const image = post && media.findById(post.featuredMedia);
  return (
    <header className={classnames('hero', colorScheme || 'pink', className)}>
      <div className="hero-background">
        <div className="top-gradient" />
        <div className="bottom-gradient" />
        {image && (
          <div
            style={{ backgroundImage: `url(${image.fullSourceUrl})` }}
            className="hero-background-image"
          />
        )}
      </div>
      <HorizontallyCentered className="hero-container">
        <ContentMaxWidth>
          <Navigation colorScheme={colorScheme} />
          {post && (
            <HeroPostExcerpt
              key={post.id}
              id={post.id}
              post={post}
              categories={categories}
              colorScheme={colorScheme}
            />
          )}
        </ContentMaxWidth>
      </HorizontallyCentered>
    </header>
  );
}
