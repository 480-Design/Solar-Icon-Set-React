import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MaximizeSquareMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 7h.75a.75.75 0 0 0-.75-.75V7Zm-3-.75a.75.75 0 0 0 0 1.5v-1.5ZM16.25 10a.75.75 0 0 0 1.5 0h-1.5ZM7 17h-.75c0 .414.336.75.75.75V17Zm3 .75a.75.75 0 0 0 0-1.5v1.5ZM7.75 14a.75.75 0 0 0-1.5 0h1.5Zm5.22-4.03a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-1.94 4.06a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM17 6.25h-3v1.5h3v-1.5Zm-.75.75v3h1.5V7h-1.5ZM7 17.75h3v-1.5H7v1.5Zm.75-.75v-3h-1.5v3h1.5Zm6.28-5.97 3.5-3.5-1.06-1.06-3.5 3.5 1.06 1.06Zm-6.5 6.5 3.5-3.5-1.06-1.06-3.5 3.5 1.06 1.06Z" fill="currentColor" /><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M17 7h.75a.75.75 0 0 0-.75-.75V7Zm-3-.75a.75.75 0 0 0 0 1.5v-1.5ZM16.25 10a.75.75 0 0 0 1.5 0h-1.5ZM7 17h-.75c0 .414.336.75.75.75V17Zm3 .75a.75.75 0 0 0 0-1.5v1.5ZM7.75 14a.75.75 0 0 0-1.5 0h1.5Zm5.22-4.03a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-1.94 4.06a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM17 6.25h-3v1.5h3v-1.5Zm-.75.75v3h1.5V7h-1.5ZM7 17.75h3v-1.5H7v1.5Zm.75-.75v-3h-1.5v3h1.5Zm6.28-5.97 3.5-3.5-1.06-1.06-3.5 3.5 1.06 1.06Zm-6.5 6.5 3.5-3.5-1.06-1.06-3.5 3.5 1.06 1.06Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M17 7h.75a.75.75 0 0 0-.75-.75V7Zm-3-.75a.75.75 0 0 0 0 1.5v-1.5ZM16.25 10a.75.75 0 0 0 1.5 0h-1.5ZM7 17h-.75c0 .414.336.75.75.75V17Zm3 .75a.75.75 0 0 0 0-1.5v1.5ZM7.75 14a.75.75 0 0 0-1.5 0h1.5Zm5.22-4.03a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-1.94 4.06a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM17 6.25h-3v1.5h3v-1.5Zm-.75.75v3h1.5V7h-1.5ZM7 17.75h3v-1.5H7v1.5Zm.75-.75v-3h-1.5v3h1.5Zm6.28-5.97 3.5-3.5-1.06-1.06-3.5 3.5 1.06 1.06Zm-6.5 6.5 3.5-3.5-1.06-1.06-3.5 3.5 1.06 1.06Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.25 7c0 .414.336.75.75.75h1.19l-2.22 2.22a.75.75 0 1 0 1.06 1.06l2.22-2.22V10a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75ZM11.03 14.03a.75.75 0 1 0-1.06-1.06l-2.22 2.22V14a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H8.81l2.22-2.22Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19h-.114ZM3.995 3.995c.57-.57 1.34-.897 2.619-1.069 1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.068 2.619.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62-.57.569-1.34.896-2.619 1.068-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464ZM13.25 7c0 .414.336.75.75.75h1.19l-2.22 2.22a.75.75 0 1 0 1.06 1.06l2.22-2.22V10a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75Zm-2.22 7.03a.75.75 0 1 0-1.06-1.06l-2.22 2.22V14a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H8.81l2.22-2.22Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M14 7.75a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V8.81l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22H14Zm-2.97 5.22a.75.75 0 0 1 0 1.06l-2.22 2.22H10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.19l2.22-2.22a.75.75 0 0 1 1.06 0Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MaximizeSquareMinimalistic