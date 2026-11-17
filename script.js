const btn=document.getElementById('reveal'), note=document.getElementById('loveNote');
btn.addEventListener('click',()=>{note.classList.toggle('show');btn.textContent=note.classList.contains('show')?'Sending you the biggest hug 🤗':'Tap for a little love note 💌';});
