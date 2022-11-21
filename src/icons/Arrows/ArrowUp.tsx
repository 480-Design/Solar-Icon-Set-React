import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ArrowUp = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12 4 .53-.53a.75.75 0 0 0-1.06 0L12 4ZM5.47 9.47a.75.75 0 1 0 1.06 1.06L5.47 9.47Zm12 1.06a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM11.25 20a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2.5a.75.75 0 0 0-1.5 0h1.5Zm-1.5-3a.75.75 0 0 0 1.5 0h-1.5Zm.22-11.03-6 6 1.06 1.06 6-6-1.06-1.06Zm0 1.06 6 6 1.06-1.06-6-6-1.06 1.06ZM12.75 20v-2.5h-1.5V20h1.5Zm0-5.5V4h-1.5v10.5h1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M11.25 20a.75.75 0 0 0 1.5 0h-1.5Zm1.5 0V4h-1.5v16h1.5Z" fill="currentColor" /><path d="m12 4 .53-.53a.75.75 0 0 0-1.06 0L12 4Zm5.47 6.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-12-1.06a.75.75 0 1 0 1.06 1.06L5.47 9.47Zm6-4.94 6 6 1.06-1.06-6-6-1.06 1.06Zm0-1.06-6 6 1.06 1.06 6-6-1.06-1.06Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.25 20a.75.75 0 0 0 1.5 0h-1.5ZM12 4l.53-.53a.75.75 0 0 0-1.06 0L12 4Zm5.47 6.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-12-1.06a.75.75 0 1 0 1.06 1.06L5.47 9.47ZM12.75 20V4h-1.5v16h1.5ZM11.47 4.53l6 6 1.06-1.06-6-6-1.06 1.06Zm0-1.06-6 6 1.06 1.06 6-6-1.06-1.06Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.47 3.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06l-4.72-4.72V20a.75.75 0 0 1-1.5 0V5.81l-4.72 4.72a.75.75 0 1 1-1.06-1.06l6-6Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.75 20a.75.75 0 0 1-1.5 0v-9.25H6a.75.75 0 0 1-.53-1.28l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1-.53 1.28h-5.25V20Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M12 20.75a.75.75 0 0 0 .75-.75v-9.25h-1.5V20c0 .414.336.75.75.75Z" fill="currentColor" /><path d="M6 10.75a.75.75 0 0 1-.53-1.28l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1-.53 1.28H6Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ArrowUp