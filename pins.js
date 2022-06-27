AFRAME.registerComponent("pins",{
    schema:{
        element:{type: "string", default: "#pins"},
    },
    init: function(){
        this.createPins(position)

    },

    createPins: function(position){
        var pins = document.createElement("a-entity");
        pins.setAttribute("id", id);
        pins.setAttribute("position", position);
        pins.setAttribute("material", "color", "#ff9100");


        pins.setAttribute("geometry", { primitive: "circle", radius: 1 });

        pins.setAttribute("static-body",{
            shape: "sphere",
            radius: 2
        });

    }



})