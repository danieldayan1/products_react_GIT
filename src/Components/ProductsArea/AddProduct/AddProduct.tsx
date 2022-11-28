import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productService from "../../../Services/ProductsService";
import "./AddProduct.css";

function AddProduct(): JSX.Element {
    
   const navigate = useNavigate();
   const {register , handleSubmit , formState}  = useForm<ProductModel>();
    
   async function send(product:ProductModel){
        try{
            const addedProduct = await productService.addProduct(product);
            navigate("/products");
            console.log(addedProduct);
        }catch(err:any){
            alert(err.message);
        }
    }
    
    return (
        <div className="AddProduct">
            <form onSubmit={handleSubmit(send)}>
                <h2>Add Product</h2>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" {...register("name" , {
                        required:{value:true, message: "Missing Name"} , 
                        min:{value:3,message:"Name too short !"},
                        max:{value:25,message:"Name too long !"},
                    })}/>
                    <span>{formState.errors.name?.message}</span>
                    <label>Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingInput" {...register("price", {
                        required:{value:true, message: "Missing price"} , 
                        min:{value:1,message:"Price too low! !"},
                        max:{value:999,message:"price too high !"}
                    })}/>
                    <span>{formState.errors.price?.message}</span>
                    <label>Price</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingInput" {...register("stock" , {
                        required:{value:true, message: "Missing stock"} , 
                        min:{value:1,message:"Stock too low! !"},
                        max:{value:999,message:"Stock too high !"}
                    })}/>
                    <span>{formState.errors.stock?.message}</span>
                    <label>stock</label>
                </div>

                <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile101   " {...register("image")}/>
                </div>

                <button className="btn btn-primary">Add</button>
            </form>

        </div>
    );
}

export default AddProduct;
