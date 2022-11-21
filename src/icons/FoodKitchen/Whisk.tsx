import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Whisk = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12.9 15.127-3.02 3.02m-3.02 3.02a2.847 2.847 0 0 1-4.026-4.027l6.039-6.039m11.675-7.65c1.209 1.209-1.45 4.672-3.22 6.442-1.77 1.77-6.04 5.234-7.247 4.026M20.548 3.452c2.224 2.223 1.825 6.227-.732 8.784-2.558 2.557-7.512 3.906-9.735 1.683M20.548 3.452c-2.223-2.224-6.227-1.825-8.784.732-2.558 2.557-3.907 7.512-1.683 9.735M20.548 3.452c-.6-.602-1.76-.245-2.992.483M10.08 13.92c-1.209-1.208 2.255-5.476 4.026-7.246" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19.816 12.236c2.557-2.557 2.956-6.561.733-8.784-2.224-2.224-6.228-1.825-8.785.732-2.558 2.557-3.907 7.512-1.683 9.735 2.223 2.223 7.178.874 9.735-1.683Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="m12.9 15.127-6.04 6.039a2.847 2.847 0 0 1-4.026-4.026l6.039-6.039" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M20.549 3.451c1.208 1.209-1.45 4.672-3.221 6.442-1.77 1.77-6.04 5.234-7.247 4.026-1.209-1.208 2.255-5.476 4.026-7.247 1.77-1.77 5.233-4.429 6.442-3.22Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12.9 15.127-6.04 6.04a2.847 2.847 0 0 1-4.026-4.027l6.039-6.039m11.675-7.65c1.209 1.209-1.45 4.672-3.22 6.442-1.77 1.77-6.04 5.234-7.247 4.026M20.548 3.452c-1.208-1.209-4.67 1.45-6.441 3.22-1.77 1.771-5.235 6.039-4.026 7.247M20.548 3.452c2.224 2.223 1.825 6.227-.732 8.784-2.558 2.557-7.512 3.906-9.735 1.683M20.548 3.452c-2.223-2.224-6.227-1.825-8.784.732-2.558 2.557-3.907 7.512-1.683 9.735" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17.952 2.874c-1.812-.406-4.017.2-5.658 1.84-1.168 1.168-2.079 2.91-2.43 4.614a6.815 6.815 0 0 0-.144 1.834c.185-.354.4-.713.628-1.064.971-1.493 2.316-3.043 3.229-3.956.914-.914 2.271-2.066 3.579-2.842.261-.155.528-.3.796-.426Zm3.127.047c-2.6-2.6-7.087-2.025-9.846.733-1.39 1.39-2.432 3.403-2.838 5.371a8.76 8.76 0 0 0-.187 1.68L2.304 16.61a3.597 3.597 0 1 0 5.086 5.087l5.906-5.906a8.762 8.762 0 0 0 1.679-.186c1.968-.407 3.981-1.449 5.371-2.839 2.759-2.758 3.333-7.244.733-9.845Zm-1.06 1.06c-.046-.044-.178-.134-.587-.05-.403.083-.921.31-1.51.66-1.17.693-2.429 1.756-3.285 2.612-.857.857-2.13 2.327-3.032 3.713-.454.698-.785 1.331-.937 1.83-.075.247-.094.422-.086.532a.31.31 0 0 0 .018.093.047.047 0 0 0 .01.018.047.047 0 0 0 .018.01.31.31 0 0 0 .094.019c.11.008.284-.01.533-.087.498-.152 1.131-.482 1.83-.936 1.385-.902 2.855-2.175 3.712-3.032.857-.856 1.92-2.115 2.613-3.284.35-.59.576-1.107.66-1.51.083-.41-.007-.542-.052-.587Zm-7.18 10.299c.354-.185.712-.4 1.063-.628 1.493-.97 3.043-2.315 3.956-3.228.915-.915 2.066-2.272 2.842-3.58.155-.26.3-.528.426-.796.406 1.812-.2 4.017-1.84 5.658-1.168 1.167-2.91 2.078-4.615 2.43a6.818 6.818 0 0 1-1.832.144Zm-1.417 1.264c-.7-.21-1.34-.564-1.872-1.095a4.396 4.396 0 0 1-1.094-1.87L3.364 17.67a2.097 2.097 0 1 0 2.966 2.965l5.092-5.092Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.233 3.654C13.992.896 18.478.32 21.08 2.92c2.6 2.6 2.026 7.087-.733 9.845-1.848 1.848-4.835 3.113-7.384 3.022a6.644 6.644 0 0 1-.667-.057L6.86 21.166a2.847 2.847 0 0 1-4.026-4.026l5.435-5.435a6.655 6.655 0 0 1-.057-.665c-.091-2.55 1.173-5.538 3.021-7.386Zm1.061 1.06c1.64-1.64 3.846-2.246 5.658-1.84a9.551 9.551 0 0 0-.796.426c-1.308.776-2.665 1.928-3.58 2.842-.912.913-2.257 2.463-3.228 3.956-.228.351-.443.71-.628 1.063a5.519 5.519 0 0 1-.009-.175c-.075-2.098 1.003-4.691 2.583-6.272Zm7.138-.783c.409-.084.54.006.586.05.046.046.135.179.051.587-.082.404-.31.922-.659 1.51-.693 1.17-1.756 2.429-2.612 3.285-.858.857-2.327 2.13-3.713 3.032-.699.454-1.332.784-1.83.936-.248.076-.423.095-.533.087a.31.31 0 0 1-.094-.019.047.047 0 0 1-.017-.01.048.048 0 0 1-.01-.018.31.31 0 0 1-.019-.093c-.008-.11.01-.285.086-.533.153-.498.483-1.131.938-1.83.901-1.385 2.174-2.855 3.031-3.712.857-.856 2.116-1.92 3.285-2.613.589-.35 1.107-.576 1.51-.659Zm-5.53 9.721c-.35.228-.709.443-1.062.628.058.003.116.007.175.009 2.098.075 4.69-1.003 6.27-2.583 1.641-1.641 2.248-3.846 1.841-5.658a9.593 9.593 0 0 1-.426.796c-.776 1.308-1.927 2.665-2.842 3.58-.913.913-2.463 2.257-3.956 3.228Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17.951 2.874c-1.811-.406-4.017.2-5.657 1.84-1.58 1.58-2.659 4.174-2.583 6.272.002.059.005.117.009.175.185-.354.4-.712.628-1.063.97-1.493 2.315-3.043 3.228-3.956.915-.914 2.272-2.066 3.58-2.842.26-.155.528-.3.796-.426Zm3.127.047c-2.6-2.6-7.087-2.025-9.845.733C9.385 5.502 8.12 8.49 8.212 11.04c.045 1.27.432 2.504 1.338 3.41.906.906 2.14 1.292 3.411 1.338 2.55.09 5.537-1.174 7.385-3.022 2.758-2.758 3.333-7.244.732-9.845Zm-1.06 1.06c-.046-.044-.178-.134-.587-.05-.403.083-.92.31-1.51.66-1.168.693-2.428 1.756-3.284 2.612-.857.857-2.13 2.327-3.032 3.713-.454.698-.785 1.331-.937 1.83-.076.247-.095.422-.086.532a.31.31 0 0 0 .018.093.048.048 0 0 0 .01.018.047.047 0 0 0 .018.01.31.31 0 0 0 .093.019c.11.008.285-.01.533-.087.499-.152 1.132-.482 1.83-.936 1.386-.902 2.856-2.175 3.713-3.032.856-.856 1.92-2.115 2.613-3.284.35-.59.576-1.107.659-1.51.084-.41-.006-.542-.051-.587ZM12.839 14.28c.354-.185.712-.4 1.063-.628 1.493-.97 3.043-2.315 3.956-3.228.914-.915 2.066-2.272 2.842-3.58.155-.26.3-.528.426-.796.406 1.812-.2 4.017-1.84 5.658-1.58 1.58-4.174 2.658-6.271 2.583a5.505 5.505 0 0 1-.176-.01Z" fill="currentColor" /><path opacity={0.5} d="M8.269 11.705c.141 1.029.535 1.998 1.281 2.744.747.747 1.717 1.141 2.745 1.282L6.86 21.166a2.847 2.847 0 0 1-4.026-4.026l5.435-5.435Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Whisk