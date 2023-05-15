import React, { useState } from "react";

function FAQ() {
  const [accordion, setAccordion] = useState("1");
  return (
    <div className="w-full flex flex justify-center tabanddesk:mb-20">
      <div className="desktop:w-11/12 desktop:max-w-custom1300">
        <div className="w-full flex justify-center">
          <h1 className="my-12 text-center text-primary-color text-2xl font-semibold font-gola">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>
        <div id="accordion-collapse" data-accordion="collapse">
          <div
            className={`${
              accordion === "1"
                ? "bg-[#FFE1CF] rounded-t-lg border-b-2 border-primary-color"
                : "bg-white"
            }`}
          >
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className={`${
                  accordion === "1"
                    ? "border-none"
                    : "border-0 border-b-2 border-b-gray-200"
                } flex items-center justify-between mt-2 w-full p-5 font-medium text-left text-gray-500`}
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
                onClick={() =>
                  accordion === "1" ? setAccordion("0") : setAccordion("1")
                }
              >
                <span className="font-bold font-golo">What is fundmygrad?</span>
                {accordion === "1" ? (
                  <svg
                    data-accordion-icon
                    className="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    data-accordion-icon
                    className="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
              </button>
            </h2>
            {accordion === "1" && (
              <div
                className="transition-all duration-500 ease-in-out"
                id="accordion-collapse-body-1"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div className="p-5">
                  <p className="mb-2 text-gray-500">
                    fundmygrad is a lorem ipsum Amet minim mollit non deserunt
                    ullamco est sit aliqua dolor do amet sint. Velit officia
                    consequat duis enim velit mollit. Exercitation veniam non
                    deserunt ullamco est sit aliqua dolor do amet sint. Velit
                    officia consequat duis enim velit mollit. Exercitation
                    veniam
                  </p>
                </div>
              </div>
            )}
          </div>
          <div
            className={`${
              accordion === "2"
                ? "bg-[#FFE1CF] rounded-t-lg border-b-2 border-primary-color"
                : "bg-white"
            }`}
          >
            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                className={`${
                  accordion === "2"
                    ? "border-none"
                    : "border-0 border-b-2 border-b-gray-200"
                } flex items-center justify-between mt-2 w-full p-5 font-medium text-left text-gray-500`}
                data-accordion-target="#accordion-collapse-body-2"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-2"
                onClick={() =>
                  accordion === "2" ? setAccordion("0") : setAccordion("2")
                }
              >
                <span className="font-bold font-golo">Is there a Figma file available?</span>
                {accordion === "2" ? (
                  <svg
                    data-accordion-icon
                    className="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    data-accordion-icon
                    className="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
              </button>
            </h2>
            {accordion === "2" && (
              <div
                id="accordion-collapse-body-2"
                className="transition-all duration-500 ease-in-out"
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div className="p-5">
                  <p className="mb-2 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium facere nihil, reiciendis necessitatibus alias
                    quas obcaecati nemo at molestiae quisquam esse omnis
                    asperiores dolorem neque et exercitationem officiis id
                    accusamus! Ut, eum placeat suscipit voluptatem veritatis
                    necessitatibus sunt similique est rem minima, nobis sint aut
                    dolorem! Architecto at culpa quibusdam ea eveniet, repellat
                    autem qui, dicta eos sed laboriosam quae sint voluptas
                    perferendis facere, ex unde quia suscipit ab repudiandae.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div
            className={`${
              accordion === "3"
                ? "bg-[#FFE1CF] rounded-t-lg border-b-2 border-primary-color"
                : "bg-white"
            }`}
          >
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                className={`${
                  accordion === "3"
                    ? "border-none"
                    : "border-0 border-b-2 border-b-gray-200"
                } flex items-center justify-between mt-2 w-full p-5 font-medium text-left text-gray-500`}
                data-accordion-target="#accordion-collapse-body-3"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-3"
                onClick={() =>
                  accordion === "3" ? setAccordion("0") : setAccordion("3")
                }
              >
                <span className="font-bold font-golo">Lorem ipsum dolor sit amet.?</span>
                {accordion === "3" ? (
                  <svg
                    data-accordion-icon
                    className="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    data-accordion-icon
                    className="w-6 h-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
              </button>
            </h2>
            {accordion === "3" && (
              <div
                id="accordion-collapse-body-3"
                className="transition-all duration-500 ease-in-out"
                aria-labelledby="accordion-collapse-heading-3"
              >
                <div className="p-5 border border-t-0 border-gray-200">
                  <p className="mb-2 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem, modi. Velit officia recusandae voluptatem est
                    officiis assumenda doloribus rem culpa corporis! Architecto
                    dignissimos consectetur facere similique facilis magnam
                    quibusdam cumque molestiae culpa commodi, modi ipsum,
                    tenetur harum, hic omnis porro sit itaque aspernatur quasi
                    perspiciatis nulla! Non et fugiat reprehenderit?
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
