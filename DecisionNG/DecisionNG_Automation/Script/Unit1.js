function test123()
{
  var a=Aliases.browser.pageSapiensDecision2.FindElement("//*[@id='ui-accordiontab-0-content']/div/form/dcn-testing-view-model-list/div/div/div[5]/div/div/dcn-testing-bim/div/div[2]/dcn-mini-paginator/div/button[1]").hasAttribute('disabled')
  Log.Message(a)
  Aliases.browser.pageSapiensDecision2.find()
}