"use client";

import Image from "next/image";

interface EmptyStateProps {
  title: string;
  description: string;
  imagePath: string;
}

const EmptyState = ({ title, description, imagePath }: EmptyStateProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 shadow-sm min-w-full">
      <div className="relative w-full aspect-square">
        <Image
          src={imagePath}
          alt="Illustration"
          fill
          className="object-contain"
        />
      </div>
      <div className="space-y-2">
        <h3 className="b1-b text-neutral-n900">{title}</h3>
        <p className="b2-r text-neutral-n500">{description}</p>
      </div>
    </div>
  );
};

export default EmptyState;
