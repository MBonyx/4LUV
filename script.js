document.getElementById("Sim").onclick = function () {
    if (confirm("Obrigado por ser minha Namorada! sou apaixonado por ti Te Amo Muitoooo, Gostosa. agora Clique em OK.")) {
        window.location.href = "https://www.youtube.com/watch?v=izGwDsrQ1eQ&ab_channel=georgemichaelVEVO";
        var botaoSim = document.getElementById("Sim");
        var painel = document.querySelector(".painel");
    }
}

document.getElementById("Nao").onmouseover = function () {
    fuja();
}

function fuja() {
    var botaoNao = document.getElementById("Nao");
    var painel = document.querySelector(".painel");
    var larguraPainel = painel.offsetWidth;
    var alturaPainel = painel.offsetHeight;
    var larguraBotao = botaoNao.offsetWidth;
    var alturaBotao = botaoNao.offsetHeight;

    var larguraTela = window.innerWidth;
    var alturaTela = window.innerHeight;
    var posicaoX = Math.random() * (larguraTela - larguraBotao);
    var posicaoY = Math.random() * (alturaTela - alturaBotao);
    botaoNao.style.left = posicaoX + "px";
    botaoNao.style.top = posicaoY + "px";
    botaoNao.style.transform = "rotate(360deg)";
    botaoNao.style.background = "red";
    botaoNao.style.color = "white";
    botaoNao.style.border = "2px solid white";
    botaoNao.style.borderRadius = "15px";
    botaoNao.style.cursor = "pointer";
    botaoNao.style.position = "absolute";
    botaoNao.style.transition = "all 0s ease-in-out";
    botaoNao.style.transitionDuration = "-0s";
    botaoNao.style.transitionDelay = "-0s";
    botaoNao.style.transitionTimingFunction = "ease-in-out";
    botaoNao.style.transitionDuration = "-0.1s";

    var novoX = Math.random() * (larguraPainel - larguraBotao);
    var novoY = Math.random() * (alturaPainel - alturaBotao);

    botaoNao.style.left = novoX + "px";
    botaoNao.style.top = novoY + "px";
    botaoNao.style.transform = "rotate(360deg)";
}
