import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const RoundTransferVertical = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 7v10l-3-3.438M14 17V7l3 3.438" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 7v10l-3-3.438M14 17V7l3 3.438" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 7v10l-3-3.438M14 17V7l3 3.438" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M6.507 12.997a.75.75 0 0 1 1.058.072L9.25 15V7a.75.75 0 0 1 1.5 0v10a.75.75 0 0 1-1.315.493l-3-3.437a.75.75 0 0 1 .072-1.059ZM13.737 6.298A.75.75 0 0 0 13.25 7v10a.75.75 0 0 0 1.5 0V9l1.685 1.93a.75.75 0 0 0 1.13-.986l-3-3.437a.75.75 0 0 0-.828-.21Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm2.75 15V9l1.685 1.93a.75.75 0 0 0 1.13-.986l-3-3.437A.75.75 0 0 0 13.25 7v10a.75.75 0 0 0 1.5 0Zm-8.243-4.003a.75.75 0 0 1 1.058.072L9.25 15V7a.75.75 0 0 1 1.5 0v10a.75.75 0 0 1-1.315.493l-3-3.437a.75.75 0 0 1 .072-1.059Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z" opacity={0.5} /><path fill="currentColor" d="M7.565 13.07a.75.75 0 1 0-1.13.986l3 3.437A.75.75 0 0 0 10.75 17V7a.75.75 0 0 0-1.5 0v8l-1.685-1.93ZM14.75 17V9l1.685 1.93a.75.75 0 0 0 1.13-.986l-3-3.437A.75.75 0 0 0 13.25 7v10a.75.75 0 0 0 1.5 0Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default RoundTransferVertical