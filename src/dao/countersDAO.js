export default class CountersDAO {
  static async injectDB(conn) {
    if (this.collection) {
      return;
    }
    try {
      this.collection = await conn.db(process.env.DINNER_IN_THE_SKY_NS).collection("counters");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in CountersDAO: ${e}`,
      );
    }
  }

  static async getSequenceValue(sequenceName) {
    try {
      const cursor = await this.collection.findOne({_id: sequenceName});
      return cursor.sequence_value;
    } catch (error) {
      throw error;
    }
  }

  static async incSequenceValue(sequenceName) {
    return await this.collection.updateOne(
      { _id: sequenceName }, 
      { "$inc": { sequence_value: 1 } 
    });
  };
}
