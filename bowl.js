AFRAME.registerComponent("bowling", {
init: function(){
    this.bowl()
},
bowl: function(){
    window.addEventListener("keydown",(e)=>{
        if(e.key === "w"){
            var bowl = document.createElement("a-entity")
            bowl.setAttribute("geometry",{
                primitive: "sphere", radius: 0.1
            })
            bullet.setAttribute("material",{
                color: "black"
            })
            var camera = document.querySelector("#camera")
            pos = camera.getAttribute("position")
            bullet.setAttribute("position", {
                x: pos.x, y: pos.y, z: pos.z
            })
            var camera2 = document.querySelector("#camera").object3D
            var direction = new THREE.Vector3()
            camera2.getWorldDirection(direction)
            bullet.setAttribute("velocity", direction.multiplyScalar(-10))

            var scene = document.querySelector("#scene")
            scene.appendChild(bullet)
        }
    })
}
})