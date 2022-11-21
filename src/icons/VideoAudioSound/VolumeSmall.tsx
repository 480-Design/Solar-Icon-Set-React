import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const VolumeSmall = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M18 9s.5.9.5 3-.5 3-.5 3M1.959 8.577a3.215 3.215 0 0 1 1.381-1.3C3.94 7 4.626 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295.923.648.993 2.157 1.133 5.174A68.21 68.21 0 0 1 15.5 12c0 .532-.035 1.488-.087 2.605-.14 3.018-.21 4.526-1.133 5.175a2.313 2.313 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151L8.6 17.78c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.215 3.215 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395-.011-.179-.02-.356-.026-.528" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M1.535 10.971c.073-1.208.11-1.813.424-2.394a3.215 3.215 0 0 1 1.38-1.3C3.94 7 4.627 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295.922.648.993 2.157 1.133 5.174A68.21 68.21 0 0 1 15.5 12c0 .532-.035 1.488-.087 2.605-.14 3.018-.21 4.526-1.133 5.175a2.314 2.314 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151L8.6 17.78c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.215 3.215 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17.127 17.127 0 0 1 1.5 12c0-.323.013-.671.035-1.029Z" stroke="currentColor" strokeWidth={1.5} /><path opacity={0.5} d="M18 9s.5.9.5 3-.5 3-.5 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M1.535 10.971c.073-1.208.11-1.813.424-2.394a3.215 3.215 0 0 1 1.38-1.3C3.94 7 4.627 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295.922.648.993 2.157 1.133 5.174A68.21 68.21 0 0 1 15.5 12c0 .532-.035 1.488-.087 2.605-.14 3.018-.21 4.526-1.133 5.175a2.314 2.314 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151L8.6 17.78c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.215 3.215 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17.127 17.127 0 0 1 1.5 12c0-.323.013-.671.035-1.029Z" stroke="currentColor" strokeWidth={1.5} /><path d="M18 9s.5.9.5 3-.5 3-.5 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.14 4.91c-.714.347-1.62.942-2.909 1.792l-.219.144-.05.033c-.38.25-.643.424-.931.552a3.75 3.75 0 0 1-.89.267c-.31.052-.626.052-1.082.052H6c-1.444 0-1.93.016-2.345.208a2.47 2.47 0 0 0-1.036.975c-.218.405-.259.82-.336 2.084-.02.347-.033.68-.033.983 0 .303.012.636.033.983.077 1.264.118 1.68.336 2.084.209.389.635.79 1.036.975.414.192.901.208 2.345.208h.06c.455 0 .77 0 1.081.052.307.052.605.142.89.267.288.128.552.301.932.552l.05.033.218.144c1.29.85 2.195 1.445 2.91 1.792.711.346 1.068.36 1.317.275.137-.047.272-.115.39-.199.217-.152.415-.447.553-1.218.14-.775.191-1.847.263-3.377.052-1.12.086-2.06.086-2.571 0-.512-.034-1.451-.086-2.57-.072-1.531-.123-2.603-.262-3.378-.14-.771-.337-1.066-.553-1.218a1.569 1.569 0 0 0-.391-.2c-.25-.084-.606-.07-1.318.276Zm-.655-1.35c.826-.4 1.64-.624 2.457-.345.272.093.534.226.769.391.706.497 1.005 1.28 1.167 2.18.159.884.213 2.056.281 3.516l.003.058c.052 1.115.088 2.088.088 2.64s-.036 1.525-.088 2.64l-.003.058c-.068 1.46-.122 2.632-.281 3.516-.162.9-.461 1.683-1.167 2.18a3.066 3.066 0 0 1-.769.39c-.818.28-1.631.057-2.457-.345-.814-.395-1.8-1.046-3.032-1.857l-.267-.176c-.447-.295-.602-.394-.76-.464-.171-.076-.35-.13-.535-.16-.171-.03-.354-.032-.89-.032h-.162c-1.217 0-2.062.001-2.814-.347a3.962 3.962 0 0 1-1.727-1.624c-.392-.729-.438-1.49-.504-2.575l-.008-.13A17.876 17.876 0 0 1 .75 12c0-.341.014-.706.036-1.074l.008-.13C.86 9.712.906 8.95 1.298 8.22a3.962 3.962 0 0 1 1.727-1.624c.752-.348 1.597-.348 2.814-.347H6c.537 0 .72-.002.891-.031a2.25 2.25 0 0 0 .534-.16c.16-.07.314-.17.761-.465l.267-.176c1.231-.811 2.218-1.462 3.032-1.857Z" fill="currentColor" /><path d="M18.656 8.637a.751.751 0 0 0-1.317.718c.007.014.025.053.043.097.035.087.087.235.141.447.11.424.227 1.111.227 2.101s-.118 1.677-.227 2.101c-.054.212-.106.36-.141.447l-.043.097a.75.75 0 0 0 .297 1.01c.362.202.835.04 1.036-.322l.027-.053a5.167 5.167 0 0 0 .278-.806c.14-.551.273-1.364.273-2.474s-.132-1.923-.273-2.474a5.17 5.17 0 0 0-.203-.631 2.965 2.965 0 0 0-.075-.175l-.043-.083Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.003 11.716c.04-1.843.059-2.764.697-3.552.117-.144.288-.315.432-.431.785-.636 1.822-.636 3.897-.636.741 0 1.112 0 1.465-.092.073-.02.146-.042.218-.067.345-.121.654-.33 1.273-.746 2.442-1.645 3.662-2.467 4.687-2.11.196.069.387.168.556.29.886.635.953 2.115 1.088 5.073.05 1.096.084 2.034.084 2.555 0 .521-.034 1.46-.084 2.555-.134 2.958-.202 4.438-1.088 5.073-.17.122-.36.221-.556.29-1.025.357-2.245-.465-4.687-2.11-.619-.416-.928-.625-1.273-.746a2.815 2.815 0 0 0-.218-.067c-.353-.092-.724-.092-1.465-.092-2.075 0-3.112 0-3.897-.636a3.21 3.21 0 0 1-.432-.43c-.638-.79-.658-1.71-.697-3.553a13.443 13.443 0 0 1 0-.569Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M19.45 8.416a.712.712 0 0 1 .98.286l-.63.357.63-.357v.002l.002.003.004.007.01.018a1.975 1.975 0 0 1 .098.224c.056.144.126.349.193.619.136.54.263 1.337.263 2.425 0 1.089-.127 1.886-.263 2.426-.067.27-.137.475-.193.619a2.921 2.921 0 0 1-.099.223l-.009.018-.004.007-.001.003v.002s-.002.001-.631-.356l.63.357a.712.712 0 0 1-.98.286.744.744 0 0 1-.284-.991l.005-.01c.006-.014.019-.043.035-.085.034-.086.084-.23.137-.438.104-.416.217-1.09.217-2.06 0-.971-.113-1.645-.217-2.06a3.657 3.657 0 0 0-.172-.524l-.005-.01a.744.744 0 0 1 .284-.991Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M3.003 11.716c.04-1.843.059-2.764.697-3.552.117-.144.288-.315.432-.431.785-.636 1.822-.636 3.897-.636.741 0 1.112 0 1.465-.092.073-.02.146-.042.218-.067.345-.121.654-.33 1.273-.746 2.442-1.645 3.662-2.467 4.687-2.11.196.069.387.168.556.29.886.635.953 2.115 1.088 5.073.05 1.096.084 2.034.084 2.555 0 .521-.034 1.46-.084 2.555-.134 2.958-.202 4.438-1.088 5.073-.17.122-.36.221-.556.29-1.025.357-2.245-.465-4.687-2.11-.619-.416-.928-.625-1.273-.746a2.815 2.815 0 0 0-.218-.067c-.353-.092-.724-.092-1.465-.092-2.075 0-3.112 0-3.897-.636a3.21 3.21 0 0 1-.432-.43c-.638-.79-.658-1.71-.697-3.553a13.443 13.443 0 0 1 0-.569Z" fill="currentColor" /><path opacity={0.5} fillRule="evenodd" clipRule="evenodd" d="M19.45 8.416a.712.712 0 0 1 .98.286l-.63.357.63-.357.001.002.002.003.003.007.01.018a1.975 1.975 0 0 1 .098.224c.056.144.126.349.194.619.135.54.262 1.337.262 2.425 0 1.089-.127 1.886-.262 2.426-.068.27-.138.475-.194.619a2.93 2.93 0 0 1-.098.223l-.01.018-.003.007-.002.003v.002s-.001.001-.63-.356l.629.357a.712.712 0 0 1-.98.286.744.744 0 0 1-.284-.991l.005-.01.036-.085a3.66 3.66 0 0 0 .136-.438c.104-.416.217-1.09.217-2.06 0-.971-.113-1.645-.217-2.061a3.657 3.657 0 0 0-.172-.523l-.005-.01a.744.744 0 0 1 .285-.991Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default VolumeSmall