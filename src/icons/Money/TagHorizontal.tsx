import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const TagHorizontal = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M13.358 21c2.227 0 3.341 0 4.27-.533.93-.532 1.52-1.509 2.701-3.462l.681-1.126c.993-1.643 1.49-2.465 1.49-3.379 0-.914-.497-1.736-1.49-3.379l-.68-1.126c-1.181-1.953-1.771-2.93-2.701-3.462C16.699 4 15.585 4 13.358 4h-2.637C9.683 4 8.783 4 8 4.024m-4.296 1.22C2.5 6.49 2.5 8.495 2.5 12.5c0 4.007 0 6.01 1.204 7.255.998 1.033 2.501 1.209 5.196 1.239M7.5 7.995V17" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M9.721 20h2.637c2.227 0 3.341 0 4.27-.533.93-.532 1.52-1.509 2.701-3.462l.681-1.126c.993-1.643 1.49-2.465 1.49-3.379 0-.914-.497-1.736-1.49-3.379l-.68-1.126c-1.181-1.953-1.771-2.93-2.701-3.462C15.699 3 14.585 3 12.358 3H9.721C5.846 3 3.908 3 2.704 4.245 1.5 5.49 1.5 7.493 1.5 11.5s0 6.01 1.204 7.255S5.846 20 9.72 20Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M6.5 6.995V16" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10.721 21h2.637c2.227 0 3.341 0 4.27-.533.93-.532 1.52-1.509 2.701-3.462l.681-1.126c.993-1.643 1.49-2.465 1.49-3.379 0-.914-.497-1.736-1.49-3.379l-.68-1.126c-1.181-1.953-1.771-2.93-2.701-3.462C16.699 4 15.585 4 13.358 4h-2.637C6.846 4 4.908 4 3.704 5.245 2.5 6.49 2.5 8.493 2.5 12.5s0 6.01 1.204 7.255S6.846 21 10.72 21ZM7.5 7.995V17" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M10.663 3.25h2.733c1.081 0 1.948 0 2.658.07.735.073 1.36.225 1.948.562.587.336 1.04.8 1.486 1.403.432.583.89 1.34 1.464 2.29l.72 1.192c.48.793.869 1.437 1.133 1.996.276.584.445 1.13.445 1.737 0 .607-.169 1.153-.445 1.737-.264.56-.653 1.203-1.133 1.996l-.72 1.192c-.574.95-1.032 1.707-1.465 2.29-.446.602-.898 1.067-1.485 1.403-.588.337-1.213.489-1.948.562-.71.07-1.576.07-2.658.07h-2.733c-1.889 0-3.385 0-4.556-.163-1.207-.168-2.179-.521-2.942-1.31-.76-.786-1.098-1.78-1.258-3.017-.157-1.206-.157-2.748-.157-4.705v-.11c0-1.957 0-3.5.157-4.705.16-1.236.498-2.23 1.258-3.017.763-.789 1.735-1.142 2.942-1.31 1.171-.163 2.667-.163 4.556-.163Zm-4.35 1.648c-1.03.144-1.63.413-2.07.868-.444.46-.709 1.089-.849 2.167-.143 1.098-.144 2.543-.144 4.567s.001 3.469.144 4.567c.14 1.078.405 1.708.85 2.167.44.455 1.038.724 2.07.867 1.056.147 2.447.149 4.407.149h2.637c1.128 0 1.92 0 2.548-.063.611-.06 1.008-.175 1.35-.37.343-.197.65-.487 1.027-.995.385-.52.807-1.216 1.404-2.205l.681-1.126c.505-.835.853-1.413 1.082-1.896.22-.466.3-.787.3-1.095 0-.308-.08-.629-.3-1.095-.229-.483-.577-1.061-1.082-1.896l-.68-1.126c-.598-.988-1.02-1.685-1.405-2.205-.377-.508-.684-.798-1.027-.994-.342-.196-.739-.31-1.35-.371-.628-.062-1.42-.063-2.548-.063h-2.637c-1.96 0-3.351.002-4.407.148Zm1.187 2.347a.75.75 0 0 1 .75.75V17a.75.75 0 0 1-1.5 0V7.995a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12.858 20h-2.637c-3.875 0-5.813 0-7.017-1.172C2 17.657 2 15.771 2 12c0-3.771 0-5.657 1.204-6.828C4.408 4 6.346 4 10.22 4h2.637c2.227 0 3.341 0 4.27.501.93.502 1.52 1.42 2.701 3.259l.681 1.06C21.503 10.366 22 11.14 22 12c0 .86-.497 1.634-1.49 3.18l-.68 1.06c-1.181 1.838-1.771 2.757-2.701 3.259-.93.501-2.044.501-4.271.501ZM7 7.054c.414 0 .75.316.75.706v8.475c0 .39-.336.706-.75.706s-.75-.316-.75-.706V7.76c0-.39.336-.706.75-.706Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M10.221 20h2.637c2.227 0 3.341 0 4.27-.501.93-.502 1.52-1.42 2.701-3.259l.681-1.06C21.503 13.634 22 12.86 22 12c0-.86-.497-1.634-1.49-3.18l-.68-1.06c-1.181-1.838-1.771-2.757-2.701-3.259C16.199 4 15.085 4 12.858 4h-2.637C6.346 4 4.408 4 3.204 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.204 6.828C4.408 20 6.346 20 10.22 20Z" opacity={0.5} /><path fill="currentColor" d="M7 7.055c.414 0 .75.316.75.706v8.475c0 .39-.336.706-.75.706s-.75-.316-.75-.706V7.76c0-.39.336-.706.75-.706Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default TagHorizontal