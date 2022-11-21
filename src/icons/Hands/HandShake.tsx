import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const HandShake = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.784 22c-1.685-.752-3.077-1.924-3.992-3.493M14.825 2.186c1.677-.477 3.408-.023 4.617 1.211" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m4.01 8.367-.372-.652.373.652Zm2.492.5.648-.377-.648.377Zm-3.3 1.886-.647.378.648-.378Zm4.495-7.38.648-.378-.648.378Zm.842 1.443-.648.378.648-.378Zm1.877 4.71a.75.75 0 0 0 1.296-.756l-1.296.755Zm-2.878 2.607a.75.75 0 1 0 1.296-.756l-1.296.756Zm-3.14-6.875-.648.378.647-.378Zm7.44-2.327.648-.378-.648.378Zm2.526 4.33.648-.377-.648.378Zm1.683 2.888.373.651a.75.75 0 0 0 .275-1.029l-.648.378Zm.968-4.395a.75.75 0 1 0 1.296-.756l-1.296.756Zm3.174 3.953.648-.378-.648.378ZM6.99 17.25l.648-.378-.648.378Zm9.967 2.003-.373-.65.373.65ZM13.784 15.3a.75.75 0 0 0 1.296-.756l-1.296.756Zm6.563-6.81a.75.75 0 0 0-1.296.755l1.296-.755ZM8.987 20.18a.75.75 0 0 0 .72-1.316l-.72 1.316Zm4.902-.635a.75.75 0 0 0 .222 1.484l-.222-1.484ZM4.383 9.018c.633-.362 1.257-.14 1.471.227L7.15 8.49c-.716-1.228-2.323-1.454-3.512-.775l.745 1.303Zm-.745-1.303c-1.19.681-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.996.532-1.357l-.745-1.303ZM7.05 3.75l.842 1.444 1.296-.756-.842-1.443-1.296.755Zm.842 1.444 2.525 4.331 1.296-.755-2.525-4.332-1.296.756Zm.943 6.183L7.15 8.49l-1.296.755 1.684 2.888 1.296-.756ZM7.15 8.49 5.045 4.88l-1.295.756 2.104 3.61L7.15 8.49ZM5.577 3.523c.634-.362 1.258-.14 1.472.227l1.296-.755C7.629 1.767 6.022 1.54 4.833 2.22l.744 1.303ZM4.833 2.22c-1.19.681-1.803 2.182-1.083 3.416l1.295-.756c-.21-.36-.099-.996.532-1.357L4.833 2.22Zm6.357 1.088 2.526 4.332 1.296-.756-2.526-4.331-1.296.755Zm2.526 4.332 1.684 2.887 1.295-.756-1.683-2.887-1.296.756ZM9.719 3.08c.633-.361 1.257-.139 1.471.228l1.296-.755c-.716-1.228-2.323-1.454-3.512-.774L9.72 3.08ZM8.974 1.78c-1.19.68-1.803 2.181-1.083 3.415l1.296-.756c-.21-.36-.1-.996.532-1.357l-.745-1.302Zm6.57 3.747c.633-.362 1.257-.14 1.471.228l1.296-.756c-.716-1.227-2.323-1.453-3.512-.774l.745 1.302Zm-.745-1.302c-1.19.68-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.997.532-1.358l-.745-1.302ZM2.555 11.131l3.788 6.497 1.296-.756-3.788-6.497-1.296.756Zm16.986-1.046c1.605 2.753.41 6.594-2.956 8.517l.745 1.302c3.924-2.242 5.621-6.949 3.507-10.575l-1.296.756Zm-4.461 4.46c-.675-1.159-.203-2.863 1.34-3.745l-.745-1.302c-2.102 1.201-3.075 3.77-1.891 5.802l1.296-.756Zm3.971-5.3.49.84 1.296-.756-.49-.84-1.296.756Zm-9.345 9.619a5.32 5.32 0 0 1-2.067-1.992l-1.296.756a6.82 6.82 0 0 0 2.644 2.552l.72-1.316Zm6.88-.262a7.755 7.755 0 0 1-2.697.943l.222 1.484a9.257 9.257 0 0 0 3.219-1.125l-.745-1.302Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M8.784 22c-1.685-.752-3.077-1.924-3.992-3.493M14.825 2.186c1.677-.477 3.408-.023 4.617 1.211" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m4.01 8.367-.372-.652.373.652Zm2.492.5.648-.377-.648.377Zm-3.3 1.886-.647.378.648-.378Zm4.495-7.38.648-.378-.648.378Zm.842 1.443-.648.378.648-.378Zm1.877 4.71a.75.75 0 0 0 1.296-.756l-1.296.755Zm-2.878 2.607a.75.75 0 1 0 1.296-.756l-1.296.756Zm-3.14-6.875-.648.378.647-.378Zm7.44-2.327.648-.378-.648.378Zm2.526 4.33.648-.377-.648.378Zm1.683 2.888.373.651a.75.75 0 0 0 .275-1.029l-.648.378Zm1.616-4.773-.648.378.648-.378Zm2.526 4.331.648-.378-.648.378ZM6.99 17.25l.648-.378-.648.378Zm9.967 2.003-.373-.65.373.65ZM13.784 15.3a.75.75 0 0 0 1.296-.756l-1.296.756ZM4.383 9.018c.633-.362 1.257-.14 1.471.227L7.15 8.49c-.716-1.228-2.323-1.454-3.512-.775l.745 1.303Zm-.745-1.303c-1.19.681-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.996.532-1.357l-.745-1.303ZM7.05 3.75l.842 1.444 1.296-.756-.842-1.443-1.296.755Zm.842 1.444 2.525 4.331 1.296-.755-2.525-4.332-1.296.756Zm.943 6.183L7.15 8.49l-1.296.755 1.684 2.888 1.296-.756ZM7.15 8.49 5.045 4.88l-1.295.756 2.104 3.61L7.15 8.49ZM5.577 3.523c.634-.362 1.258-.14 1.472.227l1.296-.755C7.629 1.767 6.022 1.54 4.833 2.22l.744 1.303ZM4.833 2.22c-1.19.681-1.803 2.182-1.083 3.416l1.295-.756c-.21-.36-.099-.996.532-1.357L4.833 2.22Zm6.357 1.088 2.526 4.332 1.296-.756-2.526-4.331-1.296.755Zm2.526 4.332 1.684 2.887 1.295-.756-1.683-2.887-1.296.756ZM9.719 3.08c.633-.361 1.257-.139 1.471.228l1.296-.755c-.716-1.228-2.323-1.454-3.512-.774L9.72 3.08ZM8.974 1.78c-1.19.68-1.803 2.181-1.083 3.415l1.296-.756c-.21-.36-.1-.996.532-1.357l-.745-1.302Zm8.041 3.975 2.526 4.331 1.296-.756L18.31 5l-1.296.755Zm-1.471-.228c.633-.362 1.257-.14 1.471.228l1.296-.756c-.716-1.227-2.323-1.453-3.512-.774l.745 1.302Zm-.745-1.302c-1.19.68-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.997.532-1.358l-.745-1.302ZM2.555 11.131l3.788 6.497 1.296-.756-3.788-6.497-1.296.756Zm14.03 7.471c-3.367 1.924-7.337 1.029-8.946-1.73l-1.296.756c2.111 3.62 7.065 4.518 10.987 2.276l-.745-1.302Zm2.956-8.517c1.605 2.753.41 6.594-2.956 8.517l.745 1.302c3.924-2.242 5.621-6.949 3.507-10.575l-1.296.756Zm-4.461 4.46c-.675-1.159-.203-2.863 1.34-3.745l-.745-1.302c-2.102 1.201-3.075 3.77-1.891 5.802l1.296-.756Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.784 22c-1.686-.752-3.078-1.924-3.993-3.493M14.825 2.186c1.677-.477 3.408-.023 4.617 1.211" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m4.01 8.367-.372-.652.373.652Zm2.492.5.648-.377-.648.377Zm-3.3 1.886-.647.378.648-.378Zm4.495-7.38.648-.378-.648.378Zm.842 1.443-.648.378.648-.378Zm1.877 4.71a.75.75 0 0 0 1.296-.756l-1.296.755Zm-2.878 2.607a.75.75 0 1 0 1.296-.756l-1.296.756Zm-3.14-6.875-.648.378.647-.378Zm7.44-2.327.648-.378-.648.378Zm2.526 4.33.648-.377-.648.378Zm1.683 2.888.373.651a.75.75 0 0 0 .275-1.029l-.648.378Zm1.616-4.773-.648.378.648-.378Zm2.526 4.331.648-.378-.648.378ZM6.99 17.25l.648-.378-.648.378Zm9.967 2.003-.373-.65.373.65ZM13.784 15.3a.75.75 0 0 0 1.296-.756l-1.296.756ZM4.383 9.018c.633-.362 1.257-.14 1.471.227L7.15 8.49c-.716-1.228-2.323-1.454-3.512-.775l.745 1.303Zm-.745-1.303c-1.19.681-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.996.532-1.357l-.745-1.303ZM7.05 3.75l.842 1.444 1.296-.756-.842-1.443-1.296.755Zm.842 1.444 2.525 4.331 1.296-.755-2.525-4.332-1.296.756Zm.943 6.183L7.15 8.49l-1.296.755 1.684 2.888 1.296-.756ZM7.15 8.49 5.045 4.88l-1.295.756 2.104 3.61L7.15 8.49ZM5.577 3.523c.634-.362 1.258-.14 1.472.227l1.296-.755C7.629 1.767 6.022 1.54 4.833 2.22l.744 1.303ZM4.833 2.22c-1.19.681-1.803 2.182-1.083 3.416l1.295-.756c-.21-.36-.099-.996.532-1.357L4.833 2.22Zm6.357 1.088 2.526 4.332 1.296-.756-2.526-4.331-1.296.755Zm2.526 4.332 1.684 2.887 1.295-.756-1.683-2.887-1.296.756ZM9.719 3.08c.633-.361 1.257-.139 1.471.228l1.296-.755c-.716-1.228-2.323-1.454-3.512-.774L9.72 3.08ZM8.974 1.78c-1.19.68-1.803 2.181-1.083 3.415l1.296-.756c-.21-.36-.1-.996.532-1.357l-.745-1.302Zm8.041 3.975 2.526 4.331 1.296-.756L18.31 5l-1.296.755Zm-1.471-.228c.633-.362 1.257-.14 1.471.228l1.296-.756c-.716-1.227-2.323-1.453-3.512-.774l.745 1.302Zm-.745-1.302c-1.19.68-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.997.532-1.358l-.745-1.302ZM2.555 11.131l3.788 6.497 1.296-.756-3.788-6.497-1.296.756Zm14.03 7.471c-3.367 1.924-7.337 1.029-8.946-1.73l-1.296.756c2.111 3.62 7.065 4.518 10.987 2.276l-.745-1.302Zm2.956-8.517c1.605 2.753.41 6.594-2.956 8.517l.745 1.302c3.924-2.242 5.621-6.949 3.507-10.575l-1.296.756Zm-4.461 4.46c-.675-1.159-.203-2.863 1.34-3.745l-.745-1.302c-2.102 1.201-3.075 3.77-1.891 5.802l1.296-.756Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M18.906 3.922c-1.014-1.036-2.46-1.417-3.875-1.015a.75.75 0 1 1-.41-1.442c1.937-.552 3.954-.025 5.357 1.407a.75.75 0 1 1-1.072 1.05Zm-7.716-.614c-.214-.367-.838-.59-1.471-.227-.632.36-.743.997-.532 1.357l2.525 4.332a.75.75 0 1 1-1.295.755L7.89 5.194 7.049 3.75c-.214-.367-.838-.59-1.471-.227-.632.36-.743.997-.533 1.357l3.789 6.497a.75.75 0 1 1-1.296.756L5.854 9.245c-.214-.367-.837-.59-1.471-.227-.631.36-.743.996-.532 1.357l3.788 6.497c1.61 2.759 5.58 3.654 8.947 1.73 3.364-1.923 4.56-5.764 2.955-8.517l-2.526-4.331c-.214-.367-.838-.59-1.471-.228-.632.361-.742.997-.532 1.358l1.684 2.887a.75.75 0 0 1-.276 1.03c-1.543.88-2.015 2.585-1.34 3.743a.75.75 0 1 1-1.296.756c-1.06-1.817-.392-4.063 1.263-5.377L11.19 3.308ZM13.92 5.01l-1.433-2.456c-.716-1.228-2.323-1.454-3.511-.774-.367.209-.678.496-.913.829-.8-.881-2.178-.988-3.229-.388-1.19.681-1.803 2.182-1.083 3.416l1.002 1.719a2.876 2.876 0 0 0-1.113.36c-1.191.68-1.804 2.182-1.084 3.416l3.789 6.497c2.11 3.62 7.064 4.518 10.986 2.276 3.924-2.242 5.621-6.949 3.507-10.575L18.31 5c-.716-1.228-2.323-1.454-3.511-.775-.35.2-.65.471-.881.785ZM4.414 17.86a.75.75 0 0 1 1.026.27c.827 1.418 2.09 2.49 3.65 3.186a.75.75 0 0 1-.612 1.37c-1.811-.809-3.331-2.08-4.334-3.8a.75.75 0 0 1 .27-1.026Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4.414 17.859a.75.75 0 0 1 1.025.27c.827 1.418 2.091 2.49 3.65 3.186a.75.75 0 0 1-.611 1.37c-1.812-.809-3.331-2.08-4.334-3.8a.75.75 0 0 1 .27-1.026ZM18.906 3.922c-1.014-1.036-2.46-1.417-3.876-1.015a.75.75 0 0 1-.41-1.442c1.938-.552 3.955-.025 5.357 1.407a.75.75 0 0 1-1.071 1.05ZM11.19 3.308c-.214-.367-.838-.59-1.471-.227-.632.36-.743.997-.532 1.357l2.525 4.332a.75.75 0 0 1-1.296.755L7.05 3.75c-.214-.367-.838-.59-1.472-.227-.631.36-.742.997-.532 1.357l3.789 6.497a.75.75 0 1 1-1.296.756L5.854 9.245c-.214-.367-.838-.59-1.471-.227-.632.36-.743.996-.532 1.357l3.788 6.497c1.609 2.759 5.58 3.654 8.946 1.73 3.365-1.923 4.561-5.764 2.956-8.517l-2.526-4.331c-.214-.367-.838-.59-1.471-.228-.632.361-.743.997-.532 1.358l1.683 2.887a.75.75 0 0 1-.275 1.03c-1.543.88-2.016 2.585-1.34 3.743a.75.75 0 1 1-1.296.756c-.913-1.565-.544-3.45.635-4.782.33-.372.442-.914.192-1.344l-3.42-5.866Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.19 3.308c-.213-.367-.837-.59-1.47-.227-.632.36-.743.997-.533 1.357l2.526 4.331a.75.75 0 0 1-1.296.756L7.049 3.75c-.214-.367-.838-.59-1.471-.227-.632.36-.743.997-.532 1.357l3.788 6.497a.75.75 0 0 1-1.296.756L5.855 9.245c-.214-.367-.838-.59-1.472-.227-.631.36-.742.996-.532 1.357l3.789 6.497c1.608 2.759 5.579 3.654 8.946 1.73 3.365-1.923 4.56-5.764 2.955-8.517l-2.525-4.331c-.214-.367-.838-.59-1.472-.228-.631.361-.742.997-.532 1.358l1.684 2.887a.75.75 0 0 1-.276 1.03c-1.542.88-2.015 2.585-1.34 3.743a.75.75 0 1 1-1.296.756c-.912-1.565-.543-3.45.635-4.782.33-.372.443-.914.192-1.344l-3.42-5.866Z" fill="currentColor" /><g opacity={0.5} fillRule="evenodd" clipRule="evenodd" fill="currentColor"><path d="M4.413 17.859a.75.75 0 0 1 1.026.27c.827 1.418 2.091 2.49 3.65 3.186a.75.75 0 0 1-.611 1.37c-1.812-.809-3.332-2.08-4.335-3.8a.75.75 0 0 1 .27-1.026ZM18.905 3.922c-1.014-1.036-2.46-1.417-3.875-1.015a.75.75 0 1 1-.41-1.442c1.938-.552 3.954-.025 5.357 1.407a.75.75 0 1 1-1.072 1.05Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default HandShake