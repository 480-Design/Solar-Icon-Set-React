import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const DumbbellSmall = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.052.424.052.889.052s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C18.197 7 17.964 7 17.5 7s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06c-.052.192-.052.424-.052.889ZM4.5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.192.052.424.052.889.052s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C7.196 7 6.964 7 6.5 7s-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C4.5 8.304 4.5 8.536 4.5 9Z" stroke="currentColor" strokeWidth={1.5} /><path d="M2 12h-.75H2Zm20 0h-.75.75Zm-11 .75a.75.75 0 0 0 0-1.5v1.5Zm3-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-10 2c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 14.75v-1.5Zm16 1.5A2.75 2.75 0 0 0 22.75 12h-1.5c0 .69-.56 1.25-1.25 1.25v1.5Zm0-4c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 9.25v1.5ZM4 9.25A2.75 2.75 0 0 0 1.25 12h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm0 1.5h1v-1.5H4v1.5Zm1 2.5H4v1.5h1v-1.5Zm15 0h-1v1.5h1v-1.5Zm-1-2.5h1v-1.5h-1v1.5Zm-10 2h2v-1.5H9v1.5Zm5 0h1v-1.5h-1v1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.052.424.052.889.052s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C18.197 7 17.964 7 17.5 7s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06c-.052.192-.052.424-.052.889ZM4.5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.192.052.424.052.889.052s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C7.196 7 6.964 7 6.5 7s-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C4.5 8.304 4.5 8.536 4.5 9Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M5 10H4a2 2 0 1 0 0 4h1m4-2h6m4 2h1a2 2 0 1 0 0-4h-1" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.052.424.052.889.052s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C18.197 7 17.964 7 17.5 7s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06c-.052.192-.052.424-.052.889ZM4.5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.192.052.424.052.889.052s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C7.196 7 6.964 7 6.5 7s-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C4.5 8.304 4.5 8.536 4.5 9Z" stroke="currentColor" strokeWidth={1.5} /><path d="M5 10H4a2 2 0 1 0 0 4h1m4-2h6m4 2h1a2 2 0 1 0 0-4h-1" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17.416 6.25a77.29 77.29 0 0 0 .168 0c.38 0 .71 0 .998.077a2.25 2.25 0 0 1 1.591 1.59l-.702.189.702-.188c.078.289.078.617.077.998V9.261a2.75 2.75 0 0 1 0 5.478V15.084c0 .38 0 .71-.077.998a2.25 2.25 0 0 1-1.59 1.591c-.29.078-.618.078-1 .077h-.167c-.38 0-.71 0-.998-.076a2.25 2.25 0 0 1-1.591-1.591c-.078-.29-.078-.618-.077-.999V12.75h-5.5v2.334c0 .38 0 .71-.077.998a2.25 2.25 0 0 1-1.59 1.591c-.29.078-.618.078-1 .077h-.167c-.38 0-.71 0-.998-.076a2.25 2.25 0 0 1-1.591-1.591c-.078-.29-.077-.618-.077-.999V14.739a2.75 2.75 0 0 1 0-5.478V8.916c0-.38 0-.71.077-.998a2.25 2.25 0 0 1 1.59-1.591c.29-.078.618-.077 1-.077a77.144 77.144 0 0 0 .167 0c.38 0 .71 0 .998.077a2.25 2.25 0 0 1 1.591 1.59c.078.29.077.618.077 1v2.333h5.5V8.916c0-.38 0-.71.077-.998a2.25 2.25 0 0 1 1.59-1.591c.29-.078.618-.077 1-.077ZM3.75 10.775a1.25 1.25 0 0 0 0 2.45v-2.45Zm16.5 2.45a1.25 1.25 0 0 0 0-2.45v2.45ZM17.5 7.75c-.513 0-.623.007-.694.026a.75.75 0 0 0-.53.53l-.725-.194.725.194c-.02.071-.026.18-.026.694v6c0 .513.006.623.026.694a.75.75 0 0 0 .53.53c.071.02.18.026.694.026.513 0 .623-.006.694-.025a.75.75 0 0 0 .53-.53c.02-.072.026-.182.026-.695V9c0-.513-.006-.623-.026-.694a.75.75 0 0 0-.53-.53c-.071-.02-.18-.026-.694-.026Zm-11 0c-.513 0-.623.007-.694.026a.75.75 0 0 0-.53.53c-.02.071-.026.18-.026.694v6c0 .513.006.623.026.694a.75.75 0 0 0 .53.53l-.194.725.194-.724c.071.019.18.025.694.025.513 0 .623-.006.694-.025l.194.724-.194-.724a.75.75 0 0 0 .53-.53c.02-.072.026-.182.026-.695V9c0-.513-.006-.623-.026-.694a.75.75 0 0 0-.53-.53c-.071-.02-.18-.026-.694-.026Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12a2 2 0 0 1 1.5-1.937v3.874A2 2 0 0 1 2 12ZM22 12a2 2 0 0 1-1.5 1.937v-3.874A2 2 0 0 1 22 12ZM19 9v6c0 .465 0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C17.697 17 17.464 17 17 17s-.698 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C15 15.697 15 15.464 15 15v-2.25H9V15c0 .465 0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C7.696 17 7.464 17 7 17s-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C5 15.697 5 15.464 5 15V9c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C6.304 7 6.536 7 7 7s.697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C9 8.304 9 8.536 9 9v2.25h6V9c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C16.303 7 16.536 7 17 7s.698 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C19 8.304 19 8.536 19 9Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19 15V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C17.697 7 17.464 7 17 7s-.698 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C15 8.304 15 8.536 15 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06c.191.052.424.052.889.052s.698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C19 15.697 19 15.464 19 15ZM5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06C6.304 17 6.536 17 7 17s.697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C9 15.697 9 15.464 9 15V9c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C7.696 7 7.464 7 7 7s-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C5 8.304 5 8.536 5 9Z" fill="currentColor" /><path opacity={0.5} d="M15 12.75H9v-1.5h6v1.5Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M3.5 12A2 2 0 0 1 5 10.061v3.875a2 2 0 0 1-1.5-1.938ZM20.5 12a2 2 0 0 1-1.5 1.937v-3.874a2 2 0 0 1 1.5 1.936Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default DumbbellSmall