export interface Pokemon{
    pokeId:number,
    pokeName:string,
    pokeImg: string,
    pokeImgShiny: string,
    pokeType: string,
    pokeLocation: string,
    pokeAbilities: string,
    pokeMoves: string,
    // evopPath:[]
}


export interface IPokeType{
    type: {
        name:string
    }
}

export interface IPokeAbility{
    ability: {
        name:string
    }
}
export interface IPokeMoves{
    move: {
        name:string
    }
}