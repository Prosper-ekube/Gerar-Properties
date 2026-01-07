import Filters from "./sections/Filters"
import PropertyList from "./sections/PropertyList"

const Properties: React.FC = () => {
    return (
        <>
            <PropertyList />
            <Filters />
        </>
    )
}

export default Properties