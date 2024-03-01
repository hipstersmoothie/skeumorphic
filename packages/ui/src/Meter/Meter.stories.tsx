import { Meter } from ".";
import { FlatGrey } from "../Surface";

export default {
  title: "Components/Meter",
  component: Meter,
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
        gap: 24,
      }}
    >
      <Meter value={-20} />
    </FlatGrey>
  );
}
