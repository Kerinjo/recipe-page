import { useLocation } from "react-router-dom"


const Category = () => {
    const location = useLocation()
    const categoryName = location.state?.categoryName

    return (
        <div>Hello {categoryName}!</div>
    )
}

export default Category
