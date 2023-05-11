import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const PenNewRound = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m16.652 3.455.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829-.205.262-.38.547-.524.848-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552-2.983 2.982m-2.982 2.983c-.404.404-.606.606-.829.78a4.59 4.59 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122m1.688 1.688L8.412 13.9" /><path fill="currentColor" d="M22.75 12a.75.75 0 0 0-1.5 0h1.5ZM12 2.75a.75.75 0 0 0 0-1.5v1.5ZM7.376 20.013a.75.75 0 1 0-.752 1.298l.752-1.298Zm-4.687-2.638a.75.75 0 1 0 1.298-.75l-1.298.75ZM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 1.25C6.063 1.25 1.25 6.063 1.25 12h1.5A9.25 9.25 0 0 1 12 2.75v-1.5ZM6.624 21.311A10.704 10.704 0 0 0 12 22.75v-1.5a9.204 9.204 0 0 1-4.624-1.237l-.752 1.298ZM1.25 12c0 1.957.524 3.794 1.439 5.375l1.298-.75A9.204 9.204 0 0 1 2.75 12h-1.5Z" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M16.652 3.455s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298M10.1 15.588 8.413 13.9" opacity={0.5} /><path stroke="currentColor" strokeWidth={1.5} d="m16.652 3.455.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649-5.964 5.965c-.404.404-.606.606-.829.78a4.59 4.59 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122.579-1.735c.18-.542.27-.813.392-1.068.144-.301.32-.586.524-.848.174-.223.376-.425.78-.83l5.965-5.964Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="m16.652 3.455.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829-.205.262-.38.547-.524.848-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552-5.965 5.965c-.404.404-.606.606-.829.78a4.59 4.59 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122m1.688 1.688L8.412 13.9" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25a.75.75 0 0 1 0 1.5A9.25 9.25 0 1 0 21.25 12a.75.75 0 0 1 1.5 0c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12Zm15.52-9.724a3.503 3.503 0 0 1 4.954 4.953l-6.648 6.649c-.371.37-.604.604-.863.806a5.34 5.34 0 0 1-.987.61c-.297.141-.61.245-1.107.411l-2.905.968a1.492 1.492 0 0 1-1.887-1.887l.968-2.905c.166-.498.27-.81.411-1.107.167-.35.372-.68.61-.987.202-.26.435-.492.806-.863l6.648-6.648Zm3.893 1.06a2.003 2.003 0 0 0-2.832 0l-.376.377c.022.096.054.21.098.338.143.413.415.957.927 1.469a3.875 3.875 0 0 0 1.807 1.025l.376-.376a2.003 2.003 0 0 0 0-2.832Zm-1.558 4.391a5.397 5.397 0 0 1-1.686-1.146 5.395 5.395 0 0 1-1.146-1.686L11.217 9.95c-.416.417-.58.582-.718.76a3.84 3.84 0 0 0-.439.71c-.097.203-.171.423-.358.982l-.431 1.295 1.032 1.033 1.295-.432c.56-.187.779-.261.983-.358.251-.12.49-.267.71-.439.177-.139.342-.302.759-.718l5.055-5.056Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M21.194 2.806a2.753 2.753 0 0 1 0 3.893l-.496.496a4.61 4.61 0 0 1-.533-.151 5.19 5.19 0 0 1-1.968-1.241 5.19 5.19 0 0 1-1.241-1.968 4.613 4.613 0 0 1-.15-.533l.495-.496a2.753 2.753 0 0 1 3.893 0ZM14.58 13.313c-.404.404-.606.606-.829.78a4.59 4.59 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-2.858.953a.742.742 0 0 1-.939-.94l.953-2.857c.18-.542.27-.813.392-1.068.144-.301.32-.586.524-.848.174-.223.376-.425.78-.83l4.916-4.915a6.7 6.7 0 0 0 1.533 2.36 6.702 6.702 0 0 0 2.36 1.533l-4.916 4.916Z" /><path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10a9.982 9.982 0 0 0-.591-3.395l-5.823 5.823c-.351.352-.615.616-.912.847a6.08 6.08 0 0 1-1.125.696c-.34.162-.694.28-1.166.437l-2.932.977a2.242 2.242 0 0 1-2.836-2.836l.977-2.932c.157-.472.275-.826.437-1.166.19-.399.424-.776.696-1.125.231-.297.495-.56.847-.912l5.823-5.823A9.982 9.982 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={12} cy={12} r={10} fill="currentColor" opacity={0.5} /><path fill="currentColor" d="M13.926 14.302c.245-.191.467-.413.912-.858l5.54-5.54c.134-.134.073-.365-.106-.427a6.066 6.066 0 0 1-2.3-1.449 6.066 6.066 0 0 1-1.45-2.3c-.061-.18-.292-.24-.426-.106l-5.54 5.54c-.445.444-.667.667-.858.912a5.045 5.045 0 0 0-.577.932c-.133.28-.233.579-.431 1.175l-.257.77-.409 1.226-.382 1.148a.817.817 0 0 0 1.032 1.033l1.15-.383 1.224-.408.77-.257c.597-.199.895-.298 1.175-.432.331-.158.644-.35.933-.576ZM22.113 6.17a3.028 3.028 0 0 0-4.282-4.283l-.179.178a.734.734 0 0 0-.206.651c.027.15.077.37.168.633a4.911 4.911 0 0 0 1.174 1.863 4.91 4.91 0 0 0 1.862 1.174c.263.09.483.141.633.168.24.043.48-.035.652-.207l.178-.178Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default PenNewRound