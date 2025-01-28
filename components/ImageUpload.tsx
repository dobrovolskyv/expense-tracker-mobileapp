import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ImageUploadProps } from '@/types'
import { scale, verticalScale } from '@/utils/styling'
import { colors, radius } from '@/constants/theme'
import { Image } from "expo-image"

import AntDesign from '@expo/vector-icons/AntDesign';
import Typograph from './Typograph'
import { getFilePath } from '@/services/imageServices'
import * as ImagePicker from "expo-image-picker"

const ImageUpload = ({
    file = null,
    onSelect,
    onClear,
    containerStyle,
    imageStyle,
    placeholder = ""
}: ImageUploadProps) => {

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            // allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5,
        });



        if (!result.canceled) {
            onSelect(result.assets[0]);
        }
    }
    return (
        <View>
            {!file && (
                <TouchableOpacity
                    onPress={pickImage}
                    style={[styles.inputContainer, containerStyle && containerStyle]}>
                    <AntDesign name="upload" size={24} color={colors.neutral200} />
                    {placeholder && <Typograph>{placeholder}</Typograph>}
                </TouchableOpacity>
            )}

            {
                file && (
                    <View style={[styles.image, imageStyle && imageStyle]}>
                        <Image style={{ flex: 1 }}
                            source={getFilePath(file)}
                            contentFit="cover"
                            transition={100}
                        />

                        <TouchableOpacity
                            onPress={onClear}
                            style={styles.deleteIcon}
                        >
                            <AntDesign name="closecircle" size={verticalScale(24)} color={colors.white} />
                        </TouchableOpacity>
                    </View>
                )
            }
        </View >
    )
}

export default ImageUpload

const styles = StyleSheet.create({
    inputContainer: {
        height: verticalScale(40),
        backgroundColor: colors.neutral700,
        borderRadius: radius._15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderColor: colors.neutral500,
        borderStyle: 'dashed'
    },
    image: {
        height: scale(150),
        width: scale(150),
        borderRadius: radius._10
    },
    deleteIcon: {
        position: 'absolute',
        top: scale(6),
        right: scale(6),
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 1,
        shadowRadius: 10
    }
})