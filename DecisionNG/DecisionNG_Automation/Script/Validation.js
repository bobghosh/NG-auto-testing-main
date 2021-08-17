function Validation_Button()
{
  let page= Aliases.browser.pageSapiensDecision2
  page.FindElement("//dcn-floating-action-button[@label='Validation']//div[@class='floating-action-button spec-floating-action-button']").Click()
  page.FindElement("//dcn-floating-action-button[@label='Validation']//button").click();
  page.WaitElement(page.FindElement("//*[@class='sidebar-container__validation-panel spec-decision-sidebar__validation-panel ng-star-inserted']//span"),10000)
  let validationMessage = page.FindElements("//*[@class='sidebar-container__validation-panel spec-decision-sidebar__validation-panel ng-star-inserted']//span");

  for(let i=0; i<validationMessage.length;i++)
  {
    Log.Message(validationMessage[i].textcontent);
  }
  page.FindElement("//dcn-floating-action-button[@label='Validation']//div[contains(@class,'floating-action-button spec-floating-action-button')]").Click()
}
