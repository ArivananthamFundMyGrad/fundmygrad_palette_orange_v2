import { useMediaQuery } from "@chakra-ui/react";

export default function screens() {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const [isTablet] = useMediaQuery("(max-width: 1023px)");

  return { isMobile,isTablet };
}
