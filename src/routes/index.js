import Ball from '../pages/Ball.vue'
import Box from '../pages/Box.vue'
import Plane from '../pages/Plane.vue'
import Lines from '../pages/Lines.vue'
import Materials from '../pages/Materials.vue'
import BallAnimation from '../pages/BallAnimation.vue'
import MoveAnimation from '../pages/MoveAnimation.vue'
import ClashOfBalls from '../pages/ClashOfBalls.vue'
import Gravity from '../pages/Gravity.vue'
import FootballAnimation from '../pages/FootballAnimation.vue'
import PickingCollisions from '../pages/PickingCollisions.vue'
import LazerBuilding from '../pages/LazerBuilding.vue'
import Sprites from '../pages/Sprites.vue'
import Particle from '../pages/Particle.vue'
import Skybox from '../pages/Skybox.vue'
import WorldMap from '../pages/WorldMap.vue'

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
  { path: '/FootballAnimation', name: 'Football Animation', component: FootballAnimation },
  { path: '/PickingCollisions', name: 'Picking Collisions', component: PickingCollisions },
  { path: '/LazerBuilding', name: 'Lazer Building', component: LazerBuilding },
  { path: '/Sprites', name: 'Sprites', component: Sprites },
  { path: '/Particle', name: 'Particle', component: Particle },
  { path: '/Skybox', name: 'Skybox', component: Skybox },
  { path: '/WorldMap', name: 'World Map', component: WorldMap },
  { path: '*', redirect: 'Ball' }
]
