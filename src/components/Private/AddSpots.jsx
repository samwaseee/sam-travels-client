import React from 'react';
import Swal from 'sweetalert2';

const AddSpots = () => {

    const handleAddCoffee = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }

        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "Coffee Added Successfully!",
                        icon: "success"
                    });
                }
            })

    }


    return (
        <form onSubmit={handleAddCoffee} className='p-32 mx-auto  bg-gradient-to-r from-[#162b32b2] to-[#162b329b]'>
            <img src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/banner/hero-bg1.png" alt="" className='w-full object-fill h-[140vh] lg:max-h-full top-12 left-0 absolute -z-10 mt-4' />
            <h3 className='text-5xl font-playfair text-white text-center font-bold'>Add Your Favourite Tourists Spot</h3>
            <div className='grid grid-cols-3 gap-3'>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white">Tourist Spot Name</span>
                    </div>
                    <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white">Country Name</span>
                    </div>
                    <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white">Coffee Name</span>
                    </div>
                    <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white">Coffee Name</span>
                    </div>
                    <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white">Supplier</span>
                    </div>
                    <input type="text" name='supplier' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white">Category</span>
                    </div>
                    <input type="text" name='category' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white">Quantity</span>
                    </div>
                    <input type="number" name='quantity' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white">Taste</span>
                    </div>
                    <input type="text" name='taste' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white">Details</span>
                    </div>
                    <input type="text" name='details' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control col-span-2 w-full mx-auto">
                    <div className="label">
                        <span className="label-text text-white">Photo URL</span>
                    </div>
                    <input type="URL" name='photo' placeholder="Type here" className="input input-bordered w-11/12" />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text text-white">Details</span>
                    </div>
                    <input type="text" name='details' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </label>
                <input type="submit" value="ADD TOURIST SPOT" className='btn btn-ghost text-white font-bold text-xl bg-[#ff4838] col-span-3 w-11/12 mt-7' />
            </div>
        </form>
    );
};

export default AddSpots;