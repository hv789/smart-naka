import { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    VehicleNumber: string;
    date: string;
    time: string;
}

const HistoryItem: FC<Props> = ({ VehicleNumber, date, time }) => {
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.vehicleNumber}>{VehicleNumber}</Text>
            <View style={styles.dateAndTime}>
                <Text style={styles.dateTime}>{date}</Text>
                <Text style={styles.dateTime}>{time}</Text>
            </View>
        </View>
    );
};

export default HistoryItem;

const styles = StyleSheet.create({
    rootContainer: {
        alignSelf: 'stretch',
        backgroundColor: '#FFF4B7',
        borderWidth: 4,
        borderColor: '#FFF4B7',
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 12,
        elevation: 10,
    },
    vehicleNumber: {
        padding: 8,
        fontSize: 24,
        fontWeight: '700', // 700 is bold, 400 is normal, semibold is 600
        color: '#B06A00',
    },
    dateAndTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingBottom: 2,
    },
    dateTime:{
        fontSize: 24,
        fontWeight: '500',
        color: '#FD9800',
    },
});