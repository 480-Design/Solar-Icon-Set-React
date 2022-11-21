import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const RoundSortVertical = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.25 8a.75.75 0 0 0-1.5 0h1.5Zm-.75 8-.555.505a.75.75 0 0 0 1.11 0L9.5 16Zm-1.945-3.255a.75.75 0 1 0-1.11 1.01l1.11-1.01Zm5 1.01a.75.75 0 0 0-1.11-1.01l1.11 1.01ZM8.75 8v8h1.5V8h-1.5Zm1.305 7.495-2.5-2.75-1.11 1.01 2.5 2.75 1.11-1.01Zm0 1.01 2.5-2.75-1.11-1.01-2.5 2.75 1.11 1.01ZM15.25 16a.75.75 0 0 1-1.5 0h1.5Zm-.75-8-.555-.505a.75.75 0 0 1 1.11 0L14.5 8Zm-1.945 3.255a.75.75 0 0 1-1.11-1.01l1.11 1.01Zm5-1.01a.75.75 0 0 1-1.11 1.01l1.11-1.01ZM13.75 16V8h1.5v8h-1.5Zm1.305-7.495-2.5 2.75-1.11-1.01 2.5-2.75 1.11 1.01Zm0-1.01 2.5 2.75-1.11 1.01-2.5-2.75 1.11-1.01Z" fill="currentColor" /><path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle opacity={0.5} cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><path d="M10.25 8a.75.75 0 0 0-1.5 0h1.5Zm-.75 8-.555.505a.75.75 0 0 0 1.11 0L9.5 16Zm-1.945-3.255a.75.75 0 1 0-1.11 1.01l1.11-1.01Zm5 1.01a.75.75 0 0 0-1.11-1.01l1.11 1.01ZM8.75 8v8h1.5V8h-1.5Zm1.305 7.495-2.5-2.75-1.11 1.01 2.5 2.75 1.11-1.01Zm0 1.01 2.5-2.75-1.11-1.01-2.5 2.75 1.11 1.01ZM15.25 16a.75.75 0 0 1-1.5 0h1.5Zm-.75-8-.555-.505a.75.75 0 0 1 1.11 0L14.5 8Zm-1.945 3.255a.75.75 0 0 1-1.11-1.01l1.11 1.01Zm5-1.01a.75.75 0 0 1-1.11 1.01l1.11-1.01ZM13.75 16V8h1.5v8h-1.5Zm1.305-7.495-2.5 2.75-1.11-1.01 2.5-2.75 1.11 1.01Zm0-1.01 2.5 2.75-1.11 1.01-2.5-2.75 1.11-1.01Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><path d="M10.25 8a.75.75 0 0 0-1.5 0h1.5Zm-.75 8-.555.505a.75.75 0 0 0 1.11 0L9.5 16Zm-1.945-3.255a.75.75 0 1 0-1.11 1.01l1.11-1.01Zm5 1.01a.75.75 0 0 0-1.11-1.01l1.11 1.01ZM8.75 8v8h1.5V8h-1.5Zm1.305 7.495-2.5-2.75-1.11 1.01 2.5 2.75 1.11-1.01Zm0 1.01 2.5-2.75-1.11-1.01-2.5 2.75 1.11 1.01ZM15.25 16a.75.75 0 0 1-1.5 0h1.5Zm-.75-8-.555-.505a.75.75 0 0 1 1.11 0L14.5 8Zm-1.945 3.255a.75.75 0 0 1-1.11-1.01l1.11 1.01Zm5-1.01a.75.75 0 0 1-1.11 1.01l1.11-1.01ZM13.75 16V8h1.5v8h-1.5Zm1.305-7.495-2.5 2.75-1.11-1.01 2.5-2.75 1.11 1.01Zm0-1.01 2.5 2.75-1.11 1.01-2.5-2.75 1.11-1.01Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6.495 12.695a.75.75 0 0 1 1.06.05L8.75 14.06V8a.75.75 0 0 1 1.5 0v6.06l1.195-1.315a.75.75 0 0 1 1.11 1.01l-2.5 2.75a.75.75 0 0 1-1.11 0l-2.5-2.75a.75.75 0 0 1 .05-1.06Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.495 11.305a.75.75 0 0 0 1.06-.05L13.75 9.94V16a.75.75 0 0 0 1.5 0V9.94l1.195 1.315a.75.75 0 0 0 1.11-1.01l-2.5-2.75a.75.75 0 0 0-1.11 0l-2.5 2.75a.75.75 0 0 0 .05 1.06Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-7.5-4.75a.75.75 0 0 1 .555.245l2.5 2.75a.75.75 0 0 1-1.11 1.01L15.25 9.94V16a.75.75 0 0 1-1.5 0V9.94l-1.195 1.315a.75.75 0 0 1-1.11-1.01l2.5-2.75a.75.75 0 0 1 .555-.245Zm-5 0a.75.75 0 0 1 .75.75v6.06l1.195-1.315a.75.75 0 0 1 1.11 1.01l-2.5 2.75a.75.75 0 0 1-1.11 0l-2.5-2.75a.75.75 0 0 1 1.11-1.01L8.75 14.06V8a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z" fill="currentColor" /><path d="M11.445 10.245a.75.75 0 1 0 1.11 1.01L13.75 9.94V16a.75.75 0 0 0 1.5 0V9.94l1.195 1.315a.75.75 0 1 0 1.11-1.01l-2.5-2.75a.75.75 0 0 0-1.11 0l-2.5 2.75Z" fill="currentColor" /><path d="M7.555 12.745a.75.75 0 1 0-1.11 1.01l2.5 2.75a.75.75 0 0 0 1.11 0l2.5-2.75a.75.75 0 0 0-1.11-1.01L10.25 14.06V8a.75.75 0 1 0-1.5 0v6.06l-1.195-1.315Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default RoundSortVertical