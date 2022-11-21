import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Body = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17.893 14v1.54c0 .701 0 1.052-.121 1.376-.12.324-.353.598-.818 1.145l-2.382 2.803c-.474.558-.711.837-1.041.987-.33.149-.71.149-1.469.149h-.124c-.76 0-1.139 0-1.469-.15-.33-.149-.567-.428-1.041-.986l-2.382-2.803c-.465-.547-.697-.82-.818-1.145-.12-.324-.12-.675-.12-1.376v-5.263c0-.685 0-1.027-.148-1.328-.147-.301-.423-.524-.975-.97l-.208-.167C3.595 6.858 3.004 6.38 3 5.69 2.996 5 3.52 4.566 4.568 3.7c.159-.132.316-.255.468-.364.573-.41 1.402-.863 1.986-1.166a1.581 1.581 0 0 1 1.394-.016l.264.124c.07.032.128.082.171.142 1.498 2.116 4.8 2.116 6.298 0a.437.437 0 0 1 .171-.142l.264-.124a1.581 1.581 0 0 1 1.394.016c.584.303 1.413.756 1.986 1.166.152.11.31.232.468.363C20.48 4.566 21.004 5 21 5.69c-.005.69-.596 1.168-1.777 2.122l-.208.167c-.552.446-.828.669-.975.97-.126.257-.144.545-.147 1.051" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.062 22h-.124c-.76 0-1.139 0-1.469-.15-.33-.149-.567-.428-1.041-.986l-2.382-2.803c-.465-.547-.697-.82-.818-1.145-.12-.324-.12-.675-.12-1.376v-5.263c0-.685 0-1.027-.148-1.328-.147-.301-.423-.524-.975-.97l-.208-.167C3.595 6.858 3.004 6.38 3 5.69 2.996 5 3.52 4.566 4.568 3.7c.159-.132.316-.255.468-.364.573-.41 1.402-.863 1.986-1.166a1.581 1.581 0 0 1 1.394-.016l.264.124c.07.032.128.082.171.142 1.498 2.116 4.8 2.116 6.298 0a.437.437 0 0 1 .171-.142l.264-.124a1.581 1.581 0 0 1 1.394.016c.584.303 1.413.756 1.986 1.166.152.11.31.232.468.363C20.48 4.566 21.004 5 21 5.69c-.005.69-.596 1.168-1.777 2.122l-.208.167c-.552.446-.828.669-.975.97-.147.3-.147.643-.147 1.328v5.263c0 .701 0 1.052-.121 1.376-.12.324-.353.598-.818 1.145l-2.382 2.803c-.474.558-.711.837-1.041.987-.33.149-.71.149-1.469.149Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.062 22h-.124c-.76 0-1.139 0-1.469-.15-.33-.149-.567-.428-1.041-.986l-2.382-2.803c-.465-.547-.697-.82-.818-1.145-.12-.324-.12-.675-.12-1.376v-5.263c0-.685 0-1.027-.148-1.328-.147-.301-.423-.524-.975-.97l-.208-.167C3.595 6.858 3.004 6.38 3 5.69 2.996 5 3.52 4.566 4.568 3.7c.159-.132.316-.255.468-.364.573-.41 1.402-.863 1.986-1.166a1.581 1.581 0 0 1 1.394-.016l.264.124c.07.032.128.082.171.142 1.498 2.116 4.8 2.116 6.298 0a.437.437 0 0 1 .171-.142l.264-.124a1.581 1.581 0 0 1 1.394.016c.584.303 1.413.756 1.986 1.166.152.11.31.232.468.363C20.48 4.566 21.004 5 21 5.69c-.005.69-.596 1.168-1.777 2.122l-.208.167c-.552.446-.828.669-.975.97-.147.3-.147.643-.147 1.328v5.263c0 .701 0 1.052-.121 1.376-.12.324-.353.598-.818 1.145l-2.382 2.803c-.474.558-.711.837-1.041.987-.33.149-.71.149-1.469.149Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.677 1.504a2.331 2.331 0 0 1 2.059-.029l.263.124c.183.086.344.218.464.388 1.2 1.693 3.875 1.693 5.074 0l.612.433.04.028m-.04-.028-.612-.433c.12-.17.28-.302.463-.388l.264-.124a2.331 2.331 0 0 1 2.059.03c.586.303 1.458.777 2.078 1.222.17.121.34.255.509.394l.044.037c.486.402.921.762 1.225 1.113.34.395.575.845.571 1.424-.004.6-.278 1.062-.643 1.463-.335.367-.816.755-1.37 1.202l-.25.203c-.61.491-.717.6-.773.715-.054.109-.071.243-.071 1v5.367c0 .598 0 1.079-.168 1.533-.168.45-.483.82-.88 1.287l-.07.082-2.381 2.803-.078.09c-.396.469-.739.873-1.226 1.094-.481.218-1.018.217-1.654.216h-.372c-.636.001-1.173.002-1.654-.216-.487-.22-.83-.625-1.227-1.093l-.077-.091-2.381-2.803-.07-.082c-.397-.467-.712-.837-.88-1.287-.169-.454-.168-.935-.168-1.533v-5.368c0-.756-.017-.89-.07-1-.057-.115-.165-.223-.773-.714l-.208-.168-.043-.035c-.554-.446-1.035-.835-1.37-1.202-.365-.4-.64-.863-.643-1.463-.004-.579.23-1.029.571-1.424.304-.351.739-.71 1.225-1.113l.044-.037c.169-.139.34-.273.509-.394.62-.445 1.492-.92 2.078-1.223m1.42 1.328a.832.832 0 0 0-.73.004c-.582.302-1.37.733-1.894 1.11a7.95 7.95 0 0 0-.427.331c-.544.45-.878.73-1.089.974-.182.211-.208.323-.207.435 0 .09.024.212.251.461.249.272.637.589 1.247 1.081l.208.168.095.076c.457.368.86.693 1.083 1.148.225.46.224.973.223 1.54v5.38c0 .755.011.946.074 1.114.064.172.187.333.687.922l2.381 2.802c.519.61.638.725.78.79.147.066.33.082 1.159.082h.124c.828 0 1.012-.016 1.16-.083.141-.064.26-.179.779-.789l2.381-2.802c.5-.59.623-.75.687-.922.063-.168.074-.36.074-1.114V10.16c-.001-.566-.002-1.078.223-1.54.222-.454.626-.78 1.083-1.147l.095-.076.207-.168c.61-.492 1-.809 1.248-1.08.227-.25.25-.371.251-.462 0-.112-.025-.224-.207-.435-.21-.244-.545-.523-1.09-.974a7.95 7.95 0 0 0-.426-.331c-.525-.377-1.312-.808-1.894-1.11a.832.832 0 0 0-.73-.004l-.192.09c-1.802 2.446-5.62 2.446-7.422 0l-.192-.09Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.062 22h-.124c-.76 0-1.139 0-1.469-.15-.33-.149-.567-.428-1.041-.986l-2.382-2.803c-.465-.547-.697-.82-.818-1.145-.12-.324-.12-.675-.12-1.376v-5.263c0-.685 0-1.027-.148-1.328-.147-.301-.423-.524-.975-.97l-.208-.167C3.595 6.858 3.004 6.38 3 5.69 2.996 5 3.52 4.566 4.568 3.7c.159-.132.316-.255.468-.364.573-.41 1.402-.863 1.986-1.166a1.581 1.581 0 0 1 1.394-.016l.264.124c.07.032.128.082.171.142 1.498 2.116 4.8 2.116 6.298 0a.437.437 0 0 1 .171-.142l.264-.124a1.581 1.581 0 0 1 1.394.016c.584.303 1.413.756 1.986 1.166.152.11.31.232.468.363C20.48 4.566 21.004 5 21 5.69c-.005.69-.596 1.168-1.777 2.122l-.208.167c-.552.446-.828.669-.975.97-.147.3-.147.643-.147 1.328v5.263c0 .701 0 1.052-.121 1.376-.12.324-.353.598-.818 1.145l-2.382 2.803c-.474.558-.711.837-1.041.987-.33.149-.71.149-1.469.149Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="m7.046 18.061 2.382 2.803 6.156-18.71-.264.124a.437.437 0 0 0-.171.142c-1.498 2.116-4.8 2.116-6.298 0a.438.438 0 0 0-.171-.142l-.264-.124a1.581 1.581 0 0 0-1.394.016c-.584.303-1.413.756-1.986 1.166a8.694 8.694 0 0 0-.468.363C3.52 4.566 2.996 5 3 5.69c.004.69.595 1.168 1.777 2.122l.208.167c.552.446.828.669.975.97.147.3.147.643.147 1.328v5.263c0 .701 0 1.052.121 1.376.12.324.353.598.818 1.145Z" fill="currentColor" /><path opacity={0.5} d="M11.938 22h.124c.76 0 1.139 0 1.469-.15.33-.149.567-.428 1.041-.986l2.382-2.803c.465-.547.697-.82.818-1.145.12-.324.12-.675.12-1.376v-5.263c0-.685 0-1.027.148-1.328.147-.301.423-.524.975-.97l.207-.167C20.404 6.858 20.995 6.38 21 5.69c.004-.69-.52-1.124-1.568-1.99a8.698 8.698 0 0 0-.468-.364c-.573-.41-1.402-.863-1.986-1.166a1.581 1.581 0 0 0-1.394-.016l-6.156 18.71c.474.558.711.837 1.041.987.33.149.71.149 1.469.149Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Body