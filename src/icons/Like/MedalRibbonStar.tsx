import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const MedalRibbonStar = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M11.146 7.023C11.526 6.34 11.716 6 12 6c.284 0 .474.34.854 1.023l.098.176c.108.194.162.29.246.354.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532.088.283-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354-.032.104-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135-.104 0-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438-.032-.103-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135.084-.064.138-.16.246-.354l.098-.176Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m7.351 15-.637 2.323c-.628 2.292-.942 3.438-.523 4.065.147.22.344.396.573.513.652.332 1.66-.193 3.675-1.243.67-.35 1.006-.524 1.362-.562a1.87 1.87 0 0 1 .398 0c.356.038.691.213 1.362.562 2.015 1.05 3.023 1.575 3.675 1.243.229-.117.426-.293.573-.513.42-.627.105-1.773-.523-4.065L16.649 15" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M5.5 6.397A7 7 0 1 0 9.397 2.5" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M11.146 7.023C11.526 6.34 11.716 6 12 6c.284 0 .474.34.854 1.023l.098.176c.108.194.162.29.246.354.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532.088.283-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354-.032.104-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135-.104 0-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438-.032-.103-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135.084-.064.138-.16.246-.354l.098-.176Z" opacity={0.5} /><path stroke="currentColor" strokeWidth={1.5} d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m7.351 15-.637 2.323c-.628 2.292-.942 3.438-.523 4.065.147.22.344.396.573.513.652.332 1.66-.193 3.675-1.243.67-.35 1.006-.524 1.362-.562a1.87 1.87 0 0 1 .398 0c.356.038.691.213 1.362.562 2.015 1.05 3.023 1.575 3.675 1.243.229-.117.426-.293.573-.513.42-.627.105-1.773-.523-4.065L16.649 15" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="M11.146 7.023C11.526 6.34 11.716 6 12 6c.284 0 .474.34.854 1.023l.098.176c.108.194.162.29.246.354.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532.088.283-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354-.032.104-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135-.104 0-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438-.032-.103-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135.084-.064.138-.16.246-.354l.098-.176Z" /><path stroke="currentColor" strokeWidth={1.5} d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="m7.351 15-.637 2.323c-.628 2.292-.942 3.438-.523 4.065.147.22.344.396.573.513.652.332 1.66-.193 3.675-1.243.67-.35 1.006-.524 1.362-.562a1.87 1.87 0 0 1 .398 0c.356.038.691.213 1.362.562 2.015 1.05 3.023 1.575 3.675 1.243.229-.117.426-.293.573-.513.42-.627.105-1.773-.523-4.065L16.649 15" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5ZM4.25 9a7.75 7.75 0 1 1 13.06 5.645.75.75 0 0 1 .062.157l.65 2.369c.303 1.107.548 1.998.659 2.69.109.678.131 1.376-.248 1.944-.216.323-.51.588-.856.764-.63.32-1.317.163-1.932-.07-.628-.236-1.416-.647-2.384-1.152l-.047-.024c-.724-.377-.913-.462-1.095-.481a1.116 1.116 0 0 0-.238 0c-.182.019-.37.104-1.095.481l-.047.024c-.968.505-1.756.915-2.384 1.152-.615.233-1.302.39-1.932.07a2.271 2.271 0 0 1-.856-.764c-.379-.568-.357-1.266-.248-1.944.111-.692.356-1.583.66-2.69l.649-2.37a.754.754 0 0 1 .062-.156A7.728 7.728 0 0 1 4.25 9Zm3.71 6.615-.522 1.906c-.32 1.164-.541 1.976-.638 2.578-.1.625-.025.813.015.872a.772.772 0 0 0 .289.262c.023.011.166.073.722-.137.533-.201 1.24-.569 2.267-1.103l.103-.054c.568-.297 1.025-.535 1.526-.589.185-.02.371-.02.556 0 .5.053.958.292 1.526.589l.103.054c1.026.534 1.734.902 2.267 1.103.556.21.7.148.722.137a.773.773 0 0 0 .29-.262c.04-.06.114-.247.014-.872-.097-.602-.319-1.414-.637-2.578l-.523-1.906A7.714 7.714 0 0 1 12 16.75a7.714 7.714 0 0 1-4.04-1.135ZM12 7.035c-.058.1-.123.216-.199.353l-.098.176-.023.04c-.078.144-.208.382-.425.547-.221.168-.488.226-.643.26l-.044.009-.19.043c-.176.04-.319.072-.44.103.079.097.182.219.316.376l.13.152.03.034c.108.125.282.325.363.585.08.256.052.52.035.686a3.802 3.802 0 0 0-.005.047l-.02.203c-.018.188-.032.338-.042.46.105-.046.223-.1.364-.165l.179-.082.04-.02c.144-.067.393-.184.672-.184s.528.117.672.185l.04.019.179.082c.14.065.26.12.364.165-.01-.122-.024-.272-.042-.46l-.02-.203a3.802 3.802 0 0 0-.005-.047c-.017-.167-.045-.43.035-.686.08-.26.255-.46.363-.585l.03-.034.13-.152c.134-.157.237-.279.316-.376-.121-.03-.264-.063-.44-.103l-.19-.043-.044-.01c-.155-.033-.422-.091-.643-.26-.217-.164-.347-.402-.425-.545l-.023-.041-.098-.176c-.076-.137-.14-.253-.199-.354ZM11.014 5.8c.172-.225.484-.55.986-.55s.814.325.986.55c.165.214.33.511.5.816l.023.041.098.177.057.1.099.023.19.043.048.01c.327.075.653.148.903.247.276.109.65.32.795.785.142.455-.037.841-.193 1.09-.145.23-.365.486-.59.749l-.03.035-.13.153-.082.097c.002.036.007.078.012.135l.02.203.004.046c.034.352.067.692.055.964-.012.286-.08.718-.468 1.011-.4.304-.84.238-1.12.157-.258-.073-.563-.214-.87-.355l-.043-.02-.18-.083-.084-.039-.085.04-.179.082-.044.02c-.306.141-.611.282-.869.355-.28.08-.72.147-1.12-.157-.387-.293-.456-.725-.468-1.01-.012-.273.02-.613.055-.965l.004-.046.02-.203.013-.135a9.946 9.946 0 0 0-.083-.097l-.13-.153-.03-.035c-.225-.263-.445-.52-.59-.75-.156-.248-.335-.634-.193-1.09.144-.463.519-.675.795-.784.25-.099.576-.172.903-.246l.047-.01.191-.044.1-.023.056-.1.098-.177.023-.041c.17-.305.335-.602.5-.816Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6Z" clipRule="evenodd" /><path fill="currentColor" d="m7.093 15.941-.379 1.382c-.628 2.292-.942 3.438-.523 4.065.147.22.344.396.573.513.652.332 1.66-.193 3.675-1.243.67-.35 1.006-.524 1.362-.562a1.87 1.87 0 0 1 .398 0c.356.038.691.213 1.362.562 2.015 1.05 3.023 1.575 3.675 1.243.229-.117.426-.293.573-.513.42-.627.105-1.773-.523-4.065l-.379-1.382A8.461 8.461 0 0 1 12 17.5a8.46 8.46 0 0 1-4.907-1.559Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M12 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6Z" clipRule="evenodd" /><path fill="currentColor" d="M6.714 17.323 7.351 15 8 13h8l.649 2 .637 2.323c.628 2.292.942 3.438.523 4.065-.147.22-.344.396-.573.513-.652.332-1.66-.193-3.675-1.243-.67-.35-1.006-.524-1.362-.562a1.87 1.87 0 0 0-.398 0c-.356.038-.691.213-1.362.562-2.015 1.05-3.023 1.575-3.675 1.243a1.521 1.521 0 0 1-.573-.513c-.42-.627-.105-1.773.523-4.065Z" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MedalRibbonStar