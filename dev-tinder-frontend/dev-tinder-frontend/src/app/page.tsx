"use client";

// import { getData } from "@/service/http";
// import { useEffect } from "react";
// import { useAppSelector } from "@/hooks/reduxHook";
import Feed from "@/Components/Feed";

// import Image from "next/image";

export default function Home() {
  // const userdata = useAppSelector((state) => state.auth.loginData);
  // console.log(userdata);
  // useEffect(() => {
  //   if (Object.keys(userdata).length == 0) {
  //     getData("getUser/view");
  //   }
  // }, [userdata]);
  return (
    <div className="">
      <Feed />
    </div>
  );
}
