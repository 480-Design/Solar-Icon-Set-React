import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const UndoLeftRound = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m4 7-.53-.53a.75.75 0 0 0 0 1.06L4 7Zm11 9.25a.75.75 0 0 0 0 1.5v-1.5Zm-7 0a.75.75 0 0 0 0 1.5v-1.5ZM7.53 4.53a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-1.06 6a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM20 12h.75H20Zm-9 5.75a.75.75 0 0 0 0-1.5v1.5Zm4-11.5H4v1.5h11v-1.5ZM4.53 7.53l3-3-1.06-1.06-3 3 1.06 1.06Zm-1.06 0 3 3 1.06-1.06-3-3-1.06 1.06ZM19.25 12A4.25 4.25 0 0 1 15 16.25v1.5A5.75 5.75 0 0 0 20.75 12h-1.5Zm1.5 0A5.75 5.75 0 0 0 15 6.25v1.5A4.25 4.25 0 0 1 19.25 12h1.5ZM11 16.25H8v1.5h3v-1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m4 7-.53-.53a.75.75 0 0 0 0 1.06L4 7Zm3.53-2.47a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-1.06 6a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-1.94-3 3-3-1.06-1.06-3 3 1.06 1.06Zm-1.06 0 3 3 1.06-1.06-3-3-1.06 1.06Z" fill="currentColor" /><path opacity={0.5} d="M4 6.25a.75.75 0 0 0 0 1.5v-1.5Zm4 10a.75.75 0 0 0 0 1.5v-1.5ZM20 12h.75H20Zm-5-5.75H4v1.5h11v-1.5Zm0 10H8v1.5h7v-1.5ZM19.25 12A4.25 4.25 0 0 1 15 16.25v1.5A5.75 5.75 0 0 0 20.75 12h-1.5Zm1.5 0A5.75 5.75 0 0 0 15 6.25v1.5A4.25 4.25 0 0 1 19.25 12h1.5Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m4 7-.53-.53a.75.75 0 0 0 0 1.06L4 7Zm4 9.25a.75.75 0 0 0 0 1.5v-1.5ZM7.53 4.53a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-1.06 6a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM20 12h.75H20Zm-5-5.75H4v1.5h11v-1.5Zm0 10H8v1.5h7v-1.5ZM4.53 7.53l3-3-1.06-1.06-3 3 1.06 1.06Zm-1.06 0 3 3 1.06-1.06-3-3-1.06 1.06ZM19.25 12A4.25 4.25 0 0 1 15 16.25v1.5A5.75 5.75 0 0 0 20.75 12h-1.5Zm1.5 0A5.75 5.75 0 0 0 15 6.25v1.5A4.25 4.25 0 0 1 19.25 12h1.5Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.53 3.47a.75.75 0 0 1 0 1.06L5.81 6.25H15a5.75 5.75 0 0 1 0 11.5H8a.75.75 0 0 1 0-1.5h7a4.25 4.25 0 0 0 0-8.5H5.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.53 3.47a.75.75 0 0 1 0 1.06L5.81 6.25H15a5.75 5.75 0 0 1 0 11.5H8a.75.75 0 0 1 0-1.5h7a4.25 4.25 0 0 0 0-8.5H5.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.53 3.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06L5.06 7l2.47-2.47a.75.75 0 0 0 0-1.06Z" fill="currentColor" /><path opacity={0.5} d="M5.81 6.25H15a5.75 5.75 0 0 1 0 11.5H8a.75.75 0 0 1 0-1.5h7a4.25 4.25 0 0 0 0-8.5H5.81L5.06 7l.75-.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default UndoLeftRound