import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const AdhesivePlaster2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M12.765 20.416a5.41 5.41 0 1 0 7.65-7.651m-7.65 7.65 7.65-7.65m-7.65 7.65-4.59-4.59m-4.59-4.59a5.41 5.41 0 0 1 7.65-7.65m-7.65 7.65 7.65-7.65m-7.65 7.65L5 12.65m15.416.115L19 11.35m-7.765-7.766 4.59 4.59" /><circle cx={9.172} cy={12} r={1} fill="currentColor" transform="rotate(-45 9.172 12)" /><circle cx={12} cy={14.829} r={1} fill="currentColor" transform="rotate(-45 12 14.829)" /><circle cx={12} cy={9.171} r={1} fill="currentColor" transform="rotate(-45 12 9.171)" /><circle cx={14.829} cy={12} r={1} fill="currentColor" transform="rotate(-45 14.829 12)" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m20.416 12.765-9.181-9.18a5.41 5.41 0 0 0-7.65 7.65l9.18 9.18a5.41 5.41 0 1 0 7.65-7.65Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m12.765 20.416 7.65-7.65m-9.18-9.182-7.65 7.651" opacity={0.5} /><circle cx={9.172} cy={12} r={1} fill="currentColor" transform="rotate(-45 9.172 12)" /><circle cx={12} cy={14.829} r={1} fill="currentColor" transform="rotate(-45 12 14.829)" /><circle cx={12} cy={9.171} r={1} fill="currentColor" transform="rotate(-45 12 9.171)" /><circle cx={14.829} cy={12} r={1} fill="currentColor" transform="rotate(-45 14.829 12)" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m12.765 20.416-9.18-9.181m9.18 9.18a5.41 5.41 0 1 0 7.65-7.65m-7.65 7.65 7.65-7.65m0 0-9.18-9.18m0 0a5.41 5.41 0 0 0-7.65 7.65m7.65-7.65-7.65 7.65" /><circle cx={9.172} cy={12} r={1} fill="currentColor" transform="rotate(-45 9.172 12)" /><circle cx={12} cy={14.829} r={1} fill="currentColor" transform="rotate(-45 12 14.829)" /><circle cx={12} cy={9.171} r={1} fill="currentColor" transform="rotate(-45 12 9.171)" /><circle cx={14.828} cy={12} r={1} fill="currentColor" transform="rotate(-45 14.828 12)" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9.879 11.293a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414ZM12.707 15.536a1 1 0 1 0-1.414-1.415 1 1 0 0 0 1.414 1.415ZM12.707 8.465a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414ZM15.535 12.707a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414Z" /><path fill="currentColor" fillRule="evenodd" d="M3.054 3.054a6.16 6.16 0 0 1 8.711 0l9.18 9.18a6.16 6.16 0 0 1-8.71 8.712l-9.18-9.18a6.16 6.16 0 0 1 0-8.712Zm7.078.573a4.66 4.66 0 0 0-6.505 6.505l6.505-6.505Zm1.103 1.018-6.59 6.59 8.12 8.12 6.59-6.59-8.12-8.12Zm9.138 9.223-6.505 6.505a4.66 4.66 0 0 0 6.505-6.505Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m20.91 13.332-7.578 7.577a5.41 5.41 0 0 0 7.577-7.577Z" /><path fill="currentColor" fillRule="evenodd" d="m12.235 19.885 7.65-7.65-8.12-8.12-7.65 7.65 8.12 8.12Zm-2.356-8.592a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414Zm2.828 4.243a1 1 0 1 0-1.414-1.415 1 1 0 0 0 1.414 1.415Zm0-7.071a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414Zm2.828 4.242a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414Z" clipRule="evenodd" /><path fill="currentColor" d="m3.09 10.668 7.578-7.577a5.41 5.41 0 0 0-7.577 7.577Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m20.416 12.765-9.181-9.18a5.41 5.41 0 0 0-7.65 7.65l9.18 9.18a5.41 5.41 0 1 0 7.65-7.65Z" opacity={0.5} /><path fill="currentColor" d="m19.885 12.234.531.531c.18.18.344.37.494.566l-7.578 7.578a5.45 5.45 0 0 1-.567-.493l-.53-.531 7.65-7.65ZM10.668 3.09c.198.15.387.314.567.494l.53.53-7.65 7.651-.53-.53c-.18-.18-.345-.37-.494-.567l7.577-7.578Z" /><circle cx={9.172} cy={12} r={1} fill="currentColor" transform="rotate(-45 9.172 12)" /><circle cx={12} cy={14.829} r={1} fill="currentColor" transform="rotate(-45 12 14.829)" /><circle cx={12} cy={9.171} r={1} fill="currentColor" transform="rotate(-45 12 9.171)" /><circle cx={14.828} cy={12} r={1} fill="currentColor" transform="rotate(-45 14.828 12)" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default AdhesivePlaster2