import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { SortOrder } from "./api";
import { fetchUsers } from "./api";
import Users from "./Users";

function UsersContainer() {
    const [users, setUsers] = useState<string[]>([]);
    const [search] = useSearchParams();

    useEffect(() => {
        const order = search.get("order") as SortOrder;

        fetchUsers(order).then((gelenKullanicilar) => {
            setUsers(gelenKullanicilar)
        })
    }, [search])


    return <Users users={users} />
}

export default UsersContainer;
