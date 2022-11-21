import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Skateboard = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m2 7 .813 1.219A4 4 0 0 0 6.14 10H12m10-3-.813 1.219A4 4 0 0 1 17.86 10H16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={7} cy={15} r={2} stroke="currentColor" strokeWidth={1.5} /><circle cx={17} cy={15} r={2} stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="m2 7 .813 1.219A4 4 0 0 0 6.14 10h11.718a4 4 0 0 0 3.328-1.781L22 7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={7} cy={15} r={2} stroke="currentColor" strokeWidth={1.5} /><circle cx={17} cy={15} r={2} stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m2 7 .813 1.219A4 4 0 0 0 6.14 10h11.718a4 4 0 0 0 3.328-1.781L22 7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={7} cy={15} r={2} stroke="currentColor" strokeWidth={1.5} /><circle cx={17} cy={15} r={2} stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m2.624 6.584.813 1.219A3.25 3.25 0 0 0 6.14 9.25h11.718a3.25 3.25 0 0 0 2.704-1.447l.813-1.219 1.248.832-.813 1.219a4.75 4.75 0 0 1-3.952 2.115H6.141a4.75 4.75 0 0 1-3.952-2.115l-.813-1.219 1.248-.832ZM7 13.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM4.25 15a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM17 13.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM14.25 15a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M1.584 6.376a.75.75 0 0 1 1.04.208l.813 1.219A3.25 3.25 0 0 0 6.14 9.25h11.718a3.25 3.25 0 0 0 2.704-1.447l.813-1.219a.75.75 0 0 1 1.248.832l-.812 1.219a4.75 4.75 0 0 1-3.953 2.115H6.141a4.75 4.75 0 0 1-3.952-2.115l-.813-1.219a.75.75 0 0 1 .208-1.04Z" fill="currentColor" /><path d="M9 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM19 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM19 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M1.584 6.376a.75.75 0 0 1 1.04.208l.813 1.219A3.25 3.25 0 0 0 6.14 9.25h11.718a3.25 3.25 0 0 0 2.704-1.447l.813-1.219a.75.75 0 0 1 1.248.832l-.812 1.219a4.75 4.75 0 0 1-3.953 2.115H6.141a4.75 4.75 0 0 1-3.952-2.115l-.813-1.219a.75.75 0 0 1 .208-1.04Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Skateboard