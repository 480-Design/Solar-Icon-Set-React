import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const BedsideTable4 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M19 22v-1.5M5 22v-1.5M12 20V8M15 12v3M9 12v3M12 2h-2C6.229 2 4.343 2 3.172 3.172 2 4.343 2 6.229 2 10v2c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12v-2c0-3.771 0-5.657-1.172-6.828-.943-.944-2.348-1.127-4.828-1.163M2 8h3m17 0H9" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M19 22v-1.5M5 22v-1.5" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M15 12v3M9 12v3" /><path stroke="currentColor" strokeWidth={1.5} d="M2 10c0-3.771 0-5.657 1.172-6.828C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12v-2Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 20V8M2 8h20" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M19 22v-1.5M5 22v-1.5M12 20V8M15 12v3M9 12v3" /><path stroke="currentColor" strokeWidth={1.5} d="M2 10c0-3.771 0-5.657 1.172-6.828C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12v-2Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M2 8h20" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M9.944 1.25h4.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.09.673.127 1.456.142 2.363a.755.755 0 0 1 .004.23c.007.566.007 1.178.007 1.84v2.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.464.464-1.005.768-1.629.97.013.054.02.112.02.171V22a.75.75 0 0 1-1.5 0v-1.374c-1.102.124-2.482.124-4.194.124H9.944c-1.712 0-3.092 0-4.194-.124V22a.75.75 0 0 1-1.5 0v-1.5c0-.06.007-.117.02-.172-.624-.201-1.165-.505-1.629-.97-.748-.748-1.08-1.697-1.238-2.869-.153-1.14-.153-2.595-.153-4.433V9.944c0-.662 0-1.274.007-1.84a.756.756 0 0 1 .003-.23c.016-.907.053-1.69.143-2.363.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153Zm-7.192 7.5c-.002.388-.002.804-.002 1.25v2c0 1.907.002 3.261.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h1.25V8.75H2.752Zm.024-1.5c.02-.587.054-1.094.114-1.54.135-1.005.389-1.585.812-2.008.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.06.445.094.952.114 1.539H2.776Zm9.974 1.5v10.5H14c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.028.14-2.382.14-4.289v-2c0-.446 0-.862-.002-1.25H12.75ZM9 11.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm6 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M2 9.75c0-.442 0-.858.002-1.25h9.248v11.25H10c-1.806 0-3.18 0-4.25-.129v2.129a.75.75 0 0 1-1.5 0v-2.475a3.1 3.1 0 0 1-1.078-.697C2 17.407 2 15.521 2 11.75v-2ZM9 11a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 9 11Z" clipRule="evenodd" /><path fill="currentColor" d="M21.974 7H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 1.75 6.229 1.75 10 1.75h4c3.771 0 5.657 0 6.828 1.172.844.843 1.08 2.057 1.146 4.078Z" /><path fill="currentColor" fillRule="evenodd" d="M12.75 8.5h9.248c.002.392.002.808.002 1.25v2c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697v2.475a.75.75 0 0 1-1.5 0v-2.129c-1.07.129-2.444.129-4.25.129h-1.25V8.5ZM15 11a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 15 11Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><g fill="currentColor" opacity={0.6}><path d="M2 9.75c0-.442 0-1.358.002-1.75h9.237v11.75H10c-1.806 0-3.18 0-4.25-.129v2.129a.75.75 0 0 1-1.5 0v-2.475a3.1 3.1 0 0 1-1.078-.697C2 17.407 2 15.521 2 11.75v-2ZM22 8c.002.392 0 1.308 0 1.75v2c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697v2.475a.75.75 0 0 1-1.5 0v-2.129c-1.07.129-2.705.129-4.511.129h-1V8H22Z" /></g><path fill="currentColor" d="M15.75 11.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3ZM9.75 11.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3Z" /><path fill="currentColor" d="M3.171 2.922C2.328 3.765 2.091 4.979 2.025 7v1h9.225v11.749h1.5V8h9.224V7c-.066-2.021-.302-3.235-1.146-4.078C19.657 1.75 17.771 1.75 14 1.75h-4c-3.772 0-5.657 0-6.829 1.172Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default BedsideTable4