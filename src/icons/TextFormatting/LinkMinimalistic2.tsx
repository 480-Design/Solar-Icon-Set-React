import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const LinkMinimalistic2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m14.162 18.488-.72.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72M9.837 14.162l4.325-4.325M9.837 5.512l.721-.72a6.117 6.117 0 0 1 8.65 0m-.72 9.37.72-.72A6.099 6.099 0 0 0 20.998 9" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m14.162 18.488-.72.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m9.837 14.162 4.325-4.325" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m9.837 5.512.721-.72a6.117 6.117 0 1 1 8.65 8.65l-.72.72" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m14.162 18.488-.72.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72M9.837 14.162l4.325-4.325M9.837 5.512l.721-.72a6.117 6.117 0 1 1 8.65 8.65l-.72.72" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19.739 4.261a6.867 6.867 0 0 0-9.711 0l-.72.721a.75.75 0 0 0 1.06 1.06l.72-.72a5.367 5.367 0 1 1 7.59 7.59l-.72.72a.75.75 0 0 0 1.06 1.06l.72-.72a6.867 6.867 0 0 0 0-9.71ZM6.043 9.307a.75.75 0 0 1 0 1.06l-.721.722a5.367 5.367 0 1 0 7.59 7.59l.72-.722a.75.75 0 0 1 1.06 1.06l-.72.722a6.867 6.867 0 0 1-9.71-9.711l.72-.72a.75.75 0 0 1 1.06 0Z" /><path fill="currentColor" d="M14.693 9.307a.75.75 0 0 1 0 1.06l-4.325 4.326a.75.75 0 1 1-1.06-1.06l4.324-4.326a.75.75 0 0 1 1.06 0Z" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19.739 4.261a6.867 6.867 0 0 0-9.711 0l-.72.721a.75.75 0 0 0 1.06 1.06l.72-.72a5.367 5.367 0 1 1 7.59 7.59l-.72.72a.75.75 0 0 0 1.06 1.06l.72-.72a6.867 6.867 0 0 0 0-9.71ZM6.043 9.307a.75.75 0 0 1 0 1.06l-.721.722a5.367 5.367 0 1 0 7.59 7.59l.72-.722a.75.75 0 0 1 1.06 1.06l-.72.722a6.867 6.867 0 0 1-9.71-9.711l.72-.72a.75.75 0 0 1 1.06 0Z" /><path fill="currentColor" d="M14.693 9.307a.75.75 0 0 1 0 1.06l-4.325 4.326a.75.75 0 1 1-1.06-1.06l4.324-4.326a.75.75 0 0 1 1.06 0Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><g fill="currentColor" opacity={0.5}><path d="M19.739 4.261a6.867 6.867 0 0 0-9.711 0l-.72.721a.75.75 0 0 0 1.06 1.06l.72-.72a5.367 5.367 0 1 1 7.59 7.59l-.72.72a.75.75 0 0 0 1.06 1.06l.72-.72a6.867 6.867 0 0 0 0-9.71ZM6.043 9.307a.75.75 0 0 1 0 1.06l-.721.722a5.367 5.367 0 1 0 7.59 7.59l.72-.722a.75.75 0 0 1 1.06 1.06l-.72.722a6.867 6.867 0 0 1-9.71-9.711l.72-.72a.75.75 0 0 1 1.06 0Z" /></g><path fill="currentColor" d="M14.693 9.307a.75.75 0 0 1 0 1.06l-4.325 4.326a.75.75 0 1 1-1.06-1.06l4.325-4.326a.75.75 0 0 1 1.06 0Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default LinkMinimalistic2