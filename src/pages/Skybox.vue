<template>
  <div class="container">
    <canvas class="renderCanvas"></canvas>
  </div>
</template>

<script>
import * as BABYLON from 'babylonjs'

export default {
  data () {
    return {
      sky: [require('../assets/img/skybox/skybox_nx.jpg'),
            require('../assets/img/skybox/skybox_ny.jpg'),
            require('../assets/img/skybox/skybox_nz.jpg'),
            require('../assets/img/skybox/skybox_px.jpg'),
            require('../assets/img/skybox/skybox_py.jpg'),
            require('../assets/img/skybox/skybox_pz.jpg')]
    }
  },
  mounted() {  
    const canvas = document.getElementsByClassName('renderCanvas')[0]
    const engine = new BABYLON.Engine(canvas, true) 

    const scene = new BABYLON.Scene(engine)

    const camera = new BABYLON.ArcRotateCamera('Camera', Math.PI / 2, Math.PI / 2, 20, BABYLON.Vector3.Zero(), scene)
    camera.setTarget(BABYLON.Vector3.Zero())
    camera.attachControl(canvas, true)

    const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene)

    const sphere = BABYLON.Mesh.CreateSphere('sphere', 32, 1, scene)
    const sphereMaterial = new BABYLON.StandardMaterial('sphereMaterial', scene)

    const texture = new BABYLON.CubeTexture('/img/skybox', scene)
    scene.createDefaultSkybox(texture, true, 100)
    
    engine.runRenderLoop(() => {
      scene.render()
    }) 

    window.addEventListener('resize', () => {
      engine.resize()
    }) 
  }
}
</script>

<style lang="stylus">

</style>