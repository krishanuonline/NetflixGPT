const GptSearchBar = () => {
  return (
    <div className="pt-[15%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12 z-10">
            <input type="text" className="p-4 m-4 col-span-9" placeholder="What do you want to watch today?" />
            <button className="py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3 font-semibold ">Search Now</button>
        </form>
    </div>
  )
}

export default GptSearchBar