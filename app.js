const bill_amount = document.querySelector('.bill-amount');
const num_of_people = document.querySelector('.num-of-people');

const calculateResult =()=>{
    alert("let's calculate");
};

const validationForm=()=>{
    const people_err = document.querySelector('.people-err');
    const bill_err = document.querySelector('.bill-err');
    const inputs = document.querySelectorAll('input');
    const errors = document.querySelectorAll('.error');
    let isValid=false;

//clearing error messages
inputs.forEach((input)=> input.classList.remove('invalid'));
errors.forEach((error) => error.textContent ='');

    if(bill_amount.value ==''){
        bill_err.textContent ="this field is required";
        bill_amount.classList.add('invalid');
        isValid=true;
    }
    if(isNaN(bill_amount.value)){
        bill_err.textContent="inputs requires just numbers";
        bill_amount.classList.add('invalid');
        isValid=true;
    }
    if(bill_amount.value ==0){
        bill_err.textContent = "can't be zero";
        bill_amount.classList.add('invalid');
        isValid=true;
    }

    if(num_of_people.value ==''){
        people_err.textContent ="this field is required";
        num_of_people.classList.add('invalid');
        isValid=true;

    }
    if(isNaN(num_of_people.value)){
        people_err.textContent="inputs requires just numbers";
        num_of_people.classList.add('invalid');
        isValid=true;
    }
    if(num_of_people.value ==0){
        people_err.textContent = "can't be zero";
        num_of_people.classList.add('invalid');
        isValid=true;
    }
    if(!isValid){
        calculateResult();
    };

};


// const calculateTip = ()=>{
//   const btn_1 = document.querySelector('.btn-1');
//   btn_1.onclick = () => {
//     validationForm();
//     if(!isValid){
//         alert('validated')
//     }
//   } 
// }




document.querySelector('#myform').addEventListener('click',(event)=>{
    event.preventDefault();
    
 document.querySelector(".btn-1").addEventListener("click",()=>{
        validateForm();
    });   
});
