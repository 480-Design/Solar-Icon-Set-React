import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Tuning2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.5 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM14.5 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" stroke="currentColor" strokeWidth={1.5} /><path d="M11 7H6M3 7H2M13 17h5m3 0h1M2 17h4M22 7h-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.5 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM14.5 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M13 17h9M11 7l-9-.042M2 17h4M22 7h-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.5 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM14.5 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" stroke="currentColor" strokeWidth={1.5} /><path d="M15 16.959h7M9 6.958H2M2 16.959h2M22 6.958h-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M18.25 7a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM14.5 9.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM5.75 17a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0Zm3.75 2.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z" fill="currentColor" /><path d="M14.25 16.959a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75ZM9 6.209a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h7ZM1.25 16.959a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75ZM22 6.209a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h2Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.25 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM14.25 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM8.75 6.209a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5h7ZM14.75 16.209a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM1 16.959a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM21.75 6.209a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h2Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.25 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM14.25 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M17.166 7.708a3.008 3.008 0 0 0-.021-1.5h4.605a.75.75 0 0 1 0 1.5h-4.584ZM11.355 6.208a3.003 3.003 0 0 0-.02 1.5H1.75a.75.75 0 0 1 0-1.5h9.605ZM6.356 16.209H1.75a.75.75 0 0 0 0 1.5h4.584a3.007 3.007 0 0 1 .022-1.5ZM12.166 17.709h9.584a.75.75 0 0 0 0-1.5h-9.605a3.003 3.003 0 0 1 .02 1.5Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Tuning2