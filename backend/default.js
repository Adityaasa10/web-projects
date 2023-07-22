import products from './model/productSchema.js'
import {product} from './constants/product.js'

const DefaultData = async () => {
    try {
        await products.deleteMany({});
        await products.insertMany(product);

        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default DefaultData;