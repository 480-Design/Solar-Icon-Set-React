import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const PointOnMapPerspective = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 16c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16c0-2.828 0-4.243-.879-5.121C20.243 10 18.828 10 16 10H8c-2.828 0-4.243 0-5.121.879-.3.3-.498.662-.628 1.121M21 21l-3.764-2.091M3 11l11 6.111" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m3.5 21 6.358-3.74L12 16M17 13V8M16.5 2.041A3 3 0 1 1 14.041 4.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M21 21 3 11m.5 10 8.5-5M17 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 0v5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M21.121 21.121C22 20.243 22 18.828 22 16c0-2.828 0-4.243-.879-5.121m0 10.242C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879m18.242 0Zm0-10.242C20.243 10 18.828 10 16 10H8c-2.828 0-4.243 0-5.121.879m18.242 0Zm-18.242 0C2 11.757 2 13.172 2 16c0 2.828 0 4.243.879 5.121m0-10.242Zm0 10.242Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21.121 21.121C22 20.243 22 18.828 22 16c0-2.828 0-4.243-.879-5.121m0 10.242C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879m18.242 0Zm0-10.242C20.243 10 18.828 10 16 10H8c-2.828 0-4.243 0-5.121.879m18.242 0Zm-18.242 0C2 11.757 2 13.172 2 16c0 2.828 0 4.243.879 5.121m0-10.242Zm0 10.242Z" stroke="currentColor" strokeWidth={1.5} /><path d="M21 21 3 11M3.5 21l8.5-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={17} cy={5} r={3} stroke="currentColor" strokeWidth={1.5} /><path d="M17 13V8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17 2.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM13.25 5a3.75 3.75 0 1 1 4.5 3.675v.586a14.96 14.96 0 0 1 1.642.106c.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v.11c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-8.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337v-.11c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117h8.305v-.575a3.751 3.751 0 0 1-3-3.675Zm3 5.75H8c-1.435 0-2.437.002-3.192.103-.147.02-.281.043-.403.07l7.948 4.415a.764.764 0 0 1 .024.013l8.544 4.747c.1-.229.174-.52.226-.906.101-.756.103-1.757.103-3.192 0-1.435-.002-2.437-.103-3.192-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.4-.556-.4-.054-.872-.08-1.441-.092V13a.75.75 0 0 1-1.5 0v-2.25Zm3.345 10.327-7.584-4.213-7.266 4.274.063.009c.755.101 1.757.103 3.192.103h8c1.435 0 2.436-.002 3.192-.103.148-.02.281-.043.403-.07ZM3.19 20.312l7.3-4.293-7.41-4.117c-.1.229-.175.52-.227.906-.101.755-.103 1.757-.103 3.192 0 1.435.002 2.436.103 3.192.07.518.18.864.337 1.12Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 2a3 3 0 0 0-.75 5.905V13a.75.75 0 0 0 1.5 0V7.905A3.001 3.001 0 0 0 17 2ZM8 22h8c2.482 0 3.875 0 4.773-.594l-8.514-4.683-8.043 5.08C5.087 22 6.283 22 8 22ZM10.758 15.898 2.51 11.362C2 12.263 2 13.64 2 16c0 2.666 0 4.075.736 4.964l8.022-5.066Z" fill="currentColor" /><path d="M22 16c0-2.828 0-4.243-.879-5.121-.49-.49-1.146-.707-2.121-.803V13a2 2 0 1 1-4 0v-3H8c-2.045 0-3.35 0-4.25.332l17.937 9.865C22 19.3 22 18.006 22 16Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22 16c0-2.828 0-4.243-.879-5.121-.49-.49-1.146-.707-2.12-.803-.834-.025-2.8-.076-4-.076H8c-2.046 0-3.351 0-4.25.332l17.936 9.865C22 19.3 22 18.006 22 16Z" fill="currentColor" /><path d="M10.758 15.898 2.51 11.362C2 12.264 2 13.64 2 16c0 2.666 0 4.075.736 4.964l8.022-5.066ZM8 22h8c2.482 0 3.875 0 4.773-.594l-8.514-4.682-8.043 5.08C5.087 22 6.283 22 8 22ZM17 2a3 3 0 0 0-.75 5.905V13a.75.75 0 0 0 1.5 0V7.905A3.001 3.001 0 0 0 17 2Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default PointOnMapPerspective