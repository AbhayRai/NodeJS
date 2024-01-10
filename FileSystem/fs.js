const FS=require("fs")

                    /* Reading File */


//Sync

let data=FS.readFileSync("./ex.txt","utf-8")
console.log(data)
data=FS.readFileSync("./ex.txt")
console.log(data.toString())

//Async

FS.readFile("./ex.txt","utf-8",(err,data)=>
{
    if(err) throw err;
    console.log(data);
})


                    /* Write File */

//Sync

FS.writeFileSync("./demo.txt","This is Created by NODE JS","utf-8")
FS.writeFileSync("./demo.html","<h1>Hello World</h1>","utf-8")

//Async 

FS.writeFile("./demo1.txt","Practice React",(err)=>
{
    if(err) throw err;
})

                    /* Updation */

//Sync

 FS.appendFileSync("./demo1.txt","\nPractice NodeJS")

//Async

FS.appendFile("./demo.html","\n<p>Jspider</p>",(err)=>
{
    if(err) throw err;
})

//if there is no file it will create new file, if file is present it will update
// FS.appendFile("./demo.html","\n<p>Jspider</p>",(err)=>
// {
//     if(err) throw err;
// })


                    /* Delete */

//Sync 

// FS.unlinkSync("./demo1.txt")

//Async

// FS.unlink("./demo.txt",(err)=>
// {
//     if(err) throw err;
// })

                    /* Rename File */
//Sync

//    FS.renameSync("./demo.txt","Index.txt")

//Async

    // FS.rename("./Index.txt","Index.html",(err)=>
    // {
    //         if(err) throw err;
    // })


                    /* Copy File */
                    /* Shallow Copy */
    //Sync

    // FS.linkSync("./demo.html","./Print.txt")

    //Async

    // FS.link("./Print.txt","./Print1.txt",(err)=>
    // {
    //     if(err) throw err;
    // })

                    /* Deep Copy */
//Sync

// FS.copyFileSync("./demo.html","./Print.html")

//Async

// FS.copyFile("./Index.html","./demo.txt",(err)=>
// {
//     if(err) throw err;
// })


                    /* Create Folder */
//creating

// FS.mkdir("./Virat",(err)=>
// {
//     if(err) throw err;
// })

// FS.mkdir("./Rohit",(err)=>
// {
//     if(err) throw err;
// })

//Removing

// FS.rmdir("./Rohit",(err)=>
// {
//     if(err) throw err;
// })