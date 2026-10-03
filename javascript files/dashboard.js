const inputPart=document.getElementById('input-part');
const inputBox=document.getElementById('inpt');
const addBtn=document.getElementById('add-btn');
const outputPart=document.getElementById('output-div');

inputBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});

addBtn.addEventListener('click',()=>
{
    const inputText=inputBox.value.trim();
    if(inputText=="") return;

    const outputBox=document.createElement('div');
    outputBox.className='output-box';

    const span=document.createElement('span');
    span.innerText=inputText;

    const checkBox=document.createElement('input');
    checkBox.type='checkbox';
    checkBox.className='check-box';

    checkBox.addEventListener('click',()=>
    {
        if(checkBox.checked)
        {
            span.classList.add('completed');
        }
        else{
            span.classList.remove('completed');
        }
    })

    const delBtn=document.createElement('button');
    delBtn.className='delete-btn';
    delBtn.innerText='Delete';

    delBtn.addEventListener('click',()=>
    {
        outputBox.remove();
    });

    outputBox.appendChild(checkBox);
    outputBox.appendChild(span);
    outputBox.appendChild(delBtn);
    outputPart.appendChild(outputBox);

    inputBox.value=" ";
});