export const dark_theme = {
    colors: {
        core: {
            bg: '#17181B',
            surface: '#212327',
            surfaceAlt: '#2A2C31',
            elevated: '#303237',
            border: '#34363C',
            text: '#F2F3F5',
            textSecondary: '#B6BAC1',
            textMuted: '#82858C'
        },
        accent_semantic: {
            accent: '#6E7DFF',
            onAccent: '#FFFFFF',
            accentSoftBg: '#23264A',
            accentSoftText: '#B9C0FF',
            success: '#3BA55D',
            danger: '#ED4245',
            warning: '#E5A458',
            gold: '#E5B567'
        }
    }
} as const;

export const light_theme = {
    colors: {
        core: {
            bg: '#F2F2F7',
            surface: '#FFFFFF',
            surfaceAlt: '#FFFFFF',
            elevated: '#FFFFFF',
            border: '#E4E4EA',
            text: '#1A1B1F',
            textSecondary: '#5E6068',
            textMuted: '#8E9098'
        },
        accent_semantic: {
            accent: '#4F5BD5',
            onAccent: '#FFFFFF',
            accentSoftBg: '#ECEEFF',
            accentSoftText: '#3A45B8',
            success: '#1E9E54',
            danger: '#D7373B',
            warning: '#B26C1E',
            gold: '#C08A2E'
        }
    }
} as const;

export const avatar = {
    colors: {
        avatar_fills: ['#6E7DFF', '#3BA55D', '#E5A458', '#EB5E8B', '#36C5C0'],
        initials: '#FFFFFF'
    }
} as const;

export const typography = {
    largeTitle: { fontFamily: 'Inter_700Bold', fontSize: 32, lineHeight: 38 },
    title: { fontFamily: 'Inter_600SemiBold', fontSize: 22, lineHeight: 28 },
    headline: { fontFamily: 'Inter_600SemiBold', fontSize: 17, lineHeight: 22 },
    body: { fontFamily: 'Inter_400Regular', fontSize: 17, lineHeight: 22 },
    subhead: { fontFamily: 'Inter_400Regular', fontSize: 15, lineHeight: 20 },
    footnote: { fontFamily: 'Inter_400Regular', fontSize: 13, lineHeight: 18 },
    caption: { fontFamily: 'Inter_400Regular', fontSize: 12, lineHeight: 16 }
} as const;

export const spacing = {
    xs: 4,
    s: 8,
    m: 12,
    l: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32
} as const;

export const radii = {
    card: 16,
    groupedBlock: 16,
    button: 12,
    input: 12,
    bottomSheet: 20,
    chip: 999,
    avatar: 999,
    segmented: 999
} as const;

export const elevation = {
    dark: {
        boxShadow: 'none' // depth comes from surface layers + border, not shadows
    },
    light: {
        boxShadow: '0 1px 3px rgba(0,0,0,.06)'
    }
} as const;

export const icon = {
    size: 24,
    strokeWidth: 2
} as const;

export type Theme = typeof dark_theme | typeof light_theme;
