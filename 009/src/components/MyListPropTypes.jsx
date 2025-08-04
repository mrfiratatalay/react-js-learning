import PropTypes from "prop-types";

const MyListPropTypes = ({ list }) = (
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


MyListPropTypes.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        })
    ).isRequired
};
