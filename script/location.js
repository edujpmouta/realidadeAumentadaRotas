AFRAME.registerComponent("locationfinder", {
    init: function () {
        navigator.geolocation.getCurrentPosition(function (location) {
            console.log(location);
        });
    },
});