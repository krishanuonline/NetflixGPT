const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-24 absolute bg-gradient-to-tr from-black">  
        <h1 className="text-6xl font-bold text-white ">{title}</h1>
        <p className="py-6 text-lg w-1/3 text-white">{overview}</p>
        <div className="">
            <button className="bg-white text-black p-2 px-12 text-xl rounded-md font-semibold hover:bg-opacity-90"> ▶ Play</button>
            <button className="mx-2 bg-gray-500 text-white p-2 px-12 text-xl bg-opacity-70 rounded-md font-semibold hover:bg-opacity-100">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle 