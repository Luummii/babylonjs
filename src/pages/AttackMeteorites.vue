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
      earth: require('../assets/img/earth.jpg'),
      moon: require('../assets/img/moon.jpg')
    }
  },
  mounted() {  
    const canvas = document.getElementsByClassName('renderCanvas')[0]
    const engine = new BABYLON.Engine(canvas, true) 

    const scene = new BABYLON.Scene(engine)

    const camera = new BABYLON.ArcRotateCamera('camera', Math.PI, Math.PI / 4, 30, BABYLON.Vector3.Zero(), scene)
    camera.attachControl(canvas, true)

    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(1, 0, 0), scene)
    light.intensity = 0.75
    light.specular = new BABYLON.Color3(0, 0, 0)

    const pointLight = new BABYLON.PointLight('pointLight', BABYLON.Vector3.Zero(), scene)
    pointLight.diffuse = new BABYLON.Color3(1, 1, 1)
    pointLight.specular = new BABYLON.Color3(0.1, 0.1, 0.12)
    pointLight.intensity = 0.75
    
    const meteorMaterialUrl = "http://jerome.bousquie.fr/BJS/images/rock.jpg"
    const meteorMaterial = new BABYLON.StandardMaterial('meteor', scene)
    meteorMaterial.diffuseTexture = new BABYLON.Texture(meteorMaterialUrl, scene)
    meteorMaterial.backFaceCulling = false

    const earthMaterial = new BABYLON.StandardMaterial('meteor', scene)
    earthMaterial.diffuseTexture = new BABYLON.Texture(this.earth, scene)
    earthMaterial.backFaceCulling = false

    const moonMaterial = new BABYLON.StandardMaterial('meteor', scene)
    moonMaterial.diffuseTexture = new BABYLON.Texture(this.moon, scene)
    moonMaterial.backFaceCulling = false

    // Skybox
    const stars = BABYLON.MeshBuilder.CreateBox('stars', { size: 5000, sideOrientation: BABYLON.Mesh.BACKSIDE }, scene)
    const starMat = new BABYLON.StandardMaterial('stars', scene)
    const urlStar = 'http://jerome.bousquie.fr/BJS/images/stars1.jpg'
    const texStar = new BABYLON.Texture(urlStar, scene)
    texStar.uScale = 3
    texStar.vScale = 3
    starMat.diffuseTexture = texStar
    stars.material = starMat

    const earth = BABYLON.MeshBuilder.CreateSphere('earth', { diameterX: 6, diameterY: 5.4, diameterZ: 6 }, scene)
    earth.material = earthMaterial
    earth.rotate(BABYLON.Axis.X, Math.PI, BABYLON.Space.WORLD) // (во круг чего, на что, относительно чего)
    earth.updateFacetData()

    const moon = BABYLON.MeshBuilder.CreateSphere('moon', { diameterX: 1.5, diameterY: 1.3, diameterZ: 1.5 }, scene)
    moon.material = moonMaterial    
    moon.parent = earth

    // SPS animation
    let alpha = 0
    scene.registerBeforeRender(() => {
      pointLight.position = camera.position     
      earth.rotation.y += 0.001
      earth.rotation.z -= 0.0005     
      moon.position = new BABYLON.Vector3(10 * Math.sin(alpha), moon.parent.position.y, 10 * Math.cos(alpha))          
      alpha += 0.005
    })


    const vertex = (particle, vertex, i) => {
      vertex.x *= (Math.random() + 1)
      vertex.y *= (Math.random() + 1)
      vertex.z *= (Math.random() + 1)
    }

    const position = (particle, i, s) => {
      particle.scale.x = Math.random()
      particle.scale.y = Math.random()
      particle.scale.z = Math.random()
      particle.position.x = (Math.random() - 0.5) * 600
      particle.position.y = (Math.random() - 0.5) * 600
      particle.position.z = (Math.random() - 0.5) * 600
      particle.rotation.x = Math.random() * 3.5
      particle.rotation.y = Math.random() * 3.5
      particle.rotation.z = Math.random() * 3.5
    }

    const SPS = new BABYLON.SolidParticleSystem('SPS', scene)

    const meteor = BABYLON.MeshBuilder.CreateSphere('meteor', { diameter: 2, segments: 8 }, scene)
    SPS.addShape(meteor, 1000, { positionFunction: position, vertexFunction: vertex })    
    const mesh = SPS.buildMesh()
    mesh.material = meteorMaterial
    meteor.dispose()
    

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