type User = {
    name: string;
    email: string;
}

type MyListProps = {
    list: User[];
}

const MyList = ({ list }: MyListProps) => (
    <ul>
        {
            list.map((user) => (
                <li key={user.name}>
                    {user.name} ({user.email})
                </li>
            ))
        }
    </ul>
);
