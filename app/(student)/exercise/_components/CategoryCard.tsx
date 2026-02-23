import { ChevronRightIcon } from "@/public/assets/icons";
import ExerciseItem from "./ExerciseItem";

interface CategoryCardProps {
  category: string;
  items: {
    id: string;
    title: string;
    subtitle: string;
    progress: number;
    variant?: "default" | "single";
  }[];
}

const CategoryCard = ({ category, items }: CategoryCardProps) => {
  return (
    <section className="bg-white rounded-lg overflow-hidden">
      <div className="flex justify-between items-center px-5 py-4 border-b border-neutral-n100">
        <h3 className="b1-b text-neutral-n900">{category}</h3>
        <button className="flex items-center gap-1 text-primary b3-b">
          Lihat Semua
          <ChevronRightIcon className="size-4" />
        </button>
      </div>

      <div className="p-5 space-y-4 divide-y divide-neutral-n100">
        {items.map((item, index) => (
          <div key={index} className={index === 0 ? "" : "pt-4"}>
            <ExerciseItem {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCard;
