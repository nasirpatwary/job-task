import Image from 'next/image';
import Link from 'next/link';
const ItemsCard = ({item}) => {
 const { _id, name, description, price, category, imageUrl } = item;

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 overflow-hidden group hover:shadow-2xl transition-all duration-300">
      <figure className="relative h-54 w-full overflow-hidden">
        <Image
          height={155}
          width={300}
          src={imageUrl}
          alt={name}
          className="w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 badge badge-primary uppercase text-xs font-bold">
          {category}
        </div>
      </figure>
      
      <div className="card-body p-5">
        <h2 className="card-title text-xl font-bold text-gray-800">
          {name}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-2">
          {description}
        </p>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-green-600">${price}</span>
          <Link href={`/items/${_id}`}>
            <button className="btn btn-outline btn-sm btn-primary">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemsCard;
