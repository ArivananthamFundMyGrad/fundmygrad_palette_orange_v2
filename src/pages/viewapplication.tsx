import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import { useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { Drawer, DrawerOverlay, DrawerContent } from "@chakra-ui/react";
import Sidebar from "@/components/reusable/Sidebar";

function viewapplication() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const router = useRouter();
  return (
    <div className="flex w-full">
      <Head>
        <title>Application Status</title>
      </Head>
      {!isMobile && <Sidebar />}
      <div className="w-full flex flex-col">
        <div className="w-full desktop:px-10 tablet:px-3 mobile:px-3 flex flex-col ">
          <div className="bg-white pt-3 pb-3 w-full items-center flex justify-between">
            <img width={120} src="../logo.svg" alt="" />
            <img src="../avatar.svg" alt="" />
          </div>

          <div className=" mt-5 mb-20">
            <div className="mt-7 flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="cursor-pointer"
                  onClick={() => router.push("/applicants")}
                  src="arrow_back.svg"
                  alt="Back Arrow"
                />
                <span className="font-gola text-2xl text-[#252525] font-semibold ml-3">
                  Nikhil Mathew
                </span>
              </div>
              <button
                onClick={onOpen}
                type="button"
                className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              >
                Send Offer
              </button>
            </div>
            <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 gap-3 w-full mt-7">
              <div className="w-full">
                <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow">
                  <h5 className="mb-2 uppercase text-sm font-semibold text-[#313131]">
                    Basic Info
                  </h5>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Loan amount {isMobile && <br />} requested
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      ₹40,00,000
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Able to provide {isMobile && <br />} collateral
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      Yes
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Admit Status
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      Received Admit
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Opted College Name
                    </span>
                    <span className="text-right text-[#292929] font-medium text-base font-gola">
                      University of California
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Opted country
                    </span>
                    <span className="text-right text-[#292929] font-medium text-base font-gola">
                      United States of America
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      City, State
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      Coimbatore, Tamil Nadu
                    </span>
                  </div>
                </div>
                <div className="mt-5 block p-6 bg-white border border-gray-200 rounded-lg shadow">
                  <h5 className="mb-2 uppercase text-sm font-semibold text-[#313131]">
                    Co-applicant
                  </h5>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Co-applicant
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      Father
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Collateral value
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      Salaried
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Income p.a
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      ₹10,00,000
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Phone number
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      +91 98786*****
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Email
                    </span>
                    <span className="break-words text-right text-[#292929] font-medium text-base font-gola">
                      *****anandham@gmail.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow">
                  <h5 className="mb-2 uppercase text-sm font-semibold text-[#313131]">
                    OTHER DETAILS
                  </h5>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Prog. start date
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      1 Aug 2023
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Course
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      MS., Computer Science
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Course duration
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      2 years
                    </span>
                  </div>
                </div>
                <div className="mt-5 block p-6 bg-white border border-gray-200 rounded-lg shadow">
                  <h5 className="mb-2 uppercase text-sm font-semibold text-[#313131]">
                    Education details
                  </h5>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Previous college
                    </span>
                    <span className="break-words text-right text-[#292929] font-medium text-base font-gola">
                      Visveshwara College of Engineering
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="break-words pr-2 text-[#000000]/[.30] font-medium text-base font-gola">
                      Highest degree
                    </span>
                    <span className="break-words text-right text-[#292929] font-medium text-base font-gola">
                      BE., Computer Science
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      CGPA
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      8.9
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Backlog
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      No
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow">
                  <h5 className="mb-2 uppercase text-sm font-semibold text-[#313131]">
                    Collateral
                  </h5>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Collateral type
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      Residential Property
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Collateral value
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      ₹ 50,00,000
                    </span>
                  </div>
                </div>
                <div className="mt-5 block p-6 bg-white border border-gray-200 rounded-lg shadow">
                  <h5 className="mb-2 uppercase text-sm font-semibold text-[#313131]">
                    Work Experience
                  </h5>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Work {isMobile && <br />} experience
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      9 months
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      Salary
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      ₹8,00,000 P.A
                    </span>
                  </div>
                </div>
                <div className="mt-5 block p-6 bg-white border border-gray-200 rounded-lg shadow">
                  <h5 className="mb-2 uppercase text-sm font-semibold text-[#313131]">
                    Test Score
                  </h5>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      GRE
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      189
                    </span>
                  </div>
                  {/* <div className="flex items-center justify-between mt-2">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      GMAT
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      177
                    </span>
                  </div> */}
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                      IELTS
                    </span>
                    <span className="text-[#292929] font-medium text-base font-gola">
                      7.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            size={"md"}
          >
            <DrawerOverlay />
            <DrawerContent>
              <div className="flex flex-col h-full w-full justify-between">
                <div className="p-5">
                  <div className="w-full flex items-center justify-between">
                    <span className="text-2xl font-gola font-semibold">
                      Offer
                    </span>
                    <img
                      onClick={onClose}
                      className="cursor-pointer"
                      src="../close.svg"
                      alt="Close Icon"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                      Enter loan amount
                    </p>
                    <div style={{ height: "48px" }} className="flex mt-1.5">
                      <input
                        autoComplete="off"
                        type="text"
                        id="website-admin"
                        className="rounded-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                        placeholder="₹40,00,000"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                      Interest rate (p.a)
                    </p>
                    <div style={{ height: "48px" }} className="flex mt-1.5">
                      <input
                        autoComplete="off"
                        type="text"
                        id="website-admin"
                        className="rounded-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                        placeholder="9 %"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                      Tenure
                    </p>
                    <div style={{ height: "48px" }} className="flex mt-1.5">
                      <input
                        autoComplete="off"
                        type="text"
                        id="website-admin"
                        className="rounded-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                        placeholder="24 months"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                      Enter processing fee (GST not included)
                    </p>
                    <div style={{ height: "48px" }} className="flex mt-1.5">
                      <input
                        autoComplete="off"
                        type="text"
                        id="website-admin"
                        className="rounded-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                        placeholder="2%"
                      />
                    </div>
                  </div>
                  <p className="text-base font-semibold font-gola mt-5">
                    Repayment Type
                  </p>
                  <div className="flex items-center mt-3">
                    <input
                      defaultChecked
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ml-3 text-sm font-medium text-[#202020] font-gola"
                    >
                      After Course Completion
                    </label>
                  </div>
                  <div className="flex items-center mt-3">
                    <input
                      defaultChecked
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ml-3 text-sm font-medium text-[#202020] font-gola"
                    >
                      During the Course
                    </label>
                  </div>
                  {/* <div className="flex items-center mt-3">
                  <input
                    defaultChecked
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-3 text-sm font-medium text-[#202020] font-gola"
                  >
                    Type 3
                  </label>
                </div> */}
                </div>
                <div className="p-5 w-full">
                  <button
                    onClick={onClose}
                    type="button"
                    className="w-full h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default viewapplication;
