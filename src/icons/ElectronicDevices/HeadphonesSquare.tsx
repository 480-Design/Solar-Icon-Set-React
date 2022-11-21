import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const HeadphonesSquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 18v-6c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3c-.736 0-1.399 0-2 .007M3 18v-6c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 3.955c.283-.205.591-.367.939-.493M22 15.5v2M2 15.5v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 13.845c0-.765 0-1.147-.175-1.413a1.015 1.015 0 0 0-.34-.322c-.271-.156-.637-.12-1.368-.048-1.232.121-1.848.182-2.29.514a2.055 2.055 0 0 0-.55.63C3 13.697 3 14.34 3 15.629v1.565c0 1.275 0 1.913.282 2.406.106.184.238.35.392.492.413.38 1.014.5 2.218.736.847.167 1.271.251 1.584.075a1.01 1.01 0 0 0 .3-.259C8 20.356 8 19.908 8 19.01v-5.165ZM16 13.845c0-.765 0-1.147.175-1.413.088-.133.204-.244.34-.322.271-.156.637-.12 1.368-.048 1.232.121 1.848.182 2.29.514.223.169.41.383.55.63.277.49.277 1.133.277 2.422v1.565c0 1.275 0 1.913-.282 2.406-.105.184-.238.35-.392.492-.413.38-1.014.5-2.218.736-.847.167-1.271.251-1.584.075a1.008 1.008 0 0 1-.3-.259C16 20.356 16 19.908 16 19.01v-5.165Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M21 18v-6c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3c-3.75 0-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12v6" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M22 15.5v2M2 15.5v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 13.845c0-.765 0-1.147-.175-1.413a1.015 1.015 0 0 0-.34-.322c-.271-.156-.637-.12-1.368-.048-1.232.121-1.848.182-2.29.514a2.055 2.055 0 0 0-.55.63C3 13.697 3 14.34 3 15.629v1.565c0 1.275 0 1.913.282 2.406.106.184.238.35.392.492.413.38 1.014.5 2.218.736.847.167 1.271.251 1.584.075a1.01 1.01 0 0 0 .3-.259C8 20.356 8 19.908 8 19.01v-5.165ZM16 13.845c0-.765 0-1.147.175-1.413.088-.133.204-.244.34-.322.271-.156.637-.12 1.368-.048 1.232.121 1.848.182 2.29.514.223.169.41.383.55.63.277.49.277 1.133.277 2.422v1.565c0 1.275 0 1.913-.282 2.406-.105.184-.238.35-.392.492-.413.38-1.014.5-2.218.736-.847.167-1.271.251-1.584.075a1.008 1.008 0 0 1-.3-.259C16 20.356 16 19.908 16 19.01v-5.165Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 18v-6c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3c-3.75 0-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12v6" stroke="currentColor" strokeWidth={1.5} /><path d="M22 15.5v2M2 15.5v2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M8 13.845c0-.765 0-1.147-.175-1.413a1.015 1.015 0 0 0-.34-.322c-.271-.156-.637-.12-1.368-.048-1.232.121-1.848.182-2.29.514a2.055 2.055 0 0 0-.55.63C3 13.697 3 14.34 3 15.629v1.565c0 1.275 0 1.913.282 2.406.106.184.238.35.392.492.413.38 1.014.5 2.218.736.847.167 1.271.251 1.584.075a1.01 1.01 0 0 0 .3-.259C8 20.356 8 19.908 8 19.01v-5.165ZM16 13.845c0-.765 0-1.147.175-1.413.088-.133.204-.244.34-.322.271-.156.637-.12 1.368-.048 1.232.121 1.848.182 2.29.514.223.169.41.383.55.63.277.49.277 1.133.277 2.422v1.565c0 1.275 0 1.913-.282 2.406-.105.184-.238.35-.392.492-.413.38-1.014.5-2.218.736-.847.167-1.271.251-1.584.075a1.008 1.008 0 0 1-.3-.259C16 20.356 16 19.908 16 19.01v-5.165Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M11.955 2.25h.09c1.837 0 3.276 0 4.418.124 1.166.126 2.11.388 2.917.974a5.75 5.75 0 0 1 1.272 1.272c.586.807.848 1.75.974 2.916.124 1.143.124 2.582.124 4.419v2.838a.75.75 0 0 1 1 .707v2a.75.75 0 0 1-1.008.704c-.006.2-.015.386-.03.555-.04.435-.128.836-.343 1.212-.143.25-.323.477-.535.672-.32.295-.692.463-1.103.588-.388.117-.871.213-1.443.325l-.074.015c-.39.077-.744.147-1.04.17-.317.025-.675.008-1.017-.185a1.76 1.76 0 0 1-.524-.45c-.237-.304-.316-.65-.35-.97-.033-.3-.033-.672-.033-1.088v-5.236c0-.354 0-.672.025-.933.027-.279.09-.58.273-.859.151-.23.354-.422.593-.56.295-.17.603-.208.88-.21.257-.002.565.029.901.062l.07.007c.586.057 1.079.106 1.478.185.275.055.536.129.78.246 0-1.762-.006-3.047-.115-4.052-.113-1.038-.328-1.688-.697-2.196a4.25 4.25 0 0 0-.94-.94c-.508-.37-1.158-.585-2.196-.697-1.052-.114-2.41-.115-4.302-.115-1.892 0-3.25.001-4.302.115-1.038.112-1.688.328-2.196.697a4.25 4.25 0 0 0-.94.94c-.37.508-.585 1.158-.697 2.196-.109 1.005-.115 2.29-.115 4.052.244-.117.505-.191.78-.246.4-.079.892-.127 1.478-.185l.07-.007c.336-.033.644-.064.9-.062.278.002.586.04.88.21.24.138.443.33.594.56.183.28.245.58.273.859.025.26.025.579.025.933v5.236c0 .416 0 .787-.032 1.088-.035.32-.114.666-.351.97a1.76 1.76 0 0 1-.524.45c-.342.193-.7.21-1.018.185a9.796 9.796 0 0 1-1.04-.17l-.073-.015c-.572-.112-1.055-.208-1.443-.325-.411-.125-.783-.293-1.103-.588a2.816 2.816 0 0 1-.535-.672c-.215-.376-.302-.777-.343-1.212a8.633 8.633 0 0 1-.03-.555.75.75 0 0 1-1.008-.704v-2a.75.75 0 0 1 1-.707v-2.838c0-1.837 0-3.276.124-4.419.126-1.165.388-2.11.974-2.916A5.75 5.75 0 0 1 4.62 3.348c.807-.586 1.75-.848 2.916-.974 1.143-.124 2.582-.124 4.419-.124ZM3.75 17.193c0 .652 0 1.09.032 1.427.03.326.084.49.15.606.069.118.153.224.25.314.092.085.228.166.522.255.308.094.717.175 1.333.297.442.087.71.138.906.154a.678.678 0 0 0 .171-.001.261.261 0 0 0 .07-.062.684.684 0 0 0 .042-.207c.023-.211.024-.5.024-.966v-5.165c0-.398 0-.641-.018-.82a.65.65 0 0 0-.034-.182.268.268 0 0 0-.083-.08.648.648 0 0 0-.147-.013 8.557 8.557 0 0 0-.777.058c-.631.062-1.05.104-1.37.168-.305.06-.447.128-.542.2-.14.105-.26.24-.35.4-.064.114-.118.278-.147.609-.031.341-.032.785-.032 1.443v1.565Zm16.5-1.565c0-.658 0-1.102-.032-1.443-.03-.33-.083-.495-.147-.61-.09-.158-.21-.294-.35-.4-.095-.071-.237-.139-.542-.2-.32-.063-.739-.105-1.37-.167a8.56 8.56 0 0 0-.777-.058.648.648 0 0 0-.147.012.268.268 0 0 0-.083.081.647.647 0 0 0-.034.181c-.017.18-.018.423-.018.82v5.166c0 .466.001.755.024.965a.684.684 0 0 0 .042.208c.021.026.045.047.07.062.016.003.064.01.17 0 .198-.015.465-.066.907-.153.616-.122 1.025-.203 1.333-.297.294-.089.43-.17.522-.255.097-.09.181-.196.25-.314.066-.117.12-.28.15-.606.031-.338.032-.775.032-1.427v-1.565Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.053 2c2.148 0 3.83 0 5.143.179 1.345.183 2.405.564 3.237 1.407.833.843 1.21 1.916 1.39 3.277C22 8.193 22 9.896 22 12.07v5.297c0 .817 0 1.378-.143 1.87a3.52 3.52 0 0 1-1.847 2.188c-.457.22-1.004.307-1.801.434l-.13.02c-.284.046-.526.085-.727.105-.209.02-.422.027-.64-.016a2.1 2.1 0 0 1-1.561-1.35 2.223 2.223 0 0 1-.116-.639c-.012-.204-.012-.452-.012-.742v-4.173c0-.425 0-.791.097-1.105a2.103 2.103 0 0 1 1.528-1.43c.316-.073.677-.044 1.096-.01l.093.007.11.01c.783.062 1.32.104 1.775.275.32.12.616.284.883.487v-1.174c0-2.24-.002-3.848-.165-5.073-.16-1.204-.463-1.93-.993-2.466-.53-.537-1.247-.844-2.436-1.006-1.21-.165-2.799-.166-5.011-.166s-3.801.001-5.01.166c-1.19.162-1.907.47-2.437 1.006-.53.536-.834 1.262-.994 2.466-.162 1.225-.164 2.833-.164 5.073v1.174c.267-.203.563-.368.883-.487.456-.17.992-.213 1.775-.276l.11-.009.093-.007c.42-.034.78-.063 1.096.01a2.103 2.103 0 0 1 1.528 1.43c.098.314.097.68.097 1.105v4.172c0 .291 0 .54-.012.743-.012.213-.04.427-.116.638a2.1 2.1 0 0 1-1.56 1.35 2.148 2.148 0 0 1-.641.017c-.201-.02-.443-.059-.727-.104l-.13-.02c-.797-.128-1.344-.215-1.801-.436a3.52 3.52 0 0 1-1.847-2.188C2 18.745 2 18.184 2 17.367V12.07c0-2.174 0-3.878.177-5.207.18-1.36.557-2.434 1.39-3.277.832-.843 1.893-1.224 3.236-1.407C8.116 2 9.8 2 11.947 2h.106Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M11.955 2.25h.09c1.837 0 3.276 0 4.418.124 1.166.126 2.11.388 2.917.974a5.75 5.75 0 0 1 1.272 1.272c.586.807.848 1.75.974 2.916.124 1.143.124 2.582.124 4.419v2.838a.75.75 0 0 1 1 .707v2a.75.75 0 0 1-1.309.5H20.25v-6c0-1.892-.001-3.25-.115-4.302-.113-1.038-.328-1.688-.697-2.196a4.25 4.25 0 0 0-.94-.94c-.508-.37-1.158-.585-2.196-.697-1.052-.114-2.41-.115-4.302-.115-1.892 0-3.25.001-4.302.115-1.038.112-1.688.328-2.196.697a4.25 4.25 0 0 0-.94.94c-.37.508-.585 1.158-.697 2.196C3.751 8.75 3.75 10.108 3.75 12v6H2.559a.75.75 0 0 1-1.309-.5v-2a.75.75 0 0 1 1-.707v-2.838c0-1.837 0-3.276.124-4.419.126-1.165.388-2.11.974-2.916A5.75 5.75 0 0 1 4.62 3.348c.807-.586 1.75-.848 2.916-.974 1.143-.124 2.582-.124 4.419-.124Z" fill="currentColor" /><path d="M8 14.05c0-.85 0-1.274-.21-1.57a1.185 1.185 0 0 0-.409-.358c-.325-.174-.763-.134-1.64-.053-1.48.134-2.218.202-2.748.571a2.346 2.346 0 0 0-.661.7C2 13.885 2 14.6 2 16.03v1.74c0 1.417 0 2.126.338 2.673.127.205.286.39.471.547.495.423 1.217.555 2.662.818 1.016.186 1.525.279 1.9.083.138-.072.26-.17.36-.287C8 21.285 8 20.786 8 19.789v-5.74ZM16 14.05c0-.85 0-1.274.21-1.57.105-.148.245-.271.409-.358.325-.174.763-.134 1.64-.053 1.48.134 2.218.202 2.748.571.268.188.493.426.661.7.332.544.332 1.26.332 2.69v1.74c0 1.417 0 2.126-.338 2.673-.127.205-.286.39-.471.547-.495.423-1.217.555-2.662.818-1.016.186-1.525.279-1.9.083a1.193 1.193 0 0 1-.36-.287C16 21.285 16 20.786 16 19.789v-5.74Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default HeadphonesSquare