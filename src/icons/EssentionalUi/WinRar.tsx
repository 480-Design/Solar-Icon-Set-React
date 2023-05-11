import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const WinRar = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 10.602 22 11.068 22 12c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 15 19.932 15 19 15m0-6c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C22 7.398 22 6.932 22 6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C20.398 3 19.932 3 19 3h-1.268M19 9h-1m1 6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 16.602 22 17.068 22 18c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 21 19.932 21 19 21h-1.268M19 15h-1M5 15c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 13.398 2 12.932 2 12c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 9 5.068 9 6 9c-.932 0-2.398 0-2.765-.152a2 2 0 0 1-1.083-1.083C2 7.398 2 6.932 2 6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 3 4.068 3 5 3h7.268M5 15c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 16.602 2 17.068 2 18c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 21 4.068 21 5 21m0-6h7m.268-12a2.003 2.003 0 0 0-.116.235C12 3.602 12 4.068 12 5v4m.268-6a2 2 0 0 1 .967-.848C13.602 2 14.068 2 15 2c.932 0 1.398 0 1.765.152a2 2 0 0 1 .967.848m0 0c.044.075.082.154.116.235C18 3.602 18 4.068 18 5v4m0 0v6m-6-6v6m0-6h-2m8 6v4c0 .932 0 1.398-.152 1.765-.034.081-.072.16-.116.235M12 15v4c0 .932 0 1.398.152 1.765.034.081.073.16.116.235m0 0a2 2 0 0 0 .967.848C13.602 22 14.068 22 15 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 .967-.848m-5.464 0H9" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M15 11v2" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M12.268 3a2.003 2.003 0 0 0-.116.235C12 3.602 12 4.068 12 5v4m.268-6a2 2 0 0 1 .967-.848C13.602 2 14.068 2 15 2c.932 0 1.398 0 1.765.152a2 2 0 0 1 .967.848m-5.464 0H5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 4.602 2 5.068 2 6c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 9 4.068 9 5 9h7m5.732-6H19c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 4.602 22 5.068 22 6c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 9 19.932 9 19 9h-1m-.268-6c.044.075.082.154.116.235C18 3.602 18 4.068 18 5v4m0 0v6m-6-6v6m6 0v4c0 .932 0 1.398-.152 1.765-.034.081-.072.16-.116.235M18 15h1c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 16.602 22 17.068 22 18c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 21 19.932 21 19 21h-1.268M12 15H5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 16.602 2 17.068 2 18c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 21 4.068 21 5 21h7.268M12 15v4c0 .932 0 1.398.152 1.765.034.081.073.16.116.235m0 0a2 2 0 0 0 .967.848C13.602 22 14.068 22 15 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 .967-.848" /><path stroke="currentColor" strokeWidth={1.5} d="M5 9c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 10.602 2 11.068 2 12c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 15 4.068 15 5 15m14-6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 10.602 22 11.068 22 12c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 15 19.932 15 19 15" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M15 11v2" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M5 9c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 10.602 2 11.068 2 12c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 15 4.068 15 5 15m0-6c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 7.398 2 6.932 2 6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 3 4.068 3 5 3h7.268M5 9h7m7 0c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 10.602 22 11.068 22 12c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 15 19.932 15 19 15m0-6c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C22 7.398 22 6.932 22 6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C20.398 3 19.932 3 19 3h-1.268M19 9h-1m1 6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 16.602 22 17.068 22 18c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 21 19.932 21 19 21h-1.268M19 15h-1M5 15c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 16.602 2 17.068 2 18c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 21 4.068 21 5 21h7.268M5 15h7m.268-12a2.003 2.003 0 0 0-.116.235C12 3.602 12 4.068 12 5v4m.268-6a2 2 0 0 1 .967-.848C13.602 2 14.068 2 15 2c.932 0 1.398 0 1.765.152a2 2 0 0 1 .967.848m0 0c.044.075.082.154.116.235C18 3.602 18 4.068 18 5v4m0 0v6m-6-6v6m6 0v4c0 .932 0 1.398-.152 1.765-.034.081-.072.16-.116.235M12 15v4c0 .932 0 1.398.152 1.765.034.081.073.16.116.235m0 0a2 2 0 0 0 .967.848C13.602 22 14.068 22 15 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 .967-.848" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M15 11v2" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M15.75 11a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z" /><path fill="currentColor" fillRule="evenodd" d="M15.025 1.25h-.05c-.445 0-.816 0-1.12.02a2.823 2.823 0 0 0-.907.19 2.75 2.75 0 0 0-1.07.79H4.976c-.445 0-.816 0-1.12.02a2.823 2.823 0 0 0-.907.19 2.75 2.75 0 0 0-1.489 1.488c-.12.29-.167.59-.188.907-.021.304-.021.675-.021 1.12v.05c0 .445 0 .816.02 1.12.022.317.07.617.19.907.15.362.373.684.653.948a2.75 2.75 0 0 0-.654.948c-.12.29-.167.59-.188.907-.021.304-.021.675-.021 1.12v.05c0 .445 0 .816.02 1.12.022.318.07.617.19.907.15.362.373.684.653.948a2.75 2.75 0 0 0-.654.948c-.12.29-.167.59-.188.907-.021.304-.021.675-.021 1.12v.05c0 .445 0 .816.02 1.12.022.317.07.617.19.907a2.75 2.75 0 0 0 1.488 1.489c.29.12.59.167.907.188.304.021.675.021 1.12.021h6.904c.283.344.65.617 1.069.79.29.121.59.168.907.19.304.02.675.02 1.12.02h.05c.445 0 .816 0 1.12-.02.317-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.07-.79h.903c.445 0 .816 0 1.12-.02.317-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.489-1.488c.12-.29.167-.59.188-.907.021-.304.021-.675.021-1.12v-.05c0-.445 0-.816-.02-1.12a2.822 2.822 0 0 0-.19-.907 2.75 2.75 0 0 0-.652-.948 2.75 2.75 0 0 0 .653-.948c.12-.29.167-.59.188-.907.021-.304.021-.675.021-1.12v-.05c0-.445 0-.816-.02-1.12a2.821 2.821 0 0 0-.19-.907A2.75 2.75 0 0 0 21.889 9a2.75 2.75 0 0 0 .653-.948c.12-.29.167-.59.188-.907.021-.304.021-.675.021-1.12v-.05c0-.445 0-.816-.02-1.12a2.822 2.822 0 0 0-.19-.907 2.75 2.75 0 0 0-1.488-1.489c-.29-.12-.59-.167-.907-.188-.304-.021-.675-.021-1.12-.021h-.904a2.75 2.75 0 0 0-1.069-.79c-.29-.12-.59-.168-.907-.19-.304-.02-.675-.02-1.12-.02ZM5 3.75h6.279l-.008.105c-.021.304-.021.675-.021 1.12V8.25H5c-.476 0-.796 0-1.043-.017-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.032-.077-.061-.194-.078-.435A17.089 17.089 0 0 1 2.75 6c0-.476 0-.796.017-1.043.017-.241.046-.358.078-.435.127-.307.37-.55.677-.677.077-.032.194-.061.435-.078A17.09 17.09 0 0 1 5 3.75Zm0 6h6.25v4.5H5c-.476 0-.796 0-1.043-.017-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.032-.077-.061-.194-.078-.435A17.091 17.091 0 0 1 2.75 12c0-.476 0-.796.017-1.043.017-.241.046-.358.078-.435.127-.307.37-.55.677-.677.077-.032.194-.061.435-.078A17.09 17.09 0 0 1 5 9.75Zm0 6h6.25v3.275c0 .445 0 .816.02 1.12l.009.105H5c-.476 0-.796 0-1.043-.017-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.032-.077-.061-.194-.078-.435A17.091 17.091 0 0 1 2.75 18c0-.476 0-.796.017-1.043.017-.241.046-.358.078-.435.127-.307.37-.55.677-.677.077-.032.194-.061.435-.078A17.07 17.07 0 0 1 5 15.75Zm14 4.5h-.279l.008-.105c.021-.304.021-.675.021-1.12V15.75H19c.476 0 .796 0 1.043.017.241.017.358.046.435.078.307.127.55.37.677.677.032.077.061.194.078.435.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078-.247.017-.567.017-1.043.017Zm0-6h-.25v-4.5H19c.476 0 .796 0 1.043.017.241.017.358.046.435.078.307.127.55.37.677.677.032.077.061.194.078.435.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078-.247.017-.567.017-1.043.017Zm0-6h-.25V4.975c0-.445 0-.816-.02-1.12a5.822 5.822 0 0 0-.009-.105H19c.476 0 .796 0 1.043.017.241.017.358.046.435.078.307.127.55.37.677.677.032.077.061.194.078.435.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078-.247.017-.567.017-1.043.017Zm-2.522 12.905a1.25 1.25 0 0 0 .677-.677c.032-.077.061-.194.078-.435.017-.247.017-.567.017-1.043V5c0-.476 0-.796-.017-1.043-.017-.241-.046-.358-.078-.435a1.251 1.251 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17.091 17.091 0 0 0 15 2.75c-.476 0-.796 0-1.043.017-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435A17.07 17.07 0 0 0 12.75 5v14c0 .476 0 .796.017 1.043.017.241.046.358.078.435a1.25 1.25 0 0 0 .676.677c.078.032.195.061.436.078.247.017.567.017 1.043.017s.796 0 1.043-.017c.241-.017.358-.046.435-.078Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M17.848 3.235C18 3.602 18 4.068 18 5v14c0 .932 0 1.398-.152 1.765a2.003 2.003 0 0 1-1.083 1.083C16.398 22 15.932 22 15 22c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C12 20.398 12 19.932 12 19V5c0-.932 0-1.398.152-1.765a2.003 2.003 0 0 1 1.083-1.083C13.602 2 14.068 2 15 2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083ZM15.75 11a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z" clipRule="evenodd" /><path fill="currentColor" d="M10.65 21a4.006 4.006 0 0 1-.127-.804c-.023-.33-.023-.724-.023-1.152V4.956c0-.428 0-.822.023-1.152.017-.254.05-.525.127-.804H5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 4.602 2 5.068 2 6c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 9 4.068 9 5 9c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 10.602 2 11.068 2 12c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 15 4.068 15 5 15c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 16.602 2 17.068 2 18c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 21 4.068 21 5 21h5.65ZM19.35 21c.705-.003 1.097-.02 1.415-.152a2 2 0 0 0 1.083-1.083C22 19.398 22 18.932 22 18c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083c-.295-.122-.653-.146-1.265-.15v4.042c0 .428 0 .822-.023 1.152-.017.254-.05.525-.127.804ZM19.5 14.999c.612-.005.97-.029 1.265-.151a2 2 0 0 0 1.083-1.083C22 13.398 22 12.932 22 12c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083c-.295-.122-.653-.146-1.265-.15v5.997ZM19.5 8.999c.612-.005.97-.029 1.265-.151a2 2 0 0 0 1.083-1.083C22 7.398 22 6.932 22 6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083c-.318-.132-.71-.15-1.415-.152.077.28.11.55.127.804.023.33.023.724.023 1.152V9Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><g fill="currentColor" opacity={0.3}><path d="M4.666 9c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765 0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.268 3 3.734 3 4.666 3h7.268a1.972 1.972 0 0 0-.116.235c-.152.367-.152.833-.152 1.765v4h-7ZM21.666 6c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.064 9 19.598 9 18.666 9h-1V5c0-.932 0-1.398-.152-1.765A2.003 2.003 0 0 0 17.398 3h1.268c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765Z" /></g><g fill="currentColor" opacity={0.7}><path d="M17.514 20.765c.152-.367.152-.833.152-1.765v-4h1c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765 0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-1.268c.044-.075.082-.154.116-.235ZM11.934 21H4.666c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765 0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.268 15 3.734 15 4.666 15h7v4c0 .932 0 1.398.152 1.765.034.081.072.16.116.235Z" /></g><g fill="currentColor" opacity={0.5}><path d="M17.666 9h1c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765 0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-1V9ZM11.666 9v6h-7c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765 0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.268 9 3.734 9 4.666 9h7Z" /></g><path fill="currentColor" fillRule="evenodd" d="M17.514 3.235c.152.367.152.833.152 1.765v14c0 .932 0 1.398-.152 1.765a2.003 2.003 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083c-.152-.367-.152-.833-.152-1.765V5c0-.932 0-1.398.152-1.765A2 2 0 0 1 12.9 2.153C13.269 2 13.735 2 14.667 2s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083ZM15.416 11a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z" clipRule="evenodd" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default WinRar