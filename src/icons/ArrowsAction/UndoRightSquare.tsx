import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const UndoRightSquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m17.5 9.5.509.551a.75.75 0 0 0 0-1.102L17.5 9.5Zm-3 7.673a.75.75 0 1 0 0-1.5v1.5Zm1.259-10.3a.75.75 0 1 0-1.018 1.101l1.018-1.102Zm-1.018 4.153a.75.75 0 1 0 1.018 1.102l-1.018-1.102ZM6.5 12.962h-.75.75Zm.32 2.547.63-.407-.63.407Zm.594.594.407-.63-.407.63Zm-.594-5.689.63.408-.63-.408Zm.594-.593-.407-.63.407.63Zm2.548.43H17.5v-1.5H9.962v1.5Zm0 6.922H14.5v-1.5H9.962v1.5Zm8.047-8.224-2.25-2.077-1.018 1.102 2.25 2.077L18.01 8.95Zm-1.018 0-2.25 2.077 1.018 1.102 2.25-2.077L16.99 8.95ZM5.75 12.962c0 .668 0 1.225.044 1.675.045.461.145.89.397 1.28l1.26-.815c-.07-.106-.13-.267-.165-.613-.035-.359-.036-.828-.036-1.527h-1.5Zm4.212 2.711c-.7 0-1.169 0-1.527-.036-.347-.034-.507-.095-.614-.164l-.814 1.26c.39.251.818.35 1.28.397.45.044 1.006.043 1.675.043v-1.5Zm-3.771.243c.21.327.49.605.816.817l.814-1.26a1.249 1.249 0 0 1-.37-.371l-1.26.814Zm1.059-2.954c0-.7 0-1.169.036-1.527.035-.346.096-.507.164-.613l-1.26-.815c-.251.39-.35.819-.396 1.28-.045.45-.044 1.006-.044 1.675h1.5ZM9.962 8.75c-.67 0-1.226 0-1.675.044-.462.046-.89.145-1.28.397l.814 1.26c.107-.07.267-.13.614-.164.358-.036.827-.037 1.527-.037v-1.5ZM7.45 10.822c.096-.149.223-.275.371-.371l-.814-1.26a2.75 2.75 0 0 0-.816.816l1.26.815Z" fill="currentColor" /><path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="m17.5 9.5.509.551a.75.75 0 0 0 0-1.102L17.5 9.5Zm-3 7.673a.75.75 0 1 0 0-1.5v1.5Zm1.259-10.3a.75.75 0 1 0-1.018 1.101l1.018-1.102Zm-1.018 4.153a.75.75 0 1 0 1.018 1.102l-1.018-1.102ZM6.5 12.962h-.75.75Zm.32 2.547.63-.407-.63.407Zm.594.594.407-.63-.407.63Zm-.594-5.689.63.408-.63-.408Zm.594-.593-.407-.63.407.63Zm2.548.43H17.5v-1.5H9.962v1.5Zm0 6.922H14.5v-1.5H9.962v1.5Zm8.047-8.224-2.25-2.077-1.018 1.102 2.25 2.077L18.01 8.95Zm-1.018 0-2.25 2.077 1.018 1.102 2.25-2.077L16.99 8.95ZM5.75 12.962c0 .668 0 1.225.044 1.675.045.461.145.89.397 1.28l1.26-.815c-.07-.106-.13-.267-.165-.613-.035-.359-.036-.828-.036-1.527h-1.5Zm4.212 2.711c-.7 0-1.169 0-1.527-.036-.347-.034-.507-.095-.614-.164l-.814 1.26c.39.251.818.35 1.28.397.45.044 1.006.043 1.675.043v-1.5Zm-3.771.243c.21.327.49.605.816.817l.814-1.26a1.249 1.249 0 0 1-.37-.371l-1.26.814Zm1.059-2.954c0-.7 0-1.169.036-1.527.035-.346.096-.507.164-.613l-1.26-.815c-.251.39-.35.819-.396 1.28-.045.45-.044 1.006-.044 1.675h1.5ZM9.962 8.75c-.67 0-1.226 0-1.675.044-.462.046-.89.145-1.28.397l.814 1.26c.107-.07.267-.13.614-.164.358-.036.827-.037 1.527-.037v-1.5ZM7.45 10.822c.096-.149.223-.275.371-.371l-.814-1.26a2.75 2.75 0 0 0-.816.816l1.26.815Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth={1.5} /><path d="m17.5 9.5.509.551a.75.75 0 0 0 0-1.102L17.5 9.5Zm-3 7.673a.75.75 0 1 0 0-1.5v1.5Zm1.259-10.3a.75.75 0 1 0-1.018 1.101l1.018-1.102Zm-1.018 4.153a.75.75 0 1 0 1.018 1.102l-1.018-1.102ZM6.5 12.962h-.75.75Zm.32 2.547.63-.407-.63.407Zm.594.594.407-.63-.407.63Zm-.594-5.689.63.408-.63-.408Zm.594-.593-.407-.63.407.63Zm2.548.43H17.5v-1.5H9.962v1.5Zm0 6.922H14.5v-1.5H9.962v1.5Zm8.047-8.224-2.25-2.077-1.018 1.102 2.25 2.077L18.01 8.95Zm-1.018 0-2.25 2.077 1.018 1.102 2.25-2.077L16.99 8.95ZM5.75 12.962c0 .668 0 1.225.044 1.675.045.461.145.89.397 1.28l1.26-.815c-.07-.106-.13-.267-.165-.613-.035-.359-.036-.828-.036-1.527h-1.5Zm4.212 2.711c-.7 0-1.169 0-1.527-.036-.347-.034-.507-.095-.614-.164l-.814 1.26c.39.251.818.35 1.28.397.45.044 1.006.043 1.675.043v-1.5Zm-3.771.243c.21.327.49.605.816.817l.814-1.26a1.249 1.249 0 0 1-.37-.371l-1.26.814Zm1.059-2.954c0-.7 0-1.169.036-1.527.035-.346.096-.507.164-.613l-1.26-.815c-.251.39-.35.819-.396 1.28-.045.45-.044 1.006-.044 1.675h1.5ZM9.962 8.75c-.67 0-1.226 0-1.675.044-.462.046-.89.145-1.28.397l.814 1.26c.107-.07.267-.13.614-.164.358-.036.827-.037 1.527-.037v-1.5ZM7.45 10.822c.096-.149.223-.275.371-.371l-.814-1.26a2.75 2.75 0 0 0-.816.816l1.26.815Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.759 6.873a.75.75 0 1 0-1.018 1.102l.84.776H9.925c-.652 0-1.196 0-1.637.043-.462.046-.89.146-1.28.397a2.75 2.75 0 0 0-.816.817c-.252.389-.351.818-.397 1.28-.044.44-.044.985-.044 1.637V13c0 .652 0 1.196.044 1.637.045.462.145.89.397 1.28.21.327.49.605.816.816.39.252.818.351 1.28.397.44.044.985.044 1.637.044H14.5a.75.75 0 0 0 0-1.5H9.962c-.7 0-1.169-.001-1.527-.037-.347-.034-.507-.095-.614-.164a1.25 1.25 0 0 1-.37-.37c-.07-.107-.13-.268-.165-.614-.035-.358-.036-.828-.036-1.527s0-1.168.036-1.527c.035-.346.096-.507.164-.613a1.25 1.25 0 0 1 .371-.371c.107-.069.267-.13.614-.164.358-.035.827-.036 1.527-.036h5.62l-.84.776a.75.75 0 1 0 1.017 1.102l2.25-2.077a.75.75 0 0 0 0-1.102l-2.25-2.077Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.943 1.25c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19h-.114ZM3.995 3.995c.57-.57 1.34-.897 2.619-1.069 1.3-.174 3.008-.176 5.386-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.068 2.619.174 1.3.176 3.008.176 5.386s-.002 4.086-.176 5.386c-.172 1.279-.5 2.05-1.069 2.62-.57.569-1.34.896-2.619 1.068-1.3.174-3.008.176-5.386.176s-4.086-.002-5.386-.176c-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386s.002-4.086.176-5.386c.172-1.279.5-2.05 1.069-2.62Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.715 22 12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464ZM15.76 6.873a.75.75 0 1 0-1.018 1.102l.84.776H9.925c-.652 0-1.196 0-1.637.043-.462.046-.89.146-1.28.397a2.75 2.75 0 0 0-.816.817c-.252.389-.351.818-.397 1.28-.044.44-.044.985-.044 1.637V13c0 .652 0 1.196.044 1.637.045.462.145.89.397 1.28.21.327.49.605.816.816.39.252.818.351 1.28.397.44.044.985.044 1.637.044H14.5a.75.75 0 0 0 0-1.5H9.962c-.7 0-1.169-.001-1.527-.037-.347-.034-.507-.095-.614-.164a1.25 1.25 0 0 1-.37-.37c-.07-.107-.13-.268-.165-.614-.035-.358-.036-.828-.036-1.527s0-1.168.036-1.527c.035-.346.096-.507.164-.613a1.25 1.25 0 0 1 .371-.371c.107-.069.267-.13.614-.164.358-.035.827-.036 1.527-.036h5.62l-.84.776a.75.75 0 1 0 1.017 1.102l2.25-2.077a.75.75 0 0 0 0-1.102l-2.25-2.077Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M14.699 6.915a.75.75 0 0 1 1.06-.043l2.25 2.077a.75.75 0 0 1 0 1.102l-2.25 2.077a.75.75 0 0 1-1.018-1.102l.84-.776h-5.62c-.699 0-1.168.001-1.526.037-.347.034-.507.095-.614.164a1.249 1.249 0 0 0-.37.37c-.07.107-.13.268-.165.614-.035.358-.036.828-.036 1.527s0 1.168.036 1.527c.035.346.096.507.164.613.096.149.223.275.371.371.107.069.267.13.614.164.358.035.827.036 1.527.036H14.5a.75.75 0 0 1 0 1.5H9.924c-.652 0-1.196 0-1.637-.043-.462-.046-.89-.146-1.28-.397a2.75 2.75 0 0 1-.816-.817c-.252-.389-.352-.818-.397-1.28-.044-.44-.044-.985-.044-1.637v-.075c0-.652 0-1.196.044-1.637.046-.462.145-.89.397-1.28a2.75 2.75 0 0 1 .816-.816c.39-.252.818-.351 1.28-.397.44-.044.985-.044 1.637-.044h5.658l-.84-.776a.75.75 0 0 1-.043-1.06Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default UndoRightSquare