import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Route = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g clipPath="url(#prefix__a)"><path d="M19.071 4.929c3.333 3.333 5 5 5 7.07 0 2.072-1.667 3.739-5 7.072s-5 5-7.071 5c-2.071 0-3.738-1.667-7.071-5-3.333-3.334-5-5-5-7.071 0-2.071 1.667-3.738 5-7.071 3.333-3.334 5-5 7.071-5 1.377 0 2.575.737 4.204 2.21" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m16 11.5.513.547a.75.75 0 0 0 0-1.094L16 11.5Zm-2.154-3.047a.75.75 0 1 0-1.026 1.094l1.026-1.094Zm-1.026 5a.75.75 0 0 0 1.026 1.094l-1.026-1.094ZM10.667 11.5v.75-.75ZM7.25 14a.75.75 0 0 0 1.5 0h-1.5Zm9.263-3.047-2.667-2.5-1.026 1.094 2.667 2.5 1.026-1.094Zm-1.026 0-2.667 2.5 1.026 1.094 2.667-2.5-1.026-1.094Zm-4.82 1.297H16v-1.5h-5.333v1.5Zm0-1.5c-.555 0-1.378.15-2.087.628-.748.505-1.33 1.357-1.33 2.622h1.5c0-.735.307-1.133.67-1.378a2.373 2.373 0 0 1 1.247-.372v-1.5Z" fill="currentColor" /></g><defs><clipPath id="prefix__a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M6.142 6.142C8.904 3.381 10.284 2 12 2c1.716 0 3.096 1.38 5.858 4.142C20.619 8.904 22 10.284 22 12c0 1.716-1.38 3.096-4.142 5.858C15.096 20.619 13.716 22 12 22c-1.716 0-3.096-1.38-5.858-4.142C3.381 15.096 2 13.716 2 12c0-1.716 1.38-3.096 4.142-5.858Z" stroke="currentColor" strokeWidth={1.5} /><path d="M8.25 14a.75.75 0 0 0 1.5 0h-1.5ZM15 12l.53.53a.75.75 0 0 0 0-1.06L15 12Zm-1.47-2.53a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 4a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM11 12.75h4v-1.5h-4v1.5Zm4.53-1.28-2-2-1.06 1.06 2 2 1.06-1.06Zm-1.06 0-2 2 1.06 1.06 2-2-1.06-1.06ZM9.75 14c0-.493.002-.787.03-.997a.705.705 0 0 1 .042-.177l.001-.003-1.06-1.06c-.31.309-.422.684-.47 1.04-.045.334-.043.747-.043 1.197h1.5ZM11 11.25c-.45 0-.863-.002-1.197.043-.356.048-.731.16-1.04.47l1.06 1.06.003-.001a.704.704 0 0 1 .177-.042c.21-.028.504-.03.997-.03v-1.5Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.142 6.142C8.904 3.381 10.284 2 12 2c1.716 0 3.096 1.38 5.858 4.142C20.619 8.904 22 10.284 22 12c0 1.716-1.38 3.096-4.142 5.858C15.096 20.619 13.716 22 12 22c-1.716 0-3.096-1.38-5.858-4.142C3.381 15.096 2 13.716 2 12c0-1.716 1.38-3.096 4.142-5.858Z" stroke="currentColor" strokeWidth={1.5} /><path d="m16 11.5.513.547a.75.75 0 0 0 0-1.094L16 11.5Zm-2.154-3.047a.75.75 0 1 0-1.026 1.094l1.026-1.094Zm-1.026 5a.75.75 0 0 0 1.026 1.094l-1.026-1.094ZM10.667 11.5v.75-.75ZM7.25 14a.75.75 0 0 0 1.5 0h-1.5Zm9.263-3.047-2.667-2.5-1.026 1.094 2.667 2.5 1.026-1.094Zm-1.026 0-2.667 2.5 1.026 1.094 2.667-2.5-1.026-1.094Zm-4.82 1.297H16v-1.5h-5.333v1.5Zm0-1.5c-.555 0-1.378.15-2.087.628-.748.505-1.33 1.357-1.33 2.622h1.5c0-.735.307-1.133.67-1.378a2.373 2.373 0 0 1 1.247-.372v-1.5Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.918 3.632c-.855.652-1.85 1.645-3.246 3.04-1.395 1.396-2.388 2.39-3.04 3.246-.64.838-.882 1.454-.882 2.082 0 .628.242 1.244.882 2.082.652.855 1.645 1.85 3.04 3.245 1.396 1.396 2.39 2.388 3.246 3.041.838.64 1.454.882 2.082.882.628 0 1.244-.242 2.082-.882.855-.652 1.85-1.645 3.245-3.04 1.396-1.396 2.388-2.39 3.041-3.246.64-.838.882-1.454.882-2.082 0-.628-.242-1.244-.882-2.082-.652-.855-1.645-1.85-3.04-3.246-1.396-1.395-2.39-2.388-3.246-3.04-.838-.64-1.454-.882-2.082-.882-.628 0-1.244.242-2.082.882Zm-.91-1.193C9.98 1.698 10.912 1.25 12 1.25s2.02.448 2.992 1.19c.945.72 2.01 1.785 3.356 3.132l.08.08c1.347 1.347 2.412 2.411 3.133 3.356.741.972 1.189 1.904 1.189 2.992s-.448 2.02-1.19 2.992c-.72.945-1.785 2.01-3.132 3.356l-.08.08c-1.347 1.347-2.411 2.412-3.356 3.133-.972.741-1.904 1.189-2.992 1.189s-2.02-.448-2.992-1.19c-.945-.72-2.01-1.785-3.356-3.132l-.08-.08c-1.347-1.347-2.412-2.411-3.133-3.356C1.698 14.02 1.25 13.088 1.25 12s.448-2.02 1.19-2.992c.72-.945 1.785-2.01 3.132-3.356l.08-.08C6.999 4.225 8.063 3.16 9.008 2.439Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.786 8.487a.75.75 0 0 1 1.06-.034l2.667 2.5a.75.75 0 0 1 0 1.094l-2.667 2.5a.75.75 0 0 1-1.026-1.094l1.283-1.203h-3.436c-.334 0-.845.1-1.247.372-.363.245-.67.643-.67 1.378a.75.75 0 0 1-1.5 0c0-1.265.582-2.117 1.33-2.622.709-.478 1.532-.628 2.087-.628h3.436L12.82 9.547a.75.75 0 0 1-.034-1.06Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.142 6.142C8.904 3.381 10.284 2 12 2c1.716 0 3.096 1.38 5.858 4.142C20.619 8.904 22 10.284 22 12c0 1.716-1.38 3.096-4.142 5.858C15.096 20.619 13.716 22 12 22c-1.716 0-3.096-1.38-5.858-4.142C3.381 15.096 2 13.716 2 12c0-1.716 1.38-3.096 4.142-5.858Zm7.704 2.31a.75.75 0 1 0-1.026 1.095l1.283 1.203h-3.436c-.555 0-1.378.15-2.087.628-.748.505-1.33 1.357-1.33 2.622a.75.75 0 0 0 1.5 0c0-.735.307-1.133.67-1.378a2.373 2.373 0 0 1 1.247-.372h3.436l-1.283 1.203a.75.75 0 0 0 1.026 1.094l2.667-2.5a.75.75 0 0 0 0-1.094l-2.667-2.5Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M12 2c-1.716 0-3.096 1.38-5.858 4.142C3.381 8.904 2 10.284 2 12c0 1.716 1.38 3.096 4.142 5.858C8.904 20.619 10.284 22 12 22c1.716 0 3.096-1.38 5.858-4.142C20.619 15.096 22 13.716 22 12c0-1.716-1.38-3.096-4.142-5.858C15.096 3.381 13.716 2 12 2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.786 8.487a.75.75 0 0 1 1.06-.034l2.667 2.5a.75.75 0 0 1 0 1.094l-2.667 2.5a.75.75 0 0 1-1.026-1.094l1.283-1.203h-3.436c-.334 0-.845.1-1.247.372-.363.245-.67.643-.67 1.378a.75.75 0 0 1-1.5 0c0-1.265.582-2.117 1.33-2.622.709-.478 1.532-.628 2.087-.628h3.436L12.82 9.547a.75.75 0 0 1-.034-1.06Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Route