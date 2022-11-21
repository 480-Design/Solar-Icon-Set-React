import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ShieldKeyholeMinimalistic = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 13.5v3m1.5-3.402a3 3 0 1 1-3-5.195 3 3 0 0 1 3 5.195Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 2.505-.837 4.437-2 5.913M3.193 14c.857 4.298 4.383 6.513 6.706 7.527.721.315 1.082.473 2.101.473 1.02 0 1.38-.158 2.101-.473.579-.252 1.231-.58 1.899-.994" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22c-1.02 0-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991v-1.574Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12 13.5v3m1.5-3.402a3 3 0 1 1-3-5.195 3 3 0 0 1 3 5.195Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22c-1.02 0-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991v-1.574Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12 13.5v3m1.5-3.402a3 3 0 1 1-3-5.195 3 3 0 0 1 3 5.195Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.449 6.778a3.75 3.75 0 0 0-1.199 7.396V16.5a.75.75 0 1 0 1.5 0v-2.325c.386-.079.765-.22 1.125-.428a3.745 3.745 0 0 0 1.372-5.122 3.745 3.745 0 0 0-2.798-1.847Zm-1.574 1.774a2.245 2.245 0 0 1 3.073.823 2.245 2.245 0 0 1-.823 3.073 2.25 2.25 0 0 1-2.25-3.896Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25c-.938 0-1.833.307-3.277.801l-.727.25c-1.481.506-2.625.898-3.443 1.23-.412.167-.767.33-1.052.495-.275.16-.55.359-.737.626-.185.263-.281.587-.341.9-.063.324-.1.713-.125 1.16-.048.886-.048 2.102-.048 3.678v1.601c0 6.101 4.608 9.026 7.348 10.224l.027.011c.34.149.66.288 1.027.382.387.1.799.142 1.348.142.55 0 .96-.042 1.348-.142.367-.094.687-.233 1.026-.382l.028-.011c2.74-1.198 7.348-4.123 7.348-10.224V10.39c0-1.576 0-2.792-.048-3.679a8.85 8.85 0 0 0-.125-1.16c-.06-.312-.156-.636-.34-.9-.188-.266-.463-.465-.738-.625a8.554 8.554 0 0 0-1.052-.495c-.818-.332-1.962-.724-3.443-1.23l-.727-.25c-1.444-.494-2.34-.801-3.277-.801ZM9.08 3.514c1.615-.552 2.262-.764 2.92-.764.658 0 1.305.212 2.92.764l.572.196c1.513.518 2.616.896 3.39 1.21.387.158.667.29.864.404.097.056.164.102.208.139.038.03.053.048.055.05a.408.408 0 0 1 .032.074c.02.056.042.136.063.248.044.227.077.538.1.958.046.841.046 2.015.046 3.624v1.574c0 5.175-3.87 7.723-6.449 8.849-.371.162-.586.254-.825.315-.228.059-.506.095-.976.095s-.748-.036-.976-.095c-.24-.06-.454-.153-.825-.315-2.58-1.127-6.449-3.674-6.449-8.849v-1.574c0-1.609 0-2.783.046-3.624.023-.42.056-.731.1-.958.021-.112.043-.192.063-.248.018-.05.03-.07.032-.074a.386.386 0 0 1 .055-.05c.044-.037.111-.083.208-.14.197-.114.477-.245.864-.402.774-.315 1.877-.693 3.39-1.21l.573-.197Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.875 8.552a2.245 2.245 0 0 1 3.073.823 2.245 2.245 0 0 1-.823 3.073 2.25 2.25 0 0 1-2.25-3.896Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536.721.315 1.082.473 2.101.473 1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2c-.811 0-1.595.268-3.162.805L8.265 3C5.258 4.03 3.755 4.545 3.378 5.082Zm9.07 1.696a3.75 3.75 0 0 0-1.199 7.396V16.5a.75.75 0 1 0 1.501 0v-2.325c.386-.079.765-.22 1.125-.428a3.745 3.745 0 0 0 1.372-5.122 3.745 3.745 0 0 0-2.798-1.847Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536.721.315 1.082.473 2.101.473 1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2c-.811 0-1.595.268-3.162.805L8.265 3C5.258 4.03 3.755 4.545 3.378 5.082Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10.125 7.253a3.745 3.745 0 0 1 5.122 1.372 3.745 3.745 0 0 1-1.372 5.122 3.75 3.75 0 0 1-1.125.428V16.5a.75.75 0 0 1-1.5 0v-2.326a3.75 3.75 0 0 1-1.125-6.921Zm.75 1.299a2.245 2.245 0 0 1 3.073.823 2.245 2.245 0 0 1-.823 3.073 2.25 2.25 0 1 1-2.25-3.896Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ShieldKeyholeMinimalistic