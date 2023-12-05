function simpleInterest(){
    var p = eval(document.getElementById('n1').value)
    var r = eval(document.getElementById('n2').value)
    var t = eval(document.getElementById('n3').value)
    var si
    si = (p * t * r) / 100
    alert(si)
}
function eraseData(){
    document.getElementById('n1').value = ""
    document.getElementById('n2').value = ""
    document.getElementById('n3').value = ""
}