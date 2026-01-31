
import React from 'react';
import { SectionProps } from '../types';
import { VideoEmbed } from './VideoEmbed';

export const ArticleSection: React.FC<SectionProps> = ({
  id,
  title,
  year,
  content,
  image,
  imageCaption,
  videoId,
  videoTitle,
  alignment = 'left'
}) => {
  return (
    <section id={id} className="py-20 px-6 max-w-6xl mx-auto">
      <div className={`flex flex-col ${alignment === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-start`}>
        {/* Content Side */}
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            {year && <span className="text-pink-500 font-bold tracking-tighter text-lg">{year}</span>}
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight uppercase tracking-tight">
              {title}
            </h2>
            <div className="h-1 w-24 bg-pink-500" />
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            {content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {videoId && videoTitle && (
            <VideoEmbed id={videoId} title={videoTitle} />
          )}
        </div>

        {/* Media Side */}
        {image && (
          <div className="w-full md:w-2/5 lg:w-1/3">
            <div className="sticky top-28 space-y-4">
              <div className="relative group overflow-hidden rounded-2xl border border-gray-800 shadow-2xl">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <p className="text-white text-sm font-medium">{imageCaption}</p>
                </div>
              </div>
              {imageCaption && (
                <p className="text-gray-500 text-sm italic text-center px-4">
                  {imageCaption}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
