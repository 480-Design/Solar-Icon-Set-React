import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Shuffle = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M2 16.25a.75.75 0 0 0 0 1.5v-1.5Zm3.603 1.5a.75.75 0 0 0 0-1.5v1.5Zm5.145-3.663-.643-.386.643.386Zm2.504-4.174.643.386-.643-.386ZM22 7l.53.53a.75.75 0 0 0 0-1.06L22 7Zm-2.53 1.47a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm1.06-4a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-5.31 2.92-.369-.653.37.652Zm-6.5 8.338a.75.75 0 1 0 1.024 1.096L8.72 15.728ZM2 17.75h3.603v-1.5H2v1.5Zm9.39-3.277 2.505-4.174-1.286-.772-2.504 4.174 1.286.772Zm7.007-6.723H22v-1.5h-3.603v1.5Zm3.073-1.28-2 2 1.06 1.06 2-2-1.06-1.06Zm1.06 0-2-2-1.06 1.06 2 2 1.06-1.06Zm-8.635 3.829c.434-.724.734-1.22 1.006-1.589.263-.355.468-.543.689-.668l-.739-1.305c-.467.264-.82.627-1.155 1.08-.326.44-.668 1.011-1.087 1.71l1.286.772Zm4.502-4.049c-.815 0-1.48 0-2.025.052-.562.055-1.054.17-1.521.435l.739 1.305c.22-.125.487-.204.927-.247.456-.044 1.036-.045 1.88-.045v-1.5Zm-8.292 7.451c-.677 1.128-1.02 1.686-1.385 2.027l1.024 1.096c.557-.52 1.02-1.306 1.647-2.351l-1.286-.772ZM2 6.25a.75.75 0 0 0 0 1.5v-1.5ZM22 17l.53.53a.75.75 0 0 0 0-1.06L22 17Zm-1.47-2.53a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 4a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-3.345-1.525.144-.736-.144.736Zm-1.682-2.33a.75.75 0 1 0-1.286.77l1.286-.77Zm.025 1.391.558-.501-.558.501Zm-6.593-8.95.143-.737-.143.736Zm1.682 2.33a.75.75 0 0 0 1.286-.772l-1.286.772Zm-.025-1.393-.558.502.558-.502ZM2 7.75h4.668v-1.5H2v1.5Zm15.332 10H22v-1.5h-4.668v1.5Zm5.198-1.28-2-2-1.06 1.06 2 2 1.06-1.06Zm-1.06 0-2 2 1.06 1.06 2-2-1.06-1.06Zm-4.138-.22c-.645 0-.867-.003-1.063-.041l-.287 1.472c.372.072.765.069 1.35.069v-1.5Zm-4.175-.864c.3.502.5.84.754 1.122l1.115-1.003c-.134-.149-.25-.337-.583-.89l-1.286.77Zm3.112.823a2.25 2.25 0 0 1-1.243-.704l-1.115 1.003a3.75 3.75 0 0 0 2.071 1.173l.287-1.472ZM6.668 7.75c.645 0 .867.003 1.063.041l.287-1.472c-.372-.072-.765-.069-1.35-.069v1.5Zm4.175.864c-.3-.502-.5-.84-.754-1.122L8.974 8.495c.134.149.25.337.583.89l1.286-.77Zm-3.112-.823c.48.094.916.34 1.243.704l1.115-1.003a3.75 3.75 0 0 0-2.071-1.173L7.73 7.791Z" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M2 16.25a.75.75 0 0 0 0 1.5v-1.5Zm8.748-2.163-.643-.386.643.386Zm2.504-4.174.643.386-.643-.386ZM22 7l.53.53a.75.75 0 0 0 0-1.06L22 7Zm-2.53 1.47a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm1.06-4a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-5.31 2.92-.369-.653.37.652ZM2 17.75h3.603v-1.5H2v1.5Zm9.39-3.277 2.505-4.174-1.286-.772-2.504 4.174 1.286.772Zm7.007-6.723H22v-1.5h-3.603v1.5Zm3.073-1.28-2 2 1.06 1.06 2-2-1.06-1.06Zm1.06 0-2-2-1.06 1.06 2 2 1.06-1.06Zm-8.635 3.829c.434-.724.734-1.22 1.006-1.589.263-.355.468-.543.689-.668l-.739-1.305c-.467.264-.82.627-1.155 1.08-.326.44-.668 1.011-1.087 1.71l1.286.772Zm4.502-4.049c-.815 0-1.48 0-2.025.052-.562.055-1.054.17-1.521.435l.739 1.305c.22-.125.487-.204.927-.247.456-.044 1.036-.045 1.88-.045v-1.5ZM5.603 17.75c.815 0 1.48 0 2.025-.052.562-.055 1.054-.17 1.521-.435l-.739-1.305c-.22.125-.487.204-.927.247-.456.044-1.036.045-1.88.045v1.5Zm4.502-4.049c-.435.724-.734 1.22-1.006 1.589-.263.355-.468.543-.689.668l.74 1.305c.466-.264.819-.627 1.154-1.08.326-.44.668-1.011 1.087-1.71l-1.286-.772Z" /><path fill="currentColor" d="M2 7.75a.75.75 0 0 1 0-1.5v1.5Zm8.748 2.163-.643.386.643-.386Zm2.504 4.174.643-.386-.643.386ZM22 17l.53-.53a.75.75 0 0 1 0 1.06L22 17Zm-2.53-1.47a.75.75 0 1 1 1.06-1.06l-1.06 1.06Zm1.06 4a.75.75 0 1 1-1.06-1.06l1.06 1.06Zm-5.31-2.92-.369.653.37-.652ZM2 6.25h3.603v1.5H2v-1.5Zm9.39 3.277 2.505 4.174-1.286.772-2.504-4.174 1.286-.772Zm7.007 6.723H22v1.5h-3.603v-1.5Zm3.073 1.28-2-2 1.06-1.06 2 2-1.06 1.06Zm1.06 0-2 2-1.06-1.06 2-2 1.06 1.06Zm-8.635-3.829c.434.724.734 1.22 1.006 1.589.263.355.468.543.689.668l-.739 1.305c-.467-.264-.82-.627-1.155-1.08-.326-.44-.668-1.011-1.087-1.71l1.286-.772Zm4.502 4.049c-.815 0-1.48 0-2.025-.052-.562-.055-1.054-.17-1.521-.435l.739-1.305c.22.125.487.204.927.247.456.044 1.036.045 1.88.045v1.5ZM5.603 6.25c.815 0 1.48 0 2.025.052.562.055 1.054.17 1.521.435L8.41 8.042c-.22-.125-.487-.204-.927-.247-.456-.044-1.036-.045-1.88-.045v-1.5Zm4.502 4.049c-.435-.724-.734-1.22-1.006-1.589-.263-.355-.468-.543-.689-.668l.74-1.305c.466.264.819.627 1.154 1.08.326.44.668 1.011 1.087 1.71l-1.286.772Z" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M2 16.25a.75.75 0 0 0 0 1.5v-1.5Zm8.748-2.163-.643-.386.643.386Zm2.504-4.174.643.386-.643-.386ZM22 7l.53.53a.75.75 0 0 0 0-1.06L22 7Zm-2.53 1.47a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm1.06-4a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-5.31 2.92-.369-.653.37.652ZM2 17.75h3.603v-1.5H2v1.5Zm9.39-3.277 2.505-4.174-1.286-.772-2.504 4.174 1.286.772Zm7.007-6.723H22v-1.5h-3.603v1.5Zm3.073-1.28-2 2 1.06 1.06 2-2-1.06-1.06Zm1.06 0-2-2-1.06 1.06 2 2 1.06-1.06Zm-8.635 3.829c.434-.724.734-1.22 1.006-1.589.263-.355.468-.543.689-.668l-.739-1.305c-.467.264-.82.627-1.155 1.08-.326.44-.668 1.011-1.087 1.71l1.286.772Zm4.502-4.049c-.815 0-1.48 0-2.025.052-.562.055-1.054.17-1.521.435l.739 1.305c.22-.125.487-.204.927-.247.456-.044 1.036-.045 1.88-.045v-1.5ZM5.603 17.75c.815 0 1.48 0 2.025-.052.562-.055 1.054-.17 1.521-.435l-.739-1.305c-.22.125-.487.204-.927.247-.456.044-1.036.045-1.88.045v1.5Zm4.502-4.049c-.435.724-.734 1.22-1.006 1.589-.263.355-.468.543-.689.668l.74 1.305c.466-.264.819-.627 1.154-1.08.326-.44.668-1.011 1.087-1.71l-1.286-.772ZM2 6.25a.75.75 0 0 0 0 1.5v-1.5ZM22 17l.53.53a.75.75 0 0 0 0-1.06L22 17Zm-1.47-2.53a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 4a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-3.345-1.525.144-.736-.144.736Zm-1.682-2.33a.75.75 0 1 0-1.286.77l1.286-.77Zm.025 1.391.558-.501-.558.501Zm-6.593-8.95.143-.737-.143.736Zm1.682 2.33a.75.75 0 0 0 1.286-.772l-1.286.772Zm-.025-1.393-.558.502.558-.502ZM2 7.75h4.668v-1.5H2v1.5Zm15.332 10H22v-1.5h-4.668v1.5Zm5.198-1.28-2-2-1.06 1.06 2 2 1.06-1.06Zm-1.06 0-2 2 1.06 1.06 2-2-1.06-1.06Zm-4.138-.22c-.645 0-.867-.003-1.063-.041l-.287 1.472c.372.072.765.069 1.35.069v-1.5Zm-4.175-.864c.3.502.5.84.754 1.122l1.115-1.003c-.134-.149-.25-.337-.583-.89l-1.286.77Zm3.112.823a2.25 2.25 0 0 1-1.243-.704l-1.115 1.003a3.75 3.75 0 0 0 2.071 1.173l.287-1.472ZM6.668 7.75c.645 0 .867.003 1.063.041l.287-1.472c-.372-.072-.765-.069-1.35-.069v1.5Zm4.175.864c-.3-.502-.5-.84-.754-1.122L8.974 8.495c.134.149.25.337.583.89l1.286-.77Zm-3.112-.823c.48.094.916.34 1.243.704l1.115-1.003a3.75 3.75 0 0 0-2.071-1.173L7.73 7.791Z" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M19.47 4.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72h-1.793c-.844 0-1.424 0-1.88.045-.44.043-.706.122-.927.247-.22.125-.426.313-.689.668-.272.368-.572.865-1.006 1.589l-2.523 4.205c-.41.685-.747 1.245-1.068 1.679-.335.453-.688.816-1.155 1.08-.467.265-.96.38-1.52.435-.538.052-1.191.052-1.99.052H2a.75.75 0 0 1 0-1.5h3.603c.844 0 1.424 0 1.88-.045.44-.043.706-.122.927-.247.22-.125.426-.313.689-.668.272-.368.571-.865 1.006-1.589l2.523-4.205c.41-.685.747-1.245 1.068-1.679.335-.453.688-.816 1.155-1.08.467-.265.96-.38 1.52-.435.538-.052 1.191-.052 1.99-.052h1.828l-.72-.72a.75.75 0 0 1 0-1.06ZM7.73 7.79c-.196-.038-.418-.041-1.063-.041H2a.75.75 0 0 1 0-1.5h4.74c.546 0 .922 0 1.278.07a3.75 3.75 0 0 1 2.071 1.172c.243.27.436.592.717 1.06l.037.062a.75.75 0 1 1-1.286.772c-.332-.554-.45-.742-.583-.89a2.25 2.25 0 0 0-1.243-.705Zm5.683 6.566a.75.75 0 0 1 1.03.257c.331.554.448.742.582.89.327.364.763.611 1.243.705.196.038.418.041 1.063.041h2.857l-.72-.72a.75.75 0 1 1 1.061-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72h-2.931c-.545 0-.92 0-1.277-.07a3.75 3.75 0 0 1-2.071-1.172c-.243-.27-.436-.592-.717-1.06l-.037-.062a.75.75 0 0 1 .257-1.03Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Zm4.262-14.523a.75.75 0 0 1 1.06-.015l1.2 1.167a.75.75 0 0 1 0 1.075l-1.2 1.167a.75.75 0 0 1-1.146-.954h-.338c-.511 0-.844 0-1.1.025-.242.023-.36.062-.444.109-.084.046-.176.12-.318.307-.152.2-.323.474-.586.902l-1.52 2.463c-.242.39-.45.729-.652.994-.218.286-.46.532-.789.713-.328.18-.666.254-1.025.288-.336.032-.74.032-1.21.032H6a.75.75 0 0 1 0-1.5h2.162c.511 0 .844 0 1.1-.025.243-.023.36-.063.444-.11.084-.045.176-.12.318-.306.152-.2.323-.475.586-.902l1.52-2.464c.242-.39.45-.728.652-.994.218-.285.46-.531.789-.712.328-.18.666-.255 1.025-.289.336-.031.74-.031 1.21-.031h.37a.75.75 0 0 1 .086-.94ZM9.385 9.77C9.3 9.753 9.2 9.75 8.801 9.75H6a.75.75 0 0 1 0-1.5H8.858c.313 0 .565 0 .806.045.54.102 1.033.373 1.405.775.167.18.299.394.459.653l.03.05a.75.75 0 1 1-1.276.788c-.206-.334-.259-.413-.313-.472a1.063 1.063 0 0 0-.584-.32Zm3.301 3.26a.75.75 0 0 1 1.032.244c.206.333.259.412.313.471.151.163.355.277.584.32.085.016.186.02.584.02h.977a.75.75 0 0 1 1.147-.955l1.2 1.167a.75.75 0 0 1 0 1.075l-1.2 1.167a.75.75 0 0 1-1.147-.955h-1.034c-.313 0-.565 0-.806-.045a2.563 2.563 0 0 1-1.405-.775c-.167-.18-.299-.394-.459-.653l-.03-.05a.75.75 0 0 1 .244-1.032Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Z" opacity={0.5} /><path fill="currentColor" d="M16.262 7.477a.75.75 0 0 1 1.06-.015l1.2 1.167a.75.75 0 0 1 0 1.075l-1.2 1.167a.75.75 0 0 1-1.146-.954h-.338c-.511 0-.844 0-1.1.025-.242.023-.36.062-.444.109-.084.046-.176.12-.318.307-.152.2-.323.474-.586.902l-1.52 2.463c-.242.39-.45.729-.652.994-.218.286-.46.532-.789.713-.328.18-.666.254-1.025.288-.336.032-.74.032-1.21.032H6a.75.75 0 0 1 0-1.5h2.162c.511 0 .844 0 1.1-.025.243-.023.36-.063.444-.11.084-.045.176-.12.318-.306.152-.2.323-.475.586-.902l1.52-2.464c.242-.39.45-.728.652-.994.218-.285.46-.531.789-.712.328-.18.666-.255 1.025-.289.336-.031.74-.031 1.21-.031h.37a.75.75 0 0 1 .086-.94Z" /><path fill="currentColor" d="M9.385 9.77c-.085-.017-.186-.02-.584-.02H6a.75.75 0 0 1 0-1.5H8.858c.313 0 .565 0 .806.045.54.102 1.033.373 1.405.775.167.18.299.394.459.653l.03.05a.75.75 0 1 1-1.276.788c-.206-.334-.259-.413-.313-.472a1.063 1.063 0 0 0-.584-.32ZM12.686 13.028a.75.75 0 0 1 1.032.245c.206.333.259.412.313.471.151.163.355.277.584.32.085.016.186.02.584.02h.977a.75.75 0 0 1 1.147-.955l1.2 1.167a.75.75 0 0 1 0 1.075l-1.2 1.167a.75.75 0 0 1-1.147-.955h-1.034c-.313 0-.565 0-.806-.045a2.563 2.563 0 0 1-1.405-.775c-.167-.18-.299-.394-.459-.653l-.03-.05a.75.75 0 0 1 .244-1.032Z" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Shuffle