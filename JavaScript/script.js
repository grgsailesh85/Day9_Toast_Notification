let ToastBox = document.getElementById("toastBox");
let successMsg =' <i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errorMsg =' <i class="fa-solid fa-circle-xmark"></i> Please Fix The Error';
let invalidMsg ='<i class="fa-solid fa-circle-exclamation"></i> Invalid Input, Check Again';


const showToast =(msg) =>{
  let Toast = document.createElement('div');
  Toast.classList.add("toast");
  Toast.innerHTML = msg;
  ToastBox.appendChild(Toast);

  if(msg.includes('Error')){
    Toast.classList.add('error');
  }
  if(msg.includes('Invalid')){
    Toast.classList.add('invalid');
  }

  setTimeout(()=>{
    Toast.remove();
  },6000);
}