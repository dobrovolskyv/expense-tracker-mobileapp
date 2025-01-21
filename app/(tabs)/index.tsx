import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '@/components/Button'
import Typograph from '@/components/Typograph'
import { colors } from '@/constants/theme'
import { signOut } from 'firebase/auth'
import { auth } from '@/config/firebase'
import ScreenWrapper from '@/components/ScreenWrapper'

const Home = () => {

    const handleLogout = async () => {
        await signOut(auth)
    }

    return (
        <ScreenWrapper>
            <Typograph>Home</Typograph>
            <Button onPress={handleLogout}>
                <Typograph color={colors.black}>Выход</Typograph>
            </Button>
        </ScreenWrapper>
    )
}

export default Home

const styles = StyleSheet.create({})