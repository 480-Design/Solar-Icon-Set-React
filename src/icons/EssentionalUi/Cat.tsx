import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Cat = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m19.98 9.063.75.002v-.002h-.75Zm-15.96 0h-.75v.002l.75-.002ZM19.1 10.66l-.573.485.084.1.114.065.374-.65Zm-.272-1.265a.75.75 0 0 0-.888 1.21l.888-1.21ZM4.02 15h-.75.75Zm2.04-4.396a.75.75 0 1 0-.888-1.209l.888 1.21ZM12 5.656c-.772 0-1.21.041-1.556.084-.34.042-.512.072-.838.072v1.5c.44 0 .725-.047 1.02-.083.29-.036.666-.073 1.374-.073v-1.5Zm0 1.5c.708 0 1.085.037 1.373.073.296.036.58.083 1.021.083v-1.5c-.326 0-.498-.03-.838-.072A11.885 11.885 0 0 0 12 5.656v1.5Zm2.394.157c.213 0 .412-.061.555-.114.156-.058.317-.134.472-.214.305-.157.659-.367.983-.554.34-.195.66-.373.947-.503.308-.14.484-.178.554-.178v-1.5c-.408 0-.83.157-1.171.31a12.82 12.82 0 0 0-1.078.571c-.354.204-.658.385-.922.52-.13.067-.23.113-.306.141-.087.032-.087.02-.034.02v1.5Zm3.511-1.563c.345 0 .675.103.907.303.212.182.418.51.418 1.135h1.5c0-1-.352-1.766-.939-2.272-.566-.487-1.272-.666-1.886-.666v1.5Zm1.325 1.438v1.875h1.5V7.188h-1.5ZM9.606 5.813c.053 0 .053.011-.034-.02a2.92 2.92 0 0 1-.306-.141c-.264-.136-.568-.317-.922-.52-.34-.196-.716-.408-1.078-.571-.34-.154-.763-.311-1.171-.311v1.5c.07 0 .246.039.554.178.287.13.608.308.947.503.324.187.678.397.983.554.155.08.316.156.472.214.143.053.342.114.555.114v-1.5ZM6.095 4.25c-.614 0-1.32.179-1.886.666-.587.505-.939 1.272-.939 2.271h1.5c0-.625.206-.952.418-1.134.232-.2.563-.303.907-.303v-1.5ZM3.27 7.188v1.875h1.5V7.187h-1.5ZM12 20.75c1.431 0 3.54-.285 5.32-1.104 1.784-.82 3.41-2.273 3.41-4.646h-1.5c0 1.533-1.007 2.58-2.536 3.284-1.53.704-3.412.966-4.694.966v1.5Zm7.672-10.574a4.883 4.883 0 0 0-.844-.78l-.888 1.208c.24.177.433.359.587.54l1.145-.968ZM19.23 9.06c0 .198-.041.61-.138.895-.055.159-.086.155-.03.11a.419.419 0 0 1 .412-.055l-.749 1.3c.18.104.402.18.65.167.255-.013.466-.114.626-.242.287-.23.432-.566.51-.796.168-.491.218-1.08.22-1.374l-1.5-.005ZM12 19.25c-1.282 0-3.163-.262-4.694-.966C5.776 17.58 4.77 16.532 4.77 15h-1.5c0 2.373 1.626 3.826 3.41 4.646 1.78.82 3.889 1.104 5.32 1.104v-1.5ZM4.77 15c0-.788-.057-1.437.019-2.128.07-.645.253-1.218.684-1.727l-1.145-.97c-.68.805-.938 1.693-1.03 2.534-.087.797-.028 1.66-.028 2.291h1.5Zm.703-3.855c.154-.182.346-.364.587-.54l-.888-1.21c-.33.242-.609.503-.844.78l1.145.97ZM3.27 9.065c.001.294.051.883.219 1.374.078.23.223.566.51.796.16.128.371.229.625.242.249.012.47-.063.651-.167l-.749-1.3a.419.419 0 0 1 .411.055c.057.045.026.049-.029-.11a3.329 3.329 0 0 1-.138-.895l-1.5.005Z" fill="currentColor" /><path d="M12.826 16c0 .173-.361.313-.806.313-.446 0-.807-.14-.807-.313s.361-.313.807-.313c.445 0 .806.14.806.313ZM15.5 13.594c0 .431-.217.781-.484.781s-.484-.35-.484-.781c0-.432.217-.781.484-.781s.484.35.484.78ZM9.5 13.594c0 .431-.217.781-.484.781s-.484-.35-.484-.781c0-.432.217-.781.484-.781s.484.35.484.78Z" stroke="currentColor" strokeWidth={1.5} /><path d="M22 15.469c-.483-.313-2.58-1.094-3.387-1.094M20.387 17.969c-.484-.313-1.613-1.094-2.42-1.094M2 15.469c.484-.313 2.58-1.094 3.387-1.094M3.613 17.969c.484-.313 1.613-1.094 2.42-1.094" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19.1 10.66c1.111 1.314.88 2.921.88 4.34 0 3.906-5.267 5-7.98 5s-7.98-1.094-7.98-5c0-1.418-.231-3.026.88-4.34m14.2 0c-.195-.23-.43-.45-.716-.66m.715.66c.7.403.88-1.105.881-1.598V7.188C19.98 5.563 18.863 5 17.905 5c-.957 0-2.873 1.563-3.511 1.563-.766 0-.914-.157-2.394-.157s-1.628.157-2.394.157C8.968 6.563 7.052 5 6.095 5c-.958 0-2.075.563-2.075 2.188v1.875c.002.492.18 2 .88 1.597m0 0c.195-.23.43-.45.716-.66" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M12.826 16c0 .173-.361.313-.806.313-.446 0-.807-.14-.807-.313s.361-.313.807-.313c.445 0 .806.14.806.313ZM15.5 13.594c0 .431-.217.781-.484.781s-.484-.35-.484-.781c0-.432.217-.781.484-.781s.484.35.484.78ZM9.5 13.594c0 .431-.217.781-.484.781s-.484-.35-.484-.781c0-.432.217-.781.484-.781s.484.35.484.78Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M22 15.469c-.483-.313-2.58-1.094-3.387-1.094M20.387 17.969c-.484-.313-1.613-1.094-2.42-1.094M2 15.469c.484-.313 2.58-1.094 3.387-1.094M3.613 17.969c.484-.313 1.613-1.094 2.42-1.094" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19.1 10.66c1.111 1.314.88 2.921.88 4.34 0 3.906-5.267 5-7.98 5s-7.98-1.094-7.98-5c0-1.418-.231-3.026.88-4.34m14.2 0c-.195-.23-.43-.45-.716-.66m.715.66c.7.403.88-1.105.881-1.598V7.188C19.98 5.563 18.863 5 17.905 5c-.957 0-2.873 1.563-3.511 1.563-.766 0-.914-.157-2.394-.157s-1.628.157-2.394.157C8.968 6.563 7.052 5 6.095 5c-.958 0-2.075.563-2.075 2.188v1.875c.002.492.18 2 .88 1.597m0 0c.195-.23.43-.45.716-.66" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M12.826 16c0 .173-.361.313-.807.313-.445 0-.806-.14-.806-.313s.361-.313.806-.313c.446 0 .807.14.807.313ZM15.5 13.594c0 .431-.217.781-.484.781s-.484-.35-.484-.781c0-.432.217-.781.484-.781s.484.35.484.78ZM9.5 13.594c0 .431-.217.781-.484.781s-.484-.35-.484-.781c0-.432.217-.781.484-.781s.484.35.484.78Z" stroke="currentColor" strokeWidth={1.5} /><path d="M22 15.469c-.483-.313-2.58-1.094-3.387-1.094M20.387 17.969c-.484-.313-1.613-1.094-2.42-1.094M2 15.469c.484-.313 2.58-1.094 3.387-1.094M3.613 17.969c.484-.313 1.613-1.094 2.42-1.094" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.02 14.937c-.292 0-.59.045-.842.143a1.294 1.294 0 0 0-.408.245.916.916 0 0 0-.307.675c0 .325.173.552.307.674.133.123.285.198.408.246.253.098.55.142.842.142.29 0 .588-.044.84-.142.125-.048.276-.123.41-.246a.915.915 0 0 0 .306-.674.915.915 0 0 0-.307-.675 1.295 1.295 0 0 0-.408-.245 2.376 2.376 0 0 0-.841-.143Z" fill="currentColor" /><path d="M14.037 12.646c.164-.266.49-.584.98-.584.488 0 .814.318.979.584.172.278.254.615.254.948 0 .332-.082.67-.254.947-.165.266-.49.584-.98.584-.489 0-.815-.318-.98-.584a1.811 1.811 0 0 1-.254-.947c0-.333.082-.67.255-.948ZM9.016 12.063c-.488 0-.814.317-.98.583a1.811 1.811 0 0 0-.254.948c0 .332.082.67.255.947.165.266.49.584.98.584.488 0 .814-.318.98-.584.171-.278.253-.615.253-.947 0-.333-.082-.67-.254-.948-.165-.266-.49-.584-.98-.584Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M6.095 4.25c-.614 0-1.32.179-1.886.666-.587.505-.939 1.272-.939 2.271v1.878c.001.294.051.883.219 1.374.055.161.142.374.289.567a4.924 4.924 0 0 0-.48 1.704c-.051.467-.052.958-.044 1.411-.66.23-1.345.514-1.66.718a.75.75 0 0 0 .813 1.26c.116-.075.46-.233.912-.405.069.479.208.915.403 1.312a21.329 21.329 0 0 0-.516.333.75.75 0 1 0 .814 1.26l.131-.086c.131-.085.282-.184.446-.284.59.602 1.322 1.067 2.082 1.417 1.781.82 3.89 1.104 5.321 1.104 1.431 0 3.54-.285 5.321-1.104.76-.35 1.493-.815 2.082-1.417.164.1.315.199.446.284l.131.086a.75.75 0 0 0 .814-1.26l-.113-.074c-.11-.072-.247-.162-.403-.259.195-.396.335-.833.404-1.312.452.172.795.33.912.405a.75.75 0 0 0 .813-1.26c-.315-.204-1-.488-1.661-.718a11.31 11.31 0 0 0-.044-1.412 4.922 4.922 0 0 0-.48-1.703c.147-.193.234-.406.29-.567a4.79 4.79 0 0 0 .218-1.374V7.188c0-1-.352-1.766-.939-2.272-.565-.487-1.272-.666-1.886-.666-.408 0-.83.157-1.171.31a12.82 12.82 0 0 0-1.078.571l-.213.123-.002.001c-.264.153-.498.29-.707.397-.13.066-.23.112-.306.14a.696.696 0 0 1-.062.02 4.701 4.701 0 0 1-.648-.052l-.162-.02A11.885 11.885 0 0 0 12 5.656c-.772 0-1.21.041-1.556.084l-.162.02a4.7 4.7 0 0 1-.648.052.703.703 0 0 1-.062-.02 2.92 2.92 0 0 1-.306-.14 17.37 17.37 0 0 1-.707-.397l-.215-.124a12.82 12.82 0 0 0-1.077-.57c-.341-.154-.764-.311-1.172-.311Zm.067 13.364c.334.252.719.474 1.144.67 1.53.704 3.412.966 4.694.966s3.163-.262 4.694-.966c.425-.196.81-.418 1.144-.67a.75.75 0 0 1 .13-1.489c.327 0 .662.082.972.195.159-.332.256-.695.283-1.093a2.999 2.999 0 0 0-.61-.102.75.75 0 0 1 0-1.5c.195 0 .415.03.637.072 0-.276-.009-.547-.039-.825-.07-.645-.253-1.218-.684-1.727a3.39 3.39 0 0 0-.587-.54.75.75 0 1 1 .888-1.21c.12.088.232.178.338.27.044-.228.064-.467.064-.604V7.188c0-.626-.206-.953-.418-1.135-.232-.2-.562-.303-.907-.303-.07 0-.246.039-.554.178-.287.13-.608.308-.947.503a93.24 93.24 0 0 0-.193.112c-.268.155-.545.316-.79.442-.155.08-.316.156-.471.214a1.625 1.625 0 0 1-.556.114c-.372 0-.632-.034-.883-.067l-.137-.017A10.404 10.404 0 0 0 12 7.156c-.708 0-1.085.037-1.373.073l-.138.017c-.25.033-.511.066-.883.066-.213 0-.412-.06-.555-.113a4.362 4.362 0 0 1-.472-.214c-.245-.126-.522-.287-.79-.442l-.193-.112c-.339-.195-.66-.374-.947-.503-.308-.14-.484-.178-.554-.178-.344 0-.675.103-.907.303-.212.182-.418.51-.418 1.135V9.06c0 .137.02.376.064.604.107-.092.22-.182.338-.27a.75.75 0 0 1 .888 1.21c-.24.176-.433.357-.587.54-.43.51-.614 1.082-.684 1.727-.03.278-.04.55-.04.825.223-.043.443-.072.638-.072a.75.75 0 0 1 0 1.5c-.106 0-.312.03-.61.102.027.398.125.761.283 1.093a2.88 2.88 0 0 1 .972-.195.75.75 0 0 1 .13 1.489Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.75 6.406c-1.48 0-1.628.157-2.394.157C8.718 6.563 6.802 5 5.845 5c-.958 0-2.075.563-2.075 2.188v1.875c.002.492.18 2 .88 1.597-.827.978-.91 2.119-.899 3.223-.223.064-.45.137-.671.212-.684.234-1.41.532-1.737.744a.75.75 0 0 0 .814 1.26c.156-.101.721-.35 1.408-.585l.228-.075c.046.433.161.83.332 1.19l-.024.013c-.41.216-.79.465-1.032.623l-.113.074a.75.75 0 1 0 .814 1.26l.131-.086c.245-.16.559-.365.901-.545.08-.043.157-.081.231-.116C6.763 19.475 9.87 20 11.75 20s4.987-.525 6.717-2.148c.074.035.15.073.231.116.342.18.656.385.901.545l.131.086a.75.75 0 0 0 .814-1.26l-.113-.074a13.008 13.008 0 0 0-1.032-.623l-.024-.013c.171-.36.286-.757.332-1.19l.228.075c.687.235 1.252.484 1.409.585a.75.75 0 0 0 .813-1.26c-.327-.212-1.053-.51-1.736-.744-.221-.075-.449-.148-.672-.213.012-1.104-.072-2.244-.9-3.222.7.403.88-1.105.881-1.598V7.188C19.73 5.563 18.613 5 17.655 5c-.957 0-2.873 1.563-3.51 1.563-.767 0-.915-.157-2.395-.157Zm-.675 9.194c.202-.069.441-.1.675-.1.234 0 .473.031.676.1.1.034.22.088.328.174a.619.619 0 0 1 .246.476c0 .23-.139.39-.246.476-.107.086-.229.14-.328.174-.203.069-.442.1-.676.1-.234 0-.473-.031-.675-.1a1.078 1.078 0 0 1-.329-.174.619.619 0 0 1-.246-.476c0-.23.139-.39.246-.476.107-.086.23-.14.329-.174Zm2.845-3.1c.137-.228.406-.5.81-.5s.674.272.81.5c.142.239.21.527.21.813 0 .285-.068.573-.21.811-.136.229-.406.501-.81.501s-.673-.272-.81-.5a1.596 1.596 0 0 1-.21-.813c0-.285.068-.573.21-.811Zm-5.96 0c.137-.228.406-.5.81-.5s.674.272.81.5c.142.239.21.527.21.813 0 .285-.068.573-.21.811-.136.229-.406.501-.81.501s-.673-.272-.81-.5a1.596 1.596 0 0 1-.21-.813c0-.285.068-.573.21-.811Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M9.606 5.563c.766 0 .914-.157 2.394-.157s1.628.157 2.394.157c.638 0 2.554-1.563 3.511-1.563.958 0 2.075.563 2.075 2.188v1.875c-.002.492-.18 2-.88 1.597 1.111 1.314.88 2.921.88 4.34 0 3.906-5.267 5-7.98 5s-7.98-1.094-7.98-5c0-1.418-.231-3.026.88-4.34-.7.403-.878-1.105-.88-1.598V6.188C4.02 4.563 5.137 4 6.095 4c.957 0 2.873 1.563 3.511 1.563Z" fill="currentColor" /><path d="M9.016 11.063c-.489 0-.815.317-.98.583a1.811 1.811 0 0 0-.254.948c0 .332.082.67.254.947.165.266.491.584.98.584.49 0 .815-.318.98-.584.172-.278.254-.615.254-.947 0-.333-.082-.67-.254-.948-.165-.266-.49-.584-.98-.584ZM14.037 11.646c.164-.266.49-.584.98-.584.488 0 .814.318.979.584.172.278.254.615.254.948 0 .332-.082.67-.254.947-.165.266-.49.584-.98.584-.489 0-.815-.318-.98-.584a1.81 1.81 0 0 1-.254-.947c0-.333.082-.67.255-.948Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.178 14.08c.252-.098.55-.143.841-.143.292 0 .59.045.842.143.123.048.275.123.408.245.134.123.307.35.307.675a.915.915 0 0 1-.307.675 1.294 1.294 0 0 1-.408.245c-.253.098-.55.143-.842.143-.29 0-.588-.045-.84-.143a1.295 1.295 0 0 1-.41-.245.915.915 0 0 1-.306-.675c0-.325.173-.552.307-.675.133-.122.285-.197.408-.245Z" fill="currentColor" /><path d="M17.863 13.375a.75.75 0 0 1 .75-.75c.296 0 .65.067.981.149.345.085.72.199 1.076.321.684.234 1.41.532 1.737.744a.75.75 0 0 1-.813 1.26c-.157-.101-.722-.35-1.409-.585-.328-.112-.659-.212-.95-.284a3.053 3.053 0 0 0-.622-.105.75.75 0 0 1-.75-.75ZM17.968 15.125a.75.75 0 1 0 0 1.5c.206 0 .55.115.98.343.342.18.656.385.901.545l.131.086a.75.75 0 0 0 .814-1.26l-.113-.074a13.008 13.008 0 0 0-1.032-.623c-.457-.242-1.08-.517-1.681-.517ZM3.815 14.514c-.687.235-1.252.484-1.408.585a.75.75 0 0 1-.814-1.26c.328-.212 1.053-.51 1.737-.744.357-.122.732-.237 1.077-.321.33-.082.684-.149.98-.149a.75.75 0 0 1 0 1.5c-.107 0-.317.03-.622.105-.29.072-.621.172-.95.284ZM4.02 17.599l.131-.086c.246-.16.56-.365.901-.545.431-.228.775-.343.98-.343a.75.75 0 0 0 0-1.5c-.6 0-1.224.275-1.68.517-.41.216-.79.465-1.033.623l-.113.074a.75.75 0 0 0 .814 1.26Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Cat