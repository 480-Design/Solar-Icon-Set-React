import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const StarShine = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2v2M12 20v2M2 12h2M20 12h2M6 18l.343-.343M17.657 6.343 18 6M18 18l-.343-.343M6.343 6.343 6 6M15.265 14.627c.127 1.308.19 1.962-.193 2.253-.383.29-.958.026-2.11-.504l-.298-.138c-.327-.15-.49-.226-.664-.226-.173 0-.337.076-.664.226l-.298.138c-1.152.53-1.727.795-2.11.504-.383-.29-.32-.945-.193-2.253l.032-.338c.037-.372.055-.558 0-.73-.053-.172-.172-.312-.41-.59l-.217-.254c-.838-.98-1.258-1.47-1.111-1.941.106-.34.458-.508 1.111-.68m2.437-1.39C11.21 7.568 11.527 7 12 7c.473 0 .79.568 1.423 1.704l.164.294c.18.323.27.484.41.59.14.107.316.147.665.226l.318.072c1.23.278 1.845.417 1.991.888.106.34-.083.69-.512 1.226" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.577 8.704C11.21 7.568 11.527 7 12 7c.473 0 .79.568 1.423 1.704l.164.294c.18.323.27.484.41.59.14.107.316.147.665.226l.318.072c1.23.278 1.845.417 1.991.888.147.47-.273.96-1.111 1.941l-.217.254c-.238.278-.357.418-.41.59-.055.172-.037.358 0 .73l.032.338c.127 1.308.19 1.962-.193 2.253-.383.29-.958.026-2.11-.504l-.298-.138c-.327-.15-.49-.226-.664-.226-.173 0-.337.076-.664.226l-.298.138c-1.152.53-1.727.795-2.11.504-.383-.29-.32-.945-.193-2.253l.032-.338c.037-.372.055-.558 0-.73-.053-.172-.172-.312-.41-.59l-.217-.254c-.838-.98-1.258-1.47-1.111-1.941.146-.47.76-.61 1.99-.888l.319-.072c.35-.08.524-.119.665-.225.14-.107.23-.268.41-.59l.164-.295Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="m6 18 .343-.343M17.657 6.343 18 6M18 18l-.343-.343M6.343 6.343 6 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.577 8.704C11.21 7.568 11.527 7 12 7c.473 0 .79.568 1.423 1.704l.164.294c.18.323.27.484.41.59.14.107.316.147.665.226l.318.072c1.23.278 1.845.417 1.991.888.147.47-.273.96-1.111 1.941l-.217.254c-.238.278-.357.418-.41.59-.055.172-.037.358 0 .73l.032.338c.127 1.308.19 1.962-.193 2.253-.383.29-.958.026-2.11-.504l-.298-.138c-.327-.15-.49-.226-.664-.226-.173 0-.337.076-.664.226l-.298.138c-1.152.53-1.727.795-2.11.504-.383-.29-.32-.945-.193-2.253l.032-.338c.037-.372.055-.558 0-.73-.053-.172-.172-.312-.41-.59l-.217-.254c-.838-.98-1.258-1.47-1.111-1.941.146-.47.76-.61 1.99-.888l.319-.072c.35-.08.524-.119.665-.225.14-.107.23-.268.41-.59l.164-.295Z" stroke="currentColor" strokeWidth={1.5} /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M6 18l.343-.343M17.657 6.343 18 6M18 18l-.343-.343M6.343 6.343 6 6" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm6.53 4.22a.75.75 0 0 1 0 1.06l-.343.343a.75.75 0 0 1-1.06-1.06l.343-.343a.75.75 0 0 1 1.06 0Zm-13.06 0a.75.75 0 0 1 1.06 0l.344.343a.75.75 0 0 1-1.061 1.06L5.47 6.53a.75.75 0 0 1 0-1.06Zm6.474 2.412c-.177.23-.383.597-.712 1.187l-.164.294-.037.067c-.14.252-.304.55-.575.756-.275.21-.608.283-.881.344l-.072.016-.318.072c-.64.144-1.033.236-1.292.338-.056.021-.095.04-.122.055.014.032.039.079.079.143.155.246.425.565.86 1.073l.217.254.048.056c.188.219.408.473.51.8.1.322.066.657.036.95l-.007.074-.033.338c-.066.679-.105 1.105-.092 1.403.003.057.007.101.012.135.024-.005.052-.012.087-.022.267-.077.636-.245 1.236-.52l.298-.138.067-.031c.254-.118.566-.264.911-.264.345 0 .657.146.91.264l.068.031.298.137c.6.276.969.444 1.236.52.035.01.063.018.087.023.005-.034.01-.078.012-.135.013-.298-.027-.724-.092-1.402l-.033-.339-.007-.075c-.03-.292-.063-.627.037-.95.101-.325.32-.58.509-.799l.048-.056.217-.254c.435-.508.705-.827.86-1.073.04-.064.065-.11.08-.143a1.177 1.177 0 0 0-.123-.055c-.26-.102-.652-.194-1.292-.338l-.319-.072-.07-.016c-.274-.061-.607-.135-.882-.344-.27-.205-.436-.504-.575-.756a13.319 13.319 0 0 0-.037-.067l-.164-.294c-.329-.59-.536-.957-.712-1.187a1.619 1.619 0 0 0-.056-.07 1.619 1.619 0 0 0-.056.07Zm4.341 3.166-.007-.007c.006.004.008.007.007.007Zm-.036-.09c0-.006.001-.01.002-.01l-.002.01Zm-1.672 5.373.004-.007-.004.007Zm.112-.08c.005-.002.008-.002.009-.001h-.009Zm-5.387-.001h.009-.009Zm.118.074a.024.024 0 0 1 .003.007s-.002-.002-.003-.007ZM7.75 10.95v.009-.01Zm-.028.092-.007.007s.001-.003.007-.007Zm3.03-4.071c.26-.338.652-.72 1.248-.72s.988.382 1.247.72c.251.328.511.794.804 1.32l.191.343a5.517 5.517 0 0 0 .21.355 5.028 5.028 0 0 0 .376.094l.373.085c.567.128 1.076.243 1.456.393.407.16.857.433 1.03.991.171.55-.035 1.032-.267 1.402-.221.35-.566.753-.954 1.208l-.253.295a5.45 5.45 0 0 0-.238.289.537.537 0 0 0-.026.038v.05c.001.08.01.187.03.383l.038.393c.059.607.11 1.143.092 1.56-.019.43-.12.956-.583 1.308-.476.362-1.013.298-1.427.18-.392-.113-.868-.332-1.398-.576l-.053-.024-.297-.137a5.05 5.05 0 0 0-.351-.153 5.05 5.05 0 0 0-.35.152l-.35.162c-.531.244-1.007.463-1.399.576-.414.118-.95.182-1.427-.18-.464-.352-.564-.878-.583-1.308-.019-.418.033-.953.092-1.56l.038-.393c.02-.196.029-.303.03-.382v-.051a.538.538 0 0 0-.026-.038 5.371 5.371 0 0 0-.238-.289l-.253-.295c-.388-.455-.733-.857-.954-1.208-.232-.37-.438-.852-.267-1.402.173-.558.623-.83 1.03-.99.38-.15.889-.266 1.456-.394l.055-.012.318-.072a5.03 5.03 0 0 0 .376-.095 5.549 5.549 0 0 0 .21-.355l.163-.294.028-.049c.293-.526.553-.992.804-1.32ZM8.05 13.775v-.002.002Zm6.413-4.773ZM1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM6.873 17.127a.75.75 0 0 1 0 1.06l-.343.343a.75.75 0 0 1-1.06-1.06l.343-.343a.75.75 0 0 1 1.06 0Zm10.253 0a.75.75 0 0 1 1.061 0l.343.343a.75.75 0 0 1-1.06 1.06l-.343-.343a.75.75 0 0 1 0-1.06ZM12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.577 8.704C11.21 7.568 11.527 7 12 7c.473 0 .79.568 1.423 1.704l.164.294c.18.323.27.484.41.59.14.107.316.147.665.226l.318.072c1.23.278 1.845.417 1.991.888.147.47-.273.96-1.111 1.941l-.217.254c-.238.278-.357.418-.41.59-.055.172-.037.358 0 .73l.032.338c.127 1.308.19 1.962-.193 2.253-.383.29-.958.026-2.11-.504l-.298-.138c-.327-.15-.49-.226-.664-.226-.173 0-.337.076-.664.226l-.298.138c-1.152.53-1.727.795-2.11.504-.383-.29-.32-.945-.193-2.253l.032-.338c.037-.372.055-.558 0-.73-.053-.172-.172-.312-.41-.59l-.217-.254c-.838-.98-1.258-1.47-1.111-1.941.146-.47.76-.61 1.99-.888l.319-.072c.35-.08.524-.119.665-.225.14-.107.23-.268.41-.59l.164-.295Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm6.53 4.22a.75.75 0 0 1 0 1.06l-.343.343a.75.75 0 0 1-1.06-1.06l.343-.343a.75.75 0 0 1 1.06 0Zm-13.06 0a.75.75 0 0 1 1.06 0l.344.343a.75.75 0 0 1-1.061 1.06L5.47 6.53a.75.75 0 0 1 0-1.06ZM1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM6.873 17.127a.75.75 0 0 1 0 1.06l-.343.343a.75.75 0 0 1-1.06-1.06l.343-.343a.75.75 0 0 1 1.06 0Zm10.253 0a.75.75 0 0 1 1.061 0l.343.343a.75.75 0 0 1-1.06 1.06l-.343-.343a.75.75 0 0 1 0-1.06ZM12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M10.577 8.704C11.21 7.568 11.527 7 12 7c.473 0 .79.568 1.423 1.704l.164.294c.18.323.27.484.41.59.14.107.316.147.665.226l.318.072c1.23.278 1.845.417 1.991.888.147.47-.273.96-1.111 1.941l-.217.254c-.238.278-.357.418-.41.59-.055.172-.037.358 0 .73l.032.338c.127 1.308.19 1.962-.193 2.253-.383.29-.958.026-2.11-.504l-.298-.138c-.327-.15-.49-.226-.664-.226-.173 0-.337.076-.664.226l-.298.138c-1.152.53-1.727.795-2.11.504-.383-.29-.32-.945-.193-2.253l.032-.338c.037-.372.055-.558 0-.73-.053-.172-.172-.312-.41-.59l-.217-.254c-.838-.98-1.258-1.47-1.111-1.941.146-.47.76-.61 1.99-.888l.319-.072c.35-.08.524-.119.665-.225.14-.107.23-.268.41-.59l.164-.295Z" fill="currentColor" /><path opacity={0.8} fillRule="evenodd" clipRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" fill="currentColor" /><g opacity={0.5} fill="currentColor"><path d="M18.53 5.47a.75.75 0 0 1 0 1.06l-.343.344a.75.75 0 0 1-1.06-1.061l.343-.343a.75.75 0 0 1 1.06 0ZM5.47 5.47a.75.75 0 0 1 1.06 0l.344.343a.75.75 0 0 1-1.061 1.06L5.47 6.53a.75.75 0 0 1 0-1.06ZM6.873 17.127a.75.75 0 0 1 0 1.06l-.343.343a.75.75 0 0 1-1.06-1.06l.343-.343a.75.75 0 0 1 1.06 0ZM17.127 17.127a.75.75 0 0 1 1.06 0l.343.343a.75.75 0 0 1-1.06 1.06l-.343-.343a.75.75 0 0 1 0-1.06Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default StarShine