import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const User = ({user}) => {
//  console.log(user.name)

const {id , name , username ,email}= user;



    return (
        <div className="bg-emerald-800 m-6 text-center py-10 rounded text-white">
            <p className="text-xl">Name : {name}</p>
            <p className="my-2">Username : {username}</p>
            <p>Email : {email}</p>
            <div className="mt-5">
            <Link to={`/user/${id}`}>Show Details</Link>
            </div>
        </div>
    );
};

User.propTypes = {
    user : PropTypes.object
}

export default User;