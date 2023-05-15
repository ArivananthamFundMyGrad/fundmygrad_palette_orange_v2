
import { Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/modal";
import { useRouter } from "next/router";
import React from "react";

interface StudentPortalMobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function StudentPortalMobileSidebar({ isOpen, onClose }: StudentPortalMobileSidebarProps) {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <Drawer
      variant="sidebardrawer1"
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      size={"xs"}
    >
      <DrawerOverlay />
      <DrawerContent>
        <div>
          <div
            style={{ border: "1px solid #E3E3E3" }}
            className="flex flex-col items-center h-screen w-[130px] pt-10"
          >
            <div
                onClick={() => router.push("/studentportal")}
                className={`${
                  currentRoute.includes("/studentportal")
                    ? "bg-[#DFECFF] pt-[11px] pb-[11px] pl-[12px] pr-[12px] rounded-lg"
                    : ""
                } flex flex-col items-center cursor-pointer`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    opacity={`${
                      currentRoute.includes("/studentportal") ? "1" : "0.3"
                    }`}
                  >
                    <path
                      d="M15.29 10.29L12.51 13.07C12.3436 13.0257 12.1723 13.0022 12 13C11.4696 13 10.9609 13.2107 10.5858 13.5858C10.2107 13.9609 10 14.4696 10 15C10.0023 15.1722 10.0258 15.3435 10.07 15.51L9.29003 16.29C9.1963 16.383 9.12191 16.4936 9.07114 16.6154C9.02037 16.7373 8.99423 16.868 8.99423 17C8.99423 17.132 9.02037 17.2627 9.07114 17.3846C9.12191 17.5064 9.1963 17.617 9.29003 17.71C9.38299 17.8037 9.49359 17.8781 9.61545 17.9289C9.73731 17.9797 9.86802 18.0058 10 18.0058C10.132 18.0058 10.2627 17.9797 10.3846 17.9289C10.5065 17.8781 10.6171 17.8037 10.71 17.71L11.49 16.93C11.6565 16.9743 11.8278 16.9978 12 17C12.5305 17 13.0392 16.7893 13.4142 16.4142C13.7893 16.0391 14 15.5304 14 15C13.9978 14.8278 13.9743 14.6565 13.93 14.49L16.71 11.71C16.8983 11.5217 17.0041 11.2663 17.0041 11C17.0041 10.7337 16.8983 10.4783 16.71 10.29C16.5217 10.1017 16.2663 9.99591 16 9.99591C15.7337 9.99591 15.4783 10.1017 15.29 10.29ZM12 4C10.6868 4 9.38645 4.25866 8.1732 4.7612C6.95994 5.26375 5.85755 6.00035 4.92896 6.92893C3.0536 8.8043 2.00003 11.3478 2.00003 14C1.99511 15.9806 2.58375 17.9172 3.69003 19.56C3.83855 19.7801 4.06844 19.9322 4.32911 19.9829C4.58979 20.0335 4.8599 19.9785 5.08003 19.83C5.30016 19.6815 5.45227 19.4516 5.50291 19.1909C5.55354 18.9302 5.49855 18.6601 5.35003 18.44C4.54455 17.2355 4.08131 15.8349 4.00978 14.3877C3.93826 12.9405 4.26113 11.501 4.94392 10.223C5.62671 8.94501 6.64378 7.87643 7.88653 7.13139C9.12928 6.38634 10.5511 5.99281 12 5.99281C13.449 5.99281 14.8708 6.38634 16.1135 7.13139C17.3563 7.87643 18.3734 8.94501 19.0561 10.223C19.7389 11.501 20.0618 12.9405 19.9903 14.3877C19.9188 15.8349 19.4555 17.2355 18.65 18.44C18.5763 18.5489 18.5248 18.6714 18.4985 18.8002C18.4722 18.9291 18.4716 19.0619 18.4966 19.191C18.5217 19.3201 18.572 19.443 18.6447 19.5527C18.7173 19.6623 18.8109 19.7566 18.92 19.83C19.0856 19.9412 19.2806 20.0004 19.48 20C19.6438 20.0002 19.8052 19.9603 19.9499 19.8835C20.0946 19.8068 20.2183 19.6957 20.31 19.56C21.4163 17.9172 22.005 15.9806 22 14C22 11.3478 20.9465 8.8043 19.0711 6.92893C17.1957 5.05357 14.6522 4 12 4Z"
                      fill={`${
                        currentRoute.includes("/studentportal")
                          ? "#0057E4"
                          : "black"
                      }`}
                    />
                  </g>
                </svg>
                <h1 className="text-sm font-gola font-semibold mt-3">
                  Dashboard
                </h1>
              </div>
              <div
                onClick={() => router.push("/loanoffers")}
                className={`${
                  currentRoute.includes("/loanoffers")
                    ? "bg-[#DFECFF] pt-[11px] pb-[11px] pl-[12px] pr-[12px] rounded-lg"
                    : ""
                } flex flex-col items-center cursor-pointer mt-7`}
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    opacity={`${
                      currentRoute.includes("/loanoffers") ? "1" : "0.3"
                    }`}
                  >
                    <path
                      d="M3.51416 13H5.51416V11H3.51416V13ZM3.51416 17H5.51416V15H3.51416V17ZM3.51416 9H5.51416V7H3.51416V9ZM7.51416 13H21.5142V11H7.51416V13ZM7.51416 17H21.5142V15H7.51416V17ZM7.51416 7V9H21.5142V7H7.51416ZM3.51416 13H5.51416V11H3.51416V13ZM3.51416 17H5.51416V15H3.51416V17ZM3.51416 9H5.51416V7H3.51416V9ZM7.51416 13H21.5142V11H7.51416V13ZM7.51416 17H21.5142V15H7.51416V17ZM7.51416 7V9H21.5142V7H7.51416Z"
                      fill={`${
                        currentRoute.includes("/loanoffers")
                          ? "#0057E4"
                          : "black"
                      }`}
                    />
                  </g>
                </svg>

                <h1 className="text-sm font-gola font-semibold mt-3">
                  Loan Offers
                </h1>
              </div>
              <div
                onClick={() => router.push("/mydocuments")}
                className={`${
                  currentRoute.includes("/mydocuments")
                    ? "bg-[#DFECFF] pt-[11px] pb-[11px] pl-[12px] pr-[12px] rounded-lg"
                    : ""
                } flex flex-col items-center cursor-pointer mt-7`}
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    opacity={`${
                      currentRoute.includes("/mydocuments") ? "1" : "0.3"
                    }`}
                  >
                    <path
                      d="M14.6842 5L19.5142 9.83V19H5.51416V5H14.6842ZM14.6842 3H5.51416C4.41416 3 3.51416 3.9 3.51416 5V19C3.51416 20.1 4.41416 21 5.51416 21H19.5142C20.6142 21 21.5142 20.1 21.5142 19V9.83C21.5142 9.3 21.3042 8.79 20.9242 8.42L16.0942 3.59C15.7242 3.21 15.2142 3 14.6842 3ZM7.51416 15H17.5142V17H7.51416V15ZM7.51416 11H17.5142V13H7.51416V11ZM7.51416 7H14.5142V9H7.51416V7Z"
                      fill={`${
                        currentRoute.includes("/mydocuments")
                          ? "#0057E4"
                          : "black"
                      }`}
                    />
                  </g>
                </svg>
                <h1 className="text-sm font-gola font-semibold mt-3">
                  My Documents
                </h1>
              </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default StudentPortalMobileSidebar;
