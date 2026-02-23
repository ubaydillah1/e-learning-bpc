import { BookOpenIcon } from "@/public/assets/icons";

interface Announcement {
  id: string;
  title: string;
  date: string;
  time: string;
}

interface AnnouncementSectionProps {
  announcements: Announcement[];
}

const AnnouncementSection = ({ announcements }: AnnouncementSectionProps) => {
  return (
    <section className="bg-white p-5 rounded-lg">
      <h2 className="b1-b mb-4">Pengumuman</h2>

      {announcements.length > 0 ? (
        <div className="flex flex-col gap-4">
          {announcements.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 items-start bg-neutral-n50 rounded-lg"
            >
              <div className="size-8 shrink-0 flex items-center justify-center rounded-full bg-primary-p100 text-primary">
                <BookOpenIcon className="size-3.5" />
              </div>
              <div>
                <p className="b3-b">{item.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="b4-r text-neutral-n400">{item.date}</p>
                  <div className="h-3 w-px bg-neutral-n200"></div>
                  <p className="b4-r text-neutral-n400">{item.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-5 text-center text-neutral-n400">
          <p className="b2-r">Tidak ada pengumuman saat ini</p>
        </div>
      )}
    </section>
  );
};

export default AnnouncementSection;
