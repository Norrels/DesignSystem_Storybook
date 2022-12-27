import { ToolTipArrow, TooltipContainer, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from "./style";
import { ComponentProps } from "react";

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> { }

export function Tooltip() {
    return (
        <TooltipProvider>
            <TooltipContainer>
                <TooltipTrigger asChild>
                    <div>22</div>
                </TooltipTrigger>
                <TooltipPortal>
                    <TooltipContent sideOffset={5}>
                        <ToolTipArrow/>
                        22 de Outubro - Disponível
                    </TooltipContent>
                </TooltipPortal>
            </TooltipContainer>
        </TooltipProvider>
    )
}

Tooltip.displayName = "Tooltip"