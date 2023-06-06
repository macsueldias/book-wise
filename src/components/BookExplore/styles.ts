import { styled } from "@/styles";

export const Book = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    width: '20rem',
    height: '11.5rem',
    background: '$gray700',
    borderRadius: '8px',
    padding: '1.25rem',

    '> img': {
        width: '6.75rem',
        height: '9.5rem',
    }
})

export const InfoBook = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',

    p: {
        color: '$gray100',
        margin: 0,
        
        span: {
            display: 'block',
            color: '$gray400',
            marginBottom: '2rem'
        }
    },
    
})