import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Women = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9.5 17.75a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5ZM11.25 22a.75.75 0 1 0 1.5 0h-1.5Zm0-6v2.5h1.5V16h-1.5Zm.75 1.75H9.5v1.5H12v-1.5Zm2.5 0H12v1.5h2.5v-1.5Zm-3.25.75V22h1.5v-3.5h-1.5Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M8.5 2.936A7 7 0 1 1 5.936 5.5" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9.5 17.75a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5ZM11.25 22a.75.75 0 1 0 1.5 0h-1.5Zm0-6v2.5h1.5V16h-1.5Zm.75 1.75H9.5v1.5H12v-1.5Zm2.5 0H12v1.5h2.5v-1.5Zm-3.25.75V22h1.5v-3.5h-1.5Z" opacity={0.5} /><path stroke="currentColor" strokeWidth={1.5} d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9.5 17.75a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5ZM11.25 22a.75.75 0 1 0 1.5 0h-1.5Zm0-6v2.5h1.5V16h-1.5Zm.75 1.75H9.5v1.5H12v-1.5Zm2.5 0H12v1.5h2.5v-1.5Zm-3.25.75V22h1.5v-3.5h-1.5Z" /><path stroke="currentColor" strokeWidth={1.5} d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5ZM4.25 9a7.75 7.75 0 1 1 8.5 7.714v1.036h1.75a.75.75 0 0 1 0 1.5h-1.75V22a.75.75 0 1 1-1.5 0v-2.75H9.5a.75.75 0 0 1 0-1.5h1.75v-1.036A7.75 7.75 0 0 1 4.25 9Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12.75 15.96a7.001 7.001 0 1 0-1.5 0v1.79H9.5a.75.75 0 0 0 0 1.5h1.75V22a.75.75 0 1 0 1.5 0v-2.75h1.75a.75.75 0 0 0 0-1.5h-1.75v-1.79Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={12} cy={9} r={7} fill="currentColor" opacity={0.5} /><path fill="currentColor" d="M11.25 15.96v1.79H9.5a.75.75 0 0 0 0 1.5h1.75V22a.75.75 0 0 0 1.5 0v-2.75h1.75a.75.75 0 0 0 0-1.5h-1.75v-1.79a7.091 7.091 0 0 1-1.5 0Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Women