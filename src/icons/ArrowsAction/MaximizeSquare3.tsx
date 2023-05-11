import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const MaximizeSquare3 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.178 21.893 17.055 21.992 13 22M2 11c.008-4.055.107-6.178 1.464-7.536.974-.973 2.342-1.3 4.536-1.409" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m12 12 5-5m0 0h-3.75M17 7v3.75" /><path stroke="currentColor" strokeWidth={1.5} d="M2 18c0-1.886 0-2.828.586-3.414C3.172 14 4.114 14 6 14c1.886 0 2.828 0 3.414.586C10 15.172 10 16.114 10 18c0 1.886 0 2.828-.586 3.414C8.828 22 7.886 22 6 22c-1.886 0-2.828 0-3.414-.586C2 20.828 2 19.886 2 18Z" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M13 22c4.055-.008 6.178-.107 7.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.071 2 16.714 2 12 2S4.929 2 3.464 3.464C2.107 4.822 2.008 6.944 2 11" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m12 12 5-5m0 0h-3.75M17 7v3.75" /><path stroke="currentColor" strokeWidth={1.5} d="M2 18c0-1.886 0-2.828.586-3.414C3.172 14 4.114 14 6 14c1.886 0 2.828 0 3.414.586C10 15.172 10 16.114 10 18c0 1.886 0 2.828-.586 3.414C8.828 22 7.886 22 6 22c-1.886 0-2.828 0-3.414-.586C2 20.828 2 19.886 2 18Z" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M13 22c4.055-.008 6.178-.107 7.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.071 2 16.714 2 12 2S4.929 2 3.464 3.464C2.107 4.822 2.008 6.944 2 11" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m12 12 5-5m0 0h-3.75M17 7v3.75" /><path stroke="currentColor" strokeWidth={1.5} d="M2 18c0-1.886 0-2.828.586-3.414C3.172 14 4.114 14 6 14c1.886 0 2.828 0 3.414.586C10 15.172 10 16.114 10 18c0 1.886 0 2.828-.586 3.414C8.828 22 7.886 22 6 22c-1.886 0-2.828 0-3.414-.586C2 20.828 2 19.886 2 18Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19 1.444.194 2.584.6 3.479 1.494.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.829.828-1.868 1.238-3.167 1.448-1.277.207-2.883.232-4.898.235a.75.75 0 1 1-.002-1.5c2.04-.003 3.523-.031 4.66-.216 1.117-.18 1.818-.5 2.346-1.028.57-.57.897-1.34 1.069-2.619.174-1.3.176-3.008.176-5.386s-.002-4.086-.177-5.386c-.171-1.279-.498-2.05-1.068-2.62-.57-.569-1.34-.896-2.619-1.068-1.3-.174-3.008-.176-5.386-.176s-4.087.002-5.387.176c-1.278.172-2.049.5-2.618 1.069-.529.528-.848 1.23-1.028 2.345-.185 1.138-.213 2.621-.217 4.661A.75.75 0 0 1 1.25 11c.004-2.016.03-3.622.236-4.898.21-1.3.62-2.338 1.448-3.167.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19Z" /><path fill="currentColor" d="M12.5 7a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V8.81l-3.72 3.72a.75.75 0 1 1-1.06-1.06l3.72-3.72h-1.94A.75.75 0 0 1 12.5 7Z" /><path fill="currentColor" fillRule="evenodd" d="M5.948 13.25c-.898 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.726-.456.455-.642 1.022-.726 1.65-.08.594-.08 1.343-.08 2.242v.104c0 .899 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.345.08 2.243.08h.104c.898 0 1.648 0 2.242-.08.628-.084 1.195-.27 1.65-.726.456-.455.642-1.022.726-1.65.08-.594.08-1.343.08-2.242v-.104c0-.899 0-1.648-.08-2.242-.084-.628-.27-1.195-.725-1.65-.456-.456-1.023-.642-1.65-.726-.595-.08-1.345-.08-2.243-.08h-.104Zm-2.832 1.866c.13-.13.328-.237.79-.3.482-.064 1.13-.066 2.094-.066s1.612.002 2.095.066c.461.063.659.17.789.3.13.13.237.328.3.79.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789-.13.13-.327.237-.788.3-.483.064-1.131.066-2.095.066-.964 0-1.612-.002-2.095-.067-.461-.062-.659-.169-.789-.3-.13-.13-.237-.327-.3-.788-.064-.483-.066-1.131-.066-2.095 0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M2 18c0-1.886 0-2.828.586-3.414C3.172 14 4.114 14 6 14c1.886 0 2.828 0 3.414.586C10 15.172 10 16.114 10 18c0 1.886 0 2.828-.586 3.414C8.828 22 7.886 22 6 22c-1.886 0-2.828 0-3.414-.586C2 20.828 2 19.886 2 18Z" /><path fill="currentColor" fillRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12v1.138c.509-.333 1.069-.48 1.606-.551.645-.087 1.439-.087 2.305-.087h.179c.865 0 1.659 0 2.304.087.711.095 1.463.32 2.08.938.619.618.844 1.37.94 2.08.086.646.086 1.44.086 2.305v.18c0 .865 0 1.659-.087 2.304-.072.537-.218 1.097-.55 1.605L12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464ZM13.25 6.25a.75.75 0 0 0 0 1.5h1.94l-3.72 3.72a.75.75 0 1 0 1.06 1.06l3.72-3.72v1.94a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75h-3.75Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity={0.5} /><path fill="currentColor" fillRule="evenodd" d="M12.5 7a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V8.81l-3.72 3.72a.75.75 0 1 1-1.06-1.06l3.72-3.72h-1.94A.75.75 0 0 1 12.5 7Z" clipRule="evenodd" /><path fill="currentColor" d="M2 17.5c0-2.121 0-3.182.659-3.841C3.318 13 4.379 13 6.5 13c2.121 0 3.182 0 3.841.659.659.659.659 1.72.659 3.841 0 2.121 0 3.182-.659 3.841C9.682 22 8.621 22 6.5 22c-2.121 0-3.182 0-3.841-.659C2 20.682 2 19.621 2 17.5Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MaximizeSquare3