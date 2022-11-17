import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import { FC } from "react";
// Create styles
const styles = StyleSheet.create({
  mainView: {
    width: "100%"
  },

  colLg10: {
    width: "83.33333333%",
  },

  mAuto: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  mt5: {
    marginTop: "20"
  },
  colLg4: {
    width: "33.33333333%",
  },
  colLg6: {
    width: "50%",
  },
  colLg7: {
    width: "58.333333%",
  },
  colLg8: {
    width: "66.6666666%",
  },
  dFlex: {
    display: "flex",
  },
  JustifyContentCenter: {
    justifyContent: "center",
  },
  text_res: {
    fontSize: 20,
    color: "#548235",
    fontWeight: "bold",
  },
  txt_res_orange: {
    fontSize: 22.5,
    color: "#c55a11",
    fontWeight: "bold",
  },
  img_bottom: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
interface iPdfProps {
  infoUserData: any,
}
const PDFDocumentData: FC<iPdfProps> = ({ infoUserData }) => {
  console.log(infoUserData)
  return (
    <Document>
      {/* huella de carbono */}
      <Page size="A4" orientation="portrait">
        <View style={styles.mainView}>

          <View style={[styles.colLg10, styles.mAuto]}>
            <Text>
              El Banco Caja Social lo acompaña en su sueño de comprar vivienda, por esta razón disponemos de nuestro simulador para que conozca los valores aproximados de su crédito hipotecario.
            </Text>
            <Text style={styles.mt5}>
              Tenga en cuenta que los valores presentados en el simulador son únicamente informativos y no constituyen ningún tipo de asesoría, ni obligan al Banco en su calidad de emisor.
            </Text>
            <Text>

            </Text>
          </View>
        </View>
      </Page>


    </Document>
  );
};

export default PDFDocumentData;
