import { keyframes, styled } from "../../styles";
import * as Toast from '@radix-ui/react-toast';

const swipeTop = keyframes({
    from: {
        opacity: '0',
        transform: 'translateX(75px)'
    },
    to: {
        opacity: '1',
        transform: 'translate(0)'
    }
})

export const ToastProvider = styled(Toast.Provider, {})

export const ToastContainer = styled(Toast.Root, {
    backgroundColor: '$gray800',
    borderRadius: '$sm',
    padding: '$3 $5',
    border: '1px solid $gray600',

    display: 'grid',
    gridTemplateAreas: '"title action" "description description"',
    columnGap: '$10',
    rowGap: '$2',
    alignItems: 'center',

    animation: `${swipeTop} 0.6s ease-in-out forwards`
})

export const ToastTitle = styled(Toast.Title, {
    fontFamily: '$default',
    fontSize: '$xl',
    color: '$white',
    fontWeight: 'bold',

    gridArea: 'title',
})

export const ToastDecription = styled(Toast.Description, {
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray200',

    gridArea: 'description',
})

export const ToastViewPort = styled(Toast.Viewport, {
    padding: '25',

    position: 'fixed',
    bottom: 0,
    right: 10,

    display: 'flex',
    flexDirection: 'column',
})

export const ToastClose = styled(Toast.Close, {
    color: '$gray200',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridArea: 'action'
})