import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Screencast = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 20c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12v-1M2 8.5c0-.464 0-.697.02-.892a4 4 0 0 1 3.588-3.589C5.803 4 6.036 4 6.5 4H14c3.771 0 5.657 0 6.828 1.172.47.47.751 1.054.92 1.828" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M11 20a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 20a6 6 0 0 0-6-6M5 20a3 3 0 0 0-3-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M11 20h3c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4H6.5c-.464 0-.697 0-.892.02a4 4 0 0 0-3.589 3.588C2 7.803 2 8.036 2 8.5V11" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M11 20a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 20a6 6 0 0 0-6-6M5 20a3 3 0 0 0-3-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 20c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4H6.5c-.464 0-.697 0-.892.02a4 4 0 0 0-3.589 3.588C2 7.803 2 8.036 2 8.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M11 20a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 20a6 6 0 0 0-6-6M5 20a3 3 0 0 0-3-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.452 3.25c-.418 0-.685 0-.918.023a4.75 4.75 0 0 0-4.261 4.261c-.023.233-.023.5-.023.918V8.5a.75.75 0 1 0 1.5 0c0-.482 0-.669.016-.819A3.25 3.25 0 0 1 5.68 4.766c.15-.015.337-.016.819-.016H14c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.138 1.028.14 2.382.14 4.289 0 1.907-.002 3.261-.14 4.29-.135 1.005-.389 1.585-.812 2.008-.423.423-1.003.677-2.009.812-1.027.138-2.382.14-4.289.14a.75.75 0 0 0 0 1.5h.056c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433v-.112c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-1.14-.153-2.595-.153-4.433-.153H6.452Z" fill="currentColor" /><path d="M2 10.25a.75.75 0 0 0 0 1.5A8.25 8.25 0 0 1 10.25 20a.75.75 0 0 0 1.5 0c0-5.385-4.365-9.75-9.75-9.75Z" fill="currentColor" /><path d="M1.25 14a.75.75 0 0 1 .75-.75A6.75 6.75 0 0 1 8.75 20a.75.75 0 0 1-1.5 0c0-2.9-2.35-5.25-5.25-5.25a.75.75 0 0 1-.75-.75Z" fill="currentColor" /><path d="M2 16.25a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 4.25 20a.75.75 0 0 0 1.5 0A3.75 3.75 0 0 0 2 16.25Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.5 4H14c3.772 0 5.657 0 6.829 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.171 6.828-1.1 1.1-3.708 1.168-7.141 1.172a.687.687 0 0 1-.688-.688C13 13.617 8.383 9 2.688 9a.685.685 0 0 1-.686-.688c.002-.31.007-.593.018-.704a4 4 0 0 1 3.588-3.589C5.804 4 6.036 4 6.5 4Z" fill="currentColor" /><path d="M2 10.25a.75.75 0 0 0 0 1.5A8.25 8.25 0 0 1 10.25 20a.75.75 0 0 0 1.5 0c0-5.385-4.365-9.75-9.75-9.75Z" fill="currentColor" /><path d="M2 13.25a.75.75 0 0 0 0 1.5c2.9 0 5.25 2.35 5.25 5.25a.75.75 0 0 0 1.5 0A6.75 6.75 0 0 0 2 13.25Z" fill="currentColor" /><path d="M2 16.25a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 4.25 20a.75.75 0 0 0 1.5 0A3.75 3.75 0 0 0 2 16.25Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M14 4h-4C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4Z" fill="currentColor" /><path d="M2.75 9.5a.75.75 0 0 0 0 1.5A8.25 8.25 0 0 1 11 19.25a.75.75 0 0 0 1.5 0c0-5.385-4.365-9.75-9.75-9.75Z" fill="currentColor" /><path d="M2.75 12.5a.75.75 0 0 0 0 1.5C5.65 14 8 16.35 8 19.25a.75.75 0 0 0 1.5 0 6.75 6.75 0 0 0-6.75-6.75Z" fill="currentColor" /><path d="M2.75 15.5a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 5 19.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Screencast