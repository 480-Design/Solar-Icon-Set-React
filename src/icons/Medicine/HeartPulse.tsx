import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const HeartPulse = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 12h-.801c-.83 0-1.245 0-1.589.195-.344.194-.557.55-.984 1.261l-.03.052c-.398.663-.597.994-.886.989-.29-.006-.476-.345-.849-1.022l-1.687-3.067c-.347-.632-.52-.948-.798-.963-.277-.015-.484.28-.897.87l-.283.405c-.44.627-.659.94-.984 1.11-.326.17-.709.17-1.474.17H6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m8.962 18.91.464-.588-.464.589ZM12 5.5l-.54.52a.75.75 0 0 0 1.08 0L12 5.5Zm3.038 13.41.465.59-.465-.59ZM12 20.487v-.75.75Zm-9.343-7.09a.75.75 0 0 0 1.273-.792l-1.273.792Zm3.873 2.376a.75.75 0 0 0-1.06 1.062l1.06-1.062ZM2.75 9.137c0-2.803 1.257-4.542 2.83-5.14 1.575-.6 3.771-.167 5.88 2.024l1.08-1.04C10.15 2.496 7.345 1.72 5.046 2.595 2.743 3.471 1.25 5.888 1.25 9.137h1.5ZM15.503 19.5c1.492-1.177 3.28-2.754 4.703-4.516 1.407-1.743 2.544-3.775 2.544-5.847h-1.5c0 1.551-.872 3.246-2.211 4.905-1.323 1.639-3.015 3.137-4.465 4.28l.929 1.178ZM22.75 9.137c0-3.25-1.493-5.666-3.796-6.542-2.299-.874-5.103-.1-7.494 2.385l1.08 1.04c2.109-2.19 4.305-2.622 5.88-2.023 1.573.598 2.83 2.337 2.83 5.14h1.5ZM8.497 19.5c1.275 1.004 2.153 1.736 3.503 1.736v-1.5c-.73 0-1.184-.319-2.574-1.414L8.497 19.5Zm6.077-1.178c-1.39 1.095-1.843 1.414-2.574 1.414v1.5c1.35 0 2.228-.732 3.503-1.736l-.929-1.178ZM3.93 12.604c-.746-1.199-1.18-2.373-1.18-3.467h-1.5c0 1.48.58 2.932 1.407 4.26l1.273-.793Zm5.496 5.718a33.551 33.551 0 0 1-2.896-2.55l-1.06 1.062A35.022 35.022 0 0 0 8.497 19.5l.93-1.178Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 12h-.801c-.83 0-1.245 0-1.589.195-.344.194-.557.55-.984 1.261l-.03.052c-.398.663-.597.994-.886.989-.29-.006-.476-.345-.849-1.022l-1.687-3.067c-.347-.632-.52-.948-.798-.963-.277-.015-.484.28-.897.87l-.283.405c-.44.627-.659.94-.984 1.11-.326.17-.709.17-1.474.17H6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path opacity={0.5} d="m8.962 19.37.474-.58-.474.58ZM12 5.5l-.55.51a.75.75 0 0 0 1.1 0L12 5.5Zm3.038 13.872.474.581-.474-.581Zm-5.602-.581c-1.45-1.183-3.143-2.733-4.467-4.43-1.339-1.715-2.219-3.478-2.219-5.1h-1.5c0 2.126 1.13 4.22 2.536 6.023 1.421 1.82 3.21 3.452 4.702 4.669l.948-1.163ZM2.75 9.26c0-2.73 1.258-4.555 2.85-5.218 1.573-.654 3.753-.287 5.85 1.968l1.1-1.022c-2.403-2.581-5.223-3.289-7.526-2.331-2.282.95-3.774 3.422-3.774 6.603h1.5Zm12.762 10.692c1.493-1.217 3.28-2.848 4.702-4.67 1.407-1.803 2.536-3.896 2.536-6.022h-1.5c0 1.622-.88 3.385-2.219 5.1-1.324 1.697-3.017 3.247-4.467 4.43l.948 1.162ZM22.75 9.26c0-3.18-1.492-5.654-3.774-6.603-2.303-.958-5.123-.25-7.525 2.33l1.098 1.023c2.098-2.255 4.278-2.622 5.85-1.968 1.593.662 2.851 2.488 2.851 5.218h1.5ZM8.488 19.952C9.758 20.988 10.64 21.75 12 21.75v-1.5c-.722 0-1.171-.325-2.564-1.46l-.948 1.162Zm6.076-1.163C13.171 19.925 12.722 20.25 12 20.25v1.5c1.359 0 2.241-.762 3.512-1.798l-.948-1.163Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 12h-.801c-.83 0-1.245 0-1.589.195-.344.194-.557.55-.984 1.261l-.03.052c-.398.663-.597.994-.886.989-.29-.006-.476-.345-.849-1.022l-1.687-3.067c-.347-.632-.52-.948-.798-.963-.277-.015-.484.28-.897.87l-.283.405c-.44.627-.659.94-.984 1.11-.326.17-.709.17-1.474.17H6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m8.962 19.37.474-.58-.474.58ZM12 5.5l-.55.51a.75.75 0 0 0 1.1 0L12 5.5Zm3.038 13.872.474.581-.474-.581Zm-5.602-.581c-1.45-1.183-3.143-2.733-4.467-4.43-1.339-1.715-2.219-3.478-2.219-5.1h-1.5c0 2.126 1.13 4.22 2.536 6.023 1.421 1.82 3.21 3.452 4.702 4.669l.948-1.163ZM2.75 9.26c0-2.73 1.258-4.555 2.85-5.218 1.573-.654 3.753-.287 5.85 1.968l1.1-1.022c-2.403-2.581-5.223-3.289-7.526-2.331-2.282.95-3.774 3.422-3.774 6.603h1.5Zm12.762 10.692c1.493-1.217 3.28-2.848 4.702-4.67 1.407-1.803 2.536-3.896 2.536-6.022h-1.5c0 1.622-.88 3.385-2.219 5.1-1.324 1.697-3.017 3.247-4.467 4.43l.948 1.162ZM22.75 9.26c0-3.18-1.492-5.654-3.774-6.603-2.303-.958-5.123-.25-7.525 2.33l1.098 1.023c2.098-2.255 4.278-2.622 5.85-1.968 1.593.662 2.851 2.488 2.851 5.218h1.5ZM8.488 19.952C9.758 20.988 10.64 21.75 12 21.75v-1.5c-.722 0-1.171-.325-2.564-1.46l-.948 1.162Zm6.076-1.163C13.171 19.925 12.722 20.25 12 20.25v1.5c1.359 0 2.241-.762 3.512-1.798l-.948-1.163Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.093 10.746c.09-.128.164-.234.23-.325.056.098.119.211.194.348l1.71 3.11c.166.302.33.598.493.813.175.23.482.545.975.555.493.009.813-.294.996-.518.172-.208.345-.498.523-.794l.055-.092c.221-.368.36-.598.483-.765.113-.153.179-.203.228-.23.049-.028.125-.059.315-.077.206-.02.474-.02.904-.02H18a.75.75 0 1 0 0-1.5h-.834c-.387 0-.73 0-1.016.027-.311.03-.614.097-.91.264a2.223 2.223 0 0 0-.694.644c-.171.232-.347.525-.546.857l-.048.08c-.087.144-.159.264-.224.368l-.21-.377-1.709-3.108c-.154-.28-.307-.56-.463-.764-.17-.224-.462-.52-.93-.545-.467-.026-.789.237-.982.441-.177.187-.36.448-.543.71l-.31.442c-.227.325-.37.527-.493.673-.113.134-.176.178-.223.202-.046.025-.118.051-.293.067-.19.017-.438.018-.834.018H6a.75.75 0 0 0 0 1.5h.768c.357 0 .674 0 .94-.024.29-.027.571-.085.85-.23.28-.145.489-.343.676-.565.173-.204.354-.463.559-.756l.3-.429Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M22.75 9.26c0-3.18-1.492-5.654-3.774-6.603-2.13-.886-4.702-.347-6.976 1.78C9.726 2.31 7.154 1.77 5.024 2.657 2.742 3.607 1.25 6.079 1.25 9.26c0 2.126 1.13 4.22 2.536 6.023 1.421 1.82 3.21 3.452 4.702 4.669l.134.11c1.2.98 2.068 1.688 3.378 1.688s2.178-.708 3.377-1.688l.135-.11c1.493-1.217 3.28-2.848 4.702-4.67 1.407-1.803 2.536-3.896 2.536-6.022Zm-10.2-3.25c2.097-2.255 4.277-2.622 5.85-1.968 1.592.662 2.85 2.488 2.85 5.218 0 1.622-.88 3.385-2.219 5.1-1.324 1.697-3.017 3.247-4.467 4.43-1.393 1.136-1.842 1.46-2.564 1.46s-1.171-.325-2.564-1.46c-1.45-1.183-3.143-2.733-4.467-4.43-1.339-1.715-2.219-3.478-2.219-5.1 0-2.73 1.258-4.555 2.85-5.218 1.573-.654 3.753-.287 5.85 1.968a.75.75 0 0 0 1.1 0Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8.962 19.37C6.019 16.972 2 13.009 2 9.26 2 3.35 7.5.663 12 5.5 16.5.663 22 3.349 22 9.26c0 3.748-4.02 7.711-6.962 10.11C13.706 20.458 13.04 21 12 21c-1.04 0-1.706-.543-3.038-1.63Zm1.131-8.624c.09-.128.164-.234.23-.325.056.098.119.211.194.348l1.71 3.11c.166.302.33.598.493.813.175.23.482.545.975.555.493.009.813-.295.996-.518.172-.209.345-.498.523-.794l.055-.093c.221-.367.36-.598.483-.764.113-.153.179-.203.228-.23.049-.028.125-.059.315-.077.206-.02.474-.02.904-.02H18a.75.75 0 0 0 0-1.5h-.834c-.387 0-.73 0-1.016.027-.311.03-.614.097-.91.264a2.222 2.222 0 0 0-.694.644c-.171.231-.347.525-.546.857l-.048.08c-.087.144-.159.264-.224.368l-.21-.377-1.709-3.108c-.154-.28-.307-.56-.463-.765-.17-.223-.462-.52-.93-.544-.467-.026-.789.237-.982.441-.177.187-.36.448-.543.71l-.31.442c-.227.325-.37.527-.493.673-.113.134-.176.178-.223.202-.046.025-.118.051-.293.067-.19.017-.438.018-.834.018H6a.75.75 0 0 0 0 1.5h.768c.357 0 .674 0 .94-.024.29-.027.571-.085.85-.23.28-.146.489-.343.676-.565.173-.204.354-.463.559-.756l.3-.429Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M2 9.26c0 3.748 4.02 7.711 6.962 10.11C10.294 20.458 10.96 21 12 21c1.04 0 1.706-.543 3.038-1.63C17.981 16.972 22 13.009 22 9.26 22 3.35 16.5.663 12 5.5 7.5.663 2 3.349 2 9.26Z" fill="currentColor" /><path d="M10.093 10.747c.09-.128.164-.235.23-.325.056.097.119.21.194.348l1.71 3.109c.166.302.33.598.493.813.175.23.482.546.975.555.493.01.813-.294.996-.518.172-.208.345-.498.523-.794l.055-.092c.221-.368.36-.598.483-.764.113-.154.179-.204.228-.231.049-.028.125-.058.315-.077.206-.02.474-.02.904-.02H18a.75.75 0 0 0 0-1.5h-.834c-.387 0-.73 0-1.016.027-.311.03-.614.097-.91.264a2.222 2.222 0 0 0-.694.644c-.171.232-.347.525-.546.857l-.048.08c-.087.144-.159.264-.224.368l-.21-.377-1.709-3.108c-.154-.28-.307-.56-.463-.764-.17-.224-.462-.52-.93-.545-.467-.025-.789.237-.982.442-.177.186-.36.448-.543.71l-.31.442c-.227.324-.37.526-.493.672-.113.134-.176.178-.223.203-.046.024-.118.05-.293.066-.19.018-.438.018-.834.018H6a.75.75 0 0 0 0 1.5h.768c.357 0 .674 0 .94-.024.29-.026.571-.085.85-.23.28-.145.489-.343.676-.564.173-.205.354-.464.559-.757l.3-.428Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default HeartPulse