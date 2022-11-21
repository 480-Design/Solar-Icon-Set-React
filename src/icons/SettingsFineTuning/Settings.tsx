import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Settings = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={1.5} /><path d="M3.661 10.64c.473.296.777.802.777 1.36s-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.617 1.617 0 0 1 1.567.008c.483.28.77.795.79 1.353.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863.02-.558.307-1.074.79-1.353a1.617 1.617 0 0 1 1.567-.008c.336.178.58.276.82.308a2 2 0 0 0 1.478-.396c.315-.242.548-.646 1.014-1.453.208-.36.369-.639.489-.873m-.81-2.766a1.617 1.617 0 0 1-.777-1.36c0-.559.304-1.065.777-1.362.321-.202.528-.363.676-.555a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.617 1.617 0 0 1-1.566-.008 1.617 1.617 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083C13.398 2 12.932 2 12 2c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.483-.143.863a1.617 1.617 0 0 1-.79 1.353 1.617 1.617 0 0 1-1.567.008c-.336-.178-.58-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.208.36-.369.639-.489.873" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M13.765 2.152C13.398 2 12.932 2 12 2c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.617 1.617 0 0 1-.79 1.353 1.617 1.617 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.466.807-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555.473.297.777.803.777 1.361 0 .558-.304 1.064-.777 1.36-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.617 1.617 0 0 1 1.567.008c.483.28.77.795.79 1.353.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863.02-.558.307-1.074.79-1.353a1.617 1.617 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453.466-.807.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.617 1.617 0 0 1 19.562 12c0-.558.304-1.064.777-1.36.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.617 1.617 0 0 1-1.566-.008 1.617 1.617 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={1.5} /><path d="M13.765 2.152C13.398 2 12.932 2 12 2c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.617 1.617 0 0 1-.79 1.353 1.617 1.617 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.466.807-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555.473.297.777.803.777 1.361 0 .558-.304 1.064-.777 1.36-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.617 1.617 0 0 1 1.567.008c.483.28.77.795.79 1.353.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863.02-.558.307-1.074.79-1.353a1.617 1.617 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453.466-.807.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.617 1.617 0 0 1 19.562 12c0-.558.304-1.064.777-1.36.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.617 1.617 0 0 1-1.566-.008 1.617 1.617 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM9.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11.975 1.25c-.445 0-.816 0-1.12.02a2.823 2.823 0 0 0-.907.19 2.75 2.75 0 0 0-1.489 1.488c-.145.35-.184.72-.2 1.122a.868.868 0 0 1-.415.731.868.868 0 0 1-.841-.005c-.356-.188-.696-.339-1.072-.389a2.75 2.75 0 0 0-2.033.545c-.25.192-.44.428-.617.691-.17.254-.356.575-.578.96l-.025.044c-.223.385-.408.706-.542.98-.14.286-.25.568-.29.88a2.75 2.75 0 0 0 .544 2.033c.231.301.532.52.872.734a.868.868 0 0 1 .426.726.868.868 0 0 1-.426.726c-.34.214-.64.433-.872.734a2.75 2.75 0 0 0-.545 2.033c.041.312.15.594.29.88.135.274.32.595.543.98l.025.044c.222.385.408.706.578.96.177.263.367.5.617.69a2.75 2.75 0 0 0 2.033.546c.376-.05.716-.2 1.072-.389a.867.867 0 0 1 .84-.005c.242.138.405.408.417.731.015.402.054.772.2 1.122a2.75 2.75 0 0 0 1.488 1.489c.29.12.59.167.907.188.304.021.675.021 1.12.021h.05c.445 0 .816 0 1.12-.02.318-.022.617-.069.907-.19a2.75 2.75 0 0 0 1.489-1.488c.145-.35.184-.72.2-1.122a.868.868 0 0 1 .415-.732.868.868 0 0 1 .841.006c.356.188.696.339 1.072.388a2.75 2.75 0 0 0 2.033-.544c.25-.192.44-.428.617-.691.17-.254.356-.575.578-.96l.025-.044c.223-.385.408-.706.542-.98.14-.286.25-.569.29-.88a2.75 2.75 0 0 0-.544-2.033c-.231-.301-.532-.52-.872-.734a.868.868 0 0 1-.426-.726c0-.278.152-.554.426-.726.34-.214.64-.433.872-.734a2.75 2.75 0 0 0 .545-2.033 2.826 2.826 0 0 0-.29-.88c-.135-.274-.32-.595-.543-.98l-.025-.044c-.222-.385-.408-.706-.578-.96a2.823 2.823 0 0 0-.617-.69 2.75 2.75 0 0 0-2.033-.546c-.376.05-.716.2-1.072.389a.868.868 0 0 1-.84.005.868.868 0 0 1-.417-.731c-.015-.402-.054-.772-.2-1.122a2.75 2.75 0 0 0-1.488-1.489c-.29-.12-.59-.167-.907-.188-.304-.021-.675-.021-1.12-.021h-.05Zm-1.453 1.595c.077-.032.194-.061.435-.078.247-.017.567-.017 1.043-.017s.796 0 1.043.017c.241.017.358.046.435.078.307.127.55.37.677.677.04.096.073.247.086.604.03.792.439 1.555 1.165 1.974.726.42 1.591.392 2.292.022.316-.167.463-.214.567-.227a1.25 1.25 0 0 1 .924.247c.066.051.15.138.285.338.139.206.299.483.537.895.238.412.397.69.506.912.107.217.14.333.15.416a1.25 1.25 0 0 1-.247.924c-.064.083-.178.187-.48.377-.672.422-1.128 1.158-1.128 1.996 0 .838.456 1.574 1.128 1.996.302.19.416.294.48.377.202.263.29.595.247.924-.01.083-.044.2-.15.416-.109.223-.268.5-.506.912-.238.412-.399.689-.537.895-.135.2-.219.287-.285.338a1.25 1.25 0 0 1-.924.247c-.104-.013-.25-.06-.567-.227-.7-.37-1.566-.398-2.292.021-.726.42-1.135 1.183-1.165 1.975-.013.357-.046.508-.086.604a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078-.247.017-.567.017-1.043.017s-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.04-.096-.073-.247-.086-.604-.03-.792-.439-1.555-1.165-1.974-.726-.42-1.591-.392-2.292-.022-.316.167-.463.214-.567.227a1.25 1.25 0 0 1-.924-.247c-.066-.051-.15-.138-.285-.338a17.055 17.055 0 0 1-.537-.895c-.238-.412-.397-.69-.506-.912-.107-.217-.14-.333-.15-.416a1.25 1.25 0 0 1 .247-.924c.064-.083.178-.187.48-.377.672-.422 1.128-1.158 1.128-1.996 0-.838-.456-1.574-1.128-1.996-.302-.19-.416-.294-.48-.377a1.25 1.25 0 0 1-.247-.924c.01-.083.044-.2.15-.416.109-.223.268-.5.506-.912.238-.412.399-.689.537-.895.135-.2.219-.287.285-.338a1.25 1.25 0 0 1 .924-.247c.104.013.25.06.567.227.7.37 1.566.398 2.292-.022.726-.419 1.135-1.182 1.165-1.974.013-.357.046-.508.086-.604.127-.307.37-.55.677-.677Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.409 0-1.779.152a2.008 2.008 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.615 1.615 0 0 1-.796 1.353 1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.026 2.026 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453-.47.807-.704 1.21-.757 1.605-.07.526.074 1.058.4 1.479.148.192.357.353.68.555.477.297.783.803.783 1.361 0 .558-.306 1.064-.782 1.36-.324.203-.533.364-.682.556-.325.421-.469.953-.399 1.479.053.394.287.798.757 1.605.47.807.704 1.21 1.022 1.453.424.323.96.465 1.49.396.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353.015.38.051.64.145.863.204.49.596.88 1.09 1.083.37.152.84.152 1.779.152s1.409 0 1.779-.152a2.008 2.008 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308.53.07 1.066-.073 1.49-.396.318-.242.553-.646 1.022-1.453.47-.807.704-1.21.757-1.605a1.99 1.99 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555-.477-.297-.783-.803-.783-1.361 0-.558.306-1.064.782-1.36.324-.203.533-.364.682-.556a1.99 1.99 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605-.47-.807-.704-1.21-1.022-1.453a2.026 2.026 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008 1.615 1.615 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2.007 2.007 0 0 0-1.09-1.083ZM12.5 15c1.67 0 3.023-1.343 3.023-3S14.169 9 12.5 9c-1.67 0-3.023 1.343-3.023 3s1.354 3 3.023 3Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.409 0-1.779.152a2.008 2.008 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.615 1.615 0 0 1-.796 1.353 1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.026 2.026 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453-.47.807-.704 1.21-.757 1.605-.07.526.074 1.058.4 1.479.148.192.357.353.68.555.477.297.783.803.783 1.361 0 .558-.306 1.064-.782 1.36-.324.203-.533.364-.682.556-.325.421-.469.953-.399 1.479.053.394.287.798.757 1.605.47.807.704 1.21 1.022 1.453.424.323.96.465 1.49.396.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353.015.38.051.64.145.863.204.49.596.88 1.09 1.083.37.152.84.152 1.779.152s1.409 0 1.779-.152a2.008 2.008 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308.53.07 1.066-.073 1.49-.396.318-.242.553-.646 1.022-1.453.47-.807.704-1.21.757-1.605a1.99 1.99 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555-.477-.297-.783-.803-.783-1.361 0-.558.306-1.064.782-1.36.324-.203.533-.364.682-.556a1.99 1.99 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605-.47-.807-.704-1.21-1.022-1.453a2.026 2.026 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008 1.615 1.615 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2.007 2.007 0 0 0-1.09-1.083Z" fill="currentColor" /><path d="M15.523 12c0 1.657-1.354 3-3.023 3-1.67 0-3.023-1.343-3.023-3S10.83 9 12.5 9c1.67 0 3.023 1.343 3.023 3Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Settings