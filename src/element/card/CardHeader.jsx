import { Link } from "react-router-dom"
import people from '../../assets/people.jpg'

const CardHeader = (props) => {

    const { image = `${people}` } = props
    return (
        <img className="rounded-t-lg w-full h-48 object-cover" src={image} alt="News" />
    )
}
export default CardHeader