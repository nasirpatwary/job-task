import { collections, dbConnect } from "@/lib/dbConnect";

export async function GET() {
  try {
    const itemCollection = await dbConnect(collections.ITEMS);
    const items = await itemCollection.find().toArray();
    
    return Response.json({ 
      status: true, 
      items: items 
    });
  } catch (error) {
    return Response.json({ items: [] }, { status: 500 });
  }
}