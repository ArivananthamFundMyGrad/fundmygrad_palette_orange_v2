import React, { useState } from "react";
import Head from "next/head";
import StudentPortalTopbar from "@/components/reusable/StudentPortalTopbar";
import screens from "@/utils/screens";
import { useRouter } from "next/router";
import StudentPortalMobileSidebar from "@/components/reusable/StudentPortalMobileSidebar";

function mydocuments() {
  const router = useRouter();
  const { isMobile } = screens();
  const [tab, setTab] = useState("1");

  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  const handleTabChange = () => {
    document.getElementById("myID")?.scrollIntoView({ inline: "start" });
    setTab("3")
  };

  const handleLastTabChange = () => {
    document.getElementById("lastID")?.scrollIntoView({ inline: "start" });
    setTab("5")
  };

  return (
    <div className="w-full">
      <Head>
        <title>My Documents</title>
      </Head>
      {!isMobile && <StudentPortalTopbar />}
      {isMobile && (
        <StudentPortalMobileSidebar isOpen={isOpen} onClose={onClose} />
      )}
      <div className="mobile:hidden w-full h-full bg-[#F1F4FA] desktop:p-[24px] tablet:p-[14px] min-h-[calc(100vh-64px)]">
        <div className="bg-white  min-h-[calc(100vh-112px)] rounded-md desktop:p-[24px] tablet:p-[14px]">
          <h1 className="font-gola text-2xl font-bold">My Documents</h1>
          <div className="flex justify-between mt-[36px]">
            <div className="desktop:min-w-[30%] tablet:min-w-[40%]">
              <div
                style={{
                  border: "1.2px solid #0057FF",
                }}
                className="flex justify-between items-center rounded-md bg-[#F7FAFF] p-[16px]"
              >
                <span className="font-gola text-base font-semibold">
                  Aadhar Card
                </span>
                <div className="flex items-center">
                  <p className="mr-3 font-gola text-[#8F8F8F] text-sm font-normal">
                    1/2 files
                  </p>
                  <img src="/warning.svg" alt="Warning Icon" />
                </div>
              </div>
              <div
                style={{
                  border: "1px solid #E8E8E8",
                }}
                className="flex mt-3 justify-between items-center rounded-md p-[16px]"
              >
                <span className="font-gola text-base font-semibold">PAN Card</span>
                <div className="flex items-center">
                  <p className="mr-3 font-gola text-[#8F8F8F] text-sm font-normal">
                    2/2 files
                  </p>
                  <img src="/check.svg" alt="Correct Icon" />
                </div>
              </div>
              <div
                style={{
                  border: "1px solid #E8E8E8",
                }}
                className="flex mt-3 justify-between items-center rounded-md p-[16px]"
              >
                <span className="font-gola text-base font-semibold">
                  Birth Certificate
                </span>
                <div className="flex items-center">
                  <p className="mr-3 font-gola text-[#8F8F8F] text-sm font-normal">
                    2/2 files
                  </p>
                  <img src="/check.svg" alt="Correct Icon" />
                </div>
              </div>
              <div
                style={{
                  border: "1px solid #E8E8E8",
                }}
                className="flex mt-3 justify-between items-center rounded-md p-[16px]"
              >
                <span className="font-gola text-base font-semibold">
                  Marksheets
                </span>
                <div className="flex items-center">
                  <p className="mr-3 font-gola text-[#8F8F8F] text-sm font-normal">
                    1/2 files
                  </p>
                  <img src="/warning.svg" alt="Warning Icon" />
                </div>
              </div>
              <div
                style={{
                  border: "1px solid #E8E8E8",
                }}
                className="flex mt-3 justify-between items-center rounded-md p-[16px]"
              >
                <span className="font-gola text-base font-semibold">
                  Graduation Certificate
                </span>
                <div className="flex items-center">
                  <p className="mr-3 font-gola text-[#8F8F8F] text-sm font-normal">
                    2/2 files
                  </p>
                  <img src="/check.svg" alt="Correct Icon" />
                </div>
              </div>
            </div>
            <div
              style={{
                border: "1px solid #E6E6E6",
              }}
              className="desktop:w-[70%] tablet:w-[80%] py-10 rounded-md flex items-center justify-center desktop:ml-10 tablet:ml-5"
            >
              <div className="desktop:w-[70%] tablet:w-[80%]">
                <span className="font-gola text-[20px] font-bold text-[#222222]">
                  Aadhar Card
                </span>
                <p className="mt-5 font-gola text-[14px] text-[#0E0E0E]">
                  Upload Documents
                </p>
                <p className="text-[#8F8F8F] font-gola text-[14px] font-normal">
                  Size should be less than 1mb (.jpg, .png, .svg,.pdf)
                </p>
                <span className="text-[14px] font-gola font-bold mt-5">
                  Front Side:
                </span>
                <div
                  style={{ border: "0.5px solid #CBCBCB" }}
                  className="mt-2 desktop:px-[32px] tablet:px-[15px] py-[20px] rounded-md flex justify-between items-center"
                >
                  <div className="flex tablet:flex-col items-center">
                    <img src="/pdf.svg" alt="PDF Icon" />
                    <span className="font-gola text-sm font-medium text-[#2B2B2B] ml-3">
                      Filename001.pdf
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img src="/menu_dots.svg" alt="Menu Icon" />
                    <img
                      className="ml-5"
                      src="/file_download.svg"
                      alt="Download Icon"
                    />
                    <button
                      type="button"
                      className="h-10 ml-5 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                    >
                      View
                    </button>
                  </div>
                </div>
                <span className="text-[14px] font-gola font-bold mt-5">
                  Back Side:
                </span>
                <div
                  style={{ border: "0.5px solid #CBCBCB" }}
                  className="mt-2 px-[32px] py-[20px] rounded-md flex flex-col justify-center items-center"
                >
                  <span className="font-gola text-[#8E8E8E] text-[14px] font-normal">
                    No file has uploaded yet
                  </span>
                  <button
                    type="button"
                    className="h-10 mt-3 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="mt-10 mb-5 flex items-center tablet:hidden justify-between">
          <div className="flex">
            <img
              className="mr-5"
              onClick={onOpen}
              src="../menu.svg"
              alt="Menu Icon"
            />
            <span className="text-2xl font-gola font-bold">My Documents</span>
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
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
          <ul className="flex overflow-x-scroll min-w-screen max-w-screen">
            <li className="mr-2">
              <div
                onClick={() => setTab("1")}
                className={`${
                  tab === "1"
                    ? "border-b-2 text-[#0057FF] border-[#0057FF]"
                    : "text-[#535353]"
                } cursor-pointer font-gola font-semibold text-[14px] inline-block whitespace-nowrap	 py-1 px-4 rounded-t-lg`}
              >
                Aadhar Card
              </div>
            </li>
            <li className="mr-2">
              <div
                onClick={() => setTab("2")}
                className={`${
                  tab === "2"
                    ? "border-b-2 text-[#0057FF] border-[#0057FF]"
                    : "text-[#535353]"
                } cursor-pointer font-gola font-semibold text-[14px] inline-block whitespace-nowrap	 py-1 px-4 rounded-t-lg`}
              >
                Pan Card
              </div>
            </li>
            <li className="mr-2">
              <div
                onClick={handleTabChange}
                id="myID"

                className={`${
                  tab === "3"
                    ? "border-b-2 text-[#0057FF] border-[#0057FF]"
                    : "text-[#535353]"
                } cursor-pointer font-gola font-semibold text-[14px] inline-block whitespace-nowrap	 py-1 px-4 rounded-t-lg`}
              >
                Birth Certificate
              </div>
            </li>
            <li className="mr-2">
              <div
                onClick={() => setTab("4")}
                className={`${
                  tab === "4"
                    ? "border-b-2 text-[#0057FF] border-[#0057FF]"
                    : "text-[#535353]"
                } cursor-pointer font-gola font-semibold text-[14px] inline-block whitespace-nowrap	 py-1 px-4 rounded-t-lg`}
              >
                Marksheet
              </div>
            </li>
            <li className="mr-2">
              <div
                id="lastID"
                onClick={handleLastTabChange}
                className={`${
                  tab === "5"
                    ? "border-b-2 text-[#0057FF] border-[#0057FF]"
                    : "text-[#535353]"
                } cursor-pointer font-gola font-semibold text-[14px] inline-block whitespace-nowrap py-1 px-4 rounded-t-lg`}
              >
                Graduation Certificate
              </div>
            </li>
          </ul>
        </div>
        {tab === "1" && (
          <div className="mt-[16px]">
            <span className="font-gola text-[14px] font-semibold text-[#0E0E0E]">
              Upload Documents{" "}
            </span>
            <span className="font-gola text-[14px] font-normal text-[#8F8F8F]">
              Size should be less than 1mb (.jpg, .png, .svg,.pdf){" "}
            </span>
            <span className="mt-[16px] font-gola text-base font-semibold text-[#222222]">
              Aadhar Card
            </span>
            <span className="mt-[12px] font-gola text-[14px] font-normal text-[#8F8F8F]">
              Front Side:
            </span>
            <div
              style={{ border: "0.5px solid #CBCBCB" }}
              className="mt-2 px-[12px] py-[20px] rounded-md flex justify-between items-center"
            >
              <div className="flex  items-center">
                <img src="/pdf.svg" alt="PDF Icon" />
                <span className="font-gola text-sm font-medium text-[#2B2B2B] ml-3">
                  Filename001.pdf
                </span>
              </div>
              <div className="flex items-center">
                <img src="/menu_dots.svg" alt="Menu Icon" />
                <img
                  className="ml-5"
                  src="/file_download.svg"
                  alt="Download Icon"
                />
              </div>
            </div>
            <span className="mt-[12px] font-gola text-[14px] font-normal text-[#8F8F8F]">
              Back Side:
            </span>
            <div
              style={{ border: "0.5px solid #CBCBCB" }}
              className="mt-2 px-[32px] py-[20px] rounded-md flex flex-col justify-center items-center"
            >
              <span className="font-gola text-[#8E8E8E] text-[14px] font-normal">
                No file has uploaded yet
              </span>
              <button
                type="button"
                className="h-10 mt-3 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              >
                Upload
              </button>
            </div>
          </div>
        )}
        {tab === "2" && (
          <div className="mt-[16px]">
            <span className="font-gola text-[14px] font-semibold text-[#0E0E0E]">
              Upload Documents{" "}
            </span>
            <span className="font-gola text-[14px] font-normal text-[#8F8F8F]">
              Size should be less than 1mb (.jpg, .png, .svg,.pdf){" "}
            </span>
            <span className="mt-[16px] font-gola text-base font-semibold text-[#222222]">
              PAN Card
            </span>
            <span className="mt-[12px] font-gola text-[14px] font-normal text-[#8F8F8F]">
              Front Side:
            </span>
            <div
              style={{ border: "0.5px solid #CBCBCB" }}
              className="mt-2 px-[12px] py-[20px] rounded-md flex justify-between items-center"
            >
              <div className="flex  items-center">
                <img src="/pdf.svg" alt="PDF Icon" />
                <span className="font-gola text-sm font-medium text-[#2B2B2B] ml-3">
                  Filename001.pdf
                </span>
              </div>
              <div className="flex items-center">
                <img src="/menu_dots.svg" alt="Menu Icon" />
                <img
                  className="ml-5"
                  src="/file_download.svg"
                  alt="Download Icon"
                />
              </div>
            </div>
          </div>
        )}
        {tab === "3" && (
          <div className="mt-[16px]">
            <span className="font-gola text-[14px] font-semibold text-[#0E0E0E]">
              Upload Documents
            </span>
            <span className="font-gola text-[14px] font-normal text-[#8F8F8F]">
              Size should be less than 1mb (.jpg, .png, .svg,.pdf)
            </span>
            <span className="mt-[16px] font-gola text-base font-semibold text-[#222222]">
              Birth Certificate
            </span>
            <span className="mt-[12px] font-gola text-[14px] font-normal text-[#8F8F8F]">
              Front Side:
            </span>
            <div
              style={{ border: "0.5px solid #CBCBCB" }}
              className="mt-2 px-[32px] py-[20px] rounded-md flex flex-col justify-center items-center"
            >
              <span className="font-gola text-[#8E8E8E] text-[14px] font-normal">
                No file has uploaded yet
              </span>
              <button
                type="button"
                className="h-10 mt-3 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              >
                Upload
              </button>
            </div>
          </div>
        )}
        {tab === "4" && (
          <div className="mt-[16px]">
            <span className="font-gola text-[14px] font-semibold text-[#0E0E0E]">
              Upload Documents
            </span>
            <span className="font-gola text-[14px] font-normal text-[#8F8F8F]">
              Size should be less than 1mb (.jpg, .png, .svg,.pdf)
            </span>
            <span className="mt-[16px] font-gola text-base font-semibold text-[#222222]">
              Marksheet
            </span>
            <span className="mt-[12px] font-gola text-[14px] font-normal text-[#8F8F8F]">
              Front Side:
            </span>
            <div
              style={{ border: "0.5px solid #CBCBCB" }}
              className="mt-2 px-[32px] py-[20px] rounded-md flex flex-col justify-center items-center"
            >
              <span className="font-gola text-[#8E8E8E] text-[14px] font-normal">
                No file has uploaded yet
              </span>
              <button
                type="button"
                className="h-10 mt-3 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              >
                Upload
              </button>
            </div>
          </div>
        )}
        {tab === "5" && (
          <div className="mt-[16px]">
            <span className="font-gola text-[14px] font-semibold text-[#0E0E0E]">
              Upload Documents
            </span>
            <span className="font-gola text-[14px] font-normal text-[#8F8F8F]">
              Size should be less than 1mb (.jpg, .png, .svg,.pdf)
            </span>
            <span className="mt-[16px] font-gola text-base font-semibold text-[#222222]">
              Graduation Certificate
            </span>
            <span className="mt-[12px] font-gola text-[14px] font-normal text-[#8F8F8F]">
              Front Side:
            </span>
            <div
              style={{ border: "0.5px solid #CBCBCB" }}
              className="mt-2 px-[32px] py-[20px] rounded-md flex flex-col justify-center items-center"
            >
              <span className="font-gola text-[#8E8E8E] text-[14px] font-normal">
                No file has uploaded yet
              </span>
              <button
                type="button"
                className="h-10 mt-3 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              >
                Upload
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default mydocuments;
