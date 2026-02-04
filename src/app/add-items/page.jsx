
import AddItemsForm from "@/shared/form/AddItemsForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AddItem() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token");

  if (!token) redirect("/login");

  return (
    <div>
      <AddItemsForm />
    </div>
  );
}