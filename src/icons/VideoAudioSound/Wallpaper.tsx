import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Wallpaper = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18.25 15a.75.75 0 0 0 1.5 0h-1.5ZM11 2.75h2v-1.5h-2v1.5Zm2 18.5h-2v1.5h2v-1.5ZM5.75 16V8h-1.5v8h1.5ZM11 21.25c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556l-1.06 1.06c.601.603 1.36.861 2.26.983.878.118 1.998.116 3.391.116v-1.5ZM4.25 16c0 1.393-.002 2.513.117 3.392.12.9.38 1.658.981 2.26L6.41 20.59c-.277-.277-.457-.665-.556-1.4-.101-.755-.103-1.756-.103-3.191h-1.5ZM13 22.75c1.393 0 2.513.002 3.392-.116.9-.122 1.658-.38 2.26-.982L17.59 20.59c-.277.277-.665.457-1.4.556-.754.101-1.756.103-3.191.103v1.5Zm0-20c1.435 0 2.437.002 3.192.103.734.099 1.122.28 1.399.556l1.06-1.06c-.601-.603-1.36-.861-2.26-.982-.878-.119-1.998-.117-3.391-.117v1.5ZM19.75 8c0-1.393.002-2.513-.116-3.392-.122-.9-.38-1.658-.982-2.26L17.59 3.41c.277.277.457.665.556 1.4.101.754.103 1.756.103 3.191h1.5ZM11 1.25c-1.393 0-2.513-.002-3.392.117-.9.12-1.658.38-2.26.981L6.41 3.41c.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.191-.103v-1.5ZM5.75 8c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399l-1.06-1.06c-.603.601-.861 1.36-.982 2.26C4.248 5.486 4.25 6.606 4.25 8h1.5Zm12.422 10.983c-.092.872-.28 1.306-.581 1.608l1.06 1.06c.658-.657.906-1.5 1.012-2.51l-1.491-.157ZM18.25 8v7h1.5V8h-1.5Z" fill="currentColor" /><path d="M19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891A2.5 2.5 0 0 0 19.89 4.53C19.697 4.5 19.465 4.5 19 4.5M5 19.5c-.465 0-.697 0-.891-.03A2.5 2.5 0 0 1 2.03 17.39C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53C4.303 4.5 4.535 4.5 5 4.5" stroke="currentColor" strokeWidth={1.5} /><circle cx={14.5} cy={6.5} r={1.5} stroke="currentColor" strokeWidth={1.5} /><path d="m5 14.816 1.29-1.324c.672-.69 1.684-.65 2.315.09l3.16 3.706c.507.594 1.304.675 1.89.192l.22-.18c.843-.695 1.984-.615 2.75.193L19 19.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16V8Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891A2.5 2.5 0 0 0 19.89 4.53C19.697 4.5 19.465 4.5 19 4.5M5 19.5c-.465 0-.697 0-.891-.03A2.5 2.5 0 0 1 2.03 17.39C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53C4.303 4.5 4.535 4.5 5 4.5" stroke="currentColor" strokeWidth={1.5} /><circle opacity={0.5} cx={14.5} cy={6.5} r={1.5} stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="m5 14.816 1.29-1.324c.672-.69 1.684-.65 2.315.09l3.16 3.706c.507.594 1.304.675 1.89.192l.22-.18c.843-.695 1.984-.615 2.75.193l1.901 2.007" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16V8ZM19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891A2.5 2.5 0 0 0 19.89 4.53C19.697 4.5 19.465 4.5 19 4.5M5 19.5c-.465 0-.697 0-.891-.03A2.5 2.5 0 0 1 2.03 17.39C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53C4.303 4.5 4.535 4.5 5 4.5" stroke="currentColor" strokeWidth={1.5} /><circle cx={14.5} cy={6.5} r={1.5} stroke="currentColor" strokeWidth={1.5} /><path d="m5 14.816 1.29-1.324c.672-.69 1.684-.65 2.315.09l3.16 3.706c.507.594 1.304.675 1.89.192l.22-.18c.843-.695 1.984-.615 2.75.193l1.901 2.007" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.945 1.25h2.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.4.4.648.87.806 1.404.211.003.388.012.55.038a3.25 3.25 0 0 1 2.702 2.702c.04.253.04.542.04.943V16.565c0 .401 0 .69-.04.943a3.25 3.25 0 0 1-2.702 2.702c-.162.026-.339.035-.55.038-.158.534-.406 1.003-.806 1.404-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-2.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.4-.4-.648-.87-.806-1.404a3.922 3.922 0 0 1-.55-.038 3.25 3.25 0 0 1-2.702-2.702c-.04-.253-.04-.542-.04-.943V7.435c0-.401 0-.69.04-.943A3.25 3.25 0 0 1 3.992 3.79c.162-.026.339-.035.55-.038.158-.534.406-1.003.806-1.404.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117ZM4.302 5.262a1.75 1.75 0 0 0-1.53 1.464c-.02.122-.022.28-.022.774v9c0 .493.002.652.022.774a1.75 1.75 0 0 0 1.53 1.464c-.052-.749-.052-1.639-.052-2.683v-8.11c0-1.044 0-1.934.052-2.683Zm1.448 9.859V16c0 1.435.002 2.436.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h2c1.435 0 2.437-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.152-.152.275-.338.371-.596L16.08 18.01c-.503-.531-1.198-.567-1.728-.13l-.22.18c-.916.755-2.177.607-2.937-.284l-3.16-3.706c-.35-.41-.85-.42-1.207-.054L5.75 15.121Zm12.48 2.975-1.06-1.119c-1.03-1.085-2.615-1.21-3.772-.256l-.22.18c-.255.211-.588.198-.842-.1l-3.16-3.706c-.912-1.069-2.437-1.138-3.422-.127l-.004.004V8c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.191-.103h2c1.435 0 2.437.002 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.101.754.103 1.756.103 3.191v8c0 .833 0 1.519-.02 2.096Zm1.468.642.076-.01a1.75 1.75 0 0 0 1.454-1.454c.02-.122.022-.28.022-.774v-9c0-.493-.002-.652-.021-.774a1.75 1.75 0 0 0-1.53-1.464c.051.749.051 1.639.051 2.683v8.11c0 1.044 0 1.934-.052 2.683ZM14.5 5.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.72 7.349a1.86 1.86 0 1 1-3.72 0 1.86 1.86 0 0 1 3.72 0ZM22 7.754c0-.374 0-.642-.037-.878a3.023 3.023 0 0 0-1.315-2.047c-.078-.052-.177.016-.164.109.1.744.117 1.627.12 2.59V16.472c-.003.964-.02 1.847-.12 2.591-.013.093.086.16.164.109a3.023 3.023 0 0 0 1.315-2.047c.037-.236.037-.504.037-.878V7.754ZM3.395 7.814a51.83 51.83 0 0 1 .002-.465c.004-.894.025-1.714.12-2.411.012-.093-.087-.16-.165-.109a3.023 3.023 0 0 0-1.315 2.047C2 7.112 2 7.38 2 7.754v8.492c0 .374 0 .642.037.878a3.022 3.022 0 0 0 1.315 2.047c.078.052.177-.016.164-.109-.094-.697-.115-1.517-.12-2.41a88.883 88.883 0 0 1 0-.466V7.814Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.085 2.108C15.28 2 14.253 2 12.981 2H11.02c-1.272 0-2.298 0-3.104.108-.838.113-1.543.354-2.103.914-.56.56-.8 1.265-.913 2.102-.108.806-.108 1.832-.108 3.104v7.544c0 1.272 0 2.298.108 3.104.113.837.354 1.542.913 2.102.56.56 1.265.801 2.103.914C8.72 22 9.747 22 11.019 22h1.962c1.272 0 2.298 0 3.104-.108.838-.113 1.543-.354 2.103-.914.56-.56.8-1.265.913-2.102.108-.806.108-1.832.108-3.104V8.228c0-1.272 0-2.298-.108-3.104-.113-.837-.354-1.542-.913-2.102-.56-.56-1.265-.801-2.103-.914Zm.723 14.522.987 1.04c.018-.536.019-1.175.019-1.95V8.28c0-1.336-.002-2.267-.096-2.97-.092-.683-.26-1.044-.517-1.302-.258-.257-.619-.425-1.302-.517-.702-.094-1.633-.096-2.969-.096h-1.86c-1.335 0-2.267.002-2.97.096-.682.092-1.043.26-1.3.517-.258.258-.426.62-.518 1.302-.094.703-.096 1.634-.096 2.97v4.624l.003-.003c.917-.941 2.336-.877 3.184.118l2.94 3.448c.236.276.545.289.783.093l.204-.169c1.076-.886 2.552-.77 3.508.24Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15.721 7.349a1.86 1.86 0 1 1-3.72 0 1.86 1.86 0 0 1 3.72 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.086 2.108C15.279 2 14.254 2 12.982 2h-1.963c-1.272 0-2.298 0-3.104.108-.837.113-1.542.354-2.102.914-.56.56-.801 1.265-.914 2.102-.108.806-.108 1.832-.108 3.104v7.544c0 1.272 0 2.298.108 3.104.113.837.354 1.542.914 2.102.56.56 1.265.801 2.102.914.806.108 1.832.108 3.104.108h1.963c1.272 0 2.297 0 3.104-.108.837-.113 1.542-.354 2.102-.914.56-.56.8-1.265.913-2.102.109-.806.109-1.832.109-3.104V8.228c0-1.272 0-2.298-.109-3.104-.112-.837-.353-1.542-.913-2.102-.56-.56-1.265-.801-2.102-.914Zm.723 14.522.986 1.04c.019-.536.02-1.175.02-1.95V8.28c0-1.336-.002-2.267-.097-2.97-.091-.683-.26-1.044-.517-1.302-.257-.257-.619-.425-1.301-.517-.703-.094-1.634-.096-2.97-.096h-1.86c-1.335 0-2.266.002-2.97.096-.682.092-1.043.26-1.3.517-.258.258-.426.62-.518 1.302-.094.703-.096 1.634-.096 2.97v4.624l.004-.003c.916-.941 2.335-.877 3.183.118l2.94 3.448c.236.276.546.289.783.093l.205-.169c1.076-.886 2.551-.77 3.508.24Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M5.016 4.5H5c-.465 0-.697 0-.891.03A2.5 2.5 0 0 0 2.03 6.61C2 6.803 2 7.035 2 7.5v9c0 .465 0 .697.03.891A2.5 2.5 0 0 0 4.11 19.47c.194.031.426.031.891.031h.016a5.72 5.72 0 0 1-.117-.624c-.108-.806-.108-1.832-.108-3.104V8.228c0-1.272 0-2.298.108-3.104.03-.217.067-.425.117-.624ZM18.985 19.5c.05-.199.087-.407.116-.624.109-.806.109-1.832.109-3.104V8.228c0-1.272 0-2.298-.109-3.104a5.705 5.705 0 0 0-.116-.624H19c.465 0 .697 0 .891.03A2.5 2.5 0 0 1 21.97 6.61c.031.194.031.426.031.891v9c0 .465 0 .697-.03.891a2.5 2.5 0 0 1-2.079 2.078c-.194.031-.426.031-.891.031h-.015Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Wallpaper