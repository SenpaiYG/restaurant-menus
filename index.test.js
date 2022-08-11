const {db} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    });

    test('can create a Restaurant', async () => {

        // const testRestaurant = await Restaurant.create({
        //     name: 'KFC',
        //     location: 'London',
        //     cuisine: 'American'
        // })

        const seedTestRestaurant = await Restaurant.create(seedRestaurant[0])

        expect(seedTestRestaurant.name).toEqual(seedRestaurant[0].name)
    });

    test('can create a Menu', async () => {
        // TODO - write test
        expect('NO TEST').toEqual('EXPECTED DATA')
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        expect('NO TEST').toEqual('EXPECTED DATA')
    });

    test('can find Menus', async () => {
        // TODO - write test
        expect('NO TEST').toEqual('EXPECTED DATA')
    });

    // test('can delete Restaurants', async () => {
    //     // TODO - write test
    //     expect('NO TEST').toEqual('EXPECTED DATA')
    // });
})