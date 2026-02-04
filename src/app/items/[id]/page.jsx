import { getSingleItemsAction } from "@/actions/server/server";
import Container from "@/shared/Container";
import Image from "next/image";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const item = await getSingleItemsAction(id);

  if (!item) {
    return <Container><p className="text-center py-20">Item not found!</p></Container>;
  }

  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-10 py-10">
        {/* Image Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image
          width={500}
          height={300}
            src={item.imageUrl} 
            alt={item.name} 
            className="w-full h-full"
          />
        </div>

        {/* Info Section */}
        <div className="space-y-4">
          <span className="badge badge-primary uppercase">{item.category}</span>
          <h1 className="text-4xl font-bold text-gray-800">{item.name}</h1>
          <p className="text-2xl font-semibold text-green-600">${item.price}</p>
          <div className="divider"></div>
          <p className="text-gray-600 leading-relaxed text-lg">
            {item.description}
          </p>
          <button className="btn btn-primary w-full md:w-auto px-10">
            Book Now
          </button>
        </div>
      </div>
    </Container>
  );
};

export default DetailsPage;
