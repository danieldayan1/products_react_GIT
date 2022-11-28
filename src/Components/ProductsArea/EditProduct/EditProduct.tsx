import { useState , useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productService from "../../../Services/ProductsService";
import config from "../../../Utils/Config";
import "./EditProduct.css";

function EditProduct(): JSX.Element {

    const [product , setProduct] = useState<ProductModel>();
    const params = useParams()
    const navigate = useNavigate();
    const {register , handleSubmit , formState , setValue}  = useForm<ProductModel>();
 

    useEffect(() =>{
        const prodToEditId= + params.prodToEdit;
        productService.getOneProductById(prodToEditId)
            .then(prodToEdit => {
                setProduct(prodToEdit);
                setValue("id" , prodToEdit.id)
                setValue("name" ,  prodToEdit.name);
                setValue("price" ,  prodToEdit.price);
                setValue("stock" ,  prodToEdit.stock);
            })
            .catch(err=> alert(err.message))

    }, [])

    async function send(fromProduct:ProductModel){
       fromProduct.id = product.id;
       productService.editProduct(fromProduct)
        .then(editedProd => {
            console.log(editedProd);
            navigate("/products");
        })
        .catch(err=>alert(err.message))


    }

    return (
        <div className="EditProduct">
            <h2>Edit Product</h2> 
            <form onSubmit={handleSubmit(send)}>   
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput"  {...register("name" , {
                        required:{value:true, message: "Missing Name"} , 
                        min:{value:3,message:"Name too short !"},
                        max:{value:25,message:"Name too long !"},
                    })}/>
                    <span>{formState.errors.name?.message}</span>
                    <label>Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingInput"  {...register("price", {
                        required:{value:true, message: "Missing price"} , 
                        min:{value:1,message:"Price too low! !"},
                        max:{value:999,message:"price too high !"}
                    })}/>
                    <span>{formState.errors.price?.message}</span>
                    <label>Price</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingInput"   {...register("stock" , {
                        required:{value:true, message: "Missing stock"} , 
                        min:{value:1,message:"Stock too low! !"},
                        max:{value:999,message:"Stock too high !"}
                    })}/>
                    <span>{formState.errors.stock?.message}</span>
                    <label>stock</label>
                </div>

                <img src = {config.productImagesUrl + product?.imageName}/>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile101   " {...register("image")}/>
                </div>

                <button className="btn btn-primary">Edit</button>
            </form>
        </div>
    );
}

export default EditProduct;
