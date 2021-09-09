function Navigate_to_Details_Audit()
{
  //Clicks the 'textnodeAudit' control.
  Aliases.browser.pageSapiensDecision2.textnode2.linkUiTabpanel17Label.textnodeAudit.Click();
  //Checks whether the 'className' property of the Aliases.browser.pageSapiensDecision.textnodeGeneral.textnodeAudit object contains 'ui-tabview-selected ui-state-active'.
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.textnodeGeneral.textnodeAudit, "className", cmpContains, "ui-tabview-selected ui-state-active");
}
module.exports.Navigate_to_Details_Audit = Navigate_to_Details_Audit;