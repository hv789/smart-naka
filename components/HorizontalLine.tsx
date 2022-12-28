import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const HorizontalLine: FC = () => {
    return (
        <View style={styles.dividerLine}>
            <View style={styles.Line} />
            <Text style={styles.dividerLineText}>OR</Text>
            <View style={styles.Line} />
        </View>
    );
};

export default HorizontalLine;

const styles = StyleSheet.create({
    dividerLine: {
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "stretch",
        marginHorizontal: 6,
        marginVertical: 8,
        overflow: "hidden",
        alignItems: "center",
    },
    Line: {
        borderTopWidth: 4,
        width: "100%",
        marginHorizontal: 8,
        height: 0,
        borderTopColor: "#9D5E00",
    },
    dividerLineText: {
        fontSize: 21,
        color: "#9D5E00",
        fontWeight: "900",
        textAlign: "center",
    },
});