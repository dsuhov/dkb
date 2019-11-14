import controller from "./initController";
import { Scene } from "scrollmagic";

export default function() {
  const headerPinScene = new Scene({
    offset: 1
  });
  
  headerPinScene
    .setClassToggle('.header', 'header--scrolling')
    .addTo(controller);
}