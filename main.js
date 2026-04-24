import "./assets/css/style.css";
import Cursor from "./assets/js/cursor";
import Modal from "./assets/js/modal";
import ModeSwtich from "./assets/js/mode-switch";
import MenuFS from "./assets/js/menu-fs";
import Hero from "./assets/js/hero";
import Intro from "./assets/js/intro";
import CMS from "./assets/js/cms";

const cms = new CMS();

const modal = new Modal();
const modeSwitch = new ModeSwtich();
const menufs = new MenuFS();
const hero = new Hero();
const intro = new Intro();
const cursor = new Cursor();

if (window.innerWidth > 1024) {
  cursor.init();
}
