const catalog = []
export const toSellOrNotToSell = (piece) => {
    if (!piece.cracked) {
        if (piece.weight >= 6) {
            piece.price = 40
        } else {
            piece.price = 20
        }
        catalog.push(piece)
    }
    return piece
}
export const usePottery = () => {
    return structuredClone(catalog)
}