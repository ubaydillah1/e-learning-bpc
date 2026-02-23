"use client";

import BodyWrapper from "./_components/BodyWrapper";
import Header from "./_components/Header";
import InformationAcademicCTA from "./_components/InformationAcademicButton";
import NavbarBottom from "./_components/NavbarBottom";

const StudentPage = () => {
  return (
    <>
      <Header />
      <InformationAcademicCTA />
      <BodyWrapper />
      <NavbarBottom />
    </>
  );
};

export default StudentPage;
