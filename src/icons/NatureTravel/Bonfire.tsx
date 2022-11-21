import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Bonfire = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 15 4 22M4 15l5 2.188M20 22l-5.5-2.406M15 10c-.2.667-1.08 2-3 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M6 8.86C6 13.772 9.733 15 11.6 15c.956 0 2.34-.246 3.577-.96m1.92-1.803c.551-.86.903-1.967.903-3.377 0-3.126-2.001-5.36-3.81-6.64-.818-.578-1.837.057-1.837 1.045v.223c0 .996-.428 2.814-1.617 3.57-.607.386-1.263-.192-1.336-.896l-.061-.58c-.07-.672-.77-1.08-1.32-.67a5.2 5.2 0 0 0-1.335 1.454" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 8.807C18 13.761 13.733 15 11.6 15 9.733 15 6 13.761 6 8.807 6 6.71 7.208 5.358 8.261 4.653c.535-.36 1.223-.101 1.312.523.178 1.245 1.305 2.173 1.987 1.104.582-.914.793-2.148.793-2.891 0-1.1 1.15-1.798 2.048-1.124C16.15 3.577 18 5.776 18 8.807Z" stroke="currentColor" strokeWidth={1.5} /><path d="M20 15 4 22" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m4 15 5 2.188M20 22l-5.5-2.406M15 10c-.2.667-1.08 2-3 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 8.807C18 13.761 13.733 15 11.6 15 9.733 15 6 13.761 6 8.807 6 6.71 7.208 5.358 8.261 4.653c.535-.36 1.223-.101 1.312.523.178 1.245 1.305 2.173 1.987 1.104.582-.914.793-2.148.793-2.891 0-1.1 1.15-1.798 2.048-1.124C16.15 3.577 18 5.776 18 8.807Z" stroke="currentColor" strokeWidth={1.5} /><path d="M20 15 4 22M4 15l5 2.188M20 22l-5.5-2.406M15 10c-.2.667-1.08 2-3 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.669 1.51a1.962 1.962 0 0 1 2.182.155c1.848 1.385 3.9 3.78 3.9 7.142 0 2.732-1.196 4.506-2.722 5.57-1.487 1.036-3.247 1.373-4.429 1.373a6.594 6.594 0 0 1-3.967-1.402c-1.356-1.08-2.383-2.85-2.383-5.54 0-2.424 1.406-3.982 2.594-4.778.92-.618 2.292-.216 2.472 1.04.065.46.302.787.472.898.02.013.034.02.045.025a.498.498 0 0 0 .095-.116c.482-.757.675-1.838.675-2.488 0-.82.433-1.517 1.066-1.879Zm-1.856 4.496.005-.002-.005.002Zm.036-.008a.01.01 0 0 1 .003.001h-.003Zm2.563-3.184a.647.647 0 0 0-.309.575c0 .835-.228 2.223-.91 3.294-.248.388-.598.687-1.049.784-.447.096-.86-.036-1.176-.243-.61-.398-1.025-1.156-1.137-1.941a.106.106 0 0 0-.007-.027L8.82 5.25s-.002-.003-.01-.006c-.013-.005-.061-.016-.132.032-.917.615-1.929 1.76-1.929 3.531 0 2.263.84 3.59 1.817 4.368A5.097 5.097 0 0 0 11.6 14.25c.952 0 2.392-.282 3.572-1.104 1.14-.794 2.078-2.117 2.078-4.339 0-2.7-1.646-4.703-3.299-5.942-.2-.15-.387-.138-.54-.051Zm1.804 6.468a.75.75 0 0 1 .503.934c-.27.896-1.384 2.534-3.719 2.534a.75.75 0 0 1 0-1.5c1.506 0 2.15-1.028 2.282-1.466a.75.75 0 0 1 .934-.502ZM3.313 14.699a.75.75 0 0 1 .988-.386l5 2.187a.75.75 0 1 1-.601 1.375l-5-2.188a.75.75 0 0 1-.387-.988Zm17.374 0a.75.75 0 0 1-.386.988l-16 7a.75.75 0 0 1-.601-1.374l16-7a.75.75 0 0 1 .987.386Zm-6.874 4.594a.75.75 0 0 1 .988-.386l5.5 2.406a.75.75 0 1 1-.601 1.374l-5.5-2.406a.75.75 0 0 1-.387-.988Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.313 14.7a.75.75 0 0 1 .988-.387l5 2.188a.75.75 0 1 1-.601 1.374l-5-2.188a.75.75 0 0 1-.387-.987Zm17.374 0a.75.75 0 0 1-.386.987l-16 7a.75.75 0 0 1-.601-1.374l16-7a.75.75 0 0 1 .987.387Zm-6.874 4.593a.75.75 0 0 1 .988-.386l5.5 2.406a.75.75 0 1 1-.601 1.374l-5.5-2.406a.75.75 0 0 1-.387-.988ZM11.6 15c2.133 0 6.4-1.239 6.4-6.193 0-3.031-1.849-5.23-3.6-6.542-.897-.674-2.047.025-2.047 1.124 0 .743-.21 1.977-.793 2.891-.682 1.07-1.809.141-1.987-1.104-.09-.624-.777-.882-1.312-.523C7.208 5.358 6 6.71 6 8.807 6 13.761 9.733 15 11.6 15Zm3.616-5.718a.75.75 0 0 1 .502.934c-.268.896-1.384 2.534-3.718 2.534a.75.75 0 0 1 0-1.5c1.506 0 2.15-1.028 2.282-1.466a.75.75 0 0 1 .934-.502Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M3.313 14.7a.75.75 0 0 1 .988-.387l5 2.188a.75.75 0 1 1-.601 1.374l-5-2.188a.75.75 0 0 1-.387-.987Zm17.374 0a.75.75 0 0 1-.386.987l-16 7a.75.75 0 0 1-.601-1.374l16-7a.75.75 0 0 1 .987.387Zm-6.874 4.593a.75.75 0 0 1 .988-.386l5.5 2.406a.75.75 0 1 1-.601 1.374l-5.5-2.406a.75.75 0 0 1-.387-.988Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.6 15c2.133 0 6.4-1.239 6.4-6.193 0-3.031-1.849-5.23-3.6-6.542-.897-.674-2.047.025-2.047 1.124 0 .743-.21 1.977-.793 2.891-.682 1.07-1.809.141-1.987-1.104-.09-.624-.777-.882-1.312-.523C7.208 5.358 6 6.71 6 8.807 6 13.761 9.733 15 11.6 15Zm3.616-5.718a.75.75 0 0 1 .502.934c-.268.896-1.384 2.534-3.718 2.534a.75.75 0 0 1 0-1.5c1.506 0 2.15-1.028 2.282-1.466a.75.75 0 0 1 .934-.502Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Bonfire