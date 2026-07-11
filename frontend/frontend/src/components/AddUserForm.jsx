import { useState } from "react";
import { addUser } from "../services/admin";


export default function AddUserForm({ closeForm }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");
    async function handleSubmit(e) {
        e.prebentDefault();
        try {
            await addUser({
                username,
                email,
                password,
                role,
            })
            alert("User created!");
            closeForm();
        } catch (err) {
            alert(err.response?.data?.message);

        }

    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-[450px]">
            <h2 className="text-xl font-bold mb-4">Add User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className="border p-2 w-full mb-3"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}

                />
                <input
                    className="border p-2 w-full mb-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="border p-2 w-full mb-3"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <select
                    className="border p-2 w-full mb-4"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <div className="flex gap-3">

                    <button
                        type="submit"
                        className="bg-green-700 text-white px-4 py-2 rounded"
                    >
                        Create User
                    </button>

                    <button
                        type="button"
                        onClick={closeForm}
                        className="bg-gray-300 px-4 py-2 rounded"
                    >
                        Cancel
                    </button>

                </div>


            </form>

        </div>
    )
}
