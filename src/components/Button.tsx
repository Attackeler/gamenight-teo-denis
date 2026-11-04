import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeProvider';
import {
    typography,
    dark_theme,
    elevation,
    radii,
    spacing
} from '../theme/tokens';
import { Pressable } from 'react-native';
import AppText from './AppText';

export default function Button({ children, ...props }: any) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <Pressable
                onPress={toggleTheme}
                style={{ backgroundColor: theme.colors.core.surfaceAlt }}
            >
                <AppText font={{ ...typography.body }}>{children}</AppText>
            </Pressable>
        </>
    );
}
