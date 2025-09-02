import { useEffect, useState } from "react";
import type { User } from "./api";
import { fetchUsers } from "./api";
import Users from "./Users";

function UserContainer() {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetchUsers().then((gelenKullanicilar) => {
            setUsers(gelenKullanicilar)
        })
    }, [])

    return <Users users={users} />
}

export default UserContainer;
