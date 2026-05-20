import Card from "./Card"

type Props = {
  title: string
  description: string
}

export default function ServiceCard({
  title,
  description,
}: Props) {
  return (
    <Card>

      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-gray-400">
        {description}
      </p>

    </Card>
  )
}