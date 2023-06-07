import { styled } from "@/styles"

export const ReviewBook = styled('div', {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    
    display: 'flex',
    background: '$gray800',
    margin: 'auto',
    overflow: 'hidden',
    flexDirection: 'column',

    variants: {
        active: {
            true: {
                transition: 'translateX(100%) all 1s ease-out',
                transitionDuration: '1500ms',
                width: '41rem',
            },
            false: {
                transition: 'translateX(0%) all 1s ease-out',
                transitionDuration: '500ms',
                width: 0,
            }
        }
    }
    
})

export const ContainerBookDetails = styled('div', {
    display: 'flex',
    width: '35rem',
    flexDirection: 'column',
    margin: '2rem 3rem',
    padding: '1.5rem 2rem',
    background: '$gray700',
    borderRadius: '10px',
})


export const InfoBook = styled('div', {
    display: 'flex',
    gap: '2rem',
    height: '15rem',
    width: '35rem',
    borderBottom: '1px solid $gray700',
    
    padding: '1.5rem',
    color: '$gray100',

    'h3': {
        fontSize: '1.125rem',
    },
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
    background: '$gray500',
    marginTop: '2.5rem',
})

export const FooterInfoBook = styled('div', {
    display: 'flex',
    gap: '3.5rem',
    height: '5.75rem',
    paddingBlock: '1.5rem', 
    
    '> div': {
        display: 'flex',
        alignItems: 'center',
        gap: '1.3rem',
        
        span: {
            display: 'block',
        },
        
        h5: {
            color: '$gray300',
            fontWeight: '$regular',
        },
        
        '> p': {
            display: 'flex', 
            flexDirection: 'column',
            color: '$gray100',
            fontWeight: '$bold',
        }
    }
})

export const Assess = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    background: '$gray700',
    padding: '2rem 1.5rem',
    borderRadius: 8,

    textarea: {
        background: '$gray800',
        border: '1px solid $gray500',
        outline: 'none',
        borderRadius: 4,
        color: '$gray400',
        resize: 'vertical',
        marginBlock: '1.5rem .75rem',
        padding: '.875rem 1.25rem',
    },
})

export const GroupButtonAssess = styled('div', {
    width: '5.5rem',
    display: 'flex',
    justifyItems: 'flex-end',
    gap: '.5rem',
    marginLeft: 'auto',

    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '2.5rem',
        width: '2.5rem',
        border: 0,
        outline: 'none',
        borderRadius: '4px',
        background: '$gray600',
    }
}) 

export const Assessment = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '.75rem',
    marginInline: '3rem',

    '> div': {
        width: '35rem',
        display: 'flex',
        justifyContent: 'space-between',

        'p::first-child': {
            color: 'red',
        },
    
        a: {
            display: 'block',
            fontWeight: 'bold',
            textDecoration: 'none',
            color: '$purple100',
        },

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

export const Note = styled('p', {
    color: '$gray400',
    fontSize: '.875rem',
})
