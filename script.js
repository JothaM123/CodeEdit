function gtt(){
    window.scrollTo(0,0);
}

function change(){
    var html = document.getElementById("html").value;
    var css = "<style>" + document.getElementById("css").value + "</style>";
    var js = "<script>" + document.getElementById("js").value + "</script>";
    var frame = document.getElementById("preview-content").contentWindow.document;
    frame.open();
    frame.write(html+css+js);
    frame.close();
}