import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const ReciveTwiceSquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 15.5h7m0 0L11 13m3 2.5L11 18M7 8.5h7m0 0L11 6m3 2.5L11 11" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M17 6v12M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 15.5h7m0 0L11 13m3 2.5L11 18M7 8.5h7m0 0L11 6m3 2.5L11 11" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M17 6v12" /><path stroke="currentColor" strokeWidth={1.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 15.5h7m0 0L11 13m3 2.5L11 18M7 8.5h7m0 0L11 6m3 2.5L11 11" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M17 6v12" /><path stroke="currentColor" strokeWidth={1.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6.25 8.5A.75.75 0 0 1 7 7.75h4.928L10.52 6.576a.75.75 0 0 1 .96-1.152l3 2.5a.75.75 0 0 1 0 1.152l-3 2.5a.75.75 0 0 1-.96-1.152l1.409-1.174H7a.75.75 0 0 1-.75-.75ZM6.25 15.5a.75.75 0 0 1 .75-.75h4.928l-1.408-1.174a.75.75 0 0 1 .96-1.152l3 2.5a.75.75 0 0 1 0 1.152l-3 2.5a.75.75 0 0 1-.96-1.152l1.409-1.174H7a.75.75 0 0 1-.75-.75ZM16.25 18a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-1.5 0v12Z" /><path fill="currentColor" fillRule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19 1.444.194 2.584.6 3.479 1.494.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19Zm-5.33 1.676c-1.278.172-2.049.5-2.618 1.069-.57.57-.897 1.34-1.069 2.619-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069.569-.57.896-1.34 1.068-2.619.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62-.57-.569-1.34-.896-2.619-1.068-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464ZM7 14.75a.75.75 0 0 0 0 1.5h4.928l-1.408 1.174a.75.75 0 0 0 .96 1.152l3-2.5a.75.75 0 0 0 0-1.152l-3-2.5a.75.75 0 0 0-.96 1.152l1.409 1.174H7ZM6.25 8.5A.75.75 0 0 1 7 7.75h4.928L10.52 6.576a.75.75 0 0 1 .96-1.152l3 2.5a.75.75 0 0 1 0 1.152l-3 2.5a.75.75 0 0 1-.96-1.152l1.409-1.174H7a.75.75 0 0 1-.75-.75ZM17.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0V6Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity={0.5} /><path fill="currentColor" d="M6.25 8.5A.75.75 0 0 1 7 7.75h4.928L10.52 6.576a.75.75 0 0 1 .96-1.152l3 2.5a.75.75 0 0 1 0 1.152l-3 2.5a.75.75 0 1 1-.96-1.152l1.409-1.174H7a.75.75 0 0 1-.75-.75ZM6.25 15.5a.75.75 0 0 1 .75-.75h4.928l-1.408-1.174a.75.75 0 0 1 .96-1.152l3 2.5a.75.75 0 0 1 0 1.152l-3 2.5a.75.75 0 1 1-.96-1.152l1.409-1.174H7a.75.75 0 0 1-.75-.75ZM16.25 18a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-1.5 0v12Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ReciveTwiceSquare