import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const MapPointHospital = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={12} cy={10} r={4} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10.5 10h3M12 11.5v-3M5 15.216c-.647-1.654-1-3.415-1-5.073C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C9.265 21.08 8.138 20.144 7.194 19" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.605 4 10.144Z" opacity={0.5} /><circle cx={12} cy={10} r={4} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10.5 10h3M12 11.5v-3" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.605 4 10.144Z" /><circle cx={12} cy={10} r={4} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10.5 10h3M12 11.5v-3" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M3.25 10.143C3.25 5.244 7.155 1.25 12 1.25c4.845 0 8.75 3.994 8.75 8.893 0 2.365-.674 4.905-1.866 7.099-1.19 2.191-2.928 4.095-5.104 5.112a4.2 4.2 0 0 1-3.56 0c-2.176-1.017-3.914-2.92-5.104-5.112-1.192-2.194-1.866-4.734-1.866-7.099ZM12 2.75c-3.992 0-7.25 3.297-7.25 7.393 0 2.097.603 4.392 1.684 6.383 1.082 1.993 2.612 3.624 4.42 4.469a2.7 2.7 0 0 0 2.291 0c1.809-.845 3.339-2.476 4.421-4.469 1.081-1.99 1.684-4.286 1.684-6.383 0-4.096-3.258-7.393-7.25-7.393Zm0 4a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM7.25 10a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM12 7.75a.75.75 0 0 1 .75.75v.75h.75a.75.75 0 0 1 0 1.5h-.75v.75a.75.75 0 0 1-1.5 0v-.75h-.75a.75.75 0 0 1 0-1.5h.75V8.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12 7.75a.75.75 0 0 1 .75.75v.75h.75a.75.75 0 0 1 0 1.5h-.75v.75a.75.75 0 0 1-1.5 0v-.75h-.75a.75.75 0 0 1 0-1.5h.75V8.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M12 2c-4.418 0-8 3.646-8 8.143 0 4.462 2.553 9.67 6.537 11.531a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.605 20 10.144 20 5.645 16.418 2 12 2Zm0 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm.75-5.5a.75.75 0 0 0-1.5 0v.75h-.75a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0v-.75h.75a.75.75 0 0 0 0-1.5h-.75V8.5Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2c-4.418 0-8 3.646-8 8.143 0 4.462 2.553 9.67 6.537 11.531a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.605 20 10.144 20 5.645 16.418 2 12 2Zm0 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" clipRule="evenodd" opacity={0.5} /><path fill="currentColor" fillRule="evenodd" d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm.75-5.5a.75.75 0 0 0-1.5 0v.75h-.75a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0v-.75h.75a.75.75 0 0 0 0-1.5h-.75V8.5Z" clipRule="evenodd" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MapPointHospital