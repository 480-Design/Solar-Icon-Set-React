import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const UserHeartRounded = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={10} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} /><path d="m18.043 12.366.444-.605-.444.605ZM19 8.69l-.519.542a.75.75 0 0 0 1.038 0L19 8.691Zm.957 3.675-.444-.605.444.605Zm-.957.462v.75-.75Zm-.514-1.067c-.417-.307-.878-.69-1.227-1.093-.368-.426-.509-.757-.509-.971h-1.5c0 .77.441 1.45.875 1.952.453.525 1.014.984 1.474 1.321l.887-1.21ZM16.75 9.697c0-.576.263-.827.492-.907.25-.088.714-.06 1.24.443l1.037-1.083c-.825-.79-1.861-1.096-2.773-.776-.933.327-1.496 1.226-1.496 2.323h1.5Zm3.65 3.273c.46-.337 1.022-.796 1.475-1.32.434-.502.875-1.183.875-1.953h-1.5c0 .214-.141.545-.51.971-.348.403-.809.786-1.226 1.093l.887 1.21Zm2.35-3.273c0-1.097-.563-1.996-1.496-2.323-.912-.32-1.948-.014-2.773.776l1.038 1.083c.525-.503.989-.531 1.24-.443.228.08.491.33.491.907h1.5ZM17.6 12.97c.368.27.782.608 1.4.608v-1.5c-.024 0-.04 0-.094-.03a4 4 0 0 1-.42-.287l-.887 1.21Zm1.913-1.21a4 4 0 0 1-.42.289c-.053.029-.069.029-.093.029v1.5c.618 0 1.032-.337 1.4-.608l-.886-1.21Z" fill="currentColor" /><path d="M13 20.615c-.91.247-1.926.385-3 .385-3.866 0-7-1.79-7-4s3.134-4 7-4 7 1.79 7 4c0 .345-.077.68-.22 1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={9} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} /><ellipse opacity={0.5} cx={9} cy={17} rx={7} ry={4} stroke="currentColor" strokeWidth={1.5} /><path d="m17.088 12.539.456-.597-.456.597ZM18 8.644l-.532.528a.75.75 0 0 0 1.064 0L18 8.644Zm.912 3.895-.456-.597.456.597Zm-1.368-.597c-.487-.371-.925-.668-1.278-1.053-.327-.357-.516-.725-.516-1.19h-1.5c0 .95.414 1.663.91 2.204.471.513 1.077.93 1.474 1.232l.91-1.193ZM15.75 9.7c0-.412.24-.745.547-.881.267-.118.69-.13 1.171.353l1.064-1.057c-.87-.875-1.945-1.065-2.842-.668A2.455 2.455 0 0 0 14.25 9.7h1.5Zm.884 3.435c.148.113.342.26.545.376.204.116.487.239.821.239v-1.5c.034 0 .017.011-.082-.044-.1-.056-.212-.14-.374-.264l-.91 1.193Zm2.732 0c.397-.303 1.003-.719 1.473-1.232.497-.541.911-1.255.911-2.203h-1.5c0 .464-.189.832-.516 1.19-.353.384-.791.681-1.278 1.052l.91 1.193ZM21.75 9.7c0-1-.585-1.875-1.44-2.253-.896-.397-1.973-.207-2.842.668l1.064 1.057c.48-.483.904-.471 1.17-.353.308.136.548.469.548.88h1.5Zm-3.294 2.242a3.584 3.584 0 0 1-.374.264c-.099.056-.116.044-.082.044v1.5c.334 0 .617-.123.82-.239.204-.115.398-.263.546-.376l-.91-1.193Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={9} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} /><ellipse cx={9} cy={17} rx={7} ry={4} stroke="currentColor" strokeWidth={1.5} /><path d="m17.088 12.539.456-.597-.456.597ZM18 8.644l-.532.528a.75.75 0 0 0 1.064 0L18 8.644Zm.912 3.895-.456-.597.456.597Zm-1.368-.597c-.487-.371-.925-.668-1.278-1.053-.327-.357-.516-.725-.516-1.19h-1.5c0 .95.414 1.663.91 2.204.471.513 1.077.93 1.474 1.232l.91-1.193ZM15.75 9.7c0-.412.24-.745.547-.881.267-.118.69-.13 1.171.353l1.064-1.057c-.87-.875-1.945-1.065-2.842-.668A2.455 2.455 0 0 0 14.25 9.7h1.5Zm.884 3.435c.148.113.342.26.545.376.204.116.487.239.821.239v-1.5c.034 0 .017.011-.082-.044-.1-.056-.212-.14-.374-.264l-.91 1.193Zm2.732 0c.397-.303 1.003-.719 1.473-1.232.497-.541.911-1.255.911-2.203h-1.5c0 .464-.189.832-.516 1.19-.353.384-.791.681-1.278 1.052l.91 1.193ZM21.75 9.7c0-1-.585-1.875-1.44-2.253-.896-.397-1.973-.207-2.842.668l1.064 1.057c.48-.483.904-.471 1.17-.353.308.136.548.469.548.88h1.5Zm-3.294 2.242a3.584 3.584 0 0 1-.374.264c-.099.056-.116.044-.082.044v1.5c.334 0 .617-.123.82-.239.204-.115.398-.263.546-.376l-.91-1.193Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4.25 6a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM9 2.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5ZM3.678 13.52c1.4-.8 3.283-1.27 5.322-1.27 2.04 0 3.922.47 5.322 1.27 1.378.788 2.428 1.99 2.428 3.48s-1.05 2.692-2.428 3.48c-1.4.8-3.283 1.27-5.322 1.27-2.04 0-3.922-.47-5.322-1.27C2.3 19.692 1.25 18.49 1.25 17s1.05-2.692 2.428-3.48Zm.744 1.303C3.267 15.483 2.75 16.28 2.75 17c0 .72.517 1.517 1.672 2.177C5.556 19.825 7.173 20.25 9 20.25c1.827 0 3.444-.425 4.578-1.073 1.155-.66 1.672-1.458 1.672-2.177 0-.72-.517-1.517-1.672-2.177-1.134-.648-2.751-1.073-4.578-1.073-1.827 0-3.444.425-4.578 1.073ZM15.69 7.447c.72-.319 1.558-.259 2.31.232.752-.49 1.59-.551 2.31-.232A2.455 2.455 0 0 1 21.75 9.7c0 .948-.414 1.662-.91 2.203-.388.422-.867.779-1.245 1.06-.082.061-.159.118-.229.172l-.002.001c-.148.114-.34.26-.543.375a1.67 1.67 0 0 1-.821.239 1.67 1.67 0 0 1-.82-.239c-.203-.114-.396-.261-.544-.375l-.002-.001c-.07-.054-.147-.11-.228-.171-.379-.282-.858-.639-1.245-1.06-.497-.542-.911-1.256-.911-2.204 0-1 .585-1.875 1.44-2.253Zm.06 2.253c0-.412.24-.745.547-.881.267-.118.69-.13 1.171.353a.75.75 0 0 0 1.064 0c.48-.483.904-.471 1.17-.353.308.136.548.469.548.88 0 .465-.189.833-.516 1.19-.282.308-.618.559-.99.837l-.288.216a3.584 3.584 0 0 1-.374.264.587.587 0 0 1-.082.04.587.587 0 0 1-.082-.04c-.1-.056-.212-.14-.374-.264l-.288-.216c-.372-.278-.708-.53-.99-.837-.327-.357-.516-.725-.516-1.19Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={6} r={4} fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.513 21.487C14.025 22 14.85 22 16.5 22c1.65 0 2.475 0 2.987-.513C20 20.975 20 20.15 20 18.5c0-1.65 0-2.475-.513-2.987C18.975 15 18.15 15 16.5 15c-1.65 0-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5c0 1.65 0 2.475.513 2.987Zm2.014-1.51C14.825 19.474 14 18.883 14 17.86c0-1.13 1.375-1.931 2.5-.845 1.125-1.087 2.5-.285 2.5.845 0 1.023-.825 1.614-1.527 2.117l-.213.154c-.26.19-.51.369-.76.369s-.5-.18-.76-.37l-.213-.153Z" fill="currentColor" /><path d="M15.415 13.507A11.288 11.288 0 0 0 12 13c-3.866 0-7 1.79-7 4 0 2.14 2.942 3.888 6.642 3.995a4.87 4.87 0 0 1-.064-.375c-.078-.578-.078-1.284-.078-2.034v-.172c0-.75 0-1.456.078-2.034.086-.643.293-1.347.874-1.928.581-.582 1.285-.788 1.928-.875a9.635 9.635 0 0 1 1.035-.07Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={6} r={4} fill="currentColor" /><path opacity={0.5} d="M18.095 15.031C17.67 15 17.149 15 16.5 15c-1.65 0-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5c0 1.166 0 1.92.181 2.443-.384.038-.778.057-1.181.057-3.866 0-7-1.79-7-4s3.134-4 7-4c2.613 0 4.892.818 6.095 2.031Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.513 21.487C14.025 22 14.85 22 16.5 22c1.65 0 2.475 0 2.987-.513C20 20.975 20 20.15 20 18.5c0-1.65 0-2.475-.513-2.987C18.975 15 18.15 15 16.5 15c-1.65 0-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5c0 1.65 0 2.475.513 2.987Zm2.014-1.51C14.825 19.474 14 18.883 14 17.86c0-1.13 1.375-1.931 2.5-.845 1.125-1.087 2.5-.285 2.5.845 0 1.023-.825 1.614-1.527 2.117l-.213.154c-.26.19-.51.369-.76.369s-.5-.18-.76-.37l-.213-.153Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default UserHeartRounded