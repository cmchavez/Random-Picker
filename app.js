wdi_16_names = ["Alexander Mireles", "Andre Trelles", "Andrew Ham", "Ari Kanamori", "Busyra Anwar", "Carlos Meza", "Chris Garvin", "Cristal Chavez", "Daley Meistrell", "Daniel Manuel", "Jefferson Choi", "Jessica Grinberg", "John Ward", "Kate Wood", "Kevin Mehrabi", "Max Tran", "Max Plisskin", "Megan Kakitsubo", "Meryl Harden", "Mike McCready", "Nick Dalke","Niels Bischoff", "Paul Aglione", "Rahul Sidhu", "Samuel Chun", "Samuel Amiri", "Sophie Chor","Steve Soter", "Taylor Adams", "Yo Wakita"]

// var pick = Math.floor(Math.random() * wdi_16_names.length)
// var namePicker = wdi_16_names[pick];
// console.log(namePicker);
// var namePicker = wdi_16_names[Math.floor(Math.random() * wdi_16_names.length)];
// console.log(namePicker);

// function pickRandom(){
// 	var namePicker = wdi_16_names[Math.floor(Math.random() * wdi_16_names.length)];
// 	document.getElementById('random').innerHTML = namePicker
// }

function namePick() { 
	return Math.floor(Math.random() * wdi_16_names.length);}

function eachName() {
	document.getElementById("random").innerHTML = wdi_16_names.splice(namePick(),1);
	console.log(wdi_16_names.length)
	if (wdi_16_names.length == 0) {
		wdi_16_names = 	["Alexander Mireles", "Andre Trelles", "Andrew Ham", "Ari Kanamori", "Busyra Anwar", "Carlos Meza", "Chris Garvin", "Cristal Chavez", "Daley Meistrell", "Daniel Manuel", "Jefferson Choi", "Jessica Grinberg", "John Ward", "Kate Wood", "Kevin Mehrabi", "Max Tran", "Max Plisskin", "Megan Kakitsubo", "Meryl Harden", "Mike McCready", "Nick Dalke","Niels Bischoff", "Paul Aglione", "Rahul Sidhu", "Samuel Chun", "Samuel Amiri", "Sophie Chor","Steve Soter", "Taylor Adams", "Yo Wakita"];
	}
}