import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const BatteryFull = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M7 9s.5.9.5 3-.5 3-.5 3M10.5 9s.5.9.5 3-.5 3-.5 3M14 9s.5.9.5 3-.5 3-.5 3" /><path stroke="currentColor" strokeWidth={1.5} d="M20 10c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707 0 .943 0 1.414-.293 1.707C21.414 14 20.943 14 20 14v-4Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172C19.5 6.343 19.5 8.229 19.5 12c0 3.771 0 5.657-1.172 6.828C17.157 20 15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172-.654-.653-.943-1.528-1.07-2.828" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172C19.5 6.343 19.5 8.229 19.5 12c0 3.771 0 5.657-1.172 6.828C17.157 20 15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M7 9s.5.9.5 3-.5 3-.5 3" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10.5 9s.5.9.5 3-.5 3-.5 3" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M14 9s.5.9.5 3-.5 3-.5 3" /><path stroke="currentColor" strokeWidth={1.5} d="M20 10c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707 0 .943 0 1.414-.293 1.707C21.414 14 20.943 14 20 14v-4Z" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172C19.5 6.343 19.5 8.229 19.5 12c0 3.771 0 5.657-1.172 6.828C17.157 20 15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M7 9s.5.9.5 3-.5 3-.5 3M10.5 9s.5.9.5 3-.5 3-.5 3M14 9s.5.9.5 3-.5 3-.5 3" /><path stroke="currentColor" strokeWidth={1.5} d="M20 10c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707 0 .943 0 1.414-.293 1.707C21.414 14 20.943 14 20 14v-4Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6.636 8.344a.75.75 0 0 1 1.02.292L7 9c.656-.364.655-.365.656-.364v.001l.001.001.002.004.004.007.01.018.026.053a5.152 5.152 0 0 1 .278.806c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a2.972 2.972 0 0 1-.102.228l-.01.018-.003.007-.002.003v.002S7.655 15.364 7 15l.656.364a.75.75 0 0 1-1.317-.719l.005-.01c.007-.015.02-.043.038-.087.035-.087.087-.235.142-.447.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a3.669 3.669 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01ZM11.156 8.636a.75.75 0 0 0-1.317.719l.005.01c.007.015.02.043.038.087.035.087.087.235.142.447.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a3.667 3.667 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15c.656.364.655.365.656.364v-.001l.001-.002.002-.003.004-.007.01-.018.026-.053a5.173 5.173 0 0 0 .278-.806c.14-.551.273-1.364.273-2.474s-.132-1.923-.274-2.474a5.17 5.17 0 0 0-.202-.631 2.971 2.971 0 0 0-.102-.228l-.01-.018-.003-.007-.002-.004c0-.001-.001-.002-.657.362l.656-.364ZM13.636 8.344a.75.75 0 0 1 1.02.292L14 9c.656-.364.655-.365.656-.364v.001l.001.001.002.004.004.007.01.018.026.053a5.17 5.17 0 0 1 .278.806c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a2.947 2.947 0 0 1-.102.228l-.01.018-.003.007-.002.003v.002s-.001.001-.657-.363l.656.364a.75.75 0 0 1-1.317-.719l.005-.01c.007-.015.02-.043.038-.087a3.66 3.66 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a3.661 3.661 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01Z" /><path fill="currentColor" fillRule="evenodd" d="M9.944 3.25h1.612c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.069.513.107 1.091.128 1.74.362 0 .695.005.972.042.356.048.731.16 1.04.47.31.309.422.684.47 1.04.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152-.048.356-.16.731-.47 1.04-.309.31-.684.422-1.04.47-.277.037-.61.042-.972.043-.021.648-.06 1.226-.128 1.739-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153ZM5.71 4.89c-1.006.135-1.586.389-2.01.812-.422.423-.676 1.003-.811 2.009-.138 1.028-.14 2.382-.14 4.289 0 1.907.002 3.261.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h1.5c1.907 0 3.261-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.028.14-2.382.14-4.289 0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812-1.027-.138-2.382-.14-4.289-.14H10c-1.907 0-3.261.002-4.29.14Zm15.039 8.35v-2.48c.095.004.176.01.247.02a.702.702 0 0 1 .177.042l.003.001.001.003a.702.702 0 0 1 .042.177c.028.21.03.504.03.997s-.002.787-.03.997a.702.702 0 0 1-.042.177l-.001.003-.003.001a.702.702 0 0 1-.177.042c-.071.01-.152.016-.247.02Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172.944.943 1.127 2.348 1.163 4.828H20c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707 0 .943 0 1.414-.293 1.707C21.414 14 20.943 14 20 14h-.509c-.036 2.48-.22 3.885-1.163 4.828C17.157 20 15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Zm4.636-3.656a.75.75 0 0 1 1.02.292L7 9l.656-.363.001.001.002.004.004.007.01.018.026.053a5.152 5.152 0 0 1 .278.806c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a2.972 2.972 0 0 1-.102.228l-.01.018-.003.007-.002.003v.002l-.001.001L7 15l.656.364a.75.75 0 0 1-1.317-.719l.005-.01c.007-.015.02-.043.038-.087.035-.087.087-.235.142-.447.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a3.669 3.669 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01Zm4.52.292a.75.75 0 0 0-1.317.719l.005.01c.007.015.02.043.038.087.035.087.087.235.142.447.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a3.667 3.667 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15l.656.363.001-.002.002-.003.004-.007.01-.018.026-.053a5.173 5.173 0 0 0 .278-.806c.14-.551.273-1.364.273-2.474s-.132-1.923-.274-2.474a5.17 5.17 0 0 0-.202-.631 2.971 2.971 0 0 0-.102-.228l-.01-.018-.003-.007-.002-.004-.001-.002ZM10.5 9c.65-.361.655-.365.656-.364L10.5 9Zm3.136-.656a.75.75 0 0 1 1.02.292L14 9l.656-.363.001.001.002.004.004.007.01.018.026.053a5.17 5.17 0 0 1 .278.806c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a2.947 2.947 0 0 1-.102.228l-.01.018-.003.007-.002.003v.002l-.001.001-.654-.363c.648.36.653.364.654.363a.75.75 0 0 1-1.317-.719l.005-.01c.007-.015.02-.043.038-.087a3.66 3.66 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a3.661 3.661 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172C19.5 17.657 19.5 15.771 19.5 12c0-3.771 0-5.657-1.172-6.828C17.157 4 15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172Z" opacity={0.5} /><path fill="currentColor" d="M19.491 14c.009-.6.009-1.264.009-2s0-1.4-.009-2H20c.942 0 1.414 0 1.707.293.293.293.293.764.293 1.707 0 .943 0 1.414-.293 1.707C21.414 14 20.942 14 20 14h-.509ZM6.636 8.345a.75.75 0 0 1 1.02.29L7 9l.656-.363.001.002.002.003.004.007.01.018.026.053c.02.043.046.101.076.175.058.147.131.356.202.631.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474a5.15 5.15 0 0 1-.202.631 2.98 2.98 0 0 1-.103.228l-.01.018-.003.008-.002.003v.001l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01c.007-.014.02-.043.038-.087.035-.087.087-.234.142-.447.108-.424.226-1.111.226-2.1 0-.99-.118-1.678-.226-2.102a3.667 3.667 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01ZM11.156 8.636a.75.75 0 0 0-1.317.72l.005.01c.007.014.02.042.038.086.035.087.087.235.142.447.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a3.671 3.671 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15l.656.363.001-.001.002-.003.004-.008.01-.018.026-.053c.02-.043.046-.101.076-.175.059-.147.131-.356.202-.631.14-.551.273-1.364.273-2.474s-.132-1.923-.273-2.474a5.135 5.135 0 0 0-.202-.631 2.981 2.981 0 0 0-.103-.228l-.01-.018-.003-.007-.002-.003v-.002l-.001-.001ZM13.636 8.345a.75.75 0 0 1 1.02.29L14 9l.656-.363.001.002.002.003.004.007.01.018.026.053c.02.043.046.101.076.175.059.147.131.356.202.631.14.551.273 1.364.273 2.474s-.132 1.923-.273 2.474c-.07.275-.143.484-.202.631a2.957 2.957 0 0 1-.103.228l-.01.018-.003.008-.002.003v.001l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01c.007-.014.02-.043.038-.087.035-.087.087-.234.142-.447.108-.424.226-1.111.226-2.1 0-.99-.118-1.678-.226-2.102a3.661 3.661 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default BatteryFull