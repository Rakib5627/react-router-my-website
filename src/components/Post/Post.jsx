import PropTypes from 'prop-types'

const Post = ({post}) => {

    const{id , title} = post;

    return (
        <div className='bg-emerald-800 m-5 text-white py-3 px-6 rounded-md'>
            <p>Id : {id}</p>
            <p>Title : {title}</p>
        </div>
    );
};

Post.propTypes = {
    post : PropTypes.object
}

export default Post;