import StudentPortalMobileSidebar from "@/components/reusable/StudentPortalMobileSidebar";
import StudentPortalTopbar from "@/components/reusable/StudentPortalTopbar";
import screens from "@/utils/screens";
import Head from "next/head";
import React, { useState } from "react";

function studentprofile() {
  const { isMobile } = screens();
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
        <title>Profile</title>
      </Head>
      {!isMobile && <StudentPortalTopbar />}
      {isMobile && (
        <StudentPortalMobileSidebar isOpen={isOpen} onClose={onClose} />
      )}
      <div className="w-full h-full tabanddesk:bg-[#F1F4FA] tabanddesk:p-[24px] min-h-[calc(100vh-64px)]">
        <div className="bg-white  min-h-[calc(100vh-112px)] rounded-md tabanddesk:p-[24px]">
          <div className="mobile:flex mobile:items-center mobile:p-[24px]">
            <img className="tabanddesk:hidden mr-5" onClick={onOpen} src="../menu.svg" alt="Menu Icon" />
            <h1 className="font-gola text-2xl font-bold">Profile</h1>
          </div>

          <div className="w-full flex justify-center items-center h-full tabanddesk:mt-[70px] mobile:mt-[30px]">
            <div
              className="rounded-md p-[20px] desktop:w-[50%] tablet:w-[80%] mobile:w-full"
              style={{ border:!isMobile ? "1px solid #E4E4E4"  : 0}}
            >
              <div className="border-b-[1px] border-[#E4E4E4] pb-5 flex items-center justify-between">
                <div>
                  <p className="font-gola text-[14px] text-[#8B8B8B] font-normal">
                    Name
                  </p>
                  <p className="font-gola text-base font-bold text-[#2F2F2F] mt-1">
                    Nikhil Mathew
                  </p>
                </div>
                <button
                  type="button"
                  className="h-10 ml-5 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Edit
                </button>
              </div>
              <div className="flex items-center justify-between border-b-[1px] border-[#E4E4E4] pb-5 pt-5">
                <div>
                  <p className="font-gola text-[14px] text-[#8B8B8B] font-normal">
                    Email address
                  </p>
                  <p className="font-gola text-base font-bold text-[#2F2F2F] mt-1">
                    nikhilmathew@gmail.com
                  </p>
                </div>
                <div className="flex items-center">
                  <img src="menu_dots.svg" alt="" />
                  <button
                    type="button"
                    className="h-10 ml-5 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between border-b-[1px] border-[#E4E4E4] pb-5 pt-5">
                <div>
                  <p className="font-gola text-[14px] text-[#8B8B8B] font-normal">
                    Phone number
                  </p>
                  <p className="font-gola text-base font-bold text-[#2F2F2F] mt-1">
                    +91 9787665432
                  </p>
                </div>
                <button
                  type="button"
                  className="h-10 ml-5 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Edit
                </button>
              </div>
              <div className="flex items-center justify-between border-b-[1px] border-[#E4E4E4] pb-5 pt-5">
                <div>
                  <span className="font-gola text-base font-bold text-[#2F2F2F]">
                    Change Passoword
                  </span>
                </div>
                <img src="rightIconGray.svg" alt="" />
              </div>
              <div className="flex items-center justify-between pb-5 pt-5">
                <div>
                  <span className="font-gola text-base font-bold text-[#0057E4]">
                    Log Out
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default studentprofile;
