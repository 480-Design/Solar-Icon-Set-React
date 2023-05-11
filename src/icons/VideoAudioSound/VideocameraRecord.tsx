import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const VideocameraRecord = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="m17 9.5.658-.329c1.946-.973 2.92-1.46 3.63-1.02.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703-.712.44-1.685-.047-3.63-1.02L17 14.5v-5ZM13.56 7.44a1.5 1.5 0 1 1-2.121 2.12 1.5 1.5 0 0 1 2.122-2.12Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M2 11.5v1c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554C4.57 20 6.212 20 9.5 20c3.287 0 4.931 0 6.038-.908.202-.166.388-.352.554-.554C17 17.43 17 15.788 17 12.5v-1c0-3.287 0-4.931-.908-6.038a4 4 0 0 0-.554-.554C14.43 4 12.788 4 9.5 4c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554c-.428.522-.654 1.162-.774 2.038" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="m17 9.5.658-.329c1.946-.973 2.92-1.46 3.63-1.02.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703-.712.44-1.685-.047-3.63-1.02L17 14.5v-5ZM13.56 7.44a1.5 1.5 0 1 1-2.121 2.12 1.5 1.5 0 0 1 2.122-2.12Z" opacity={0.5} /><path stroke="currentColor" strokeWidth={1.5} d="M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4.001 4.001 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5v-1Z" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="m17 9.5.658-.329c1.946-.973 2.92-1.46 3.63-1.02.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703-.712.44-1.685-.047-3.63-1.02L17 14.5v-5ZM13.56 7.44a1.5 1.5 0 1 1-2.121 2.12 1.5 1.5 0 0 1 2.122-2.12Z" /><path stroke="currentColor" strokeWidth={1.5} d="M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4.001 4.001 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5v-1Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M9.451 3.25h.098c1.602 0 2.872 0 3.876.119 1.03.122 1.88.377 2.588.96.24.197.461.417.659.658.582.709.837 1.557.96 2.588.027.232.048.478.064.739.786-.392 1.452-.714 2.007-.896.652-.213 1.343-.299 1.98.095s.87 1.05.97 1.728c.097.655.097 1.516.097 2.551v.416c0 1.035 0 1.896-.097 2.55-.1.679-.333 1.335-.97 1.729-.637.394-1.328.308-1.98.095-.555-.182-1.221-.504-2.007-.896-.016.261-.037.507-.065.739-.122 1.03-.377 1.88-.96 2.588-.197.24-.417.461-.658.659-.709.582-1.557.837-2.588.96-1.005.118-2.274.118-3.876.118H9.45c-1.602 0-2.872 0-3.876-.119-1.03-.122-1.88-.377-2.588-.96a4.751 4.751 0 0 1-.659-.658c-.582-.709-.837-1.557-.96-2.588-.118-1.005-.118-2.274-.118-3.876V11.45c0-1.602 0-2.872.119-3.876.122-1.03.377-1.88.96-2.588a4.75 4.75 0 0 1 .658-.659c.709-.582 1.557-.837 2.588-.96C6.58 3.25 7.85 3.25 9.451 3.25Zm6.799 9.25v-1c0-1.662-.001-2.843-.108-3.749-.105-.889-.304-1.415-.63-1.813a3.256 3.256 0 0 0-.45-.45c-.398-.326-.924-.525-1.813-.63-.906-.107-2.087-.108-3.749-.108s-2.843.001-3.749.108c-.889.105-1.415.304-1.813.63a3.25 3.25 0 0 0-.45.45c-.326.398-.525.924-.63 1.813-.107.906-.108 2.087-.108 3.749v1c0 1.662.001 2.843.108 3.749.105.889.304 1.415.63 1.813.135.164.286.315.45.45.398.326.924.525 1.813.63.906.107 2.087.108 3.749.108s2.843-.001 3.749-.108c.889-.105 1.415-.304 1.813-.63.164-.135.315-.286.45-.45.326-.398.525-.924.63-1.813.107-.906.108-2.087.108-3.749Zm1.5 1.537.244.121c.995.498 1.666.831 2.176.998.499.163.65.1.724.055.074-.046.198-.153.275-.673.079-.53.081-1.28.081-2.392v-.292c0-1.113-.002-1.862-.08-2.392-.078-.52-.202-.627-.276-.673-.074-.046-.225-.108-.724.055-.51.167-1.18.5-2.176.998l-.244.122v4.072ZM13.03 7.97a.75.75 0 1 0-1.06 1.06.75.75 0 0 0 1.06-1.06ZM10.91 6.909a2.25 2.25 0 1 1 3.182 3.182 2.25 2.25 0 0 1-3.182-3.182Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M2 12.5v-1c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554c.702.855.861 2.031.897 4.038l.67-.33c1.945-.972 2.918-1.459 3.63-1.019.711.44.711 1.528.711 3.703v.292c0 2.175 0 3.263-.711 3.703-.712.44-1.685-.047-3.63-1.02l-.67-.329c-.036 2.007-.195 3.183-.897 4.038a4.001 4.001 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5Zm11.56-2.94a1.5 1.5 0 1 0-2.121-2.12 1.5 1.5 0 0 0 2.122 2.12Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m17 9.5.658-.329c1.946-.973 2.92-1.46 3.63-1.02.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703-.712.44-1.685-.047-3.63-1.02L17 14.5v-5Z" /><path fill="currentColor" fillRule="evenodd" d="M2.908 5.462C2 6.57 2 8.212 2 11.5v1c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554C4.57 20 6.212 20 9.5 20c3.287 0 4.931 0 6.038-.908.202-.166.388-.352.554-.554C17 17.43 17 15.788 17 12.5v-1c0-3.287 0-4.931-.908-6.038a4 4 0 0 0-.554-.554C14.43 4 12.788 4 9.5 4c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554Z" clipRule="evenodd" opacity={0.5} /><path fill="currentColor" d="M14 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default VideocameraRecord