import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"
import bg from "../assets/bg1.jpg";

 const GptSearch = () => {
  return (
    <div className="">
        <div className="absolute "><img src={bg} alt="" /></div> 
        <GptSearchBar/>
        <GptMovieSuggestion/>

    </div>
  )
}

export default GptSearch