import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Buildings2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 22H2" /><path stroke="currentColor" strokeWidth={1.5} d="M17 22V6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6v16" /><path fill="currentColor" d="M20.25 11.5a.75.75 0 0 0 1.5 0h-1.5Zm-.139-3.163-.416.624.416-.624Zm.552.552-.624.417.624-.417ZM21.75 15.5a.75.75 0 0 0-1.5 0h1.5ZM17.5 8.75c.718 0 1.2 0 1.567.038.355.036.519.1.628.173l.833-1.248c-.396-.264-.835-.369-1.309-.417-.461-.047-1.032-.046-1.719-.046v1.5Zm4.25 2.75c0-.687 0-1.258-.046-1.719-.048-.473-.153-.913-.418-1.309l-1.247.834c.073.108.137.272.173.627.037.367.038.85.038 1.567h1.5Zm-2.055-2.54c.136.092.253.209.344.346l1.247-.834c-.2-.3-.458-.558-.758-.759l-.833 1.248Zm.555 6.54V22h1.5v-6.5h-1.5ZM3.889 8.337l.417.624-.417-.624Zm-.552.552.624.417-.624-.417ZM3.75 20a.75.75 0 0 0-1.5 0h1.5Zm-1.5-4a.75.75 0 0 0 1.5 0h-1.5ZM6.5 7.25c-.687 0-1.258 0-1.719.046-.473.048-.913.153-1.309.417l.834 1.248c.108-.073.272-.137.627-.173.367-.037.85-.038 1.567-.038v-1.5ZM3.75 11.5c0-.718 0-1.2.038-1.567.036-.355.1-.519.173-.627l-1.248-.834c-.264.396-.369.836-.417 1.309-.047.461-.046 1.032-.046 1.719h1.5Zm-.278-3.787c-.3.201-.558.459-.759.76l1.248.833a1.25 1.25 0 0 1 .345-.345l-.834-1.248ZM2.25 20v2h1.5v-2h-1.5Zm0-8.5V16h1.5v-4.5h-1.5Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 22v-3M10 5h4M10 14h.5m3.5 0h-1.5M14 8h-.5M10 8h1.5M10 11h4" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 22H2" /><path stroke="currentColor" strokeWidth={1.5} d="M17 22V6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6v16" /><path stroke="currentColor" strokeWidth={1.5} d="M21 22V11.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 8 18.904 8 17.5 8M3 22V11.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 8 5.096 8 6.5 8" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 22v-3" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10 5h4M10 8h4M10 11h4M10 14h4" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 22H2" /><path stroke="currentColor" strokeWidth={1.5} d="M17 22V6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6v16M21 22V11.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 8 18.904 8 17.5 8M3 22V11.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 8 5.096 8 6.5 8" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 22v-3M10 5h4M10 8h4M10 11h4M10 14h4" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M10.948 1.25h2.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243V7.25c.577 0 1.065.005 1.469.046.473.048.913.153 1.309.417.3.201.558.459.759.76.264.395.369.835.417 1.308.046.452.046 1.011.046 1.68v9.789H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.25v-9.788c0-.67 0-1.229.046-1.681.048-.473.153-.913.417-1.309.201-.3.459-.558.76-.759.395-.264.835-.369 1.308-.417.404-.041.892-.045 1.469-.046V5.948c0-.898 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08ZM6.25 8.75c-.583 0-.994.005-1.317.038-.355.036-.519.1-.627.173a1.25 1.25 0 0 0-.345.345c-.073.108-.137.272-.173.627-.037.367-.038.85-.038 1.567v9.75h2.5V8.75Zm1.5 12.5h3.5V19a.75.75 0 0 1 1.5 0v2.25h3.5V6c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066h-2c-.964 0-1.612.002-2.095.067-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788C7.753 4.388 7.75 5.036 7.75 6v15.25Zm10 0h2.5V11.5c0-.718 0-1.2-.038-1.567-.036-.355-.1-.519-.173-.627a1.25 1.25 0 0 0-.345-.345c-.108-.073-.272-.137-.627-.173-.323-.033-.734-.037-1.317-.038v12.5ZM9.25 5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 5Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 8Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M21.25 8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552c-.441-.295-1.034-.332-2.115-.336.004.291.004.596.004.91V7.25h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v6.5h-1.5V6c0-1.886 0-2.828-.586-3.414C15.578 2 14.636 2 12.75 2h-2c-1.886 0-2.828 0-3.414.586C6.75 3.172 6.75 4.114 6.75 6v15.25h-1.5v-6.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1V5.91c0-.313 0-.618.004-.91-1.081.005-1.674.042-2.115.337a2 2 0 0 0-.552.552C2.25 6.393 2.25 7.096 2.25 8.5v12.75h-.5a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.5V8.5ZM9 11.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm2.75 3.5a.75.75 0 0 1 .75.75v2.25H11V19a.75.75 0 0 1 .75-.75ZM9 6.25a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 6.25Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 9.25Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M20.913 5.889c.337.504.337 1.206.337 2.611v12.75h.5a.75.75 0 0 1 0 1.5h-20a.75.75 0 1 1 0-1.5h.5V8.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552c.441-.295 2.537-.332 3.618-.336-.004.291-.004.595-.004.91V7.25H4.25a.75.75 0 1 0 0 1.5h2.503v1.5H4.25a.75.75 0 0 0 0 1.5h2.503v1.5H4.25a.75.75 0 0 0 0 1.5h2.503v6.5h10v-6.5h2.497a.75.75 0 1 0 0-1.5h-2.497v-1.5h2.497a.75.75 0 1 0 0-1.5h-2.497v-1.5h2.497a.75.75 0 0 0 0-1.5h-2.497V5.91c0-.314 0-.618-.004-.91 1.081.005 3.17.042 3.612.337a2 2 0 0 1 .552.552Z" opacity={0.5} /><path fill="currentColor" fillRule="evenodd" d="M10.75 2h2c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v15.25h5a.75.75 0 0 1 0 1.5h-20a.75.75 0 0 1 0-1.5h5V6c0-1.886 0-2.828.586-3.414C7.922 2 8.864 2 10.75 2Zm1 16.25a.75.75 0 0 1 .75.75v2.25H11V19a.75.75 0 0 1 .75-.75Zm-2-4.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4ZM9 11.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm.75-3.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4ZM9 6.25a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 6.25Z" clipRule="evenodd" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Buildings2