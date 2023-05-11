import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Syringe = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m17.737 13.535-.53-.53.53.53Zm-.646.647.53.53-.53-.53Zm-2.182 2.182.53.53-.53-.53Zm-1.455 1.454-.53-.53.53.53Zm-6.742-6.742a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm12.312.9-.705-.256.705.256Zm.705-1.663a.75.75 0 0 0-1.41.513l1.41-.513Zm-4.74-4.05-.53.53.53-.53Zm-1.558-1.287.256-.705-.256.705Zm-2.966 1.287-.53-.53.53.53Zm1.559-1.287-.257-.705.257.705Zm4.34 2.66-.53.53a.75.75 0 0 0 1.06 0l-.53-.53Zm3.106-.197a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM17.62 3.47a.75.75 0 1 0-1.06 1.061l1.06-1.06Zm-14.151 16a.75.75 0 1 0 1.06 1.061l-1.06-1.06Zm9.084-6.521a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm.188 5.582a.75.75 0 0 0 1.061-1.06l-1.06 1.06Zm-.585-2.706a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM8.47 7.197a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm8.737 5.808-.646.646 1.06 1.061.647-.646-1.061-1.061Zm-.646.646-2.182 2.182 1.06 1.061 2.182-2.182-1.06-1.06Zm-2.182 2.182-1.455 1.455 1.06 1.06 1.455-1.454-1.06-1.06Zm-7.667 1.455a4.393 4.393 0 0 1 0-6.212l-1.06-1.06a5.893 5.893 0 0 0 0 8.333l1.06-1.061Zm6.212 0a4.545 4.545 0 0 1-.16.152l1.008 1.111c.072-.065.143-.133.213-.202l-1.06-1.061Zm-.16.152a4.393 4.393 0 0 1-6.052-.152l-1.06 1.06a5.893 5.893 0 0 0 8.12.203l-1.007-1.111Zm5.504-3.374c.369-.37.675-.675.906-.943.236-.275.433-.555.555-.89l-1.41-.513c-.034.093-.103.216-.283.425-.185.216-.444.475-.829.86l1.06 1.06Zm.051-3.24c.105.288.105.605 0 .894l1.41.513c.225-.62.225-1.3 0-1.92l-1.41.513ZM15.52 5.732c-.368-.368-.674-.675-.943-.906-.274-.235-.555-.433-.89-.555l-.513 1.41c.094.034.216.103.426.283.215.185.475.444.86.829l1.06-1.06Zm-4.525 1.061a17.6 17.6 0 0 1 .86-.829c.21-.18.331-.249.425-.283l-.513-1.41c-.335.122-.615.32-.89.555-.268.231-.574.538-.943.906l1.061 1.061Zm2.692-2.522a2.807 2.807 0 0 0-1.92 0l.513 1.41c.289-.105.606-.105.894 0l.513-1.41Zm3.207 3.896 2.182-2.182-1.06-1.06-2.183 2.181 1.061 1.06Zm1.121-2.182 1.455 1.454 1.06-1.06-1.454-1.455-1.06 1.06Zm1.06-1.06L17.622 3.47l-1.06 1.06 1.454 1.455 1.06-1.06ZM5.652 17.287 3.47 19.47l1.06 1.06 2.182-2.181-1.06-1.061Zm11.97-3.636L10.35 6.379l-1.061 1.06 7.273 7.273 1.06-1.06Zm-2.182 2.181-2.885-2.885-1.06 1.06 2.885 2.886 1.06-1.06Zm-1.636 1.637-.004-.005-1.061 1.06.004.005 1.061-1.06Zm-.004-.005-1.642-1.641-1.06 1.06 1.64 1.642 1.062-1.06ZM9.53 8.258l.819-.819-1.061-1.06-.818.818 1.06 1.06Zm.819-.819.646-.646-1.06-1.06-.647.646 1.06 1.06Zm4.11-.646 1.374 1.374 1.061-1.061-1.374-1.374-1.06 1.061Z" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m6.182 10.546.53.53-.53-.53Zm7.273 7.272.53.53-.53-.53Zm4.283-8.808-.53.53.53-.53Zm1.286 1.56.705-.257-.705.256Zm-1.286 2.965-.53-.53.53.53Zm1.286-1.559.705.257-.705-.257ZM14.99 6.263l.53-.53-.53.53Zm-1.559-1.287-.256.705.256-.705Zm-2.966 1.287.53.53-.53-.53Zm1.559-1.287.256.705-.256-.705ZM19.47 7.44a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM17.62 3.47a.75.75 0 1 0-1.06 1.061l1.06-1.06ZM14.46 6.794l2.747 2.747 1.06-1.06-2.747-2.748-1.06 1.061Zm2.747 6.212-4.283 4.283 1.061 1.06 4.283-4.282-1.06-1.061Zm-10.495-1.93 4.283-4.282-1.06-1.06-4.283 4.282 1.06 1.06Zm0 6.213a4.393 4.393 0 0 1 0-6.212l-1.06-1.06a5.893 5.893 0 0 0 0 8.333l1.06-1.061Zm6.212 0a4.393 4.393 0 0 1-6.212 0l-1.06 1.06a5.893 5.893 0 0 0 8.333 0l-1.06-1.06Zm4.283-7.748c.385.385.644.645.83.86.18.21.248.332.282.426l1.41-.513c-.122-.335-.32-.616-.555-.89-.23-.269-.537-.574-.906-.943l-1.06 1.06Zm1.06 4.526c.37-.37.676-.675.907-.943.236-.275.433-.555.555-.89l-1.41-.513c-.034.094-.103.216-.283.425-.185.216-.444.475-.829.86l1.06 1.06Zm.052-3.24c.105.288.105.605 0 .894l1.41.513c.226-.62.226-1.3 0-1.92l-1.41.513ZM15.52 5.732c-.368-.368-.674-.675-.943-.906-.274-.235-.555-.433-.89-.555l-.512 1.41c.093.034.215.103.425.283.215.185.475.444.86.829l1.06-1.06Zm-4.525 1.061a17.6 17.6 0 0 1 .86-.829c.21-.18.332-.249.425-.283l-.513-1.41c-.334.122-.615.32-.89.555-.268.231-.574.538-.942.906l1.06 1.061Zm2.693-2.522a2.807 2.807 0 0 0-1.92 0l.512 1.41c.29-.105.606-.105.895 0l.512-1.41Zm4.327 1.714 1.455 1.454 1.06-1.06-1.454-1.455-1.06 1.06Zm1.061-1.06L17.621 3.47l-1.06 1.06 1.454 1.455 1.061-1.06Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M17.091 14.182 9.818 6.909" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M6.182 17.818 4 20" opacity={0.5} /><path fill="currentColor" d="M15.833 7.106a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm3.242-1.121a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-2.181 2.182 2.181-2.182-1.06-1.06-2.182 2.181 1.06 1.06ZM14.379 16.894a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-1.825-3.946a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm.189 5.583a.75.75 0 1 0 1.06-1.061l-1.06 1.06Zm-.586-2.707a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm3.283.01-2.886-2.886-1.06 1.06 2.885 2.886 1.06-1.06Zm-1.637 1.636-1.646-1.646-1.06 1.06 1.646 1.647 1.06-1.061Z" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m6.182 10.546.53.53-.53-.53Zm7.272 7.272.53.53-.53-.53Zm4.283-8.808-.53.53.53-.53Zm1.287 1.56.705-.257-.705.256Zm-1.287 2.965-.53-.53.53.53Zm1.287-1.559.705.257-.705-.257ZM14.99 6.263l.53-.53-.53.53Zm-1.56-1.287-.256.705.257-.705Zm-2.965 1.287.53.53-.53-.53Zm1.559-1.287.256.705-.256-.705Zm3.81 2.13a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm3.636.333a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM17.62 3.47a.75.75 0 1 0-1.06 1.061l1.06-1.06Zm-14.151 16a.75.75 0 1 0 1.06 1.061l-1.06-1.06Zm13.09-4.757a.75.75 0 1 0 1.061-1.06l-1.06 1.06ZM10.35 6.38a.75.75 0 1 0-1.061 1.06l1.06-1.06Zm4.03 10.515a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-1.825-3.946a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm.188 5.582a.75.75 0 0 0 1.061-1.06l-1.06 1.06Zm-.585-2.706a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm2.303-9.031 2.747 2.747 1.06-1.06-2.747-2.748-1.06 1.061Zm2.747 6.212-4.283 4.283 1.06 1.06 4.284-4.282-1.061-1.061Zm-10.495-1.93 4.283-4.282-1.06-1.06-4.284 4.282 1.061 1.06Zm0 6.213a4.393 4.393 0 0 1 0-6.212l-1.06-1.06a5.893 5.893 0 0 0 0 8.333l1.06-1.061Zm6.212 0a4.393 4.393 0 0 1-6.212 0l-1.06 1.06a5.893 5.893 0 0 0 8.333 0l-1.06-1.06Zm4.283-7.748c.385.385.644.645.829.86.18.21.249.332.283.426l1.41-.513c-.122-.335-.32-.616-.555-.89-.231-.269-.537-.574-.906-.943l-1.061 1.06Zm1.06 4.526c.37-.37.676-.675.907-.943.236-.275.433-.555.555-.89l-1.41-.513c-.034.094-.103.216-.283.425-.185.216-.444.475-.829.86l1.06 1.06Zm.052-3.24c.105.288.105.605 0 .894l1.41.513c.225-.62.225-1.3 0-1.92l-1.41.513ZM15.52 5.732c-.368-.368-.674-.675-.943-.906-.274-.235-.555-.433-.89-.555l-.513 1.41c.094.034.216.103.426.283.215.185.475.444.86.829l1.06-1.06Zm-4.525 1.061a17.6 17.6 0 0 1 .86-.829c.21-.18.331-.249.425-.283l-.513-1.41c-.335.122-.615.32-.89.555-.268.231-.574.538-.943.906l1.061 1.061Zm2.692-2.522a2.807 2.807 0 0 0-1.92 0l.513 1.41c.289-.105.606-.105.894 0l.513-1.41Zm3.207 3.896 2.182-2.182-1.06-1.06-2.183 2.181 1.061 1.06Zm1.121-2.182 1.455 1.454 1.06-1.06-1.454-1.455-1.06 1.06Zm1.06-1.06L17.622 3.47l-1.06 1.06 1.454 1.455 1.06-1.06ZM5.652 17.287 3.47 19.47l1.06 1.06 2.182-2.181-1.06-1.061Zm11.97-3.636L10.35 6.379l-1.061 1.06 7.273 7.273 1.06-1.06Zm-2.182 2.181-2.885-2.885-1.06 1.06 2.885 2.886 1.06-1.06Zm-1.636 1.637-1.646-1.646-1.06 1.06 1.645 1.646 1.061-1.06Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M16.56 3.47a.75.75 0 0 1 1.061 0l2.91 2.909a.75.75 0 0 1-1.061 1.06l-.924-.924-1.122 1.121.864.864c.36.36.66.66.886.923.236.274.433.555.555.89.225.62.225 1.3 0 1.92-.122.335-.32.615-.555.89-.227.263-.526.563-.886.923l-.666.665-.001.002-2.18 2.18-.002.001-1.454 1.455a6.03 6.03 0 0 1-.136.131.82.82 0 0 1-.155.14 5.895 5.895 0 0 1-7.479.225L4.53 20.53a.75.75 0 0 1-1.06-1.06l1.685-1.685a5.894 5.894 0 0 1 .496-7.77l4.303-4.303c.36-.36.66-.66.923-.886.275-.235.555-.433.89-.555.62-.225 1.3-.225 1.92 0 .335.122.616.32.89.555.264.227.563.526.923.886l.864.864 1.12-1.121-.923-.925a.75.75 0 0 1 0-1.06Zm-2.1 3.323a17.692 17.692 0 0 0-.86-.829c-.21-.18-.332-.249-.426-.283a1.307 1.307 0 0 0-.894 0c-.094.034-.216.103-.425.283a17.6 17.6 0 0 0-.86.829l-.116.116 6.212 6.212.116-.116c.385-.385.644-.644.829-.86.18-.21.249-.331.283-.425a1.307 1.307 0 0 0 0-.894c-.034-.094-.103-.216-.283-.426a17.626 17.626 0 0 0-.829-.86L14.46 6.793Zm1.57 7.389L9.818 7.97l-3.106 3.106a4.393 4.393 0 0 0 5.418 6.842l-1.034-1.034a.75.75 0 0 1 1.061-1.06l1.116 1.115.575-.575-2.355-2.355a.75.75 0 0 1 1.061-1.061l2.355 2.355 1.121-1.121Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M17.782 3.226a.771.771 0 1 0-1.091 1.09l.95.951-1.698 1.7-.868-.868c-.775-.776-1.163-1.163-1.603-1.324-.468-.17-.98-.17-1.448 0-.44.16-.828.548-1.603 1.324l-.12.12 7.48 7.48.12-.12c.775-.775 1.163-1.163 1.323-1.603.17-.468.17-.98 0-1.448-.16-.44-.548-.828-1.323-1.603l-.867-.868 1.698-1.699.951.951a.771.771 0 0 0 1.091-1.09l-2.992-2.993ZM6.016 10.504 9.21 7.309l7.48 7.48-1.152 1.154-2.968-2.968a.771.771 0 1 0-1.091 1.091l2.968 2.968-.592.592-1.693-1.693a.772.772 0 0 0-1.091 1.091l1.62 1.621a5.294 5.294 0 0 1-6.09-.155l-2.284 2.284a.772.772 0 0 1-1.091-1.09l2.284-2.285a5.29 5.29 0 0 1 .506-6.895Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><g fill="currentColor" opacity={0.5}><path d="M17.804 9.11 14.89 6.196c-.8-.8-1.2-1.2-1.654-1.365a2.182 2.182 0 0 0-1.492 0c-.455.165-.855.565-1.654 1.365l-4.543 4.543a5.455 5.455 0 0 0 7.714 7.714l4.543-4.543c.8-.8 1.2-1.2 1.365-1.654a2.182 2.182 0 0 0 0-1.492c-.165-.455-.565-.855-1.365-1.654Z" /><path fillRule="evenodd" d="M16.556 3.233a.795.795 0 0 1 1.125 0l3.086 3.086a.796.796 0 1 1-1.125 1.125l-3.086-3.086a.796.796 0 0 1 0-1.125Z" clipRule="evenodd" /></g><path fill="currentColor" d="m17.73 13.985-7.715-7.714L8.89 7.396l7.714 7.714 1.125-1.125ZM5.026 17.85a5.5 5.5 0 0 0 1.125 1.125l-1.793 1.792a.796.796 0 1 1-1.125-1.125l1.793-1.792ZM16.91 8.215 15.783 7.09l1.752-1.752 1.125 1.125-1.752 1.752ZM15.367 16.348l-3.06-3.06a.796.796 0 1 0-1.126 1.124l3.061 3.06 1.125-1.124ZM13.631 18.084l-1.746-1.746a.795.795 0 1 0-1.125 1.125l1.672 1.672c.293-.196.571-.423.83-.682l.37-.37Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Syringe