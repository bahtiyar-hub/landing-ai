type ButtonProps = {
    text: string
    link: string
  }
  
  export default function Button({ text, link }: ButtonProps) {
    return (
      <a href={link} target="_blank">
        <button className="bg-green-500 hover:bg-green-400 hover:scale-110 text-black px-8 py-4 rounded-full font-bold transition duration-300 shadow-2xl">
          {text}
        </button>
      </a>
    )
  }