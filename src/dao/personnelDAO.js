export default class PersonnelDAO {
  constructor() {
    this.collection = null;
  }

  static async injectDB(conn) {
    if (this.collection) {
      return;
    }
    try {
      this.collection = await conn.db(process.env.DINNER_IN_THE_SKY_NS).collection("personnel");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in PersonnelDAO: ${e}`,
      );
    }
  }

  static async getEmployerByPass(pass) {
    try {
      return await this.collection.findOne({pass: pass});
    } catch (e) {
      console.error(`Something went wrong in getEmployerByPass: ${e}`);
      throw e;
    }
  }
}
