import React, { useContext } from 'react';
import { Text } from 'react-native';
import { ThemeContext } from '../theme/ThemeProvider';
export default function AppText({ font, ...props }: any) {
    const { theme } = useContext(ThemeContext);
    return (
        <Text
            style={{
                ...font,
                color: theme.colors.core.text
            }}
            {...props}
        ></Text>
    );
}
