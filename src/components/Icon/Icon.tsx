import type { SVGProps } from "react";

import CheckmarkIcon from "./CheckmarkIcon";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import LinkedInIcon from "./LinkedInIcon";
import ErrorIcon from "./ErrorIcon";

const icons = {
    checkmark: CheckmarkIcon,
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    linkedin: LinkedInIcon,
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