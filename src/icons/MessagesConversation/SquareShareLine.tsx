import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const SquareShareLine = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m22 7 .53.53a.75.75 0 0 0 0-1.06L22 7Zm-4.47-5.53a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 10a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM8.25 15a.75.75 0 0 0 1.5 0h-1.5Zm2.05-6.32.53.532-.53-.532Zm.38-.38.532.53-.532-.53Zm-.19.19-.53-.53.53.53ZM14 7.75h8v-1.5h-8v1.5Zm8.53-1.28-5-5-1.06 1.06 5 5 1.06-1.06Zm-1.06 0-5 5 1.06 1.06 5-5-1.06-1.06ZM9.75 12c0-1.552.757-2.467 1.08-2.788L9.77 8.149C9.277 8.64 8.25 9.916 8.25 12h1.5ZM14 6.25c-2.084 0-3.36 1.027-3.851 1.521l1.063 1.058c.32-.322 1.236-1.079 2.788-1.079v-1.5ZM8.25 12v3h1.5v-3h-1.5Zm2.58-2.788.191-.19-1.06-1.062-.047.047-.143.142 1.058 1.063Zm-.681-1.44-.142.142-.047.046 1.061 1.061.191-.192-1.063-1.058Z" fill="currentColor" /><path d="M3.465 20.535C4.93 22 7.287 22 12.003 22c4.715 0 7.073 0 8.537-1.465 1.242-1.241 1.431-3.123 1.46-6.537M3.465 20.535C2 19.07 2 16.713 2 11.997m1.465 8.538C4.929 22 7.286 22 12 22s7.071 0 8.535-1.465c1.241-1.24 1.43-3.122 1.46-6.536m-18.53 6.536C2 19.071 2 16.714 2 12m1.465-8.54C4.706 2.218 6.588 2.029 10.002 2M2.055 8c.11-2.193.436-3.562 1.41-4.536 1.24-1.24 3.122-1.43 6.535-1.459" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22 13.998c-.029 3.414-.218 5.296-1.46 6.537C19.076 22 16.718 22 12.003 22c-4.716 0-7.073 0-8.538-1.465C2 19.07 2 16.713 2 11.997 2 7.282 2 4.924 3.465 3.46 4.706 2.218 6.588 2.029 10.002 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m22 7 .53.53a.75.75 0 0 0 0-1.06L22 7Zm-4.47-5.53a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 10a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM8.25 15a.75.75 0 0 0 1.5 0h-1.5Zm2.05-6.32.53.532-.53-.532Zm.38-.38.532.53-.532-.53Zm-.19.19-.53-.53.53.53ZM14 7.75h8v-1.5h-8v1.5Zm8.53-1.28-5-5-1.06 1.06 5 5 1.06-1.06Zm-1.06 0-5 5 1.06 1.06 5-5-1.06-1.06ZM9.75 12c0-1.552.757-2.467 1.08-2.788L9.77 8.149C9.277 8.64 8.25 9.916 8.25 12h1.5ZM14 6.25c-2.084 0-3.36 1.027-3.851 1.521l1.063 1.058c.32-.322 1.236-1.079 2.788-1.079v-1.5ZM8.25 12v3h1.5v-3h-1.5Zm2.58-2.788.191-.19-1.06-1.062-.047.047-.143.142 1.058 1.063Zm-.681-1.44-.142.142-.047.046 1.061 1.061.191-.192-1.063-1.058Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 13.998c-.029 3.414-.218 5.296-1.46 6.537C19.076 22 16.718 22 12.003 22c-4.716 0-7.073 0-8.538-1.465C2 19.07 2 16.713 2 11.997 2 7.282 2 4.924 3.465 3.46 4.706 2.218 6.588 2.029 10.002 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m22 7 .53.53a.75.75 0 0 0 0-1.06L22 7Zm-4.47-5.53a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 10a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM8.25 15a.75.75 0 0 0 1.5 0h-1.5Zm2.05-6.32.53.532-.53-.532Zm.38-.38.532.53-.532-.53Zm-.19.19-.53-.53.53.53ZM14 7.75h8v-1.5h-8v1.5Zm8.53-1.28-5-5-1.06 1.06 5 5 1.06-1.06Zm-1.06 0-5 5 1.06 1.06 5-5-1.06-1.06ZM9.75 12c0-1.552.757-2.467 1.08-2.788L9.77 8.149C9.277 8.64 8.25 9.916 8.25 12h1.5ZM14 6.25c-2.084 0-3.36 1.027-3.851 1.521l1.063 1.058c.32-.322 1.236-1.079 2.788-1.079v-1.5ZM8.25 12v3h1.5v-3h-1.5Zm2.58-2.788.191-.19-1.06-1.062-.047.047-.143.142 1.058 1.063Zm-.681-1.44-.142.142-.047.046 1.061 1.061.191-.192-1.063-1.058Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.752 1.994a.75.75 0 0 1-.744.756c-1.71.014-2.97.07-3.945.261-.955.187-1.583.494-2.068.979-.57.57-.897 1.34-1.069 2.62-.174 1.3-.176 3.009-.176 5.387 0 2.38.002 4.088.176 5.388.172 1.279.5 2.05 1.07 2.62.569.57 1.34.897 2.619 1.069 1.3.174 3.009.176 5.388.176 2.378 0 4.087-.002 5.387-.176 1.28-.172 2.05-.5 2.62-1.07.485-.484.792-1.112.979-2.067.19-.976.246-2.236.261-3.945a.75.75 0 0 1 1.5.012c-.015 1.705-.068 3.093-.29 4.222-.224 1.15-.633 2.083-1.39 2.84-.894.895-2.035 1.3-3.48 1.494-1.412.19-3.221.19-5.53.19h-.115c-2.309 0-4.118 0-5.53-.19-1.445-.194-2.585-.6-3.48-1.494-.895-.895-1.3-2.036-1.495-3.48-.19-1.413-.19-3.222-.19-5.531v-.115c0-2.309 0-4.118.19-5.53.194-1.445.6-2.586 1.495-3.48.756-.757 1.69-1.166 2.84-1.39 1.128-.222 2.516-.276 4.22-.29a.75.75 0 0 1 .757.744Zm5.718-.524a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H14c-1.552 0-2.467.757-2.788 1.08l-.192.192-.19.19c-.323.32-1.08 1.236-1.08 2.788v3a.75.75 0 0 1-1.5 0v-3c0-2.084 1.027-3.36 1.521-3.851l.19-.19.188-.188C10.64 7.277 11.916 6.25 14 6.25h6.19l-3.72-3.72a.75.75 0 0 1 0-1.06Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.464 3.464C4.93 2 7.286 2 12 2c1.023 0 1.934 0 2.75.015.004.57.223 1.14.659 1.576l1.159 1.159H14c-2.617 0-4.252 1.298-4.914 1.963L8.9 6.9l-.187.186C8.048 7.748 6.75 9.383 6.75 12v3a2.25 2.25 0 0 0 4.5 0v-3c0-1.02.488-1.576.637-1.725l.192-.19.196-.198c.149-.149.705-.637 1.725-.637h2.568l-1.159 1.159a2.25 2.25 0 1 0 3.182 3.182l3.405-3.405C22 10.749 22 11.352 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.47 1.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H14c-1.552 0-2.467.757-2.788 1.08l-.19.191-.193.191c-.322.32-1.079 1.236-1.079 2.788v3a.75.75 0 0 1-1.5 0v-3c0-2.084 1.027-3.36 1.521-3.851l.19-.189.188-.189C10.64 7.277 11.916 6.25 14 6.25h6.19l-3.72-3.72a.75.75 0 0 1 0-1.06Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3.464 3.464C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.47 1.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H14c-1.552 0-2.467.757-2.788 1.08l-.19.191-.193.191c-.322.32-1.079 1.236-1.079 2.788v3a.75.75 0 0 1-1.5 0v-3c0-2.084 1.027-3.36 1.521-3.851l.19-.189.188-.189C10.64 7.277 11.916 6.25 14 6.25h6.19l-3.72-3.72a.75.75 0 0 1 0-1.06Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default SquareShareLine