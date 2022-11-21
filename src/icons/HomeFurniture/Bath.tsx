import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Bath = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 20.5c.65 0 1.364-.017 2.098-.044.258-.01.386-.015.607-.037 3.278-.332 6.072-3.234 6.28-6.521.015-.222.015-.42.015-.815 0-.077 0-.116-.002-.148a1 1 0 0 0-.933-.933c-.033-.002-.07-.002-.148-.002M4.083 12c-.077 0-.115 0-.148.002a1 1 0 0 0-.933.933c-.002.032-.002.07-.002.148 0 .395 0 .593.014.815.18 2.844 2.296 5.4 4.986 6.252M6 20l-1 2M18 20l1 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 11.25a.75.75 0 0 0 0 1.5v-1.5Zm20 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 0a.75.75 0 0 0 0-1.5v1.5Zm4-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-16 1.5h12v-1.5H2v1.5Zm16 0h4v-1.5h-4v1.5Z" fill="currentColor" /><path d="M2.25 13a.75.75 0 0 0 1.5 0h-1.5ZM7.6 3.5l.696-.28-.696.28Zm.379.947.328.674-.328-.674ZM6.362 6.192l.695.283-.695-.283Zm4.215-1.814-.295.69.295-.69ZM6.346 8.742l-.698.275a.75.75 0 0 0 .994.413l-.296-.688Zm5.96-2.567.297.69a.75.75 0 0 0 .401-.964l-.698.274ZM3.75 13V4.385h-1.5V13h1.5ZM5.385 2.75c.669 0 1.27.407 1.518 1.028l1.393-.557a3.135 3.135 0 0 0-2.91-1.971v1.5ZM3.75 4.385c0-.903.732-1.635 1.635-1.635v-1.5A3.135 3.135 0 0 0 2.25 4.385h1.5Zm3.153-.607.38.948 1.392-.557-.379-.948-1.393.557Zm.14 4.689a2.679 2.679 0 0 1 .014-1.992l-1.39-.565a4.179 4.179 0 0 0-.02 3.107l1.396-.55Zm4.967-2.98L6.049 8.053l.593 1.377 5.96-2.566-.592-1.377Zm-1.728-.42c.622.266 1.085.77 1.327 1.383l1.395-.55a3.973 3.973 0 0 0-2.132-2.212l-.59 1.38ZM7.057 6.476a2.565 2.565 0 0 1 1.25-1.354l-.656-1.348A4.065 4.065 0 0 0 5.667 5.91l1.39.565Zm1.25-1.354a2.361 2.361 0 0 1 1.975-.053l.59-1.38a3.861 3.861 0 0 0-3.221.085l.656 1.348Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 13.083c0-.077 0-.116.002-.148a1 1 0 0 1 .933-.933c.033-.002.07-.002.148-.002h15.834c.077 0 .115 0 .148.002a1 1 0 0 1 .933.933c.002.032.002.07.002.148 0 .395 0 .593-.014.815-.209 3.287-3.003 6.189-6.28 6.52-.221.023-.35.028-.608.038A56.87 56.87 0 0 1 12 20.5c-.65 0-1.364-.017-2.098-.044-.258-.01-.387-.015-.607-.037-3.278-.332-6.072-3.234-6.28-6.521C3 13.676 3 13.478 3 13.083Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="m6 20-1 2M18 20l1 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2 12h20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M2.25 13a.75.75 0 0 0 1.5 0h-1.5ZM7.6 3.5l-.697.278.006.015.007.015L7.6 3.5Zm-.283 1.194a.75.75 0 0 0 1.366-.618l-1.366.618ZM3.75 13V4.385h-1.5V13h1.5ZM5.385 2.75c.669 0 1.27.407 1.518 1.028l1.393-.557a3.135 3.135 0 0 0-2.91-1.971v1.5ZM3.75 4.385c0-.903.732-1.635 1.635-1.635v-1.5A3.135 3.135 0 0 0 2.25 4.385h1.5Zm3.166-.577.4.886 1.367-.618-.4-.885-1.367.617Z" fill="currentColor" /><path d="m7.979 4.447.328.675-.328-.675ZM6.362 6.192l.695.283-.695-.283Zm4.215-1.814-.295.69.295-.69ZM6.346 8.742l-.698.275a.75.75 0 0 0 .994.414l-.296-.69Zm5.96-2.566.297.688a.75.75 0 0 0 .401-.963l-.698.275Zm-5.263 2.29a2.679 2.679 0 0 1 .014-1.991l-1.39-.565a4.179 4.179 0 0 0-.02 3.107l1.396-.55Zm4.967-2.98L6.05 8.054l.592 1.377 5.961-2.566-.593-1.377Zm-1.728-.418c.622.265 1.085.77 1.327 1.382l1.395-.55a3.973 3.973 0 0 0-2.132-2.212l-.59 1.38ZM7.057 6.475a2.565 2.565 0 0 1 1.25-1.353l-.656-1.35A4.065 4.065 0 0 0 5.667 5.91l1.39.565Zm1.25-1.353a2.361 2.361 0 0 1 1.975-.054l.59-1.38a3.86 3.86 0 0 0-3.221.085l.656 1.349Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 13.083c0-.077 0-.116.002-.148a1 1 0 0 1 .933-.933c.033-.002.07-.002.148-.002h15.834c.077 0 .115 0 .148.002a1 1 0 0 1 .933.933c.002.032.002.07.002.148 0 .395 0 .593-.014.815-.209 3.287-3.003 6.189-6.28 6.52-.221.023-.35.028-.608.038A56.87 56.87 0 0 1 12 20.5c-.65 0-1.364-.017-2.098-.044-.258-.01-.387-.015-.607-.037-3.278-.332-6.072-3.234-6.28-6.521C3 13.676 3 13.478 3 13.083Z" stroke="currentColor" strokeWidth={1.5} /><path d="m6 20-1 2M18 20l1 2M2 12h20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M2.25 13a.75.75 0 0 0 1.5 0h-1.5ZM7.6 3.5l.696-.28-.696.28Zm.379.947.328.674-.328-.674ZM6.362 6.192l.695.283-.695-.283Zm4.215-1.814-.295.69.295-.69ZM6.346 8.742l-.698.275a.75.75 0 0 0 .994.413l-.296-.688Zm5.96-2.567.297.69a.75.75 0 0 0 .401-.964l-.698.274ZM3.75 13V4.385h-1.5V13h1.5ZM5.385 2.75c.669 0 1.27.407 1.518 1.028l1.393-.557a3.135 3.135 0 0 0-2.91-1.971v1.5ZM3.75 4.385c0-.903.732-1.635 1.635-1.635v-1.5A3.135 3.135 0 0 0 2.25 4.385h1.5Zm3.153-.607.38.948 1.392-.557-.379-.948-1.393.557Zm.14 4.689a2.679 2.679 0 0 1 .014-1.992l-1.39-.565a4.179 4.179 0 0 0-.02 3.107l1.396-.55Zm4.967-2.98L6.049 8.053l.593 1.377 5.96-2.566-.592-1.377Zm-1.728-.42c.622.266 1.085.77 1.327 1.383l1.395-.55a3.973 3.973 0 0 0-2.132-2.212l-.59 1.38ZM7.057 6.476a2.565 2.565 0 0 1 1.25-1.354l-.656-1.348A4.065 4.065 0 0 0 5.667 5.91l1.39.565Zm1.25-1.354a2.361 2.361 0 0 1 1.975-.053l.59-1.38a3.861 3.861 0 0 0-3.221.085l.656 1.348Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5.385 2.75c-.903 0-1.635.732-1.635 1.635v6.865H22a.75.75 0 0 1 0 1.5h-.268c.007.045.011.09.014.136.004.058.004.12.004.18v.039c0 .375 0 .595-.016.84-.142 2.236-1.35 4.302-3.101 5.652a.766.766 0 0 1 .038.068l1 2a.75.75 0 1 1-1.342.67l-.968-1.935a7.357 7.357 0 0 1-3.228.805h-.007c-.74.028-1.464.045-2.126.045-.662 0-1.386-.017-2.126-.045h-.007a7.357 7.357 0 0 1-3.228-.805l-.968 1.935a.75.75 0 1 1-1.342-.67l1-2a.758.758 0 0 1 .038-.068c-1.751-1.35-2.96-3.416-3.101-5.652a12.933 12.933 0 0 1-.016-.84v-.355H2a.75.75 0 0 1 0-1.5h.25V4.385a3.135 3.135 0 0 1 6.046-1.164l.11.275a3.843 3.843 0 0 1 2.466.192 3.973 3.973 0 0 1 2.132 2.213.75.75 0 0 1-.401.963L6.643 9.43a.75.75 0 0 1-.995-.413c-.378-.96-.401-2.072.02-3.107a4.09 4.09 0 0 1 1.379-1.774l-.144-.358A1.635 1.635 0 0 0 5.385 2.75Zm-1.302 10h-.1a.249.249 0 0 0-.233.25v.083c0 .402 0 .574.013.767.185 2.922 2.695 5.528 5.607 5.822.195.02.303.024.56.034.728.027 1.433.044 2.07.044.637 0 1.342-.017 2.07-.044.257-.01.365-.014.56-.034 2.912-.294 5.422-2.9 5.607-5.822.013-.193.013-.365.013-.767v-.099c0-.002 0-.002 0 0a.25.25 0 0 0-.234-.233c.001 0 .002 0 0 0H20l-.082-.001H4.083Zm6.2-7.682a2.361 2.361 0 0 0-1.976.053 2.565 2.565 0 0 0-1.25 1.354 2.688 2.688 0 0 0-.19 1.226l4.38-1.886a2.426 2.426 0 0 0-.965-.747Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.5 4.135a1.635 1.635 0 0 1 3.153-.607l.144.358a4.09 4.09 0 0 0-1.38 1.774 4.179 4.179 0 0 0-.02 3.107.75.75 0 0 0 .995.413l5.96-2.566a.75.75 0 0 0 .402-.963 3.973 3.973 0 0 0-2.132-2.213 3.843 3.843 0 0 0-2.466-.192l-.11-.275A3.135 3.135 0 0 0 2 4.135V11h-.25a.75.75 0 0 0 0 1.5H2v.355c0 .375 0 .595.016.84.142 2.237 1.35 4.302 3.102 5.652a.745.745 0 0 0-.039.068l-1 2a.75.75 0 0 0 1.342.67l.968-1.935a7.358 7.358 0 0 0 2.58.765c.245.025.394.03.648.04h.007c.74.028 1.464.045 2.126.045.662 0 1.386-.017 2.126-.045h.007c.254-.01.404-.015.648-.04a7.358 7.358 0 0 0 2.58-.765l.968 1.936a.75.75 0 0 0 1.342-.671l-1-2a.796.796 0 0 0-.038-.068c1.751-1.35 2.96-3.416 3.102-5.652.015-.245.015-.465.015-.84v-.038c0-.06 0-.123-.004-.18a1.752 1.752 0 0 0-.014-.137h.268a.75.75 0 0 0 0-1.5H3.5V4.135Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2 11h-.25a.75.75 0 0 0 0 1.5H2v.355c0 .375 0 .595.016.84.142 2.237 1.35 4.302 3.102 5.652.157.126.913.588 1.27.803a7.358 7.358 0 0 0 2.581.765c.245.025.394.03.648.04h.007c.74.028 1.464.045 2.126.045.662 0 1.386-.017 2.126-.045h.007c.254-.01.404-.015.648-.04a7.358 7.358 0 0 0 2.58-.765c.339-.2 1.067-.639 1.272-.803 1.751-1.35 2.96-3.416 3.102-5.652.015-.245.015-.465.015-.84v-.038c0-.06 0-.123-.004-.18a1.752 1.752 0 0 0-.014-.137h.268a.75.75 0 0 0 0-1.5H2Z" fill="currentColor" /><path opacity={0.5} d="M5.118 19.347a.745.745 0 0 0-.039.068l-1 2a.75.75 0 1 0 1.342.67l.968-1.935c-.358-.215-1.114-.677-1.271-.803ZM17.111 20.15l.968 1.936a.75.75 0 1 0 1.342-.671l-1-2a.745.745 0 0 0-.039-.068c-.204.164-.932.604-1.27.803ZM3.5 4.135a1.635 1.635 0 0 1 3.153-.607l.144.358 1.36-.64-.11-.275A3.135 3.135 0 0 0 2 4.135V11h1.5V4.135Z" fill="currentColor" /><path d="M6.796 3.886a4.09 4.09 0 0 0-1.38 1.774 4.179 4.179 0 0 0-.019 3.107.75.75 0 0 0 .994.414l5.961-2.567a.75.75 0 0 0 .402-.963 3.974 3.974 0 0 0-2.133-2.213 3.843 3.843 0 0 0-2.465-.192l-1.36.64Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Bath