import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const SquareBottomUp = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.178 21.893 17.055 21.992 13 22M2 11c.008-4.055.107-6.178 1.464-7.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2.47 20.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM11 13h.75a.75.75 0 0 0-.75-.75V13Zm-6-.75a.75.75 0 0 0 0 1.5v-1.5ZM10.25 19a.75.75 0 0 0 1.5 0h-1.5Zm-6.72 2.53 8-8-1.06-1.06-8 8 1.06 1.06ZM11 12.25H5v1.5h6v-1.5Zm-.75.75v6h1.5v-6h-1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M13 22c4.055-.008 6.178-.107 7.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.071 2 16.714 2 12 2S4.929 2 3.464 3.464C2.107 4.822 2.008 6.944 2 11" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2.47 20.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM11 13h.75a.75.75 0 0 0-.75-.75V13Zm-6-.75a.75.75 0 0 0 0 1.5v-1.5ZM10.25 19a.75.75 0 0 0 1.5 0h-1.5Zm-6.72 2.53 8-8-1.06-1.06-8 8 1.06 1.06ZM11 12.25H5v1.5h6v-1.5Zm-.75.75v6h1.5v-6h-1.5Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13 22c4.055-.008 6.178-.107 7.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.071 2 16.714 2 12 2S4.929 2 3.464 3.464C2.107 4.822 2.008 6.944 2 11" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2.47 20.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM11 13h.75a.75.75 0 0 0-.75-.75V13Zm-6-.75a.75.75 0 0 0 0 1.5v-1.5ZM10.25 19a.75.75 0 0 0 1.5 0h-1.5Zm-6.72 2.53 8-8-1.06-1.06-8 8 1.06 1.06ZM11 12.25H5v1.5h6v-1.5Zm-.75.75v6h1.5v-6h-1.5Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.943 1.25c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.828.829-1.238 1.868-1.448 3.167-.207 1.276-.232 2.882-.236 4.898a.75.75 0 1 0 1.5.002c.004-2.04.032-3.523.217-4.66.18-1.117.5-1.818 1.028-2.346.57-.57 1.34-.897 2.618-1.069 1.3-.174 3.009-.176 5.387-.176 2.378 0 4.086.002 5.386.176 1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.067 2.619.175 1.3.177 3.008.177 5.386s-.002 4.086-.177 5.386c-.171 1.279-.498 2.05-1.068 2.62-.528.528-1.23.847-2.345 1.027-1.138.184-2.621.213-4.661.216a.75.75 0 0 0 .002 1.5c2.015-.003 3.621-.028 4.898-.235 1.299-.21 2.338-.62 3.167-1.448.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19h-.114Z" fill="currentColor" /><path d="M5 12.25a.75.75 0 0 0 0 1.5h4.19l-6.72 6.72a.75.75 0 1 0 1.06 1.06l6.72-6.72V19a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-.75-.75H5Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m5.568 15.25-3.205 3.205C2 16.991 2 14.961 2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22c-2.96 0-4.991 0-6.455-.363l3.205-3.205V19a2.25 2.25 0 0 0 4.5 0v-6A2.25 2.25 0 0 0 11 10.75H5a2.25 2.25 0 0 0 0 4.5h.568Z" fill="currentColor" /><path d="M5 12.25a.75.75 0 0 0 0 1.5h4.19l-6.72 6.72a.75.75 0 1 0 1.06 1.06l6.72-6.72V19a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-.75-.75H5Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M4.25 13a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-4.19l-6.72 6.72a.75.75 0 0 1-1.06-1.06l6.72-6.72H5a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default SquareBottomUp