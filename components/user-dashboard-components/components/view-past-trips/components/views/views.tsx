import { VIEW_PAST_TRAVELS } from "../../../data";
import { View } from "./../view";

export default function Views() {
  return (
    <div className="grid grid-cols-3 w-full h-full overflow-y-scroll">
      {VIEW_PAST_TRAVELS.map((it, index) => (
        <View key={index} {...it} />
      ))}
    </div>
  );
}
