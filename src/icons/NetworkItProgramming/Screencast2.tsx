import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Screencast2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 18.415a3.02 3.02 0 0 0 .828-.587C22 16.657 22 14.771 22 11v-1M4 18.415a3.02 3.02 0 0 1-.828-.587C2 16.657 2 14.771 2 11c0-3.771 0-5.657 1.172-6.828C4.343 3 6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172.47.47.751 1.054.92 1.828" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M9.95 16.05c.93-.93 1.396-1.396 1.97-1.427.053-.002.106-.002.159 0 .574.03 1.04.496 1.971 1.427 2.026 2.026 3.039 3.039 2.755 3.913a1.499 1.499 0 0 1-.09.218C16.297 21 14.865 21 12 21c-2.865 0-4.298 0-4.715-.819a1.496 1.496 0 0 1-.09-.218c-.284-.874.729-1.887 2.755-3.913Z" stroke="currentColor" strokeWidth={1.5} /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M7.142 18.97c-1.957-.07-3.142-.313-3.97-1.142C2 16.657 2 14.771 2 11c0-3.771 0-5.657 1.172-6.828C4.343 3 6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172C22 5.343 22 7.229 22 11c0 3.771 0 5.657-1.172 6.828-.808.809-1.956 1.06-3.828 1.137" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M9.95 16.05c.93-.93 1.396-1.396 1.97-1.427.053-.002.106-.002.159 0 .574.03 1.04.496 1.971 1.427 2.026 2.026 3.039 3.039 2.755 3.913a1.499 1.499 0 0 1-.09.218C16.297 21 14.865 21 12 21c-2.865 0-4.298 0-4.715-.819a1.496 1.496 0 0 1-.09-.218c-.284-.874.729-1.887 2.755-3.913Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20 18.415a3.02 3.02 0 0 0 .828-.587C22 16.657 22 14.771 22 11c0-3.771 0-5.657-1.172-6.828C19.657 3 17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172 2 5.343 2 7.229 2 11c0 3.771 0 5.657 1.172 6.828.242.243.514.435.828.587" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M9.95 16.05c.93-.93 1.396-1.396 1.97-1.427.053-.002.106-.002.159 0 .574.03 1.04.496 1.971 1.427 2.026 2.026 3.039 3.039 2.755 3.913a1.499 1.499 0 0 1-.09.218C16.297 21 14.865 21 12 21c-2.865 0-4.298 0-4.715-.819a1.496 1.496 0 0 1-.09-.218c-.284-.874.729-1.887 2.755-3.913Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.944 2.25c-1.838 0-3.294 0-4.433.153-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87-.153 1.14-.153 2.595-.153 4.433v.112c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.304.303.646.543 1.031.73a.75.75 0 0 0 .656-1.348 2.272 2.272 0 0 1-.626-.443c-.423-.423-.677-1.003-.812-2.009-.138-1.027-.14-2.382-.14-4.289 0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.138 1.028.14 2.382.14 4.289 0 1.907-.002 3.261-.14 4.29-.135 1.005-.389 1.585-.812 2.008-.18.18-.384.325-.626.443a.75.75 0 0 0 .656 1.349 3.773 3.773 0 0 0 1.03-.731c.75-.749 1.081-1.698 1.239-2.87.153-1.14.153-2.595.153-4.433v-.112c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-1.14-.153-2.595-.153-4.433-.153H9.944Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12.118 13.874a2.225 2.225 0 0 0-.236 0c-.502.027-.908.249-1.273.533-.342.265-.72.643-1.157 1.08l-.076.076c-.976.976-1.764 1.764-2.266 2.42-.49.64-.895 1.391-.629 2.212.037.112.082.222.136.327.391.768 1.208 1.013 2.009 1.12.818.108 1.932.108 3.313.108h.121c1.381 0 2.496 0 3.314-.109.8-.106 1.617-.35 2.009-1.119.054-.105.1-.215.136-.327.266-.82-.14-1.571-.63-2.212-.501-.655-1.29-1.444-2.266-2.42l-.075-.075c-.438-.438-.815-.816-1.157-1.081-.366-.284-.771-.506-1.273-.533Zm-.158 1.498a.742.742 0 0 1 .08 0c.072.004.187.03.43.22.26.2.57.51 1.05.989 1.03 1.03 1.745 1.747 2.178 2.313.452.59.411.784.394.838a.756.756 0 0 1-.045.109c-.026.05-.134.215-.87.313-.708.094-1.721.096-3.177.096s-2.47-.002-3.176-.096c-.737-.098-.845-.263-.871-.313a.75.75 0 0 1-.045-.11c-.018-.053-.058-.246.394-.837.433-.566 1.148-1.284 2.178-2.313.48-.48.79-.789 1.049-.99.244-.189.358-.215.431-.219Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M9.95 16.05c.93-.93 1.396-1.396 1.97-1.427.053-.002.106-.002.159 0 .574.03 1.04.496 1.971 1.427 2.026 2.026 3.039 3.039 2.755 3.913a1.499 1.499 0 0 1-.09.218C16.297 21 14.865 21 12 21c-2.865 0-4.298 0-4.715-.819a1.496 1.496 0 0 1-.09-.218c-.284-.874.729-1.887 2.755-3.913Z" fill="currentColor" /><path d="M14 3h-4C6.229 3 4.343 3 3.172 4.172 2 5.343 2 7.229 2 11c0 3.771 0 5.657 1.172 6.828.242.243.514.435.828.587.481.234 1.06.375 1.77.459.167-.533.473-.992.745-1.347.532-.696 1.35-1.514 2.297-2.46l.13-.131c.42-.42.827-.827 1.207-1.122.426-.331.977-.651 1.693-.689a3.02 3.02 0 0 1 .316 0c.716.038 1.267.358 1.693.69.38.294.787.702 1.206 1.12l.13.131c.948.947 1.766 1.765 2.298 2.46.272.356.577.815.744 1.348.712-.084 1.29-.225 1.771-.459a3.02 3.02 0 0 0 .828-.587C22 16.657 22 14.771 22 11c0-3.771 0-5.657-1.172-6.828C19.657 3 17.771 3 14 3Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M14 3h-4C6.229 3 4.343 3 3.172 4.172 2 5.343 2 7.229 2 11c0 3.771 0 5.657 1.172 6.828C4.343 19 6.229 19 10 19h4c3.771 0 5.657 0 6.828-1.172C22 16.657 22 14.771 22 11c0-3.771 0-5.657-1.172-6.828C19.657 3 17.771 3 14 3Z" fill="currentColor" /><path d="M9.95 16.05c.93-.93 1.396-1.396 1.97-1.427.053-.002.106-.002.159 0 .574.03 1.04.496 1.971 1.427 2.026 2.026 3.039 3.039 2.755 3.913a1.499 1.499 0 0 1-.09.218C16.297 21 14.865 21 12 21c-2.865 0-4.298 0-4.715-.819a1.496 1.496 0 0 1-.09-.218c-.284-.874.729-1.887 2.755-3.913Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Screencast2