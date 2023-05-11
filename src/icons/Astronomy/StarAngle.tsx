import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const StarAngle = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M2.93 12.773c-.571 1.65-.857 2.476-.492 2.986.365.51 1.14.366 2.687.079l.4-.075c.44-.081.66-.122.868-.062.208.06.38.215.723.523l.312.282c1.208 1.086 2.364 1.386 2.364 1.386.551-.244.685-1.113.953-2.852l.069-.45c.076-.494.114-.74.233-.945.12-.205.307-.344.682-.622l.34-.254c1.318-.979 1.977-1.468 1.953-2.129-.024-.66-.716-1.054-2.098-1.84l-.358-.205c-.393-.223-.59-.335-.723-.522-.134-.187-.19-.427-.301-.908l-.102-.437c-.394-1.692-.59-2.538-1.157-2.702-.567-.165-1.128.461-2.25 1.713l-.29.324c-.319.356-.478.534-.68.623-.203.09-.424.08-.868.061l-.404-.017c-1.56-.066-2.341-.1-2.667.46-.326.558.019 1.338.707 2.9" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M11.924 8.799 15 9.65m-5.208 8.24 3.273.95m-2.017-5.197 7.977 2.314M9.283 4.025l7.978 2.315c.566.164.763 1.01 1.157 2.701l.101.438c.112.48.168.721.302.908.134.186.33.298.723.522m0 0 .357.204c1.383.787 2.074 1.18 2.098 1.841.025.66-.634 1.15-1.952 2.129l-.34.253c-.375.278-.562.418-.682.622m.519-5.049-1.905-.527m1.386 5.576c-.12.205-.157.452-.233.946l-.07.45a9.21 9.21 0 0 1-.33 1.4c-.197.618-.296.926-.654 1.132-.359.206-.706.106-1.4-.096" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M17.26 6.34c.567.164.764 1.01 1.157 2.702l.102.437c.112.481.168.722.302.908.133.187.33.299.723.522l.357.204c1.383.788 2.074 1.181 2.098 1.841.025.66-.634 1.15-1.952 2.13l-.34.253c-.375.278-.563.417-.682.622-.12.204-.157.451-.233.945l-.07.45a9.197 9.197 0 0 1-.33 1.401c-.197.617-.296.926-.654 1.132-.359.206-.706.105-1.4-.096M10.44 6.728l.102.437c.111.481.167.721.301.908.134.187.33.299.723.522l.358.204c1.382.787 2.074 1.181 2.098 1.841.024.66-.635 1.15-1.953 2.13l-.34.253c-.375.278-.562.417-.681.622-.12.204-.158.451-.234.945l-.07.45c-.267 1.739-.4 2.608-.952 2.852 0 0-1.156-.3-2.364-1.386l-.312-.282c-.344-.308-.515-.463-.723-.523-.207-.06-.427-.02-.867.062l-.4.075c-1.549.287-2.323.43-2.688-.08-.365-.509-.08-1.334.492-2.985l.148-.427c.162-.469.243-.703.234-.945-.009-.242-.107-.464-.302-.908l-.179-.404c-.688-1.56-1.033-2.341-.707-2.9.326-.559 1.106-.525 2.667-.459l.404.017c.444.02.665.029.867-.06.203-.09.362-.268.68-.624l.291-.324c1.122-1.252 1.683-1.878 2.25-1.713.566.164.763 1.01 1.157 2.702Z" /><path stroke="currentColor" strokeWidth={1.5} d="m11.924 8.799 7.62 2.11m-9.752 6.982 6.546 1.9m-5.29-6.147 7.977 2.314M9.283 4.025l7.978 2.315" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="m11.924 8.8-.358-.205c-.393-.223-.59-.335-.723-.522-.134-.187-.19-.427-.301-.908l-.102-.437c-.394-1.692-.59-2.538-1.157-2.702m2.64 4.773c1.383.787 2.075 1.181 2.099 1.841.024.66-.635 1.15-1.953 2.13l-.34.253c-.375.278-.562.417-.681.622m.876-4.846 7.62 2.11m-9.752 6.983c.551-.244.685-1.113.953-2.852l.069-.45c.076-.494.114-.74.233-.945m-1.255 4.247s-1.156-.3-2.364-1.386l-.312-.282c-.344-.308-.515-.463-.723-.523-.207-.06-.427-.02-.867.062l-.4.075c-1.549.287-2.323.43-2.688-.08-.365-.509-.08-1.334.492-2.985l.148-.427c.162-.469.243-.703.234-.945-.009-.242-.107-.464-.302-.908l-.179-.404c-.688-1.56-1.033-2.341-.707-2.9.326-.559 1.106-.525 2.667-.459l.404.017c.444.02.665.029.867-.06.203-.09.362-.268.68-.624l.291-.324c1.122-1.252 1.683-1.878 2.25-1.713m.509 13.866 6.546 1.899c.694.201 1.041.302 1.4.096.358-.206.457-.515.654-1.132.128-.4.249-.871.33-1.4l.07-.45c.076-.495.114-.742.233-.946m-7.977-2.314 7.977 2.314M9.283 4.026 17.26 6.34c.566.164.763 1.01 1.156 2.702l.102.437c.112.481.168.722.302.908.133.187.33.299.723.522m0 0 .357.204c1.383.788 2.074 1.181 2.098 1.841.025.66-.634 1.15-1.952 2.13l-.34.253c-.375.278-.563.417-.682.622" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="m11.924 8.8-.358-.205c-.393-.223-.59-.335-.723-.522-.134-.187-.19-.427-.301-.908l-.102-.437c-.394-1.692-.59-2.538-1.157-2.702m2.64 4.773c1.383.787 2.075 1.181 2.099 1.841.024.66-.635 1.15-1.953 2.13l-.34.253c-.375.278-.562.417-.681.622m.876-4.846 7.62 2.11m-9.752 6.983c.551-.244.685-1.113.953-2.852l.069-.45c.076-.494.114-.74.233-.945m-1.255 4.247s-1.156-.3-2.364-1.386l-.312-.282c-.344-.308-.515-.463-.723-.523-.207-.06-.427-.02-.867.062l-.4.075c-1.549.287-2.323.43-2.688-.08-.365-.509-.08-1.334.492-2.985l.148-.427c.162-.469.243-.703.234-.945-.009-.242-.107-.464-.302-.908l-.179-.404c-.688-1.56-1.033-2.341-.707-2.9.326-.559 1.106-.525 2.667-.459l.404.017c.444.02.665.029.867-.06.203-.09.362-.268.68-.624l.291-.324c1.122-1.252 1.683-1.878 2.25-1.713m.509 13.866 6.546 1.899c.694.201 1.041.302 1.4.096.358-.206.457-.515.654-1.132.128-.4.249-.871.33-1.4l.07-.45c.076-.495.114-.742.233-.946m-7.977-2.314 7.977 2.314M9.283 4.026 17.26 6.34c.566.164.763 1.01 1.156 2.702l.102.437c.112.481.168.722.302.908.133.187.33.299.723.522m0 0 .357.204c1.383.788 2.074 1.181 2.098 1.841.025.66-.634 1.15-1.952 2.13l-.34.253c-.375.278-.563.417-.682.622" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7.405 6.073c.573-.639.965-1.074 1.281-1.338.32-.266.425-.239.458-.23.043.013.157.064.315.477.154.404.293.997.494 1.858l.12.516c.093.403.17.738.364 1.008.199.278.488.442.818.63l.064.035.357.204c.707.403 1.183.676 1.493.924.297.238.349.38.353.501.005.128-.042.287-.327.574-.294.295-.752.636-1.424 1.136l-.399.296c-.317.235-.584.433-.756.728-.169.289-.22.627-.284 1.045l-.081.527c-.137.884-.232 1.496-.356 1.922-.07.24-.137.373-.193.45-.108-.04-.253-.1-.423-.181a6.454 6.454 0 0 1-1.517-1.022l-.312-.28-.014-.013a7.193 7.193 0 0 0-.43-.37 1.437 1.437 0 0 0-.474-.25c-.324-.094-.659-.031-1.02.037l-.077.014-.4.075c-.794.147-1.325.243-1.706.25-.366.007-.443-.072-.484-.129-.058-.08-.111-.236-.022-.674.089-.436.289-1.017.58-1.857l.172-.497c.138-.4.25-.72.237-1.057-.013-.34-.148-.646-.315-1.024l-.208-.47c-.35-.795-.591-1.343-.711-1.762-.119-.415-.082-.583-.022-.685.05-.085.139-.175.5-.22.38-.047.915-.026 1.714.008l.404.017.076.004c.367.016.703.03 1.015-.107.303-.134.532-.39.795-.685l.055-.061.29-.324Z" /><path fill="currentColor" d="M10.918 6.574c-.156-.668-.288-1.234-.43-1.679L17.12 6.82c.044.012.158.063.316.476.154.404.293.997.493 1.859l.12.516c.027.114.052.224.08.327l-6.013-1.665-.303-.173c-.43-.244-.509-.301-.564-.379-.062-.086-.1-.206-.221-.73l-.111-.477ZM14.343 9.987l5.007 1.387.304.173c.707.403 1.183.676 1.493.924.297.238.348.38.353.501.004.128-.042.288-.328.574-.294.295-.751.636-1.423 1.136l-.4.296c-.188.14-.358.266-.502.408l-6.805-1.974.359-.267c.63-.468 1.15-.853 1.502-1.207.367-.368.638-.784.618-1.316a1.376 1.376 0 0 0-.178-.635ZM11.374 14.26l7.013 2.034c-.03.141-.053.293-.078.457l-.08.527c-.078.5-.192.947-.313 1.325-.213.665-.267.758-.427.85-.07.04-.134.056-.27.041-.165-.018-.378-.078-.741-.184l-5.795-1.68c.07-.147.125-.304.171-.464.146-.497.25-1.175.379-2.012l.075-.488c.027-.174.048-.305.066-.407Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><g fill="currentColor" opacity={0.5}><path d="M10.917 6.575c-.155-.669-.287-1.235-.43-1.68l6.634 1.925c.044.013.158.063.315.476.154.404.294.997.494 1.859l.12.516c.027.114.052.224.079.328l-6.012-1.666-.304-.172c-.43-.245-.508-.302-.564-.38-.062-.086-.099-.206-.22-.73l-.112-.476ZM14.342 9.987l5.008 1.387.304.173c.706.403 1.183.676 1.493.924.297.238.348.38.352.502.005.127-.041.287-.327.573-.294.295-.751.636-1.423 1.136l-.4.296c-.188.14-.359.266-.502.408l-6.805-1.974.358-.266c.631-.469 1.15-.854 1.503-1.208.367-.368.638-.783.618-1.316a1.376 1.376 0 0 0-.179-.635ZM11.374 14.26l7.012 2.034c-.029.141-.052.293-.077.457l-.081.527c-.077.5-.191.947-.312 1.325-.213.665-.268.758-.428.85-.068.04-.133.056-.269.041-.166-.018-.379-.078-.742-.184l-5.794-1.68c.07-.147.125-.304.171-.464.145-.497.25-1.175.379-2.012l.075-.488c.027-.174.048-.305.066-.406Z" /></g><path fill="currentColor" d="M7.405 6.073c.573-.639.965-1.074 1.281-1.338.32-.266.425-.239.458-.23.043.013.157.064.315.477.154.404.293.997.494 1.858l.12.516c.093.403.17.738.364 1.008.199.278.488.442.818.63l.064.035.357.204c.707.403 1.183.676 1.493.924.297.238.349.38.353.501.005.128-.042.287-.327.574-.294.295-.752.636-1.424 1.136l-.399.296c-.317.235-.584.433-.756.728-.169.289-.22.627-.284 1.045l-.081.527c-.137.884-.232 1.496-.356 1.922-.07.24-.137.373-.193.45-.108-.04-.253-.1-.423-.181a6.454 6.454 0 0 1-1.517-1.022l-.312-.28-.014-.013a7.193 7.193 0 0 0-.43-.37 1.437 1.437 0 0 0-.474-.25c-.324-.094-.659-.031-1.02.037l-.077.014-.4.075c-.794.147-1.325.243-1.706.25-.366.007-.443-.072-.484-.129-.058-.08-.111-.236-.022-.674.089-.436.289-1.017.58-1.857l.172-.497c.138-.4.25-.72.237-1.057-.013-.34-.148-.646-.315-1.024l-.208-.47c-.35-.795-.591-1.343-.711-1.762-.119-.415-.082-.583-.022-.685.05-.085.139-.175.5-.22.38-.047.915-.026 1.714.008l.404.017.076.004c.367.016.703.03 1.015-.107.303-.134.532-.39.795-.685l.055-.061.29-.324Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default StarAngle