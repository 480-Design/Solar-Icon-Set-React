import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const PhoneCalling = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M13.5 2s2.334.212 5.303 3.182c2.97 2.97 3.182 5.303 3.182 5.303M14.207 5.536s.99.282 2.475 1.767c1.485 1.485 1.768 2.475 1.768 2.475" /><path fill="currentColor" d="m15.1 15.027.545.517-.544-.517Zm.456-.48-.544-.516.544.517Zm2.417-.335-.374.65.374-.65Zm1.91 1.1-.374.65.374-.65Zm.539 3.446.543.517-.543-.517Zm-1.42 1.496-.545-.517.544.517Zm-1.326.71.074.745-.074-.746Zm-9.86-4.489.543-.516-.544.516Zm-4.064-9.55a.75.75 0 1 0-1.498.081l1.498-.08Zm5.439 1.88.544.517-.544-.517Zm.287-.302.543.517-.543-.517Zm.156-2.81.613-.433-.613.433ZM8.374 3.91l-.613.433.612-.433Zm-3.656-.818a.75.75 0 0 0 1.087 1.033L4.718 3.092Zm6.345 9.964.544-.517-.544.517Zm-.399 6.756a.75.75 0 1 0 .798-1.27l-.798 1.27Zm4.449.246a.75.75 0 0 0-.307 1.469l.307-1.469Zm.532-4.514.455-.48-1.088-1.033-.455.48 1.088 1.033Zm1.954-.682 1.91 1.1.748-1.3-1.91-1.1-.748 1.3Zm2.279 3.38-1.42 1.495 1.087 1.034 1.42-1.496-1.087-1.033ZM8.359 15.959c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986l1.087-1.033Zm1.376-6.637.286-.302-1.087-1.033-.287.302 1.088 1.033Zm.512-4.062L8.986 3.477l-1.225.866 1.26 1.783 1.226-.866ZM9.19 8.805c-.544-.516-.545-.516-.545-.515l-.002.002-.003.003a.674.674 0 0 0-.05.058 1.592 1.592 0 0 0-.23.427c-.098.275-.15.639-.084 1.093.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884-.032-.22 0-.335.013-.372l.008-.019a.253.253 0 0 1-.028.037.647.647 0 0 1-.018.02l-.545-.516Zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377.451.073.816.014 1.092-.095a1.52 1.52 0 0 0 .421-.25l.036-.034.014-.014a.383.383 0 0 0 .007-.006l.003-.003.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001.002-.003.006-.005a.811.811 0 0 1 .047-.042c.009-.006.008-.004-.005.001-.02.008-.11.04-.3.009-.402-.066-1.27-.42-2.703-1.929l-1.088 1.033ZM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218l1.225-.866Zm9.471 16.26c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939l-1.088-1.032ZM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86L10.02 9.02Zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613l-.749 1.3Zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47l1.088 1.032Zm-4.638 3.478c-.983-.618-2.03-1.454-3.103-2.583l-1.087 1.033c1.154 1.215 2.297 2.132 3.392 2.82l.798-1.27Zm6.14 1.675a8.269 8.269 0 0 1-2.489-.159l-.307 1.469a9.768 9.768 0 0 0 2.944.182l-.147-1.492Z" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M13.5 2s2.334.212 5.303 3.182c2.97 2.97 3.182 5.303 3.182 5.303M14.207 5.536s.99.282 2.475 1.767c1.485 1.485 1.768 2.475 1.768 2.475" /><path fill="currentColor" d="m15.1 15.027-.543-.516.544.516Zm.456-.48.544.517-.544-.516Zm2.417-.335-.374.65.374-.65Zm1.91 1.1-.374.65.374-.65Zm.539 3.446.543.517-.543-.517Zm-1.42 1.496-.545-.517.544.517Zm-1.326.71.074.745-.074-.746Zm-9.86-4.489.543-.516-.544.516Zm-4.813-9.51-.749.041.749-.04Zm6.475 1.538.543.517-.543-.517Zm.156-2.81.613-.433-.613.433ZM8.374 3.91l-.613.433.612-.433ZM5.26 3.609l.544.516-.544-.516ZM3.691 5.26l-.543-.516.544.516Zm7.372 7.795.544-.517-.544.517Zm4.582 2.488.455-.48-1.088-1.033-.455.48 1.088 1.033Zm1.954-.682 1.91 1.1.748-1.3-1.91-1.1-.748 1.3Zm2.279 3.38-1.42 1.495 1.087 1.034 1.42-1.496-1.087-1.033Zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717l-.147-1.492Zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986l1.087-1.033Zm1.376-6.637.286-.302-1.087-1.033-.287.302 1.088 1.033Zm.512-4.062L8.986 3.477l-1.225.866 1.26 1.783 1.226-.866Zm-5.53-2.168L3.149 4.745l1.088 1.033 1.57-1.653-1.088-1.033Zm4.474 5.713c-.544-.516-.545-.516-.545-.515l-.002.002-.003.003a.822.822 0 0 0-.05.058 1.592 1.592 0 0 0-.23.427c-.098.275-.15.639-.084 1.093.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884-.032-.22 0-.335.013-.372l.008-.019a.249.249 0 0 1-.028.037.705.705 0 0 1-.018.02s-.002 0-.545-.516Zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377.451.073.816.014 1.092-.095a1.52 1.52 0 0 0 .421-.25.922.922 0 0 0 .036-.034l.014-.014a.369.369 0 0 0 .007-.006l.003-.003.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001.002-.003a.241.241 0 0 0 .005-.005l.01-.01a.446.446 0 0 1 .037-.032c.01-.006.009-.004-.004.001-.02.008-.11.04-.3.009-.402-.066-1.27-.42-2.703-1.929l-1.088 1.033ZM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218l1.225-.866ZM3.752 6.926c-.022-.4.152-.8.484-1.148L3.148 4.745c-.536.564-.943 1.347-.894 2.261l1.498-.08Zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939l-1.088-1.032ZM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86L10.02 9.02Zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613l-.749 1.3Zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47l1.088 1.032Z" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M13.5 2s2.334.212 5.303 3.182c2.97 2.97 3.182 5.303 3.182 5.303M14.207 5.536s.99.282 2.475 1.767c1.485 1.485 1.768 2.475 1.768 2.475" /><path fill="currentColor" d="m15.1 15.027-.543-.516.544.516Zm.456-.48.544.517-.544-.516Zm2.417-.335-.374.65.374-.65Zm1.91 1.1-.374.65.374-.65Zm.539 3.446.543.517-.543-.517Zm-1.42 1.496-.545-.517.544.517Zm-1.326.71.074.745-.074-.746Zm-9.86-4.489.543-.516-.544.516Zm-4.813-9.51-.749.041.749-.04Zm6.475 1.538.543.517-.543-.517Zm.156-2.81.613-.433-.613.433ZM8.374 3.91l-.613.433.612-.433ZM5.26 3.609l.544.516-.544-.516ZM3.691 5.26l-.543-.516.544.516Zm7.372 7.795.544-.517-.544.517Zm4.582 2.488.455-.48-1.088-1.033-.455.48 1.088 1.033Zm1.954-.682 1.91 1.1.748-1.3-1.91-1.1-.748 1.3Zm2.279 3.38-1.42 1.495 1.087 1.034 1.42-1.496-1.087-1.033Zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717l-.147-1.492Zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986l1.087-1.033Zm1.376-6.637.286-.302-1.087-1.033-.287.302 1.088 1.033Zm.512-4.062L8.986 3.477l-1.225.866 1.26 1.783 1.226-.866Zm-5.53-2.168L3.149 4.745l1.088 1.033 1.57-1.653-1.088-1.033Zm4.474 5.713c-.544-.516-.545-.516-.545-.515l-.002.002-.003.003a.822.822 0 0 0-.05.058 1.592 1.592 0 0 0-.23.427c-.098.275-.15.639-.084 1.093.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884-.032-.22 0-.335.013-.372l.008-.019a.249.249 0 0 1-.028.037.705.705 0 0 1-.018.02s-.002 0-.545-.516Zm1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377.451.073.816.014 1.092-.095a1.52 1.52 0 0 0 .421-.25.922.922 0 0 0 .036-.034l.014-.014a.369.369 0 0 0 .007-.006l.003-.003.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001.002-.003a.241.241 0 0 0 .005-.005l.01-.01a.446.446 0 0 1 .037-.032c.01-.006.009-.004-.004.001-.02.008-.11.04-.3.009-.402-.066-1.27-.42-2.703-1.929l-1.088 1.033ZM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218l1.225-.866ZM3.752 6.926c-.022-.4.152-.8.484-1.148L3.148 4.745c-.536.564-.943 1.347-.894 2.261l1.498-.08Zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939l-1.088-1.032ZM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86L10.02 9.02Zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613l-.749 1.3Zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47l1.088 1.032Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M4.718 3.092c1.226-1.291 3.254-1.05 4.268.384l1.26 1.784c.811 1.147.743 2.74-.225 3.76l-.245.257a.25.25 0 0 0-.002.006c-.013.036-.045.152-.013.372.067.455.418 1.381 1.846 2.884 1.432 1.508 2.3 1.863 2.703 1.929a.608.608 0 0 0 .294-.007l.408-.43c.874-.92 2.236-1.101 3.335-.469l1.91 1.1c1.633.94 2.013 3.239.708 4.613l-1.42 1.495c-.443.467-1.048.866-1.795.94-1.824.18-6.049-.055-10.478-4.719-4.134-4.351-4.919-8.136-5.018-9.985l.666-.036-.666.036c-.049-.914.358-1.697.894-2.262l1.57-1.652Zm3.043 1.25c-.512-.724-1.433-.768-1.956-.217l-1.57 1.652c-.33.35-.505.75-.483 1.149.08 1.51.731 4.952 4.607 9.032 4.064 4.28 7.809 4.4 9.244 4.258.283-.027.575-.185.854-.479l1.42-1.495c.614-.646.453-1.808-.368-2.28l-1.91-1.1c-.513-.295-1.114-.204-1.499.202l-.456.48-.527-.501c.527.5.527.501.526.502l-.001.001-.003.004-.007.006-.014.014a1.007 1.007 0 0 1-.136.112c-.08.056-.186.119-.321.172-.276.109-.64.167-1.091.094-.878-.142-2.028-.773-3.55-2.376-1.528-1.608-2.113-2.807-2.243-3.7-.067-.454-.014-.817.084-1.092a1.591 1.591 0 0 1 .23-.427l.03-.037.014-.015.006-.007.003-.003.002-.001s0-.002.533.503l-.532-.505.287-.302c.445-.469.51-1.263.088-1.86L7.76 4.342Z" clipRule="evenodd" /><path fill="currentColor" d="M13.26 1.88a.751.751 0 0 1 .861-.62c.025.005.107.02.15.03.085.018.204.048.352.09.297.087.712.23 1.21.458.996.457 2.321 1.256 3.697 2.631 1.376 1.376 2.175 2.702 2.632 3.698.228.498.37.912.457 1.21a5.727 5.727 0 0 1 .113.454l.005.031a.765.765 0 0 1-.617.878.75.75 0 0 1-.86-.617 2.82 2.82 0 0 0-.081-.327 7.395 7.395 0 0 0-.38-1.004c-.39-.85-1.092-2.024-2.33-3.262-1.237-1.238-2.412-1.939-3.262-2.329a7.394 7.394 0 0 0-1.003-.38 5.749 5.749 0 0 0-.318-.08.759.759 0 0 1-.627-.861Z" /><path fill="currentColor" fillRule="evenodd" d="M13.486 5.33a.75.75 0 0 1 .927-.516l-.206.721.207-.72h.002l.004.001.007.002.02.007a2.995 2.995 0 0 1 .233.089c.146.062.345.158.59.303.49.29 1.157.77 1.942 1.556.785.785 1.267 1.453 1.556 1.942.145.245.241.444.304.59a2.968 2.968 0 0 1 .089.233l.006.02.002.008.001.003v.002l-.72.207.721-.206a.75.75 0 0 1-1.44.422l-.003-.01a3.67 3.67 0 0 0-.25-.504c-.224-.377-.626-.947-1.326-1.647-.7-.7-1.27-1.102-1.646-1.325a3.674 3.674 0 0 0-.504-.25l-.01-.004a.75.75 0 0 1-.506-.925Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m15.556 14.548-.455.48s-1.083 1.139-4.038-1.972c-2.955-3.111-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705.09 1.68.808 5.293 4.812 9.51 4.247 4.47 8.232 4.648 9.861 4.487.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336ZM13.26 1.88a.751.751 0 0 1 .861-.62c.025.005.107.02.15.03.085.018.204.048.352.09.297.087.712.23 1.21.458.996.457 2.321 1.256 3.697 2.631 1.376 1.376 2.175 2.702 2.632 3.698.228.498.37.912.457 1.21a5.727 5.727 0 0 1 .113.454l.005.031a.765.765 0 0 1-.617.878.75.75 0 0 1-.86-.617 2.82 2.82 0 0 0-.081-.327 7.395 7.395 0 0 0-.38-1.004c-.39-.85-1.092-2.024-2.33-3.262-1.237-1.238-2.412-1.939-3.262-2.329a7.394 7.394 0 0 0-1.003-.38 5.749 5.749 0 0 0-.318-.08.759.759 0 0 1-.627-.861Z" /><path fill="currentColor" fillRule="evenodd" d="M13.486 5.33a.75.75 0 0 1 .927-.516l-.206.721.206-.72h.003l.003.001.008.002.02.006.056.02c.045.016.104.038.177.07.146.062.345.158.59.303.489.29 1.157.77 1.942 1.556.785.785 1.266 1.453 1.556 1.942.145.245.241.444.303.59a2.969 2.969 0 0 1 .09.233l.005.02.003.008v.003l.001.001s0 .002-.72.208l.72-.206a.75.75 0 0 1-1.439.422l-.003-.01a3.67 3.67 0 0 0-.25-.504c-.224-.377-.627-.947-1.327-1.647-.7-.7-1.269-1.102-1.646-1.325a3.662 3.662 0 0 0-.504-.25l-.01-.004a.75.75 0 0 1-.505-.925Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m15.556 14.548-.455.48s-1.083 1.139-4.038-1.972c-2.955-3.111-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705.09 1.68.808 5.293 4.812 9.51 4.247 4.47 8.232 4.648 9.861 4.487.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336Z" opacity={0.5} /><path fill="currentColor" d="M13.26 1.88a.751.751 0 0 1 .861-.62c.025.005.107.02.15.03.085.018.204.048.352.09.297.087.712.23 1.21.458.996.457 2.321 1.256 3.697 2.631 1.376 1.376 2.175 2.702 2.632 3.698.228.498.37.912.457 1.21a5.727 5.727 0 0 1 .113.454l.005.031a.765.765 0 0 1-.617.878.75.75 0 0 1-.86-.617 2.82 2.82 0 0 0-.081-.327 7.395 7.395 0 0 0-.38-1.004c-.39-.85-1.092-2.024-2.33-3.262-1.237-1.238-2.412-1.939-3.262-2.329a7.394 7.394 0 0 0-1.003-.38 5.749 5.749 0 0 0-.318-.08.759.759 0 0 1-.627-.861Z" /><path fill="currentColor" fillRule="evenodd" d="M13.486 5.33a.75.75 0 0 1 .927-.516l-.206.721.206-.72h.003l.003.001.008.002.02.006.056.02c.045.016.104.038.177.07.146.062.345.158.59.303.489.29 1.157.77 1.942 1.556.785.785 1.266 1.453 1.556 1.942.145.245.241.444.303.59a2.969 2.969 0 0 1 .09.233l.005.02.003.008v.003l.001.001s0 .002-.72.208l.72-.206a.75.75 0 0 1-1.439.422l-.003-.01a3.67 3.67 0 0 0-.25-.504c-.224-.377-.627-.947-1.327-1.647-.7-.7-1.269-1.102-1.646-1.325a3.662 3.662 0 0 0-.504-.25l-.01-.004a.75.75 0 0 1-.505-.925Z" clipRule="evenodd" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default PhoneCalling