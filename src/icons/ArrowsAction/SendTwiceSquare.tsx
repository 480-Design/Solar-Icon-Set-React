import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const SendTwiceSquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 14.75a.75.75 0 0 1 0 1.5v-1.5Zm-7 .75-.48.576a.75.75 0 0 1 0-1.152l.48.576Zm2.52-3.076a.75.75 0 0 1 .96 1.152l-.96-1.152Zm.96 5a.75.75 0 0 1-.96 1.152l.96-1.152ZM17 16.25h-7v-1.5h7v1.5Zm-7.48-1.326 3-2.5.96 1.152-3 2.5-.96-1.152Zm.96 0 3 2.5-.96 1.152-3-2.5.96-1.152ZM17 7.75a.75.75 0 0 1 0 1.5v-1.5Zm-7 .75-.48.576a.75.75 0 0 1 0-1.152L10 8.5Zm2.52-3.076a.75.75 0 1 1 .96 1.152l-.96-1.152Zm.96 5a.75.75 0 0 1-.96 1.152l.96-1.152ZM17 9.25h-7v-1.5h7v1.5ZM9.52 7.924l3-2.5.96 1.152-3 2.5-.96-1.152Zm.96 0 3 2.5-.96 1.152-3-2.5.96-1.152Z" fill="currentColor" /><path d="M7 6v12M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 14.75a.75.75 0 0 1 0 1.5v-1.5Zm-7 .75-.48.576a.75.75 0 0 1 0-1.152l.48.576Zm2.52-3.076a.75.75 0 0 1 .96 1.152l-.96-1.152Zm.96 5a.75.75 0 0 1-.96 1.152l.96-1.152ZM17 16.25h-7v-1.5h7v1.5Zm-7.48-1.326 3-2.5.96 1.152-3 2.5-.96-1.152Zm.96 0 3 2.5-.96 1.152-3-2.5.96-1.152ZM17 7.75a.75.75 0 0 1 0 1.5v-1.5Zm-7 .75-.48.576a.75.75 0 0 1 0-1.152L10 8.5Zm2.52-3.076a.75.75 0 1 1 .96 1.152l-.96-1.152Zm.96 5a.75.75 0 0 1-.96 1.152l.96-1.152ZM17 9.25h-7v-1.5h7v1.5ZM9.52 7.924l3-2.5.96 1.152-3 2.5-.96-1.152Zm.96 0 3 2.5-.96 1.152-3-2.5.96-1.152Z" fill="currentColor" /><path d="M7 6v12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 14.75a.75.75 0 0 1 0 1.5v-1.5Zm-7 .75-.48.576a.75.75 0 0 1 0-1.152l.48.576Zm2.52-3.076a.75.75 0 0 1 .96 1.152l-.96-1.152Zm.96 5a.75.75 0 0 1-.96 1.152l.96-1.152ZM17 16.25h-7v-1.5h7v1.5Zm-7.48-1.326 3-2.5.96 1.152-3 2.5-.96-1.152Zm.96 0 3 2.5-.96 1.152-3-2.5.96-1.152ZM17 7.75a.75.75 0 0 1 0 1.5v-1.5Zm-7 .75-.48.576a.75.75 0 0 1 0-1.152L10 8.5Zm2.52-3.076a.75.75 0 1 1 .96 1.152l-.96-1.152Zm.96 5a.75.75 0 0 1-.96 1.152l.96-1.152ZM17 9.25h-7v-1.5h7v1.5ZM9.52 7.924l3-2.5.96 1.152-3 2.5-.96-1.152Zm.96 0 3 2.5-.96 1.152-3-2.5.96-1.152Z" fill="currentColor" /><path d="M7 6v12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 7.75a.75.75 0 0 1 0 1.5h-4.928l1.408 1.174a.75.75 0 0 1-.96 1.152l-3-2.5a.75.75 0 0 1 0-1.152l3-2.5a.75.75 0 1 1 .96 1.152L12.071 7.75H17ZM17 14.75a.75.75 0 0 1 0 1.5h-4.928l1.408 1.174a.75.75 0 0 1-.96 1.152l-3-2.5a.75.75 0 0 1 0-1.152l3-2.5a.75.75 0 0 1 .96 1.152l-1.409 1.174H17ZM7 18.75a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-1.5 0v12c0 .414.336.75.75.75Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19h-.114ZM3.995 3.995c.57-.57 1.34-.897 2.619-1.069 1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.068 2.619.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62-.57.569-1.34.896-2.619 1.068-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464ZM17 14.75a.75.75 0 0 1 0 1.5h-4.928l1.408 1.174a.75.75 0 0 1-.96 1.152l-3-2.5a.75.75 0 0 1 0-1.152l3-2.5a.75.75 0 0 1 .96 1.152l-1.409 1.174H17Zm.75-6.25a.75.75 0 0 0-.75-.75h-4.928l1.408-1.174a.75.75 0 0 0-.96-1.152l-3 2.5a.75.75 0 0 0 0 1.152l3 2.5a.75.75 0 0 0 .96-1.152L12.071 9.25H17a.75.75 0 0 0 .75-.75ZM7.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0V6Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" fill="currentColor" /><path d="M17.75 8.5a.75.75 0 0 0-.75-.75h-4.928l1.408-1.174a.75.75 0 0 0-.96-1.152l-3 2.5a.75.75 0 0 0 0 1.152l3 2.5a.75.75 0 1 0 .96-1.152L12.071 9.25H17a.75.75 0 0 0 .75-.75ZM17.75 15.5a.75.75 0 0 0-.75-.75h-4.928l1.408-1.174a.75.75 0 0 0-.96-1.152l-3 2.5a.75.75 0 0 0 0 1.152l3 2.5a.75.75 0 1 0 .96-1.152l-1.409-1.174H17a.75.75 0 0 0 .75-.75ZM7.75 18a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 1.5 0v12Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default SendTwiceSquare