let weight,height,bmi;

weight= document.getElementById('weight').addEventListener('input',function(){
           weight= parseInt(this.value)
           console.log(weight);
           bmidemo()
         })
         height= document.getElementById('height').addEventListener('input',function(){
           height= parseInt(this.value)
           console.log(height);
           bmidemo()
          })
function bmidemo() {
  bmi= weight/(height/100)**2
  bmi=bmi.toFixed(0);
}
function BMI(bmi) {
  console.log(bmi,"bmi");
  if(bmi===undefined){
    document.getElementsByClassName('bmiClass')[0].innerText="Please Enter Values!"
    document.getElementsByClassName('bmiClass')[0].style.color="#b91c1c";
  }else{
   document.getElementsByClassName('bmiScore')[0].innerText=bmi;
  if (bmi<16){
    document.getElementsByClassName('bmiClass')[0].innerText="Severe Thinness"
    document.getElementsByClassName('bmiClass')[0].style.color="##22c55e";
  }else if(bmi<17){
    document.getElementsByClassName('bmiClass')[0].innerText="Moderate Thinness"
    document.getElementsByClassName('bmiClass')[0].style.color="#84cc16";
  }else if(bmi<18.5){
    document.getElementsByClassName('bmiClass')[0].innerText="Mild Thinness"
    document.getElementsByClassName('bmiClass')[0].style.color="#eab308";
  }else if(bmi<25){
    document.getElementsByClassName('bmiClass')[0].innerText="Normal"
    document.getElementsByClassName('bmiClass')[0].style.color="red";
  }else if(bmi<30){
    document.getElementsByClassName('bmiClass')[0].innerText="Overweight"
    document.getElementsByClassName('bmiClass')[0].style.color="#f97316";
  }else if(bmi<35){
  document.getElementsByClassName('bmiClass')[0].innerText="Obese Class I"
  document.getElementsByClassName('bmiClass')[0].style.color="#ef4444";
}else{
  document.getElementsByClassName('bmiClass')[0].innerText="Obese Class II"
  document.getElementsByClassName('bmiClass')[0].style.color="#b91c1c";
}
}
}


function ResetValues() {
 location.reload()
}