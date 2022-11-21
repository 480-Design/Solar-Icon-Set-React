import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Atom = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.529 16.471C2.59 11.533.589 5.527 3.058 3.058 5.048 1.067 9.338 1.982 13.513 5m2.958 2.529c4.939 4.939 6.94 10.944 4.471 13.413-1.989 1.989-6.27 1.078-10.442-1.932M20.942 3.058c2.47 2.469.468 8.474-4.47 13.413-4.94 4.939-10.945 6.94-13.414 4.471-1.991-1.99-1.076-6.28 1.942-10.456A24.48 24.48 0 0 1 7.529 7.53C12.468 2.59 18.473.589 20.942 3.058Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20.942 3.058c2.47 2.469.468 8.474-4.47 13.413-4.94 4.939-10.945 6.94-13.414 4.471-2.47-2.47-.468-8.475 4.471-13.413C12.468 2.59 18.473.589 20.942 3.058Zm-17.884 0c-2.47 2.47-.468 8.475 4.47 13.413 4.94 4.939 10.945 6.94 13.414 4.471 2.47-2.469.468-8.474-4.471-13.413S5.527.589 3.058 3.058Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20.942 3.058c2.47 2.469.468 8.474-4.47 13.413-4.94 4.939-10.945 6.94-13.414 4.471-2.47-2.47-.468-8.475 4.471-13.413C12.468 2.59 18.473.589 20.942 3.058Zm-17.884 0c-2.47 2.47-.468 8.475 4.47 13.413 4.94 4.939 10.945 6.94 13.414 4.471 2.47-2.469.468-8.474-4.471-13.413S5.527.589 3.058 3.058Z" stroke="currentColor" strokeWidth={1.5} /><path d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.462 4.047c1.203.822 2.4 1.812 3.54 2.951a24.928 24.928 0 0 1 2.951 3.54c.701-1.377 1.123-2.682 1.253-3.813.165-1.427-.138-2.482-.794-3.137-.655-.656-1.71-.96-3.137-.794-1.131.13-2.436.552-3.813 1.253ZM20.869 12c1.005-1.765 1.645-3.524 1.828-5.103.195-1.69-.13-3.275-1.224-4.37-1.095-1.095-2.68-1.419-4.37-1.224-1.58.183-3.338.823-5.103 1.828-1.765-1.005-3.523-1.645-5.103-1.827-1.69-.195-3.275.128-4.37 1.223-1.094 1.095-1.418 2.68-1.223 4.37.182 1.58.822 3.338 1.828 5.103-1.006 1.765-1.646 3.523-1.828 5.103-.195 1.69.129 3.274 1.224 4.37 1.095 1.094 2.679 1.418 4.37 1.223 1.579-.182 3.337-.822 5.102-1.828 1.765 1.006 3.523 1.646 5.103 1.828 1.69.195 3.275-.129 4.37-1.224 1.095-1.095 1.418-2.679 1.223-4.37-.182-1.579-.822-3.337-1.827-5.102Zm-1.75 0a23 23 0 0 0-3.178-3.941A23 23 0 0 0 12 4.88 23 23 0 0 0 8.06 8.06a22.998 22.998 0 0 0-3.18 3.94 23.004 23.004 0 0 0 3.18 3.942A23 23 0 0 0 12 19.119a22.995 22.995 0 0 0 3.941-3.179A23 23 0 0 0 19.12 12Zm-5.657 7.953a24.937 24.937 0 0 0 3.54-2.952 24.937 24.937 0 0 0 2.951-3.54c.701 1.378 1.123 2.682 1.253 3.814.165 1.427-.138 2.481-.794 3.137-.656.655-1.71.959-3.137.794-1.131-.13-2.436-.552-3.813-1.253Zm-2.924 0A24.928 24.928 0 0 1 6.998 17a24.933 24.933 0 0 1-2.951-3.54c-.7 1.378-1.122 2.682-1.253 3.814-.164 1.427.139 2.481.794 3.137.656.655 1.71.958 3.137.794 1.132-.13 2.436-.552 3.813-1.253Zm-6.491-9.415a24.935 24.935 0 0 1 2.952-3.54 24.933 24.933 0 0 1 3.54-2.951C9.16 3.346 7.856 2.924 6.724 2.794c-1.427-.165-2.481.138-3.137.794-.655.655-.959 1.71-.794 3.137.13 1.131.552 2.436 1.253 3.813ZM12 10.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM8.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17.002 6.998a24.933 24.933 0 0 0-3.54-2.952c1.377-.7 2.682-1.122 3.813-1.253 1.427-.165 2.482.139 3.137.794.656.656.96 1.71.794 3.137-.13 1.132-.552 2.436-1.253 3.814a24.927 24.927 0 0 0-2.951-3.54Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M15.941 8.059a23.003 23.003 0 0 1 3.179 3.94 22.996 22.996 0 0 1-3.179 3.941 23 23 0 0 1-3.94 3.179 23 23 0 0 1-3.942-3.179A23.004 23.004 0 0 1 4.881 12 22.998 22.998 0 0 1 8.06 8.057 23 23 0 0 1 12 4.88a23 23 0 0 1 3.941 3.179ZM12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" fill="currentColor" /><path d="M13.462 19.953A24.937 24.937 0 0 0 17.002 17a24.932 24.932 0 0 0 2.951-3.54c.701 1.378 1.123 2.682 1.253 3.813.165 1.427-.138 2.482-.794 3.137-.655.656-1.71.96-3.137.794-1.131-.13-2.436-.551-3.813-1.252ZM6.999 17a24.929 24.929 0 0 0 3.54 2.953c-1.378.7-2.682 1.122-3.814 1.252-1.427.165-2.48-.138-3.136-.794-.656-.655-.96-1.71-.795-3.137.13-1.131.552-2.435 1.253-3.813A24.934 24.934 0 0 0 7 17.001ZM4.047 10.538A24.936 24.936 0 0 1 7 6.998a24.932 24.932 0 0 1 3.54-2.952c-1.378-.7-2.682-1.122-3.814-1.253-1.427-.164-2.481.139-3.137.794-.655.656-.959 1.71-.794 3.138.13 1.131.552 2.435 1.253 3.813Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.3} d="M16.471 16.471c4.939-4.939 6.94-10.944 4.471-13.413-2.469-2.47-8.474-.468-13.413 4.47-4.939 4.94-6.94 10.945-4.471 13.414 2.47 2.47 8.475.468 13.413-4.47Z" fill="currentColor" /><path opacity={0.3} d="M7.529 16.471C2.59 11.533.589 5.527 3.058 3.058c2.469-2.47 8.474-.468 13.413 4.47 4.939 4.94 6.94 10.945 4.471 13.414-2.47 2.47-8.475.468-13.413-4.47Z" fill="currentColor" /><path d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Atom