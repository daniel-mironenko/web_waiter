export default class PersonnelDAO {
  constructor() {
    this.personnel = null;
  }

  static async injectDB(conn) {
    if (this.personnel) {
      return;
    }
    try {
      this.personnel = await conn.db(process.env.DINER_IN_THE_SKY_NS).collection("personnel");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in PersonnelDAO: ${e}`,
      );
    }
  }

  static async getEmployerByPass(pass) {
    try {
      return await this.personnel.findOne({pass: pass});
    } catch (e) {
      console.error(`Something went wrong in getEmployerByPass: ${e}`);
      throw e;
    }
  }
}
