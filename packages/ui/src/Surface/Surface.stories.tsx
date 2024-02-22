import * as Surface from "./index";

export default {
  title: "Components/Surface",
  component: [Surface.SpeckledGrey],
};

export function Basic() {
  return <Surface.SpeckledGrey style={{ height: "100vh", width: "100vw" }} />;
}
