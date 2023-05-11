import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Pills2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M11.536 10.536a5 5 0 0 0-7.071-7.071m7.07 7.07a5 5 0 0 1-7.071-7.071m7.072 7.072L4.464 3.464M12 17c0 1.28.488 2.56 1.464 3.535A4.984 4.984 0 0 0 17 22m-5-5a5 5 0 1 1 10 0m-10 0h10m0 0c0 1.28-.488 2.56-1.465 3.535" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M11.536 10.536a5 5 0 0 0-7.071-7.071m7.07 7.07a5 5 0 0 1-7.071-7.071m7.072 7.072L4.464 3.464" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 17a5 5 0 1 0-10 0m10 0a5 5 0 0 1-10 0m10 0H12" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M11.536 10.536a5 5 0 0 0-7.071-7.071m7.07 7.07a5 5 0 0 1-7.071-7.071m7.072 7.072L4.464 3.464M22 17a5 5 0 1 0-10 0m10 0a5 5 0 0 1-10 0m10 0H12" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M8 1.25a5.734 5.734 0 0 0-4.066 1.684A5.75 5.75 0 1 0 8 1.25Zm3.489 8.178L5.572 3.511a4.25 4.25 0 0 1 5.917 5.917ZM4.51 4.572l5.917 5.917a4.25 4.25 0 0 1-5.917-5.917ZM21.066 12.934a5.75 5.75 0 1 0-8.132 8.132 5.75 5.75 0 0 0 8.132-8.132Zm-7.071 1.06a4.25 4.25 0 0 1 7.189 2.256h-8.368a4.229 4.229 0 0 1 1.179-2.255Zm-1.179 3.756h8.368a4.25 4.25 0 0 1-8.368 0Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12.026 9.965a5 5 0 0 0-6.992-6.992l6.992 6.992ZM10.965 11.026a5 5 0 0 1-6.992-6.992l6.992 6.992ZM21.944 16.25a5 5 0 0 0-9.887 0h9.887ZM21.944 17.75h-9.888a5 5 0 0 0 9.887 0Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M13.464 20.535a5 5 0 1 0 7.072-7.07 5 5 0 0 0-7.072 7.07ZM3 7a5 5 0 1 0 10 0A5 5 0 0 0 3 7Z" opacity={0.5} /><path fill="currentColor" d="M12.056 17.75h9.888a5.026 5.026 0 0 0 0-1.5h-9.888a5.026 5.026 0 0 0 0 1.5ZM3.974 4.035l6.991 6.991a5.038 5.038 0 0 0 1.06-1.06l-6.99-6.992a5.028 5.028 0 0 0-1.061 1.06Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Pills2