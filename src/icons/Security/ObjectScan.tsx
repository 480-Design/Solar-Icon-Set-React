import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ObjectScan = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 14v1m-8 7c3.771 0 5.657 0 6.828-1.172.654-.653.943-1.528 1.07-2.828M10 22c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14M2 10V9m8-7C6.229 2 4.343 2 3.172 3.172 2.518 3.825 2.229 4.7 2.102 6M14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10M4 11.5s2.4-2 8-2 8 2 8 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M5.25 10a.75.75 0 0 0 1.5 0h-1.5Zm12.164-3.914-.53.53.53-.53ZM10 6.25h4v-1.5h-4v1.5ZM6.75 10v-.5h-1.5v.5h1.5Zm10.5-.5v.5h1.5v-.5h-1.5ZM14 6.25c.964 0 1.612.002 2.095.067.461.062.659.169.789.3l1.06-1.062c-.455-.455-1.022-.64-1.65-.725-.606-.082-1.372-.08-2.294-.08v1.5Zm4.75 3.25c0-.922.002-1.688-.08-2.294-.084-.628-.27-1.195-.726-1.65l-1.06 1.06c.13.13.237.328.3.79.064.482.066 1.13.066 2.094h1.5ZM10 4.75c-.922 0-1.688-.002-2.294.08-.628.084-1.195.27-1.65.725l1.06 1.061c.13-.13.328-.237.79-.3.482-.064 1.13-.066 2.094-.066v-1.5ZM6.75 9.5c0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789l-1.062-1.06c-.455.455-.64 1.022-.725 1.65-.082.606-.08 1.372-.08 2.294h1.5Z" fill="currentColor" /><path d="M14 18.5c1.886 0 2.828 0 3.414-.586C18 17.328 18 16.386 18 14.5V14m-8 4.5c-1.886 0-2.828 0-3.414-.586C6 17.328 6 16.386 6 14.5V14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22M10 22c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14M10 2C6.229 2 4.343 2 3.172 3.172 2 4.343 2 6.229 2 10M14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M4 11.5s2.4-2 8-2 8 2 8 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.7} d="M5.25 10a.75.75 0 0 0 1.5 0h-1.5Zm12.164-3.914-.53.53.53-.53ZM10 6.25h4v-1.5h-4v1.5ZM6.75 10v-.5h-1.5v.5h1.5Zm10.5-.5v.5h1.5v-.5h-1.5ZM14 6.25c.964 0 1.612.002 2.095.067.461.062.659.169.789.3l1.06-1.062c-.455-.455-1.022-.64-1.65-.725-.606-.082-1.372-.08-2.294-.08v1.5Zm4.75 3.25c0-.922.002-1.688-.08-2.294-.084-.628-.27-1.195-.726-1.65l-1.06 1.06c.13.13.237.328.3.79.064.482.066 1.13.066 2.094h1.5ZM10 4.75c-.922 0-1.688-.002-2.294.08-.628.084-1.195.27-1.65.725l1.06 1.061c.13-.13.328-.237.79-.3.482-.064 1.13-.066 2.094-.066v-1.5ZM6.75 9.5c0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789l-1.062-1.06c-.455.455-.64 1.022-.725 1.65-.082.606-.08 1.372-.08 2.294h1.5Z" fill="currentColor" /><path opacity={0.7} d="M18 10.5v4c0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586h-4c-1.886 0-2.828 0-3.414-.586C6 17.328 6 16.386 6 14.5V10" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22M10 22c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14M10 2C6.229 2 4.343 2 3.172 3.172 2 4.343 2 6.229 2 10M14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10M4 11.5s2.4-2 8-2 8 2 8 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M5.25 10a.75.75 0 0 0 1.5 0h-1.5Zm12.164-3.914-.53.53.53-.53ZM10 6.25h4v-1.5h-4v1.5ZM6.75 10v-.5h-1.5v.5h1.5Zm10.5-.5v.5h1.5v-.5h-1.5ZM14 6.25c.964 0 1.612.002 2.095.067.461.062.659.169.789.3l1.06-1.062c-.455-.455-1.022-.64-1.65-.725-.606-.082-1.372-.08-2.294-.08v1.5Zm4.75 3.25c0-.922.002-1.688-.08-2.294-.084-.628-.27-1.195-.726-1.65l-1.06 1.06c.13.13.237.328.3.79.064.482.066 1.13.066 2.094h1.5ZM10 4.75c-.922 0-1.688-.002-2.294.08-.628.084-1.195.27-1.65.725l1.06 1.061c.13-.13.328-.237.79-.3.482-.064 1.13-.066 2.094-.066v-1.5ZM6.75 9.5c0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789l-1.062-1.06c-.455.455-.64 1.022-.725 1.65-.082.606-.08 1.372-.08 2.294h1.5Z" fill="currentColor" /><path d="M6 14v.5c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586h4c1.886 0 2.828 0 3.414-.586C18 17.328 18 16.386 18 14.5V14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.944 1.25H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.289a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153Zm8.345 1.64c-1.027-.138-2.382-.14-4.289-.14a.75.75 0 0 1 0-1.5h.056c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433V10a.75.75 0 0 1-1.5 0c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812ZM9.948 4.75h4.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243v.506c.504.214.892.422 1.173.59a5.991 5.991 0 0 1 .54.365l.01.01.004.002.002.002L20 11.5l.48-.576a.75.75 0 0 1-.957 1.155l-.01-.008a4.493 4.493 0 0 0-.361-.24 8.524 8.524 0 0 0-1.321-.631c-1.214-.467-3.123-.95-5.831-.95s-4.617.483-5.83.95a8.527 8.527 0 0 0-1.322.63 4.508 4.508 0 0 0-.36.24l-.011.009a.75.75 0 0 1-.957-1.155L4 11.5l-.48-.576.001-.001.002-.002.004-.003.01-.008a2.888 2.888 0 0 1 .141-.106c.092-.066.225-.155.399-.26a9.52 9.52 0 0 1 1.173-.59v-.506c0-.898 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08ZM6.75 9.426C8.065 9.05 9.801 8.75 12 8.75s3.935.299 5.25.676c0-.923-.003-1.55-.067-2.02-.062-.462-.169-.66-.3-.79-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066h-4c-.964 0-1.612.002-2.095.067-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788-.063.471-.066 1.098-.066 2.021ZM2 13.25a.75.75 0 0 1 .75.75c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V14a.75.75 0 0 1 .75-.75Zm4 0a.75.75 0 0 1 .75.75v.5c0 .964.002 1.612.067 2.095.062.461.169.659.3.789.13.13.327.237.788.3.483.064 1.131.066 2.095.066h4c.964 0 1.612-.002 2.095-.067.461-.062.659-.169.789-.3.13-.13.237-.327.3-.788.064-.483.066-1.131.066-2.095V14a.75.75 0 0 1 1.5 0v.552c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.344.08-2.242.08H9.948c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.344-.08-2.242V14a.75.75 0 0 1 .75-.75Zm16 0a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M22 13.25a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289a.75.75 0 0 1 .75-.75ZM2 13.25a.75.75 0 0 1 .75.75c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V14a.75.75 0 0 1 .75-.75ZM9.944 1.25H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.289a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153ZM18.29 2.89c-1.028-.138-2.383-.14-4.29-.14a.75.75 0 0 1 0-1.5h.056c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433V10a.75.75 0 0 1-1.5 0c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6.025 13.109C6.775 12.746 8.443 11.5 12 11.5c3.557 0 5.224 1.246 5.975 1.609l.012.006c.055.026.162.077.263.151.132.097.229.21.308.337.194.31.192.604.191.777V14.552c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.725 1.65-.456.456-1.022.642-1.65.726-.595.08-1.344.08-2.243.08H9.948c-.898 0-1.647 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.641-1.022-.726-1.65-.08-.594-.08-1.344-.08-2.242v-.172c0-.174-.003-.468.192-.777.079-.126.176-.24.308-.337a1.647 1.647 0 0 1 .275-.157Z" fill="currentColor" /><path d="M16.294 4.83c-.594-.08-1.344-.08-2.242-.08H9.948c-.898 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243v.286c-.194.124-.359.24-.496.345a5.6 5.6 0 0 0-.497.426l-.01.01-.004.004-.001.002-.002.001a.923.923 0 0 0-.026 1.212.722.722 0 0 0 1.09.034l.008-.009.055-.05c.053-.048.14-.123.263-.216a7.037 7.037 0 0 1 1.172-.708C7.879 10.26 9.58 9.715 12 9.715c2.42 0 4.12.545 5.198 1.07.54.262.927.522 1.172.708a4.063 4.063 0 0 1 .318.266l.008.009a.722.722 0 0 0 1.09-.034.923.923 0 0 0-.026-1.212l-.047-.047a5.607 5.607 0 0 0-.467-.396 7.554 7.554 0 0 0-.496-.345v-.286c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.944 1.25H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.289a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153Zm8.345 1.64c-1.027-.138-2.382-.14-4.289-.14a.75.75 0 0 1 0-1.5h.056c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433V10a.75.75 0 0 1-1.5 0c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812ZM2 13.25a.75.75 0 0 1 .75.75c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V14a.75.75 0 0 1 .75-.75Zm20 0a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><path opacity={0.5} d="M10 5.5h4c1.886 0 2.828 0 3.414.586.55.55.584 1.414.586 3.078V14.5c0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586h-4c-1.886 0-2.828 0-3.414-.586C6 17.328 6 16.386 6 14.5V9.164c.002-1.664.036-2.528.586-3.078C7.172 5.5 8.114 5.5 10 5.5Z" fill="currentColor" /><path d="M18.37 9.3c-.119-.045-.242-.09-.37-.136-1.833-.778-6.8-1.868-12 0-.128.045-.251.09-.37.136a10.02 10.02 0 0 0-1.553.744 6.021 6.021 0 0 0-.54.365l-.01.009-.004.003-.002.002H3.52a.75.75 0 0 0 .957 1.156l.01-.008.063-.047c.06-.043.16-.11.298-.193A8.517 8.517 0 0 1 6.17 10.7c1.214-.467 3.123-.95 5.831-.95 2.709 0 4.617.483 5.83.95a8.514 8.514 0 0 1 1.322.63 4.46 4.46 0 0 1 .36.24l.011.009a.75.75 0 0 0 .957-1.155L20 11c.48-.576.479-.577.479-.577l-.002-.002-.004-.003-.01-.009a2.6 2.6 0 0 0-.141-.105 6.032 6.032 0 0 0-.399-.26A10.02 10.02 0 0 0 18.37 9.3Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ObjectScan