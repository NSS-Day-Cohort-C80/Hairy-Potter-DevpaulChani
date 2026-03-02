let key = 1

export const makePottery = (shape, weight, height) => {
    const pottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: key
    }
    key++
    return pottery
}