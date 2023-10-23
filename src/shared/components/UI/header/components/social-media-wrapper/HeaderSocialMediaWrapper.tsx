"use client";

import Image from "next/image";
import "./HeaderSocialMediaWrapper.style.scss";
import FacebookIcon from "public/icons/facebook-f.svg";
import InstagramIcon from "public/icons/instagram.svg";
import PinterestIcon from "public/icons/pinterest-p.svg";
import Link from "next/link";

type ISocialMediaIcon = {
  src: any;
  alt: string;
  url: string;
  className?: string;
};

export default function HeaderSocialMediaWrapper() {
  const socialMediaIcons: Array<ISocialMediaIcon> = [
    { src: FacebookIcon, alt: "facebook group", url: "#" },
    { src: InstagramIcon, alt: "instagram page", url: "#" },
    { src: PinterestIcon, alt: "pinterest page", url: "#" },
  ];

  return (
    <div className="header-social-media-icon-wrapper">
      {socialMediaIcons.map((icon) => {
        const { src, alt, url, className } = icon;

        return (
          <Link href={url} target="_blank">
            <Image
              src={src}
              alt={alt}
              className={className ?? "header-social-media-icon"}
            />
          </Link>
        );
      })}
    </div>
  );
}
