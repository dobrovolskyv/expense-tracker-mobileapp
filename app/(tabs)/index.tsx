import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '@/components/Button'
import Typograph from '@/components/Typograph'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { signOut } from 'firebase/auth'
import { auth } from '@/config/firebase'
import ScreenWrapper from '@/components/ScreenWrapper'
import { useAuth } from '@/contexts/authContext'
import { verticalScale } from '@/utils/styling'

const Home = () => {
    const {user} = useAuth() 

    // const handleLogout = async () => {
    //     await signOut(auth)
    // }

    return (
        <ScreenWrapper>
            <Typograph>Home</Typograph>
        
        </ScreenWrapper>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: spacingX._20,
        marginTop: verticalScale(8)
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacingY._10
    },
    searchIcon:{
        backgroundColor: colors.neutral700,
        padding: spacingX._10,
        borderRadius: 50
    },
    floatingButton:{
        height: verticalScale(50),
        width: verticalScale(50),
        borderRadius: 100,
        position: 'absolute',
        bottom: verticalScale(30),
        right: verticalScale(30),
    },
    scrollVeiwStyle:{
        marginTop: spacingY._10,
        paddingBottom: verticalScale(100),
        gap: spacingY._25
    }
})