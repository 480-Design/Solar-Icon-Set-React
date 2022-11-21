import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const BatteryHalfMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 9s.5.9.5 3-.5 3-.5 3M10.5 9s.5.9.5 3-.5 3-.5 3M22 14v-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172C19.5 6.343 19.5 8.229 19.5 12c0 3.771 0 5.657-1.172 6.828C17.157 20 15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172-.654-.653-.943-1.528-1.07-2.828" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172C19.5 6.343 19.5 8.229 19.5 12c0 3.771 0 5.657-1.172 6.828C17.157 20 15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M7 9s.5.9.5 3-.5 3-.5 3M10.5 9s.5.9.5 3-.5 3-.5 3M22 14v-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172C19.5 6.343 19.5 8.229 19.5 12c0 3.771 0 5.657-1.172 6.828C17.157 20 15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M7 9s.5.9.5 3-.5 3-.5 3M10.5 9s.5.9.5 3-.5 3-.5 3M22 14v-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.656 8.636a.75.75 0 0 0-1.317.719l.005.01c.007.015.02.043.038.087.035.087.087.235.142.447.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a3.667 3.667 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L7 15c.656.364.655.365.656.364v-.001l.001-.002.002-.003.004-.007.01-.018a2.972 2.972 0 0 0 .102-.228c.058-.147.13-.356.202-.631.14-.551.273-1.364.273-2.474s-.132-1.923-.274-2.474a5.152 5.152 0 0 0-.202-.631 2.997 2.997 0 0 0-.102-.228l-.01-.018-.003-.007-.002-.004c0-.001-.001-.002-.657.362l.656-.364ZM10.136 8.344a.75.75 0 0 1 1.02.292L10.5 9c.656-.364.655-.365.656-.364v.001l.001.001.002.004.004.007.01.018.026.053a5.17 5.17 0 0 1 .278.806c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a2.947 2.947 0 0 1-.102.228l-.01.018-.003.007-.002.003v.002s-.001.001-.657-.363l.656.364a.75.75 0 0 1-1.317-.719l.005-.01c.007-.015.02-.043.038-.087.035-.087.087-.235.142-.447.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a3.669 3.669 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.556 3.25H9.944c-1.838 0-3.294 0-4.433.153-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87-.153 1.14-.153 2.595-.153 4.433v.112c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h1.612c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433v-.112c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-1.14-.153-2.595-.153-4.433-.153ZM3.702 5.702c.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14h1.5c1.907 0 3.261.002 4.29.14 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.138 1.028.14 2.382.14 4.289 0 1.907-.002 3.261-.14 4.29-.135 1.005-.389 1.585-.812 2.008-.423.423-1.003.677-2.009.812-1.027.138-2.382.14-4.289.14H10c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812-.423-.423-.677-1.003-.812-2.009-.138-1.028-.14-2.382-.14-4.289 0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008Z" fill="currentColor" /><path d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0v4Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172C19.5 17.657 19.5 15.771 19.5 12c0-3.771 0-5.657-1.172-6.828C17.157 4 15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172Zm4.484 3.464a.75.75 0 0 0-1.317.719l.005.01c.007.015.02.043.038.087.035.087.087.235.142.447.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a3.667 3.667 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L7 15l.656.363.001-.002.002-.003.004-.007.01-.018a2.972 2.972 0 0 0 .102-.228c.058-.147.13-.356.202-.631.14-.551.273-1.364.273-2.474s-.132-1.923-.274-2.474a5.152 5.152 0 0 0-.202-.631 2.997 2.997 0 0 0-.102-.228l-.01-.018-.003-.007-.002-.004-.001-.002ZM7 9c.65-.361.655-.365.656-.364L7 9Zm3.136-.656a.75.75 0 0 1 1.02.292L10.5 9l.656-.363.001.001.002.004.004.007.01.018.026.053a5.17 5.17 0 0 1 .278.806c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a2.947 2.947 0 0 1-.102.228l-.01.018-.003.007-.002.003v.002l-.001.001-.654-.363c.648.36.653.364.654.363a.75.75 0 0 1-1.317-.719l.005-.01c.007-.015.02-.043.038-.087.035-.087.087-.235.142-.447.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a3.669 3.669 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01Z" fill="currentColor" /><path d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0v4Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172C19.5 17.657 19.5 15.771 19.5 12c0-3.771 0-5.657-1.172-6.828C17.157 4 15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172Z" fill="currentColor" /><path d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0v4ZM6.636 8.345a.75.75 0 0 1 1.02.29L7 9l.656-.363.001.002.002.003.004.007.01.018.026.053c.02.043.046.101.076.175.058.147.131.356.202.631.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474a5.15 5.15 0 0 1-.202.631 2.98 2.98 0 0 1-.103.228l-.01.018-.003.008-.002.003v.001l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01c.007-.014.02-.043.038-.087.035-.087.087-.234.142-.447.108-.424.226-1.111.226-2.1 0-.99-.118-1.678-.226-2.102a3.667 3.667 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01ZM11.156 8.636a.75.75 0 0 0-1.317.72l.005.01c.007.014.02.042.038.086.035.087.087.235.142.447.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a3.671 3.671 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15l.656.363.001-.001.002-.003.004-.008.01-.018.026-.053c.02-.043.046-.101.076-.175.059-.147.131-.356.202-.631.14-.551.273-1.364.273-2.474s-.132-1.923-.273-2.474a5.135 5.135 0 0 0-.202-.631 2.981 2.981 0 0 0-.103-.228l-.01-.018-.003-.007-.002-.003v-.002l-.001-.001Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default BatteryHalfMinimalistic