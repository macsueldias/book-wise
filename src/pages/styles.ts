import { styled } from "@/styles"

export const ContainerLogin = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.25rem',
})

export const ImageIlustration = styled('img', {
  height: '100%',
})

export const ContainerAcess = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    gap: '1.25rem', 
    width: '24rem',
    height: '22rem',

    h2: {
      fontSize: '$2xl',
      height: '1rem'
    },

    p: {
      marginBottom: '$10'
    },

    a: {
      textDecoration: 'none'
    }
})

export const ModelAccess = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
  background: '$gray600',
  color: '$gray200',
  borderRadius: 8,
  padding: '1.25rem 1.5rem'

})