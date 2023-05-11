import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Stethoscope = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M9 14.235V17a5.001 5.001 0 0 0 3 4.584m2.882.416a4.12 4.12 0 0 0 3.964-3" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12.286 3h.091c.313 0 .47 0 .601.012a3 3 0 0 1 2.725 2.724c.011.132.011.288.011.6v.9c0 .981-.202 1.916-.567 2.764M5.43 3h-.092c-.313 0-.47 0-.601.012a3 3 0 0 0-2.724 2.724C2 5.868 2 6.024 2 6.336v1.185a6.714 6.714 0 0 0 6.714 6.714c1.074 0 2.091-.241 3-.673" /><circle cx={19} cy={16} r={3} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 2v2M6 2v2" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M9 14.235V17a5 5 0 0 0 5 5h.882a4.12 4.12 0 0 0 3.964-3" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M5.429 3h-.092c-.313 0-.47 0-.601.012a3 3 0 0 0-2.724 2.724C2 5.868 2 6.024 2 6.336v.9a7 7 0 0 0 7 7 6.714 6.714 0 0 0 6.714-6.715V6.337c0-.313 0-.47-.011-.601a3 3 0 0 0-2.724-2.724C12.847 3 12.69 3 12.377 3h-.091" /><circle cx={19} cy={16} r={3} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 2v2M6 2v2" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M9 14.235V17a5 5 0 0 0 5 5h.882a4.12 4.12 0 0 0 3.964-3" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M5.429 3h-.092c-.313 0-.47 0-.601.012a3 3 0 0 0-2.724 2.724C2 5.868 2 6.024 2 6.336v.9a7 7 0 0 0 7 7 6.714 6.714 0 0 0 6.714-6.715V6.337c0-.313 0-.47-.011-.601a3 3 0 0 0-2.724-2.724C12.847 3 12.69 3 12.377 3h-.091" /><circle cx={19} cy={16} r={3} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 2v2M6 2v2" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v.251a3.75 3.75 0 0 1 3.7 3.418c.014.166.014.354.014.629V7.52c0 3.87-2.944 7.05-6.714 7.427V17A4.25 4.25 0 0 0 14 21.25h.882c1.25 0 2.343-.682 2.924-1.694A3.752 3.752 0 0 1 19 12.25a3.75 3.75 0 0 1 .387 7.48 4.869 4.869 0 0 1-4.505 3.02H14A5.75 5.75 0 0 1 8.25 17v-2.05a7.751 7.751 0 0 1-7-7.715v-.937c0-.275 0-.463.015-.628A3.75 3.75 0 0 1 4.67 2.265a6.88 6.88 0 0 1 .58-.015V2a.75.75 0 1 1 1.5 0v2a.75.75 0 0 1-1.5 0v-.25c-.263 0-.366.001-.448.009a2.25 2.25 0 0 0-2.043 2.043c-.008.09-.009.206-.009.535v.898A6.25 6.25 0 0 0 9 13.485a5.964 5.964 0 0 0 5.964-5.964V6.337c0-.329 0-.445-.008-.535a2.25 2.25 0 0 0-2.206-2.05V4a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM16.75 16a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 1.25a.75.75 0 0 1 .75.75v.251a3.75 3.75 0 0 1 3.7 3.418c.014.166.014.354.014.629V7.52c0 3.87-2.944 7.05-6.714 7.427V17A4.25 4.25 0 0 0 14 21.25h.882a3.369 3.369 0 0 0 3.108-2.068c.04-.095.068-.203.085-.327A3.001 3.001 0 0 1 19 13a3 3 0 0 1 .575 5.945 2.884 2.884 0 0 1-.201.817 4.869 4.869 0 0 1-4.492 2.988H14A5.75 5.75 0 0 1 8.25 17v-2.05a7.751 7.751 0 0 1-7-7.715v-.937c0-.275 0-.463.015-.628A3.75 3.75 0 0 1 4.67 2.265a6.88 6.88 0 0 1 .58-.015V2a.75.75 0 1 1 1.5 0v2a.75.75 0 0 1-1.5 0v-.25c-.263 0-.366.001-.448.009a2.25 2.25 0 0 0-2.043 2.043c-.008.09-.009.206-.009.535v.898A6.25 6.25 0 0 0 9 13.485a5.964 5.964 0 0 0 5.964-5.964V6.337c0-.329 0-.445-.008-.535a2.25 2.25 0 0 0-2.206-2.05V4a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={19} cy={16} r={3} fill="currentColor" /><path fill="currentColor" d="M12 1.25a.75.75 0 0 1 .75.75v.251a3.75 3.75 0 0 1 3.7 3.418c.014.166.014.354.014.629V7.52A7.464 7.464 0 0 1 9 14.985a7.75 7.75 0 0 1-7.75-7.75v-.937c0-.275 0-.463.015-.628A3.75 3.75 0 0 1 4.67 2.265a6.88 6.88 0 0 1 .58-.015V2a.75.75 0 1 1 1.5 0v2a.75.75 0 0 1-1.5 0v-.25c-.263 0-.366.001-.448.009a2.25 2.25 0 0 0-2.043 2.043c-.008.09-.009.206-.009.535v.898A6.25 6.25 0 0 0 9 13.485a5.964 5.964 0 0 0 5.964-5.964V6.337c0-.329 0-.445-.008-.535a2.25 2.25 0 0 0-2.206-2.05V4a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z" /><path fill="currentColor" d="M8.25 14.95V17A5.75 5.75 0 0 0 14 22.75h.882a4.866 4.866 0 0 0 4.23-2.458c.247-.432.37-.896.43-1.34a3.015 3.015 0 0 1-1.5-.108 2.07 2.07 0 0 1-.232.705 3.366 3.366 0 0 1-2.928 1.701H14A4.25 4.25 0 0 1 9.75 17v-2.052a7.526 7.526 0 0 1-1.5.002Z" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Stethoscope