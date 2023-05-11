import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const AlignHorizontalCenter = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 2v3m0 17v-3m0-5v-4M13 5H7.5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 6.098 5 6.565 5 7.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 10 6.565 10 7.5 10h9c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549C19 8.902 19 8.435 19 7.5s0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.28-.161-.636-.193-1.25-.2" /><path stroke="currentColor" strokeWidth={1.5} d="M7 16.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C8.098 14 8.565 14 9.5 14h5c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-5c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C7 17.902 7 17.435 7 16.5Z" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 2v3m0 17v-3m0-5v-4" opacity={0.5} /><path stroke="currentColor" strokeWidth={1.5} d="M5 7.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C6.098 5 6.565 5 7.5 5h9c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C19 6.098 19 6.565 19 7.5s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-9c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C5 8.902 5 8.435 5 7.5ZM7 16.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C8.098 14 8.565 14 9.5 14h5c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-5c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C7 17.902 7 17.435 7 16.5Z" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 2v3m0 17v-3m0-5v-4" /><path stroke="currentColor" strokeWidth={1.5} d="M5 7.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C6.098 5 6.565 5 7.5 5h9c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C19 6.098 19 6.565 19 7.5s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-9c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C5 8.902 5 8.435 5 7.5ZM7 16.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C8.098 14 8.565 14 9.5 14h5c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-5c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C7 17.902 7 17.435 7 16.5Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.25h3.782c.44 0 .82 0 1.13.028.33.03.656.096.963.273.342.198.626.482.824.824.177.307.243.633.273.962.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273-.312.028-.691.028-1.13.028H12.75v2.5h1.782c.44 0 .82 0 1.13.028.33.03.656.096.963.273.342.198.626.482.824.824.177.307.243.633.273.962.028.312.028.691.028 1.13v.065c0 .44 0 .82-.028 1.13-.03.33-.096.656-.273.963a2.251 2.251 0 0 1-.824.824c-.307.177-.633.243-.962.273-.312.028-.691.028-1.13.028H12.75V22a.75.75 0 0 1-1.5 0v-2.25H9.468c-.44 0-.82 0-1.13-.028-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273.312-.028.691-.028 1.13-.028h1.783v-2.5H7.468c-.44 0-.82 0-1.13-.028-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962-.028-.312-.028-.691-.028-1.13v-.065c0-.44 0-.82.028-1.13.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273.312-.028.691-.028 1.13-.028h3.783V2a.75.75 0 0 1 .75-.75Zm-4.5 4.5c-.481 0-.792 0-1.027.022-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348-.021.235-.022.546-.022 1.027 0 .481 0 .792.022 1.027.02.225.055.307.078.348a.75.75 0 0 0 .275.275c.04.023.123.058.348.078.235.021.546.022 1.027.022h9c.481 0 .792 0 1.027-.022.225-.02.307-.055.348-.078a.75.75 0 0 0 .274-.275c.024-.04.058-.123.079-.348.021-.235.022-.546.022-1.027 0-.481 0-.792-.022-1.027-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A12.81 12.81 0 0 0 16.5 5.75h-9Zm2 9c-.481 0-.792 0-1.027.022-.225.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348A12.81 12.81 0 0 0 7.75 16.5c0 .481 0 .792.022 1.027.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079.235.021.546.022 1.027.022h5c.481 0 .792 0 1.027-.022.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348.021-.235.022-.546.022-1.027 0-.481 0-.792-.022-1.027-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.059-.348-.079a12.776 12.776 0 0 0-1.027-.022h-5Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19 7.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 5 17.435 5 16.5 5h-3.75V2a.75.75 0 0 0-1.5 0v3H7.5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 6.098 5 6.565 5 7.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 10 6.565 10 7.5 10h3.75v4H9.5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C7 15.098 7 15.565 7 16.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C8.098 19 8.565 19 9.5 19h1.75v3a.75.75 0 0 0 1.5 0v-3h1.75c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75s0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C15.902 14 15.435 14 14.5 14h-1.75v-4h3.75c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549C19 8.902 19 8.435 19 7.5Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M14.5 14h-5c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C7 15.098 7 15.565 7 16.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C8.098 19 8.565 19 9.5 19h5c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75s0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C15.902 14 15.435 14 14.5 14Z" clipRule="evenodd" /><path fill="currentColor" d="M19 7.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 5 17.435 5 16.5 5h-9c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 6.098 5 6.565 5 7.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 10 6.565 10 7.5 10h9c.935 0 1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549C19 8.902 19 8.435 19 7.5Z" /><g fill="currentColor" opacity={0.5}><path d="M12.75 5V2a.75.75 0 0 0-1.5 0v3h1.5ZM11.25 10v4h1.5v-4h-1.5ZM11.25 19v3a.75.75 0 0 0 1.5 0v-3h-1.5Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default AlignHorizontalCenter