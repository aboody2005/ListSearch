let button=document.getElementById('btn');


button.onclick=function ListSearch (){
    let input1 = document.getElementById('input1').value,
    input2=document.getElementById('input2').value,
    inputSearch=input1.includes(input2),
    message=document.getElementById('message');
    if(inputSearch===true){
      let input3= input1.replaceAll(input2,`<mark>${input2}</mark>`)
        message.innerHTML=input3;
    }else{
        message.innerHTML=`Not Found`;
    }
}