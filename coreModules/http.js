// let http=require("http")
//  let server=http.createServer((request,response)=>
// {
//     response.writeHead(200,{"Content-type":"text/plain"})
//     response.write("Hello This is Server")
//     response.end();
// })
// server.listen(3000,()=>
// {
//     console.log("Server is Listening at 3000 Port")
// })
const http = require("http");
const FS = require("fs");
const server = http.createServer((request, response) => {
  console.log(request.url, request.method);
  if (request.url == "/" && request.method == "GET") {
    response.write("HEllO THIS IS NODE SERVER");
    response.end();
  }
  if (request.url == "/about") {
    response.write("Hello This is About Page");
    response.write("\nHello This is About Page");

    response.end();
  }
  if (request.url == "/contact") {
    let data = FS.readFileSync("./ex.txt", "utf-8");
    response.write(data);
    response.end();
  }
});

server.listen(4000);
