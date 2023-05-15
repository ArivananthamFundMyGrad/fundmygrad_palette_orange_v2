import React from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";
import screens from "@/utils/screens";

interface HelpModalProps {
  isModalOpen: boolean;
  onModalClose: () => void;
}

function HelpModal({ isModalOpen, onModalClose }: HelpModalProps) {
    const {isMobile,isTablet} = screens()
  return (
    <Modal onClose={onModalClose} size={`${isMobile ? "md" : isTablet ? "3xl" : "4xl"}`} isOpen={isModalOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody style={{ padding: "0", borderRadius: "15px"}}>
          <div className="flex w-full">
            <div className="mobile:hidden min-w-[360px] flex flex-col items-center bg-[#0057E4] rounded-l-[5px]">
              <h1 className="pt-[60px] font-gola font-bold leading-[43px] text-[36px] text-white">
                Get in Touch <br /> with us Today!
              </h1>
              <img
                className="py-[60px]"
                src="/Guidanceimg.svg"
                alt="Guidance Image"
              />
            </div>
            <div className="w-full tabanddesk:pt-[100px] mobile:py-[70px] mobile:min-w-[90%] tabanddesk:px-[60px] mobile:px-[30px]">
            <h1 className="tabanddesk:hidden pb-[40px] font-gola font-bold leading-[43px] text-[36px] text-primary-color">
                Get in Touch <br /> with us Today!
              </h1>
              <span className="font-gola font-semibold text-[28px] text-[#2F2F2F]">
                Need guidance?
              </span>
              <p className="font-gola text-[#8D8D8D] text-[14px]">Contact your assigned agent to clear all your doubts and help you in onboarding</p>
              <div className="flex mt-5">
                <img src="ContactAvatar.svg" alt="Avatar Image" />
                <div className="ml-3">
                    <span className="font-gola font-medium text-[20px] text-[#2F2F2F]">Aakash Kumar V</span>
                    <p className="font-gola text-[14px] font-medium text-[#AAAAAA]">Fundmygrad agent</p>
                    <span className="font-gola font-normal text-[14px] text-[#2F2F2F]">+91 9876454321</span>

                </div>
            </div>
            </div>
            
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default HelpModal;
