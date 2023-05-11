import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../../IconWrapper'; const Plain2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M20.628 9.094c1.248-3.745 1.873-5.618.884-6.606-.988-.989-2.86-.364-6.606.884L10.24 4.927M5.575 6.482c-2.082.694-3.123 1.041-3.439 1.804-.074.18-.12.37-.133.564-.059.824.717 1.6 2.269 3.151l.283.283c.254.254.382.382.478.523.19.28.297.607.31.945.008.171-.019.35-.072.705-.196 1.304-.294 1.956-.179 2.458.23 1 1.004 1.785 2 2.028.5.123 1.154.034 2.46-.143l.072-.01c.368-.05.552-.075.729-.064.32.019.63.124.898.303.147.098.279.23.541.492l.252.252c1.51 1.51 2.265 2.265 3.066 2.226.22-.011.438-.063.64-.152.734-.323 1.072-1.336 1.747-3.362l1.566-4.696M6 18l3.75-3.75M21 3l-8.5 8.5" /></svg>, LineDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="m17.497 18.485 3.131-9.391c1.248-3.745 1.873-5.618.884-6.606-.988-.989-2.86-.364-6.606.884l-9.331 3.11c-2.082.694-3.123 1.041-3.439 1.804-.074.18-.12.37-.133.564-.059.824.717 1.6 2.269 3.151l.283.283c.254.254.382.382.478.523.19.28.297.607.31.945.008.171-.019.35-.072.705-.196 1.304-.294 1.956-.179 2.458.23 1 1.004 1.785 2 2.028.5.123 1.154.034 2.46-.143l.072-.01c.368-.05.552-.075.729-.064.32.019.63.124.898.303.147.098.279.23.541.492l.252.252c1.51 1.51 2.265 2.265 3.066 2.226.22-.011.438-.063.64-.152.734-.323 1.072-1.336 1.747-3.362Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M6 18 21 3" opacity={0.5} /></svg>, Linear: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path stroke="currentColor" strokeWidth={1.5} d="m17.497 18.485 3.131-9.391c1.248-3.745 1.873-5.618.884-6.606-.988-.989-2.86-.364-6.606.884l-9.331 3.11c-2.082.694-3.123 1.041-3.439 1.804-.074.18-.12.37-.133.564-.059.824.717 1.6 2.269 3.151l.283.283c.254.254.382.382.478.523.19.28.297.607.31.945.008.171-.019.35-.072.705-.196 1.304-.294 1.956-.179 2.458.23 1 1.004 1.785 2 2.028.5.123 1.154.034 2.46-.143l.072-.01c.368-.05.552-.075.729-.064.32.019.63.124.898.303.147.098.279.23.541.492l.252.252c1.51 1.51 2.265 2.265 3.066 2.226.22-.011.438-.063.64-.152.734-.323 1.072-1.336 1.747-3.362Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M6 18 21 3" /></svg>, Outline: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M19.374 2.83c-.992.176-2.334.62-4.23 1.253l-9.332 3.11c-1.06.354-1.787.598-2.294.841-.503.242-.637.414-.689.539a1.06 1.06 0 0 0-.078.33c-.01.134.033.348.375.79.345.444.886.987 1.676 1.777l.283.283.04.04c.216.216.391.39.528.593.269.395.421.858.44 1.336.01.244-.027.489-.072.79l-.009.056c-.099.662-.168 1.124-.2 1.485-.032.359-.02.556.011.693.023.097.052.192.088.282L20.189 2.75c-.214-.004-.48.02-.815.08Zm2.669-.873c.765.766.804 1.81.604 2.931-.198 1.114-.68 2.56-1.286 4.378l-3.168 9.504c-.324.972-.59 1.768-.87 2.357-.287.602-.656 1.136-1.27 1.407a2.56 2.56 0 0 1-.906.213c-.671.033-1.24-.28-1.765-.69-.515-.4-1.108-.994-1.832-1.718l-.288-.288c-.284-.284-.357-.352-.428-.4a1.06 1.06 0 0 0-.526-.177c-.087-.005-.185.005-.583.059l-.096.013c-.633.086-1.141.155-1.553.185-.42.032-.799.03-1.162-.06a3.464 3.464 0 0 1-2.553-2.589c-.083-.364-.08-.743-.043-1.162.036-.411.113-.919.207-1.55l.004-.024c.058-.385.069-.481.066-.565a1.06 1.06 0 0 0-.183-.553c-.047-.069-.112-.139-.388-.414l-.32-.32c-.744-.744-1.353-1.354-1.763-1.882-.42-.54-.735-1.127-.686-1.816a2.56 2.56 0 0 1 .188-.797c.265-.639.809-1.021 1.426-1.317.602-.29 1.42-.562 2.419-.895l9.445-3.148c1.818-.606 3.264-1.089 4.378-1.287 1.122-.2 2.166-.16 2.931.605ZM21.25 3.81 6.953 18.107c.102.044.208.08.318.107.137.034.334.048.693.022.361-.027.825-.09 1.487-.18l.072-.01.058-.008c.311-.042.565-.076.817-.061a2.56 2.56 0 0 1 1.27.428c.21.14.391.322.613.544l.042.042.251.25c.77.77 1.298 1.297 1.73 1.634.43.335.64.38.77.374.129-.006.256-.036.374-.088.12-.053.286-.187.52-.68.237-.494.474-1.201.818-2.233l3.13-9.392c.633-1.897 1.078-3.238 1.255-4.23.06-.336.083-.602.08-.816Z" clipRule="evenodd" /></svg>, Bold: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m17.497 18.485 3.131-9.391c.791-2.373 1.331-3.994 1.37-5.115.013-.377-.414-.503-.68-.236l-14.46 14.46c-.233.233-.177.626.14.716.031.008.063.017.095.024.5.123 1.153.034 2.46-.143l.07-.01c.369-.05.553-.075.73-.064.32.02.63.124.898.303.147.098.279.23.541.492l.252.252c1.51 1.51 2.265 2.265 3.066 2.226.22-.011.438-.063.64-.151.734-.324 1.072-1.337 1.747-3.363ZM14.906 3.372l-9.331 3.11c-2.082.694-3.123 1.041-3.439 1.804-.074.18-.12.37-.133.564-.059.824.717 1.6 2.269 3.151l.283.283c.254.255.382.382.478.524.19.28.297.606.31.944.008.171-.019.35-.072.705-.196 1.304-.294 1.956-.179 2.458l.013.052c.081.325.48.387.717.15L20.257 2.683c.267-.267.141-.694-.236-.68-1.121.038-2.742.578-5.115 1.369Z" /></svg>, BoldDuotone: <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 24 24" {...props}><path fill="currentColor" fillRule="evenodd" d="M5.796 18.204 21.512 2.488c-.988-.989-2.86-.364-6.606.884l-9.331 3.11c-2.082.694-3.123 1.041-3.439 1.804-.074.18-.12.37-.133.564-.059.824.717 1.6 2.269 3.151l.283.283c.254.254.382.382.478.523.19.28.297.607.31.945.008.171-.019.35-.072.705-.196 1.304-.294 1.956-.179 2.458.114.495.362.938.704 1.289Z" clipRule="evenodd" /><path fill="currentColor" d="m17.498 18.486 3.13-9.392c1.25-3.745 1.873-5.617.885-6.606L5.797 18.204c.348.356.794.617 1.296.74.5.122 1.153.033 2.46-.144l.071-.01c.369-.05.553-.075.73-.064.32.02.63.124.898.303.147.099.278.23.541.493l.251.251c1.51 1.51 2.266 2.265 3.067 2.226.22-.01.438-.062.64-.151.734-.323 1.072-1.336 1.747-3.362Z" opacity={0.5} /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default Plain2