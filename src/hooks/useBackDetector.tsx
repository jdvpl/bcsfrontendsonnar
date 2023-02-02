import { useEffect } from 'react';

export const useBackDetector = (fn: any, asPath: any) => {
  useEffect(() => {
    if (asPath.includes("#")) {
      window.location.hash = "#";
      window.location.hash = "/"
      window.onhashchange = function () {
        fn();
        window.location.hash = "#";
        return;
      }
    } else {
      window.location.hash = "#";
      window.location.hash = "/"
      window.onhashchange = function () {
        window.location.hash = "#";
        return;
      }
    }
  }, [asPath])
};