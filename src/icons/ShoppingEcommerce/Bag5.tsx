import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Bag5 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M20.206 14.97c-.537 2.687-.806 4.03-1.693 4.895-.164.16-.342.305-.53.434C16.96 21 15.59 21 12.85 21H11.15c-2.74 0-4.109 0-5.131-.7a4.006 4.006 0 0 1-.53-.435C4.6 19 4.33 17.657 3.793 14.97c-.771-3.856-1.157-5.784-.269-7.15a4 4 0 0 1 .56-.683C5.25 6 7.215 6 11.148 6h1.703c3.932 0 5.898 0 7.064 1.138a4 4 0 0 1 .559.683c.511.786.6 1.76.436 3.179" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={15} cy={10} r={1} fill="currentColor" /><circle cx={9} cy={10} r={1} fill="currentColor" /><path d="M9 6V5a3 3 0 1 1 6 0v1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.794 14.97c.537 2.687.806 4.03 1.693 4.895.164.16.342.305.53.434C7.04 21 8.41 21 11.15 21h1.703c2.739 0 4.108 0 5.13-.7.19-.13.367-.276.53-.435.888-.865 1.157-2.208 1.694-4.894.771-3.856 1.157-5.784.269-7.15a4 4 0 0 0-.56-.683C18.75 6 16.785 6 12.853 6h-1.703C7.216 6 5.25 6 4.084 7.138a4 4 0 0 0-.559.683c-.888 1.366-.502 3.294.27 7.15Z" stroke="currentColor" strokeWidth={1.5} /><circle opacity={0.5} cx={15} cy={10} r={1} fill="currentColor" /><circle opacity={0.5} cx={9} cy={10} r={1} fill="currentColor" /><path opacity={0.5} d="M9 6V5a3 3 0 1 1 6 0v1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.794 14.97c.537 2.687.806 4.03 1.693 4.895.164.16.342.305.53.434C7.04 21 8.41 21 11.15 21h1.703c2.739 0 4.108 0 5.13-.7.19-.13.367-.276.53-.435.888-.865 1.157-2.208 1.694-4.894.771-3.856 1.157-5.784.269-7.15a4 4 0 0 0-.56-.683C18.75 6 16.785 6 12.853 6h-1.703C7.216 6 5.25 6 4.084 7.138a4 4 0 0 0-.559.683c-.888 1.366-.502 3.294.27 7.15Z" stroke="currentColor" strokeWidth={1.5} /><circle cx={15} cy={10} r={1} fill="currentColor" /><circle cx={9} cy={10} r={1} fill="currentColor" /><path d="M9 6V5a3 3 0 1 1 6 0v1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M15 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.25 5.276V5a3.75 3.75 0 1 1 7.5 0v.276c.658.02 1.245.057 1.765.122 1.201.152 2.174.47 2.925 1.204.25.245.473.516.664.81.572.88.694 1.896.607 3.104-.086 1.182-.382 2.666-.759 4.549l-.02.095c-.26 1.307-.468 2.347-.726 3.166-.265.842-.604 1.524-1.17 2.076-.195.19-.405.362-.63.516-.652.447-1.387.645-2.265.74-.853.092-1.913.092-3.246.092h-1.79c-1.333 0-2.393 0-3.246-.092-.878-.095-1.613-.293-2.265-.74a4.747 4.747 0 0 1-.63-.516c-.566-.552-.905-1.234-1.17-2.076-.257-.819-.465-1.859-.727-3.166l-.019-.095c-.376-1.883-.673-3.367-.758-4.549-.088-1.208.034-2.224.606-3.104a4.75 4.75 0 0 1 .664-.81c.752-.734 1.724-1.052 2.925-1.204.52-.065 1.107-.102 1.765-.122ZM9.75 5a2.25 2.25 0 0 1 4.5 0v.252c-.424-.002-.872-.002-1.345-.002h-1.81c-.473 0-.92 0-1.345.002V5ZM4.608 7.675c.415-.405 1.008-.655 2.065-.789 1.07-.135 2.49-.136 4.476-.136h1.703c1.986 0 3.404.001 4.475.136 1.057.134 1.65.384 2.065.789.171.167.323.353.454.554.316.486.445 1.117.369 2.18-.078 1.076-.355 2.467-.744 4.415-.272 1.359-.465 2.32-.696 3.051-.225.717-.465 1.14-.786 1.453a3.26 3.26 0 0 1-.43.353c-.37.253-.832.405-1.579.486-.763.082-1.743.083-3.129.083H11.15c-1.386 0-2.366-.001-3.13-.083-.746-.08-1.207-.233-1.577-.486a3.264 3.264 0 0 1-.431-.354c-.321-.313-.56-.735-.786-1.452-.23-.732-.424-1.692-.695-3.051-.39-1.948-.667-3.34-.744-4.416-.077-1.062.052-1.693.368-2.179a3.25 3.25 0 0 1 .454-.554Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8.25 7.002V6a3.75 3.75 0 1 1 7.5 0v1.002c2.684.012 4.11.12 4.91 1.096.9 1.098.569 2.758-.095 6.079l-.6 3c-.462 2.309-.693 3.463-1.523 4.143-.829.68-2.006.68-4.36.68H9.918c-2.355 0-3.532 0-4.362-.68-.829-.68-1.06-1.834-1.522-4.143l-.6-3c-.664-3.32-.996-4.98-.096-6.079.8-.976 2.227-1.084 4.911-1.096ZM9.75 6a2.25 2.25 0 0 1 4.5 0v1h-4.5V6ZM15 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M4.035 16.927c.462 2.309.693 3.463 1.522 4.143.83.68 2.007.68 4.362.68h4.162c2.355 0 3.532 0 4.361-.68.83-.68 1.06-1.834 1.523-4.143l.6-3c.664-3.32.996-4.98.096-6.079-.9-1.098-2.594-1.098-5.98-1.098H9.32c-3.386 0-5.08 0-5.98 1.098-.9 1.098-.568 2.758.096 6.079l.6 3Z" fill="currentColor" /><circle cx={15} cy={9.75} r={1} fill="currentColor" /><circle cx={9} cy={9.75} r={1} fill="currentColor" /><path d="M9.75 5.75a2.25 2.25 0 0 1 4.5 0v1h.431c.377 0 .733 0 1.069.002V5.75a3.75 3.75 0 1 0-7.5 0v1.002c.336-.002.692-.002 1.069-.002h.431v-1Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Bag5