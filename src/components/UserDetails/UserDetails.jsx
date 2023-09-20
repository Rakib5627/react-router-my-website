import { useLoaderData } from "react-router-dom";


const UserDetails = () => {

    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <div className="text-center mt-10">
                <h1 className="text-2xl font-semibold">User Details</h1>
            <div className="bg-green-900 mt-5 text-white p-10 mx-60 rounded-lg">
            <h2 className="text-lg">User Name: {name}</h2>
            <p className="my-5">Website: {website}</p>
            <p className="my-2">Address:</p>
            <p className="">City : {user.address.city}</p>
            <p className="my-2">Suite : {user.address.suite}</p>
            <p className="">Street : {user.address.street}</p>
            </div>
        </div>
        </div>
    );
};

export default UserDetails;