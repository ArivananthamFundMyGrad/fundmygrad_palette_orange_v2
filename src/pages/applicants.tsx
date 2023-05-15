import Bankportal from "@/components/ApplicantsComp";
import Sidebar from "@/components/reusable/Sidebar";
import { useMediaQuery } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

function applicants() {
  const [isMobile] = useMediaQuery('(max-width: 767px)')  

  return (
    <div className="flex w-full">
      <Head>
        <title>Dashboard</title>
      </Head>
      {!isMobile && <Sidebar />}
      <div className="w-full flex justify-center">
        <div className="w-full min-h-screen flex flex-col items-center">
          <div className="bg-white tabanddesk:px-10 pt-[50px] pb-3 tabanddesk:w-full mobile:w-11/12 flex justify-between">
            <img width={120} src="../logo.svg" alt="" />
            <img src="../avatar.svg" alt="" />
          </div>
          <Bankportal/>
        </div>
      </div>
    </div>
  );
}

export default applicants;
