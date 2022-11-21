import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Armchair2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m18.263 11.134-.695-.282.695.282Zm-1 2.466.694.282-.695-.282ZM5.736 11.134l-.695.282.695-.282Zm1.098 2.706.695-.282-.695.282ZM21.9 12.264l-.703-.262.703.262Zm-1.12 3-.702-.261.702.262Zm-18.68-3 .703-.262-.703.262Zm1.303 3.493-.702.262.702-.262Zm4.394-.983.15-.735-.15.735Zm-.74-.464-.608.438.608-.438Zm9.73.173-.503-.556.503.556Zm-.349.219.286.693-.286-.693ZM6.765 18l-.01.75.01-.75Zm-3.323-2.14.698-.275-.698.274Zm14.293 2.101.105.743-.105-.743Zm2.624-1.69.649.377-.65-.376Zm-2.791-5.42-1 2.467 1.39.564 1-2.466-1.39-.564Zm-9.2 4.699h6.979v-1.5h-6.98v1.5Zm-3.326-4.134 1.098 2.706 1.39-.564-1.098-2.706-1.39.564Zm16.155.586-1.12 3 1.406.525 1.12-3-1.406-.525Zm-19.8.524 1.304 3.493 1.405-.524-1.303-3.493-1.405.524Zm6.97 1.524c-.326 0-.382-.004-.42-.011l-.3 1.47c.223.045.46.041.72.041v-1.5Zm-2.227.072c.086.21.171.435.309.626l1.217-.876c.003.003-.005-.005-.028-.055a7.154 7.154 0 0 1-.108-.259l-1.39.564Zm1.806-.083a.453.453 0 0 1-.28-.167l-1.217.876c.288.4.724.664 1.199.76l.298-1.47Zm-4.02-3.289c.547 0 .97.304 1.116.666l1.39-.564c-.406-1-1.43-1.602-2.505-1.602v1.5Zm0-1.5c-1.707 0-3.17 1.557-2.528 3.277l1.405-.525c-.19-.509.204-1.252 1.124-1.252v-1.5Zm12.641 4.068c-.101.25-.16.395-.214.5-.047.092-.068.108-.069.109l1.006 1.113c.342-.309.5-.747.667-1.158l-1.39-.564Zm-1.22 2.232c.5 0 .968.014 1.377-.155l-.571-1.386c-.068.027-.17.041-.806.041v1.5Zm.937-1.623a.454.454 0 0 1-.131.082l.571 1.386c.207-.085.399-.204.566-.355l-1.006-1.113Zm3.79-4.677c-1.076 0-2.1.602-2.506 1.602l1.39.564c.147-.362.57-.666 1.115-.666v-1.5Zm0 1.5c.92 0 1.313.743 1.123 1.252l1.405.524c.642-1.719-.82-3.276-2.529-3.276v1.5Zm-13.188 6.5h-.11l-.021 1.5h.131v-1.5Zm-4.185-1.23.043.114 1.396-.549a6.26 6.26 0 0 1-.034-.09l-1.405.524Zm4.075 1.23c-1.237-.018-2.265-.72-2.636-1.665l-1.396.549c.622 1.584 2.247 2.59 4.01 2.616l.022-1.5Zm9.757 1.5c.594 0 .965.002 1.307-.046l-.209-1.486c-.212.03-.458.032-1.098.032v1.5Zm3.545-3.747c-.205.548-.279.738-.368.893l1.298.752c.168-.29.29-.624.475-1.12l-1.405-.525Zm-2.238 3.7c1.33-.186 2.517-.933 3.168-2.055l-1.298-.752c-.397.685-1.159 1.193-2.079 1.322l.209 1.486ZM16 17.25H6.886v1.5H16v-1.5Zm.533 0H16v1.5h.533v-1.5Z" fill="currentColor" /><path d="m17.297 4.67-.517.543.517-.544Zm-10.594 0-.517-.544.517.543ZM12 3.25a.75.75 0 0 0 0 1.5v-1.5ZM8.118 4.848a.75.75 0 0 0-.236-1.481l.236 1.481ZM6.75 12V8.571h-1.5V12h1.5Zm10.5-3.429V12h1.5V8.571h-1.5ZM13.2 4.75c1.152 0 1.943.001 2.538.078.577.073.854.206 1.042.385l1.034-1.087c-.515-.49-1.155-.693-1.885-.786-.713-.091-1.618-.09-2.729-.09v1.5Zm5.55 3.821c0-1.055.002-1.925-.095-2.612-.1-.713-.32-1.337-.84-1.833L16.78 5.213c.182.173.314.423.39.955.078.558.08 1.304.08 2.403h1.5Zm-12 0c0-1.1.002-1.845.08-2.403.076-.532.208-.782.39-.955L6.186 4.126c-.52.496-.74 1.12-.84 1.833-.098.687-.096 1.557-.096 2.612h1.5ZM12 4.75h1.2v-1.5H12v1.5ZM7.882 3.367c-.653.104-1.227.312-1.696.76L7.22 5.212c.172-.164.418-.288.898-.365l-.236-1.481Z" fill="currentColor" /><path d="M18 20v-2M6 20v-1.333" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m18.263 11.134-.695-.282.695.282Zm-1 2.466.694.282-.695-.282ZM5.736 11.134l-.695.282.695-.282Zm1.098 2.706.695-.282-.695.282ZM21.9 12.264l-.703-.262.703.262Zm-1.12 3-.702-.261.702.262Zm-18.68-3 .703-.262-.703.262Zm1.303 3.493-.702.262.702-.262Zm4.394-.983.15-.735-.15.735Zm-.74-.464-.608.438.608-.438Zm9.73.173-.503-.556.503.556Zm-.349.219.286.693-.286-.693ZM6.765 18l-.01.75.01-.75Zm-3.323-2.14.698-.275-.698.274Zm14.293 2.101.105.743-.105-.743Zm2.624-1.69.649.377-.65-.376Zm-3.826.979H6.886v1.5h9.647v-1.5Zm1.035-6.398-1 2.466 1.39.564 1-2.466-1.39-.564Zm-9.2 4.698h6.979v-1.5h-6.98v1.5Zm-3.326-4.134 1.098 2.706 1.39-.564-1.098-2.706-1.39.564Zm16.155.586-1.12 3 1.406.525 1.12-3-1.406-.525Zm-19.8.524 1.304 3.493 1.405-.524-1.303-3.493-1.405.524Zm6.97 1.524c-.326 0-.382-.004-.42-.011l-.3 1.47c.223.045.46.041.72.041v-1.5Zm-2.227.072c.086.21.171.435.309.626l1.217-.876c.003.003-.005-.005-.028-.055a7.154 7.154 0 0 1-.108-.259l-1.39.564Zm1.806-.083a.453.453 0 0 1-.28-.167l-1.217.876c.288.4.724.664 1.199.76l.298-1.47Zm-4.02-3.289c.547 0 .97.304 1.116.666l1.39-.564c-.406-1-1.43-1.602-2.505-1.602v1.5Zm0-1.5c-1.707 0-3.17 1.557-2.528 3.277l1.405-.525c-.19-.509.204-1.252 1.124-1.252v-1.5Zm12.641 4.068c-.101.25-.16.395-.214.5-.047.092-.068.108-.069.109l1.006 1.113c.342-.309.5-.747.667-1.158l-1.39-.564Zm-1.22 2.232c.5 0 .968.014 1.377-.155l-.571-1.386c-.068.027-.17.041-.806.041v1.5Zm.937-1.623a.454.454 0 0 1-.131.082l.571 1.386c.207-.085.399-.204.566-.355l-1.006-1.113Zm3.79-4.677c-1.076 0-2.1.602-2.506 1.602l1.39.564c.147-.362.57-.666 1.115-.666v-1.5Zm0 1.5c.92 0 1.313.743 1.123 1.252l1.405.524c.642-1.719-.82-3.276-2.529-3.276v1.5Zm-13.188 6.5h-.11l-.021 1.5h.131v-1.5Zm-4.185-1.23.043.114 1.396-.549a6.26 6.26 0 0 1-.034-.09l-1.405.524Zm4.075 1.23c-1.237-.018-2.265-.72-2.636-1.665l-1.396.549c.622 1.584 2.247 2.59 4.01 2.616l.022-1.5Zm9.757 1.5c.594 0 .965.002 1.307-.046l-.209-1.486c-.212.03-.458.032-1.098.032v1.5Zm3.545-3.747c-.205.548-.279.738-.368.893l1.298.752c.168-.29.29-.624.475-1.12l-1.405-.525Zm-2.238 3.7c1.33-.186 2.517-.933 3.168-2.055l-1.298-.752c-.397.685-1.159 1.193-2.079 1.322l.209 1.486Z" fill="currentColor" /><path opacity={0.5} d="M6 12V8.571c0-2.155 0-3.232.703-3.902C7.406 4 8.537 4 10.8 4h2.4c2.263 0 3.394 0 4.097.67C18 5.338 18 6.415 18 8.57V12" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M18 20v-2M6 20v-1.333" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m18.263 11.134-.695-.282.695.282Zm-1 2.466.694.282-.695-.282ZM5.736 11.134l-.695.282.695-.282Zm1.098 2.706.695-.282-.695.282ZM21.9 12.264l-.703-.262.703.262Zm-1.12 3-.702-.261.702.262Zm-18.68-3 .703-.262-.703.262Zm1.303 3.493-.702.262.702-.262Zm4.394-.983.15-.735-.15.735Zm-.74-.464-.608.438.608-.438Zm9.73.173-.503-.556.503.556Zm-.349.219.286.693-.286-.693ZM6.765 18l-.01.75.01-.75Zm-3.323-2.14.698-.275-.698.274Zm14.293 2.101.105.743-.105-.743Zm2.624-1.69.649.377-.65-.376Zm-3.826.979H6.886v1.5h9.647v-1.5Zm1.035-6.398-1 2.466 1.39.564 1-2.466-1.39-.564Zm-9.2 4.698h6.979v-1.5h-6.98v1.5Zm-3.326-4.134 1.098 2.706 1.39-.564-1.098-2.706-1.39.564Zm16.155.586-1.12 3 1.406.525 1.12-3-1.406-.525Zm-19.8.524 1.304 3.493 1.405-.524-1.303-3.493-1.405.524Zm6.97 1.524c-.326 0-.382-.004-.42-.011l-.3 1.47c.223.045.46.041.72.041v-1.5Zm-2.227.072c.086.21.171.435.309.626l1.217-.876c.003.003-.005-.005-.028-.055a7.154 7.154 0 0 1-.108-.259l-1.39.564Zm1.806-.083a.453.453 0 0 1-.28-.167l-1.217.876c.288.4.724.664 1.199.76l.298-1.47Zm-4.02-3.289c.547 0 .97.304 1.116.666l1.39-.564c-.406-1-1.43-1.602-2.505-1.602v1.5Zm0-1.5c-1.707 0-3.17 1.557-2.528 3.277l1.405-.525c-.19-.509.204-1.252 1.124-1.252v-1.5Zm12.641 4.068c-.101.25-.16.395-.214.5-.047.092-.068.108-.069.109l1.006 1.113c.342-.309.5-.747.667-1.158l-1.39-.564Zm-1.22 2.232c.5 0 .968.014 1.377-.155l-.571-1.386c-.068.027-.17.041-.806.041v1.5Zm.937-1.623a.454.454 0 0 1-.131.082l.571 1.386c.207-.085.399-.204.566-.355l-1.006-1.113Zm3.79-4.677c-1.076 0-2.1.602-2.506 1.602l1.39.564c.147-.362.57-.666 1.115-.666v-1.5Zm0 1.5c.92 0 1.313.743 1.123 1.252l1.405.524c.642-1.719-.82-3.276-2.529-3.276v1.5Zm-13.188 6.5h-.11l-.021 1.5h.131v-1.5Zm-4.185-1.23.043.114 1.396-.549a6.26 6.26 0 0 1-.034-.09l-1.405.524Zm4.075 1.23c-1.237-.018-2.265-.72-2.636-1.665l-1.396.549c.622 1.584 2.247 2.59 4.01 2.616l.022-1.5Zm9.757 1.5c.594 0 .965.002 1.307-.046l-.209-1.486c-.212.03-.458.032-1.098.032v1.5Zm3.545-3.747c-.205.548-.279.738-.368.893l1.298.752c.168-.29.29-.624.475-1.12l-1.405-.525Zm-2.238 3.7c1.33-.186 2.517-.933 3.168-2.055l-1.298-.752c-.397.685-1.159 1.193-2.079 1.322l.209 1.486Z" fill="currentColor" /><path d="M6 12V8.571c0-2.155 0-3.232.703-3.902C7.406 4 8.537 4 10.8 4h2.4c2.263 0 3.394 0 4.097.67C18 5.338 18 6.415 18 8.57V12" stroke="currentColor" strokeWidth={1.5} /><path d="M18 20v-2M6 20v-1.333" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.749 3.25h2.502c1.088 0 1.976 0 2.678.09.73.093 1.37.296 1.885.786.52.496.74 1.12.84 1.833.096.675.096 1.527.096 2.557v1.057c.4-.21.857-.323 1.323-.323 1.708 0 3.17 1.557 2.53 3.277l-1.12 3-.023.062c-.173.463-.291.78-.452 1.059-.498.858-1.309 1.497-2.258 1.833V20a.75.75 0 0 1-1.5 0v-1.254c-.188.004-.4.004-.655.004H6.75V20a.75.75 0 0 1-1.5 0v-1.333c0-.062.007-.122.021-.179-1.14-.398-2.086-1.231-2.527-2.354l-.04-.108-1.306-3.5c-.642-1.719.82-3.276 2.529-3.276.466 0 .922.113 1.323.323V8.516c0-1.03 0-1.882.095-2.557.1-.713.32-1.337.84-1.833.516-.49 1.156-.693 1.886-.786.702-.09 1.59-.09 2.678-.09ZM5.25 11.928V12h.03l.86 2.122.02.049c.08.196.162.4.289.577.288.4.724.664 1.199.76.207.043.427.042.666.042h7.139c.46.001.891.002 1.271-.155.207-.085.399-.204.566-.355.316-.286.476-.683.63-1.066l.037-.092.764-1.882h.03v-.072l.207-.512c.147-.362.57-.666 1.115-.666.92 0 1.314.743 1.124 1.252l-1.12 3c-.204.55-.278.74-.367.894-.397.685-1.159 1.193-2.079 1.322-.212.03-.458.032-1.098.032H6.776c-1.237-.018-2.265-.72-2.636-1.665a6.26 6.26 0 0 1-.034-.09l-1.303-3.493c-.19-.509.204-1.252 1.124-1.252.546 0 .968.304 1.115.666l.208.512Zm12-.292V8.57c0-1.1-.002-1.845-.08-2.403-.076-.532-.208-.782-.39-.955-.188-.18-.465-.312-1.042-.385-.595-.077-1.386-.078-2.538-.078h-2.4c-1.152 0-1.943.001-2.538.078-.577.073-.854.206-1.042.385-.182.173-.314.423-.39.955-.078.558-.08 1.304-.08 2.403v3.065l.78 1.922c.053.13.083.203.108.259a.502.502 0 0 0 .028.055c.05.07.145.14.28.167.04.007.095.011.422.011h6.979c.637 0 .738-.014.806-.042a.453.453 0 0 0 .131-.081c.002-.001.022-.017.069-.11.053-.104.113-.248.214-.499l.683-1.682Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.533 18H6.75v2a.75.75 0 1 1-1.5 0v-2.324c-.829-.362-1.49-1.005-1.808-1.817-.01-.023-.02-.05-.039-.102L2.1 12.264C1.685 11.15 2.613 10 3.927 10c.81 0 1.534.453 1.81 1.134l1.098 2.706c.1.246.15.37.222.47a1.2 1.2 0 0 0 .74.463c.13.027.277.027.57.027h6.98c.569 0 .853 0 1.091-.098.13-.054.248-.128.349-.219.184-.166.281-.405.475-.883l1.001-2.466c.276-.68 1-1.134 1.81-1.134 1.314 0 2.242 1.15 1.827 2.264l-1.12 3c-.195.524-.292.785-.421 1.008a3.43 3.43 0 0 1-1.609 1.404V20a.75.75 0 1 1-1.5 0v-2.005c-.187.005-.415.005-.717.005Z" fill="currentColor" /><path d="M13.236 3.5h-2.472c-1.1 0-1.976 0-2.66.088-.706.09-1.285.28-1.746.72-.464.441-.669 1.003-.765 1.685-.093.658-.093 1.495-.093 2.54v.88l.21.15c.416.294.752.698.954 1.195L7.898 13.8h7.449l.363-.001h.002l.388-.007.126-.3.11-.268 1-2.466c.202-.497.538-.9.954-1.196l.21-.15v-.88c0-1.044 0-1.881-.093-2.539-.096-.682-.301-1.244-.765-1.686-.46-.438-1.04-.629-1.745-.72-.685-.087-1.56-.087-2.661-.087Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.533 18H6.75v2a.75.75 0 1 1-1.5 0v-2.324c-.829-.362-1.49-1.005-1.808-1.817-.01-.023-.02-.05-.039-.102L2.1 12.264C1.685 11.15 2.613 10 3.927 10c.81 0 1.534.453 1.81 1.134l1.098 2.706c.1.246.15.37.222.47a1.2 1.2 0 0 0 .74.463c.13.027.277.027.57.027h6.98c.569 0 .853 0 1.091-.098.13-.054.248-.128.349-.219.184-.166.281-.405.475-.883l1.001-2.466c.276-.68 1-1.134 1.81-1.134 1.314 0 2.242 1.15 1.827 2.264l-1.12 3c-.195.524-.292.785-.421 1.008a3.43 3.43 0 0 1-1.609 1.404V20a.75.75 0 1 1-1.5 0v-2.005c-.187.005-.415.005-.717.005Z" fill="currentColor" /><path opacity={0.5} d="M13.236 3.5h-2.472c-1.1 0-1.976 0-2.66.088-.706.09-1.285.28-1.746.72-.464.441-.669 1.003-.765 1.685-.093.658-.093 1.495-.093 2.54v2.195c.097.123.178.26.237.406l1.098 2.706c.1.246.15.37.222.47a1.2 1.2 0 0 0 .74.463c.13.027.277.027.57.027h6.98c.569 0 .853 0 1.091-.098.13-.054.248-.128.349-.219.184-.166.281-.405.475-.883l1.001-2.466c.06-.147.14-.283.237-.406V8.533c0-1.045 0-1.882-.093-2.54-.096-.682-.301-1.244-.765-1.686-.46-.438-1.04-.629-1.745-.72-.685-.087-1.56-.087-2.661-.087Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Armchair2