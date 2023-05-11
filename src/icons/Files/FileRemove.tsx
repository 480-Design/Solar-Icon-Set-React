import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const FileRemove = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M13 2.5V5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h4" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m6 18 3-3m0 3-3-3" /><path fill="currentColor" d="M2.75 10a.75.75 0 0 0-1.5 0h1.5Zm18.5 4a.75.75 0 0 0 1.5 0h-1.5Zm-5.857-9.946-.502.557.502-.557Zm3.959 3.563-.502.557.502-.557Zm2.302 2.537-.685.305.685-.305ZM3.172 20.828l.53-.53-.53.53Zm17.656 0-.53-.53.53.53ZM1.355 5.927a.75.75 0 0 0 1.493.146l-1.493-.146Zm21.29 12.146a.75.75 0 1 0-1.493-.146l1.493.146ZM14 21.25h-4v1.5h4v-1.5ZM2.75 14v-4h-1.5v4h1.5Zm18.5-.437V14h1.5v-.437h-1.5ZM14.891 4.61l3.959 3.563 1.003-1.115-3.958-3.563-1.004 1.115Zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104h1.5Zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79L18.85 8.174ZM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316v1.5Zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645l1.004-1.115ZM10 21.25c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239 1.15.155 2.625.153 4.489.153v-1.5ZM1.25 14c0 1.864-.002 3.338.153 4.489.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01-.138-1.027-.14-2.382-.14-4.289h-1.5ZM14 22.75c1.864 0 3.338.002 4.489-.153 1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811-1.027.138-2.382.14-4.289.14v1.5Zm-3.97-21.5c-1.875 0-3.356-.002-4.511.153-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811 1.033-.138 2.395-.14 4.312-.14v-1.5ZM2.848 6.073c.121-1.234.382-1.9.854-2.371l-1.06-1.06c-.836.834-1.153 1.919-1.287 3.285l1.493.146Zm18.304 11.854c-.121 1.234-.383 1.9-.854 2.371l1.06 1.06c.836-.834 1.153-1.919 1.287-3.285l-1.493-.146Z" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m15.393 4.054-.502.557.502-.557Zm3.959 3.563-.502.557.502-.557Zm2.302 2.537-.685.305.685-.305ZM3.172 20.828l.53-.53-.53.53Zm17.656 0-.53-.53.53.53ZM14 21.25h-4v1.5h4v-1.5ZM2.75 14v-4h-1.5v4h1.5Zm18.5-.437V14h1.5v-.437h-1.5ZM14.891 4.61l3.959 3.563 1.003-1.115-3.958-3.563-1.004 1.115Zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104h1.5Zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79L18.85 8.174ZM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316v1.5Zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645l1.004-1.115ZM10 21.25c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239 1.15.155 2.625.153 4.489.153v-1.5ZM1.25 14c0 1.864-.002 3.338.153 4.489.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01-.138-1.027-.14-2.382-.14-4.289h-1.5ZM14 22.75c1.864 0 3.338.002 4.489-.153 1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811-1.027.138-2.382.14-4.289.14v1.5ZM21.25 14c0 1.907-.002 3.262-.14 4.29-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869.155-1.15.153-2.625.153-4.489h-1.5Zm-18.5-4c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10h1.5Zm7.28-8.75c-1.875 0-3.356-.002-4.511.153-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811 1.033-.138 2.395-.14 4.312-.14v-1.5Z" /><path stroke="currentColor" strokeWidth={1.5} d="M13 2.5V5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h4" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m6 18 3-3m0 3-3-3" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m15.393 4.054-.502.557.502-.557Zm3.959 3.563-.502.557.502-.557Zm2.302 2.537-.685.305.685-.305ZM3.172 20.828l.53-.53-.53.53Zm17.656 0-.53-.53.53.53ZM14 21.25h-4v1.5h4v-1.5ZM2.75 14v-4h-1.5v4h1.5Zm18.5-.437V14h1.5v-.437h-1.5ZM14.891 4.61l3.959 3.563 1.003-1.115-3.958-3.563-1.004 1.115Zm7.859 8.952c0-1.689.015-2.758-.41-3.714l-1.371.61c.266.598.281 1.283.281 3.104h1.5Zm-3.9-5.389c1.353 1.218 1.853 1.688 2.119 2.285l1.37-.61c-.426-.957-1.23-1.66-2.486-2.79L18.85 8.174ZM10.03 2.75c1.582 0 2.179.012 2.71.216l.538-1.4c-.852-.328-1.78-.316-3.248-.316v1.5Zm5.865.746c-1.086-.977-1.765-1.604-2.617-1.93l-.537 1.4c.532.204.98.592 2.15 1.645l1.004-1.115ZM10 21.25c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239 1.15.155 2.625.153 4.489.153v-1.5ZM1.25 14c0 1.864-.002 3.338.153 4.489.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01-.138-1.027-.14-2.382-.14-4.289h-1.5ZM14 22.75c1.864 0 3.338.002 4.489-.153 1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811-1.027.138-2.382.14-4.289.14v1.5ZM21.25 14c0 1.907-.002 3.262-.14 4.29-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869.155-1.15.153-2.625.153-4.489h-1.5Zm-18.5-4c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 6.661 1.25 8.136 1.25 10h1.5Zm7.28-8.75c-1.875 0-3.356-.002-4.511.153-1.177.158-2.129.49-2.878 1.238l1.06 1.06c.424-.422 1.005-.676 2.017-.811 1.033-.138 2.395-.14 4.312-.14v-1.5Z" /><path stroke="currentColor" strokeWidth={1.5} d="M13 2.5V5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h4" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m6 18 3-3m0 3-3-3" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12.25 2.834c-.46-.078-1.088-.084-2.22-.084-1.917 0-3.28.002-4.312.14-1.012.135-1.593.39-2.016.812-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.29v4c0 1.906.002 3.26.14 4.288.135 1.006.389 1.586.812 2.01.423.422 1.003.676 2.009.811 1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289v-.437c0-1.536-.01-2.264-.174-2.813h-3.13c-1.133 0-2.058 0-2.79-.098-.763-.103-1.425-.325-1.954-.854-.529-.529-.751-1.19-.854-1.955-.098-.73-.098-1.656-.098-2.79V2.835Zm1.5.776V5c0 1.2.002 2.024.085 2.643.08.598.224.891.428 1.094.203.204.496.348 1.094.428.619.083 1.443.085 2.643.085h2.02a45.815 45.815 0 0 0-1.17-1.076l-3.959-3.563A37.2 37.2 0 0 0 13.75 3.61Zm-3.575-2.36c1.385 0 2.28 0 3.103.315.823.316 1.485.912 2.51 1.835l.107.096 3.958 3.563.125.112c1.184 1.065 1.95 1.754 2.361 2.678.412.924.412 1.954.411 3.546v.661c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.75-.749 1.701-1.08 2.878-1.238 1.144-.153 2.607-.153 4.455-.153H10.176Z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M5.47 14.47a.75.75 0 0 1 1.06 0l.97.97.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97.97.97a.75.75 0 0 1-1.06 1.06l-.97-.97-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m19.352 7.617-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383Z" /><path fill="currentColor" fillRule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105-.847-.114-1.694-.375-2.385-1.066-.692-.692-.953-1.539-1.067-2.386-.105-.781-.105-1.75-.105-2.848l.01-2.834c0-.083.007-.164.02-.244C11.121 2 10.636 2 10.03 2 6.239 2 4.343 2 3.172 3.172 2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22Zm-4.53-7.53a.75.75 0 0 1 1.06 0l.97.97.97-.97a.75.75 0 0 1 1.06 1.06l-.97.97.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.97.97a.75.75 0 0 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105-.847-.114-1.694-.375-2.385-1.066-.692-.692-.953-1.539-1.067-2.386-.105-.781-.105-1.75-.105-2.848l.01-2.834c0-.083.007-.164.02-.244C11.121 2 10.636 2 10.03 2 6.239 2 4.343 2 3.172 3.172 2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22Z" clipRule="evenodd" opacity={0.5} /><path fill="currentColor" d="M6.53 14.47a.75.75 0 0 0-1.06 1.06l.97.97-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97.97-.97a.75.75 0 1 0-1.06-1.06l-.97.97-.97-.97ZM11.51 2.26l-.01 2.835c0 1.097 0 2.066.105 2.848.114.847.375 1.694 1.067 2.385.69.691 1.538.953 2.385 1.067.781.105 1.751.105 2.848.105h4.052c.013.155.022.321.028.5H22c0-.268 0-.402-.01-.56a5.322 5.322 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.162-.832-.555-1.248-.833-1.819-1.04a5.488 5.488 0 0 0-.506-.153c-.384-.095-.758-.128-1.285-.14l.01.255Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default FileRemove