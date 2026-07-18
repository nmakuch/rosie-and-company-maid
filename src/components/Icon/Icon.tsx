import type { SVGProps } from "react";

import CheckmarkIcon from "./CheckmarkIcon";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import LinkedInIcon from "./LinkedInIcon";
import MapPinIcon from "./MapPinIcon";
import ErrorIcon from "./ErrorIcon";

const icons = {
    checkmark: CheckmarkIcon,
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    linkedin: LinkedInIcon,
    mapPin:  MapPinIcon,
    error: ErrorIcon
};

type IconName = keyof typeof icons;

type IconProps = SVGProps<SVGSVGElement> & {
    name: IconName;
};

export default function Icon({ name, ...props }: IconProps) {
    const SvgIcon = icons[name];

    return <SvgIcon {...props} />;
}