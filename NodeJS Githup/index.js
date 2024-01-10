const http=require("http")
const FS=require("fs")
let HostName="127.0.0.2";
let PORT=4000;
let multiPageApp=http.createServer((req,res)=>
{
    let {method,url}=req
    console.log(method,url)
    if(method=="GET")
    {
        if(url=="/")
        {
            let data=FS.readFileSync("./Public/html/index.html","utf-8")
            console.log(data)
            res.write(data)
            res.end()
        }
        if(url=="/Style")
        {
            let data=FS.readFileSync("./Public/CSS/index.css","utf-8")
            res.write(data)
            res.end()
        }
        if(url=="/font")
        {
            let data=FS.readFileSync("../../fontawesome/FA/css/all.css","utf-8")
            res.write(data)
            res.end()
        }
        if(url=="/font1")
        {
            let data=FS.readFileSync("../../fontawesome/FA/js/all.js","utf-8")
            res.write(data)
            res.end()
        }
        if(url=="/webfonts/fa-solid-900.woff2")
        {
            let data=FS.readFileSync("../../fontawesome/FA/webfonts/fa-solid-900.woff2")
            res.write(data)
            res.end()
        }
        if(url=="/webfonts/fa-solid-900.tff")
        {
            let data=FS.readFileSync("../../fontawesome/FA/webfonts/fa-solid-900.tff")
            res.write(data)
            res.end()
        }
        if(url=="/about.css")
        {
            let data=FS.readFileSync("./Public/CSS/about.css","utf-8")
            res.write(data)
            res.end()
        }
        if(url=="/about")
        {
            let data=FS.readFileSync("./Public/html/about.html","utf-8")
            res.write(data)
            res.end()
        }
        if(url=="/contact.css")
        {
            let data=FS.readFileSync("./Public/CSS/contact.css","utf-8")
            res.write(data)
            res.end()
        }
        if(url=="/contact")
        {
            let data=FS.readFileSync("./Public/html/contact.html","utf-8")
            res.write(data)
            res.end()
        }
        if(url=="/signUp.css")
        {
            let data=FS.readFileSync("./Public/CSS/signUp.css","utf-8")
            res.write(data)
            res.end()
        }
        if(url=="/signUp")
        {
            let data=FS.readFileSync("./Public/html/signUp.html","utf-8")
            res.write(data)
            res.end()
        }
    }
})

multiPageApp.listen(PORT,HostName,()=>
{
    console.log("Server Started")
    console.log(`The server is started at http://${HostName}:${PORT}`)
})
// const http=require("http")
// const FS=require("fs")
// let PORT=4000;
// let HostName="127.0.0.3"
// let server=http.createServer((req,res)=>
// {
//     let {method,url}=req
//     console.log(method,url)
//     if(method=="GET")
//     {
//         if(url=="/")
//         {
//             let data=FS.readFileSync("./Public/html/index.html","utf-8")
//             console.log(data)
//             res.write(data)
//             res.end()
//         }
//         if(url=="/Style")
//         {
//             let data=FS.readFileSync("./Public/CSS/index.css","utf-8")
//             res.write(data)
//             res.end()
//         }
//     }
// })
// server.listen(PORT)
// console.log(`THE server is started at http://${HostName}:${PORT}`)