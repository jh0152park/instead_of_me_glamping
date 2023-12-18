import { atom } from "recoil";

export const currentMode = atom({
    default: "web",
    key: "CurrentMode",
});
