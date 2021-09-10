function limitWords(id) {
    var maxWords=100;
    var d=document.getElementById(id);
    if ( d.value.split(' ').length > maxWords ) {
        t=d.value.substring(0,d.value.lastIndexOf(' '));
        d.value=t.substring(0,t.lastIndexOf(' ')+1);
    }
}
