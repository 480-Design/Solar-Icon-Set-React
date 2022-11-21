import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Paw = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17.971 18.7c.201 1.179-.67 2.265-1.846 2.3-.283.008-.725-.113-1.61-.356-.505-.138-.758-.207-1.01-.259a7.581 7.581 0 0 0-3.01 0c-.252.051-.505.12-1.01.26-.885.242-1.327.363-1.61.355-1.175-.035-2.047-1.121-1.846-2.3.048-.284.253-.7.663-1.535l.879-1.789c1.585-3.228 2.378-4.842 3.52-5.227.59-.199 1.228-.199 1.819 0 1.14.385 1.934 1.999 3.52 5.227" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M6.145 5.527c.412 1.631 1.576 2.717 2.6 2.426 1.025-.292 1.522-1.85 1.11-3.48-.412-1.631-1.576-2.717-2.6-2.426-1.025.292-1.522 1.85-1.11 3.48ZM17.855 5.527c-.412 1.631-1.576 2.717-2.6 2.426-1.025-.292-1.522-1.85-1.11-3.48.412-1.631 1.576-2.717 2.6-2.426 1.025.292 1.522 1.85 1.11 3.48ZM2.202 12.297c.45 1.205 1.508 1.937 2.363 1.635.855-.302 1.183-1.524.733-2.73-.45-1.204-1.508-1.936-2.363-1.634-.855.302-1.183 1.524-.733 2.73ZM21.798 12.297c-.45 1.205-1.508 1.937-2.363 1.635-.855-.302-1.183-1.524-.733-2.73.45-1.204 1.508-1.936 2.363-1.634.855.302 1.183 1.524.733 2.73Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.57 15.376c1.586-3.228 2.38-4.842 3.52-5.227.591-.199 1.229-.199 1.82 0 1.14.385 1.934 1.999 3.52 5.227l.878 1.79c.41.833.614 1.25.663 1.534.201 1.179-.67 2.265-1.846 2.3-.283.008-.725-.113-1.61-.356-.505-.138-.758-.207-1.01-.259a7.581 7.581 0 0 0-3.01 0c-.252.051-.505.12-1.01.26-.885.242-1.327.363-1.61.355-1.175-.035-2.047-1.121-1.846-2.3.048-.284.253-.7.663-1.535l.879-1.789Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M6.145 5.527c.412 1.631 1.576 2.717 2.6 2.426 1.025-.292 1.522-1.85 1.11-3.48-.412-1.631-1.576-2.717-2.6-2.426-1.025.292-1.522 1.85-1.11 3.48ZM17.855 5.527c-.412 1.631-1.576 2.717-2.6 2.426-1.025-.292-1.522-1.85-1.11-3.48.412-1.631 1.576-2.717 2.6-2.426 1.025.292 1.522 1.85 1.11 3.48ZM2.202 12.297c.45 1.205 1.508 1.937 2.363 1.635.855-.302 1.183-1.524.733-2.73-.45-1.204-1.508-1.936-2.363-1.634-.855.302-1.183 1.524-.733 2.73ZM21.798 12.297c-.45 1.205-1.508 1.937-2.363 1.635-.855-.302-1.183-1.524-.733-2.73.45-1.204 1.508-1.936 2.363-1.634.855.302 1.183 1.524.733 2.73Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.57 15.376c1.586-3.228 2.38-4.842 3.52-5.227.591-.199 1.229-.199 1.82 0 1.14.385 1.934 1.999 3.52 5.227l.878 1.79c.41.833.614 1.25.663 1.534.201 1.179-.67 2.265-1.846 2.3-.283.008-.725-.113-1.61-.356-.505-.138-.758-.207-1.01-.259a7.581 7.581 0 0 0-3.01 0c-.252.051-.505.12-1.01.26-.885.242-1.327.363-1.61.355-1.175-.035-2.047-1.121-1.846-2.3.048-.284.253-.7.663-1.535l.879-1.789ZM6.145 5.527c.412 1.631 1.576 2.717 2.6 2.426 1.025-.292 1.522-1.85 1.11-3.48-.412-1.631-1.576-2.717-2.6-2.426-1.025.292-1.522 1.85-1.11 3.48ZM17.855 5.527c-.412 1.631-1.576 2.717-2.6 2.426-1.025-.292-1.522-1.85-1.11-3.48.412-1.631 1.576-2.717 2.6-2.426 1.025.292 1.522 1.85 1.11 3.48ZM2.202 12.297c.45 1.205 1.508 1.937 2.363 1.635.855-.302 1.183-1.524.733-2.73-.45-1.204-1.508-1.936-2.363-1.634-.855.302-1.183 1.524-.733 2.73ZM21.798 12.297c-.45 1.205-1.508 1.937-2.363 1.635-.855-.302-1.183-1.524-.733-2.73.45-1.204 1.508-1.936 2.363-1.634.855.302 1.183 1.524.733 2.73Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.296 1.99c.593.553 1.051 1.368 1.286 2.299.236.932.22 1.873-.028 2.654-.245.767-.762 1.492-1.603 1.731-.851.242-1.66-.117-2.247-.665-.593-.553-1.051-1.367-1.286-2.298-.236-.932-.22-1.873.028-2.654.245-.768.762-1.492 1.603-1.731.851-.242 1.66.117 2.247.665ZM8.273 3.089c-.354-.33-.64-.369-.814-.32-.183.053-.427.253-.584.745-.152.479-.18 1.132-.003 1.83.177.7.506 1.244.855 1.57.354.33.64.368.814.318.183-.052.427-.252.584-.744.152-.479.18-1.132.003-1.83-.177-.7-.506-1.244-.855-1.57ZM10.85 9.439a3.596 3.596 0 0 1 2.3 0c.827.279 1.429.972 1.987 1.857.56.89 1.17 2.129 1.944 3.707l.907 1.846c.2.405.358.728.472.985.113.253.21.5.25.74.276 1.613-.917 3.127-2.563 3.175a3.086 3.086 0 0 1-.77-.103 30.148 30.148 0 0 1-1.044-.274l-.016-.004c-.514-.142-.739-.203-.961-.248a6.836 6.836 0 0 0-2.712 0 15.27 15.27 0 0 0-.961.248l-.016.004c-.429.117-.772.212-1.043.274-.266.062-.527.11-.771.103-1.646-.048-2.839-1.562-2.563-3.175.04-.24.138-.487.25-.74.114-.257.273-.58.472-.985l.907-1.846c.775-1.578 1.383-2.818 1.944-3.707.558-.885 1.16-1.578 1.988-1.857Zm1.82 1.421a2.095 2.095 0 0 0-1.34 0c-.313.105-.678.412-1.198 1.236-.513.814-1.087 1.98-1.888 3.61l-.879 1.79c-.207.422-.353.72-.455.948a1.926 1.926 0 0 0-.142.383c-.127.744.424 1.402 1.128 1.423.04.001.14-.007.388-.065a29.65 29.65 0 0 0 1.002-.264l.03-.008c.477-.131.753-.207 1.03-.263a8.334 8.334 0 0 1 3.307 0c.278.056.554.132 1.032.263l.029.008c.448.123.763.209 1.002.264.247.058.349.066.388.065.704-.02 1.255-.68 1.128-1.424a1.925 1.925 0 0 0-.142-.382 31.03 31.03 0 0 0-.455-.948l-.879-1.79c-.8-1.63-1.375-2.796-1.888-3.61-.52-.824-.885-1.13-1.198-1.236ZM13.418 4.289c.235-.931.693-1.746 1.286-2.298.587-.548 1.396-.907 2.247-.665.841.239 1.358.963 1.603 1.731.249.78.264 1.722.028 2.654-.235.931-.693 1.745-1.286 2.298-.587.548-1.396.907-2.247.665-.841-.24-1.358-.964-1.603-1.731-.248-.781-.264-1.722-.028-2.654Zm3.123-1.52c-.174-.05-.46-.012-.814.319-.348.325-.678.869-.855 1.568-.177.699-.15 1.352.004 1.831.156.492.4.692.584.744.173.05.459.012.813-.319.349-.325.678-.869.855-1.568.177-.7.15-1.352-.003-1.831-.157-.492-.401-.692-.584-.744ZM4.695 9.203c-.563-.39-1.292-.596-2.01-.342-.721.255-1.152.876-1.33 1.538-.179.664-.128 1.43.144 2.16.273.73.739 1.345 1.306 1.738.563.39 1.292.595 2.01.342.721-.255 1.152-.876 1.33-1.538.179-.664.129-1.43-.144-2.16-.273-.73-.739-1.345-1.306-1.738Zm-.853 1.234c.288.2.576.553.754 1.028.177.475.188.922.1 1.246-.087.326-.247.466-.381.514-.138.049-.365.04-.657-.162-.288-.2-.576-.554-.754-1.028-.177-.475-.188-.922-.1-1.246.087-.326.247-.466.381-.514.138-.049.365-.04.657.162ZM21.315 8.86c-.718-.253-1.447-.046-2.01.343-.567.393-1.033 1.007-1.306 1.738-.272.73-.322 1.496-.144 2.16.178.662.609 1.283 1.33 1.538.718.254 1.447.047 2.01-.342.567-.393 1.033-1.007 1.306-1.738.273-.73.323-1.496.144-2.16-.178-.662-.609-1.283-1.33-1.538Zm-1.91 2.605c.177-.475.465-.829.753-1.028.292-.202.52-.21.657-.162.134.047.294.188.382.514.087.324.076.77-.101 1.246-.178.474-.466.828-.754 1.028-.292.202-.519.21-.657.162-.134-.047-.294-.188-.382-.514-.087-.324-.076-.77.101-1.246Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.57 15.376c1.586-3.228 2.38-4.842 3.52-5.227.591-.199 1.229-.199 1.82 0 1.14.385 1.934 1.999 3.52 5.227l.878 1.79c.41.833.614 1.25.663 1.534.201 1.179-.67 2.265-1.846 2.3-.283.008-.725-.113-1.61-.356-.505-.138-.758-.207-1.01-.259a7.581 7.581 0 0 0-3.01 0c-.252.051-.505.12-1.01.26-.885.242-1.327.363-1.61.355-1.175-.035-2.047-1.121-1.846-2.3.048-.284.253-.7.663-1.535l.879-1.789ZM6.145 5.527c.412 1.631 1.576 2.717 2.6 2.426 1.025-.292 1.522-1.85 1.11-3.48-.412-1.631-1.576-2.717-2.6-2.426-1.025.292-1.522 1.85-1.11 3.48ZM17.855 5.527c-.412 1.631-1.576 2.717-2.6 2.426-1.025-.292-1.522-1.85-1.11-3.48.412-1.631 1.576-2.717 2.6-2.426 1.025.292 1.522 1.85 1.11 3.48ZM2.202 12.297c.45 1.205 1.508 1.937 2.363 1.635.855-.302 1.183-1.524.733-2.73-.45-1.204-1.508-1.936-2.363-1.634-.855.302-1.183 1.524-.733 2.73ZM21.798 12.297c-.45 1.205-1.508 1.937-2.363 1.635-.855-.302-1.183-1.524-.733-2.73.45-1.204 1.508-1.936 2.363-1.634.855.302 1.183 1.524.733 2.73Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6.145 5.527c.412 1.631 1.576 2.717 2.6 2.426 1.025-.292 1.522-1.85 1.11-3.48-.412-1.631-1.576-2.717-2.6-2.426-1.025.292-1.522 1.85-1.11 3.48ZM17.855 5.527c-.412 1.631-1.576 2.717-2.6 2.426-1.025-.292-1.522-1.85-1.11-3.48.412-1.631 1.576-2.717 2.6-2.426 1.025.292 1.522 1.85 1.11 3.48ZM2.202 12.297c.45 1.205 1.508 1.937 2.363 1.635.855-.302 1.183-1.524.733-2.73-.45-1.204-1.508-1.936-2.363-1.634-.855.302-1.183 1.524-.733 2.73ZM21.798 12.297c-.45 1.205-1.508 1.937-2.363 1.635-.855-.302-1.183-1.524-.733-2.73.45-1.204 1.508-1.936 2.363-1.634.855.302 1.183 1.524.733 2.73Z" fill="currentColor" /><path opacity={0.5} d="M7.57 15.376c1.586-3.228 2.38-4.842 3.52-5.227.591-.199 1.229-.199 1.82 0 1.14.385 1.934 1.999 3.52 5.227l.878 1.79c.41.833.614 1.25.663 1.534.201 1.179-.67 2.265-1.846 2.3-.283.008-.725-.113-1.61-.356-.505-.138-.758-.207-1.01-.259a7.581 7.581 0 0 0-3.01 0c-.252.051-.505.12-1.01.26-.885.242-1.327.363-1.61.355-1.175-.035-2.047-1.121-1.846-2.3.048-.284.253-.7.663-1.535l.879-1.789Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Paw