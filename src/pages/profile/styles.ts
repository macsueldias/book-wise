import { styled } from "@/styles";

export const ContainerProfile = styled('div', {
    display: 'flex',
    height: '100vh',

     form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '39rem',
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

export const ContentBooks =  styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
    marginTop: '2rem',
})

export const ContentBook = styled('div', {
    padding: '1.5rem',
    borderRadius: 8,
    background: '$gray700',
    width: '39rem',
    height: '22.5rem',
})

export const HeaderBook = styled('div', {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '1.5rem',

    span: {
        color: '$gray400',
        fontSize: '.875rem',
    }
})

export const InfoBook = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
})

export const Note = styled('p', {
    color: '$gray400',
    fontSize: '.875rem',
    lineHeight: '1.8'
})