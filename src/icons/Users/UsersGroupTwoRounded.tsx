import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const UsersGroupTwoRounded = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} /><path d="M18 9c1.657 0 3-1.12 3-2.5S19.657 4 18 4M6 9C4.343 9 3 7.88 3 6.5S4.343 4 6 4M17.197 15c.51.588.803 1.271.803 2 0 2.21-2.686 4-6 4s-6-1.79-6-4 2.686-4 6-4c.34 0 .675.019 1 .055M20 19c1.754-.385 3-1.359 3-2.5s-1.246-2.115-3-2.5M4 19c-1.754-.385-3-1.359-3-2.5s1.246-2.115 3-2.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M18 9c1.657 0 3-1.12 3-2.5S19.657 4 18 4M6 9C4.343 9 3 7.88 3 6.5S4.343 4 6 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><ellipse cx={12} cy={17} rx={6} ry={4} stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M20 19c1.754-.385 3-1.359 3-2.5s-1.246-2.115-3-2.5M4 19c-1.754-.385-3-1.359-3-2.5s1.246-2.115 3-2.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} /><path d="M18 9c1.657 0 3-1.12 3-2.5S19.657 4 18 4M6 9C4.343 9 3 7.88 3 6.5S4.343 4 6 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><ellipse cx={12} cy={17} rx={6} ry={4} stroke="currentColor" strokeWidth={1.5} /><path d="M20 19c1.754-.385 3-1.359 3-2.5s-1.246-2.115-3-2.5M4 19c-1.754-.385-3-1.359-3-2.5s1.246-2.115 3-2.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM8.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z" fill="currentColor" /><path d="M18 3.25a.75.75 0 0 0 0 1.5c1.377 0 2.25.906 2.25 1.75S19.377 8.25 18 8.25a.75.75 0 0 0 0 1.5c1.937 0 3.75-1.333 3.75-3.25S19.937 3.25 18 3.25ZM6.75 4A.75.75 0 0 0 6 3.25c-1.937 0-3.75 1.333-3.75 3.25S4.063 9.75 6 9.75a.75.75 0 0 0 0-1.5c-1.376 0-2.25-.906-2.25-1.75S4.624 4.75 6 4.75A.75.75 0 0 0 6.75 4Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 12.25c-1.784 0-3.434.48-4.659 1.297-1.22.814-2.091 2.02-2.091 3.453 0 1.433.871 2.64 2.091 3.453 1.225.816 2.875 1.297 4.659 1.297 1.784 0 3.434-.48 4.659-1.297 1.22-.814 2.091-2.02 2.091-3.453 0-1.433-.872-2.64-2.091-3.453-1.225-.816-2.875-1.297-4.659-1.297ZM6.75 17c0-.776.472-1.57 1.423-2.204.947-.631 2.298-1.046 3.827-1.046 1.53 0 2.88.415 3.827 1.046.951.634 1.423 1.428 1.423 2.204 0 .776-.472 1.57-1.423 2.204-.947.631-2.298 1.046-3.827 1.046-1.53 0-2.88-.415-3.827-1.046C7.222 18.57 6.75 17.776 6.75 17Z" fill="currentColor" /><path d="M19.267 13.84a.75.75 0 0 1 .894-.573c.961.211 1.828.592 2.472 1.119.643.526 1.117 1.25 1.117 2.114 0 .865-.474 1.588-1.117 2.114-.644.527-1.51.908-2.472 1.119a.75.75 0 0 1-.322-1.466c.793-.173 1.426-.472 1.844-.814.418-.342.567-.677.567-.953 0-.276-.149-.61-.567-.953-.418-.342-1.051-.64-1.844-.814a.75.75 0 0 1-.572-.894ZM3.84 13.267a.75.75 0 1 1 .32 1.466c-.792.173-1.425.472-1.843.814-.418.342-.567.677-.567.953 0 .276.149.61.567.953.418.342 1.051.64 1.844.814a.75.75 0 0 1-.322 1.466c-.962-.211-1.828-.592-2.472-1.119C.724 18.088.25 17.364.25 16.5c0-.865.474-1.588 1.117-2.114.644-.527 1.51-.908 2.472-1.119Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.5 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM18 16.5c0 1.933-2.686 3.5-6 3.5s-6-1.567-6-3.5S8.686 13 12 13s6 1.567 6 3.5ZM7.122 5c.178 0 .35.017.518.05A4.977 4.977 0 0 0 7 7.5c0 .868.221 1.685.61 2.396-.158.03-.32.045-.488.045-1.414 0-2.561-1.106-2.561-2.47C4.561 6.106 5.708 5 7.122 5ZM5.447 18.986C4.88 18.307 4.5 17.474 4.5 16.5c0-.944.357-1.756.896-2.423C3.49 14.225 2 15.267 2 16.529c0 1.275 1.517 2.325 3.447 2.457ZM17 7.5c0 .868-.221 1.685-.61 2.396.157.03.32.045.488.045 1.414 0 2.56-1.106 2.56-2.47 0-1.365-1.146-2.471-2.56-2.471-.178 0-.35.017-.518.05.407.724.64 1.56.64 2.45ZM18.553 18.986c1.93-.132 3.447-1.182 3.447-2.457 0-1.263-1.491-2.304-3.396-2.452.54.667.896 1.479.896 2.423 0 .974-.38 1.807-.947 2.486Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.5 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" fill="currentColor" /><path opacity={0.4} d="M19.5 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM4.5 7.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" fill="currentColor" /><path d="M18 16.5c0 1.933-2.686 3.5-6 3.5s-6-1.567-6-3.5S8.686 13 12 13s6 1.567 6 3.5Z" fill="currentColor" /><path opacity={0.4} d="M22 16.5c0 1.38-1.79 2.5-4 2.5s-4-1.12-4-2.5 1.79-2.5 4-2.5 4 1.12 4 2.5ZM2 16.5C2 17.88 3.79 19 6 19s4-1.12 4-2.5S8.21 14 6 14s-4 1.12-4 2.5Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default UsersGroupTwoRounded