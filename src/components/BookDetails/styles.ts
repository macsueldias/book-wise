import { styled } from "@/styles"

export const ReviewBook = styled('div', {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '41rem',
    height: '100%',
    background: '$gray800',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem 2rem',
})

export const ContainerBookDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',
})


export const InfoBook = styled('div', {
    display: 'flex',
    gap: '2rem',
    height: '15rem',
    width: '35rem',
    borderBottom: '1px solid $gray700',
    borderRadius: '10px',
    background: '$gray700',
    padding: '1.5rem',
    color: '$gray100',

    'h3': {
        fontSize: '1.125rem',

    },

    '> img': {
        width: '10rem',
        height: '15rem',
    }
})

export const Details = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
})
    
export const Title = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    span: {
        display: 'block',
    },
})

export const AssessmentScore = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    '> img': {
        width: '7.25rem',
        height: '1.25rem',
    }
})

export const Divider = styled('div', {
    height: '1px',
    width: '38rem',
    background: '$gray700',
    marginTop: '2rem',
})

export const FooterInfoBook = styled('div', {
    display: 'flex',
    gap: '3.5rem',
    height: '2.75rem',
    paddingBlock: '1.5rem', 
    color: '$gray100',

    '> div': {
        display: 'flex',
        alignItems: 'center',
        gap: '1.3rem',

        span: {
            display: 'block'
        },

        p: {
            display: 'flex', 
            flexDirection: 'column',
        }
    }
})

export const Assessment = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '.75rem',

    p: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '$gray100',

        a: {
            display: 'block',
            fontWeight: 'bold',
            textDecoration: 'none',
            color: '$purple100',
        }
    }
})

export const Review = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    width: '35rem',
    height: '11.25rem',
    padding: '1.5rem',
    borderRadius: '8px',
    background: '$gray700',

    img: {
        width: '6rem',
        height: '1rem',
    }
})

export const HeaderReview = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
})

export const Note = styled('div', {
    color: '$gray100',
})
