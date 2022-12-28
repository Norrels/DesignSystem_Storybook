import { styled } from "../../styles";
import * as Tooltip from '@radix-ui/react-tooltip';

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipContainer = styled(Tooltip.Root, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
})

export const TooltipTrigger = styled(Tooltip.Trigger, {
    width: 'fit-content',
    
    margin: '0 auto',
    padding: '$4',
    backgroundColor: '$gray600',
    borderRadius: '$sm',

    display: 'flex',
    alignItems: 'center',

    fontFamily: '$default',
    fontSize: '$1',
    color: '$white'
})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
    borderRadius: '$xs',
    padding: '$3 $4',

    color: '$white',
    backgroundColor: '$gray900',
    
    fontFamily: '$default',
    fontSize: '$1',
    fontWeight: '$medium',

    filter: 'drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.25))'
})

export const ToolTipArrow = styled(Tooltip.Arrow, {})
