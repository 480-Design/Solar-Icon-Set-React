import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Scanner2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M6 13s1.8-2 6-2 6 2 6 2M10 22c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14M14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10M22 14v1m-8 7c3.771 0 5.657 0 6.828-1.172.654-.653.943-1.528 1.07-2.828M2 10V9m8-7C6.229 2 4.343 2 3.172 3.172 2.518 3.825 2.229 4.7 2.102 6" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M6 13s1.8-2 6-2 6 2 6 2" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22M10 22c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14M10 2C6.229 2 4.343 2 3.172 3.172 2 4.343 2 6.229 2 10M14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M6 13s1.8-2 6-2 6 2 6 2M22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22M10 22c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14M10 2C6.229 2 4.343 2 3.172 3.172 2 4.343 2 6.229 2 10M14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M14 2.75c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.138 1.028.14 2.382.14 4.289a.75.75 0 0 0 1.5 0v-.056c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-1.14-.153-2.595-.153-4.433-.153H14a.75.75 0 0 0 0 1.5ZM9.944 1.25H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.289a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153ZM5.498 13.557a.75.75 0 0 1-.055-1.059L6 13c-.557-.502-.558-.501-.557-.502v-.001l.002-.002.003-.003.01-.01a2.055 2.055 0 0 1 .11-.111c.072-.069.175-.161.31-.27.27-.215.669-.493 1.205-.768C8.159 10.78 9.776 10.25 12 10.25c2.224 0 3.841.53 4.917 1.083a7.16 7.16 0 0 1 1.205.769 4.775 4.775 0 0 1 .395.353l.026.027.009.01.003.003.001.002s.002.001-.556.503l.558-.502a.75.75 0 0 1-1.112 1.008l-.006-.006a3.282 3.282 0 0 0-.256-.227 5.665 5.665 0 0 0-.951-.606c-.874-.448-2.257-.917-4.233-.917-1.976 0-3.359.47-4.233.917a5.664 5.664 0 0 0-.952.606 3.269 3.269 0 0 0-.255.227l-.006.006a.75.75 0 0 1-1.056.051ZM22 13.25a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289a.75.75 0 0 1 .75-.75ZM2.75 14a.75.75 0 0 0-1.5 0v.056c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153H10a.75.75 0 0 0 0-1.5c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812-.423-.423-.677-1.003-.812-2.009-.138-1.027-.14-2.382-.14-4.289Z" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Zm3.893 9.15a.75.75 0 0 0 1.283.776l.004-.005.027-.04c.028-.04.073-.101.136-.177.128-.153.326-.363.6-.573.543-.418 1.386-.845 2.593-.845s2.05.427 2.593.845c.274.21.472.42.6.573a2.65 2.65 0 0 1 .163.217l.004.005a.75.75 0 0 0 1.283-.776L16 13l.643-.386v-.001l-.002-.002-.002-.004-.006-.01a2.052 2.052 0 0 0-.076-.113 4.16 4.16 0 0 0-.212-.277 5.31 5.31 0 0 0-.838-.802c-.758-.582-1.914-1.155-3.507-1.155-1.593 0-2.75.573-3.507 1.155-.376.29-.653.58-.838.802a4.182 4.182 0 0 0-.288.39l-.006.01-.002.004-.001.002s-.001.001.642.387l-.643-.386ZM19 13.25a.75.75 0 0 1 .75.75v.054c0 1.133 0 2.058-.098 2.79-.103.763-.325 1.425-.854 1.954-.529.529-1.19.751-1.955.854-.73.098-1.656.098-2.79.098H14a.75.75 0 0 1 0-1.5c1.2 0 2.024-.002 2.643-.085.598-.08.89-.224 1.094-.428.204-.203.348-.496.428-1.094.083-.619.085-1.443.085-2.643a.75.75 0 0 1 .75-.75ZM5.75 14a.75.75 0 0 0-1.5 0v.054c0 1.133 0 2.058.098 2.79.103.763.325 1.425.854 1.954.529.529 1.19.751 1.955.854.73.098 1.656.098 2.79.098H10a.75.75 0 0 0 0-1.5c-1.2 0-2.024-.002-2.643-.085-.598-.08-.89-.224-1.094-.428-.204-.203-.348-.496-.428-1.094C5.752 16.024 5.75 15.2 5.75 14Zm4.196-9.75H10a.75.75 0 0 1 0 1.5c-1.2 0-2.024.002-2.643.085-.598.08-.89.224-1.094.428-.204.203-.348.496-.428 1.094C5.752 7.976 5.75 8.8 5.75 10a.75.75 0 0 1-1.5 0v-.054c0-1.133 0-2.058.098-2.79.103-.763.325-1.425.854-1.954.529-.529 1.19-.751 1.955-.854.73-.098 1.656-.098 2.79-.098ZM14 5.75c1.2 0 2.024.002 2.643.085.598.08.89.224 1.094.428.204.203.348.496.428 1.094.083.619.085 1.443.085 2.643a.75.75 0 0 0 1.5 0v-.054c0-1.133 0-2.058-.098-2.79-.103-.763-.325-1.425-.854-1.954-.529-.529-1.19-.751-1.955-.854-.73-.098-1.656-.098-2.79-.098H14a.75.75 0 0 0 0 1.5Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Z" opacity={0.5} /><path fill="currentColor" d="M7.357 12.614a.75.75 0 0 0 1.283.776l.004-.005.027-.04c.028-.04.073-.101.136-.177.128-.153.326-.363.6-.573.543-.418 1.386-.845 2.593-.845s2.05.427 2.593.845c.274.21.472.42.6.573a2.65 2.65 0 0 1 .163.217l.004.005a.75.75 0 0 0 1.283-.776v-.001l-.002-.002-.002-.004-.006-.01a1.378 1.378 0 0 0-.076-.113 4.16 4.16 0 0 0-.212-.277 5.31 5.31 0 0 0-.838-.802c-.758-.582-1.914-1.155-3.507-1.155-1.593 0-2.75.573-3.507 1.155-.376.29-.653.58-.838.802a4.179 4.179 0 0 0-.288.39l-.006.01-.002.004-.001.002s-.001.001.642.387l-.643-.386ZM19 13.25a.75.75 0 0 1 .75.75v.054c0 1.133 0 2.058-.098 2.79-.103.763-.325 1.425-.854 1.954-.529.529-1.19.751-1.955.854-.73.098-1.656.098-2.79.098H14a.75.75 0 0 1 0-1.5c1.2 0 2.024-.002 2.643-.085.598-.08.89-.224 1.094-.428.204-.203.348-.496.428-1.094.083-.619.085-1.443.085-2.643a.75.75 0 0 1 .75-.75ZM5.75 14a.75.75 0 0 0-1.5 0v.054c0 1.133 0 2.058.098 2.79.103.763.325 1.425.854 1.954.529.529 1.19.751 1.955.854.73.098 1.656.098 2.79.098H10a.75.75 0 0 0 0-1.5c-1.2 0-2.024-.002-2.643-.085-.598-.08-.89-.224-1.094-.428-.204-.203-.348-.496-.428-1.094C5.752 16.024 5.75 15.2 5.75 14ZM9.946 4.25H10a.75.75 0 0 1 0 1.5c-1.2 0-2.024.002-2.643.085-.598.08-.89.224-1.094.428-.204.203-.348.496-.428 1.094C5.752 7.976 5.75 8.8 5.75 10a.75.75 0 0 1-1.5 0v-.054c0-1.133 0-2.058.098-2.79.103-.763.325-1.425.854-1.954.529-.529 1.19-.751 1.955-.854.73-.098 1.656-.098 2.79-.098ZM14 5.75c1.2 0 2.024.002 2.643.085.598.08.89.224 1.094.428.204.203.348.496.428 1.094.083.619.085 1.443.085 2.643a.75.75 0 0 0 1.5 0v-.054c0-1.133 0-2.058-.098-2.79-.103-.763-.325-1.425-.854-1.954-.529-.529-1.19-.751-1.955-.854-.73-.098-1.656-.098-2.79-.098H14a.75.75 0 0 0 0 1.5Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Scanner2