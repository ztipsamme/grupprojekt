import { createRouter, createWebHashHistory } from "vue-router"

import StartView from "../views/StartView.vue"
import GameView from "../views/GameView.vue"
import ShopView from "../views/ShopView.vue"

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: GameView,
      path: "/game",
    },
    {
      component: StartView,
      path: "/",
    },
    {
      component: ShopView,
      path: "/shop",
    },
  ],
})