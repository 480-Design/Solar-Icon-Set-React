import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const BookBookmarkMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10 22c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8m-6 14c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-4" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224" stroke="#1C274D" strokeWidth={1.5} /><path d="M7 16V9m0-6.5V5M13 16v3.53c0 .276 0 .414-.095.47-.095.056-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062-.047 0-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z" stroke="#1C274D" strokeWidth={1.5} /><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224" stroke="#1C274D" strokeWidth={1.5} /><path opacity={0.5} d="M7 16V2.5M13 16v3.53c0 .276 0 .414-.095.47-.095.056-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062-.047 0-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z" stroke="#1C274D" strokeWidth={1.5} /><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224" stroke="#1C274D" strokeWidth={1.5} /><path d="M7 16V2.5M13 16v3.53c0 .276 0 .414-.095.47-.095.056-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062-.047 0-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08" stroke="#1C274D" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.945 1.25h4.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-4.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337v-8.11c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117ZM6.25 2.96c-.392.105-.645.253-.841.449-.277.277-.457.665-.556 1.4C4.752 5.562 4.75 6.564 4.75 8v7.926c.352-.246.75-.434 1.177-.548.104-.028.21-.05.323-.067V2.961Zm1.5-.183V15.25h11.5V8c0-1.435-.002-2.437-.103-3.192-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.4-.556-.755-.101-1.756-.103-3.191-.103h-4c-.908 0-1.642 0-2.25.027Zm11.5 13.973h-5.5v2.808c0 .111 0 .27-.02.406a.936.936 0 0 1-.445.683.958.958 0 0 1-.783.072c-.13-.04-.272-.109-.378-.159l-.025-.012L11 20.026l-1.1.522-.024.012c-.106.05-.248.118-.378.159a.957.957 0 0 1-.783-.072.937.937 0 0 1-.444-.683c-.021-.136-.021-.295-.021-.406V16.75h-.352c-.978 0-1.32.006-1.583.077a2.25 2.25 0 0 0-1.538 1.422c.015.354.039.665.076.943.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h4c1.435 0 2.436-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.083-.615.099-1.395.102-2.441Zm-9.5 0v2.21l.75-.357.008-.004a1.13 1.13 0 0 1 .492-.13 1.13 1.13 0 0 1 .5.134l.75.356V16.75h-2.5Z" fill="#1C274D" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5.655 2.227c-.433.113-.711.273-.928.485-.305.3-.504.72-.613 1.513C4.002 5.042 4 6.124 4 7.675v8.57a4.172 4.172 0 0 1 1.299-.593 3.29 3.29 0 0 1 .356-.072V2.227ZM7.31 15.514H20V7.676c0-1.552-.002-2.634-.114-3.451-.109-.793-.308-1.213-.613-1.513-.306-.299-.734-.494-1.544-.6-.834-.11-1.938-.112-3.522-.112H9.793c-1.002 0-1.812 0-2.483.029v13.485ZM8.69 17.135H7.474c-1.08 0-1.457.007-1.747.083a2.464 2.464 0 0 0-1.697 1.538c.016.382.043.719.084 1.019.109.793.308 1.213.613 1.513.306.299.734.494 1.544.6.834.11 1.938.112 3.522.112h4.414c1.584 0 2.689-.002 3.522-.111.81-.107 1.239-.302 1.544-.601.305-.3.504-.72.613-1.513.092-.666.11-1.51.113-2.64h-6.895v3.007c0 .298 0 .447-.105.507s-.248-.007-.534-.14l-1.37-.638c-.098-.045-.146-.067-.198-.067-.052 0-.1.022-.198.067l-1.37.638c-.287.133-.43.2-.535.14-.104-.06-.104-.21-.104-.507v-3.007Z" fill="#1C274D" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.31 16.23H20V7.977c0-1.634-.002-2.774-.114-3.634-.109-.835-.308-1.278-.613-1.593-.306-.315-.734-.52-1.544-.633C16.895 2.002 15.791 2 14.207 2H9.793c-1.002 0-1.812 0-2.483.03v14.2ZM5.655 2.24c-.433.119-.711.287-.928.51-.305.316-.504.758-.613 1.593-.112.86-.114 2-.114 3.634V17c.389-.28.827-.494 1.299-.624a3.17 3.17 0 0 1 .356-.076V2.24Z" fill="#1C274D" /><path opacity={0.5} d="M6.271 2.115c-.81.11-1.238.31-1.544.618-.305.308-.504.74-.613 1.557C4.002 5.13 4 6.245 4 7.842V19.7c0-.131.024-.263.097-.46.127-.344.181-.397.291-.505.326-.32.772-.556 1.285-.667.29-.062.67-.068 1.753-.068H8v2.028c0 .277 0 .416.095.472.095.056.224-.006.484-.13l1.242-.593c.088-.042.132-.063.179-.063.047 0 .091.02.179.063l1.242.593c.26.124.39.186.484.13.095-.056.095-.195.095-.472V18h8V7.842c0-1.597-.002-2.711-.114-3.552-.109-.816-.308-1.249-.613-1.557-.306-.308-.734-.508-1.544-.618C16.895 2.002 15.791 2 14.207 2H9.793c-1.584 0-2.688.002-3.522.115Z" fill="#1C274D" /><path d="M8 18h-.574c-1.084 0-1.462.006-1.753.068-.513.11-.96.347-1.285.667-.11.108-.164.161-.291.505-.127.343-.107.489-.066.78l.022.15c.11.653.31.998.616 1.244.307.246.737.407 1.55.494.837.09 1.946.092 3.536.092h4.43c1.59 0 2.7-.001 3.536-.092.813-.087 1.243-.248 1.55-.494.306-.246.506-.591.616-1.243.091-.548.11-1.241.113-2.171h-8v2.028c0 .277 0 .416-.095.472-.095.056-.224-.006-.484-.13l-1.242-.593c-.088-.042-.132-.063-.179-.063-.047 0-.091.02-.179.063l-1.242.593c-.26.124-.39.186-.484.13C8 20.444 8 20.305 8 20.028V18Z" fill="#1C274D" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default BookBookmarkMinimalistic