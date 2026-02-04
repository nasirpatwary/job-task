"use server"

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
const itemsCollection = await dbConnect(collections.ITEMS)

export async function createItemsAction(data) {
  try {
    const result = await itemsCollection.insertOne(data);
    return { success: true, id: result.insertedId.toString() };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function getSingleItemsAction(id) {
  try {
    if (!id || id.length !== 24) return null;
    const items = await itemsCollection.findOne({ _id: new ObjectId(id) });
    return JSON.parse(JSON.stringify(items)); 
  } catch (error) {
    return null;
  }
}