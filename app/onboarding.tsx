import { Text, View, StyleSheet} from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/components/PlantlyButton";
import { LinearGradient } from "expo-linear-gradient";
import PlantlyImage from "@/components/PlantlyImage";
import { useFonts, Caveat_400Regular } from '@expo-google-fonts/caveat';
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function OnboardingScreen() {
    const router = useRouter();
    const toggleHasUserOnboarded = useUserStore(state => state.toogleHadOnbaorded);
    const hasUserOnboarded = useUserStore(state => state.hasUserOnboarded);

    // Load the font
    const [fontsLoaded] = useFonts({
        'Caveat_400Regular': Caveat_400Regular,
    });

    useEffect(() => {
        if (fontsLoaded) {
            // Hide splash screen once fonts are loaded
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    // Don't render until fonts are loaded
    if (!fontsLoaded) {
        return null;
    }

    const handlePress = () => {
        toggleHasUserOnboarded();
        router.replace("/");
        console.log(hasUserOnboarded);
    };

    return (
        <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            colors={[theme.colorLimeGreen, theme.colorAppleGreen, theme.colorGreen]}
            style={styles.container}>
            <View>
                <Text style={styles.headline}>Plantly</Text>
                <Text style={styles.tagline}>Keep your plants healthy and hydrated</Text>
            </View>
            <PlantlyImage />
            <PlantlyButton title={"Let me in!"} onPress={handlePress} />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: theme.colorWhite,
    },
    headline: {
        fontSize: 42,
        color: theme.colorWhite,
        fontWeight: "bold",
        marginBottom: 12,
        textAlign: "center",
    },
    tagline: {
        fontSize: 34,
        color: theme.colorWhite,
        alignItems: "center",
        fontFamily: "Caveat_400Regular", // Use the exact name from useFonts
    },
});