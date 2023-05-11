import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Tornado = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 6c4.97 0 9-.672 9-1.5 0-.52-1.588-.978-4-1.247M12 3c-4.97 0-9 .672-9 1.5 0 .589 2.037 1.099 5 1.344M20 8s-2.791 1-8.276 1C6.24 9 4 8 4 8M16 14s-1.258.5-4 .5-4-.5-4-.5M13 17c-1.352 0-2.342-.121-3-.245m6-.255a9.627 9.627 0 0 1-1 .289M11.719 19.46c.384.025.81.04 1.281.04a9.32 9.32 0 0 0 1.5-.114M18 11s-.515 1-6 1m-6-1s.219.425 1.892.721M13 22h.5" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 3c-4.97 0-9 .672-9 1.5S7.03 6 12 6s9-.672 9-1.5c0-.52-1.588-.978-4-1.247" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M20 8s-2.791 1-8.276 1C6.24 9 4 8 4 8M16 14s-1.258.5-4 .5-4-.5-4-.5" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M16 16.5c-.748.255-1.648.5-3 .5s-2.342-.121-3-.245" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M11.719 19.46c.384.025.81.04 1.281.04a9.32 9.32 0 0 0 1.5-.114" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M18 11s-.515 1-6 1m-6-1s.219.425 1.892.721M13 22h.5" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 3c-4.97 0-9 .672-9 1.5S7.03 6 12 6s9-.672 9-1.5c0-.52-1.588-.978-4-1.247M20 8s-2.791 1-8.276 1C6.24 9 4 8 4 8M16 14s-1.258.5-4 .5-4-.5-4-.5M16 16.5c-.748.255-1.648.5-3 .5s-2.342-.121-3-.245M11.719 19.46c.384.025.81.04 1.281.04a9.32 9.32 0 0 0 1.5-.114M18 11s-.515 1-6 1m-6-1s.219.425 1.892.721M13 22h.5" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M4.313 4.5c.367-.112.852-.222 1.446-.32 1.577-.264 3.784-.43 6.241-.43a.75.75 0 0 0 0-1.5c-2.513 0-4.807.17-6.487.45-.835.139-1.553.31-2.08.518-.26.103-.518.23-.724.398-.196.16-.459.453-.459.884s.263.724.46.884c.205.167.462.295.722.398.528.207 1.246.38 2.08.518 1.681.28 3.975.45 6.488.45 2.514 0 4.807-.17 6.487-.45.835-.139 1.553-.31 2.08-.518.26-.103.518-.23.724-.398.196-.16.459-.453.459-.884 0-.535-.397-.857-.63-1.007-.27-.175-.62-.313-.997-.428-.762-.233-1.814-.421-3.04-.558a.75.75 0 0 0-.166 1.491c1.186.132 2.134.308 2.768.502h.002a11.67 11.67 0 0 1-1.446.32c-1.577.264-3.784.43-6.241.43s-4.664-.166-6.24-.43c-.595-.098-1.08-.208-1.447-.32Zm16.045.291-.013-.011.013.011ZM20.706 7.747a.75.75 0 0 1-.453.959L20 8l.253.706h-.002l-.004.002-.01.003-.03.011a10.842 10.842 0 0 1-.533.158c-.368.1-.909.23-1.622.358-1.426.258-3.54.512-6.328.512-2.788 0-4.769-.254-6.066-.515a13.83 13.83 0 0 1-1.45-.364 6.997 6.997 0 0 1-.468-.167l-.03-.012-.01-.004-.003-.002h-.001S3.694 8.684 4 8l-.306.685a.75.75 0 0 1 .609-1.371m0 0 .01.004.06.024c.06.022.155.057.29.1.268.085.693.203 1.29.323 1.193.24 3.074.485 5.771.485s4.721-.246 6.061-.488c.67-.121 1.17-.241 1.498-.33a9.36 9.36 0 0 0 .445-.132l.019-.006.234.654-.234-.654a.75.75 0 0 1 .96.453M8.273 13.302a.75.75 0 0 0-.55 1.395L8 14l-.277.697h.002l.003.002.007.003.02.007a3.085 3.085 0 0 0 .274.09c.184.053.45.12.802.188.705.134 1.752.263 3.169.263s2.464-.13 3.168-.263a8.66 8.66 0 0 0 .803-.189 4.727 4.727 0 0 0 .275-.09l.02-.006.006-.003.003-.001h.001s.001-.001-.276-.698l.277.697a.75.75 0 0 0-.55-1.395h-.002m0 0a7.175 7.175 0 0 1-.836.21c-.61.117-1.564.238-2.889.238-1.325 0-2.278-.12-2.888-.237a7.171 7.171 0 0 1-.809-.2 1.35 1.35 0 0 1-.028-.01m7.448 0h.002-.002ZM16.71 16.258a.75.75 0 0 1-.468.952 9.43 9.43 0 0 1-3.242.54c-1.397 0-2.434-.125-3.138-.258a.75.75 0 1 1 .276-1.474c.61.115 1.556.232 2.862.232a7.938 7.938 0 0 0 2.758-.46.75.75 0 0 1 .952.468ZM15.24 19.266a.75.75 0 0 1-.62.86c-.474.077-1.007.124-1.62.124-.486 0-.928-.015-1.329-.04a.75.75 0 1 1 .095-1.498c.368.024.78.038 1.234.038.535 0 .987-.04 1.38-.105a.75.75 0 0 1 .86.62ZM6.591 10.538a.75.75 0 0 0-1.258.806L6 11c-.667.344-.666.345-.666.345l.001.002.002.004.004.007.009.016a.886.886 0 0 0 .065.098c.035.046.077.094.128.142.102.097.237.196.418.295.357.194.914.394 1.8.55a.75.75 0 1 0 .261-1.476c-.787-.14-1.175-.3-1.346-.393a.79.79 0 0 1-.085-.052Zm11.752-.205a.75.75 0 0 1 .324 1.01L18 11c.667.344.665.346.665.346l-.001.003-.003.006-.007.012a.905.905 0 0 1-.131.18 1.537 1.537 0 0 1-.26.224c-.214.15-.525.304-.986.446-.916.281-2.5.533-5.277.533a.75.75 0 0 1 0-1.5c2.707 0 4.123-.248 4.837-.467.353-.108.513-.204.567-.241l.005-.004a.75.75 0 0 1 .934-.205ZM12.25 22a.75.75 0 0 1 .75-.75v1.5a.75.75 0 0 1-.75-.75Zm.75.75h.5a.75.75 0 0 0 0-1.5H13v1.5Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M4.313 4.5c.367-.112.852-.222 1.446-.32 1.577-.264 3.784-.43 6.241-.43a.75.75 0 0 0 0-1.5c-2.513 0-4.807.17-6.487.45-.835.139-1.553.31-2.08.518-.26.103-.518.23-.724.398-.196.16-.459.453-.459.884s.263.724.46.884c.205.167.462.295.722.398.528.207 1.246.38 2.08.518 1.681.28 3.975.45 6.488.45 2.514 0 4.807-.17 6.487-.45.835-.139 1.553-.31 2.08-.518.26-.103.518-.23.724-.398.196-.16.459-.453.459-.884 0-.535-.397-.857-.63-1.007-.27-.175-.62-.313-.997-.428-.762-.233-1.814-.421-3.04-.558a.75.75 0 0 0-.166 1.491c1.186.132 2.134.308 2.768.502h.002c-.367.112-.852.222-1.446.32-1.577.264-3.784.43-6.241.43s-4.664-.166-6.24-.43c-.595-.098-1.08-.208-1.447-.32Zm16.045.291a.06.06 0 0 1-.013-.011l.013.011ZM6.591 10.538a.75.75 0 0 0-1.258.806L6 11c-.667.344-.666.344-.666.345l.001.002.002.004.004.007.009.016a.9.9 0 0 0 .065.098c.035.046.077.094.128.142.102.097.237.196.418.295.357.194.914.394 1.8.55a.75.75 0 1 0 .261-1.476c-.787-.14-1.175-.3-1.346-.393a.79.79 0 0 1-.085-.052Zm11.752-.205a.75.75 0 0 1 .324 1.01L18 11c.667.344.666.345.665.346l-.001.003-.003.006-.007.012a.905.905 0 0 1-.131.18 1.537 1.537 0 0 1-.26.224c-.214.15-.525.304-.986.446-.916.281-2.5.533-5.277.533a.75.75 0 0 1 0-1.5c2.707 0 4.123-.248 4.837-.467.353-.108.513-.204.567-.241l.005-.004a.75.75 0 0 1 .934-.205Z" clipRule="evenodd" /><path fill="currentColor" d="M20.706 7.747a.75.75 0 0 1-.453.959h-.002l-.004.002-.01.003-.03.011a10.842 10.842 0 0 1-.533.158c-.368.1-.909.23-1.622.358-1.426.258-3.54.512-6.328.512-2.788 0-4.769-.254-6.066-.515a13.83 13.83 0 0 1-1.45-.364 6.997 6.997 0 0 1-.468-.167l-.03-.012-.01-.004-.003-.002h-.001S3.694 8.684 4 8l-.306.685a.75.75 0 0 1 .609-1.371l.01.004.06.024c.06.022.155.057.29.1.268.085.693.203 1.29.323 1.193.24 3.074.485 5.771.485s4.721-.246 6.061-.488c.67-.121 1.17-.241 1.498-.33a9.36 9.36 0 0 0 .445-.132l.019-.006a.75.75 0 0 1 .96.453Z" /><path fill="currentColor" fillRule="evenodd" d="M8.273 13.302a.75.75 0 0 0-.55 1.395L8 14l-.277.697h.002l.003.002.007.003.02.007a3.085 3.085 0 0 0 .274.09c.184.053.45.12.802.188.705.134 1.752.263 3.169.263s2.464-.13 3.168-.263a8.66 8.66 0 0 0 .803-.189 4.727 4.727 0 0 0 .275-.09l.02-.006.006-.003.003-.001h.001s.001-.001-.276-.698l.277.697a.75.75 0 0 0-.554-1.394h.002l.001-.001h-.001l-.028.01c-.029.01-.077.026-.146.046-.138.04-.358.097-.663.155-.61.116-1.563.237-2.888.237s-2.278-.12-2.888-.237a7.171 7.171 0 0 1-.809-.2 1.35 1.35 0 0 1-.028-.01m8.435 2.954a.75.75 0 0 1-.468.953 9.43 9.43 0 0 1-3.242.54c-1.397 0-2.434-.125-3.138-.258a.75.75 0 1 1 .276-1.474c.61.115 1.556.232 2.862.232a7.938 7.938 0 0 0 2.758-.46.75.75 0 0 1 .952.468Zm-1.47 3.009a.75.75 0 0 1-.62.86c-.474.077-1.007.124-1.62.124-.486 0-.928-.015-1.329-.04a.75.75 0 1 1 .095-1.498c.368.024.78.038 1.234.038.535 0 .987-.04 1.38-.105a.75.75 0 0 1 .86.62ZM12.25 22a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H13a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M4.313 4.5c.367-.112.852-.222 1.446-.32 1.577-.264 3.784-.43 6.241-.43a.75.75 0 0 0 0-1.5c-2.513 0-4.807.17-6.487.45-.835.139-1.553.31-2.08.518-.26.103-.518.23-.724.398-.196.16-.459.453-.459.884s.263.724.46.884c.205.167.462.295.722.398.528.207 1.246.38 2.08.518 1.681.28 3.975.45 6.488.45 2.514 0 4.807-.17 6.487-.45.835-.139 1.553-.31 2.08-.518.26-.103.518-.23.724-.398.196-.16.459-.453.459-.884 0-.535-.397-.857-.63-1.007-.27-.175-.62-.313-.997-.428-.762-.233-1.814-.421-3.04-.558a.75.75 0 0 0-.166 1.491c1.186.132 2.134.308 2.768.502h.002c-.367.112-.852.222-1.446.32-1.577.264-3.784.43-6.241.43s-4.664-.166-6.24-.43c-.595-.098-1.08-.208-1.447-.32Zm16.045.291-.013-.011.013.011ZM6.591 10.538a.75.75 0 0 0-1.258.806L6 11c-.667.344-.666.345-.666.345l.001.002.002.004.004.007.009.016a.9.9 0 0 0 .065.098c.035.046.077.094.128.142.102.097.237.196.418.295.357.194.914.394 1.8.55a.75.75 0 1 0 .261-1.476c-.787-.14-1.175-.3-1.346-.393a.79.79 0 0 1-.085-.052Zm11.752-.205a.75.75 0 0 1 .324 1.01L18 11c.667.344.665.346.665.346l-.001.003-.003.006-.007.012a.905.905 0 0 1-.131.18 1.537 1.537 0 0 1-.26.224c-.214.15-.525.304-.986.446-.916.281-2.5.533-5.277.533a.75.75 0 0 1 0-1.5c2.707 0 4.123-.248 4.837-.467.353-.108.513-.204.567-.241l.005-.004a.75.75 0 0 1 .934-.205ZM16.71 16.258a.75.75 0 0 1-.468.952 9.43 9.43 0 0 1-3.242.54c-1.397 0-2.434-.125-3.138-.258a.75.75 0 1 1 .276-1.474c.61.115 1.556.232 2.862.232a7.938 7.938 0 0 0 2.758-.46.75.75 0 0 1 .952.468ZM12.25 22a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H13a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /><path fill="currentColor" d="M15.24 19.266a.75.75 0 0 1-.62.86c-.474.077-1.007.124-1.62.124-.486 0-.928-.015-1.329-.04a.75.75 0 0 1 .095-1.497c.368.023.78.037 1.234.037.535 0 .987-.04 1.38-.105a.75.75 0 0 1 .86.621ZM7.303 13.723a.75.75 0 0 1 .97-.421h.003a3.308 3.308 0 0 0 .174.056c.137.04.357.097.662.155.61.116 1.563.237 2.888.237s2.279-.12 2.889-.237a7.175 7.175 0 0 0 .808-.2l.028-.01.001-.001a.75.75 0 0 1 .551 1.395L16 14c.277.697.276.698.276.698h-.001l-.003.001-.007.003-.019.007a3.234 3.234 0 0 1-.275.09 8.66 8.66 0 0 1-.802.188c-.705.134-1.752.263-3.169.263s-2.464-.129-3.168-.263a8.663 8.663 0 0 1-.802-.189 4.687 4.687 0 0 1-.276-.089l-.019-.007-.007-.003-.003-.001h-.002a.75.75 0 0 1-.42-.975ZM20.706 7.747a.75.75 0 0 1-.453.96h-.002l-.003.001-.01.004-.032.01a10.773 10.773 0 0 1-.533.158c-.367.1-.908.23-1.62.358-1.427.258-3.54.512-6.329.512-2.788 0-4.768-.254-6.066-.514a13.833 13.833 0 0 1-1.449-.365 7.001 7.001 0 0 1-.469-.166l-.03-.013-.01-.004-.003-.002h-.001S3.694 8.685 4 8l-.306.685a.75.75 0 0 1 .609-1.371l.01.004.06.024c.06.022.155.057.29.1.269.085.693.203 1.29.323 1.193.24 3.075.485 5.771.485 2.697 0 4.721-.246 6.062-.488.67-.121 1.17-.241 1.497-.33a9.328 9.328 0 0 0 .445-.131l.02-.007a.75.75 0 0 1 .958.453Z" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Tornado