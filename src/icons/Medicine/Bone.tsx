import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const Bone = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12.356 15.206-1.425 1.425c-.393.394-.369 1.043-.22 1.58.28 1.013-.105 2.308-.848 3.051A2.519 2.519 0 0 1 6.3 17.7a2.519 2.519 0 0 1-3.562-3.563c.743-.743 2.038-1.128 3.052-.848.536.149 1.185.173 1.579-.22l5.7-5.7c.393-.394.369-1.043.22-1.58-.28-1.013.105-2.308.848-3.051A2.519 2.519 0 0 1 17.7 6.3a2.519 2.519 0 0 1 3.562 3.563c-.743.743-2.038 1.128-3.052.848-.536-.149-1.185-.173-1.579.22l-1.425 1.425" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.931 16.631c-.393.394-.369 1.043-.22 1.58.28 1.013-.105 2.308-.848 3.051A2.519 2.519 0 0 1 6.3 17.7a2.519 2.519 0 0 1-3.562-3.563c.743-.743 2.038-1.128 3.052-.848.536.149 1.185.173 1.579-.22m9.262-2.138c.394-.393 1.043-.369 1.58-.22 1.013.28 2.308-.105 3.051-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562c-.743.743-1.128 2.038-.848 3.052.149.536.173 1.185-.22 1.579" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" /><path opacity={0.5} d="M17.161 11.462a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM13.6 7.899a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-2.137 9.263 5.7-5.7-1.061-1.06-5.7 5.699 1.06 1.06Zm-3.563-3.563 5.7-5.7-1.06-1.06-5.7 5.7 1.06 1.06Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052.149.536.173 1.185-.22 1.579l-5.7 5.7c-.394.393-1.043.369-1.58.22-1.013-.28-2.308.105-3.051.848A2.519 2.519 0 0 0 6.3 17.7a2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052-.149-.536-.173-1.185.22-1.579l5.7-5.7c.394-.393 1.043-.369 1.58-.22 1.013.28 2.308-.105 3.051-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M17.17 3.268c-.691-.69-1.811-.69-2.502 0-.568.568-.858 1.59-.656 2.322.09.325.152.715.117 1.109-.035.397-.174.844-.53 1.2l-5.7 5.7c-.356.356-.803.495-1.2.53a3.178 3.178 0 0 1-1.11-.117c-.732-.202-1.753.088-2.32.656a1.769 1.769 0 1 0 2.5 2.502.75.75 0 1 1 1.062 1.06 1.769 1.769 0 1 0 2.501 2.502c.568-.568.858-1.59.656-2.322a3.178 3.178 0 0 1-.117-1.109c.035-.397.174-.844.53-1.2l5.7-5.7c.356-.356.803-.495 1.2-.53.394-.035.784.027 1.11.117.732.202 1.753-.088 2.32-.656a1.77 1.77 0 0 0-2.5-2.501.75.75 0 0 1-1.062-1.061c.691-.691.691-1.811 0-2.502Zm2.003 1.559a3.27 3.27 0 0 0-5.566-2.62c-.919.92-1.398 2.489-1.04 3.783.058.21.083.414.068.577-.014.16-.06.234-.097.272l-5.7 5.7c-.037.037-.111.082-.271.096a1.693 1.693 0 0 1-.577-.068c-1.294-.358-2.864.121-3.783 1.04a3.27 3.27 0 0 0 2.62 5.566 3.269 3.269 0 0 0 5.566 2.62c.919-.92 1.398-2.489 1.04-3.783a1.694 1.694 0 0 1-.068-.577c.014-.16.06-.234.097-.272l5.7-5.7c.037-.037.111-.082.271-.096.163-.015.366.01.577.068 1.294.358 2.864-.121 3.782-1.04a3.269 3.269 0 0 0-2.619-5.566Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052.149.536.173 1.185-.22 1.579l-5.7 5.7c-.394.393-1.043.369-1.58.22-1.013-.28-2.308.105-3.051.848A2.519 2.519 0 0 0 6.3 17.7a2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052-.149-.536-.173-1.185.22-1.579l5.7-5.7c.394-.393 1.043-.369 1.58-.22 1.013.28 2.308-.105 3.051-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.29 5.79c-.28-1.014.104-2.309.847-3.052A2.519 2.519 0 0 1 17.7 6.3a2.519 2.519 0 0 1 3.562 3.563c-.743.743-2.038 1.128-3.052.848-.536-.149-1.185-.173-1.579.22L13.07 7.37c.393-.394.369-1.043.22-1.58Zm-5.921 7.279c-.394.393-1.043.369-1.58.22-1.013-.28-2.308.105-3.051.848A2.519 2.519 0 0 0 6.3 17.7a2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052-.149-.536-.173-1.185.22-1.579L7.37 13.07Z" fill="currentColor" /><path opacity={0.5} d="m10.931 16.631 5.7-5.7L13.07 7.37l-5.7 5.7 3.563 3.562Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Bone