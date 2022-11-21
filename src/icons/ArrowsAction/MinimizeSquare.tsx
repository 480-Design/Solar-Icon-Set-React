import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MinimizeSquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20.53 4.53a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM14 10h-.75c0 .414.336.75.75.75V10Zm3.75.75a.75.75 0 0 0 0-1.5v1.5Zm-3-4.5a.75.75 0 0 0-1.5 0h1.5Zm4.72-2.78-6 6 1.06 1.06 6-6-1.06-1.06ZM14 10.75h3.75v-1.5H14v1.5Zm.75-.75V6.25h-1.5V10h1.5ZM3.47 19.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM10 14h.75a.75.75 0 0 0-.75-.75V14Zm-3.75-.75a.75.75 0 0 0 0 1.5v-1.5Zm3 4.5a.75.75 0 0 0 1.5 0h-1.5Zm-4.72 2.78 6-6-1.06-1.06-6 6 1.06 1.06ZM10 13.25H6.25v1.5H10v-1.5Zm-.75.75v3.75h1.5V14h-1.5Z" fill="currentColor" /><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20.53 4.53a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM14 10h-.75c0 .414.336.75.75.75V10Zm3.75.75a.75.75 0 0 0 0-1.5v1.5Zm-3-4.5a.75.75 0 0 0-1.5 0h1.5Zm4.72-2.78-6 6 1.06 1.06 6-6-1.06-1.06ZM14 10.75h3.75v-1.5H14v1.5Zm.75-.75V6.25h-1.5V10h1.5ZM3.47 19.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM10 14h.75a.75.75 0 0 0-.75-.75V14Zm-3.75-.75a.75.75 0 0 0 0 1.5v-1.5Zm3 4.5a.75.75 0 0 0 1.5 0h-1.5Zm-4.72 2.78 6-6-1.06-1.06-6 6 1.06 1.06ZM10 13.25H6.25v1.5H10v-1.5Zm-.75.75v3.75h1.5V14h-1.5Z" fill="currentColor" /><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20.53 4.53a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM14 10h-.75c0 .414.336.75.75.75V10Zm3.75.75a.75.75 0 0 0 0-1.5v1.5Zm-3-4.5a.75.75 0 0 0-1.5 0h1.5Zm4.72-2.78-6 6 1.06 1.06 6-6-1.06-1.06ZM14 10.75h3.75v-1.5H14v1.5Zm.75-.75V6.25h-1.5V10h1.5ZM3.47 19.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM10 14h.75a.75.75 0 0 0-.75-.75V14Zm-3.75-.75a.75.75 0 0 0 0 1.5v-1.5Zm3 4.5a.75.75 0 0 0 1.5 0h-1.5Zm-4.72 2.78 6-6-1.06-1.06-6 6 1.06 1.06ZM10 13.25H6.25v1.5H10v-1.5Zm-.75.75v3.75h1.5V14h-1.5Z" fill="currentColor" /><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19h-.114ZM3.995 3.995c.57-.57 1.34-.897 2.619-1.069 1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c.882.119 1.522.311 2.021.606L14.75 8.189V6.25a.75.75 0 0 0-1.5 0V10c0 .414.336.75.75.75h3.75a.75.75 0 0 0 0-1.5h-1.94l4.658-4.657c.295.499.487 1.139.606 2.02.174 1.3.176 3.009.176 5.387 0 2.378-.002 4.086-.176 5.386-.172 1.279-.5 2.05-1.069 2.62-.57.569-1.34.896-2.619 1.068-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-.882-.119-1.522-.311-2.021-.606l4.657-4.657v1.939a.75.75 0 0 0 1.5 0V14a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0 0 1.5h1.94l-4.658 4.657c-.295-.499-.487-1.139-.606-2.02-.174-1.3-.176-3.009-.176-5.387 0-2.378.002-4.086.176-5.386.172-1.279.5-2.05 1.069-2.62Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.134 0 6.455 0 7.952.988L14.75 8.189V6.25a.75.75 0 0 0-1.5 0V10c0 .414.336.75.75.75h3.75a.75.75 0 0 0 0-1.5h-1.94l5.202-5.202C22 5.545 22 7.866 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22c-4.134 0-6.455 0-7.952-.988l5.202-5.201v1.939a.75.75 0 0 0 1.5 0V14a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0 0 1.5h1.94l-5.202 5.202C2 18.455 2 16.134 2 12Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" fill="currentColor" /><path d="M19.952 2.988a3.721 3.721 0 0 1 1.06 1.06L15.811 9.25h1.939a.75.75 0 0 1 0 1.5H14a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 1.5 0v1.94l5.202-5.202ZM4.048 21.012a3.715 3.715 0 0 1-1.06-1.06l5.201-5.202H6.25a.75.75 0 0 1 0-1.5H10a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0v-1.94l-5.202 5.202Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MinimizeSquare