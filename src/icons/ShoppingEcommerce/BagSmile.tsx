import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const BagSmile = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9 6V5a3 3 0 1 1 6 0v1M9.17 15a3.001 3.001 0 0 0 5.66 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M20.224 12.526c-.586-3.121-.878-4.682-1.99-5.604C17.125 6 15.537 6 12.36 6h-.72c-3.176 0-4.764 0-5.875.922-1.11.922-1.403 2.483-1.989 5.604-.823 4.389-1.234 6.583-.034 8.029C4.942 22 7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445.696-.84.85-1.93.696-3.555" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.794 12.03C4.331 9.342 4.6 8 5.487 7.134a4 4 0 0 1 .53-.434C7.04 6 8.41 6 11.15 6h1.703c2.739 0 4.108 0 5.13.7.19.13.367.276.53.435.888.865 1.157 2.208 1.694 4.894.771 3.856 1.157 5.784.269 7.15-.16.248-.348.477-.56.683C18.75 21 16.785 21 12.853 21h-1.703c-3.933 0-5.899 0-7.065-1.138a3.998 3.998 0 0 1-.559-.683c-.888-1.366-.502-3.294.27-7.15Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M9 6V5a3 3 0 1 1 6 0v1M9.17 15a3.001 3.001 0 0 0 5.66 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.794 12.03C4.331 9.342 4.6 8 5.487 7.134a4 4 0 0 1 .53-.434C7.04 6 8.41 6 11.15 6h1.703c2.739 0 4.108 0 5.13.7.19.13.367.276.53.435.888.865 1.157 2.208 1.694 4.894.771 3.856 1.157 5.784.269 7.15-.16.248-.348.477-.56.683C18.75 21 16.785 21 12.853 21h-1.703c-3.933 0-5.899 0-7.065-1.138a3.998 3.998 0 0 1-.559-.683c-.888-1.366-.502-3.294.27-7.15Z" stroke="currentColor" strokeWidth={1.5} /><path d="M9 6V5a3 3 0 1 1 6 0v1M9.17 15a3.001 3.001 0 0 0 5.66 0" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.75A2.25 2.25 0 0 0 9.75 5v.254c.418-.004.868-.004 1.355-.004h1.79c.487 0 .938 0 1.355.004V5A2.25 2.25 0 0 0 12 2.75Zm3.75 2.557V5a3.75 3.75 0 0 0-7.5 0v.307c-.135.01-.265.021-.391.035-.878.095-1.613.293-2.265.74a4.75 4.75 0 0 0-.63.516c-.566.552-.905 1.234-1.17 2.076-.257.819-.465 1.859-.727 3.166l-.019.095c-.376 1.883-.673 3.367-.758 4.549-.088 1.208.034 2.223.606 3.104.191.294.414.565.664.81.752.734 1.724 1.052 2.925 1.204 1.176.148 2.69.148 4.61.148h1.81c1.921 0 3.434 0 4.61-.148 1.201-.152 2.174-.47 2.925-1.204a4.75 4.75 0 0 0 .664-.81c.572-.88.694-1.896.607-3.104-.086-1.182-.382-2.666-.76-4.549l-.018-.095c-.261-1.307-.47-2.347-.727-3.166-.265-.842-.604-1.524-1.17-2.076a4.747 4.747 0 0 0-.63-.516c-.652-.447-1.387-.645-2.265-.74a11.401 11.401 0 0 0-.39-.035ZM8.02 6.833c-.747.08-1.208.233-1.578.486a3.25 3.25 0 0 0-.431.354c-.321.313-.56.735-.786 1.451-.23.733-.424 1.693-.695 3.052-.39 1.948-.667 3.34-.744 4.416-.077 1.062.052 1.693.368 2.179.13.2.283.387.454.554.415.405 1.008.655 2.065.789 1.07.135 2.49.136 4.476.136h1.703c1.986 0 3.404-.001 4.475-.136 1.057-.134 1.65-.384 2.065-.789a3.25 3.25 0 0 0 .454-.554c.316-.486.445-1.117.369-2.18-.078-1.076-.355-2.467-.744-4.415-.272-1.359-.465-2.32-.696-3.052-.225-.716-.465-1.138-.786-1.451a3.246 3.246 0 0 0-.43-.354c-.37-.253-.832-.405-1.579-.486-.763-.082-1.743-.083-3.129-.083H11.15c-1.386 0-2.366.001-3.13.083Zm.901 7.46a.75.75 0 0 1 .957.457 2.251 2.251 0 0 0 4.244 0 .75.75 0 1 1 1.415.5 3.751 3.751 0 0 1-7.073 0 .75.75 0 0 1 .457-.957Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8.25 7.013V6a3.75 3.75 0 1 1 7.5 0v1.013c1.297.037 2.087.17 2.692.667.83.68 1.06 1.834 1.523 4.143l.6 3c.664 3.32.996 4.98.096 6.079C19.76 22 18.067 22 14.68 22H9.32c-3.386 0-5.08 0-5.98-1.098-.9-1.098-.568-2.758.096-6.079l.6-3c.462-2.309.693-3.463 1.522-4.143.606-.496 1.396-.63 2.693-.667ZM9.75 6a2.25 2.25 0 0 1 4.5 0v1H9.75V6ZM12 17.25a2.251 2.251 0 0 1-2.122-1.5.75.75 0 1 0-1.414.5 3.751 3.751 0 0 0 7.073 0 .75.75 0 0 0-1.415-.5A2.251 2.251 0 0 1 12 17.25Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M4.083 11.894c.439-2.34.658-3.511 1.491-4.203C6.408 7 7.598 7 9.98 7h4.04c2.383 0 3.573 0 4.407.691.833.692 1.052 1.862 1.491 4.203l.75 4c.617 3.292.926 4.938.026 6.022C19.794 23 18.12 23 14.771 23H9.23c-3.349 0-5.024 0-5.923-1.084-.9-1.084-.591-2.73.026-6.022l.75-4Z" fill="currentColor" /><path d="M9.75 5.985a2.25 2.25 0 0 1 4.5 0v1c.566 0 1.062.002 1.5.015V5.985a3.75 3.75 0 1 0-7.5 0V7c.438-.013.934-.015 1.5-.015v-1ZM9.878 15.75a2.251 2.251 0 0 0 4.245 0 .75.75 0 1 1 1.414.5 3.751 3.751 0 0 1-7.073 0 .75.75 0 0 1 1.414-.5Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default BagSmile