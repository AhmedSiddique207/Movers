import React from 'react';
import { View, StyleSheet } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export default function CustomModal({ visible, children, onClose }) {
    return (
        <ReactNativeModal 
            isVisible={visible} 
            backdropOpacity={0.4} 
            onBackdropPress={onClose} 
                   >
            <View style={styles.modalContent}>
                {children}
            </View>
        </ReactNativeModal>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: 'white', 
        borderRadius: RFValue(10),
        paddingHorizontal:widthPercentageToDP(3),
        paddingVertical:heightPercentageToDP(3),
    },
});
