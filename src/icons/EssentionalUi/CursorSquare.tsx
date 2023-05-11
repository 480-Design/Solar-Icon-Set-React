import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const CursorSquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m14.859 16.5-2.461-2.461-.752.751c-.77.77-1.154 1.154-1.568 1.064-.413-.091-.602-.602-.978-1.623l-1.255-3.406c-.75-2.037-1.125-3.055-.6-3.58.525-.525 1.543-.15 3.58.6L14.231 9.1c1.021.376 1.532.565 1.623.978.09.414-.294.798-1.064 1.568l-.751.752 2.46 2.461c.256.255.383.382.442.524a.774.774 0 0 1 0 .593c-.059.142-.186.27-.441.524-.255.255-.382.382-.524.441a.774.774 0 0 1-.593 0c-.142-.059-.27-.186-.524-.441Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m14.859 16.5-2.461-2.461-.752.751c-.77.77-1.154 1.154-1.568 1.064-.413-.091-.602-.602-.978-1.623l-1.255-3.406c-.75-2.037-1.125-3.055-.6-3.58.525-.525 1.543-.15 3.58.6L14.231 9.1c1.021.376 1.532.565 1.623.978.09.414-.294.798-1.064 1.568l-.751.752 2.46 2.461c.256.255.383.382.442.524a.774.774 0 0 1 0 .593c-.059.142-.186.27-.441.524-.255.255-.382.382-.524.441a.774.774 0 0 1-.593 0c-.142-.059-.27-.186-.524-.441Z" /><path stroke="currentColor" strokeWidth={1.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m14.859 16.5-2.461-2.461-.752.751c-.77.77-1.154 1.154-1.568 1.064-.413-.091-.602-.602-.978-1.623l-1.255-3.406c-.75-2.037-1.125-3.055-.6-3.58.525-.525 1.543-.15 3.58.6L14.231 9.1c1.021.376 1.532.565 1.623.978.09.414-.294.798-1.064 1.568l-.751.752 2.46 2.461c.256.255.383.382.442.524a.774.774 0 0 1 0 .593c-.059.142-.186.27-.441.524-.255.255-.382.382-.524.441a.774.774 0 0 1-.593 0c-.142-.059-.27-.186-.524-.441Z" /><path stroke="currentColor" strokeWidth={1.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M11.026 7.12c-.969-.357-1.774-.654-2.402-.787-.627-.133-1.361-.167-1.91.381-.548.549-.514 1.283-.38 1.91.132.628.43 1.433.786 2.402l1.295 3.514c.172.468.33.895.502 1.21.185.34.478.721 1 .836.522.115.949-.11 1.258-.34.29-.214.611-.536.964-.888l.259-.259 1.945 1.945c.115.116.226.227.328.315.11.096.248.201.425.275.374.155.793.155 1.166 0 .178-.074.316-.178.426-.275.102-.088.213-.2.328-.315l.029-.028c.115-.115.226-.226.314-.327.096-.11.201-.249.275-.427a1.523 1.523 0 0 0 0-1.166 1.546 1.546 0 0 0-.275-.425c-.088-.102-.2-.213-.315-.328L15.1 12.398l.259-.26c.352-.352.674-.674.889-.963.23-.31.454-.736.34-1.258-.116-.522-.498-.815-.836-1-.316-.173-.743-.33-1.211-.502L11.026 7.12Zm-3.271.719c.008-.059.02-.064.02-.064s.005-.012.064-.02c.08-.01.225-.007.473.045.51.108 1.212.365 2.254.75l3.406 1.254c.534.197.853.316 1.06.43l.032.018-.022.03c-.14.188-.38.431-.782.834l-.752.751a.75.75 0 0 0 0 1.06l2.462 2.462a6.22 6.22 0 0 1 .278.29 6.22 6.22 0 0 1-.559.56l-.01.01a6.22 6.22 0 0 1-.29-.279l-2.461-2.462a.75.75 0 0 0-1.06 0l-.752.752c-.403.402-.646.642-.834.782l-.03.022a1.605 1.605 0 0 1-.019-.033c-.113-.206-.232-.525-.43-1.06L8.55 10.567c-.384-1.042-.64-1.745-.749-2.254-.052-.248-.056-.393-.045-.473Z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M12.057 1.25h-.114c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19ZM3.995 3.995c.57-.57 1.34-.897 2.619-1.069 1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.068 2.619.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62-.57.569-1.34.896-2.619 1.068-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Zm8.934 10.575 2.461 2.46c.255.256.382.383.524.442.19.079.403.079.593 0 .142-.059.27-.186.524-.441.255-.255.382-.382.441-.524a.774.774 0 0 0 0-.593c-.059-.142-.186-.27-.441-.524l-2.461-2.461.751-.752c.77-.77 1.154-1.154 1.064-1.568-.091-.413-.602-.602-1.623-.978l-3.406-1.255c-2.037-.75-3.055-1.125-3.58-.6-.525.525-.15 1.543.6 3.58L9.1 14.231c.376 1.021.565 1.532.978 1.623.414.09.798-.294 1.568-1.064l.752-.751Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity={0.5} /><path fill="currentColor" d="m12.398 14.039 2.461 2.46c.255.256.382.383.524.442.19.079.403.079.593 0 .142-.059.27-.186.524-.441.255-.255.382-.382.441-.524a.774.774 0 0 0 0-.593c-.059-.142-.186-.27-.441-.524l-2.461-2.461.751-.752c.77-.77 1.154-1.154 1.064-1.568-.091-.413-.602-.602-1.623-.978l-3.406-1.255c-2.037-.75-3.055-1.125-3.58-.6-.525.525-.15 1.543.6 3.58L9.1 14.231c.376 1.021.565 1.532.978 1.623.414.09.798-.294 1.568-1.064l.752-.751Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CursorSquare