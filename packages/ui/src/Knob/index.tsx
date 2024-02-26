import "./Knob.scoped.css";

import makeClass from "clsx";
import { scopedStyles } from "@createinc/archetype";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { useMove } from "react-aria";
import { clamp } from "../utils/clamp";

const styles = scopedStyles("Knob");

const DEFAULT_ANGLE_OFFSET = -50;
const DEFAULT_ANGLE_RANGE = 275;

export interface KnobProps {
  className?: string;
  defaultValue?: number;
  value?: number;
  onValueChange?: (value: number) => void;
  min: number;
  max: number;
  /**
   * Offset of the start angle (in degrees) of the knob. 0 is the top of the circle.
   */
  angleOffset?: number;
  /**
   * Angle of the range in degrees.
   */
  angleRange?: number;
}

export const Knob = ({
  className,
  value: valueProp,
  defaultValue,
  onValueChange: onValueChangeProp,
  min,
  max,
  angleOffset = DEFAULT_ANGLE_OFFSET,
  angleRange = DEFAULT_ANGLE_RANGE,
  ...props
}: KnobProps) => {
  const [value, onValueChange] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? 0,
    onChange: onValueChangeProp,
  });

  const { moveProps } = useMove({
    onMove: (e) => {
      let delta = e.deltaX;

      if (e.pointerType === "keyboard") {
        delta = (e.deltaX + e.deltaY) * (e.shiftKey ? 10 : 1);
      }

      const fraction = ((value || 0) - min) / (max - min);
      const newFraction = clamp(fraction + delta / max, 0, 1);
      const newValue = newFraction * (max - min) + min;

      onValueChange(clamp(newValue, min, max));
    },
  });

  const fraction = ((value || 0) - min) / (max - min);
  const angle = DEFAULT_ANGLE_OFFSET + DEFAULT_ANGLE_RANGE * fraction;
  const ticks = new Array(150).fill(0);
  const visible = Math.floor(fraction * ticks.length);

  return (
    <div className={styles.wrapper}>
      <div className={styles.dialWrapper}>
        <div className={styles.dial} />
      </div>
      <div className={styles.extraShadow}>
        {ticks.map((_, i) => {
          const indexFromEnd = visible - i;
          const blurRange = 30;
          const color = i / ticks.length > 0.87 ? "#FB4767" : "#F9E76F";

          const shared = {
            transform: `translate(-50%, -50%) rotate(${
              (i / ticks.length) * 272 - 48
            }deg) translateX(-76.35px)`,
          };

          return (
            <>
              <div
                key={`shadow-${i}`}
                className={styles.tick}
                data-from-end={visible - i}
                style={{
                  ...shared,
                  boxShadow: `0 0 4px 2px ${color}`,
                  opacity:
                    i / ticks.length > fraction || indexFromEnd > blurRange
                      ? 0
                      : 1 - indexFromEnd / blurRange,
                  backgroundSize: "100% 1000%",
                  backgroundPosition: `center ${(i / ticks.length) * 100}%`,
                  backgroundRepeat: "no-repeat",
                  zIndex: 1,
                }}
              />
              <div
                key={`tick-${i}`}
                className={makeClass(styles.tick, styles.animated)}
                data-from-end={visible - i}
                style={{
                  ...shared,
                  background: "linear-gradient(0,#FF9900,#FAFA9A)",
                  opacity: i / ticks.length > fraction ? 0 : 1,
                  backgroundSize: "100% 1000%",
                  backgroundPosition: `center ${(i / ticks.length) * 100}%`,
                  backgroundRepeat: "no-repeat",
                  zIndex: 2,
                }}
              />
            </>
          );
        })}
        <button
          {...moveProps}
          role="slider"
          className={styles.knob}
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
        >
          <div
            className={makeClass(className, styles.knobCenter)}
            style={{ transform: `rotate(${angle}deg)` }}
            {...props}
          >
            <div
              className={styles.knobReflection}
              style={{
                boxShadow: `inset 4px -2px 14px -8px ${
                  fraction > 0.9
                    ? "#FB47678f"
                    : fraction > 0.8
                      ? "#F9A27C9f"
                      : "#F8DE89"
                }`,
              }}
            />
            <div
              className={styles.knobIndicator}
              style={{ transform: `translateY(-50%) rotate(${-angle}deg) ` }}
            />
          </div>
        </button>
      </div>
    </div>
  );
};
