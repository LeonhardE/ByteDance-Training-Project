import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const keyCodeMap = {
  leftArrow: 37,
  upArrow: 38,
  rightArrow: 39,
  downArrow: 40,
};

const defaultConfig = [
  {
    keyCode: keyCodeMap.leftArrow,
    path: "/left",
  },
  {
    keyCode: keyCodeMap.rightArrow,
    path: "/",
  },
  {
    keyCode: keyCodeMap.upArrow,
    path: "/up",
  },
  {
    keyCode: keyCodeMap.downArrow,
    path: "/down",
  },
];

export default function useChangeRouterByKeyboard(config = defaultConfig) {
  const history = useHistory();
  useEffect(() => {
    let keyUp = (e) => {
      console.log(e);
      config.forEach((item) => {
        if (e.ctrlKey && e.keyCode === item.keyCode) {
          history.push(item.path);
        }
      });
    };
    document.addEventListener("keyup", keyUp);
  });
}
