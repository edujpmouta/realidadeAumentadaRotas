window.onload = () => {
    let lat;
    let long;
    let marker;
    navigator.geolocation.getCurrentPosition(position);

    function position(position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        var map = L.map('map').setView([lat, long], 17);
        L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib3ZvY29sb3JpZG8iLCJhIjoiY2wybjdnM3QwMTRyajNqbXhmZjhiZnY4MCJ9.IJAI7VXyE6-R8jQHoylX4A", {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1
        }).addTo(map);
        marker = L.marker([-1.43815, -48.46054]).addTo(map);
        marker.bindPopup("<b>IFPA Campus Belém<b>").openPopup();

        marker.on("dblclick", (e) => {
            window.location.href = "Mapa.html";
        })
    }
}