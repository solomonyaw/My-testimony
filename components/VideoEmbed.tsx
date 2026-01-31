
import React from 'react';

interface VideoEmbedProps {
  id: string;
  title: string;
}

export const VideoEmbed: React.FC<VideoEmbedProps> = ({ id, title }) => {
  return (
    <div className="my-8 group">
      <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-2xl transition-transform group-hover:scale-[1.01]">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p className="mt-3 text-center text-xs text-gray-500 uppercase tracking-widest font-medium">
        Video: {title}
      </p>
    </div>
  );
};
