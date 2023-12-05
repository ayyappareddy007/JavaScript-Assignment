function average(){
    var a = eval(document.getElementById('n1').value)
    var b = eval(document.getElementById('n2').value)
    var c = eval(document.getElementById('n3').value)
    var res
    res = (a + b + c) / 3
    alert(res)
}
function eraseData(){
    document.getElementById('n1').value = ""
    document.getElementById('n2').value = ""
    document.getElementById('n3').value = ""
}