import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MusicNotes = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM22 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="m22 8-10 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m14.456 5.158.29.692-.29-.692Zm2-.837-.29-.692.29.692Zm4.652-.98-.416.624.416-.624ZM21.25 12a.75.75 0 0 0 1.5 0h-1.5Zm-8.5 7V8.847h-1.5V19h1.5ZM14.745 5.85l2-.837-.579-1.384-2 .837.58 1.384Zm8.005 2.16c0-1.333.002-2.42-.12-3.24-.123-.837-.4-1.583-1.106-2.054l-.832 1.249c.185.123.355.353.455 1.024.101.686.103 1.638.103 3.022h1.5Zm-6.005-2.997c1.276-.534 2.156-.9 2.828-1.072.657-.167.935-.099 1.12.024l.83-1.249c-.707-.47-1.502-.437-2.32-.228-.805.205-1.806.626-3.037 1.141l.58 1.384ZM12.75 8.848c0-.662.001-1.098.037-1.434.035-.317.095-.474.172-.59l-1.248-.83c-.258.387-.366.805-.415 1.258-.047.436-.046.967-.046 1.596h1.5Zm1.416-4.382c-.58.243-1.07.447-1.454.659-.4.22-.743.48-1.001.868l1.248.831c.077-.115.199-.232.478-.386.296-.163.698-.333 1.308-.588l-.579-1.384ZM22.75 12V8.01h-1.5V12h1.5Z" fill="currentColor" /><path d="M7 11V2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={4.5} cy={10.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path d="M10 5c-1.243 0-3-.929-3-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM22 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="m22 8-10 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m14.456 5.158.29.692-.29-.692Zm2-.837-.29-.692.29.692Zm4.652-.98-.416.624.416-.624ZM12.75 19V8.847h-1.5V19h1.5Zm10-1.847V8.011h-1.5v9.143h1.5ZM14.745 5.85l2-.837-.579-1.384-2 .837.58 1.384Zm8.005 2.16c0-1.333.002-2.42-.12-3.24-.123-.837-.4-1.583-1.106-2.054l-.832 1.249c.185.123.355.353.455 1.024.101.686.103 1.638.103 3.022h1.5Zm-6.005-2.997c1.276-.534 2.156-.9 2.828-1.072.657-.167.935-.099 1.12.024l.83-1.249c-.707-.47-1.502-.437-2.32-.228-.805.205-1.806.626-3.037 1.141l.58 1.384ZM12.75 8.848c0-.662.001-1.098.037-1.434.035-.317.095-.474.172-.59l-1.248-.83c-.258.387-.366.805-.415 1.258-.047.436-.046.967-.046 1.596h1.5Zm1.416-4.382c-.58.243-1.07.447-1.454.659-.4.22-.743.48-1.001.868l1.248.831c.077-.115.199-.232.478-.386.296-.163.698-.333 1.308-.588l-.579-1.384Z" fill="currentColor" /><path opacity={0.5} d="M7 11V2c0 2.071 1.757 3 3 3m-3 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM22 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" stroke="currentColor" strokeWidth={1.5} /><path d="m22 8-10 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m14.456 5.158.29.692-.29-.692Zm2-.837-.29-.692.29.692Zm4.652-.98-.416.624.416-.624ZM12.75 19V8.847h-1.5V19h1.5Zm10-1.847V8.011h-1.5v9.143h1.5ZM14.745 5.85l2-.837-.579-1.384-2 .837.58 1.384Zm8.005 2.16c0-1.333.002-2.42-.12-3.24-.123-.837-.4-1.583-1.106-2.054l-.832 1.249c.185.123.355.353.455 1.024.101.686.103 1.638.103 3.022h1.5Zm-6.005-2.997c1.276-.534 2.156-.9 2.828-1.072.657-.167.935-.099 1.12.024l.83-1.249c-.707-.47-1.502-.437-2.32-.228-.805.205-1.806.626-3.037 1.141l.58 1.384ZM12.75 8.848c0-.662.001-1.098.037-1.434.035-.317.095-.474.172-.59l-1.248-.83c-.258.387-.366.805-.415 1.258-.047.436-.046.967-.046 1.596h1.5Zm1.416-4.382c-.58.243-1.07.447-1.454.659-.4.22-.743.48-1.001.868l1.248.831c.077-.115.199-.232.478-.386.296-.163.698-.333 1.308-.588l-.579-1.384Z" fill="currentColor" /><path d="M7 11V2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><circle cx={4.5} cy={10.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path d="M10 5c-1.243 0-3-.929-3-3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M8.512 3.698A2.443 2.443 0 0 0 10 4.25a.75.75 0 0 1 0 1.5c-.72 0-1.551-.24-2.25-.745V11c0 .16-.05.307-.135.429A3.252 3.252 0 0 1 1.25 10.5a3.25 3.25 0 0 1 5-2.74V2h1.5c0 .798.328 1.34.762 1.698ZM6.25 10.5a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Zm13.323-6.559c-.672.171-1.552.537-2.828 1.071l-2 .838c-.61.255-1.012.424-1.308.588-.28.154-.4.27-.478.386-.077.116-.137.272-.171.59-.037.336-.038.772-.038 1.434v2.044l8.5-3.4c-.002-1.108-.015-1.907-.103-2.503-.1-.672-.27-.901-.454-1.024-.185-.123-.463-.191-1.12-.024Zm3.177 4.042v-.035c0-1.306 0-2.37-.12-3.179-.123-.836-.4-1.582-1.106-2.053-.708-.47-1.503-.437-2.322-.228-.792.201-1.774.612-2.978 1.116l-2.094.877c-.565.236-1.043.436-1.418.644-.4.22-.743.48-1.001.868-.258.388-.366.805-.415 1.259-.046.426-.046.944-.046 1.556V16.761A3.25 3.25 0 1 0 12.712 19h.038v-6.493l8.5-3.4v5.653a3.25 3.25 0 1 0 1.482 2.393h.018V7.983ZM19.5 15.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Zm-10 2a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12.75 12.508 8.5-3.4v5.653a3.25 3.25 0 1 0 1.5 2.74V7.945c0-1.143 0-2.101-.08-2.865a7.747 7.747 0 0 0-.04-.315c-.078-.522-.214-1.008-.479-1.415a2.18 2.18 0 0 0-.62-.63l-.007-.005c-.708-.47-1.503-.437-2.322-.228-.792.202-1.774.613-2.978 1.117l-2.094.876c-.565.236-1.043.437-1.418.644-.4.22-.743.48-1.001.868-.258.388-.366.805-.415 1.259-.046.426-.046.945-.046 1.557v7.952a3.25 3.25 0 1 0 1.5 2.74v-6.993ZM7.75 2a.75.75 0 0 0-1.5 0v5.76a3.25 3.25 0 1 0 1.5 2.74V5.005c.699.504 1.53.745 2.25.745a.75.75 0 0 0 0-1.5 2.443 2.443 0 0 1-1.488-.552c-.434-.357-.762-.9-.762-1.698Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12.75 12.508 8.5-3.4v5.653a3.25 3.25 0 1 0 1.5 2.74V7.945c0-1.143 0-2.101-.08-2.865a7.747 7.747 0 0 0-.04-.315c-.078-.522-.214-1.008-.479-1.415a2.18 2.18 0 0 0-.62-.63l-.007-.005c-.708-.47-1.503-.437-2.322-.228-.792.202-1.774.613-2.978 1.117l-2.094.876c-.565.236-1.043.437-1.418.644-.4.22-.743.48-1.001.868-.258.388-.366.805-.415 1.259-.046.426-.046.945-.046 1.557v7.952a3.25 3.25 0 1 0 1.5 2.74v-6.993Z" fill="currentColor" /><path opacity={0.5} d="M7.75 2a.75.75 0 0 0-1.5 0v5.76a3.25 3.25 0 1 0 1.5 2.74V5.005c.699.504 1.53.745 2.25.745a.75.75 0 0 0 0-1.5 2.443 2.443 0 0 1-1.488-.552c-.434-.357-.762-.9-.762-1.698Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MusicNotes