"use client"
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter()
  return (
    <div className="bg-black p-2 ">
      <div onClick={()=>{
        router.push("/")
      }}>
        <img  className="cursor-pointer h-10" src={"https://workablehr.s3.amazonaws.com/uploads/account/open_graph_logo/604858/social?1687549873000"} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
