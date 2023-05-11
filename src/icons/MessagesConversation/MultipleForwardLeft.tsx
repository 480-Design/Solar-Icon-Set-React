import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const MultipleForwardLeft = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 10.13c-1.613-1.153-3.455-1.56-5-1.56V6.227c0-.958 0-1.437-.295-1.57-.295-.132-.653.186-1.37.823l-3.972 3.53C5.795 10.405 5.01 11.102 5.01 12c0 .899.785 1.596 2.353 2.99l3.973 3.53c.716.637 1.074.956 1.369.823.295-.133.295-.611.295-1.57v-2.344c3.6 0 7.5 1.714 9 4.571 0-2.431-.377-4.378-1-5.925" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M8.461 4.5 3.245 9.344a3.897 3.897 0 0 0 .126 5.823L8.46 19.5" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m11.336 5.479-3.973 3.53C5.795 10.405 5.01 11.102 5.01 12c0 .899.785 1.596 2.353 2.99l3.973 3.53c.716.637 1.074.956 1.369.823.295-.133.295-.611.295-1.57v-2.344c3.6 0 7.5 1.714 9 4.571 0-9.142-5.333-11.428-9-11.428V6.226c0-.958 0-1.437-.295-1.57-.295-.132-.653.186-1.37.823Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M8.461 4.5 3.245 9.344a3.897 3.897 0 0 0 .126 5.823L8.46 19.5" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m11.335 5.479-3.972 3.53C5.795 10.405 5.01 11.102 5.01 12c0 .899.785 1.596 2.353 2.99l3.972 3.53c.716.637 1.074.956 1.37.823.295-.133.295-.611.295-1.57v-2.344c3.6 0 7.5 1.714 9 4.571 0-9.142-5.334-11.428-9-11.428V6.226c0-.958 0-1.437-.295-1.57-.296-.132-.653.186-1.37.823Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M8.462 4.5 3.245 9.344a3.897 3.897 0 0 0 .126 5.823l5.09 4.333" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M9.011 3.99a.75.75 0 0 1-.04 1.06L3.757 9.893a3.147 3.147 0 0 0 .101 4.703l5.09 4.333a.75.75 0 1 1-.972 1.142l-5.09-4.333a4.647 4.647 0 0 1-.15-6.944L7.951 3.95a.75.75 0 0 1 1.06.04Zm3.236 1.687c-.113.097-.248.216-.413.363L7.862 9.57c-.801.713-1.342 1.196-1.692 1.607-.336.396-.41.626-.41.823 0 .197.074.428.41.823.35.411.89.894 1.692 1.606l3.972 3.531c.165.147.3.266.413.363.003-.149.003-.33.003-.55V15.43a.75.75 0 0 1 .75-.75c1.913 0 3.9.454 5.616 1.29a10.267 10.267 0 0 1 2.5 1.688c-.369-3.047-1.458-5.013-2.76-6.258-1.62-1.55-3.666-2.078-5.356-2.078a.75.75 0 0 1-.75-.75V6.227c0-.22 0-.401-.003-.55Zm-.482-1.523c.257-.17.724-.416 1.247-.18.524.234.65.747.694 1.052.044.31.044.715.044 1.15V7.85c1.824.141 3.922.817 5.644 2.464 1.975 1.89 3.356 4.964 3.356 9.685a.75.75 0 0 1-1.414.349c-.656-1.25-1.864-2.295-3.377-3.032a11.56 11.56 0 0 0-4.209-1.112v1.62c0 .434 0 .84-.044 1.15-.044.304-.17.817-.694 1.052-.523.235-.99-.012-1.247-.181-.261-.173-.564-.442-.889-.73a109.7 109.7 0 0 1-.038-.035l-4.014-3.568c-.75-.665-1.37-1.217-1.796-1.718C4.58 13.268 4.26 12.7 4.26 12c0-.701.319-1.268.767-1.795.426-.5 1.047-1.053 1.796-1.718l4.014-3.568.038-.034c.325-.289.628-.558.889-.73Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12.475 5.184 7.497 9.608c-.93.827-1.396 1.241-1.567 1.73a2 2 0 0 0 0 1.325c.171.488.637.902 1.567 1.729l4.978 4.425c.422.375.634.563.813.57a.5.5 0 0 0 .405-.182c.114-.139.114-.421.114-.986v-2.79c2.428 0 4.992.78 6.865 2.164.975.72 1.462 1.08 1.648 1.067a.451.451 0 0 0 .39-.24c.096-.16.01-.658-.16-1.653-1.104-6.466-5.554-8.196-8.743-8.196v-2.79c0-.565 0-.847-.114-.986a.5.5 0 0 0-.405-.181c-.18.006-.39.194-.813.57Z" /><path fill="currentColor" fillRule="evenodd" d="M9.818 3.99a.75.75 0 0 0-1.06-.04L3.542 8.794a4.647 4.647 0 0 0 .15 6.944l5.09 4.333a.75.75 0 1 0 .972-1.142l-5.09-4.333a3.147 3.147 0 0 1-.102-4.703L9.78 5.05a.75.75 0 0 0 .039-1.06Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12.476 5.183 7.498 9.608c-.93.827-1.396 1.24-1.568 1.73a2 2 0 0 0 0 1.324c.172.489.637.902 1.568 1.73l4.978 4.424c.422.376.633.563.812.57a.5.5 0 0 0 .405-.182c.114-.138.114-.42.114-.986v-2.79c2.428 0 4.993.78 6.865 2.165.975.72 1.463 1.08 1.648 1.067a.451.451 0 0 0 .39-.24c.096-.16.011-.658-.159-1.653-1.105-6.467-5.555-8.196-8.744-8.196v-2.79c0-.565 0-.847-.114-.986a.5.5 0 0 0-.405-.181c-.18.006-.39.194-.813.57Z" /><path fill="currentColor" fillRule="evenodd" d="M9.818 3.99a.75.75 0 0 0-1.06-.04L3.542 8.794a4.647 4.647 0 0 0 .15 6.944l5.09 4.333a.75.75 0 1 0 .972-1.142l-5.09-4.333a3.147 3.147 0 0 1-.102-4.703L9.78 5.05a.75.75 0 0 0 .039-1.06Z" clipRule="evenodd" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MultipleForwardLeft