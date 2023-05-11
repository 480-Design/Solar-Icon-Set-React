import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const CloudDownload = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22v-6m0 6 2-2m-2 2-2-2" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 13.353c0 2.343-1.444 4.353-3.5 5.207M14.381 8.027a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.351 4.351 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.896 1.261 3.501 3 4.041m2.116-8.197a5.577 5.577 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.29 4.29 0 0 1 1.55.634m9.49-3.228c.889.304 1.678.82 2.307 1.485" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M6.286 19C3.919 19 2 17.104 2 14.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08m7.265-2.582a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.577 5.577 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.29 4.29 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22v-6m0 6 2-2m-2 2-2-2" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M6.286 19C3.919 19 2 17.104 2 14.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08m7.265-2.582a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.577 5.577 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.29 4.29 0 0 1 1.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22v-6m0 6 2-2m-2 2-2-2" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12 15.25a.75.75 0 0 1 .75.75v4.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V16a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /><path fill="currentColor" d="M12.226 3.5c-2.75 0-4.964 2.2-4.964 4.897 0 .462.065.909.185 1.331.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25 3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486C2.5 16.43 4.075 18 6.036 18a.75.75 0 0 1 0 1.5C3.263 19.5 1 17.276 1 14.515c0-2.705 2.17-4.893 4.864-4.983a6.366 6.366 0 0 1-.102-1.135C5.762 4.856 8.664 2 12.226 2c3.158 0 5.796 2.244 6.355 5.221 2.3.977 3.919 3.238 3.919 5.882 0 3.074-2.188 5.631-5.093 6.253a.75.75 0 0 1-.314-1.467c2.24-.48 3.907-2.446 3.907-4.786 0-2.137-1.39-3.962-3.338-4.628a5.018 5.018 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416 6.517 6.517 0 0 1 3.024-.305A4.962 4.962 0 0 0 12.226 3.5Z" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586C8 20.828 8 19.886 8 18c0-1.886 0-2.828.586-3.414C9.172 14 10.114 14 12 14c1.886 0 2.828 0 3.414.586C16 15.172 16 16.114 16 18c0 1.886 0 2.828-.586 3.414C14.828 22 13.886 22 12 22Zm1.805-3.084-1.334 1.333a.667.667 0 0 1-.942 0l-1.334-1.333a.667.667 0 1 1 .943-.943l.195.195v-1.946a.667.667 0 0 1 1.334 0v1.946l.195-.195a.667.667 0 0 1 .943.943Z" clipRule="evenodd" /><path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304.095-.711.32-1.463.938-2.08.618-.619 1.37-.844 2.08-.94.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087.711.095 1.463.32 2.08.938.619.618.844 1.37.94 2.08.085.637.086 1.416.086 2.267 2.573-.55 4.5-2.812 4.5-5.52 0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2 9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.356 4.356 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765 2 16.104 3.919 18 6.286 18H6.5Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6.5 18v-.09c0-.865 0-1.659.087-2.304.095-.711.32-1.463.938-2.08.618-.619 1.37-.844 2.08-.94.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087.711.095 1.463.32 2.08.938.619.618.844 1.37.94 2.08.085.637.086 1.416.086 2.267 2.573-.55 4.5-2.812 4.5-5.52 0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2 9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.356 4.356 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765 2 16.104 3.919 18 6.286 18H6.5Z" opacity={0.5} /><path fill="currentColor" fillRule="evenodd" d="M12 22c-1.886 0-2.828 0-3.414-.586C8 20.828 8 19.886 8 18c0-1.886 0-2.828.586-3.414C9.172 14 10.114 14 12 14c1.886 0 2.828 0 3.414.586C16 15.172 16 16.114 16 18c0 1.886 0 2.828-.586 3.414C14.828 22 13.886 22 12 22Zm1.805-3.084-1.334 1.333a.667.667 0 0 1-.942 0l-1.334-1.333a.667.667 0 1 1 .943-.943l.195.195v-1.946a.667.667 0 0 1 1.334 0v1.946l.195-.195a.667.667 0 0 1 .943.943Z" clipRule="evenodd" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CloudDownload