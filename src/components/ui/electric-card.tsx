"use client";

import React, { useMemo } from "react";
import "./electric-card.css";

type Variant = "swirl" | "hue";

export type ElectricCardProps = {
  variant?: Variant;
  color?: string;
  badge?: string;
  title?: string;
  description?: string;
  width?: string;
  aspectRatio?: string;
  className?: string;
  children?: React.ReactNode;
};

const ElectricCard = ({
  variant = "swirl",
  color = "#4079ff",
  badge,
  title,
  description,
  width = "100%",
  aspectRatio,
  className = "",
  children,
}: ElectricCardProps) => {
  const ids = useMemo(() => {
    const key = Math.random().toString(36).slice(2, 8);
    return {
      swirl: `swirl-${key}`,
      hue: `hue-${key}`,
    };
  }, []);

  const filterURL = variant === "hue" ? `url(#${ids.hue})` : `url(#${ids.swirl})`;

  const cardStyle = {
    "--electric-border-color": color,
    "--electric-light-color": `oklch(from ${color} l c h)`,
    "--gradient-color": `oklch(from ${color} 0.3 calc(c / 2) h / 0.4)`,
    "--f": filterURL,
  } as React.CSSProperties;

  const borderStyle = {
    border: `2px solid oklch(from ${color} l c h / 0.5)`,
  } as React.CSSProperties;

  const mainCardStyle = {
    width,
    aspectRatio: aspectRatio || "auto",
    border: `2px solid ${color}`,
    filter: filterURL,
  } as React.CSSProperties;

  const glowLayer1Style = {
    border: `2px solid oklch(from ${color} l c h / 0.6)`,
  } as React.CSSProperties;

  const glowLayer2Style = {
    border: `2px solid oklch(from ${color} l c h)`,
  } as React.CSSProperties;

  const backgroundGlowStyle = {
    background: `linear-gradient(-30deg, oklch(from ${color} l c h), transparent, ${color})`,
  } as React.CSSProperties;

  const containerBgStyle = {
    background: `linear-gradient(-30deg, oklch(from ${color} 0.3 calc(c / 2) h / 0.4), transparent, oklch(from ${color} 0.3 calc(c / 2) h / 0.4)), linear-gradient(to bottom, var(--color-neutral-900), var(--color-neutral-900))`,
  } as React.CSSProperties;

  return (
    <div className={`ec-wrap ${className}`}>
      <svg className="svg-container" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <filter id={ids.swirl} colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise3" seed="2" />
            <feOffset in="noise3" dx="0" dy="0" result="offsetNoise3">
              <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise4" seed="2" />
            <feOffset in="noise4" dx="0" dy="0" result="offsetNoise4">
              <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />

            <feDisplacementMap
              in="SourceGraphic"
              in2="combinedNoise"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>

          <filter id={ids.hue} colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="7" />
            <feColorMatrix type="hueRotate" result="pt1">
              <animate attributeName="values" values="0;360;" dur=".6s" repeatCount="indefinite" calcMode="paced" />
            </feColorMatrix>
            <feComposite />
            <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="7" seed="5" />
            <feColorMatrix type="hueRotate" result="pt2">
              <animate
                attributeName="values"
                values="0; 333; 199; 286; 64; 168; 256; 157; 360;"
                dur="5s"
                repeatCount="indefinite"
                calcMode="paced"
              />
            </feColorMatrix>
            <feBlend in="pt1" in2="pt2" mode="normal" result="combinedNoise" />
            <feDisplacementMap in="SourceGraphic" scale="30" xChannelSelector="R" yChannelSelector="B" />
          </filter>
        </defs>
      </svg>

      <div className="card-container" style={{ ...cardStyle, ...containerBgStyle }}>
        <div className="inner-container">
          <div className="border-outer" style={borderStyle}>
            <div className="main-card" style={mainCardStyle} />
          </div>
          <div className="glow-layer-1" style={glowLayer1Style} />
          <div className="glow-layer-2" style={glowLayer2Style} />
        </div>

        <div className="overlay-1" />
        <div className="overlay-2" />
        <div className="background-glow" style={backgroundGlowStyle} />

        {children ? (
          <div className="content-container-custom">{children}</div>
        ) : (
          <div className="content-container">
            <div className="content-top">
              {badge && <div className="scrollbar-glass">{badge}</div>}
              {title && <p className="title">{title}</p>}
            </div>

            <hr className="divider" />

            <div className="content-bottom">{description && <p className="description">{description}</p>}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export { ElectricCard };
