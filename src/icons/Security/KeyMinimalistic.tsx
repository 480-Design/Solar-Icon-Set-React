import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const KeyMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m18.977 5.023.53-.53-.53.53Zm0 9.767.53.53-.53-.53ZM7.146 12.668l-.53-.53.53.53ZM3.433 16.38l.53.53-.53-.53Zm4.187 4.187-.53-.53.53.53Zm3.712-3.713-.53-.53.53.53Zm-8.323.736-.745.083.745-.083Zm.232 2.089-.745.083.745-.083Zm1.08 1.08-.083.745.083-.745Zm2.089.232.082-.745-.082.745Zm-2.886-.723.53-.53-.53.53Zm.208.208-.53.53.53-.53Zm3.672-8.845-.726.187.726-.187Zm4.965 4.965-.187.726.187-.726Zm-4.73.467a.75.75 0 1 0-1.055 1.066l1.054-1.066Zm12.373-8.857a.75.75 0 1 0 1.442-.412l-1.442.412Zm1.38 4.02a.75.75 0 0 0-1.43-.453l1.43.454Zm-8.276-1.342a1.25 1.25 0 0 1 0-1.768l-1.06-1.06a2.75 2.75 0 0 0 0 3.889l1.06-1.061Zm1.768 0a1.25 1.25 0 0 1-1.768 0l-1.06 1.06a2.75 2.75 0 0 0 3.889 0l-1.061-1.06Zm0-1.768a1.25 1.25 0 0 1 0 1.768l1.06 1.06a2.75 2.75 0 0 0 0-3.889l-1.06 1.061Zm1.06-1.06a2.75 2.75 0 0 0-3.889 0l1.061 1.06a1.25 1.25 0 0 1 1.768 0l1.06-1.06Zm3.563-3.563a7.657 7.657 0 0 0-10.828 0l1.06 1.06a6.157 6.157 0 0 1 8.708 0l1.06-1.06ZM6.615 12.138 2.903 15.85l1.06 1.06L7.677 13.2l-1.06-1.061Zm1.535 8.959 1.24-1.24-1.06-1.061-1.24 1.24 1.06 1.06Zm1.24-1.24 2.472-2.473-1.06-1.06-2.472 2.472 1.06 1.06Zm-7.126-2.184.232 2.089 1.49-.166-.232-2.088-1.49.165Zm1.974 3.831 2.089.232.165-1.49-2.088-.232-.166 1.49Zm-1.244-.706.208.208 1.06-1.06-.208-.209-1.06 1.061Zm1.41-.784a.237.237 0 0 1-.141-.068l-1.061 1.06c.279.28.644.455 1.036.498l.166-1.49Zm-1.908-.252c.043.392.219.757.498 1.036l1.06-1.06a.237.237 0 0 1-.067-.142l-1.491.166Zm4.593.274a.73.73 0 0 1-.597.21l-.165 1.49a2.23 2.23 0 0 0 1.823-.64l-1.06-1.06ZM2.903 15.85a2.23 2.23 0 0 0-.64 1.823l1.491-.165a.73.73 0 0 1 .21-.597l-1.06-1.06Zm5.228-4.405A6.153 6.153 0 0 1 9.74 5.553l-1.06-1.06a7.653 7.653 0 0 0-2.002 7.325l1.453-.373Zm10.316 2.815a6.154 6.154 0 0 1-5.892 1.61l-.373 1.452a7.653 7.653 0 0 0 7.325-2.001l-1.06-1.06Zm-6.585 3.124c.056-.055.17-.1.32-.062l.373-1.453c-.588-.15-1.27-.028-1.753.455l1.06 1.06ZM7.676 13.2c.483-.483.606-1.166.455-1.754l-1.453.373c.038.15-.007.264-.063.32l1.06 1.06Zm1.711 5.594-1.749-1.73-1.054 1.066 1.749 1.73 1.054-1.066Zm9.06-13.24a6.127 6.127 0 0 1 1.565 2.653l1.442-.412a7.626 7.626 0 0 0-1.947-3.301l-1.06 1.06Zm1.515 6.22a6.129 6.129 0 0 1-1.515 2.487l1.06 1.06a7.626 7.626 0 0 0 1.885-3.093l-1.43-.454Z" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m18.977 5.023.53-.53-.53.53Zm0 9.767.53.53-.53-.53ZM7.146 12.668l-.53-.53.53.53ZM3.433 16.38l.53.53-.53-.53Zm4.187 4.187-.53-.53.53.53Zm1.24-1.24-.53-.531.53.53Zm2.472-2.473-.53-.53.53.53Zm-8.323.736-.745.083.745-.083Zm.232 2.089-.745.083.745-.083Zm1.08 1.08-.083.745.083-.745Zm2.089.232.082-.745-.082.745Zm-2.886-.723.53-.53-.53.53Zm.208.208-.53.53.53-.53Zm3.672-8.845-.726.187.726-.187Zm4.965 4.965-.187.726.187-.726Zm6.078-11.043a6.157 6.157 0 0 1 0 8.707l1.06 1.06a7.657 7.657 0 0 0 0-10.827l-1.06 1.06Zm1.06-1.06a7.657 7.657 0 0 0-10.828 0l1.06 1.06a6.157 6.157 0 0 1 8.708 0l1.06-1.06ZM6.615 12.138 2.903 15.85l1.06 1.06L7.677 13.2l-1.06-1.061Zm1.535 8.959 1.24-1.24-1.06-1.061-1.24 1.24 1.06 1.06Zm1.24-1.24 2.472-2.473-1.06-1.06-2.472 2.472 1.06 1.06Zm-7.126-2.184.232 2.089 1.49-.166-.232-2.088-1.49.165Zm1.974 3.831 2.089.232.165-1.49-2.088-.232-.166 1.49Zm-1.244-.706.208.208 1.06-1.06-.208-.209-1.06 1.061Zm1.41-.784a.237.237 0 0 1-.141-.068l-1.061 1.06c.279.28.644.455 1.036.498l.166-1.49Zm-1.908-.252c.043.392.219.757.498 1.036l1.06-1.06a.237.237 0 0 1-.067-.142l-1.491.166Zm4.593.274a.73.73 0 0 1-.597.21l-.165 1.49a2.23 2.23 0 0 0 1.823-.64l-1.06-1.06ZM2.903 15.85a2.23 2.23 0 0 0-.64 1.823l1.491-.165a.73.73 0 0 1 .21-.597l-1.06-1.06Zm5.228-4.405A6.153 6.153 0 0 1 9.74 5.553l-1.06-1.06a7.653 7.653 0 0 0-2.002 7.325l1.453-.373Zm10.316 2.815a6.154 6.154 0 0 1-5.892 1.61l-.373 1.452a7.653 7.653 0 0 0 7.325-2.001l-1.06-1.06Zm-6.585 3.124c.056-.055.17-.1.32-.062l.373-1.453c-.588-.15-1.27-.028-1.753.455l1.06 1.06ZM7.676 13.2c.483-.483.606-1.166.455-1.754l-1.453.373c.038.15-.007.264-.063.32l1.06 1.06Z" /><path fill="currentColor" d="M8.332 19.86a.75.75 0 1 0 1.055-1.067l-1.055 1.066Zm-.694-2.797a.75.75 0 1 0-1.055 1.066l1.055-1.066Zm1.75 1.73-1.75-1.73-1.055 1.066 1.75 1.73 1.054-1.066ZM13.116 10.884a1.25 1.25 0 0 1 0-1.768l-1.06-1.06a2.75 2.75 0 0 0 0 3.889l1.06-1.061Zm1.768 0a1.25 1.25 0 0 1-1.768 0l-1.06 1.06a2.75 2.75 0 0 0 3.889 0l-1.061-1.06Zm0-1.768a1.25 1.25 0 0 1 0 1.768l1.06 1.06a2.75 2.75 0 0 0 0-3.889l-1.06 1.061Zm1.06-1.06a2.75 2.75 0 0 0-3.889 0l1.061 1.06a1.25 1.25 0 0 1 1.768 0l1.06-1.06Z" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m18.977 5.023.53-.53-.53.53Zm0 9.767.53.53-.53-.53ZM7.146 12.668l-.53-.53.53.53ZM3.433 16.38l.53.53-.53-.53Zm4.187 4.187-.53-.53.53.53Zm3.712-3.713-.53-.53.53.53Zm-8.323.736-.745.083.745-.083Zm.232 2.089-.745.083.745-.083Zm1.08 1.08-.083.745.083-.745Zm2.089.232.082-.745-.082.745Zm-2.886-.723.53-.53-.53.53Zm.208.208-.53.53.53-.53Zm3.672-8.845-.726.187.726-.187Zm4.965 4.965-.187.726.187-.726Zm-4.73.467a.75.75 0 1 0-1.055 1.066l1.054-1.066Zm5.477-6.18a1.25 1.25 0 0 1 0-1.767l-1.06-1.06a2.75 2.75 0 0 0 0 3.889l1.06-1.061Zm1.768 0a1.25 1.25 0 0 1-1.768 0l-1.06 1.062a2.75 2.75 0 0 0 3.889 0l-1.061-1.061Zm0-1.767a1.25 1.25 0 0 1 0 1.768l1.06 1.06a2.75 2.75 0 0 0 0-3.889l-1.06 1.061Zm1.06-1.06a2.75 2.75 0 0 0-3.889 0l1.061 1.06a1.25 1.25 0 0 1 1.768 0l1.06-1.06Zm2.503-2.503a6.157 6.157 0 0 1 0 8.707l1.06 1.06a7.657 7.657 0 0 0 0-10.827l-1.06 1.06Zm1.06-1.06a7.657 7.657 0 0 0-10.828 0l1.06 1.06a6.157 6.157 0 0 1 8.708 0l1.06-1.06ZM6.615 12.138 2.903 15.85l1.06 1.06L7.677 13.2l-1.06-1.061Zm1.535 8.959 1.24-1.24-1.06-1.061-1.24 1.24 1.06 1.06Zm1.24-1.24 2.472-2.473-1.06-1.06-2.472 2.472 1.06 1.06Zm-7.126-2.184.232 2.089 1.49-.166-.232-2.088-1.49.165Zm1.974 3.831 2.089.232.165-1.49-2.088-.232-.166 1.49Zm-1.244-.706.208.208 1.06-1.06-.208-.209-1.06 1.061Zm1.41-.784a.237.237 0 0 1-.141-.068l-1.061 1.06c.279.28.644.455 1.036.498l.166-1.49Zm-1.908-.252c.043.392.219.757.498 1.036l1.06-1.06a.237.237 0 0 1-.067-.142l-1.491.166Zm4.593.274a.73.73 0 0 1-.597.21l-.165 1.49a2.23 2.23 0 0 0 1.823-.64l-1.06-1.06ZM2.903 15.85a2.23 2.23 0 0 0-.64 1.823l1.491-.165a.73.73 0 0 1 .21-.597l-1.06-1.06Zm5.228-4.405A6.153 6.153 0 0 1 9.74 5.553l-1.06-1.06a7.653 7.653 0 0 0-2.002 7.325l1.453-.373Zm10.316 2.815a6.154 6.154 0 0 1-5.892 1.61l-.373 1.452a7.653 7.653 0 0 0 7.325-2.001l-1.06-1.06Zm-6.585 3.124c.056-.055.17-.1.32-.062l.373-1.453c-.588-.15-1.27-.028-1.753.455l1.06 1.06ZM7.676 13.2c.483-.483.606-1.166.455-1.754l-1.453.373c.038.15-.007.264-.063.32l1.06 1.06Zm1.711 5.594-1.749-1.73-1.054 1.066 1.749 1.73 1.054-1.066Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M8.68 4.493a7.657 7.657 0 1 1 3.502 12.83c-.15-.04-.264.006-.32.061L8.15 21.098a2.23 2.23 0 0 1-1.823.64l-2.089-.233a1.737 1.737 0 0 1-1.036-.498l-.208-.208a1.737 1.737 0 0 1-.498-1.036l-.232-2.089a2.23 2.23 0 0 1 .64-1.823l3.711-3.712c.056-.056.101-.17.063-.32a7.653 7.653 0 0 1 2.001-7.325Zm9.767 1.06A6.157 6.157 0 0 0 8.13 11.445c.15.588.028 1.271-.455 1.754L3.964 16.91a.73.73 0 0 0-.21.597l.233 2.088c.005.054.03.103.067.141l.209.209a.237.237 0 0 0 .14.067l2.09.232a.73.73 0 0 0 .596-.209l.707-.707-1.212-1.2a.75.75 0 1 1 1.054-1.066l1.219 1.205 1.945-1.944c.482-.483 1.165-.606 1.753-.455a6.157 6.157 0 0 0 5.891-10.316Zm-6.391 2.502a2.75 2.75 0 1 1 3.889 3.89 2.75 2.75 0 0 1-3.89-3.89Zm2.828 1.061a1.25 1.25 0 1 0-1.768 1.768 1.25 1.25 0 0 0 1.768-1.768Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M18.977 14.79a6.907 6.907 0 1 0-11.573-3.159c.095.369.01.768-.258 1.037L3.433 16.38a1.48 1.48 0 0 0-.424 1.21l.232 2.089c.025.223.125.43.283.589l.208.208a.987.987 0 0 0 .589.283l2.089.232a1.48 1.48 0 0 0 1.21-.424l.71-.71-1.747-1.728a.75.75 0 1 1 1.055-1.066l1.752 1.733 1.942-1.942c.27-.27.668-.353 1.037-.258a6.904 6.904 0 0 0 6.608-1.806Zm-6.391-6.204a2 2 0 1 1 2.828 2.828 2 2 0 0 1-2.828-2.828Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M18.977 14.79a6.907 6.907 0 1 0-11.573-3.159c.095.369.01.768-.258 1.037L3.433 16.38a1.48 1.48 0 0 0-.424 1.21l.232 2.089c.025.223.125.43.283.589l.208.208a.987.987 0 0 0 .589.283l2.089.232a1.48 1.48 0 0 0 1.21-.424l.71-.71 1.06-1.061 1.942-1.942c.27-.27.668-.353 1.037-.258a6.904 6.904 0 0 0 6.608-1.806Z" opacity={0.5} /><path fill="currentColor" d="M15.414 8.586a2 2 0 1 0-2.828 2.828 2 2 0 0 0 2.828-2.828ZM6.583 18.13l1.746 1.727 1.06-1.061-1.751-1.733a.75.75 0 1 0-1.055 1.066Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default KeyMinimalistic