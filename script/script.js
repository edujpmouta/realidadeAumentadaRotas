AFRAME.registerComponent('cursor-listener', {
    init: function () {
        this.el.addEventListener('mouseenter', function () {
            let texto = document.querySelector("#texto");
            let id = this.id;
            switch (id) {
                case "ponto1":
                    texto.setAttribute("text", "width: 1; lineHeight: 50; letterSpacing: 5; color: white; align: center ; value: Ponto 1")
                    break;
                case "ponto2":
                    texto.setAttribute("text", "width: 1; lineHeight: 50; letterSpacing: 5; color: white; align: center ; value: Ponto 2")
                    break;
                case "ponto3":
                    texto.setAttribute("text", "width: 1; lineHeight: 50; letterSpacing: 5; color: white; align: center ; value: Ponto 3")
                    break;
                case "ponto4":
                    texto.setAttribute("text", "width: 1; lineHeight: 50; letterSpacing: 5; color: white; align: center ; value: Ponto 4")
            }
            texto.setAttribute("visible", true);
        });

        this.el.addEventListener('mouseleave', function () {
            let texto = document.querySelector("#texto");
            texto.setAttribute("visible", false);
        });
    }
});