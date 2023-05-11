import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Signpost2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 0v1h1.5V2h-1.5ZM12.75 11a.75.75 0 0 0-1.5 0h1.5Zm-1.5 0v1h1.5v-1h-1.5ZM12.75 20a.75.75 0 0 0-1.5 0h1.5Zm-1.5 0v2h1.5v-2h-1.5Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M3.337 18.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337h10.796c.658 0 .986 0 1.288-.098a2 2 0 0 0 .383-.17c.274-.16.494-.404.933-.894.85-.947 1.276-1.42 1.379-1.974a2 2 0 0 0 0-.728c-.103-.553-.528-1.027-1.379-1.974-.44-.49-.659-.734-.933-.893a2 2 0 0 0-.383-.17c-.302-.099-.63-.099-1.288-.099H6.5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552c-.245.367-.312.84-.33 1.611M20.665 9.611a2 2 0 0 1-.552.552c-.504.337-1.207.337-2.611.337H6.706c-.658 0-.986 0-1.288-.098a1.998 1.998 0 0 1-.383-.17c-.274-.16-.494-.404-.933-.894-.851-.947-1.276-1.42-1.379-1.974a2 2 0 0 1 0-.728c.103-.553.528-1.027 1.379-1.974.439-.49.659-.734.933-.893a2 2 0 0 1 .383-.17c.302-.099.63-.099 1.288-.099h10.796c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552c.245.367.312.84.33 1.611M14 22h-4M9 7h6M9 16h6" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 0v1h1.5V2h-1.5ZM12.75 11a.75.75 0 0 0-1.5 0h1.5Zm-1.5 0v1h1.5v-1h-1.5Z" opacity={0.5} /><path stroke="currentColor" strokeWidth={1.5} d="M6.704 3.5H17.5c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C21 4.893 21 5.596 21 7c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552c-.504.337-1.207.337-2.611.337H6.704c-.658 0-.986 0-1.288-.098a1.998 1.998 0 0 1-.383-.17c-.274-.16-.494-.404-.933-.894-.85-.947-1.276-1.42-1.379-1.974a2 2 0 0 1 0-.728c.103-.553.528-1.027 1.379-1.974.44-.49.659-.734.933-.893a2 2 0 0 1 .383-.17c.302-.099.63-.099 1.288-.099ZM17.296 12.5H6.5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C3 13.893 3 14.596 3 16c0 1.404 0 2.107.337 2.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337h10.796c.658 0 .986 0 1.288-.098.133-.044.261-.1.383-.17.274-.16.494-.404.933-.894.85-.947 1.276-1.42 1.379-1.974a2 2 0 0 0 0-.728c-.103-.553-.528-1.027-1.379-1.974-.44-.49-.659-.734-.933-.893a1.996 1.996 0 0 0-.383-.17c-.302-.099-.63-.099-1.288-.099Z" /><path fill="currentColor" d="M12.75 20a.75.75 0 0 0-1.5 0h1.5ZM14 22.75a.75.75 0 0 0 0-1.5v1.5Zm-4-1.5a.75.75 0 0 0 0 1.5v-1.5ZM11.25 20v2h1.5v-2h-1.5ZM14 21.25h-4v1.5h4v-1.5Z" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M9 7h6M9 16h6" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 0v1h1.5V2h-1.5ZM12.75 11a.75.75 0 0 0-1.5 0h1.5Zm-1.5 0v1h1.5v-1h-1.5ZM12.75 20a.75.75 0 0 0-1.5 0h1.5Zm-1.5 0v2h1.5v-2h-1.5Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M14 22h-4M9 7h6M9 16h6" /><path stroke="currentColor" strokeWidth={1.5} d="M6.704 3.5H17.5c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C21 4.893 21 5.596 21 7c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552c-.504.337-1.207.337-2.611.337H6.704c-.658 0-.986 0-1.288-.098a1.998 1.998 0 0 1-.383-.17c-.274-.16-.494-.404-.933-.894-.85-.947-1.276-1.42-1.379-1.974a2 2 0 0 1 0-.728c.103-.553.528-1.027 1.379-1.974.44-.49.659-.734.933-.893a2 2 0 0 1 .383-.17c.302-.099.63-.099 1.288-.099ZM17.296 12.5H6.5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C3 13.893 3 14.596 3 16c0 1.404 0 2.107.337 2.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337h10.796c.658 0 .986 0 1.288-.098.133-.044.261-.1.383-.17.274-.16.494-.404.933-.894.85-.947 1.276-1.42 1.379-1.974a2 2 0 0 0 0-.728c-.103-.553-.528-1.027-1.379-1.974-.44-.49-.659-.734-.933-.893a1.996 1.996 0 0 0-.383-.17c-.302-.099-.63-.099-1.288-.099Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M8.25 7A.75.75 0 0 1 9 6.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 7ZM9 15.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z" /><path fill="currentColor" fillRule="evenodd" d="M12.75 2a.75.75 0 0 0-1.5 0v.75H6.606c-.562 0-1.005 0-1.422.135a2.75 2.75 0 0 0-.526.235c-.38.22-.676.55-1.051.968l-.09.1c-.404.45-.744.828-.99 1.164-.26.352-.463.715-.543 1.148a2.75 2.75 0 0 0 0 1c.08.433.282.796.542 1.148.247.336.587.714.992 1.165l.089.1c.375.418.671.748 1.05.967.168.097.344.175.527.235.417.136.86.136 1.422.135h4.644v.5H6.462c-.67 0-1.229 0-1.681.046-.473.048-.913.153-1.309.418-.3.2-.558.458-.759.758-.264.396-.369.835-.417 1.309-.046.452-.046 1.011-.046 1.68v.077c0 .67 0 1.229.046 1.681.048.473.153.913.417 1.309.201.3.459.558.76.759.395.264.835.369 1.308.417.452.046 1.011.046 1.68.046h4.789v1H10a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25v-1h4.644c.562 0 1.005 0 1.422-.135.183-.06.36-.138.526-.235.38-.22.676-.55 1.051-.968l.09-.1c.404-.45.744-.828.99-1.164.26-.352.463-.715.543-1.148.061-.33.061-.67 0-1-.08-.433-.282-.796-.542-1.148-.247-.336-.587-.714-.992-1.165l-.089-.1c-.375-.418-.671-.748-1.05-.967a2.751 2.751 0 0 0-.527-.235c-.417-.136-.86-.136-1.422-.135H12.75v-.5h4.788c.67 0 1.229 0 1.681-.046.473-.048.913-.153 1.309-.418.3-.2.558-.458.759-.758.264-.396.369-.836.417-1.309.046-.452.046-1.011.046-1.68v-.077c0-.67 0-1.229-.046-1.681-.048-.473-.153-.913-.418-1.309a2.75 2.75 0 0 0-.758-.759c-.396-.264-.836-.369-1.309-.417-.452-.046-1.011-.046-1.68-.046H12.75V2ZM6.704 4.25c-.706 0-.894.009-1.056.061a1.25 1.25 0 0 0-.239.107c-.148.085-.28.22-.751.745-.435.484-.725.808-.924 1.078-.191.26-.253.41-.275.532a1.25 1.25 0 0 0 0 .454c.022.121.084.272.275.532.199.27.489.594.924 1.078.472.526.603.66.751.745.076.044.156.08.239.107.162.052.35.061 1.056.061H17.5c.718 0 1.2 0 1.567-.038.355-.036.519-.1.628-.173.136-.09.253-.208.344-.345.073-.108.137-.272.173-.627.037-.367.038-.85.038-1.567 0-.718 0-1.2-.038-1.567-.036-.355-.1-.519-.173-.627a1.251 1.251 0 0 0-.345-.345c-.108-.073-.272-.137-.627-.173-.367-.037-.85-.038-1.567-.038H6.704Zm10.592 9c.706 0 .894.009 1.056.061.083.027.163.063.239.107.148.085.28.22.751.745.435.484.725.808.924 1.078.191.26.253.41.275.532.028.15.028.304 0 .454-.022.121-.084.272-.275.532-.199.27-.489.594-.924 1.078-.472.526-.603.66-.751.745-.076.044-.156.08-.24.107-.161.052-.349.061-1.055.061H6.5c-.718 0-1.2 0-1.567-.038-.355-.036-.519-.1-.627-.173a1.25 1.25 0 0 1-.345-.345c-.073-.108-.137-.272-.173-.627-.037-.367-.038-.85-.038-1.567 0-.718 0-1.2.038-1.567.036-.355.1-.519.173-.627a1.25 1.25 0 0 1 .345-.345c.108-.073.272-.137.627-.173.367-.037.85-.038 1.567-.038h10.796Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12.75 2a.75.75 0 0 0-1.5 0v1.5H6.704c-.658 0-.986 0-1.288.098a2 2 0 0 0-.383.17c-.274.16-.494.404-.933.894-.85.947-1.276 1.42-1.379 1.974a2 2 0 0 0 0 .728c.103.553.528 1.027 1.379 1.974.44.49.659.734.933.893.122.07.25.127.383.17.302.099.63.099 1.288.099h4.546v2H6.5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C3 13.893 3 14.596 3 16c0 1.404 0 2.107.337 2.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337h4.75v1.75H10a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25V19.5h4.546c.658 0 .986 0 1.288-.098.133-.044.261-.1.383-.17.274-.16.494-.404.933-.894.85-.947 1.276-1.42 1.379-1.974a2 2 0 0 0 0-.728c-.103-.553-.528-1.027-1.379-1.974-.44-.49-.659-.734-.933-.893a1.996 1.996 0 0 0-.383-.17c-.302-.099-.63-.099-1.288-.099H12.75v-2h4.75c1.404 0 2.107 0 2.611-.337a2 2 0 0 0 .552-.552C21 9.107 21 8.404 21 7c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 3.5 18.904 3.5 17.5 3.5h-4.75V2ZM9 6.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9ZM8.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12.75 2a.75.75 0 0 0-1.5 0v1.5h1.5V2Zm-1.5 8.5v2h1.5v-2h-1.5Zm0 10.75V19.5h1.5v1.75H14a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25Z" clipRule="evenodd" opacity={0.5} /><path fill="currentColor" fillRule="evenodd" d="M17.5 3.5H6.704c-.658 0-.987 0-1.289.098a2 2 0 0 0-.382.17c-.275.16-.494.404-.934.894-.85.947-1.276 1.42-1.378 1.974a2 2 0 0 0 0 .728c.102.553.528 1.027 1.378 1.974.44.49.66.734.934.893.121.07.25.127.382.17.302.099.63.099 1.288.099H17.5c1.404 0 2.106 0 2.61-.337a2 2 0 0 0 .552-.552C21 9.107 21 8.404 21 7c0-1.404 0-2.107-.338-2.611a2 2 0 0 0-.551-.552C19.606 3.5 18.904 3.5 17.5 3.5ZM9 6.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9ZM17.296 12.5H6.5c-1.405 0-2.107 0-2.612.337a2 2 0 0 0-.551.552C3 13.893 3 14.596 3 16c0 1.404 0 2.107.337 2.611a2 2 0 0 0 .551.552c.505.337 1.207.337 2.612.337h10.796c.657 0 .986 0 1.288-.098.133-.044.26-.1.382-.17.275-.16.494-.404.934-.894.85-.947 1.276-1.42 1.378-1.974a2 2 0 0 0 0-.728c-.102-.553-.528-1.027-1.378-1.974-.44-.49-.66-.734-.934-.893a1.996 1.996 0 0 0-.382-.17c-.302-.099-.63-.099-1.288-.099ZM8.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Signpost2