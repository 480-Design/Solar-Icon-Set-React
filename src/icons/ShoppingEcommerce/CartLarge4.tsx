import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const CartLarge4 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m9.5 9 .528 3.118M15.528 9 15 12.118M2 3l.261.092c1.302.457 1.953.686 2.325 1.231.372.545.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826.866.914 2.26.914 5.05.914H12m4.24 0c1.561 0 2.342 0 2.894-.45.551-.45.709-1.214 1.024-2.743l.5-2.424c.347-1.74.52-2.609.076-3.186-.443-.577-1.96-.577-3.645-.577h-6.065m-6.066 0H7" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" opacity={0.5} /><path fill="currentColor" d="m2.261 3.092.249-.708-.249.708Zm-.012-.8a.75.75 0 1 0-.498 1.416l.498-1.416Zm2.337 2.031.62-.423-.62.423Zm1.302 10.263-.545.516.545-.516Zm14.77-4.703.734.151.001-.004-.735-.147Zm-.5 2.425.735.15-.735-.15Zm.576-5.61-.594.456.595-.457Zm-1.6 8.352-.474-.581.474.581ZM5.708 9.76V7.038h-1.5V9.76h1.5ZM2.51 2.384l-.261-.092-.498 1.416.261.091.498-1.415Zm8.428 13.866h5.302v-1.5h-5.302v1.5Zm-5.23-9.212c0-.707.001-1.297-.05-1.776-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677.041.38.042.875.042 1.615h1.5ZM2.012 3.8c.668.235 1.107.39 1.43.55.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899-.42-.206-.958-.394-1.592-.617L2.012 3.8ZM4.208 9.76c0 1.453.014 2.5.15 3.3.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263-.11-.65-.129-1.558-.129-3.047h-1.5Zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026.87.124 1.98.122 3.351.122v-1.5Zm-5.98-7.88h12.13v-1.5H4.959v1.5Zm14.965 2.861-.5 2.425 1.47.303.5-2.425-1.47-.303ZM17.09 6.87c.856 0 1.61.001 2.205.067.295.034.517.08.672.134.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.616 4.616 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076v1.5Zm4.304 3.16c.17-.848.313-1.56.348-2.13.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654-.027.444-.144 1.037-.322 1.928l1.471.294Zm-5.153 6.22c.762 0 1.401.001 1.917-.062.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23-.403.05-.934.051-1.734.051v1.5Zm3.184-4.094c-.162.783-.27 1.303-.4 1.688-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309.166-.492.294-1.118.448-1.864l-1.47-.303Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m9.5 9 .528 3.118M15.528 9 15 12.118" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" /><path fill="currentColor" d="m2.261 3.092.249-.708-.249.708Zm-.012-.8a.75.75 0 1 0-.498 1.416l.498-1.416Zm2.337 2.031.62-.423-.62.423Zm1.302 10.263-.545.516.545-.516Zm14.77-4.703.734.151.001-.004-.735-.147Zm-.5 2.425.735.15-.735-.15Zm.576-5.61-.594.456.595-.457Zm-1.6 8.352-.474-.581.474.581ZM5.708 9.76V7.038h-1.5V9.76h1.5ZM2.51 2.384l-.261-.092-.498 1.416.261.091.498-1.415Zm8.428 13.866h5.302v-1.5h-5.302v1.5Zm-5.23-9.212c0-.707.001-1.297-.05-1.776-.055-.497-.171-.95-.453-1.362l-1.238.846c.09.132.16.314.199.677.041.38.042.875.042 1.615h1.5ZM2.012 3.8c.668.235 1.107.39 1.43.55.303.148.437.268.525.397L5.205 3.9c-.284-.416-.662-.682-1.103-.899-.42-.206-.958-.394-1.592-.617L2.012 3.8ZM4.208 9.76c0 1.453.014 2.5.15 3.3.147.854.44 1.466.985 2.042l1.089-1.032c-.32-.338-.493-.668-.595-1.263-.11-.65-.129-1.558-.129-3.047h-1.5Zm6.73 4.99c-1.417 0-2.4-.002-3.141-.107-.715-.101-1.092-.285-1.365-.573l-1.089 1.032c.594.627 1.347.9 2.243 1.026.87.124 1.98.122 3.351.122v-1.5Zm-5.98-7.88h12.13v-1.5H4.959v1.5Zm14.965 2.861-.5 2.425 1.47.303.5-2.425-1.47-.303ZM17.09 6.87c.856 0 1.61.001 2.205.067.295.034.517.08.672.134.161.057.187.1.174.083l1.189-.914c-.235-.306-.565-.479-.866-.584a4.616 4.616 0 0 0-1.003-.21c-.695-.077-1.543-.076-2.371-.076v1.5Zm4.304 3.16c.17-.848.313-1.56.348-2.13.037-.586-.03-1.164-.412-1.66l-1.189.914c.062.081.13.226.104.654-.027.444-.144 1.037-.322 1.928l1.471.294Zm-5.153 6.22c.762 0 1.401.001 1.917-.062.535-.065 1.024-.209 1.45-.556l-.947-1.163c-.125.102-.303.184-.686.23-.403.05-.934.051-1.734.051v1.5Zm3.184-4.094c-.162.783-.27 1.303-.4 1.688-.123.366-.239.523-.364.625l.947 1.163c.427-.348.666-.797.838-1.309.166-.492.294-1.118.448-1.864l-1.47-.303Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m9.5 9 .528 3.118M15.528 9 15 12.118" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9.375 8.26a.75.75 0 0 1 .865.615l.528 3.118a.75.75 0 0 1-1.48.25l-.527-3.118a.75.75 0 0 1 .614-.864ZM14.79 8.875a.75.75 0 1 1 1.478.25l-.528 3.118a.75.75 0 1 1-1.48-.25l.53-3.118Z" /><path fill="currentColor" fillRule="evenodd" d="M2.249 2.292a.75.75 0 1 0-.498 1.416l.262.091c.667.235 1.106.39 1.429.549.303.149.437.27.525.398.09.132.16.314.2.677.04.38.041.875.041 1.615V9.76c0 1.453.014 2.5.151 3.3.146.854.438 1.466.985 2.042.594.627 1.346.9 2.243 1.026.858.122 1.948.122 3.293.122h5.406c.742 0 1.366 0 1.87-.062.537-.065 1.025-.209 1.452-.556.426-.348.665-.797.837-1.309.163-.482.289-1.093.439-1.82l.508-2.469.002-.005.01-.052c.165-.825.303-1.519.338-2.077.036-.586-.031-1.164-.413-1.66-.235-.306-.565-.479-.866-.584a4.617 4.617 0 0 0-1.002-.21c-.688-.076-1.522-.076-2.34-.076H5.667a5.932 5.932 0 0 0-.01-.108c-.054-.497-.17-.95-.453-1.362-.284-.416-.662-.682-1.102-.899-.412-.202-.936-.386-1.553-.603l-.301-.106Zm3.46 4.578h11.38c.856 0 1.61.001 2.205.067.296.034.517.08.672.134a.56.56 0 0 1 .176.086c.062.082.128.23.102.651-.027.444-.143 1.036-.321 1.926v.002l-.5 2.42c-.16.783-.27 1.303-.399 1.688-.123.366-.239.523-.364.625-.125.102-.303.184-.685.23-.404.05-.935.051-1.734.051h-5.303c-1.417 0-2.4-.002-3.14-.107-.716-.101-1.093-.285-1.366-.573-.32-.338-.493-.668-.595-1.263-.11-.65-.129-1.558-.129-3.047V6.87ZM7.5 21.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Zm-.75-2.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM16.5 21.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Zm-.75-2.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M3.04 2.292a.75.75 0 0 0-.497 1.416l.261.091c.668.235 1.107.39 1.43.549.303.149.436.27.524.398.09.132.16.314.2.677.04.38.042.875.042 1.615V9.64c0 2.942.063 3.912.93 4.826.866.914 2.26.914 5.05.914h5.302c1.561 0 2.342 0 2.893-.45.552-.45.71-1.214 1.025-2.742l.5-2.425c.347-1.74.52-2.609.076-3.186S18.816 6 17.131 6H6.492a9.033 9.033 0 0 0-.043-.738c-.054-.497-.17-.95-.452-1.362-.284-.416-.662-.682-1.103-.899-.412-.202-.936-.386-1.552-.603l-.302-.106Zm7.2 6.583a.75.75 0 0 0-1.48.25l.529 3.118a.75.75 0 0 0 1.479-.25l-.529-3.118Zm5.414-.614a.75.75 0 0 0-.865.614l-.528 3.118a.75.75 0 1 0 1.479.25l.528-3.118a.75.75 0 0 0-.614-.864ZM7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm9 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3.04 2.292a.75.75 0 1 0-.498 1.416l.262.091c.667.235 1.106.39 1.429.549.303.149.437.27.525.398.09.132.16.314.2.677.04.38.041.875.041 1.615V9.64c0 2.942.064 3.912.93 4.826.866.914 2.26.914 5.05.914h5.303c1.56 0 2.341 0 2.893-.45.552-.45.71-1.214 1.024-2.742l.5-2.425c.347-1.74.52-2.609.077-3.186C20.332 6 18.815 6 17.13 6H6.492a9.029 9.029 0 0 0-.044-.738c-.053-.497-.17-.95-.452-1.362-.284-.416-.662-.682-1.102-.899-.412-.202-.936-.386-1.553-.603l-.301-.106Z" opacity={0.5} /><path fill="currentColor" d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.374 8.26a.75.75 0 0 1 .865.615l.528 3.118a.75.75 0 1 1-1.48.25L8.76 9.125a.75.75 0 0 1 .614-.864ZM14.788 8.875a.75.75 0 1 1 1.479.25l-.528 3.118a.75.75 0 1 1-1.48-.25l.529-3.118Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default CartLarge4