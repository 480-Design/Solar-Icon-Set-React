import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const FacemaskSquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536c.974-.973 2.343-1.3 4.536-1.409" /><ellipse cx={15} cy={10.5} fill="currentColor" rx={1} ry={1.5} /><ellipse cx={9} cy={10.5} fill="currentColor" rx={1} ry={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M16.5 21.5 17 15l-3.143-1.258a5 5 0 0 0-3.714 0L7 15l.5 6.5M7 15l-4.5-2M7 19l-3.5 1.5M17 15l4.5-2M17 19l3.5 1.5" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity={0.5} /><ellipse cx={15} cy={10.5} fill="currentColor" rx={1} ry={1.5} /><ellipse cx={9} cy={10.5} fill="currentColor" rx={1} ry={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M16.5 21.5 17 15l-3.143-1.258a5 5 0 0 0-3.714 0L7 15l.5 6.5M7 15l-4.5-2M7 19l-3.5 1.5M17 15l4.5-2M17 19l3.5 1.5" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" /><ellipse cx={15} cy={10.5} fill="currentColor" rx={1} ry={1.5} /><ellipse cx={9} cy={10.5} fill="currentColor" rx={1} ry={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M16.5 21.5 17 15l-3.143-1.258a5 5 0 0 0-3.714 0L7 15l.5 6.5M7 15l-4.5-2M7 19l-3.5 1.5M17 15l4.5-2M17 19l3.5 1.5" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5ZM10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5Z" /><path fill="currentColor" fillRule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19 1.444.194 2.584.6 3.479 1.494.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19Zm-5.33 1.676c-1.278.172-2.049.5-2.618 1.069-.57.57-.897 1.34-1.069 2.619-.174 1.3-.176 3.008-.176 5.386v.293a.772.772 0 0 1 .055.022l4.21 1.871 2.85-1.14a5.75 5.75 0 0 1 4.27 0l2.85 1.14 4.21-1.871a.784.784 0 0 1 .055-.022V12c0-2.378-.002-4.086-.176-5.386-.172-1.279-.5-2.05-1.069-2.62-.57-.569-1.34-.896-2.619-1.068-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176Zm14.632 11.008-3.532 1.57-.222 2.89 2.844 1.22c.371-.528.603-1.22.739-2.228.123-.917.16-2.037.171-3.452ZM19 20.673l-1.63-.699-.085 1.113.102-.013c.659-.089 1.182-.219 1.613-.401Zm-3.228.532.439-5.713-2.632-1.053a4.25 4.25 0 0 0-3.156 0L7.79 15.492l.44 5.713c1.033.044 2.268.045 3.77.045 1.502 0 2.737 0 3.77-.045Zm-9.055-.118-.086-1.113-1.63.699c.432.183.955.312 1.614.4l.102.014Zm-3.051-1.474 2.844-1.218-.222-2.891-3.532-1.57c.011 1.415.048 2.535.171 3.452.136 1.008.368 1.7.739 2.227Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m21.996 13.81-4.281 1.712-.206 2.88 3.286 1.409a.749.749 0 0 1 .217.14c.834-1.262.964-3.111.984-6.142ZM19.888 21.054l-2.492-1.068-.133 1.859c1.1-.128 1.946-.363 2.625-.791ZM15.751 21.956v-.01l.462-6.454-2.635-1.053a4.25 4.25 0 0 0-3.156 0l-2.635 1.053.461 6.455v.01C9.302 22 10.539 22 12 22c1.463 0 2.699 0 3.751-.044ZM6.737 21.845l-.133-1.86-2.492 1.069c.679.428 1.524.663 2.625.79ZM2.988 19.952a.75.75 0 0 1 .217-.141l3.286-1.409-.206-2.88-4.281-1.713c.02 3.03.15 4.88.984 6.143Z" /><path fill="currentColor" fillRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12v.25a.75.75 0 0 1 .279.054L7 14.192l2.864-1.146a5.75 5.75 0 0 1 4.271 0L17 14.192l4.721-1.888A.75.75 0 0 1 22 12.25V12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464ZM10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5Zm5 1.5c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5.448 1.5 1 1.5Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12v.25a.75.75 0 0 1 .279.054L7 14.192l2.864-1.146a5.75 5.75 0 0 1 4.271 0L17 14.192l4.721-1.888A.75.75 0 0 1 22 12.25V12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Z" opacity={0.5} /><path fill="currentColor" d="M10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5ZM16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5ZM21.996 13.81l-4.281 1.712-.206 2.88 3.287 1.409a.747.747 0 0 1 .216.141c.834-1.262.964-3.112.984-6.142ZM19.888 21.054l-2.492-1.068-.133 1.86c1.1-.13 1.946-.364 2.625-.792ZM15.751 21.957l.001-.01.461-6.454-2.635-1.054a4.25 4.25 0 0 0-3.156 0l-2.635 1.054.461 6.454v.01C9.303 22 10.539 22 12 22c1.463 0 2.699 0 3.751-.043ZM6.737 21.845l-.133-1.86-2.492 1.069c.679.428 1.524.663 2.625.791ZM2.988 19.952a.747.747 0 0 1 .217-.141l3.286-1.409-.205-2.88-4.282-1.712c.02 3.03.15 4.88.984 6.142Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default FacemaskSquare