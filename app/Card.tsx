type Props = {
    children: React.ReactNode
  }
  
  export default function Card({ children }: Props) {
    return (
      <div className="
        border border-white/10
        rounded-3xl
        p-8
        bg-white/5
        backdrop-blur-xl
        hover:scale-105
        transition
        duration-300
        shadow-2xl
      ">
        {children}
      </div>
    )
  }