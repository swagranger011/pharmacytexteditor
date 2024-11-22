document.getElementById("textbutton").addEventListener("click", translate);
document.getElementById("clear").addEventListener("click", clear);

function stringContainsNumber(_string) {
    return /\d/.test(_string);
  }

function translate() {
    let text = document.getElementById("textfield").value.toLowerCase();
    let output = "";
    
    if (text.includes("1t")) {
        output += "Take 1 tablet ";
    }
    if (text.includes("2t")) {
        output += "Take 2 tablets ";
    }
    if (text.includes("3t")) {
        output += "Take 1 tablet ";
    }
    if (text.includes("1c")) {
        output += "Take 1 capsule ";
    }
    if (text.includes("2c")) {
        output += "Take 2 capsule ";
    }
    if (text.includes("3c")) {
        output += "Take 1 capsule ";
    }
    if (text.includes("po")) {
        output += "by mouth ";
    }
    if (text.includes("npo")) {
        output += "not by mouth ";
    }
    if (text.includes("qd")) {
        output += "every day ";
    }
    if (text.includes("qam")) {
        output += "every morning ";
    }
    if (text.includes("qpm")) {
        output += "every night ";
    }
    if (text.includes("bid")) {
        output += "twice a day ";
    }
    if (text.includes("tid")) {
        output += "three times a day";
    }
    if (text.includes("qid")) {
        output += "four times a day";
    }
    if (text.includes("hs")) {
        output += "at bedtime";
    }
    if (text.includes("ac"))
    {
        output += "before meals";
    }
    if (text.includes("aaa"))
    {
        output += "Apply to affect area";
    }
    if (text.includes("ad"))
    {
        output += "right ear";
    }
    if (text.includes("nv"))
    {
        output += "nausea or vomiting";
    }
    if (text.includes("ou"))
    {
        output += "each eye";
    }
    if (text.includes("od"))
    {
        output += "right eye";
    }
    if (text.includes("os"))
    {
        output += "left eye";
    }
    if (text.includes("otc"))
    {
        output += "over the counter";
    }
    if (text.includes("odt"))
    {
        output += "orally disintegrating tablet";
    }
    if (text.includes("aud"))
    {
        output += "apply as directed";
    }
    if (text.includes("prn"))
    {
        output += "as needed";
    }
    if (text.includes("bp"))
    {
        output += "blood pressure";
    }
    if (text.includes("h2o" || "H2O"))
    {
        output += "water";
    }
    if (text.includes("bot"))
    {
        output += "bottle ";
    }
    if (text.includes("dr"))
    {
        output += "delayed release";
    }
    if (text.includes("er" || "xr"))
    {
        output += "extended release";
    }
    if (text.includes("pcn"))
    {
        output += "penicillin";
    }
    if (text.includes("qw"))
    {
        output += "every week";
    }
    if (text.includes("xl"))
    {
        output += "extra long";
    }
    if (text.includes("w/o"))
    {
        output += "without";
    }
    if (text.includes("w/"))
    {
        output += "with";
    }
    if (text.includes("vag"))
    {
        output += "vaginally";
    }
    if (text.includes("uti"))
    {
        output += "urinary tract infection";
    }
    
    if (output === "") {
        document.getElementById("sig").innerHTML = "Invalid SIG! Please try again!";
    } else {
        document.getElementById("sig").innerHTML = output;
    }
}


function clear() {
    document.getElementById("sig").innerHTML = "";
}