import StudentPortalMobileSidebar from "@/components/reusable/StudentPortalMobileSidebar";
import StudentPortalTopbar from "@/components/reusable/StudentPortalTopbar";
import screens from "@/utils/screens";
import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";

function studentportaldashboard() {
  const { isMobile } = screens();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="w-full">
      <Head>
        <title>Student Portal</title>
      </Head>
      {!isMobile && <StudentPortalTopbar />}
      {isMobile && (
        <StudentPortalMobileSidebar isOpen={isOpen} onClose={onClose} />
      )}
      <div className="w-full tabanddesk:px-10 mobile:px-5 desktop:bg-[#F1F4FA] min-h-screen">
        <div className="tabanddesk:hidden pt-[24px] ">
          <div className="flex items-center justify-between">
            <div className="flex">
              <img
                className="mr-5"
                onClick={onOpen}
                src="../menu.svg"
                alt="Menu Icon"
              />
              <h1 className="text-2xl font-gola font-bold">Dashboard</h1>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => router.push("/studentprofile")}
            >
              <img
                className="bg-[#F5F9FF] rounded-full p-[11px]"
                src="/ProfileIcon.svg"
                alt="Avatar"
              />
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <button
              type="button"
              className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            >
              <div className="flex items-center">
                <img className="pr-3" src="../AddIcon.svg" alt="Add Icon" />
                {"New University"}
              </div>
            </button>
          </div>
        </div>
        <div className="mobile:hidden flex items-center justify-between pt-[24px] ">
          <h1 className="text-2xl font-gola font-bold">Dashboard</h1>
          <button
            type="button"
            className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
          >
            <div className="flex items-center">
              <img className="pr-3" src="../AddIcon.svg" alt="Add Icon" />
              {"New University"}
            </div>
          </button>
        </div>
        <div className="mobile:hidden tablet:hidden">
          <div
            className="rounded-md mt-10 bg-white flex items-center justify-between"
            style={{
              border: "1px solid #F0EFEF",
              padding: "16px 24px",
              boxShadow: "0px 4px 4px rgba(226, 226, 226, 0.25)",
            }}
          >
            <div className="flex items-center">
              <img src="/univ_logo.svg" alt="University Logo" />
              <span className="pl-[12px] font-gola font-semibold text-base">
                University of California
              </span>
              <span className="ml-[40px] bg-[#EEEEEE] px-[12px] py-[2.5px] rounded-full font-gola text-sm text-[#254472] font-medium">
                Yet to apply
              </span>
            </div>
            <div className="flex items-center">
              <span className="font-gola text-sm font-semibold">20 Offers </span>
              <p className="ml-[12px] font-gola text-sm font-medium text-[#6B37FF] px-[12px] py-[2.5px] rounded-full bg-[#FBEFFF]">
                2 New
              </p>
              <p className="ml-[12px] font-gola text-sm font-medium text-[#ED3B3B] px-[12px] py-[2.5px] rounded-full bg-[#FFECEC]">
                2 Upload pending
              </p>
              <span className="font-gola text-[20px] font-semibold ml-[40px]">
                ₹40,00,000
              </span>
              <button
                type="button"
                className="h-10 ml-[40px] font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              >
                View
              </button>
            </div>
          </div>
          <div
            className="rounded-md mt-5 bg-white flex items-center justify-between"
            style={{
              border: "1px solid #F0EFEF",
              padding: "16px 24px",
              boxShadow: "0px 4px 4px rgba(226, 226, 226, 0.25)",
            }}
          >
            <div className="flex items-center">
              <img src="/univ_logo.svg" alt="University Logo" />
              <span className="pl-[12px] font-gola font-semibold text-base">
                University of Texas
              </span>
              <span className="ml-[40px] bg-[#EEEEEE] px-[12px] py-[2.5px] rounded-full font-gola text-sm text-[#254472] font-medium">
                Yet to apply
              </span>
            </div>
            <div className="flex items-center">
              <span className="font-gola text-sm font-semibold">20 Offers </span>
              <p className="ml-[12px] font-gola text-sm font-medium text-[#6B37FF] px-[12px] py-[2.5px] rounded-full bg-[#FBEFFF]">
                2 New
              </p>
              <p className="ml-[12px] font-gola text-sm font-medium text-[#ED3B3B] px-[12px] py-[2.5px] rounded-full bg-[#FFECEC]">
                2 Upload pending
              </p>
              <span className="font-gola text-[20px] font-semibold ml-[40px]">
                ₹37,00,000
              </span>
              <button
                type="button"
                className="h-10 ml-[40px] font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              >
                View
              </button>
            </div>
          </div>
        </div>
        <div className="desktop:hidden">
          <div
            style={{
              border: "1px solid #EAEAEA",
              boxShadow: "0px 4px 4px rgba(190, 190, 190, 0.25)",
              borderRadius:'10px'
            }}
            className="mt-5 "
          >
            <div className="bg-[#F5F5F5] rounded-t-lg flex flex-col p-[12px]">
              <div className="flex items-center">
                <img src="/univ_logo.svg" alt="University Logo" />
                <span className="pl-[12px] font-gola font-semibold text-base">
                  University of California
                </span>
                <img
                  className="ml-3"
                  src="rightIconGray.svg"
                  alt="Right Icon"
                />
              </div>
              <span className="mt-3 w-[120px] text-center bg-[#E7E7E7] px-[12px] py-[2.5px] rounded-full font-gola text-sm text-[#254472] font-medium">
                Yet to apply
              </span>
            </div>
            <div className="p-[12px]">
            <div className="flex justify-between  mt-[12px]">
              <span className="text-[#999999] font-gola text-base font-medium">
                Req Loan Amount
              </span>
              <span className="text-[#272727] font-gola text-base font-medium">
                ₹40,00,000
              </span>
            </div>
            <div className="flex justify-between items-center mt-[18px]">
              <span className="font-gola text-sm font-semibold">20 Offers </span>
              <p className="ml-[12px] font-gola text-sm font-medium text-[#6B37FF] px-[12px] py-[2.5px] rounded-full bg-[#FBEFFF]">
                2 New
              </p>
              <p className="ml-[12px] font-gola text-sm font-medium text-[#ED3B3B] px-[12px] py-[2.5px] rounded-full bg-[#FFECEC]">
                2 Upload pending
              </p>
            </div>
            </div>
          
          </div>
          <div
            style={{
              border: "1px solid #EAEAEA",
              boxShadow: "0px 4px 4px rgba(190, 190, 190, 0.25)",
              borderRadius:'10px'
            }}
            className="mt-5 "
          >
            <div className="bg-[#F5F5F5] rounded-t-lg flex flex-col p-[12px]">
              <div className="flex items-center">
                <img src="/univ_logo.svg" alt="University Logo" />
                <span className="pl-[12px] font-gola font-semibold text-base">
                  University of California
                </span>
                <img
                  className="ml-3"
                  src="rightIconGray.svg"
                  alt="Right Icon"
                />
              </div>
              <span className="mt-3 w-[120px] text-center bg-[#E7E7E7] px-[12px] py-[2.5px] rounded-full font-gola text-sm text-[#254472] font-medium">
                Yet to apply
              </span>
            </div>
            <div className="p-[12px]">
            <div className="flex justify-between  mt-[12px]">
              <span className="text-[#999999] font-gola text-base font-medium">
                Req Loan Amount
              </span>
              <span className="text-[#272727] font-gola text-base font-medium">
                ₹40,00,000
              </span>
            </div>
            <div className="flex justify-between items-center mt-[18px]">
              <span className="font-gola text-sm font-semibold">20 Offers </span>
              <p className="ml-[12px] font-gola text-sm font-medium text-[#6B37FF] px-[12px] py-[2.5px] rounded-full bg-[#FBEFFF]">
                2 New
              </p>
              <p className="ml-[12px] font-gola text-sm font-medium text-[#ED3B3B] px-[12px] py-[2.5px] rounded-full bg-[#FFECEC]">
                2 Upload pending
              </p>
            </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default studentportaldashboard;
