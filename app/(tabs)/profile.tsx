import {Text, View, StyleSheet, Button} from "react-native";
import {theme} from "@/theme";
import {useUserStore} from "@/store/userStore";

export default function ProfileScreen() {
    const toggleHasUserOnboarded = useUserStore(state => state.toogleHadOnbaorded)
    return (
        <View style={styles.container}>
            <Button title={"back to Onboarding"} onPress={toggleHasUserOnboarded} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colorWhite,
    },
    text: {
        fontSize: 24,
    },
});
