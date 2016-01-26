if (typeof(Storage) !== "undefined") {
	// Store
	localStorage.setItem("user_score", 0);
	// Retrieve
	document.getElementById("score").innerHTML = localStorage.getItem("user_score");
}