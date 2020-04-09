import { observable } from "mobx";

export default class ThemeStore {
  @observable
  colors = {
    midnightGreen: "#014E56",
    lightCoral: "#F67E7E",
    white: "#FFFFFF",
    raptureBlue: "#79C8C7",
    policeBlue: "#2C6269",
    deepJungleGreen: "#004047",
    veryDark: "#002529",
    sacramentoGreen: "#012F34",
    darkGreen: "#002529",
  };
}
