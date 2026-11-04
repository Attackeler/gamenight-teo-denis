import { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from '../theme/ThemeProvider';
import {
    typography,
    dark_theme,
    elevation,
    radii,
    spacing
} from '../theme/tokens';
import AppText from './AppText';

export default function Card({ children, ...props }: any) {
    const { theme } = useContext(ThemeContext);
    const themeElevation =
        theme === dark_theme ? elevation.dark : elevation.light;
    return (
        <View
            style={{
                backgroundColor: theme.colors.core.surface,
                borderRadius: radii.card,
                padding: spacing.l,
                ...themeElevation
            }}
        >
            <View style={{ flex: 1 }}>
                <AppText font={typography.headline}>
                    Friday boardgame night
                </AppText>
                <AppText font={typography.footnote}>Fri, Jul 3 * 19:00</AppText>
            </View>
        </View>
    );
}
