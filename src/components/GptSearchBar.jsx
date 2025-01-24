import { useRef } from "react"
// import operAi from "../utils/openAi";

const GptSearchBar = () => {

    const searchText = useRef();

    const handleGptSearchClick = async () => {
        alert("Your search - "+searchText.current.value+" is a correct search, but Sorry! there was some problem with GPT ");
        //Make an api call to get the movie result

        // const gptQuery = "Act as a movie recommendation system and suggest some movies for the query " + searchText.current.value + "only give me name of 10 movie , comma seperated like eg: move1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10";

        // const  gptResult = await operAi.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery }],
        //     model: 'gpt-3.5-turbo',
        //   });

        // console.log(gptResult.choices);
        // console.log(gptResult);
    }

  return (
    <div className="pt-[15%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12 z-10" onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder="What do you want to watch today?" />
            <button className="py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3 font-semibold " onClick={handleGptSearchClick}>Search Now</button>
        </form>
    </div>
  )
}

export default GptSearchBar