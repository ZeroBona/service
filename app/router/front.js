module.exports = (app) => {
  const { router, controller } = app;

  router.get("/list", controller.front.home.list);
  router.get("/detail/:id", controller.front.home.detail);
};
