import { ThemeContext } from '@/src/theme/ThemeProvider';
import { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';

export default function Index() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.colors.core.bg
            }}
        >
            <Pressable onPress={toggleTheme}>
                <Text style={{ color: theme.colors.core.text }}>
                    Edit app/index.tsx to edit this screen.
                </Text>
            </Pressable>
        </View>
    );
}
