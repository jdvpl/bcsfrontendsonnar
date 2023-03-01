import { useRouter } from "next/router";
import { useEffect } from "react";
import { routes } from "../routes";
import { SesionStorageKeys } from "../session";
import { useSessionStorage } from "./useSessionStorage";

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
      // router.push(rt["currentPage"])
    }
  }, [])
  const setCurrentRouting = async (path: string, valueData: boolean = true) => {
    rt[path] = valueData;
    rt["currentPage"] = path;
    await setRt({ ...rt });
  }
  const removeAllPath = async () => {
    const paths = { "/autenticacion": true, "currentPage": "/confirmacion-solicitud", "/validacion-identidad": false, "/validacion-otp": false, "/validacion-otc": false, "/datos-personales": false, "/preguntas-sarlaft": false, "/datos-financieros": false, "/datos-credito": false, "/resumen-solicitud": false, "/confirmacion-solicitud": false }
    await setRt(paths)
  }
  return { setRt, setCurrentRouting, removeAllPath }
}

export default useProtectedRoutes;