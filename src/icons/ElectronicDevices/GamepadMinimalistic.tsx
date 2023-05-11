import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const GamepadMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M8.5 11v3M7 12.5h3M2.623 15.118l-.543 2.259c-.381 1.587.633 3.175 2.264 3.546 1.376.312 2.791-.342 3.413-1.576l.128-.255c.57-1.133 1.754-1.852 3.051-1.852h2.128c1.297 0 2.48.719 3.051 1.852l.128.255c.622 1.234 2.037 1.888 3.413 1.575 1.631-.37 2.645-1.958 2.264-3.545l-1.085-4.517c-.613-2.553-.92-3.83-1.79-4.666-.22-.212-.463-.4-.725-.56C17.284 7 15.937 7 13.243 7h-2.486c-2.694 0-4.041 0-5.077.634-.262.16-.505.348-.725.56-.627.603-.961 1.434-1.328 2.806M12 7V6a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V3" /><path fill="currentColor" d="M16 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M8.5 11v3M7 12.5h3" opacity={0.5} /><path stroke="currentColor" strokeWidth={1.5} d="m21.92 17.377-1.085-4.517c-.613-2.553-.92-3.83-1.79-4.666-.22-.212-.463-.4-.725-.56C17.284 7 15.937 7 13.243 7h-2.486c-2.694 0-4.041 0-5.077.634-.262.16-.505.348-.725.56-.87.837-1.177 2.113-1.79 4.666L2.08 17.377c-.381 1.587.633 3.175 2.264 3.546 1.376.312 2.791-.342 3.413-1.576l.128-.255c.57-1.133 1.754-1.852 3.051-1.852h2.128c1.297 0 2.48.719 3.051 1.852l.128.255c.622 1.234 2.037 1.888 3.413 1.575 1.631-.37 2.645-1.958 2.264-3.545Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 7V6a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V3" opacity={0.5} /><g fill="currentColor" opacity={0.5}><path d="M16 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /></g></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M8.5 11v3M7 12.5h3" /><path stroke="currentColor" strokeWidth={1.5} d="m21.92 17.377-1.085-4.517c-.613-2.553-.92-3.83-1.79-4.666-.22-.212-.463-.4-.725-.56C17.284 7 15.937 7 13.243 7h-2.486c-2.694 0-4.041 0-5.077.634-.262.16-.505.348-.725.56-.87.837-1.177 2.113-1.79 4.666L2.08 17.377c-.381 1.587.633 3.175 2.264 3.546 1.376.312 2.791-.342 3.413-1.576l.128-.255c.57-1.133 1.754-1.852 3.051-1.852h2.128c1.297 0 2.48.719 3.051 1.852l.128.255c.622 1.234 2.037 1.888 3.413 1.575 1.631-.37 2.645-1.958 2.264-3.545Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 7V6a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V3" /><path fill="currentColor" d="M16 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M15 2.25a.75.75 0 0 1 .75.75v1A1.75 1.75 0 0 1 14 5.75h-1a.25.25 0 0 0-.25.25v.25h.533c1.313 0 2.354 0 3.194.083.863.085 1.583.262 2.234.66.309.19.595.41.854.66.55.53.895 1.178 1.179 1.981.275.78.512 1.768.81 3.01l1.095 4.557c.483 2.011-.805 3.994-2.827 4.453-1.702.386-3.468-.419-4.248-1.97l-.129-.255c-.44-.873-1.36-1.44-2.381-1.44h-2.128c-1.021 0-1.942.567-2.381 1.44l-.128.255c-.781 1.551-2.547 2.356-4.249 1.97-2.022-.46-3.31-2.442-2.827-4.453l1.095-4.556c.298-1.242.536-2.231.81-3.01.284-.804.628-1.452 1.179-1.982.26-.25.546-.47.854-.66.651-.398 1.372-.575 2.234-.66.84-.083 1.88-.083 3.194-.083h.533V6c0-.966.784-1.75 1.75-1.75h1a.25.25 0 0 0 .25-.25V3a.75.75 0 0 1 .75-.75Zm-4.243 5.5c-1.362 0-2.329 0-3.087.076-.743.073-1.214.212-1.598.447a3.478 3.478 0 0 0-.597.461c-.32.308-.563.717-.804 1.4-.246.697-.466 1.61-.777 2.902L2.81 17.552c-.28 1.164.46 2.357 1.7 2.64 1.05.238 2.115-.265 2.577-1.183l.128-.254c.701-1.394 2.149-2.265 3.721-2.265h2.128c1.572 0 3.02.871 3.721 2.265l.128.254c.462.918 1.527 1.42 2.577 1.182 1.241-.282 1.98-1.475 1.7-2.64l-1.084-4.515c-.31-1.292-.53-2.205-.777-2.903-.24-.682-.484-1.091-.804-1.399a3.476 3.476 0 0 0-.597-.46c-.384-.236-.855-.375-1.598-.448-.758-.075-1.725-.076-3.087-.076h-2.486ZM8.5 10.25a.75.75 0 0 1 .75.75v.75H10a.75.75 0 0 1 0 1.5h-.75V14a.75.75 0 0 1-1.5 0v-.75H7a.75.75 0 0 1 0-1.5h.75V11a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /><path fill="currentColor" d="M16 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M15 3.25a.75.75 0 0 1 .75.75v1A1.75 1.75 0 0 1 14 6.75h-1a.25.25 0 0 0-.25.25v1h.422c2.54 0 3.809 0 4.785.614.247.155.476.337.683.542.82.81 1.11 2.047 1.687 4.52l1.023 4.373A2.858 2.858 0 0 1 16 19.957l-.12-.246a3.203 3.203 0 0 0-2.877-1.794h-2.005a3.203 3.203 0 0 0-2.876 1.794l-.12.246a2.858 2.858 0 0 1-5.35-1.908l1.022-4.374c.578-2.472.867-3.708 1.686-4.519a4 4 0 0 1 .684-.542C7.02 8 8.29 8 10.83 8h.421V7c0-.966.784-1.75 1.75-1.75h1a.25.25 0 0 0 .25-.25V4a.75.75 0 0 1 .75-.75ZM16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-7.5-.75a.75.75 0 0 1 .75.75v.75H10a.75.75 0 0 1 0 1.5h-.75V15a.75.75 0 0 1-1.5 0v-.75H7a.75.75 0 0 1 0-1.5h.75V12a.75.75 0 0 1 .75-.75ZM17 15.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M13.172 8c2.539 0 3.808 0 4.784.614.247.155.477.337.684.542.82.81 1.109 2.047 1.687 4.52l1.022 4.373A2.858 2.858 0 0 1 16 19.957l-.12-.246a3.203 3.203 0 0 0-2.877-1.794h-2.004A3.203 3.203 0 0 0 8.12 19.71l-.12.246a2.858 2.858 0 0 1-5.35-1.908l1.022-4.374c.578-2.472.867-3.708 1.687-4.519a4 4 0 0 1 .684-.542C7.02 8 8.289 8 10.828 8h2.344Z" opacity={0.5} /><path fill="currentColor" d="M9.25 12a.75.75 0 0 0-1.5 0v.75H7a.75.75 0 0 0 0 1.5h.75V15a.75.75 0 0 0 1.5 0v-.75H10a.75.75 0 0 0 0-1.5h-.75V12ZM15 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM15.75 4a.75.75 0 0 0-1.5 0v1a.25.25 0 0 1-.25.25h-1A1.75 1.75 0 0 0 11.25 7v1h1.5V7a.25.25 0 0 1 .25-.25h1A1.75 1.75 0 0 0 15.75 5V4Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default GamepadMinimalistic