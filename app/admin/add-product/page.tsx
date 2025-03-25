"use client"

import { addItem } from "@/lib/store/ProductSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddProduct() {

    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [description, setdescription] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);


    const dispatch = useDispatch();
    const router = useRouter();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!name || !price || !description || !file) {
            return;
        }


        const newProduct = {
            id: Date.now(),
            name,
            price: parseFloat(price),
            description,
            src: image
        }

        dispatch(addItem(newProduct));
        console.log(newProduct);
        router.push('/');
    }

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];

        if (file) {
            setFile(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };

            reader.readAsDataURL(file);
        }

    }

    return (
        <>
            <div>
                <h1>Add Product</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Product Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <br />

                    <label htmlFor="price">Product Price</label>
                    <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <br />


                    <label htmlFor="desc">Product Description</label>
                    <textarea name="description" id="desc" cols={20} rows={5} value={description} onChange={(e) => setdescription(e.target.value)}></textarea>
                    <br />

                    <label htmlFor="image">Product Image</label>
                    <input type="file" onChange={handleImageChange} />
                    <br />

                    {image &&
                        <div>
                            <img src={image} alt={name} />
                        </div>
                    }

                    <button type="submit">Add Product</button>
                </form>
            </div>
        </>
    )
}