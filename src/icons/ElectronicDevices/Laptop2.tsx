import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Laptop2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M20.5 15v-5c0-2.828 0-4.243-.879-5.121C18.743 4 17.328 4 14.5 4H14M3.5 15v-5c0-2.828 0-4.243.879-5.121C5.257 4 6.672 4 9.5 4h.5M12 20H5a3 3 0 0 1-3-3v-1a1 1 0 0 1 1-1h4.333a2 2 0 0 1 1.2.4l.934.7a2 2 0 0 0 1.2.4h2.666a2 2 0 0 0 1.2-.4l.934-.7a2 2 0 0 1 1.2-.4H21a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-3" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M20.5 15v-5c0-2.828 0-4.243-.879-5.121C18.743 4 17.328 4 14.5 4h-5c-2.828 0-4.243 0-5.121.879C3.5 5.757 3.5 7.172 3.5 10v5" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M5 20h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3Z" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M20.5 15v-5c0-2.828 0-4.243-.879-5.121C18.743 4 17.328 4 14.5 4h-5c-2.828 0-4.243 0-5.121.879C3.5 5.757 3.5 7.172 3.5 10v5" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M5 20h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M9.445 3.25h5.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v4.323c.848.121 1.5.85 1.5 1.732v1A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17v-1a1.75 1.75 0 0 1 1.5-1.732V9.945c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117ZM3 15.75a.25.25 0 0 0-.25.25v1A2.25 2.25 0 0 0 5 19.25h14A2.25 2.25 0 0 0 21.25 17v-1a.25.25 0 0 0-.25-.25h-4.333c-.27 0-.534.088-.75.25l-.934.7a2.75 2.75 0 0 1-1.65.55h-2.666a2.75 2.75 0 0 1-1.65-.55l-.934-.7a1.25 1.25 0 0 0-.75-.25H3Zm16.75-1.5h-3.083a2.75 2.75 0 0 0-1.65.55l-.934.7a1.25 1.25 0 0 1-.75.25h-2.666a1.25 1.25 0 0 1-.75-.25l-.934-.7a2.75 2.75 0 0 0-1.65-.55H4.25V10c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.191-.103h5c1.435 0 2.436.002 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.101.754.103 1.756.103 3.191v4.25Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M5 22h14a3 3 0 0 0 3-3v-1.5a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1V19a3 3 0 0 0 3 3ZM9.5 2h5c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.121v7h-3.833a3.5 3.5 0 0 0-2.1.7l-.934.7a.5.5 0 0 1-.3.1h-2.666a.5.5 0 0 1-.3-.1l-.934-.7a3.5 3.5 0 0 0-2.1-.7H3.5V8c0-2.828 0-4.243.879-5.121C5.257 2 6.672 2 9.5 2Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9.5 2h5c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.121v7h-3.833a3.5 3.5 0 0 0-2.1.7l-.934.7a.5.5 0 0 1-.3.1h-2.666a.5.5 0 0 1-.3-.1l-.934-.7a3.5 3.5 0 0 0-2.1-.7H3.5V8c0-2.828 0-4.243.879-5.121C5.257 2 6.672 2 9.5 2Z" opacity={0.5} /><path fill="currentColor" d="M5 22h14a3 3 0 0 0 3-3v-1.5a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1V19a3 3 0 0 0 3 3Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Laptop2