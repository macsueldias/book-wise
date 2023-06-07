import { styled } from "@/styles"
import Image from "next/image"

export const ContainerVisitor = styled('aside', {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto', 
    maxWidth: '1580px',
    height: '100vh',

    variants: {
        opacity: {
            true: {
                opacity: '0.2'
            },
            false: {
                opacity: '1'
            }
        }
    }
})

export const ContainerMain = styled('div', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '6rem',
})

export const ContentVisitor = styled('main', {
    display: 'flex', 
    justifyContent: 'flex-start',
    gap: '4rem',
})

export const Books = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    gap: '.75rem',
})

export const BestBooks = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    gap: '.75rem',

    p: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    a: {
        color: '$purple100',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
    }
}) 

export const SideBar = styled('aside', {
    background: '$gradient-sidebar',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'calc(100% - 3rem)',
    width: '14.5rem',
    borderRadius: '12px',
    padding: '2.5rem 3.25rem',
    margin: '1.5rem',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

    div: {
        display: 'flex',
        alignItems: 'center',
        gap: '.75rem',
    }
})

export const Logo = styled(Image, {

})

export const GroupMenu = styled('ul', {
    marginTop: '4rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    a: {
        textDecoration: 'none',
        color: '#fff',

        '&:[aria-checked=true]': {
            color: 'red',
        }
    }
})
export const ItemMenu = styled('li', {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '.75rem',
})

