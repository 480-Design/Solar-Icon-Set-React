import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const ShieldUser = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={12} cy={9} r={2} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeWidth={1.5} d="M16 15c0 1.105 0 2-4 2s-4-.895-4-2 1.79-2 4-2 4 .895 4 2Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527.721.315 1.082.473 2.101.473 1.02 0 1.38-.158 2.101-.473.579-.252 1.231-.58 1.899-.994" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22c-1.02 0-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991v-1.574Z" opacity={0.5} /><circle cx={12} cy={9} r={2} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeWidth={1.5} d="M16 15c0 1.105 0 2-4 2s-4-.895-4-2 1.79-2 4-2 4 .895 4 2Z" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22c-1.02 0-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991v-1.574Z" /><circle cx={12} cy={9} r={2} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeWidth={1.5} d="M16 15c0 1.105 0 2-4 2s-4-.895-4-2 1.79-2 4-2 4 .895 4 2Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M9.25 9a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM12 7.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 12.25c-1.196 0-2.315.24-3.164.665-.803.402-1.586 1.096-1.586 2.085v.063c-.002.51-.004 1.37.81 1.959.378.273.877.448 1.495.559.623.112 1.422.169 2.445.169s1.822-.057 2.445-.169c.618-.111 1.117-.286 1.495-.56.814-.589.812-1.448.81-1.959V15c0-.99-.783-1.683-1.586-2.085-.849-.424-1.968-.665-3.164-.665ZM8.75 15c0-.115.113-.421.757-.743.6-.3 1.48-.507 2.493-.507s1.894.207 2.493.507c.644.322.757.628.757.743 0 .604-.039.697-.19.807-.122.088-.373.206-.88.298-.502.09-1.203.145-2.18.145-.977 0-1.678-.055-2.18-.145-.507-.092-.758-.21-.88-.298-.152-.11-.19-.203-.19-.807Z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M8.723 2.051c1.444-.494 2.34-.801 3.277-.801.938 0 1.833.307 3.277.801l.727.25c1.481.506 2.625.898 3.443 1.23.412.167.767.33 1.052.495.275.16.55.359.737.626.185.263.281.587.341.9.063.324.1.713.125 1.16.048.886.048 2.102.048 3.678v1.601c0 6.101-4.608 9.026-7.348 10.224l-.027.011c-.34.149-.66.288-1.027.382-.387.1-.799.142-1.348.142-.55 0-.96-.042-1.348-.142-.367-.094-.687-.233-1.027-.382l-.027-.011C6.858 21.017 2.25 18.092 2.25 11.99V10.39c0-1.576 0-2.792.048-3.679.025-.446.062-.835.125-1.16.06-.312.156-.636.34-.9.188-.266.463-.465.738-.625.285-.165.64-.328 1.052-.495.818-.332 1.962-.724 3.443-1.23l.727-.25ZM12 2.75c-.658 0-1.305.212-2.92.764l-.572.196c-1.513.518-2.616.896-3.39 1.21a7.137 7.137 0 0 0-.864.404 1.648 1.648 0 0 0-.208.139.386.386 0 0 0-.055.05.409.409 0 0 0-.032.074c-.02.056-.042.136-.063.248a7.438 7.438 0 0 0-.1.958c-.046.841-.046 2.015-.046 3.624v1.574c0 5.175 3.87 7.723 6.449 8.849.371.162.586.254.825.315.228.059.506.095.976.095s.748-.036.976-.095c.24-.06.454-.153.825-.315 2.58-1.127 6.449-3.674 6.449-8.849v-1.574c0-1.609 0-2.783-.046-3.624a7.423 7.423 0 0 0-.1-.958 1.738 1.738 0 0 0-.063-.248.408.408 0 0 0-.032-.074.385.385 0 0 0-.055-.05 1.64 1.64 0 0 0-.208-.14 7.135 7.135 0 0 0-.864-.402c-.774-.315-1.877-.693-3.39-1.21l-.573-.197C13.305 2.962 12.658 2.75 12 2.75Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22c-1.02 0-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991v-1.574ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 8c4 0 4-.895 4-2s-1.79-2-4-2-4 .895-4 2 0 2 4 2Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22c-1.02 0-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991v-1.574Z" opacity={0.5} /><path fill="currentColor" d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12 17c4 0 4-.895 4-2s-1.79-2-4-2-4 .895-4 2 0 2 4 2Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ShieldUser