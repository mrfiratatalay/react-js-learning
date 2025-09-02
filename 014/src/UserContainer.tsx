import { useLoaderData, useParams } from "react-router-dom";
import UserData from "./UserData";
import type { User } from "./api";

function UserContainer() {
    const params = useParams();
    const { user } = useLoaderData() as { user: User };

    return (
        <div>
            User ID: {params.id}
            <UserData user={user} />
        </div>
    )
}

export default UserContainer;
