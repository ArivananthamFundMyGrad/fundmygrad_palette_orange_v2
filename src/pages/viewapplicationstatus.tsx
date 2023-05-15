import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/react";
import OtherBankOffers2 from "@/components/dashboard/OtherBankOffers2";

function viewapplicationstatus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter()  

  return (
    <div className="flex w-full">
      <Head>
        <title>Application Status</title>
      </Head>

      <div className="w-full flex flex-col">
        <div className="w-full tabanddesk:px-10 mobile:px-5 flex flex-col ">
          <div className="bg-white pt-3 pb-3 w-full items-center flex justify-between">
            <img width={120} src="../logo.svg" alt="" />
            <img src="../avatar.svg" alt="" />
          </div>
          <div className="flex mobile:flex-col itesm-center mt-3">
            <div className="flex item-center">
              <img
                className="cursor-pointer"
                onClick={() => router.push("/tracking")}
                src="arrow_back.svg"
                alt="Back Arrow"
              />
              <span className="font-gola text-2xl text-[#252525] font-semibold ml-3">
                Nikhil Mathew
              </span>
            </div>
            <div className="mobile:mt-5 flex item-center">
              <span className="tabanddesk:ml-5 mt-1 px-3 rounded-full text-sm font-gola font-medium text-[#254472] bg-[#EEEEEE] pt-1 text-center">
                Sent Level 2 Offer
              </span>
              <span className="ml-5 mt-1 px-3 rounded-full text-sm font-gola font-medium text-[#254472] bg-[#EEEEEE] pt-1 text-center">
                Not yet accepted
              </span>
            </div>
          </div>
          <div className="flex mobile:flex-col tabanddesk:mt-5 mobile:mt-2 justify-between tabanddesk:items-center">
            <div className="flex items-center mt-5">
              <span className="font-gola text-base font-medium opacity-30">
                Last offer:-
              </span>
              <span className="ml-3 font-gola text-sm text-[#272727] font-medium">
                ₹40,00,000 | 9.85% | 24months
              </span>
            </div>
            <button
              onClick={onOpen}
              type="button"
              className="mobile:mt-5 h-10 min-w-[130px] font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            >
              Send Offer
            </button>
          </div>
        </div>
        <div className="w-full mt-5">
          <Tabs>
            <TabList className="desktop:p-[36px] tablet:p-[16px] mobile:p-[16px]">
            <Tab
                _selected={{
                  color: "#0052CC",
                  borderBottom: "2px solid #0052CC",
                }}
              >
                <span className="font-gola text-sm font-semibold">
                  Application Details
                </span>
              </Tab>
              <Tab
                _selected={{
                  color: "#0052CC",
                  borderBottom: "2px solid #0052CC",
                }}
              >
                <span className="font-gola text-sm font-semibold">Documents</span>
              </Tab>
              <Tab
                _selected={{
                  color: "#0052CC",
                  borderBottom: "2px solid #0052CC",
                }}
              >
                <span className="font-gola text-sm font-semibold">
                  Other Bank Offers
                </span>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel className="min-h-screen desktop:p-[36px] p-[16px] bg-[#F2F2F2]">
                <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 gap-3 w-full desktop:mt-7 mt-3">
                  <div className="w-full">
                    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow">
                      <h5 className="mb-2 uppercase text-sm font-semibold text-[#313131]">
                        Basic Info
                      </h5>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                          Loan amount requested
                        </span>
                        <span className="text-[#292929] font-medium text-base font-gola">
                          ₹40,00,000
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                          Able to provide collateral
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
                          Yet to apply
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
                          Coimbatore, 641606, TN
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
                          +91 9878675432
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                          Email
                        </span>
                        <span className="break-words text-right text-[#292929] font-medium text-base font-gola">
                          muruaganandham@gmzil.com
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
                          1 Mar 2023
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
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                          Admit Status
                        </span>
                        <span className="text-[#292929] font-medium text-base font-gola">
                          Yet to apply
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
                          Yes
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
                          1 Mar 2023
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
                          Previous work experience
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
                          ₹40,00,000
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
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                          GMAT
                        </span>
                        <span className="text-[#292929] font-medium text-base font-gola">
                          177
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                          IELTS
                        </span>
                        <span className="text-[#292929] font-medium text-base font-gola">
                          166
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className="min-h-screen !desktop:p-[36px] flex justify-center tablet:!p-[8px] mobile:!p-[8px] bg-[#F2F2F2]">
                <div className="desktop:max-w-[700px] desktop:min-w-[700px] bg-white rounded-lg desktop:px-10 desktop:py-10 px-3 py-3 h-full">
                  <span className="font-gola text-xl text-[#313131] font-semibold">
                    Documents
                  </span>
                  <div className="flex items-center mobile:items-start justify-between mt-10">
                    <div className="flex mobile:flex-col">
                      <span className="mobile:min-w-[100px] font-gola text-base">
                        Aadhar Card
                      </span>
                      <span className="mt-3 tabanddesk:hidden w-[110px] text-center tabanddesk:ml-10 font-gola text-sm text-[#FF2222] bg-[#FFECEC] py-1 px-2 rounded-full">
                        Pending
                      </span>
                    </div>

                    <div className="mobile:ml-3 flex items-center mobile:items-center">
                      <span className="mobile:mr-5 text-[#A3A3A3] font-gola text-sm">
                        1/2 files
                      </span>
                      <span className="mobile:hidden mobile:mr-3 w-[110px] text-center tabanddesk:ml-10 font-gola text-sm text-[#FF2222] bg-[#FFECEC] py-1 px-2 rounded-full">
                        Pending
                      </span>
                      <img
                        className="mobile:mr-3 tabanddesk:ml-10"
                        src="../download.svg"
                        alt="Download SVG"
                      />
                      <button
                        onClick={() => router.push("/viewapplicationstatus")}
                        type="button"
                        className="mobile:ml-3 tabanddesk:ml-10 h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                      >
                        View
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mobile:items-start justify-between mt-10">
                    <div className="flex mobile:flex-col">
                      <span className="mobile:min-w-[100px] font-gola text-base">
                        Voter ID
                      </span>
                      <span className="mt-3 tabanddesk:hidden w-[110px] text-center tabanddesk:ml-10 font-gola text-sm text-[#1EA808] bg-[#E6FFE2] py-1 px-2 rounded-full">
                        Uploaded All
                      </span>
                    </div>

                    <div className="mobile:ml-3 flex items-center mobile:items-center">
                      <span className="mobile:mr-5 text-[#A3A3A3] font-gola text-sm">
                        2/2 files
                      </span>
                      <span className="mobile:hidden mobile:mr-3 w-[110px] text-center tabanddesk:ml-10 font-gola text-sm text-[#1EA808] bg-[#E6FFE2] py-1 px-2 rounded-full">
                        Uploaded All
                      </span>
                      <img
                        className="mobile:mr-3 tabanddesk:ml-10"
                        src="../download.svg"
                        alt="Download SVG"
                      />
                      <button
                        onClick={() => router.push("/viewapplicationstatus")}
                        type="button"
                        className="mobile:ml-3 tabanddesk:ml-10 h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                      >
                        View
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mobile:items-start justify-between mt-10">
                    <div className="flex mobile:flex-col">
                      <span className="mobile:min-w-[100px] font-gola text-base">
                        Work Experience
                      </span>
                      <span className="mt-3 tabanddesk:hidden w-[110px] text-center tabanddesk:ml-10 font-gola text-sm text-[#FF2222] bg-[#FFECEC] py-1 px-2 rounded-full">
                        Pending
                      </span>
                    </div>

                    <div className="mobile:ml-3 flex items-center mobile:items-center">
                      <span className="mobile:mr-5 text-[#A3A3A3] font-gola text-sm">
                        1/2 files
                      </span>
                      <span className="mobile:hidden mobile:mr-3 w-[110px] text-center tabanddesk:ml-10 font-gola text-sm text-[#FF2222] bg-[#FFECEC] py-1 px-2 rounded-full">
                        Pending
                      </span>
                      <img
                        className="mobile:mr-3 tabanddesk:ml-10"
                        src="../download.svg"
                        alt="Download SVG"
                      />
                      <button
                        onClick={() => router.push("/viewapplicationstatus")}
                        type="button"
                        className="mobile:ml-3 tabanddesk:ml-10 h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                      >
                        View
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mobile:items-start justify-between mt-10">
                    <div className="flex mobile:flex-col">
                      <span className="mobile:min-w-[100px] font-gola text-base">
                        PAN Card
                      </span>
                      <span className="mt-3 tabanddesk:hidden w-[110px] text-center tabanddesk:ml-10 font-gola text-sm text-[#1EA808] bg-[#E6FFE2] py-1 px-2 rounded-full">
                        Uploaded All
                      </span>
                    </div>

                    <div className="mobile:ml-3 flex items-center mobile:items-center">
                      <span className="mobile:mr-5 text-[#A3A3A3] font-gola text-sm">
                        1/1 file
                      </span>
                      <span className="mobile:hidden mobile:mr-3 w-[110px] text-center tabanddesk:ml-10 font-gola text-sm text-[#1EA808] bg-[#E6FFE2] py-1 px-2 rounded-full">
                        Uploaded All
                      </span>
                      <img
                        className="mobile:mr-3 tabanddesk:ml-10"
                        src="../download.svg"
                        alt="Download SVG"
                      />
                      <button
                        onClick={() => router.push("/viewapplicationstatus")}
                        type="button"
                        className="mobile:ml-3 tabanddesk:ml-10 h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                      >
                        View
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mobile:items-start justify-between mt-10">
                    <div className="flex mobile:flex-col">
                      <span className="mobile:min-w-[100px] font-gola text-base">
                        College Degree
                      </span>
                      <span className="mt-3 tabanddesk:hidden w-[110px] text-center tabanddesk:ml-10 font-gola text-sm text-[#FF2222] bg-[#FFECEC] py-1 px-2 rounded-full">
                        Pending
                      </span>
                    </div>

                    <div className="mobile:ml-3 flex items-center mobile:items-center">
                      <span className="mobile:mr-5 text-[#A3A3A3] font-gola text-sm">
                        1/2 files
                      </span>
                      <span className="mobile:hidden mobile:mr-3 w-[110px] text-center tabanddesk:ml-10 font-gola text-sm text-[#FF2222] bg-[#FFECEC] py-1 px-2 rounded-full">
                        Pending
                      </span>
                      <img
                        className="mobile:mr-3 tabanddesk:ml-10"
                        src="../download.svg"
                        alt="Download SVG"
                      />
                      <button
                        onClick={() => router.push("/viewapplicationstatus")}
                        type="button"
                        className="mobile:ml-3 tabanddesk:ml-10 h-10 font-gola border border-[#D5D5D5] text-[#0057E4] bg-[#F5F9FF] font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className="min-h-screen desktop:p-[36px] p-[16px] bg-[#F2F2F2]">
                <div className="desktop:p-10 p:5 mt-5">
                  <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow ">
                    <p className="font-gola font-bold text-[16px] pb-20">
                      OTHER BANK OFFERS
                    </p>
                    <div style={{
                      marginLeft:'-130px'
                    }} className="flex justify-center">
                    <OtherBankOffers2/>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
        <DrawerOverlay />
        <DrawerContent>
          <div className="p-5">
            <div className="w-full flex items-center justify-between">
              <span className="text-2xl font-gola font-semibold">Offer</span>
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
                Type 3
              </label>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default viewapplicationstatus;
