import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const TicketSale = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m9 15 6-6" /><path fill="currentColor" d="M15.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10.5 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M14.004 4H9.996C6.218 4 4.33 4 3.156 5.172c-.88.877-1.1 2.154-1.156 4.322-.007.278.221.5.49.571A2.001 2.001 0 0 1 3.986 12c0 .929-.634 1.71-1.494 1.935-.27.07-.498.292-.49.57.055 2.17.276 3.446 1.154 4.323M18 4.1c1.309.128 2.189.417 2.845 1.072.878.877 1.1 2.154 1.155 4.322.007.278-.221.5-.49.571A2.002 2.002 0 0 0 20.014 12c0 .929.634 1.71 1.494 1.935.27.07.498.292.49.57-.055 2.17-.276 3.446-1.154 4.323C19.67 20 17.782 20 14.004 20H9.996C8.83 20 7.841 20 7 19.965" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M14.005 4h-4.01c-3.78 0-5.67 0-6.845 1.172-.81.806-1.061 1.951-1.14 3.817-.015.37-.023.556.046.679.07.123.345.278.897.586a1.999 1.999 0 0 1 0 3.492c-.552.309-.828.463-.897.586-.069.123-.061.308-.045.678.078 1.867.33 3.012 1.139 3.818C4.324 20 6.214 20 9.995 20h4.01c3.78 0 5.67 0 6.845-1.172.81-.806 1.061-1.951 1.14-3.817.015-.37.023-.556-.046-.679-.07-.123-.345-.277-.897-.586a1.999 1.999 0 0 1 0-3.492c.552-.308.828-.463.897-.586.069-.123.061-.308.045-.679-.078-1.866-.33-3.01-1.139-3.817C19.676 4 17.786 4 14.005 4Z" opacity={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m9 15 6-6" /><path fill="currentColor" d="M15.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10.5 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M14.005 4h-4.01c-3.78 0-5.67 0-6.845 1.172-.81.806-1.061 1.951-1.14 3.817-.015.37-.023.556.046.679.07.123.345.278.897.586a1.999 1.999 0 0 1 0 3.492c-.552.309-.828.463-.897.586-.069.123-.061.308-.045.678.078 1.867.33 3.012 1.139 3.818C4.324 20 6.214 20 9.995 20h4.01c3.78 0 5.67 0 6.845-1.172.81-.806 1.061-1.951 1.14-3.817.015-.37.023-.556-.046-.679-.07-.123-.345-.277-.897-.586a1.999 1.999 0 0 1 0-3.492c.552-.308.828-.463.897-.586.069-.123.061-.308.045-.679-.078-1.866-.33-3.01-1.139-3.817C19.676 4 17.786 4 14.005 4Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m9 15 6-6" /><path fill="currentColor" d="M15.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10.5 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M9.939 3.25h4.122c1.843 0 3.302 0 4.444.153 1.174.158 2.125.49 2.875 1.238 1.03 1.027 1.28 2.44 1.359 4.317v.024c.008.164.015.331.008.472a1.28 1.28 0 0 1-.149.58 1.12 1.12 0 0 1-.268.312c-.08.066-.169.126-.254.18-.163.103-.385.227-.644.372l-.02.01a1.249 1.249 0 0 0 0 2.184l.02.01c.26.145.48.269.644.372.085.054.174.114.254.18.074.061.185.164.268.312.12.214.143.43.15.58.006.14-.001.308-.008.472l-.001.024c-.08 1.876-.33 3.29-1.359 4.317-.75.748-1.7 1.08-2.875 1.238-1.142.153-2.601.153-4.444.153H9.94c-1.843 0-3.302 0-4.444-.153-1.175-.158-2.125-.49-2.875-1.238-1.03-1.027-1.28-2.44-1.359-4.317v-.024a5.833 5.833 0 0 1-.009-.472c.007-.15.03-.366.15-.58a1.12 1.12 0 0 1 .268-.312c.08-.066.169-.126.254-.18.163-.103.385-.227.644-.372l.02-.01a1.249 1.249 0 0 0 0-2.184l-.02-.01c-.26-.145-.48-.269-.644-.372a2.442 2.442 0 0 1-.254-.18 1.12 1.12 0 0 1-.268-.312 1.28 1.28 0 0 1-.15-.58 5.83 5.83 0 0 1 .01-.496c.078-1.876.328-3.29 1.358-4.317.75-.748 1.7-1.08 2.875-1.238C6.637 3.25 8.096 3.25 9.94 3.25Zm11.308 11.334v.004-.004Zm.002.142v.02l-.009.233c-.078 1.856-.331 2.732-.92 3.318-.424.424-1.006.678-2.015.813-1.03.138-2.389.14-4.3.14h-4.01c-1.911 0-3.27-.002-4.3-.14-1.01-.135-1.591-.389-2.016-.813-.588-.586-.841-1.462-.92-3.318a15.1 15.1 0 0 1-.008-.253c.124-.077.303-.177.568-.325a2.749 2.749 0 0 0 0-4.802 17.255 17.255 0 0 1-.568-.325v-.02l.009-.233c.078-1.856.331-2.732.92-3.318.424-.424 1.005-.678 2.015-.813 1.03-.138 2.389-.14 4.3-.14h4.01c1.911 0 3.27.002 4.3.14 1.01.135 1.591.389 2.016.813.587.586.841 1.462.919 3.318l.009.233v.02c-.124.077-.303.177-.568.325a2.748 2.748 0 0 0 0 4.802c.264.148.444.248.568.325Zm.125-5.535h-.002a.036.036 0 0 1 .002 0Zm-.127.225v-.004.004ZM2.627 9.19Zm.126.221v.004-.004Zm0 5.172v.004-.004Zm-.125.224a.046.046 0 0 1-.002.001h.002Zm18.744 0 .002.001a.031.031 0 0 1-.002 0ZM15.53 8.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" /><path fill="currentColor" d="M15.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10.5 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M9.995 4h4.01c3.78 0 5.67 0 6.845 1.172.81.806 1.061 1.951 1.14 3.817.015.37.023.556-.046.679-.07.123-.345.278-.897.586a1.999 1.999 0 0 0 0 3.492c.552.309.828.463.897.586.069.123.061.308.045.678-.078 1.867-.33 3.012-1.139 3.818C19.676 20 17.786 20 14.005 20h-4.01c-3.78 0-5.67 0-6.845-1.172-.81-.806-1.061-1.951-1.14-3.817-.015-.37-.023-.556.046-.679.07-.123.345-.277.897-.586a1.999 1.999 0 0 0 0-3.492c-.552-.308-.828-.463-.897-.586-.069-.123-.061-.308-.045-.679.078-1.866.33-3.01 1.139-3.817C4.324 4 6.214 4 9.995 4Zm5.553 4.47a.749.749 0 0 1 0 1.06l-6.015 6a.753.753 0 0 1-1.063 0 .749.749 0 0 1 0-1.06l6.014-6a.753.753 0 0 1 1.064 0Zm-1.033 7.03a1.001 1.001 0 1 0 0-2c-.554 0-1.003.448-1.003 1s.45 1 1.003 1Zm-5.013-5c.554 0 1.003-.448 1.003-1s-.449-1-1.003-1a1.001 1.001 0 1 0 0 2Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M14.005 4h-4.01c-3.78 0-5.67 0-6.845 1.172-.81.806-1.061 1.951-1.14 3.817-.015.37-.023.556.046.679.07.123.345.278.897.586a1.999 1.999 0 0 1 0 3.492c-.552.309-.828.463-.897.586-.069.123-.061.308-.045.678.078 1.867.33 3.012 1.139 3.818C4.324 20 6.214 20 9.995 20h4.01c3.78 0 5.67 0 6.845-1.172.81-.806 1.061-1.951 1.14-3.817.015-.37.023-.556-.046-.679-.07-.123-.345-.277-.897-.586a1.999 1.999 0 0 1 0-3.492c.552-.308.828-.463.897-.586.069-.123.061-.308.045-.679-.078-1.866-.33-3.01-1.139-3.817C19.676 4 17.786 4 14.005 4Z" opacity={0.5} /><path fill="currentColor" d="M15.547 8.47a.749.749 0 0 1 0 1.06l-6.014 6a.753.753 0 0 1-1.064 0 .749.749 0 0 1 0-1.06l6.015-6a.753.753 0 0 1 1.063 0ZM14.515 15.5a1.001 1.001 0 1 0 0-2 1.001 1.001 0 1 0 0 2ZM9.502 10.5a1.001 1.001 0 1 0 0-2 1.001 1.001 0 1 0 0 2Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default TicketSale