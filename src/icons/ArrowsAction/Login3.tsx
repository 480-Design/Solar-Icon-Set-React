import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Login3 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 16c0 2.828 0 4.243.879 5.121.641.642 1.568.815 3.121.862M8 8c0-2.828 0-4.243.879-5.121C9.757 2 11.172 2 14 2h1c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121-.768.769-1.946.865-4.121.877M3 9.5v5c0 2.357 0 3.535.732 4.268.732.732 1.911.732 4.268.732M3.732 5.232C4.464 4.5 5.643 4.5 8 4.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M6 11.25a.75.75 0 0 0 0 1.5v-1.5Zm9 .75.53.53a.75.75 0 0 0 0-1.06L15 12Zm-3.03 1.97a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm1.06-5a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM6 12.75h9v-1.5H6v1.5Zm8.47-1.28-2.5 2.5 1.06 1.06 2.5-2.5-1.06-1.06Zm1.06 0-2.5-2.5-1.06 1.06 2.5 2.5 1.06-1.06Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 16c0 2.828 0 4.243.879 5.121C9.757 22 11.172 22 14 22h1c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2h-1c-2.828 0-4.243 0-5.121.879C8 3.757 8 5.172 8 8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M8 19.5c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5v-5c0-2.357 0-3.536.732-4.268C4.464 4.5 5.643 4.5 8 4.5" stroke="currentColor" strokeWidth={1.5} /><path d="M6 11.25a.75.75 0 0 0 0 1.5v-1.5Zm9 .75.53.53a.75.75 0 0 0 0-1.06L15 12Zm-3.03 1.97a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm1.06-5a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM6 12.75h9v-1.5H6v1.5Zm8.47-1.28-2.5 2.5 1.06 1.06 2.5-2.5-1.06-1.06Zm1.06 0-2.5-2.5-1.06 1.06 2.5 2.5 1.06-1.06Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 16c0 2.828 0 4.243.879 5.121C9.757 22 11.172 22 14 22h1c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2h-1c-2.828 0-4.243 0-5.121.879C8 3.757 8 5.172 8 8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 19.5c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5v-5c0-2.357 0-3.536.732-4.268C4.464 4.5 5.643 4.5 8 4.5" stroke="currentColor" strokeWidth={1.5} /><path d="M6 11.25a.75.75 0 0 0 0 1.5v-1.5Zm9 .75.53.53a.75.75 0 0 0 0-1.06L15 12Zm-3.03 1.97a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm1.06-5a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM6 12.75h9v-1.5H6v1.5Zm8.47-1.28-2.5 2.5 1.06 1.06 2.5-2.5-1.06-1.06Zm1.06 0-2.5-2.5-1.06 1.06 2.5 2.5 1.06-1.06Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.53 12.53a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H6a.75.75 0 0 0 0 1.5h7.19l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.945 1.25h1.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-1.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.4-.4-.648-.869-.805-1.402-.951-.001-1.744-.012-2.386-.098-.764-.103-1.426-.325-1.955-.854-.529-.529-.751-1.19-.854-1.955-.098-.73-.098-1.656-.098-2.79V9.447c0-1.133 0-2.058.098-2.79.103-.763.325-1.425.854-1.954.529-.529 1.19-.751 1.955-.854.642-.086 1.435-.097 2.386-.098.157-.533.406-1.002.805-1.402.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117ZM7.25 16.055c0 1.05 0 1.943.053 2.694-.835-.003-1.455-.018-1.946-.084-.598-.08-.89-.224-1.094-.428-.204-.203-.348-.496-.428-1.094-.083-.619-.085-1.443-.085-2.643v-5c0-1.2.002-2.024.085-2.643.08-.598.224-.89.428-1.094.203-.204.496-.348 1.094-.428.491-.066 1.111-.08 1.946-.084C7.25 6 7.25 6.895 7.25 7.945V8a.75.75 0 1 0 1.5 0c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399.277-.277.665-.457 1.4-.556.755-.101 1.756-.103 3.191-.103h1c1.435 0 2.436.002 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.101.754.103 1.756.103 3.191v8c0 1.435-.002 2.436-.103 3.192-.099.734-.28 1.122-.556 1.399-.277.277-.665.457-1.4.556-.755.101-1.756.103-3.191.103h-1c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.755-.103-1.756-.103-3.191a.75.75 0 0 0-1.5 0v.055Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.5 9.568v4.864c0 2.294 0 3.44.722 4.153.655.647 1.674.706 3.596.712a7.656 7.656 0 0 1-.015-.105c-.115-.844-.115-1.916-.115-3.247v-.053c0-.403.331-.73.74-.73.408 0 .739.327.739.73 0 1.396.001 2.37.101 3.105.098.714.275 1.093.548 1.362.273.27.656.445 1.379.54.744.1 1.731.101 3.146.101h.985c1.415 0 2.401-.002 3.146-.1.723-.096 1.106-.272 1.378-.541.273-.27.451-.648.548-1.362.1-.734.102-1.709.102-3.105V8.108c0-1.397-.002-2.37-.102-3.106-.097-.713-.275-1.092-.547-1.36-.273-.27-.656-.446-1.38-.542-.744-.098-1.73-.1-3.145-.1h-.985c-1.415 0-2.402.002-3.146.1-.723.096-1.106.272-1.379.541-.273.27-.45.648-.548 1.362-.1.734-.101 1.708-.101 3.105 0 .403-.331.73-.74.73a.734.734 0 0 1-.739-.73v-.053c0-1.33 0-2.403.115-3.247l.015-.105c-1.922.006-2.94.065-3.596.712-.722.713-.722 1.86-.722 4.153Zm9.885 5.38 2.464-2.432a.723.723 0 0 0 0-1.032l-2.464-2.432a.746.746 0 0 0-1.045 0 .723.723 0 0 0 0 1.032l1.202 1.186H6.457a.734.734 0 0 0-.74.73c0 .403.331.73.74.73h7.085l-1.202 1.186a.723.723 0 0 0 0 1.032.746.746 0 0 0 1.045 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.6} d="M15 2h-1c-2.828 0-4.243 0-5.121.879C8 3.757 8 5.172 8 8v8c0 2.828 0 4.243.879 5.121C9.757 22 11.172 22 14 22h1c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2Z" fill="currentColor" /><path opacity={0.4} d="M8 8c0-1.538 0-2.657.141-3.5H8c-2.357 0-3.536 0-4.268.732C3 5.964 3 7.143 3 9.5v5c0 2.357 0 3.535.732 4.268.732.732 1.911.732 4.268.732h.141C8 18.657 8 17.538 8 16V8Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M14.53 11.47a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H5a.75.75 0 0 1 0-1.5h7.19l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Login3