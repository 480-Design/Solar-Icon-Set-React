import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const BoltCircle = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="m9.213 10.174 2.015-1.605c1.302-1.037 1.953-1.556 2.363-1.3.41.256.197 1.05-.228 2.636l-.04.15c-.154.572-.23.858-.096 1.086l.007.012c.14.226.438.306 1.033.465 1.072.287 1.608.43 1.702.804a.626.626 0 0 1 .004.019c.083.376-.34.712-1.185 1.386l-2.015 1.604c-1.303 1.038-1.954 1.556-2.364 1.3-.409-.256-.196-1.05.229-2.636l.04-.15c.153-.571.23-.857.095-1.086l-.007-.012c-.14-.225-.438-.305-1.033-.465-1.072-.287-1.608-.43-1.702-.804a.658.658 0 0 1-.004-.019c-.083-.375.34-.712 1.186-1.385Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="m9.213 10.174 2.015-1.605c1.302-1.037 1.953-1.556 2.363-1.3.41.256.197 1.05-.228 2.636l-.04.15c-.154.572-.23.858-.096 1.086l.007.012c.14.226.438.306 1.033.465 1.072.287 1.608.43 1.702.804a.626.626 0 0 1 .004.019c.083.376-.34.712-1.185 1.386l-2.015 1.604c-1.303 1.038-1.954 1.556-2.364 1.3-.409-.256-.196-1.05.229-2.636l.04-.15c.153-.571.23-.857.095-1.086l-.007-.012c-.14-.225-.438-.305-1.033-.465-1.072-.287-1.608-.43-1.702-.804a.658.658 0 0 1-.004-.019c-.083-.375.34-.712 1.186-1.385Z" /><path stroke="currentColor" strokeWidth={1.5} d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="m9.212 10.174 2.015-1.605c1.303-1.037 1.954-1.556 2.364-1.3.409.256.196 1.05-.229 2.636l-.04.15c-.153.572-.23.858-.095 1.086l.007.012c.14.226.438.306 1.033.465 1.072.287 1.608.43 1.702.804l.004.019c.082.376-.34.712-1.186 1.386l-2.015 1.604c-1.302 1.038-1.954 1.556-2.363 1.3-.41-.256-.197-1.05.228-2.636l.04-.15c.154-.571.23-.857.096-1.086l-.007-.012c-.14-.225-.438-.305-1.033-.465-1.072-.287-1.608-.43-1.702-.804a.658.658 0 0 1-.004-.019c-.083-.375.34-.712 1.185-1.385Z" /><path stroke="currentColor" strokeWidth={1.5} d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12.357 6.792c.37-.223 1.014-.545 1.632-.159.632.396.599 1.128.544 1.55-.061.48-.231 1.114-.431 1.86l-.055.206c-.04.145-.07.26-.094.36a3.12 3.12 0 0 0-.028.127c.111.04.274.087.536.157l.05.014c.493.132.938.251 1.266.39.326.138.77.39.914.921l.002.008.002.008.002.008.002.008.002.008.001.008.002.009.002.008c.11.546-.183.969-.425 1.234-.25.274-.619.572-1.026.896l-2.06 1.64c-.613.489-1.133.902-1.552 1.155-.37.223-1.014.545-1.632.159-.632-.396-.599-1.128-.544-1.55.061-.48.231-1.114.431-1.86l.055-.206a15.07 15.07 0 0 0 .12-.475 4.402 4.402 0 0 0-.534-.17c-.519-.138-.983-.265-1.327-.416-.328-.144-.765-.402-.907-.927l-.002-.008-.002-.008-.002-.008-.002-.008-.002-.008-.002-.008-.002-.008-.001-.008c-.112-.554.191-.974.434-1.233.239-.256.593-.538.979-.845l2.102-1.674c.613-.489 1.133-.903 1.552-1.155Zm-.662 2.364c.597-.476 1.014-.806 1.327-1.011-.062.358-.194.855-.384 1.566l-.05.187a5.836 5.836 0 0 0-.165.735c-.033.26-.026.577.158.89l.004.006.004.007c.186.3.457.459.695.56.225.094.505.17.79.246.454.122.763.206.981.284-.158.15-.393.341-.735.614l-2.015 1.604c-.597.476-1.014.806-1.327 1.011.062-.358.194-.856.384-1.566l.05-.187c.068-.253.137-.511.165-.735.033-.26.026-.577-.158-.889l-.003.002c-.177-.273-.431-.435-.664-.544a5.146 5.146 0 0 0-.825-.278c-.454-.122-.766-.21-.983-.29.16-.148.394-.336.736-.608l2.015-1.604Z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25ZM2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm-.773 6.569-2.015 1.605c-.845.673-1.268 1.01-1.185 1.385l.004.019c.094.373.63.517 1.702.804.595.16.893.24 1.033.465l.007.012c.135.229.058.515-.095 1.087l-.04.15c-.426 1.586-.638 2.379-.229 2.635.41.256 1.06-.262 2.363-1.3l2.015-1.604c.846-.674 1.268-1.01 1.186-1.386l-.004-.019c-.095-.373-.63-.517-1.702-.804-.595-.16-.893-.24-1.033-.465l-.007-.012c-.135-.228-.058-.514.095-1.086l.04-.15c.425-1.586.638-2.38.229-2.636-.41-.256-1.061.263-2.364 1.3Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z" opacity={0.5} /><path fill="currentColor" d="m11.227 8.569-2.015 1.605c-.845.673-1.268 1.01-1.185 1.385l.004.019c.094.373.63.517 1.702.804.595.16.893.24 1.033.465l.007.012c.135.229.058.515-.095 1.087l-.04.15c-.426 1.586-.638 2.379-.229 2.635.41.256 1.06-.262 2.363-1.3l2.015-1.604c.846-.674 1.268-1.01 1.186-1.386l-.004-.019c-.095-.373-.63-.517-1.702-.804-.595-.16-.893-.24-1.033-.465l-.007-.012c-.135-.228-.058-.514.095-1.086l.04-.15c.425-1.586.638-2.38.229-2.636-.41-.256-1.061.263-2.364 1.3Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default BoltCircle