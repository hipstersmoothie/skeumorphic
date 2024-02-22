import { Switch, SwitchStateLabels, SwitchWrapper } from "./index";
import { FlatGrey } from "../Surface";
import { Label } from "../Label";

export default {
  title: "Components/Switch",
  component: [Switch, SwitchStateLabels],
};

export function Basic() {
  return (
    <FlatGrey
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <Switch />
    </FlatGrey>
  );
}

export function WithStateLabels() {
  return (
    <FlatGrey
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Label style={{ marginBottom: 8 }}>Power VLT</Label>
        <SwitchWrapper>
          <SwitchStateLabels />
          <Switch />
        </SwitchWrapper>
      </div>
    </FlatGrey>
  );
}
