import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const StopwatchPlay = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10 2h4" /><path stroke="currentColor" strokeWidth={1.5} d="M13.888 10.935C14.963 11.812 15.5 12.25 15.5 13s-.537 1.188-1.612 2.065c-.297.242-.591.47-.862.66-.237.167-.506.339-.784.508-1.073.652-1.609.978-2.09.617-.48-.36-.524-1.116-.612-2.628-.024-.427-.04-.846-.04-1.222s.016-.795.04-1.222c.088-1.512.132-2.267.612-2.628.481-.361 1.018-.035 2.09.617.278.169.547.341.784.508.27.19.565.418.862.66Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M7.5 5.204A9 9 0 1 1 4.204 8.5" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={12} cy={13} r={9} stroke="currentColor" strokeWidth={1.5} opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10 2h4" /><path stroke="currentColor" strokeWidth={1.5} d="M13.888 10.935C14.963 11.812 15.5 12.25 15.5 13s-.537 1.188-1.612 2.065c-.297.242-.591.47-.862.66-.237.167-.506.339-.784.508-1.073.652-1.609.978-2.09.617-.48-.36-.524-1.116-.612-2.628-.024-.427-.04-.846-.04-1.222s.016-.795.04-1.222c.088-1.512.132-2.267.612-2.628.481-.361 1.018-.035 2.09.617.278.169.547.341.784.508.27.19.565.418.862.66Z" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={12} cy={13} r={9} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10 2h4" /><path stroke="currentColor" strokeWidth={1.5} d="M13.888 10.935C14.963 11.812 15.5 12.25 15.5 13s-.537 1.188-1.612 2.065c-.297.242-.591.47-.862.66-.237.167-.506.339-.784.508-1.073.652-1.609.978-2.09.617-.48-.36-.524-1.116-.612-2.628-.024-.427-.04-.846-.04-1.222s.016-.795.04-1.222c.088-1.512.132-2.267.612-2.628.481-.361 1.018-.035 2.09.617.278.169.547.341.784.508.27.19.565.418.862.66Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2ZM12 4.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 13c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 18.385 2.25 13Zm10.323-3.91.059.036c.287.175.57.356.825.535.29.204.6.444.905.693l.046.037c.498.406.945.771 1.258 1.135.354.413.584.877.584 1.474s-.23 1.06-.584 1.474c-.313.364-.76.729-1.258 1.135l-.046.037c-.305.25-.615.49-.905.693-.255.179-.538.36-.825.535l-.06.036c-.484.295-.942.574-1.343.718-.223.08-.478.138-.754.118a1.451 1.451 0 0 1-.773-.296c-.459-.344-.643-.843-.74-1.34-.091-.472-.126-1.081-.167-1.793l-.003-.052c-.026-.436-.042-.87-.042-1.265 0-.395.016-.83.042-1.265l.003-.052c.04-.712.076-1.32.168-1.793.096-.497.28-.996.74-1.34.225-.17.483-.274.772-.296.276-.02.531.038.754.118.4.144.859.423 1.344.718Zm-1.973.661c-.024.019-.1.086-.165.424-.07.362-.1.868-.146 1.646-.024.419-.039.823-.039 1.179 0 .356.015.76.04 1.179.044.777.075 1.284.145 1.646.066.338.14.405.165.424a.601.601 0 0 0 .122-.033c.24-.086.565-.28 1.13-.624.27-.163.524-.327.743-.48.25-.177.53-.393.819-.628.558-.456.899-.737 1.114-.988.183-.213.222-.343.222-.496 0-.153-.04-.283-.222-.496-.215-.251-.556-.532-1.114-.988a14.648 14.648 0 0 0-.819-.627 13.73 13.73 0 0 0-.743-.481c-.566-.344-.89-.538-1.13-.624a.601.601 0 0 0-.122-.033Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M9.25 2.75A.75.75 0 0 1 10 2h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75ZM21 13.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-7.974-2.725a14.502 14.502 0 0 0-.784-.508c-1.073-.652-1.609-.978-2.09-.617-.48.36-.524 1.116-.612 2.628-.024.427-.04.846-.04 1.222s.016.795.04 1.222c.088 1.512.132 2.267.612 2.628.481.361 1.018.035 2.09-.617.278-.169.547-.341.784-.508.27-.19.565-.418.862-.66 1.075-.877 1.612-1.315 1.612-2.065s-.537-1.188-1.612-2.065c-.297-.242-.591-.47-.862-.66Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M9.25 2.75A.75.75 0 0 1 10 2h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /><path fill="currentColor" d="M12 23a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" opacity={0.5} /><path fill="currentColor" d="M13.026 11.275a14.502 14.502 0 0 0-.784-.508c-1.073-.652-1.609-.978-2.09-.617-.48.36-.524 1.116-.612 2.628-.024.427-.04.846-.04 1.222s.016.795.04 1.222c.088 1.512.132 2.267.612 2.628.481.361 1.018.035 2.09-.617.278-.169.547-.341.784-.508.27-.19.565-.418.862-.66C14.963 15.188 15.5 14.75 15.5 14s-.537-1.188-1.612-2.065c-.297-.242-.591-.47-.862-.66Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default StopwatchPlay