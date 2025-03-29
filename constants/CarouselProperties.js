import { Dimensions } from "react-native";

const OFFSET = 30;
const ITEM_WIDTH = Dimensions.get("window").width - OFFSET * 2;
const ITEM_HEIGHT = Dimensions.get("window").height / 2;

const CAROUSEL_DATA = [
  "https://images.pexels.com/photos/31346973/pexels-photo-31346973/free-photo-of-escena-de-lago-brumoso-con-ramas-colgantes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30953532/pexels-photo-30953532/free-photo-of-vista-de-callejones-en-blanco-y-negro-en-tokio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/31250230/pexels-photo-31250230/free-photo-of-un-anciano-caminando-entre-columnas-historicas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/31012764/pexels-photo-31012764/free-photo-of-bebidas-heladas-refrescantes-sostenidas-con-dos-manos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const CAROUSEL_PROPERTIES = Object.freeze({
  OFFSET,
  ITEM_WIDTH,
  ITEM_HEIGHT,
  CAROUSEL_DATA,
});

export default CAROUSEL_PROPERTIES;
