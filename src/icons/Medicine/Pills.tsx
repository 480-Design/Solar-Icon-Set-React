import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Pills = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17.845 6.155s-.433 2.245-2.94 4.751c-2.505 2.506-4.75 2.938-4.75 2.938m11.628-2.806a5.413 5.413 0 0 0-1.376-2.32l-5.126-5.126a5.437 5.437 0 1 0-7.689 7.69l5.127 5.125A5.437 5.437 0 0 0 21.425 15M14.5 6.5 13 5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M6.888 10.868a.75.75 0 1 0-.316-1.466l.316 1.466Zm-1.075 9.906a.75.75 0 1 0-.626 1.364l.626-1.364Zm-3.95-1.96a.75.75 0 1 0 1.363-.627l-1.364.626ZM2.75 16a5.252 5.252 0 0 1 4.138-5.132l-.316-1.466A6.752 6.752 0 0 0 1.25 16h1.5Zm10.389 1.08A5.252 5.252 0 0 1 8 21.25v1.5c3.253 0 5.968-2.3 6.607-5.364l-1.468-.306ZM8 21.25c-.782 0-1.522-.17-2.187-.476l-.626 1.364c.857.393 1.81.612 2.813.612v-1.5Zm-4.774-3.063A5.228 5.228 0 0 1 2.75 16h-1.5c0 1.003.219 1.956.612 2.813l1.364-.626Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17.845 6.155s-.433 2.245-2.94 4.751c-2.505 2.506-4.75 2.938-4.75 2.938m10.252 2.563a5.437 5.437 0 0 1-7.688 0l-5.127-5.126a5.437 5.437 0 1 1 7.69-7.689l5.125 5.126a5.437 5.437 0 0 1 0 7.69Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M14.5 6.5 13 5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M6.73 10.135a6 6 0 1 0 7.143 7.098" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17.845 6.155s-.433 2.245-2.94 4.751c-2.505 2.506-4.75 2.938-4.75 2.938m10.252 2.563a5.437 5.437 0 0 1-7.688 0l-5.127-5.126a5.437 5.437 0 1 1 7.69-7.689l5.125 5.126a5.437 5.437 0 0 1 0 7.69Z" stroke="currentColor" strokeWidth={1.5} /><path d="M14.5 6.5 13 5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M6.73 10.135a6 6 0 1 0 7.143 7.098" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.47 4.47a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M7.062 3.062a6.187 6.187 0 0 1 8.75 0l5.126 5.126a6.187 6.187 0 0 1-6.603 10.148A6.752 6.752 0 0 1 1.25 16a6.752 6.752 0 0 1 4.414-6.335 6.188 6.188 0 0 1 1.398-6.603Zm7.69 1.06a4.687 4.687 0 1 0-6.63 6.63l2.254 2.252c.216-.072.52-.187.89-.364.805-.389 1.921-1.076 3.11-2.264 1.188-1.188 1.875-2.305 2.263-3.11a7.52 7.52 0 0 0 .365-.89l-2.253-2.253Zm3.412 3.414c-.051.12-.11.247-.173.38-.455.944-1.237 2.202-2.555 3.52-1.318 1.319-2.577 2.1-3.52 2.555-.133.064-.26.122-.38.174l1.713 1.712a4.687 4.687 0 1 0 6.628-6.628l-1.713-1.713ZM6.381 11.004a5.25 5.25 0 1 0 6.615 6.615 6.224 6.224 0 0 1-.808-.681l-5.126-5.126a6.23 6.23 0 0 1-.681-.808Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.592 11.281a5.437 5.437 0 1 1 7.69-7.689l1.922 1.923-.096.495-.001.009-.013.054a4.106 4.106 0 0 1-.07.244c-.07.219-.19.545-.385.948-.388.806-1.076 1.923-2.264 3.11-1.188 1.189-2.304 1.876-3.11 2.264-.403.195-.73.315-.948.384a4.157 4.157 0 0 1-.298.084l-.009.002-.495.095-1.923-1.923ZM13.53 4.47a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-1.5-1.5Z" fill="currentColor" /><path d="m18.452 6.774.003-.008 1.953 1.952a5.437 5.437 0 1 1-7.69 7.69l-1.952-1.953.007-.003a8.87 8.87 0 0 0 1.143-.461c.943-.455 2.202-1.236 3.52-2.554 1.318-1.319 2.1-2.577 2.554-3.52.227-.471.373-.863.462-1.143ZM5.286 10.648a6 6 0 1 0 8.067 8.067 6.937 6.937 0 0 1-1.695-1.247l-5.126-5.126a6.936 6.936 0 0 1-1.246-1.694Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m10.01 13.109-.495.095-1.923-1.923a5.437 5.437 0 1 1 7.69-7.689l1.922 1.923-.096.495-.001.009-.013.054a4.18 4.18 0 0 1-.07.244c-.07.22-.19.545-.385.948-.388.806-1.076 1.923-2.264 3.11-1.188 1.189-2.304 1.876-3.11 2.265-.403.194-.73.314-.948.383a4.123 4.123 0 0 1-.298.084l-.009.002Zm3.52-8.64a.75.75 0 1 0-1.06 1.061l1.5 1.5a.75.75 0 1 0 1.06-1.06l-1.5-1.5Z" fill="currentColor" /><path d="m20.407 8.718-1.952-1.952-.003.008c-.09.28-.235.672-.462 1.143-.454.943-1.236 2.201-2.554 3.52-1.318 1.318-2.577 2.1-3.52 2.554a8.868 8.868 0 0 1-1.143.461l-.007.003 1.953 1.952a5.437 5.437 0 1 0 7.688-7.689Z" fill="currentColor" /><path opacity={0.5} d="M6.717 10.138c.234.409.526.794.875 1.144l5.127 5.126c.349.35.734.641 1.143.876a5.99 5.99 0 0 1-1.62 2.959 6 6 0 1 1-5.526-10.105Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Pills