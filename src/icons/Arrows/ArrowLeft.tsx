import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ArrowLeft = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m4 12-.53-.53a.75.75 0 0 0 0 1.06L4 12Zm6.53-5.47a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-1.06 12a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM20 12.75a.75.75 0 0 0 0-1.5v1.5Zm-2.5-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-3 1.5a.75.75 0 0 0 0-1.5v1.5Zm-9.97-.22 6-6-1.06-1.06-6 6 1.06 1.06Zm-1.06 0 6 6 1.06-1.06-6-6-1.06 1.06ZM20 11.25h-2.5v1.5H20v-1.5Zm-5.5 0H4v1.5h10.5v-1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M20 12.75a.75.75 0 0 0 0-1.5v1.5Zm0-1.5H4v1.5h16v-1.5Z" fill="currentColor" /><path d="m4 12-.53-.53a.75.75 0 0 0 0 1.06L4 12Zm6.53-5.47a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-1.06 12a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-4.94-6 6-6-1.06-1.06-6 6 1.06 1.06Zm-1.06 0 6 6 1.06-1.06-6-6-1.06 1.06Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 12.75a.75.75 0 0 0 0-1.5v1.5ZM4 12l-.53-.53a.75.75 0 0 0 0 1.06L4 12Zm6.53-5.47a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-1.06 12a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM20 11.25H4v1.5h16v-1.5ZM4.53 12.53l6-6-1.06-1.06-6 6 1.06 1.06Zm-1.06 0 6 6 1.06-1.06-6-6-1.06 1.06Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 11.25a.75.75 0 0 1 0 1.5h-9.25V18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53v5.25H20Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M20.75 12a.75.75 0 0 0-.75-.75h-9.25v1.5H20a.75.75 0 0 0 .75-.75Z" fill="currentColor" /><path d="M10.75 18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53v12Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ArrowLeft