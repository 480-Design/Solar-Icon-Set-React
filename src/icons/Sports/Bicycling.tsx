import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Bicycling = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={15} cy={4} r={2} stroke="currentColor" strokeWidth={1.5} /><circle cx={6} cy={18} r={3} stroke="currentColor" strokeWidth={1.5} /><circle cx={18} cy={18} r={3} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M18.5 10h-2.026c-1.22 0-1.831 0-2.38-.227-.55-.227-.983-.657-1.85-1.518l-.576-.574c-.785-.78-1.178-1.17-1.642-1.127-.465.042-.78.497-1.411 1.406M12 18l.057-.359c.235-1.47.352-2.204.024-2.804-.328-.6-1.01-.898-2.374-1.493L8.23 12.7c-1.032-.45-1.549-.675-1.678-1.13-.05-.18-.031-.36.05-.57" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={15} cy={4} r={2} stroke="currentColor" strokeWidth={1.5} /><circle cx={6} cy={18} r={3} stroke="currentColor" strokeWidth={1.5} opacity={0.4} /><circle cx={18} cy={18} r={3} stroke="currentColor" strokeWidth={1.5} opacity={0.4} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M18.5 10h-2.026c-1.22 0-1.831 0-2.38-.227-.55-.227-.983-.657-1.85-1.518l-.576-.574c-.785-.78-1.178-1.17-1.642-1.127-.465.042-.78.497-1.411 1.406L7.388 9.727c-.642.925-.963 1.388-.835 1.843.13.455.646.68 1.678 1.13l1.476.644c1.364.595 2.046.893 2.374 1.493.328.6.21 1.335-.024 2.804L12 18" /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><circle cx={15} cy={4} r={2} stroke="currentColor" strokeWidth={1.5} /><circle cx={6} cy={18} r={3} stroke="currentColor" strokeWidth={1.5} /><circle cx={18} cy={18} r={3} stroke="currentColor" strokeWidth={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M18.5 10h-2.026c-1.22 0-1.831 0-2.38-.227-.55-.227-.983-.657-1.85-1.518l-.576-.574c-.785-.78-1.178-1.17-1.642-1.127-.465.042-.78.497-1.411 1.406L7.388 9.727c-.642.925-.963 1.388-.835 1.843.13.455.646.68 1.678 1.13l1.476.644c1.364.595 2.046.893 2.374 1.493.328.6.21 1.335-.024 2.804L12 18" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M15 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Zm-.089 3.115.035.035.578.574c.909.903 1.225 1.2 1.605 1.356.38.157.814.17 2.095.17H18.5a.75.75 0 0 1 0 1.5H16.332c-1.083 0-1.836 0-2.525-.283-.689-.284-1.222-.815-1.99-1.58l-.1-.1-.578-.573c-.409-.406-.66-.653-.86-.803a.765.765 0 0 0-.185-.11.766.766 0 0 0-.162.14c-.17.186-.373.473-.701.947l-1.227 1.767c-.334.482-.537.777-.652 1.007a.773.773 0 0 0-.076.204.774.774 0 0 0 .172.133c.218.135.546.28 1.083.514l1.516.662c.648.282 1.194.52 1.614.767.447.262.825.572 1.078 1.035.253.464.311.949.29 1.466-.019.487-.113 1.076-.224 1.774l-.064.401a.75.75 0 1 1-1.482-.236l.058-.359c.12-.752.198-1.252.214-1.64.014-.367-.033-.549-.108-.686-.075-.136-.202-.275-.52-.46-.334-.197-.797-.4-1.496-.705l-1.522-.664c-.476-.208-.905-.395-1.226-.593-.348-.215-.69-.515-.827-1-.138-.486-.004-.92.18-1.286.168-.336.435-.72.731-1.148l.029-.041 1.227-1.768.028-.04c.29-.42.553-.798.806-1.07.275-.296.63-.57 1.125-.615.495-.045.893.16 1.217.402.297.222.624.546.986.906ZM6 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM2.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM14.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M17 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" /><path fill="currentColor" fillRule="evenodd" d="m12.161 7.115.613.609c.909.903 1.225 1.2 1.605 1.356.38.157.814.17 2.095.17H18.5a.75.75 0 0 1 0 1.5H16.332c-1.083 0-1.836 0-2.525-.283-.689-.284-1.222-.815-1.99-1.58l-.1-.1-.578-.573c-.409-.406-.66-.653-.86-.803a.765.765 0 0 0-.185-.11.766.766 0 0 0-.162.14c-.17.186-.373.473-.701.947l-1.227 1.767c-.334.482-.537.777-.652 1.007a.773.773 0 0 0-.076.204.774.774 0 0 0 .172.133c.218.135.546.28 1.083.514l1.516.662c.648.282 1.194.52 1.614.767.447.262.825.572 1.078 1.035.253.464.311.949.29 1.466-.019.487-.113 1.076-.224 1.774l-.064.401a.75.75 0 1 1-1.482-.236l.058-.359c.12-.752.198-1.252.214-1.64.014-.367-.033-.549-.108-.686-.075-.136-.202-.275-.52-.46-.334-.197-.797-.4-1.496-.705l-1.476-.644-.046-.02c-.476-.208-.905-.395-1.226-.593-.348-.215-.69-.515-.827-1-.138-.486-.004-.92.18-1.286.168-.336.435-.72.731-1.148l.029-.041 1.227-1.768.028-.04c.29-.42.553-.798.806-1.07.275-.296.63-.57 1.125-.615.495-.045.893.16 1.217.402.297.222.624.546.986.906ZM6 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM2.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM14.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z" clipRule="evenodd" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M17 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" /><path fill="currentColor" fillRule="evenodd" d="m12.161 7.115.613.609c.91.903 1.226 1.2 1.606 1.356.38.157.813.17 2.095.17H18.5a.75.75 0 0 1 0 1.5h-2.167c-1.083 0-1.836 0-2.525-.283-.69-.284-1.223-.815-1.99-1.58l-.102-.1-.577-.573c-.409-.406-.66-.653-.86-.803a.765.765 0 0 0-.185-.11.766.766 0 0 0-.162.14c-.17.186-.372.473-.7.947l-1.228 1.767c-.334.482-.537.777-.652 1.007a.773.773 0 0 0-.076.204.774.774 0 0 0 .172.133c.218.135.546.28 1.083.514l1.516.662c.648.282 1.194.52 1.615.767.446.262.824.572 1.077 1.035.254.464.311.949.29 1.466-.019.487-.113 1.076-.224 1.774l-.064.401a.75.75 0 1 1-1.481-.236l.057-.359c.12-.752.198-1.252.214-1.64.015-.367-.033-.549-.108-.686-.075-.136-.202-.275-.52-.46-.334-.197-.797-.4-1.496-.705l-1.475-.644-.047-.02c-.476-.208-.905-.395-1.226-.593-.348-.215-.69-.515-.827-1-.137-.486-.004-.92.18-1.286.168-.336.435-.72.732-1.148l.028-.041L8 7.532l.028-.04c.291-.42.554-.798.806-1.07.275-.296.63-.57 1.125-.615.495-.045.893.16 1.217.402.298.222.624.546.986.906Z" clipRule="evenodd" /><g fill="currentColor" fillRule="evenodd" clipRule="evenodd" opacity={0.5}><path d="M18 14.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM6 14.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" /></g></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Bicycling