"use client";

import FilterCard from "./FilterCard";
import ScheduleCard from "./SceduleCard";
import EmptyState from "./EmptyState";

const BodyWrapper = () => {
  return (
    <div className="space-y-4">
      <FilterCard />
      <EmptyState />
      {/* <ScheduleCard /> */}
    </div>
  );
};

export default BodyWrapper;
