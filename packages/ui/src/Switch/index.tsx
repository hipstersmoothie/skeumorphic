import "./Switch.scoped.css";

import makeClass from "clsx";
import { scopedStyles } from "@createinc/archetype";
import { Switch as SwitchPrimitive, SwitchProps } from "react-aria-components";
import { forwardRef } from "react";

const styles = scopedStyles("Switch");

interface SwitchStateLabelsProps extends React.HTMLAttributes<HTMLDivElement> {
  onLabel?: string;
  offLabel?: string;
}

export const SwitchWrapper = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={makeClass(styles.inputAndLabelsWrapper, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const SwitchStateLabels = ({
  onLabel = "on",
  offLabel = "off",
  className,
  ...props
}: SwitchStateLabelsProps) => {
  return (
    <div className={makeClass(styles.stateLabelWrapper, className)} {...props}>
      <div className={styles.stateLabelGroup}>
        <div className={styles.stateLabel}>{offLabel}</div>
        <div className={makeClass(styles.stateLabelLine, styles.left)}>
          <div className={styles.stateLabelLineInner} />
        </div>
      </div>
      <div className={styles.stateLabelGroup}>
        <div className={makeClass(styles.stateLabelLine, styles.right)}>
          <div className={styles.stateLabelLineInner} />
        </div>
        <div className={styles.stateLabel}>{onLabel}</div>
      </div>
    </div>
  );
};

export const Switch = forwardRef(({ className, ...props }: SwitchProps) => {
  return (
    <SwitchPrimitive {...props} className={makeClass(className, styles.root)}>
      <div className={styles.indicator}>
        <div className={styles.indicatorBody}>
          <div className={styles.leftCircle} />
          <div className={styles.light}>
            <div className={styles.glow} />
          </div>
          <div className={styles.rightCircle} />
        </div>
      </div>
      {/*  {children && (
        <span className={makeClass(styles, "spectrum-ToggleSwitch-label")}>
          {children}
        </span>
      )} */}
    </SwitchPrimitive>
  );
});
