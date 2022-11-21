import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const SpedometerLow = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m19 19-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2M20 12h2M12 4V2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13.778 14.364a3 3 0 1 0-4.243-4.243c-.445.446-.756 1.371-.971 2.346-.32 1.459-.481 2.188.1 2.77.58.58 1.31.42 2.768.098.975-.214 1.9-.525 2.346-.971Z" stroke="currentColor" strokeWidth={1.5} /><path d="M9 21.542C4.943 20.268 2 16.478 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.478-2.943 8.268-7 9.542" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="m19 19-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2M20 12h2M12 4V2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13.778 14.364a3 3 0 1 0-4.243-4.243c-.445.446-.756 1.371-.971 2.346-.32 1.459-.481 2.188.1 2.77.58.58 1.31.42 2.768.098.975-.214 1.9-.525 2.346-.971Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" stroke="currentColor" strokeWidth={1.5} /><path d="m19 19-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2M20 12h2M12 4V2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13.778 14.364a3 3 0 1 0-4.242-4.243c-.446.446-.757 1.371-.972 2.346-.32 1.459-.481 2.188.1 2.77.58.58 1.31.42 2.768.098.976-.214 1.9-.525 2.346-.971Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.78 11.25H4a.75.75 0 0 1 0 1.5H2.78a9.21 9.21 0 0 0 2.17 5.239l1.02-1.02a.75.75 0 0 1 1.06 1.061l-1.019 1.02A9.213 9.213 0 0 0 12 21.25a9.213 9.213 0 0 0 5.989-2.2l-1.02-1.02a.75.75 0 1 1 1.061-1.06l1.02 1.019a9.21 9.21 0 0 0 2.17-5.239H20a.75.75 0 0 1 0-1.5h1.22a9.21 9.21 0 0 0-2.17-5.239l-1.02 1.02a.75.75 0 1 1-1.06-1.061l1.019-1.02a9.21 9.21 0 0 0-5.239-2.17V4a.75.75 0 0 1-1.5 0V2.78a9.21 9.21 0 0 0-5.239 2.17l1.02 1.02A.75.75 0 0 1 5.97 7.03L4.95 6.011a9.21 9.21 0 0 0-2.17 5.239ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Zm7.755-2.41a3.75 3.75 0 1 1 5.303 5.304c-.33.33-.785.566-1.23.74-.459.18-.975.322-1.485.434l-.066.014c-.672.148-1.282.283-1.795.292-.594.01-1.134-.143-1.599-.608-.464-.464-.618-1.005-.607-1.598.009-.513.143-1.124.291-1.796l.015-.066c.112-.51.253-1.026.433-1.484.175-.446.41-.9.74-1.231Zm4.243 1.062a2.25 2.25 0 0 0-3.182 0c-.115.115-.259.345-.405.717-.14.36-.262.794-.364 1.26-.168.76-.265 1.22-.272 1.565-.004.28.053.395.169.512.116.116.23.173.512.168.344-.006.805-.104 1.565-.271.466-.103.9-.224 1.259-.365.372-.146.603-.29.718-.404a2.25 2.25 0 0 0 0-3.182Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.752 3.975a.752.752 0 0 1-1.504 0V2A9.992 9.992 0 0 0 5.46 4.394l1.556 1.553A.75.75 0 1 1 5.953 7.01L4.397 5.456A9.964 9.964 0 0 0 2 11.236h1.978a.752.752 0 1 1 0 1.501H2a9.964 9.964 0 0 0 2.397 5.78l1.556-1.554a.753.753 0 0 1 1.064 0 .75.75 0 0 1 0 1.062L5.46 19.578A9.997 9.997 0 0 0 12 22a9.997 9.997 0 0 0 6.54-2.422l-1.556-1.553a.75.75 0 0 1 0-1.062.753.753 0 0 1 1.063 0l1.556 1.553A9.963 9.963 0 0 0 22 12.737h-1.978a.752.752 0 1 1 0-1.502H22a9.964 9.964 0 0 0-2.397-5.779L18.047 7.01a.75.75 0 1 1-1.064-1.062l1.556-1.554A9.992 9.992 0 0 0 12.752 2v1.975Zm1.059 6.157a3.001 3.001 0 0 1 0 4.248c-.447.447-1.375.758-2.353.973-1.462.322-2.194.482-2.776-.1-.582-.58-.422-1.311-.1-2.772.215-.976.528-1.903.974-2.349a3.011 3.011 0 0 1 4.255 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.811 14.38a3.001 3.001 0 0 0 0-4.248 3.011 3.011 0 0 0-4.254 0c-.447.446-.76 1.373-.974 2.35-.322 1.46-.483 2.19.1 2.772.582.581 1.313.42 2.776.1.978-.216 1.905-.527 2.352-.974Z" fill="currentColor" /><path opacity={0.5} d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" fill="currentColor" /><path d="M4.42 5.476c.326-.377.679-.73 1.057-1.055a.758.758 0 0 1 .053.048l1.5 1.5A.75.75 0 0 1 5.97 7.03l-1.5-1.5a.756.756 0 0 1-.05-.054ZM2.028 12.75a10.14 10.14 0 0 1 0-1.5H4a.75.75 0 0 1 0 1.5H2.028ZM5.476 19.58a10.06 10.06 0 0 1-1.055-1.056.76.76 0 0 1 .049-.055l1.5-1.5a.75.75 0 0 1 1.06 1.061l-1.5 1.5a.751.751 0 0 1-.054.05ZM19.58 18.523c-.326.378-.679.731-1.056 1.056a.752.752 0 0 1-.054-.049l-1.5-1.5a.75.75 0 1 1 1.06-1.06l1.5 1.5a.752.752 0 0 1 .05.053ZM21.972 11.25a10.124 10.124 0 0 1 0 1.5H20a.75.75 0 0 1 0-1.5h1.972ZM18.523 4.42c.378.326.731.679 1.056 1.056a.724.724 0 0 1-.049.054l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.737.737 0 0 1 .053-.05ZM12.75 2.028V4a.75.75 0 0 1-1.5 0V2.028a10.14 10.14 0 0 1 1.5 0Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default SpedometerLow