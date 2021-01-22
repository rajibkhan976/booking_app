import React, { useState, useEffect, useRef } from 'react';

const AddProperty = ({ hideAddForm }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const propertyimage = useRef(null);
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState("");
    const propertyavatar = useRef(null);
    const [username, setUsername] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");

    const handleChangeFormField = (event) => {
        if (event.target.id === "title") {
            setTitle(event.target.value);
        }
        if (event.target.id === "description") {
            setDescription(event.target.value);
        }
        if (event.target.id === "price") {
            setPrice(event.target.value);
        }
        if (event.target.id === "type") {
            setType(event.target.value);
        }
        if (event.target.id === "rating") {
            setRating(event.target.value);
        }
        if (event.target.id === "comments") {
            setComments(event.target.value);
        }
        if (event.target.id === "username") {
            setUsername(event.target.value);
        }
        if (event.target.id === "country") {
            setCountry(event.target.value);
        }
        if (event.target.id === "city") {
            setCity(event.target.value);
        }
    }

    const addProperty = (event) => {
        console.log(title);
        console.log(description);
        console.log(price);
        console.log(type);
        console.log(rating);
        console.log(comments);
        console.log(username);
        console.log(country);
        console.log(city);
    }

    return (
        <div className="row">
            <h4 className="mt-5 ml-3">Add property</h4>
            <div className="col-12">
                <div className="row">
                    <div className="col-12 col-sm-6 mt-5">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="title" 
                            placeholder="title"
                            onChange={(event) => handleChangeFormField(event)}
                            required
                        />
                        <label htmlFor="propertyimage" className="form-label mt-3">Image</label>
                        <input 
                            className="form-control" 
                            type="file"
                            id="propertyimage"
                            ref={propertyimage}
                            multiple
                            required 
                        />
                        <label htmlFor="description" className="form-label mt-3">Description</label>
                        <textarea 
                            className="form-control" 
                            id="description" 
                            placeholder="description"
                            rows="3"
                            onChange={(event) => handleChangeFormField(event)}
                            required
                        ></textarea>
                        <label htmlFor="price" className="form-label mt-3">Price</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="price" 
                            placeholder="price"
                            onChange={(event) => handleChangeFormField(event)}
                            required
                        />
                        <label htmlFor="type" className="form-label mt-3">Type</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="type" 
                            placeholder="type"
                            onChange={(event) => handleChangeFormField(event)}
                            required
                        />
                        <label htmlFor="rating" className="form-label mt-3">Rating</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="rating" 
                            placeholder="rating"
                            min="0"
                            onChange={(event) => handleChangeFormField(event)}
                            required
                        />
                    </div>
                    <div className="col-12 col-sm-6 mt-5">
                        <label htmlFor="comments" className="form-label">Comments</label>
                        <textarea 
                            className="form-control" 
                            id="comments" 
                            placeholder="comments"
                            rows="3"
                            onChange={(event) => handleChangeFormField(event)}
                            required
                        ></textarea>
                        <label htmlFor="prpropertyavataropertyimage" className="form-label mt-3">Avatar</label>
                        <input 
                            className="form-control" 
                            type="file"
                            id="propertyavatar"
                            ref={propertyavatar}
                            multiple
                            required 
                        />
                        <label htmlFor="username" className="form-label mt-3">Username</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="username" 
                            placeholder="username"
                            onChange={(event) => handleChangeFormField(event)}
                            required
                        />
                        <label htmlFor="country" className="form-label mt-3">Country</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="country" 
                            placeholder="country"
                            onChange={(event) => handleChangeFormField(event)}
                            required
                        />
                        <label htmlFor="city" className="form-label mt-3">City</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="city" 
                            placeholder="city" 
                            onChange={(event) => handleChangeFormField(event)}
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-5 mb-5">
                        <button className="btn btn-primary" onClick={(event) => addProperty(event)}>Save</button>
                        <button className="btn btn-warning ml-3" onClick={(event) => hideAddForm(event)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProperty;