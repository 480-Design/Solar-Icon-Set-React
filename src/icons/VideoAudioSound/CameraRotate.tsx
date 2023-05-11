import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const CameraRotate = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m14.52 10.68-.28-.28a3.168 3.168 0 1 0 .907 2.6m-.627-2.32L13 11m1.52-.32V9" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M2 13.364c0-3.065 0-4.597.749-5.697.324-.477.74-.886 1.226-1.204.72-.473 1.622-.642 3.003-.702.659 0 1.226-.49 1.355-1.125A2.064 2.064 0 0 1 10.366 3h3.268c.988 0 1.839.685 2.033 1.636.129.635.696 1.125 1.355 1.125 1.38.06 2.282.23 3.003.702.485.318.902.727 1.226 1.204.749 1.1.749 2.632.749 5.697 0 3.064 0 4.596-.749 5.697a4.408 4.408 0 0 1-1.226 1.204C18.904 21 17.343 21 14.222 21H9.778c-3.121 0-4.682 0-5.803-.735A4.406 4.406 0 0 1 2.75 19.06 3.43 3.43 0 0 1 2.277 18" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.408 4.408 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697 0-3.065 0-4.597-.749-5.697a4.407 4.407 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636-.129.635-.696 1.125-1.355 1.125-1.38.06-2.282.23-3.003.702A4.405 4.405 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364c0 3.064 0 4.596.749 5.697.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m14.52 10.68-.28-.28a3.168 3.168 0 1 0 .907 2.6m-.627-2.32L13 11m1.52-.32V9" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.408 4.408 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697 0-3.065 0-4.597-.749-5.697a4.407 4.407 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636-.129.635-.696 1.125-1.355 1.125-1.38.06-2.282.23-3.003.702A4.405 4.405 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364c0 3.064 0 4.596.749 5.697.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m14.52 10.68-.28-.28a3.168 3.168 0 1 0 .907 2.6m-.627-2.32L13 11m1.52-.32V9" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M7.598 4.487c.267-1.31 1.433-2.237 2.768-2.237h3.268c1.335 0 2.5.927 2.768 2.237a.656.656 0 0 0 .653.525c1.403.06 2.481.233 3.381.824.567.372 1.055.85 1.435 1.409.473.694.681 1.492.781 2.456.098.943.098 2.124.098 3.62v.085c0 1.496 0 2.678-.098 3.62-.1.964-.308 1.762-.781 2.457a5.155 5.155 0 0 1-1.435 1.409c-.703.461-1.51.665-2.488.762-.958.096-2.159.096-3.685.096H9.737c-1.526 0-2.727 0-3.685-.096-.978-.097-1.785-.3-2.488-.762a5.155 5.155 0 0 1-1.435-1.41c-.473-.694-.681-1.492-.781-2.456-.098-.942-.098-2.124-.098-3.62v-.085c0-1.496 0-2.677.098-3.62.1-.964.308-1.762.781-2.456a5.155 5.155 0 0 1 1.435-1.41c.9-.59 1.978-.762 3.381-.823l.033-.001a.656.656 0 0 0 .62-.524Zm2.768-.737c-.64 0-1.177.443-1.298 1.036-.195.96-1.047 1.716-2.072 1.725-1.348.06-2.07.225-2.61.579-.403.265-.748.604-1.017.999-.276.405-.442.924-.53 1.767-.088.856-.089 1.96-.089 3.508s0 2.651.09 3.507c.087.843.253 1.362.53 1.768.268.394.613.734 1.017.998.417.274.951.439 1.814.525.874.087 2 .088 3.577.088h4.444c1.576 0 2.702 0 3.577-.088.863-.086 1.397-.25 1.814-.524.404-.265.75-.605 1.018-1 .276-.405.442-.924.53-1.767.088-.856.089-1.96.089-3.507 0-1.548 0-2.652-.09-3.508-.087-.843-.253-1.362-.53-1.767a3.655 3.655 0 0 0-1.017-1c-.538-.353-1.26-.518-2.61-.578-1.024-.01-1.876-.764-2.071-1.725a1.314 1.314 0 0 0-1.298-1.036h-3.268Zm4.154 4.5a.75.75 0 0 1 .75.75v1.68a.75.75 0 0 1-.596.734l-1.52.32a.75.75 0 0 1-.471-1.414 2.417 2.417 0 0 0-2.393 4.03 2.418 2.418 0 0 0 4.112-1.435.75.75 0 0 1 1.49.17 3.918 3.918 0 1 1-2.123-3.941V9a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M14.222 21H9.778c-3.121 0-4.682 0-5.803-.735A4.406 4.406 0 0 1 2.75 19.06C2 17.96 2 16.428 2 13.364c0-3.065 0-4.597.749-5.697.324-.477.74-.886 1.226-1.204.72-.473 1.622-.642 3.003-.702.659 0 1.226-.49 1.355-1.125A2.064 2.064 0 0 1 10.366 3h3.268c.988 0 1.839.685 2.033 1.636.129.635.696 1.125 1.355 1.125 1.38.06 2.282.23 3.003.702.485.318.902.727 1.226 1.204.749 1.1.749 2.632.749 5.697 0 3.064 0 4.596-.749 5.697a4.408 4.408 0 0 1-1.226 1.204C18.904 21 17.343 21 14.222 21ZM15.27 9.6a.75.75 0 0 0-1.5 0v.143a3.92 3.92 0 0 0-4.54 6.267 3.918 3.918 0 0 0 6.662-2.326.75.75 0 0 0-1.49-.17 2.418 2.418 0 1 1-1.72-2.595.75.75 0 0 0 .473 1.415l1.52-.32a.75.75 0 0 0 .595-.734V9.6Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.408 4.408 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697 0-3.065 0-4.597-.749-5.697a4.407 4.407 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636-.129.635-.696 1.125-1.355 1.125-1.38.06-2.282.23-3.003.702A4.405 4.405 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364c0 3.064 0 4.596.749 5.697.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z" opacity={0.5} /><path fill="currentColor" d="M14.52 8.85a.75.75 0 0 1 .75.75v1.68a.75.75 0 0 1-.596.734l-1.52.32a.75.75 0 0 1-.471-1.414 2.417 2.417 0 1 0 1.719 2.595.75.75 0 0 1 1.49.17 3.918 3.918 0 1 1-2.123-3.941V9.6a.75.75 0 0 1 .75-.75Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CameraRotate