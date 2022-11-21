import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Broom = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21.036 3.944a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-8.838 1.061a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm6.187 6.187-.53.53a.75.75 0 0 0 1.06 0l-.53-.53ZM3.58 12.98l.64-.39-.64.39Zm-.667-1.096-.668.34.012.026.015.024.64-.39ZM4.408 7.01l.35.663-.35-.663ZM7.169 5.86l.206.721-.206-.721Zm5.366-.518.53-.53-.183-.184-.258-.03-.09.744ZM10.94 20.34l.39-.64-.39.64Zm1.096.667-.39.641.024.015.025.012.341-.668Zm4.872-1.495-.663-.35.663.35Zm1.151-2.761.721.206-.72-.206Zm.924-.585a.75.75 0 1 0-1.463-.332l1.463.332Zm.992-13.282-2.122 2.121 1.061 1.06 2.121-2.12-1.06-1.061Zm-6.718 3.182a3.25 3.25 0 0 1 4.596 0l1.061-1.061a4.75 4.75 0 0 0-6.717 0l1.06 1.06Zm4.596 0a3.25 3.25 0 0 1 0 4.596l1.061 1.06a4.75 4.75 0 0 0 0-6.717l-1.06 1.06ZM4.22 12.589l-.667-1.096-1.281.78.667 1.096 1.281-.78Zm.538-4.915c.827-.436 1.734-.84 2.617-1.093l-.412-1.442c-1.018.29-2.025.744-2.905 1.209l.7 1.326Zm2.617-1.093a14.624 14.624 0 0 1 4.98-.503 4.866 4.866 0 0 1 .091.009l.089-.745.088-.745h-.004l-.008-.001a3.1 3.1 0 0 0-.123-.012c-.082-.008-.2-.017-.348-.025a16.122 16.122 0 0 0-5.176.58l.411 1.442Zm-3.794 4.96c-.701-1.373-.238-3.12 1.177-3.867l-.7-1.326c-2.2 1.16-2.856 3.833-1.813 5.876l1.336-.682Zm6.97 9.44 1.097.667.78-1.281-1.097-.667-.78 1.281Zm7.021-1.119c.465-.88.918-1.887 1.21-2.905l-1.443-.412c-.253.883-.656 1.79-1.093 2.617l1.326.7Zm-5.876 1.813c2.044 1.043 4.715.387 5.876-1.813l-1.326-.7c-.747 1.415-2.494 1.879-3.868 1.177l-.682 1.336Zm.308-15.803 5.85 5.85 1.061-1.06-5.85-5.85-1.06 1.06ZM2.94 13.37a22.75 22.75 0 0 0 7.612 7.612l.78-1.281a21.25 21.25 0 0 1-7.11-7.11l-1.282.779Zm15.842 3.588c.077-.268.144-.532.203-.791l-1.463-.332c-.053.234-.113.471-.182.71l1.442.413Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.728 5.536a4 4 0 1 1 5.657 5.657M3.58 12.979l-.667-1.096C2.04 10.175 2.6 7.965 4.408 7.011c.854-.45 1.81-.879 2.761-1.15 2.86-.818 5.366-.518 5.366-.518l6.043 6.043s.3 2.506-.518 5.365c-.272.951-.7 1.908-1.15 2.762-.955 1.807-3.164 2.367-4.873 1.495l-1.096-.667a22.001 22.001 0 0 1-7.361-7.362Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="m20.506 3.414-2.121 2.121" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22.53 2.53a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM3.19 12.63l.64-.39-.64.39Zm-.741-1.219-.668.341.012.025.015.024.64-.39ZM4.11 5.997l.35.663-.35-.663Zm3.069-1.279.206.721-.206-.721Zm5.963-.575.53-.53-.184-.184-.257-.031-.09.745ZM11.37 20.81l.39-.64-.39.64Zm1.219.742-.39.64.024.015.025.012.34-.668Zm5.414-1.662-.663-.35.663.35Zm1.279-3.069.721.206-.721-.206Zm.575-5.963.745-.089-.03-.257-.184-.184-.53.53ZM21.47 1.47l-2.358 2.357 1.06 1.06L22.53 2.53l-1.06-1.06Zm-7.583 3.418a3.695 3.695 0 0 1 5.225 0l1.06-1.06a5.195 5.195 0 0 0-7.346 0l1.06 1.06Zm5.225 0a3.695 3.695 0 0 1 0 5.226l1.061 1.06a5.195 5.195 0 0 0 0-7.347l-1.06 1.06ZM3.83 12.24l-.74-1.219-1.282.78.74 1.218 1.282-.78Zm.63-5.58c.922-.486 1.935-.938 2.925-1.22l-.412-1.443c-1.124.321-2.237.822-3.213 1.337l.7 1.326Zm2.925-1.22a16.334 16.334 0 0 1 5.564-.563 5.382 5.382 0 0 1 .1.01h.004l.088-.744.09-.745h-.005l-.009-.002a4.528 4.528 0 0 0-.135-.013 16.715 16.715 0 0 0-1.751-.043c-1.137.031-2.693.18-4.358.657l.412 1.442Zm-4.268 5.63c-.799-1.563-.273-3.556 1.343-4.41l-.7-1.326C1.36 6.6.64 9.519 1.78 11.752l1.337-.682Zm7.863 10.381 1.219.741.78-1.281-1.219-.742-.78 1.282Zm7.686-1.21c.515-.976 1.016-2.09 1.337-3.214l-1.442-.412c-.283.99-.735 2.003-1.221 2.925l1.326.7Zm1.337-3.214a17.829 17.829 0 0 0 .614-6.11 6.742 6.742 0 0 0-.01-.105l-.003-.03-.002-.008v-.004l-.745.088-.744.09v-.001.003a4.48 4.48 0 0 1 .01.1 15.199 15.199 0 0 1 .038 1.576 16.333 16.333 0 0 1-.6 3.989l1.442.412Zm-7.755 5.192c2.233 1.14 5.15.421 6.418-1.979l-1.326-.7c-.854 1.616-2.847 2.142-4.41 1.344l-.682 1.335Zm.363-17.546 6.716 6.716 1.06-1.06-6.715-6.717-1.06 1.061ZM2.55 13.019a25.198 25.198 0 0 0 8.431 8.432l.78-1.282a23.697 23.697 0 0 1-7.93-7.93l-1.281.78Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M21.037 2.884a.75.75 0 0 1 0 1.06l-1.633 1.633a4.753 4.753 0 0 1-.085 5.687l.004.032-.032.004.032-.004v.005l.001.008.003.027a8.867 8.867 0 0 1 .034.444 16.125 16.125 0 0 1-.58 5.176c-.29 1.019-.743 2.026-1.208 2.907-1.162 2.199-3.833 2.855-5.877 1.812l-.024-.012-1.12-.682a22.75 22.75 0 0 1-7.613-7.612l-.681-1.12-.013-.025c-1.043-2.043-.386-4.715 1.813-5.876.88-.465 1.888-.918 2.905-1.21a16.122 16.122 0 0 1 5.525-.554l.096.009.027.003h.009l.002.001h.001l-.003.033.003-.033.034.004a4.753 4.753 0 0 1 5.686-.085l1.633-1.632a.75.75 0 0 1 1.06 0Zm-8.84 3.182a13.62 13.62 0 0 0-1.252-.021c-.94.025-2.216.149-3.57.536-.883.253-1.79.657-2.617 1.093-1.406.743-1.873 2.474-1.189 3.844l.652 1.071a21.25 21.25 0 0 0 7.11 7.11l1.071.652c1.37.684 3.102.218 3.844-1.189.437-.827.84-1.734 1.093-2.617a14.62 14.62 0 0 0 .516-4.823l-5.657-5.656Zm6.127 4.004L13.85 5.597a3.251 3.251 0 0 1 4.474 4.473Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.221 19.643c.477-.903.942-1.937 1.24-2.98.411-1.438.56-2.788.602-3.818l-1.552-1.552-5.804-5.804-1.552-1.552c-1.03.042-2.38.19-3.817.602-1.045.298-2.078.763-2.981 1.24C2.1 6.97 1.427 9.71 2.497 11.807l.013.025.7 1.15a23.338 23.338 0 0 0 7.808 7.809l1.15.699.025.013c2.096 1.07 4.837.396 6.028-1.86ZM21.775 3.313a.77.77 0 0 0-1.088-1.088L19.012 3.9a4.877 4.877 0 0 0-5.718 0l1.109 1.109 4.588 4.588 1.109 1.109a4.877 4.877 0 0 0 0-5.718l1.675-1.675Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M22.53 2.53a.75.75 0 1 0-1.06-1.06l-2.403 2.402a4.471 4.471 0 0 1 1.061 1.06L22.53 2.53ZM2.449 11.411l.74 1.218a24.449 24.449 0 0 0 8.181 8.181l1.219.741c1.898.97 4.353.347 5.414-1.661.5-.949.977-2.012 1.279-3.07.488-1.706.659-3.259.712-4.33.033-.64.049-.961-.104-1.357-.152-.395-.416-.66-.944-1.187L14.12 5.12c-.491-.491-.737-.737-1.107-.89-.37-.151-.664-.15-1.253-.148a17.191 17.191 0 0 0-4.581.635c-1.057.302-2.12.778-3.069 1.28-2.008 1.06-2.63 3.515-1.661 5.413Z" fill="currentColor" /><path d="M19.643 4.358a4.445 4.445 0 0 0-6.287 0l-.038.037c.232.156.456.38.802.726l4.825 4.825c.302.302.518.517.675.72l.023-.022a4.445 4.445 0 0 0 0-6.286Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Broom