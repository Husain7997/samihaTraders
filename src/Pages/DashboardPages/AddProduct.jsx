import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); 
  };

  const handleUpload = async () => {
    if (!image) return; // Check if image is selected

    const apiKey = '39fdb9b8bab7d98eef678287a7ea14aa';
    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        formData
      );
      setUrl(response.data.data.url);
    } catch (error) {
      console.error("Error uploading the image:", error);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    if (!url) return; // Ensure URL is set before submitting
    
    const product = {
      productName: data.name,
      category: data.category,
      price: parseFloat(data.price),
      recipe: data.recipe,
      image: url,
    };

    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Added!",
            text: "Your file was added.",
            icon: "success",
          });
        }
      });

    reset();
    setImage(null);
    setUrl("");
  };

  return (
    <div className="py-12 w-full bg-stone-400 dark:bg-dark">
      <h1 className="text-left text-lime-200 md:ml-16  text-4xl mb-6">Create Product</h1>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label"><span className="label-text">Product Name*</span></label>
            <input
              type="text"
              placeholder="Product Name"
              {...register("name", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label"><span className="label-text">Category*</span></label>
              <select defaultValue="default" {...register("category", { required: true })} className="select select-bordered w-full">
                <option disabled value="default">Select a category</option>
                <option value="Light">Light</option>
                <option value="Fan">Fan</option>
                <option value="Cable">Cable</option>
                <option value="Sweetch">Sweetch</option>
                <option value="Choket">Choket</option>
              </select>
            </div>

            <div className="form-control w-full my-6">
              <label className="label"><span className="label-text">Price*</span></label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">Product Details</span></label>
            <textarea
              {...register("product")}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Upload Image</span>
            </label>
            <div className="flex">
            <input
              type="file"
              {...register('image', { required: true })}
              onChange={handleImageChange}
              className="file-input w-full max-w-xs"
             
            />
            <button
              type="button"
              onClick={handleUpload}
              className="btn w-20"
              disabled={loading}
            >
              {loading  ? "Uploading..." :"Upload"}
            </button>
            <>{url && <img src={url} alt="Uploaded" className="  w-10 " />}</>
            </div>
            
          </div>

          <button className="btn btn-accent mx-10 my-5" type="submit">
            Submit Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
