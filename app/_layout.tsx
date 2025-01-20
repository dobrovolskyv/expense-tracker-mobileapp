import { Slot, Stack, Tabs } from 'expo-router'
import React from 'react'
import { AuthProvider } from "@/contexts/authContext";


const StackLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Slot/>
        </Stack>
    )
}

export default function RootLayout() {

    return (
        <AuthProvider>
            <StackLayout />
        </AuthProvider>
    )
}