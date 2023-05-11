import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const SpedometerMiddle = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M9 21.542C4.943 20.268 2 16.478 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.478-2.943 8.268-7 9.542M19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2M20 12h2M12 4V2" /><path stroke="currentColor" strokeWidth={1.5} d="M15 12a3 3 0 0 1-6 0c0-.63.434-1.505.972-2.346.804-1.258 1.207-1.887 2.028-1.887s1.224.629 2.028 1.887c.538.841.972 1.716.972 2.346Z" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m19 19-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2M20 12h2M12 4V2" opacity={0.5} /><path stroke="currentColor" strokeWidth={1.5} d="M15 12a3 3 0 0 1-6 0c0-.63.434-1.505.972-2.346.804-1.258 1.207-1.887 2.028-1.887s1.224.629 2.028 1.887c.538.841.972 1.716.972 2.346Z" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m19 19-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2M20 12h2M12 4V2" /><path stroke="currentColor" strokeWidth={1.5} d="M15 12a3 3 0 0 1-6 0c0-.63.434-1.505.972-2.346.804-1.258 1.207-1.887 2.028-1.887s1.224.629 2.028 1.887c.538.841.972 1.716.972 2.346Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M2.78 11.25H4a.75.75 0 0 1 0 1.5H2.78a9.21 9.21 0 0 0 2.17 5.239l1.02-1.02a.75.75 0 0 1 1.06 1.061l-1.019 1.02A9.213 9.213 0 0 0 12 21.25a9.213 9.213 0 0 0 5.989-2.2l-1.02-1.02a.75.75 0 1 1 1.061-1.06l1.02 1.019a9.21 9.21 0 0 0 2.17-5.239H20a.75.75 0 0 1 0-1.5h1.22a9.21 9.21 0 0 0-2.17-5.239l-1.02 1.02a.75.75 0 1 1-1.06-1.061l1.019-1.02a9.21 9.21 0 0 0-5.239-2.17V4a.75.75 0 0 1-1.5 0V2.78a9.21 9.21 0 0 0-5.239 2.17l1.02 1.02A.75.75 0 0 1 5.97 7.03L4.95 6.011a9.21 9.21 0 0 0-2.17 5.239ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Zm10.27-3.24c-.24.247-.497.642-.916 1.298a8.601 8.601 0 0 0-.632 1.148c-.16.367-.222.631-.222.794a2.25 2.25 0 0 0 4.5 0c0-.163-.062-.427-.222-.794a8.603 8.603 0 0 0-.632-1.148c-.42-.656-.676-1.05-.915-1.298-.195-.203-.317-.243-.481-.243-.164 0-.286.04-.48.243Zm-1.08-1.042c.412-.427.903-.701 1.56-.701s1.148.274 1.56.7c.356.37.693.896 1.063 1.476l.037.057c.28.44.546.905.743 1.356.192.439.347.927.347 1.394a3.75 3.75 0 1 1-7.5 0c0-.467.155-.955.347-1.394.197-.451.462-.916.743-1.356l.036-.057c.371-.58.708-1.106 1.064-1.475Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12.752 3.975a.752.752 0 0 1-1.504 0V2A9.992 9.992 0 0 0 5.46 4.394l1.556 1.553A.75.75 0 1 1 5.953 7.01L4.397 5.456A9.964 9.964 0 0 0 2 11.236h1.978a.752.752 0 1 1 0 1.501H2a9.964 9.964 0 0 0 2.397 5.78l1.556-1.554a.753.753 0 0 1 1.064 0 .75.75 0 0 1 0 1.062L5.46 19.578A9.997 9.997 0 0 0 12 22a9.997 9.997 0 0 0 6.54-2.422l-1.556-1.553a.75.75 0 0 1 0-1.062.753.753 0 0 1 1.063 0l1.556 1.553A9.963 9.963 0 0 0 22 12.737h-1.978a.752.752 0 1 1 0-1.502H22a9.964 9.964 0 0 0-2.397-5.779L18.047 7.01a.75.75 0 1 1-1.064-1.062l1.556-1.554A9.992 9.992 0 0 0 12.752 2v1.975Zm-.724 12.044a3.006 3.006 0 0 1-3.009-3.004c0-.63.436-1.506.975-2.349.807-1.26 1.21-1.89 2.034-1.89.823 0 1.227.63 2.033 1.89.54.843.975 1.718.975 2.35a3.006 3.006 0 0 1-3.008 3.003Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9.02 13.015a3.006 3.006 0 0 0 3.008 3.004 3.006 3.006 0 0 0 3.008-3.004c0-.631-.435-1.507-.974-2.35-.807-1.26-1.21-1.89-2.034-1.89-.824 0-1.227.63-2.034 1.89-.54.844-.974 1.719-.974 2.35Z" /><path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" opacity={0.5} /><path fill="currentColor" d="M4.42 5.476c.326-.377.679-.73 1.057-1.055a.758.758 0 0 1 .053.048l1.5 1.5A.75.75 0 0 1 5.97 7.03l-1.5-1.5a.756.756 0 0 1-.05-.054ZM2.028 12.75a10.14 10.14 0 0 1 0-1.5H4a.75.75 0 0 1 0 1.5H2.028ZM5.476 19.58a10.06 10.06 0 0 1-1.055-1.056.76.76 0 0 1 .049-.055l1.5-1.5a.75.75 0 0 1 1.06 1.061l-1.5 1.5a.751.751 0 0 1-.054.05ZM19.58 18.523c-.326.378-.679.731-1.056 1.056a.752.752 0 0 1-.054-.049l-1.5-1.5a.75.75 0 1 1 1.06-1.06l1.5 1.5a.752.752 0 0 1 .05.053ZM21.972 11.25a10.124 10.124 0 0 1 0 1.5H20a.75.75 0 0 1 0-1.5h1.972ZM18.523 4.42c.378.326.731.679 1.056 1.056a.724.724 0 0 1-.049.054l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.737.737 0 0 1 .053-.05ZM12.75 2.028V4a.75.75 0 0 1-1.5 0V2.028a10.14 10.14 0 0 1 1.5 0Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default SpedometerMiddle