import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
  Font
} from "@react-pdf/renderer";
import { basePath } from "../../../../next.config";
import { convertToColombianPesos } from "../../../utils";
import ViewTable from "./ViewTable";
// Create styles
Font.register({ family: 'Roboto', src: `${basePath}/fonts/RobotoBold.ttf` });
Font.register({ family: 'RobotoLight', src: `${basePath}/fonts/RobotoLight.ttf` });

const styles = StyleSheet.create({
  mainView: {
    width: "100%"
  },

  colLg10: {
    width: "83.33333333%",
  },
  colLg30: {
    width: "30%",
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
  row: {
    display: "flex",
    flexDirection: "row",
  },
  justifyBetween: {
    justifyContent: 'space-between'
  },
  JustifyContentCenter: {
    justifyContent: "center",
  },
  // table
  em: {
    fontWeight: 'extrabold',
    fontFamily: 'Roboto'
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  cell: {
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    flexWrap: 'wrap'
  },
  cellText: {
    fontSize: '10px',
  },
  textSize: {
    fontSize: '10px',
    fontWeight: 'extralight'
  },
  card: {
    backgroundColor: "#F3F4F6",
    padding: 8,
    width: '32%',
    borderRadius: '8%',
    display: 'flex',
    justifyContent: 'center'
  },
  cardHeaderText: {
    fontSize: '10px'
  },
  cardHeaderBody: {
    fontSize: '13px',
    marginTop: 5,
  },
  mb10: {
    marginBottom: 20
  },
  mt3: {
    marginTop: 3
  },
  my20: {
    marginVertical: 20
  },
  textDetailText: {
    fontSize: '10px'
  },
  icon: {
    width: 15,
    height: 15,
    marginHorizontal: 7,
    marginTop: 8
  },
  textLight: {
    fontFamily: 'RobotoLight'
  }
});
interface iPdfProps {
  infoData: any,
}
interface itableProps {
  children: any, col: any, th: any
}
const PDFDocumentData = ({ infoData }: iPdfProps) => {
  const data = infoData?.quotes;
  const quantiyPages = infoData?.quotes?.length;
  const numberOfPages = Array(quantiyPages - 1).fill(0)
  return (
    <Document>
      <Page size="A4" orientation="portrait">
        <View style={styles.mainView}>
          <View>
            <Image src={`${basePath}/images/PDF.png`} />
          </View>
          <View style={[styles.colLg10, styles.mAuto]}>
            <Text style={[styles.textSize, styles.textLight]}>
              El {" "}
              <Text style={styles.em}>Banco Caja Social</Text>{" "}
              lo acompaña en su sueño de comprar vivienda, por esta razón disponemos de nuestro simulador para que conozca los valores aproximados de su crédito hipotecario.
            </Text>
            <Text style={[styles.mt5, styles.textSize, styles.textLight]}>
              Tenga en cuenta que los valores presentados en el simulador son únicamente informativos y no constituyen ningún tipo de asesoría, ni obligan al Banco en su calidad de emisor.
            </Text>
            <Text style={[styles.my20, styles.textDetailText, styles.em]}>
              Detalle del crédito
            </Text>
            <View style={[styles.row, styles.justifyBetween, styles.mb10]}>
              {/* aproximatefinance */}
              <View style={[styles.card]}>
                <Text style={[styles.cardHeaderText, styles.textLight]}>
                  Valor financiado aproximado
                </Text>
                <Text style={[styles.cardHeaderBody, styles.em]}>
                  {convertToColombianPesos(infoData.approximateFinancedValue)} pesos
                </Text>
              </View>
              {/* second */}
              <View style={[styles.card]}>
                <View style={[styles.row]}>
                  <Image src={`${basePath}/images/calendar.png`} style={styles.icon} />
                  <View>
                    <Text style={[styles.cardHeaderText, styles.textLight]}>
                      Plazo
                    </Text>
                    <Text style={[styles.cardHeaderBody, styles.em]}>
                      {infoData.term} años
                    </Text>
                  </View>
                </View>
              </View>
              {/* third */}
              <View style={[styles.card]}>
                <View style={[styles.row]}>
                  <Image src={`${basePath}/images/charts.png`} style={styles.icon} />
                  <View>
                    <Text style={[styles.cardHeaderText, styles.textLight]}>
                      Tasa
                    </Text>
                    <Text style={[styles.cardHeaderBody, styles.em]}>
                      {infoData.rate}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <ViewTable data={data} position={0} />
            </View>
          </View>
        </View>
      </Page>
      {
        numberOfPages.map((k, i: number) => (
          <Page size="A4" orientation="portrait">
            <Image src={`${basePath}/images/BannerHeader.png`} />
            <View style={[styles.colLg10, styles.mAuto]}>
              <ViewTable data={data} position={i + 1} />
            </View>
          </Page>
        ))
      }
    </Document>
  );
};

export default PDFDocumentData;
