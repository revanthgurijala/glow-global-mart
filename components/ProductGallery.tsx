"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react";
import { createImageUrlBuilder } from "@sanity/image-url";
import { createClient } from "next-sanity";

// Connect to Sanity just to build the image URLs
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// FIX for the terminal warning: using createImageUrlBuilder
const builder = createImageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default function ProductGallery({
  images,
  video,
}: {
  images: any[];
  video: string | null;
}) {
  // State to track which media is currently selected (starts with video if available, else first image)
  const [activeMedia, setActiveMedia] = useState({
    type: video ? "video" : "image",
    src: video || (images && images.length > 0 ? images[0] : null),
  });

  return (
    <div className="flex flex-col gap-4">
      {/* MAIN LARGE VIEWING AREA */}
      {/* We removed the flex/padding from the parent and added absolute positioning to the child */}
      <div className="w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-square bg-white rounded-3xl overflow-hidden relative border border-emerald-100 shadow-sm">
        {/* THIS is the straitjacket. absolute inset-0 forces it to NEVER push the boundaries. */}
        <div className="absolute inset-0 p-4 sm:p-8 flex items-center justify-center">
          {activeMedia.src ? (
            activeMedia.type === "video" ? (
              <video
                src={activeMedia.src}
                className="w-full h-full object-contain rounded-xl"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <img
                src={urlFor(activeMedia.src).url()}
                alt="Product detail"
                className="w-full h-full object-contain"
              />
            )
          ) : (
            <div className="text-emerald-300 font-bold">No Image Available</div>
          )}
        </div>
      </div>

      {/* THUMBNAIL TRAY */}
      <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
        {/* Video Thumbnail (if exists) */}
        {video && (
          <div
            onClick={() => setActiveMedia({ type: "video", src: video })}
            className={`w-20 h-20 shrink-0 rounded-2xl bg-black border-2 flex items-center justify-center relative overflow-hidden cursor-pointer transition-colors ${activeMedia.src === video ? "border-emerald-500" : "border-transparent"}`}
          >
            <video
              src={video}
              className="w-full h-full object-cover opacity-50"
              muted
              playsInline
            />
            <PlayCircle className="w-8 h-8 text-white absolute z-10" />
          </div>
        )}

        {/* Image Thumbnails */}
        {images?.map((img: any, index: number) => (
          <div
            key={index}
            onClick={() => setActiveMedia({ type: "image", src: img })}
            className={`w-20 h-20 shrink-0 rounded-2xl border-2 overflow-hidden cursor-pointer transition-colors bg-white ${activeMedia.src === img ? "border-emerald-500 shadow-md" : "border-emerald-100 hover:border-emerald-300"}`}
          >
            <img
              src={urlFor(img).width(200).url()}
              alt={`thumbnail ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
