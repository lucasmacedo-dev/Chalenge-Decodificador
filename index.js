const matriz = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
];

const matriz_inversa = [
    ['enter', 'e'],
    ['imes', 'i'],
    ['ai', 'a'],
    ['ober', 'o'],
    ['ufat', 'u']
];

function criptografar(frase_Original) {
    let frase_Criptografada = frase_Original;

    for (const [original, substituto] of matriz) {
        const regex = new RegExp(original, 'g');
        frase_Criptografada = frase_Criptografada.replace(regex, substituto);
    }

    return frase_Criptografada;
}

function btn_criptografar() {
    let frase_Original = document.getElementById('text_area').value;

    // Verificar se a frase original contém apenas letras minúsculas e sem acentos
    if (/^[a-z]+(?: [a-z]+)*$/.test(frase_Original)) {
        let frase_Criptografada = criptografar(frase_Original);
        document.getElementById('message_area').value = frase_Criptografada;
        aparecer_div('message_area');
        ocultar_div('message_search_div');
    } else {
        alert('A frase original deve conter apenas letras minúsculas e sem acentos.');
    }
}

function descriptografar(frase_Original) {
    let frase_Descriptografada = frase_Original;

    for (const [substituto, original] of matriz_inversa) {
        const regex = new RegExp(substituto, 'g');
        frase_Descriptografada = frase_Descriptografada.replace(regex, original);
    }

    return frase_Descriptografada;
}

function btn_descriptografar() {
    let frase_Original = document.getElementById('text_area').value;
    let frase_Descriptografada = descriptografar(frase_Original);
    document.getElementById('message_area').value = frase_Descriptografada;
    aparecer_div('message_area');
    ocultar_div('message_search_div');
}

function aparecer_div(id) {
    document.getElementById(id).style.display = "block";
}

function ocultar_div(id) {
    document.getElementById(id).style.display = "none";
}

function btn_Copiar() {
    let textarea = document.getElementById('message_area');
    textarea.select();
    document.execCommand('copy');
    ocultar_div('message_area');
    aparecer_div('message_search_div');
    alert('Texto copiado para a área de transferência!');
}

function resizeMainBloc2() {
    const mainBloc2 = document.getElementById('main_bloc2');
    const textarea = document.getElementById('message_area');

    mainBloc2.style.height = textarea.scrollHeight + 'px';
}
