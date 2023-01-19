import { useMediaQuery } from "react-responsive";

export default function useMediaQueryMortgage() {
  const isMobile = useMediaQuery({
    query: "(max-width:575px)"
  })
  const isTablet = useMediaQuery({
    query: "(min-width: 576px) and (max-width: 1023px)"
  })
  const isBrowser = useMediaQuery({
    query: "(min-width: 1024px) "
  })
  return {
    isMobile,
    isTablet,
    isBrowser
  }
}
