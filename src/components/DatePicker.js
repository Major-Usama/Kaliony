import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from "react-native";
const WIDTH = Dimensions.get("window").width;

import DatePicker from "react-native-datepicker";

const DatePickerr = () => {
  const [date, setDate] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          androidMode={"spinner"}
          placeholder="03/22"
          format="DD/YY"
          minDate="01/1"
          maxDate="01/3000"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            placeholderText: {
              color: "#6B7076",
              marginLeft: 19,
              color: "#222222",
              fontFamily: "SFBold",
            },

            dateIcon: {
              display: "none",
            },
            dateText: {
              fontSize: 16,
              color: "#222222",
              fontFamily: "SFBold",
              marginLeft: 19,
            },
            dateInput: {
              borderRadius: 10,
              borderWidth: 0,

              borderColor: "#fff",
              position: "absolute",
              left: 0,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
    </View>
  );
};

export default DatePickerr;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  datePickerStyle: {
    width: WIDTH,
  },
});
