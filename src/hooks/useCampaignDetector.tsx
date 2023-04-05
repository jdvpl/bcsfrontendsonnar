import { useRouter } from "next/router";
import { useSessionStorage } from "./useSessionStorage";
import { SesionStorageKeys } from "../session";

const useCampaignDetector=()=>{
  const router = useRouter();
  console.log(router.query)
  // const [campaing,setCampaign]=useSessionStorage(SesionStorageKeys.marketingCampaing.key,null);
  // if(Object.keys(router.query)){
  //   setCampaign(router.query)
  // }
  // console.log(campaing)

}

export default useCampaignDetector;