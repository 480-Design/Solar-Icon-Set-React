import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Trellis = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19 22v-.5M5 22v-.5M12 21v-6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m2.879 20.121-.53.53.53-.53Zm-.877-4.12-.75.003.75-.004Zm19.12 4.12.53.53-.53-.53Zm.876-4.12.75.003-.75-.004ZM16 20.25H8v1.5h8v-1.5Zm-8 0c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556l-1.06 1.06c.601.603 1.36.861 2.26.983.878.118 1.998.116 3.391.116v-1.5Zm-6.748-4.246c.006 1.082.032 1.983.167 2.72.14.758.404 1.403.93 1.928l1.06-1.061c-.243-.244-.41-.572-.515-1.138-.108-.589-.136-1.364-.142-2.457l-1.5.008ZM16 21.75c1.393 0 2.513.002 3.392-.116.9-.122 1.658-.38 2.26-.982L20.59 19.59c-.277.277-.665.457-1.4.556-.755.101-1.756.103-3.191.103v1.5Zm5.248-5.754c-.006 1.093-.034 1.868-.142 2.457-.104.567-.272.895-.515 1.138l1.06 1.06c.526-.524.79-1.17.93-1.927.135-.737.161-1.638.167-2.72l-1.5-.008ZM3 15.75h18v-1.5H3v1.5Zm19.748.254A1.747 1.747 0 0 0 21 14.25v1.5c.14 0 .249.113.248.246l1.5.008Zm-19.996-.008c-.001-.133.108-.246.248-.246v-1.5c-.964 0-1.754.782-1.748 1.754l1.5-.008Z" fill="currentColor" /><path d="M20.5 15V6.138c0-.388 0-.582-.018-.715-.123-.916-.636-1.478-1.537-1.683-.13-.03-.402-.055-.945-.104-1.002-.091-2.183-.44-3.231-.821C13.275 2.27 12.529 2 12 2c-.529 0-1.275.271-2.769.815-1.048.381-2.23.73-3.231.82-.543.05-.814.075-.945.105-.9.205-1.414.767-1.537 1.683-.018.133-.018.327-.018.715V15" stroke="currentColor" strokeWidth={1.5} /><path d="M15 18h2M7 18h2M14.5 11l-1 1m0-4-3 3m0-4-1 1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M19 22v-.5M5 22v-.5M12 21v-6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m2.879 20.121-.53.53.53-.53Zm-.877-4.12-.75.003.75-.004Zm19.12 4.12.53.53-.53-.53Zm.876-4.12.75.003-.75-.004ZM16 20.25H8v1.5h8v-1.5Zm-8 0c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556l-1.06 1.06c.601.603 1.36.861 2.26.983.878.118 1.998.116 3.391.116v-1.5Zm-6.748-4.246c.006 1.082.032 1.983.167 2.72.14.758.404 1.403.93 1.928l1.06-1.061c-.243-.244-.41-.572-.515-1.138-.108-.589-.136-1.364-.142-2.457l-1.5.008ZM16 21.75c1.393 0 2.513.002 3.392-.116.9-.122 1.658-.38 2.26-.982L20.59 19.59c-.277.277-.665.457-1.4.556-.755.101-1.756.103-3.191.103v1.5Zm5.248-5.754c-.006 1.093-.034 1.868-.142 2.457-.104.567-.272.895-.515 1.138l1.06 1.06c.526-.524.79-1.17.93-1.927.135-.737.161-1.638.167-2.72l-1.5-.008ZM3 15.75h18v-1.5H3v1.5Zm19.748.254A1.747 1.747 0 0 0 21 14.25v1.5c.14 0 .249.113.248.246l1.5.008Zm-19.996-.008c-.001-.133.108-.246.248-.246v-1.5c-.964 0-1.754.782-1.748 1.754l1.5-.008Z" fill="currentColor" /><path d="M20.5 15V6.138c0-.388 0-.582-.018-.715-.123-.916-.636-1.478-1.537-1.683-.13-.03-.402-.055-.945-.104-1.002-.091-2.183-.44-3.231-.821C13.275 2.27 12.529 2 12 2c-.529 0-1.275.271-2.769.815-1.048.381-2.23.73-3.231.82-.543.05-.814.075-.945.105-.9.205-1.414.767-1.537 1.683-.018.133-.018.327-.018.715V15" stroke="currentColor" strokeWidth={1.5} /><path d="M15 18h2M7 18h2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m14.5 11-1 1m0-4-3 3m0-4-1 1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19 22v-.5M5 22v-.5M12 21v-6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m2.879 20.121-.53.53.53-.53Zm-.877-4.12-.75.003.75-.004Zm19.12 4.12.53.53-.53-.53Zm.877-4.12.75.003-.75-.004ZM16 20.25H8v1.5h8v-1.5Zm-8 0c-1.435 0-2.436-.002-3.192-.103-.733-.099-1.122-.28-1.399-.556l-1.06 1.06c.601.603 1.36.861 2.26.983.878.118 1.998.116 3.391.116v-1.5Zm-6.748-4.246c.006 1.082.032 1.983.167 2.72.14.758.405 1.403.93 1.928l1.06-1.061c-.243-.244-.41-.572-.514-1.138-.109-.589-.137-1.364-.143-2.457l-1.5.008ZM16 21.75c1.393 0 2.513.002 3.392-.116.9-.122 1.658-.38 2.26-.982l-1.06-1.061c-.277.277-.666.457-1.4.556-.755.101-1.756.103-3.192.103v1.5Zm5.248-5.754c-.006 1.093-.034 1.868-.142 2.457-.104.567-.271.895-.515 1.138l1.06 1.06c.526-.524.791-1.17.93-1.927.136-.737.162-1.638.168-2.72l-1.5-.008ZM3 15.75h18v-1.5H3v1.5Zm19.748.254A1.747 1.747 0 0 0 21 14.25v1.5c.14 0 .25.113.248.246l1.5.008Zm-19.996-.008c0-.133.108-.246.248-.246v-1.5c-.964 0-1.753.782-1.748 1.754l1.5-.008Z" fill="currentColor" /><path d="M20.5 15V6.138c0-.388 0-.582-.018-.715-.123-.916-.636-1.478-1.537-1.683-.13-.03-.402-.055-.945-.104-1.002-.091-2.183-.44-3.231-.821C13.275 2.27 12.529 2 12 2c-.529 0-1.275.271-2.769.815-1.048.381-2.23.73-3.231.82-.543.05-.814.075-.945.105-.9.205-1.414.767-1.537 1.683-.018.133-.018.327-.018.715V15" stroke="currentColor" strokeWidth={1.5} /><path d="M15 18h2M7 18h2M14.5 11l-1 1m0-4-3 3m0-4-1 1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.2 2.92c-.418.13-.958.325-1.712.6-1.066.387-2.32.763-3.42.863-.274.025-.47.043-.616.058a5.279 5.279 0 0 0-.213.027l-.013.002h-.004c-.334.077-.54.205-.673.35-.133.146-.242.363-.288.703-.009.07-.01.196-.01.615v8.112h15.5V6.138c0-.419-.003-.546-.012-.615-.046-.34-.155-.557-.287-.702-.133-.146-.34-.274-.674-.35l-.004-.001-.012-.002a48.276 48.276 0 0 0-.83-.085c-1.1-.1-2.353-.476-3.42-.864a41.408 41.408 0 0 0-1.71-.599c-.424-.131-.655-.17-.802-.17-.147 0-.377.039-.8.17Zm10.05 11.348V6.072c0-.324 0-.565-.024-.749-.078-.576-.287-1.098-.667-1.514-.38-.416-.88-.671-1.447-.8-.181-.042-.494-.07-.944-.111a239.7 239.7 0 0 1-.1-.01c-.904-.081-2.012-.403-3.043-.778l-.02-.007c-.73-.266-1.304-.475-1.76-.616-.456-.14-.863-.237-1.245-.237-.381 0-.789.096-1.244.237-.457.141-1.031.35-1.761.616l-.02.007c-1.03.375-2.139.697-3.043.779l-.1.009c-.45.04-.762.07-.943.11-.567.13-1.068.385-1.448.801-.38.416-.589.938-.666 1.514a6.242 6.242 0 0 0-.025.749V14.268a1.746 1.746 0 0 0-1.498 1.736c.006 1.082.032 1.983.167 2.72.14.758.405 1.403.93 1.928.52.52 1.157.784 1.901.924V22a.75.75 0 0 0 1.5 0v-.276c.64.026 1.369.026 2.195.026h8.11c.826 0 1.556 0 2.195-.026V22a.75.75 0 0 0 1.5 0v-.424c.745-.14 1.382-.404 1.902-.924.525-.525.79-1.17.93-1.928.135-.737.16-1.638.166-2.72a1.746 1.746 0 0 0-1.498-1.736Zm-8.5 5.982H16c1.436 0 2.437-.002 3.192-.103.734-.099 1.122-.28 1.4-.556.243-.243.41-.571.514-1.138.108-.588.136-1.363.142-2.457A.247.247 0 0 0 21 15.75h-8.25v4.5Zm-1.5-4.5v4.5H8c-1.435 0-2.436-.002-3.192-.103-.733-.099-1.122-.28-1.399-.556-.243-.243-.41-.571-.514-1.138-.109-.588-.137-1.363-.143-2.457 0-.133.108-.246.248-.246h8.25Zm-.22-9.28a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 0 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0Zm3 1a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0Zm1 3a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 0 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0ZM6.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Zm8 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M20.5 14V6.137c0-.388 0-.582-.018-.714-.123-.916-.636-1.478-1.537-1.684-.13-.03-.402-.054-.945-.103-1.002-.091-2.183-.44-3.231-.822C13.275 2.271 12.529 2 12 2c-.529 0-1.275.271-2.769.814-1.048.382-2.23.73-3.231.822-.543.049-.814.074-.945.103-.9.206-1.414.768-1.537 1.684-.018.132-.018.326-.018.714V14h17Zm-9.47-7.53a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0Zm3 1a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0Zm1 3a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0ZM3 15h8.25v6H8c-.877 0-1.619 0-2.25-.026V22a.75.75 0 0 1-1.5 0v-1.19c-.58-.125-1.019-.336-1.371-.689-.768-.768-.865-1.946-.877-4.12A.997.997 0 0 1 3 15Zm3.25 3a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM16 21h-3.25v-6H21a.997.997 0 0 1 .998 1c-.012 2.175-.108 3.353-.876 4.121-.353.353-.791.564-1.372.69V22a.75.75 0 0 1-1.5 0v-1.026C17.619 21 16.877 21 16 21Zm-1-3.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M20.5 15V6.137c0-.388 0-.582-.018-.714-.123-.916-.636-1.478-1.537-1.684-.13-.03-.402-.054-.945-.103-1.002-.091-2.183-.44-3.231-.822C13.275 2.271 12.529 2 12 2c-.529 0-1.275.271-2.769.814-1.048.382-2.23.73-3.231.822-.543.049-.814.074-.945.103-.9.206-1.414.768-1.537 1.684-.018.132-.018.326-.018.714V15h7.75v6h1.5v-6h7.75Z" fill="currentColor" /><path d="M14.03 8.53a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 1 0 1.06 1.06l3-3ZM11.03 7.53a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06l1-1ZM15.03 11.53a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06l1-1Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3 15h8.25v6H8c-.877 0-1.619 0-2.25-.026V22a.75.75 0 0 1-1.5 0v-1.19c-.58-.125-1.019-.336-1.371-.689-.768-.768-.865-1.946-.877-4.12A.997.997 0 0 1 3 15Zm3.25 3a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM16 21h-3.25v-6H21a.997.997 0 0 1 .998 1c-.012 2.175-.108 3.353-.876 4.121-.353.353-.791.564-1.372.69V22a.75.75 0 0 1-1.5 0v-1.026C17.619 21 16.877 21 16 21Zm-1-3.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Trellis