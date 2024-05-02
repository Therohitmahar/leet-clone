"use client";
import Navbar from "@/components/navbar/Navbar";
import WorkSpace from "@/components/workSpace/WorkSpace";
import React from "react";

const page = () => {
  // const pathname = useParams();
  // console.log(pathname);
  return (
    <>
      <Navbar />
      <WorkSpace />
    </>
  );
};

export default page;
