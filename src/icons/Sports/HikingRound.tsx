import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const HikingRound = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={11.5} cy={4.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M9 17.5s-.426 1.62-1 2.5c-.603.925-2 2-2 2" /><path fill="currentColor" d="m10.21 12.901.746.075-.746-.075Zm-.069.686-.746-.075.746.075Zm8.436-2.734-.48-.576.48.576Zm.903.223a.75.75 0 0 0-.96-1.152l.96 1.152Zm-8.276 4.677-.397.636.397-.636Zm.333.208.398-.636-.398.636Zm2.72 4.432.747-.067-.747.067Zm-.604 1.674a.75.75 0 1 0 1.494-.134l-1.494.134ZM13 11.5l-.386.643a.75.75 0 0 0 .05.028L13 11.5Zm-3.536 1.326-.069.686 1.492.15.07-.686-1.493-.15Zm9.593-1.397.423-.353-.96-1.152-.424.353.96 1.152Zm-8.25 4.96.333.208.795-1.272-.333-.208-.795 1.272Zm2.703 4.07.143 1.608 1.494-.134-.143-1.607-1.494.133Zm-.845-8.288a5.878 5.878 0 0 0 6.392-.742l-.96-1.152a4.379 4.379 0 0 1-4.762.552l-.67 1.342Zm-1.525 4.426a5.086 5.086 0 0 1 2.37 3.862l1.494-.133a6.586 6.586 0 0 0-3.07-5.001l-.794 1.272Zm-1.745-3.085a3.036 3.036 0 0 0 1.412 2.877l.795-1.272a1.536 1.536 0 0 1-.715-1.455l-1.492-.15Zm1.561-.536a1.098 1.098 0 0 1 1.658-.833l.772-1.286c-1.634-.98-3.733.073-3.922 1.97l1.492.149Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M19 15V8m0 14v-3M9 10l-2.389.144a1.721 1.721 0 0 0-1.035 3.001L7.665 15" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={11.5} cy={4.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M9 17.5s-.426 1.62-1 2.5c-.603.925-2 2-2 2" opacity={0.5} /><path fill="currentColor" d="m10.21 12.901.746.075-.746-.075Zm-.069.686-.746-.075.746.075Zm8.436-2.734-.48-.576.48.576Zm.903.223a.75.75 0 0 0-.96-1.152l.96 1.152Zm-8.276 4.677-.397.636.397-.636Zm.333.208.398-.636-.398.636Zm2.72 4.432.747-.067-.747.067Zm-.604 1.674a.75.75 0 1 0 1.494-.134l-1.494.134ZM13 11.5l-.386.643a.75.75 0 0 0 .05.028L13 11.5Zm-3.536 1.326-.069.686 1.492.15.07-.686-1.493-.15Zm9.593-1.397.423-.353-.96-1.152-.424.353.96 1.152Zm-8.25 4.96.333.208.795-1.272-.333-.208-.795 1.272Zm2.703 4.07.143 1.608 1.494-.134-.143-1.607-1.494.133Zm-.845-8.288a5.878 5.878 0 0 0 6.392-.742l-.96-1.152a4.379 4.379 0 0 1-4.762.552l-.67 1.342Zm-1.525 4.426a5.086 5.086 0 0 1 2.37 3.862l1.494-.133a6.586 6.586 0 0 0-3.07-5.001l-.794 1.272Zm-1.745-3.085a3.036 3.036 0 0 0 1.412 2.877l.795-1.272a1.536 1.536 0 0 1-.715-1.455l-1.492-.15Zm1.561-.536a1.098 1.098 0 0 1 1.658-.833l.772-1.286c-1.634-.98-3.733.073-3.922 1.97l1.492.149Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M19 22V8" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m9 10-2.389.144a1.721 1.721 0 0 0-1.035 3.001L7.665 15" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={11.5} cy={4.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M9 17.5s-.426 1.62-1 2.5c-.603.925-2 2-2 2" /><path fill="currentColor" d="m10.21 12.901.746.075-.746-.075Zm-.069.686-.746-.075.746.075Zm8.436-2.734-.48-.576.48.576Zm.903.223a.75.75 0 0 0-.96-1.152l.96 1.152Zm-8.276 4.677-.397.636.397-.636Zm.333.208.398-.636-.398.636Zm2.72 4.432.747-.067-.747.067Zm-.604 1.674a.75.75 0 1 0 1.494-.134l-1.494.134ZM13 11.5l-.386.643a.75.75 0 0 0 .05.028L13 11.5Zm-3.536 1.326-.069.686 1.492.15.07-.686-1.493-.15Zm9.593-1.397.423-.353-.96-1.152-.424.353.96 1.152Zm-8.25 4.96.333.208.795-1.272-.333-.208-.795 1.272Zm2.703 4.07.143 1.608 1.494-.134-.143-1.607-1.494.133Zm-.845-8.288a5.878 5.878 0 0 0 6.392-.742l-.96-1.152a4.379 4.379 0 0 1-4.762.552l-.67 1.342Zm-1.525 4.426a5.086 5.086 0 0 1 2.37 3.862l1.494-.133a6.586 6.586 0 0 0-3.07-5.001l-.794 1.272Zm-1.745-3.085a3.036 3.036 0 0 0 1.412 2.877l.795-1.272a1.536 1.536 0 0 1-.715-1.455l-1.492-.15Zm1.561-.536a1.098 1.098 0 0 1 1.658-.833l.772-1.286c-1.634-.98-3.733.073-3.922 1.97l1.492.149Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M19 22V8M9 10l-2.389.144a1.721 1.721 0 0 0-1.035 3.001L7.665 15" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M11.5 2.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM8.25 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM19 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V11.994a5.88 5.88 0 0 1-5.636.15 1.098 1.098 0 0 0-1.658.832l-.068.686a1.536 1.536 0 0 0 .714 1.455l.333.208a6.586 6.586 0 0 1 3.07 5.001l.143 1.607a.75.75 0 0 1-1.495.134l-.143-1.608a5.086 5.086 0 0 0-2.37-3.862l-.333-.208a3.036 3.036 0 0 1-1.412-2.877l.069-.686c.188-1.885 2.264-2.938 3.894-1.986a4.378 4.378 0 0 0 4.739-.563l.153-.128V8a.75.75 0 0 1 .75-.75ZM9.749 9.955a.75.75 0 0 1-.704.794l-2.389.143a.971.971 0 0 0-.581 1.692l2.087 1.856a.75.75 0 1 1-.997 1.12L5.08 13.705a2.471 2.471 0 0 1 1.487-4.31l2.389-.144a.75.75 0 0 1 .794.704Zm-.558 6.82c.4.105.64.515.534.916L9 17.5l.725.19v.003l-.001.005-.005.016-.016.058a15.8 15.8 0 0 1-.28.893c-.18.525-.455 1.223-.795 1.745-.357.548-.918 1.101-1.35 1.493a15.874 15.874 0 0 1-.751.637l-.05.039-.014.01-.004.004s-.002.001-.446-.576l.445.577a.75.75 0 0 1-.916-1.188l.003-.002.01-.008.04-.032.157-.126c.133-.11.317-.265.518-.447.417-.377.856-.823 1.102-1.2.234-.36.46-.912.635-1.417a14.274 14.274 0 0 0 .25-.803l.014-.048.003-.011v-.003a.75.75 0 0 1 .917-.534Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M14 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" /><path fill="currentColor" fillRule="evenodd" d="M19 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V11.994a5.88 5.88 0 0 1-5.636.15 1.098 1.098 0 0 0-1.658.832l-.068.686a1.536 1.536 0 0 0 .714 1.455l.333.208a6.586 6.586 0 0 1 3.07 5.001l.143 1.607a.75.75 0 0 1-1.495.134l-.143-1.608a5.086 5.086 0 0 0-2.37-3.862l-.333-.208a3.036 3.036 0 0 1-1.412-2.877l.069-.686c.188-1.885 2.264-2.938 3.894-1.986a4.378 4.378 0 0 0 4.739-.563l.153-.128V8a.75.75 0 0 1 .75-.75ZM9.749 9.955a.75.75 0 0 1-.704.794l-2.389.143a.971.971 0 0 0-.581 1.692l2.087 1.856a.75.75 0 1 1-.997 1.12L5.08 13.705a2.471 2.471 0 0 1 1.487-4.31l2.389-.144a.75.75 0 0 1 .794.704Zm-.558 6.82c.4.105.64.515.534.916L9 17.5l.725.19v.003l-.001.005-.005.016-.016.058a15.8 15.8 0 0 1-.28.893c-.18.525-.455 1.223-.795 1.745-.357.548-.918 1.101-1.35 1.493a15.874 15.874 0 0 1-.751.637l-.05.039-.014.01-.005.005-.445-.577.445.577a.75.75 0 0 1-.916-1.188l.003-.002.01-.008.04-.032.157-.126c.133-.11.317-.265.518-.447.417-.377.856-.823 1.102-1.2.234-.36.46-.912.635-1.417a14.274 14.274 0 0 0 .25-.803l.014-.048.003-.011v-.003a.75.75 0 0 1 .917-.534Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M14 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" /><path fill="currentColor" fillRule="evenodd" d="M19 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V11.994a5.88 5.88 0 0 1-5.636.15 1.098 1.098 0 0 0-1.658.832l-.068.686a1.535 1.535 0 0 0 .714 1.455l.333.208a6.586 6.586 0 0 1 3.07 5.001l.142 1.607a.75.75 0 1 1-1.494.134l-.143-1.608a5.086 5.086 0 0 0-2.37-3.862l-.333-.208a3.036 3.036 0 0 1-1.412-2.877l.069-.686c.188-1.885 2.264-2.938 3.894-1.986a4.378 4.378 0 0 0 4.739-.563l.153-.128V8a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /><g fill="currentColor" opacity={0.5}><path d="M9.749 9.955a.75.75 0 0 1-.704.794l-2.389.143a.971.971 0 0 0-.581 1.692l2.087 1.856a.75.75 0 1 1-.997 1.12L5.08 13.705a2.471 2.471 0 0 1 1.487-4.31l2.389-.144a.75.75 0 0 1 .794.704ZM9.19 16.775c.401.105.64.515.535.916v.002l-.001.005-.005.016-.016.058a15.755 15.755 0 0 1-.28.893c-.18.525-.455 1.223-.795 1.745-.357.548-.918 1.101-1.35 1.493a15.773 15.773 0 0 1-.751.637l-.05.039-.014.01-.005.005a.75.75 0 0 1-.916-1.188l.003-.002.01-.008.04-.032.157-.126c.133-.11.317-.265.518-.447.417-.377.856-.823 1.102-1.2.234-.36.46-.912.635-1.417a14.362 14.362 0 0 0 .25-.803l.014-.048.003-.011v-.003a.75.75 0 0 1 .917-.534Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default HikingRound