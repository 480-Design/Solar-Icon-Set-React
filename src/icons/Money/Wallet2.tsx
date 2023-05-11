import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Wallet2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={18} cy={12} r={1} fill="currentColor" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 10.5c0-.077 0-.533-.002-.565-.036-.501-.465-.9-1.005-.933C20.959 9 20.918 9 20.834 9h-2.602C16.446 9 15 10.343 15 12s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002.54-.033.97-.432 1.005-.933.002-.032 0-.488 0-.565M13 4c3.771 0 5.657 0 6.828 1.172.809.808 1.06 1.956 1.137 3.828M10 20h3c3.771 0 5.657 0 6.828-1.172.809-.808 1.06-1.956 1.137-3.828M9 4c-3.114.01-4.765.108-5.828 1.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828.653.654 1.528.943 2.828 1.07M7 9v1m0 5v-2.5" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 15V9" /><path stroke="currentColor" strokeWidth={1.5} d="M20.833 9h-2.602C16.446 9 15 10.343 15 12s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002.54-.033.97-.432 1.005-.933.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148-.036-.501-.465-.9-1.005-.933C20.959 9 20.918 9 20.834 9Z" /><path stroke="currentColor" strokeWidth={1.5} d="M20.965 9c-.078-1.872-.328-3.02-1.137-3.828C18.657 4 16.771 4 13 4h-3C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h3c3.771 0 5.657 0 6.828-1.172.809-.808 1.06-1.956 1.137-3.828" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.991 12H18" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 15V9" /><path stroke="currentColor" strokeWidth={1.5} d="M20.833 9h-2.602C16.446 9 15 10.343 15 12s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002.54-.033.97-.432 1.005-.933.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148-.036-.501-.465-.9-1.005-.933C20.959 9 20.918 9 20.834 9Z" /><path stroke="currentColor" strokeWidth={1.5} d="M20.965 9c-.078-1.872-.328-3.02-1.137-3.828C18.657 4 16.771 4 13 4h-3C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h3c3.771 0 5.657 0 6.828-1.172.809-.808 1.06-1.956 1.137-3.828" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.991 12h.01" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /><path fill="currentColor" fillRule="evenodd" d="M9.944 3.25h3.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.924.925 1.219 2.163 1.326 3.77.577.253 1.013.79 1.06 1.47.005.061.005.126.005.186v3.866c0 .06 0 .125-.004.185-.048.68-.484 1.218-1.061 1.472-.107 1.606-.402 2.844-1.326 3.769-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153Zm10.224 12.5H18.23c-2.145 0-3.981-1.628-3.981-3.75s1.836-3.75 3.98-3.75h1.938c-.114-1.341-.371-2.05-.87-2.548-.423-.423-1.003-.677-2.009-.812-1.027-.138-2.382-.14-4.289-.14h-3c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.289 0 1.907.002 3.261.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h3c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.499-.498.756-1.206.87-2.548Zm.756-6H18.23c-1.424 0-2.481 1.059-2.481 2.25s1.057 2.25 2.48 2.25h2.718c.206-.013.295-.152.302-.236V9.986c-.007-.084-.096-.223-.302-.235h-.024ZM7 8.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 7 8.25Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M21.1 8.004C21.045 8 20.984 8 20.92 8h-2.525c-2.068 0-3.837 1.628-3.837 3.75s1.77 3.75 3.837 3.75h2.525c.064 0 .125 0 .182-.004a1.755 1.755 0 0 0 1.645-1.628c.004-.06.004-.125.004-.185V9.817c0-.06 0-.125-.004-.185a1.755 1.755 0 0 0-1.645-1.628Zm-2.928 4.746c.532 0 .963-.448.963-1s-.431-1-.963-1c-.533 0-.964.448-.964 1s.431 1 .964 1Z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M20.918 17a.22.22 0 0 1 .221.278c-.2.712-.519 1.32-1.03 1.83-.749.75-1.698 1.081-2.87 1.239-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87C2 15.099 2 13.644 2 11.806v-.112C2 9.856 2 8.4 2.153 7.26c.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238C7.401 3 8.856 3 10.694 3h2.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.511.512.83 1.119 1.03 1.831a.22.22 0 0 1-.221.278h-2.524c-2.837 0-5.337 2.24-5.337 5.25s2.5 5.25 5.337 5.25h2.524ZM7 15.5a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-.75.75Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6.25 14.75a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0v6Z" /><path fill="currentColor" fillRule="evenodd" d="M21.188 8.004C21.126 8 21.058 8 20.988 8H18.215C15.944 8 14 9.736 14 12c0 2.264 1.944 4 4.215 4H20.988c.07 0 .138 0 .2-.004.923-.056 1.739-.757 1.808-1.737.004-.064.004-.133.004-.197V9.938c0-.064 0-.133-.004-.197-.069-.98-.885-1.68-1.808-1.737Zm-3.217 5.063c.584 0 1.058-.478 1.058-1.067 0-.59-.474-1.067-1.058-1.067-.585 0-1.06.478-1.06 1.067 0 .59.475 1.067 1.06 1.067Z" clipRule="evenodd" /><path fill="currentColor" d="M21.14 8.002c0-1.181-.044-2.448-.798-3.355a3.773 3.773 0 0 0-.233-.256c-.749-.748-1.698-1.08-2.87-1.238C16.099 3 14.644 3 12.806 3h-2.112C8.856 3 7.4 3 6.26 3.153c-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87C2 8.401 2 9.856 2 11.694v.112c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h2.112c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.204-.205.378-.425.526-.66.45-.72.504-1.602.504-2.45l-.15.001h-2.774C15.944 16 14 14.264 14 12c0-2.264 1.944-4 4.215-4h2.773c.052 0 .103 0 .151.002Z" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Wallet2