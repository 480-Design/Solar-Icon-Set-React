import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Hanger2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M9.536 3.91c0-1.055.95-1.91 2.124-1.91 1.173 0 2.124.855 2.124 1.91 0 .495-.18.947-.492 1.287-.597.65-1.49 1.305-1.49 2.148v.285m0 0a3.656 3.656 0 0 1 2.082.61l1.058.714m-3.14-1.324a3.641 3.641 0 0 0-2.051.649L2.655 13.27C1.383 14.165 2.087 16 3.703 16H6m12 0h2.297c1.633 0 2.326-1.868 1.02-2.75L19 11.69" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M14 22h-4c-1.886 0-2.828 0-3.414-.586C6 20.828 6 19.886 6 18c0-1.886 0-2.828.586-3.414C7.172 14 8.114 14 10 14h4c1.886 0 2.828 0 3.414.586C18 15.172 18 16.114 18 18c0 1.886 0 2.828-.586 3.414" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M9.536 3.91c0-1.055.95-1.91 2.124-1.91 1.173 0 2.124.855 2.124 1.91 0 .495-.18.947-.492 1.287-.597.65-1.49 1.305-1.49 2.148v.285m0 0a3.656 3.656 0 0 1 2.082.61l7.433 5.01c1.306.882.613 2.75-1.02 2.75H18m-6.198-8.37a3.641 3.641 0 0 0-2.051.649L2.655 13.27C1.383 14.165 2.087 16 3.703 16H6" opacity={0.5} /><path stroke="currentColor" strokeWidth={1.5} d="M6 18c0-1.886 0-2.828.586-3.414C7.172 14 8.114 14 10 14h4c1.886 0 2.828 0 3.414.586C18 15.172 18 16.114 18 18c0 1.886 0 2.828-.586 3.414C16.828 22 15.886 22 14 22h-4c-1.886 0-2.828 0-3.414-.586C6 20.828 6 19.886 6 18Z" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M9.536 3.91c0-1.055.95-1.91 2.124-1.91 1.173 0 2.124.855 2.124 1.91 0 .495-.18.947-.492 1.287-.597.65-1.49 1.305-1.49 2.148v.285m0 0a3.656 3.656 0 0 1 2.082.61l7.433 5.01c1.306.882.613 2.75-1.02 2.75H18m-6.198-8.37a3.641 3.641 0 0 0-2.051.649L2.655 13.27C1.383 14.165 2.087 16 3.703 16H6" /><path stroke="currentColor" strokeWidth={1.5} d="M6 18c0-1.886 0-2.828.586-3.414C7.172 14 8.114 14 10 14h4c1.886 0 2.828 0 3.414.586C18 15.172 18 16.114 18 18c0 1.886 0 2.828-.586 3.414C16.828 22 15.886 22 14 22h-4c-1.886 0-2.828 0-3.414-.586C6 20.828 6 19.886 6 18Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M10.286 3.91c0-.568.538-1.16 1.374-1.16.836 0 1.374.592 1.374 1.16 0 .311-.112.581-.294.78-.113.122-.237.245-.38.385l-.08.08a8.953 8.953 0 0 0-.529.558c-.265.312-.553.723-.658 1.23a4.331 4.331 0 0 0-1.774.722l-7.095 4.992c-.927.652-1.166 1.702-.828 2.582.332.866 1.194 1.511 2.306 1.511H5.26c-.01.364-.01.764-.01 1.198v.104c0 .899 0 1.648.08 2.242.085.628.27 1.195.726 1.65.456.456 1.022.642 1.65.726.595.08 1.344.08 2.243.08h4.104c.898 0 1.648 0 2.242-.08.628-.084 1.195-.27 1.65-.726.456-.455.642-1.022.726-1.65.08-.594.08-1.343.08-2.242v-.104c0-.434 0-.834-.01-1.198h1.557c1.125 0 1.99-.657 2.316-1.534.33-.89.073-1.947-.877-2.587l-7.433-5.01a4.331 4.331 0 0 0-1.614-.66c.05-.081.118-.172.205-.274.126-.149.274-.298.44-.464l.075-.072c.14-.14.295-.292.435-.445.443-.48.69-1.115.69-1.795 0-1.542-1.364-2.659-2.874-2.659S8.786 2.367 8.786 3.91a.75.75 0 0 0 1.5 0Zm8.3 11.34h1.711c.509 0 .806-.277.91-.555.097-.264.047-.582-.31-.822l-7.432-5.01a2.906 2.906 0 0 0-1.655-.483 2.891 2.891 0 0 0-1.628.512l-7.095 4.991c-.346.243-.391.558-.29.819.105.275.403.548.905.548h1.712c.109-.447.299-.852.641-1.194.456-.456 1.022-.642 1.65-.726.595-.08 1.344-.08 2.243-.08h4.104c.898 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.343.342.533.747.642 1.194Zm-11.47-.134c.13-.13.328-.237.79-.3.482-.064 1.13-.066 2.094-.066h4c.964 0 1.611.002 2.094.066.462.063.66.17.79.3.13.13.237.328.3.79.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789-.13.13-.327.237-.789.3-.483.064-1.13.066-2.094.066h-4c-.964 0-1.612-.002-2.095-.067-.461-.062-.659-.169-.79-.3-.13-.13-.237-.327-.299-.788-.065-.483-.066-1.131-.066-2.095 0-.964.001-1.612.066-2.095.062-.461.17-.659.3-.789Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M10.286 3.91c0-.568.538-1.16 1.374-1.16.836 0 1.374.592 1.374 1.16 0 .311-.112.581-.294.78-.113.122-.237.245-.38.385l-.08.08a8.953 8.953 0 0 0-.529.558c-.265.312-.553.723-.658 1.23a4.331 4.331 0 0 0-1.774.722l-7.095 4.992c-.927.652-1.166 1.702-.828 2.582.332.866 1.194 1.511 2.306 1.511H6.01c-.01.363-.01.777-.01 1.25 0 1.886 0 2.828.587 3.414C7.17 22 8.114 22 10 22h4c1.885 0 2.828 0 3.414-.586C18 20.828 18 19.886 18 18c0-.473 0-.887-.01-1.25h2.307c1.125 0 1.99-.657 2.316-1.534.33-.89.073-1.947-.877-2.587l-7.433-5.01a4.331 4.331 0 0 0-1.614-.66c.05-.081.118-.172.205-.274.126-.149.274-.298.44-.464l.075-.072c.14-.14.295-.292.435-.445.443-.48.69-1.115.69-1.795 0-1.542-1.364-2.659-2.874-2.659S8.786 2.367 8.786 3.91a.75.75 0 0 0 1.5 0Zm7.521 11.34h2.49c.509 0 .806-.277.91-.555.097-.264.047-.582-.31-.822l-7.432-5.01a2.906 2.906 0 0 0-1.655-.483 2.891 2.891 0 0 0-1.628.512l-7.095 4.991c-.346.243-.391.558-.29.819.105.275.403.548.905.548h2.49c.087-.267.212-.483.394-.664C7.17 14 8.114 14 10 14h4c1.885 0 2.828 0 3.414.586.181.181.307.397.393.664Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6 18c0-1.886 0-2.828.586-3.414C7.172 14 8.114 14 10 14h4c1.886 0 2.828 0 3.414.586C18 15.172 18 16.114 18 18c0 1.886 0 2.828-.586 3.414C16.828 22 15.886 22 14 22h-4c-1.886 0-2.828 0-3.414-.586C6 20.828 6 19.886 6 18Z" /><path fill="currentColor" d="M10.286 3.91c0-.568.538-1.16 1.374-1.16.836 0 1.374.592 1.374 1.16 0 .311-.112.581-.294.78-.113.122-.237.245-.38.385l-.08.08a8.953 8.953 0 0 0-.529.558c-.265.312-.553.723-.658 1.23a4.331 4.331 0 0 0-1.774.722l-7.095 4.992c-.927.652-1.166 1.702-.828 2.582.332.866 1.194 1.511 2.306 1.511H6.01c.016-.637.061-1.12.184-1.5h-2.49c-.503 0-.801-.273-.907-.548-.1-.261-.054-.576.29-.819l7.096-4.99a2.891 2.891 0 0 1 1.628-.513 2.906 2.906 0 0 1 1.655.482l7.433 5.01c.356.241.406.56.308.823-.103.278-.4.555-.909.555h-2.49c.123.38.168.863.184 1.5h2.306c1.125 0 1.99-.657 2.316-1.534.33-.89.073-1.947-.877-2.587l-7.433-5.01a4.331 4.331 0 0 0-1.614-.66c.05-.081.118-.172.205-.274.126-.149.274-.298.44-.464l.075-.072c.14-.14.295-.292.435-.445.443-.48.69-1.115.69-1.795 0-1.542-1.364-2.659-2.874-2.659S8.786 2.367 8.786 3.91a.75.75 0 0 0 1.5 0Z" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Hanger2