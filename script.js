function run(){
    let htmlCode = document.getElementById("html-code");
    let csscode = document.getElementById("css-code");
    let jscode = document.getElementById("js-code");
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML = htmlCode.value;
    output.contentWindow.eval(jscode.value)
}