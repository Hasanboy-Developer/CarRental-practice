let nav = document.getElementById("navigision");
        let x = document.getElementById("x");
        let btn = document.getElementById("btn");
        
        btn.onclick = function () {
            if(nav.style.display = "none"){
                nav.style.display = "flex"
            }
        }
        x.onclick = function () {
            nav.style.display = "none"
        }

        
        let regstrform = document.getElementById("regstrform");
        let regesratsiy = document.getElementById("regesratsiy");
        let regx = document.getElementById("regx");
        regx.onclick = function () {
            regstrform.style.display = "none";
        }

        regesratsiy.onclick = function () {
            regstrform.style.display = "flex";
        }