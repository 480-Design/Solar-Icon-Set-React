import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Shop2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v3M21 22H9m-6 0h2.5M19 22v-7M5 22v-7" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2H7.472c-1.203 0-1.804 0-2.287.299-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.537-1.076-.806-1.614-1.29-1.912C18.332 2 17.731 2 16.528 2H16" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 22H2" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M20 22V11M4 22V11" opacity={0.5} /><path stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5} d="M16.528 2H7.472c-1.203 0-1.804 0-2.287.299-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.537-1.076-.806-1.614-1.29-1.912C18.332 2 17.731 2 16.528 2Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v3" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 22H2M20 22V11M4 22V11" /><path stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5} d="M16.528 2H7.472c-1.203 0-1.804 0-2.287.299-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.537-1.076-.806-1.614-1.29-1.912C18.332 2 17.731 2 16.528 2Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v3" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M7.435 1.25h9.13c.57 0 1.054 0 1.453.041.426.044.82.14 1.192.37.371.23.633.539.863.9.215.34.432.772.687 1.282l.016.033c.01.02.019.039.027.06l1.403 3.547c.168.423.353.95.407 1.488.055.552-.02 1.183-.453 1.73a2.753 2.753 0 0 1-1.41.945v9.604H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h1.25v-9.604a2.754 2.754 0 0 1-1.41-.944c-.432-.548-.508-1.18-.453-1.73.054-.54.24-1.066.406-1.489l1.404-3.548a.747.747 0 0 1 .027-.06l.016-.032c.255-.51.471-.943.687-1.282.23-.361.492-.67.863-.9.372-.23.766-.326 1.191-.37.4-.041.884-.041 1.454-.041ZM18 10.887a2.75 2.75 0 0 0 1.25.76v9.603h-4v-2.782c0-.44 0-.82-.028-1.13-.03-.33-.096-.656-.273-.963a2.251 2.251 0 0 0-.824-.824c-.307-.177-.633-.243-.962-.273-.312-.028-.691-.028-1.13-.028h-.065c-.44 0-.82 0-1.13.028-.33.03-.656.096-.963.273a2.25 2.25 0 0 0-.824.824c-.177.307-.243.633-.273.962-.028.312-.028.691-.028 1.13v2.783h-4v-9.604A2.75 2.75 0 0 0 6 10.887a2.742 2.742 0 0 0 2 .863c.788 0 1.499-.331 2-.863a2.742 2.742 0 0 0 2 .863c.788 0 1.498-.331 2-.863a2.742 2.742 0 0 0 2 .863c.788 0 1.498-.331 2-.863ZM10.25 21.25h3.5V18.5c0-.481 0-.792-.022-1.027-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.04-.024-.123-.058-.348-.079A12.776 12.776 0 0 0 12 16.75c-.481 0-.792 0-1.027.022-.225.02-.307.055-.348.079a.75.75 0 0 0-.274.274c-.024.04-.059.123-.079.348-.021.235-.022.546-.022 1.027v2.75ZM6.75 9a1.25 1.25 0 0 0 2.5 0 .75.75 0 0 1 1.5 0 1.25 1.25 0 0 0 2.5 0 .75.75 0 0 1 1.5 0 1.25 1.25 0 0 0 2.5 0 .75.75 0 0 1 1.5 0 1.25 1.25 0 0 0 2.232.773c.114-.144.17-.342.138-.652-.032-.322-.151-.688-.308-1.086L19.42 4.517c-.268-.535-.447-.89-.613-1.15-.16-.252-.274-.361-.386-.43-.111-.07-.26-.123-.557-.154-.314-.032-.72-.033-1.336-.033H7.472c-.617 0-1.023 0-1.336.033-.297.031-.446.085-.557.154-.112.069-.226.178-.386.43-.167.26-.345.615-.613 1.15L3.188 8.035c-.157.398-.276.764-.308 1.086-.031.31.024.508.138.652A1.25 1.25 0 0 0 5.25 9a.75.75 0 0 1 1.5 0Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M16.528 2H7.472c-1.203 0-1.804 0-2.288.299-.483.298-.752.836-1.29 1.912L2.491 7.76c-.325.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.538-1.076-.806-1.614-1.29-1.912C18.332 2 17.73 2 16.528 2Z" /><path fill="currentColor" fillRule="evenodd" d="M20 21.25h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h2V12.5c.744 0 1.433-.232 2-.627a3.484 3.484 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.484 3.484 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.484 3.484 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.484 3.484 0 0 0 2 .627v8.75Zm-10.5 0h5V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.55c-.348-.2-.815-.2-1.75-.2s-1.402 0-1.75.2a1.5 1.5 0 0 0-.549.55c-.201.348-.201.815-.201 1.75v2.75Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M16.528 2H7.472c-1.203 0-1.804 0-2.288.299-.483.298-.752.836-1.29 1.912L2.491 7.76c-.325.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.538-1.076-.806-1.614-1.29-1.912C18.332 2 17.73 2 16.528 2ZM9.5 21.25V18.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v2.75h-5Z" /><path fill="currentColor" fillRule="evenodd" d="M4 11a2 2 0 0 0 2-2 2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 0 0 2 2v10.25h-5.5V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C13.402 16 12.935 16 12 16s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75v2.75H4V11Z" clipRule="evenodd" opacity={0.5} /><path fill="currentColor" d="M14.5 21.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-7.5Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Shop2