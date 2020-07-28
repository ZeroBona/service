const Controller = require("egg").Controller;

class HomeController extends Controller {
  // 查询文章列表，传递文章类型type（非必填，默认值blog，可选read）
  async list() {
    const { ctx } = this;
    let type = ctx.query.type || "blog";
    let sql = `select * from article where type = "${type}"`;
    let articleList = await this.app.mysql.query(sql);
    ctx.body = {
      success: true,
      list: articleList,
    };
  }
  
  // 查询文章详情，传递文章id（必填）
  async detail(){
    const { ctx } = this;
    let id = ctx.params.id;

    let sql = `select * from article where id = "${id}"`;
    let articleList = await this.app.mysql.query(sql);

    if(articleList.length){
      ctx.body = {
        success: true,
        data: articleList[0] || {},
      };
    }else{
      ctx.body = {
        success: false,
        errorMsg: '未查询到对应的条目',
      }
    }
  }
}

module.exports = HomeController;
