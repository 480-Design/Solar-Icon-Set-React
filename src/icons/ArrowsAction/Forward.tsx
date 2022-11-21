import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Forward = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m19.5 12 .53.53a.75.75 0 0 0 0-1.06l-.53.53Zm-4.47-5.53a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 10a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM9.5 12.75a.75.75 0 0 0 0-1.5v1.5ZM3.75 17a.75.75 0 0 0 1.5 0h-1.5ZM13 11.25a.75.75 0 0 0 0 1.5v-1.5Zm7.03.22-5-5-1.06 1.06 5 5 1.06-1.06Zm-1.06 0-5 5 1.06 1.06 5-5-1.06-1.06Zm-9.47-.22c-.953 0-2.367.28-3.563 1.141-1.235.89-2.187 2.365-2.187 4.609h1.5c0-1.756.715-2.78 1.563-3.391.887-.639 1.974-.859 2.687-.859v-1.5Zm3.5 1.5h6.5v-1.5H13v1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m19.5 12 .53.53a.75.75 0 0 0 0-1.06l-.53.53Zm-4.47-5.53a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 10a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm6.06-5-5-5-1.06 1.06 5 5 1.06-1.06Zm-1.06 0-5 5 1.06 1.06 5-5-1.06-1.06Z" fill="currentColor" /><path opacity={0.5} d="M19.5 12.75a.75.75 0 0 0 0-1.5v1.5ZM9.5 12v.75V12Zm-5.75 5a.75.75 0 0 0 1.5 0h-1.5Zm5.75-4.25h10v-1.5h-10v1.5Zm0-1.5c-.953 0-2.367.28-3.563 1.141-1.235.89-2.187 2.365-2.187 4.609h1.5c0-1.756.715-2.78 1.563-3.391.887-.639 1.974-.859 2.687-.859v-1.5Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m19.5 12 .53.53a.75.75 0 0 0 0-1.06l-.53.53Zm-4.47-5.53a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 10a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM9.5 12v.75V12Zm-5.75 5a.75.75 0 0 0 1.5 0h-1.5Zm16.28-5.53-5-5-1.06 1.06 5 5 1.06-1.06Zm-1.06 0-5 5 1.06 1.06 5-5-1.06-1.06ZM9.5 12.75h10v-1.5h-10v1.5Zm0-1.5c-.953 0-2.367.28-3.563 1.141-1.235.89-2.187 2.365-2.187 4.609h1.5c0-1.756.715-2.78 1.563-3.391.887-.639 1.974-.859 2.687-.859v-1.5Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.97 6.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H9.5c-.713 0-1.8.22-2.687.859-.848.61-1.563 1.635-1.563 3.391a.75.75 0 0 1-1.5 0c0-2.244.952-3.72 2.187-4.609 1.196-.861 2.61-1.141 3.563-1.141h8.19l-3.72-3.72a.75.75 0 0 1 0-1.06Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.97 6.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H9.5c-.713 0-1.8.22-2.687.859-.848.61-1.563 1.635-1.563 3.391a.75.75 0 0 1-1.5 0c0-2.244.952-3.72 2.187-4.609 1.196-.861 2.61-1.141 3.563-1.141h8.19l-3.72-3.72a.75.75 0 0 1 0-1.06Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.97 6.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06L18.44 12l-4.47-4.47a.75.75 0 0 1 0-1.06Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M17.69 11.25H9.5c-.953 0-2.367.28-3.563 1.141-1.235.89-2.187 2.365-2.187 4.609a.75.75 0 0 0 1.5 0c0-1.756.715-2.78 1.563-3.391.887-.639 1.974-.859 2.687-.859h8.19l.75-.75-.75-.75ZM20.193 11.713Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Forward