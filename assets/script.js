const btnAdiciona = $("#adicionar");
let nota = 1;


btnAdiciona.click(() =>{
    const essaNota = nota;
    $(".todasNotas").append(`<div class="notas nota${essaNota}">
    <div class="menu">
        <button id='ex${essaNota}' class="excluir">excluir</button>
        <button id='co${essaNota}' class="copiar">copiar</button>
    </div>
    <textarea name="" id="texto${essaNota}" cols="40" rows="20"></textarea>
</div>`)
    
    $(`#ex${essaNota}`).click(() =>{
        $(`.nota${essaNota}`).slideUp(50, () => $(`.nota${essaNota}`).remove());
    });   

    $(`#co${essaNota}`).click(() =>{
        async function copia () {
            const textArea = $(`#texto${essaNota}`).val();
            await navigator.clipboard.writeText(textArea);
        }
        copia();
    });
    nota ++;

   
});
