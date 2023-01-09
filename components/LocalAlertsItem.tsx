import { FC, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Modal,
  Pressable,
} from "react-native";

interface Props {
  VehicleNumber: string;
  date: string;
  time: string;
}

const LocalAlertsItem: FC<Props> = ({ VehicleNumber, date, time }) => {
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={styles.rootContainer}>
        <Text style={styles.vehicleNumber}>{VehicleNumber}</Text>
        <View style={styles.dateAndTime}>
          <Text style={styles.dateTime}>{date}</Text>
          <Text style={styles.dateTime}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default LocalAlertsItem;

const styles = StyleSheet.create({
  rootContainer: {
    alignSelf: "stretch",
    backgroundColor: "#FFF4B7",
    borderWidth: 4,
    borderColor: "#FF9A6F",
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 3,
    elevation: 15,
  },
  vehicleNumber: {
    padding: 8,
    paddingVertical: 5,
    fontSize: 24,
    fontWeight: "700", // 700 is bold, 400 is normal, semibold is 600
    color: "#B06A00",
  },
  dateAndTime: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingBottom: 2,
  },
  dateTime: {
    fontSize: 24,
    fontWeight: "500",
    color: "#FD9800",
  },

  /////////////////////////////////////////////////

  // Alert Modal

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "80%",
    maxWidth: 320,
    margin: 20,
    backgroundColor: "#FFB74B",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    backgroundColor: "#FFD76F",
    padding: 10,
    width: "70%",
    maxWidth: 200,
    elevation: 2,
  },
  //   buttonOpen: {
  //     backgroundColor: "#F194FF",
  //   },
  //   buttonClose: {
  //     backgroundColor: "#2196F3",
  //   },
  textStyle: {
    color: "#A06103",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 24,
    color: "#A06103",
    fontWeight: "bold",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    color: "#FFFBE5",
    fontWeight: "bold",
  },
});
