import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const defaultConfig = [
  {
    type: "left",
    path: "/",
  },
  {
    type: "right",
    path: "/friend",
  },
];
// const history = useHistory()
/**
 *
 * @param {*} history 通过useHistory()获取的history对象
 * @param {*} config 配置信息
 */
export default function useChangeRouterByDraging(history, config) {
  useEffect(() => {
    let isDraging = false;
    let direction = "none";
    let x, y;
    let dx = 0,
      dy = 0;
    let up = (e) => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
      if (isDraging === true) {
        const currentPath = history.location.pathname;
        console.log(direction);
        const path =
          config.find((item) => item.type === direction)?.path || currentPath;
        const distance = mouseMoveDistitens(x, y, e.clientX, e.clientY);
        if (distance > 20) {
          history.push(path);
        }
      }
      direction = "none";
      isDraging = false;
    };
    let down = (e) => {
      isDraging = true;
      [x, y] = [e.clientX, e.clientY];
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", up);
    };
    let move = (e) => {
      [dx, dy] = [e.clientX - x, e.clientY - y];
      if (direction === "none") {
        direction = dragDirection(dx, dy);
      } else {
        if (!isValidDrag(direction, dx, dy)) {
          isDraging = false;
        }
      }
    };
    document.addEventListener("mousedown", down);
    return () => {
      document.removeEventListener("mousedown", down);
    };
  }, []);
}

function mouseMoveDistitens(startX, startY, endX, endY) {
  return Math.sqrt(
    (startX - endX) * (startX - endX) + (startY - endY) * (startY - endY)
  );
}

function dragDirection(dx, dy) {
  const { abs } = Math;
  let direction = "none";
  if (abs(dx) > abs(dy)) {
    if (dx > 0) {
      direction = "right";
    } else {
      direction = "left";
    }
  } else {
    if (dy > 0) {
      direction = "down";
    } else {
      direction = "up";
    }
  }
  return direction;
}

function isValidDrag(direction, dx, dy) {
  const currentDirection = dragDirection(dx, dy);
  if (
    (direction === "top" && currentDirection === "down") ||
    (direction === "down" && currentDirection === "top") ||
    (direction === "left" && currentDirection === "right") ||
    (direction === "right" && currentDirection === "left")
  ) {
    return false;
  }
  return true;
}
