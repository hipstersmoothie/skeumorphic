import "./Meter.scoped.css";

import makeClass from "clsx";
import { scopedStyles } from "@createinc/archetype";
import { clamp } from "../utils/clamp";

const styles = scopedStyles("Meter");

export interface KnobProps {
  value: number;
  min?: number;
  max?: number;
  className?: string;
  label?: string;
}

export const Meter = ({
  className,
  value,
  min = -20,
  max = 5,
  label = "Power Level",
  ...props
}: KnobProps) => {
  // min/max represent the min and max decibels of the meter
  // the value is the current decibel level
  // we need to convert the value to a logarithmic scale between 0 and 1
  // then we can use that to set the angle of the meter
  const valuePercentage = (clamp(value, min, max) - min) / (max - min);
  const logValue = Math.log10(valuePercentage * 9 + 1);
  const inverseLogValue = 1 - logValue;

  console.log("valuePercentage", { valuePercentage, value, min, max });
  return (
    <div
      className={styles.root}
      style={
        {
          position: "relative",
          "--meter-angle": `${-27 + logValue * 54}deg`,
        } as React.CSSProperties
      }
    >
      <div className={styles.polygonBorder}>
        <div className={styles.polygon}>
          <div className={styles.label}>{label}</div>
          <div className={styles.numbers} />
          <div className={styles.dialShadow} />
          <div className={styles.dial} />
          <div className={styles.glowWrapper}>
            <div className={styles.glow} />
          </div>
          <div className={styles.glowSecondaryWrapper}>
            <div className={styles.glowSecondary} />
          </div>
          <div className={styles.shine} />
          <div className={styles.innerBorder} />
        </div>
      </div>
      <svg>
        <defs>
          <clipPath id="meter-shape" clipPathUnits="objectBoundingBox">
            <path d="M0.0206107 0.10708C0.0109435 0.0576693 0.0487749 0.0117188 0.0991221 0.0117188H0.904784C0.955131 0.0117188 0.992963 0.0576693 0.983296 0.10708L0.82356 0.923507C0.816213 0.961055 0.783309 0.988146 0.745048 0.988146H0.258858C0.220597 0.988146 0.187693 0.961055 0.180346 0.923507L0.0206107 0.10708Z"></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
