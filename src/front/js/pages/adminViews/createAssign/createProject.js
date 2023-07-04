import React, { useContext, useEffect, useState } from "react";
import { useForm } from "../../../../hooks/useform";
import { Context } from "../../../store/appContext"

export const CreateProject = () => {
    const { store, actions } = useContext(Context);
    const [inputValues, handleInputChange] = useForm({
        name: "",
        direction: "",
        user_id: "",
    })

    const { name, direction, user_id } = inputValues




    const createUserTaks = async () => {
        try {
            await fetch(
                "http://localhost:3001/proyecto",
                {
                    method: "POST",
                    body: JSON.stringify({
                        name: name,
                        direction: direction,
                        user_id: user_id

                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        } catch (error) {
            console.log("error", error);
        };
    }

    useEffect(() => {
        actions.loadUser()
    }, [])

    return (

        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create a New Project</p>
                                        <form className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control" name="name" value={name} onChange={handleInputChange} />
                                                    <label className="form-label" htmlFor="form3Example1c">Project Name</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">

                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control" name="direction" value={direction} onChange={handleInputChange} />
                                                    <label className="form-label" htmlFor="form3Example1c">Ubication</label>
                                                </div>

                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <select onChange={handleInputChange} name="user_id" className="form-select" aria-label="Default select example">
                                                    <option defaultValue>Seleccionar usuario</option>
                                                    {
                                                        store.users.map((user, i) => {
                                                            return (
                                                                user.rol == 2 && <option value={user.id} key={i}>{user.name}</option>

                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                            </div>
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal" >Create</button>
                                            </div>

                                        </form>

                                    </div>

                                </div>
                            </div>


                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Create Project</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Create a new task for this project
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary" onClick={createUserTaks} data-bs-dismiss="modal">Create</button>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}