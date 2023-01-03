import { FC } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface Props {
    text: string;
    icon: JSX.Element;
    onPress?: () => void;
    textStyle?: {};
    iconStyle?: {};
}

const PrimaryButton: FC<Props> = ({ text, icon, onPress, textStyle, iconStyle }) => {
    return (
        <View style={styles.buttonContainer}>
            <View>
                <Pressable style={styles.pressable}
                android_ripple={{color: '#FEED95', foreground: true}}
                onPress={onPress}>
                    <Text style={[styles.buttonText, textStyle]}>{text}</Text>
                </Pressable>    
            </View>  
            <View style={styles.iconView}>
                <Pressable style={styles.pressable}
                android_ripple={{color: '#FFC400', borderless: true}}
                onPress={onPress}>
                    {icon}
                </Pressable>
            </View> 
    
        </View>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    rootContainer: {
    },
    pressable: {
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        paddingTop: 24,
        marginVertical: 10,
        marginHorizontal: 5,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '700', // 700 is bold, 400 is normal, semibold is 600
        color: '#965A00',
        backgroundColor: '#FFC400',
        padding: 16,
        elevation: 10,
        paddingHorizontal: 14,
        borderRadius: 15,
        paddingRight: 50,
    },
    iconView: {
        borderRadius: 25,
        elevation: 10,
        backgroundColor: '#FEED95',
        padding: 6,
        position: 'absolute',
        bottom: 5,
        right: 5,
        marginRight: 5,
    },
});
