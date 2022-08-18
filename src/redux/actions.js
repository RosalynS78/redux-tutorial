// usually use export default when exporting as whole, but we have multiple so export each

//

 export const addCar = (car) => {
    return {
    type: "ADD_CAR", 
    value: car
    }
}

export const removeCar = (index) => {
    return {
        type: "REMOVE_CAR",
        value: index
    }
}

