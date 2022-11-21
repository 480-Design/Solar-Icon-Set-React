import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Reel2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 22h10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" stroke="currentColor" strokeWidth={1.5} /><path d="M19.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 17.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" fill="currentColor" /><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M12 22h10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" stroke="currentColor" strokeWidth={1.5} /><path d="M19.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 17.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><path d="M12 22h10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" stroke="currentColor" strokeWidth={1.5} /><path d="M19.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 17.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Zm5.48 18.5A10.745 10.745 0 0 0 22.75 12c0-5.937-4.813-10.75-10.75-10.75S1.25 6.063 1.25 12 6.063 22.75 12 22.75h10a.75.75 0 0 0 0-1.5h-4.52ZM12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" fill="currentColor" /><path d="M19.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 17.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 14.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.993 9.993 0 0 1-4.73 8.5h3.98a.75.75 0 0 1 0 1.5H12Zm1-16.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM6.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm13 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 17.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM8.25 12a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0 5.523 4.477 10 10 10h9.25a.75.75 0 0 0 0-1.5h-3.98A9.993 9.993 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5Z" fill="currentColor" /><path d="M5.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM13 18.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM18.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Reel2