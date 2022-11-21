import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Waterdrops = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10 17.833C10 20.134 8.21 22 6 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C8.434 14.472 10 16.393 10 17.833ZM22 17.833C22 20.134 20.21 22 18 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C20.434 14.472 22 16.393 22 17.833Z" stroke="currentColor" strokeWidth={1.5} /><path d="M13.262 3.235a1.724 1.724 0 0 0-2.524 0C9.566 4.472 8 6.393 8 7.833 8 10.134 9.79 12 12 12s4-1.866 4-4.167A2.74 2.74 0 0 0 15.854 7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10 17.833C10 20.134 8.21 22 6 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C8.434 14.472 10 16.393 10 17.833ZM22 17.833C22 20.134 20.21 22 18 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C20.434 14.472 22 16.393 22 17.833Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M16 7.833C16 10.134 14.21 12 12 12s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C14.434 4.472 16 6.393 16 7.833Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10 17.833C10 20.134 8.21 22 6 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C8.434 14.472 10 16.393 10 17.833ZM22 17.833C22 20.134 20.21 22 18 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C20.434 14.472 22 16.393 22 17.833ZM16 7.833C16 10.134 14.21 12 12 12s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C14.434 4.472 16 6.393 16 7.833Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.717 3.75a.974.974 0 0 0-1.434 0c-.572.604-1.224 1.358-1.728 2.121-.522.792-.805 1.475-.805 1.962 0 1.916 1.484 3.417 3.25 3.417s3.25-1.5 3.25-3.417c0-.487-.283-1.17-.805-1.962-.504-.763-1.156-1.517-1.728-2.12ZM10.194 2.72a2.474 2.474 0 0 1 3.612 0c.6.634 1.318 1.46 1.89 2.326.554.838 1.054 1.836 1.054 2.788 0 2.686-2.098 4.917-4.75 4.917s-4.75-2.23-4.75-4.917c0-.952.5-1.95 1.054-2.788.572-.867 1.29-1.692 1.89-2.326ZM6.717 13.75a.974.974 0 0 0-1.434 0c-.572.603-1.224 1.357-1.728 2.12-.522.792-.805 1.475-.805 1.962 0 1.916 1.484 3.417 3.25 3.417s3.25-1.5 3.25-3.417c0-.487-.283-1.17-.805-1.962-.504-.763-1.156-1.517-1.728-2.12Zm-2.523-1.032a2.474 2.474 0 0 1 3.612 0c.6.634 1.318 1.46 1.89 2.326.554.838 1.054 1.836 1.054 2.788 0 2.686-2.098 4.917-4.75 4.917s-4.75-2.23-4.75-4.917c0-.952.5-1.95 1.054-2.788.572-.867 1.29-1.692 1.89-2.326Zm14.523 1.032a.974.974 0 0 0-1.434 0c-.572.603-1.224 1.357-1.728 2.12-.522.792-.805 1.475-.805 1.962 0 1.916 1.484 3.417 3.25 3.417s3.25-1.5 3.25-3.417c0-.487-.283-1.17-.805-1.962-.504-.763-1.156-1.517-1.728-2.12Zm-2.523-1.032a2.474 2.474 0 0 1 3.612 0c.6.634 1.318 1.46 1.89 2.326.554.838 1.054 1.836 1.054 2.788 0 2.686-2.098 4.917-4.75 4.917s-4.75-2.23-4.75-4.917c0-.952.5-1.95 1.054-2.788.572-.867 1.29-1.692 1.89-2.326Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10 17.833C10 20.134 8.21 22 6 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C8.434 14.472 10 16.393 10 17.833ZM22 17.833C22 20.134 20.21 22 18 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C20.434 14.472 22 16.393 22 17.833ZM16 7.833C16 10.134 14.21 12 12 12s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C14.434 4.472 16 6.393 16 7.833Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10 17.833C10 20.134 8.21 22 6 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C8.434 14.472 10 16.393 10 17.833Z" fill="currentColor" /><path opacity={0.7} d="M22 17.833C22 20.134 20.21 22 18 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C20.434 14.472 22 16.393 22 17.833Z" fill="currentColor" /><path opacity={0.4} d="M16 7.833C16 10.134 14.21 12 12 12s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C14.434 4.472 16 6.393 16 7.833Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Waterdrops