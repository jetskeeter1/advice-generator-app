fetch('https://api.adviceslip.com/advice')
.then(res =>{
    return res.json();
}).then( data => {
    const advice = `${data.slip.advice}`;
    const idnum = `${data.slip.id}`;
    document.querySelector(".advice-id").innerHTML = "ADVICE #" + idnum;
    document.querySelector(".advice-quote").innerHTML = "\"" + advice + "\"";
}).catch(function(error){console.log(error)})