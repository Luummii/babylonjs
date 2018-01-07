import Ball from '../pages/Ball.vue'
import Box from '../pages/Box.vue'
import Plane from '../pages/Plane.vue'
import Lines from '../pages/Lines.vue'
import Materials from '../pages/Materials.vue'
import BallAnimation from '../pages/BallAnimation.vue'
import MoveAnimation from '../pages/MoveAnimation.vue'
import ClashOfBalls from '../pages/ClashOfBalls.vue'
import Gravity from '../pages/Gravity.vue'
import FootballLight from '../pages/FootballLight.vue'

export default [
  { path: '/Ball', name: 'Ball', component: Ball },
  { path: '/Box', name: 'Box', component: Box },
  { path: '/Plane', name: 'Plane', component: Plane },
  { path: '/Lines', name: 'Lines', component: Lines },
  { path: '/Materials', name: 'Materials', component: Materials },
  { path: '/BallAnimation', name: 'Ball Animation', component: BallAnimation },
  { path: '/MoveAnimation', name: 'Move Animation', component: MoveAnimation },
  { path: '/ClashOfBalls', name: 'Clash Of Balls', component: ClashOfBalls },
  { path: '/Gravity', name: 'Gravity', component: Gravity },
  { path: '/FootballLight', name: 'Football Light', component: FootballLight },
  { path: '*', redirect: 'Ball' }
]
