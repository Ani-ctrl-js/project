let sa=document.querySelector('#div3')


  
sa.addEventListener("click",function(){
  let filtersBox=document.querySelector("#div6");

  if(filtersBox.style.display===''||filtersBox.style.display==='none'){
      filtersBox.style.display='block';
  }else{
      filtersBox.style.display='none'; 
  }
})