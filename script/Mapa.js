AFRAME.registerComponent('cursor-listener', {
    init: function () {
        this.el.addEventListener('mouseenter', function () {
            let texto = document.querySelector("#texto");
            let id = this.id;
            switch (id) {
                case "ponto1":
                    texto.setAttribute("text", "width: 1; lineHeight: 50; letterSpacing: 5; color: white; align: center ; value: Quadra")
                    break;
                case "ponto2":
                    texto.setAttribute("text", "width: 1; lineHeight: 50; letterSpacing: 5; color: white; align: center ; value: Auditorio")
                    break;
                case "ponto3":
                    texto.setAttribute("text", "width: 1; lineHeight: 50; letterSpacing: 5; color: white; align: center ; value: Biblioteca")
                    break;
                case "ponto4":
                    texto.setAttribute("text", "width: 1; lineHeight: 50; letterSpacing: 5; color: white; align: center ; value: Bloco H");
                    break;
            }
            texto.setAttribute("visible", true);

        });

        this.el.addEventListener('mouseleave', function () {
            let texto = document.querySelector("#texto");
            texto.setAttribute("visible", false);
        });

        this.el.addEventListener("click", function () {
            let latEntity = this.getAttribute("gps-entity-place").latitude;
            let longEntity = this.getAttribute("gps-entity-place").longitude;
            let textoDist = document.querySelector("#textoDist");
            navigator.geolocation.getCurrentPosition((e) => {
                let lat = e.coords.latitude;
                let long = e.coords.longitude;
                let dist = (Math.trunc(getDistanceKm(latEntity, longEntity, lat, long) * 100) / 100) * 1000;
                textoDist.setAttribute("text", "width: 1; lineHeight: 50; letterSpacing: 5; color: white; align: center; value: Distancia: " + dist + " metros");
                textoDist.setAttribute("visible", "true");
                setTimeout(() => {
                    textoDist.setAttribute("visible", "false");
                }, 3000);
            })
        })

    }
});


function getDistanceKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}