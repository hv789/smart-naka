import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const HorizontalLine: FC = () => {
    return (
        <View style={styles.dividerLine}>
            <View style={styles.Line} />
            {/* <Text style={styles.dividerLineText}>OR</Text> */}
            {/* <View style={styles.Line} /> */}
        </View>
    );
};

export default HorizontalLine;

const styles = StyleSheet.create({
    dividerLine: {
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "stretch",
        // marginHorizontal: 1,
        // marginVertical: 8,
        overflow: "hidden",
        alignItems: "center",
        marginBottom: 20,
    },
    Line: {
        borderTopWidth: 4,
        width: "100%",
        marginHorizontal: 8,
        height: 0,
        borderTopColor: "#9D5E00",
    },
});