import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Box = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M21.984 10c-.037-1.311-.161-2.147-.581-2.86-.598-1.015-1.674-1.58-3.825-2.708l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05C4.271 5.56 3.195 6.125 2.597 7.14 2 8.154 2 9.417 2 11.94v.117c0 2.525 0 3.788.597 4.802.598 1.015 1.674 1.58 3.825 2.709l2 1.049C10.178 21.539 11.056 22 12 22s1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708.42-.713.544-1.549.581-2.86M21 7.5l-4 2M12 12 3 7.5m9 4.5v9.5m0-9.5 4.5-2.25.5-.25m0 0V13m0-3.5-9.5-5" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m15.578 3.382 2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.94v.117c0 2.525 0 3.788-.597 4.802-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m21 7.5-4 2M12 12 3 7.5m9 4.5v9.5m0-9.5 4.5-2.25.5-.25m0 0V13m0-3.5-9.5-5" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m15.578 3.382 2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.94v.117c0 2.525 0 3.788-.597 4.802-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382ZM21 7.5l-4 2M12 12 3 7.5m9 4.5v9.5m0-9.5 4.5-2.25.5-.25m0 0V13m0-3.5-9.5-5" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12 1.25c-.605 0-1.162.15-1.771.402-.589.244-1.273.603-2.124 1.05L6.037 3.787c-1.045.548-1.88.987-2.527 1.418-.668.447-1.184.917-1.559 1.554-.374.635-.542 1.323-.623 2.142-.078.795-.078 1.772-.078 3.002v.194c0 1.23 0 2.207.078 3.002.081.82.25 1.507.623 2.142.375.637.89 1.107 1.56 1.554.645.431 1.481.87 2.526 1.418l2.068 1.085c.851.447 1.535.806 2.124 1.05.61.252 1.166.402 1.771.402s1.162-.15 1.771-.402c.589-.244 1.273-.603 2.124-1.05l2.068-1.084c1.045-.549 1.88-.988 2.526-1.419.67-.447 1.185-.917 1.56-1.554.374-.635.542-1.323.623-2.142.078-.795.078-1.772.078-3.002v-.194c0-1.23 0-2.207-.078-3.002-.081-.82-.25-1.507-.623-2.142-.375-.637-.89-1.107-1.56-1.554-.645-.431-1.481-.87-2.526-1.418l-2.068-1.085c-.851-.447-1.535-.806-2.124-1.05-.61-.252-1.166-.402-1.771-.402ZM8.77 4.046c.89-.467 1.514-.793 2.032-1.007.504-.209.859-.289 1.198-.289.34 0 .694.08 1.198.289.518.214 1.141.54 2.031 1.007l2 1.05c1.09.571 1.855.974 2.428 1.356.282.189.503.364.683.54l-3.331 1.665-8.5-4.474.262-.137Zm-1.825.958-.174.092c-1.09.571-1.855.974-2.427 1.356a4.646 4.646 0 0 0-.683.54L12 11.162l3.357-1.68-8.206-4.318a.749.749 0 0 1-.206-.16ZM2.938 8.307c-.05.214-.089.457-.117.74-.07.714-.071 1.617-.071 2.894v.117c0 1.278 0 2.181.071 2.894.069.697.2 1.148.423 1.528.222.377.543.696 1.1 1.068.572.382 1.337.785 2.427 1.356l2 1.05c.89.467 1.513.793 2.031 1.007.164.068.311.122.448.165v-8.663L2.938 8.308Zm9.812 12.818c.137-.042.284-.096.448-.164.518-.214 1.141-.54 2.031-1.007l2-1.05c1.09-.572 1.855-.974 2.428-1.356.556-.372.877-.691 1.1-1.068.223-.38.353-.83.422-1.528.07-.713.071-1.616.071-2.893v-.117c0-1.278 0-2.181-.071-2.894a5.627 5.627 0 0 0-.117-.74L17.75 9.963V13a.75.75 0 0 1-1.5 0v-2.287l-3.5 1.75v8.662Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m17.578 4.432-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-.321.169 8.923 5.099L21.04 6.64c-.646-.732-1.688-1.279-3.462-2.21ZM21.748 7.964l-3.998 2V13a.75.75 0 0 1-1.5 0v-2.287l-3.5 1.75v9.441c.718-.179 1.535-.607 2.828-1.286l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708C22 15.846 22 14.583 22 12.06v-.117c0-1.893 0-3.076-.252-3.978ZM11.25 21.904v-9.44l-8.998-4.5C2 8.866 2 10.05 2 11.941v.117c0 2.525 0 3.788.597 4.802.598 1.015 1.674 1.58 3.825 2.709l2 1.049c1.293.679 2.11 1.107 2.828 1.286ZM2.96 6.641l9.04 4.52 3.411-1.705-8.886-5.078-.103.054c-1.773.93-2.816 1.477-3.462 2.21Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M8.422 20.618C10.178 21.54 11.056 22 12 22V12L2.638 7.073a3.196 3.196 0 0 0-.04.067C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801.598 1.015 1.674 1.58 3.825 2.709l2 1.05Z" /><path fill="currentColor" d="m17.577 4.432-2-1.05C13.822 2.461 12.944 2 12 2c-.945 0-1.822.46-3.578 1.382l-2 1.05C4.318 5.536 3.242 6.1 2.638 7.072L12 12l9.362-4.927c-.606-.973-1.68-1.537-3.785-2.641Z" opacity={0.7} /><path fill="currentColor" d="M21.403 7.14a3.153 3.153 0 0 0-.041-.067L12 12v10c.944 0 1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708C22 15.846 22 14.583 22 12.06v-.117c0-2.525 0-3.788-.597-4.802Z" opacity={0.5} /><path fill="currentColor" d="m6.323 4.484.1-.052 1.493-.784 9.1 5.005 4.025-2.011c.137.155.257.32.362.498.15.254.262.524.346.825L17.75 9.964V13a.75.75 0 0 1-1.5 0v-2.286l-3.5 1.75v9.44A3.062 3.062 0 0 1 12 22c-.248 0-.493-.032-.75-.096v-9.44l-8.998-4.5c.084-.3.196-.57.346-.824.105-.178.224-.343.362-.498l9.04 4.52 3.386-1.693-9.063-4.985Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Box