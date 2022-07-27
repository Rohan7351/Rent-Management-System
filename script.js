function multi(value){
    var diff,x,y;
    x=document.getElementById('rent').value;
    y=document.getElementById('paid').value;
    diff=x-y;
    document.getElementById('pendingAmount').value=diff;
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxYii1I_Ci4G5L3WObShSIrMRr2jfncWrict522_o3QmvBcrNiBeDYRGaBhEL-xdacBfA/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Your Information is Sucessfully uploaded"))
        .catch(error => console.error('Error!', error.message))
})