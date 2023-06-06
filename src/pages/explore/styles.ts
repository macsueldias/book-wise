import { styled } from "@/styles";

export const ContainerExplore = styled('div', {
    display: 'flex',
    gap: '1.25rem',
    flexWrap: 'wrap'
})

export const OptionsSearch = styled('nav', {
    display: 'flex',
    gap: '0.75rem',
})

export const Button = styled('button', {
    all: 'unset',
    padding: '.25rem 1rem',
    borderRadius: '16px',
    cursor: 'pointer',

    variants: {
        active: {
            true: {
                background: '$purple200',
                color: '$gray100',
                border: '1px solid $purple200',
            },
            false: {
                background: 'transparent',
                color: '$purple100',
                border: '1px solid $purple100',
            },
        },
    },

    defaultVariants: {
        active: false,
    },
})