import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Scooter = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11 16v-1.5c0-1.886 0-2.828-.586-3.414C9.828 10.5 8.886 10.5 7 10.5h-.6c-.371 0-.557 0-.714.012a3.993 3.993 0 0 0-1.254.307M11 16h5m-5 0H3.1c-.093 0-.14 0-.178-.003a1 1 0 0 1-.919-.918C2 15.039 2 14.992 2 14.9c0-.371 0-.557.012-.714a4 4 0 0 1 .219-1.027M9.5 16a3 3 0 1 1-6 0M12 5h.528c1.203 0 1.804 0 2.287.299.484.298.753.836 1.29 1.912L19 13M18.143 11l.681-.502c.263-.194.395-.29.486-.417a1 1 0 0 0 .143-.282c.047-.149.047-.312.047-.638 0-.618 0-.926-.132-1.157a1.001 1.001 0 0 0-.372-.372c-.23-.132-.54-.132-1.157-.132H16.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M18 18.83A3 3 0 1 0 16.17 17" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><rect x={16} y={13} width={6} height={6} rx={3} stroke="currentColor" strokeWidth={1.5} /><path d="M11 16v-1.5c0-1.886 0-2.828-.586-3.414C9.828 10.5 8.886 10.5 7 10.5h-.6c-.371 0-.557 0-.714.012a4 4 0 0 0-3.674 3.674C2 14.343 2 14.53 2 14.9c0 .093 0 .14.003.178a1 1 0 0 0 .919.919A2.5 2.5 0 0 0 3.1 16H11Zm0 0h5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M9.5 16a3 3 0 1 1-6 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12 5h.528c1.203 0 1.804 0 2.287.299.484.298.753.836 1.29 1.912L19 13" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m18.143 11 .681-.502c.263-.194.395-.29.486-.417a1 1 0 0 0 .143-.282c.047-.149.047-.312.047-.638 0-.618 0-.926-.132-1.157a1.001 1.001 0 0 0-.372-.372c-.23-.132-.54-.132-1.157-.132H16.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><rect x={16} y={13} width={6} height={6} rx={3} stroke="currentColor" strokeWidth={1.5} /><path d="M11 16v-1.5c0-1.886 0-2.828-.586-3.414C9.828 10.5 8.886 10.5 7 10.5h-.6c-.371 0-.557 0-.714.012a4 4 0 0 0-3.674 3.674C2 14.343 2 14.53 2 14.9c0 .093 0 .14.003.178a1 1 0 0 0 .919.919A2.5 2.5 0 0 0 3.1 16H11Zm0 0h5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M9.5 16a3 3 0 1 1-6 0M12 5h.528c1.203 0 1.804 0 2.287.299.484.298.753.836 1.29 1.912L19 13M18.143 11l.681-.502c.263-.194.395-.29.486-.417a1 1 0 0 0 .143-.282c.047-.149.047-.312.047-.638 0-.618 0-.926-.132-1.157a1.001 1.001 0 0 0-.372-.372c-.23-.132-.54-.132-1.157-.132H16.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={19} cy={16} r={3} stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.864 5.783c-.313-.032-.72-.033-1.336-.033H12a.75.75 0 0 1 0-1.5h.565c.57 0 1.054 0 1.454.041.425.044.819.14 1.19.37.373.23.634.539.864.9.202.318.405.72.64 1.189h1.155c.284 0 .545 0 .762.02.235.02.49.069.738.21.272.155.497.38.652.652.141.248.19.503.21.738.02.217.02.478.02.762v.093c0 .26.001.538-.083.802a1.75 1.75 0 0 1-.25.494c-.162.224-.386.389-.596.542l-.052.039-.277.204.487.974a3.75 3.75 0 1 1-4.154 4.47h-5.15a3.751 3.751 0 0 1-7.352-.009A1.75 1.75 0 0 1 1.25 14.92V14.862c0-.335 0-.548.015-.735a4.75 4.75 0 0 1 4.362-4.362c.187-.015.4-.015.735-.015H7.052c.898 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.344.08 2.242v.802h3.575a3.756 3.756 0 0 1 2.548-2.828l-2.438-4.875c-.276-.552-.458-.915-.628-1.18-.16-.252-.274-.361-.386-.43-.111-.07-.26-.123-.557-.154ZM10.25 15.25v-.75c0-.964-.002-1.612-.066-2.095-.063-.461-.17-.659-.3-.789-.13-.13-.328-.237-.79-.3-.482-.064-1.13-.066-2.094-.066h-.6c-.386 0-.535 0-.655.01a3.25 3.25 0 0 0-2.985 2.985 9.626 9.626 0 0 0-.01.754c.01.122.129.24.25.25l7.25.001Zm-5.872 1.5a2.25 2.25 0 0 0 4.244 0H4.378ZM16.75 16a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm1.56-6.055.07-.051c.138-.102.216-.16.272-.206a.467.467 0 0 0 .05-.047.252.252 0 0 0 .036-.07c-.002.006.004-.005.007-.069.005-.073.005-.17.005-.341 0-.323 0-.515-.013-.657a.616.616 0 0 0-.022-.13.25.25 0 0 0-.088-.09.62.62 0 0 0-.131-.02 8.37 8.37 0 0 0-.657-.014h-.375l.847 1.695Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.864 5.783c-.313-.032-.72-.033-1.336-.033H12a.75.75 0 0 1 0-1.5h.565c.57 0 1.054 0 1.454.041.425.044.819.14 1.19.37.373.23.634.539.864.9.202.318.405.72.64 1.189h1.155c.284 0 .545 0 .762.02.235.02.49.069.738.21.272.155.497.38.652.652.141.248.19.503.21.738.02.217.02.478.02.762v.093c0 .26.001.538-.083.802a1.75 1.75 0 0 1-.25.494c-.162.224-.386.389-.596.542l-.052.039-.277.204.487.974a3.75 3.75 0 1 1-4.154 4.47h-5.15a3.751 3.751 0 0 1-7.352-.009A1.75 1.75 0 0 1 1.25 14.92V14.862c0-.335 0-.548.015-.735a4.75 4.75 0 0 1 4.362-4.362c.187-.015.4-.015.735-.015H7.052c.898 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.344.08 2.242v.802h3.575a3.756 3.756 0 0 1 2.548-2.828l-2.438-4.875c-.276-.552-.458-.915-.628-1.18-.16-.252-.274-.361-.386-.43-.111-.07-.26-.123-.557-.154Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M6.5 19a3 3 0 0 0 3-3h-6a3 3 0 0 0 3 3ZM18.824 10.498 18 11l-1.643-3.5h1.482c.618 0 .927 0 1.157.132a1 1 0 0 1 .372.372c.132.23.132.54.132 1.157 0 .326 0 .49-.047.638a.998.998 0 0 1-.143.282c-.091.126-.223.223-.486.417Z" fill="currentColor" /><path d="M13.864 5.783c-.313-.032-.72-.033-1.336-.033H12a.75.75 0 0 1 0-1.5h.565c.57 0 1.054 0 1.454.041.425.044.819.14 1.19.37.373.23.634.539.864.9.216.34.432.772.687 1.282l3.148 6.297a3.001 3.001 0 1 1-3.814 3.61H3.06c-.066 0-.134 0-.197-.005a1.75 1.75 0 0 1-1.613-1.826v-.057c0-.335 0-.548.015-.735A4.75 4.75 0 0 1 5.702 9.76c.145-.009.312-.01.54-.01h.81c.898 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.344.08 2.242v.802h4.345a3.006 3.006 0 0 1 2.119-2.146l-2.78-5.557c-.275-.552-.457-.915-.627-1.18-.16-.252-.274-.361-.386-.43-.111-.07-.26-.123-.557-.154Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Scooter