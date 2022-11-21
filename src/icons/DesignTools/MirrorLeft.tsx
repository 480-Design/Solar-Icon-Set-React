import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MirrorLeft = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 12c0 4.243 0 6.364 1.318 7.682C5.636 21 7.758 21 12 21m0-18C7.757 3 5.636 3 4.318 4.318 3.502 5.134 3.192 6.257 3.073 8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M11 21h4c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15V9c0-2.828 0-4.243-.879-5.121C19.243 3 17.828 3 15 3h-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2.5 3" /><path d="M12 22V2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 3h-1C7.229 3 5.343 3 4.172 4.172 3 5.343 3 7.229 3 11v2c0 3.771 0 5.657 1.172 6.828C5.343 21 7.229 21 11 21h1" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M11 3h4c2.828 0 4.243 0 5.121.879C21 4.757 21 6.172 21 9v6c0 2.828 0 4.243-.879 5.121C19.243 21 17.828 21 15 21h-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2.5 3" /><path d="M12 2v20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 3h-1C7.229 3 5.343 3 4.172 4.172 3 5.343 3 7.229 3 11v2c0 3.771 0 5.657 1.172 6.828C5.343 21 7.229 21 11 21h1" stroke="currentColor" strokeWidth={1.5} /><path d="M11 3h4c2.828 0 4.243 0 5.121.879C21 4.757 21 6.172 21 9v6c0 2.828 0 4.243-.879 5.121C19.243 21 17.828 21 15 21h-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2.5 3" /><path d="M12 2v20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.34 3a.75.75 0 0 1 .75-.75h.912c.434 0 .839 0 1.213.003a.75.75 0 1 1-.013 1.5c-.367-.003-.766-.003-1.202-.003h-.91a.75.75 0 0 1-.75-.75Zm5.031.055a.75.75 0 0 1 .939-.494c.515.16.962.408 1.342.787.38.38.627.827.787 1.342a.75.75 0 1 1-1.432.445c-.1-.321-.235-.545-.416-.726-.181-.181-.405-.316-.726-.416a.75.75 0 0 1-.494-.938Zm2.62 3.986a.75.75 0 0 1 .756.744c.003.374.003.779.003 1.213v1.366a.75.75 0 0 1-1.5 0V9c0-.436 0-.835-.003-1.202a.75.75 0 0 1 .743-.757ZM21 12.886a.75.75 0 0 1 .75.75v1.366c0 .434 0 .839-.003 1.213a.75.75 0 0 1-1.5-.013c.003-.367.003-.766.003-1.202v-1.364a.75.75 0 0 1 .75-.75Zm-.055 5.485a.75.75 0 0 1 .494.939c-.16.515-.408.962-.787 1.342-.38.38-.827.627-1.342.787a.75.75 0 1 1-.445-1.432c.321-.1.545-.235.726-.416.181-.181.316-.405.416-.726a.75.75 0 0 1 .938-.494Zm-3.986 2.62a.75.75 0 0 1-.744.756c-.374.003-.779.003-1.213.003h-.911a.75.75 0 0 1 0-1.5H15c.436 0 .835 0 1.202-.003a.75.75 0 0 1 .757.743ZM12 1.25a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0v-.25h-.306c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153h.306V2a.75.75 0 0 1 .75-.75Zm-.75 2.5H11c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.289v2c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h.25V3.75Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.34 20.75a.75.75 0 0 1 .75-.75H15c.436 0 .835 0 1.202-.003a.75.75 0 0 1 .013 1.5c-.374.003-.78.003-1.213.003h-.911a.75.75 0 0 1-.75-.75Zm0-18a.75.75 0 0 1 .75-.75h.912c.434 0 .838 0 1.213.003a.75.75 0 1 1-.013 1.5C15.835 3.5 15.436 3.5 15 3.5h-.91a.75.75 0 0 1-.75-.75Zm5.031 17.945a.75.75 0 0 1 .494-.938c.32-.1.544-.235.726-.416.181-.181.316-.405.415-.726a.75.75 0 0 1 1.433.445c-.16.515-.408.962-.787 1.342-.38.38-.827.627-1.342.787a.75.75 0 0 1-.939-.494Zm0-17.89a.75.75 0 0 1 .939-.494c.515.16.962.408 1.342.787.38.38.627.827.787 1.342a.75.75 0 1 1-1.433.445c-.1-.321-.234-.545-.415-.726-.182-.181-.405-.316-.726-.416a.75.75 0 0 1-.494-.938Zm2.62 13.904a.75.75 0 0 1-.744-.757c.003-.367.003-.766.003-1.202v-1.364a.75.75 0 0 1 1.5 0v1.366c0 .434 0 .839-.003 1.213a.75.75 0 0 1-.757.744Zm0-9.918a.75.75 0 0 1 .756.744c.003.374.003.779.003 1.213v1.366a.75.75 0 1 1-1.5 0V8.75c0-.436 0-.835-.003-1.202a.75.75 0 0 1 .743-.757Z" fill="currentColor" /><path d="M3 10.75v2c0 3.771 0 5.657 1.172 6.828 1.092 1.093 3.676 1.167 7.078 1.172a.75.75 0 0 0 1.5 0v-18a.75.75 0 0 0-1.5 0c-3.402.005-5.986.079-7.078 1.172C3 5.093 3 6.979 3 10.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.25 12.75v-2c0-3.771 0-5.657 1.172-6.828C5.514 2.829 8.098 2.755 11.5 2.75a.75.75 0 0 1 1.5 0v18a.75.75 0 0 1-1.5 0c-3.402-.005-5.986-.079-7.078-1.172C3.25 18.407 3.25 16.521 3.25 12.75Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M13.59 2.75c0 .414.337.75.75.75h.91c.436 0 .835 0 1.202.003a.75.75 0 0 0 .013-1.5C16.09 2 15.685 2 15.252 2h-.911a.75.75 0 0 0-.75.75Zm0 18c0 .414.337.75.75.75h.912c.434 0 .838 0 1.213-.003a.75.75 0 0 0-.013-1.5c-.367.003-.766.003-1.202.003h-.91a.75.75 0 0 0-.75.75Zm5.031-17.945a.75.75 0 0 0 .494.938c.32.1.544.235.726.416.181.181.316.405.415.726a.75.75 0 0 0 1.433-.445 3.175 3.175 0 0 0-.787-1.342 3.176 3.176 0 0 0-1.342-.787.75.75 0 0 0-.939.494Zm0 17.89a.75.75 0 0 0 .939.494c.515-.16.962-.408 1.342-.787.38-.38.627-.827.787-1.342a.75.75 0 1 0-1.433-.445c-.1.321-.234.545-.415.726-.182.181-.405.316-.726.416a.75.75 0 0 0-.494.938Zm2.62-13.904a.75.75 0 0 0-.744.757c.003.367.003.766.003 1.202v1.364a.75.75 0 0 0 1.5 0V8.748c0-.434 0-.839-.003-1.213a.75.75 0 0 0-.757-.744Zm0 9.918a.75.75 0 0 0 .756-.744c.003-.374.003-.779.003-1.213v-1.366a.75.75 0 0 0-1.5 0v1.364c0 .436 0 .835-.003 1.202a.75.75 0 0 0 .743.757Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MirrorLeft