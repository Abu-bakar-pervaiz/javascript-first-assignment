function inch_to_cm_converter() {
	var I_len=document.getElementById('input').value
	var C_len=(2.54*I_len)
	document.getElementById('results').innerHTML="Your Length In Centimeters is :" + parseFloat(C_len) 
}