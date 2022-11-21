import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ChatRoundLike = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m10.029 14.943-.486.57.486-.57ZM12 9.5l-.536.524a.75.75 0 0 0 1.072 0L12 9.501Zm1.971 5.442-.486-.572.486.572ZM12 15.993v-.75.75Zm-1.486-1.622c-.581-.494-1.165-1.068-1.598-1.66-.441-.605-.666-1.149-.666-1.602h-1.5c0 .916.435 1.774.955 2.486.529.725 1.21 1.384 1.838 1.919l.972-1.143ZM8.25 11.11c0-1.107.495-1.69 1.003-1.881.518-.193 1.342-.09 2.211.797l1.072-1.049c-1.156-1.18-2.581-1.612-3.808-1.153-1.235.462-1.978 1.717-1.978 3.286h1.5Zm6.207 4.405c.628-.534 1.309-1.194 1.838-1.918.52-.713.955-1.571.955-2.487h-1.5c0 .453-.225.997-.666 1.602-.433.593-1.017 1.166-1.598 1.66l.971 1.143Zm2.793-4.405c0-1.57-.743-2.824-1.978-3.286-1.227-.459-2.652-.028-3.808 1.153l1.072 1.05c.869-.888 1.694-.991 2.21-.798.51.19 1.004.774 1.004 1.881h1.5Zm-7.707 4.405c.78.663 1.4 1.23 2.457 1.23v-1.5c-.414 0-.617-.134-1.486-.873l-.971 1.143Zm3.943-1.143c-.869.739-1.072.873-1.486.873v1.5c1.057 0 1.678-.567 2.457-1.23l-.972-1.143Z" fill="currentColor" /><path d="M17 3.338A9.954 9.954 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.591l2.226-.595a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22c5.523 0 10-4.477 10-10 0-1.821-.487-3.53-1.338-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.591l2.226-.595a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="m10.029 14.943-.486.57.486-.57ZM12 9.5l-.536.524a.75.75 0 0 0 1.072 0L12 9.501Zm1.971 5.442-.486-.572.486.572ZM12 15.993v-.75.75Zm-1.486-1.622c-.581-.494-1.165-1.068-1.598-1.66-.441-.605-.666-1.149-.666-1.602h-1.5c0 .916.435 1.774.955 2.486.529.725 1.21 1.384 1.838 1.919l.972-1.143ZM8.25 11.11c0-1.107.495-1.69 1.003-1.881.518-.193 1.342-.09 2.211.797l1.072-1.049c-1.156-1.18-2.581-1.612-3.808-1.153-1.235.462-1.978 1.717-1.978 3.286h1.5Zm6.207 4.405c.628-.534 1.309-1.194 1.838-1.918.52-.713.955-1.571.955-2.487h-1.5c0 .453-.225.997-.666 1.602-.433.593-1.017 1.166-1.598 1.66l.971 1.143Zm2.793-4.405c0-1.57-.743-2.824-1.978-3.286-1.227-.459-2.652-.028-3.808 1.153l1.072 1.05c.869-.888 1.694-.991 2.21-.798.51.19 1.004.774 1.004 1.881h1.5Zm-7.707 4.405c.78.663 1.4 1.23 2.457 1.23v-1.5c-.414 0-.617-.134-1.486-.873l-.971 1.143Zm3.943-1.143c-.869.739-1.072.873-1.486.873v1.5c1.057 0 1.678-.567 2.457-1.23l-.972-1.143Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.591l2.226-.595a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22Z" stroke="currentColor" strokeWidth={1.5} /><path d="m10.029 14.943-.486.57.486-.57ZM12 9.5l-.536.524a.75.75 0 0 0 1.072 0L12 9.501Zm1.971 5.442-.486-.572.486.572ZM12 15.993v-.75.75Zm-1.486-1.622c-.581-.494-1.165-1.068-1.598-1.66-.441-.605-.666-1.149-.666-1.602h-1.5c0 .916.435 1.774.955 2.486.529.725 1.21 1.384 1.838 1.919l.972-1.143ZM8.25 11.11c0-1.107.495-1.69 1.003-1.881.518-.193 1.342-.09 2.211.797l1.072-1.049c-1.156-1.18-2.581-1.612-3.808-1.153-1.235.462-1.978 1.717-1.978 3.286h1.5Zm6.207 4.405c.628-.534 1.309-1.194 1.838-1.918.52-.713.955-1.571.955-2.487h-1.5c0 .453-.225.997-.666 1.602-.433.593-1.017 1.166-1.598 1.66l.971 1.143Zm2.793-4.405c0-1.57-.743-2.824-1.978-3.286-1.227-.459-2.652-.028-3.808 1.153l1.072 1.05c.869-.888 1.694-.991 2.21-.798.51.19 1.004.774 1.004 1.881h1.5Zm-7.707 4.405c.78.663 1.4 1.23 2.457 1.23v-1.5c-.414 0-.617-.134-1.486-.873l-.971 1.143Zm3.943-1.143c-.869.739-1.072.873-1.486.873v1.5c1.057 0 1.678-.567 2.457-1.23l-.972-1.143Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75A9.25 9.25 0 0 0 2.75 12c0 1.481.348 2.879.965 4.118.248.498.343 1.092.187 1.677l-.596 2.225a.55.55 0 0 0 .673.674l2.227-.596a2.383 2.383 0 0 1 1.676.187A9.208 9.208 0 0 0 12 21.25a9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75c-1.718 0-3.344-.404-4.787-1.122a.885.885 0 0 0-.62-.08l-2.226.595c-1.524.408-2.918-.986-2.51-2.51l.596-2.226a.885.885 0 0 0-.08-.62A10.709 10.709 0 0 1 1.25 12Zm14.022-4.178c1.235.462 1.978 1.717 1.978 3.286 0 .916-.435 1.774-.955 2.487-.529.724-1.21 1.384-1.838 1.918l-.093.08c-.737.628-1.35 1.15-2.364 1.15-1.015 0-1.627-.522-2.364-1.15l-.093-.08c-.629-.534-1.309-1.194-1.838-1.918-.52-.713-.955-1.57-.955-2.487 0-1.569.743-2.824 1.978-3.286 1.043-.39 2.23-.137 3.272.674 1.043-.81 2.23-1.064 3.272-.674Zm-.525 1.405c-.518-.193-1.342-.09-2.211.797a.75.75 0 0 1-1.072 0c-.869-.887-1.693-.99-2.21-.797-.51.19-1.004.774-1.004 1.881 0 .453.225.997.666 1.602.433.593 1.017 1.166 1.598 1.66.869.74 1.072.873 1.486.873.414 0 .617-.134 1.486-.873.581-.494 1.165-1.067 1.598-1.66.441-.605.666-1.149.666-1.602 0-1.107-.495-1.69-1.003-1.88Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10-1.6 0-3.112-.376-4.452-1.044a1.634 1.634 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.633 1.633 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10Zm-14.5-.892c0 1.369 1.319 2.805 2.529 3.834.823.7 1.235 1.051 1.971 1.051s1.148-.35 1.971-1.051c1.21-1.03 2.529-2.465 2.529-3.834 0-2.677-2.475-3.676-4.5-1.608-2.025-2.068-4.5-1.069-4.5 1.608Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.591l2.226-.595a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22Z" fill="currentColor" /><path d="M7.5 11.11c0 1.368 1.319 2.804 2.529 3.833.823.7 1.235 1.05 1.971 1.05s1.148-.35 1.971-1.05c1.21-1.03 2.529-2.465 2.529-3.834 0-2.677-2.475-3.676-4.5-1.608-2.025-2.068-4.5-1.069-4.5 1.608Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ChatRoundLike