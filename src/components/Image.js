import { RiDeleteBin6Fill } from "react-icons/ri";

const Image = ({ count }) => {

  let url = "https://source.unsplash.com/featured/300x300?v=" + count

  return (
    <div className="imagem-item">
      <img src={url} alt="" />
    </div>
  )
}

export default Image