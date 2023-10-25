"use client";

import { Image as ImageType } from "@/types/global";
import { Tab } from "@headlessui/react";
import { GalleryTab } from "./galleryTab";
import Image from "next/image";

interface GalleryProps {
  images: ImageType[];
}

export function Gallery({ images }: GalleryProps) {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((item, key) => (
            <GalleryTab key={key} image={item} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((item, key) => (
          <Tab.Panel key={key}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                fill
                src={item.url}
                alt="Image"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
