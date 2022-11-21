import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const AlignTop = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10 3h12M2 3h4M5 13v5.5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 21 6.565 21 7.5 21s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 7 8.435 7 7.5 7s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.161.28-.193.636-.2 1.25" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M16.5 7c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5v6c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-6c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 3h20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M7.5 7c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 8.098 5 8.565 5 9.5v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 21 6.565 21 7.5 21s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 7 8.435 7 7.5 7ZM16.5 7c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5v6c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-6c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 3h20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M7.5 7c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 8.098 5 8.565 5 9.5v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C6.098 21 6.565 21 7.5 21s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C8.902 7 8.435 7 7.5 7ZM16.5 7c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.098 14 8.565 14 9.5v6c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-6c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C17.902 7 17.435 7 16.5 7Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M1.25 3A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3Zm6.218 3.25h.064c.44 0 .82 0 1.13.028.33.03.656.096.963.273.342.198.626.482.824.824.177.307.243.633.273.962.028.312.028.691.028 1.13v9.065c0 .44 0 .82-.028 1.13-.03.33-.096.656-.273.963a2.25 2.25 0 0 1-.824.824c-.307.177-.633.243-.962.273-.312.028-.691.028-1.13.028h-.065c-.44 0-.82 0-1.13-.028-.33-.03-.656-.096-.963-.273a2.25 2.25 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962a13.47 13.47 0 0 1-.028-1.13V9.467c0-.44 0-.82.028-1.13.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273.312-.028.691-.028 1.13-.028Zm-.995 1.522c-.225.02-.307.055-.348.078a.75.75 0 0 0-.275.275c-.023.04-.058.123-.078.348-.021.235-.022.546-.022 1.027v9c0 .481 0 .792.022 1.027.02.225.055.307.078.348a.75.75 0 0 0 .275.274c.04.024.123.058.348.079.235.021.546.022 1.027.022.481 0 .792 0 1.027-.022.225-.02.307-.055.348-.079a.75.75 0 0 0 .275-.274c.023-.04.058-.123.078-.348.021-.235.022-.546.022-1.027v-9c0-.481 0-.792-.022-1.027-.02-.225-.055-.307-.078-.348a.75.75 0 0 0-.275-.275c-.04-.023-.123-.058-.348-.078A12.807 12.807 0 0 0 7.5 7.75c-.481 0-.792 0-1.027.022Zm9.995-1.522h.064c.44 0 .82 0 1.13.028.33.03.656.096.963.273.342.198.626.482.824.824.177.307.243.633.273.962.028.312.028.691.028 1.13v6.065c0 .44 0 .82-.028 1.13-.03.33-.096.656-.273.963a2.251 2.251 0 0 1-.824.824c-.307.177-.633.243-.962.273-.312.028-.691.028-1.13.028h-.065c-.44 0-.82 0-1.13-.028-.33-.03-.656-.096-.963-.273a2.251 2.251 0 0 1-.824-.824c-.177-.307-.243-.633-.273-.962-.028-.312-.028-.691-.028-1.13V9.467c0-.44 0-.82.028-1.13.03-.33.096-.656.273-.963a2.25 2.25 0 0 1 .824-.824c.307-.177.633-.243.962-.273.312-.028.691-.028 1.13-.028Zm-.995 1.522c-.225.02-.307.055-.348.078a.75.75 0 0 0-.274.275c-.024.04-.059.123-.079.348-.021.235-.022.546-.022 1.027v6c0 .481 0 .792.022 1.027.02.225.055.307.079.348a.75.75 0 0 0 .274.274c.04.024.123.058.348.079.235.021.546.022 1.027.022.481 0 .792 0 1.027-.022.225-.02.307-.055.348-.079a.75.75 0 0 0 .274-.274c.024-.04.058-.123.079-.348.021-.235.022-.546.022-1.027v-6c0-.481 0-.792-.022-1.027-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.275c-.04-.023-.123-.058-.348-.078A12.81 12.81 0 0 0 16.5 7.75c-.481 0-.792 0-1.027.022Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M1.25 3.75c0 .414.336.75.75.75h20A.75.75 0 0 0 22 3H2a.75.75 0 0 0-.75.75Z" fill="currentColor" /><path d="M7.5 7.75c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 8.848 5 9.315 5 10.25v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201A1.5 1.5 0 0 0 9.799 21c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201ZM16.5 7.75c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.848 14 9.315 14 10.25v6c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-6c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.5 7.75c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 8.848 5 9.315 5 10.25v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201A1.5 1.5 0 0 0 9.799 21c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201ZM16.5 7.75c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.848 14 9.315 14 10.25v6c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-6c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M22.75 3.75a.75.75 0 0 1-.75.75H2A.75.75 0 1 1 2 3h20a.75.75 0 0 1 .75.75Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default AlignTop