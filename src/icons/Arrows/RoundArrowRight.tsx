import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const RoundArrowRight = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 11.25a.75.75 0 0 0 0 1.5v-1.5Zm8 .75.53.53a.75.75 0 0 0 0-1.06L16 12Zm-2.47-3.53a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 6a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM8 12.75H16v-1.5H8v1.5Zm8.53-1.28-3-3-1.06 1.06 3 3 1.06-1.06Zm-1.06 0-3 3 1.06 1.06 3-3-1.06-1.06Z" fill="currentColor" /><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle opacity={0.5} cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><path d="M8 11.25a.75.75 0 0 0 0 1.5v-1.5Zm8 .75.53.53a.75.75 0 0 0 0-1.06L16 12Zm-2.47-3.53a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 6a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM8 12.75H16v-1.5H8v1.5Zm8.53-1.28-3-3-1.06 1.06 3 3 1.06-1.06Zm-1.06 0-3 3 1.06 1.06 3-3-1.06-1.06Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><path d="M8 11.25a.75.75 0 0 0 0 1.5v-1.5Zm8 .75.53.53a.75.75 0 0 0 0-1.06L16 12Zm-2.47-3.53a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 6a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM8 12.75H16v-1.5H8v1.5Zm8.53-1.28-3-3-1.06 1.06 3 3 1.06-1.06Zm-1.06 0-3 3 1.06 1.06 3-3-1.06-1.06Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Zm11.22-3.53a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H8a.75.75 0 0 1 0-1.5h6.19l-1.72-1.72a.75.75 0 0 1 0-1.06Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm.47-13.53a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H8a.75.75 0 0 1 0-1.5h6.19l-1.72-1.72a.75.75 0 0 1 0-1.06Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="currentColor" /><path d="M13.53 8.47a.75.75 0 1 0-1.06 1.06l1.72 1.72H8a.75.75 0 0 0 0 1.5h6.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default RoundArrowRight