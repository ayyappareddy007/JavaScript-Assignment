function areaOfCircle(){
    var r = eval(document.getElementById('id1').value)
    var pi = 3.14
    var area = pi * r * r
    alert(area)
    console.log(area);
}
function eraseData(){
    document.getElementById('id1').value = ""
}