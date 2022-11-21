import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const ChatSquareArrow = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12.978 21.456.643.385-.643-.385Zm.488-.814-.643-.386.643.386Zm-2.932 0-.643.385.643-.385Zm.488.814.643-.386-.643.386ZM12 4.222l-.527-.533a.75.75 0 0 0 0 1.067L12 4.222Zm8.25 7.556a.75.75 0 0 0 1.5 0h-1.5Zm-18 0a.75.75 0 0 0 1.5 0h-1.5ZM4.034 16.3a.75.75 0 1 0-1.383.58l1.383-.58Zm4.177 3.026-.013.75.013-.75Zm-2.433-.33-.284.693.284-.694Zm14.88-2.406.691.29-.692-.29Zm-4.869 2.736-.012-.75.012.75Zm2.433-.33.284.693-.284-.694Zm.63-14.119-.39.642.39-.642Zm1.485 1.467.637-.395-.637.395ZM5.149 4.877l-.389-.642.389.642ZM3.663 6.344l-.637-.395.637.395Zm6 13.176.373-.65-.373.65Zm5.114-16.986a.75.75 0 1 0-1.054-1.068l1.054 1.068Zm-1.054 4.444a.75.75 0 1 0 1.054-1.067l-1.054 1.067Zm-4.42-2.005a.75.75 0 1 0-.005-1.5l.004 1.5Zm12.433 9.492a.75.75 0 0 0-1.499-.04l1.5.04Zm-8.115 7.376.488-.814-1.286-.77-.488.813 1.286.771Zm-3.73-.814.488.814 1.286-.77-.488-.815-1.286.771Zm2.444.043a.378.378 0 0 1-.335.18.378.378 0 0 1-.335-.18l-1.286.771c.726 1.212 2.516 1.212 3.242 0l-1.286-.77Zm-4.112-2.494c-1.13-.02-1.71-.09-2.161-.275l-.568 1.388c.738.302 1.574.367 2.704.387l.025-1.5ZM2.651 16.88a5.222 5.222 0 0 0 2.843 2.81l.568-1.39a3.722 3.722 0 0 1-2.028-2l-1.383.58Zm13.151 3.196c1.13-.02 1.966-.085 2.704-.387l-.568-1.388c-.45.184-1.031.256-2.161.275l.025 1.5Zm4.164-3.776a3.722 3.722 0 0 1-2.028 2l.568 1.39a5.222 5.222 0 0 0 2.843-2.81l-1.383-.58ZM12 4.972c1.48 0 2.895 0 4.074.08.588.04 1.1.099 1.518.182.43.085.71.187.87.285l.778-1.284c-.38-.23-.859-.373-1.355-.472-.507-.101-1.089-.165-1.71-.207-1.24-.084-2.71-.084-4.175-.084v1.5Zm9.75 6.806c0-1.44 0-2.574-.086-3.48-.089-.916-.273-1.676-.69-2.349l-1.274.79c.245.397.393.898.47 1.704.08.816.08 1.865.08 3.335h1.5Zm-3.287-6.26c.505.306.928.725 1.237 1.222l1.274-.791a5.223 5.223 0 0 0-1.734-1.714l-.777 1.284ZM3.75 11.779c0-1.47 0-2.519.08-3.335.077-.806.225-1.307.47-1.703l-1.274-.791c-.418.673-.601 1.433-.69 2.35-.087.905-.086 2.039-.086 3.479h1.5Zm1.01-7.543A5.223 5.223 0 0 0 3.026 5.95l1.274.79a3.723 3.723 0 0 1 1.237-1.22L4.76 4.235Zm6.417 16.021c-.181-.303-.344-.576-.503-.792a2.07 2.07 0 0 0-.638-.594l-.747 1.3c.03.018.081.054.178.185.106.144.227.344.424.672l1.286-.77Zm-2.98-.18c.397.006.644.011.831.032.174.019.232.046.26.062l.748-1.3a2.107 2.107 0 0 0-.845-.253c-.271-.03-.599-.035-.968-.041l-.025 1.5Zm5.912.951a9.32 9.32 0 0 1 .424-.672c.097-.131.147-.167.178-.185l-.747-1.3a2.07 2.07 0 0 0-.638.594c-.159.216-.322.489-.503.792l1.286.771Zm1.668-2.451c-.37.006-.697.011-.968.04-.285.032-.57.096-.845.254l.747 1.3c.029-.016.087-.043.26-.062.188-.02.435-.026.831-.032l-.025-1.5Zm-3.25-13.82 2.25-2.222-1.054-1.068-2.25 2.223 1.054 1.067Zm-1.054 0 2.25 2.222 1.054-1.067-2.25-2.222-1.054 1.067ZM9.298 3.473c-2.236.007-3.368.054-4.538.762l.777 1.284c.758-.459 1.46-.539 3.765-.546l-.004-1.5Zm10.939 10.951c-.026.957-.102 1.472-.271 1.876l1.383.58c.284-.678.361-1.434.387-2.415l-1.499-.04Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="m12.978 21.455.643.386-.643-.386Zm.488-.814-.643-.385.643.385Zm-2.932 0-.643.386.643-.386Zm.488.814.643-.385-.643.385Zm-7.68-4.866.692-.29-.691.29Zm4.869 2.736-.013.75.013-.75Zm-2.433-.33-.284.694.284-.694Zm14.88-2.406.691.29-.692-.29Zm-4.869 2.736-.012-.75.012.75Zm2.433-.33.284.694-.284-.694ZM5.15 4.877l-.389-.642.389.642ZM3.663 6.344l-.637-.395.637.395Zm6 13.176.373-.65-.373.65Zm-.36-14.547a.75.75 0 1 0-.005-1.5l.004 1.5Zm12.433 9.491a.75.75 0 0 0-1.499-.04l1.5.04Zm-8.115 7.377.488-.814-1.286-.771-.488.814 1.286.77Zm-3.73-.814.488.814 1.286-.771-.488-.814-1.286.77Zm2.444.043a.378.378 0 0 1-.335.18.378.378 0 0 1-.335-.18l-1.286.77c.726 1.212 2.516 1.212 3.242 0l-1.286-.77ZM3.75 12.666v-.889h-1.5v.89h1.5Zm-1.5 0c0 1.025 0 1.832.045 2.484.045.658.14 1.213.356 1.73l1.383-.58c-.126-.302-.203-.673-.243-1.254-.04-.588-.041-1.334-.041-2.38h-1.5Zm5.973 5.91c-1.13-.02-1.71-.091-2.161-.276l-.568 1.389c.738.302 1.574.367 2.704.386l.025-1.5Zm-5.572-1.697a5.223 5.223 0 0 0 2.843 2.81l.568-1.389a3.723 3.723 0 0 1-2.028-2l-1.383.58Zm13.151 3.196c1.13-.019 1.966-.084 2.704-.386l-.568-1.389c-.45.185-1.031.256-2.161.276l.025 1.5Zm4.164-3.776a3.722 3.722 0 0 1-2.028 2.002l.568 1.388a5.223 5.223 0 0 0 2.843-2.81l-1.383-.58ZM3.75 11.777c0-1.47 0-2.518.08-3.335.077-.805.225-1.307.47-1.703l-1.274-.79c-.418.672-.601 1.433-.69 2.35-.087.905-.086 2.038-.086 3.478h1.5Zm1.01-7.542a5.223 5.223 0 0 0-1.734 1.714l1.274.79a3.723 3.723 0 0 1 1.237-1.22L4.76 4.234Zm6.417 16.02c-.181-.303-.344-.576-.503-.791a2.072 2.072 0 0 0-.638-.595l-.747 1.3c.03.018.081.054.178.185.106.144.227.345.424.673l1.286-.771Zm-2.98-.18c.397.007.644.012.831.032.174.02.232.046.26.063l.748-1.3a2.106 2.106 0 0 0-.845-.254c-.271-.03-.599-.034-.968-.04l-.025 1.5Zm5.912.952a9.32 9.32 0 0 1 .424-.673c.097-.13.147-.167.178-.184l-.747-1.3c-.273.156-.47.365-.638.594-.159.215-.322.488-.503.792l1.286.77Zm1.668-2.451c-.37.006-.697.01-.968.04-.285.032-.57.095-.845.253l.747 1.3c.029-.016.087-.043.26-.062.188-.02.435-.025.831-.032l-.025-1.5ZM9.297 3.473c-2.235.007-3.367.054-4.537.762l.777 1.283c.758-.458 1.46-.538 3.765-.545l-.004-1.5Zm10.94 10.951c-.026.956-.102 1.472-.271 1.875l1.383.58c.284-.677.361-1.434.387-2.415l-1.499-.04Z" fill="currentColor" /><path d="m12 4.222-.527-.533a.75.75 0 0 0 0 1.067L12 4.222Zm8.25 7.556a.75.75 0 0 0 1.5 0h-1.5Zm-1.399-6.9-.388.64.388-.64Zm1.486 1.466.637-.395-.637.395Zm-5.56-3.81a.75.75 0 1 0-1.054-1.068l1.054 1.068Zm-1.054 4.444a.75.75 0 1 0 1.054-1.067l-1.054 1.067ZM12 4.972c1.48 0 2.895 0 4.074.08.588.04 1.1.099 1.518.182.43.085.71.187.87.285l.778-1.284c-.38-.23-.859-.373-1.355-.472-.507-.101-1.089-.165-1.71-.207-1.24-.084-2.71-.084-4.175-.084v1.5Zm9.75 6.806c0-1.44 0-2.574-.086-3.48-.089-.916-.273-1.676-.69-2.349l-1.274.79c.245.397.393.898.47 1.704.08.816.08 1.865.08 3.335h1.5Zm-3.287-6.26c.505.306.928.725 1.237 1.222l1.274-.791a5.223 5.223 0 0 0-1.734-1.714l-.777 1.284Zm-5.936-.762 2.25-2.222-1.054-1.068-2.25 2.223 1.054 1.067Zm-1.054 0 2.25 2.222 1.054-1.067-2.25-2.222-1.054 1.067Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m12.978 21.456.643.385-.643-.385Zm.488-.814-.643-.386.643.386Zm-2.932 0-.643.385.643-.385Zm.488.814.643-.386-.643.386ZM12 4.222l-.527-.533a.75.75 0 0 0 0 1.067L12 4.222Zm8.25 7.556a.75.75 0 0 0 1.5 0h-1.5ZM3.343 16.59l.691-.29-.691.29Zm4.868 2.736-.013.75.013-.75Zm-2.433-.33-.284.693.284-.694Zm14.88-2.406.691.29-.692-.29Zm-4.869 2.736-.012-.75.012.75Zm2.433-.33.284.693-.284-.694Zm.63-14.119-.39.642.39-.642Zm1.485 1.467.637-.395-.637.395ZM5.149 4.877l-.389-.642.389.642ZM3.663 6.344l-.637-.395.637.395Zm6 13.176.373-.65-.373.65Zm5.114-16.986a.75.75 0 1 0-1.054-1.068l1.054 1.068Zm-1.054 4.444a.75.75 0 1 0 1.054-1.067l-1.054 1.067Zm-4.42-2.005a.75.75 0 1 0-.005-1.5l.004 1.5Zm12.433 9.492a.75.75 0 0 0-1.499-.04l1.5.04Zm-8.115 7.376.488-.814-1.286-.77-.488.813 1.286.771Zm-3.73-.814.488.814 1.286-.77-.488-.815-1.286.771Zm2.444.043a.378.378 0 0 1-.335.18.378.378 0 0 1-.335-.18l-1.286.771c.726 1.212 2.516 1.212 3.242 0l-1.286-.77ZM3.75 12.667v-.89h-1.5v.89h1.5Zm-1.5 0c0 1.025 0 1.832.045 2.483.045.659.14 1.214.356 1.73l1.383-.58c-.126-.301-.203-.672-.243-1.253-.04-.588-.041-1.335-.041-2.38h-1.5Zm5.973 5.909c-1.13-.02-1.71-.09-2.161-.275l-.568 1.388c.738.302 1.574.367 2.704.387l.025-1.5ZM2.651 16.88a5.222 5.222 0 0 0 2.843 2.81l.568-1.39a3.722 3.722 0 0 1-2.028-2l-1.383.58Zm13.151 3.196c1.13-.02 1.966-.085 2.704-.387l-.568-1.388c-.45.184-1.031.256-2.161.275l.025 1.5Zm4.164-3.776a3.722 3.722 0 0 1-2.028 2l.568 1.39a5.222 5.222 0 0 0 2.843-2.81l-1.383-.58ZM12 4.972c1.48 0 2.895 0 4.074.08.588.04 1.1.099 1.518.182.43.085.71.187.87.285l.778-1.284c-.38-.23-.859-.373-1.355-.472-.507-.101-1.089-.165-1.71-.207-1.24-.084-2.71-.084-4.175-.084v1.5Zm9.75 6.806c0-1.44 0-2.574-.086-3.48-.089-.916-.273-1.676-.69-2.349l-1.274.79c.245.397.393.898.47 1.704.08.816.08 1.865.08 3.335h1.5Zm-3.287-6.26c.505.306.928.725 1.237 1.222l1.274-.791a5.223 5.223 0 0 0-1.734-1.714l-.777 1.284ZM3.75 11.779c0-1.47 0-2.519.08-3.335.077-.806.225-1.307.47-1.703l-1.274-.791c-.418.673-.601 1.433-.69 2.35-.087.905-.086 2.039-.086 3.479h1.5Zm1.01-7.543A5.223 5.223 0 0 0 3.026 5.95l1.274.79a3.723 3.723 0 0 1 1.237-1.22L4.76 4.235Zm6.417 16.021c-.181-.303-.344-.576-.503-.792a2.07 2.07 0 0 0-.638-.594l-.747 1.3c.03.018.081.054.178.185.106.144.227.344.424.672l1.286-.77Zm-2.98-.18c.397.006.644.011.831.032.174.019.232.046.26.062l.748-1.3a2.107 2.107 0 0 0-.845-.253c-.271-.03-.599-.035-.968-.041l-.025 1.5Zm5.912.951a9.32 9.32 0 0 1 .424-.672c.097-.131.147-.167.178-.185l-.747-1.3a2.07 2.07 0 0 0-.638.594c-.159.216-.322.489-.503.792l1.286.771Zm1.668-2.451c-.37.006-.697.011-.968.04-.285.032-.57.096-.845.254l.747 1.3c.029-.016.087-.043.26-.062.188-.02.435-.026.831-.032l-.025-1.5Zm-3.25-13.82 2.25-2.222-1.054-1.068-2.25 2.223 1.054 1.067Zm-1.054 0 2.25 2.222 1.054-1.067-2.25-2.222-1.054 1.067ZM9.298 3.473c-2.236.007-3.368.054-4.538.762l.777 1.284c.758-.459 1.46-.539 3.765-.546l-.004-1.5Zm10.939 10.951c-.026.957-.102 1.472-.271 1.876l1.383.58c.284-.678.361-1.434.387-2.415l-1.499-.04Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.784 1.473a.75.75 0 0 1-.007 1.06l-.956.945c.832.009 1.632.029 2.354.078.621.042 1.203.106 1.71.207.496.099.975.243 1.355.472a5.223 5.223 0 0 1 1.734 1.714c.418.673.601 1.433.69 2.35.086.897.086 2.018.086 3.44v.039a.75.75 0 0 1-1.5 0c0-1.47 0-2.519-.08-3.335-.077-.806-.225-1.307-.47-1.703a3.723 3.723 0 0 0-1.237-1.221c-.161-.098-.442-.2-.87-.285-.42-.083-.93-.142-1.519-.182a40.109 40.109 0 0 0-2.241-.074l.944.933a.75.75 0 1 1-1.054 1.067l-2.25-2.222a.75.75 0 0 1 0-1.067l2.25-2.223a.75.75 0 0 1 1.06.007ZM10.05 4.221a.75.75 0 0 1-.748.752c-2.305.007-3.007.087-3.765.546A3.723 3.723 0 0 0 4.3 6.739c-.245.397-.393.898-.47 1.704-.08.816-.08 1.865-.08 3.335v.889c0 1.046 0 1.792.041 2.38.04.58.117.952.243 1.253a3.722 3.722 0 0 0 2.028 2c.45.185 1.031.257 2.161.276h.031c.356.006.673.012.937.04.285.032.57.096.845.254.273.156.47.366.638.594.154.21.312.473.487.766l.504.84c.068.113.19.18.335.18a.378.378 0 0 0 .335-.18l.503-.84c.176-.293.334-.557.488-.766a2.07 2.07 0 0 1 .638-.594c.275-.159.56-.222.845-.253.264-.03.58-.035.937-.04l.03-.001c1.13-.02 1.711-.09 2.162-.275a3.722 3.722 0 0 0 2.028-2.001c.169-.404.245-.92.271-1.876a.75.75 0 0 1 1.5.04c-.027.982-.104 1.738-.388 2.416a5.222 5.222 0 0 1-2.843 2.81c-.738.301-1.574.366-2.704.386-.396.006-.643.011-.83.032-.174.019-.232.046-.261.062-.03.018-.081.054-.178.185a9.32 9.32 0 0 0-.424.672l-.488.814c-.726 1.212-2.516 1.212-3.242 0l-.488-.814a9.325 9.325 0 0 0-.424-.672c-.097-.131-.147-.167-.178-.185-.029-.016-.087-.043-.26-.062-.188-.02-.435-.026-.831-.032-1.13-.02-1.966-.085-2.704-.387a5.222 5.222 0 0 1-2.843-2.81c-.216-.515-.31-1.07-.356-1.729-.045-.646-.045-1.444-.045-2.455v-.957c0-1.421 0-2.542.086-3.44.089-.916.272-1.676.69-2.349A5.223 5.223 0 0 1 4.76 4.235c1.17-.708 2.302-.755 4.538-.762a.75.75 0 0 1 .752.748Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m11.985 21.449.489-.824c.378-.64.568-.96.872-1.136.304-.177.687-.184 1.453-.197 1.13-.02 1.84-.089 2.434-.335a4.502 4.502 0 0 0 2.438-2.435c.161-.39.247-.83.292-1.406.027-.354.041-.53-.053-.674-.095-.143-.276-.205-.638-.327C17.864 13.64 14.752 12.481 13 11c-1.98-1.674-3.754-5.054-4.418-6.414-.142-.29-.213-.435-.336-.511-.123-.076-.28-.074-.592-.07-1.808.02-2.637.126-3.504.657a4.502 4.502 0 0 0-1.486 1.486C2 7.23 2 8.703 2 11.65v.9c0 2.096 0 3.145.343 3.972a4.502 4.502 0 0 0 2.437 2.435c.595.246 1.304.316 2.434.335.766.013 1.15.02 1.453.197.305.177.494.496.873 1.136l.488.824c.435.735 1.522.735 1.957 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.702 1.217a.696.696 0 0 1-.007 1.035l-1.002.921a47.2 47.2 0 0 1 2.467.076c.65.041 1.26.104 1.79.202.52.096 1.022.237 1.42.46.74.418 1.363.99 1.817 1.672.438.656.63 1.398.723 2.292.09.875.09 1.969.09 3.355v.038c0 .404-.352.732-.786.732-.434 0-.785-.328-.785-.732 0-1.433-.001-2.456-.084-3.253-.08-.785-.236-1.274-.493-1.66a3.78 3.78 0 0 0-1.296-1.191c-.168-.096-.462-.195-.912-.278a13.727 13.727 0 0 0-1.59-.177 45.123 45.123 0 0 0-2.348-.072l.989.91a.696.696 0 0 1 .007 1.034.828.828 0 0 1-1.111.006L10.234 4.42A.707.707 0 0 1 10 3.899c0-.196.084-.383.234-.52L12.59 1.21a.828.828 0 0 1 1.11.006Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="m12.984 22.495.537-.907c.416-.703.625-1.055.96-1.25.334-.194.755-.201 1.598-.216 1.243-.021 2.023-.097 2.678-.368a4.952 4.952 0 0 0 2.68-2.68c.186-.446.28-.951.328-1.623.025-.355.038-.533-.057-.675-.095-.143-.275-.203-.636-.324-1.511-.507-5.014-1.796-6.972-3.451-2.207-1.867-4.182-5.66-4.889-7.115-.14-.289-.21-.433-.334-.51-.123-.076-.28-.074-.592-.071-2.035.021-2.956.134-3.92.724A4.952 4.952 0 0 0 2.73 5.663C2 6.853 2 8.474 2 11.715v.99c0 2.307 0 3.46.377 4.37a4.952 4.952 0 0 0 2.681 2.679c.654.27 1.434.347 2.678.368.842.015 1.264.022 1.598.216.335.195.543.547.96 1.25l.537.907c.478.808 1.674.808 2.153 0Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M14.872.24a.766.766 0 0 1-.008 1.137l-1.102 1.014c.959.009 1.881.03 2.714.083.715.045 1.386.114 1.97.222.572.106 1.123.26 1.56.507a5.837 5.837 0 0 1 2 1.839c.48.721.693 1.537.794 2.52.1.963.1 2.166.1 3.691v.042c0 .445-.387.805-.864.805-.478 0-.865-.36-.865-.805 0-1.576 0-2.702-.091-3.578-.09-.864-.26-1.402-.543-1.827a4.16 4.16 0 0 0-1.425-1.31c-.186-.105-.509-.214-1.004-.305a15.098 15.098 0 0 0-1.75-.195c-.782-.05-1.655-.07-2.582-.08l1.088 1c.34.313.343.822.008 1.139a.91.91 0 0 1-1.222.007L11.057 3.76a.778.778 0 0 1-.257-.572c0-.215.092-.421.257-.573L13.65.232a.91.91 0 0 1 1.222.007Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default ChatSquareArrow