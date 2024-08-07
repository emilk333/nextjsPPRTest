

class MockCart {
    #cart:number[] = []

    getAmountOfItems() {
        return this.#cart.length
    }

    addToCart(newItem: number) {
        this.#cart.push(newItem)
    }

    removeFromCart(itemToRemove: number) {
        this.#cart.filter(item => itemToRemove !== item)
    }
}

const mockCart = new MockCart

export default mockCart