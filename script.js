function getOption() {
            
    selectElementOutput = document.querySelector('#selectValue');
    value1=document.getElementById("input").value;
    output = selectElementOutput.value;
    console.log(output);

    selectElementInput = document.querySelector('#Value');
    inputPara = selectElementInput.value;

    if(output!=inputPara){
        if (output=="Fahrenheit") {
            result = (value1 - 32) * (5/9);
        }
        else{
            result=(value1*(9/5))+32;
        }
        document.getElementById("output").innerHTML=result;
    }
    else{
        alert("wrong input Parameter!"); 
    }

}
