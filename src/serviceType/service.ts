export interface ToastifyProps {
    message: string;
    type?: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
    options?: {
        position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
    };
}