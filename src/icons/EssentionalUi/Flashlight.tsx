import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Flashlight = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 2h1c.943 0 1.414 0 1.707.293C20 2.586 20 3.057 20 4v.172c0 .408 0 .613-.076.796-.076.184-.22.329-.51.618l-3.242 3.242c-.579.578-.867.868-1.02 1.235-.152.368-.152.776-.152 1.594V19c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C13.398 22 12.932 22 12 22v0c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C9 20.398 9 19.932 9 19v-7.343c0-.818 0-1.226-.152-1.594-.152-.367-.442-.657-1.02-1.235L4.586 5.586c-.29-.29-.434-.434-.51-.618C4 4.785 4 4.58 4 4.172V4c0-.943 0-1.414.293-1.707C4.586 2 5.057 2 6 2h7M15 10H9M12 13v2M4.5 5h15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 11.657V19c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C15 20.398 15 19.932 15 19v-7.343c0-.818 0-1.226.152-1.594.153-.367.442-.657 1.02-1.235l3.242-3.242c.29-.29.434-.434.51-.618C20 4.785 20 4.58 20 4.172V4c0-.943 0-1.414-.293-1.707C19.414 2 18.943 2 18 2H6c-.943 0-1.414 0-1.707.293C4 2.586 4 3.057 4 4v.172c0 .408 0 .613.076.796.076.184.22.329.51.618l3.242 3.242c.578.578.868.868 1.02 1.235.152.368.152.776.152 1.594Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M15 10H9M12 13v2M4.5 5h15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 11.657V19c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C15 20.398 15 19.932 15 19v-7.343c0-.818 0-1.226.152-1.594.153-.367.442-.657 1.02-1.235h0l3.242-3.242c.29-.29.434-.434.51-.618C20 4.785 20 4.58 20 4.172V4c0-.943 0-1.414-.293-1.707C19.414 2 18.943 2 18 2H6c-.943 0-1.414 0-1.707.293C4 2.586 4 3.057 4 4v.172c0 .408 0 .613.076.796.076.184.22.329.51.618l3.242 3.242c.578.578.868.868 1.02 1.235.152.368.152.776.152 1.594ZM15 10H9M12 13v2M4.5 5h15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 12.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M5.955 1.25c-.433 0-.83 0-1.152.043-.356.048-.732.16-1.04.47-.31.309-.422.684-.47 1.04-.043.323-.043.72-.043 1.152v.297c-.001.325-.002.677.133 1.003.135.327.385.575.616.805l.056.056L7.298 9.36c.621.621.775.793.857.991.082.198.095.428.095 1.307v7.368c0 .445 0 .816.02 1.12.022.317.069.617.19.907a2.75 2.75 0 0 0 1.487 1.489c.29.12.59.167.908.188.304.021.675.021 1.12.021h.05c.444 0 .816 0 1.12-.02.317-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.489-1.488c.12-.29.166-.59.188-.907.02-.304.02-.675.02-1.12v-7.368c0-.879.014-1.11.096-1.307.082-.198.235-.37.857-.991l3.242-3.243.057-.056c.231-.23.48-.478.616-.805.135-.326.134-.678.133-1.003v-.297c0-.433 0-.83-.044-1.152-.047-.356-.16-.731-.469-1.04-.309-.31-.684-.422-1.04-.47-.323-.043-.72-.043-1.152-.043H5.955Zm-1.13 1.572-.002.001-.001.003a.706.706 0 0 0-.042.177c-.029.21-.03.504-.03.997v.25h14.5V4c0-.493-.002-.787-.03-.997a.711.711 0 0 0-.042-.177l-.001-.003-.003-.001a.707.707 0 0 0-.177-.042c-.21-.028-.505-.03-.997-.03H6c-.493 0-.787.002-.998.03a.706.706 0 0 0-.176.042ZM18.19 5.75H5.81l2.634 2.634c.312.31.583.581.793.866h5.525c.21-.285.482-.555.793-.866L18.19 5.75Zm-3.926 5H9.736c.014.242.014.502.014.786V19c0 .476 0 .796.017 1.043.017.241.046.358.078.435.127.307.37.55.676.677.078.032.195.061.436.078.247.017.567.017 1.043.017s.796 0 1.043-.017c.24-.017.358-.046.435-.078.306-.127.55-.37.677-.677.032-.077.061-.194.078-.435.016-.247.017-.567.017-1.043v-7.464c0-.284 0-.543.013-.786Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 4.25H4V4c0-.943 0-1.414.293-1.707C4.586 2 5.057 2 6 2h12c.943 0 1.414 0 1.707.293C20 2.586 20 3.057 20 4v.25ZM16.172 8.828c-.163.163-.302.302-.422.427V9.25h-7.5v.005c-.12-.125-.26-.264-.421-.427L4.75 5.75h14.5l-3.078 3.078Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M9 11.657V19c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C15 20.398 15 19.932 15 19v-7.343c0-.377 0-.668.015-.907h-6.03c.015.24.015.53.015.907ZM12.75 13a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M9 11.657V19c0 .932 0 1.398.153 1.765a2 2 0 0 0 1.082 1.083C10.602 22 11.069 22 12 22c.932 0 1.398 0 1.766-.152a2 2 0 0 0 1.082-1.083C15 20.398 15 19.932 15 19v-7.343c0-.818 0-1.226.153-1.594L15.18 10H8.82c.01.02.02.042.028.063.152.368.152.776.152 1.594Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 12.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><path opacity={0.5} d="M20 4.172V4c0-.943 0-1.414-.293-1.707C19.414 2 18.943 2 18 2H6c-.943 0-1.414 0-1.707.293C4 2.586 4 3.057 4 4v.172c0 .408 0 .613.076.796L4.09 5h15.82c.005-.01.01-.02.014-.032C20 4.785 20 4.58 20 4.172Z" fill="currentColor" /><path d="m16.171 8.828 3.243-3.242c.272-.273.416-.417.496-.586H4.09c.08.17.223.313.496.586l3.242 3.242c.545.545.833.833.992 1.172h6.36c.159-.339.447-.627.991-1.172Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Flashlight