import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const SidebarCode = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 11v2c0 3.771 0 5.657 1.172 6.828C4.343 21 6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172C22 18.657 22 16.771 22 13v-2c0-3.771 0-5.657-1.172-6.828C19.657 3 17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172 2.518 4.825 2.229 5.7 2.102 7M15 3v10m0 4v4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m5 15-.53-.53a.75.75 0 0 0 0 1.06L5 15Zm1.53-.47a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-1.06 2a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm6.03.47.53.53a.75.75 0 0 0 0-1.06l-.53.53Zm-.47-1.53a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 2a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-.268-3.207a.75.75 0 1 0-1.404-.526l1.404.526Zm-2.904 3.474a.75.75 0 1 0 1.404.526l-1.404-.526ZM5.53 15.53l1-1-1.06-1.06-1 1 1.06 1.06Zm-1.06 0 1 1 1.06-1.06-1-1-1.06 1.06Zm7.56.94-1-1-1.06 1.06 1 1 1.06-1.06Zm-1.06 0-1 1 1.06 1.06 1-1-1.06-1.06Zm-2.672-2.733-1.5 4 1.404.526 1.5-4-1.404-.526Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 11c0-3.771 0-5.657 1.172-6.828C4.343 3 6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172C22 5.343 22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828C19.657 21 17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172C2 18.657 2 16.771 2 13v-2Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M15 21V3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m5 15-.53-.53a.75.75 0 0 0 0 1.06L5 15Zm1.53-.47a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-1.06 2a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm6.03.47.53.53a.75.75 0 0 0 0-1.06l-.53.53Zm-.47-1.53a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 2a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-.268-3.207a.75.75 0 1 0-1.404-.526l1.404.526Zm-2.904 3.474a.75.75 0 1 0 1.404.526l-1.404-.526ZM5.53 15.53l1-1-1.06-1.06-1 1 1.06 1.06Zm-1.06 0 1 1 1.06-1.06-1-1-1.06 1.06Zm7.56.94-1-1-1.06 1.06 1 1 1.06-1.06Zm-1.06 0-1 1 1.06 1.06 1-1-1.06-1.06Zm-2.672-2.733-1.5 4 1.404.526 1.5-4-1.404-.526Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 11c0-3.771 0-5.657 1.172-6.828C4.343 3 6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172C22 5.343 22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828C19.657 21 17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172C2 18.657 2 16.771 2 13v-2Z" stroke="currentColor" strokeWidth={1.5} /><path d="M15 21V3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m5 15-.53-.53a.75.75 0 0 0 0 1.06L5 15Zm1.53-.47a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-1.06 2a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm6.03.47.53.53a.75.75 0 0 0 0-1.06l-.53.53Zm-.47-1.53a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 2a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-.268-3.207a.75.75 0 1 0-1.404-.526l1.404.526Zm-2.904 3.474a.75.75 0 1 0 1.404.526l-1.404-.526ZM5.53 15.53l1-1-1.06-1.06-1 1 1.06 1.06Zm-1.06 0 1 1 1.06-1.06-1-1-1.06 1.06Zm7.56.94-1-1-1.06 1.06 1 1 1.06-1.06Zm-1.06 0-1 1 1.06 1.06 1-1-1.06-1.06Zm-2.672-2.733-1.5 4 1.404.526 1.5-4-1.404-.526Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.702 14.263a.75.75 0 1 0-1.404-.526l-1.5 4a.75.75 0 1 0 1.404.526l1.5-4ZM6.53 14.53a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 0 0 0 1.06l1 1a.75.75 0 0 0 1.06-1.06L6.06 15l.47-.47ZM11.03 15.47a.75.75 0 1 0-1.06 1.06l.47.47-.47.47a.75.75 0 1 0 1.06 1.06l1-1a.75.75 0 0 0 0-1.06l-1-1Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9.944 2.25h4.112a354.197 354.197 0 0 1 .982.001c1.384.004 2.523.027 3.451.152 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v2.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-.928.125-2.067.148-3.45.152a.698.698 0 0 1-.073 0l-.905.001H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153Zm4.306 1.5v16.5H10c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812-.423-.423-.677-1.003-.812-2.009-.138-1.027-.14-2.382-.14-4.289v-2c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14h4.25Zm4.04 16.36c-.682.092-1.506.123-2.54.134V3.756c1.034.01 1.858.042 2.54.134 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.138 1.028.14 2.382.14 4.289v2c0 1.907-.002 3.262-.14 4.29-.135 1.005-.389 1.585-.812 2.008-.423.423-1.003.677-2.009.812Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2 11c0-3.771 0-5.657 1.172-6.828C4.343 3 6.229 3 10 3h4.25v18H10c-3.771 0-5.657 0-6.828-1.172C2 18.657 2 16.771 2 13v-2Zm13.75 9.994V3.006c2.636.027 4.104.191 5.078 1.166C22 5.343 22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828-.974.975-2.442 1.139-5.078 1.166ZM9.97 15.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l.47-.47-.47-.47a.75.75 0 0 1 0-1.06Zm-.268-1.207a.75.75 0 1 0-1.404-.526l-1.5 4a.75.75 0 0 0 1.404.526l1.5-4ZM6.53 13.47a.75.75 0 0 1 0 1.06l-.47.47.47.47a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06l1-1a.75.75 0 0 1 1.06 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M3.172 4.172C2 5.343 2 7.229 2 11v2c0 3.771 0 5.657 1.172 6.828C4.343 21 6.229 21 10 21h5V3h-5C6.229 3 4.343 3 3.172 4.172Z" fill="currentColor" /><path d="M22 13v-2c0-3.771 0-5.657-1.172-6.828-.974-.975-3.192-1.139-5.828-1.166v17.988c2.636-.027 4.854-.191 5.828-1.166C22 18.657 22 16.771 22 13ZM9.263 13.298a.75.75 0 0 1 .44.965l-1.5 4a.75.75 0 0 1-1.405-.526l1.5-4a.75.75 0 0 1 .965-.44ZM6.53 13.47a.75.75 0 0 1 0 1.06l-.47.47.47.47a.75.75 0 0 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06l1-1a.75.75 0 0 1 1.06 0ZM9.97 15.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l.47-.47-.47-.47a.75.75 0 0 1 0-1.06Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default SidebarCode