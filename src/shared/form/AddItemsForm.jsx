"use client";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { FormSelect } from "./FormSelect";
import { FormTextarea } from "./FormTextarea";
import { TbFidgetSpinner } from "react-icons/tb";
import { useCreateItemsAction } from "@/hooks/useCollectionDB";

const AddItemsForm =() => {
  const {mutateAsync, isPending} = useCreateItemsAction()
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      imageUrl: "",
      category: ""
    },
  });
const categories = [
    { label: "Electronics", value: "electronics" },
    { label: "Fashion", value: "fashion" },
    { label: "Home Appliances", value: "home" },
  ];
  const onSubmit = async (data) => {
    console.log("Product Data:", data);
    mutateAsync(data)
    reset();
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100 my-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Product</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <FormField
          name="name"
          label="Product Name"
          control={control}
          placeholder="e.g. Wireless Headphone"
          rules={{ required: "Product name is required" }}
        />
        
          <FormField
            name="price"
            label="Price ($)"
            type="number"
            control={control}
            placeholder="0.00"
            rules={{ required: "Price is required", min: { value: 1, message: "Price > 0" } }}
          />

          <FormField
            name="imageUrl"
            label="Image URL"
            control={control}
            placeholder="https://..."
            rules={{ required: "Image link is required" }}
          />

          {/* Select Field */}
        <FormSelect 
          name="category" 
          label="Category" 
          options={categories} 
          control={control} 
          rules={{ required: "Please select a category" }} 
        />

        {/* Textarea Field */}
        <div className="md:col-span-2">
          <FormTextarea
          name="description" 
          label="Detailed Description" 
          placeholder="Enter product details..."
          control={control} 
          rules={{ required: "Description is required" }} 
        />
        </div>
        </div>
        <div className="text-end">
          <button
          type="submit"
          className="w-full md:w-fit btn text-end bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition shadow-lg shadow-blue-100"
        >
          {isPending ? (
                <span className="flex items-center gap-2">
                  Submitting{" "}
                  <TbFidgetSpinner className="animate-spin" size={20} />
                </span>
              ) : (
                "Add Product"
              )}
        </button>
        </div>
      </form>
    </div>
  );
}

export default AddItemsForm