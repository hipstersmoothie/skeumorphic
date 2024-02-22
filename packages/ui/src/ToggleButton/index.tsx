import "./ToggleButton.scoped.css";

import makeClass from "clsx";
import { scopedStyles } from "@createinc/archetype";

import {
  ToggleButton as ToggleButtonPrimitive,
  ToggleButtonProps,
} from "react-aria-components";
import { forwardRef } from "react";

const styles = scopedStyles("ToggleButton");

export const ToggleButton = forwardRef(
  (
    { className, children, ...props }: ToggleButtonProps,
    ref?: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <ToggleButtonPrimitive
        ref={ref}
        className={makeClass(styles.root, className)}
        {...props}
      >
        <div className={styles.divet} />
        <div className={styles.shine} />
        <div className={styles.indicator}>
          <div className={styles.light}>
            <div className={styles.glow} />
          </div>
        </div>
      </ToggleButtonPrimitive>
    );
  }
);
