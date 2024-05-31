import { HeroBannerProps } from "./HeroBanner.types";
import React from "react";

const HeroBanner: React.FC<HeroBannerProps> = ({ title, url, alt, className }) => {
    return (
    <div className="HeroBanner--Wrapper">
        <img
        src={url}
        alt={alt}
        className={className}
        />
        <p className="HeroBanner--title">{title}</p>
    </div>
    ) }


export default HeroBanner;