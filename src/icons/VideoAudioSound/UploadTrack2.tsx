import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const UploadTrack2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13 15V7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={11} cy={15} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M16 10a3 3 0 0 1-3-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M17.25 22a.75.75 0 0 0 1.5 0h-1.5Zm.75-7 .53-.53a.75.75 0 0 0-1.06 0L18 15Zm1.97 3.03a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-5-1.06a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM18.75 22v-7h-1.5v7h1.5Zm-1.28-6.47 2.5 2.5 1.06-1.06-2.5-2.5-1.06 1.06Zm0-1.06-2.5 2.5 1.06 1.06 2.5-2.5-1.06-1.06Z" fill="currentColor" /><path d="M14 21.8c-.646.131-1.315.2-2 .2-5.523 0-10-4.477-10-10 0-1.821.487-3.53 1.338-5M21.8 14c.131-.646.2-1.315.2-2 0-5.523-4.477-10-10-10-1.821 0-3.53.487-5 1.338" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13 15V7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={11} cy={15} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M16 10a3 3 0 0 1-3-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M17.25 22a.75.75 0 0 0 1.5 0h-1.5Zm.75-7 .53-.53a.75.75 0 0 0-1.06 0L18 15Zm1.97 3.03a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-5-1.06a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM18.75 22v-7h-1.5v7h1.5Zm-1.28-6.47 2.5 2.5 1.06-1.06-2.5-2.5-1.06 1.06Zm0-1.06-2.5 2.5 1.06 1.06 2.5-2.5-1.06-1.06Z" fill="currentColor" /><circle opacity={0.5} cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13 15V7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={11} cy={15} r={2} stroke="currentColor" strokeWidth={1.5} /><path d="M16 10a3 3 0 0 1-3-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14 21.8c-.646.131-1.315.2-2 .2-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10c0 .685-.069 1.354-.2 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M17.25 22a.75.75 0 0 0 1.5 0h-1.5Zm.75-7 .53-.53a.75.75 0 0 0-1.06 0L18 15Zm1.97 3.03a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-5-1.06a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM18.75 22v-7h-1.5v7h1.5Zm-1.28-6.47 2.5 2.5 1.06-1.06-2.5-2.5-1.06 1.06Zm0-1.06-2.5 2.5 1.06 1.06 2.5-2.5-1.06-1.06Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 1.85 18.315.75.75 0 1 1 .3 1.47c-.696.141-1.415.215-2.15.215-5.937 0-10.75-4.813-10.75-10.75S6.063 1.25 12 1.25 22.75 6.063 22.75 12c0 .735-.074 1.454-.215 2.15a.75.75 0 0 1-1.47-.3A9.25 9.25 0 0 0 12 2.75ZM13.75 7A2.25 2.25 0 0 0 16 9.25a.75.75 0 0 1 0 1.5 3.734 3.734 0 0 1-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45V7h1.5Zm-1.5 8a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0Zm5.22-.53a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06l2.5-2.5Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17.47 14.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06l2.5-2.5Z" fill="currentColor" /><path d="M12.25 15a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15.75 21.273A9.971 9.971 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.985 9.985 0 0 1-.547 3.27L19.59 13.41a2.25 2.25 0 0 0-3.182 0l-2.5 2.5a2.25 2.25 0 0 0 1.841 3.827v1.537ZM13 6.25a.75.75 0 0 1 .75.75A2.25 2.25 0 0 0 16 9.25a.75.75 0 0 1 0 1.5 3.734 3.734 0 0 1-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45V7a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M15.75 21.273A9.971 9.971 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.985 9.985 0 0 1-.547 3.27L19.59 13.41a2.25 2.25 0 0 0-3.182 0l-2.5 2.5a2.25 2.25 0 0 0 1.841 3.827v1.537Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.75 7a.75.75 0 0 0-1.5 0v5.55a2.75 2.75 0 1 0 1.5 2.45v-5c.627.471 1.406.75 2.25.75a.75.75 0 0 0 0-1.5A2.25 2.25 0 0 1 13.75 7ZM17.47 14.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06l2.5-2.5Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default UploadTrack2