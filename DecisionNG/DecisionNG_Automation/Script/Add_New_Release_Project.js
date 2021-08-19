function Add_New_Release_Project(Create)
{
//      let Create = "Yes";
      var timestamp = new Date();
      let ProjectName = "ReleaseProject" + timestamp.getMinutes().toString();
  
    Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(@class,'add-btn')]").click();
  
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpEqual, "Create New Project");
    
    Aliases.browser.pageSapiensDecision2.FindElement("//*[@name='projectName']").SetText(ProjectName);
    
    if(Create == "Yes")
    {
        Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(@class,'spec-confirmed')]").ClickButton();
      
        aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnodeRevision, "contentText", cmpEqual, "Release Project");

        aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//*[@name='projectName']"), "Text", cmpEqual, ProjectName);    
        
   }
    else
    {
        Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(@class,'spec-cancelled')]").click();
    }
  

  
  
}