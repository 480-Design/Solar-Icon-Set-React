import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const PasswordMinimalisticInput = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M15 2v20M22 12c0 3.771 0 5.657-1.172 6.828C19.765 19.892 18.114 19.99 15 20M12 4h-2C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h2m3-16c3.114.01 4.765.108 5.828 1.172.654.653.943 1.528 1.07 2.828" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M3.172 18.828C4.343 20 6.229 20 10 20h5c3.114-.01 4.765-.108 5.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.765 4.108 18.114 4.01 15 4L12 4h-2C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828Z" opacity={0.5} /><path fill="currentColor" d="M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M15 2v20" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 4h-2C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h2m3-16c3.114.01 4.765.108 5.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.765 19.892 18.114 19.99 15 20" /><path fill="currentColor" d="M9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M15 2v20" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M15.75 2a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0v-1.256c1.21-.012 2.22-.053 3.059-.196 1.028-.174 1.872-.511 2.55-1.19.748-.748 1.08-1.697 1.238-2.869.153-1.14.153-2.595.153-4.433v-.112c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87-.678-.678-1.522-1.015-2.55-1.19-.839-.142-1.85-.183-3.059-.196V2Zm0 2.756v14.488c1.186-.012 2.09-.052 2.808-.174.842-.143 1.355-.387 1.74-.772.423-.423.677-1.003.812-2.009.138-1.028.14-2.382.14-4.289 0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.385-.385-.898-.629-1.74-.772-.719-.122-1.622-.162-2.808-.174Z" clipRule="evenodd" /><path fill="currentColor" d="M9.944 3.25c-1.838 0-3.294 0-4.433.153-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87-.153 1.14-.153 2.595-.153 4.433v.112c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153H12a.75.75 0 0 0 0-1.5h-2c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812-.423-.423-.677-1.003-.812-2.009-.138-1.028-.14-2.382-.14-4.289 0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14h2a.75.75 0 0 0 0-1.5H9.944Z" /><path fill="currentColor" d="M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M15.75 2a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0v-2.006c2.636-.027 4.104-.191 5.078-1.166C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828-.974-.975-2.442-1.139-5.078-1.166V2Z" /><path fill="currentColor" fillRule="evenodd" d="M3.172 18.828C4.343 20 6.229 20 10 20h3V4h-3C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828ZM13 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3.172 18.828C4.343 20 6.229 20 10 20l5.75-.006c2.636-.027 4.104-.191 5.078-1.166C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828-.974-.975-2.454-1.144-5.09-1.172H10C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828Z" opacity={0.5} /><path fill="currentColor" d="M13 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" /><path fill="currentColor" fillRule="evenodd" d="M15 1.25a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default PasswordMinimalisticInput