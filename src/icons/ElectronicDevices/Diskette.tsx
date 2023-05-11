import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Diskette = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M17 22v-1c0-1.886 0-2.828-.586-3.414C15.828 17 14.886 17 13 17h-2c-1.886 0-2.828 0-3.414.586C7 18.172 7 19.114 7 21v1" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M7 8h6M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.341 0 .512 0 .686.015.81.07 1.601.399 2.224.921.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504.522.623.85 1.415.92 2.224.016.174.016.345.016.686 0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M3.464 20.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.341 0-.512-.015-.686a4.042 4.042 0 0 0-.921-2.224 8.285 8.285 0 0 0-.483-.504l-5.167-5.167c-.247-.247-.37-.37-.504-.483a4.043 4.043 0 0 0-2.224-.92C12.512 2 12.34 2 12 2 7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535Z" /><path stroke="currentColor" strokeWidth={1.5} d="M17 22v-1c0-1.886 0-2.828-.586-3.414C15.828 17 14.886 17 13 17h-2c-1.886 0-2.828 0-3.414.586C7 18.172 7 19.114 7 21v1" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M7 8h6" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M3.464 20.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.341 0-.512-.015-.686a4.042 4.042 0 0 0-.921-2.224 8.285 8.285 0 0 0-.483-.504l-5.167-5.167c-.247-.247-.37-.37-.504-.483a4.043 4.043 0 0 0-2.224-.92C12.512 2 12.34 2 12 2 7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535Z" /><path stroke="currentColor" strokeWidth={1.5} d="M17 22v-1c0-1.886 0-2.828-.586-3.414C15.828 17 14.886 17 13 17h-2c-1.886 0-2.828 0-3.414.586C7 18.172 7 19.114 7 21v1" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M7 8h6" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12.62 2.762A7.453 7.453 0 0 0 12 2.75c-2.378 0-4.086.002-5.386.176-1.279.172-2.05.5-2.62 1.069-.569.57-.896 1.34-1.068 2.619-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62.513.513 1.19.829 2.255 1.012v-.07c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08h2.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.343.08 2.242v.07c1.065-.183 1.742-.5 2.255-1.013.57-.57.897-1.34 1.069-2.619.174-1.3.176-3.008.176-5.386 0-.353 0-.487-.012-.62a3.293 3.293 0 0 0-.749-1.807 7.673 7.673 0 0 0-.439-.457L14.884 3.95a7.718 7.718 0 0 0-.457-.44 3.292 3.292 0 0 0-1.806-.748Zm3.63 18.418V21c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066h-2c-.964 0-1.612.002-2.095.067-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788-.064.483-.066 1.131-.066 2.095v.18c1.126.07 2.508.07 4.25.07s3.124 0 4.25-.07ZM12.031 1.25c.312 0 .513 0 .72.018.963.084 1.9.473 2.64 1.094.16.133.305.279.53.504l.024.023 5.19 5.19c.224.225.37.37.503.53a4.791 4.791 0 0 1 1.094 2.64c.018.207.018.408.018.72v.088c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19h.088ZM6.25 8A.75.75 0 0 1 7 7.25h6a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 8Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M20.535 20.535C22 19.072 22 16.714 22 12c0-.341 0-.512-.015-.686a4.042 4.042 0 0 0-.921-2.224 8.285 8.285 0 0 0-.483-.504l-5.167-5.167c-.247-.247-.37-.37-.504-.483a4.043 4.043 0 0 0-2.224-.92C12.512 2 12.34 2 12 2 7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535.685.685 1.563 1.05 2.786 1.243v-.83c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08h2.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.343.08 2.242v.83c1.223-.194 2.102-.558 2.785-1.242ZM6.25 8A.75.75 0 0 1 7 7.25h6a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 8Z" clipRule="evenodd" /><path fill="currentColor" d="M16.183 18.905c.065.483.067 1.131.067 2.095v.931C15.094 22 13.7 22 12 22c-1.7 0-3.094 0-4.25-.069V21c0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789.13-.13.327-.237.788-.3.483-.064 1.131-.066 2.095-.066h2c.964 0 1.612.002 2.095.067.461.062.659.169.789.3.13.13.237.327.3.788Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M20.535 20.535C22 19.072 22 16.714 22 12c0-.341 0-.512-.015-.686a4.042 4.042 0 0 0-.921-2.224 8.285 8.285 0 0 0-.483-.504l-5.167-5.167c-.247-.247-.37-.37-.504-.483a4.043 4.043 0 0 0-2.224-.92C12.512 2 12.34 2 12 2 7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535.685.685 1.563 1.05 2.786 1.243l1.5.153C8.906 22 10.3 22 12 22c1.7 0 3.094 0 4.25-.069l1.5-.153c1.223-.194 2.102-.558 2.785-1.242Z" opacity={0.5} /><path fill="currentColor" d="M7 7.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7ZM13.052 16.25c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.343.08 2.242v.833l-1.5.14V21c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066h-2c-.964 0-1.612.002-2.095.067-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788-.064.483-.066 1.131-.066 2.095v.926l-1.5-.149v-.829c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08h2.104Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Diskette