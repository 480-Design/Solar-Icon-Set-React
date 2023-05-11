import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Donut = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeWidth={1.5} d="M2 13s2.2 2 4 2c1.212 0 2.606-.908 3.387-1.5M14 14.224c.471.415 1.088.776 1.805.776 1.69 0 1.69-2 3.38-2 1.077 0 1.925.814 2.399 1.403" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M14.5 7 16 5M19 7l1-1M12 5l-1-1M10.5 7l-1.366.366M16.65 8.977l.066 1.412M20.678 10.085 19 11.563M7 5 6 4M6.792 9.144l-.585-1.288M5.665 12.642 6.5 11.5M3.683 10.35l-.079-1.412M7 20.662A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeWidth={1.5} d="M2 13s2.2 2 4 2c1.212 0 2.606-.908 3.387-1.5M14 14.224c.471.415 1.088.776 1.805.776 1.69 0 1.69-2 3.38-2 1.077 0 1.925.814 2.399 1.403" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M14.5 7 16 5" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m19 7 1-1" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m12 5-1-1" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m10.5 7-1.366.366M16.65 8.977l.066 1.412" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M20.678 10.085 19 11.563" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M7 5 6 4" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m6.792 9.144-.585-1.288M5.665 12.642 6.5 11.5" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m3.683 10.35-.079-1.412" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeWidth={1.5} d="M2 13s2.2 2 4 2c1.212 0 2.606-.908 3.387-1.5M14 14.224c.471.415 1.088.776 1.805.776 1.69 0 1.69-2 3.38-2 1.077 0 1.925.814 2.399 1.403" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M14.5 7 16 5M19 7l1-1M12 5l-1-1M10.5 7l-1.366.366M16.65 8.977l.066 1.412M20.678 10.085 19 11.563M7 5 6 4M6.792 9.144l-.585-1.288M5.665 12.642 6.5 11.5M3.683 10.35l-.079-1.412" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M2.924 10.207a9.295 9.295 0 0 0-.15 2.466l.066.054c.22.176.53.41.892.643.757.488 1.6.88 2.268.88.436 0 .964-.169 1.518-.448.337-.17.659-.367.943-.56a3.75 3.75 0 1 1 6.658.841c.222.107.452.167.686.167.463 0 .682-.22 1.117-.734l.032-.038c.361-.428.889-1.054 1.826-1.198a.75.75 0 0 1-.276-1.28l1.678-1.478a.75.75 0 0 1 .686-.163 9.204 9.204 0 0 0-.977-2.189l-.36.36a.75.75 0 1 1-1.061-1.06l.524-.524A9.229 9.229 0 0 0 12 2.75c-1.77 0-3.424.497-4.83 1.36l.36.36a.75.75 0 0 1-1.06 1.06l-.524-.524a9.279 9.279 0 0 0-2.377 3.182.75.75 0 0 1 .784.708l.079 1.412a.75.75 0 1 1-1.498.083l-.01-.184Zm18.23.458-1.659 1.46a.749.749 0 0 1-.2.127c.757.029 1.398.347 1.904.728a9.356 9.356 0 0 0-.045-2.315Zm-.303 4.032c-.442-.499-1.032-.947-1.667-.947-.463 0-.681.22-1.116.734l-.032.038c-.41.487-1.036 1.228-2.23 1.228-.708 0-1.316-.257-1.803-.58-.58.367-1.266.58-2.003.58a3.74 3.74 0 0 1-2.767-1.22c-.31.208-.664.423-1.04.612-.642.323-1.417.608-2.193.608-1.013 0-2.047-.488-2.82-.957a9.254 9.254 0 0 0 17.67-.096ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Zm9.22-8.53a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06Zm5.98.93a.75.75 0 0 1 .15 1.05l-1.5 2a.75.75 0 1 1-1.2-.9l1.5-2a.75.75 0 0 1 1.05-.15Zm-5.226 2.406a.75.75 0 0 1-.53.918l-1.366.366a.75.75 0 1 1-.388-1.448l1.366-.366a.75.75 0 0 1 .918.53Zm-5.327.368a.75.75 0 0 1 .993.372l.585 1.287a.75.75 0 0 1-1.365.621l-.586-1.287a.75.75 0 0 1 .373-.993Zm10.718 1.053a.75.75 0 0 1 .784.714l.066 1.413a.75.75 0 1 1-1.498.07l-.066-1.412a.75.75 0 0 1 .714-.785ZM12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-5.057 1.145a.75.75 0 0 1 .162 1.048l-.835 1.141a.75.75 0 1 1-1.21-.886l.835-1.14a.75.75 0 0 1 1.048-.163Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M18.677 14.531c.493-.492.802-.781 1.476-.781.594 0 1.134.237 1.582.547C20.697 18.713 16.732 22 12 22c-4.532 0-8.36-3.015-9.588-7.15.825.454 1.889.9 2.92.9.813 0 1.635-.277 2.325-.598a11.434 11.434 0 0 0 1.422-.8A3.743 3.743 0 0 0 12 15.75c.752 0 1.452-.221 2.039-.602.574.337 1.285.602 2.104.602 1.313 0 2.006-.691 2.513-1.198l.021-.021Z" /><path fill="currentColor" d="M9.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z" /><path fill="currentColor" fillRule="evenodd" d="M12 8.25a3.75 3.75 0 0 0-3.612 4.76c-.379.256-.855.546-1.363.782-.604.28-1.194.458-1.693.458-.76 0-1.694-.407-2.513-.894-.3-.179-.568-.358-.784-.512a9.976 9.976 0 0 1 3.382-8.372c.016.02.034.04.053.058l1 1a.75.75 0 0 0 1.06-1.06l-.904-.905A9.953 9.953 0 0 1 12 2a9.976 9.976 0 0 1 7.528 3.417.756.756 0 0 0-.058.053l-1 1a.75.75 0 0 0 1.06 1.06l.905-.904a9.953 9.953 0 0 1 1.54 6.073 4.04 4.04 0 0 0-1.822-.449c-1.314 0-2.006.691-2.514 1.198l-.021.021c-.493.492-.802.781-1.475.781-.35 0-.683-.082-.992-.216A3.75 3.75 0 0 0 12 8.25Zm4.45-3.85a.75.75 0 0 1 .15 1.05l-1.5 2a.75.75 0 1 1-1.2-.9l1.5-2a.75.75 0 0 1 1.05-.15Zm-5.98-.93a.75.75 0 0 0 0 1.06l1 1a.75.75 0 1 0 1.06-1.06l-1-1a.75.75 0 0 0-1.06 0ZM8.41 7.56a.75.75 0 0 0 .918.53l1.366-.366a.75.75 0 1 0-.388-1.448l-1.366.366a.75.75 0 0 0-.53.918Zm8.341 3.578a.75.75 0 0 0 .714-.784L17.4 8.94a.75.75 0 1 0-1.498.07l.066 1.413a.75.75 0 0 0 .784.714Zm2.19.416A.75.75 0 0 0 20 11.62l1.173-.973a.75.75 0 1 0-.991-1.126l-1.173.973a.75.75 0 0 0-.068 1.059ZM5.897 7.174a.75.75 0 0 0-.373.993l.586 1.287a.75.75 0 1 0 1.365-.62L6.89 7.545a.75.75 0 0 0-.993-.372Zm1.046 3.72a.75.75 0 0 1 .162 1.05l-.835 1.14a.75.75 0 1 1-1.21-.886l.835-1.14a.75.75 0 0 1 1.048-.163ZM3.563 8.19a.75.75 0 0 0-.708.79l.079 1.412a.75.75 0 1 0 1.498-.083l-.08-1.412a.75.75 0 0 0-.79-.707Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 .354.018.704.054 1.048C2.404 13.352 4.367 15 6 15c1.212 0 2.606-.908 3.387-1.5l.01-.009a3 3 0 1 1 4.61.739c.47.412 1.084.77 1.798.77 1.69 0 1.69-2 3.38-2 1.077 0 1.925.814 2.399 1.403l.092.132c.211-.81.324-1.659.324-2.535 0-5.523-4.477-10-10-10Z" opacity={0.5} /><path fill="currentColor" d="M9.388 13.5C8.607 14.092 7.212 15 6 15c-1.633 0-3.596-1.648-3.945-1.952C2.579 18.078 6.832 22 12 22c4.647 0 8.554-3.17 9.676-7.465l-.092-.132c-.473-.59-1.322-1.403-2.4-1.403-1.689 0-1.689 2-3.378 2-.714 0-1.328-.357-1.798-.77a2.999 2.999 0 0 1-4.61-.739l-.01.009ZM19.528 5.417a.777.777 0 0 0-.058.053l-1 1a.75.75 0 1 0 1.06 1.06l.905-.904c-.272-.426-.575-.83-.907-1.209ZM5.417 4.472c.017.02.034.04.053.058l1 1a.75.75 0 0 0 1.06-1.06l-.904-.905c-.426.272-.83.576-1.209.907ZM10.47 4.53a.75.75 0 1 1 1.06-1.06l1 1a.75.75 0 1 1-1.06 1.06l-1-1ZM16.6 5.45a.75.75 0 1 0-1.2-.9l-1.5 2a.75.75 0 0 0 1.2.9l1.5-2ZM8.41 7.56a.75.75 0 0 0 .918.53l1.366-.366a.75.75 0 1 0-.388-1.448l-1.366.366a.75.75 0 0 0-.53.918ZM17.465 10.354a.75.75 0 1 1-1.498.07l-.066-1.412a.75.75 0 0 1 1.498-.07l.066 1.412ZM18.437 12.059a.75.75 0 0 0 1.059.067l1.678-1.478a.75.75 0 1 0-.992-1.126L18.504 11a.75.75 0 0 0-.067 1.059ZM5.525 8.167a.75.75 0 1 1 1.365-.62l.585 1.286a.75.75 0 1 1-1.365.621l-.585-1.287Z" /><path fill="currentColor" d="M6.943 10.895a.75.75 0 0 1 .162 1.048l-.835 1.141a.75.75 0 1 1-1.21-.886l.835-1.14a.75.75 0 0 1 1.048-.163ZM2.856 8.98a.75.75 0 0 1 1.497-.084l.079 1.412a.75.75 0 0 1-1.498.083L2.856 8.98Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Donut