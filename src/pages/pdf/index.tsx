import { PDFViewer } from "@react-pdf/renderer";
import PageLoader from "next/dist/client/page-loader";
import { useEffect, useState } from "react";
import PDFDocumentData from "../../components/ui/Pdf";
import { useSessionStorage } from "../../hooks/useSessionStorage";
import { getDataPDF } from "../../services";
import { SesionStorageKeys } from "../../session";

const Pdf = () => {

  const [dataFormQuota,] = useSessionStorage(
    SesionStorageKeys.dataFormSimulation.key,
    {}
  );
  const [info, setinfo] = useState({});
  const [loadData, setloadData] = useState(false);
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const data = await getDataPDF(dataFormQuota)
    if (!data.error) {
      setinfo(data.response.data)
      setloadData(true)
    }
  }
  return loadData ? (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <PDFDocumentData infoData={info} />
    </PDFViewer>
  ) :
    null

};

export default Pdf;