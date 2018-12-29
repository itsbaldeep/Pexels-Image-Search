// Number of photos to be displayed
const photo_count = 30;

// URL of Pexels API
const url = `https://api.pexels.com/v1/search?per_page=${photo_count}&query=`;

// DOM Elements for Input and Results Div
const input = document.querySelector("#input");
const imgs = document.querySelector("#results");

// Displaying photos to the webpage
const showPhotos = data => {
	// Removing any previous images. if any
	while (imgs.firstChild) imgs.removeChild(imgs.firstChild);

	// Adding Images to the Results div
	for (let photo of data.photos) {
		const img = document.createElement("img");
		img.id = "img";
		img.src = photo.src.original;
		imgs.appendChild(img);
	}
};

// Fetching from the API
input.addEventListener("keydown", e => {
	// Request only if Enter is pressed and there is an input value
	if (e.key == "Enter" && input.value)
		// Making request to the API with the API Key in headers
		fetch(url + input.value, { headers: new Headers({ Authorization: key }) })
			.then(res => res.json())
			.then(showPhotos)
			.catch(err => console.error(err));
});
