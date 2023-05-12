function Thumbnail({ path, setCurrentImg }) {
    return ( 
        <img src={path} onClick={() => setCurrentImg(path)} alt={path}/>
    );
}

export default Thumbnail;