import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const UploadTwiceSquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.25 17a.75.75 0 0 1-1.5 0h1.5Zm-.75-7-.576-.48a.75.75 0 0 1 1.152 0L8.5 10Zm3.076 2.52a.75.75 0 0 1-1.152.96l1.152-.96Zm-5 .96a.75.75 0 0 1-1.152-.96l1.152.96ZM7.75 17v-7h1.5v7h-1.5Zm1.326-7.48 2.5 3-1.152.96-2.5-3 1.152-.96Zm0 .96-2.5 3-1.152-.96 2.5-3 1.152.96ZM16.25 17a.75.75 0 0 1-1.5 0h1.5Zm-.75-7-.576-.48a.75.75 0 0 1 1.152 0L15.5 10Zm3.076 2.52a.75.75 0 0 1-1.152.96l1.152-.96Zm-5 .96a.75.75 0 0 1-1.152-.96l1.152.96ZM14.75 17v-7h1.5v7h-1.5Zm1.326-7.48 2.5 3-1.152.96-2.5-3 1.152-.96Zm0 .96-2.5 3-1.152-.96 2.5-3 1.152.96Z" fill="currentColor" /><path d="M18 7H6M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.25 17a.75.75 0 0 1-1.5 0h1.5Zm-.75-7-.576-.48a.75.75 0 0 1 1.152 0L8.5 10Zm3.076 2.52a.75.75 0 0 1-1.152.96l1.152-.96Zm-5 .96a.75.75 0 0 1-1.152-.96l1.152.96ZM7.75 17v-7h1.5v7h-1.5Zm1.326-7.48 2.5 3-1.152.96-2.5-3 1.152-.96Zm0 .96-2.5 3-1.152-.96 2.5-3 1.152.96ZM16.25 17a.75.75 0 0 1-1.5 0h1.5Zm-.75-7-.576-.48a.75.75 0 0 1 1.152 0L15.5 10Zm3.076 2.52a.75.75 0 0 1-1.152.96l1.152-.96Zm-5 .96a.75.75 0 0 1-1.152-.96l1.152.96ZM14.75 17v-7h1.5v7h-1.5Zm1.326-7.48 2.5 3-1.152.96-2.5-3 1.152-.96Zm0 .96-2.5 3-1.152-.96 2.5-3 1.152.96Z" fill="currentColor" /><path d="M18 7H6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.25 17a.75.75 0 0 1-1.5 0h1.5Zm-.75-7-.576-.48a.75.75 0 0 1 1.152 0L8.5 10Zm3.076 2.52a.75.75 0 0 1-1.152.96l1.152-.96Zm-5 .96a.75.75 0 0 1-1.152-.96l1.152.96ZM7.75 17v-7h1.5v7h-1.5Zm1.326-7.48 2.5 3-1.152.96-2.5-3 1.152-.96Zm0 .96-2.5 3-1.152-.96 2.5-3 1.152.96ZM16.25 17a.75.75 0 0 1-1.5 0h1.5Zm-.75-7-.576-.48a.75.75 0 0 1 1.152 0L15.5 10Zm3.076 2.52a.75.75 0 0 1-1.152.96l1.152-.96Zm-5 .96a.75.75 0 0 1-1.152-.96l1.152.96ZM14.75 17v-7h1.5v7h-1.5Zm1.326-7.48 2.5 3-1.152.96-2.5-3 1.152-.96Zm0 .96-2.5 3-1.152-.96 2.5-3 1.152.96Z" fill="currentColor" /><path d="M18 7H6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.25 7c0 .414.336.75.75.75h12a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0-.75.75ZM9.25 17a.75.75 0 0 1-1.5 0v-4.928L6.576 13.48a.75.75 0 0 1-1.152-.96l2.5-3a.75.75 0 0 1 1.152 0l2.5 3a.75.75 0 0 1-1.152.96L9.25 12.071V17ZM16.25 17a.75.75 0 0 1-1.5 0v-4.928l-1.174 1.408a.75.75 0 0 1-1.152-.96l2.5-3a.75.75 0 0 1 1.152 0l2.5 3a.75.75 0 0 1-1.152.96l-1.174-1.409V17Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19h-.114ZM3.995 3.995c.57-.57 1.34-.897 2.619-1.069 1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.068 2.619.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62-.57.569-1.34.896-2.619 1.068-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464ZM9.25 17a.75.75 0 0 1-1.5 0v-4.928L6.576 13.48a.75.75 0 0 1-1.152-.96l2.5-3a.75.75 0 0 1 1.152 0l2.5 3a.75.75 0 0 1-1.152.96L9.25 12.071V17Zm6.25.75a.75.75 0 0 0 .75-.75v-4.928l1.174 1.408a.75.75 0 0 0 1.152-.96l-2.5-3a.75.75 0 0 0-1.152 0l-2.5 3a.75.75 0 0 0 1.152.96l1.174-1.409V17c0 .414.336.75.75.75ZM6 7.75a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 0 1.5H6Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" fill="currentColor" /><path d="M6 7.75a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 0 1.5H6ZM8.5 17.75a.75.75 0 0 0 .75-.75v-4.928l1.174 1.408a.75.75 0 0 0 1.152-.96l-2.5-3a.75.75 0 0 0-1.152 0l-2.5 3a.75.75 0 1 0 1.152.96l1.174-1.409V17c0 .414.336.75.75.75ZM15.5 17.75a.75.75 0 0 0 .75-.75v-4.928l1.174 1.408a.75.75 0 0 0 1.152-.96l-2.5-3a.75.75 0 0 0-1.152 0l-2.5 3a.75.75 0 1 0 1.152.96l1.174-1.409V17c0 .414.336.75.75.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default UploadTwiceSquare