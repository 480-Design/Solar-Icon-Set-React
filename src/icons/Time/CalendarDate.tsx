import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const CalendarDate = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 4V2.5M17 4V2.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8.47 13.97a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM10.5 13h.75a.75.75 0 0 0-1.28-.53l.53.53Zm-.75 4a.75.75 0 0 0 1.5 0h-1.5Zm-.22-1.97 1.5-1.5-1.06-1.06-1.5 1.5 1.06 1.06ZM9.75 13v4h1.5v-4h-1.5Z" fill="currentColor" /><path d="M13 16v-2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0ZM21.5 9H10.75M2 9h3.875" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828-.653.654-1.528.943-2.828 1.07" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M7 4V2.5M17 4V2.5M2 9h20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8.47 13.97a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM10.5 13h.75a.75.75 0 0 0-1.28-.53l.53.53Zm-.75 4a.75.75 0 0 0 1.5 0h-1.5Zm-.22-1.97 1.5-1.5-1.06-1.06-1.5 1.5 1.06 1.06ZM9.75 13v4h1.5v-4h-1.5Z" fill="currentColor" /><path d="M13 16v-2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2Z" stroke="currentColor" strokeWidth={1.5} /><path d="M7 4V2.5M17 4V2.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8.47 13.97a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM10.5 13h.75a.75.75 0 0 0-1.28-.53l.53.53Zm-.75 4a.75.75 0 0 0 1.5 0h-1.5Zm-.22-1.97 1.5-1.5-1.06-1.06-1.5 1.5 1.06 1.06ZM9.75 13v4h1.5v-4h-1.5Z" fill="currentColor" /><path d="M13 16v-2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0ZM2.5 9h19" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7 1.75a.75.75 0 0 1 .75.75v.763c.662-.013 1.391-.013 2.194-.013h4.112c.803 0 1.532 0 2.194.013V2.5a.75.75 0 0 1 1.5 0v.827c.26.02.506.045.739.076 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.05.375.084.784.107 1.23a.747.747 0 0 1 .019.46c.027.801.027 1.712.027 2.743v2.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.031 0-1.942.027-2.744a.75.75 0 0 1 .02-.46c.022-.445.056-.854.106-1.229.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238.233-.031.48-.056.739-.076V2.5A.75.75 0 0 1 7 1.75Zm-4.237 8c-.013.653-.013 1.396-.013 2.25v2c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289v-2c0-.854 0-1.597-.013-2.25H2.763Zm18.405-1.5H2.832c.016-.19.035-.369.058-.54.135-1.005.389-1.585.812-2.008.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.023.17.042.35.058.539Zm-10.381 4.057a.75.75 0 0 1 .463.693v4a.75.75 0 0 1-1.5 0v-2.19l-.22.22a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 .817-.163ZM14 13.75a.25.25 0 0 0-.25.25v2a.25.25 0 1 0 .5 0v-2a.25.25 0 0 0-.25-.25Zm-1.75.25a1.75 1.75 0 1 1 3.5 0v2a1.75 1.75 0 1 1-3.5 0v-2Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013V2.5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0-.839 0-1.585-.013-2.25H2.013C2 10.415 2 11.161 2 12v2c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14v-2Zm-8 .25A1.75 1.75 0 0 0 12.25 14v2a1.75 1.75 0 1 0 3.5 0v-2A1.75 1.75 0 0 0 14 12.25Zm0 1.5a.25.25 0 0 0-.25.25v2a.25.25 0 1 0 .5 0v-2a.25.25 0 0 0-.25-.25Zm-3.213-1.443a.75.75 0 0 1 .463.693v4a.75.75 0 0 1-1.5 0v-2.19l-.22.22a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 .817-.163Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.96 2c.418 0 .756.31.756.692V4.09c.67-.012 1.422-.012 2.268-.012h4.032c.846 0 1.597 0 2.268.012V2.692c0-.382.338-.692.756-.692s.756.31.756.692V4.15c1.45.106 2.403.368 3.103 1.008.7.641.985 1.513 1.101 2.842v1H2V8c.116-1.329.401-2.2 1.101-2.842.7-.64 1.652-.902 3.103-1.008V2.692c0-.382.339-.692.756-.692Z" fill="currentColor" /><path opacity={0.5} d="M22 14v-2c0-.839-.013-2.335-.026-3H2.006c-.013.665 0 2.161 0 3v2c0 3.771 0 5.657 1.17 6.828C4.349 22 6.234 22 10.004 22h4c3.77 0 5.654 0 6.826-1.172C22 19.657 22 17.771 22 14Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M14 12.25A1.75 1.75 0 0 0 12.25 14v2a1.75 1.75 0 1 0 3.5 0v-2A1.75 1.75 0 0 0 14 12.25Zm0 1.5a.25.25 0 0 0-.25.25v2a.25.25 0 1 0 .5 0v-2a.25.25 0 0 0-.25-.25Z" fill="currentColor" /><path d="M11.25 13a.75.75 0 0 0-1.28-.53l-1.5 1.5a.75.75 0 0 0 1.06 1.06l.22-.22V17a.75.75 0 0 0 1.5 0v-4Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CalendarDate