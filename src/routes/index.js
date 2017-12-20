import Ball from '../pages/Ball.vue'
import Box from '../pages/Box.vue'
import Plane from '../pages/Plane.vue'
import Lines from '../pages/Lines.vue'
import Materials from '../pages/Materials.vue'
import Animation from '../pages/Animation.vue'

export default [
  { path: '/', redirect: 'BallAnimation' },
  { path: '/Ball', name: 'Ball', component: Ball },
  { path: '/Box', name: 'Box', component: Box },
  { path: '/Plane', name: 'Plane', component: Plane },
  { path: '/Lines', name: 'Lines', component: Lines },
  { path: '/Materials', name: 'Materials', component: Materials },
  { path: '/Animation', name: 'Animation', component: Animation }
]
