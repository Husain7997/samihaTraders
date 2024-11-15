import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditProduct = () => {
  const product = useLoaderData();
  const { _id } = product;
  const { productName, price, description, category, image } = product.product;

  const { register, handleSubmit, reset, setValue } = useForm();
  const [imageFile, setImageFile] = useState(null);
  const [url, setUrl] = useState(image || ""); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setValue("name", productName);
    setValue("category", category);
    setValue("price", price);
    setValue("ProductDetails", description);
  }, [productName, price, description, category, setValue]);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!imageFile) return url; // Return existing URL if no new image

    const apiKey = "39fdb9b8bab7d98eef678287a7ea14aa";
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      setLoading(true);
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        formData
      );
      return response.data.data.url;
    } catch (error) {
      console.error("Error uploading the image:", error);
      Swal.fire("Error", "Image upload failed!", "error");
      return url; // Return existing URL if upload fails
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    // Upload image and get URL
    const imageUrl = await uploadImage();

    const updatedProduct = {
      productName: data.name,
      category: data.category,
      price: parseFloat(data.price),
      description: data.ProductDetails,
      image: imageUrl,
    };

    try {
      const response = await axios.put(`http://localhost:5000/products/${_id}`, updatedProduct, {
        headers: { "Content-Type": "application/json" },
      });
      
      if (response.data.acknowledged) {
        Swal.fire({
          title: "Updated!",
          text: "Your product was updated successfully.",
          icon: "success",
        });
        reset();
        setUrl(imageUrl); // Update with new image URL if changed
      } else {
        Swal.fire("No changes", "Product was not modified.", "info");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      Swal.fire("Error", "Failed to update product.", "error");
    }

    setImageFile(null);
  };

  return (
    <div className="py-12 w-full bg-stone-400 dark:bg-dark">
      <h1 className="text-left text-lime-200 md:ml-16 text-4xl mb-6">Edit Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full px-10 mx-auto">
        
        <div className="form-control w-full mb-4">
          <label className="label"><span className="label-text">Product Name*</span></label>
          <input
            type="text"
            defaultValue={productName}
            {...register("name")}
            className="input input-bordered w-full"
          />
        </div>

        <div className="flex gap-6">
          <div className="form-control w-1/2 mb-4">
            <label className="label"><span className="label-text">Category*</span></label>
            <select defaultValue={category} {...register("category")} className="select select-bordered w-full">
              <option value="">Select a category</option>
              <option value="Light">Light</option>
              <option value="Fan">Fan</option>
              <option value="Cable">Cable</option>
              <option value="Switch">Switch</option>
              <option value="Socket">Socket</option>
            </select>
          </div>

          <div className="form-control w-1/2 mb-4">
            <label className="label"><span className="label-text">Price*</span></label>
            <input
              type="number"
              defaultValue={price}
              {...register("price")}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="form-control mb-4">
          <label className="label"><span className="label-text">Product Details</span></label>
          <textarea
            {...register("ProductDetails")}
            className="textarea textarea-bordered h-24"
            defaultValue={description}
          ></textarea>
        </div>

        <div className="form-control mb-4">
          <label className="label"><span className="label-text">Upload Image</span></label>
          <div className="flex items-center">
            <input
              type="file"
              onChange={handleImageChange}
              className="file-input file-input-bordered w-full max-w-xs"
            />
            <button
              type="button"
              onClick={uploadImage}
              className="btn ml-4"
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
          </div>
          {url && <img src={url} alt="Product" className="mt-4 w-32 rounded" />}
        </div>

        <button className="btn btn-accent w-full" type="submit">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
