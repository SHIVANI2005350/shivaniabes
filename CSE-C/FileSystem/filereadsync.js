 const fs=require("fs");
 const data=fs.readFileSync("./data.txt","utf-8");
// // console.log(data.toString());
console.log(data)
// // fs.writeFileSync("./data1.txt", "Hello ABES","UTF-8"); 
// // fs.writeFileSync("./data1.txt","Hello ABESEC","utf-8");
// // fs.appendFileSync("./data1.txt","students","utf-8");
// // fs.renameSync("./data2.txt","./data3.txt");
// fs.unlinkSync("./data3.txt");
if(data.match("H")){
    console.log("File contain 'H' ");
    const newdata=data.replace("H","ABES");
    fs.writeFileSync("./data.txt",newdata,"utf-8");
}