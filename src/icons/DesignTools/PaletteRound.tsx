import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const PaletteRound = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 8V6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0v-6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m10 8.243 3.314-3.314a4 4 0 1 1 5.657 5.657L9.306 20.25" stroke="currentColor" strokeWidth={1.5} /><path d="M18 22v-.75.75Zm0-8v.75V14Zm4 4h-.75.75Zm-9 4.75a.75.75 0 0 0 0-1.5v1.5Zm4-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-1.5-6.5H18v-1.5h-2.5v1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5Zm1.5 0A4.75 4.75 0 0 0 18 13.25v1.5A3.25 3.25 0 0 1 21.25 18h1.5ZM13 21.25H6v1.5h7v-1.5Zm5 0h-1v1.5h1v-1.5Z" fill="currentColor" /><path d="M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0V6Z" stroke="currentColor" strokeWidth={1.5} /><path d="m10 8.243 3.314-3.314a4 4 0 1 1 5.657 5.657L9.306 20.25" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M6 22h12a4 4 0 0 0 0-8h-2.5M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0V6Z" stroke="currentColor" strokeWidth={1.5} /><path d="m10 8.243 3.313-3.314a4 4 0 0 1 5.657 5.657L9.306 20.25" stroke="currentColor" strokeWidth={1.5} /><path d="M6 22h12a4 4 0 0 0 0-8h-2.5M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M1.25 6a4.75 4.75 0 0 1 9.5 0v.432l2.033-2.033a4.75 4.75 0 1 1 6.718 6.717l-2.134 2.134H18a4.75 4.75 0 1 1 0 9.5H6A4.75 4.75 0 0 1 1.25 18V6Zm8.214 15.25H18a3.25 3.25 0 0 0 0-6.5h-2.133l-5.978 5.978a4.77 4.77 0 0 1-.425.522Zm1.286-3.504 7.69-7.69a3.25 3.25 0 1 0-4.596-4.597L10.75 8.553v9.193ZM6 2.75A3.25 3.25 0 0 0 2.75 6v12a3.25 3.25 0 0 0 6.5 0V6A3.25 3.25 0 0 0 6 2.75Zm0 15a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5ZM4.25 18a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17.9 22a4 4 0 1 0 0-8h-.22l-5.802 5.798a1.224 1.224 0 0 0-.378.883c0 .713.577 1.319 1.29 1.319h5.11ZM13.284 4.959l-1.055 1.055a2.5 2.5 0 0 0-.729 1.76v8.238c0 1.055 0 1.582.313 1.708.314.126.679-.255 1.409-1.016l5.838-6.09a4.042 4.042 0 0 0-5.776-5.655Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10 6v12a4 4 0 0 1-8 0V6a4 4 0 1 1 8 0ZM6 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path opacity={0.4} d="M10 6v12a4 4 0 0 1-8 0V6a4 4 0 1 1 8 0Z" fill="currentColor" /><path opacity={0.7} d="m9.248 20.336 3.974-3.975 5.838-6.09a4.042 4.042 0 0 0-5.776-5.655L10 7.9V18c0 .872-.279 1.679-.752 2.336Z" fill="currentColor" /><path d="m13.222 16.362-3.974 3.974A4 4 0 0 1 6 22h11.9a4 4 0 1 0 0-8h-2.414l-2.264 2.362Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default PaletteRound