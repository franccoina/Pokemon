export interface listPokemons{
    count:number,
    next: string | null,
    previous: string | null,
    results: {
        name: string,
        url: string
    }[]
}

export interface pokemons {
    id: number,
    name: string,
    sprites: {
        other: {
            'official-artwork': {
                front_default: string;
            };
        };
    },
    abilities: {
        ability: {
            name: string;
        };
    }[];
}
