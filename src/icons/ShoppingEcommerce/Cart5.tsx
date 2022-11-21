import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Cart5 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20.016 16.257c-.487 2.273-.73 3.409-1.555 4.076-.825.667-1.987.667-4.311.667h-4.3c-2.324 0-3.486 0-4.31-.667-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114.67.83.643 1.972.288 3.886" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M16 12h-4m-3 0H8M10 15h4M18 9l-3-6M6 9l3-6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.555 14.257c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076-.825.667-1.987.667-4.311.667h-4.3c-2.324 0-3.486 0-4.31-.667-.826-.667-1.07-1.803-1.556-4.076l-.429-2Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M8 12h8M10 15h4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path opacity={0.6} d="m18 9-3-6M6 9l3-6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.555 14.257c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076-.825.667-1.987.667-4.311.667h-4.3c-2.324 0-3.486 0-4.31-.667-.826-.667-1.07-1.803-1.556-4.076l-.429-2Z" stroke="currentColor" strokeWidth={1.5} /><path d="M8 12h8M10 15h4M18 9l-3-6M6 9l3-6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 1 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM10 14.25a.75.75 0 0 0 0 1.5h4a.75.75 0 1 0 0-1.5h-4Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M14.665 2.33a.75.75 0 0 1 1.006.335l1.813 3.626c.428.022.817.055 1.17.106 1.056.151 1.93.477 2.551 1.245.621.769.757 1.691.684 2.755-.07 1.031-.35 2.332-.698 3.957l-.451 2.107c-.235 1.097-.426 1.986-.666 2.68-.25.725-.58 1.32-1.142 1.775-.562.455-1.214.652-1.974.745-.73.089-1.64.089-2.76.089H9.802c-1.122 0-2.031 0-2.761-.089-.76-.093-1.412-.29-1.974-.745-.563-.455-.892-1.05-1.142-1.774-.24-.695-.43-1.584-.666-2.68l-.451-2.107c-.348-1.626-.627-2.927-.698-3.958-.073-1.064.063-1.986.684-2.755.62-.768 1.494-1.094 2.55-1.245.353-.05.743-.084 1.17-.106L8.33 2.665a.75.75 0 0 1 1.342.67L8.212 6.252c.364-.002.747-.002 1.149-.002h5.278c.402 0 .785 0 1.149.002l-1.459-2.917a.75.75 0 0 1 .335-1.006ZM5.732 7.858l-.403.806a.75.75 0 1 0 1.342.67l.787-1.574c.57-.01 1.22-.011 1.964-.011h5.156c.744 0 1.394 0 1.964.01l.787 1.575a.75.75 0 0 0 1.342-.67l-.403-.806.174.023c.884.127 1.317.358 1.597.703.28.346.414.819.353 1.71-.062.91-.316 2.106-.68 3.805l-.43 2c-.247 1.155-.42 1.954-.626 2.552-.2.58-.404.886-.667 1.098-.262.212-.605.348-1.212.422-.629.077-1.447.078-2.628.078H9.85c-1.18 0-1.998-.001-2.627-.078-.608-.074-.95-.21-1.212-.422-.263-.212-.468-.519-.667-1.098-.207-.598-.38-1.397-.627-2.552l-.429-2c-.364-1.7-.618-2.894-.68-3.805-.061-.891.074-1.364.353-1.71.28-.345.713-.576 1.597-.703l.174-.023Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.665 2.33a.75.75 0 0 1 1.006.335l2.201 4.402c1.353.104 2.202.37 2.75 1.047.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076-.825.667-1.987.667-4.311.667h-4.3c-2.324 0-3.486 0-4.31-.667-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.029-.177-6.143.548-.678 1.397-.943 2.75-1.047l2.201-4.402a.75.75 0 0 1 1.342.67l-1.835 3.67C8.319 7 8.846 7 9.422 7h5.156c.576 0 1.103 0 1.586.005l-1.835-3.67a.75.75 0 0 1 .336-1.006ZM7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM10 14.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3.555 14.257c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076-.825.667-1.987.667-4.311.667h-4.3c-2.324 0-3.486 0-4.31-.667-.826-.667-1.07-1.803-1.556-4.076l-.429-2Z" fill="currentColor" /><path d="M8 11.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8ZM9.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M14.665 2.33a.75.75 0 0 1 1.006.335l3 6a.75.75 0 1 1-1.342.67l-3-6a.75.75 0 0 1 .336-1.006ZM9.335 2.33a.75.75 0 0 0-1.006.335l-3 6a.75.75 0 1 0 1.342.67l3-6a.75.75 0 0 0-.336-1.006Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Cart5