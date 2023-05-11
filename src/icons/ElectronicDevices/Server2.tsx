import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Server2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M13 21H6c-1.886 0-2.828 0-3.414-.586C2 19.828 2 18.886 2 17c0-1.886 0-2.828.586-3.414C3.172 13 4.114 13 6 13h12c1.886 0 2.828 0 3.414.586C22 14.172 22 15.114 22 17c0 1.886 0 2.828-.586 3.414C20.828 21 19.886 21 18 21h-1M11 2h7c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6c0 1.886 0 2.828-.586 3.414C20.828 10 19.886 10 18 10H6c-1.886 0-2.828 0-3.414-.586C2 8.828 2 7.886 2 6c0-1.886 0-2.828.586-3.414C3.172 2 4.114 2 6 2h1M13.5 6H18M6 7V5M9 7V5M13.5 17H18M6 18v-2M9 18v-2" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M2 17c0-1.886 0-2.828.586-3.414C3.172 13 4.114 13 6 13h12c1.886 0 2.828 0 3.414.586C22 14.172 22 15.114 22 17c0 1.886 0 2.828-.586 3.414C20.828 21 19.886 21 18 21H6c-1.886 0-2.828 0-3.414-.586C2 19.828 2 18.886 2 17ZM2 6c0-1.886 0-2.828.586-3.414C3.172 2 4.114 2 6 2h12c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6c0 1.886 0 2.828-.586 3.414C20.828 10 19.886 10 18 10H6c-1.886 0-2.828 0-3.414-.586C2 8.828 2 7.886 2 6Z" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M13.5 6H18M6 7V5M9 7V5M13.5 17H18M6 18v-2M9 18v-2" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M2 17c0-1.886 0-2.828.586-3.414C3.172 13 4.114 13 6 13h12c1.886 0 2.828 0 3.414.586C22 14.172 22 15.114 22 17c0 1.886 0 2.828-.586 3.414C20.828 21 19.886 21 18 21H6c-1.886 0-2.828 0-3.414-.586C2 19.828 2 18.886 2 17ZM2 6c0-1.886 0-2.828.586-3.414C3.172 2 4.114 2 6 2h12c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6c0 1.886 0 2.828-.586 3.414C20.828 10 19.886 10 18 10H6c-1.886 0-2.828 0-3.414-.586C2 8.828 2 7.886 2 6Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M13.5 6H18M6 7V5M9 7V5M13.5 17H18M6 18v-2M9 18v-2" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M5.948 1.25h12.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243v.104c0 .898 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.343.08-2.242.08H5.948c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.725-.456-.456-.642-1.023-.726-1.65-.08-.595-.08-1.345-.08-2.243v-.104c0-.898 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08ZM3.905 2.817c-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788C2.753 4.388 2.75 5.036 2.75 6c0 .964.002 1.612.067 2.095.062.461.169.659.3.789.13.13.327.237.788.3.483.064 1.131.066 2.095.066h12c.964 0 1.612-.002 2.095-.067.461-.062.659-.169.789-.3.13-.13.237-.327.3-.788.064-.483.066-1.131.066-2.095 0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066H6c-.964 0-1.612.002-2.095.067ZM6 4.25a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0V5A.75.75 0 0 1 6 4.25Zm3 0a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0V5A.75.75 0 0 1 9 4.25ZM12.75 6a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-6.802 6.25h12.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.343.08 2.242v.104c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.343.08-2.242.08H5.948c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.343-.08-2.242v-.104c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08Zm-2.043 1.566c-.461.063-.659.17-.789.3-.13.13-.237.328-.3.79-.064.482-.066 1.13-.066 2.094s.002 1.612.067 2.095c.062.461.169.659.3.789.13.13.327.237.788.3.483.064 1.131.066 2.095.066h12c.964 0 1.612-.002 2.095-.067.461-.062.659-.169.789-.3.13-.13.237-.327.3-.788.064-.483.066-1.131.066-2.095 0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066H6c-.964 0-1.612.002-2.095.066ZM6 15.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm3 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75ZM12.75 17a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M2.586 3.586C2 4.172 2 5.114 2 7c0 1.886 0 2.828.586 3.414C3.172 11 4.114 11 6 11h12c1.886 0 2.828 0 3.414-.586C22 9.828 22 8.886 22 7c0-1.886 0-2.828-.586-3.414C20.828 3 19.886 3 18 3H6c-1.886 0-2.828 0-3.414.586ZM9 8.75A.75.75 0 0 1 8.25 8V6a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75Zm4.5-2.5a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5h-4.5ZM6 8.75A.75.75 0 0 1 5.25 8V6a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM2.586 13.586C2 14.172 2 15.114 2 17c0 1.886 0 2.828.586 3.414C3.172 21 4.114 21 6 21h12c1.886 0 2.828 0 3.414-.586C22 19.828 22 18.886 22 17c0-1.886 0-2.828-.586-3.414C20.828 13 19.886 13 18 13H6c-1.886 0-2.828 0-3.414.586ZM12.75 17a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-7.5 1a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0v2Zm3.75.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><g fill="currentColor" opacity={0.5}><path d="M6 13h12c1.886 0 2.828 0 3.414.586C22 14.172 22 15.114 22 17c0 1.886 0 2.828-.586 3.414C20.828 21 19.886 21 18 21H6c-1.886 0-2.828 0-3.414-.586C2 19.828 2 18.886 2 17c0-1.886 0-2.828.586-3.414C3.172 13 4.114 13 6 13ZM6 3h12c1.886 0 2.828 0 3.414.586C22 4.172 22 5.114 22 7c0 1.886 0 2.828-.586 3.414C20.828 11 19.886 11 18 11H6c-1.886 0-2.828 0-3.414-.586C2 9.828 2 8.886 2 7c0-1.886 0-2.828.586-3.414C3.172 3 4.114 3 6 3Z" /></g><path fill="currentColor" d="M12.75 7a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75ZM6 8.75A.75.75 0 0 1 5.25 8V6a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM9 8.75A.75.75 0 0 1 8.25 8V6a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM12.75 17a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75ZM6 18.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM9 18.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Server2