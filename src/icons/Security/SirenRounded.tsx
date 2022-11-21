import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const SirenRounded = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 22v-6a8 8 0 0 0-14.93-4M4 22v-6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14.29 11.5a4.014 4.014 0 0 1 2.21 2.21M12 2v3M21 6l-1.5 1.5M3 6l1.5 1.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12 19v3M2 22h12m8 0h-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M20 22v-6a8 8 0 1 0-16 0v6" stroke="currentColor" strokeWidth={1.5} /><path d="M14.29 11.5a4.014 4.014 0 0 1 2.21 2.21M2 22h20M12 2v3M21 6l-1.5 1.5M3 6l1.5 1.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M12 19v3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 22v-6a8 8 0 1 0-16 0v6" stroke="currentColor" strokeWidth={1.5} /><path d="M14.29 11.5a4.014 4.014 0 0 1 2.21 2.21M2 22h20M12 2v3M21 6l-1.5 1.5M3 6l1.5 1.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12 19v3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V2ZM14.572 10.805a.75.75 0 1 0-.563 1.39c.814.33 1.466.981 1.796 1.796a.75.75 0 1 0 1.39-.563 4.764 4.764 0 0 0-2.623-2.623Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 7.25A8.75 8.75 0 0 0 3.25 16v5.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1.25V16A8.75 8.75 0 0 0 12 7.25Zm.75 14h6.5V16a7.25 7.25 0 1 0-14.5 0v5.25h6.5v-1.628a2.251 2.251 0 1 1 1.5 0v1.628Zm-.75-3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" fill="currentColor" /><path d="M21.53 5.47a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0ZM3.53 5.47a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06l-1.5-1.5Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2 21.25h2V16a8 8 0 1 1 16 0v5.25h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5Zm10.75-2.45a1.5 1.5 0 1 0-1.5 0v2.45h1.5V18.8Zm.845-7.581a.75.75 0 0 1 .977-.414 4.764 4.764 0 0 1 2.623 2.623.75.75 0 0 1-1.39.563 3.264 3.264 0 0 0-1.796-1.796.75.75 0 0 1-.414-.976Z" fill="currentColor" /><path d="M21.53 5.47a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0ZM3.53 5.47a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06l-1.5-1.5Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M4 16v5.25h16V16a8 8 0 1 0-16 0Z" fill="currentColor" /><path d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V2ZM21.53 5.47a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0ZM3.53 5.47a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06l-1.5-1.5ZM14.572 10.805a.75.75 0 0 0-.563 1.39c.814.33 1.466.981 1.795 1.796a.75.75 0 1 0 1.39-.563 4.764 4.764 0 0 0-2.622-2.623ZM12.75 18.8a1.5 1.5 0 1 0-1.5 0v2.45h1.5V18.8ZM4 21.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5H4Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default SirenRounded