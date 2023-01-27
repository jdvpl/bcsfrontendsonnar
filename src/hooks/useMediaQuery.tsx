import { useMediaQuery } from "react-responsive";
import { isSafari, isEdge, isFirefox, isOpera } from "react-device-detect";

export default function useMediaQueryResponsive() {
  const isMobile = useMediaQuery({
    query: "(max-width:575px)"
  })
  const isTablet = useMediaQuery({
    query: "(min-width: 576px) and (max-width: 1023px)"
  })
  const isBrowser = useMediaQuery({
    query: "(min-width: 1024px) "
  })
  const isXS = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 374px)"
  })
  const isSM = useMediaQuery({
    query: "(min-width: 375px) and (max-width: 743px)"
  })
  const isMD = useMediaQuery({
    query: "(min-width: 744px) and (max-width: 1023px)"
  })
  const isLG = useMediaQuery({
    query: "(min-width: 1024px)"
  })
  const heightHeader = isXS ? '24' : isSM ? '24' : isMD ? '24' : '34';

  return {
    isMobile,
    isTablet,
    isBrowser,
    isXS,
    isSM,
    isMD,
    isLG,
    heightHeader,
    isSafari,
    isEdge, isFirefox, isOpera
  }
}
