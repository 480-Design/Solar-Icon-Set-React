import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const PaperclipRounded = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.885 15.95c1.424-1.437 2.136-2.156 2.525-2.926a5.503 5.503 0 0 0 0-4.956c-.389-.77-1.1-1.489-2.525-2.925-1.424-1.437-2.136-2.156-2.899-2.548a5.367 5.367 0 0 0-4.912 0c-.763.392-1.475 1.11-2.9 2.548m7.04 14.512c-.356.358-.534.538-.703.668a3.223 3.223 0 0 1-3.951 0c-.17-.13-.347-.31-.702-.668-.355-.359-.533-.538-.663-.708a3.298 3.298 0 0 1 0-3.988c.13-.17.308-.35.663-.708l2.83-2.856m-8.243-2.49c-.8.808-1.2 1.211-1.473 1.608a5.499 5.499 0 0 0 0 6.242c.274.396.673.8 1.473 1.607" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12.688 11.395-2.83 2.856c-.355.359-.533.538-.663.708a3.298 3.298 0 0 0 0 3.988c.13.17.308.35.663.708.355.358.533.538.702.668a3.223 3.223 0 0 0 3.951 0c.17-.13.347-.31.702-.668l3.672-3.705c1.424-1.437 2.136-2.156 2.525-2.926a5.503 5.503 0 0 0 0-4.956c-.389-.77-1.1-1.489-2.525-2.925-1.424-1.437-2.136-2.156-2.899-2.548a5.367 5.367 0 0 0-4.912 0c-.763.392-1.475 1.11-2.9 2.548L4.446 8.906c-.8.807-1.2 1.21-1.473 1.607a5.499 5.499 0 0 0 0 6.242c.274.396.673.8 1.473 1.607" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12.688 11.395-2.83 2.856c-.355.359-.533.538-.663.708a3.298 3.298 0 0 0 0 3.988c.13.17.308.35.663.708.355.358.533.538.702.668a3.223 3.223 0 0 0 3.951 0c.17-.13.347-.31.702-.668l3.672-3.705c1.424-1.437 2.136-2.156 2.525-2.926a5.503 5.503 0 0 0 0-4.956c-.389-.77-1.1-1.489-2.525-2.925-1.424-1.437-2.136-2.156-2.899-2.548a5.367 5.367 0 0 0-4.912 0c-.763.392-1.475 1.11-2.9 2.548L4.446 8.906c-.8.807-1.2 1.21-1.473 1.607a5.499 5.499 0 0 0 0 6.242c.274.396.673.8 1.473 1.607" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.731 1.928a6.117 6.117 0 0 1 5.598 0c.87.447 1.66 1.245 2.972 2.569l.117.118.116.116c1.313 1.325 2.103 2.122 2.546 2.999a6.252 6.252 0 0 1 0 5.632c-.443.877-1.233 1.674-2.546 2.999l-.116.116-3.714 3.748c-.315.318-.525.53-.733.691a3.973 3.973 0 0 1-4.87 0c-.209-.161-.419-.373-.734-.69l-.084-.085c-.315-.318-.525-.53-.685-.74a4.048 4.048 0 0 1 0-4.896c.16-.21.37-.421.685-.74l.042-.042 2.83-2.856a.75.75 0 0 1 1.066 1.056l-2.83 2.856c-.373.376-.506.513-.599.634a2.548 2.548 0 0 0 0 3.08c.093.121.226.259.599.634.372.375.508.51.628.603a2.473 2.473 0 0 0 3.033 0c.12-.093.256-.228.629-.603l3.672-3.705c1.464-1.478 2.066-2.098 2.388-2.736a4.752 4.752 0 0 0 0-4.28c-.322-.638-.924-1.258-2.388-2.735-1.466-1.479-2.08-2.085-2.71-2.41a4.617 4.617 0 0 0-4.226 0c-.63.325-1.244.931-2.71 2.41l-3.73 3.763c-.822.83-1.162 1.177-1.388 1.505a4.749 4.749 0 0 0 0 5.39c.226.328.566.675 1.389 1.505a.75.75 0 1 1-1.066 1.056l-.065-.066c-.737-.744-1.18-1.191-1.493-1.643a6.249 6.249 0 0 1 0-7.095c.313-.451.756-.898 1.493-1.643l.065-.065 3.73-3.763.117-.118C9.07 3.173 9.86 2.375 10.73 1.927Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2C7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2Zm-.889 3.673a4.074 4.074 0 0 1 3.614 0c.565.28 1.072.774 1.829 1.511l.1.098.104.1c.754.735 1.263 1.23 1.553 1.783a3.836 3.836 0 0 1 0 3.565c-.29.554-.799 1.049-1.553 1.783l-.104.1-2.203 2.146-.034.033c-.18.175-.32.311-.461.417a2.74 2.74 0 0 1-3.27 0 4.955 4.955 0 0 1-.46-.417l-.035-.033-.034-.034c-.18-.175-.32-.311-.429-.45a2.606 2.606 0 0 1 0-3.236c.11-.139.25-.275.429-.45l.034-.034 1.699-1.653a.75.75 0 0 1 1.046 1.075l-1.698 1.653c-.23.225-.292.287-.332.337a1.106 1.106 0 0 0 0 1.38c.04.05.101.113.332.337.23.224.295.284.347.323a1.24 1.24 0 0 0 1.473 0c.052-.039.117-.1.347-.323l2.203-2.145c.897-.874 1.21-1.191 1.374-1.504a2.336 2.336 0 0 0 0-2.174c-.164-.313-.477-.63-1.374-1.504-.895-.872-1.224-1.179-1.55-1.34a2.574 2.574 0 0 0-2.28 0c-.326.161-.655.468-1.55 1.34L7.99 10.535c-.503.49-.681.668-.797.83a2.342 2.342 0 0 0 0 2.74c.116.162.294.34.797.83a.75.75 0 1 1-1.046 1.075l-.058-.056c-.424-.413-.709-.69-.913-.975a3.842 3.842 0 0 1 0-4.487c.204-.285.489-.562.913-.975l.058-.056 2.238-2.179.1-.098c.757-.737 1.264-1.231 1.83-1.511Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3.464 3.464C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536Z" fill="currentColor" /><path d="M11.111 5.673a4.074 4.074 0 0 1 3.614 0c.565.28 1.072.774 1.829 1.511l.1.098.104.1c.754.735 1.263 1.23 1.553 1.783a3.836 3.836 0 0 1 0 3.565c-.29.554-.799 1.049-1.553 1.783l-.104.1-2.203 2.146-.034.033c-.18.175-.32.311-.461.417a2.74 2.74 0 0 1-3.27 0 4.955 4.955 0 0 1-.46-.417l-.035-.033-.034-.034c-.18-.175-.32-.311-.429-.45a2.606 2.606 0 0 1 0-3.236c.11-.139.25-.275.429-.45l.034-.034 1.699-1.653a.75.75 0 0 1 1.046 1.075l-1.698 1.653c-.23.225-.292.287-.332.337a1.106 1.106 0 0 0 0 1.38c.04.05.101.113.332.337.23.224.295.284.347.323a1.24 1.24 0 0 0 1.473 0c.052-.039.117-.1.347-.323l2.203-2.145c.897-.874 1.21-1.191 1.374-1.504a2.336 2.336 0 0 0 0-2.174c-.164-.313-.477-.63-1.374-1.504-.895-.872-1.224-1.179-1.55-1.34a2.574 2.574 0 0 0-2.28 0c-.326.161-.655.468-1.55 1.34L7.99 10.535c-.503.49-.681.668-.797.83a2.342 2.342 0 0 0 0 2.74c.116.162.294.34.797.83a.75.75 0 1 1-1.046 1.075l-.058-.056c-.424-.413-.709-.69-.913-.975a3.842 3.842 0 0 1 0-4.487c.204-.285.489-.562.913-.975l.058-.056 2.238-2.179.1-.098c.757-.737 1.264-1.231 1.83-1.511Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default PaperclipRounded