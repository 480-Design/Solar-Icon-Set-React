import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const HandMirror = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 12.168C21 7.105 16.97 3 12 3s-9 4.105-9 9.168c0 1.773.494 3.429 1.35 4.832M5.636 22h12.728A3.636 3.636 0 0 0 22 18.364C22 17.61 21.39 17 20.636 17h-3.808a2 2 0 0 0-1.414.586l-.828.828a2 2 0 0 1-1.414.586h-2.344a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 7.172 17H3.364C2.61 17 2 17.61 2 18.364A3.636 3.636 0 0 0 5.636 22Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M4.35 17A9.252 9.252 0 0 1 3 12.168C3 7.105 7.03 3 12 3s9 4.105 9 9.168A9.252 9.252 0 0 1 19.65 17" stroke="currentColor" strokeWidth={1.5} /><path d="M5.636 22h12.728A3.636 3.636 0 0 0 22 18.364C22 17.61 21.39 17 20.636 17h-3.808a2 2 0 0 0-1.414.586l-.828.828a2 2 0 0 1-1.414.586h-2.344a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 7.172 17H3.364C2.61 17 2 17.61 2 18.364A3.636 3.636 0 0 0 5.636 22Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4.35 17A9.252 9.252 0 0 1 3 12.168C3 7.105 7.03 3 12 3s9 4.105 9 9.168A9.252 9.252 0 0 1 19.65 17" stroke="currentColor" strokeWidth={1.5} /><path d="M5.636 22h12.728A3.636 3.636 0 0 0 22 18.364C22 17.61 21.39 17 20.636 17h-3.808a2 2 0 0 0-1.414.586l-.828.828a2 2 0 0 1-1.414.586h-2.344a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 7.172 17H3.364C2.61 17 2 17.61 2 18.364A3.636 3.636 0 0 0 5.636 22Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.25c-5.398 0-9.75 4.454-9.75 9.918 0 1.46.31 2.847.868 4.096a2.114 2.114 0 0 0-1.868 2.1 4.386 4.386 0 0 0 4.386 4.386h12.728a4.386 4.386 0 0 0 4.386-4.386 2.114 2.114 0 0 0-1.868-2.1 10.03 10.03 0 0 0 .868-4.096c0-5.464-4.352-9.918-9.75-9.918Zm7.217 14a8.51 8.51 0 0 0 1.033-4.082c0-4.662-3.707-8.418-8.25-8.418s-8.25 3.756-8.25 8.418a8.51 8.51 0 0 0 1.033 4.082h2.389c.729 0 1.428.29 1.944.805l.829.829c.234.234.552.366.883.366h2.344c.331 0 .649-.132.883-.366l.829-.829a2.75 2.75 0 0 1 1.944-.805h2.389ZM2.75 18.364c0-.34.275-.614.614-.614h3.808c.331 0 .649.132.883.366l.829.829a2.75 2.75 0 0 0 1.944.805h2.344c.729 0 1.428-.29 1.944-.805l.829-.829a1.25 1.25 0 0 1 .883-.366h3.808c.34 0 .614.275.614.614a2.886 2.886 0 0 1-2.886 2.886H5.636a2.886 2.886 0 0 1-2.886-2.886Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.636 22h12.728A3.636 3.636 0 0 0 22 18.364C22 17.61 21.39 17 20.636 17h-3.808a2 2 0 0 0-1.414.586l-.828.828a2 2 0 0 1-1.414.586h-2.344a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 7.172 17H3.364C2.61 17 2 17.61 2 18.364A3.636 3.636 0 0 0 5.636 22Z" fill="currentColor" /><path d="M3 12a9 9 0 1 1 17.294 3.5h-3.466a3.5 3.5 0 0 0-2.474 1.025l-.829.829a.5.5 0 0 1-.353.146h-2.344a.5.5 0 0 1-.353-.146l-.829-.829A3.5 3.5 0 0 0 7.172 15.5H3.706A8.972 8.972 0 0 1 3 12Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.636 22h12.728A3.636 3.636 0 0 0 22 18.364C22 17.61 21.39 17 20.636 17h-3.808a2 2 0 0 0-1.414.586l-.828.828a2 2 0 0 1-1.414.586h-2.344a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 7.172 17H3.364C2.61 17 2 17.61 2 18.364A3.636 3.636 0 0 0 5.636 22Z" fill="currentColor" /><path opacity={0.5} d="M19.485 17a9 9 0 1 0-14.969 0h2.656a2 2 0 0 1 1.414.586l.828.828a2 2 0 0 0 1.414.586h2.344a2 2 0 0 0 1.414-.586l.828-.828A2 2 0 0 1 16.828 17h2.657Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default HandMirror