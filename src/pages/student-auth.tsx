import React, { useState } from "react";
import { useRouter } from "next/router";
import OtpInput from "@/components/reusable/OTPInput";
import Head from "next/head";

function student() {
  const [choosenTab, setChoosenTab] = useState("emailSignIn");
  const router = useRouter();
  const handleChange = () => {};
  return (
    <>
      <Head>
        <title>Student Login</title>
      </Head>
      <div className="w-screen h-screen bg-light-color relative flex items-center justify-center">
        <div className="tabanddesk:w-9/12 mobile:w-11/12 desktop:w-custom996 tabanddesk:h-4/5 mobile:h-h90 shadow-2xl bg-white rounded-2xl flex">
          <div className="w-2/5 tablet:hidden mobile:hidden bg-primary-color h-full rounded-l-lg">
            <h1 className="font-gola text-4xl font-bold text-white pl-10 pt-10 leading-snug mr-14">
              Welcome to fundmygrad student portal
            </h1>
            <p className="opacity-70 font-gola text-base text-white pl-10 mt-6 mr-14 font-normal">
              Create your account and start your process of receiving loan
              bidding from top banks for your overseas education
            </p>
          </div>
          <div className="desktop:w-3/5 tablet:w-full mobile:w-full tabanddesk:pl-pad74 tabanddesk:pr-pad74 mobile:pl-8 mobile:pr-8 flex flex-col justify-center">
          <div className="desktop:hidden rounded-l-lg">
            <h1 className="font-gola text-2xl mobile:mb-8 font-bold text-primary-color pt-10 leading-snug">
              Welcome to fundmygrad student portal
            </h1>
            <p className="opacity-70 font-gola text-base text-about-text-color tabanddesk:mt-6 tabanddesk:mb-20 mobile:mb-8 font-normal">
              Create your account and start your process of receiving loan
              bidding from top banks for your overseas education
            </p>
          </div>
            {choosenTab === "mobileSignIn" && (
              <div>
                <span className="text-3xl font-semibold">Sign in</span>
                <p className="text-sm	font-normal text-subtext opacity-70 mt-5">
                  Enter your mobile number
                </p>
                <div style={{ height: "48px" }} className="flex mt-1.5">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                    INR (+91)
                  </span>
                  <input
                    value={9876544213}
                    type="text"
                    id="website-admin"
                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                  />
                </div>
                <button
                  onClick={() => setChoosenTab("OTPPage")}
                  type="button"
                  className="h-10 mt-6 w-full font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Continue
                </button>
                <div className="flex flex-col items-center w-full">
                  <span
                    onClick={() => setChoosenTab("emailSignIn")}
                    className="cursor-pointer mt-6 text-primary-color text-base font-semibold font-gola"
                  >
                    Sign in using email address
                  </span>
                  <div className="flex items-center mt-6">
                    <p className="text-base font-gola opacity-70 text-subtext">
                      New User?
                    </p>
                    &nbsp;
                    <span
                      className="cursor-pointer text-primary-color text-base font-semibold font-gola"
                      onClick={() => setChoosenTab("CreateAccMobile")}
                    >
                      Create account
                    </span>
                  </div>
                </div>
              </div>
            )}
            {choosenTab === "emailSignIn" && (
              <div>
                <span className="text-3xl font-semibold">Sign in</span>
                <p className="text-sm	font-normal text-subtext opacity-70 mt-5">
                  Email
                </p>
                <div style={{ height: "48px" }} className="flex mt-1.5">
                  <input
                    type="text"
                    id="website-admin"
                    className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                    placeholder="Ex: johndoe@gmail.com"
                  />
                </div>
                <p className="text-smfont-normal text-subtext opacity-70 mt-5">
                  Password
                </p>
                <div style={{ height: "48px" }} className="flex mt-1.5">
                  <input
                    type="passowrd"
                    id="website-admin"
                    className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                    placeholder="* * * * *"
                  />
                </div>
                <button
                  type="button"
                  className="h-10 mt-6 w-full font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Continue
                </button>
                <div className="flex flex-col items-center w-full">
                  <span
                    onClick={() => setChoosenTab("mobileSignIn")}
                    className="cursor-pointer mt-6 text-primary-color text-base font-semibold font-gola"
                  >
                    Sign in using mobile number
                  </span>
                  <div className="flex items-center mt-6">
                    <p className="text-base font-gola opacity-70 text-subtext">
                      New User?{" "}
                    </p>{" "}
                    &nbsp;
                    <span
                      className="cursor-pointer text-primary-color text-base font-semibold font-gola"
                      onClick={() => setChoosenTab("CreateAccMobile")}
                    >
                      Create account
                    </span>
                  </div>
                </div>
              </div>
            )}
            {choosenTab === "OTPPage" && (
              <div>
                <span className="text-3xl font-semibold">Enter OTP</span>
                <div className="tabanddesk:flex mobile:flex-col item-center mt-5">
                  <p className="text-sm	font-normal text-subtext opacity-70 ">
                    Enter the OTP we sent to +919977665534 &nbsp;
                  </p>
                  <p className="text-sm mobile:mt-2 text-primary-color font-semibold">
                    Change number
                  </p>
                </div>
                <div className="mt-5">
                  <OtpInput
                    value={"546789"}
                    valueLength={6}
                    onChange={handleChange}
                  />
                </div>
                <button
                  onClick={() => router.push("/student-onboarding")}
                  type="button"
                  className="h-10 mt-6 w-full font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Verify
                </button>
                <div className="flex w-full justify-between mt-3">
                  <span className="font-gola font-normal text-base">01:57</span>
                  <span className="font-gola font-semibold text-base text-primary-color opacity-30">
                    Resend OTP
                  </span>
                </div>
                <div className="flex flex-col items-center w-full">
                  <span
                    onClick={() => setChoosenTab("emailSignIn")}
                    className="cursor-pointer mt-6 text-primary-color text-base font-semibold font-gola"
                  >
                    Sign in using email address
                  </span>
                  <div className="flex items-center mt-6">
                    <p className="text-base font-gola opacity-70 text-subtext">
                      New User?
                    </p>
                    &nbsp;
                    <span
                      className="cursor-pointer text-primary-color text-base font-semibold font-gola"
                      onClick={() => setChoosenTab("CreateAccMobile")}
                    >
                      Create account
                    </span>
                  </div>
                </div>
              </div>
            )}
            {choosenTab === "CreateAccMobile" && (
              <div>
                <span className="text-3xl font-semibold">Create account</span>
                <p className="text-sm	font-normal text-subtext opacity-70 mt-5">
                  Enter your mobile number
                </p>
                <div style={{ height: "48px" }} className="flex mt-1.5">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                    INR (+91)
                  </span>
                  <input
                    value={9876544213}
                    type="text"
                    id="website-admin"
                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                  />
                </div>
                <button
                  onClick={() => setChoosenTab("OTPPage")}
                  type="button"
                  className="h-10 mt-6 w-full font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Continue
                </button>
                <div className="flex flex-col items-center w-full">
                  <span
                    onClick={() => setChoosenTab("CreateAccEmail")}
                    className="cursor-pointer mt-6 text-primary-color text-base font-semibold font-gola"
                  >
                    Create account using email address
                  </span>
                  <div className="flex items-center mt-6">
                    <p className="text-base font-gola opacity-70 text-subtext">
                      Already have an account?
                    </p>
                    &nbsp;
                    <span
                      onClick={() => setChoosenTab("mobileSignIn")}
                      className="text-primary-color text-base font-semibold font-gola"
                    >
                      Sign in
                    </span>
                  </div>
                </div>
              </div>
            )}
            {choosenTab === "CreateAccEmail" && (
              <div>
                <span className="text-3xl font-semibold">Create account</span>
                <div className="w-full justify-between flex items-center">
                  <div style={{ width: "49%" }}>
                    <p className="text-sm	font-normal text-subtext opacity-70 mt-5">
                      First Name
                    </p>
                    <div style={{ height: "48px" }} className="flex mt-1.5">
                      <input
                        type="text"
                        id="website-admin"
                        className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                        placeholder="Ex: John"
                      />
                    </div>
                  </div>
                  <div style={{ width: "49%" }}>
                    <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                      Last Name
                    </p>
                    <div style={{ height: "48px" }} className="flex mt-1.5">
                      <input
                        type="text"
                        id="website-admin"
                        className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                        placeholder="Ex: Doe"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-sm	font-normal text-subtext opacity-70 mt-5">
                  Email
                </p>
                <div style={{ height: "48px" }} className="flex mt-1.5">
                  <input
                    type="text"
                    id="website-admin"
                    className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                    placeholder="Ex: johndoe@gmail.com"
                  />
                </div>
                <div className="w-full justify-between flex items-center">
                  <div style={{ width: "49%" }}>
                    <p className="text-sm	font-normal text-subtext opacity-70 mt-5">
                      Password
                    </p>
                    <div style={{ height: "48px" }} className="flex mt-1.5">
                      <input
                        type="password"
                        id="website-admin"
                        className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                        placeholder="* * * * *"
                      />
                    </div>
                  </div>
                  <div style={{ width: "49%" }}>
                    <p className="text-sm font-normal text-subtext opacity-70 mt-5">
                      Confirm Password
                    </p>
                    <div style={{ height: "48px" }} className="flex mt-1.5">
                      <input
                        type="passowrd"
                        id="website-admin"
                        className="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                        placeholder="* * * * *"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="h-10 mt-6 w-full font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Continue
                </button>
                <div className="flex flex-col items-center w-full">
                  <span
                    onClick={() => setChoosenTab("CreateAccMobile")}
                    className="cursor-pointer mt-6 text-primary-color text-base font-semibold font-gola"
                  >
                    Create account using mobile number
                  </span>
                  <div className="flex items-center mt-6">
                    <p className="text-base font-gola opacity-70 text-subtext">
                      Already have an account?
                    </p>
                    &nbsp;
                    <span
                      onClick={() => setChoosenTab("mobileSignIn")}
                      className="text-primary-color text-base font-semibold font-gola"
                    >
                      Sign in
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default student;
