import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const StarFallMinimalistic2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M9.232 8.618c-1.968.445-2.952.667-3.186 1.42-.234.753.437 1.537 1.778 3.106l.347.406c.381.445.572.668.658.944.085.276.057.573-.001 1.168l-.052.541c-.203 2.094-.305 3.14.308 3.605.613.465 1.534.041 3.377-.807l.476-.22c.524-.24.786-.361 1.063-.361.277 0 .54.12 1.063.361l.476.22c1.843.848 2.764 1.272 3.377.807.613-.465.511-1.511.308-3.605m.952-3.06c1.341-1.568 2.012-2.352 1.778-3.105-.234-.753-1.218-.975-3.186-1.42l-.509-.116c-.559-.126-.838-.19-1.063-.36-.224-.17-.368-.428-.656-.945l-.262-.47C15.264 4.909 14.758 4 14 4s-1.264.909-2.277 2.727M2.089 16a4.736 4.736 0 0 1 4-.874M2.089 10.5c1-.5 1.29-.44 2-.5M2 5.609l.208-.122c2.206-1.292 4.542-1.64 6.745-1.005l.208.06" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M11.811 6.727C12.825 4.909 13.331 4 14.09 4c.757 0 1.264.909 2.277 2.727l.262.47c.288.517.432.775.657.945.224.17.504.234 1.063.36l.51.116c1.967.445 2.95.667 3.185 1.42.234.753-.437 1.537-1.778 3.106l-.347.406c-.381.445-.572.668-.658.944-.086.276-.057.573 0 1.168l.053.541c.203 2.094.305 3.14-.308 3.605-.613.465-1.534.041-3.377-.807l-.476-.22c-.524-.24-.786-.361-1.063-.361-.278 0-.54.12-1.063.361l-.477.22c-1.842.848-2.763 1.272-3.376.807-.613-.465-.511-1.511-.309-3.605l.053-.541c.057-.595.086-.892 0-1.168-.085-.276-.276-.498-.657-.944l-.347-.406C6.57 11.575 5.9 10.79 6.135 10.038c.234-.753 1.218-.975 3.185-1.42l.51-.116c.559-.126.838-.19 1.063-.36.224-.17.368-.428.656-.945l.262-.47Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M2.089 16a4.736 4.736 0 0 1 4-.874M2.089 10.5c1-.5 1.29-.44 2-.5M2 5.609l.208-.122c2.206-1.292 4.542-1.64 6.745-1.005l.208.06" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M11.811 6.727C12.825 4.909 13.331 4 14.09 4c.757 0 1.264.909 2.277 2.727l.262.47c.288.517.432.775.657.945.224.17.504.234 1.063.36l.51.116c1.967.445 2.95.667 3.185 1.42.234.753-.437 1.537-1.778 3.106l-.347.406c-.381.445-.572.668-.658.944-.086.276-.057.573 0 1.168l.053.541c.203 2.094.305 3.14-.308 3.605-.613.465-1.534.041-3.377-.807l-.476-.22c-.524-.24-.786-.361-1.063-.361-.278 0-.54.12-1.063.361l-.477.22c-1.842.848-2.763 1.272-3.376.807-.613-.465-.511-1.511-.309-3.605l.053-.541c.057-.595.086-.892 0-1.168-.085-.276-.276-.498-.657-.944l-.347-.406C6.57 11.575 5.9 10.79 6.135 10.038c.234-.753 1.218-.975 3.185-1.42l.51-.116c.559-.126.838-.19 1.063-.36.224-.17.368-.428.656-.945l.262-.47Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M2.089 16a4.736 4.736 0 0 1 4-.874M2.089 10.5c1-.5 1.29-.44 2-.5M2 5.609l.208-.122c2.206-1.292 4.542-1.64 6.745-1.005l.208.06" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M13.642 5.138c-.307.4-.656 1.023-1.175 1.954l-.263.47-.051.093c-.235.423-.453.816-.807 1.085-.357.271-.793.369-1.25.471l-.1.023-.51.115c-1.01.229-1.679.382-2.133.561-.44.174-.485.297-.502.35-.02.063-.048.205.217.626.27.428.728.967 1.415 1.77l.347.406.066.078c.316.367.605.704.738 1.131.132.425.088.87.04 1.36l-.01.103-.053.542c-.104 1.07-.172 1.791-.149 2.307.023.514.13.602.165.628l.001.001c.025.02.119.092.566-.036.468-.134 1.097-.421 2.042-.856l.476-.22.096-.044c.426-.197.834-.386 1.281-.386.447 0 .855.189 1.28.386l.097.044.476.22c.945.435 1.574.722 2.042.856.447.128.54.056.565.036l.002-.001c.035-.026.142-.114.165-.628.023-.515-.045-1.237-.149-2.307l-.052-.542-.01-.103c-.049-.49-.093-.935.04-1.36.132-.427.421-.764.737-1.131l.066-.078.347-.405c.687-.804 1.145-1.343 1.415-1.771.265-.421.236-.563.217-.625-.017-.054-.061-.177-.502-.35-.454-.18-1.124-.333-2.133-.562l-.51-.115-.1-.023c-.457-.102-.893-.2-1.25-.471-.354-.269-.572-.662-.807-1.085l-.051-.093-.263-.47c-.518-.93-.868-1.554-1.175-1.954-.298-.39-.422-.388-.445-.388h-.004c-.023 0-.147-.002-.445.388Zm-1.191-.912c.39-.51.9-.976 1.638-.976.738 0 1.249.467 1.638.976.382.498.784 1.219 1.265 2.082l.292.524c.32.575.385.66.454.713.066.05.152.085.776.226l.57.129c.932.21 1.716.388 2.291.615.602.237 1.167.601 1.384 1.3.215.691-.032 1.318-.38 1.87-.335.533-.867 1.155-1.505 1.9l-.04.046-.346.406c-.422.493-.482.586-.511.68-.03.097-.033.215.03.873l.059.6c.096.996.177 1.825.148 2.46-.029.648-.177 1.316-.756 1.756-.59.448-1.271.389-1.887.212-.593-.17-1.327-.508-2.199-.91l-.534-.245c-.586-.27-.674-.293-.749-.293-.075 0-.163.023-.75.293l-.534.246c-.871.401-1.605.74-2.198.91-.616.175-1.296.235-1.887-.213-.58-.44-.727-1.108-.756-1.756-.029-.635.052-1.464.148-2.46l.058-.6c.064-.658.062-.776.032-.873-.03-.094-.09-.187-.512-.68l-.386-.452c-.637-.745-1.17-1.367-1.506-1.9-.347-.552-.594-1.179-.38-1.87.218-.699.783-1.063 1.385-1.3.575-.227 1.36-.404 2.29-.615l.571-.13c.624-.14.71-.176.776-.225.07-.053.134-.138.454-.713l.292-.524c.482-.863.883-1.584 1.265-2.082Zm-3.706.976c-1.981-.57-4.107-.27-6.158.932l-.208.122a.75.75 0 1 1-.758-1.295l.208-.121c2.36-1.383 4.908-1.778 7.332-1.08l.208.06a.75.75 0 0 1-.416 1.442l-.208-.06ZM4.836 9.936a.75.75 0 0 1-.683.811c-.154.013-.27.02-.37.027-.177.011-.292.019-.444.048-.196.038-.452.117-.915.349a.75.75 0 1 1-.67-1.342c.537-.268.926-.408 1.302-.48.247-.048.502-.064.731-.08l.238-.016a.75.75 0 0 1 .811.683Zm1.082 5.92a3.985 3.985 0 0 0-3.365.733.75.75 0 1 1-.928-1.178 5.485 5.485 0 0 1 4.635-1.015.75.75 0 0 1-.342 1.46Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M11.812 6.727C12.825 4.909 13.332 4 14.088 4c.758 0 1.264.909 2.277 2.727l.263.47c.288.517.431.775.656.945.224.17.504.234 1.063.36l.51.116c1.967.445 2.951.668 3.185 1.42.234.753-.437 1.537-1.778 3.106l-.347.406c-.381.446-.572.669-.658.944-.085.276-.057.573.001 1.168l.053.542c.202 2.093.304 3.14-.31 3.604-.612.465-1.533.041-3.376-.807l-.476-.22c-.524-.24-.785-.361-1.063-.361-.277 0-.54.12-1.063.362l-.476.22c-1.843.847-2.764 1.271-3.377.806-.613-.465-.511-1.511-.308-3.604l.052-.542c.058-.595.086-.892 0-1.168-.085-.275-.276-.498-.657-.944l-.347-.406c-1.341-1.569-2.012-2.353-1.778-3.106.234-.752 1.218-.975 3.186-1.42l.509-.115c.559-.127.838-.19 1.063-.36.224-.171.368-.43.656-.946l.263-.47Z" /><path fill="currentColor" fillRule="evenodd" d="M8.745 5.202c-1.981-.57-4.107-.269-6.158.932l-.208.122a.75.75 0 0 1-.758-1.294l.208-.122C4.19 3.457 6.737 3.063 9.161 3.76l.208.06a.75.75 0 0 1-.416 1.441l-.208-.06ZM4.836 9.936a.75.75 0 0 1-.683.811c-.154.014-.27.02-.37.027a3.244 3.244 0 0 0-.444.048c-.196.038-.452.117-.915.349a.75.75 0 1 1-.67-1.342c.537-.268.926-.408 1.302-.48.247-.048.502-.064.731-.08l.238-.016a.75.75 0 0 1 .811.683Zm1.082 5.92a3.985 3.985 0 0 0-3.365.733.75.75 0 1 1-.928-1.178 5.485 5.485 0 0 1 4.635-1.015.75.75 0 0 1-.342 1.46Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M11.811 6.727C12.825 4.909 13.331 4 14.09 4c.757 0 1.264.909 2.277 2.727l.262.47c.288.517.432.775.657.945.224.17.504.234 1.063.36l.51.116c1.967.445 2.95.667 3.185 1.42.234.753-.437 1.537-1.778 3.106l-.347.406c-.381.445-.572.668-.658.944-.086.276-.057.573 0 1.168l.053.541c.203 2.094.305 3.14-.308 3.605-.613.465-1.534.041-3.377-.807l-.476-.22c-.524-.24-.786-.361-1.063-.361-.278 0-.54.12-1.063.361l-.477.22c-1.842.848-2.763 1.272-3.376.807-.613-.465-.511-1.511-.309-3.605l.053-.541c.057-.595.086-.892 0-1.168-.085-.276-.276-.498-.657-.944l-.347-.406C6.57 11.575 5.9 10.79 6.135 10.038c.234-.753 1.218-.975 3.185-1.42l.51-.116c.559-.126.838-.19 1.063-.36.224-.17.368-.428.656-.945l.262-.47Z" /><path fill="currentColor" fillRule="evenodd" d="M8.745 5.202c-1.981-.57-4.107-.269-6.158.932l-.208.122a.75.75 0 0 1-.758-1.294l.208-.122C4.19 3.457 6.737 3.063 9.161 3.76l.208.06a.75.75 0 0 1-.416 1.441l-.208-.06ZM4.836 9.936a.75.75 0 0 1-.683.811c-.154.014-.27.02-.37.027a3.244 3.244 0 0 0-.444.048c-.196.038-.452.117-.915.349a.75.75 0 1 1-.67-1.342c.537-.268.926-.408 1.302-.48.247-.048.502-.064.731-.08l.238-.016a.75.75 0 0 1 .811.683Zm1.082 5.92a3.985 3.985 0 0 0-3.365.733.75.75 0 1 1-.928-1.178 5.485 5.485 0 0 1 4.635-1.015.75.75 0 0 1-.342 1.46Z" clipRule="evenodd" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default StarFallMinimalistic2