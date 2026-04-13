import { useState, useEffect } from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useNavigate, createSearchParams } from 'react-router-dom';

import { callAPI } from "../utils/CallApi";

const Search = () => {
// Search bar suggestions when user types in search bar
const [suggestions, setSuggestions] = useState(null);
// To keep track of search term key strokes
const [searchTerm, setSearchTerm] = useState("");
// Store currently selected category
const [category, setCategory] = useState("All");
const navigate = useNavigate();

// Function to search when user clicks search button
const onHandleSumbit = (e) => {
e.preventDefault();
console.log("Submit worked");

navigate({
    pathname: "/search",
    search: `${
        createSearchParams({
            category: `${category}`,
            searchTerm: `${searchTerm}`
        })
    }`
})

// After search is submitted, clear search term and reset category to all
setSearchTerm("");
setCategory("All");
}

const getSuggestions = () => {
callAPI(`data/suggestions.json`)
.then((suggestionResults) => {
    setSuggestions(suggestionResults);
})
};

useEffect(() =>{
getSuggestions();
}, [])

  return (
    <div className="w-[100%]">
   <form onSubmit={onHandleSumbit} className="flex items-center w-full h-10 bg-[var(--color-yellow)] rounded">
        <select name="" className="p-2 bg-gray-300 text-black h-full text-xs xl:text-sm rounded-r" id="" onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All</option>
            <option value="Deals">Deals</option>
            <option value="Amazon">Amazon</option>
            <option value="Fashion">Fashion</option>
            <option value="Computers">Computers</option>
            <option value="Home">Home</option>
            <option value="Mobiles">Mobiles</option>
        </select>
        {/* Update search based on what user is typing */}
        <input onChange={(e)=> setSearchTerm(e.target.value)}
          className="w-full h-[100%] text-black  bg-white border-gray-400 px-2 flex items-center grow cursor-pointer"
          type="text"
          placeholder="Search..."
          value={searchTerm}
        />
        <button type="submit" className="w-[45px]">
        <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900"/>
        </button>
        </form>
      {
        suggestions && 
        <div>
            <div className="bg-white text-black w-full z-40 absolute">
                {
                    suggestions.filter((suggestion) => {
                        const currentSearchTerm = searchTerm.toLowerCase();
                        const title = suggestion.title.toLowerCase();
                        return (
                            currentSearchTerm &&
                            title.startsWith(currentSearchTerm) &&
                            title !== currentSearchTerm
                        )
                    })
                    .slice(0, 10)
                    .map((suggestion)=> (
                        <div
                          key={suggestion.id}
                          onClick={() => {
                            setSearchTerm(suggestion.title);
                    //   Send user to search result page once the result is selected from the dropdown
                            navigate({
                              pathname: "/search",
                              search: `${createSearchParams({
                                category: category,
                                searchTerm: suggestion.title
                              })}`
                            });
                          }}
                        >
                          {suggestion.title}
                        </div>
                      ))
                }
            </div>
        </div>
      }
    </div>
  )
}

export default Search