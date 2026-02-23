"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import InformationCard from "./InformationCard";
import CategoryCard from "./CategoryCard";
import ExerciseItem from "./ExerciseItem";
import { SearchIcon } from "@/public/assets/icons";

const categories = ["Semua", "TKA", "B INDO", "MTK", "IPA", "B ING"];

const mockData = [
  {
    category: "TKA",
    items: [
      {
        id: "math-tka-1",
        title: "Matematika",
        subtitle: "TKA 1",
        progress: 100,
      },
      {
        id: "indo-tka-1",
        title: "Bahasa Indonesia",
        subtitle: "TKA 1",
        progress: 100,
      },
    ],
  },
  {
    category: "MTK",
    items: [
      {
        id: "linear-algebra",
        title: "Matematika",
        subtitle: "Aljabar Linear",
        progress: 25,
      },
    ],
  },
];

const ExerciseClient = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [search, setSearch] = useState("");

  const placeholder =
    activeCategory === "Semua"
      ? "Cari materi"
      : `Cari materi ${activeCategory} kelas 9`;

  const isFiltered = activeCategory !== "Semua";

  return (
    <div className="bg-neutral-n100 min-h-screen pb-10">
      <PageHeader
        title={
          <div className="flex-1">
            <div className="relative group">
              <input
                type="text"
                placeholder={placeholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white border border-neutral-n200 rounded-[8px] p-2.5 pr-10 outline-none b2-r text-neutral-n900 placeholder:text-neutral-n400 focus:border-primary transition-all"
              />
              <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 size-5 text-neutral-n400 group-focus-within:text-primary transition-colors" />
            </div>
          </div>
        }
        showBackButton={true}
      />

      {/* Categories Section (Sticky) */}
      <div className="bg-white sticky top-[48px] z-90 border-b border-neutral-n200 py-2">
        <div className="flex gap-2 overflow-x-auto no-scrollbar px-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-2 rounded-[6px] l2-b whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-[#f6f6f6] text-neutral-n700 hover:bg-neutral-n200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="px-5 mt-4 space-y-6">
        {!isFiltered && <InformationCard />}

        <div className="space-y-6">
          {mockData
            .filter(
              (cat) =>
                activeCategory === "Semua" || cat.category === activeCategory,
            )
            .map((cat, index) => {
              if (isFiltered) {
                return (
                  <div key={index} className="space-y-4">
                    {cat.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="bg-white rounded-lg p-5">
                        <ExerciseItem {...item} variant="single" />
                      </div>
                    ))}
                  </div>
                );
              }
              return <CategoryCard key={index} {...cat} />;
            })}
        </div>
      </main>
    </div>
  );
};

export default ExerciseClient;
