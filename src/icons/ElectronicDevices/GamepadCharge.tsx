import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const GamepadCharge = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21.22 8c-.689-2.184-1.792-3.365-3.13-3.84-.38-.135-.788-.16-1.193-.16h-.612a4.24 4.24 0 0 0-2.45.78l-.502.354a2.308 2.308 0 0 1-2.666 0l-.502-.355A4.241 4.241 0 0 0 7.715 4h-.612c-.405 0-.813.025-1.194.16-2.383.846-4.022 3.935-3.903 10.943.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 0 0 5.027 19a2.74 2.74 0 0 0 1.53-.437c.915-.599 1.584-1.6 2.554-2.102a4.106 4.106 0 0 1 1.89-.461H13c.658 0 1.306.158 1.89.46.97.504 1.64 1.504 2.553 2.103.39.256.895.437 1.531.437a3.2 3.2 0 0 0 1.393-.316c1.274-.609 1.604-2.17 1.628-3.581A34.554 34.554 0 0 0 21.918 12M12 22v-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M10.5 16.5V18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.5M7.5 9v3M6 10.5h3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M19 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.75 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM16.75 11a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m10.165 4.78.502.354a2.308 2.308 0 0 0 2.666 0l.502-.355A4.24 4.24 0 0 1 16.285 4h.612c.405 0 .813.025 1.194.16 2.383.846 4.021 3.935 3.903 10.943-.024 1.412-.354 2.972-1.628 3.581a3.2 3.2 0 0 1-1.393.316 2.74 2.74 0 0 1-1.53-.437c-.915-.599-1.584-1.6-2.554-2.102a4.106 4.106 0 0 0-1.89-.461H11c-.658 0-1.306.158-1.89.46-.97.504-1.64 1.504-2.553 2.103A2.74 2.74 0 0 1 5.027 19a3.2 3.2 0 0 1-1.393-.316c-1.274-.609-1.604-2.17-1.628-3.581C1.887 8.095 3.526 5.006 5.909 4.16 6.29 4.025 6.7 4 7.103 4h.612c.878 0 1.734.272 2.45.78Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M12 22v-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M10.5 16.5V18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="M7.5 9v3M6 10.5h3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><g opacity={0.5} fill="currentColor"><path d="M19 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.75 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM16.75 11a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" /></g></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m10.165 4.78.502.354a2.308 2.308 0 0 0 2.666 0l.502-.355A4.24 4.24 0 0 1 16.285 4h.612c.405 0 .813.025 1.194.16 2.383.846 4.021 3.935 3.903 10.943-.024 1.412-.354 2.972-1.628 3.581a3.2 3.2 0 0 1-1.393.316 2.74 2.74 0 0 1-1.53-.437c-.915-.599-1.584-1.6-2.554-2.102a4.106 4.106 0 0 0-1.89-.461H11c-.658 0-1.306.158-1.89.46-.97.504-1.64 1.504-2.553 2.103A2.74 2.74 0 0 1 5.027 19a3.2 3.2 0 0 1-1.393-.316c-1.274-.609-1.604-2.17-1.628-3.581C1.887 8.095 3.526 5.006 5.909 4.16 6.29 4.025 6.7 4 7.103 4h.612c.878 0 1.734.272 2.45.78ZM12 22v-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M10.5 16.5V18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.5M7.5 9v3M6 10.5h3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M19 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.75 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM16.75 11a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M5.658 3.454c.506-.18 1.02-.204 1.445-.204h.612c1.033 0 2.04.32 2.883.917l.502.355a1.558 1.558 0 0 0 1.8 0l.502-.355a4.99 4.99 0 0 1 2.883-.917h.612c.426 0 .94.024 1.445.204 1.443.512 2.584 1.688 3.336 3.591.744 1.884 1.126 4.52 1.066 8.07-.013.75-.106 1.59-.395 2.346-.291.767-.802 1.49-1.66 1.9a3.95 3.95 0 0 1-1.716.389 3.49 3.49 0 0 1-1.942-.56c-.472-.31-.885-.71-1.238-1.052a55.053 55.053 0 0 0-.127-.122c-.404-.39-.745-.693-1.123-.89a3.36 3.36 0 0 0-.293-.134V18a1.75 1.75 0 0 1-1.5 1.732V22a.75.75 0 0 1-1.5 0v-2.268A1.75 1.75 0 0 1 9.75 18v-1.008c-.1.04-.198.085-.293.135-.378.196-.719.5-1.123.89l-.127.122c-.353.341-.766.742-1.238 1.052a3.49 3.49 0 0 1-1.942.559 3.95 3.95 0 0 1-1.716-.39c-.859-.41-1.369-1.132-1.66-1.899-.289-.756-.382-1.596-.395-2.346-.06-3.55.322-6.186 1.066-8.07.752-1.903 1.893-3.08 3.336-3.591ZM11.25 16.75V18c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25v-1.25h-1.5Zm-4.147-12c-.384 0-.687.027-.943.117-.94.334-1.809 1.125-2.443 2.73-.641 1.623-1.02 4.036-.961 7.493.011.662.095 1.308.296 1.837.198.52.49.882.906 1.08.306.147.661.243 1.069.243.485 0 .848-.136 1.12-.314.345-.227.653-.523 1.022-.88l.124-.12c.401-.386.88-.834 1.473-1.14a4.855 4.855 0 0 1 2.235-.546H13c.778 0 1.544.187 2.235.545.592.307 1.072.755 1.473 1.14l.124.12c.37.358.677.654 1.023.88.271.179.634.315 1.12.315.407 0 .762-.096 1.068-.242.416-.2.708-.561.906-1.08.201-.53.285-1.176.296-1.838.058-3.457-.32-5.87-.961-7.494-.634-1.604-1.503-2.395-2.443-2.729-.256-.09-.56-.117-.943-.117h-.612c-.722 0-1.427.224-2.017.641l-.502.356a3.057 3.057 0 0 1-3.532 0l-.502-.356a3.491 3.491 0 0 0-2.017-.641h-.612Zm.397 3.5a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V12a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V9a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><path d="M19 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.75 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM16.75 11a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.75 18.968A1 1 0 0 0 13.5 18v-.727a.38.38 0 0 0-.26-.36 3.923 3.923 0 0 0-2.48 0 .38.38 0 0 0-.26.36V18a1 1 0 0 0 .75.968v3.282a.75.75 0 1 0 1.5 0v-3.282Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="m10.667 5.134-.502-.355A4.241 4.241 0 0 0 7.715 4h-.612c-.405 0-.813.025-1.194.16-2.383.846-4.022 3.935-3.903 10.943.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 0 0 5.027 19a2.74 2.74 0 0 0 1.53-.437c.41-.268.77-.616 1.13-.964.444-.43.888-.86 1.424-1.138a4.106 4.106 0 0 1 1.89-.461H13c.658 0 1.306.158 1.89.46.536.279.98.709 1.425 1.139.36.348.72.696 1.128.964.39.256.895.437 1.531.437a3.2 3.2 0 0 0 1.393-.316c1.274-.609 1.604-2.17 1.628-3.581.119-7.008-1.52-10.097-3.903-10.942C17.71 4.025 17.3 4 16.897 4h-.612a4.24 4.24 0 0 0-2.45.78l-.502.354a2.308 2.308 0 0 1-2.666 0ZM16.75 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm-9.25.25a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V12a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V9a.75.75 0 0 1 .75-.75Zm11.5 2a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-3.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm2.25.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.75 18.968A1 1 0 0 0 13.5 18v-.727a.38.38 0 0 0-.26-.36 3.922 3.922 0 0 0-2.48 0 .38.38 0 0 0-.26.36V18a1 1 0 0 0 .75.968v3.282a.75.75 0 0 0 1.5 0v-3.282Z" fill="currentColor" /><path opacity={0.5} d="m10.165 4.78.502.354a2.308 2.308 0 0 0 2.666 0l.502-.355A4.24 4.24 0 0 1 16.285 4h.612c.405 0 .813.025 1.194.16 2.383.846 4.021 3.935 3.903 10.943-.024 1.412-.354 2.972-1.628 3.581a3.2 3.2 0 0 1-1.393.316 2.74 2.74 0 0 1-1.53-.437c-.41-.268-.77-.616-1.13-.964-.444-.43-.888-.86-1.424-1.138a4.106 4.106 0 0 0-1.89-.461H11c-.658 0-1.306.158-1.89.46-.536.279-.98.709-1.425 1.139-.36.348-.72.696-1.128.964A2.74 2.74 0 0 1 5.027 19a3.2 3.2 0 0 1-1.393-.316c-1.274-.609-1.604-2.17-1.628-3.581C1.887 8.095 3.526 5.006 5.909 4.16 6.29 4.025 6.7 4 7.103 4h.612c.878 0 1.734.272 2.45.78Z" fill="currentColor" /><path d="M16.75 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM7.5 8.25a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V12a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V9a.75.75 0 0 1 .75-.75ZM19 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM15.25 11a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM17.5 11.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default GamepadCharge