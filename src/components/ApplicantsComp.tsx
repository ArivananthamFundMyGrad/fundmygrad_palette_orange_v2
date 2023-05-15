import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Select } from "@chakra-ui/select";
import MobileSidebar from "./reusable/MobileSidebar";
import { Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/modal";

function ApplicantsComp() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

  const onFilterSidebarOpen = () => {
    setIsFilterSidebarOpen(true);
  };

  const onFilterSidebarClose = () => {
    setIsFilterSidebarOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="w-full flex justify-center">
      <Head>
        <title>Bank Applications</title>
      </Head>
      <div className="relative w-11/12 mb-20">
        <div className="mobile:hidden flex items-center mt-10">
          <div className="flex items-center">
            <h1 className="font-gola text-[28px] font-bold">Applications</h1>
            <div className="ml-5 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_56_3185)">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      fillOpacity="0.01"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L9.47653 10.8907ZM10 6C10 8.20914 8.20914 10 6 10C3.79086 10 2 8.20914 2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6Z"
                      fill="#6B778C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_56_3185">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Search"
              />
            </div>
          </div>
          <div
            onClick={onFilterSidebarOpen}
            className="cursor-pointer flex items-center border-[#CECECE] border-[1px] rounded-lg ml-5"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0484 14H25.0484L20.0384 20.3L15.0484 14ZM12.2984 13.61C14.3184 16.2 18.0484 21 18.0484 21V27C18.0484 27.55 18.4984 28 19.0484 28H21.0484C21.5984 28 22.0484 27.55 22.0484 27V21C22.0484 21 25.7684 16.2 27.7884 13.61C28.2984 12.95 27.8284 12 26.9984 12H13.0884C12.2584 12 11.7884 12.95 12.2984 13.61Z"
                fill="#0057E4"
              />
            </svg>
            <span className="font-gola text-base mr-[90px]">Filter</span>
          </div>
        </div>
        <div className="tabanddesk:hidden">
          <div className="mt-5 flex justify-between">
            <div className="flex items-center mb-10">
              <img onClick={onOpen} src="../menu.svg" alt="Menu Icon" />
              <h1 className="ml-5 font-gola text-2xl font-bold">Applications</h1>
            </div>
            <img src="/SearchIcon.svg" alt="Search Icon" />
          </div>
          <div className="w-full mt-5">
            <Select bg="white">
              <option value="option1">All</option>
            </Select>
          </div>
          <div className="flex items-center mt-5">
            <input
              defaultChecked
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="checked-checkbox"
              className="ml-2 text-sm font-medium text-[#202020] font-gola"
            >
              Only show ‘With Collateral’
            </label>
          </div>
        </div>
        <div className="tablet:hidden mobile:hidden mt-10 relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase border-b">
              <tr>
                <th scope="col" className="px-[0.5rem] py-3">
                  <div className="flex items-center">
                    <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                      Applicant Name
                    </span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                        fill="#767676"
                        fillOpacity="0.87"
                      />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-[0.5rem] py-3">
                  <div className="flex items-center">
                    <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                      State
                    </span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                        fill="#767676"
                        fillOpacity="0.87"
                      />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-[0.5rem] py-3">
                  <div className="flex items-center">
                    <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                     City
                    </span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                        fill="#767676"
                        fillOpacity="0.87"
                      />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-[0.5rem] py-3">
                  <div className="flex items-center">
                    <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                      Loan Amount
                    </span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                        fill="#767676"
                        fillOpacity="0.87"
                      />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-[0.5rem] py-3">
                  <div className="flex items-center">
                    <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                      Collateral
                    </span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                        fill="#767676"
                        fillOpacity="0.87"
                      />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-[0.5rem] py-3">
                  <div className="flex items-center">
                    <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                      Opt. College
                    </span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                        fill="#767676"
                        fillOpacity="0.87"
                      />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-[0.5rem] py-3">
                  <div className="flex items-center">
                    <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87] mr-3">
                      Opt. Country
                    </span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6L10.9425 4.9425L6.75 9.1275V0H5.25V9.1275L1.065 4.935L0 6L6 12L12 6Z"
                        fill="#767676"
                        fillOpacity="0.87"
                      />
                    </svg>
                  </div>
                </th>
                <th scope="col" className="px-[0.5rem]py-3">
                  <div className="flex items-center">
                    <span className="capitalize text-sm font-gola font-medium text-[#767676DE]/[.87]">
                      Action
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                    Nikhil Mathew
                  </span>
                </th>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Delhi
                  </span>
                </td>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  West Delhi	
                  </span>
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  ₹40,00,000
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  Yes
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                The University of Manchester
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  UK
                </td>
                <td>
                  <button
                  onClick={()=>router.push("/viewapplication")}
                    type="button"
                    className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Bhaskar Patil	
                  </span>
                </th>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Maharashtra
                  </span>
                </td>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Pune		
                  </span>
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  ₹3,200,000	
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  No
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                Massachusetts Institute of Technology
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                USA
                </td>
                <td>
                  <button
                    type="button"
                    className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Arindam Saha		
                  </span>
                </th>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Tamil Nadu
                  </span>
                </td>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Chennai		
                  </span>
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  ₹2,000,000		
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  Yes
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                Carnegie Mellon University	
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                USA
                </td>
                <td>
                  <button
                    type="button"
                    className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Anamika Ranaut	
                  </span>
                </th>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Delhi
                  </span>
                </td>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Central Delhi		
                  </span>
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  ₹3,500,000		
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  No
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                Heidelberg University	
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                Germany
                </td>
                <td>
                  <button
                    type="button"
                    className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Aarif Khan	
                  </span>
                </th>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Rajasthan
                  </span>
                </td>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Jaipur		
                  </span>
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  ₹4,500,000	
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  Yes
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                University of Western Australia	
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                Australia
                </td>
                <td>
                  <button
                    type="button"
                    className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Ankit R Patel	
                  </span>
                </th>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Gujarat	
                  </span>
                </td>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Vadodara		
                  </span>
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  ₹1,800,000	
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  No
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                Paris College of Art		
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                France
                </td>
                <td>
                  <button
                    type="button"
                    className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Atraye Panchanan	
                  </span>
                </th>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Punjab	
                  </span>
                </td>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Ludhiana		
                  </span>
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  ₹2,500,000
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  Yes
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                Queen Mary University of London	
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                UK
                </td>
                <td>
                  <button
                    type="button"
                    className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Ch.Anush Kumar		
                  </span>
                </th>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Andhra Pradesh		
                  </span>
                </td>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Visakhapatnam		
                  </span>
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  ₹3,000,000
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  Yes
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                Carleton University		
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                Canada
                </td>
                <td>
                  <button
                    type="button"
                    className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Ananya.R	
                  </span>
                </th>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Karnataka	
                  </span>
                </td>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Bengaluru		
                  </span>
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  ₹2,800,000	
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  Yes
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                Swinburne University of Technology		
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                Australia
                </td>
                <td>
                  <button
                    type="button"
                    className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Anchit Sahni		
                  </span>
                </th>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  West Bengal	
                  </span>
                </td>
                <td scope="row" className="px-[0.5rem] py-4">
                  <span className="font-gola text-sm font-medium text-black">
                  Kolkata	
                  </span>
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  ₹2,200,000	
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                  Yes
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                University of Calgary		
                </td>
                <td className="px-[0.5rem] py-4 font-gola text-sm font-medium text-black">
                Canada
                </td>
                <td>
                  <button
                    type="button"
                    className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="desktop:hidden mt-5 grid tablet:grid-cols-2 gap-3">
          <div
            onClick={() => router.push("/viewapplication")}
            className="cursor-pointer block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
          >
            <div className="flex item-center mb-2">
              <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                Nikhil Mathew
              </h5>
              <img src="/rightIconGray.svg" alt="" />
            </div>

            <p className="font-gola text-sm text-[#7E7E7E]">
              Coimbatore, TN - 641606
            </p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                Loan amount <br /> requested
              </span>
              <span className="text-[#292929] font-medium text-base font-gola">
                ₹40,00,000
              </span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                Able to provide <br /> collateral
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
               USA
              </span>
            </div>
          </div>
          <div
            onClick={() => router.push("/viewapplication")}
            className="cursor-pointer block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
          >
            <div className="flex item-center mb-2">
              <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                Nikhil Mathew
              </h5>
              <img src="/rightIconGray.svg" alt="" />
            </div>
            <p className="font-gola text-sm text-[#7E7E7E]">
              Coimbatore, TN - 641606
            </p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                Loan amount <br /> requested
              </span>
              <span className="text-[#292929] font-medium text-base font-gola">
                ₹40,00,000
              </span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                Able to provide <br /> collateral
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
               USA
              </span>
            </div>
          </div>
          <div
            onClick={() => router.push("/viewapplication")}
            className="cursor-pointer block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
          >
            <div className="flex item-center mb-2">
              <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                Nikhil Mathew
              </h5>
              <img src="/rightIconGray.svg" alt="" />
            </div>
            <p className="font-gola text-sm text-[#7E7E7E]">
              Coimbatore, TN - 641606
            </p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                Loan amount <br /> requested
              </span>
              <span className="text-[#292929] font-medium text-base font-gola">
                ₹40,00,000
              </span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                Able to provide <br /> collateral
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
               USA
              </span>
            </div>
          </div>
          <div
            onClick={() => router.push("/viewapplication")}
            className="cursor-pointer block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
          >
            <div className="flex item-center mb-2">
              <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                Nikhil Mathew
              </h5>
              <img src="/rightIconGray.svg" alt="" />
            </div>
            <p className="font-gola text-sm text-[#7E7E7E]">
              Coimbatore, TN - 641606
            </p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                Loan amount <br /> requested
              </span>
              <span className="text-[#292929] font-medium text-base font-gola">
                ₹40,00,000
              </span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                Able to provide <br /> collateral
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
               USA
              </span>
            </div>
          </div>
          <div
            onClick={() => router.push("/viewapplication")}
            className="cursor-pointer block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
          >
            <div className="flex item-center mb-2">
              <h5 className=" mr-3 text-base font-semibold text-[#313131]">
                Nikhil Mathew
              </h5>
              <img src="/rightIconGray.svg" alt="" />
            </div>
            <p className="font-gola text-sm text-[#7E7E7E]">
              Coimbatore, TN - 641606
            </p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                Loan amount <br /> requested
              </span>
              <span className="text-[#292929] font-medium text-base font-gola">
                ₹40,00,000
              </span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[#000000]/[.30] font-medium text-base font-gola">
                Able to provide <br /> collateral
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
               USA
              </span>
            </div>
          </div>
        </div>
      </div>
      <MobileSidebar isOpen={isOpen} onClose={onClose} />
      <Drawer
        isOpen={isFilterSidebarOpen}
        placement="right"
        onClose={onFilterSidebarClose}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <div className="flex flex-col h-full justify-between">
            <div className="p-5">
              <div className="w-full flex items-center justify-between">
                <span className="text-2xl font-gola font-semibold">
                  Filter Options
                </span>
                <img
                  onClick={onFilterSidebarClose}
                  className="cursor-pointer"
                  src="../close.svg"
                  alt="Close Icon"
                />
              </div>
              <div className="w-full mt-5">
                <Select style={{ height: "45px" }} bg="white">
                  <option value="option1">Latest</option>
                  <option value="option1">Last 1 week</option>
                  <option value="option1">Last 1 month</option>
                </Select>
              </div>
              <div className="w-full mt-5">
                <Select style={{ height: "45px" }} bg="white">
                  <option value="option1">Select State</option>
                  <option value="option1">Tamil Nadu</option>
                  <option value="option1">Andhra Pradesh</option>
                </Select>
              </div>
              <div className="w-full mt-5">
                <Select style={{ height: "45px" }} bg="white">
                  <option value="option1">Select District</option>
                  <option value="option1">Chennai</option>
                  <option value="option1">Banglore</option>
                </Select>
              </div>
              <div className="w-full mt-5">
                <Select style={{ height: "45px" }} bg="white">
                  <option value="option1">Select Loan Amount Range</option>
                  <option value="option1">Chennai</option>
                  <option value="option1">Banglore</option>
                </Select>
              </div>
              <div className="flex items-center mt-7">
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
                  Only show ‘With Collateral’
                </label>
              </div>
            </div>
            <div className="p-5 w-full">
              <button
                onClick={onFilterSidebarClose}
                type="button"
                className="w-full h-[45px] mt-5 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 focus:outline-none"
              >
                Apply
              </button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default ApplicantsComp;
