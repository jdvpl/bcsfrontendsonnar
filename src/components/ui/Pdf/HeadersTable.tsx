import { Font, StyleSheet, Text, View } from '@react-pdf/renderer'
import { basePath } from '../../../../next.config';

Font.register({ family: 'Roboto', src: `${basePath}/fonts/RobotoBold.ttf` });
const HeadersTable = () => {

  const styles = StyleSheet.create({
    cellText: {
      fontSize: '7px',
      fontWeight: 'bold'
    },
    tableRow: {
      display: 'flex',
      flexDirection: 'row',
    },
    cell: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      textAlign: 'center',
      flexWrap: 'wrap'
    },
    table: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    tableHeader: {
      backgroundColor: '#005DA2',
      color: "#fff",
      marginHorizontal: '0.2%',
      width: '12.5%',
      height: 30
    },
    ligthBlue: {
      backgroundColor: '#0386E6',
      color: '#fff',
      width: '12.5%',
      height: 30
    },
    em: {
      fontFamily: 'Roboto',
      fontWeight: 1000
    }
  });
  return (
    <View style={[styles.tableRow]}>
      <View style={[styles.cell, styles.tableHeader]}>
        <Text style={[styles.cellText, styles.em]}>Período</Text>
      </View>
      <View style={[styles.cell, styles.tableHeader]}>
        <Text style={[styles.cellText]}>Capital mensual</Text>
      </View>
      <View style={[styles.cell, styles.tableHeader]}>
        <Text style={[styles.cellText]}>Interés mensual</Text>
      </View>
      <View style={[styles.cell, styles.tableHeader]}>
        <Text style={[styles.cellText]}>Cuota sin seguro</Text>
      </View>
      <View style={[styles.cell, styles.tableHeader]}>
        <Text style={[styles.cellText]}>Seguro de vida</Text>
      </View>
      <View style={[styles.cell, styles.tableHeader]}>
        <Text style={[styles.cellText]}>Seguro IRT
          (Incendio, rayo y terremoto)</Text>
      </View>
      <View style={[styles.cell, styles.tableHeader]}>
        <Text style={[styles.cellText]}>Cuota total con seguros</Text>
      </View>
      <View style={[styles.cell, styles.ligthBlue]}>
        <Text style={[styles.cellText]}>Saldo Final</Text>
      </View>
    </View>
  )
}

export default HeadersTable
