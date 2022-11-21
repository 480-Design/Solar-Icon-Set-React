import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const BicyclingRound = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={14} cy={4} r={2} stroke="currentColor" strokeWidth={1.5} /><circle cx={6} cy={18} r={3} stroke="currentColor" strokeWidth={1.5} /><circle cx={18} cy={18} r={3} stroke="currentColor" strokeWidth={1.5} /><path d="M18.5 10h-3.918c-.377 0-.743-.128-1.038-.363L11.386 7.92A2.638 2.638 0 1 0 8.688 12.4M12 18l.76-1.774a1.89 1.89 0 0 0-.981-2.477" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={14} cy={4} r={2} stroke="currentColor" strokeWidth={1.5} /><circle opacity={0.5} cx={6} cy={18} r={3} stroke="currentColor" strokeWidth={1.5} /><circle opacity={0.5} cx={18} cy={18} r={3} stroke="currentColor" strokeWidth={1.5} /><path d="M18.5 10h-3.918c-.377 0-.743-.128-1.038-.363L11.386 7.92A2.638 2.638 0 1 0 8.688 12.4l3.091 1.349a1.89 1.89 0 0 1 .981 2.477L12 18" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={14} cy={4} r={2} stroke="currentColor" strokeWidth={1.5} /><circle cx={6} cy={18} r={3} stroke="currentColor" strokeWidth={1.5} /><circle cx={18} cy={18} r={3} stroke="currentColor" strokeWidth={1.5} /><path d="M18.5 10h-3.918c-.377 0-.742-.128-1.037-.363L11.386 7.92A2.638 2.638 0 1 0 8.69 12.4l3.09 1.349a1.89 1.89 0 0 1 .982 2.477L12 18" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM11.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Zm-.331 4.506a1.888 1.888 0 1 0-1.93 3.207l3.09 1.349a2.64 2.64 0 0 1 1.37 3.46l-.76 1.773a.75.75 0 0 1-1.378-.59l.76-1.775a1.14 1.14 0 0 0-.592-1.494l-3.09-1.348a3.388 3.388 0 1 1 3.464-5.756l2.159 1.719c.162.129.363.199.57.199H18.5a.75.75 0 0 1 0 1.5h-3.918a2.417 2.417 0 0 1-1.505-.526L10.92 8.506ZM6 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM2.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM14.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10.919 8.506a1.888 1.888 0 1 0-1.93 3.207l3.09 1.349a2.64 2.64 0 0 1 1.37 3.46l-.76 1.773a.75.75 0 0 1-1.378-.59l.76-1.775a1.14 1.14 0 0 0-.592-1.494l-3.09-1.348a3.388 3.388 0 1 1 3.464-5.756l2.159 1.719c.162.129.363.199.57.199H18.5a.75.75 0 0 1 0 1.5h-3.918a2.417 2.417 0 0 1-1.505-.526L10.92 8.506ZM6 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM2.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM14.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10.919 8.506a1.888 1.888 0 1 0-1.93 3.207l3.09 1.349a2.64 2.64 0 0 1 1.37 3.46l-.76 1.773a.75.75 0 0 1-1.379-.59l.76-1.775a1.14 1.14 0 0 0-.591-1.494l-3.09-1.348a3.388 3.388 0 1 1 3.464-5.756l2.158 1.719c.163.129.364.199.571.199H18.5a.75.75 0 0 1 0 1.5h-3.918a2.416 2.416 0 0 1-1.505-.526L10.92 8.506Z" fill="currentColor" /><g opacity={0.5} fillRule="evenodd" clipRule="evenodd" fill="currentColor"><path d="M18 14.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM6 14.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default BicyclingRound