function square(){
    var n1 = eval(document.getElementById('n1').value)
    var n2 = eval(document.getElementById('n2').value)
    var squ
    squ = (n1 + n2) * (n1 + n2)
    alert(squ)
}

function eraseData(){
    document.getElementById('n1').value = ""
    document.getElementById('n2').value = ""
}