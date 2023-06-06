import { styled } from "@/styles"

export const ContainerBook = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: '1.5rem',
    marginBottom: '.75rem',
    borderRadius: '8px',
    background: '$gray700',
    width: '37rem',
    height: '17.5rem',
})

export const HeaderBook = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',

    '> img': {
        height: '1rem',
        width: '6rem',
    }
})

export const Avatar = styled('figure', {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    'div:first-child': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '2.8rem',
        height: '2.8rem',
        borderRadius: '50%',
        background: '$gradient-vertical',
    },

    img: {
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '50%',
        objectFit: 'cover',
    }
})

export const Reviewer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    color: '$gray100',
    
    p: {
        margin: 0,
    },

    span: {
        color: '$gray400',
    },
})

export const ContentBook = styled('div', {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
})

export const InfoBook = styled('div', {
    
    p: {
        color: '$gray100',
        margin: 0,
    },
    
    span: {
        display: 'block',
        color: '$gray400',
        marginBottom: '2rem'
    }
})

export const DescriptionBook = styled('div', {
    color: '$gray300',

    fontSize: '.875rem',
    
    a: {
        fontWeight: '$bold',
        color: '$purple100',
        textDecoration: 'none',
    }
})