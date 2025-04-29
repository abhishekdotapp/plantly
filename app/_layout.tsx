import {Redirect, Stack} from "expo-router";
import {useUserStore} from "@/store/userStore";

export default function Layout(){

    return <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name="onboarding"  />
    </Stack>
}