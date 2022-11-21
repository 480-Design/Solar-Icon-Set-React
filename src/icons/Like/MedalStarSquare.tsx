import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const MedalStarSquare = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6M11.146 11.023c.38-.682.57-1.023.854-1.023.284 0 .474.34.854 1.023l.098.176c.108.194.162.29.246.354.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532.088.283-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354-.032.104-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135-.104 0-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438-.032-.103-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135.084-.064.138-.16.246-.354l.098-.176Z" stroke="currentColor" strokeWidth={1.5} /><path d="M15.578 20.211c-1.756.878-2.634 1.317-3.578 1.317s-1.822-.439-3.578-1.317c-2.151-1.076-3.227-1.614-3.825-2.58C4 16.664 4 15.46 4 13.056V12c0-2.828 0-4.243.879-5.121C5.757 6 7.172 6 10 6h4c2.828 0 4.243 0 5.121.879C20 7.757 20 9.172 20 12v1.056c0 2.405 0 3.608-.597 4.575a3.078 3.078 0 0 1-.403.517" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M17 6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6M11.146 11.023c.38-.682.57-1.023.854-1.023.284 0 .474.34.854 1.023l.098.176c.108.194.162.29.246.354.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532.088.283-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354-.032.104-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135-.104 0-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438-.032-.103-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135.084-.064.138-.16.246-.354l.098-.176Z" stroke="currentColor" strokeWidth={1.5} /><path d="M14 6h-4c-2.828 0-4.243 0-5.121.879C4 7.757 4 9.172 4 12v1.056c0 2.405 0 3.608.597 4.575.598.966 1.674 1.504 3.825 2.58 1.756.878 2.634 1.317 3.578 1.317s1.822-.439 3.578-1.317c2.151-1.076 3.227-1.614 3.825-2.58.597-.967.597-2.17.597-4.575V12c0-2.828 0-4.243-.879-5.121C18.243 6 16.828 6 14 6Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M17 6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6M11.146 11.023c.38-.682.57-1.023.854-1.023.284 0 .474.34.854 1.023l.098.176c.108.194.162.29.246.354.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532.088.283-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354-.032.104-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135-.104 0-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438-.032-.103-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135.084-.064.138-.16.246-.354l.098-.176Z" stroke="currentColor" strokeWidth={1.5} /><path d="M14 6h-4c-2.828 0-4.243 0-5.121.879C4 7.757 4 9.172 4 12v1.056c0 2.405 0 3.608.597 4.575.598.966 1.674 1.504 3.825 2.58 1.756.878 2.634 1.317 3.578 1.317s1.822-.439 3.578-1.317c2.151-1.076 3.227-1.614 3.825-2.58.597-.967.597-2.17.597-4.575V12c0-2.828 0-4.243-.879-5.121C18.243 6 16.828 6 14 6Z" stroke="currentColor" strokeWidth={1.5} /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.948 1.25h2.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.064.476.077 1.05.08 1.719.744.14 1.381.404 1.902.924.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v1.151c0 1.169 0 2.103-.079 2.864-.081.787-.251 1.452-.63 2.065-.38.614-.898 1.063-1.565 1.488-.646.41-1.482.828-2.527 1.35l-.036.019-.169.084c-1.591.797-2.62 1.312-3.744 1.312s-2.153-.515-3.744-1.311l-.17-.085-.035-.018c-1.045-.523-1.881-.94-2.527-1.351-.667-.425-1.185-.875-1.565-1.488-.379-.613-.549-1.278-.63-2.065-.079-.76-.079-1.695-.079-2.864v-1.15c0-1.368 0-2.47.117-3.338.12-.9.38-1.658.981-2.26.52-.52 1.158-.784 1.903-.924.002-.67.015-1.243.079-1.718.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08ZM7.752 5.276c.638-.026 1.367-.026 2.193-.026h4.11c.825 0 1.555 0 2.193.026-.004-.583-.017-1.02-.065-1.37-.062-.462-.169-.66-.3-.79-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066h-2c-.964 0-1.612.002-2.095.067-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788-.047.351-.06.788-.064 1.37Zm-.944 1.577c-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4-.101.754-.103 1.756-.103 3.191v1.056c0 1.218 0 2.075.07 2.75.069.657.197 1.077.415 1.43.219.354.537.656 1.095 1.011.572.364 1.338.748 2.428 1.293 1.823.912 2.516 1.238 3.242 1.238s1.42-.326 3.242-1.238c1.09-.544 1.856-.929 2.428-1.293.558-.355.876-.657 1.095-1.01.218-.354.346-.774.414-1.431.07-.675.071-1.532.071-2.75V12c0-1.435-.002-2.437-.103-3.192-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.4-.556-.755-.101-1.756-.103-3.191-.103h-4c-1.435 0-2.437.002-3.192.103ZM12 11.034c-.058.101-.123.217-.199.354l-.098.176-.023.04c-.078.144-.208.382-.425.547-.221.168-.488.226-.643.26l-.044.009-.19.043c-.176.04-.319.072-.44.103.079.097.182.219.316.375l.13.153.03.034c.108.125.282.325.363.585.08.256.052.52.035.686a3.802 3.802 0 0 0-.005.047l-.02.203c-.018.188-.032.338-.042.46.105-.046.223-.1.364-.165l.179-.082.04-.02c.144-.067.393-.184.672-.184s.528.117.672.185l.04.019.179.082c.14.065.26.12.364.165-.01-.122-.024-.272-.042-.46l-.02-.203a4.013 4.013 0 0 0-.005-.047c-.017-.167-.045-.43.035-.686.08-.26.255-.46.363-.585l.03-.034.13-.152c.134-.157.237-.279.316-.376-.121-.03-.264-.063-.44-.103l-.19-.043-.044-.01c-.155-.033-.422-.091-.643-.26-.217-.164-.347-.402-.425-.545l-.023-.041-.098-.176c-.076-.137-.14-.253-.199-.354ZM11.014 9.8c.172-.225.484-.55.986-.55s.814.325.986.55c.165.214.33.511.5.816l.023.041.098.177.057.1.099.023.19.043.048.01c.327.075.653.148.903.247.276.109.65.32.795.785.142.455-.037.841-.193 1.09-.145.23-.365.486-.59.749l-.03.035-.13.153-.082.097c.002.036.007.078.012.135l.02.203.004.046c.034.352.067.692.055.964-.012.286-.08.718-.468 1.011-.4.304-.84.238-1.12.157-.258-.073-.563-.214-.87-.355l-.043-.02-.18-.083-.084-.039-.085.04-.179.082-.044.02c-.306.141-.611.282-.869.355-.28.08-.72.147-1.12-.157-.387-.293-.456-.725-.468-1.01-.012-.273.02-.613.055-.965l.004-.046.02-.203.013-.135a9.946 9.946 0 0 0-.083-.097l-.13-.153a48.37 48.37 0 0 1-.03-.035c-.225-.263-.445-.52-.59-.75-.156-.248-.335-.634-.193-1.09.144-.463.519-.675.795-.784.25-.099.576-.172.903-.246l.047-.01.191-.044.1-.023.056-.1.098-.177.023-.041c.17-.305.335-.602.5-.816Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10 6h4c2.828 0 4.243 0 5.121.879C20 7.757 20 9.172 20 12v1.056c0 2.405 0 3.608-.597 4.575-.598.966-1.674 1.504-3.825 2.58-1.756.878-2.634 1.317-3.578 1.317s-1.822-.439-3.578-1.317c-2.151-1.076-3.227-1.614-3.825-2.58C4 16.664 4 15.46 4 13.056V12c0-2.828 0-4.243.879-5.121C5.757 6 7.172 6 10 6Zm2 4c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 10.34 12.284 10 12 10Z" fill="currentColor" /><path d="M11 2h2c1.886 0 2.828 0 3.414.586.414.414.535 1.006.571 1.983-.82-.07-1.791-.07-2.886-.069H9.9c-1.095 0-2.066 0-2.886.069.035-.977.157-1.57.57-1.983C8.172 2 9.116 2 11 2Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6v2h10V6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M10 6h4c2.828 0 4.243 0 5.121.879C20 7.757 20 9.172 20 12v1.056c0 2.405 0 3.608-.597 4.575-.598.966-1.674 1.504-3.825 2.58-1.756.878-2.634 1.317-3.578 1.317s-1.822-.439-3.578-1.317c-2.151-1.076-3.227-1.614-3.825-2.58C4 16.664 4 15.46 4 13.056V12c0-2.828 0-4.243.879-5.121C5.757 6 7.172 6 10 6Zm2 4c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 10.34 12.284 10 12 10Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default MedalStarSquare