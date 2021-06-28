window.onload = ()=>{
fetch('https://api.quotable.io/random')
  .then(response =>response.json()).then(data => {
    document.getElementById('author').innerHTML = data.author;
    document.getElementById('content').innerHTML = data.content;
    document.getElementById('date').innerHTML = data.dateAdded;
});
}
