import { Label } from "../Label";
import { SpeckledGrey } from "../Surface";
import { Knob } from "./index";

export default {
  title: "Components/Knob",
  component: Knob,
};

export function Basic() {
  return (
    <SpeckledGrey
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <Knob min={0} max={100} />
      <Label>Volume</Label>
    </SpeckledGrey>
  );
}
