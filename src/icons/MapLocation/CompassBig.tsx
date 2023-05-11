import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const CompassBig = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M5.025 9.21c.537-1.342.806-2.013 1.267-2.54.118-.134.244-.26.378-.378.527-.461 1.198-.73 2.54-1.267 6.292-2.517 9.439-3.775 11.236-2.554.426.29.793.657 1.083 1.083.951 1.4.398 3.619-1.083 7.506-.42 1.102-.915 2.34-1.471 3.73-.537 1.342-.806 2.013-1.267 2.54-.118.134-.244.26-.378.378-.527.461-1.198.73-2.54 1.267C8.497 21.49 5.35 22.75 3.554 21.529a4.086 4.086 0 0 1-1.083-1.083c-.946-1.393-.403-3.596 1.06-7.446" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12.5 14.959a3 3 0 1 1 2.459-2.459" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M14.79 18.975C8.497 21.49 5.35 22.75 3.554 21.529a4.086 4.086 0 0 1-1.083-1.083c-1.221-1.797.037-4.944 2.554-11.236.537-1.342.806-2.013 1.267-2.54.118-.134.244-.26.378-.378.527-.461 1.198-.73 2.54-1.267 6.292-2.517 9.439-3.775 11.236-2.554.426.29.793.657 1.083 1.083 1.221 1.797-.038 4.943-2.554 11.236-.537 1.342-.806 2.013-1.267 2.54-.118.134-.244.26-.378.378-.527.461-1.198.73-2.54 1.267Z" opacity={0.5} /><circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M14.79 18.975C8.497 21.49 5.35 22.75 3.554 21.529a4.086 4.086 0 0 1-1.083-1.083c-1.221-1.797.037-4.944 2.554-11.236.537-1.342.806-2.013 1.267-2.54.118-.134.244-.26.378-.378.527-.461 1.198-.73 2.54-1.267 6.292-2.517 9.439-3.775 11.236-2.554.426.29.793.657 1.083 1.083 1.221 1.797-.038 4.943-2.554 11.236-.537 1.342-.806 2.013-1.267 2.54-.118.134-.244.26-.378.378-.527.461-1.198.73-2.54 1.267Z" /><circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M16.706 3.071c-1.743.462-4.052 1.384-7.217 2.65-1.391.557-1.917.778-2.324 1.135-.11.096-.213.2-.309.309-.357.407-.578.933-1.134 2.324-1.267 3.165-2.189 5.474-2.65 7.217-.47 1.768-.393 2.71.02 3.318.236.348.536.648.884.884.607.413 1.55.49 3.318.02 1.743-.462 4.052-1.384 7.217-2.65 1.391-.556 1.917-.777 2.324-1.134l.459.523-.459-.523c.11-.096.213-.2.309-.309l.529.464-.53-.464c.358-.407.579-.933 1.135-2.324 1.267-3.165 2.189-5.474 2.65-7.217.47-1.768.393-2.71-.02-3.318a3.336 3.336 0 0 0-.884-.885c-.607-.412-1.55-.488-3.318-.02Zm-.384-1.45c1.827-.484 3.356-.579 4.545.23.505.343.94.777 1.282 1.282.809 1.19.714 2.718.23 4.545-.489 1.842-1.446 4.236-2.686 7.336l-.022.054-.05.127c-.488 1.22-.802 2.005-1.35 2.629-.139.159-.288.308-.447.447-.624.548-1.409.861-2.63 1.35l-.126.05-.054.022c-3.1 1.24-5.494 2.197-7.335 2.685-1.828.485-3.357.58-4.546-.229a4.835 4.835 0 0 1-1.282-1.282l.62-.421-.62.421c-.809-1.19-.714-2.718-.23-4.546.489-1.841 1.446-4.235 2.686-7.335l.022-.054.05-.127c.489-1.22.802-2.005 1.35-2.629.139-.159.288-.308.447-.448.624-.547 1.409-.86 2.63-1.348l.126-.051.054-.022c3.1-1.24 5.494-2.197 7.335-2.685ZM12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M3.554 21.529c1.797 1.221 4.943-.038 11.236-2.554 1.342-.537 2.013-.806 2.54-1.267.134-.118.26-.244.378-.378.461-.527.73-1.198 1.267-2.54C21.49 8.497 22.75 5.35 21.529 3.554a4.085 4.085 0 0 0-1.083-1.083c-1.797-1.221-4.944.037-11.236 2.554-1.342.537-2.013.806-2.54 1.267-.134.118-.26.244-.378.378-.461.527-.73 1.198-1.267 2.54-2.517 6.292-3.775 9.439-2.554 11.236.29.426.657.793 1.083 1.083ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Zm1.5 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M14.79 18.975C8.497 21.49 5.35 22.75 3.554 21.529a4.086 4.086 0 0 1-1.083-1.083c-1.221-1.797.037-4.944 2.554-11.236.537-1.342.806-2.013 1.267-2.54.118-.134.244-.26.378-.378.527-.461 1.198-.73 2.54-1.267 6.292-2.517 9.439-3.775 11.236-2.554.426.29.793.657 1.083 1.083 1.221 1.797-.038 4.943-2.554 11.236-.537 1.342-.806 2.013-1.267 2.54-.118.134-.244.26-.378.378-.527.461-1.198.73-2.54 1.267Z" clipRule="evenodd" opacity={0.5} /><path fill="currentColor" d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CompassBig