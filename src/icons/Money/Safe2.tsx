import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Safe2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="currentColor" /><path d="M12 12V8M12 12l3.5 1.5M12 12l-3.5 1.5" stroke="currentColor" strokeWidth={1.5} /><path d="M4.5 7v3M4.5 14v3M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 5C8.7 5 7.05 5 6.025 6.025 5 7.05 5 8.7 5 12s0 4.95 1.025 5.975C7.05 19 8.7 19 12 19s4.95 0 5.975-1.025C19 16.95 19 15.3 19 12s0-4.95-1.025-5.975c-.682-.681-1.64-.91-3.175-.986" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M10 8.535A4 4 0 1 1 8.126 11" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="currentColor" /><path opacity={0.5} d="M12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75v-1.5ZM15.25 12A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12h-1.5ZM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25v1.5Zm0-1.5A4.75 4.75 0 0 0 7.25 12h1.5A3.25 3.25 0 0 1 12 8.75v-1.5Zm.75 4.75V8h-1.5v4h1.5Zm-1.045.69 3.5 1.5.59-1.38-3.5-1.5-.59 1.38Zm0-1.38-3.5 1.5.59 1.38 3.5-1.5-.59-1.38ZM5.25 7a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5Zm1.5 4a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM11 5.75h2v-1.5h-2v1.5ZM18.25 11v2h1.5v-2h-1.5ZM13 18.25h-2v1.5h2v-1.5ZM5.75 13v-2h-1.5v2h1.5ZM11 18.25c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556l-1.06 1.06c.601.603 1.36.861 2.26.983.878.118 1.998.116 3.391.116v-1.5ZM4.25 13c0 1.393-.002 2.513.117 3.392.12.9.38 1.658.981 2.26L6.41 17.59c-.277-.277-.457-.665-.556-1.4-.101-.754-.103-1.756-.103-3.191h-1.5Zm14 0c0 1.435-.002 2.437-.103 3.192-.099.734-.28 1.122-.556 1.399l1.06 1.06c.603-.601.861-1.36.983-2.26.118-.878.116-1.998.116-3.391h-1.5ZM13 19.75c1.393 0 2.513.002 3.392-.116.9-.122 1.658-.38 2.26-.982L17.59 17.59c-.277.277-.665.457-1.4.556-.754.101-1.756.103-3.191.103v1.5Zm0-14c1.435 0 2.437.002 3.192.103.734.099 1.122.28 1.399.556l1.06-1.06c-.601-.603-1.36-.861-2.26-.982-.878-.119-1.998-.117-3.391-.117v1.5ZM19.75 11c0-1.393.002-2.513-.116-3.392-.122-.9-.38-1.658-.982-2.26L17.59 6.41c.277.277.457.665.556 1.4.101.754.103 1.756.103 3.191h1.5ZM11 4.25c-1.393 0-2.513-.002-3.392.117-.9.12-1.658.38-2.26.981L6.41 6.41c.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.191-.103v-1.5ZM5.75 11c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399l-1.06-1.06c-.603.601-.861 1.36-.982 2.26-.119.878-.117 1.998-.117 3.391h1.5Zm-2-4v3h1.5V7h-1.5Zm0 7v3h1.5v-3h-1.5Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M5 11c0-2.828 0-4.243.879-5.121C6.757 5 8.172 5 11 5h2c2.828 0 4.243 0 5.121.879C19 6.757 19 8.172 19 11v2c0 2.828 0 4.243-.879 5.121C17.243 19 15.828 19 13 19h-2c-2.828 0-4.243 0-5.121-.879C5 17.243 5 15.828 5 13v-2Z" stroke="currentColor" strokeWidth={1.5} /><path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="currentColor" /><path d="M12 12V8M12 12l3.5 1.5M12 12l-3.5 1.5" stroke="currentColor" strokeWidth={1.5} /><path d="M4.5 7v3M4.5 14v3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.057 1.25h-.114c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19ZM3.995 3.995c.57-.57 1.34-.897 2.619-1.069 1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.068 2.619.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62-.57.569-1.34.896-2.619 1.068-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62Zm12.397.372c-.867-.117-1.97-.117-3.337-.117h-2.11c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.278.278-.482.59-.634.933A.75.75 0 0 0 3.75 7v3a.75.75 0 0 0 .5.707v2.586a.75.75 0 0 0-.5.707v3a.75.75 0 0 0 .964.72c.151.342.356.654.634.932.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116h2.11c1.367 0 2.47 0 3.337-.116.9-.122 1.658-.38 2.26-.982.602-.602.86-1.36.982-2.26.116-.867.116-1.97.116-3.337v-2.11c0-1.367 0-2.47-.116-3.337-.122-.9-.38-1.658-.982-2.26-.602-.602-1.36-.86-2.26-.981ZM6.409 6.409c.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.191-.103h2c1.435 0 2.437.002 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.101.754.103 1.756.103 3.191v2c0 1.435-.002 2.437-.103 3.192-.099.734-.28 1.122-.556 1.399-.277.277-.665.457-1.4.556-.754.101-1.756.103-3.191.103h-2c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.754-.103-1.756-.103-3.191v-2c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399ZM12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm0 8c-1.07 0-2.02-.517-2.611-1.315l1.712-.734c.25.188.562.299.899.299.337 0 .648-.111.899-.299l1.712.734A3.245 3.245 0 0 1 12 15.25Zm-.75-6.413a3.251 3.251 0 0 0-2.453 3.72l1.713-.735a1.5 1.5 0 0 1 .74-1.121V8.837Zm4 3.163c0 .19-.016.376-.047.556l-1.713-.734a1.5 1.5 0 0 0-.74-1.121V8.837A3.251 3.251 0 0 1 15.25 12Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.75 12a3.251 3.251 0 0 1 2.5-3.163v1.041a2.25 2.25 0 0 0-1.495 2.268l-.958.41A3.27 3.27 0 0 1 8.75 12ZM12.75 9.878V8.837a3.251 3.251 0 0 1 2.453 3.72l-.958-.41a2.25 2.25 0 0 0-1.495-2.268ZM13.654 13.525l.957.41A3.245 3.245 0 0 1 12 15.25c-1.07 0-2.02-.517-2.611-1.315l.957-.41c.41.446 1 .725 1.654.725.654 0 1.243-.28 1.654-.725Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M7.808 5.853c-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4-.101.754-.103 1.756-.103 3.191v2c0 1.435.002 2.437.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h2c1.435 0 2.437-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.754.103-1.756.103-3.191v-2c0-1.435-.002-2.437-.103-3.192-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.4-.556-.754-.101-1.756-.103-3.191-.103h-2c-1.435 0-2.437.002-3.192.103ZM12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Zm11.055-7.75c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v2.11c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-2.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982a3.037 3.037 0 0 1-.634-.933A.75.75 0 0 1 3.75 17v-3a.75.75 0 0 1 .5-.707v-2.586a.75.75 0 0 1-.5-.707V7a.75.75 0 0 1 .964-.72c.151-.342.356-.654.634-.932.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117h2.11Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.75 8.837v1.041a2.25 2.25 0 0 1 1.495 2.268l.958.41a3.251 3.251 0 0 0-2.453-3.72ZM11.25 8.837a3.251 3.251 0 0 0-2.453 3.72l.958-.41a2.25 2.25 0 0 1 1.495-2.268V8.836ZM14.611 13.935l-.957-.41c-.41.446-1 .725-1.654.725-.654 0-1.243-.28-1.654-.725l-.957.41A3.245 3.245 0 0 0 12 15.25c1.07 0 2.02-.517 2.611-1.315Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.055 4.25h-2.11c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.278.278-.482.59-.634.933A.75.75 0 0 0 3.75 7v3a.75.75 0 0 0 .5.707v2.586a.75.75 0 0 0-.5.707v3a.75.75 0 0 0 .964.72c.151.342.356.654.634.932.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116h2.11c1.367 0 2.47 0 3.337-.116.9-.122 1.658-.38 2.26-.982.602-.602.86-1.36.982-2.26.116-.867.116-1.97.116-3.337v-2.11c0-1.367 0-2.47-.116-3.337-.122-.9-.38-1.658-.982-2.26-.602-.602-1.36-.86-2.26-.981-.867-.117-1.97-.117-3.337-.117ZM7.25 12a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Zm7.481.786h2.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v2.11c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-2.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982a3.037 3.037 0 0 1-.634-.933A.75.75 0 0 1 3.75 17v-3a.75.75 0 0 1 .5-.707v-2.586a.75.75 0 0 1-.5-.707V7a.75.75 0 0 1 .964-.72c.151-.342.356-.654.634-.932.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Safe2