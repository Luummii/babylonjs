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
      particle: require('../assets/img/particle.png')
    }
  },
  mounted() {  
    const canvas = document.getElementsByClassName('renderCanvas')[0]
    const engine = new BABYLON.Engine(canvas, true) 

    const scene = new BABYLON.Scene(engine)          
    const camera = new BABYLON.ArcRotateCamera('Camera', 1, 0.8, 20, BABYLON.Vector3.Zero(), scene)
    camera.attachControl(canvas, true)
    
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(1, 1, 0), scene)    
    
    const ground = BABYLON.Mesh.CreatePlane('ground', 50.0, scene)
    ground.position = new BABYLON.Vector3(0, -10, 0)
    ground.rotation = new BABYLON.Vector3(Math.PI / 2, 0, 0)

    ground.material = new BABYLON.StandardMaterial('groundMat', scene)
    ground.material.backFaceCulling = false
    ground.material.diffuseColor = new BABYLON.Color3(0.3, 0.3, 1)

    const particleSource = BABYLON.Mesh.CreateBox('particleSource', 1.0, scene)
    // Создаем систему частиц
    const particleSystem = new BABYLON.ParticleSystem('particles', 2000, scene)

    // Определяем текстуру
    particleSystem.particleTexture = new BABYLON.Texture(this.particle, scene)

    // Определяем источник
    particleSystem.emitter = particleSource

    particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, 0)
    particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 0)

    // Запускаем частицы
    particleSystem.start()

    // Зацыкленный рендеринг сцены
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