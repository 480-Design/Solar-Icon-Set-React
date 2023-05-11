import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const AirbudsLeft = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M2 18.667v.833c0 .14 0 .209.003.268a2.35 2.35 0 0 0 2.23 2.229C4.29 22 4.36 22 4.5 22c.14 0 .209 0 .268-.003a2.35 2.35 0 0 0 2.229-2.23C7 19.71 7 19.64 7 19.5v-.833m-5 0h5m-5 0L2.003 13M7 18.667V12a1 1 0 0 1 1-1 3 3 0 0 0 3-3V5.335A3.353 3.353 0 0 0 7.664 2H7.56A5.588 5.588 0 0 0 2 7.56V9" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.676} d="M8 5v3" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M15.5 11a5.5 5.5 0 1 0 5.5 5.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 14v5h3" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M14 5.1A5.006 5.006 0 0 1 17.9 9" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M2 18.667v.833a2.5 2.5 0 0 0 5 0v-.833m-5 0V7.559A5.588 5.588 0 0 1 7.56 2H7.664A3.353 3.353 0 0 1 11 5.336V8a3 3 0 0 1-3 3 1 1 0 0 0-1 1v6.667m-5 0h5" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.676} d="M8 5v3" opacity={0.5} /><circle cx={5.5} cy={5.5} r={5.5} stroke="currentColor" strokeWidth={1.5} opacity={0.5} transform="matrix(-1 0 0 1 21 11)" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 14v5h3" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M14 5.1A5.006 5.006 0 0 1 17.9 9" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M2 18.667v.833a2.5 2.5 0 0 0 5 0v-.833m-5 0V7.559A5.588 5.588 0 0 1 7.56 2H7.664A3.353 3.353 0 0 1 11 5.336V8a3 3 0 0 1-3 3 1 1 0 0 0-1 1v6.667m-5 0h5" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.676} d="M8 5v3" /><circle cx={5.5} cy={5.5} r={5.5} stroke="currentColor" strokeWidth={1.5} transform="matrix(-1 0 0 1 21 11)" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 14v5h3" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M14 5.1A5.006 5.006 0 0 1 17.9 9" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M7.626 1.25h.042a4.103 4.103 0 0 1 4.082 4.082V8A3.75 3.75 0 0 1 8 11.75a.25.25 0 0 0-.25.25v7.5a3.25 3.25 0 0 1-6.5 0V7.555A6.338 6.338 0 0 1 7.555 1.25H7.626Zm-.063 1.5h-.001A4.838 4.838 0 0 0 2.75 7.562v10.355h3.5V12c0-.966.784-1.75 1.75-1.75A2.25 2.25 0 0 0 10.25 8V5.339A2.603 2.603 0 0 0 7.662 2.75h-.098ZM6.25 19.417h-3.5v.083a1.75 1.75 0 1 0 3.5 0v-.083ZM8 4.25a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0V5A.75.75 0 0 1 8 4.25Zm5.266.7a.75.75 0 0 1 .884-.585 5.756 5.756 0 0 1 4.486 4.486.75.75 0 0 1-1.47.298 4.256 4.256 0 0 0-3.314-3.314.75.75 0 0 1-.586-.884ZM9.25 16.5a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Zm6.25-4.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm-1.5 1.5a.75.75 0 0 1 .75.75v4.25H17a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M13.265 4.95a.75.75 0 0 0 .586.885 4.256 4.256 0 0 1 3.314 3.314.75.75 0 1 0 1.47-.298 5.756 5.756 0 0 0-4.486-4.486.75.75 0 0 0-.884.586Z" clipRule="evenodd" /><path fill="currentColor" d="M4.382 22C3.067 22 2 20.88 2 19.5h4.765c0 1.38-1.067 2.5-2.383 2.5Z" /><path fill="currentColor" fillRule="evenodd" d="M11 7.889V5.542c0-.194 0-.29-.004-.372-.08-1.713-1.385-3.082-3.017-3.166C7.902 2 7.81 2 7.625 2c-.307 0-.46 0-.59.007-2.72.14-4.895 2.422-5.029 5.276C2 7.419 2 7.58 2 7.903v9.93h4.765v-5.5c0-.613.474-1.11 1.059-1.11C9.578 11.222 11 9.73 11 7.888ZM9.324 5.125c0-.46-.336-.833-.75-.833-.415 0-.75.373-.75.833v2.778c0 .46.335.833.75.833.414 0 .75-.373.75-.833V5.125ZM16.5 22a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Zm-1.25-9a.75.75 0 0 1 .75.75V18h2.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M4.382 22C3.067 22 2 20.88 2 19.5h4.765c0 1.38-1.067 2.5-2.383 2.5Z" /><path fill="currentColor" fillRule="evenodd" d="M11 7.889V5.542c0-.194 0-.29-.004-.372-.08-1.713-1.385-3.082-3.017-3.166C7.902 2 7.81 2 7.625 2c-.307 0-.46 0-.59.007-2.72.14-4.895 2.422-5.029 5.276C2 7.419 2 7.58 2 7.903v9.93h4.765v-5.5c0-.613.474-1.11 1.059-1.11C9.578 11.222 11 9.73 11 7.888ZM9.324 5.125c0-.46-.336-.833-.75-.833-.415 0-.75.373-.75.833v2.778c0 .46.335.833.75.833.414 0 .75-.373.75-.833V5.125Z" clipRule="evenodd" /><path fill="currentColor" d="M16.5 22a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Z" opacity={0.5} /><path fill="currentColor" d="M15.25 13a.75.75 0 0 1 .75.75V18h2.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75Z" /><path fill="currentColor" fillRule="evenodd" d="M13.265 4.95a.75.75 0 0 0 .586.885 4.256 4.256 0 0 1 3.314 3.314.75.75 0 0 0 1.47-.298 5.756 5.756 0 0 0-4.486-4.486.75.75 0 0 0-.884.586Z" clipRule="evenodd" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default AirbudsLeft