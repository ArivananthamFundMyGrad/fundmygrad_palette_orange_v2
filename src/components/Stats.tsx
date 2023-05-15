import React from "react";

function Stats() {
  return (
    <div className="w-full flex flex justify-center">
      <div className="desktop:w-3/4 desktop:max-w-custom1300 tablet:width95	flex flex-col items-center">
        <h1 className="mt-12 text-2xl text-primary-color font-semibold font-gola">
          STATS SO FAR
        </h1>
        <div className="w-full grid tabanddesk:grid-cols-4 mt-10 mb-16">
          <div className="flex flex-col w-full items-center">
            <img
              style={{ height: "70px" }}
              src="../stat1.svg"
              alt="Stat Image 1"
            />
            <span className="font-gola text-2xl font-medium mt-5">400+</span>
            <span className="font-gola text-base font-normal mt-2">
              Loan processed
            </span>
          </div>
          <div className="mobile:mt-8 flex flex-col w-full items-center">
            <div style={{ height: "70px" }}>
              <img
                style={{ height: "60px" }}
                src="../stat2.svg"
                alt="Stat Image 2"
              />
            </div>
            <span className="font-gola text-2xl font-medium mt-5">121 Cr+</span>
            <span className="font-gola text-base font-normal mt-2">
              Rupees processed
            </span>
          </div>
          <div className="mobile:mt-8 flex flex-col w-full items-center">
            <img
              style={{ height: "70px" }}
              src="../stat3.svg"
              alt="Stat Image 3"
            />
            <span className="font-gola text-2xl font-medium mt-5">{"<12hrs"}</span>
            <span className="font-gola text-base font-normal mt-2">
              Average turn around time
            </span>
          </div>
          <div className="mobile:mt-8 flex flex-col w-full items-center">
            <img
              style={{ height: "70px" }}
              src="../stat4.svg"
              alt="Stat Image 4"
            />
            <span className="font-gola text-2xl font-medium mt-5">25+</span>
            <span className="font-gola text-base font-normal mt-2">
              Partner banks
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
