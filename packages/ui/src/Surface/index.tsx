import "./Surface.scoped.css";

import makeClass from "clsx";
import { scopedStyles } from "@createinc/archetype";

const styles = scopedStyles("Surface");

export const SpeckledGrey = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={makeClass(className, styles.speckledGrey)} {...props} />
  );
};
