import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const FolderOpen = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M4 11.5V9m16 2.5V9.348c0-1.974 0-2.961-.616-3.603a2.318 2.318 0 0 0-.18-.168C18.52 5 17.469 5 15.363 5h-.3c-.922 0-1.384 0-1.814-.115a3.322 3.322 0 0 1-.678-.263c-.391-.204-.717-.51-1.37-1.122l-.44-.413a6.7 6.7 0 0 0-.443-.397 3.316 3.316 0 0 0-1.745-.677C8.424 2 8.27 2 7.96 2c-.706 0-1.06 0-1.353.052C5.312 2.281 4.3 3.23 4.055 4.444c-.03.153-.044.322-.05.556C4 5.188 4 5.417 4 5.712M10 17h4" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10 11H8.705c-2.667 0-4 0-4.826.763a2.98 2.98 0 0 0-.54.67c-.578.977-.34 2.335.138 5.05.343 1.956.515 2.934 1.11 3.582.154.169.327.318.515.445.723.49 1.683.49 3.603.49h6.59c1.92 0 2.88 0 3.603-.49.188-.127.36-.276.515-.445.595-.648.767-1.626 1.11-3.581.477-2.716.716-4.074.138-5.051a2.978 2.978 0 0 0-.54-.67C19.296 11 17.962 11 15.295 11H14" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M4 11.5V5.712c0-.662 0-.993.055-1.268C4.3 3.23 5.312 2.28 6.607 2.052 6.9 2 7.254 2 7.96 2c.31 0 .464 0 .612.013.641.056 1.25.292 1.745.677a6.7 6.7 0 0 1 .443.397l.44.413c.653.612.979.918 1.37 1.122.214.112.442.2.678.263.43.115.892.115 1.815.115h.299c2.106 0 3.158 0 3.843.577.063.053.123.11.18.168.615.642.615 1.63.615 3.603V11.5" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10 17h4" opacity={0.5} /><path stroke="currentColor" strokeWidth={1.5} d="M3.477 17.484C3 14.768 2.76 13.41 3.339 12.433c.148-.25.33-.475.54-.67C4.704 11 6.038 11 8.705 11h6.59c2.667 0 4 0 4.826.763.21.195.392.42.54.67.578.977.34 2.335-.138 5.05-.343 1.956-.515 2.934-1.11 3.582a2.926 2.926 0 0 1-.515.445c-.723.49-1.683.49-3.603.49h-6.59c-1.92 0-2.88 0-3.603-.49a2.925 2.925 0 0 1-.515-.445c-.595-.648-.767-1.626-1.11-3.581Z" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M4 11.5V5.712c0-.662 0-.993.055-1.268C4.3 3.23 5.312 2.28 6.607 2.052 6.9 2 7.254 2 7.96 2c.31 0 .464 0 .612.013.641.056 1.25.292 1.745.677a6.7 6.7 0 0 1 .443.397l.44.413c.653.612.979.918 1.37 1.122.214.112.442.2.678.263.43.115.892.115 1.815.115h.299c2.106 0 3.158 0 3.843.577.063.053.123.11.18.168.615.642.615 1.63.615 3.603V11.5" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10 17h4" /><path stroke="currentColor" strokeWidth={1.5} d="M3.477 17.484C3 14.768 2.76 13.41 3.339 12.433c.148-.25.33-.475.54-.67C4.704 11 6.038 11 8.705 11h6.59c2.667 0 4 0 4.826.763.21.195.392.42.54.67.578.977.34 2.335-.138 5.05-.343 1.956-.515 2.934-1.11 3.582a2.926 2.926 0 0 1-.515.445c-.723.49-1.683.49-3.603.49h-6.59c-1.92 0-2.88 0-3.603-.49a2.925 2.925 0 0 1-.515-.445c-.595-.648-.767-1.626-1.11-3.581Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M7.879 1.25h.114c.278 0 .463 0 .645.016.78.068 1.527.356 2.139.832.143.111.276.236.471.42l.025.022.44.413c.682.64.925.858 1.204 1.004.165.086.341.154.525.204.313.083.658.089 1.62.089h.347c1.013 0 1.84 0 2.495.077.681.08 1.283.254 1.784.677.083.07.163.144.238.222.46.48.652 1.063.74 1.721.084.624.084 1.407.084 2.35v2.032c.214.216.4.459.556.722.4.674.481 1.433.43 2.3-.049.844-.234 1.897-.466 3.216l-.015.086c-.166.944-.3 1.708-.47 2.315-.177.628-.411 1.16-.82 1.605-.193.21-.41.398-.646.558-.502.34-1.057.485-1.694.553-.61.066-1.364.066-2.289.066H8.664c-.925 0-1.679 0-2.29-.066-.636-.068-1.191-.213-1.693-.553a3.674 3.674 0 0 1-.647-.558c-.408-.446-.642-.977-.818-1.605-.17-.607-.305-1.37-.471-2.316l-.015-.086c-.232-1.317-.417-2.371-.466-3.216-.051-.866.03-1.625.43-2.299.155-.263.342-.506.556-.722V5.627c0-.58 0-.98.07-1.331.31-1.54 1.583-2.704 3.156-2.983.36-.063.775-.063 1.403-.063ZM4.75 10.491c.24-.062.494-.107.76-.14.815-.101 1.854-.101 3.144-.101h6.692c1.29 0 2.329 0 3.145.101.265.033.519.078.759.14V9.348c0-1.008-.002-1.689-.07-2.201-.066-.49-.181-.72-.337-.882a1.58 1.58 0 0 0-.122-.115c-.182-.153-.45-.269-.992-.333-.558-.066-1.296-.067-2.367-.067h-.398c-.828 0-1.383 0-1.91-.14a4.07 4.07 0 0 1-.831-.323c-.483-.252-.88-.625-1.464-1.172l-.072-.068-.44-.413a6.176 6.176 0 0 0-.39-.351 2.566 2.566 0 0 0-1.35-.523 6.781 6.781 0 0 0-.547-.01c-.738 0-1.01.003-1.223.04-1.015.18-1.768.915-1.946 1.802-.037.184-.041.422-.041 1.12v4.78Zm.944 1.349c-.698.086-1.058.245-1.306.474a2.228 2.228 0 0 0-.403.501c-.18.303-.267.712-.224 1.447.044.748.213 1.716.454 3.092.175.993.297 1.682.445 2.208.144.511.293.793.48.996.115.126.244.237.382.331.222.15.508.25 1.013.304.52.056 1.194.057 2.17.057h6.59c.976 0 1.65-.001 2.17-.057.505-.054.79-.154 1.013-.304.138-.094.267-.205.382-.33.187-.204.337-.486.48-.997.148-.526.27-1.215.445-2.208.241-1.376.41-2.344.454-3.092.043-.736-.044-1.144-.224-1.447a2.226 2.226 0 0 0-.403-.501c-.248-.23-.608-.388-1.306-.474-.713-.089-1.658-.09-3.011-.09h-6.59c-1.353 0-2.298.001-3.011.09ZM9.25 17a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M16.07 9.952c1.329 0 2.462 0 3.366.102.154.017.306.038.458.064.532.09 1.05.235 1.53.488v-.85c0-.91 0-1.663-.085-2.264-.09-.635-.286-1.197-.756-1.66a3.082 3.082 0 0 0-.241-.214c-.512-.408-1.126-.575-1.82-.652-.67-.074-1.512-.074-2.545-.074h-.353c-.982 0-1.335-.006-1.653-.087a2.717 2.717 0 0 1-.536-.196c-.285-.14-.532-.351-1.228-.968l-.474-.42a6.91 6.91 0 0 0-.48-.403 4.289 4.289 0 0 0-2.182-.803A8.075 8.075 0 0 0 8.413 2h-.116c-.641 0-1.064 0-1.431.061-1.605.268-2.903 1.39-3.219 2.875-.072.337-.071.724-.071 1.283v4.387c.48-.253.998-.399 1.53-.488.151-.026.304-.047.458-.064.904-.102 2.037-.102 3.367-.102h7.138Z" /><path fill="currentColor" fillRule="evenodd" d="M3.358 12.779c-.61.941-.358 2.25.145 4.868.363 1.885.544 2.827 1.172 3.452.163.163.346.306.544.429C5.982 22 6.995 22 9.022 22h6.956c2.027 0 3.04 0 3.803-.472.199-.123.38-.266.544-.429.628-.625.81-1.567 1.172-3.452.503-2.618.755-3.927.145-4.868a2.937 2.937 0 0 0-.57-.646c-.87-.735-2.279-.735-5.094-.735H9.022c-2.815 0-4.223 0-5.094.735a2.936 2.936 0 0 0-.57.646Zm6.337 4.402c0-.4.343-.723.765-.723h4.08c.422 0 .765.324.765.723 0 .399-.343.723-.765.723h-4.08c-.422 0-.765-.324-.765-.723Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M3.358 12.779c-.61.941-.358 2.25.145 4.868.363 1.885.544 2.827 1.172 3.452.163.162.346.306.544.429C5.982 22 6.995 22 9.022 22h6.956c2.027 0 3.04 0 3.803-.472.199-.123.38-.267.544-.429.628-.625.81-1.567 1.172-3.452.503-2.618.755-3.927.145-4.868a2.938 2.938 0 0 0-.57-.646c-.87-.735-2.279-.735-5.094-.735H9.022c-2.815 0-4.223 0-5.094.735a2.937 2.937 0 0 0-.57.646Zm6.337 4.402c0-.4.343-.723.765-.723h4.08c.422 0 .765.323.765.723 0 .399-.343.723-.765.723h-4.08c-.422 0-.765-.324-.765-.723Z" clipRule="evenodd" /><path fill="currentColor" d="M3.576 12.485c.107-.126.224-.244.352-.352.87-.735 2.279-.735 5.094-.735h6.956c2.815 0 4.223 0 5.094.735.128.108.246.226.353.353v-2.73c0-.91 0-1.663-.086-2.264-.09-.635-.286-1.197-.755-1.66a3.082 3.082 0 0 0-.242-.214c-.512-.408-1.125-.575-1.82-.652-.669-.074-1.512-.074-2.545-.074h-.353c-.982 0-1.334-.006-1.653-.087a2.718 2.718 0 0 1-.536-.196c-.284-.14-.532-.351-1.227-.968l-.474-.42c-.2-.176-.335-.296-.48-.403a4.29 4.29 0 0 0-2.183-.803A8.075 8.075 0 0 0 8.414 2h-.117c-.64 0-1.063 0-1.43.061-1.605.268-2.903 1.39-3.22 2.875-.071.337-.071.724-.07 1.283v6.266Z" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default FolderOpen