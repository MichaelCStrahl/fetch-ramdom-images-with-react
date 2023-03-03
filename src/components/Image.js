import { RiDeleteBin6Fill } from "react-icons/ri";

const Image = ({ count }) => {

  let url = "https://source.unsplash.com/featured/300x300?v=" + count

  return (
    <div className="imagem-item">
      <img src={url} alt="" />
      
      <div className="button-remove-image-content">
        <button className="btn btn-remove-image" >
          <RiDeleteBin6Fill /> <span className="button-text">Delete image</span>
        </button>
      </div>
    </div>
  )
}

export default Image