import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Logout = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 12h10m0 0-3-3m3 3-3 3" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M4 12a8 8 0 0 1 8-8m0 16a7.985 7.985 0 0 1-6.245-3" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 20a8 8 0 1 1 0-16" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 12h10m0 0-3-3m3 3-3 3" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 20a8 8 0 1 1 0-16" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 12h10m0 0-3-3m3 3-3 3" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 3.25a.75.75 0 0 1 0 1.5 7.25 7.25 0 0 0 0 14.5.75.75 0 0 1 0 1.5 8.75 8.75 0 1 1 0-17.5Z" /><path fill="currentColor" d="M16.47 9.53a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H10a.75.75 0 0 1 0-1.5h8.19l-1.72-1.72Z" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M16.47 8.47a.75.75 0 0 0 0 1.06l1.72 1.72H10a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z" clipRule="evenodd" /><path fill="currentColor" d="M4 12a8 8 0 0 0 8 8v-3.75c0-.943 0-1.414-.293-1.707-.293-.293-.764-.293-1.707-.293" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 20a8 8 0 1 1 0-16v16Z" opacity={0.5} /><path fill="currentColor" fillRule="evenodd" d="M16.47 8.47a.75.75 0 0 0 0 1.06l1.72 1.72H10a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z" clipRule="evenodd" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Logout