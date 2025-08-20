const age=document.querySelector(".age");
const year = new Date().getFullYear();
const myear=document.querySelector(".myear")
const hyear=document.querySelector(".hyear")
const msgfst=document.querySelector(".fst")
const msgsnd=document.querySelector(".snd")
const message=document.querySelector(".message")

const st=document.querySelector(".st")
const deleteBtn=document.querySelector(".delete")


function ageCalc(){
  let dyear=age.value
    let tyear=year-dyear;
    let hyear=tyear-622;
 document.querySelector(".myear").textContent=`${tyear}m`
 document.querySelector(".hyear").textContent=`${hyear}h`
message.style.display="block";
msgfst.textContent=`oh ${dyear}`
if(dyear<=20){
    msgsnd.textContent=`hey kido go and find yourself a life`
}else {
    msgsnd.textContent=`جدي اااع جدي`
}
}  
st.addEventListener("click",ageCalc)
deleteBtn.addEventListener("click",()=>{
    age.value="";
    myear.textContent="";
    hyear.textContent="";
    window.location.reload();
})