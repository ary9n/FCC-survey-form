function showDiv(select) {
    if (select.value == 'defense') {
        document.getElementById('def').style.display = "block";
        document.getElementById('mid').style.display = "none";
        document.getElementById('fwd').style.display = "none";
    } else if (select.value == 'midfield') {
        document.getElementById('mid').style.display = "block";
        document.getElementById('def').style.display = "none";
        document.getElementById('fwd').style.display = "none";
    } else if (select.value == 'forward') {
        document.getElementById('mid').style.display = "none";
        document.getElementById('def').style.display = "none";
        document.getElementById('fwd').style.display = "block";
    }
}