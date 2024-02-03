import CardImage from "../assets/pexels-cottonbro-studio-5435440.jpg"
import Image from "next/image" 
const Card = ({title}:{title:string}) => {
    // console.log(props);
    
  return (
    <div>
      <div className="border border-black flex flex-col w-[200px] bg-white">
        <div className="">
        <Image className="w-[200px] h-[150px]" src={CardImage} alt="Card" />
        </div>
        <h2 className="text-2xl font-extrabold text-center">{title}</h2>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos nulla cupiditate corporis atque quo praesentium!</p>
      </div>
    </div>
  )
}

export default Card;
