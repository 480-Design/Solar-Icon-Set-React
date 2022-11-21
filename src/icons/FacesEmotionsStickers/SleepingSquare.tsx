import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const SleepingSquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1M13.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2m10 10c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m17 4 3.464-2L19 7.464l3.464-2M14.048 5.5l1.732 1-2.732.732 1.732 1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1M13.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="m17 4 3.464-2L19 7.464l3.464-2M14.048 5.5l1.732 1-2.732.732 1.732 1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1M13.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m17 4 3.464-2L19 7.464l3.464-2M14.048 5.5l1.732 1-2.732.732 1.732 1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M20.92 1.405a.75.75 0 0 1 .268.79l-.995 3.714 1.896-1.094a.75.75 0 1 1 .75 1.299l-3.464 2a.75.75 0 0 1-1.1-.844l.996-3.715-1.896 1.095a.75.75 0 1 1-.75-1.3l3.464-2a.75.75 0 0 1 .832.055Zm-8.977-.155H12a.75.75 0 0 1 0 1.5c-2.378 0-4.086.002-5.386.176-1.279.172-2.05.5-2.62 1.069-.569.57-.896 1.34-1.068 2.619-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069.569-.57.896-1.34 1.068-2.619.174-1.3.176-3.008.176-5.386a.75.75 0 0 1 1.5 0v.057c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19Zm1.456 3.875a.75.75 0 0 1 1.024-.275l1.732 1a.75.75 0 0 1-.18 1.374l-.984.264.164.094a.75.75 0 0 1-.75 1.3l-1.732-1a.75.75 0 0 1 .18-1.375l.984-.263-.164-.095a.75.75 0 0 1-.274-1.024Zm-7.4 5.317a.75.75 0 0 1 1.059.056c.464.517.965.752 1.442.752s.978-.235 1.442-.752a.75.75 0 1 1 1.116 1.004c-.67.743-1.548 1.248-2.558 1.248-1.01 0-1.889-.505-2.558-1.248a.75.75 0 0 1 .056-1.06Zm7 0a.75.75 0 0 1 1.059.056c.465.517.965.752 1.442.752s.977-.235 1.442-.752a.75.75 0 1 1 1.116 1.004c-.67.743-1.548 1.248-2.558 1.248-1.01 0-1.889-.505-2.558-1.248a.75.75 0 0 1 .056-1.06Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M16.375 4.65a.75.75 0 1 1-.75-1.3l3.464-2a.75.75 0 0 1 1.1.844l-.996 3.715 1.896-1.094a.75.75 0 1 1 .75 1.299l-3.464 2a.75.75 0 0 1-1.1-.844l.996-3.715-1.896 1.095ZM12.673 6.15a.75.75 0 1 1 .75-1.3l1.732 1a.75.75 0 0 1-.181 1.374l-.983.264.164.095a.75.75 0 1 1-.75 1.299l-1.732-1a.75.75 0 0 1 .18-1.374l.984-.264-.164-.094Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.975 3.02c-.058.12-.105.244-.141.371a2.25 2.25 0 0 0-3.032 1.968 2.25 2.25 0 0 0 .12 3.822l1.733 1a2.25 2.25 0 0 0 3.357-1.663 2.25 2.25 0 0 0 3.113.894l1.782-1.028C21 9.61 21 11.116 21 13c0 4.714 0 7.071-1.465 8.535C18.072 23 15.714 23 11 23s-7.071 0-8.536-1.465C1 20.072 1 17.714 1 13s0-7.071 1.464-8.536C3.93 3 6.286 3 11 3c1.117 0 2.103 0 2.975.02Zm-.917 8.479a.75.75 0 1 0-1.116 1.002c.67.744 1.548 1.249 2.558 1.249 1.01 0 1.889-.505 2.558-1.248a.75.75 0 1 0-1.116-1.004c-.465.517-.965.752-1.442.752s-.977-.235-1.442-.752Zm-8.06-.057a.75.75 0 0 1 1.06.056c.465.517.965.752 1.442.752s.978-.235 1.442-.752a.75.75 0 1 1 1.116 1.004c-.67.743-1.548 1.248-2.558 1.248-1.01 0-1.889-.505-2.558-1.248a.75.75 0 0 1 .056-1.06ZM12 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2.464 21.535C3.93 23 6.286 23 11 23c4.714 0 7.071 0 8.535-1.465C21 20.072 21 17.714 21 13s0-7.071-1.465-8.536C18.072 3 15.714 3 11 3S3.929 3 2.464 4.464C1 5.93 1 8.286 1 13c0 4.714 0 7.071 1.464 8.535Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.375 4.65a.75.75 0 1 1-.75-1.3l3.464-2a.75.75 0 0 1 1.1.844l-.996 3.715 1.896-1.094a.75.75 0 1 1 .75 1.299l-3.464 2a.75.75 0 0 1-1.1-.844l.996-3.715-1.896 1.095ZM12.673 6.15a.75.75 0 1 1 .75-1.3l1.732 1a.75.75 0 0 1-.181 1.374l-.983.264.164.095a.75.75 0 1 1-.75 1.299l-1.732-1a.75.75 0 0 1 .18-1.374l.984-.264-.164-.094Z" fill="currentColor" /><path d="M11 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11.998 11.442a.75.75 0 0 1 1.06.056c.465.517.965.752 1.442.752s.977-.235 1.442-.752a.75.75 0 1 1 1.116 1.004c-.67.743-1.548 1.248-2.558 1.248-1.01 0-1.889-.505-2.558-1.248a.75.75 0 0 1 .056-1.06ZM6.058 11.498a.75.75 0 1 0-1.116 1.004c.67.743 1.548 1.248 2.558 1.248 1.01 0 1.889-.505 2.558-1.248a.75.75 0 1 0-1.116-1.004c-.464.517-.965.752-1.442.752s-.978-.235-1.442-.752Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default SleepingSquare