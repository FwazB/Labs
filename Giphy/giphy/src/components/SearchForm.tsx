import { FormEvent, useState } from "react";

interface SearchFormProps{
    formSubmit: (searchTerm:string) => void;
}

export function SearchForm({formSubmit}:SearchFormProps){
    const [searchTerm, setSearchTerm] = useState<string>('');

    function handleSubmit(event:FormEvent){
        event.preventDefault();
        
        if(searchTerm !== ''){
            formSubmit(searchTerm);
        }
    }

    return(
        <div className="SearchForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="searchBox">Search For a GIF</label>
                <input type="text" 
                    name="searchBox" 
                    id="searchBox" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}  />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}