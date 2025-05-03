import {Link, Stack} from "expo-router";
import {Pressable} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import {theme} from "@/theme";

export default function Layout (){
    return <>
    <Stack>
        <Stack.Screen name="index" options={{
            title: "Home",
            headerRight: () => (
                <Link href="/new" asChild>
                    <Pressable style={{marginRight: 12}} hitSlop={20}>
                        <Feather name="plus" size={24} color={theme.colorGreen}/>
                    </Pressable>
                </Link>
            ),
        }}/>
        <Stack.Screen
                name="plants/[plantId]"
                options={{
                  title: "",
                  headerTintColor: theme.colorBlack,
                }}
              />
    </Stack>
    </>
}