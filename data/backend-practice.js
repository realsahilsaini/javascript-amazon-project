//built-in class XMLHTTPRequest is used to make a request to a server and load the response data back into the script.
const xhr =  new XMLHttpRequest();

xhr.addEventListener('load', ()=>
{
    console.log(xhr.response);
});

xhr.open('GET','https://supersimplebackend.dev');

xhr.send();
