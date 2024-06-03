import { CSSProperties } from 'react';
import toast, { ToastOptions } from 'react-hot-toast';

export const showToast = (message: string, success: boolean) => {
   const toastOptions: ToastOptions = {
      style: {
         fontFamily: "Satoshi-Medium",
         padding: '10px',
         color: '#fff',
         backgroundColor: 'rgba(0, 0, 0, 0.1)',
         fontSize: '1rem',
         minWidth: '10em',
         letterSpacing: '-0.025em',
         backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0))',
         backdropFilter: 'blur(15px)',
         WebkitBackdropFilter: 'blur(24px)',
         lineHeight: 1.8,
         boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.08), inset 0 2px 12px rgba(255, 255, 255, 0.04)',
      } as CSSProperties,
      className: "card-cover",
      iconTheme: {
         primary: '#000',
         secondary: '#fff',
      },
      duration: 1000,
   };

   toast[success ? 'success' : 'error'](message, toastOptions);
};
