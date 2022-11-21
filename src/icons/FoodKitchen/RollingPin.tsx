import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const RollingPin = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17.012 13.157c1.455-1.454 2.182-2.181 2.182-3.085 0-.605-.327-1.131-.98-1.85m-9.992 9.993-1.963 2.748c-.08.113-.12.169-.156.213a2.181 2.181 0 0 1-3.169.262 5.75 5.75 0 0 1-.188-.184c-.098-.098-.147-.147-.184-.188A2.179 2.179 0 0 1 2.085 19m6.137-.785a38.28 38.28 0 0 1-1.234-1.203c-.48-.48-.881-.88-1.203-1.234m2.437 2.437c.719.652 1.245.979 1.85.979.904 0 1.63-.727 3.085-2.181l.843-.844m-8.215-.391c-.652-.719-.979-1.245-.979-1.85 0-.904.727-1.63 2.181-3.085l3.856-3.856c1.454-1.454 2.181-2.18 3.085-2.18.605 0 1.131.326 1.85.978m-9.993 9.993-1.374.982m13.804-8.538 2.748-1.963c.113-.08.169-.12.213-.156a2.181 2.181 0 0 0 .262-3.169 5.75 5.75 0 0 0-.184-.188c-.098-.098-.147-.147-.188-.184a2.181 2.181 0 0 0-3.17.262 5.84 5.84 0 0 0-.155.213l-1.963 2.748m2.437 2.437a38.28 38.28 0 0 0-1.203-1.234c-.48-.48-.88-.881-1.234-1.203" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m13.157 17.013 3.856-3.856c1.454-1.454 2.18-2.181 2.18-3.085 0-.605-.326-1.131-.978-1.85-.322-.354-.723-.755-1.202-1.234-.48-.48-.881-.881-1.235-1.203-.719-.652-1.245-.979-1.85-.979-.904 0-1.63.727-3.085 2.182l-3.855 3.855c-1.455 1.454-2.182 2.181-2.182 3.085 0 .605.327 1.131.98 1.85.321.354.722.755 1.202 1.235.48.48.88.88 1.234 1.202.719.652 1.245.979 1.85.979.904 0 1.63-.727 3.085-2.181Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="m8.222 18.215-1.963 2.748c-.08.113-.12.169-.156.213a2.181 2.181 0 0 1-3.169.262 5.75 5.75 0 0 1-.188-.184c-.098-.098-.147-.147-.184-.188a2.181 2.181 0 0 1 .262-3.17c.044-.034.1-.075.213-.155l2.748-1.963m12.43-7.556 2.748-1.963c.113-.08.169-.12.213-.156a2.181 2.181 0 0 0 .262-3.169 5.75 5.75 0 0 0-.184-.188c-.098-.098-.147-.147-.188-.184a2.181 2.181 0 0 0-3.17.262 5.84 5.84 0 0 0-.155.213l-1.963 2.748" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m8.222 18.215-1.963 2.748c-.08.113-.12.169-.156.213a2.181 2.181 0 0 1-3.169.262 5.75 5.75 0 0 1-.188-.184c-.098-.098-.147-.147-.184-.188a2.181 2.181 0 0 1 .262-3.17c.044-.034.1-.075.213-.155l2.748-1.963m2.437 2.437a38.28 38.28 0 0 1-1.234-1.203c-.48-.48-.881-.88-1.203-1.234m2.437 2.437c.719.652 1.245.979 1.85.979.904 0 1.63-.727 3.085-2.181l3.855-3.856c1.455-1.454 2.182-2.181 2.182-3.085 0-.605-.327-1.131-.98-1.85M5.786 15.778c-.652-.719-.979-1.245-.979-1.85 0-.904.727-1.63 2.181-3.085l3.856-3.856c1.454-1.454 2.181-2.18 3.085-2.18.605 0 1.131.326 1.85.978m2.437 2.437 2.748-1.963c.113-.08.169-.12.213-.156a2.181 2.181 0 0 0 .262-3.169 5.75 5.75 0 0 0-.184-.188c-.098-.098-.147-.147-.188-.184a2.181 2.181 0 0 0-3.17.262 5.84 5.84 0 0 0-.155.213l-1.963 2.748m2.437 2.437a38.28 38.28 0 0 0-1.203-1.234c-.48-.48-.88-.881-1.234-1.203" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17.31 2.358a2.931 2.931 0 0 1 4.258-.353c.056.05.118.113.201.196l.03.03c.083.083.145.145.196.2a2.931 2.931 0 0 1-.353 4.26c-.059.047-.13.097-.226.166l-2.11 1.507c.384.522.638 1.066.638 1.708 0 .682-.285 1.248-.7 1.79-.394.518-.969 1.092-1.664 1.788l-3.93 3.93c-.696.696-1.27 1.27-1.787 1.665-.543.414-1.11.699-1.79.699-.643 0-1.187-.254-1.71-.637l-1.506 2.11c-.069.095-.12.166-.166.225a2.931 2.931 0 0 1-4.26.353c-.055-.05-.117-.113-.2-.196l-.03-.03c-.083-.083-.145-.145-.196-.2a2.931 2.931 0 0 1 .353-4.26c.059-.047.13-.098.226-.166l2.11-1.507c-.384-.522-.638-1.066-.638-1.708 0-.682.285-1.248.7-1.79.394-.518.969-1.092 1.664-1.788l3.93-3.93c.696-.695 1.27-1.27 1.787-1.665.543-.414 1.11-.699 1.79-.699.643 0 1.187.254 1.71.637l1.506-2.11c.069-.095.12-.166.166-.225Zm-.542 3.331c.237.23.49.484.764.757l.022.022c.273.274.527.527.757.764l2.216-1.584c.12-.086.157-.112.182-.132a1.431 1.431 0 0 0 .172-2.08 5.59 5.59 0 0 0-.157-.16 5.42 5.42 0 0 0-.16-.157 1.431 1.431 0 0 0-2.08.172 5.44 5.44 0 0 0-.132.182l-1.584 2.216ZM5.69 16.77l-2.216 1.583a5.44 5.44 0 0 0-.182.132 1.431 1.431 0 0 0-.172 2.08c.021.023.053.055.157.16.105.104.137.136.16.157a1.431 1.431 0 0 0 2.08-.172c.02-.025.046-.061.132-.182l1.584-2.216a77.37 77.37 0 0 1-.764-.757l-.022-.022c-.273-.274-.527-.527-.757-.764Zm7.358-10.821c-.427.326-.931.828-1.673 1.57l-3.856 3.856c-.742.742-1.244 1.246-1.57 1.673-.313.41-.392.66-.392.88 0 .302.145.642.785 1.347.306.338.693.724 1.177 1.208.484.484.87.87 1.208 1.177.705.64 1.045.785 1.346.785.222 0 .471-.08.881-.392.427-.326.931-.828 1.673-1.57l3.856-3.856c.742-.742 1.244-1.246 1.57-1.673.313-.41.392-.66.392-.88 0-.302-.145-.642-.785-1.347a37.784 37.784 0 0 0-1.177-1.208c-.484-.484-.87-.87-1.208-1.177-.705-.64-1.045-.785-1.346-.785-.222 0-.471.08-.881.392Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m13.156 17.013 3.856-3.856c1.454-1.454 2.181-2.181 2.181-3.085 0-.605-.326-1.131-.979-1.85a38.28 38.28 0 0 0-1.202-1.234c-.48-.48-.88-.881-1.234-1.203-.719-.652-1.245-.979-1.85-.979-.904 0-1.63.727-3.085 2.182l-3.856 3.855c-1.454 1.454-2.18 2.181-2.18 3.085 0 .605.326 1.131.978 1.85.322.354.722.755 1.202 1.235.48.48.88.88 1.235 1.202.718.652 1.245.979 1.85.979.903 0 1.63-.727 3.085-2.181ZM21.066 2.562c.041.037.09.086.188.184s.147.147.184.188a2.181 2.181 0 0 1-.262 3.17c-.044.034-.1.074-.213.155l-1.52 1.086-.118-.132c-.346-.38-.768-.803-1.232-1.266l-.04-.04a38.913 38.913 0 0 0-1.267-1.232l-.13-.118 1.085-1.52c.08-.113.12-.169.155-.213a2.181 2.181 0 0 1 3.17-.262ZM4.557 16.655l.118.131c.346.381.768.803 1.231 1.267l.041.04c.463.464.886.886 1.266 1.232l.132.118-1.086 1.52c-.08.113-.12.169-.156.213a2.181 2.181 0 0 1-3.169.262 5.725 5.725 0 0 1-.188-.184c-.098-.098-.147-.147-.184-.188a2.181 2.181 0 0 1 .262-3.17c.044-.034.1-.075.213-.155l1.52-1.086Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m13.157 17.013 3.856-3.856c1.454-1.454 2.181-2.181 2.181-3.085 0-.605-.326-1.131-.98-1.85a38.387 38.387 0 0 0-1.201-1.234c-.48-.48-.88-.881-1.235-1.203-.718-.652-1.245-.979-1.85-.979-.903 0-1.63.727-3.084 2.182l-3.856 3.855c-1.454 1.454-2.181 2.181-2.181 3.085 0 .605.326 1.131.979 1.85.321.354.722.755 1.202 1.235.48.48.88.88 1.234 1.202.719.652 1.245.979 1.85.979.904 0 1.63-.727 3.085-2.181Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M21.254 2.746c-.098-.098-.147-.147-.188-.184a2.181 2.181 0 0 0-3.17.262 5.84 5.84 0 0 0-.155.213l-1.963 2.748c.354.322.755.723 1.234 1.202.48.48.881.881 1.203 1.235l2.748-1.963c.113-.08.169-.12.213-.156a2.181 2.181 0 0 0 .262-3.169 5.75 5.75 0 0 0-.184-.188ZM2.562 21.066c.037.041.086.09.184.188s.147.147.188.184a2.181 2.181 0 0 0 3.17-.262c.034-.044.074-.1.155-.213l1.963-2.748a38.28 38.28 0 0 1-1.234-1.203c-.48-.48-.881-.88-1.203-1.234l-2.748 1.963a5.84 5.84 0 0 0-.213.155 2.181 2.181 0 0 0-.262 3.17Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default RollingPin