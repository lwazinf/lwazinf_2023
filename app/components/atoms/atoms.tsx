import { atom } from "recoil";

export const SelectState = atom({
  key: "SelectState", // unique ID (with respect to other atoms/selectors)
  default: {
    video:
      "/assets/videos/macbookCameraCoffee.mp4",
      poster: '/assets/images/landing.png'
  }, // default value (aka initial value)
});
