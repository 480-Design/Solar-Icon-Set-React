import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const CloudBolt = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 12.353c0 2.707-1.927 4.97-4.5 5.52M6.286 18C3.919 18 2 16.104 2 13.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08m7.265-2.582a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.576 5.576 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.29 4.29 0 0 1 1.55.634m9.49-3.228A5.724 5.724 0 0 1 20 8.061" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m9.626 17.453 1.148-1.553c.743-1.005 1.114-1.507 1.46-1.4.346.106.346.722.346 1.953v.116c0 .445 0 .667.142.806l.008.007c.145.137.376.137.838.137.832 0 1.248 0 1.39.252l.006.013c.133.256-.108.582-.59 1.234l-1.148 1.553c-.743 1.005-1.114 1.507-1.46 1.4-.346-.105-.346-.721-.346-1.953v-.116c0-.445 0-.667-.142-.806l-.008-.007c-.145-.137-.376-.137-.838-.137-.832 0-1.248 0-1.39-.252a.427.427 0 0 1-.006-.013c-.133-.256.108-.582.59-1.234Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M6.286 18C3.919 18 2 16.104 2 13.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08m7.265-2.582a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.576 5.576 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.29 4.29 0 0 1 1.55.634m9.49-3.228C20.392 7.78 22 9.881 22 12.353c0 2.707-1.927 4.97-4.5 5.52" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m9.626 17.453 1.148-1.553c.743-1.005 1.114-1.507 1.46-1.4.346.106.346.722.346 1.953v.116c0 .445 0 .667.142.806l.008.007c.145.137.376.137.838.137.832 0 1.248 0 1.39.252l.006.013c.133.256-.108.582-.59 1.234l-1.148 1.553c-.743 1.005-1.114 1.507-1.46 1.4-.346-.105-.346-.721-.346-1.953v-.116c0-.445 0-.667-.142-.806l-.008-.007c-.145-.137-.376-.137-.838-.137-.832 0-1.248 0-1.39-.252a.427.427 0 0 1-.006-.013c-.133-.256.108-.582.59-1.234Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.286 18C3.919 18 2 16.104 2 13.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08m7.265-2.582a5.765 5.765 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.576 5.576 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.29 4.29 0 0 1 1.55.634m9.49-3.228C20.392 7.78 22 9.881 22 12.353c0 2.707-1.927 4.97-4.5 5.52" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m9.626 17.453 1.148-1.553c.743-1.005 1.114-1.507 1.46-1.4.346.106.346.722.346 1.953v.116c0 .445 0 .667.142.806l.008.007c.145.137.376.137.838.137.832 0 1.248 0 1.39.252l.006.013c.133.256-.108.582-.59 1.234l-1.148 1.553c-.743 1.005-1.114 1.507-1.46 1.4-.346-.105-.346-.721-.346-1.953v-.116c0-.445 0-.667-.142-.806l-.008-.007c-.145-.137-.376-.137-.838-.137-.832 0-1.248 0-1.39-.252a.427.427 0 0 1-.006-.013c-.133-.256.108-.582.59-1.234Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.476 2.75c-2.75 0-4.964 2.2-4.964 4.897 0 .462.065.909.185 1.331.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25 3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486 0 1.916 1.575 3.485 3.536 3.485a.75.75 0 0 1 0 1.5c-2.773 0-5.036-2.224-5.036-4.985 0-2.705 2.17-4.893 4.864-4.983a6.366 6.366 0 0 1-.102-1.135c0-3.541 2.902-6.397 6.464-6.397 3.158 0 5.796 2.244 6.355 5.221 2.3.977 3.919 3.238 3.919 5.882 0 3.074-2.188 5.631-5.093 6.253a.75.75 0 0 1-.314-1.467c2.24-.48 3.907-2.446 3.907-4.786 0-2.137-1.39-3.962-3.338-4.628a5.018 5.018 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416 6.517 6.517 0 0 1 3.024-.305 4.962 4.962 0 0 0-4.682-3.264Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.454 13.783c-.64-.196-1.118.249-1.342.48l-.91 1.149-.03.042-1.15 1.554-.028.04-.555.819c-.135.252-.312.696-.069 1.166l.018.033c.25.45.706.559.986.598.278.039.635.039 1.01.039h.285v.37c0 .569 0 1.073.05 1.444.043.316.171.971.827 1.172.64.196 1.118-.249 1.342-.48.263-.274.565-.683.91-1.149l1.18-1.596.028-.04.04-.054c.202-.272.393-.535.515-.765.135-.252.312-.696.069-1.166l-.018-.033c-.25-.45-.706-.559-.986-.598-.278-.039-.635-.039-1.01-.039h-.285v-.37c0-.569 0-1.073-.05-1.444-.043-.316-.172-.971-.827-1.172Zm-.627 1.962c-.126.164-.273.362-.45.601L10.23 17.9l-.221.301c.118.002.257.002.424.002h.033c.202 0 .418 0 .6.023.21.027.484.096.72.317l.005.005.013.013c.235.23.312.506.342.721.025.181.025.395.025.586V20.018c0 .28 0 .513.003.709.126-.163.273-.362.45-.601l1.148-1.554c.084-.113.157-.212.221-.301a32.812 32.812 0 0 0-.424-.002h-.033c-.202 0-.418 0-.6-.023a1.247 1.247 0 0 1-.72-.317l-.005-.005-.013-.013a1.21 1.21 0 0 1-.342-.721 4.492 4.492 0 0 1-.025-.586V16.454c0-.28 0-.513-.003-.709Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m9.626 17.465 1.148-1.555c.743-1.005 1.114-1.508 1.46-1.401.346.106.346.722.346 1.955v.116c0 .445 0 .667.142.806l.008.008c.145.136.376.136.838.136.832 0 1.248 0 1.39.252a.511.511 0 0 1 .006.013c.133.257-.108.583-.59 1.235l-1.148 1.555c-.743 1.005-1.114 1.507-1.46 1.401-.346-.106-.346-.723-.346-1.955v-.116c0-.445 0-.667-.142-.806l-.008-.008c-.145-.136-.376-.136-.838-.136-.832 0-1.248 0-1.39-.253a.597.597 0 0 1-.006-.012c-.133-.257.108-.583.59-1.235Z" fill="currentColor" /><path d="M7.578 18.011c.059-.207.14-.375.199-.486.157-.296.398-.622.6-.896l1.241-1.68c.327-.442.656-.887.954-1.197.218-.227.997-1.018 2.102-.679 1.138.35 1.308 1.48 1.35 1.79.044.334.054.745.056 1.169a5.6 5.6 0 0 1 .65.043c.334.047 1.107.203 1.537.977l.029.053c.165.319.215.627.204.902 3.057-.111 5.5-2.597 5.5-5.647 0-2.473-1.607-4.576-3.845-5.342C17.837 4.195 15.415 2 12.476 2 9.32 2 6.762 4.53 6.762 7.651c0 .69.125 1.352.354 1.963a4.354 4.354 0 0 0-.83-.08C3.919 9.535 2 11.433 2 13.774c0 2.34 1.919 4.238 4.286 4.238h1.292Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M16.286 18C19.442 18 22 15.472 22 12.353c0-2.472-1.607-4.573-3.845-5.338C17.837 4.194 15.415 2 12.476 2 9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.356 4.356 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765 2 16.104 3.919 18 6.286 18h10Z" fill="currentColor" /><path d="m9.626 17.465 1.148-1.555c.743-1.005 1.114-1.507 1.46-1.4.346.105.346.722.346 1.954v.116c0 .445 0 .667.142.807l.008.007c.145.136.376.136.838.136.832 0 1.248 0 1.39.253a.777.777 0 0 1 .006.012c.133.257-.108.583-.59 1.235l-1.148 1.555c-.743 1.005-1.114 1.508-1.46 1.401-.346-.106-.346-.722-.346-1.955v-.116c0-.444 0-.667-.142-.806l-.008-.007c-.145-.137-.376-.137-.838-.137-.832 0-1.248 0-1.39-.252a.427.427 0 0 1-.006-.013c-.133-.256.108-.583.59-1.235Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CloudBolt