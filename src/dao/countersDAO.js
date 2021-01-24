import SuperDAO from "./superDAO.js";

class CountersDAO extends SuperDAO {
  async getSequenceValue(sequenceName) {
    try {
      const cursor = await this.collection.findOne({_id: sequenceName});
      return cursor.sequence_value;
    } catch (error) {
      throw error;
    }
  }

  async incSequenceValue(sequenceName) {
    return await this.collection.updateOne(
      { _id: sequenceName }, 
      { "$inc": { sequence_value: 1 } 
    });
  };
}

const countersDAO = new CountersDAO();
export default countersDAO;
