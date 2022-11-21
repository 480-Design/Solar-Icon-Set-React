import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ShockAbsorber = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 4c0-.943 0-1.414.293-1.707C6.586 2 7.057 2 8 2h8c.943 0 1.414 0 1.707.293C18 2.586 18 3.057 18 4c0 .943 0 1.414-.293 1.707C17.414 6 16.943 6 16 6H8c-.943 0-1.414 0-1.707-.293C6 5.414 6 4.943 6 4Z" stroke="currentColor" strokeWidth={1.5} /><path d="M8.5 16.5A1.5 1.5 0 0 1 10 15h4a1.5 1.5 0 0 1 0 3h-4a1.5 1.5 0 0 1-1.5-1.5ZM14 15.5v-10M10 15.5V6" stroke="currentColor" strokeWidth={1.5} /><path d="m8 8 8 2m-8 1.5 8 2M20 11.5h2m-18 0H2m17.071 2.8.707.7m-14.85-.7-.706.7m14.85-6.3.706-.7m-14.85.7L4.223 8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M6 4c0-.943 0-1.414.293-1.707C6.586 2 7.057 2 8 2h8c.943 0 1.414 0 1.707.293C18 2.586 18 3.057 18 4c0 .943 0 1.414-.293 1.707C17.414 6 16.943 6 16 6H8c-.943 0-1.414 0-1.707-.293C6 5.414 6 4.943 6 4ZM8.5 16.5A1.5 1.5 0 0 1 10 15h4a1.5 1.5 0 0 1 0 3h-4a1.5 1.5 0 0 1-1.5-1.5Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M14 15.5v-10M10 15.5V6" stroke="currentColor" strokeWidth={1.5} /><path d="m8 8 8 2m-8 1.5 8 2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M20 11.5h2m-18 0H2m17.071 2.8.707.7m-14.85-.7-.706.7m14.85-6.3.706-.7m-14.85.7L4.223 8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 4c0-.943 0-1.414.293-1.707C6.586 2 7.057 2 8 2h8c.943 0 1.414 0 1.707.293C18 2.586 18 3.057 18 4c0 .943 0 1.414-.293 1.707C17.414 6 16.943 6 16 6H8c-.943 0-1.414 0-1.707-.293C6 5.414 6 4.943 6 4Z" stroke="currentColor" strokeWidth={1.5} /><path d="M8.5 16.5A1.5 1.5 0 0 1 10 15h4a1.5 1.5 0 0 1 0 3h-4a1.5 1.5 0 0 1-1.5-1.5ZM14 15.5v-10M10 15.5V6" stroke="currentColor" strokeWidth={1.5} /><path d="m8 8 8 2m-8 1.5 8 2M20 11.5h2m-18 0H2m17.071 2.8.707.7m-14.85-.7-.706.7m14.85-6.3.706-.7m-14.85.7L4.223 8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.955 1.25h8.09c.433 0 .83 0 1.152.043.356.048.731.16 1.04.47.31.309.422.684.47 1.04.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152-.048.356-.16.731-.47 1.04-.309.31-.684.422-1.04.47-.323.043-.72.043-1.152.043H14.75v2.164l1.432.358a.75.75 0 0 1-.364 1.456l-1.068-.267v1.954l1.432.357a.75.75 0 0 1-.364 1.456l-1.068-.267v.417a2.251 2.251 0 0 1-.321 4.331 2.75 2.75 0 1 1-4.858 0 2.25 2.25 0 0 1-.321-4.331v-1.792l-1.432-.358a.75.75 0 0 1 .364-1.456l1.068.268V9.085l-1.432-.358a.75.75 0 0 1 .364-1.456l1.068.267V6.75H7.955c-.433 0-.83 0-1.152-.043-.356-.048-.731-.16-1.04-.47-.31-.309-.422-.684-.47-1.04-.043-.323-.043-.72-.043-1.152v-.09c0-.433 0-.83.043-1.152.048-.356.16-.731.47-1.04.309-.31.684-.422 1.04-.47.323-.043.72-.043 1.152-.043Zm2.795 5.5v1.164l2.5.625V6.75h-2.5Zm2.5 3.336-2.5-.625v1.954l2.5.625v-1.954Zm0 3.5-2.5-.625v1.289h2.5v-.664ZM12 18.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm2-1.5a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5h4ZM6.823 2.823Zm.003-.001-.003.001-.001.003a.706.706 0 0 0-.042.177c-.028.21-.03.504-.03.997s.002.787.03.997a.706.706 0 0 0 .042.177l.001.003.003.001a.706.706 0 0 0 .177.042c.21.028.504.03.997.03h8c.493 0 .787-.002.997-.03a.704.704 0 0 0 .177-.042l.003-.001.001-.003a.703.703 0 0 0 .042-.177c.028-.21.03-.504.03-.997s-.002-.787-.03-.997a.703.703 0 0 0-.042-.177l-.001-.003-.003-.001a.704.704 0 0 0-.177-.042c-.21-.028-.504-.03-.997-.03H8c-.493 0-.787.002-.997.03a.706.706 0 0 0-.177.042Zm10.35.001Zm0 0ZM6.824 5.177ZM3.69 7.472a.75.75 0 0 1 1.06-.005l.707.7a.75.75 0 1 1-1.055 1.066l-.707-.7a.75.75 0 0 1-.005-1.06Zm16.622 0a.75.75 0 0 1-.005 1.06l-.707.7a.75.75 0 1 1-1.055-1.065l.707-.7a.75.75 0 0 1 1.06.005ZM19.25 11.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Zm-18 .001a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm4.212 2.272a.75.75 0 0 1-.006 1.061l-.707.7a.75.75 0 0 1-1.055-1.066l.707-.7a.75.75 0 0 1 1.06.005Zm13.076 0a.75.75 0 0 1 1.06-.005l.708.7a.75.75 0 0 1-1.055 1.066l-.707-.7a.75.75 0 0 1-.006-1.06Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14 20a2 2 0 1 1-3.323-1.5h-.427a1.75 1.75 0 0 1-1-3.186V6H8c-.943 0-1.414 0-1.707-.293C6 5.414 6 4.943 6 4c0-.943 0-1.414.293-1.707C6.586 2 7.057 2 8 2h8c.943 0 1.414 0 1.707.293C18 2.586 18 3.057 18 4c0 .943 0 1.414-.293 1.707C17.414 6 16.943 6 16 6h-1.25v9.314a1.75 1.75 0 0 1-1 3.186h-.427c.415.366.677.903.677 1.5Zm-.75-14h-2.5v9h2.5V6Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M7.273 7.818a.75.75 0 0 1 .91-.545l8 2a.75.75 0 0 1-.365 1.455l-8-2a.75.75 0 0 1-.545-.91Zm0 3.5a.75.75 0 0 1 .91-.545l8 2a.75.75 0 0 1-.365 1.455l-8-2a.75.75 0 0 1-.545-.91ZM20.311 7.472a.75.75 0 0 1-.005 1.061l-.707.7a.75.75 0 1 1-1.055-1.066l.707-.7a.75.75 0 0 1 1.06.005Zm-16.622 0a.75.75 0 0 1 1.06-.005l.707.7a.75.75 0 1 1-1.055 1.066l-.707-.7a.75.75 0 0 1-.005-1.06ZM22 12.25h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5Zm-20.75-.748a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm4.212 2.271a.75.75 0 0 1-.006 1.061l-.707.7a.75.75 0 1 1-1.055-1.066l.707-.7a.75.75 0 0 1 1.06.005Zm13.076 0a.75.75 0 0 1 1.06-.005l.708.7a.75.75 0 1 1-1.055 1.066l-.707-.7a.75.75 0 0 1-.006-1.06Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14 20a2 2 0 1 1-3.323-1.5h-.427a1.75 1.75 0 0 1-1-3.186V6H8c-.943 0-1.414 0-1.707-.293C6 5.414 6 4.943 6 4c0-.943 0-1.414.293-1.707C6.586 2 7.057 2 8 2h8c.943 0 1.414 0 1.707.293C18 2.586 18 3.057 18 4c0 .943 0 1.414-.293 1.707C17.414 6 16.943 6 16 6h-1.25v9.314a1.75 1.75 0 0 1-1 3.186h-.427c.415.366.677.903.677 1.5Zm-.75-14h-2.5v9h2.5V6Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M7.273 7.818a.75.75 0 0 1 .91-.545l8 2a.75.75 0 0 1-.365 1.455l-8-2a.75.75 0 0 1-.545-.91Zm0 3.5a.75.75 0 0 1 .91-.545l8 2a.75.75 0 0 1-.365 1.455l-8-2a.75.75 0 0 1-.545-.91ZM20.311 7.472a.75.75 0 0 1-.005 1.061l-.707.7a.75.75 0 1 1-1.055-1.066l.707-.7a.75.75 0 0 1 1.06.005Zm-16.622 0a.75.75 0 0 1 1.06-.005l.707.7a.75.75 0 1 1-1.055 1.066l-.707-.7a.75.75 0 0 1-.005-1.06ZM22 12.25h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5Zm-20.75-.748a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm4.212 2.271a.75.75 0 0 1-.006 1.061l-.707.7a.75.75 0 1 1-1.055-1.066l.707-.7a.75.75 0 0 1 1.06.005Zm13.076 0a.75.75 0 0 1 1.06-.005l.708.7a.75.75 0 1 1-1.055 1.066l-.707-.7a.75.75 0 0 1-.006-1.06Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ShockAbsorber