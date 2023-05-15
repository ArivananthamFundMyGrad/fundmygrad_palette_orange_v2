import TelemarketingBarChart1 from "@/components/dashboard/TelemarketingBarChart1";
import TelemarketingBarChart2 from "@/components/dashboard/TelemarketingBarChart2";
import TelemarketingSidebar from "@/components/reusable/TelemarketingSidebar";
import MobileSidebar from "@/components/reusable/MobileSidebar";
import TelemarketingMobileSidebar from "@/components/reusable/TelemarketingMobileSidebar";
import { useMediaQuery } from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";
import Head from "next/head";
import React, { useState } from "react";

function telemarketing() {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex w-full">
      <Head>
        <title>Telemarketing Dashboard</title>
      </Head>
      {!isMobile && <TelemarketingSidebar />}
      <div className="bg-[#F1F4FA] w-full tabanddesk:h-screen flex justify-center">
        <div className="w-full flex flex-col items-center">
          <div className="bg-white tabanddesk:px-10 mobile:pl-[16px] mobile:pr-[16px] pt-3 pb-3 w-full flex justify-between">
            <img width={120} src="../logo.svg" alt="" />
            <img src="../avatar.svg" alt="" />
          </div>
          <div className="w-full max-w-custom1500 tabanddesk:px-10 mobile:pl-[16px] mobile:pr-[16px]  bg-[#F1F4FA] h-full mt-5">
            <div className="tabanddesk:hidden">
              <div className="flex items-center mb-10">
                <img onClick={onOpen} src="../menu.svg" alt="Menu Icon" />
                <h1 className="ml-5 font-gola text-2xl font-bold">Dashboard</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <h1 className="mobile:hidden font-gola text-2xl font-bold">
                Dashboard
              </h1>
            </div>
            <div className="grid desktop:grid-cols-2 gap-2 mt-5">
              <div className="w-full px-3 pl-5 py-5 block bg-white border border-gray-200 rounded-lg shadow">
                <h2 className="font-gola text-[24px] font-semibold border-[#E0E0E0] border-b-[1px] pb-[12px]">
                  Hi, Ritesh
                </h2>
                <div className="flex justify-between mt-[16px]">
                  <p className="font-gola text-[#ABABAB] text-base font-bold">
                    YOUR SESSION
                  </p>
                  <h1 className="font-gola text-[24px] font-medium">
                    01:01:28
                  </h1>
                </div>
                <button
                  type="button"
                  className="mt-[60px] h-10 font-gola border border-[#FF4141] text-[#E32626] bg-[#FFF2F2] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Stop Session
                </button>
              </div>
              <div className="w-full px-3 pl-5 py-5 block bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex justify-between mt-[16px]">
                  <h2 className="font-gola text-[#ABABAB] text-base font-bold">
                    ONGOING CALL
                  </h2>
                  <h2 className="font-gola text-[24px] font-medium">01:28</h2>
                </div>
                <h2 className="font-gola text-[24px] font-semibold border-[#E0E0E0] border-b-[1px] pb-[12px]">
                  Nikhil Mathew
                </h2>
                <div className="flex mt-[16px]">
                  <p className="font-gola pr-[12px] text-[14px] border-r-[1px] border-[#B8B8B8] font-normal">
                    +919675643213
                  </p>
                  <p className="font-gola pl-[12px] text-[14px] font-normal">
                    nikkilmathew@gmail.com
                  </p>
                </div>
                <div className="flex items-center mt-[30px]">
                  <div className="flex items-center">
                    <img src="/pause.svg" alt="Pause Icon" />
                    <h1 className="ml-3 font-gola text-[14px] font-medium text-[#0057E4]">
                      Hold
                    </h1>
                  </div>
                  <button
                    type="button"
                    className="h-10 ml-10 font-gola border border-[#FF4141] text-[#E32626] bg-[#FFF2F2] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    <div className="flex items-center">
                      <img src="/call_end.svg" alt="Call Icon" /> &nbsp; End
                      Call
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid desktop:grid-cols-2 gap-2 mt-5">
              <div className="w-full px-3 pl-5 py-5 block bg-white border border-gray-200 rounded-lg shadow">
                <p className="font-gola font-sm uppercase font-semibold">
                  CALLED VS ANSWERED
                </p>
                <TelemarketingBarChart1 />
              </div>
              <div className="w-full px-3 pl-5 py-5 block bg-white border border-gray-200 rounded-lg shadow">
                <p className="font-gola font-sm uppercase font-semibold">
                  CONVERTED VS SUCCESSFUL
                </p>
                <TelemarketingBarChart2 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <TelemarketingMobileSidebar isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default telemarketing;
