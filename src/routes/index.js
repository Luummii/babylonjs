import CubeAnimation from '../pages/CubeAnimation.vue'


export default [
  { path: '/', redirect: 'CubeAnimation' },
  { path: '/CubeAnimation', name: 'Cube Animation', component: CubeAnimation }
]
