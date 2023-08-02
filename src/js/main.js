import slider from "./modules/slider";
import filter from "./modules/filter";
import burger from "./modules/burger";
import modals from "./modules/modals";
import VideoPlayer from "./modules/PlayVideo";

'use strict'
slider();
filter();
burger();
modals();

const player = new VideoPlayer('.youtube .play', '.overlay-youtube');
player.init();
