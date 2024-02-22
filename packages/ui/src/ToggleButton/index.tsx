import "./ToggleButton.scoped.css";

import makeClass from "clsx";
import { scopedStyles } from "@createinc/archetype";

import {
  ToggleButton as ToggleButtonPrimitive,
  ToggleButtonProps,
} from "react-aria-components";

const styles = scopedStyles("ToggleButton");

export const ToggleButton = ({
  className,
  children,
  ...props
}: ToggleButtonProps) => {
  return (
    <ToggleButtonPrimitive
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
};
