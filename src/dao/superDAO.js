export default class SuperDAO {
  async injectDB(conn, collection) {
    if (this.collection) {
      return;
    }
    try {
      this.collection = conn.db(process.env.DINNER_IN_THE_SKY_NS).collection(collection);
    } catch (error) {
      `Problem with ${collection} collection: ${e}`
    }
  }
}
