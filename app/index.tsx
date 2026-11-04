import AppText from '@/src/components/AppText';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import { ThemeContext } from '@/src/theme/ThemeProvider';
import { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.colors.core.bg
            }}
        >
            <Button>Toggle theme</Button>
            <Card></Card>
        </SafeAreaView>
    );
}
