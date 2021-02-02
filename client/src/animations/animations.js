import style from "./animations.module.css";

export function shake(element, handler = () => { }, timeOute = 600) {
  element.style.animation = `${style.shake} ${timeOute / 1000
    }s`;

  setTimeout(() => {
    element.style.animation = ``;
    handler();
  }, timeOute);
}

export function blink(element, handler = () => {}, timeOute = 600) {
  element.style.animation = `${style.blink} ${timeOute / 1000
    }s`

  setTimeout(() => {
    element.style.animation = ``;
    handler();
  }, timeOute);
}