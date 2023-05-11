import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const RunningRound = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={18.5} cy={4.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M14.4 22V21.04a7 7 0 0 0-2.837-5.554c-.04-.03-.06-.045-.075-.058a2 2 0 0 1-.136-3.022l.07-.064 1.04-.946c1.628-1.479 1.133-4.153-.916-4.95a2.962 2.962 0 0 0-2.271.05l-.522.23M5.44 8.61 4 9.636M9 17l-.26.311A7.473 7.473 0 0 1 3 20M16 12a8.246 8.246 0 0 0 4 0" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={18.5} cy={4.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M14.4 22V21.04a7 7 0 0 0-2.837-5.554c-.04-.03-.06-.045-.075-.058a2 2 0 0 1-.136-3.022l.07-.064 1.04-.946c1.628-1.479 1.133-4.153-.916-4.95a2.962 2.962 0 0 0-2.271.05l-.522.23c-.54.237-.809.356-1.072.487-.438.217-.864.46-1.275.725-.247.16-.487.33-.967.672L4 9.636" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m9 17-.26.311A7.473 7.473 0 0 1 3 20M16 12a8.246 8.246 0 0 0 4 0" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={18.5} cy={4.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M14.4 22V21.04a7 7 0 0 0-2.837-5.554c-.04-.03-.06-.045-.075-.058a2 2 0 0 1-.136-3.022l.07-.064 1.04-.946c1.628-1.479 1.133-4.153-.916-4.95a2.962 2.962 0 0 0-2.271.05l-.522.23c-.54.237-.809.356-1.072.487-.438.217-.864.46-1.275.725-.247.16-.487.33-.967.672L4 9.636M9 17l-.26.311A7.473 7.473 0 0 1 3 20M16 12a8.246 8.246 0 0 0 4 0" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M18.5 2.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM15.25 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM8.972 5.81a3.712 3.712 0 0 1 2.846-.062c2.568 1 3.188 4.35 1.15 6.204l-1.04.946-.06.054a1.25 1.25 0 0 0 .148 1.938l.004.002.125.096a7.75 7.75 0 0 1 3.005 6.045V22a.75.75 0 0 1-1.5 0V21.049a6.25 6.25 0 0 0-2.54-4.964l-.006-.005a2.75 2.75 0 0 1-.192-4.287l.006-.005 1.04-.946c1.215-1.104.845-3.1-.685-3.697a2.212 2.212 0 0 0-1.695.037l-.522.23c-.545.241-.797.352-1.042.474a12.25 12.25 0 0 0-1.2.683c-.23.148-.455.308-.94.654l-1.439 1.024a.75.75 0 1 1-.87-1.222L5.021 7.99c.464-.331.717-.511.978-.68.435-.28.885-.537 1.348-.767.279-.138.563-.263 1.085-.493l.54-.239Zm6.3 6.008a.75.75 0 0 1 .91-.546 7.497 7.497 0 0 0 3.636 0 .75.75 0 0 1 .364 1.456 8.997 8.997 0 0 1-4.364 0 .75.75 0 0 1-.546-.91ZM9.48 16.424a.75.75 0 0 1 .096 1.056l-.26.311A8.223 8.223 0 0 1 3 20.75a.75.75 0 0 1 0-1.5 6.723 6.723 0 0 0 5.164-2.419l.26-.311a.75.75 0 0 1 1.056-.096Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M21 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" /><path fill="currentColor" fillRule="evenodd" d="M8.972 5.81a3.712 3.712 0 0 1 2.846-.062c2.568 1 3.188 4.35 1.15 6.204l-1.04.946-.06.054a1.25 1.25 0 0 0 .148 1.938l.004.002.125.096a7.75 7.75 0 0 1 3.005 6.202V22a.75.75 0 0 1-1.5 0V21.049a6.25 6.25 0 0 0-2.54-4.964l-.006-.005a2.75 2.75 0 0 1-.192-4.287l1.046-.95c1.215-1.105.845-3.102-.685-3.698a2.212 2.212 0 0 0-1.695.037l-.522.23c-.545.241-.797.352-1.042.474a12.25 12.25 0 0 0-1.2.683c-.23.148-.455.308-.94.654l-1.439 1.024a.75.75 0 1 1-.87-1.222L5.021 7.99c.464-.331.717-.511.978-.68.435-.28.885-.537 1.348-.767.279-.138.563-.263 1.085-.493l.54-.239Zm6.3 6.008a.75.75 0 0 1 .91-.546 7.497 7.497 0 0 0 3.636 0 .75.75 0 0 1 .364 1.456 8.997 8.997 0 0 1-4.364 0 .75.75 0 0 1-.546-.91ZM9.48 16.424a.75.75 0 0 1 .096 1.056l-.26.311A8.223 8.223 0 0 1 3 20.75a.75.75 0 0 1 0-1.5 6.723 6.723 0 0 0 5.164-2.419l.26-.311a.75.75 0 0 1 1.056-.096Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M21 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" /><path fill="currentColor" fillRule="evenodd" d="M8.972 5.81a3.712 3.712 0 0 1 2.846-.062c2.568 1 3.188 4.35 1.15 6.204l-1.04.946-.06.054a1.25 1.25 0 0 0 .148 1.938l.004.002c.059.045.093.07.125.096a7.75 7.75 0 0 1 3.005 6.045V22a.75.75 0 0 1-1.5 0V21.049a6.25 6.25 0 0 0-2.54-4.964l-.006-.005a2.75 2.75 0 0 1-.192-4.287l1.046-.95a2.212 2.212 0 0 0-2.38-3.66l-.522.23c-.545.24-.797.351-1.042.473a12.25 12.25 0 0 0-1.2.683c-.23.148-.454.308-.94.654l-1.439 1.024a.75.75 0 1 1-.87-1.222L5.021 7.99c.464-.331.717-.511.979-.68.434-.28.884-.537 1.347-.767.28-.138.563-.263 1.085-.493l.54-.239Z" clipRule="evenodd" /><g fill="currentColor" opacity={0.5}><path d="M15.272 11.818a.75.75 0 0 1 .91-.545 7.497 7.497 0 0 0 3.636 0 .75.75 0 1 1 .364 1.455 8.997 8.997 0 0 1-4.364 0 .75.75 0 0 1-.546-.91ZM9.48 16.424a.75.75 0 0 1 .096 1.056l-.26.311A8.223 8.223 0 0 1 3 20.752a.75.75 0 0 1 0-1.5 6.723 6.723 0 0 0 5.164-2.42l.26-.311a.75.75 0 0 1 1.056-.096Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default RunningRound