import { useRouter } from "next/router";
import { useSessionStorage } from "./useSessionStorage";
import { SesionStorageKeys } from "../session";
import { useEffect } from "react";

const useCampaignDetector=()=>{
  const router = useRouter();
  const [,setCampaign]=useSessionStorage(SesionStorageKeys.marketingCampaing.key,null);
  useEffect(() => {
    if(Object.entries(router.query).length >0){
        setCampaign(router.query)
    }
  }, [router.query])
}

export default useCampaignDetector;