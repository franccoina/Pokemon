// FECHA: 05.07.2024
// CLAN: Gates
// CODERS: David Blandón Mena
//         Luisa Ramírez Cardona
//         Daniel Alejandro
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function index() {
    return __awaiter(this, arguments, void 0, function* (pokemonApi = "https://pokeapi.co/api/v2/pokemon") {
        // Elementos DOM
        let card = document.querySelector(".card-container");
        let linksPaginacion = document.querySelector(".links-paginacion");
        const div = document.createElement("div");
        const img = document.createElement('img');
        let fragment = document.createDocumentFragment();
        let content = document.createElement('div');
        try {
            // Añadir loader antes de la carga de datos
            div.classList.add("w-100", "d-flex", "justify-content-center", "align-items-center", "loader-container");
            img.src = "../assets/svg/loader.svg";
            img.alt = "Cargando...";
            img.classList.add("loader");
            div.appendChild(img);
            card.innerHTML = ""; // Limpiar el contenido anterior
            card.appendChild(div); // Mostrar loader arriba de las cards
            // Obtener datos de la API
            let response = yield fetch(pokemonApi);
            // Manejar errores de respuesta HTTP
            if (!response.ok)
                throw { status: response.status, statusText: response.statusText };
            // Obtener datos JSON
            let data = yield response.json();
            console.log(data);
            // Simular tiempo de carga o animación antes de mostrar datos
            yield new Promise(resolve => setTimeout(resolve, 1000));
            // Mostrar los datos en el DOM
            for (const pokemon of data.results) {
                try {
                    const div = document.createElement('div');
                    const img = document.createElement('img');
                    const figure = document.createElement('figure');
                    const h4 = document.createElement('h4');
                    const p = document.createElement('p');
                    const small = document.createElement('small');
                    // Agregar datos al DOM
                    let res = yield fetch(pokemon.url);
                    if (!res.ok)
                        throw { status: res.status, statusText: res.statusText };
                    let pokemonData = yield res.json();
                    console.log(pokemonData);
                    figure.classList.add("card", "border-dark", "p-4");
                    img.src = pokemonData.sprites.other['official-artwork'].front_default;
                    img.alt = "pokemon-img";
                    img.classList.add("card-img-top");
                    div.classList.add("card-body");
                    h4.textContent = pokemon.name;
                    h4.classList.add("card-title", "text-capitalize", "fw-bold");
                    p.textContent = "Main ability: ";
                    p.classList.add("card-text", "fw-bold");
                    small.textContent = `⭐ ${pokemonData.abilities[0].ability.name}`;
                    small.classList.add("card-text", "text-secondary");
                    div.appendChild(h4);
                    div.appendChild(p);
                    div.appendChild(small);
                    figure.appendChild(img);
                    figure.appendChild(div);
                    content.appendChild(figure);
                }
                catch (err) {
                    console.error('Error fetching individual Pokémon:', err);
                }
                content.classList.add("d-flex", "flex-wrap", "gap-5", "justify-content-center");
                fragment.appendChild(content);
            }
            // Limpiar contenido anterior
            card.innerHTML = "";
            // Agregar nuevo contenido
            card.appendChild(fragment);
            // Limpiar enlaces de paginación anteriores
            linksPaginacion.innerHTML = "";
            // Mostrar enlaces de paginación
            if (data.previous) {
                const prevLink = document.createElement("a");
                prevLink.textContent = "⬅︎";
                prevLink.href = data.previous;
                prevLink.classList.add("text-secondary");
                linksPaginacion.appendChild(prevLink);
            }
            if (data.next) {
                const nextLink = document.createElement("a");
                nextLink.textContent = "➡︎";
                nextLink.href = data.next;
                nextLink.classList.add("text-secondary");
                linksPaginacion.appendChild(nextLink);
            }
        }
        catch (error) {
            console.error('Error fetching Pokémon list:', error);
        }
    });
}
// Event listener para cargar la página inicial
document.addEventListener("DOMContentLoaded", (e) => __awaiter(void 0, void 0, void 0, function* () {
    yield index(); // Cargar datos al inicio
}));
// Event listener para manejar la paginación
document.addEventListener("click", (e) => {
    var _a;
    const target = e.target;
    if (target.matches(".links-paginacion a")) {
        e.preventDefault();
        let nextPageUrl = (_a = target.getAttribute("href")) !== null && _a !== void 0 ? _a : "https://pokeapi.co/api/v2/pokemon/";
        index(nextPageUrl); // Cargar datos de la página siguiente al hacer clic en el enlace de paginación
    }
});
export {};
