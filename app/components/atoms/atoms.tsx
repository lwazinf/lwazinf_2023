import { atom } from "recoil";

export const SelectState = atom({
  key: "SelectState", // unique ID (with respect to other atoms/selectors)
  default: {
    video:
      "https://firebasestorage.googleapis.com/v0/b/wimining-ce758.appspot.com/o/Compilation.mp4?alt=media&token=f3607933-beec-43cc-aa85-36eec8d7ef7f",
      poster: '/assets/images/landing.png'
  }, // default value (aka initial value)
});

export const SelectedState = atom({
  key: "SelectedState", // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const PlayState = atom({
  key: "PlayState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

const COMPONENT_NAME = '1.0'

export const BypassState = atom({
  key: `${COMPONENT_NAME}/BypassState`,
  default: true,
});

export const PromptState = atom({
  key: `${COMPONENT_NAME}/PromptState`,
  default: {},
});

export const Prompt1State = atom({
  key: `${COMPONENT_NAME}/Prompt1State`,
  default: {},
});

export const Prompt2State = atom({
  key: `${COMPONENT_NAME}/Prompt2State`,
  default: {},
});

export const Prompt3State = atom({
  key: `${COMPONENT_NAME}/Prompt3State`,
  default: {},
});
