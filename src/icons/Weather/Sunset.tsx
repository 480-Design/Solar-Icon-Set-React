import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Sunset = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 22h8M5 19h14M2 16h20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.25 6a.75.75 0 0 1 1.5 0h-1.5Zm.75 6 .53.53a.75.75 0 0 1-1.06 0L12 12Zm1.47-2.53a.75.75 0 1 1 1.06 1.06l-1.06-1.06Zm-4 1.06a.75.75 0 1 1 1.06-1.06l-1.06 1.06ZM12.75 6v6h-1.5V6h1.5Zm-1.28 5.47 2-2 1.06 1.06-2 2-1.06-1.06Zm0 1.06-2-2 1.06-1.06 2 2-1.06 1.06Z" fill="currentColor" /><path d="M12 2v1M22 12h-1M3 12H2M19.07 4.93l-.392.393M5.322 5.322l-.393-.393M10 6.341a6 6 0 0 1 6.5 9.627h-9A5.977 5.977 0 0 1 6 12c0-.701.12-1.374.341-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 22h8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.5} d="M5 19h14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M2 16h20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.5} d="M12 6a6 6 0 0 0-4.5 9.969h9A6 6 0 0 0 12 6Z" stroke="currentColor" strokeWidth={1.5} /><path d="M11.25 6a.75.75 0 0 1 1.5 0h-1.5Zm.75 6 .53.53a.75.75 0 0 1-1.06 0L12 12Zm1.47-2.53a.75.75 0 1 1 1.06 1.06l-1.06-1.06Zm-4 1.06a.75.75 0 1 1 1.06-1.06l-1.06 1.06ZM12.75 6v6h-1.5V6h1.5Zm-1.28 5.47 2-2 1.06 1.06-2 2-1.06-1.06Zm0 1.06-2-2 1.06-1.06 2 2-1.06 1.06Z" fill="currentColor" /><path opacity={0.5} d="M12 2v1M22 12h-1M3 12H2M19.07 4.93l-.392.393M5.322 5.322l-.393-.393" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 22h8M5 19h14M2 16h20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M12 6a6 6 0 0 0-4.5 9.969h9A6 6 0 0 0 12 6Z" stroke="currentColor" strokeWidth={1.5} /><path d="M11.25 6a.75.75 0 0 1 1.5 0h-1.5Zm.75 6 .53.53a.75.75 0 0 1-1.06 0L12 12Zm1.47-2.53a.75.75 0 1 1 1.06 1.06l-1.06-1.06Zm-4 1.06a.75.75 0 1 1 1.06-1.06l-1.06 1.06ZM12.75 6v6h-1.5V6h1.5Zm-1.28 5.47 2-2 1.06 1.06-2 2-1.06-1.06Zm0 1.06-2-2 1.06-1.06 2 2-1.06 1.06Z" fill="currentColor" /><path d="M12 2v1M22 12h-1M3 12H2M19.07 4.93l-.392.393M5.322 5.322l-.393-.393" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06Zm15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0ZM11.25 6.803a5.251 5.251 0 0 0-3.398 8.416h8.296a5.251 5.251 0 0 0-3.398-8.416v3.386l.72-.72a.75.75 0 1 1 1.06 1.061l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V6.802ZM6.083 15.25a6.75 6.75 0 1 1 11.835 0H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h4.083ZM1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm-16 7a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Zm3 3a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4.25 19a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Zm3 3a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06Zm15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0ZM1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Z" fill="currentColor" /><path d="M5.25 12c0 1.178.302 2.286.833 3.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-4.083a6.751 6.751 0 0 0-5.167-9.959V9.19l.72-.72a.75.75 0 1 1 1.06 1.061l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72V5.29a6.751 6.751 0 0 0-6 6.709Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.25 22a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75ZM17.917 15.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-4.083Z" fill="currentColor" /><path opacity={0.5} d="M4.25 19a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75ZM5.25 12c0 1.178.302 2.286.833 3.25h11.834A6.751 6.751 0 0 0 12.75 5.29h-1.5a6.751 6.751 0 0 0-6 6.709Z" fill="currentColor" /><path d="M11.47 12.841a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0-1.06-1.06l-.72.719V5.29c-.447-.068-1.186-.028-1.5 0v5.21l-.72-.72a.75.75 0 1 0-1.06 1.061l2 2Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M4.398 4.398a.75.75 0 0 1 1.061 0l.393.393a.75.75 0 0 1-1.06 1.06l-.394-.392a.75.75 0 0 1 0-1.06ZM19.6 4.399a.75.75 0 0 1 0 1.06l-.392.393a.75.75 0 0 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.06 0Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Sunset