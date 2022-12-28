import { X } from "phosphor-react";
import { ComponentProps } from "react";
import { ToastClose, ToastContainer, ToastDecription, ToastProvider, ToastTitle, ToastViewPort } from "./style";

export interface ToastProps extends ComponentProps<typeof ToastContainer> { 
    isOpen: boolean;
 }

export function Toast({isOpen} : ToastProps) {
    return (
        <ToastProvider duration={3000}>
            <ToastContainer open={isOpen}>
                <ToastTitle>Agendamento realizado</ToastTitle>
                <ToastDecription>Quarta-feira, 23 de Outubro às 16h</ToastDecription>
                <ToastClose asChild><X size={18}/></ToastClose>
            </ToastContainer>
            <ToastViewPort/>
        </ToastProvider>
    )
}

Toast.displayName = 'Toast'