const MobileWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="sm:hidden mx-auto w-full min-h-screen px-6">
        {children}
      </div>
      <div className="hidden h-screen w-screen sm:flex justify-center items-center bg-background text-primary font-bold text-3xl">
        This content is only visible on mobile
      </div>
    </>
  );
};

export default MobileWrapper;
