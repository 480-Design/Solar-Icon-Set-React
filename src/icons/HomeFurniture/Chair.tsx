import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Chair = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 21v-5M7 21v-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m18.487 12.586-.564.494.564-.494Zm-12.974 0 .564.494-.564-.494ZM5.044 14l-.747-.064.747.064Zm13.912 0 .747-.064-.747.064ZM12 16.75a.75.75 0 0 0 0-1.5v1.5Zm4-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-7.5-2.5h7v-1.5h-7v1.5Zm7 0c.85 0 1.4.002 1.806.065.374.057.517.15.617.265l1.129-.988c-.413-.472-.938-.671-1.518-.76-.546-.084-1.233-.082-2.034-.082v1.5Zm4.203 1.187c-.06-.7-.206-1.336-.651-1.845l-1.129.988c.126.144.234.384.285.985l1.495-.128ZM8.5 11.25c-.8 0-1.487-.002-2.034.082-.58.089-1.105.288-1.518.76l1.129.988c.1-.114.243-.208.617-.265.406-.063.957-.065 1.806-.065v-1.5Zm-2.708 2.815c.051-.6.159-.841.285-.985l-1.129-.988c-.445.51-.59 1.144-.65 1.845l1.494.128ZM7 15.25c-.515 0-.821-.002-1.04-.033a.68.68 0 0 1-.178-.045l-.002-.001-.002-.002-1.105 1.014c.31.34.702.465 1.076.519.348.05.781.048 1.251.048v-1.5Zm-2.703-1.313c-.037.426-.073.832-.05 1.168.024.371.125.75.426 1.078l1.105-1.014a.047.047 0 0 1-.012-.02.55.55 0 0 1-.023-.144c-.013-.195.008-.466.049-.94l-1.495-.128ZM17 16.75c.47 0 .902.002 1.251-.048.374-.054.765-.18 1.076-.519l-1.105-1.014-.001.001-.003.002a.68.68 0 0 1-.179.045c-.218.031-.524.033-1.039.033v1.5Zm1.208-2.685c.041.474.062.745.05.94a.551.551 0 0 1-.024.144.048.048 0 0 1-.012.02l1.105 1.014c.301-.328.402-.707.427-1.078.022-.337-.014-.742-.051-1.168l-1.495.128ZM12 15.25H7v1.5h5v-1.5Zm5 0h-1v1.5h1v-1.5Z" fill="currentColor" /><path d="M7 8c0-1.87 0-2.804.402-3.5A3 3 0 0 1 8.5 3.402C9.196 3 10.13 3 12 3s2.804 0 3.5.402A3 3 0 0 1 16.598 4.5C17 5.196 17 6.13 17 8v4H7V8Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M17 21v-5M7 21v-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m18.487 12.586-.564.494.564-.494Zm-12.974 0 .564.494-.564-.494ZM5.044 14l-.747-.064.747.064Zm13.912 0 .747-.064-.747.064ZM8.5 12.75h7v-1.5h-7v1.5Zm8.5 2.5H7v1.5h10v-1.5Zm-1.5-2.5c.85 0 1.4.002 1.806.065.374.057.517.15.617.265l1.129-.988c-.413-.472-.938-.671-1.518-.76-.546-.084-1.233-.082-2.034-.082v1.5Zm4.203 1.187c-.06-.7-.206-1.336-.651-1.845l-1.129.988c.126.144.234.384.285.985l1.495-.128ZM8.5 11.25c-.8 0-1.487-.002-2.034.082-.58.089-1.105.288-1.518.76l1.129.988c.1-.114.243-.208.617-.265.406-.063.957-.065 1.806-.065v-1.5Zm-2.708 2.815c.051-.6.159-.841.285-.985l-1.129-.988c-.445.51-.59 1.144-.65 1.845l1.494.128ZM7 15.25c-.515 0-.821-.002-1.04-.033a.68.68 0 0 1-.178-.045l-.002-.001-.002-.002-1.105 1.014c.31.34.702.465 1.076.519.348.05.781.048 1.251.048v-1.5Zm-2.703-1.313c-.037.426-.073.832-.05 1.168.024.371.125.75.426 1.078l1.105-1.014a.047.047 0 0 1-.012-.02.55.55 0 0 1-.023-.144c-.013-.195.008-.466.049-.94l-1.495-.128ZM17 16.75c.47 0 .902.002 1.251-.048.374-.054.765-.18 1.076-.519l-1.105-1.014-.001.001-.003.002a.68.68 0 0 1-.179.045c-.218.031-.524.033-1.039.033v1.5Zm1.208-2.685c.041.474.062.745.05.94a.551.551 0 0 1-.024.144.048.048 0 0 1-.012.02l1.105 1.014c.301-.328.402-.707.427-1.078.022-.337-.014-.742-.051-1.168l-1.495.128Z" fill="currentColor" /><path opacity={0.5} d="M7 8c0-1.87 0-2.804.402-3.5A3 3 0 0 1 8.5 3.402C9.196 3 10.13 3 12 3s2.804 0 3.5.402A3 3 0 0 1 16.598 4.5C17 5.196 17 6.13 17 8v4H7V8Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 21v-5M7 21v-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m18.487 12.586-.564.494.564-.494Zm-12.975 0 .565.494-.565-.494ZM5.044 14l-.747-.064.747.064Zm13.911 0 .748-.064-.748.064ZM8.5 12.75h7v-1.5h-7v1.5Zm8.5 2.5H7v1.5h10v-1.5Zm-1.5-2.5c.849 0 1.4.002 1.806.065.374.057.517.15.617.265l1.129-.988c-.413-.472-.939-.671-1.518-.76-.547-.084-1.233-.082-2.034-.082v1.5Zm4.203 1.187c-.06-.7-.206-1.336-.651-1.845l-1.13.988c.127.144.235.384.286.985l1.495-.128ZM8.5 11.25c-.801 0-1.488-.002-2.034.082-.58.089-1.105.288-1.518.76l1.129.988c.1-.114.243-.208.616-.265.407-.063.958-.065 1.807-.065v-1.5ZM5.79 14.065c.052-.6.16-.841.286-.985l-1.13-.988c-.445.51-.59 1.144-.65 1.845l1.494.128ZM7 15.25c-.515 0-.821-.002-1.04-.033a.68.68 0 0 1-.178-.045l-.003-.001-.001-.002-1.105 1.014c.31.34.701.465 1.075.519.35.05.782.048 1.252.048v-1.5Zm-2.703-1.313c-.037.426-.074.832-.051 1.168.025.371.125.75.427 1.078l1.105-1.014a.047.047 0 0 1-.012-.02.55.55 0 0 1-.024-.144c-.013-.195.009-.466.05-.94l-1.495-.128ZM17 16.75c.47 0 .902.002 1.251-.048.374-.054.765-.18 1.076-.519l-1.105-1.014-.001.001-.003.002a.68.68 0 0 1-.179.045c-.218.031-.524.033-1.04.033v1.5Zm1.208-2.685c.041.474.062.745.05.94a.55.55 0 0 1-.024.144.047.047 0 0 1-.012.02l1.105 1.014c.301-.328.402-.707.427-1.078.022-.337-.015-.742-.051-1.168l-1.495.128Z" fill="currentColor" /><path d="M7 8c0-1.87 0-2.804.402-3.5A3 3 0 0 1 8.5 3.402C9.196 3 10.13 3 12 3s2.804 0 3.5.402A3 3 0 0 1 16.598 4.5C17 5.196 17 6.13 17 8v4H7V8Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.964 2.25h.072c.904 0 1.633 0 2.222.053.606.055 1.136.172 1.617.45a3.75 3.75 0 0 1 1.373 1.372c.278.481.394 1.011.449 1.617.053.589.053 1.318.053 2.222v3.407c.494.104.941.309 1.302.72.445.51.59 1.146.651 1.846l.004.047c.035.41.069.797.047 1.121-.025.371-.126.75-.427 1.078-.31.34-.702.465-1.076.519-.152.022-.32.034-.5.04V21a.75.75 0 0 1-1.5 0v-4.25h-8.5V21a.75.75 0 0 1-1.5 0v-4.258a4.84 4.84 0 0 1-.502-.04c-.374-.054-.765-.18-1.076-.519-.301-.328-.402-.707-.427-1.078-.022-.324.012-.712.047-1.12l.004-.048c.06-.7.206-1.336.651-1.845.361-.412.808-.617 1.302-.721V7.964c0-.904 0-1.633.053-2.222.055-.606.172-1.136.45-1.617a3.75 3.75 0 0 1 1.372-1.373c.481-.277 1.011-.394 1.617-.449.589-.053 1.318-.053 2.222-.053Zm-3.52 9H7.75V8c0-.948 0-1.61.047-2.122.046-.503.13-.788.255-1.003a2.25 2.25 0 0 1 .823-.824c.215-.124.5-.208 1.003-.254.512-.046 1.174-.047 2.122-.047s1.61 0 2.122.047c.503.046.788.13 1.003.254.342.198.626.482.824.824.124.215.208.5.254 1.003.046.512.047 1.174.047 2.122v3.25H8.444Zm.056 1.5c-.849 0-1.4.002-1.806.065-.374.057-.517.15-.617.265-.126.144-.234.384-.285.985-.041.474-.062.745-.05.94a.55.55 0 0 0 .024.144c.004.01.006.013.012.02l.001.001.003.002a.68.68 0 0 0 .179.045c.218.031.524.033 1.04.033h10c.514 0 .82-.002 1.038-.033a.68.68 0 0 0 .179-.045l.003-.001.001-.002a.048.048 0 0 0 .012-.02.551.551 0 0 0 .023-.144c.013-.195-.008-.466-.049-.94-.051-.6-.159-.841-.285-.985-.1-.114-.243-.208-.617-.265-.406-.063-.957-.065-1.806-.065h-7Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7.402 4.5C7 5.196 7 6.13 7 8v3.027C7.43 11 7.914 11 8.435 11h7.13c.52 0 1.005 0 1.435.027V8c0-1.87 0-2.804-.402-3.5A3 3 0 0 0 15.5 3.402C14.804 3 13.87 3 12 3s-2.804 0-3.5.402A3 3 0 0 0 7.402 4.5ZM6.25 15.991c-.502-.02-.806-.088-1.014-.315-.297-.324-.258-.774-.18-1.675.055-.65.181-1.088.467-1.415C6.035 12 6.858 12 8.505 12h6.99c1.647 0 2.47 0 2.982.586.286.326.412.764.468 1.415.077.9.116 1.351-.181 1.675-.208.227-.512.295-1.014.315V21a.75.75 0 1 1-1.5 0v-5h-8.5v5a.75.75 0 1 1-1.5 0V15.99Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M7.402 4.5C7 5.196 7 6.13 7 8v4.027C7.43 12 7.914 12 8.435 12h7.13c.52 0 1.005 0 1.435.027V8c0-1.87 0-2.804-.402-3.5A3 3 0 0 0 15.5 3.402C14.804 3 13.87 3 12 3s-2.804 0-3.5.402A3 3 0 0 0 7.402 4.5Z" fill="currentColor" /><path d="M6.25 15.991c-.502-.02-.806-.088-1.014-.315-.297-.324-.258-.774-.18-1.675.055-.65.181-1.088.467-1.415C6.035 12 6.858 12 8.505 12h6.99c1.647 0 2.47 0 2.982.586.286.326.412.764.468 1.415.077.9.116 1.351-.181 1.675-.208.227-.512.295-1.014.315V21a.75.75 0 1 1-1.5 0v-5h-8.5v5a.75.75 0 1 1-1.5 0V15.99Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Chair