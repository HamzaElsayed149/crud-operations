var productName = document.getElementById("productName")
var productPrice = document.getElementById("productPrice")
var productCat = document.getElementById("productCat")
var productDesc = document.getElementById("productDesc")
var mainbtn = document.getElementById("mainbtn")
var currentI ;
var newPro ;

if(localStorage.getItem("product")  != null){
    newPro =   JSON.parse(localStorage.product)
    display()

}else{
    var newPro = []
}


function addproduct (){
    var product ={
        name: productName.value,
        Price: productPrice.value ,
        Cat: productCat.value ,
        Desc: productDesc.value,
    }
    newPro.push(product)
    clear()
    localStorage.setItem("product", JSON.stringify (newPro) )
    display()

}

function display (){
    var data =``
    for( var i = 0 ; i< newPro.length ; i++) {
        data += `    <tr>
        <td>${[i]}</td>
        <td>${newPro[i].name}</td>
        <td>${newPro[i].Price}</td>
        <td>${newPro[i].Cat}</td>
        <td>${newPro[i].Desc}</td>
        <td><button class="btn btn-warning" onclick="Update (${i})">Update</button></td>
        <td><button class="btn btn-danger" onclick="del (${i})">Delete</button></td>
    </tr>`
    }
    document.getElementById("tdata").innerHTML= data
}

function clear(){
 productName.value = "",
productPrice.value = "" ,
 productCat.value  = "",
 productDesc.value = ""
}

function del(i){
    newPro.splice(i,1)
    localStorage.product = JSON.stringify(newPro)
    display()
}

function Update (i){
    currentI = i
  
        productName.value = newPro[i].name,
        productPrice.value = newPro[i].Price ,
        productCat.value  = newPro[i].Cat ,
        productDesc.value = newPro[i].Desc
   
mainbtn.classList.add ("d-none");

document.getElementById("updatebtn").classList.replace("d-none" , "d-block")
}
function saveChanges(){
newPro[currentI].name=   productName.value
newPro[currentI].price= productPrice.value
newPro[currentI].cat =  productCat.value
newPro[currentI].Desc =productDesc.value
clear()
display()
   
mainbtn.classList.replace ("d-none" ,"d-block" );
document.getElementById("updatebtn").classList.replace("d-block","d-none" )
}

function search(text) {
    var data ="" ;
    for(var i = 0 ; i < newPro.length ; i++){
        if (newPro[i].name.toLowerCase().includes(text.toLowerCase())){
            data += `    <tr>
            <td>${[i]}</td>
            <td>${newPro[i].name}</td>
            <td>${newPro[i].Price}</td>
            <td>${newPro[i].Cat}</td>
            <td>${newPro[i].Desc}</td>
            <td><button class="btn btn-warning" onclick="Update (${i})">Update</button></td>
            <td><button class="btn btn-danger" onclick="del (${i})">Delete</button></td>
        </tr>`     

        }
    }

document.getElementById("tdata").innerHTML= data

}
