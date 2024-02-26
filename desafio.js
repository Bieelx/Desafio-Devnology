  // Extrair texto
const geral = {
	nome: document.querySelector('h2.title-1[property="food:name"][itemprop="name"]').textContent,
	marca: document.querySelector('#field_brands  a').textContent,
	nova: document.querySelector('#panel_nova_content .panel_text p').textContent,
	eco: document.querySelector('#panel_ecoscore_content .grade_d_title').textContent,
  igredientes: document.querySelector('#panel_ingredients_content .panel_text').textContent,
	
  // console.log
  exibirTexto: function() {
		console.log('Nome do produto:', this.nome);
		console.log('Marca do produto:', this.marca);
    console.log('Nova-Score:', this.nova);
    console.log('Eco-Score:', this.eco);
    console.log('Igredientes:', this.igredientes);
  }
};

// Mostrar Texto
geral.exibirTexto();

