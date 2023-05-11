import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const MeditationRound = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 17-1.158-.39a2.682 2.682 0 0 1-.642-.317l-.101-.069A2.5 2.5 0 0 1 18 14.15c0-.363-.039-.718-.112-1.06M3 17l1.158-.39c.227-.076.443-.183.642-.317l.101-.069A2.5 2.5 0 0 0 6 14.15c0-2.437 1.744-4.517 4.123-4.918l.89-.15C11.5 9 12.5 9 12.987 9.082l.891.15c.393.067.77.179 1.123.33M9.5 16l-.925 1.233c-.147.196-.22.295-.304.381a2 2 0 0 1-.732.486c-.112.043-.23.073-.47.133l-1.793.448A1.685 1.685 0 0 0 5.685 22h.683c1.709 0 3.37-.554 4.737-1.579L13 19m1.5-3 .727.969c.343.458.515.687.738.856.067.05.137.098.21.14.242.14.52.209 1.075.348l1.474.368A1.685 1.685 0 0 1 18.315 22h-.937c-.563 0-.844 0-1.123-.016a9.997 9.997 0 0 1-2.425-.44c-.267-.083-.53-.181-1.056-.379L11 20.5" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 17-1.158-.39a2.682 2.682 0 0 1-.642-.317l-.101-.069A2.5 2.5 0 0 1 18 14.15c0-2.437-1.744-4.517-4.123-4.918l-.89-.15C12.5 9 11.5 9 11.013 9.082l-.891.15C7.743 9.633 6 11.713 6 14.15a2.5 2.5 0 0 1-1.099 2.074l-.1.069c-.2.134-.416.24-.643.317L3 17" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m9.5 16-.925 1.233c-.147.196-.22.295-.304.381a2 2 0 0 1-.732.486c-.112.043-.23.073-.47.133l-1.793.448A1.685 1.685 0 0 0 5.685 22h.683c1.709 0 3.37-.554 4.737-1.579L13 19m1.5-3 .727.969c.343.458.515.687.738.856.067.05.137.098.21.14.242.14.52.209 1.075.348l1.474.368A1.685 1.685 0 0 1 18.315 22h-.937c-.563 0-.844 0-1.123-.016a9.997 9.997 0 0 1-2.425-.44c-.267-.083-.53-.181-1.056-.379L11 20.5" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 17-1.158-.39a2.682 2.682 0 0 1-.642-.317l-.101-.069A2.5 2.5 0 0 1 18 14.15c0-2.437-1.744-4.517-4.123-4.918l-.89-.15C12.5 9 11.5 9 11.013 9.082l-.891.15C7.743 9.633 6 11.713 6 14.15a2.5 2.5 0 0 1-1.099 2.074l-.1.069c-.2.134-.416.24-.643.317L3 17" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m9.5 16-.925 1.233c-.147.196-.22.295-.304.381a2 2 0 0 1-.732.486c-.112.043-.23.073-.47.133l-1.793.448A1.685 1.685 0 0 0 5.685 22h.683c1.709 0 3.37-.554 4.737-1.579L13 19m1.5-3 .727.969c.343.458.515.687.738.856.067.05.137.098.21.14.242.14.52.209 1.075.348l1.474.368A1.685 1.685 0 0 1 18.315 22h-.937c-.563 0-.844 0-1.123-.016a9.997 9.997 0 0 1-2.425-.44c-.267-.083-.53-.181-1.056-.379L11 20.5" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM8.75 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM12 9.77a5.9 5.9 0 0 0-.86.052l-.892.15c-2.013.339-3.498 2.102-3.498 4.178a3.25 3.25 0 0 1-1.43 2.696l-.1.069a3.43 3.43 0 0 1-.823.406l-1.157.39a.75.75 0 0 1-.48-1.422l1.159-.39c.163-.055.319-.132.462-.228l.102-.069a1.75 1.75 0 0 0 .767-1.452c0-2.797 2.003-5.195 4.748-5.657l.89-.15A7.273 7.273 0 0 1 12 8.271a7.255 7.255 0 0 1 1.112.072l.89.15c2.746.462 4.748 2.86 4.748 5.657 0 .586.29 1.13.768 1.452l.101.069c.144.096.3.173.463.228l1.158.39a.75.75 0 0 1-.48 1.422l-1.157-.39a3.429 3.429 0 0 1-.822-.406l-.101-.069a3.25 3.25 0 0 1-1.43-2.696c0-2.076-1.485-3.839-3.497-4.178l-.892-.15a5.886 5.886 0 0 0-.86-.051Zm-3.1 5.78a.75.75 0 1 1 1.2.9l-.924 1.233-.022.029a4.531 4.531 0 0 1-.34.42 2.75 2.75 0 0 1-1.007.67c-.155.058-.316.098-.52.15l-.035.008-1.794.449a.935.935 0 0 0 .227 1.841h.684c1.546 0 3.05-.501 4.287-1.429L12.55 18.4a.75.75 0 1 1 .9 1.2l-.904.678.491.185c.534.2.775.29 1.017.366a9.252 9.252 0 0 0 2.243.407c.253.014.51.014 1.08.014h.939a.935.935 0 0 0 .226-1.841l-1.473-.369a96.02 96.02 0 0 0-.082-.02c-.476-.119-.851-.212-1.186-.406a2.73 2.73 0 0 1-.29-.192c-.308-.234-.54-.543-.833-.936l-.051-.067-.727-.969a.75.75 0 1 1 1.2-.9l.727.969c.368.491.471.618.591.709.042.031.086.06.132.087.13.075.287.121.883.27l1.473.368a2.435 2.435 0 0 1-.59 4.797h-.963c-.539 0-.84 0-1.14-.017a10.753 10.753 0 0 1-2.607-.473c-.286-.09-.567-.195-1.072-.384l-1.432-.537a8.645 8.645 0 0 1-4.733 1.411h-.684a2.435 2.435 0 0 1-.59-4.797l1.793-.448c.255-.064.324-.082.384-.105.173-.066.33-.17.458-.304.044-.047.088-.102.246-.313L8.9 15.55Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" /><path fill="currentColor" fillRule="evenodd" d="M12 9.77a5.9 5.9 0 0 0-.86.052l-.892.15c-2.013.339-3.498 2.102-3.498 4.178a3.25 3.25 0 0 1-1.43 2.696l-.1.069a3.43 3.43 0 0 1-.823.406l-1.157.39a.75.75 0 0 1-.48-1.422l1.159-.39c.163-.055.319-.132.462-.228l.102-.069a1.75 1.75 0 0 0 .767-1.452c0-2.797 2.003-5.195 4.748-5.657l.89-.15A7.274 7.274 0 0 1 12 8.271c.387 0 .807.02 1.112.072l.89.15c2.746.462 4.748 2.86 4.748 5.657 0 .586.29 1.13.768 1.452l.101.069c.144.096.3.173.463.228l1.158.39a.75.75 0 0 1-.48 1.422l-1.157-.39a3.429 3.429 0 0 1-.822-.406l-.101-.069a3.25 3.25 0 0 1-1.43-2.696c0-2.076-1.485-3.839-3.497-4.178l-.892-.15a5.887 5.887 0 0 0-.86-.051Zm-3.1 5.78a.75.75 0 1 1 1.2.9l-.924 1.233-.022.029a4.531 4.531 0 0 1-.34.42 2.75 2.75 0 0 1-1.007.67c-.155.058-.316.098-.52.15l-.035.008-1.794.449a.935.935 0 0 0 .227 1.841h.684c1.546 0 3.05-.501 4.287-1.429L12.55 18.4a.75.75 0 1 1 .9 1.2l-.904.678.491.185c.534.2.775.29 1.017.366a9.252 9.252 0 0 0 2.243.407c.253.014.51.014 1.08.014h.939a.935.935 0 0 0 .226-1.841l-1.473-.369-.082-.02c-.476-.119-.851-.212-1.186-.406a2.73 2.73 0 0 1-.29-.192c-.308-.234-.54-.543-.833-.936l-.051-.067-.727-.969a.75.75 0 1 1 1.2-.9l.727.969c.368.491.471.618.591.709.042.031.086.06.132.087.13.075.287.121.883.27l1.473.368a2.435 2.435 0 0 1-.59 4.797h-.963c-.539 0-.84 0-1.14-.017a10.753 10.753 0 0 1-2.607-.473c-.286-.09-.568-.195-1.072-.384l-1.432-.537a8.645 8.645 0 0 1-4.733 1.411h-.684a2.435 2.435 0 0 1-.59-4.797l1.793-.448c.255-.064.324-.082.384-.105.173-.066.33-.17.458-.304.044-.047.088-.102.246-.313L8.9 15.55Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M14.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" /><path fill="currentColor" fillRule="evenodd" d="M8.9 15.55a.75.75 0 1 1 1.2.9l-.925 1.233-.021.029a4.528 4.528 0 0 1-.34.42 2.75 2.75 0 0 1-1.007.67c-.155.058-.316.098-.52.15l-.036.008-1.793.449a.935.935 0 0 0 .227 1.841h.683c1.546 0 3.05-.501 4.287-1.429L12.55 18.4a.75.75 0 1 1 .9 1.2l-.905.678.492.185c.534.2.775.29 1.017.366a9.252 9.252 0 0 0 2.243.407c.253.014.51.014 1.08.014h.938a.935.935 0 0 0 .227-1.841l-1.474-.369-.081-.02c-.476-.119-.851-.212-1.187-.406a2.73 2.73 0 0 1-.289-.192c-.308-.234-.54-.543-.834-.936l-.05-.067-.727-.969a.75.75 0 1 1 1.2-.9l.727.969c.368.491.471.618.591.709.042.031.086.06.132.087.13.075.286.121.882.27l1.474.368a2.435 2.435 0 0 1-.59 4.797h-.964c-.538 0-.839 0-1.138-.017a10.753 10.753 0 0 1-2.608-.473c-.286-.09-.568-.195-1.072-.384l-1.432-.537a8.645 8.645 0 0 1-4.734 1.411h-.683a2.435 2.435 0 0 1-.59-4.797l1.793-.448c.255-.064.324-.082.384-.105.173-.066.33-.17.457-.304.045-.047.088-.102.246-.313L8.9 15.55Z" clipRule="evenodd" /><path fill="currentColor" d="M12 9.77a5.9 5.9 0 0 0-.86.052l-.892.15c-2.013.339-3.498 2.101-3.498 4.178a3.25 3.25 0 0 1-1.43 2.696l-.1.069a3.43 3.43 0 0 1-.823.406l-1.157.39a.75.75 0 1 1-.48-1.422l1.159-.39c.163-.055.319-.132.462-.229l.102-.068a1.75 1.75 0 0 0 .767-1.452c0-2.798 2.003-5.195 4.748-5.657l.89-.15A7.276 7.276 0 0 1 12 8.27c.387 0 .807.02 1.112.072l.89.15c2.746.462 4.748 2.86 4.748 5.657 0 .586.29 1.13.768 1.452l.101.068c.144.097.3.174.463.23l1.158.39a.75.75 0 0 1-.48 1.42l-1.157-.39a3.429 3.429 0 0 1-.822-.405l-.101-.069a3.25 3.25 0 0 1-1.43-2.696c0-2.077-1.485-3.84-3.497-4.178l-.892-.15a5.887 5.887 0 0 0-.86-.051Z" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MeditationRound