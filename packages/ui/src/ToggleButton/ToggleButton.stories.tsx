import { Label } from "../Label";
import { SpeckledGrey } from "../Surface";
import { ToggleButton } from "./index";

export default {
  title: "Components/ToggleButton",
  component: ToggleButton,
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
        gap: 8,
      }}
    >
      <Label>AUTO GAIN</Label>
      <ToggleButton />
    </SpeckledGrey>
  );
}
