import { View, Text, StyleSheet } from '@react-pdf/renderer'
import React from 'react';
import HeadersTable from './HeadersTable';

function ViewTable({ data, position }: any) {
  const styles = StyleSheet.create({
    cellText: {
      fontSize: '7px',
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
      marginLeft: '0.4%',
      width: '12.5%',
      height: 28,
    },
    table: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },

    cellRight: {
      textAlign: 'right',
      paddingRight: '3%'
    },

    bggrayCell: {
      backgroundColor: '#F9F9FB',
    },
    textBlue: {
      color: '#005DA2',
      fontSize: '6px'
    },
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
            <Text style={[styles.cellText, styles.cellRight]}>{info.monthlyCapital}</Text>
          </View>
          <View style={[styles.cell, styles.bggrayCell]}>
            <Text style={[styles.cellText, styles.cellRight]}>{info.monthlyInterest}</Text>
          </View>
          <View style={[styles.cell]}>
            <Text style={[styles.cellText, styles.cellRight]}>{info.feeWithoutInsurance}</Text>
          </View>
          <View style={[styles.cell, styles.bggrayCell]}>
            <Text style={[styles.cellText, styles.cellRight]}>{info.lifeInsurance}</Text>
          </View>
          <View style={[styles.cell]}>
            <Text style={[styles.cellText, styles.cellRight]}>{info.irtInsurance}</Text>
          </View>
          <View style={[styles.cell, styles.bggrayCell]}>
            <Text style={[styles.cellText, styles.cellRight]}>{info.totalInsuranceFee}</Text>
          </View>
          <View style={[styles.cell]}>
            <Text style={[styles.cellText, styles.textBlue, styles.cellRight]}>{info.endingBalance}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

export default ViewTable
