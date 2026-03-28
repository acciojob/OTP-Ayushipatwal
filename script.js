//your JS code here. If required.
const codes = document.querySelectorAll(".code");
codes[0].focus();
codes.forEach((code, index) => {
	code.addEventListner("input",(e)=>{
		let value =e.traget.value;
		value = value.replace(/[^0-9]/g, "");
		code value=value;
		if (value && index < codes.length - 1) {
    codes[index + 1].focus();
}
		code.addEventListener("keydown", (e) => {
			if (e.key === "Backspace") {
				if (code.value !== "") {
                    code.value = "";
}
				else if (index > 0) {
    codes[index - 1].focus();
    codes[index - 1].value = "";
}
		
	})