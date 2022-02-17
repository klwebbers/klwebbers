// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})
$("#submit-form").submit((e)=>{
	e.preventDefault()
	$.ajax({
		url:"https://script.google.com/macros/s/AKfycbwfiXlJFdhqweC2pEEwb7VoILQGnx4eRGExGUER2u540mNo_qhM79xcUEt_DHAsP8vQ/exec",
		data:$("#submit-form").serialize(),
		method:"post",
		success:function (response){
			alert("Form submitted successfully")
			window.location.reload()
			//window.location.href="https://google.com"
		},
		error:function (err){
			alert("Something Error")

		}
	})
})