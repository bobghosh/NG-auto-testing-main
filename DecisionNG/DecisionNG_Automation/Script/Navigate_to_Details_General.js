function Navigate_to_Details_General()
{
  
  Aliases.browser.pageSapiensDecision2.FindElement("//p-tabview//li[1]").Click();
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//p-tabview//li[1]"), "className", cmpContains, "ui-tabview-selected ui-state-active");
}
module.exports.Navigate_to_Details_General = Navigate_to_Details_General;