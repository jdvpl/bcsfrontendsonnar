import { View, Text, StyleSheet } from '@react-pdf/renderer'
import HeadersTable from './HeadersTable';

function ViewTable({ data, position }: any) {
  const styles = StyleSheet.create({
    cellText: {
      fontSize: '8px',
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
      flexWrap: 'wrap',
      width: '12.5%', height: 30
    },
    table: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      marginVertical: 1
    },
    tableHeader: {
      backgroundColor: '##005DA2'
    },
    bggrayCell: {
      backgroundColor: '#F9F9FB'
    },
    textBlue: {
      color: '#005DA2'
    }


  });

  return (
    <View style={styles.table} >

      <HeadersTable />
      {data[position]?.map((info: any, i: number) => (
        <View key={i} style={[styles.tableRow]}>
          <View style={[styles.cell, styles.bggrayCell]}>
            <Text style={[styles.cellText, styles.textBlue]}>{info.term}</Text>
          </View>
          <View style={[styles.cell]}>
            <Text style={[styles.cellText]}>{info.monthlyCapital}</Text>
          </View>
          <View style={[styles.cell, styles.bggrayCell]}>
            <Text style={[styles.cellText]}>{info.monthlyInterest}</Text>
          </View>
          <View style={[styles.cell]}>
            <Text style={[styles.cellText]}>{info.feeWithoutInsurance}</Text>
          </View>
          <View style={[styles.cell, styles.bggrayCell]}>
            <Text style={[styles.cellText]}>{info.lifeInsurance}</Text>
          </View>
          <View style={[styles.cell]}>
            <Text style={[styles.cellText]}>{info.irtInsurance}</Text>
          </View>
          <View style={[styles.cell, styles.bggrayCell]}>
            <Text style={[styles.cellText]}>{info.totalInsuranceFee}</Text>
          </View>
          <View style={[styles.cell]}>
            <Text style={[styles.cellText, styles.textBlue]}>{info.endingBalance}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

export default ViewTable
