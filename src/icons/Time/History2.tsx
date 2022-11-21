import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const History2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0 5.523 4.477 10 10 10 1.821 0 3.53-.487 5-1.338M12 2c5.523 0 10 4.477 10 10 0 1.821-.487 3.53-1.338 5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 9v4h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M17 20.662A9.955 9.955 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 1.821-.487 3.53-1.338 5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="0.5 3.5" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M12 9v4h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><circle opacity={0.5} cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="0.5 3.5" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 9v4h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="0.5 3.5" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75ZM12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75ZM9.1 2.398a.75.75 0 0 1-.43.97 9.187 9.187 0 0 0-.42.173.75.75 0 1 1-.608-1.37c.16-.072.323-.14.488-.203a.75.75 0 0 1 .97.43ZM5.648 4.24a.75.75 0 0 1-.026 1.06 9.31 9.31 0 0 0-.321.322.75.75 0 1 1-1.087-1.035c.122-.127.246-.251.373-.373a.75.75 0 0 1 1.06.026ZM3.16 7.261a.75.75 0 0 1 .381.99c-.061.138-.12.278-.174.419a.75.75 0 0 1-1.399-.54c.063-.165.13-.327.202-.488a.75.75 0 0 1 .99-.381Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75ZM12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75ZM9.1 2.398a.75.75 0 0 1-.43.97 9.187 9.187 0 0 0-.42.173.75.75 0 1 1-.608-1.37c.16-.072.323-.14.488-.203a.75.75 0 0 1 .97.43ZM5.648 4.24a.75.75 0 0 1-.026 1.06 9.31 9.31 0 0 0-.321.322.75.75 0 1 1-1.087-1.035c.122-.127.246-.251.373-.373a.75.75 0 0 1 1.06.026ZM3.16 7.261a.75.75 0 0 1 .381.99c-.061.138-.12.278-.174.419a.75.75 0 0 1-1.399-.54c.063-.165.13-.327.202-.488a.75.75 0 0 1 .99-.381Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M9.1 2.398a.75.75 0 0 1-.43.97 9.187 9.187 0 0 0-.419.174.75.75 0 1 1-.608-1.371c.16-.072.323-.139.487-.203a.75.75 0 0 1 .97.43ZM5.648 4.241a.75.75 0 0 1-.026 1.06c-.11.105-.216.212-.32.321a.75.75 0 1 1-1.087-1.034c.121-.127.246-.252.373-.373a.75.75 0 0 1 1.06.026ZM3.161 7.26a.75.75 0 0 1 .38.99c-.06.138-.119.278-.173.42a.75.75 0 0 1-1.4-.54c.064-.165.131-.328.203-.488a.75.75 0 0 1 .99-.381Z" fill="currentColor" /><path opacity={0.5} d="M12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default History2