let short = document.querySelector("#short");
// console.log("short");



let today = new Date();

short.innerHTML = ` <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short"
	}
).format(today)}</span> `;