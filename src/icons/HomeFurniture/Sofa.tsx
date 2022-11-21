import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Sofa = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 18.75a.75.75 0 0 0 0-1.5v1.5Zm4-1.5a.75.75 0 0 0 0 1.5v-1.5Zm10.75-2.806V12h-1.5v2.444h1.5ZM17.25 12v1.2h1.5V12h-1.5Zm-14.5 2.444V12h-1.5v2.444h1.5Zm4.05.306h10.4v-1.5H6.8v1.5ZM5.25 12v1.2h1.5V12h-1.5Zm1.55 1.25a.05.05 0 0 1-.05-.05h-1.5c0 .856.694 1.55 1.55 1.55v-1.5ZM4 10.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 4 9.25v1.5ZM2.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 1.25 12h1.5Zm14.5 1.2a.05.05 0 0 1-.05.05v1.5a1.55 1.55 0 0 0 1.55-1.55h-1.5ZM20 9.25A2.75 2.75 0 0 0 17.25 12h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM22.75 12A2.75 2.75 0 0 0 20 9.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM5.556 17.25a2.806 2.806 0 0 1-2.806-2.806h-1.5a4.306 4.306 0 0 0 4.306 4.306v-1.5Zm15.694-2.806a2.806 2.806 0 0 1-2.806 2.806v1.5a4.306 4.306 0 0 0 4.306-4.306h-1.5ZM8 17.25H5.556v1.5H8v-1.5Zm10.444 0H12v1.5h6.444v-1.5Z" fill="currentColor" /><path d="M15 5c.93 0 1.394 0 1.78.077a4 4 0 0 1 3.143 3.143C20 8.606 20 9.07 20 10M4 10c0-.93 0-1.394.077-1.78A4 4 0 0 1 7.22 5.077C7.606 5 8.07 5 9 5h2M20 19v-1M4 19v-1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.444 17.25H5.556v1.5h12.888v-1.5Zm4.306-2.806V12h-1.5v2.444h1.5ZM17.25 12v1.2h1.5V12h-1.5Zm-14.5 2.444V12h-1.5v2.444h1.5Zm4.05.306h10.4v-1.5H6.8v1.5ZM5.25 12v1.2h1.5V12h-1.5Zm1.55 1.25a.05.05 0 0 1-.05-.05h-1.5c0 .856.694 1.55 1.55 1.55v-1.5ZM4 10.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 4 9.25v1.5ZM2.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 1.25 12h1.5Zm14.5 1.2a.05.05 0 0 1-.05.05v1.5a1.55 1.55 0 0 0 1.55-1.55h-1.5ZM20 9.25A2.75 2.75 0 0 0 17.25 12h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM22.75 12A2.75 2.75 0 0 0 20 9.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM5.556 17.25a2.806 2.806 0 0 1-2.806-2.806h-1.5a4.306 4.306 0 0 0 4.306 4.306v-1.5Zm15.694-2.806a2.806 2.806 0 0 1-2.806 2.806v1.5a4.306 4.306 0 0 0 4.306-4.306h-1.5Z" fill="currentColor" /><path opacity={0.5} d="M20 10c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5H9c-.93 0-1.394 0-1.78.077A4 4 0 0 0 4.077 8.22C4 8.606 4 9.07 4 10" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M20 19v-1M4 19v-1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.444 17.25H5.556v1.5h12.888v-1.5Zm4.306-2.806V12h-1.5v2.444h1.5ZM17.25 12v1.2h1.5V12h-1.5Zm-14.5 2.444V12h-1.5v2.444h1.5Zm4.05.306h10.4v-1.5H6.8v1.5ZM5.25 12v1.2h1.5V12h-1.5Zm1.55 1.25a.05.05 0 0 1-.05-.05h-1.5c0 .856.694 1.55 1.55 1.55v-1.5ZM4 10.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 4 9.25v1.5ZM2.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 1.25 12h1.5Zm14.5 1.2a.05.05 0 0 1-.05.05v1.5a1.55 1.55 0 0 0 1.55-1.55h-1.5ZM20 9.25A2.75 2.75 0 0 0 17.25 12h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM22.75 12A2.75 2.75 0 0 0 20 9.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM5.556 17.25a2.806 2.806 0 0 1-2.806-2.806h-1.5a4.306 4.306 0 0 0 4.306 4.306v-1.5Zm15.694-2.806a2.806 2.806 0 0 1-2.806 2.806v1.5a4.306 4.306 0 0 0 4.306-4.306h-1.5Z" fill="currentColor" /><path d="M20 10c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5H9c-.93 0-1.394 0-1.78.077A4 4 0 0 0 4.077 8.22C4 8.606 4 9.07 4 10" stroke="currentColor" strokeWidth={1.5} /><path d="M20 19v-1M4 19v-1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8.905 4.25H15.095c.838 0 1.372 0 1.832.091a4.75 4.75 0 0 1 3.732 3.732l-.736.147.736-.147c.07.35.086.743.09 1.28A2.751 2.751 0 0 1 22.75 12v2.444c0 1.53-.798 2.874-2 3.637V19a.75.75 0 0 1-1.5 0v-.325c-.261.05-.53.075-.806.075H5.556c-.276 0-.545-.026-.806-.075V19a.75.75 0 0 1-1.5 0v-.919a4.302 4.302 0 0 1-2-3.636V12c0-1.26.846-2.32 2.001-2.647.004-.537.02-.93.09-1.28a4.75 4.75 0 0 1 3.732-3.732c.46-.091.994-.091 1.832-.091ZM4.752 9.354A2.751 2.751 0 0 1 6.75 12v1.2c0 .028.022.05.05.05h10.4a.05.05 0 0 0 .05-.05V12c0-1.258.845-2.319 1.998-2.646-.004-.51-.017-.77-.06-.988a3.25 3.25 0 0 0-2.554-2.554c-.296-.058-.669-.062-1.634-.062H9c-.965 0-1.338.004-1.634.062a3.25 3.25 0 0 0-2.554 2.554c-.043.218-.056.479-.06.988ZM4 10.75c-.69 0-1.25.56-1.25 1.25v2.444a2.806 2.806 0 0 0 2.806 2.806h12.888a2.806 2.806 0 0 0 2.806-2.806V12a1.25 1.25 0 0 0-2.5 0v1.2a1.55 1.55 0 0 1-1.55 1.55H6.8a1.55 1.55 0 0 1-1.55-1.55V12c0-.69-.56-1.25-1.25-1.25Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 12v1h10v-1a3 3 0 0 1 2.993-3 4.592 4.592 0 0 0-.07-.78 4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5H9c-.93 0-1.394 0-1.78.077A4 4 0 0 0 4.077 8.22a4.588 4.588 0 0 0-.07.78A3 3 0 0 1 7 12Z" fill="currentColor" /><path d="M18.444 18H5.556a3.57 3.57 0 0 1-.806-.092V19a.75.75 0 0 1-1.5 0v-1.849A3.548 3.548 0 0 1 2 14.444V12a2 2 0 1 1 4 0v1.2a.8.8 0 0 0 .8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 1 1 4 0v2.444a3.548 3.548 0 0 1-1.25 2.707V19a.75.75 0 0 1-1.5 0v-1.092a3.57 3.57 0 0 1-.806.092Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.444 18H5.556a3.57 3.57 0 0 1-.806-.092V19a.75.75 0 0 1-1.5 0v-1.849A3.548 3.548 0 0 1 2 14.444V12a2 2 0 1 1 4 0v1.2a.8.8 0 0 0 .8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 1 1 4 0v2.444a3.548 3.548 0 0 1-1.25 2.707V19a.75.75 0 0 1-1.5 0v-1.092a3.57 3.57 0 0 1-.806.092Z" fill="currentColor" /><path opacity={0.5} d="M4.007 9c.008-.328.027-.566.07-.78A4 4 0 0 1 7.22 5.077C7.606 5 8.07 5 9 5h6c.93 0 1.394 0 1.78.077a4 4 0 0 1 3.143 3.143c.043.214.062.452.07.78H20v1a2 2 0 0 0-2 2v1.2a.8.8 0 0 1-.8.8H6.8a.8.8 0 0 1-.8-.8V12a2 2 0 0 0-2-2V9h.007Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Sofa