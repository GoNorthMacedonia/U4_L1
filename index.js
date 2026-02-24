function encrypt (){
    const text = document.getElementById('text_textbox');
    let key = document.getElementById('key_textbox');
    const result = document.getElementById('ciphered_text');
    
    if (key.value % 26 !== NaN){
        key.value = key.value % 26;
    }
    else if (key.value == ''){
        key.value = 'Enter a number here before trying to encode or decode a message'
    }
    else{
        key.value = 'Enter a whole number'
    }

}