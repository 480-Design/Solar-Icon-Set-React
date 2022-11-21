import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const TextItalic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 22h12M9 2h12M9 22l2.4-8M15 2l-2.4 8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 22h12M9 2h12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.5} d="m9 22 6-20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 22h12M9 2h12M9 22l6-20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.983 1.25H9a.75.75 0 0 0 0 1.5h4.992l-5.55 18.5H3a.75.75 0 1 0 0 1.5h5.983a.98.98 0 0 0 .034 0H15a.75.75 0 0 0 0-1.5h-4.992l5.55-18.5H21a.75.75 0 0 0 0-1.5H14.983Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.977 1H9a1 1 0 1 0 0 2h4.656l-5.4 18H3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-4.656l5.4-18H21a1 1 0 1 0 0-2H14.977Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9 1h12a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2Zm-.744 20H3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H8.256Z" fill="currentColor" /><path opacity={0.5} d="m13.656 3-5.4 18h2.088l5.4-18h-2.088Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default TextItalic