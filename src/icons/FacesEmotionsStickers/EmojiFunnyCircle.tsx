import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const EmojiFunnyCircle = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.913 15.934c1.258.315 2.685.315 4.122-.07 1.437-.385 2.673-1.099 3.605-2.001" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><ellipse cx={14.509} cy={9.774} rx={1} ry={1.5} transform="rotate(-15 14.51 9.774)" fill="currentColor" /><ellipse cx={8.714} cy={11.328} rx={1} ry={1.5} transform="rotate(-15 8.714 11.328)" fill="currentColor" /><path d="m13 16 .478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935" stroke="currentColor" strokeWidth={1.5} /><path d="M4.928 4.927A9.954 9.954 0 0 1 9.412 2.34C14.746.91 20.23 4.077 21.659 9.411c1.43 5.335-1.736 10.818-7.07 12.248-5.335 1.43-10.819-1.737-12.248-7.071a9.954 9.954 0 0 1-.002-5.176" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle opacity={0.5} cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><path d="M8.913 15.934c1.258.315 2.685.315 4.122-.07 1.437-.385 2.673-1.099 3.605-2.001" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><ellipse cx={14.509} cy={9.774} rx={1} ry={1.5} transform="rotate(-15 14.51 9.774)" fill="currentColor" /><ellipse cx={8.714} cy={11.328} rx={1} ry={1.5} transform="rotate(-15 8.714 11.328)" fill="currentColor" /><path d="m13 16 .478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} /><path d="M8.913 15.934c1.258.315 2.685.315 4.122-.07 1.437-.385 2.673-1.099 3.605-2.001" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><ellipse cx={14.509} cy={9.774} rx={1} ry={1.5} transform="rotate(-15 14.51 9.774)" fill="currentColor" /><ellipse cx={8.714} cy={11.328} rx={1} ry={1.5} transform="rotate(-15 8.714 11.328)" fill="currentColor" /><path d="m13 16 .478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.475 9.516c.215.8-.044 1.565-.577 1.707-.534.143-1.14-.39-1.354-1.19-.215-.8.044-1.564.577-1.707.534-.143 1.14.39 1.354 1.19ZM9.68 11.069c.214.8-.044 1.564-.578 1.707-.533.143-1.14-.39-1.354-1.19-.214-.8.044-1.564.578-1.707.533-.143 1.14.39 1.354 1.19Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Zm15.929 1.34a.75.75 0 0 1-.017 1.061c-.17.165-.35.324-.536.476l.218.445a2.25 2.25 0 1 1-4.04 1.982l-.273-.556a8.877 8.877 0 0 1-3.8-.087.75.75 0 1 1 .364-1.455c1.13.283 2.428.286 3.746-.067s2.44-1.005 3.277-1.815a.75.75 0 0 1 1.06.017Zm-3.174 3.005.146.298a.75.75 0 1 0 1.347-.66l-.127-.259a9.284 9.284 0 0 1-1.366.621Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm-3.815-6.25a.75.75 0 0 1 .91-.544c1.13.283 2.428.286 3.746-.067s2.44-1.005 3.277-1.815a.75.75 0 0 1 1.044 1.077 8.398 8.398 0 0 1-1.15.93l.159.321a1.5 1.5 0 0 1-2.693 1.322l-.196-.4-.053.014c-1.555.417-3.112.42-4.499.073a.75.75 0 0 1-.545-.91Zm7.29-6.234c.215.8-.044 1.565-.577 1.707-.534.143-1.14-.39-1.354-1.19-.215-.8.044-1.564.577-1.707.534-.143 1.14.39 1.354 1.19Zm-6.373 3.26c.534-.143.792-.907.578-1.707-.214-.8-.82-1.333-1.354-1.19-.534.143-.792.907-.578 1.707.215.8.82 1.333 1.354 1.19Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="currentColor" /><path d="M14.898 11.224c.533-.143.792-.908.578-1.708-.215-.8-.821-1.333-1.355-1.19-.533.143-.792.907-.577 1.708.214.8.82 1.333 1.354 1.19ZM9.102 12.777c.534-.143.792-.908.578-1.708-.214-.8-.82-1.333-1.354-1.19-.534.143-.792.907-.578 1.708.215.8.82 1.333 1.354 1.19ZM8.185 15.751a.75.75 0 0 1 .91-.545c1.13.283 2.428.287 3.746-.066 1.318-.354 2.44-1.006 3.278-1.816a.75.75 0 1 1 1.043 1.078 8.398 8.398 0 0 1-1.15.928l.159.322a1.5 1.5 0 1 1-2.693 1.322l-.196-.4-.053.014c-1.555.417-3.112.42-4.499.073a.75.75 0 0 1-.545-.91Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default EmojiFunnyCircle