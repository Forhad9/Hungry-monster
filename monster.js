
let mealSearch = () => {

	document.getElementById("full-Description").style.display = "none";
	document.getElementById("searchItems").innerHTML = ``;
	let searchValue = document.getElementById("searchBox").value;

	if (searchValue == "") {
		document.getElementById("message1").style.display = "block";
	}

	else {
		document.getElementById("message1").style.display = "none";
		if (searchValue.length == 1) {
			let url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchValue}`

			fetch(url)
				.then(res => res.json())
				.then(data => {
					displaySearch(data.meals);
				});

		}
		else {
			let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`

			fetch(url)
				.then(res => res.json())
				.then(data => {
					displaySearch(data.meals);
				});
		}
	}
};

let displaySearch = data => {
	if (data == null) {
		document.getElementById("message2").style.display = "block";
	} else {
		document.getElementById("message2").style.display = "none";


		data.forEach((food) => {
			let itemInformation = `

                    <div class="food" onclick="clickImage('${food.idMeal}')" >
                    	<img src="${food.strMealThumb}" alt="">
                    	<h4>${food.strMeal}</h4>
                    </div>
            `;

			const newDiv = document.createElement("div");
			newDiv.className = "item";
			newDiv.id = "item";
			newDiv.innerHTML = itemInformation;

			let searchSection = document.getElementById("searchItems");
			searchSection.appendChild(newDiv);
		});
	}
};

let clickImage = (id) => {
	const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			details(data.meals[0]);
		});
};


let details = (fullData) => {
	document.getElementById("full-Description").style.display = "block";
	document.getElementById("IngredientList").innerHTML = ``;

	const imageAndNameBox = document.getElementById("imageAnd-name");

	imageAndNameBox.innerHTML = `
	    <h1>${fullData.strMeal}</h1>
	     <img src="${fullData.strMealThumb}">
	`;




	let potIngredient = [
		fullData.strMeasure1 + fullData.strIngredient1,
		fullData.strMeasure2 + fullData.strIngredient2,
		fullData.strMeasure3 + fullData.strIngredient3,
		fullData.strMeasure4 + fullData.strIngredient4,
		fullData.strMeasure5 + fullData.strIngredient5,
		fullData.strMeasure6 + fullData.strIngredient6,
		fullData.strMeasure7 + fullData.strIngredient7,
		fullData.strMeasure8 + fullData.strIngredient8,
		fullData.strMeasure9 + fullData.strIngredient9,
		fullData.strMeasure10 + fullData.strIngredient10,
		fullData.strMeasure11 + fullData.strIngredient11,
		fullData.strMeasure12 + fullData.strIngredient12,
		fullData.strMeasure13 + fullData.strIngredient13,
		fullData.strMeasure14 + fullData.strIngredient14,
		fullData.strMeasure15 + fullData.strIngredient15,
		fullData.strMeasure16 + fullData.strIngredient16,
		fullData.strMeasure17 + fullData.strIngredient17,
		fullData.strMeasure18 + fullData.strIngredient18,
		fullData.strMeasure19 + fullData.strIngredient19,
		fullData.strMeasure20 + fullData.strIngredient20,
	];


	potIngredient.forEach(element => {
		if (element != 0 && element != null) {
			const IngredientList = document.getElementById("IngredientList");

			const makeLI = document.createElement("li");
			makeLI.innerHTML = ` ${element} `;
			IngredientList.appendChild(makeLI);
		}
	});


};










