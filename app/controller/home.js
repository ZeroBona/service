const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let articleList = await this.app.mysql.select('article');
    ctx.body = articleList;
  }
}

module.exports = HomeController;
