var languages = {
    hn:{
        "language translation" : "Lingua traduzida"
    }
}

function doTranslation(selectedText){
    var val = localStorage.getItem("language");
    if(val == null){
        val="en"
    }
    var languageObj = languages[val]

    if(languageObj!=undefined){
        if(languageObj[selectedText.toLowerCase().trim()] != undefined){
            return languageObj[selectedText.toLowerCase().trim()];
        }
        else {
            return selectedText;
        }
    }
    else{
        return selectedText;
    }
}