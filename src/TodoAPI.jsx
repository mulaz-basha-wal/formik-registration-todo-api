import axios from "axios";
import React, { useState, useEffect } from "react";

export default function TodoAPI() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get("https://gorest.co.in/public/v2/todos").then((res) => {
            setTodos(res.data);
        });
    }, []);
    return (
        <div className="todoContainer">
            <h1>Todos</h1>
            <div className="table-responsive">
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Due On</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((val, index) => {
                            return (
                                <tr key={val.id}>
                                    <td>{val.user_id}</td>
                                    <td>{val.title}</td>
                                    <td>{val.due_on}</td>
                                    <td>{val.status}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
