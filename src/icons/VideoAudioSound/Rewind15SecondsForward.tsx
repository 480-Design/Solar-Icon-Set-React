import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Rewind15SecondsForward = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.5 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H14.5a2 2 0 1 1 0 4h-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M7.031 9.914a.75.75 0 0 0 .938 1.172L7.03 9.914ZM10 8.5h.75a.75.75 0 0 0-1.219-.586L10 8.5Zm-.75 7a.75.75 0 0 0 1.5 0h-1.5Zm-1.281-4.414 2.5-2-.938-1.172-2.5 2 .938 1.172ZM9.25 8.5v7h1.5v-7h-1.5Z" fill="currentColor" /><path d="M10 4.5 12 2C6.477 2 2 6.477 2 12c0 .685.069 1.354.2 2M16 2.832C19.532 4.375 22 7.9 22 12c0 5.523-4.477 10-10 10a9.984 9.984 0 0 1-8-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M10 4.5 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-4.1-2.468-7.625-6-9.168" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M16.5 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H14.5a2 2 0 1 1 0 4h-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M7.031 9.914a.75.75 0 0 0 .938 1.172L7.03 9.914ZM10 8.5h.75a.75.75 0 0 0-1.219-.586L10 8.5Zm-.75 7a.75.75 0 0 0 1.5 0h-1.5Zm-1.281-4.414 2.5-2-.938-1.172-2.5 2 .938 1.172ZM9.25 8.5v7h1.5v-7h-1.5Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10 4.5 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-4.1-2.468-7.625-6-9.168" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M16.5 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H14.5a2 2 0 1 1 0 4h-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M7.031 9.914a.75.75 0 0 0 .938 1.172L7.03 9.914ZM10 8.5h.75a.75.75 0 0 0-1.219-.586L10 8.5Zm-.75 7a.75.75 0 0 0 1.5 0h-1.5Zm-1.281-4.414 2.5-2-.938-1.172-2.5 2 .938 1.172ZM9.25 8.5v7h1.5v-7h-1.5Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25a.75.75 0 0 1 .586 1.219l-2 2.5a.75.75 0 0 1-1.172-.938l.903-1.128C6.012 3.693 2.75 7.466 2.75 12A9.25 9.25 0 1 0 15.7 3.52a.75.75 0 0 1 .6-1.375A10.752 10.752 0 0 1 22.75 12c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12Zm9.075-4.176a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.938-1.172l2.5-2a.75.75 0 0 1 .794-.09Zm2.35.78a1.25 1.25 0 0 1 1.185-.854h2.64a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5h.96a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645l.667-2Zm.756 2.475Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.325 7.824a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.937-1.172l2.5-2a.75.75 0 0 1 .793-.09Zm2.35.78a1.25 1.25 0 0 1 1.185-.854h2.64a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5h.96a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645l.667-2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.676 1.675A.75.75 0 0 0 12 1.25c-.735 0-1.454.074-2.15.215-4.906.996-8.6 5.333-8.6 10.535 0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12c0-4.41-2.655-8.197-6.45-9.855a.75.75 0 0 0-.6 1.374A9.25 9.25 0 1 1 2.75 12a9.255 9.255 0 0 1 6.5-8.834V4.5a.75.75 0 0 0 1.336.469l2-2.5a.75.75 0 0 0 .09-.794Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.325 7.824a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.937-1.172l2.5-2a.75.75 0 0 1 .793-.09ZM12.675 8.605a1.25 1.25 0 0 1 1.185-.855h2.64a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5h.96a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645l.667-2Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M12.676 1.675A.75.75 0 0 0 12 1.25c-.735 0-1.454.074-2.15.215-4.906.996-8.6 5.333-8.6 10.535 0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12c0-4.41-2.655-8.197-6.45-9.855a.75.75 0 0 0-.6 1.374A9.25 9.25 0 1 1 2.75 12a9.255 9.255 0 0 1 6.5-8.834V4.5a.75.75 0 0 0 1.336.469l2-2.5a.75.75 0 0 0 .09-.794Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Rewind15SecondsForward