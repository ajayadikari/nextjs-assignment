import Box from "./Box"
import GradientText from "./GradientText"

const Heading = ({ boxText, stHead, gradHead, endHead, desc }) => {
  return (
    <div className="flex flex-col justify-between items-center md:w-3xl m-auto">
      <Box text={boxText} />
      <h1 className="text-5xl font-bold mt-5">{stHead} <GradientText text={gradHead}/> {endHead}</h1>
      <p className="text-xl text-gray-400 mt-5 text-center">{desc}</p>
    </div>
  )
}

export default Heading
