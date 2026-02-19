function encrypt (){
    const text = document.getElementById('text_textbox');
    let key = document.getElementById('key_textbox');
    const result = document.getElementById('ciphered_text');
    
    key.value = key.value % 26
}