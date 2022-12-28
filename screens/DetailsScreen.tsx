import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const DetailsScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.card}>
        <View style={styles.vehicleNumber}>
          <Text style={styles.cardText}>UP 93 AD 9876</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailsText}>
            <Text style={styles.detailsTitle}>Name:</Text> Alex Schimng
          </Text>
          <Text style={styles.detailsText}>
            <Text style={styles.detailsTitle}>Date:</Text> 21/12/2022
          </Text>
          <Text style={styles.detailsText}>
            <Text style={styles.detailsTitle}>Time:</Text> 22:50
          </Text>
          <Text style={styles.detailsText}>
            <Text style={styles.detailsTitle}>Model:</Text> HVAT2412
          </Text>
          <Text style={styles.detailsText}>
            <Text style={styles.detailsTitle}>Place:</Text> Santa Cruz
          </Text>
          <Text style={styles.detailsText}>
            <Text style={styles.detailsTitle}>Company:</Text> Tesla
          </Text>
          <Text style={styles.detailsText}>
            <Text style={styles.detailsTitle}>District:</Text> A. Loas
          </Text>
        </View>
        <View style={styles.moreInfo}>
          <Text style={styles.moreInfoText}>Show More Info</Text>
          <MaterialIcons
            name="add-box"
            size={40}
            color="#9D5E00"
            style={styles.icon}
          />
        </View>
        <View style={styles.shareOptions}>
          <View>
            <MaterialIcons name="save-alt" size={40} color="#9D5E00" />
            <Text style={styles.shareOptionsText}>Save</Text>
          </View>
          <View>
            <MaterialIcons name="content-copy" size={40} color="#9D5E00" />
            <Text style={styles.shareOptionsText}>Copy</Text>
          </View>
          <View>
            <MaterialIcons name="share" size={40} color="#9D5E00" />
            <Text style={styles.shareOptionsText}>Share</Text>
          </View>
          <View>
            <MaterialIcons name="close" size={40} color="#9D5E00" />
            <Text style={styles.shareOptionsText}>Close</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: "#fcf9f7",
  },
  card: {
    backgroundColor: "#FFB74B",
    padding: 10,
    borderRadius: 20,
    elevation: 15,
  },
  cardText: {
    fontSize: 48,
    fontWeight: "800",
    color: "#AF6A03",
    textAlign: "center",
  },
  vehicleNumber: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF4B7",
    borderRadius: 16,
  },
  details: {
    marginTop: 15,
    padding: 4,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#FFF4B7",
    borderRadius: 16,
  },
  detailsTitle: {
    fontSize: 24,
    color: "#000000",
    fontWeight: "600",
    // textAlign: "center",
  },
  detailsText: {
    padding: 10,
    fontSize: 24,
    color: "#000000",
    // textAlign: "center",
  },
  moreInfo: {
    flexDirection: "row",
    marginTop: 15,
    padding: 4,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFD56C",
    borderRadius: 16,
  },
  moreInfoText: {
    fontSize: 24,
    padding: 10,
    color: "#AF6A03",
    fontWeight: "600",
    textAlign: "left",
  },
  icon: {
    padding: 4,
  },
  shareOptions: {
    flexDirection: "row",
    marginTop: 18,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#FFD56C",
    borderTopWidth: 1,
    borderTopColor: "#AF6A03",
    // borderRadius: 16,
  },
  shareOptionsText: {
    fontSize: 15,
    color: "#995c02",
    fontWeight: "600",
    textAlign: "center",
  },
});
