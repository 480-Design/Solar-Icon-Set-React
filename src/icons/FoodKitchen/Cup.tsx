import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Cup = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M3 7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h6c1.886 0 2.828 0 3.414.586C17 4.172 17 5.114 17 7v5c0 2.828 0 4.243-.879 5.121C15.243 18 13.828 18 11 18H9c-2.828 0-4.243 0-5.121-.879C3 16.243 3 14.828 3 12v-1" /><path stroke="currentColor" strokeWidth={1.5} d="M17 13h1a4 4 0 0 0 0-8h-1" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M17 13h-3M3 13h7M22 21H2" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M3 7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h6c1.886 0 2.828 0 3.414.586C17 4.172 17 5.114 17 7v5c0 2.828 0 4.243-.879 5.121C15.243 18 13.828 18 11 18H9c-2.828 0-4.243 0-5.121-.879C3 16.243 3 14.828 3 12V7ZM17 13h1a4 4 0 0 0 0-8h-1" /><path stroke="currentColor" strokeWidth={1.5} d="M17 13H3" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 21H2" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M3 7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h6c1.886 0 2.828 0 3.414.586C17 4.172 17 5.114 17 7v5c0 2.828 0 4.243-.879 5.121C15.243 18 13.828 18 11 18H9c-2.828 0-4.243 0-5.121-.879C3 16.243 3 14.828 3 12V7ZM17 13h1a4 4 0 0 0 0-8h-1M17 13H3" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 21H2" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M6.948 2.25h6.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.343.343.533.748.642 1.195H18a4.75 4.75 0 1 1 0 9.5h-.26a14.986 14.986 0 0 1-.106 1.642c-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-2.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.087-.645-.11-1.42-.115-2.338a.758.758 0 0 1 0-.1c-.002-.286-.002-.586-.002-.9V6.949c0-.898 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08Zm-3.187 11.5c.012.569.038 1.04.092 1.442.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h2c1.435 0 2.437-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.054-.4.08-.872.092-1.441H3.76Zm12.489-1.5H3.75V7c0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789.13-.13.327-.237.788-.3C5.388 3.753 6.036 3.75 7 3.75h6c.964 0 1.612.002 2.095.067.461.062.659.169.789.3.13.13.237.327.3.788.064.483.066 1.131.066 2.095v5.25Zm1.5 0H18a3.25 3.25 0 0 0 0-6.5h-.259c.009.364.009.764.009 1.198V12.25ZM1.25 21a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3 7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h6c1.886 0 2.828 0 3.414.586.182.181.307.397.393.664H18a4.75 4.75 0 1 1 0 9.5h-1v-1.5h1a3.25 3.25 0 0 0 0-6.5h-1.01c.01.364.01.777.01 1.25v5.25H3V7ZM3.011 13.75h13.978c-.036 1.705-.193 2.696-.868 3.371C15.243 18 13.828 18 11 18H9c-2.828 0-4.243 0-5.121-.879-.675-.675-.832-1.666-.868-3.371Z" /><path fill="currentColor" fillRule="evenodd" d="M1.25 21a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M1.25 21a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" opacity={0.5} /><path fill="currentColor" fillRule="evenodd" d="M3.002 13C3 12.688 3 12.355 3 12V7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h6c1.886 0 2.828 0 3.414.586.235.235.376.527.46.914H18c2.526 0 4.75 1.812 4.75 4.25 0 2.438-2.224 4.25-4.75 4.25H3.002Zm13.994-7c.004.3.004.632.004 1v4.5h1c1.892 0 3.25-1.322 3.25-2.75S19.892 6 18 6h-1.004Z" clipRule="evenodd" /><path fill="currentColor" d="M9 18h2c2.829 0 4.243 0 5.122-.879.768-.768.864-1.946.877-4.121H3.002c.012 2.175.109 3.353.877 4.121C4.758 18 6.172 18 9 18Z" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Cup