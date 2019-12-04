import $ from "jquery";
import headerPin from "./header-pin";
import sEconomy from "./s-economy";
import scrollGlobal from "./pageScrollGlobal";


$(document).ready(function() {
  headerPin();
  scrollGlobal();
  sEconomy();  
});