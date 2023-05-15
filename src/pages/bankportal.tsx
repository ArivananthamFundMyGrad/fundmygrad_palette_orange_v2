import React, { useState } from "react";
import Head from "next/head";
import BarChart1 from "@/components/dashboard/BarChart1";
import BarChart2 from "@/components/dashboard/BarChart2";
import BarChart3 from "@/components/dashboard/BarChart3";
import Sidebar from "@/components/reusable/Sidebar";
import MobileSidebar from "@/components/reusable/MobileSidebar";
import {
  useMediaQuery,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";

function bankportal() {
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
        <title>Bankportal Dashboard</title>
      </Head>
      {!isMobile && <Sidebar />}
      <div className="bg-[#F1F4FA] w-full flex justify-center">
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
              <div className="flex mobile:row-reverse mobile:w-full tabanddesk:w-2/5">
                <div className="w-full">
                  <Select bg="white">
                    <option value="option1">2023</option>
                    <option value="option2">2022</option>
                    <option value="option3">2021</option>
                  </Select>
                </div>
                <div className="w-full" style={{ marginLeft: "1rem" }}>
                  <Select bg="white">
                    <option value="option1">Yearly</option>
                    <option value="option2">Monthly</option>
                    <option value="option3">Weekly</option>
                  </Select>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-2 gap-5 mt-7">
              <div className="block max-w-sm tabanddesk:px-6 tabanddesk:py-3 mobile:py-2.5 mobile:px-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-gola">All Offers</p>
                  <div className="flex items-center">
                    <span className="text-[20px] font-gola font-medium mr-3">
                      112
                    </span>
                    <svg
                      width="9"
                      height="15"
                      viewBox="0 0 9 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.32666 12.9866L1.50666 14.1666L8.17333 7.49998L1.50666 0.833313L0.32666 2.01331L5.81333 7.49998L0.32666 12.9866Z"
                        fill="#C9C9C9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="block max-w-sm tabanddesk:px-6 tabanddesk:py-3 mobile:py-2.5 mobile:px-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-gola">Outstanding Offers</p>
                  <div className="flex items-center">
                    <span className="text-[20px] font-gola font-medium mr-3">
                      21
                    </span>
                    <svg
                      width="9"
                      height="15"
                      viewBox="0 0 9 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.32666 12.9866L1.50666 14.1666L8.17333 7.49998L1.50666 0.833313L0.32666 2.01331L5.81333 7.49998L0.32666 12.9866Z"
                        fill="#C9C9C9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="block max-w-sm tabanddesk:px-6 tabanddesk:py-3 mobile:py-2.5 mobile:px-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-gola">Not Yet Accepted</p>
                  <div className="flex items-center">
                    <span className="text-[20px] font-gola font-medium mr-3">
                      06
                    </span>
                    <svg
                      width="9"
                      height="15"
                      viewBox="0 0 9 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.32666 12.9866L1.50666 14.1666L8.17333 7.49998L1.50666 0.833313L0.32666 2.01331L5.81333 7.49998L0.32666 12.9866Z"
                        fill="#C9C9C9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="block max-w-sm tabanddesk:px-6 tabanddesk:py-3 mobile:py-2.5 mobile:px-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-gola">Accepted offers</p>
                  <div className="flex items-center">
                    <span className="text-[20px] font-gola font-medium mr-3">
                      06
                    </span>
                    <svg
                      width="9"
                      height="15"
                      viewBox="0 0 9 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.32666 12.9866L1.50666 14.1666L8.17333 7.49998L1.50666 0.833313L0.32666 2.01331L5.81333 7.49998L0.32666 12.9866Z"
                        fill="#C9C9C9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid desktop:grid-cols-2 gap-2 mt-5">
              <div className="w-full px-3 pl-5 py-5 block bg-white border border-gray-200 rounded-lg shadow">
                <span className="font-gola font-sm uppercase font-semibold">
                  Average Offer acceptance
                </span>
                <BarChart1 />
              </div>
              <div className="w-full px-3 pl-5 py-5 block bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex justify-between">
                  <span className="font-gola font-sm uppercase font-semibold">
                    Average {isMobile && <br />} Processing Time
                  </span>
                  <p className="text-right">
                    23% higher than {isMobile && <br />} prev. year
                  </p>
                </div>

                <BarChart2 />
              </div>
            </div>
            <div className="grid desktop:grid-cols-2 gap-2 mt-5 mb-5">
              <div className="w-full px-3 pl-5 py-5 block bg-white border border-gray-200 rounded-lg shadow">
                <span className="font-gola font-sm uppercase font-semibold">
                  Average - Offered time vs {isMobile && <br />} Accepted time
                </span>
                <BarChart3 />
              </div>
              <div className="block px-6 py-3"></div>
            </div>
          </div>
        </div>
      </div>
      <MobileSidebar isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default bankportal;
