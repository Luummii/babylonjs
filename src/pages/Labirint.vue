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
      
    }
  },
  mounted() {  
    const canvas = document.getElementsByClassName('renderCanvas')[0]
    const engine = new BABYLON.Engine(canvas, true) 

    const scene = new BABYLON.Scene(engine)      
    const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, -8, -20), scene)   
    camera.attachControl(canvas, true)

    const light1 = new BABYLON.DirectionalLight('Omni', new BABYLON.Vector3(-2, -5, 2), scene)
    const light2 = new BABYLON.PointLight('Omni', new BABYLON.Vector3(2, -5, -2), scene)

    const ground = BABYLON.Mesh.CreatePlane('ground', 1000.0, scene);
    ground.material = new BABYLON.StandardMaterial('groundMat', scene);
    ground.material.diffuseColor = new BABYLON.Color3(1, 1, 1);
    ground.material.backFaceCulling = false;
    ground.position = new BABYLON.Vector3(5, -10, -15);
    ground.rotation = new BABYLON.Vector3(Math.PI / 2, 0, 0);

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