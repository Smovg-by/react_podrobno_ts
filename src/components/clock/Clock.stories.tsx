import { Analog } from "./Analog";
import { Clock } from "./Clock";

export default {
  title: 'Clock',
  component: Clock
}

export const BaseExample = () => {
  return <Clock />
}
export const AnalogClock = () => {
  return <Analog />
}