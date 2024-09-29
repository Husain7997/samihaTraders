import { AttachmentsFileInput, DefaultInput, DefaultSelect } from "../../Components/dashboard/FormComponents";


const AddProduct = () => {

    return (
        <div className="py-12 w-full bg-stone-400 dark:bg-dark">
            <h1 className="text-left text-lime-200 md:ml-16  text-4xl mb-6">Create Product</h1>
           
            <div className="container flex">
                <div className=" px-1  flex flex-wrap justify-around gap-4">
                <div className="md:w-1/2 lg:w-1/3  bg-white rounded p-3 ">
                <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
          Product Name
        </label>
            <DefaultInput/>
                </div>
                <div className="md:w-1/2 lg:w-1/3  bg-white rounded p-3 ">
                <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
          Product Name
        </label>
            <DefaultInput/>
                </div>
                <div className="md:w-1/2 lg:w-1/3  bg-white rounded p-3 ">
                <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
          Product Name
        </label>
            <DefaultInput/>
                </div>
                <div className="md:w-1/2 lg:w-1/3  bg-white rounded p-3 ">
                <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
          Product Name
        </label>
            <DefaultInput/>
                </div>
                <div className="md:w-1/2 lg:w-1/3  bg-white rounded p-3 ">
                <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
          Product Name
        </label>
            <DefaultInput/>
                </div>
                <div className="md:w-1/2 lg:w-1/3  bg-white rounded p-3 ">
                <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
          Product Name
        </label>
            <DefaultInput/>
                </div>
                <div className="md:w-1/2 lg:w-1/3  bg-white rounded p-3">
                <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
          Product Name
        </label>
            <DefaultInput/>
                </div>
                <div className='md:w-1/2 lg:w-1/3 6 bg-white rounded'>
                <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
          Product Name
        </label>
            <DefaultInput/>
                </div>
                <div className="md:w-1/2 lg:w-1/3 6 bg-white rounded">
                <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
          Product Name
        </label>
            <DefaultInput/>
                </div>
                <div className='md:w-1/2 lg:w-1/3 6 bg-white rounded'>
                <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
                Category
        </label>
            <DefaultSelect/>
                </div>
                </div>
                <div className="md:w-1/3 lg:w-1/4 mr-6 bg-white rounded p-4">
                  <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
          Attachments
        </label>
                <AttachmentsFileInput></AttachmentsFileInput>
            </div>
            </div>
         </div>
    );
};

export default AddProduct;