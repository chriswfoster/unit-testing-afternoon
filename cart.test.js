const cart = require('./cart')
const cars = require('./data/cars')


describe('Cart Properties:', function() {
    test("Checking cart array", function() {
    expect(Array.isArray(cart.cart))
    expect(cart.cart.length).toEqual(0)
})
    
    test("Checking total quantity", function() {
    expect(Array.isArray(cart.total))
    expect(cart.total).toEqual(0)
    })

});

    describe('Cart Methods:', function() {
        test("check to see if cars and totals added", function(){
            cart.addToCart(cars[8])
            cart.addToCart(cars[3])
            cart.addToCart(cars[2])
        expect(cart.cart[0]).toEqual(cars[8])
        expect(cart.cart[1]).toBe(cars[3])
        expect(cart.total).toEqual(cars[8].price + cars[3].price + cars[2].price)
    })
        test("check to see if cars removed", function(){
            cart.removeFromCart(0, cars[8].price)
            cart.removeFromCart(1, cars[2].price)
            expect(cart.cart.length).toEqual(1)
            expect(cart.total).toBe(cars[3].price)
        })
        test("look to see if checkout works", function(){
            cart.addToCart(cars[2])
            cart.addToCart(cars[6])
            cart.addToCart(cars[3])
            cart.addToCart(cars[1])

            cart.checkout()

            expect(cart.cart.length).toEqual(0)
            expect(cart.total).toEqual(0)
        })
    });







