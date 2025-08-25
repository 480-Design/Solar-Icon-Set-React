import type { SVGProps } from "react"

export type SolarIconProps = {
    color?: string,
    size?: number | string,
} & Omit<SVGProps<SVGSVGElement>, "color" | "size" | "width" | "height" | "children">
