import { createContext, useEffect, useState, type ReactNode } from 'react';
import { dark_theme, light_theme, Theme } from './tokens';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
type Mode = 'dark_theme' | 'light_theme' | 'system';

export type ThemeContextType = {
    mode: Mode;
    theme: Theme;
    toggleTheme: () => void;
};

const defaultThemeContext: ThemeContextType = {
    mode: 'dark_theme',
    theme: dark_theme,
    toggleTheme: () => {}
};

export const ThemeContext =
    createContext<ThemeContextType>(defaultThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const colorScheme = useColorScheme();
    const [mode, setMode] = useState<Mode>('system');
    const resolved =
        mode === 'system'
            ? colorScheme === 'dark'
                ? dark_theme
                : light_theme
            : mode === 'dark_theme'
              ? dark_theme
              : light_theme;

    async function saveThemeMode(mode: Mode) {
        await AsyncStorage.setItem('themeMode', mode);
    }

    const toggleTheme = () => {
        const themeCheck =
            mode === 'light_theme' ? 'dark_theme' : 'light_theme';
        setMode(prevMode =>
            prevMode === 'light_theme' ? 'dark_theme' : 'light_theme'
        );
        saveThemeMode(themeCheck);
    };

    useEffect(() => {
        const getMode = async () => {
            const savedMode = await AsyncStorage.getItem('themeMode');
            setMode(savedMode as Mode);
        };
        getMode();
    }, []);

    return (
        <ThemeContext.Provider value={{ mode, theme: resolved, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
