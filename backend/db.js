import mongodb from 'mongodb'

export async function insertBootcamp(products) {
    const collection = await getCollection(DB_REDO, "bootcamps");
    const res = await collection.insertMany(products);
    return res;
}