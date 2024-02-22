import "./Label.scoped.css";

import makeClass from "clsx";
import { scopedStyles } from "@createinc/archetype";

const styles = scopedStyles("Label");

export const Label = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"label">) => {
  return (
    <label
      data-text={props.children}
      className={makeClass(className, styles.root)}
      {...props}
    />
  );
};
