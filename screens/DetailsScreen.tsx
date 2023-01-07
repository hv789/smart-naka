import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import LoadingScreen from "./LoadingScreen";
import { downloadFile } from "expo-filedownload";

const DetailsScreen = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const PDF_URL = { url: "http://www.pdf995.com/samples/pdf.pdf" };

  const savePressHandler = () => {
    setIsDownloading(true);
    downloadFile(PDF_URL.url).then(() => setIsDownloading(false));
  };



  const sharePressHandler = () => {
    console.log("share option is clicked");
  };

  // CODE FOR DOWNLOADING IN APP'S PRIVATE ACCESS STORAGE
  // const downloadPDF = async (url: string, fileName: string) => {
  //   // Fetch the PDF file from the URL
  //   const response = await fetch(url);

  //   // Check if the response is OK
  //   if (response.ok) {
  //     // Get the file data as a Blob
  //     const fileBlob = await response.blob();

  //     // Read the Blob as a base64-encoded string
  //     const fileData = await new Promise<string>((resolve, reject) => {
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         resolve(reader.result as string);
  //       };
  //       reader.onerror = reject;
  //       reader.readAsDataURL(fileBlob);
  //     });

  //     // Remove the "data:application/pdf;base64," prefix from the base64 string
  //     const base64 = fileData.split(',')[1];

  //     // Create a new file in the download directory
  //     const fileUri = `${FileSystem.documentDirectory}${fileName}`;
  //     await FileSystem.writeAsStringAsync(fileUri, base64, { encoding: FileSystem.EncodingType.Base64 });

  //     // Return the file URI
  //     return fileUri;
  //   } else {
  //     throw new Error(`Failed to fetch PDF: ${response.statusText}`);
  //   }
  // };

  if (isDownloading) {
    return <LoadingScreen />;
  } else {
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
            <View
              style={{
                flex: 1,
                alignItems: "center",
                borderRightWidth: 2,
                borderColor: "#AF6A03",
                paddingRight: 15,
              }}
            >
              <Pressable
                onPress={savePressHandler}
                android_ripple={{
                  color: "#FFF4B7",
                  borderless: true,
                  radius: 50,
                }}
              >
                <MaterialIcons name="save-alt" size={40} color="#9D5E00" />
                <Text style={styles.shareOptionsText}>Save</Text>
              </Pressable>
            </View>
            <View style={{ flex: 1, alignItems: "center", paddingLeft: 15 }}>
              <Pressable
                onPress={sharePressHandler}
                android_ripple={{
                  color: "#FFF4B7",
                  borderless: true,
                  radius: 50,
                }}
              >
                <MaterialIcons name="share" size={40} color="#9D5E00" />
                <Text style={styles.shareOptionsText}>Share</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcf9f7",
  },
  rootContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fcf9f7",
  },
  card: {
    backgroundColor: "#FFB74B",
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
    elevation: 15,
    shadowColor: "#FFAE00",
  },
  cardText: {
    fontSize: 44,
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
    padding: 5,
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
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#AF6A03",
  },
  shareOptionsText: {
    fontSize: 15,
    color: "#995c02",
    fontWeight: "600",
    textAlign: "center",
  },
});
