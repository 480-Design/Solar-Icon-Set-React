import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ListHeart = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m16.52 18.34-.444.605.444-.604Zm.98-4.51-.526.534a.75.75 0 0 0 1.052 0l-.526-.534Zm.98 4.51-.445-.603.445.604Zm-.98.48v.75-.75Zm-.535-1.083c-.497-.366-1.078-.846-1.527-1.363-.47-.541-.688-1-.688-1.338h-1.5c0 .898.524 1.71 1.056 2.322.552.636 1.232 1.19 1.77 1.587l.889-1.208Zm-2.215-2.7c0-.757.343-1.118.664-1.233.337-.122.92-.07 1.56.56l1.052-1.069c-.934-.92-2.102-1.27-3.121-.902-1.035.373-1.655 1.392-1.655 2.643h1.5Zm4.174 3.908c.538-.396 1.218-.951 1.77-1.587.532-.613 1.056-1.424 1.056-2.322h-1.5c0 .337-.218.797-.688 1.338-.45.517-1.03.997-1.527 1.363l.89 1.208Zm2.826-3.909c0-1.251-.62-2.27-1.655-2.643-1.02-.368-2.187-.018-3.121.902l1.052 1.069c.64-.63 1.223-.682 1.56-.56.321.115.664.476.664 1.232h1.5Zm-5.674 3.909c.378.278.802.625 1.424.625v-1.5c-.02 0-.036.001-.097-.031a4.27 4.27 0 0 1-.438-.302l-.89 1.208Zm1.96-1.208a4.247 4.247 0 0 1-.44.302c-.06.032-.076.031-.096.031v1.5c.622 0 1.046-.347 1.424-.625l-.889-1.208Z" fill="currentColor" /><path d="M10 14H3M10 18H3M3 6h10.5M20 6h-2.25M20 10H9.5M3 10h2.25" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m16.52 18.34-.444.605.444-.604Zm.98-4.51-.526.534a.75.75 0 0 0 1.052 0l-.526-.534Zm.98 4.51-.445-.603.445.604Zm-.98.48v.75-.75Zm-.535-1.083c-.497-.366-1.078-.846-1.527-1.363-.47-.541-.688-1-.688-1.338h-1.5c0 .898.524 1.71 1.056 2.322.552.636 1.232 1.19 1.77 1.587l.889-1.208Zm-2.215-2.7c0-.757.343-1.118.664-1.233.337-.122.92-.07 1.56.56l1.052-1.069c-.934-.92-2.102-1.27-3.121-.902-1.035.373-1.655 1.392-1.655 2.643h1.5Zm4.174 3.908c.538-.396 1.218-.951 1.77-1.587.532-.613 1.056-1.424 1.056-2.322h-1.5c0 .337-.218.797-.688 1.338-.45.517-1.03.997-1.527 1.363l.89 1.208Zm2.826-3.909c0-1.251-.62-2.27-1.655-2.643-1.02-.368-2.187-.018-3.121.902l1.052 1.069c.64-.63 1.223-.682 1.56-.56.321.115.664.476.664 1.232h1.5Zm-5.674 3.909c.378.278.802.625 1.424.625v-1.5c-.02 0-.036.001-.097-.031a4.27 4.27 0 0 1-.438-.302l-.89 1.208Zm1.96-1.208a4.247 4.247 0 0 1-.44.302c-.06.032-.076.031-.096.031v1.5c.622 0 1.046-.347 1.424-.625l-.889-1.208Z" fill="currentColor" /><path opacity={0.5} d="M21 6H3M21 10H3M10 14H3M10 18H3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m16.52 18.34-.444.605.444-.604Zm.98-4.51-.526.534a.75.75 0 0 0 1.052 0l-.526-.534Zm.98 4.51-.445-.603.445.604Zm-.98.48v.75-.75Zm-.535-1.083c-.497-.366-1.078-.846-1.527-1.363-.47-.541-.688-1-.688-1.338h-1.5c0 .898.524 1.71 1.056 2.322.552.636 1.232 1.19 1.77 1.587l.889-1.208Zm-2.215-2.7c0-.757.343-1.118.664-1.233.337-.122.92-.07 1.56.56l1.052-1.069c-.934-.92-2.102-1.27-3.121-.902-1.035.373-1.655 1.392-1.655 2.643h1.5Zm4.174 3.908c.538-.396 1.218-.951 1.77-1.587.532-.613 1.056-1.424 1.056-2.322h-1.5c0 .337-.218.797-.688 1.338-.45.517-1.03.997-1.527 1.363l.89 1.208Zm2.826-3.909c0-1.251-.62-2.27-1.655-2.643-1.02-.368-2.187-.018-3.121.902l1.052 1.069c.64-.63 1.223-.682 1.56-.56.321.115.664.476.664 1.232h1.5Zm-5.674 3.909c.378.278.802.625 1.424.625v-1.5c-.02 0-.036.001-.097-.031a4.27 4.27 0 0 1-.438-.302l-.89 1.208Zm1.96-1.208a4.247 4.247 0 0 1-.44.302c-.06.032-.076.031-.096.031v1.5c.622 0 1.046-.347 1.424-.625l-.889-1.208Z" fill="currentColor" /><path d="M21 6H3M21 10H3M10 14H3M10 18H3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6Zm0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm17.845 2.393c1.035.373 1.655 1.392 1.655 2.643 0 .898-.524 1.71-1.056 2.322-.552.636-1.232 1.19-1.77 1.587L18.85 19c-.36.267-.768.57-1.349.57s-.99-.303-1.35-.57l-.074-.055c-.538-.396-1.218-.951-1.77-1.587-.532-.613-1.056-1.424-1.056-2.322 0-1.251.62-2.27 1.655-2.643.835-.302 1.77-.12 2.595.46.825-.58 1.76-.761 2.595-.46Zm-.509 1.41c-.337-.12-.92-.07-1.56.561a.75.75 0 0 1-1.052 0c-.64-.63-1.223-.682-1.56-.56-.321.115-.664.476-.664 1.232 0 .337.218.797.688 1.338.45.517 1.03.997 1.527 1.363.233.171.347.253.438.302.06.031.076.031.095.031h.004c.02 0 .036 0 .095-.031.091-.049.205-.13.438-.302.497-.366 1.078-.846 1.527-1.363.47-.541.688-1 .688-1.338 0-.756-.343-1.117-.664-1.232ZM2.25 14a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 15.036c0 1.235 1.485 2.543 2.52 3.305.435.32.652.48.98.48.328 0 .545-.16.98-.48 1.035-.762 2.52-2.07 2.52-3.305 0-2.008-1.925-2.757-3.5-1.206-1.575-1.551-3.5-.802-3.5 1.206Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6Zm0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6Zm0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" fill="currentColor" /><path d="M14 15.036c0 1.235 1.485 2.543 2.52 3.305.435.32.652.48.98.48.328 0 .545-.16.98-.48 1.035-.762 2.52-2.07 2.52-3.305 0-2.008-1.925-2.757-3.5-1.206-1.575-1.551-3.5-.802-3.5 1.206Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ListHeart