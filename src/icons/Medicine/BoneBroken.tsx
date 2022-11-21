import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const BoneBroken = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.29 5.79c.148.536.172 1.185-.221 1.579l-1.28 1.28a.14.14 0 0 0 .044.226 6.268 6.268 0 0 1 3.292 3.292.14.14 0 0 0 .227.044l1.28-1.28c.393-.393 1.042-.369 1.578-.22 1.014.28 2.309-.105 3.052-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562M9.863 21.262A2.519 2.519 0 0 1 6.3 17.7a2.519 2.519 0 0 1-3.562-3.563c.743-.743 2.038-1.128 3.052-.848.536.149 1.185.173 1.579-.22l1.28-1.28a.14.14 0 0 1 .226.044 6.268 6.268 0 0 0 3.292 3.292.14.14 0 0 1 .044.227l-1.28 1.28c-.393.393-.369 1.042-.22 1.578" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="m17.657 17.657 1.414 1.414M6.343 6.343 4.93 4.93M15 19v1M5 9H4M19 15h1M9 5V4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052.149.536.173 1.185-.22 1.579l-1.28 1.28a.14.14 0 0 0 .044.226 6.268 6.268 0 0 1 3.292 3.292.14.14 0 0 0 .227.044l1.28-1.28c.393-.393 1.042-.369 1.578-.22 1.014.28 2.309-.105 3.052-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562ZM2.738 17.7a2.519 2.519 0 0 0 3.562 0 2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052-.149-.536-.173-1.185.22-1.579l1.28-1.28a.14.14 0 0 0-.044-.226 6.268 6.268 0 0 1-3.292-3.292.14.14 0 0 0-.227-.044l-1.28 1.28c-.393.393-1.042.369-1.578.22-1.014-.28-2.309.105-3.052.848a2.519 2.519 0 0 0 0 3.563Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.5} d="m17.657 17.657 1.414 1.414M6.343 6.343 4.93 4.93M15 19v1M5 9H4M19 15h1M9 5V4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052.149.536.173 1.185-.22 1.579l-1.28 1.28a.14.14 0 0 0 .044.226 6.268 6.268 0 0 1 3.292 3.292.14.14 0 0 0 .227.044l1.28-1.28c.393-.393 1.042-.369 1.578-.22 1.014.28 2.309-.105 3.052-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562ZM2.738 17.7a2.519 2.519 0 0 0 3.562 0 2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052-.149-.536-.173-1.185.22-1.579l1.28-1.28a.14.14 0 0 0-.044-.226 6.268 6.268 0 0 1-3.292-3.292.14.14 0 0 0-.227-.044l-1.28 1.28c-.393.393-1.042.369-1.578.22-1.014-.28-2.309.105-3.052.848a2.519 2.519 0 0 0 0 3.563Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="m17.657 17.657 1.414 1.414M6.343 6.343 4.93 4.93M15 19v1M5 9H4M19 15h1M9 5V4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M19.173 4.827a3.27 3.27 0 0 0-5.566-2.62c-.919.92-1.398 2.489-1.04 3.783.058.21.083.414.068.577-.014.16-.06.234-.097.272l-1.28 1.279a.89.89 0 0 0 .28 1.446 5.518 5.518 0 0 1 2.898 2.899.89.89 0 0 0 1.446.278l1.28-1.28c.037-.037.111-.082.271-.096.163-.015.366.01.577.068 1.294.358 2.864-.121 3.782-1.04a3.269 3.269 0 0 0-2.619-5.566ZM17.17 3.268c-.691-.69-1.811-.69-2.502 0-.568.568-.858 1.59-.656 2.322.09.325.152.715.117 1.109-.035.397-.174.844-.53 1.2l-.684.684a7.02 7.02 0 0 1 2.502 2.502l.684-.684c.356-.356.803-.495 1.2-.53.394-.035.784.027 1.11.117.732.202 1.753-.088 2.32-.656a1.77 1.77 0 0 0-2.5-2.501.75.75 0 0 1-1.062-1.061c.691-.691.691-1.811 0-2.502Z" fill="currentColor" /><path d="M17.127 17.126a.75.75 0 0 1 1.06 0l1.415 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414a.75.75 0 0 1 0-1.06ZM6.874 5.813a.75.75 0 0 1-1.061 1.06L4.399 5.46a.75.75 0 1 1 1.06-1.06l1.415 1.414ZM15 18.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM5 9.75a.75.75 0 0 0 0-1.5H4a.75.75 0 0 0 0 1.5h1ZM18.25 15a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75ZM8.25 5a.75.75 0 0 0 1.5 0V4a.75.75 0 0 0-1.5 0v1Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.463 14.436a5.518 5.518 0 0 1-2.899-2.899.89.89 0 0 0-1.446-.278l-1.28 1.28c-.037.037-.111.082-.271.096a1.693 1.693 0 0 1-.577-.068c-1.294-.358-2.864.121-3.783 1.04a3.27 3.27 0 0 0 2.62 5.566 3.269 3.269 0 0 0 5.566 2.62c.919-.92 1.398-2.489 1.04-3.783a1.694 1.694 0 0 1-.068-.577c.014-.16.06-.234.097-.272l1.28-1.279a.89.89 0 0 0-.28-1.446Zm-3.88-1.52-.68.68-.004.003-.023.022c-.352.34-.788.474-1.177.508a3.178 3.178 0 0 1-1.11-.117c-.732-.202-1.753.088-2.32.656a1.769 1.769 0 1 0 2.5 2.502.748.748 0 0 1 .249-.165l.006-.003a.75.75 0 0 1 .807 1.228 1.769 1.769 0 1 0 2.501 2.502c.568-.568.858-1.59.656-2.322a3.178 3.178 0 0 1-.117-1.109c.035-.397.174-.844.53-1.2l.684-.684a7.02 7.02 0 0 1-2.502-2.502Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052.149.536.173 1.185-.22 1.579l-1.28 1.28a.14.14 0 0 0 .044.226 6.268 6.268 0 0 1 3.292 3.292.14.14 0 0 0 .227.044l1.28-1.28c.393-.393 1.042-.369 1.578-.22 1.014.28 2.309-.105 3.052-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562ZM2.738 17.7a2.519 2.519 0 0 0 3.562 0 2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052-.149-.536-.173-1.185.22-1.579l1.28-1.28a.14.14 0 0 0-.044-.226 6.268 6.268 0 0 1-3.292-3.292.14.14 0 0 0-.227-.044l-1.28 1.28c-.393.393-1.042.369-1.578.22-1.014-.28-2.309.105-3.052.848a2.519 2.519 0 0 0 0 3.563ZM8.25 5a.75.75 0 0 0 1.5 0V4a.75.75 0 0 0-1.5 0v1ZM6.874 5.813a.75.75 0 1 1-1.061 1.06L4.399 5.46a.75.75 0 1 1 1.06-1.06l1.415 1.414ZM18.188 17.126a.75.75 0 0 0-1.061 1.061l1.414 1.414a.75.75 0 0 0 1.06-1.06l-1.413-1.415ZM15 18.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM5 9.75a.75.75 0 0 0 0-1.5H4a.75.75 0 0 0 0 1.5h1ZM18.25 15a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052.149.536.173 1.185-.22 1.579l-1.28 1.28a.14.14 0 0 0 .044.226 6.268 6.268 0 0 1 3.292 3.292.14.14 0 0 0 .227.044l1.28-1.28c.393-.393 1.042-.369 1.578-.22 1.014.28 2.309-.105 3.052-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562ZM2.738 17.7a2.519 2.519 0 0 0 3.562 0 2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052-.149-.536-.173-1.185.22-1.579l1.28-1.28a.14.14 0 0 0-.044-.226 6.268 6.268 0 0 1-3.292-3.292.14.14 0 0 0-.227-.044l-1.28 1.28c-.393.393-1.042.369-1.578.22-1.014-.28-2.309.105-3.052.848a2.519 2.519 0 0 0 0 3.563Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M8.25 5a.75.75 0 0 0 1.5 0V4a.75.75 0 0 0-1.5 0v1ZM6.874 5.813a.75.75 0 1 1-1.061 1.06L4.399 5.46a.75.75 0 1 1 1.06-1.06l1.415 1.414ZM18.188 17.126a.75.75 0 0 0-1.061 1.061l1.414 1.414a.75.75 0 0 0 1.06-1.06l-1.413-1.415ZM15 18.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM5 9.75a.75.75 0 0 0 0-1.5H4a.75.75 0 0 0 0 1.5h1ZM18.25 15a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default BoneBroken