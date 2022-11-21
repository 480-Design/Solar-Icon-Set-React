import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const EndCall = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m8.008 12.895-.75.02.75-.02Zm.016.63.75-.018-.75.019Zm-1.37 1.857-.2-.723.2.723Zm-1.981.546.2.723-.2-.723Zm-2.623-1.96-.75.018.75-.019ZM2 12l.75-.019-.75.019Zm9.85-4.995.02-.75-.02.75Zm8.918 3.72a.75.75 0 1 0 1.016-1.104l-1.016 1.103Zm-4.775 2.38.75-.019-.75.019Zm.01.397.75-.019-.75.019Zm1.746 2 .13-.738-.13.738Zm2.004.353.13-.739-.13.739Zm-7.79-4.354.02-.75-.02.75Zm10.786 2.44a.75.75 0 1 0-1.5.037l1.5-.037ZM2.406 10.628l-.585-.468.585.469Zm5.357-3.985a.75.75 0 1 0 .342 1.46l-.342-1.46ZM4.724 9.536a.75.75 0 1 0-.835-1.247l.835 1.247Zm2.534 3.378.016.63 1.5-.037-.016-.63-1.5.037Zm-.803 1.745-1.982.546.4 1.446 1.98-.546-.398-1.446Zm-3.655-.71-.05-1.967-1.499.038.05 1.966 1.5-.038Zm9.03-6.193c5.22.138 7.9 2.013 8.938 2.97l1.016-1.104c-1.29-1.188-4.312-3.218-9.914-3.365l-.04 1.5Zm3.413 5.369.01.397 1.5-.038-.01-.397-1.5.038Zm2.376 3.117 2.004.352.26-1.477-2.004-.352-.26 1.477Zm-1.626-3.136.75-.02v-.016l-.002-.02a1.044 1.044 0 0 0-.024-.166 1.569 1.569 0 0 0-.112-.33 2.18 2.18 0 0 0-.675-.807c-.686-.523-1.876-.94-3.947-.995l-.04 1.5c1.921.05 2.747.436 3.077.688.16.121.21.216.225.246.007.016.007.022.005.012a.26.26 0 0 1-.005-.046l-.001-.013v-.012c0-.001 0-.002.75-.021Zm-4.01-2.354c-2.065-.054-3.254.297-3.94.804-.352.26-.557.55-.669.814a1.497 1.497 0 0 0-.114.46 1.033 1.033 0 0 0-.002.076v.006c0 .001 0 .002.75-.017.75-.018.75-.018.75-.016v.005a.58.58 0 0 1-.004.07c-.002.012-.003.012.001.002.006-.014.041-.092.179-.193.293-.217 1.082-.562 3.01-.511l.039-1.5Zm7.64 5.842c1.664.293 3.169-.953 3.126-2.653l-1.5.038c.019.721-.605 1.272-1.366 1.138l-.26 1.477ZM2.751 11.982c-.01-.385.079-.681.24-.884l-1.17-.937c-.45.561-.585 1.244-.57 1.859l1.5-.038Zm12.502 1.54c.034 1.343 1.044 2.487 2.366 2.72l.26-1.477c-.636-.112-1.11-.668-1.126-1.28l-1.5.037Zm-10.78 1.683c-.796.22-1.652-.41-1.673-1.257l-1.5.038c.046 1.809 1.824 3.148 3.572 2.665l-.399-1.446Zm2.801-1.66c.014.53-.319.976-.82 1.114l.4 1.446a2.607 2.607 0 0 0 1.92-2.598l-1.5.038Zm.83-5.44c1.05-.245 2.283-.387 3.726-.349l.04-1.5c-1.565-.04-2.927.112-4.107.388l.342 1.46Zm-5.112 2.993c.322-.402.879-.991 1.732-1.562L3.89 8.289a9.217 9.217 0 0 0-2.068 1.872l1.17.937Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 13.478h.75H8ZM6.58 15.33l-.211-.72.211.72Zm-2 .586-.211-.72.211.72ZM2 14.066h-.75H2Zm0-1.924h.75H2Zm14 1.109h-.75.75Zm1.7 1.912-.108.742.108-.742Zm2 .293.11-.742-.11.743Zm2.3-1.912h-.75.75Zm0-2.125h.75H22ZM7.25 12.862v.616h1.5v-.616h-1.5Zm-.881 1.748-2 .586.422 1.44 2-.587-.422-1.44Zm-3.619-.546v-1.923h-1.5v1.923h1.5Zm12.5-1.202v.388h1.5v-.388h-1.5Zm2.342 3.043 2 .293.217-1.485-2-.293-.217 1.485Zm5.158-2.362v-2.125h-1.5v2.125h1.5Zm-3.158 2.655c1.634.24 3.158-.985 3.158-2.655h-1.5c0 .698-.655 1.286-1.44 1.17l-.218 1.485Zm1.279-5.783c.242.217.379.563.379 1.003h1.5c0-.733-.23-1.542-.88-2.121l-1 1.118ZM2.75 12.141c0-.367.093-.662.268-.874l-1.155-.957c-.457.552-.613 1.22-.613 1.831h1.5Zm12.5 1.109c0 1.347 1.014 2.46 2.342 2.655l.217-1.485c-.628-.092-1.059-.604-1.059-1.17h-1.5ZM4.37 15.196c-.838.245-1.62-.368-1.62-1.132h-1.5c0 1.832 1.81 3.079 3.54 2.571l-.421-1.44Zm2.88-1.718c0 .505-.343.974-.881 1.132l.422 1.44c1.149-.338 1.959-1.372 1.959-2.572h-1.5Z" fill="currentColor" /><path opacity={0.5} d="M7.25 12.862a.75.75 0 0 0 1.5 0h-1.5ZM12 7v.75V7Zm3.25 5.862a.75.75 0 0 0 1.5 0h-1.5ZM12 11.396v-.75.75Zm-8.982-.129C3.902 10.201 6.513 7.75 12 7.75v-1.5c-6.01 0-9.021 2.714-10.137 4.06l1.155.957ZM12 7.75c5.233 0 7.865 1.767 8.87 2.665l1-1.118C20.594 8.157 17.609 6.25 12 6.25v1.5Zm4 5.112c.75 0 .75-.001.75-.002v-.016a.492.492 0 0 0-.004-.067 1.498 1.498 0 0 0-.126-.455 2.055 2.055 0 0 0-.677-.798c-.686-.503-1.873-.878-3.943-.878v1.5c1.93 0 2.743.358 3.057.588.149.11.19.192.198.21.005.01.004.011.001-.002a.304.304 0 0 1-.006-.065v-.013c0-.001 0-.002.75-.002Zm-4-2.216c-2.07 0-3.257.375-3.943.878-.351.257-.56.54-.677.798a1.499 1.499 0 0 0-.126.455 1.005 1.005 0 0 0-.004.076v.007s0 .002.75.002.75 0 .75.002v.006a.844.844 0 0 1-.006.072c-.002.013-.004.012.001.001.008-.017.05-.1.198-.209.314-.23 1.127-.588 3.057-.588v-1.5Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 12.862h-.75H8Zm0 .616h.75H8ZM6.58 15.33l-.211-.72.211.72Zm-2 .587-.211-.72.211.72ZM2 14.064h.75H2Zm0-1.923h.75H2Zm.44-1.352-.577-.479.578.479ZM12 7v.75V7Zm9.37 2.856.5-.56-.5.56ZM16 13.25h-.75.75Zm1.7 1.912-.108.743.108-.742Zm2 .294.11-.742-.11.742Zm2.3-1.913h-.75.75Zm0-2.125h.75H22Zm-10-.022v-.75.75Zm-4.75 1.466v.616h1.5v-.616h-1.5Zm-.881 1.748-2 .586.422 1.44 2-.587-.422-1.44Zm-3.619-.546v-1.923h-1.5v1.923h1.5Zm.268-2.797C3.902 10.201 6.513 7.75 12 7.75v-1.5c-6.01 0-9.021 2.714-10.137 4.06l1.155.957ZM12 7.75c5.233 0 7.865 1.767 8.87 2.665l1-1.118C20.594 8.157 17.609 6.25 12 6.25v1.5Zm3.25 5.112v.388h1.5v-.388h-1.5Zm2.342 3.043 2 .293.217-1.485-2-.293-.217 1.485Zm5.158-2.362v-2.125h-1.5v2.125h1.5ZM16 12.862c.75 0 .75-.001.75-.002v-.016a.764.764 0 0 0-.004-.067 1.498 1.498 0 0 0-.126-.455 2.055 2.055 0 0 0-.677-.798c-.686-.503-1.874-.878-3.943-.878v1.5c1.93 0 2.743.358 3.057.588.149.11.19.192.198.21.005.01.004.011.001-.002a.304.304 0 0 1-.006-.065v-.013c0-.001 0-.002.75-.002Zm-4-2.216c-2.07 0-3.257.375-3.943.878-.351.257-.56.54-.677.798a1.499 1.499 0 0 0-.126.455 1.005 1.005 0 0 0-.004.067v.016s0 .002.75.002.75 0 .75.002v.006a.844.844 0 0 1-.006.072c-.003.013-.004.012.001.001.008-.017.05-.1.198-.209.314-.23 1.126-.588 3.057-.588v-1.5Zm7.592 5.552c1.634.24 3.158-.985 3.158-2.655h-1.5c0 .698-.655 1.286-1.44 1.17l-.218 1.485Zm1.279-5.783c.242.217.379.563.379 1.003h1.5c0-.733-.23-1.542-.88-2.121l-1 1.118ZM2.75 12.141c0-.367.093-.662.268-.874l-1.155-.957c-.457.552-.613 1.22-.613 1.831h1.5Zm12.5 1.109c0 1.347 1.014 2.46 2.342 2.655l.217-1.485c-.628-.092-1.059-.604-1.059-1.17h-1.5ZM4.37 15.196c-.838.245-1.62-.368-1.62-1.132h-1.5c0 1.833 1.81 3.079 3.54 2.571l-.421-1.44Zm2.88-1.718c0 .505-.343.974-.881 1.132l.422 1.44c1.149-.338 1.959-1.372 1.959-2.572h-1.5Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 7.75c-5.487 0-8.098 2.451-8.982 3.517-.175.212-.268.507-.268.874v1.923c0 .764.782 1.377 1.619 1.132l2-.586c.538-.158.881-.627.881-1.132v-.616H8c-.75 0-.75-.001-.75-.002V12.824a1.005 1.005 0 0 1 .022-.169c.018-.093.05-.207.108-.333.117-.257.326-.54.677-.798.686-.503 1.874-.878 3.943-.878 2.07 0 3.257.375 3.943.878.351.257.56.54.677.798a1.498 1.498 0 0 1 .126.455l.003.048v.02l.001.008v.007s0 .002-.75.002h.75v.388c0 .566.431 1.078 1.06 1.17l2 .293c.785.116 1.44-.472 1.44-1.17v-2.125c0-.44-.137-.786-.38-1.003C19.866 9.517 17.234 7.75 12 7.75Zm3.25 5.184v.316c0 1.347 1.014 2.46 2.342 2.655l2 .293c1.634.24 3.158-.985 3.158-2.655v-2.125c0-.733-.23-1.542-.88-2.121C20.594 8.157 17.609 6.25 12 6.25c-6.01 0-9.021 2.714-10.137 4.06-.457.552-.613 1.22-.613 1.831v1.923c0 1.833 1.81 3.079 3.54 2.571l2-.586c1.15-.336 1.96-1.371 1.96-2.57v-.545a.633.633 0 0 1 .193-.2c.314-.23 1.126-.588 3.057-.588 1.93 0 2.743.358 3.057.588.13.095.178.17.193.2Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 13.478v-.616s0-1.466 4-1.466 4 1.466 4 1.466v.388c0 .956.723 1.77 1.7 1.912l2 .294c1.21.177 2.3-.73 2.3-1.913v-2.125c0-.587-.184-1.164-.63-1.562C20.23 8.837 17.42 7 12 7c-5.749 0-8.56 2.583-9.56 3.789-.315.381-.44.864-.44 1.352v1.923c0 1.298 1.296 2.228 2.58 1.852l2-.587c.843-.247 1.42-.998 1.42-1.85Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8 12.862v.617c0 .852-.577 1.604-1.42 1.85l-2 .587C3.296 16.292 2 15.363 2 14.065v-1.923c0-.49.125-.971.44-1.353C3.174 9.905 4.88 8.282 8 7.478v5.384Zm8 0v.388c0 .957.723 1.77 1.7 1.913l2 .293c1.21.177 2.3-.729 2.3-1.913V11.42c0-.587-.184-1.165-.63-1.563-.817-.73-2.492-1.88-5.37-2.474v5.48Z" fill="currentColor" /><path opacity={0.5} d="M12 11.396c4 0 4 1.466 4 1.466v-5.48C14.862 7.147 13.536 7 12 7s-2.862.184-4 .478v5.384s0-1.466 4-1.466Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default EndCall