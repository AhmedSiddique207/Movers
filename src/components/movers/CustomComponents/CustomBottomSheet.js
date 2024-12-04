import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RBSheet from 'react-native-raw-bottom-sheet'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

const CustomBottomSheet = ({ children, sheetRef, style, sheetHeight }) => {
    return (
        <RBSheet
            ref={sheetRef}
            height={sheetHeight || 300}
            closeOnDragDown={true}
            dragFromTopOnly={true}
            closeOnPressMask={true}
            customStyles={{
                container: [
                    styles.rbsheet
                ],
                wrapper: {
                    backgroundColor: 'transparent',
                },
            }}
        >
            {children}
        </RBSheet>
    )
}

export default CustomBottomSheet

const styles = StyleSheet.create({
    rbsheet: {
        borderRadius: hp(2.5)
    }
})