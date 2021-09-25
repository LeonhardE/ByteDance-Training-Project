import { useEffect } from "react";

import { useHistory } from "react-router-dom";

export default function useSlide() {
  const history = useHistory();
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
        const distance = mouseMoveDistitens(x, y, e.clientX, e.clientY);
        if (distance > 50) {
          history.push("/contact");
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
        direction = moveDirection(dx, dy);
      } else {
        if (!isValidSlide(direction, dx, dy)) {
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

function moveDirection(dx, dy) {
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
    return direction;
  }
}

function isValidSlide(direction, dx, dy) {
  const currentDirection = moveDirection(dx, dy);
  if (direction === currentDirection) {
    return true;
  } else {
    return false;
  }
}
