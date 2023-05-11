import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const ServerSquareCloud = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M10 3.75a.75.75 0 0 0 0-1.5v1.5Zm4-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-1 19.5a.75.75 0 0 0 0-1.5v1.5Zm-9.828-1.922.53-.53-.53.53ZM20.828 4.172l-.53.53.53-.53ZM21.25 13a.75.75 0 0 0 1.5 0h-1.5ZM14 12.75a.75.75 0 0 0 0-1.5v1.5Zm4-1.5a.75.75 0 0 0 0 1.5v-1.5ZM2.75 13v-1h-1.5v1h1.5Zm0-1v-1h-1.5v1h1.5ZM13 20.25h-3v1.5h3v-1.5ZM21.25 11v1h1.5v-1h-1.5Zm-20 2c0 1.864-.002 3.338.153 4.489.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01-.138-1.027-.14-2.382-.14-4.289h-1.5ZM10 20.25c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239 1.15.155 2.625.153 4.489.153v-1.5Zm4-16.5c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812l1.06-1.06c-.748-.75-1.697-1.081-2.869-1.239-1.15-.155-2.625-.153-4.489-.153v1.5ZM22.75 11c0-1.864.002-3.338-.153-4.489-.158-1.172-.49-2.121-1.238-2.87l-1.06 1.06c.422.424.676 1.004.811 2.01.138 1.028.14 2.382.14 4.289h1.5ZM10 2.25c-1.864 0-3.338-.002-4.489.153-1.172.158-2.121.49-2.87 1.238l1.06 1.06c.424-.422 1.004-.676 2.01-.811 1.028-.138 2.382-.14 4.289-.14v-1.5ZM2.75 11c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 7.661 1.25 9.136 1.25 11h1.5Zm18.5 1v1h1.5v-1h-1.5ZM2 12.75h12v-1.5H2v1.5Zm16 0h4v-1.5h-4v1.5Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M13.5 7.5H18M6 17.5v-2M6 8.5v-2M9 17.5v-2M9 8.5v-2M19.333 16.885a1.898 1.898 0 0 1 1.321-.004m-3.863.972a1.431 1.431 0 0 0-.291-.03c-.828 0-1.5.712-1.5 1.589S15.672 21 16.5 21H20c1.105 0 2-.948 2-2.118 0-.927-.563-1.714-1.346-2.001m-3.863.972a2.224 2.224 0 0 1-.124-.735c0-1.17.895-2.118 2-2.118 1.029 0 1.876.823 1.987 1.88m-3.863.973c.197.041.38.123.542.238" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M13 21.75a.75.75 0 0 0 0-1.5v1.5Zm-9.828-1.922.53-.53-.53.53ZM20.828 4.172l-.53.53.53-.53ZM21.25 13a.75.75 0 0 0 1.5 0h-1.5ZM10 3.75h4v-1.5h-4v1.5ZM2.75 13v-1h-1.5v1h1.5Zm0-1v-1h-1.5v1h1.5ZM13 20.25h-3v1.5h3v-1.5ZM21.25 11v1h1.5v-1h-1.5Zm-20 2c0 1.864-.002 3.338.153 4.489.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01-.138-1.027-.14-2.382-.14-4.289h-1.5ZM10 20.25c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239 1.15.155 2.625.153 4.489.153v-1.5Zm4-16.5c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812l1.06-1.06c-.748-.75-1.697-1.081-2.869-1.239-1.15-.155-2.625-.153-4.489-.153v1.5ZM22.75 11c0-1.864.002-3.338-.153-4.489-.158-1.172-.49-2.121-1.238-2.87l-1.06 1.06c.422.424.676 1.004.811 2.01.138 1.028.14 2.382.14 4.289h1.5ZM10 2.25c-1.864 0-3.338-.002-4.489.153-1.172.158-2.121.49-2.87 1.238l1.06 1.06c.424-.422 1.004-.676 2.01-.811 1.028-.138 2.382-.14 4.289-.14v-1.5ZM2.75 11c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 7.661 1.25 9.136 1.25 11h1.5ZM2 12.75h20v-1.5H2v1.5ZM21.25 12v1h1.5v-1h-1.5Z" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M13.5 7.5H18M6 17.5v-2M6 8.5v-2M9 17.5v-2M9 8.5v-2M19.333 16.885a1.898 1.898 0 0 1 1.321-.004m-3.863.972a1.431 1.431 0 0 0-.291-.03c-.828 0-1.5.712-1.5 1.589S15.672 21 16.5 21H20c1.105 0 2-.948 2-2.118 0-.927-.563-1.714-1.346-2.001m-3.863.972a2.224 2.224 0 0 1-.124-.735c0-1.17.895-2.118 2-2.118 1.029 0 1.876.823 1.987 1.88m-3.863.973c.197.041.38.123.542.238" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M13 21.75a.75.75 0 0 0 0-1.5v1.5Zm-9.828-1.922.53-.53-.53.53ZM20.828 4.172l-.53.53.53-.53ZM21.25 13a.75.75 0 0 0 1.5 0h-1.5ZM10 3.75h4v-1.5h-4v1.5ZM2.75 13v-1h-1.5v1h1.5Zm0-1v-1h-1.5v1h1.5ZM13 20.25h-3v1.5h3v-1.5ZM21.25 11v1h1.5v-1h-1.5Zm-20 2c0 1.864-.002 3.338.153 4.489.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01-.138-1.027-.14-2.382-.14-4.289h-1.5ZM10 20.25c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239 1.15.155 2.625.153 4.489.153v-1.5Zm4-16.5c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812l1.06-1.06c-.748-.75-1.697-1.081-2.869-1.239-1.15-.155-2.625-.153-4.489-.153v1.5ZM22.75 11c0-1.864.002-3.338-.153-4.489-.158-1.172-.49-2.121-1.238-2.87l-1.06 1.06c.422.424.676 1.004.811 2.01.138 1.028.14 2.382.14 4.289h1.5ZM10 2.25c-1.864 0-3.338-.002-4.489.153-1.172.158-2.121.49-2.87 1.238l1.06 1.06c.424-.422 1.004-.676 2.01-.811 1.028-.138 2.382-.14 4.289-.14v-1.5ZM2.75 11c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 7.661 1.25 9.136 1.25 11h1.5ZM2 12.75h20v-1.5H2v1.5ZM21.25 12v1h1.5v-1h-1.5Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M13.5 7.5H18M6 17.5v-2M6 8.5v-2M9 17.5v-2M9 8.5v-2M19.333 16.885a1.898 1.898 0 0 1 1.321-.004m-3.863.972a1.431 1.431 0 0 0-.291-.03c-.828 0-1.5.712-1.5 1.589S15.672 21 16.5 21H20c1.105 0 2-.948 2-2.118 0-.927-.563-1.714-1.346-2.001m-3.863.972a2.224 2.224 0 0 1-.124-.735c0-1.17.895-2.118 2-2.118 1.029 0 1.876.823 1.987 1.88m-3.863.973c.197.041.38.123.542.238" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M9.944 2.25h4.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433V13a.75.75 0 0 1-1.5 0v-.25H2.75V13c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h3a.75.75 0 0 1 0 1.5H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153Zm-7.194 9h18.5V11c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.289v.25ZM6 5.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 6 5.75Zm3 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 9 5.75Zm3.75 1.75a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm5.917 8.25c-.65 0-1.25.571-1.25 1.368 0 .055.003.109.008.162.12.056.235.123.342.2a.75.75 0 0 1-.867 1.223.7.7 0 0 0-.4-.13c-.374 0-.75.335-.75.839s.376.838.75.838H20c.65 0 1.25-.571 1.25-1.368 0-.624-.377-1.123-.854-1.297a1.148 1.148 0 0 0-.8.003.75.75 0 1 1-.526-1.405c.129-.048.261-.087.398-.114a1.195 1.195 0 0 0-.801-.319Zm2.654.616c-.312-1.196-1.357-2.116-2.654-2.116-1.559 0-2.75 1.325-2.75 2.868v.034c-.982.27-1.667 1.207-1.667 2.26 0 1.25.967 2.338 2.25 2.338H20c1.559 0 2.75-1.325 2.75-2.868 0-1.069-.565-2.022-1.43-2.516ZM6 14.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm3 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M3.172 19.828C4.343 21 6.229 21 10 21h3.93a3.165 3.165 0 0 1-.43-1.588c0-.816.32-1.592.857-2.162H13.5a.75.75 0 0 1 0-1.5h1.928c.511-1.29 1.727-2.25 3.239-2.25 1.56 0 2.81 1.028 3.288 2.38l.014.01C22 15.073 22 14.12 22 13v-.25H2V13c0 3.771 0 5.657 1.172 6.828ZM6 18.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75Zm3 0a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM3.172 4.172C2 5.343 2 7.229 2 11v.25h20V11c0-3.771 0-5.657-1.172-6.828C19.657 3 17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172ZM9 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM5.25 8.5a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0v2Zm7.5-1a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M20.654 16.88c-.111-1.057-.958-1.88-1.987-1.88-.845 0-1.568.555-1.861 1.34a2.222 2.222 0 0 0-.015 1.513 1.46 1.46 0 0 0-1.4.49c-.243.282-.391.657-.391 1.069 0 .877.672 1.588 1.5 1.588H20c1.105 0 2-.948 2-2.118 0-.927-.563-1.714-1.346-2.001Z" clipRule="evenodd" /><path fill="currentColor" d="M20.654 16.88c-.111-1.057-.958-1.88-1.987-1.88-.845 0-1.568.555-1.861 1.34a2.222 2.222 0 0 0-.015 1.513 1.46 1.46 0 0 0-1.4.49c-.243.282-.391.657-.391 1.069 0 .877.672 1.588 1.5 1.588H20c1.105 0 2-.948 2-2.118 0-.927-.563-1.714-1.346-2.001Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><g fill="currentColor" opacity={0.5}><path d="M10 21c-3.771 0-5.657 0-6.828-1.172C2 18.657 2 16.771 2 13v-.25h20V13c0 1.12 0 2.073-.03 2.89l-.015-.01c-.479-1.352-1.728-2.38-3.288-2.38-1.512 0-2.728.96-3.239 2.25H13.5a.75.75 0 0 0 0 1.5h.857a3.162 3.162 0 0 0-.857 2.162c0 .567.154 1.115.43 1.588H10ZM10 3h4c3.771 0 5.657 0 6.828 1.172C22 5.343 22 7.229 22 11v.25H2V11c0-3.771 0-5.657 1.172-6.828C4.343 3 6.229 3 10 3Z" /></g><path fill="currentColor" fillRule="evenodd" d="M20.654 16.88c-.111-1.057-.958-1.88-1.987-1.88-.845 0-1.568.555-1.861 1.34a2.222 2.222 0 0 0-.015 1.513 1.46 1.46 0 0 0-1.4.49c-.243.282-.391.657-.391 1.069 0 .877.672 1.588 1.5 1.588H20c1.105 0 2-.948 2-2.118 0-.927-.563-1.714-1.346-2.001Z" clipRule="evenodd" /><path fill="currentColor" d="M20.654 16.88c-.111-1.057-.958-1.88-1.987-1.88-.845 0-1.568.555-1.861 1.34a2.222 2.222 0 0 0-.015 1.513 1.46 1.46 0 0 0-1.4.49c-.243.282-.391.657-.391 1.069 0 .877.672 1.588 1.5 1.588H20c1.105 0 2-.948 2-2.118 0-.927-.563-1.714-1.346-2.001ZM12.75 7.5a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75ZM6 18.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM6 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM9 18.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM9 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75Z" /><path fill="currentColor" fillRule="evenodd" d="M22 12.75H2v-1.5h20v1.5Z" clipRule="evenodd" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ServerSquareCloud