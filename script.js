//! callback hell

/*function userList(){
    console.log ("Kullanıcı Listesi");
}
function productList(){
    console.log ("Ürün Listesi");
}
function priceList(){
    console.log ("Fiyat  Listesi");
}
function dataList(waitTime,callback){
    setTimeout(function(){
        callback();
    },waitTime *1000);
    console.log("beklemeyen işlem");
}
dataList(1,function(){

    userList();
    dataList(1, function(){
        productList()
        dataList(3, function () {
            priceList();
            
        });
    });
});*/
//!JAVASCRİPT PROMİSE
function userList(){
    console.log ("Kullanıcı Listesi");
}
function productList(){
    console.log ("Ürün Listesi");
}
function priceList(){
    console.log ("Fiyat  Listesi");
}

// function myPromise (waitTime,callback){
//       return new Promise(function(resolve , reject ){
//         setTimeout(() => {
// if (callback){
//     resolve(callback());
  
// }else{
//     reject();
// }
//         },waitTime * 1000);
    

//       });

// }
//  myPromise(1,userList).then(()=> myPromise(2,
//     productList)).then(()=> myPromise(1,priceList))
//.then(() => myPromise())
// catch((error) => console.log(error)).finally (() => console.log("işlem tamamlandı"));
// console.log(mypromise().then("sonraki işlem").then ("sonraki işlem "));



//! javascript async / await
/*function dataList(waitTime ,callback){
    return new Promise (function(resolve , reject){
        setTimeout(()=> {
            if(callback){
            resolve(callback());
        }else{
            reject();
        }

        }, waitTime *1000);

        });
    

}
async function executeDataList(){

    try{
await dataList(1,userList);
await dataList(2,productList);
 await dataList(3,priceList);
    }catch (error){
        console.log(error);

    }finally{
        console.log("işlem tamamlandı ");
    }

}
executeDataList();*/
// const xhr = new XMLHttpRequest()
// xhr.open("GET","https://jsonplaceholder.typicode.com/users" );
// xhr.onload = function(){
//     if(xhr.status === 200){
//    const data =JSON.parse(xhr.responseText);
//    console.log(data.length);
//    myFunction(data);

// }

// }

// xhr.send();
// function myFunction(userList){
//     const
//  data = userList.map((user) => user.name )
//  console.log(data);
// }
//! fetch ile veri çekme 
/*function getUserData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then ((data)=> console.log(data));
}
getUserData()*/

//! async / await ile veri çekme


 async function  getUserData(){
    try {
        const response = await fetch ("https://jsonplaceholder.typicode.com/users");
        const userList = await response.json();
     getUserList(userList)
    }catch (error){
        console.log(error);
    }finally{
        console.log("işlem tamamlandı");
    }
    }
    function getUserList(userList){
        const userListDOM = document.querySelector(".user-list")
        
        
        let userItem = ""
        userList.forEach((user) => {
            userItem+=` <li class="user-card">
            <img src = "https://i.pravatar.cc/150? img =${user.id}"
            alt="${user.name}"
            class="user-image"
            />
            <div class="user-info">

                <h3 class="user-name">${user.name}</h3>
                <p class ="user-username">${user.lastname}</p>
                
                <p class ="user-email">${user.email}</p>
                
                <p class ="user-website">${user.website}</p>
                
                <p class = "user-userId">${user.id}</p>

            </div>
        </li>` 

        })
        userListDOM.innerHTML= userItem
    }
 
 getUserData();