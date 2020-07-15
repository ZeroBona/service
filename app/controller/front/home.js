const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let sql = 'Select * FROM article where type = "read"'
    let articleList = await this.app.mysql.query(sql);
    ctx.body = articleList;
  }
}

module.exports = HomeController;
