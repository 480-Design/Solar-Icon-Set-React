import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const GalleryFavourite = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12c0-1.128 0-2.122.02-3M12 2C7.286 2 4.929 2 3.464 3.464c-.424.425-.726.925-.94 1.536" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m2 12.5 1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" /><path fill="currentColor" d="m16.06 8.57.492-.566-.492.566ZM18 3.968l-.532.529a.75.75 0 0 0 1.064 0L18 3.967Zm1.94 4.602-.492-.566.492.566ZM18 9.606v-.75.75Zm-1.448-1.602c-.486-.422-.952-.895-1.292-1.374-.347-.49-.51-.914-.51-1.255h-1.5c0 .788.358 1.518.786 2.122.435.614.999 1.175 1.533 1.639l.983-1.132ZM14.75 5.375c0-.933.42-1.404.834-1.557.426-.156 1.13-.08 1.884.679l1.064-1.058c-1.045-1.05-2.342-1.442-3.466-1.028-1.136.418-1.816 1.555-1.816 2.964h1.5Zm5.681 3.761c.534-.464 1.098-1.025 1.533-1.639.428-.604.786-1.334.786-2.122h-1.5c0 .341-.163.765-.51 1.255-.34.48-.806.952-1.292 1.374l.983 1.132Zm2.319-3.76c0-1.41-.68-2.547-1.816-2.965-1.124-.414-2.42-.023-3.466 1.028l1.064 1.058c.755-.76 1.458-.835 1.884-.679.414.153.834.624.834 1.557h1.5Zm-7.181 3.76c.756.658 1.36 1.22 2.431 1.22v-1.5c-.424 0-.615-.129-1.448-.852l-.983 1.132Zm3.879-1.132c-.833.723-1.024.852-1.448.852v1.5c1.071 0 1.675-.562 2.431-1.22l-.983-1.132Z" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m2 12.5 1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" opacity={0.5} /><path fill="currentColor" d="m16.06 8.57.492-.566-.492.566ZM18 3.968l-.532.529a.75.75 0 0 0 1.064 0L18 3.967Zm1.94 4.602-.492-.566.492.566ZM18 9.606v-.75.75Zm-1.448-1.602c-.486-.422-.952-.895-1.292-1.374-.347-.49-.51-.914-.51-1.255h-1.5c0 .788.358 1.518.786 2.122.435.614.999 1.175 1.533 1.639l.983-1.132ZM14.75 5.375c0-.933.42-1.404.834-1.557.426-.156 1.13-.08 1.884.679l1.064-1.058c-1.045-1.05-2.342-1.442-3.466-1.028-1.136.418-1.816 1.555-1.816 2.964h1.5Zm5.681 3.761c.534-.464 1.098-1.025 1.533-1.639.428-.604.786-1.334.786-2.122h-1.5c0 .341-.163.765-.51 1.255-.34.48-.806.952-1.292 1.374l.983 1.132Zm2.319-3.76c0-1.41-.68-2.547-1.816-2.965-1.124-.414-2.42-.023-3.466 1.028l1.064 1.058c.755-.76 1.458-.835 1.884-.679.414.153.834.624.834 1.557h1.5Zm-7.181 3.76c.756.658 1.36 1.22 2.431 1.22v-1.5c-.424 0-.615-.129-1.448-.852l-.983 1.132Zm3.879-1.132c-.833.723-1.024.852-1.448.852v1.5c1.071 0 1.675-.562 2.431-1.22l-.983-1.132Z" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m2 12.5 1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5" /><path fill="currentColor" d="m16.06 8.57.492-.566-.492.566ZM18 3.968l-.532.529a.75.75 0 0 0 1.064 0L18 3.967Zm1.94 4.602-.492-.566.492.566ZM18 9.606v-.75.75Zm-1.448-1.602c-.486-.422-.952-.895-1.292-1.374-.347-.49-.51-.914-.51-1.255h-1.5c0 .788.358 1.518.786 2.122.435.614.999 1.175 1.533 1.639l.983-1.132ZM14.75 5.375c0-.933.42-1.404.834-1.557.426-.156 1.13-.08 1.884.679l1.064-1.058c-1.045-1.05-2.342-1.442-3.466-1.028-1.136.418-1.816 1.555-1.816 2.964h1.5Zm5.681 3.761c.534-.464 1.098-1.025 1.533-1.639.428-.604.786-1.334.786-2.122h-1.5c0 .341-.163.765-.51 1.255-.34.48-.806.952-1.292 1.374l.983 1.132Zm2.319-3.76c0-1.41-.68-2.547-1.816-2.965-1.124-.414-2.42-.023-3.466 1.028l1.064 1.058c.755-.76 1.458-.835 1.884-.679.414.153.834.624.834 1.557h1.5Zm-7.181 3.76c.756.658 1.36 1.22 2.431 1.22v-1.5c-.424 0-.615-.129-1.448-.852l-.983 1.132Zm3.879-1.132c-.833.723-1.024.852-1.448.852v1.5c1.071 0 1.675-.562 2.431-1.22l-.983-1.132Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12 1.25h-.057c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.548c0 2.094.013 3.777.19 5.095.194 1.445.6 2.585 1.494 3.48.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529V12a.75.75 0 0 0-1.5 0c0 2.378-.002 4.086-.176 5.386l-.022.152-2.774-2.497a3.75 3.75 0 0 0-4.665-.28l-.298.21a1.25 1.25 0 0 1-1.602-.14l-4.29-4.29a3.05 3.05 0 0 0-4.165-.138l-.507.444c.005-1.793.03-3.154.175-4.233.172-1.279.5-2.05 1.069-2.62.57-.569 1.34-.896 2.619-1.068 1.3-.174 3.008-.176 5.386-.176a.75.75 0 0 0 0-1.5Zm8.61 17.89a.755.755 0 0 1-.112-.082l-3.223-2.902a2.25 2.25 0 0 0-2.8-.168l-.297.21a2.75 2.75 0 0 1-3.526-.306l-4.29-4.29a1.55 1.55 0 0 0-2.117-.07L2.75 12.84c.003 1.949.023 3.405.176 4.546.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069a3.04 3.04 0 0 0 .604-.864Z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M22.75 5.375c0-1.409-.68-2.546-1.816-2.964-.94-.346-2-.13-2.934.566-.933-.695-1.994-.912-2.934-.566-1.136.418-1.816 1.555-1.816 2.964 0 .788.358 1.518.786 2.122.435.614.999 1.175 1.533 1.639l.084.074c.718.625 1.316 1.146 2.347 1.146 1.03 0 1.629-.521 2.347-1.146l.084-.074c.534-.464 1.098-1.025 1.533-1.639.428-.604.786-1.334.786-2.122Zm-2.334-1.557c-.426-.156-1.13-.08-1.884.679a.75.75 0 0 1-1.064 0c-.755-.76-1.458-.835-1.884-.679-.414.153-.834.624-.834 1.557 0 .341.163.765.51 1.255.34.48.806.952 1.292 1.374.833.723 1.024.852 1.448.852.424 0 .615-.129 1.448-.852.486-.422.952-.895 1.292-1.374.347-.49.51-.914.51-1.255 0-.933-.42-1.404-.834-1.557Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659C13 9.682 13 8.621 13 6.5c0-2.121 0-3.182.659-3.841C14.318 2 15.379 2 17.5 2c2.121 0 3.182 0 3.841.659C22 3.318 22 4.379 22 6.5c0 2.121 0 3.182-.659 3.841-.659.659-1.72.659-3.841.659Zm-1.455-2.784c-.765-.67-1.545-1.564-1.545-2.418 0-1.773 1.65-2.435 3-1.065 1.35-1.37 3-.708 3 1.065 0 .854-.78 1.747-1.545 2.418-.596.523-.894.784-1.455.784-.56 0-.859-.261-1.455-.784Z" clipRule="evenodd" /><path fill="currentColor" d="M21.904 16.441c.083-1.024.094-2.274.096-3.743a.697.697 0 1 0-1.396 0c-.001 1.477-.012 2.658-.091 3.63-.084 1.032-.242 1.763-.507 2.32l-2.633-2.37a2.79 2.79 0 0 0-3.471-.21l-.277.196a1.86 1.86 0 0 1-2.386-.207l-3.99-3.99a2.14 2.14 0 0 0-2.922-.097l-.931.814V12c0-2.212 0-3.801.163-5.01.16-1.19.464-1.907.994-2.437.53-.53 1.247-.834 2.436-.994 1.079-.145 2.458-.161 4.313-.163a.699.699 0 0 0 0-1.396c-1.829.002-3.33.02-4.499.177-1.343.18-2.404.557-3.236 1.39-.833.832-1.21 1.893-1.39 3.236C2 8.116 2 9.8 2 11.947V12c0 .49 0 .956.002 1.396.007 1.729.044 3.121.243 4.24.203 1.14.584 2.058 1.322 2.796.832.833 1.893 1.21 3.236 1.39C8.116 22 9.8 22 11.947 22h.106c2.148 0 3.83 0 5.144-.177 1.344-.18 2.404-.557 3.236-1.39a4.18 4.18 0 0 0 .73-.983c.445-.825.644-1.82.74-3.009Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M21.904 16.441c.083-1.024.094-2.274.096-3.743a.697.697 0 1 0-1.396 0c-.001 1.477-.012 2.658-.091 3.63-.084 1.032-.242 1.763-.507 2.32l-2.633-2.37a2.79 2.79 0 0 0-3.471-.21l-.277.196a1.86 1.86 0 0 1-2.386-.207l-3.99-3.99a2.14 2.14 0 0 0-2.922-.097l-.931.814V12c0-2.212 0-3.801.163-5.01.16-1.19.464-1.907.994-2.437.53-.53 1.247-.834 2.436-.994 1.079-.145 2.458-.161 4.313-.163a.699.699 0 0 0 0-1.396c-1.829.002-3.33.02-4.499.177-1.343.18-2.404.557-3.236 1.39-.833.832-1.21 1.893-1.39 3.236C2 8.116 2 9.8 2 11.947V12c0 .49 0 .956.002 1.396.007 1.729.044 3.121.243 4.24.203 1.14.584 2.058 1.322 2.796.832.833 1.893 1.21 3.236 1.39C8.116 22 9.8 22 11.947 22h.106c2.148 0 3.83 0 5.144-.177 1.344-.18 2.404-.557 3.236-1.39a4.18 4.18 0 0 0 .73-.983c.445-.825.644-1.82.74-3.009Z" opacity={0.5} /><path fill="currentColor" fillRule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659C13 9.682 13 8.621 13 6.5c0-2.121 0-3.182.659-3.841C14.318 2 15.379 2 17.5 2c2.121 0 3.182 0 3.841.659C22 3.318 22 4.379 22 6.5c0 2.121 0 3.182-.659 3.841-.659.659-1.72.659-3.841.659Zm-1.455-2.784c-.765-.67-1.545-1.564-1.545-2.418 0-1.773 1.65-2.435 3-1.065 1.35-1.37 3-.708 3 1.065 0 .854-.78 1.747-1.545 2.418-.596.523-.894.784-1.455.784-.56 0-.859-.261-1.455-.784Z" clipRule="evenodd" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default GalleryFavourite