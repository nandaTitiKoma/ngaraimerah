// Latihan 2: Komponen Blink
AFRAME.registerComponent("blink", {
    schema: { interval: { default: 500 } },
    init: function () {
        this.lastToggle = 0;
    },
    tick: function (time) {
        if (time - this.lastToggle > this.data.interval) {
            const v = this.el.getAttribute("visible");
            this.el.setAttribute("visible", !v);
            this.lastToggle = time;
        }
    }
});

// Komponen agar teks menghadap kamera
AFRAME.registerComponent("look-at-camera", {
    init: function () {
        this.cam = document.querySelector("[camera]");
    },
    tick: function () {
        if (!this.cam) return;
        this.el.object3D.lookAt(this.cam.object3D.position);
    }
});