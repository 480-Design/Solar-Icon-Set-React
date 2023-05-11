import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const RefreshSquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7.378 11.63h-.75.75Zm0 .926-.562.497a.75.75 0 0 0 1.08.044l-.518-.541Zm2.141-1.015a.75.75 0 0 0-1.038-1.082l1.038 1.082Zm-2.958-1.038a.75.75 0 1 0-1.122.994l1.122-.994Zm8.37-1.494a.75.75 0 1 0 1.102-1.018l-1.101 1.018ZM12.045 6.25c-2.986 0-5.416 2.403-5.416 5.38h1.5c0-2.137 1.747-3.88 3.916-3.88v-1.5Zm-5.416 5.38v.926h1.5v-.926h-1.5Zm1.269 1.467 1.622-1.556-1.038-1.082-1.622 1.555 1.038 1.083Zm.042-1.039-1.378-1.555-1.122.994 1.377 1.556 1.123-.995Zm8.094-4.067a5.42 5.42 0 0 0-3.99-1.741v1.5a3.92 3.92 0 0 1 2.889 1.26l1.1-1.02ZM16.619 11.444l.56-.498a.75.75 0 0 0-1.08-.043l.52.541Zm-2.139 1.014a.75.75 0 1 0 1.04 1.082l-1.04-1.082Zm2.96 1.04a.75.75 0 0 0 1.12-.997l-1.12.996Zm-8.393 1.507a.75.75 0 0 0-1.094 1.026l1.094-1.026Zm2.888 2.745c2.993 0 5.434-2.4 5.434-5.38h-1.5c0 2.135-1.753 3.88-3.934 3.88v1.5Zm5.434-5.38v-.926h-1.5v.926h1.5Zm-1.27-1.467-1.619 1.555 1.04 1.082 1.618-1.555-1.039-1.082Zm-.04 1.04 1.38 1.554 1.122-.996-1.381-1.555-1.122.997ZM7.952 16.03a5.447 5.447 0 0 0 3.982 1.719v-1.5c-1.143 0-2.17-.48-2.888-1.245L7.953 16.03Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7.378 11.63h-.75.75Zm0 .926-.562.497a.75.75 0 0 0 1.08.044l-.518-.541Zm2.141-1.015a.75.75 0 0 0-1.038-1.082l1.038 1.082Zm-2.958-1.038a.75.75 0 1 0-1.122.994l1.122-.994Zm8.37-1.494a.75.75 0 1 0 1.102-1.018l-1.101 1.018ZM12.045 6.25c-2.986 0-5.416 2.403-5.416 5.38h1.5c0-2.137 1.747-3.88 3.916-3.88v-1.5Zm-5.416 5.38v.926h1.5v-.926h-1.5Zm1.269 1.467 1.622-1.556-1.038-1.082-1.622 1.555 1.038 1.083Zm.042-1.039-1.378-1.555-1.122.994 1.377 1.556 1.123-.995Zm8.094-4.067a5.42 5.42 0 0 0-3.99-1.741v1.5a3.92 3.92 0 0 1 2.889 1.26l1.1-1.02ZM16.619 11.444l.56-.498a.75.75 0 0 0-1.08-.043l.52.541Zm-2.139 1.014a.75.75 0 1 0 1.04 1.082l-1.04-1.082Zm2.96 1.04a.75.75 0 0 0 1.12-.997l-1.12.996Zm-8.393 1.507a.75.75 0 0 0-1.094 1.026l1.094-1.026Zm2.888 2.745c2.993 0 5.434-2.4 5.434-5.38h-1.5c0 2.135-1.753 3.88-3.934 3.88v1.5Zm5.434-5.38v-.926h-1.5v.926h1.5Zm-1.27-1.467-1.619 1.555 1.04 1.082 1.618-1.555-1.039-1.082Zm-.04 1.04 1.38 1.554 1.122-.996-1.381-1.555-1.122.997ZM7.952 16.03a5.447 5.447 0 0 0 3.982 1.719v-1.5c-1.143 0-2.17-.48-2.888-1.245L7.953 16.03Z" /><path stroke="currentColor" strokeWidth={1.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7.378 11.63h-.75.75Zm0 .926-.562.497a.75.75 0 0 0 1.08.044l-.518-.541Zm2.141-1.015a.75.75 0 0 0-1.038-1.082l1.038 1.082Zm-2.958-1.038a.75.75 0 1 0-1.122.994l1.122-.994Zm8.37-1.494a.75.75 0 1 0 1.102-1.018l-1.101 1.018ZM12.045 6.25c-2.986 0-5.416 2.403-5.416 5.38h1.5c0-2.137 1.747-3.88 3.916-3.88v-1.5Zm-5.416 5.38v.926h1.5v-.926h-1.5Zm1.269 1.467 1.622-1.556-1.038-1.082-1.622 1.555 1.038 1.083Zm.042-1.039-1.378-1.555-1.122.994 1.377 1.556 1.123-.995Zm8.094-4.067a5.42 5.42 0 0 0-3.99-1.741v1.5a3.92 3.92 0 0 1 2.889 1.26l1.1-1.02ZM16.619 11.444l.56-.498a.75.75 0 0 0-1.08-.043l.52.541Zm-2.139 1.014a.75.75 0 1 0 1.04 1.082l-1.04-1.082Zm2.96 1.04a.75.75 0 0 0 1.12-.997l-1.12.996Zm-8.393 1.507a.75.75 0 0 0-1.094 1.026l1.094-1.026Zm2.888 2.745c2.993 0 5.434-2.4 5.434-5.38h-1.5c0 2.135-1.753 3.88-3.934 3.88v1.5Zm5.434-5.38v-.926h-1.5v.926h1.5Zm-1.27-1.467-1.619 1.555 1.04 1.082 1.618-1.555-1.039-1.082Zm-.04 1.04 1.38 1.554 1.122-.996-1.381-1.555-1.122.997ZM7.952 16.03a5.447 5.447 0 0 0 3.982 1.719v-1.5c-1.143 0-2.17-.48-2.888-1.245L7.953 16.03Z" /><path stroke="currentColor" strokeWidth={1.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6.713 10.674c.454-2.52 2.672-4.424 5.33-4.424 1.578 0 3 .67 3.99 1.74a.75.75 0 1 1-1.101 1.02 3.92 3.92 0 0 0-2.888-1.26 3.91 3.91 0 0 0-3.8 2.935l.237-.226a.75.75 0 0 1 1.038 1.082l-1.622 1.556a.75.75 0 0 1-1.08-.044l-1.378-1.556a.75.75 0 1 1 1.122-.994l.152.17ZM16.648 10.696a.75.75 0 0 1 .532.251l1.38 1.555a.75.75 0 1 1-1.12.996l-.156-.175c-.454 2.523-2.683 4.428-5.35 4.428a5.447 5.447 0 0 1-3.98-1.719.75.75 0 1 1 1.093-1.026 3.947 3.947 0 0 0 2.888 1.245 3.925 3.925 0 0 0 3.815-2.932l-.23.222a.75.75 0 1 1-1.04-1.082l1.62-1.555a.75.75 0 0 1 .548-.208Z" /><path fill="currentColor" fillRule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19h-.114ZM3.995 3.995c.57-.57 1.34-.897 2.619-1.069 1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.068 2.619.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62-.57.569-1.34.896-2.619 1.068-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Zm1.997 7.62A6.59 6.59 0 0 1 12.01 5.25c1.982 0 3.76.875 4.967 2.257a.75.75 0 0 1-1.13.986A5.08 5.08 0 0 0 12.01 6.75a5.09 5.09 0 0 0-5.037 4.333h.364a.75.75 0 0 1 .53 1.281l-1.169 1.167a.75.75 0 0 1-1.06 0L4.47 12.364a.75.75 0 0 1 .53-1.28h.46Zm11.84-.615a.75.75 0 0 1 1.06 0l1.169 1.167a.75.75 0 0 1-.53 1.28h-.46a6.59 6.59 0 0 1-6.55 5.834 6.581 6.581 0 0 1-4.967-2.256.75.75 0 0 1 1.13-.987 5.08 5.08 0 0 0 3.838 1.743 5.09 5.09 0 0 0 5.036-4.333h-.363a.75.75 0 0 1-.53-1.281l1.168-1.167Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Z" opacity={0.5} /><path fill="currentColor" d="M12.01 5.25a6.59 6.59 0 0 0-6.55 5.833H5a.75.75 0 0 0-.53 1.281l1.168 1.167a.75.75 0 0 0 1.06 0l1.169-1.167a.75.75 0 0 0-.53-1.28h-.364A5.09 5.09 0 0 1 12.01 6.75a5.08 5.08 0 0 1 3.838 1.743.75.75 0 1 0 1.13-.986A6.581 6.581 0 0 0 12.01 5.25ZM18.362 10.47a.75.75 0 0 0-1.06 0l-1.168 1.166a.75.75 0 0 0 .53 1.28h.363a5.09 5.09 0 0 1-5.037 4.334 5.08 5.08 0 0 1-3.838-1.743.75.75 0 0 0-1.13.987 6.581 6.581 0 0 0 4.969 2.256 6.59 6.59 0 0 0 6.549-5.833H19a.75.75 0 0 0 .53-1.281l-1.168-1.167Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default RefreshSquare