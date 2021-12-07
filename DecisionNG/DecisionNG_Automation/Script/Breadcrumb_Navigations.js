function Breadcrumb(BreadcrumbName)
{
  Aliases.browser.pageSapiensDecision.FindElement("//*[(text()='" + BreadcrumbName  +"') and not (@class = 'breadcrumb-holder__tooltip--text')]").Click();
  //Dropdown click
  //a[contains(@class,'ng-star-inserted')]//*[text()='File Extensions']
  //(//*[@class='breadcrumb ng-star-inserted']//dcn-breadcrumb-popup)[1] - dropdown

}
module.exports.Breadcrumb = Breadcrumb;