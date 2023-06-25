function mudafundo(){
    
    const define_cor1 = document.getElementById("color1").value;
    const define_cor2 = document.getElementById("color2").value;
    const define_cor3 = document.getElementById("color3").value;
    const codigodeg = document.getElementById("codigodeg").value;
    
    document.getElementById('codigo1').value = define_cor1;
    document.getElementById('codigo2').value = define_cor2;
    document.getElementById('codigo3').value = define_cor3;
    
    var estilo = document.createElement('style');    
    document.head.appendChild(estilo);    

    estilo.innerHTML = 'body {'+
    'background: linear-gradient('+codigodeg+'deg,' + define_cor1 + ','+ define_cor2 + ',' + define_cor3 +');'+
    'background-repeat: no-repeat;'+
    'background-attachment: fixed;'+
    '}';
    
}
addEventListener('input', mudafundo)

function copia_code(){
    document.querySelector("#codigo1").select();
    document.execCommand("copy")
}