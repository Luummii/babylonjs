<template>
  <div class="container">
    <canvas class="renderCanvas"></canvas>
  </div>
</template>

<script>
import * as BABYLON from 'babylonjs'
import 'babylonjs-loaders'

export default {
  data () {
    return {
      textureBox: require('../assets/img/textureBox.jpg')
    }
  },
  mounted() {  
    const canvas = document.getElementsByClassName('renderCanvas')[0]
    const engine = new BABYLON.Engine(canvas, true) 

    const scene = new BABYLON.Scene(engine)      
    const camera = new BABYLON.ArcRotateCamera('Camera', Math.PI / 4, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene)
    camera.attachControl(canvas, true)

    const light1 = new BABYLON.DirectionalLight('Omni', new BABYLON.Vector3(-2, -5, 2), scene)
    const light2 = new BABYLON.PointLight('Omni', new BABYLON.Vector3(2, -5, -2), scene)

    const ground = BABYLON.Mesh.CreatePlane('ground', 50.0, scene)
    ground.material = new BABYLON.StandardMaterial('groundMat', scene)
    ground.material.diffuseColor = new BABYLON.Color3(1, 1, 1)
    ground.material.backFaceCulling = true // Можно видеть сквозь объект, если порименить это к box
    ground.position = new BABYLON.Vector3(5, -10, -15)
    ground.rotation = new BABYLON.Vector3(Math.PI / 2, 0, 0)

    const box = BABYLON.Mesh.CreateBox('box', 2, scene)
    box.material = new BABYLON.StandardMaterial('boxMat', scene)
    box.material.diffuseTexture = new BABYLON.Texture(this.textureBox, scene)
    box.material.diffuseTexture.hasAlpha = true // Через прозрачные области куба можно видеть задние поверхности
    box.position = new BABYLON.Vector3(5, -9, -10) 


    
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene)  
    sphere.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1)
    var materialSphere = new BABYLON.StandardMaterial("texture1", scene)
    materialSphere.diffuseColor = BABYLON.Color3.Red()
    sphere.material = materialSphere
    
    var dude
    var skeleton
    BABYLON.SceneLoader.Load("/static/iron/IronMan/", "bugatti.obj", scene, function (meshes) { 
      console.log('asd')
    })
    /* BABYLON.SceneLoader.ImportMesh("him", "/static/iron/IronMan/", "bugatti.obj", scene, function (newMeshes, particleSystems, skeletons) {
      dude = newMeshes[0]
      skeleton = skeletons[0]
      dude.rotation.y = Math.PI
      dude.scaling = new BABYLON.Vector3(0.02,0.02,0.02)
      dude.position = new BABYLON.Vector3(0, 0, 0)
      skeleton.position = new BABYLON.Vector3(0, 0, 0)
      skeleton.scaling = new BABYLON.Vector3(0.02,0.02,0.02)        					
      sphere.attachToBone(skeleton.bones[34], dude)
      sphere.scaling = new BABYLON.Vector3(5, 5, 5)        		
      scene.beginAnimation(skeletons[0], 0, 100, true, 1.0)        
      scene.registerBeforeRender(function () {
        dude.position.z+= 0.005
      })
    }) */


    const loader = new BABYLON.AssetsManager(scene)
    const bugatti = loader.addMeshTask("bugatti", "", "/static/iron/IronMan/", "bugatti.obj")
    bugatti.onSuccess = function (task) {
      console.log('message, exception')
      task.loadedMeshes[0].position = BABYLON.Vector3.Zero() 
    } 
    bugatti.onError = function (task, message, exception) {
      console.log('message, exception')
    }

    loader.onTaskErrorObservable.add(function(task) {
      console.log('task failed')
    })

    loader.onTaskError = function (tasks) {  
      console.log('message, exception')       
    }

    //scene.gravity = new BABYLON.Vector3(0, -0.009, 0) // Определяем гравитацию
    /* camera.applyGravity = true // Применяем её к камере
    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1) // Определяем размер чувака, который ходит */
    scene.collisionsEnabled = true  // Говорим что на сцене нужно обноруживать коллизии
    
    // То, что будет участвовать в столкновениях
    ground.checkCollisions = true
    box.checkCollisions = true

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