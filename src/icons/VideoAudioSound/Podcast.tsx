import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Podcast = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M9 10a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0v-3Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M13 10h2M13 13h2M9 10h1M9 13h1" /><path fill="currentColor" d="M16.951 8.25a.75.75 0 1 0 1.415-.5l-1.415.5ZM6.75 14.154V10h-1.5v4.154h1.5Zm-1.5 0c0 .605-.49 1.096-1.096 1.096v1.5a2.596 2.596 0 0 0 2.596-2.596h-1.5Zm12 0a2.596 2.596 0 0 0 2.596 2.596v-1.5c-.605 0-1.096-.49-1.096-1.096h-1.5ZM12 3.25A6.75 6.75 0 0 0 5.25 10h1.5c0-2.9 2.35-5.25 5.25-5.25v-1.5Zm0 1.5c2.285 0 4.23 1.46 4.951 3.5l1.415-.5A6.752 6.752 0 0 0 12 3.25v1.5Z" /><path stroke="currentColor" strokeWidth={1.5} d="M2 12a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0v-2ZM18 12a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0v-2Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 16v3" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M9 10a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0v-3Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M13 10h2M13 13h2M9 10h1M9 13h1" opacity={0.5} /><path stroke="currentColor" strokeWidth={1.5} d="M4.154 16C5.174 16 6 15.173 6 14.154V10a6 6 0 1 1 12 0v4.154c0 1.02.826 1.846 1.846 1.846" opacity={0.5} /><path stroke="currentColor" strokeWidth={1.5} d="M2 12a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0v-2ZM18 12a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0v-2Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 16v3" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M9 10a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0v-3Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M13 10h2M13 13h2M9 10h1M9 13h1" /><path stroke="currentColor" strokeWidth={1.5} d="M4.154 16C5.174 16 6 15.173 6 14.154V10a6 6 0 1 1 12 0v4.154c0 1.02.826 1.846 1.846 1.846" /><path stroke="currentColor" strokeWidth={1.5} d="M2 12a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0v-2ZM18 12a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0v-2Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 16v3" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M5.264 9.557a6.75 6.75 0 0 1 13.472 0A2.75 2.75 0 0 1 22.75 12v2a2.75 2.75 0 0 1-2.904 2.746v.004a2.596 2.596 0 0 1-2.596-2.596V10a5.25 5.25 0 0 0-10.5 0v4.154a2.596 2.596 0 0 1-2.596 2.596v-.004A2.75 2.75 0 0 1 1.25 14v-2a2.75 2.75 0 0 1 4.014-2.443ZM5.25 12a1.25 1.25 0 0 0-2.5.001v2a1.25 1.25 0 0 0 2.5 0s0 .001 0 0v-2s0-.001 0 0Zm3-1.999a3.75 3.75 0 1 1 7.5 0v3a3.751 3.751 0 0 1-3 3.675V19a.75.75 0 0 1-1.5 0v-2.325a3.751 3.751 0 0 1-3-3.675v-3Zm1.628-.75H10a.75.75 0 0 1 0 1.5h-.25v1.5H10a.75.75 0 0 1 0 1.5h-.122a2.25 2.25 0 0 0 4.244 0H13a.75.75 0 0 1 0-1.5h1.25v-1.5H13a.75.75 0 0 1 0-1.5h1.122a2.251 2.251 0 0 0-4.244 0ZM20 10.75c-.69 0-1.25.56-1.25 1.25v2a1.25 1.25 0 1 0 2.5 0v-2c0-.69-.56-1.25-1.25-1.25Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M10.837 10.546c0-.402-.312-.728-.697-.728H8.58C8.905 8.158 10.312 6.91 12 6.91s3.095 1.25 3.419 2.91H12.93c-.385 0-.697.325-.697.726 0 .402.312.728.697.728h2.558v1.454H12.93c-.385 0-.697.326-.697.727 0 .402.312.728.697.728h2.489c-.278 1.425-1.354 2.547-2.721 2.836v2.255c0 .401-.313.727-.698.727-.385 0-.698-.326-.698-.727v-2.255c-1.367-.29-2.443-1.411-2.72-2.836h1.557c.386 0 .698-.326.698-.728 0-.401-.312-.727-.697-.727H8.511v-1.454h1.627c.386 0 .698-.326.698-.727Z" /><path fill="currentColor" d="M12 4c-3.33 0-6.054 2.701-6.266 6.116a2.464 2.464 0 0 0-1.176-.298C3.145 9.818 2 11.012 2 12.485v1.94c0 1.472 1.145 2.666 2.558 2.666.048 0 .096-.002.143-.004v.004c1.334 0 2.415-1.127 2.415-2.518v-4.028c0-2.811 2.187-5.09 4.884-5.09 2.697 0 4.884 2.279 4.884 5.09v4.028c0 1.39 1.08 2.518 2.415 2.518v-.004c.047.003.095.004.143.004 1.413 0 2.558-1.194 2.558-2.667v-1.94c0-1.472-1.145-2.666-2.558-2.666-.424 0-.824.108-1.176.298C18.054 6.701 15.329 4 12 4Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M10.837 10.546c0-.402-.312-.728-.697-.728H8.58c.324-1.66 1.731-2.909 3.42-2.909 1.687 0 3.095 1.25 3.418 2.91H12.93c-.385 0-.697.325-.697.726 0 .402.312.728.697.728h2.559v1.454H12.93c-.385 0-.697.326-.697.728 0 .401.312.727.697.727h2.489c-.278 1.425-1.354 2.547-2.721 2.836v2.255c0 .401-.313.727-.698.727-.385 0-.698-.326-.698-.727v-2.255c-1.366-.289-2.443-1.411-2.72-2.836h1.558c.385 0 .697-.326.697-.727 0-.402-.312-.728-.697-.728H8.512v-1.454h1.628c.385 0 .697-.326.697-.727Z" /><path fill="currentColor" d="M12 4c-3.33 0-6.054 2.701-6.266 6.116a2.464 2.464 0 0 0-1.176-.298C3.145 9.818 2 11.012 2 12.485v1.94c0 1.472 1.145 2.666 2.558 2.666.048 0 .096-.002.143-.004v.004c1.334 0 2.415-1.127 2.415-2.518v-4.028c0-2.811 2.187-5.09 4.884-5.09 2.697 0 4.884 2.279 4.884 5.09v4.028c0 1.39 1.08 2.518 2.415 2.518v-.004c.047.003.095.004.143.004 1.413 0 2.558-1.194 2.558-2.667v-1.94c0-1.472-1.145-2.666-2.558-2.666-.424 0-.824.108-1.176.298C18.054 6.701 15.329 4 12 4Z" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Podcast