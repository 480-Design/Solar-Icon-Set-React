import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MaskSad = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 11v1c0 5.49-4.239 8.155-6.899 9.286-.721.307-1.082.46-2.101.46-1.02 0-1.38-.153-2.101-.46C7.239 20.155 3 17.49 3 12V6.719c0-2.19 0-3.285.707-3.884.708-.6 1.789-.42 3.95-.059l1.055.176c1.64.273 2.46.41 3.288.41.828 0 1.648-.137 3.288-.41l1.054-.176c2.163-.36 3.244-.54 3.95.059C21 3.434 21 4.529 21 6.719V7" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M6.5 9c.291-.583 1.077-1 2-1s1.709.417 2 1M13.5 9c.291-.583 1.077-1 2-1s1.709.417 2 1M8.5 15s1.05-1 3.5-1 3.5 1 3.5 1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M21 12V6.719c0-2.19 0-3.285-.707-3.884-.707-.6-1.788-.42-3.95-.059l-1.055.176c-1.64.273-2.46.41-3.288.41-.828 0-1.648-.137-3.288-.41l-1.054-.176c-2.162-.36-3.244-.54-3.95.059C3 3.434 3 4.529 3 6.719V12c0 5.49 4.239 8.155 6.899 9.286.721.307 1.082.46 2.101.46 1.02 0 1.38-.153 2.101-.46C16.761 20.155 21 17.49 21 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M6.5 9c.291-.583 1.077-1 2-1s1.709.417 2 1M13.5 9c.291-.583 1.077-1 2-1s1.709.417 2 1M8.5 15s1.05-1 3.5-1 3.5 1 3.5 1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 12V6.719c0-2.19 0-3.285-.707-3.884-.707-.6-1.788-.42-3.95-.059l-1.055.176c-1.64.273-2.46.41-3.288.41-.828 0-1.648-.137-3.288-.41l-1.054-.176c-2.162-.36-3.244-.54-3.95.059C3 3.434 3 4.529 3 6.719V12c0 5.49 4.239 8.155 6.899 9.286.721.307 1.082.46 2.101.46 1.02 0 1.38-.153 2.101-.46C16.761 20.155 21 17.49 21 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="M6.5 9c.291-.583 1.077-1 2-1s1.709.417 2 1M13.5 9c.291-.583 1.077-1 2-1s1.709.417 2 1M8.5 15s1.05-1 3.5-1 3.5 1 3.5 1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.17 9.335c.124-.247.587-.585 1.33-.585.743 0 1.206.338 1.33.585a.75.75 0 1 0 1.34-.67C10.713 7.747 9.604 7.25 8.5 7.25s-2.212.497-2.67 1.415a.75.75 0 1 0 1.34.67ZM15.5 8.75c-.743 0-1.206.338-1.33.585a.75.75 0 0 1-1.34-.67c.458-.918 1.566-1.415 2.67-1.415 1.104 0 2.212.497 2.67 1.415a.75.75 0 1 1-1.34.67c-.124-.247-.587-.585-1.33-.585Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="m8.835 2.212-1.11-.185c-1.033-.172-1.888-.315-2.57-.331-.716-.017-1.379.098-1.933.567-.553.468-.776 1.103-.876 1.812-.096.675-.096 1.54-.096 2.587V12c0 5.964 4.624 8.814 7.355 9.976l.027.012c.34.144.658.28 1.024.371.386.096.796.137 1.344.137s.958-.04 1.344-.137c.366-.091.684-.227 1.024-.372l.027-.01c2.731-1.163 7.355-4.013 7.355-9.977V6.662c0-1.047 0-1.912-.096-2.587-.1-.709-.323-1.344-.877-1.812-.553-.47-1.216-.584-1.932-.567-.682.016-1.537.159-2.57.331l-1.11.185c-1.664.277-2.414.4-3.165.4-.751 0-1.501-.123-3.165-.4ZM4.192 3.407c.154-.13.384-.225.927-.211.563.013 1.312.136 2.415.32l1.128.188c1.57.262 2.448.408 3.338.408.89 0 1.767-.146 3.338-.408l1.128-.188c1.103-.184 1.852-.307 2.415-.32.543-.014.773.08.927.211.154.13.285.342.361.879.08.557.081 1.315.081 2.433V12c0 5.017-3.854 7.495-6.442 8.596-.371.158-.587.248-.827.308-.23.057-.51.092-.981.092s-.751-.035-.981-.092c-.24-.06-.456-.15-.827-.308C7.604 19.495 3.75 17.016 3.75 12V6.719c0-1.118.002-1.876.081-2.433.076-.537.207-.749.361-.879Z" fill="currentColor" /><path d="M7.957 15.517a.752.752 0 0 1 .027-1.061l.032-.03.06-.05c.049-.04.116-.092.202-.15.173-.12.421-.268.751-.413.663-.29 1.64-.563 2.971-.563 1.33 0 2.308.272 2.97.563.33.145.58.294.752.412a3.05 3.05 0 0 1 .262.202l.02.018.008.006.003.003.001.002h.001a.75.75 0 1 1-1.041 1.082 1.53 1.53 0 0 0-.103-.076c-.1-.069-.267-.17-.506-.275-.475-.21-1.247-.437-2.367-.437-1.12 0-1.892.228-2.367.437a3.11 3.11 0 0 0-.59.335.815.815 0 0 0-.033.028.75.75 0 0 1-1.053-.033Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M21 11.406V6.208c0-2.156 0-3.234-.707-3.824-.707-.59-1.788-.412-3.95-.057l-1.055.173c-1.64.269-2.46.403-3.288.403-.828 0-1.648-.134-3.288-.403l-1.054-.173c-2.162-.355-3.244-.532-3.95.057C3 2.974 3 4.052 3 6.208v5.198c0 5.405 4.239 8.027 6.899 9.14C10.62 20.85 10.98 21 12 21c1.02 0 1.38-.151 2.101-.453C16.761 19.433 21 16.81 21 11.407ZM7.996 13.812a.745.745 0 0 0-.04 1.056.758.758 0 0 0 1.054.033l.005-.005.01-.007a1.318 1.318 0 0 1 .101-.075c.101-.068.268-.168.507-.271.475-.206 1.247-.43 2.367-.43 1.12 0 1.892.224 2.367.43.239.103.406.203.506.271.05.034.085.06.103.075l.01.008.005.004c.3.274.769.26 1.052-.033a.73.73 0 0 0-.026-1.043l-.001-.002h-.001l-.003-.004-.008-.007-.02-.017a3.044 3.044 0 0 0-.262-.198 4.627 4.627 0 0 0-.751-.406c-.663-.287-1.64-.554-2.971-.554-1.33 0-2.308.268-2.97.554-.33.143-.58.289-.752.405a3.035 3.035 0 0 0-.262.199l-.02.018ZM8.5 8.207c-.743 0-1.205.333-1.329.576a.756.756 0 0 1-1.006.33.733.733 0 0 1-.336-.99C6.288 7.22 7.397 6.73 8.5 6.73c1.104 0 2.212.49 2.671 1.393a.733.733 0 0 1-.336.99.756.756 0 0 1-1.006-.33c-.123-.243-.586-.576-1.329-.576Zm7 0c-.743 0-1.206.333-1.329.576a.756.756 0 0 1-1.006.33.733.733 0 0 1-.336-.99c.459-.904 1.568-1.393 2.671-1.393 1.104 0 2.212.49 2.671 1.393a.733.733 0 0 1-.336.99.756.756 0 0 1-1.006-.33c-.123-.243-.586-.576-1.329-.576Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M21 6.208v5.198c0 5.405-4.239 8.027-6.899 9.14C13.38 20.85 13.02 21 12 21c-1.02 0-1.38-.151-2.101-.453C7.239 19.433 3 16.81 3 11.407v-5.2c0-2.155 0-3.233.707-3.823.708-.59 1.789-.412 3.95-.057l1.055.173c1.64.269 2.46.403 3.288.403.828 0 1.648-.134 3.288-.403l1.054-.173c2.163-.355 3.244-.532 3.95.057.708.59.708 1.668.708 3.824Z" fill="currentColor" /><path d="M7.171 8.783c.124-.243.586-.576 1.33-.576.742 0 1.205.333 1.328.576a.756.756 0 0 0 1.006.33.733.733 0 0 0 .336-.99c-.459-.904-1.567-1.393-2.67-1.393-1.104 0-2.213.49-2.672 1.393a.733.733 0 0 0 .336.99.756.756 0 0 0 1.006-.33ZM15.5 8.207c-.743 0-1.206.333-1.329.576a.756.756 0 0 1-1.006.33.733.733 0 0 1-.336-.99c.459-.904 1.568-1.393 2.671-1.393 1.104 0 2.212.49 2.671 1.393a.733.733 0 0 1-.336.99.756.756 0 0 1-1.006-.33c-.123-.243-.586-.576-1.329-.576ZM7.996 13.813a.745.745 0 0 0-.04 1.055.758.758 0 0 0 1.054.033l.005-.005.01-.007a1.318 1.318 0 0 1 .101-.075c.101-.068.268-.168.507-.271.475-.206 1.247-.43 2.367-.43 1.12 0 1.892.224 2.367.43.239.103.406.203.506.271.05.034.085.06.103.075l.01.008.005.004c.3.274.769.26 1.052-.033a.73.73 0 0 0-.026-1.043l-.001-.002h-.001l-.003-.004-.008-.007-.02-.017a3.044 3.044 0 0 0-.262-.198 4.627 4.627 0 0 0-.751-.406c-.663-.287-1.64-.554-2.971-.554-1.33 0-2.308.268-2.97.554-.33.143-.58.289-.752.405a3.035 3.035 0 0 0-.262.199l-.02.018Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MaskSad