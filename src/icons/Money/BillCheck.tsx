import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const BillCheck = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 7v-.63c0-1.193 0-1.79-.158-2.27a3.045 3.045 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.046 3.046 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37V15m18-4v9.374c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0 1.657 1.657 0 0 0-2.25 0 1.657 1.657 0 0 1-2.25 0 1.657 1.657 0 0 0-2.25 0 1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V19" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M10.06 9.9a.75.75 0 0 0-1.12 1l1.12-1Zm.869 2.1-.56.5a.75.75 0 0 0 1.119 0l-.56-.5Zm4.13-3.5a.75.75 0 0 0-1.118-1l1.118 1Zm-6.118 2.4 1.428 1.6 1.119-1-1.428-1.6-1.12 1Zm2.547 1.6 3.572-4-1.12-1-3.57 4 1.118 1Z" fill="currentColor" /><path d="M7.5 15.5H9m7.5 0H12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.046 3.046 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37v14.004c0 .858.985 1.314 1.608.744a.946.946 0 0 1 1.284 0l.483.442a1.657 1.657 0 0 0 2.25 0 1.657 1.657 0 0 1 2.25 0 1.657 1.657 0 0 0 2.25 0 1.657 1.657 0 0 1 2.25 0 1.657 1.657 0 0 0 2.25 0l.483-.442a.946.946 0 0 1 1.284 0c.623.57 1.608.114 1.608-.744V6.37c0-1.193 0-1.79-.158-2.27a3.045 3.045 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2Z" stroke="currentColor" strokeWidth={1.5} /><path d="M10.06 9.9a.75.75 0 0 0-1.12 1l1.12-1Zm.869 2.1-.56.5a.75.75 0 0 0 1.119 0l-.56-.5Zm4.13-3.5a.75.75 0 0 0-1.118-1l1.118 1Zm-6.118 2.4 1.428 1.6 1.119-1-1.428-1.6-1.12 1Zm2.547 1.6 3.572-4-1.12-1-3.57 4 1.118 1Z" fill="currentColor" /><path d="M7.5 15.5h9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.046 3.046 0 0 0-1.881 1.936C3 4.581 3 5.177 3 6.37v14.004c0 .858.985 1.314 1.608.744a.946.946 0 0 1 1.284 0l.483.442a1.657 1.657 0 0 0 2.25 0 1.657 1.657 0 0 1 2.25 0 1.657 1.657 0 0 0 2.25 0 1.657 1.657 0 0 1 2.25 0 1.657 1.657 0 0 0 2.25 0l.483-.442a.946.946 0 0 1 1.284 0c.623.57 1.608.114 1.608-.744V6.37c0-1.193 0-1.79-.158-2.27a3.045 3.045 0 0 0-1.881-1.937C18.493 2 17.914 2 16.755 2Z" stroke="currentColor" strokeWidth={1.5} /><path d="M10.06 9.9a.75.75 0 0 0-1.12 1l1.12-1Zm.869 2.1-.56.5a.75.75 0 0 0 1.119 0l-.56-.5Zm4.13-3.5a.75.75 0 0 0-1.118-1l1.118 1Zm-6.118 2.4 1.428 1.6 1.119-1-1.428-1.6-1.12 1Zm2.547 1.6 3.572-4-1.12-1-3.57 4 1.118 1Z" fill="currentColor" /><path d="M7.5 15.5h9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.099 1.25H16.9c1.017 0 1.717 0 2.306.204a3.796 3.796 0 0 1 2.348 2.412l-.713.234.713-.234c.196.597.195 1.307.195 2.36v14.148c0 1.466-1.727 2.338-2.864 1.297a.196.196 0 0 0-.271 0l-.484.442c-.928.85-2.334.85-3.262 0a.907.907 0 0 0-1.238 0c-.928.85-2.334.85-3.262 0a.907.907 0 0 0-1.238 0c-.928.85-2.334.85-3.262 0l-.483-.442a.196.196 0 0 0-.272 0c-1.137 1.04-2.864.169-2.864-1.297V6.227c0-1.054 0-1.764.195-2.361a3.795 3.795 0 0 1 2.348-2.412c.59-.205 1.289-.204 2.306-.204Zm.146 1.5c-1.221 0-1.642.01-1.96.121-.658.23-1.186.766-1.414 1.462-.111.339-.12.785-.12 2.037v14.004c0 .12.059.192.134.227a.2.2 0 0 0 .11.018.194.194 0 0 0 .107-.055 1.695 1.695 0 0 1 2.296 0l.483.442a.907.907 0 0 0 1.238 0 2.407 2.407 0 0 1 3.262 0 .907.907 0 0 0 1.238 0 2.407 2.407 0 0 1 3.262 0 .907.907 0 0 0 1.238 0l.483-.442a1.695 1.695 0 0 1 2.296 0c.043.04.08.052.108.055a.2.2 0 0 0 .109-.018c.075-.035.135-.108.135-.227V6.37c0-1.252-.01-1.698-.12-2.037a2.296 2.296 0 0 0-1.416-1.462c-.317-.11-.738-.12-1.959-.12h-9.51ZM15 7.44a.75.75 0 0 1 .06 1.06l-3.572 4a.75.75 0 0 1-1.119 0l-1.428-1.6a.75.75 0 0 1 1.118-1l.87.974 3.012-3.373A.75.75 0 0 1 15 7.44ZM6.75 15.5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.245 2h9.51c1.159 0 1.738 0 2.206.163a3.045 3.045 0 0 1 1.881 1.936C21 4.581 21 5.177 21 6.37v14.004c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0 1.657 1.657 0 0 0-2.25 0 1.657 1.657 0 0 1-2.25 0 1.657 1.657 0 0 0-2.25 0 1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V6.37c0-1.193 0-1.79.158-2.27.3-.913.995-1.629 1.881-1.937C5.507 2 6.086 2 7.245 2Zm7.814 6.5a.75.75 0 0 0-1.118-1l-3.012 3.374-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0l3.572-4ZM7.5 14.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M7.245 2h9.51c1.159 0 1.738 0 2.206.163a3.045 3.045 0 0 1 1.881 1.936C21 4.581 21 5.177 21 6.37v14.004c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0 1.657 1.657 0 0 0-2.25 0 1.657 1.657 0 0 1-2.25 0 1.657 1.657 0 0 0-2.25 0 1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V6.37c0-1.193 0-1.79.158-2.27.3-.913.995-1.629 1.881-1.937C5.507 2 6.086 2 7.245 2Z" fill="currentColor" /><path d="M15.06 8.5a.75.75 0 0 0-1.12-1l-3.011 3.374-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0l3.572-4ZM7.5 14.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default BillCheck