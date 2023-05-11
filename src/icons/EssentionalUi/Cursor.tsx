import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Cursor = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 4.942c-2.524-.915-3.871-1.288-4.609-.55-.84.84-.24 2.47.962 5.728l2.007 5.45c.602 1.633.903 2.45 1.565 2.596.662.145 1.277-.47 2.508-1.702l1.203-1.202 3.938 3.938c.408.408.612.612.84.706.303.125.643.125.947 0 .227-.094.431-.298.839-.706s.612-.612.706-.84a1.238 1.238 0 0 0 0-.947c-.094-.227-.298-.43-.706-.839l-3.938-3.938 1.202-1.203c1.232-1.23 1.847-1.846 1.702-2.508-.146-.662-.963-.963-2.596-1.565L13 6.414" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m12.636 15.262-1.203 1.202c-1.23 1.232-1.846 1.847-2.508 1.702-.662-.146-.963-.963-1.565-2.596l-2.007-5.45C4.152 6.861 3.55 5.231 4.39 4.391c.84-.84 2.47-.24 5.73.962L15.57 7.36c1.633.602 2.45.903 2.596 1.565.145.662-.47 1.277-1.702 2.508l-1.202 1.203" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m12.636 15.262 3.938 3.938c.408.408.612.612.84.706.303.126.643.126.947 0 .227-.094.431-.298.839-.706s.611-.612.706-.84a1.238 1.238 0 0 0 0-.946c-.095-.228-.298-.432-.706-.84l-3.938-3.938" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m16.574 19.2-3.938-3.938-1.203 1.202c-1.23 1.232-1.846 1.847-2.508 1.702-.662-.146-.963-.963-1.565-2.596l-2.007-5.45C4.152 6.861 3.55 5.231 4.39 4.391c.84-.84 2.47-.24 5.73.962L15.57 7.36c1.633.602 2.45.903 2.596 1.565.145.662-.47 1.277-1.702 2.508l-1.202 1.203 3.938 3.938c.408.408.612.612.706.84.125.303.125.643 0 .947-.094.227-.298.431-.706.839s-.612.612-.84.706a1.238 1.238 0 0 1-.947 0c-.227-.094-.43-.298-.839-.706Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="m10.317 4.626 5.567 2.051c.77.284 1.426.525 1.902.785.498.273.97.656 1.112 1.302.142.646-.126 1.192-.464 1.648-.323.436-.818.93-1.398 1.51l-.714.714 3.425 3.424c.19.19.358.359.489.509.139.159.271.337.363.558a1.988 1.988 0 0 1 0 1.52 2.03 2.03 0 0 1-.363.559c-.131.15-.3.318-.49.508l-.032.033c-.19.19-.358.358-.508.489a2.03 2.03 0 0 1-.558.363 1.988 1.988 0 0 1-1.521 0 2.03 2.03 0 0 1-.558-.363c-.15-.131-.319-.3-.509-.49l-3.424-3.424-.714.714c-.58.58-1.074 1.075-1.51 1.398-.456.338-1.002.606-1.648.464-.646-.142-1.03-.614-1.302-1.112-.26-.476-.501-1.132-.785-1.902l-2.051-5.567c-.58-1.576-1.046-2.84-1.253-3.813-.206-.971-.218-1.937.488-2.643.706-.706 1.672-.694 2.643-.488.973.207 2.237.672 3.813 1.253Zm-4.124.215c-.868-.185-1.137-.053-1.271.08-.134.135-.266.404-.081 1.272.18.854.606 2.015 1.216 3.668l2.007 5.45c.31.84.514 1.39.714 1.755.188.344.286.363.306.367h.004c.02.006.116.03.43-.204.336-.249.752-.662 1.385-1.295l1.203-1.203a.75.75 0 0 1 1.06 0l3.939 3.939c.21.21.343.342.45.435a.626.626 0 0 0 .146.108c.12.05.253.05.373 0a.625.625 0 0 0 .146-.108c.106-.093.239-.224.45-.435.21-.212.342-.344.435-.45a.625.625 0 0 0 .108-.146.488.488 0 0 0 0-.373.626.626 0 0 0-.108-.146 10.386 10.386 0 0 0-.435-.45l-3.939-3.939a.75.75 0 0 1 0-1.06l1.203-1.203c.633-.633 1.046-1.049 1.295-1.384.233-.315.21-.411.205-.431v-.002l-.001-.002c-.004-.02-.023-.118-.367-.306-.366-.2-.915-.404-1.755-.714L9.86 6.057c-1.653-.61-2.814-1.035-3.668-1.216Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m16.574 19.2-3.938-3.938-1.203 1.202c-1.23 1.232-1.846 1.847-2.508 1.702-.662-.146-.963-.963-1.565-2.596l-2.007-5.45C4.152 6.861 3.55 5.231 4.39 4.391c.84-.84 2.47-.24 5.73.962L15.57 7.36c1.633.602 2.45.903 2.596 1.565.145.662-.47 1.277-1.702 2.508l-1.202 1.203 3.938 3.938c.408.408.612.612.706.84.125.303.125.643 0 .947-.094.227-.298.431-.706.839s-.612.612-.84.706a1.238 1.238 0 0 1-.947 0c-.227-.094-.43-.298-.839-.706Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="m11.433 16.464 1.203-1.202 2.626-2.626 1.202-1.203c1.232-1.23 1.847-1.846 1.702-2.508-.146-.662-.963-.963-2.596-1.565l-5.45-2.007C6.861 4.152 5.231 3.55 4.391 4.39c-.84.84-.24 2.47.962 5.73L7.36 15.57c.602 1.633.903 2.45 1.565 2.596.662.145 1.277-.47 2.508-1.702Z" clipRule="evenodd" /><path fill="currentColor" d="m12.636 15.262 3.938 3.938c.408.408.612.612.84.706.302.126.643.126.946 0 .228-.094.432-.298.84-.706.407-.408.611-.612.706-.84a1.238 1.238 0 0 0 0-.946c-.095-.228-.299-.432-.706-.84l-3.939-3.938-2.625 2.626Z" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Cursor