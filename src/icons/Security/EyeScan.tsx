import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const EyeScan = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 15c0 3.771 0 4.657-1.172 5.828C19.657 22 17.771 22 14 22M10 2C6.229 2 4.343 2 3.172 3.172 2 4.343 2 5.229 2 9M12 7C9.073 7 7.08 8.562 5.892 9.94 5.297 10.63 5 10.975 5 12c0 1.025.297 1.37.892 2.06C7.08 15.438 9.072 17 12 17c2.927 0 4.92-1.562 6.108-2.94.595-.69.892-1.035.892-2.06 0-1.025-.297-1.37-.892-2.06A9.067 9.067 0 0 0 16 8.125" /><circle cx={12} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10 22H9m-7-7c0 3.771 0 4.657 1.172 5.828.653.654 1.528.943 2.828 1.07M14 2h1m7 7c0-3.771 0-4.657-1.172-5.828-.653-.654-1.528-.943-2.828-1.07" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10 22c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 18.771 2 15M22 15c0 3.771 0 4.657-1.172 5.828C19.657 22 17.771 22 14 22M14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 5.229 22 9M10 2C6.229 2 4.343 2 3.172 3.172 2 4.343 2 5.229 2 9" opacity={0.5} /><path stroke="currentColor" strokeWidth={1.5} d="M5.892 14.06C5.297 13.37 5 13.025 5 12c0-1.025.297-1.37.892-2.06C7.08 8.562 9.072 7 12 7c2.927 0 4.92 1.562 6.108 2.94.595.69.892 1.035.892 2.06 0 1.025-.297 1.37-.892 2.06C16.92 15.438 14.928 17 12 17c-2.927 0-4.92-1.562-6.108-2.94Z" /><circle cx={12} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10 22c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 18.771 2 15M22 15c0 3.771 0 4.657-1.172 5.828C19.657 22 17.771 22 14 22M14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 5.229 22 9M10 2C6.229 2 4.343 2 3.172 3.172 2 4.343 2 5.229 2 9" /><path stroke="currentColor" strokeWidth={1.5} d="M5.892 14.06C5.297 13.37 5 13.025 5 12c0-1.025.297-1.37.892-2.06C7.08 8.562 9.072 7 12 7c2.927 0 4.92 1.562 6.108 2.94.595.69.892 1.035.892 2.06 0 1.025-.297 1.37-.892 2.06C16.92 15.438 14.928 17 12 17c-2.927 0-4.92-1.562-6.108-2.94Z" /><circle cx={12} cy={12} r={2} stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M18.29 2.89c-1.028-.138-2.383-.14-4.29-.14a.75.75 0 0 1 0-1.5h.056c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.684.685 1.058 1.336 1.233 2.341.158.904.158 2.122.158 3.922V9a.75.75 0 0 1-1.5 0c0-1.92-.003-3.001-.135-3.76-.118-.673-.33-1.051-.817-1.538-.423-.423-1.003-.677-2.009-.812ZM2.75 15a.75.75 0 0 0-1.5 0v.096c0 1.8 0 3.018.158 3.922.175 1.005.549 1.656 1.233 2.34.749.75 1.698 1.081 2.87 1.239 1.14.153 2.595.153 4.433.153H10a.75.75 0 0 0 0-1.5c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812-.487-.487-.7-.865-.817-1.538-.132-.759-.135-1.84-.135-3.76ZM22.75 15a.75.75 0 0 0-1.5 0c0 1.92-.003 3.001-.135 3.76-.118.673-.33 1.051-.817 1.538-.423.423-1.003.677-2.009.812-1.027.138-2.382.14-4.289.14a.75.75 0 0 0 0 1.5h.056c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.684-.685 1.058-1.336 1.233-2.341.158-.904.158-2.123.158-3.922V15ZM10 1.25h-.056c-1.838 0-3.294 0-4.433.153-1.172.158-2.121.49-2.87 1.238-.684.685-1.058 1.336-1.233 2.341-.158.904-.158 2.122-.158 3.922V9a.75.75 0 1 0 1.5 0c0-1.92.003-3.001.135-3.76.118-.673.33-1.051.817-1.538.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14a.75.75 0 0 0 0-1.5Z" /><path fill="currentColor" fillRule="evenodd" d="M12 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM10.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M5.324 9.45c1.27-1.473 3.452-3.2 6.676-3.2s5.406 1.727 6.676 3.2l.032.038c.27.314.55.637.741 1.024.214.433.301.897.301 1.488 0 .59-.087 1.055-.3 1.488-.192.387-.471.71-.742 1.024l-.032.037c-1.27 1.474-3.452 3.201-6.676 3.201s-5.406-1.727-6.676-3.2l-.032-.038c-.27-.314-.55-.637-.741-1.024-.214-.433-.301-.897-.301-1.488 0-.59.087-1.055.3-1.488.192-.387.471-.71.742-1.024l.032-.038ZM12 7.75c-2.631 0-4.434 1.397-5.54 2.68-.313.364-.466.549-.565.747-.083.169-.145.389-.145.823 0 .434.062.654.145.823.099.198.252.383.565.747 1.106 1.283 2.909 2.68 5.54 2.68 2.631 0 4.434-1.397 5.54-2.68.314-.364.466-.549.565-.747.083-.169.145-.389.145-.823 0-.434-.062-.654-.145-.823-.099-.198-.252-.383-.566-.747C16.434 9.147 14.632 7.75 12 7.75Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M14 2.75c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812.487.487.7.865.817 1.538.132.759.135 1.84.135 3.76a.75.75 0 0 0 1.5 0v-.096c0-1.8 0-3.018-.158-3.922-.175-1.005-.549-1.656-1.233-2.34-.749-.75-1.698-1.081-2.87-1.239-1.14-.153-2.595-.153-4.433-.153H14a.75.75 0 0 0 0 1.5ZM2 14.25a.75.75 0 0 1 .75.75c0 1.92.003 3.001.135 3.76.118.673.33 1.051.817 1.538.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.684-.685-1.058-1.336-1.233-2.341-.158-.904-.158-2.123-.158-3.922V15a.75.75 0 0 1 .75-.75ZM22 14.25a.75.75 0 0 1 .75.75v.096c0 1.8 0 3.018-.158 3.922-.175 1.005-.549 1.656-1.233 2.34-.749.75-1.698 1.081-2.87 1.239-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.487-.487.7-.865.817-1.538.132-.759.135-1.84.135-3.76a.75.75 0 0 1 .75-.75ZM9.944 1.25H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.487.487-.7.865-.817 1.538-.132.759-.135 1.84-.135 3.76a.75.75 0 1 1-1.5 0v-.096c0-1.8 0-3.018.158-3.922.175-1.005.549-1.656 1.233-2.34.749-.75 1.698-1.081 2.87-1.239 1.14-.153 2.595-.153 4.433-.153ZM12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" /><path fill="currentColor" fillRule="evenodd" d="M5.892 14.06C5.297 13.37 5 13.025 5 12c0-1.025.297-1.37.892-2.06C7.08 8.562 9.072 7 12 7c2.927 0 4.92 1.562 6.108 2.94.595.69.892 1.035.892 2.06 0 1.025-.297 1.37-.892 2.06C16.92 15.438 14.928 17 12 17c-2.927 0-4.92-1.562-6.108-2.94ZM9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><g fill="currentColor" opacity={0.5}><path d="M14 2.75c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812.487.487.7.865.817 1.538.132.759.135 1.84.135 3.76a.75.75 0 0 0 1.5 0v-.096c0-1.8 0-3.018-.158-3.922-.175-1.005-.549-1.656-1.233-2.34-.749-.75-1.698-1.081-2.87-1.239-1.14-.153-2.595-.153-4.433-.153H14a.75.75 0 0 0 0 1.5ZM2 14.25a.75.75 0 0 1 .75.75c0 1.92.003 3.001.135 3.76.118.673.33 1.051.817 1.538.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.684-.685-1.058-1.336-1.233-2.341-.158-.904-.158-2.123-.158-3.922V15a.75.75 0 0 1 .75-.75ZM22 14.25a.75.75 0 0 1 .75.75v.096c0 1.8 0 3.018-.158 3.922-.175 1.005-.549 1.656-1.233 2.34-.749.75-1.698 1.081-2.87 1.239-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.487-.487.7-.865.817-1.538.132-.759.135-1.84.135-3.76a.75.75 0 0 1 .75-.75ZM9.944 1.25H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.487.487-.7.865-.817 1.538-.132.759-.135 1.84-.135 3.76a.75.75 0 1 1-1.5 0v-.096c0-1.8 0-3.018.158-3.922.175-1.005.549-1.656 1.233-2.34.749-.75 1.698-1.081 2.87-1.239 1.14-.153 2.595-.153 4.433-.153Z" /></g><path fill="currentColor" d="M12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" /><path fill="currentColor" fillRule="evenodd" d="M5.892 14.06C5.297 13.37 5 13.025 5 12c0-1.025.297-1.37.892-2.06C7.08 8.562 9.072 7 12 7c2.927 0 4.92 1.562 6.108 2.94.595.69.892 1.035.892 2.06 0 1.025-.297 1.37-.892 2.06C16.92 15.438 14.928 17 12 17c-2.927 0-4.92-1.562-6.108-2.94ZM9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z" clipRule="evenodd" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default EyeScan