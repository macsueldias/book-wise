import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 400,
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray800',
    color: '$gray100',
    height: '100vh',
    width: '100vw',
  },

  '&.toast-success-container': {
    color: '#000 !important',
    borderRadius: '8px !important',
    background: '#FFFFFF !important',
    border: '1px solid #34A853 !important',
    boxShadow: '0px 1px 5px rgba(248, 175, 175, 0.1) !important',
  },

  '&.toast-success-container-after': {
    overflow: 'hidden',
    position: 'relative',
  },

  '&.toast-success-container-after::after': {
    top: 0,
    left: 0,
    content: '',
    width: 7,
    height: '100%',
    position: 'absolute',
    display: 'inlineBlock',
    backgroundColor: '#34A853',
  },
})