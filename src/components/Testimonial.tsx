export default function Testimonial({
  item,
}: {
  item: {
    text: string;
    imageSrc: string;
    name: string;
    username: string;
  };
}) {
  return (
    <div
      className="p-6 rounded-xl w-[300px] flex flex-col gap-3 rounded-xl drop-shadow-2xl
 shadow border border-gray-200">
      <p className="text-sm">{item.text}</p>
      <div className="flex gap-2">
        <img src={item.imageSrc} width={50} />
        <div className="flex flex-col justify-center">
          <p className="text-sm">{item.name}</p>
          <p className="text-sm">{item.username}</p>
        </div>
      </div>
    </div>
  );
}
