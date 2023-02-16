import { useRouter } from "next/router";
import { useEffect } from "react";
import { routes } from "../routes";
import { SesionStorageKeys } from "../session";
import { useSessionStorage } from "./useSessionStorage";

const allowedRoutes = ['/validacion-identidad', '/validacion-otp', '/validacion-otc', '/datos-personales', '/preguntas-sarlaft', '/datos-financieros', '/datos-credito']

const useProtectedRoutes = () => {
  const protectecRoutes = {
    '/autenticacion': true,
    'currentPage': routes.startProccess
  }
  const [rt, setRt] = useSessionStorage(
    SesionStorageKeys.protectedRoutes.key,
    protectecRoutes
  );
  const router = useRouter();
  const currentRoute = router.route;

  useEffect(() => {
    if (rt[currentRoute] === false || !rt[currentRoute]) {
      router.push(rt["currentPage"])
    }
  }, [])
  const setCurrentRouting = async (path: string, valueData: boolean = true) => {
    rt[path] = valueData;
    rt["currentPage"] = path;
    await setRt({ ...rt });
  }
  return { setRt, setCurrentRouting }
}

export default useProtectedRoutes;