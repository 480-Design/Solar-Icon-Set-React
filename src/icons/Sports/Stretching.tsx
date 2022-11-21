import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Stretching = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={14.5} cy={4.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path d="m5 22 3.849-1.373a2 2 0 0 0 1.073-.907M19 22v-5.232a2 2 0 0 0-2.32-1.974l-1.013.165M8.5 14l-.614-.598a1.5 1.5 0 0 1 .456-2.453l2.456-1.053a1.5 1.5 0 0 1 2.09 1.38v2.62a2 2 0 0 1-.254.976l-.678 1.212" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={14.5} cy={4.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="m5 22 3.849-1.373a2 2 0 0 0 1.073-.907l2.712-4.848a2 2 0 0 0 .255-.976v-2.62a1.5 1.5 0 0 0-2.091-1.38L8.342 10.95a1.5 1.5 0 0 0-.456 2.453L8.5 14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M19 22v-5.232a2 2 0 0 0-2.32-1.974l-1.013.165" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={14.5} cy={4.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path d="m5 22 3.849-1.373a2 2 0 0 0 1.073-.907l2.712-4.848a2 2 0 0 0 .255-.976v-2.62a1.5 1.5 0 0 0-2.091-1.38L8.342 10.95a1.5 1.5 0 0 0-.456 2.453L8.5 14M19 22v-5.232a2 2 0 0 0-2.32-1.974l-1.013.165" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.5 2.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM11.25 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm-.747 4.707a2.25 2.25 0 0 1 3.136 2.068v2.62c0 .47-.12.933-.35 1.343l-2.712 4.848A2.75 2.75 0 0 1 9.1 21.334l-3.849 1.372a.75.75 0 1 1-.504-1.412l3.849-1.373a1.25 1.25 0 0 0 .67-.567l2.713-4.848a1.25 1.25 0 0 0 .16-.61v-2.621a.75.75 0 0 0-1.046-.69l-2.456 1.053a.75.75 0 0 0-.228 1.226l.614.599a.75.75 0 0 1-1.047 1.074l-.614-.599a2.25 2.25 0 0 1 .684-3.679l2.456-1.052Zm6.056 4.846a2.75 2.75 0 0 1 3.191 2.715V22a.75.75 0 0 1-1.5 0v-5.232c0-.77-.69-1.357-1.45-1.234l-1.013.165a.75.75 0 1 1-.24-1.481l1.012-.165Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10.503 9.207a2.25 2.25 0 0 1 3.136 2.068v2.62c0 .47-.12.933-.35 1.343l-2.712 4.848A2.75 2.75 0 0 1 9.1 21.334l-3.849 1.372a.75.75 0 1 1-.504-1.412l3.849-1.373a1.25 1.25 0 0 0 .67-.567l2.713-4.848a1.25 1.25 0 0 0 .16-.61v-2.621a.75.75 0 0 0-1.046-.69l-2.456 1.053a.75.75 0 0 0-.228 1.226l.614.599a.75.75 0 0 1-1.047 1.074l-.614-.599a2.25 2.25 0 0 1 .684-3.679l2.456-1.052Zm6.056 4.846a2.75 2.75 0 0 1 3.191 2.715V22a.75.75 0 0 1-1.5 0v-5.232c0-.77-.69-1.357-1.45-1.234l-1.013.165a.75.75 0 1 1-.24-1.481l1.012-.165Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.559 14.053a2.75 2.75 0 0 1 3.191 2.715V22a.75.75 0 0 1-1.5 0v-5.232c0-.77-.69-1.357-1.45-1.234l-1.013.165a.75.75 0 1 1-.24-1.481l1.012-.165Z" fill="currentColor" /><path opacity={0.5} d="M10.503 9.207a2.25 2.25 0 0 1 3.136 2.068v2.62c0 .47-.12.933-.35 1.343l-2.712 4.848A2.75 2.75 0 0 1 9.1 21.334l-3.849 1.372a.75.75 0 0 1-.504-1.412l3.849-1.373a1.25 1.25 0 0 0 .67-.567l2.713-4.848a1.25 1.25 0 0 0 .16-.61v-2.621a.75.75 0 0 0-1.046-.69l-2.456 1.053a.75.75 0 0 0-.228 1.226l.614.6a.75.75 0 0 1-1.047 1.073l-.614-.599a2.25 2.25 0 0 1 .684-3.679l2.456-1.052Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Stretching