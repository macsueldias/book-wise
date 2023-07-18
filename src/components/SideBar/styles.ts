import { styled } from "@/styles"
import Image from "next/image"

export const ContainerSidebar = styled('aside', {
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
    },

    button: {
        all: 'unset',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        gap: '.5rem',
        fontWeight: '$bold',
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

