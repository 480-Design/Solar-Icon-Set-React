import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const FolderFavouriteBookmark = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M18 6v4.853c0 .29 0 .435-.095.494-.095.058-.224-.007-.484-.136l-1.242-.622c-.088-.043-.132-.065-.179-.065-.047 0-.091.022-.179.065l-1.242.622c-.26.13-.39.194-.484.136-.095-.06-.095-.204-.095-.494V6" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M22 11.798c0-2.632 0-3.949-.77-4.804a2.984 2.984 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-3" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M18 6v4.853c0 .29 0 .435-.095.494-.095.058-.224-.007-.484-.136l-1.242-.622c-.088-.043-.132-.065-.179-.065-.047 0-.091.022-.179.065l-1.242.622c-.26.13-.39.194-.484.136-.095-.06-.095-.204-.095-.494V6" opacity={0.5} /><path stroke="currentColor" strokeWidth={1.5} d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77.079.07.154.145.224.224.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14V6.95Z" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M18 6v4.853c0 .29 0 .435-.095.494-.095.058-.224-.007-.484-.136l-1.242-.622c-.088-.043-.132-.065-.179-.065-.047 0-.091.022-.179.065l-1.242.622c-.26.13-.39.194-.484.136-.095-.06-.095-.204-.095-.494V6" /><path stroke="currentColor" strokeWidth={1.5} d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77.079.07.154.145.224.224.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14V6.95Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M6.86 1.25h.127c.351 0 .577 0 .798.02a4.75 4.75 0 0 1 2.59 1.073c.17.142.33.302.579.55l.576.577c.846.845 1.171 1.161 1.547 1.37.218.121.449.217.689.286.413.117.866.124 2.062.124h.425c1.273 0 2.3 0 3.111.102.841.106 1.556.332 2.144.86.098.088.192.182.28.28.529.588.754 1.303.86 2.144.102.812.102 1.838.102 3.111v2.31c0 1.837 0 3.293-.153 4.432-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V6.86c0-.797 0-1.303.082-1.74A4.75 4.75 0 0 1 5.12 1.331c.438-.082.944-.082 1.74-.082Zm.09 1.5c-.917 0-1.271.003-1.553.056a3.25 3.25 0 0 0-2.59 2.591c-.054.282-.057.636-.057 1.553V14c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289v-2.202c0-1.336-.001-2.268-.09-2.975-.087-.689-.246-1.06-.487-1.328a2.238 2.238 0 0 0-.168-.168c-.268-.241-.64-.4-1.328-.487a8.356 8.356 0 0 0-.427-.041v4.081c0 .119 0 .28-.02.417a.948.948 0 0 1-.43.688.948.948 0 0 1-.808.077 2.964 2.964 0 0 1-.382-.168l-.024-.013L16 11.338l-1.086.543-.024.013c-.106.053-.25.125-.382.168a.948.948 0 0 1-.807-.077.948.948 0 0 1-.431-.688c-.02-.137-.02-.298-.02-.417V6.537a4.75 4.75 0 0 1-.902-.386c-.582-.324-1.06-.801-1.8-1.543l-.078-.078-.55-.55a8.03 8.03 0 0 0-.503-.482 3.25 3.25 0 0 0-1.771-.734 8.029 8.029 0 0 0-.696-.014Zm7.8 3.993v3.543l.736-.367.007-.004c.046-.025.26-.141.507-.141s.46.116.507.14a.234.234 0 0 0 .007.005l.736.367V6.753c-.32-.002-.667-.002-1.048-.002h-.484c-.363 0-.68 0-.968-.007Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M14.75 5.75h1.452c.375 0 .724 0 1.048.002v4.867l-.705-.394-.009-.005c-.034-.02-.097-.055-.16-.082a.926.926 0 0 0-.376-.082.926.926 0 0 0-.377.082c-.062.027-.125.063-.16.082l-.008.005-.705.394V5.75Z" /><path fill="currentColor" d="M22 11.548v2.202c0 3.771 0 5.657-1.172 6.828C19.657 21.75 17.771 21.75 14 21.75h-4c-3.771 0-5.657 0-6.828-1.172C2 19.407 2 17.521 2 13.75V6.7c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 1.82c.368-.069.81-.069 1.692-.069.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529l.55.55c.816.816 1.224 1.224 1.712 1.495.173.097.353.18.538.25v5.708c0 .135 0 .302.018.443.02.145.083.477.4.697.348.24.703.15.865.09.135-.05.282-.132.386-.19l.026-.015 1.055-.59 1.055.59.026.015c.104.058.25.14.386.19.162.06.517.15.864-.09.318-.22.381-.552.4-.697.02-.14.02-.308.019-.443V5.797c1.049.072 1.737.256 2.256.722.079.071.154.146.224.225.77.855.77 2.172.77 4.804Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M18 10.853V6h-4v4.853c0 .29 0 .435.095.494.095.058.224-.007.484-.136l1.242-.622c.088-.043.132-.065.179-.065.047 0 .091.022.179.065l1.242.622c.26.13.39.194.484.136.095-.06.095-.204.095-.494Z" /><path fill="currentColor" d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77.079.07.154.145.224.224.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14V6.95Z" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default FolderFavouriteBookmark