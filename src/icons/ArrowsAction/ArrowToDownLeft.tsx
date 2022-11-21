import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ArrowToDownLeft = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12 19.5-.53.53a.75.75 0 0 0 1.06 0L12 19.5Zm5.53-4.47a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-10-1.06a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm3.72-4.47a.75.75 0 0 0 1.5 0h-1.5ZM7 3.75a.75.75 0 0 0 0 1.5v-1.5ZM12.75 13a.75.75 0 0 0-1.5 0h1.5Zm-.22 7.03 5-5-1.06-1.06-5 5 1.06 1.06Zm0-1.06-5-5-1.06 1.06 5 5 1.06-1.06Zm.22-9.47c0-.953-.28-2.367-1.141-3.563C10.719 4.702 9.244 3.75 7 3.75v1.5c1.756 0 2.78.715 3.391 1.563.639.887.859 1.974.859 2.687h1.5Zm-1.5 3.5v6.5h1.5V13h-1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12 19.5-.53.53a.75.75 0 0 0 1.06 0L12 19.5Zm5.53-4.47a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-10-1.06a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm5 6.06 5-5-1.06-1.06-5 5 1.06 1.06Zm0-1.06-5-5-1.06 1.06 5 5 1.06-1.06Z" fill="currentColor" /><path opacity={0.5} d="M11.25 19.5a.75.75 0 0 0 1.5 0h-1.5ZM7 3.75a.75.75 0 0 0 0 1.5v-1.5Zm4.25 5.75V19.499l.75.001h.75v-10h-1.5Zm1.5 0c0-.953-.28-2.367-1.141-3.563C10.719 4.702 9.244 3.75 7 3.75v1.5c1.756 0 2.78.715 3.391 1.563.639.887.859 1.974.859 2.687h1.5Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12 19.5-.53.53a.75.75 0 0 0 1.06 0L12 19.5Zm5.53-4.47a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm-10-1.06a.75.75 0 0 0-1.06 1.06l1.06-1.06ZM7 3.75a.75.75 0 0 0 0 1.5v-1.5Zm5.53 16.28 5-5-1.06-1.06-5 5 1.06 1.06Zm0-1.06-5-5-1.06 1.06 5 5 1.06-1.06ZM11.25 9.5V19.499l.75.001h.75v-10h-1.5Zm1.5 0c0-.953-.28-2.367-1.141-3.563C10.719 4.702 9.244 3.75 7 3.75v1.5c1.756 0 2.78.715 3.391 1.563.639.887.859 1.974.859 2.687h1.5Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17.53 13.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l3.72 3.72V9.5c0-.713-.22-1.8-.859-2.687C9.781 5.965 8.756 5.25 7 5.25a.75.75 0 0 1 0-1.5c2.244 0 3.72.952 4.609 2.187.861 1.196 1.141 2.61 1.141 3.563v8.19l3.72-3.72a.75.75 0 0 1 1.06 0Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17.53 13.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l3.72 3.72V9.5c0-.713-.22-1.8-.859-2.687C9.781 5.965 8.756 5.25 7 5.25a.75.75 0 0 1 0-1.5c2.244 0 3.72.952 4.609 2.187.861 1.196 1.141 2.61 1.141 3.563v8.19l3.72-3.72a.75.75 0 0 1 1.06 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17.53 13.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06L12 18.44l4.47-4.47a.75.75 0 0 1 1.06 0Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M12.75 9.5c0-.953-.28-2.367-1.141-3.563C10.719 4.702 9.244 3.75 7 3.75a.75.75 0 0 0 0 1.5c1.756 0 2.78.715 3.391 1.563.639.887.859 1.974.859 2.687v8.19l.75.75.75-.75V9.5ZM12.198 20.224Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ArrowToDownLeft