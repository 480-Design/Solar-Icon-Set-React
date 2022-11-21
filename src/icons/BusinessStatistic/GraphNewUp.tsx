import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const GraphNewUp = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={19} cy={5} r={3} stroke="currentColor" strokeWidth={1.5} /><path d="M6.47 13.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm2.823-1.763.53.53-.53-.53Zm1.414 0 .53-.53-.53.53Zm1.586 1.586-.53.53.53-.53Zm1.414 0 .53.53-.53-.53ZM17 10h.75a.75.75 0 0 0-.75-.75V10Zm-.75 2.5a.75.75 0 0 0 1.5 0h-1.5ZM14.5 9.25a.75.75 0 0 0 0 1.5v-1.5Zm-6.97 5.28 2.293-2.293-1.06-1.06L6.47 13.47l1.06 1.06Zm2.647-2.293 1.586 1.586 1.06-1.06-1.586-1.586-1.06 1.06Zm4.06 1.586 3.293-3.293-1.06-1.06-3.293 3.293 1.06 1.06ZM16.25 10v2.5h1.5V10h-1.5Zm.75-.75h-2.5v1.5H17v-1.5Zm-5.237 4.573a1.75 1.75 0 0 0 2.474 0l-1.06-1.06a.25.25 0 0 1-.354 0l-1.06 1.06Zm-1.94-1.586a.25.25 0 0 1 .354 0l1.06-1.06a1.75 1.75 0 0 0-2.474 0l1.06 1.06Z" fill="currentColor" /><path d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12c0-1.128 0-2.122.02-3M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.44.441-.749.963-.964 1.606" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={19} cy={5} r={3} stroke="currentColor" strokeWidth={1.5} /><path d="M6.47 13.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm2.823-1.763.53.53-.53-.53Zm1.414 0 .53-.53-.53.53Zm1.586 1.586-.53.53.53-.53Zm1.414 0 .53.53-.53-.53ZM17 10h.75a.75.75 0 0 0-.75-.75V10Zm-.75 2.5a.75.75 0 0 0 1.5 0h-1.5ZM14.5 9.25a.75.75 0 0 0 0 1.5v-1.5Zm-6.97 5.28 2.293-2.293-1.06-1.06L6.47 13.47l1.06 1.06Zm2.647-2.293 1.586 1.586 1.06-1.06-1.586-1.586-1.06 1.06Zm4.06 1.586 3.293-3.293-1.06-1.06-3.293 3.293 1.06 1.06ZM16.25 10v2.5h1.5V10h-1.5Zm.75-.75h-2.5v1.5H17v-1.5Zm-5.237 4.573a1.75 1.75 0 0 0 2.474 0l-1.06-1.06a.25.25 0 0 1-.354 0l-1.06 1.06Zm-1.94-1.586a.25.25 0 0 1 .354 0l1.06-1.06a1.75 1.75 0 0 0-2.474 0l1.06 1.06Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={19} cy={5} r={3} stroke="currentColor" strokeWidth={1.5} /><path d="M6.47 13.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm2.823-1.763.53.53-.53-.53Zm1.414 0 .53-.53-.53.53Zm1.586 1.586-.53.53.53-.53Zm1.414 0 .53.53-.53-.53ZM17 10h.75a.75.75 0 0 0-.75-.75V10Zm-.75 2.5a.75.75 0 0 0 1.5 0h-1.5ZM14.5 9.25a.75.75 0 0 0 0 1.5v-1.5Zm-6.97 5.28 2.293-2.293-1.06-1.06L6.47 13.47l1.06 1.06Zm2.647-2.293 1.586 1.586 1.06-1.06-1.586-1.586-1.06 1.06Zm4.06 1.586 3.293-3.293-1.06-1.06-3.293 3.293 1.06 1.06ZM16.25 10v2.5h1.5V10h-1.5Zm.75-.75h-2.5v1.5H17v-1.5Zm-5.237 4.573a1.75 1.75 0 0 0 2.474 0l-1.06-1.06a.25.25 0 0 1-.354 0l-1.06 1.06Zm-1.94-1.586a.25.25 0 0 1 .354 0l1.06-1.06a1.75 1.75 0 0 0-2.474 0l1.06 1.06Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.943 1.25H13.5a.75.75 0 0 1 0 1.5H12c-2.378 0-4.086.002-5.386.176-1.279.172-2.05.5-2.62 1.069-.569.57-.896 1.34-1.068 2.619-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069.569-.57.896-1.34 1.068-2.619.174-1.3.176-3.008.176-5.386v-1.5a.75.75 0 0 1 1.5 0v1.557c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM19 2.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" fill="currentColor" /><path d="M13.75 10c0 .414.336.75.75.75h.69l-2.013 2.013a.25.25 0 0 1-.354 0l-1.586-1.586a1.75 1.75 0 0 0-2.474 0L6.47 13.47a.75.75 0 1 0 1.06 1.06l2.293-2.293a.25.25 0 0 1 .354 0l1.586 1.586a1.75 1.75 0 0 0 2.474 0l2.013-2.012v.689a.75.75 0 0 0 1.5 0V10a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 2c1.399 0 2.59 0 3.612.038a4.5 4.5 0 0 0 6.35 6.35C22 9.41 22 10.601 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2Zm2.5 8.75a.75.75 0 0 1 0-1.5H17a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-.69l-2.013 2.013a1.75 1.75 0 0 1-2.474 0l-1.586-1.586a.25.25 0 0 0-.354 0L7.53 14.53a.75.75 0 0 1-1.06-1.06l2.293-2.293a1.75 1.75 0 0 1 2.474 0l1.586 1.586a.25.25 0 0 0 .354 0l2.012-2.013H14.5Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" fill="currentColor" /><path d="M22 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM14.5 10.75a.75.75 0 0 1 0-1.5H17a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-.69l-2.013 2.013a1.75 1.75 0 0 1-2.474 0l-1.586-1.586a.25.25 0 0 0-.354 0L7.53 14.53a.75.75 0 0 1-1.06-1.06l2.293-2.293a1.75 1.75 0 0 1 2.474 0l1.586 1.586a.25.25 0 0 0 .354 0l2.012-2.013H14.5Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default GraphNewUp