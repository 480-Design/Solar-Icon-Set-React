import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const RewindBack = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m13 15.232 6.097 4.46c1.302.897 2.903-.27 2.903-2.118V15m-9-6.232 6.097-4.46C20.399 3.411 22 4.578 22 6.426V11M6.63 7.708 10.34 5.27C11.533 4.485 13 5.507 13 7.123v9.754c0 1.616-1.467 2.638-2.661 1.853L2.92 13.853c-1.228-.807-1.228-2.899 0-3.706l.928-.61" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="m13 8.768 6.097-4.46C20.399 3.411 22 4.58 22 6.426v11.148c0 1.847-1.6 3.015-2.903 2.118L13 15.232" stroke="currentColor" strokeWidth={1.5} /><path d="M2.921 10.147c-1.228.807-1.228 2.899 0 3.706l7.418 4.877c1.194.785 2.661-.237 2.661-1.853V7.123c0-1.616-1.467-2.638-2.661-1.853L2.92 10.147Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m13 8.768 6.097-4.46C20.399 3.411 22 4.58 22 6.426v11.148c0 1.847-1.6 3.015-2.903 2.118L13 15.232M2.921 10.147c-1.228.807-1.228 2.899 0 3.706l7.418 4.877c1.194.785 2.661-.237 2.661-1.853V7.123c0-1.616-1.467-2.638-2.661-1.853L2.92 10.147Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M22.75 6.426c0-1.136-.494-2.127-1.271-2.694-.797-.581-1.871-.686-2.808-.041l-.009.006L13.75 7.29v-.168c0-1.036-.473-1.933-1.204-2.442-.746-.52-1.745-.613-2.62-.038L2.51 9.52c-.87.572-1.259 1.562-1.259 2.48 0 .918.389 1.908 1.26 2.48l7.417 4.877c.874.575 1.873.482 2.619-.037.731-.51 1.204-1.407 1.204-2.443v-.167l4.912 3.593.01.006c.936.645 2.01.54 2.807-.041.777-.567 1.27-1.557 1.27-2.694V6.426Zm-9 8.425 5.78 4.228c.363.247.738.215 1.065-.023.349-.255.655-.772.655-1.482V6.426c0-.71-.306-1.227-.655-1.482-.327-.238-.701-.27-1.065-.023l-5.78 4.228v5.702Zm-3-8.954a.792.792 0 0 1 .938.014c.301.21.562.631.562 1.212v9.754c0 .58-.261 1.003-.562 1.212a.792.792 0 0 1-.937.015l-7.418-4.877c-.358-.236-.583-.695-.583-1.227 0-.531.225-.99.583-1.226l7.418-4.877Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M22 17.574V6.426c0-1.847-1.6-3.015-2.903-2.118L13 8.768V7.123c0-1.616-1.467-2.638-2.661-1.853L2.92 10.147c-1.228.807-1.228 2.899 0 3.706l7.418 4.877c1.194.785 2.661-.237 2.661-1.853v-1.645l6.097 4.46c1.302.897 2.903-.27 2.903-2.118Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M22 6.426v11.148c0 1.847-1.6 3.015-2.903 2.118L13 15.232V8.768l6.097-4.46C20.399 3.411 22 4.58 22 6.426Z" fill="currentColor" /><path d="M13 7.123v9.754c0 1.616-1.467 2.638-2.661 1.853L2.92 13.853c-1.228-.807-1.228-2.899 0-3.706L10.34 5.27C11.533 4.485 13 5.507 13 7.123Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default RewindBack