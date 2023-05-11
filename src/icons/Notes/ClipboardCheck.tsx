import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const ClipboardCheck = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m9 13.4 1.714 1.6L15 11" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M21 16c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-3m13-8.998c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v2M8 4.002c-2.175.012-3.353.109-4.121.877-.769.768-.865 1.946-.877 4.121" /><path stroke="currentColor" strokeWidth={1.5} d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5v-1Z" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M16 4c2.175.012 3.353.109 4.121.877C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121C4.647 4.109 5.825 4.012 8 4" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m9 13.4 1.714 1.6L15 11" /><path stroke="currentColor" strokeWidth={1.5} d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5v-1Z" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M16 4c2.175.012 3.353.109 4.121.877C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121C4.647 4.109 5.825 4.012 8 4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m9 13.4 1.714 1.6L15 11" /><path stroke="currentColor" strokeWidth={1.5} d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5v-1Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M7.263 3.259A2.25 2.25 0 0 1 9.5 1.25h5a2.25 2.25 0 0 1 2.237 2.009c.763.015 1.423.055 1.987.158.758.14 1.403.405 1.928.93.602.602.86 1.36.982 2.26.116.866.116 1.969.116 3.336v6.11c0 1.368 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-6.11c-1.367 0-2.47 0-3.337-.116-.9-.121-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337v-6.11c0-1.367 0-2.47.117-3.336.12-.9.38-1.658.981-2.26.525-.525 1.17-.79 1.928-.93.564-.103 1.224-.143 1.987-.158Zm.002 1.5c-.718.015-1.272.052-1.718.134-.566.104-.895.27-1.138.514-.277.277-.457.666-.556 1.4-.101.755-.103 1.756-.103 3.191v6c0 1.436.002 2.437.103 3.192.099.734.28 1.122.556 1.4.277.276.665.457 1.4.555.754.102 1.756.103 3.191.103h6c1.435 0 2.436-.001 3.192-.103.734-.098 1.122-.279 1.399-.556.277-.276.457-.665.556-1.399.101-.755.103-1.756.103-3.192v-6c0-1.435-.002-2.436-.103-3.192-.099-.733-.28-1.122-.556-1.399-.244-.243-.572-.41-1.138-.514-.446-.082-1-.119-1.718-.134A2.25 2.25 0 0 1 14.5 6.75h-5a2.25 2.25 0 0 1-2.235-1.99ZM9.5 2.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75h-5Zm6.048 7.738a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.024 0l-1.714-1.6a.75.75 0 1 1 1.024-1.096l1.202 1.122 3.774-3.522a.75.75 0 0 1 1.06.036Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2h-5Z" /><path fill="currentColor" fillRule="evenodd" d="M6.5 4.037c-1.258.07-2.052.27-2.621.84C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878.879-.88.879-2.293.879-5.122v-6c0-2.828 0-4.242-.879-5.121-.569-.57-1.363-.77-2.621-.84V4.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-.463Zm9.012 8.511a.75.75 0 1 0-1.024-1.096l-3.774 3.522-1.202-1.122a.75.75 0 0 0-1.024 1.096l1.715 1.6a.75.75 0 0 0 1.023 0l4.286-4Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M21 15.998v-6c0-2.828 0-4.242-.879-5.121C19.353 4.109 18.175 4.012 16 4H8c-2.175.012-3.353.109-4.121.877C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878.879-.88.879-2.293.879-5.122Z" opacity={0.5} /><path fill="currentColor" d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5v-1Z" /><path fill="currentColor" fillRule="evenodd" d="M15.548 10.488a.75.75 0 0 1-.036 1.06l-4.286 4a.75.75 0 0 1-1.024 0l-1.714-1.6a.75.75 0 1 1 1.024-1.096l1.202 1.122 3.774-3.522a.75.75 0 0 1 1.06.036Z" clipRule="evenodd" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ClipboardCheck