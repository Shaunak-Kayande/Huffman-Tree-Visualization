function getTreeDetails(codes){
    let list = document.getElementById("codes");
    for (let i = 0; i < codes.length; i++) {
        let ele = document.createElement('li');
        let text = codes[i].c + " : " + codes[i].code;
        let task = document.createTextNode(text);
        ele.appendChild(task);
        list.appendChild(ele);
    }
}

function textDetails(c, data){
    this.c = c;
    this.data = data;
}

document.getElementById('btn').addEventListener('click', submitText);

function submitText(e){
    let mylist = document.getElementById("codes");
    mylist.innerHTML = '';
    let txt = document.getElementById('huff-text').value;

    emptyArray(charArray1);
    emptyArray(charfreq1);
    emptyArray(codes);
    emptyArray(huffmanQueue);

    for(let i=0; i<txt.length; i++){
        if(txt[i] == " ") continue;
        let n = charArray1.indexOf(txt[i]);
        if(n == -1){
            charArray1.push(txt[i]);
            charfreq1.push(1);
        }
        else{
            charfreq1[n]+= 1;
        }
    }
    setup();
} 

function emptyArray(array) {
    while(array.length > 0) {
        array.pop();
    }
}