const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-36 px-10">  
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/3">{overview}</p>
        <div className="">
            <button className="bg-gray-500 text-white p-2 px-12 text-xl bg-opacity-70 rounded-md font-semibold"> ▶ Play</button>
            <button className="mx-2 bg-gray-500 text-white p-2 px-12 text-xl bg-opacity-70 rounded-md font-semibold">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle 