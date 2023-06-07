import { styled } from "@stitches/react";

export const ContainerHeader = styled('div', {
    display: 'flex', 
    gap: '.75rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '63rem',
    height: 'fit-content',
    marginBlock: '4.5rem 2.5rem',

    h2: {
        display: 'flex',
        alignItems: 'center',
        gap: '.75rem',
    },

    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '27rem',
        borderRadius: '4px',
        border: '1px solid $gray500',
        padding: '.875rem 1.25rem',

        input: {
            background: 'transparent',
            color: '$gray100',
            fontSize: '1rem',
            border: '0',
            outline: 'none',
            width: '90%',
        },

        button: {
            all: 'unset',
            cursor: 'pointer',
        }
    }
})