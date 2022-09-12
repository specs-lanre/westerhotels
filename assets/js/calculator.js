console.log("calculator is running")
// this program adds two numbers
//and prints the result


function add_numbers(){
	
let x =document.getElementById('frst').value
let y =document.getElementById('scnd').value
let z=parseInt(x)+parseInt(y)
console.log(z)
let msg="The sum of  "+x+" and "+y+" is "+z
let dsp =document.getElementById('dsply').innerHTML=msg
}



function sub_numbers(){
	
let x =document.getElementById('frst').value
let y =document.getElementById('scnd').value
let z=parseInt(x)-parseInt(y)
console.log(z)
let msg="The difference of"+ x+" and "+y+" is"+ z
let dsp =document.getElementById('dsply').innerHTML=msg
	
}




