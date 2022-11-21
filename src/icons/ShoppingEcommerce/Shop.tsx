import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Shop = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.5 11v3c0 3.771 0 5.657 1.172 6.828C5.843 22 7.729 22 11.5 22h1c3.771 0 5.657 0 6.828-1.172M20.5 11v3c0 1.17 0 2.158-.035 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M9.5 2h5m-5 0-.652 6.517a3.167 3.167 0 1 0 6.304 0L14.5 2m-5 0H7.418c-.908 0-1.362 0-1.752.107a3 3 0 0 0-1.888 1.548M9.5 2l-.725 7.245a3.06 3.06 0 1 1-6.043-.904L2.8 8m11.7-6h2.082c.908 0 1.362 0 1.752.107a3 3 0 0 1 1.888 1.548c.181.36.27.806.448 1.696l.598 2.99a3.06 3.06 0 1 1-6.043.904L14.5 2ZM9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.5 2h5l.652 6.517a3.168 3.168 0 1 1-6.304 0L9.5 2Z" stroke="currentColor" strokeWidth={1.5} /><path d="M3.33 5.351c.178-.89.267-1.335.448-1.696a3 3 0 0 1 1.888-1.548C6.056 2 6.51 2 7.418 2H9.5l-.725 7.245a3.06 3.06 0 1 1-6.043-.904l.598-2.99ZM20.67 5.351c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H14.5l.725 7.245a3.06 3.06 0 1 0 6.043-.904l-.598-2.99Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M8.75 21.5a.75.75 0 0 0 1.5 0h-1.5Zm5 0a.75.75 0 0 0 1.5 0h-1.5Zm0-5.299.375-.65-.375.65Zm.549.549-.65.375.65-.375Zm-4.598 0 .65.375-.65-.375Zm.549-.549.375.65-.375-.65Zm2.25 5.049h-1v1.5h1v-1.5ZM4.25 14v-3h-1.5v3h1.5Zm15.5-3v3h1.5v-3h-1.5ZM11.5 21.25c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239 1.15.155 2.625.153 4.489.153v-1.5ZM2.75 14c0 1.864-.002 3.338.153 4.489.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01-.138-1.027-.14-2.382-.14-4.289h-1.5Zm9.75 8.75c1.864 0 3.338.002 4.489-.153 1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811-1.028.138-2.382.14-4.289.14v1.5ZM19.75 14c0 1.907-.002 3.262-.14 4.29-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869.155-1.15.153-2.625.153-4.489h-1.5Zm-9.5 7.5v-3h-1.5v3h1.5Zm3.5-3v3h1.5v-3h-1.5ZM12 16.75c.481 0 .792 0 1.027.022.225.02.307.055.348.079l.75-1.3c-.307-.177-.633-.243-.962-.273-.32-.029-.71-.028-1.163-.028v1.5Zm3.25 1.75c0-.453 0-.844-.028-1.163-.03-.329-.096-.655-.273-.962l-1.3.75c.024.04.059.123.079.348.021.235.022.546.022 1.027h1.5Zm-1.875-1.65a.75.75 0 0 1 .274.275l1.3-.75a2.251 2.251 0 0 0-.824-.824l-.75 1.3ZM10.25 18.5c0-.481 0-.792.022-1.027.02-.225.055-.307.079-.348l-1.3-.75c-.177.307-.243.633-.273.962-.029.32-.028.71-.028 1.163h1.5ZM12 15.25c-.454 0-.844 0-1.163.028-.329.03-.655.096-.962.273l.75 1.3c.04-.024.123-.058.348-.079.235-.021.546-.022 1.027-.022v-1.5Zm-1.65 1.875a.75.75 0 0 1 .275-.274l-.75-1.3a2.25 2.25 0 0 0-.824.824l1.3.75Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.5 11v3c0 3.771 0 5.657 1.172 6.828C5.843 22 7.729 22 11.5 22h1c3.771 0 5.657 0 6.828-1.172C20.5 19.657 20.5 17.771 20.5 14v-3" stroke="currentColor" strokeWidth={1.5} /><path d="M9.5 2h5l.652 6.517a3.167 3.167 0 1 1-6.304 0L9.5 2Z" stroke="currentColor" strokeWidth={1.5} /><path d="M3.33 5.351c.178-.89.267-1.335.448-1.696a3 3 0 0 1 1.888-1.548C6.056 2 6.51 2 7.418 2H9.5l-.725 7.245a3.06 3.06 0 1 1-6.043-.904l.598-2.99ZM20.67 5.351c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H14.5l.725 7.245a3.06 3.06 0 1 0 6.043-.904l-.598-2.99Z" stroke="currentColor" strokeWidth={1.5} /><path d="M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.307 1.25c-.801 0-1.35 0-1.84.133a3.75 3.75 0 0 0-2.36 1.936c-.227.452-.334.991-.491 1.777l-.62 3.098a3.79 3.79 0 0 0 .754 3.117v2.745c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.748.748 1.697 1.08 2.87 1.238 1.139.153 2.595.153 4.432.153h1.113c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433v-2.744a3.79 3.79 0 0 0 .753-3.118l-.62-3.098c-.156-.786-.264-1.325-.49-1.777a3.75 3.75 0 0 0-2.361-1.936c-.489-.133-1.038-.133-1.84-.133H7.308Zm10.961 11.5a3.8 3.8 0 0 0 1.482-.298V14c0 1.907-.002 3.262-.14 4.29-.135 1.005-.389 1.585-.812 2.008-.423.423-1.003.677-2.01.812a15.6 15.6 0 0 1-1.538.114v-2.756c0-.44 0-.82-.028-1.13-.03-.33-.096-.656-.274-.963a2.25 2.25 0 0 0-.823-.824c-.307-.177-.633-.243-.963-.273-.31-.028-.69-.028-1.13-.028h-.065c-.44 0-.819 0-1.13.028-.33.03-.655.096-.962.273a2.25 2.25 0 0 0-.824.824c-.177.307-.243.633-.273.962-.028.312-.028.691-.028 1.13v2.757a15.6 15.6 0 0 1-1.54-.114c-1.005-.135-1.585-.389-2.008-.812-.424-.423-.677-1.003-.812-2.009-.139-1.027-.14-2.382-.14-4.289v-1.548a3.807 3.807 0 0 0 4.588-1.306A3.908 3.908 0 0 0 12 12.75a3.908 3.908 0 0 0 3.162-1.604 3.807 3.807 0 0 0 3.106 1.604Zm-8.018 8.498c.388.002.804.002 1.25.002h1c.446 0 .861 0 1.25-.002V18.5c0-.481-.001-.792-.022-1.027-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.041-.024-.123-.058-.348-.079A12.831 12.831 0 0 0 12 16.75c-.481 0-.792 0-1.027.022-.226.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348-.021.235-.022.546-.022 1.027v2.748ZM8.67 2.75H7.418c-.954 0-1.285.007-1.553.08a2.25 2.25 0 0 0-1.416 1.161c-.125.249-.196.571-.383 1.507l-.598 2.99a2.31 2.31 0 1 0 4.562.683l.069-.686.004-.042.569-5.693Zm.921 5.875.588-5.875h3.642l.584 5.842a2.417 2.417 0 1 1-4.814.033Zm8.544-5.795c-.268-.073-.599-.08-1.553-.08h-1.254l.643 6.42a2.309 2.309 0 1 0 4.561-.682l-.597-2.99c-.188-.936-.259-1.258-.383-1.507a2.25 2.25 0 0 0-1.417-1.161Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.778 3.655c-.181.36-.27.806-.448 1.696l-.598 2.99a3.06 3.06 0 1 0 6.043.904l.07-.69a3.167 3.167 0 1 0 6.306-.038l.074.728a3.06 3.06 0 1 0 6.043-.904l-.598-2.99c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H7.418c-.908 0-1.362 0-1.752.107a3 3 0 0 0-1.888 1.548ZM18.268 13.5a4.53 4.53 0 0 0 2.232-.581V14c0 3.771 0 5.657-1.172 6.828-.943.944-2.348 1.127-4.828 1.163V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C13.402 16 12.935 16 12 16s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75v3.491c-2.48-.036-3.885-.22-4.828-1.163C3.5 19.657 3.5 17.771 3.5 14v-1.081a4.53 4.53 0 0 0 2.232.581 4.549 4.549 0 0 0 3.112-1.228A4.643 4.643 0 0 0 12 13.5a4.644 4.644 0 0 0 3.155-1.228A4.549 4.549 0 0 0 18.27 13.5Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.5 21.991V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C13.402 16 12.935 16 12 16s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75v3.491h5Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M5.732 12c-.89 0-1.679-.376-2.232-.967V14c0 3.771 0 5.657 1.172 6.828.943.944 2.348 1.127 4.828 1.163h5c2.48-.036 3.885-.22 4.828-1.163C20.5 19.657 20.5 17.771 20.5 14v-2.966a3.06 3.06 0 0 1-5.275-1.789l-.073-.728a3.167 3.167 0 1 1-6.307.038l-.069.69A3.06 3.06 0 0 1 5.732 12Zm8.768 6.5v3.491h-5V18.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75Z" fill="currentColor" /><path d="M9.5 2h5l.652 6.517a3.167 3.167 0 1 1-6.304 0L9.5 2Z" fill="currentColor" /><path opacity={0.7} d="M3.33 5.351c.178-.89.267-1.335.448-1.696a3 3 0 0 1 1.889-1.548C6.057 2 6.51 2 7.418 2h2.083l-.725 7.245a3.06 3.06 0 1 1-6.044-.904l.598-2.99ZM20.67 5.351c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H14.5l.725 7.245a3.06 3.06 0 1 0 6.043-.904l-.598-2.99Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Shop