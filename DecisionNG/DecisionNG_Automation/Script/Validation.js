function Validation_Button()
{
  let ValidationErrors = "This Rule Family is valid.";
  let ValidationError = ValidationErrors.split(",");
  
  let page= Aliases.browser.pageSapiensDecision2
  page.FindElement("//dcn-floating-action-button[@label='Validation']//div[@class='floating-action-button spec-floating-action-button']").Click();
  page.FindElement("//dcn-floating-action-button[@label='Validation']//button").click();
  page.WaitElement(page.FindElement("//*[@class='sidebar-container__validation-panel spec-decision-sidebar__validation-panel ng-star-inserted']//span"),10000);
  let validationMessage = page.FindElements("//*[@class='sidebar-container__validation-panel spec-decision-sidebar__validation-panel ng-star-inserted']//span");

  for(let m = 0; m<ValidationError.length ; m++)
  {
    let flag = 0;
    
    for(let i=0; i<validationMessage.length;i++)
    {
      Log.Message(validationMessage[i].textcontent);
      if(validationMessage[i].textcontent == ValidationError[m])
      {
        flag = 1;
        Log.Message(validationMessage[i].textcontent + " error message is displayed");
      }
    }    
    if(flag > 0)
    {
      Log.Checkpoint("User provided error is present")
    }
    else
    {
      Log.Error("Error message is not present")
    }
    
  }
  page.FindElement("//dcn-floating-action-button[@label='Validation']//div[contains(@class,'floating-action-button spec-floating-action-button')]").Click();
}