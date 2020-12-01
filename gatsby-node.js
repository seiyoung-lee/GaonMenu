//Added to render same page on different urls

exports.onCreatePage = ({ page, actions }) => {
    const { createPage } = actions;
  
    if (page.path === "/") {
      page.matchPath = "/*";
      createPage(page);
    }
  };
  