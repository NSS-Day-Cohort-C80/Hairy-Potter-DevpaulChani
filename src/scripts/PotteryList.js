import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => {
    const pottery = usePottery()
        const htmlString = pottery.map(piece => //??????
            `<section class="pottery" id="pottery--${piece.id}">
                <h2 class="potteryShape">${piece.shape}</h2>
                <div class="potteryProperties">
                    Item weighs ${piece.weight} grams and is ${piece.height} cm in height
                </div>
                <div class="potteryPrice">Price is $${piece.price}</div>
            </section>`
        ).join("")
    return htmlString
}