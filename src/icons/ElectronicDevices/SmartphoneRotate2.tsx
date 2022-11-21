import * as React from 'react'; import { IconProps } from '../../types'; import { IconWrapper } from '../IconWrapper'; const SmartphoneRotate2 = (allProps: IconProps) => { const { svgProps: props, iconStyle, ...restProps } = allProps; const styles: { [style: string]: React.ReactNode } = { Broken: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m18.444 19.122.53.53-.53-.53Zm-8.14 0 .53-.53-.53.53Zm8.818-8.818-.53.53.53-.53Zm0 8.14-.53-.53.53.53ZM22 14.374h.75H22ZM5.556 4.878l.53.53-.53-.53Zm8.14 0 .53-.53-.53.53ZM9.626 2v.75V2ZM4.878 5.556l-.53-.53.53.53Zm0 8.14-.53.53.53-.53ZM2 9.626h-.75H2Zm7.478-3.54a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM5.026 8.418a.75.75 0 1 0 1.06 1.061l-1.06-1.06Zm13.27 0a.75.75 0 1 0-1.06 1.061l1.06-1.06Zm-3.774-1.652a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-9.114-.679.678-.678-1.06-1.06-.679.678 1.061 1.06Zm13.184 11.828-.678.678 1.06 1.06.678-.678-1.06-1.06Zm-7.757.678-5.427-5.427-1.06 1.061 5.426 5.426 1.06-1.06Zm7.079 0c-.975.974-1.653 1.65-2.232 2.092-.562.429-.942.566-1.308.566v1.5c.826 0 1.522-.343 2.217-.873.678-.517 1.439-1.28 2.383-2.224l-1.06-1.061Zm-8.14 1.06c.944.945 1.705 1.707 2.383 2.225.695.53 1.391.873 2.217.873v-1.5c-.366 0-.745-.137-1.308-.566-.579-.442-1.257-1.118-2.231-2.092l-1.061 1.06Zm8.818-8.817c.974.974 1.65 1.652 2.092 2.231.429.563.566.942.566 1.308h1.5c0-.826-.343-1.522-.873-2.217-.517-.678-1.28-1.439-2.224-2.383l-1.061 1.06Zm1.06 8.14c.945-.945 1.707-1.706 2.225-2.384.53-.695.873-1.391.873-2.217h-1.5c0 .366-.137.746-.566 1.308-.442.579-1.118 1.257-2.092 2.232l1.06 1.06ZM6.086 5.407c.975-.974 1.653-1.65 2.232-2.092.562-.429.942-.566 1.308-.566v-1.5c-.826 0-1.522.343-2.217.873-.679.518-1.439 1.28-2.383 2.224l1.06 1.061Zm8.14-1.06c-.944-.945-1.705-1.707-2.383-2.225-.695-.53-1.391-.873-2.217-.873v1.5c.366 0 .745.137 1.308.566.579.442 1.257 1.118 2.231 2.092l1.061-1.06Zm-9.879.678c-.944.944-1.706 1.704-2.224 2.383-.53.695-.873 1.391-.873 2.217h1.5c0-.366.137-.746.566-1.308.442-.579 1.118-1.257 2.092-2.232l-1.06-1.06Zm1.061 8.14c-.974-.975-1.65-1.653-2.092-2.232-.429-.563-.566-.942-.566-1.308h-1.5c0 .826.343 1.522.873 2.217.518.678 1.28 1.439 2.224 2.383l1.061-1.06Zm3.01-8.14L5.025 8.417l1.06 1.061 3.392-3.391-1.06-1.061Zm7.8 10.218c.269.269.269.705 0 .974l1.06 1.06a2.189 2.189 0 0 0 0-3.095l-1.06 1.06Zm0 .974a.689.689 0 0 1-.974 0l-1.061 1.06c.855.856 2.24.856 3.096 0l-1.061-1.06Zm-.974 0a.689.689 0 0 1 0-.974l-1.061-1.06a2.189 2.189 0 0 0 0 3.095l1.06-1.06Zm0-.974a.689.689 0 0 1 .974 0l1.06-1.06a2.189 2.189 0 0 0-3.095 0l1.06 1.06Zm1.991-5.766 1.357 1.357 1.06-1.061-1.356-1.357-1.06 1.061Zm-4.07-4.07 1.357 1.357 1.06-1.06-1.356-1.358-1.06 1.061ZM22 8l-.42.621A.75.75 0 0 0 22.75 8H22Zm-1.08-1.635a.75.75 0 1 0-.84 1.242l.84-1.242ZM17.126 1.26a.75.75 0 0 0-.252 1.478l.252-1.478Zm5.294 6.118-1.5-1.014-.84 1.242 1.5 1.014.84-1.242Zm-5.546-4.64C19.35 3.161 21.25 5.35 21.25 8h1.5c0-3.379-2.425-6.195-5.624-6.74l-.252 1.48ZM2 16l.42-.621A.75.75 0 0 0 1.25 16H2Zm1.08 1.635a.75.75 0 0 0 .84-1.242l-.84 1.242Zm3.794 5.104a.75.75 0 0 0 .252-1.478l-.252 1.478ZM1.58 16.621l1.5 1.014.84-1.242-1.5-1.014-.84 1.242Zm5.546 4.64C4.65 20.839 2.75 18.65 2.75 16h-1.5c0 3.379 2.425 6.195 5.624 6.74l.252-1.48Z" fill="currentColor" /></svg>, LineDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m18.444 19.122.53.53-.53-.53Zm-8.14 0 .53-.53-.53.53Zm8.818-8.818-.53.53.53-.53Zm0 8.14-.53-.53.53.53ZM22 14.374h.75H22ZM5.556 4.878l.53.53-.53-.53Zm8.14 0 .53-.53-.53.53ZM9.626 2v.75V2ZM4.878 5.556l-.53-.53.53.53Zm0 8.14-.53.53.53-.53ZM2 9.626h-.75H2Zm3.408-3.54.678-.678-1.06-1.06-.679.678 1.061 1.06Zm7.757-.678 5.427 5.427 1.06-1.061-5.426-5.427-1.06 1.061Zm5.427 12.506-.678.678 1.06 1.06.678-.678-1.06-1.06Zm-7.757.678-5.427-5.427-1.06 1.061 5.426 5.426 1.06-1.06Zm7.079 0c-.975.974-1.653 1.65-2.232 2.092-.562.429-.942.566-1.308.566v1.5c.826 0 1.522-.343 2.217-.873.678-.517 1.439-1.28 2.383-2.224l-1.06-1.061Zm-8.14 1.06c.944.945 1.705 1.707 2.383 2.225.695.53 1.391.873 2.217.873v-1.5c-.366 0-.745-.137-1.308-.566-.579-.442-1.257-1.118-2.231-2.092l-1.061 1.06Zm8.818-8.817c.974.974 1.65 1.652 2.092 2.231.429.563.566.942.566 1.308h1.5c0-.826-.343-1.522-.873-2.217-.517-.678-1.28-1.439-2.224-2.383l-1.061 1.06Zm1.06 8.14c.945-.945 1.707-1.706 2.225-2.384.53-.695.873-1.391.873-2.217h-1.5c0 .366-.137.746-.566 1.308-.442.579-1.118 1.257-2.092 2.232l1.06 1.06ZM6.086 5.407c.975-.974 1.653-1.65 2.232-2.092.562-.429.942-.566 1.308-.566v-1.5c-.826 0-1.522.343-2.217.873-.679.518-1.439 1.28-2.383 2.224l1.06 1.061Zm8.14-1.06c-.944-.945-1.705-1.707-2.383-2.225-.695-.53-1.391-.873-2.217-.873v1.5c.366 0 .745.137 1.308.566.579.442 1.257 1.118 2.231 2.092l1.061-1.06Zm-9.879.678c-.944.944-1.706 1.704-2.224 2.383-.53.695-.873 1.391-.873 2.217h1.5c0-.366.137-.746.566-1.308.442-.579 1.118-1.257 2.092-2.232l-1.06-1.06Zm1.061 8.14c-.974-.975-1.65-1.653-2.092-2.232-.429-.563-.566-.942-.566-1.308h-1.5c0 .826.343 1.522.873 2.217.518.678 1.28 1.439 2.224 2.383l1.061-1.06Z" fill="currentColor" /><path opacity={0.5} d="M9.478 6.087a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-4.452 2.33a.75.75 0 0 0 1.06 1.061l-1.06-1.06Zm3.391-3.39-3.391 3.39 1.06 1.061 3.392-3.391-1.06-1.06Zm7.8 10.217a.689.689 0 0 1 0 .974l1.062 1.061a2.189 2.189 0 0 0 0-3.095l-1.061 1.06Zm0 .974a.689.689 0 0 1-.973 0l-1.061 1.061c.855.855 2.24.855 3.096 0l-1.061-1.06Zm-.973 0a.689.689 0 0 1 0-.974l-1.061-1.06a2.189 2.189 0 0 0 0 3.095l1.06-1.06Zm0-.974a.689.689 0 0 1 .974 0l1.06-1.06a2.189 2.189 0 0 0-3.095 0l1.06 1.06ZM22 8l-.42.621A.75.75 0 0 0 22.75 8H22Zm-1.08-1.635a.75.75 0 1 0-.84 1.242l.84-1.242ZM17.126 1.26a.75.75 0 0 0-.252 1.478l.252-1.478Zm5.294 6.118-1.5-1.014-.84 1.242 1.5 1.014.84-1.242Zm-5.546-4.64C19.35 3.161 21.25 5.35 21.25 8h1.5c0-3.379-2.425-6.195-5.624-6.74l-.252 1.48Z" fill="currentColor" /><path d="m2 16 .42-.621A.75.75 0 0 0 1.25 16H2Zm1.08 1.635a.75.75 0 0 0 .84-1.242l-.84 1.242Zm3.794 5.104a.75.75 0 0 0 .252-1.478l-.252 1.478ZM1.58 16.621l1.5 1.014.84-1.242-1.5-1.014-.84 1.242Zm5.546 4.64C4.65 20.839 2.75 18.65 2.75 16h-1.5c0 3.379 2.425 6.195 5.624 6.74l.252-1.48Z" fill="currentColor" /></svg>, Linear: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m18.444 19.122.53.53-.53-.53Zm-8.14 0 .53-.53-.53.53Zm8.818-8.818-.53.53.53-.53Zm0 8.14-.53-.53.53.53ZM22 14.374h.75H22ZM5.556 4.878l.53.53-.53-.53Zm8.14 0 .53-.53-.53.53ZM9.626 2v.75V2ZM4.878 5.556l-.53-.53.53.53Zm0 8.14-.53.53.53-.53ZM2 9.626h-.75H2Zm7.478-3.54a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM5.026 8.418a.75.75 0 1 0 1.06 1.061l-1.06-1.06Zm.382-2.33.678-.679-1.06-1.06-.679.678 1.061 1.06Zm7.757-.679 5.427 5.427 1.06-1.061-5.426-5.427-1.06 1.061Zm5.427 12.506-.678.678 1.06 1.06.678-.678-1.06-1.06Zm-7.757.678-5.427-5.427-1.06 1.061 5.426 5.426 1.06-1.06Zm7.079 0c-.975.974-1.653 1.65-2.232 2.092-.562.429-.942.566-1.308.566v1.5c.826 0 1.522-.343 2.217-.873.678-.517 1.439-1.28 2.383-2.224l-1.06-1.061Zm-8.14 1.06c.944.945 1.705 1.707 2.383 2.225.695.53 1.391.873 2.217.873v-1.5c-.366 0-.745-.137-1.308-.566-.579-.442-1.257-1.118-2.231-2.092l-1.061 1.06Zm8.818-8.817c.974.974 1.65 1.652 2.092 2.231.429.563.566.942.566 1.308h1.5c0-.826-.343-1.522-.873-2.217-.517-.678-1.28-1.439-2.224-2.383l-1.061 1.06Zm1.06 8.14c.945-.945 1.707-1.706 2.225-2.384.53-.695.873-1.391.873-2.217h-1.5c0 .366-.137.746-.566 1.308-.442.579-1.118 1.257-2.092 2.232l1.06 1.06ZM6.086 5.407c.975-.974 1.653-1.65 2.232-2.092.562-.429.942-.566 1.308-.566v-1.5c-.826 0-1.522.343-2.217.873-.679.518-1.439 1.28-2.383 2.224l1.06 1.061Zm8.14-1.06c-.944-.945-1.705-1.707-2.383-2.225-.695-.53-1.391-.873-2.217-.873v1.5c.366 0 .745.137 1.308.566.579.442 1.257 1.118 2.231 2.092l1.061-1.06Zm-9.879.678c-.944.944-1.706 1.704-2.224 2.383-.53.695-.873 1.391-.873 2.217h1.5c0-.366.137-.746.566-1.308.442-.579 1.118-1.257 2.092-2.232l-1.06-1.06Zm1.061 8.14c-.974-.975-1.65-1.653-2.092-2.232-.429-.563-.566-.942-.566-1.308h-1.5c0 .826.343 1.522.873 2.217.518.678 1.28 1.439 2.224 2.383l1.061-1.06Zm3.01-8.14L5.025 8.417l1.06 1.061 3.392-3.391-1.06-1.061Zm7.8 10.218c.269.269.269.705 0 .974l1.06 1.06a2.189 2.189 0 0 0 0-3.095l-1.06 1.06Zm0 .974a.689.689 0 0 1-.974 0l-1.061 1.06c.855.856 2.24.856 3.096 0l-1.061-1.06Zm-.974 0a.689.689 0 0 1 0-.974l-1.061-1.06a2.189 2.189 0 0 0 0 3.095l1.06-1.06Zm0-.974a.689.689 0 0 1 .974 0l1.06-1.06a2.189 2.189 0 0 0-3.095 0l1.06 1.06ZM22 8l-.42.621A.75.75 0 0 0 22.75 8H22Zm-1.08-1.635a.75.75 0 1 0-.84 1.242l.84-1.242ZM17.126 1.26a.75.75 0 0 0-.252 1.478l.252-1.478Zm5.294 6.118-1.5-1.014-.84 1.242 1.5 1.014.84-1.242Zm-5.546-4.64C19.35 3.161 21.25 5.35 21.25 8h1.5c0-3.379-2.425-6.195-5.624-6.74l-.252 1.48ZM2 16l.42-.621A.75.75 0 0 0 1.25 16H2Zm1.08 1.635a.75.75 0 0 0 .84-1.242l-.84 1.242Zm3.794 5.104a.75.75 0 0 0 .252-1.478l-.252 1.478ZM1.58 16.621l1.5 1.014.84-1.242-1.5-1.014-.84 1.242Zm5.546 4.64C4.65 20.839 2.75 18.65 2.75 16h-1.5c0 3.379 2.425 6.195 5.624 6.74l.252-1.48Z" fill="currentColor" /></svg>, Outline: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M16.26 1.874a.75.75 0 0 1 .866-.613c3.2.544 5.624 3.36 5.624 6.74a.75.75 0 0 1-1.17.62l-1.5-1.014a.75.75 0 1 1 .84-1.242l.1.067c-.577-1.91-2.18-3.358-4.146-3.693a.75.75 0 0 1-.613-.865ZM8.319 3.316c-.579.442-1.257 1.118-2.232 2.092l-.678.679c-.974.974-1.65 1.652-2.092 2.232-.429.561-.566.941-.566 1.307s.137.746.566 1.308c.442.579 1.118 1.257 2.092 2.232l5.427 5.426c.974.974 1.652 1.65 2.231 2.092.563.43.942.566 1.308.566.366 0 .746-.137 1.308-.566.579-.442 1.257-1.118 2.232-2.092l.678-.678c.974-.975 1.65-1.653 2.092-2.232.429-.562.566-.942.566-1.308 0-.366-.137-.745-.566-1.307-.442-.58-1.118-1.258-2.092-2.232l-5.427-5.427c-.974-.974-1.652-1.65-2.231-2.092-.563-.429-.942-.566-1.308-.566-.366 0-.746.137-1.308.566Zm-.91-1.193c.696-.53 1.392-.873 2.218-.873.826 0 1.522.343 2.217.873.67.51 1.418 1.26 2.345 2.186l5.503 5.504c.927.926 1.676 1.675 2.186 2.344.53.695.873 1.391.873 2.217 0 .826-.343 1.522-.873 2.218-.51.668-1.26 1.417-2.186 2.344l-.755.755c-.927.927-1.676 1.676-2.345 2.186-.695.53-1.391.873-2.217.873-.826 0-1.522-.343-2.217-.873-.67-.51-1.418-1.26-2.344-2.186l-5.504-5.503c-.927-.927-1.676-1.676-2.186-2.345-.53-.695-.873-1.391-.873-2.217 0-.826.343-1.522.873-2.217.51-.67 1.26-1.418 2.186-2.344l.755-.756c.927-.926 1.676-1.675 2.345-2.186Zm2.07 2.903a.75.75 0 0 1 0 1.06L6.086 9.479a.75.75 0 1 1-1.06-1.06l3.391-3.392a.75.75 0 0 1 1.06 0Zm6.74 10.218a.689.689 0 1 0-.974.974.689.689 0 0 0 .974-.974Zm-2.035-1.06a2.189 2.189 0 1 1 3.096 3.095 2.189 2.189 0 0 1-3.096-3.096ZM1.648 15.337a.75.75 0 0 1 .772.04l1.5 1.015a.75.75 0 0 1-.84 1.242l-.1-.067c.577 1.91 2.18 3.358 4.146 3.693a.75.75 0 0 1-.252 1.479c-3.2-.545-5.624-3.361-5.624-6.74a.75.75 0 0 1 .398-.662Z" fill="currentColor" /></svg>, Bold: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2 9.626c0 1.192.96 2.151 2.878 4.07l5.426 5.426C12.223 21.041 13.182 22 14.374 22c1.192 0 2.151-.96 4.07-2.878l.678-.678C21.041 16.526 22 15.566 22 14.374c0-1.192-.96-2.151-2.878-4.07l-5.426-5.426C11.777 2.959 10.818 2 9.626 2c-1.192 0-2.151.96-4.07 2.878l-.678.678C2.959 7.475 2 8.434 2 9.626Zm7.478-3.539a.75.75 0 0 0-1.06-1.06l-3.392 3.39a.75.75 0 0 0 1.06 1.062l3.392-3.392Zm7.27 10.662a1.44 1.44 0 1 0-2.035-2.035 1.44 1.44 0 0 0 2.035 2.035ZM16.26 1.874a.75.75 0 0 1 .866-.613c3.2.544 5.624 3.36 5.624 6.74a.75.75 0 0 1-1.17.62l-1.5-1.014a.75.75 0 1 1 .84-1.242l.1.067c-.577-1.91-2.18-3.358-4.146-3.693a.75.75 0 0 1-.613-.865ZM7.74 22.126a.75.75 0 0 1-.866.613C3.674 22.195 1.25 19.38 1.25 16a.75.75 0 0 1 1.17-.621l1.5 1.014a.75.75 0 0 1-.84 1.242l-.1-.067c.577 1.91 2.18 3.358 4.146 3.693a.75.75 0 0 1 .613.865Z" fill="currentColor" /></svg>, BoldDuotone: <svg width="inherit" height="inherit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path opacity={0.5} d="M4.878 13.696C2.959 11.777 2 10.818 2 9.626c0-1.192.96-2.151 2.878-4.07l.678-.678C7.475 2.959 8.434 2 9.626 2c1.192 0 2.151.96 4.07 2.878l5.426 5.426C21.041 12.223 22 13.182 22 14.374c0 1.192-.96 2.151-2.878 4.07l-.678.678C16.525 21.041 15.566 22 14.374 22c-1.192 0-2.151-.96-4.07-2.878l-5.426-5.426Z" fill="currentColor" /><path d="M9.478 6.087a.75.75 0 0 0-1.061-1.06l-3.392 3.39a.75.75 0 0 0 1.061 1.061l3.392-3.391ZM16.748 16.749a1.439 1.439 0 1 0-2.035-2.035 1.439 1.439 0 0 0 2.035 2.035Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.26 1.874a.75.75 0 0 1 .866-.613c3.2.544 5.624 3.36 5.624 6.74a.75.75 0 0 1-1.17.62l-1.5-1.014a.75.75 0 1 1 .84-1.242l.1.067c-.577-1.91-2.18-3.358-4.146-3.693a.75.75 0 0 1-.613-.865ZM7.74 22.126a.75.75 0 0 1-.866.613C3.674 22.195 1.25 19.38 1.25 16a.75.75 0 0 1 1.17-.621l1.5 1.014a.75.75 0 0 1-.84 1.242l-.1-.067c.577 1.91 2.18 3.358 4.146 3.693a.75.75 0 0 1 .613.865Z" fill="currentColor" /></svg> }; return <IconWrapper icon={styles[iconStyle || 'Linear']} {...restProps} /> }; export default SmartphoneRotate2