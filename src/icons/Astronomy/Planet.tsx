import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Planet = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8 5.07A8 8 0 1 1 5.07 8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M13.83 14.926c-5.428 2.893-10.648 3.927-11.66 2.31-.532-.852.211-2.27 1.83-3.846m13.849-7.2c2.011-.37 3.49-.21 3.98.573.798 1.275-1.26 3.817-4.829 6.253" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M17.849 6.19c2.011-.37 3.49-.21 3.98.573 1.011 1.616-2.57 5.271-7.998 8.163-5.429 2.893-10.649 3.927-11.66 2.31-.533-.852.21-2.27 1.829-3.846" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="M17.849 6.19c2.011-.37 3.49-.21 3.98.573 1.011 1.616-2.57 5.271-7.998 8.163-5.429 2.893-10.649 3.927-11.66 2.31-.533-.852.21-2.27 1.829-3.846" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 4.75a7.25 7.25 0 0 0-5.314 12.182c1.942-.448 4.336-1.359 6.792-2.667 2.294-1.223 4.23-2.572 5.604-3.822A7.253 7.253 0 0 0 12 4.75Zm7.245 7.531c-1.382 1.126-3.112 2.269-5.062 3.307-2.12 1.13-4.224 1.99-6.083 2.525a7.25 7.25 0 0 0 11.144-5.832ZM6.21 18.561a8.75 8.75 0 0 0 14.481-7.58l.09-.09c.754-.77 1.342-1.54 1.672-2.268.324-.716.458-1.544.012-2.258-.42-.67-1.185-.96-1.956-1.064-.771-.104-1.702-.044-2.72.138a8.75 8.75 0 0 0-14.481 7.58c-.758.761-1.354 1.52-1.703 2.236-.366.75-.54 1.627-.07 2.38.433.691 1.232.979 2.032 1.074.754.09 1.657.029 2.643-.148Zm-1.235-1.343A8.727 8.727 0 0 1 3.708 14.8c-.344.41-.595.785-.756 1.114-.277.567-.208.825-.145.925.072.116.305.305.937.38.343.041.755.042 1.231-.001Zm14.05-10.436a5.879 5.879 0 0 1 1.285.005c.594.08.813.262.883.374.06.095.126.33-.107.844-.156.344-.42.748-.794 1.195a8.724 8.724 0 0 0-1.267-2.418Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19.992 11.643c.283-.253.546-.504.789-.752.754-.77 1.342-1.54 1.672-2.268.324-.716.458-1.544.012-2.258-.42-.67-1.185-.96-1.956-1.064-.79-.107-1.75-.041-2.797.152l-.888.165a8 8 0 0 0-12.82 6.641l-.527.593c-.84.817-1.497 1.636-1.872 2.403-.366.75-.54 1.627-.07 2.38.433.691 1.232.979 2.032 1.074.825.098 1.828.016 2.923-.201.215-.043.436-.091.66-.145a8.046 8.046 0 0 1-1.311-1.26c-.853.146-1.56.18-2.095.116-.632-.075-.865-.264-.937-.38-.063-.1-.132-.358.145-.925.241-.494.688-1.092 1.342-1.758a7.979 7.979 0 0 0 1.545 2.947c.117-.02.237-.042.36-.067 2.02-.4 4.613-1.351 7.28-2.772 2.665-1.42 4.848-3.012 6.227-4.42a7.98 7.98 0 0 0-1.545-2.947c.885-.151 1.61-.182 2.149-.11.594.08.813.262.883.374.06.095.126.33-.107.844-.227.502-.683 1.129-1.377 1.836l-.003.003c.161.576.259 1.179.286 1.799Z" fill="currentColor" /><path d="M12 20a8 8 0 0 0 7.992-8.357c-1.481 1.327-3.49 2.71-5.809 3.945-2.491 1.328-4.958 2.281-7.032 2.775A7.965 7.965 0 0 0 12 20Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" fill="currentColor" /><path d="M17.712 5.453c1.047-.193 2.006-.259 2.797-.152.77.103 1.536.393 1.956 1.064.446.714.312 1.542-.012 2.258-.33.728-.918 1.499-1.672 2.268-1.516 1.547-3.836 3.226-6.597 4.697-2.763 1.472-5.495 2.484-7.694 2.92-1.095.217-2.098.299-2.923.201-.8-.095-1.6-.383-2.032-1.075-.47-.752-.296-1.63.07-2.379.375-.768 1.032-1.586 1.872-2.403L4 12.416c0 .219.083.71.168 1.146.045.23.09.444.123.596-.652.666-1.098 1.263-1.339 1.756-.277.567-.208.825-.145.925.072.116.305.305.937.38.609.073 1.44.018 2.455-.183 2.02-.4 4.613-1.351 7.28-2.772 2.667-1.42 4.85-3.015 6.23-4.423.694-.707 1.15-1.334 1.377-1.836.233-.515.167-.75.107-.844-.07-.112-.289-.294-.883-.374-.542-.072-1.272-.041-2.163.112L16.87 5.656c.338-.101.658-.17.842-.203Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Planet