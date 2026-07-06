import { Stack } from 'expo-router';
import { useFonts } from '@expo-google-fonts/inter/useFonts';
import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';
import { Inter_600SemiBold } from '@expo-google-fonts/inter/600SemiBold';
import { Inter_700Bold } from '@expo-google-fonts/inter/700Bold';

export function useInterFonts() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_600SemiBold,
        Inter_700Bold
    });
    return fontsLoaded;
}
export default function RootLayout() {
    const fontsLoaded = useInterFonts();
    if (!fontsLoaded) {
        return null;
    } else {
        return <Stack />;
    }
}
