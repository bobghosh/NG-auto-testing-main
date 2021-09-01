function Enter_TestcaseValues()
{
  var page = Aliases.browser.pageSapiensDecision2;
  let factTypeNames = page.FindElements("//dcn-testing-view-model-list//fx-field//label");  
  //let factTypeFeilds=page.FindElements("//dcn-fact-type-value//div[@class='fx-field--inputAndError']");
  
  Log.Message("Names:"+factTypeNames.length);
  //Log.Message("Feilds:"+factTypeFeilds.length);
  
  for(let i=0;i<factTypeNames.length;i++)
  {
    let factTypeNamesText = factTypeNames[i].textContent.trim()
    Log.Message(factTypeNamesText);
    if(factTypeNamesText == "Insured Board Change")
    {
      Log.Message("Found.......");
      let factTypeValuefeild = page.FindElements("//dcn-testing-view-model-list//fx-field//div//span//input");
      //factTypeValuefeild[i].Click();
      let classText = factTypeValuefeild[i].getAttribute('class');
      Log.Message(classText);
      if(classText == 'wj-form-control')
      {
        Aliases.browser.pageSapiensDecision2.FindElement(factTypeValuefeild[i]+"//button").Click();
      }
      else
      {
        factTypeValuefeild[i].keys("^a[BS]");
        factTypeValuefeild[i].keys("2");
        factTypeValuefeild[i].keys(['Tab']);
        
      }
      break;     
    }
    else{
        Log.Message("FactType not found");  
    }
    
  }
  
}
