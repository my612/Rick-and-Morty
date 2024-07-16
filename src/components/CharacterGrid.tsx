import axios from 'axios';
import { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import { SearchAppBar } from './AppBar';
import PaginationControlled from './BottomPagination';

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    location: string;
    gender: string;
    image: string;
}

interface CharacterGridProps {
    searchParameter: string;
}

export function CharacterGrid({ searchParameter }: CharacterGridProps) {
    const [pageNumber, setPageNumber] = useState(1);
    const [characters, setCharacters] = useState<Character[]>([]);

    const pageChangeHandler=()=>{
        setPageNumber(pageNumber=>pageNumber+1)
    }

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`).then((response) => {
            setCharacters(response.data.results);
            console.log(response.data.results);
        }).catch((error) => {
            console.log(error);
        });
    }, [pageNumber]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/?name=${searchParameter}`).then((response) => {
            setCharacters(response.data.results);
            console.log(response.data.results);
        }).catch((error) => {
            console.log(error);
        });
    }, [searchParameter]);

    return (

        <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", alignItems: "center" }}>
                {
                    characters.map((character) => {
                        return <CharacterCard key={character.id} name={character.name} status={character.status} species={character.species} location={character.location.name} image={character.image} gender={character.gender} />
                    })
                }
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <PaginationControlled pageNumber={pageNumber} setPageNumber={setPageNumber}/>
            </div>
        </div>
    );
}