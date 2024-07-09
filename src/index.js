"use strict";
// FECHA: 05.07.2024
// CLAN: Gates
// CODERS: David Blandon
//         Luisa Ramirez
//         Daniel Alejandro
//         Juan Pablo
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function index() {
    return __awaiter(this, arguments, void 0, function (pokemonApi) {
        var card, linksPaginacion, fragment, content, response, data, _i, _a, pokemon, div, img, figure, h4, p, small, res, pokemonData, err_1, prevLink, nextLink, error_1;
        if (pokemonApi === void 0) { pokemonApi = "https://pokeapi.co/api/v2/pokemon"; }
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    card = document.querySelector(".card-container");
                    linksPaginacion = document.querySelector(".links-paginacion");
                    fragment = document.createDocumentFragment();
                    content = document.createElement('div');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 13, , 14]);
                    setTimeout(function () {
                        // Mostrar página de carga
                        card.innerHTML = "\n                <div class=\"w-100 d-flex justify-content-center align-items-center\">\n                    <img class=\"loader\" src=\"../assets/svg/loader.svg\" alt=\"Cargando...\">\n                </div>\n            ";
                    }, 1);
                    return [4 /*yield*/, fetch(pokemonApi)];
                case 2:
                    response = _b.sent();
                    // Manejar errores de respuesta HTTP
                    if (!response.ok)
                        throw { status: response.status, statusText: response.statusText };
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _b.sent();
                    console.log(data);
                    // Simular tiempo de carga o animación antes de mostrar datos
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                case 4:
                    // Simular tiempo de carga o animación antes de mostrar datos
                    _b.sent();
                    _i = 0, _a = data.results;
                    _b.label = 5;
                case 5:
                    if (!(_i < _a.length)) return [3 /*break*/, 12];
                    pokemon = _a[_i];
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 9, , 10]);
                    div = document.createElement('div');
                    img = document.createElement('img');
                    figure = document.createElement('figure');
                    h4 = document.createElement('h4');
                    p = document.createElement('p');
                    small = document.createElement('small');
                    return [4 /*yield*/, fetch(pokemon.url)];
                case 7:
                    res = _b.sent();
                    if (!res.ok)
                        throw { status: res.status, statusText: res.statusText };
                    return [4 /*yield*/, res.json()];
                case 8:
                    pokemonData = _b.sent();
                    console.log(pokemonData);
                    figure.classList.add("card border-dark p-4");
                    img.src = pokemonData.sprites.other['official-artwork'].front_default;
                    img.classList.add("card-img-top");
                    img.alt = "pokemon-img";
                    div.classList.add("card-body");
                    h4.textContent = pokemon.name;
                    h4.classList.add("card-title text-capitalize fw-bold");
                    p.textContent = "Main ability: ";
                    p.classList.add("card-text fw-bold");
                    small.textContent = "⭐";
                    small.textContent = pokemonData.abilities[0].ability.name;
                    small.classList.add("card-text text-secondary");
                    div.appendChild(h4);
                    div.appendChild(p);
                    div.appendChild(small);
                    figure.appendChild(img);
                    figure.appendChild(div);
                    content.appendChild(figure);
                    return [3 /*break*/, 10];
                case 9:
                    err_1 = _b.sent();
                    console.error('Error fetching individual Pokémon:', err_1);
                    return [3 /*break*/, 10];
                case 10:
                    content.classList.add("d-flex", "flex-wrap", "gap-5", "justify-content-center");
                    fragment.appendChild(content);
                    _b.label = 11;
                case 11:
                    _i++;
                    return [3 /*break*/, 5];
                case 12:
                    // Limpiar contenido anterior
                    card.innerHTML = "";
                    card.appendChild(fragment);
                    prevLink = data.previous ? "<a class=\"text-secondary\" href=\"".concat(data.previous, "\">\u2B05\uFE0E</a>") : "";
                    nextLink = data.next ? "<a class=\"text-secondary\" href=\"".concat(data.next, "\">\u27A1\uFE0E</a>") : "";
                    linksPaginacion.innerHTML = prevLink + " " + nextLink;
                    return [3 /*break*/, 14];
                case 13:
                    error_1 = _b.sent();
                    console.error('Error fetching Pokémon list:', error_1);
                    return [3 /*break*/, 14];
                case 14: return [2 /*return*/];
            }
        });
    });
}
// Event listener para cargar la página inicial
document.addEventListener("DOMContentLoaded", function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, index()];
            case 1:
                _a.sent(); // Cargar datos al inicio
                return [2 /*return*/];
        }
    });
}); });
// Event listener para manejar la paginación
document.addEventListener("click", function (e) {
    var _a;
    var target = e.target;
    if (target.matches(".links-paginacion a")) {
        e.preventDefault();
        var nextPageUrl = (_a = target.getAttribute("href")) !== null && _a !== void 0 ? _a : "https://pokeapi.co/api/v2/pokemon/";
        index(nextPageUrl); // Cargar datos de la página siguiente al hacer clic en el enlace de paginación
    }
});
