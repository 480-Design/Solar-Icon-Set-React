import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Transmission = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12 6v7m0 5v-2M4 18v-7m0-5v2M20 6v2c0 1.886 0 2.828-.586 3.414C18.828 12 17.886 12 16 12h-6m-6 0h2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M18 15v-.75a.75.75 0 0 0-.75.75H18Zm-.75 7a.75.75 0 0 0 1.5 0h-1.5Zm4.11.392a.75.75 0 1 0 1.28-.784l-1.28.784ZM18 15.75h2.286v-1.5H18v1.5Zm.75 2.75V15h-1.5v3.5h1.5Zm2.5-1.75c0 .567-.446 1-.964 1v1.5c1.375 0 2.464-1.134 2.464-2.5h-1.5Zm-.964-1c.518 0 .964.433.964 1h1.5c0-1.366-1.089-2.5-2.464-2.5v1.5Zm0 2h-.429v1.5h.429v-1.5Zm-.429 0H18v1.5h1.857v-1.5Zm-.64 1.142 2.143 3.5 1.28-.784-2.143-3.5-1.28.784ZM17.25 18.5V22h1.5v-3.5h-1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M4.75 6a.75.75 0 0 0-1.5 0h1.5Zm-1.5 12a.75.75 0 0 0 1.5 0h-1.5Zm9.5-12a.75.75 0 0 0-1.5 0h1.5Zm-1.5 12a.75.75 0 0 0 1.5 0h-1.5Zm9.5-12a.75.75 0 0 0-1.5 0h1.5ZM4 11.25a.75.75 0 0 0 0 1.5v-1.5Zm15.414.164-.53-.53.53.53ZM3.25 6v12h1.5V6h-1.5Zm8 0v12h1.5V6h-1.5Zm8 0v2h1.5V6h-1.5ZM16 11.25H4v1.5h12v-1.5ZM19.25 8c0 .964-.002 1.612-.067 2.095-.062.461-.169.659-.3.789l1.062 1.06c.455-.455.64-1.022.725-1.65.082-.606.08-1.372.08-2.294h-1.5ZM16 12.75c.922 0 1.688.002 2.294-.08.628-.084 1.195-.27 1.65-.726l-1.06-1.06c-.13.13-.328.237-.79.3-.482.064-1.13.066-2.094.066v1.5Z" fill="currentColor" /><path d="M18 15v-.75a.75.75 0 0 0-.75.75H18Zm-.75 7a.75.75 0 0 0 1.5 0h-1.5Zm4.11.392a.75.75 0 1 0 1.28-.784l-1.28.784ZM18 15.75h2.286v-1.5H18v1.5Zm.75 2.75V15h-1.5v3.5h1.5Zm2.5-1.75c0 .567-.446 1-.964 1v1.5c1.375 0 2.464-1.134 2.464-2.5h-1.5Zm-.964-1c.518 0 .964.433.964 1h1.5c0-1.366-1.089-2.5-2.464-2.5v1.5Zm0 2h-.429v1.5h.429v-1.5Zm-.429 0H18v1.5h1.857v-1.5Zm-.64 1.142 2.143 3.5 1.28-.784-2.143-3.5-1.28.784ZM17.25 18.5V22h1.5v-3.5h-1.5Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M4 6v12M12 6v12M20 6v2c0 1.886 0 2.828-.586 3.414C18.828 12 17.886 12 16 12H4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M18 15v-.75a.75.75 0 0 0-.75.75H18Zm-.75 7a.75.75 0 0 0 1.5 0h-1.5Zm4.11.392a.75.75 0 1 0 1.28-.784l-1.28.784ZM18 15.75h2.286v-1.5H18v1.5Zm.75 2.75V15h-1.5v3.5h1.5Zm2.5-1.75c0 .567-.446 1-.964 1v1.5c1.375 0 2.464-1.134 2.464-2.5h-1.5Zm-.964-1c.518 0 .964.433.964 1h1.5c0-1.366-1.089-2.5-2.464-2.5v1.5Zm0 2h-.429v1.5h.429v-1.5Zm-.429 0H18v1.5h1.857v-1.5Zm-.64 1.142 2.143 3.5 1.28-.784-2.143-3.5-1.28.784ZM17.25 18.5V22h1.5v-3.5h-1.5Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM1.25 4a2.75 2.75 0 1 1 3.5 2.646v4.604h6.5V6.646a2.751 2.751 0 1 1 1.5 0v4.604H16c.964 0 1.612-.002 2.095-.066.461-.063.659-.17.789-.3.13-.13.237-.328.3-.79.064-.482.066-1.13.066-2.094V6.646a2.751 2.751 0 1 1 1.5 0v1.406c0 .898 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.343.08-2.242.08H12.75v4.604a2.751 2.751 0 1 1-1.5 0V12.75h-6.5v4.604a2.751 2.751 0 1 1-1.5 0V6.646A2.751 2.751 0 0 1 1.25 4ZM12 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm8 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM17.25 15a.75.75 0 0 1 .75-.75h2.286c1.375 0 2.464 1.134 2.464 2.5a2.502 2.502 0 0 1-1.641 2.358l1.53 2.5a.75.75 0 1 1-1.279.784l-1.923-3.142h-.687V22a.75.75 0 0 1-1.5 0v-7Zm1.5 2.75h1.536c.518 0 .964-.433.964-1s-.446-1-.964-1H18.75v2ZM4 18.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm8 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 4a2 2 0 1 1 2.75 1.855v5.395h6.5V5.855a2 2 0 1 1 1.5 0v5.395H16c.964 0 1.612-.002 2.095-.066.461-.063.659-.17.789-.3.13-.13.237-.328.3-.79.064-.482.066-1.13.066-2.094V5.855a2 2 0 1 1 1.5 0v2.197c0 .898 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.343.08-2.242.08H12.75v5.395a2 2 0 1 1-1.5 0V12.75h-6.5v5.395a2 2 0 1 1-1.5 0V5.855A2 2 0 0 1 2 4Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M17.25 15a.75.75 0 0 1 .75-.75h2.286c1.375 0 2.464 1.134 2.464 2.5a2.502 2.502 0 0 1-1.641 2.358l1.53 2.5a.75.75 0 1 1-1.279.784l-1.923-3.142h-.687V22a.75.75 0 0 1-1.5 0v-7Zm1.5 2.75h1.536c.518 0 .964-.433.964-1s-.446-1-.964-1H18.75v2Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 4a2 2 0 1 1 2.75 1.855v5.395h6.5V5.855a2 2 0 1 1 1.5 0v5.395H16c.964 0 1.612-.002 2.095-.066.461-.063.659-.17.789-.3.13-.13.237-.328.3-.79.064-.482.066-1.13.066-2.094V5.855a2 2 0 1 1 1.5 0v2.197c0 .898 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.343.08-2.242.08H12.75v5.395a2 2 0 1 1-1.5 0V12.75h-6.5v5.395a2 2 0 1 1-1.5 0V5.855A2 2 0 0 1 2 4Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M17.25 15a.75.75 0 0 1 .75-.75h2.286c1.375 0 2.464 1.134 2.464 2.5a2.502 2.502 0 0 1-1.641 2.358l1.53 2.5a.75.75 0 1 1-1.279.784l-1.923-3.142h-.687V22a.75.75 0 0 1-1.5 0v-7Zm1.5 2.75h1.536c.518 0 .964-.433.964-1s-.446-1-.964-1H18.75v2Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Transmission