const socket =io('https://back-zsxy.onrender.com')

const submit=document.getElementById('submit')
const main=document.getElementById('main')


  submit.addEventListener("click",(event)=>{
    let name=document.getElementById("name").value
    let message=document.getElementById("message").value 
  
    if(!name || !message)
     {
       return alert("All Fielids Are Required Please Minimize Or Close Program And Try Again")
     }  
     socket.emit('newmessage', {user:name,message:message});
    event.preventDefault();
    document.getElementById("myForm").reset() 
  })

    socket.on('message',(result) => {
        const container=`<div class="main">
        <h3 class="name">${result.user}</h3>
      <div class="message-createdAt">
          <p   class="message">${result.message}</p>
        </div>
        </div>`
       main.innerHTML+=container
      window.scrollTo(0, document.body.scrollHeight);
    });



 


/*onload= async() => {
    const main=document.getElementById('main')

    const response = await fetch('https://back-zsxy.onrender.com);
    const result = await response.json();
    result.forEach((item)=>{
      const container=`<div class="main">
      <h3 class="name">${item.user}</h3>
    <div class="message-createdAt">
        <article   class="message">${item.message}</article>
        <div   class="createdAt">
          <small> yy-MM-dd HH:mm</small>
       </div>
      </div>
      </div>`
     main.innerHTML+=container
    })
    window.scrollTo(0, document.body.scrollHeight);
  };
  */
/*
  let content=`<li id="title">title: ${data.title}</li>
  <li>Discription: ${data.title}</li>`
  list.innerHTML+=content*/