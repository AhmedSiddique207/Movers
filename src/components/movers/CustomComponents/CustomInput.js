import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CustomInput = ({
    label,
    placeholder,
    value,
    onChangeText,
    keyboardType,
    secureTextEntry,
    multiline,
    numberOfLines,
    style,
    inputStyle,
    labelStyle,
    errorMessage,
}) => {
    return (
        <View style={[styles.container, style]}>
            {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

            <TextInput
                style={[
                    styles.input,
                    inputStyle,
                    multiline && styles.multilineInput,
                ]}
                placeholder={placeholder}
                placeholderTextColor="#808080"
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                multiline={multiline}
                numberOfLines={multiline ? numberOfLines : 1}
            />

            {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp(90),
        marginBottom: hp(1),
    },
    label: {
        fontSize: RFValue(13),
        color: '#000',
        marginBottom: hp(0.5),
        fontWeight: '400',
    },
    input: {
        width: wp(90),
        height: hp(6),
        borderWidth: RFValue(1),
        borderColor: '#ccc',
        borderRadius: RFValue(8),
        paddingHorizontal: wp(4),
        fontSize: RFValue(13),
        color: '#000',
    },
    multilineInput: {
        height: hp(12),
        textAlignVertical: 'top',
    },
    errorText: {
        color: 'red',
        fontSize: RFValue(12),
        marginTop: hp(0.5),
    },
});

export default CustomInput;
