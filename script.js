let Result = document.getElementById('display');

function appendToDisplay(value) {
  Result.value += value;
}

function clearDisplay() {
  Result.value = '';
}
function deleteValue() {   
   Result.value = Result.value.slice(0,-1);
   document.getElementById('display').value = Result.value
}
function formatNumber(num) {
  if (num % 1 !== 0) {
      return parseFloat(num).toFixed(3);
  }
  return num;
}
function calculate(){
       try{
        let result = eval(Result.value);
        
        result = formatNumber(result);

        Result.value = result;
        document.getElementById('display').value = Result.value
    }
    catch(error){
        Result.value = "Error"
        document.getElementById('display').value = Result.value
    }

  }
  