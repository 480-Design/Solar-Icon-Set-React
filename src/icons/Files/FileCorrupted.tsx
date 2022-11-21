import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const FileCorrupted = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.25 2.5V5h1.5V2.5h-1.5ZM18 10.75h4v-1.5h-4v1.5ZM12.25 5c0 1.157-.002 2.1.098 2.843.103.764.325 1.426.854 1.955l1.06-1.06c-.203-.204-.347-.497-.427-1.095C13.752 7.024 13.75 6.2 13.75 5h-1.5ZM18 9.25c-1.2 0-2.024-.002-2.643-.085-.598-.08-.89-.224-1.094-.428l-1.061 1.061c.529.529 1.19.751 1.955.854.742.1 1.686.098 2.843.098v-1.5Z" fill="currentColor" /><path d="M14.004 21.25a.75.75 0 0 0 0 1.5v-1.5Zm-4.001 1.5a.75.75 0 0 0 0-1.5v1.5ZM2.75 10a.75.75 0 0 0-1.5 0h1.5Zm12.647-5.946-.501.557.501-.557Zm3.96 3.563.502-.558-.502.558Zm2.303 2.537-.685.305.685-.305ZM3.172 20.828l.53-.53-.53.53Zm17.663 0-.53-.53.53.53ZM3.172 3.172l.53.53-.53-.53Zm15.119 9.685.416-.624-.416.624Zm3.43 0-.416-.624.416.624Zm-12.004 0-.416-.624.416.624Zm2.572 0 .416-.624-.416.624Zm-6.002 0-.416.624.416-.624Zm-2.572 0-.416-.624.416.624Zm14.576 4 .416-.624-.416.624Zm3.43 0 .416.624-.416-.624Zm-6.002 0-.416-.624.416.624Zm-3.43 0 .416-.624-.416.624Zm-2.572 0-.416-.624.416.624Zm6.002-4-.416-.624.416.624Zm-9.432 4-.416.624.416-.624Zm-2.572 0-.416-.624.416.624Zm-.626.418.416.624-.416-.625Zm-.81 1.84.729-.174-.73.174Zm19.693-2.117.749.03-.75-.03Zm.028-4.67.75-.015-.75.014ZM2.214 18.072l.698.274-.698-.274Zm-.208-5.83.746-.084-.746.083Zm1.454.777.344.666-.344-.666ZM1.355 5.927a.75.75 0 0 0 1.493.146l-1.493-.146ZM2.75 11.94V10h-1.5v1.94h1.5ZM14.896 4.61l3.96 3.563 1.003-1.115-3.96-3.563-1.003 1.115Zm3.96 3.563c1.354 1.218 1.853 1.688 2.12 2.285l1.37-.61c-.427-.957-1.232-1.66-2.487-2.79l-1.003 1.115ZM10.032 2.75c1.583 0 2.18.012 2.712.216l.537-1.4c-.852-.328-1.78-.316-3.249-.316v1.5Zm5.867.746c-1.086-.977-1.766-1.604-2.618-1.93l-.537 1.4c.533.204.982.592 2.152 1.645l1.003-1.115ZM10.003 21.25c-1.908 0-3.263-.002-4.291-.14-1.006-.135-1.586-.389-2.01-.812l-1.06 1.06c.748.75 1.697 1.081 2.87 1.239 1.151.155 2.626.153 4.49.153v-1.5Zm4 1.5c1.866 0 3.34.002 4.491-.153 1.173-.158 2.122-.49 2.87-1.238l-1.06-1.061c-.423.423-1.003.677-2.01.812-1.027.138-2.383.14-4.29.14v1.5Zm-3.97-21.5c-1.876 0-3.357-.002-4.513.153-1.177.158-2.13.49-2.878 1.238l1.06 1.061c.423-.423 1.005-.677 2.017-.812 1.033-.138 2.396-.14 4.313-.14v-1.5Zm7.842 12.231c1.29.86 2.971.86 4.262 0l-.832-1.248a2.342 2.342 0 0 1-2.598 0l-.832 1.248Zm-7.742 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0l.832 1.248Zm-4.262 0c1.29.86 2.971.86 4.262 0L9.3 12.233a2.342 2.342 0 0 1-2.598 0l-.832 1.248Zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0l.832 1.248Zm13.744 4c1.29.86 2.971.86 4.262 0l-.832-1.248a2.342 2.342 0 0 1-2.598 0l-.832 1.248Zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0l.832 1.248Zm-4.262 0c1.29.86 2.971.86 4.262 0l-.832-1.248a2.342 2.342 0 0 1-2.598 0l-.832 1.248Zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0l.832 1.248Zm6.002-4a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0l.832 1.248Zm-10.264 4c1.29.86 2.971.86 4.262 0L9.3 16.233a2.342 2.342 0 0 1-2.598 0l-.832 1.248Zm6.002-4c1.29.86 2.971.86 4.262 0l-.832-1.248a2.342 2.342 0 0 1-2.598 0l-.832 1.248Zm-7.742 4a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0l.832 1.248Zm-.626.418.626-.418-.832-1.248-.626.417.832 1.249Zm-1.956 1.39c.195.818.526 1.503 1.093 2.07l1.06-1.061c-.325-.325-.547-.74-.694-1.357l-1.46.348Zm19.673-2.322c-.077 1.864-.33 2.743-.918 3.331l1.06 1.06c1.03-1.028 1.279-2.447 1.357-4.33l-1.499-.061Zm1.528-4.654c-.019-.992-.085-1.747-.404-2.464l-1.37.61c.187.421.256.912.274 1.882l1.5-.028Zm-.613 1.168c.386-.257.622-.695.613-1.168l-1.5.028c0-.047.023-.086.055-.108l.832 1.248Zm-19.464 3.17c-.239.158-.473.313-.657.47a1.697 1.697 0 0 0-.5.677l1.396.55a.063.063 0 0 1 .01-.019.498.498 0 0 1 .071-.07c.098-.084.244-.182.512-.36l-.832-1.249Zm.335 2.29a4.208 4.208 0 0 1-.103-.496c-.006-.066 0-.08.007-.098l-1.396-.549c-.217.554-.071 1.054.033 1.49l1.459-.347Zm19.129-1.46a.589.589 0 0 1-.915-.514l1.499.062a.911.911 0 0 0-1.416-.796l.832 1.248ZM1.25 11.94c0 .139-.001.277.01.385l1.492-.166-.001-.039-.001-.18h-1.5Zm2.049.293-.15.1c-.036.023-.042.025-.034.02l.69 1.333c.096-.05.21-.128.326-.205l-.832-1.248Zm-2.038.092a1.75 1.75 0 0 0 2.543 1.361l-.689-1.332a.25.25 0 0 1-.363-.195l-1.491.166Zm1.587-6.252c.121-1.234.383-1.9.854-2.371l-1.06-1.06c-.835.834-1.152 1.919-1.287 3.285l1.493.146Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M12.25 2.5V5h1.5V2.5h-1.5ZM18 10.75h4v-1.5h-4v1.5ZM12.25 5c0 1.157-.002 2.1.098 2.843.103.764.325 1.426.854 1.955l1.06-1.06c-.203-.204-.347-.497-.427-1.095C13.752 7.024 13.75 6.2 13.75 5h-1.5ZM18 9.25c-1.2 0-2.024-.002-2.643-.085-.598-.08-.89-.224-1.094-.428l-1.061 1.061c.529.529 1.19.751 1.955.854.742.1 1.686.098 2.843.098v-1.5Z" fill="currentColor" /><path d="m15.397 4.054-.501.557.501-.557Zm3.96 3.563-.501.557.501-.557Zm2.303 2.537-.685.305.685-.305ZM3.172 20.828l.53-.53-.53.53Zm17.663 0-.53-.53.53.53Zm-2.544-7.97.416-.625-.416.624Zm3.43 0-.416-.625.416.624Zm-12.004 0-.416-.625.416.624Zm2.572 0 .416-.625-.416.624Zm-6.002 0-.416.623.416-.624Zm-2.572 0-.416-.625.416.624Zm14.576 4 .416-.625-.416.624Zm3.43 0 .416.623-.416-.624Zm-6.002 0-.416-.625.416.624Zm-3.43 0 .416-.625-.416.624Zm-2.572 0-.416-.625.416.624Zm6.002-4-.416-.625.416.624Zm-9.432 4-.416.623.416-.624Zm-2.572 0-.416-.625.416.624Zm-.626.416.416.625-.416-.625Zm-.81 1.84.729-.173-.73.174Zm19.693-2.116.749.03-.75-.03Zm.028-4.67.75-.015-.75.014ZM2.214 18.072l.698.274-.698-.274Zm-.208-5.83.746-.084-.746.083Zm1.454.777.344.666-.344-.666Zm10.544 8.23h-4.001v1.5h4v-1.5ZM2.75 11.94V10h-1.5v1.94h1.5ZM14.896 4.61l3.96 3.563 1.003-1.115-3.96-3.563-1.003 1.115Zm3.96 3.563c1.354 1.218 1.853 1.688 2.12 2.285l1.37-.61c-.427-.957-1.232-1.66-2.487-2.79l-1.003 1.115ZM10.032 2.75c1.583 0 2.18.012 2.712.216l.537-1.4c-.852-.328-1.78-.316-3.249-.316v1.5Zm5.867.746c-1.086-.977-1.766-1.604-2.618-1.93l-.537 1.4c.533.204.982.592 2.152 1.645l1.003-1.115ZM10.003 21.25c-1.908 0-3.263-.002-4.291-.14-1.006-.135-1.586-.389-2.01-.812l-1.06 1.06c.748.75 1.697 1.081 2.87 1.239 1.151.155 2.626.153 4.49.153v-1.5Zm4 1.5c1.866 0 3.34.002 4.491-.153 1.173-.158 2.122-.49 2.87-1.238l-1.06-1.061c-.423.423-1.003.677-2.01.812-1.027.138-2.383.14-4.29.14v1.5ZM2.75 10c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008l-1.06-1.06C1.893 3.39 1.56 4.337 1.403 5.51 1.248 6.66 1.25 8.136 1.25 10h1.5Zm7.282-8.75c-1.875 0-3.356-.002-4.512.153-1.177.158-2.13.49-2.878 1.238l1.06 1.061c.423-.423 1.005-.677 2.017-.812 1.033-.138 2.396-.14 4.313-.14v-1.5Zm7.843 12.231c1.29.86 2.971.86 4.262 0l-.832-1.248a2.342 2.342 0 0 1-2.598 0l-.832 1.248Zm-7.742 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0l.832 1.248Zm-4.262 0c1.29.86 2.971.86 4.262 0L9.3 12.233a2.342 2.342 0 0 1-2.598 0l-.832 1.248Zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0l.832 1.248Zm13.744 4c1.29.86 2.971.86 4.262 0l-.832-1.248a2.342 2.342 0 0 1-2.598 0l-.832 1.248Zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0l.832 1.248Zm-4.262 0c1.29.86 2.971.86 4.262 0l-.832-1.248a2.342 2.342 0 0 1-2.598 0l-.832 1.248Zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0l.832 1.248Zm6.002-4a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0l.832 1.248Zm-10.264 4c1.29.86 2.971.86 4.262 0L9.3 16.233a2.342 2.342 0 0 1-2.598 0l-.832 1.248Zm6.002-4c1.29.86 2.971.86 4.262 0l-.832-1.248a2.342 2.342 0 0 1-2.598 0l-.832 1.248Zm-7.742 4a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0l.832 1.248Zm-.626.418.626-.418-.832-1.248-.626.417.832 1.249Zm-1.956 1.39c.195.818.526 1.503 1.093 2.07l1.06-1.061c-.325-.325-.547-.74-.694-1.357l-1.46.348Zm19.673-2.322c-.077 1.864-.33 2.743-.918 3.331l1.06 1.06c1.03-1.028 1.279-2.447 1.357-4.33l-1.499-.061Zm1.528-4.654c-.019-.992-.085-1.747-.404-2.464l-1.37.61c.187.421.256.912.274 1.882l1.5-.028Zm-.613 1.168c.386-.257.622-.695.613-1.168l-1.5.028c0-.047.023-.086.055-.108l.832 1.248Zm-19.464 3.17c-.239.158-.473.313-.657.47a1.697 1.697 0 0 0-.5.677l1.396.55a.063.063 0 0 1 .01-.019.498.498 0 0 1 .071-.07c.098-.084.244-.182.512-.36l-.832-1.249Zm.335 2.29a4.208 4.208 0 0 1-.103-.496c-.006-.066 0-.08.007-.098l-1.396-.549c-.217.554-.071 1.054.033 1.49l1.459-.347Zm19.129-1.46a.589.589 0 0 1-.915-.514l1.499.062a.911.911 0 0 0-1.416-.796l.832 1.248ZM1.25 11.94c0 .139-.001.277.01.385l1.492-.166-.001-.039-.001-.18h-1.5Zm2.049.293-.15.1c-.036.023-.042.025-.034.02l.69 1.333c.096-.05.21-.128.326-.205l-.832-1.248Zm-2.038.092a1.75 1.75 0 0 0 2.543 1.361l-.689-1.332a.25.25 0 0 1-.363-.195l-1.491.166Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.25 2.5V5h1.5V2.5h-1.5ZM18 10.75h4v-1.5h-4v1.5ZM12.25 5c0 1.157-.002 2.1.098 2.843.103.764.325 1.426.854 1.955l1.06-1.06c-.203-.204-.347-.497-.427-1.095C13.752 7.024 13.75 6.2 13.75 5h-1.5ZM18 9.25c-1.2 0-2.024-.002-2.643-.085-.598-.08-.89-.224-1.094-.428l-1.061 1.061c.529.529 1.19.751 1.955.854.742.1 1.686.098 2.843.098v-1.5Z" fill="currentColor" /><path d="m15.397 4.054-.501.557.501-.557Zm3.96 3.563-.501.557.501-.557Zm2.303 2.537-.685.305.685-.305ZM3.172 20.828l.53-.53-.53.53Zm17.663 0-.53-.53.53.53Zm-2.544-7.97.416-.625-.416.624Zm3.43 0-.416-.625.416.624Zm-12.004 0-.416-.625.416.624Zm2.572 0 .416-.625-.416.624Zm-6.002 0-.416.623.416-.624Zm-2.572 0-.416-.625.416.624Zm14.576 4 .416-.625-.416.624Zm3.43 0 .416.623-.416-.624Zm-6.002 0-.416-.625.416.624Zm-3.43 0 .416-.625-.416.624Zm-2.572 0-.416-.625.416.624Zm6.002-4-.416-.625.416.624Zm-9.432 4-.416.623.416-.624Zm-2.572 0-.416-.625.416.624Zm-.626.416.416.625-.416-.625Zm-.81 1.84.729-.173-.73.174Zm19.693-2.116.749.03-.75-.03Zm.028-4.67.75-.015-.75.014ZM2.214 18.072l.698.274-.698-.274Zm-.208-5.83.746-.084-.746.083Zm1.454.777.344.666-.344-.666Zm10.544 8.23h-4.001v1.5h4v-1.5ZM2.75 11.94V10h-1.5v1.94h1.5ZM14.896 4.61l3.96 3.563 1.003-1.115-3.96-3.563-1.003 1.115Zm3.96 3.563c1.354 1.218 1.853 1.688 2.12 2.285l1.37-.61c-.427-.957-1.232-1.66-2.487-2.79l-1.003 1.115ZM10.032 2.75c1.583 0 2.18.012 2.712.216l.537-1.4c-.852-.328-1.78-.316-3.249-.316v1.5Zm5.867.746c-1.086-.977-1.766-1.604-2.618-1.93l-.537 1.4c.533.204.982.592 2.152 1.645l1.003-1.115ZM10.003 21.25c-1.908 0-3.263-.002-4.291-.14-1.006-.135-1.586-.389-2.01-.812l-1.06 1.06c.748.75 1.697 1.081 2.87 1.239 1.151.155 2.626.153 4.49.153v-1.5Zm4 1.5c1.866 0 3.34.002 4.491-.153 1.173-.158 2.122-.49 2.87-1.238l-1.06-1.061c-.423.423-1.003.677-2.01.812-1.027.138-2.383.14-4.29.14v1.5ZM2.75 10c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008l-1.06-1.06C1.893 3.39 1.56 4.337 1.403 5.51 1.248 6.66 1.25 8.136 1.25 10h1.5Zm7.282-8.75c-1.875 0-3.356-.002-4.512.153-1.177.158-2.13.49-2.878 1.238l1.06 1.061c.423-.423 1.005-.677 2.017-.812 1.033-.138 2.396-.14 4.313-.14v-1.5Zm7.843 12.231c1.29.86 2.971.86 4.262 0l-.832-1.248a2.342 2.342 0 0 1-2.598 0l-.832 1.248Zm-7.742 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0l.832 1.248Zm-4.262 0c1.29.86 2.971.86 4.262 0L9.3 12.233a2.342 2.342 0 0 1-2.598 0l-.832 1.248Zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0l.832 1.248Zm13.744 4c1.29.86 2.971.86 4.262 0l-.832-1.248a2.342 2.342 0 0 1-2.598 0l-.832 1.248Zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0l.832 1.248Zm-4.262 0c1.29.86 2.971.86 4.262 0l-.832-1.248a2.342 2.342 0 0 1-2.598 0l-.832 1.248Zm-1.74 0a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0l.832 1.248Zm6.002-4a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0l.832 1.248Zm-10.264 4c1.29.86 2.971.86 4.262 0L9.3 16.233a2.342 2.342 0 0 1-2.598 0l-.832 1.248Zm6.002-4c1.29.86 2.971.86 4.262 0l-.832-1.248a2.342 2.342 0 0 1-2.598 0l-.832 1.248Zm-7.742 4a1.57 1.57 0 0 1 1.74 0l.832-1.248a3.07 3.07 0 0 0-3.404 0l.832 1.248Zm-.626.418.626-.418-.832-1.248-.626.417.832 1.249Zm-1.956 1.39c.195.818.526 1.503 1.093 2.07l1.06-1.061c-.325-.325-.547-.74-.694-1.357l-1.46.348Zm19.673-2.322c-.077 1.864-.33 2.743-.918 3.331l1.06 1.06c1.03-1.028 1.279-2.447 1.357-4.33l-1.499-.061Zm1.528-4.654c-.019-.992-.085-1.747-.404-2.464l-1.37.61c.187.421.256.912.274 1.882l1.5-.028Zm-.613 1.168c.386-.257.622-.695.613-1.168l-1.5.028c0-.047.023-.086.055-.108l.832 1.248Zm-19.464 3.17c-.239.158-.473.313-.657.47a1.697 1.697 0 0 0-.5.677l1.396.55a.063.063 0 0 1 .01-.019.498.498 0 0 1 .071-.07c.098-.084.244-.182.512-.36l-.832-1.249Zm.335 2.29a4.208 4.208 0 0 1-.103-.496c-.006-.066 0-.08.007-.098l-1.396-.549c-.217.554-.071 1.054.033 1.49l1.459-.347Zm19.129-1.46a.589.589 0 0 1-.915-.514l1.499.062a.911.911 0 0 0-1.416-.796l.832 1.248ZM1.25 11.94c0 .139-.001.277.01.385l1.492-.166-.001-.039-.001-.18h-1.5Zm2.049.293-.15.1c-.036.023-.042.025-.034.02l.69 1.333c.096-.05.21-.128.326-.205l-.832-1.248Zm-2.038.092a1.75 1.75 0 0 0 2.543 1.361l-.689-1.332a.25.25 0 0 1-.363-.195l-1.491.166Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.25 2.834c-.46-.078-1.088-.084-2.217-.084-1.918 0-3.28.002-4.314.14-1.012.135-1.594.39-2.017.812-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.29v2.119l.002.042a.25.25 0 0 0 .36.193l.036-.022c.035-.022.08-.053.15-.1a3.07 3.07 0 0 1 3.405 0 2.342 2.342 0 0 0 2.598 0 3.07 3.07 0 0 1 3.404 0 2.342 2.342 0 0 0 2.598 0 3.07 3.07 0 0 1 3.404 0 2.342 2.342 0 0 0 2.542.036c-.016-.715-.062-1.163-.167-1.519h-3.136c-1.133 0-2.058 0-2.79-.098-.763-.103-1.425-.325-1.954-.854-.529-.529-.751-1.19-.854-1.955-.098-.73-.098-1.656-.098-2.79v-2.22Zm1.5.772V5c0 1.2.002 2.024.085 2.643.08.598.224.891.428 1.094.203.204.496.348 1.094.428.619.083 1.443.085 2.643.085h2.026a45.892 45.892 0 0 0-1.17-1.076l-3.96-3.563c-.488-.439-.85-.762-1.146-1.005ZM10.178 1.25c1.385 0 2.28 0 3.103.315.824.316 1.486.912 2.51 1.835l.108.096 3.96 3.563.125.112c1.184 1.065 1.95 1.753 2.362 2.678.319.717.385 1.472.404 2.464.009.473-.227.911-.613 1.168-1.29.86-2.971.86-4.262 0a1.57 1.57 0 0 0-1.74 0c-1.29.86-2.972.86-4.262 0a1.57 1.57 0 0 0-1.74 0c-1.29.86-2.971.86-4.262 0a1.57 1.57 0 0 0-1.74 0l-.03.02c-.106.07-.209.14-.297.185a1.75 1.75 0 0 1-2.543-1.36c-.011-.1-.011-.223-.011-.35V9.944c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.239-2.87.749-.749 1.701-1.08 2.878-1.238 1.144-.153 2.608-.153 4.456-.153H10.178ZM5.871 17.481a1.57 1.57 0 0 0-1.74 0l-.626.418a5.946 5.946 0 0 0-.512.36.496.496 0 0 0-.07.07.061.061 0 0 0-.01.018l-.001.002c-.007.017-.013.032-.007.096.01.098.039.227.103.496.147.618.369 1.032.694 1.357.424.423 1.004.677 2.01.812 1.028.139 2.383.14 4.29.14h4.002c1.907 0 3.263-.002 4.29-.14 1.007-.135 1.587-.389 2.01-.812.474-.473.73-1.135.852-2.348a3.843 3.843 0 0 1-3.28-.469 1.57 1.57 0 0 0-1.741 0c-1.29.86-2.972.86-4.262 0a1.57 1.57 0 0 0-1.74 0c-1.29.86-2.971.86-4.262 0ZM3.3 16.233a3.07 3.07 0 0 1 3.404 0 2.342 2.342 0 0 0 2.598 0 3.07 3.07 0 0 1 3.404 0 2.342 2.342 0 0 0 2.598 0 3.07 3.07 0 0 1 3.404 0 2.342 2.342 0 0 0 2.598 0 .911.911 0 0 1 1.416.796c-.078 1.883-.327 3.3-1.356 4.33-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.596.153-4.435.153H9.946c-1.838 0-3.294 0-4.434-.153-1.172-.158-2.122-.49-2.87-1.238-.567-.567-.898-1.252-1.093-2.07l-.021-.086c-.1-.416-.215-.887-.012-1.405.116-.293.298-.503.5-.677.177-.15.4-.3.628-.452l.655-.436Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m19.352 7.617-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383ZM14 22h-4c-3.771 0-5.657 0-6.828-1.172-.447-.446-.723-.995-.894-1.713-.119-.5-.179-.75-.064-1.042.115-.292.368-.461.874-.799l.626-.417a2.318 2.318 0 0 1 2.572 0 3.09 3.09 0 0 0 3.428 0 2.318 2.318 0 0 1 2.572 0 3.09 3.09 0 0 0 3.428 0 2.318 2.318 0 0 1 2.572 0 3.09 3.09 0 0 0 3.428 0 .162.162 0 0 1 .251.143c-.078 1.872-.328 3.02-1.137 3.828C19.657 22 17.771 22 14 22Z" fill="currentColor" /><path d="M2 10c0-3.771 0-5.657 1.172-6.828C4.343 2 6.239 2 10.03 2c.606 0 1.091 0 1.5.017-.013.08-.02.161-.02.244l-.01 2.834c0 1.097 0 2.067.105 2.848.114.847.375 1.694 1.067 2.386.69.69 1.538.952 2.385 1.066.781.105 1.751.105 2.848.105h4.088v.827a.624.624 0 0 1-.279.53 3.09 3.09 0 0 1-3.428 0 2.318 2.318 0 0 0-2.572 0 3.09 3.09 0 0 1-3.428 0 2.318 2.318 0 0 0-2.572 0 3.09 3.09 0 0 1-3.428 0 2.318 2.318 0 0 0-2.572 0l-.16.107c-.684.456-1.026.684-1.29.543C2 13.365 2 12.954 2 12.132V10Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m11.51 2.26-.01 2.835c0 1.097 0 2.066.105 2.848.114.847.375 1.694 1.067 2.385.69.691 1.538.953 2.385 1.067.781.105 1.751.105 2.848.105h4.052c.013.155.022.321.028.5H22c0-.268 0-.402-.01-.56a5.322 5.322 0 0 0-.958-2.641c-.094-.128-.158-.204-.285-.357C19.954 7.494 18.91 6.312 18 5.5c-.81-.724-1.921-1.515-2.89-2.162-.832-.555-1.248-.833-1.819-1.04a5.488 5.488 0 0 0-.506-.153c-.384-.095-.758-.128-1.285-.14l.01.255Z" fill="currentColor" /><path opacity={0.5} d="M2 13.662V9.775C2 6.11 2 4.277 3.172 3.139 4.343 2 6.239 2 10.03 2c.591 0 1.068 0 1.47.015l.01.244-.01 2.749v.18c0 1.059.003 1.995.105 2.755.114.847.375 1.694 1.067 2.385.69.691 1.538.953 2.385 1.067.781.105 1.751.105 2.848.105h4.052c.013.155.022.321.028.5h.008c.007.357.007.765.007 1.238v1.106l-.012.006a4.704 4.704 0 0 0-.267.146 3.167 3.167 0 0 1-3.43 0 2.375 2.375 0 0 0-2.572 0 3.167 3.167 0 0 1-3.43 0 2.375 2.375 0 0 0-2.572 0 3.167 3.167 0 0 1-3.43 0 2.375 2.375 0 0 0-2.572 0c-.138.088-.206.133-.256.158-.386.194-1.017.027-1.459-.29v-.702Z" fill="currentColor" /><path d="M10 22h4c3.771 0 5.657 0 6.829-.933 1.096-.874 1.166-2.246 1.171-4.881l-.012.005a5.143 5.143 0 0 0-.267.12c-1.039.55-2.392.55-3.43 0a2.822 2.822 0 0 0-2.572 0c-1.039.55-2.392.55-3.43 0a2.822 2.822 0 0 0-2.573 0c-1.038.55-2.39.55-3.43 0a2.822 2.822 0 0 0-2.572 0c-.137.072-.206.108-.255.129-.386.159-1.017.022-1.459-.238.005 2.625.077 3.993 1.171 4.865C4.343 22 6.23 22 10 22Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default FileCorrupted