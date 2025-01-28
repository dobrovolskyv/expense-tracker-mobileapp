import { Slot, Stack, Tabs } from 'expo-router'
import React from 'react'
import { AuthProvider } from "@/contexts/authContext";


const StackLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(modal)/profileModal"
                options={{ presentation: "modal" }}
            />
            <Stack.Screen name="(modal)/walletModal"
                options={{ presentation: "modal" }}
            />
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