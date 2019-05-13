const url=require('url');


const myURL=new URL("https://mywebsite.com:8000/hello.html?id=100&status=active");

//serialized URL
console.log(myURL.href);
console.log(myURL.toString());

//HOST (root domain )
console.log(myURL.host);

//Hostname
console.log(myURL.hostname);

//PathName

console.log(myURL.pathname);

//Serialized query

console.log(myURL.search);

//Params object
console.log(myURL.searchParams);

//add Params
myURL.searchParams.append('abc','123');
console.log(myURL.searchParams);

//loop through params
myURL.searchParams.forEach((value,name)=>console.log(`${name}:${value}`));