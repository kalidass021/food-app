const RestaurantCategory = ({categoryData}) => {
    console.log('categoryData', categoryData);
    return (
        <div>
            {/* Accordion header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-md p-4 flex justify-between">
                <span className="font-bold text-md">{categoryData.title} ({categoryData.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {/* Accordion body */}
        </div>
    );
}

export default RestaurantCategory;