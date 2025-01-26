import { Alert, StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'expo-image'

import { colors, spacingY } from '@/constants/theme'
import { scale, verticalScale } from '@/utils/styling'
import ModalWrapper from '@/components/ModalWrapper'
import Header from '@/components/Header'

import AntDesign from '@expo/vector-icons/AntDesign';

import { getProfileImage } from '@/services/imageServices'
import Typograph from '@/components/Typograph'
import Input from '@/components/Input'
import { UserDataType } from '@/types'
import Button from '@/components/Button'
import { useAuth } from '@/contexts/authContext'
import { updateUser } from '@/services/userService'
import { useRouter } from 'expo-router'
import * as ImagePicker from "expo-image-picker"

const ProfileModal = () => {
    const { user, updateUserData } = useAuth()
    const [userData, setUserData] = useState<UserDataType>({
        name: '',
        image: null
    })

    const [loading, setLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setUserData({
            name: user?.name || '',
            image: user?.image || null
        })
    }, [user])

    const onPickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            // allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5,
        });



        if (!result.canceled) {
            setUserData({ ...userData, image: result.assets[0] });
        }
    }

    const onSubmit = async () => {
        let { name, image } = userData
        if (!name.trim()) {
            Alert.alert("User", "Пожалуйста заполните все поля")
            return;
        }

        setLoading(true)
        const res = await updateUser(user?.uid || '', userData)
        setLoading(false)

        if (res.success) {
            updateUserData(user?.uid || '')
            router.back()
        } else {
            Alert.alert("User", res.msg)
        }
    }
    return (
        <ModalWrapper>
            <View style={styles.container}>
                <Header title="Обновить профиль"
                    leftIcon={<AntDesign name="arrowleft" size={18} color="white" />}
                    style={{ marginBottom: spacingY._10 }}
                />

                {/* form */}
                <ScrollView contentContainerStyle={styles.form}>
                    <View style={styles.avatarContainer}>
                        <Image
                            style={styles.avatar}
                            source={getProfileImage(userData.image)}
                            contentFit="cover"
                            transition={100}
                        />

                        <TouchableOpacity onPress={onPickImage} style={styles.editIcon}>
                            <AntDesign name="edit" size={20} color={colors.neutral800} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputContainer}>
                        <Typograph color={colors.neutral200}>Имя</Typograph>
                        <Input placeholder='Ваше имя'
                            value={userData.name}
                            onChangeText={(value) => {
                                setUserData({ ...userData, name: value })
                            }}
                        />
                    </View>
                </ScrollView>
            </View>

            <View style={styles.footer}>
                <Button onPress={onSubmit} loading={loading} style={{ flex: 1 }}>
                    <Typograph color={colors.black} fontWeight={700}>Обновить</Typograph>
                </Button>
            </View>
        </ModalWrapper>
    )
}

export default ProfileModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: spacingY._20
    },
    footer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: spacingY._20,
        gap: scale(12),
        paddingTop: spacingY._15,
        borderTopColor: colors.neutral700,
        marginBottom: spacingY._5,
        borderTopWidth: 1
    },
    form: {
        gap: spacingY._30,
        marginTop: spacingY._15
    },
    avatarContainer: {
        position: 'relative',
        alignSelf: 'center',
    },
    avatar: {
        alignSelf: 'center',
        backgroundColor: colors.neutral300,
        height: verticalScale(135),
        width: verticalScale(135),
        borderRadius: 200,
        borderWidth: 1,
        borderColor: colors.neutral500,
        // overflow: 'hidden',
        // position: 'relative'
    },
    editIcon: {
        position: 'absolute',
        bottom: spacingY._5,
        right: spacingY._7,
        borderRadius: 100,
        backgroundColor: colors.neutral100,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 4,
        padding: spacingY._7
    },
    inputContainer: {
        gap: spacingY._10
    }
})