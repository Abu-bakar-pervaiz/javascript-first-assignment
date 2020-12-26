function temp_converter() {
	var C_temp=document.getElementById('input').value
	var F_temp=32+(9/5)*C_temp
	document.getElementById('results').innerHTML="Your Temperature In Fahrenheit is :" + parseInt(F_temp) 
}