import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Perfume = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 5.422V5c0-1.414 0-2.121.44-2.56C7.878 2 8.585 2 10 2c1.414 0 2.121 0 2.56.44C13 2.878 13 3.585 13 5v2H7V5.5M13 7H7" /><path stroke="currentColor" strokeWidth={1.5} d="M7 5c.552 0 1 .052 1-.5S7.552 4 7 4" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M2.161 16A7.07 7.07 0 0 1 2 14.495C2 10.355 5.582 7 10 7s8 3.356 8 7.495c0 1.915-.766 3.662-2.027 4.987-.45.473-.676.709-1.62 1.114C13.41 21 12.76 21 11.459 21H8.542c-1.302 0-1.952 0-2.896-.404a7.022 7.022 0 0 1-.646-.31" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M2.5 13c1.435.58 3.143 1.73 5.36 1.98 2.49.28 3.995-1.396 6.14-1.685" /><path stroke="currentColor" strokeWidth={1.5} d="M13.5 5h.82a5 5 0 0 1 2.236.528L17.5 6" /><path stroke="currentColor" strokeWidth={1.5} d="M20.5 5.25c1.196.69 1.717 2.025 1.165 2.982-.552.956-1.97 1.172-3.165.482-1.196-.69-1.717-2.026-1.165-2.982.552-.957 1.97-1.173 3.165-.482Z" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 5.422V5c0-1.414 0-2.121.44-2.56C7.878 2 8.585 2 10 2c1.414 0 2.121 0 2.56.44C13 2.878 13 3.585 13 5v2H7V5.5M13 7H7" /><path stroke="currentColor" strokeWidth={1.5} d="M7 5c.552 0 1 .052 1-.5S7.552 4 7 4" opacity={0.5} /><path stroke="currentColor" strokeWidth={1.5} d="M10 7c-4.418 0-8 3.356-8 7.495 0 1.915.766 3.662 2.028 4.987.45.473.675.709 1.618 1.114C6.59 21 7.24 21 8.542 21h2.916c1.302 0 1.952 0 2.896-.404.943-.405 1.168-.641 1.619-1.114C17.233 18.157 18 16.41 18 14.495 18 10.355 14.418 7 10 7Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M2.5 13c1.435.58 3.143 1.73 5.36 1.98 2.996.338 4.564-2.156 7.538-1.662 1.048.174 2.025.474 2.602.794" opacity={0.5} /><path stroke="currentColor" strokeWidth={1.5} d="M13.5 5h.82a5 5 0 0 1 2.236.528L17.5 6" opacity={0.5} /><path stroke="currentColor" strokeWidth={1.5} d="M20.5 5.25c1.196.69 1.717 2.025 1.165 2.982-.552.956-1.97 1.172-3.165.482-1.196-.69-1.717-2.026-1.165-2.982.552-.957 1.97-1.173 3.165-.482Z" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 5.422V5c0-1.414 0-2.121.44-2.56C7.878 2 8.585 2 10 2c1.414 0 2.121 0 2.56.44C13 2.878 13 3.585 13 5v2H7V5.5M13 7H7" /><path stroke="currentColor" strokeWidth={1.5} d="M7 5c.552 0 1 .052 1-.5S7.552 4 7 4M10 7c-4.418 0-8 3.356-8 7.495 0 1.915.766 3.662 2.028 4.987.45.473.675.709 1.618 1.114C6.59 21 7.24 21 8.542 21h2.916c1.302 0 1.952 0 2.896-.404.943-.405 1.168-.641 1.619-1.114C17.233 18.157 18 16.41 18 14.495 18 10.355 14.418 7 10 7Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M2.5 13c1.435.58 3.143 1.73 5.36 1.98 2.996.338 4.564-2.156 7.538-1.662 1.048.174 2.025.474 2.602.794" /><path stroke="currentColor" strokeWidth={1.5} d="M13.5 5h.82a5 5 0 0 1 2.236.528L17.5 6" /><path stroke="currentColor" strokeWidth={1.5} d="M20.5 5.25c1.196.69 1.717 2.025 1.165 2.982-.552.956-1.97 1.172-3.165.482-1.196-.69-1.717-2.026-1.165-2.982.552-.957 1.97-1.173 3.165-.482Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M9.95 1.25h.1c.664 0 1.237 0 1.696.062.492.066.963.215 1.345.597s.531.854.597 1.345c.04.289.054.623.059.996h.573a5.75 5.75 0 0 1 2.571.607l.118.06c.944-1.02 2.614-1.04 3.866-.317 1.412.815 2.273 2.564 1.44 4.007-.834 1.443-2.778 1.571-4.19.756-1.12-.647-1.895-1.882-1.749-3.086l-.156-.078a4.25 4.25 0 0 0-1.9-.449h-.57V7l-.001.044c2.777 1.243 4.768 3.826 4.982 6.9.02.084.024.172.014.26.003.096.005.193.005.291 0 2.121-.85 4.05-2.234 5.504l-.018.018a5.143 5.143 0 0 1-.707.652c-.294.216-.644.402-1.142.616-1.085.465-1.874.465-3.132.465H8.483c-1.258 0-2.047 0-3.132-.465-.498-.214-.848-.4-1.142-.616a5.146 5.146 0 0 1-.707-.652L3.484 20C2.1 18.545 1.25 16.616 1.25 14.495c0-3.315 2.06-6.134 5.001-7.45A.759.759 0 0 1 6.25 7V5.5l.001-.04a.758.758 0 0 1-.001-.038V4.95c0-.665 0-1.238.062-1.697.066-.491.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062Zm7.103 11.68c-.755-2.942-3.59-5.177-7.045-5.18h-.016c-3.26.003-5.968 1.992-6.897 4.688.286.126.576.266.865.407l.12.059c.362.177.727.355 1.11.524.849.376 1.752.694 2.755.807 1.259.142 2.216-.295 3.37-.822l.011-.005c1.134-.518 2.46-1.118 4.195-.83.529.088 1.054.208 1.532.352ZM2.774 13.94c.168.078.344.163.528.253l.121.06c.36.175.75.365 1.16.547.919.407 1.979.789 3.194.926 1.676.188 2.968-.403 4.063-.904l.109-.05c1.142-.52 2.087-.92 3.326-.715.775.13 1.477.326 1.974.529-.023 1.673-.702 3.204-1.82 4.379-.231.242-.356.371-.524.494-.166.122-.401.256-.847.447-.785.337-1.29.344-2.6.344H8.542c-1.31 0-1.815-.007-2.6-.344-.446-.19-.68-.325-.847-.447-.168-.123-.293-.252-.524-.494-1.138-1.196-1.821-2.761-1.821-4.47 0-.187.008-.372.024-.555Zm9.476-7.69h-4.5v-.533c.059-.01.119-.025.179-.043.202-.063.437-.188.608-.435.166-.238.213-.505.213-.739 0-.234-.047-.501-.213-.74a1.135 1.135 0 0 0-.609-.434 1.44 1.44 0 0 0-.104-.027c.043-.206.099-.283.146-.33.057-.056.159-.127.484-.17.347-.047.818-.049 1.546-.049.728 0 1.2.002 1.546.048.325.044.427.115.484.172.057.057.128.159.172.484.046.347.048.818.048 1.546v1.25Zm6.625 1.814c-.98-.565-1.162-1.487-.89-1.957.27-.47 1.16-.773 2.14-.208.98.566 1.162 1.488.89 1.958-.27.47-1.16.773-2.14.207Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M2.4 12.15C3.45 9.16 6.455 7 10 7c3.957 0 7.242 2.691 7.886 6.226-.655-.276-1.505-.505-2.365-.648-1.735-.288-3.06.312-4.195.83l-.011.005c-1.154.527-2.111.964-3.37.822-1.003-.113-1.906-.43-2.754-.806-.384-.17-.749-.348-1.11-.525l-.121-.059a19.044 19.044 0 0 0-1.179-.54L2.4 12.15Z" /><path fill="currentColor" d="M2.053 13.628a7.101 7.101 0 0 0-.053.867c0 1.915.766 3.662 2.028 4.987.45.473.675.709 1.618 1.114C6.59 21 7.24 21 8.542 21h2.916c1.302 0 1.952 0 2.896-.404.943-.405 1.168-.641 1.619-1.114 1.158-1.217 1.898-2.79 2.012-4.52l-.349-.194c-.471-.262-1.354-.543-2.361-.71-1.239-.206-2.184.193-3.326.715l-.11.05c-1.094.5-2.386 1.091-4.062.903-1.215-.137-2.275-.519-3.194-.926-.41-.182-.8-.372-1.16-.548l-.12-.059a17.657 17.657 0 0 0-1.084-.498l-.166-.067ZM12.56 2.44c.354.353.423.88.437 1.81h1.323a5.75 5.75 0 0 1 2.571.607l.836.418c.681-.549 1.8-.587 2.773-.025 1.196.69 1.718 2.025 1.165 2.982-.552.956-1.97 1.172-3.165.482-.844-.488-1.353-1.297-1.384-2.067l-.896-.448a4.25 4.25 0 0 0-1.9-.449H13v.734A9.468 9.468 0 0 0 10 6c-1.05 0-2.06.17-3 .484V5.75h.107c.097.001.21.002.306 0 .139-.005.327-.018.516-.076.202-.063.437-.188.608-.435.166-.238.213-.505.213-.739 0-.234-.047-.501-.213-.74a1.135 1.135 0 0 0-.609-.434 1.959 1.959 0 0 0-.516-.075 8.399 8.399 0 0 0-.304-.001H7.07c.059-.354.168-.61.368-.81C7.88 2 8.586 2 10 2s2.121 0 2.56.44Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M7 5.75h.107c.097.001.21.002.306 0 .139-.005.327-.018.516-.076.202-.063.437-.188.608-.435.166-.238.213-.505.213-.739 0-.234-.047-.501-.213-.74a1.135 1.135 0 0 0-.609-.434 1.959 1.959 0 0 0-.516-.075 8.399 8.399 0 0 0-.412 0v2.5Z" clipRule="evenodd" opacity={0.4} /><g fill="currentColor" opacity={0.5}><path d="M2.147 13.059A7.073 7.073 0 0 0 2 14.495c0 1.915.766 3.662 2.028 4.987.45.473.675.709 1.618 1.114C6.59 21 7.24 21 8.542 21h2.916c1.302 0 1.952 0 2.896-.404.943-.405 1.168-.641 1.619-1.114C17.233 18.157 18 16.41 18 14.495c0-.133-.004-.264-.01-.395-.598-.316-1.6-.612-2.676-.784-3.07-.491-4.688 1.988-7.78 1.653-2.215-.24-3.936-1.318-5.387-1.91Z" /><path d="M7.534 14.969c3.092.335 4.71-2.144 7.78-1.653 1.075.172 2.078.468 2.675.784C17.77 10.144 14.277 7 10 7c-3.894 0-7.138 2.606-7.853 6.059 1.45.592 3.172 1.67 5.387 1.91Z" /></g><path fill="currentColor" d="M13 7.545V5c0-1.414 0-2.121-.44-2.56C12.122 2 11.415 2 10 2c-1.414 0-2.121 0-2.56.44-.201.2-.31.456-.37.81h.038c.096-.001.209-.002.304.001.14.004.328.017.516.075.203.063.438.188.61.435.165.238.212.505.212.739 0 .234-.047.501-.213.74a1.136 1.136 0 0 1-.608.434 1.957 1.957 0 0 1-.516.075c-.096.003-.21.002-.306.002H7v1.794A8.449 8.449 0 0 1 10 7c1.06 0 2.074.193 3 .545ZM2.147 13.059A7.073 7.073 0 0 0 2 14.495c0 1.915.766 3.662 2.028 4.987.45.473.675.709 1.618 1.114C6.59 21 7.24 21 8.542 21h2.916c1.302 0 1.952 0 2.896-.404.943-.405 1.168-.641 1.619-1.114C17.233 18.157 18 16.41 18 14.495c0-.133-.004-.264-.01-.395-.598-.316-1.6-.612-2.676-.784-3.07-.491-4.688 1.988-7.78 1.653-2.215-.24-3.936-1.318-5.387-1.91ZM20.548 5.378c1.253.647 1.8 1.897 1.221 2.792-.579.896-2.064 1.098-3.317.452-1.253-.647-1.8-1.897-1.221-2.792.579-.896 2.064-1.098 3.317-.452Z" /><path fill="currentColor" d="M13 5.75h1.32c.66 0 1.31.154 1.9.449l.78.39c.005-.266.08-.525.23-.76.14-.215.331-.39.56-.523l-.899-.449a5.75 5.75 0 0 0-2.571-.607H13v1.5Z" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Perfume