import { Link } from "react-router-dom";
import type { User } from "./api";

type UserProps = {
    users: User[];
}

function Users({users}: UserProps) {
    return (
        <ul>
            {
                users.map(
                    (user, id) => (
                        <li key={id}>
                            <Link to={`/users/${id}`}>
                                {user.first}
                            </Link>
                        </li>
                    )
                )
            }
        </ul>
    );
}

export default Users;
