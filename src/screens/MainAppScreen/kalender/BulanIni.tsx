import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { MediumText, PoppinsRegular, PoppinsBold, PoppinsExtraBold } from "../../../components/StyledText";

export default function Bulanini(): React.ReactElement {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const startDate = selectedStartDate
    ? selectedStartDate.format('YYYY-MM-DD').toString()
    : '';

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "#fff" }}>
      <StatusBar style="auto" />
      <CalendarPicker onDateChange={setSelectedStartDate} />
      <PoppinsRegular >Tanggal Di Pilih : {startDate}</PoppinsRegular>
    </View>
  );
}