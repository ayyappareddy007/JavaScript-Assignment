function cubeOfNumber(){
    var n = eval(document.getElementById('n1').value)
    var res
    res = n * n * n
    alert(res)
}
function eraseData(){
    document.getElementById('n1').value = ""
}