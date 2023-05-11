import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const BluetoothSquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M13.933 9.8 11 12V8c0-.872 0-1.309.276-1.447.277-.138.626.124 1.324.647l1.333 1c.49.367.734.55.734.8s-.245.434-.734.8ZM13.933 15.8l-1.333 1c-.698.524-1.047.785-1.324.647C11 17.31 11 16.873 11 16v-4l2.933 2.2c.49.367.734.55.734.8s-.245.433-.734.8Z" /><path fill="currentColor" d="M8.48 8.924a.75.75 0 1 0-.96 1.152l.96-1.152Zm3 2.5-3-2.5-.96 1.152 3 2.5.96-1.152Z" /><path fill="currentColor" d="M8.48 15.076a.75.75 0 0 1-.96-1.152l.96 1.152Zm3-2.5-3 2.5-.96-1.152 3-2.5.96 1.152Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m11 12 2.933-2.2c.49-.366.734-.55.734-.8s-.245-.433-.734-.8l-1.333-1c-.698-.523-1.047-.785-1.324-.647C11 6.691 11 7.128 11 8v4Zm0 0v4c0 .873 0 1.31.276 1.448.277.138.626-.124 1.324-.648l1.333-1c.49-.366.734-.55.734-.8s-.245-.433-.734-.8L11 12Zm0 0L8 9.5m3 2.5-3 2.5" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M13.933 9.8 11 12V8c0-.872 0-1.309.276-1.447.277-.138.626.124 1.324.647l1.333 1c.49.367.734.55.734.8s-.245.434-.734.8ZM13.933 15.8l-1.333 1c-.698.524-1.047.785-1.324.647C11 17.31 11 16.873 11 16v-4l2.933 2.2c.49.367.734.55.734.8s-.245.433-.734.8Z" /><path stroke="currentColor" strokeWidth={1.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" /><path fill="currentColor" d="M8.48 8.924a.75.75 0 1 0-.96 1.152l.96-1.152Zm3 2.5-3-2.5-.96 1.152 3 2.5.96-1.152Z" /><path fill="currentColor" d="M8.48 15.076a.75.75 0 0 1-.96-1.152l.96 1.152Zm3-2.5-3 2.5-.96-1.152 3-2.5.96 1.152Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19 1.444.194 2.584.6 3.479 1.494.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19Zm-5.33 1.676c-1.278.172-2.049.5-2.618 1.069-.57.57-.897 1.34-1.069 2.619-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069.569-.57.896-1.34 1.068-2.619.174-1.3.176-3.008.176-5.386s-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62-.57-.569-1.34-.896-2.619-1.068-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176ZM13.01 6.57l.04.03 1.333 1 .034.025c.215.161.437.328.598.49.183.184.402.473.402.885 0 .412-.219.701-.402.885-.161.162-.383.329-.598.49l-.034.025L12.25 12l2.133 1.6.034.025c.215.161.437.328.598.49.183.184.402.473.402.885 0 .412-.219.701-.402.885-.161.162-.383.329-.598.49l-.034.025-1.333 1-.04.03c-.314.236-.614.46-.872.6-.264.144-.716.329-1.197.088-.481-.24-.605-.712-.649-1.01-.042-.29-.042-.665-.042-1.058v-2.449l-1.77 1.475a.75.75 0 0 1-.96-1.152L9.828 12 7.52 10.076a.75.75 0 0 1 .96-1.152l1.77 1.475V7.95c0-.393 0-.767.043-1.058.043-.297.167-.77.648-1.01s.933-.056 1.197.087c.258.14.558.365.872.6Zm-1.26 6.93V16c0 .2 0 .361.003.494.108-.078.237-.174.397-.294l1.333-1c.105-.078.19-.143.264-.2-.073-.057-.16-.122-.264-.2l-1.733-1.3Zm0-3V8c0-.2 0-.361.003-.494.108.077.237.174.397.294l1.333 1c.105.078.19.143.264.2-.073.057-.16.122-.264.2l-1.733 1.3Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M11.75 16v-2.5l1.733 1.3.264.2c-.073.057-.16.122-.264.2l-1.333 1c-.16.12-.29.217-.397.295A29.067 29.067 0 0 1 11.75 16ZM11.79 16.96v-.003a.045.045 0 0 0 0 .003ZM11.75 8v2.5l1.733-1.3c.105-.078.19-.143.264-.2-.073-.057-.16-.122-.264-.2l-1.333-1c-.16-.12-.29-.216-.397-.294-.003.133-.003.295-.003.494Z" /><path fill="currentColor" fillRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464ZM13.01 6.57c-.314-.236-.614-.46-.872-.6-.264-.144-.716-.329-1.197-.088-.481.24-.605.713-.649 1.01-.042.29-.042.665-.042 1.058v2.449L8.48 8.924a.75.75 0 1 0-.96 1.152L9.828 12 7.52 13.924a.75.75 0 0 0 .96 1.152l1.77-1.475v2.45c0 .392 0 .766.043 1.057.043.298.167.77.648 1.01s.933.056 1.197-.087c.258-.14.558-.365.872-.6l1.407-1.056c.215-.161.437-.327.598-.49.183-.184.402-.473.402-.885 0-.412-.219-.7-.402-.885a5.715 5.715 0 0 0-.598-.49L12.25 12l2.167-1.625c.215-.161.437-.327.598-.49.183-.184.402-.473.402-.885 0-.412-.219-.7-.402-.885a5.715 5.715 0 0 0-.598-.49L13.01 6.57Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Z" opacity={0.5} /><path fill="currentColor" d="m12.448 16.774-.001-.003.001.004v-.001Z" /><path fill="currentColor" fillRule="evenodd" d="M12.788 6.196c.253.135.547.351.854.578L15.02 7.79c.211.155.428.315.587.471.179.177.393.455.393.852 0 .397-.214.674-.393.852a5.576 5.576 0 0 1-.587.471L12.898 12l2.122 1.564c.211.155.428.315.587.471.179.178.393.455.393.852 0 .397-.214.675-.393.852-.159.156-.376.316-.587.471l-1.378 1.016c-.307.227-.6.443-.854.578-.258.138-.701.316-1.172.084-.472-.232-.593-.686-.636-.972-.041-.28-.041-.64-.041-1.018V13.54l-1.734 1.42a.744.744 0 0 1-1.035-.093.713.713 0 0 1 .094-1.017L10.526 12l-2.262-1.851a.713.713 0 0 1-.094-1.017.744.744 0 0 1 1.035-.092l1.734 1.419V8.102c0-.378 0-.738.041-1.018.043-.286.164-.74.636-.972.471-.231.914-.054 1.172.084Zm-.38 9.654v-2.406l1.698 1.25c.103.076.187.138.259.193a19.24 19.24 0 0 1-.259.193l-1.306.962c-.156.115-.283.208-.39.283a27.047 27.047 0 0 1-.002-.475Zm.04.924-.001-.003.001.004v-.001Zm-.04-8.624v2.406l1.698-1.25c.103-.076.187-.138.259-.193a19.081 19.081 0 0 0-.259-.193L12.8 7.958a28.418 28.418 0 0 0-.39-.283 27.05 27.05 0 0 0-.002.475Z" clipRule="evenodd" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default BluetoothSquare