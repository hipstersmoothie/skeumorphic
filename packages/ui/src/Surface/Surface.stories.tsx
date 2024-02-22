import * as Surface from "./index";

export default {
  title: "Components/Surface",
  component: [Surface.SpeckledGrey],
};

export function SpeckledGrey() {
  return <Surface.SpeckledGrey style={{ height: "100vh", width: "100vw" }} />;
}

export function FlatGrey() {
  return <Surface.FlatGrey style={{ height: "100vh", width: "100vw" }} />;
}
