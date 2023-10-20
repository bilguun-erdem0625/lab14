let display='';
let row = document.querySelector('.row');
	fetch(`https://fakestoreapi.com/products`).then(
	response => response.json()
).then(
	data => {
		console.log(data);
		(data.slice(0,dws4)).map(
			product =>{
				console.log(product.title);
				console.log(product.image);
				display +=`<div class="col-md-3">
					<div class="card">
						<img src="${product.image}">
						<h5>${product.title}<h5>
						<p class="${product.price}"></p>
						<p class="${product.category}"></p>
					</div>
				</div>`
				row.innerHTML=display;
			}
			)
	}
	
)


