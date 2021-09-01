function Verify_Repair_and_Click()
{
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.panel31, "contentText", cmpEqual, "The Test Group is no longer valid due to model changes. Click here to\nRepair");
  Aliases.browser.pageSapiensDecision.FindElement("//*[text()=' Repair ']").click();
  

  Aliases.browser.pageSapiensDecision.FindElement("//div[contains(@class,'test-case-progress-bar')]").WaitProperty("Exists", false, 100000);
  
//  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//*[text()=' Repair ']"), "Exists", cmpEqual, false);
  
  let condition = "Remove Fact Type";
  let factType_Name = "Flood";
  switch(condition)
  
        {
          //Flood_Zoning Change6471719
            case "Update or Adding Name Fact Type":
            {
               aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//label[text()=' "+ factType_Name +" ']"), "Exists", cmpEqual, true);
               break;
            }
            
            case "Remove Fact Type":
            {
               aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//label[text()=' "+ factType_Name +" ']"), "Exists", cmpEqual, false);
               break;
            }
           
            
            
        }
        
        Log.Message("Finish");
  
  
}

function f()
{
  let condition = "Remove Fact Type";
  let factType_Name = "Flood";
  switch(condition)
  
        {
          //Flood_Zoning Change6471719
            case "Update or Adding Name Fact Type":
            {
               aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//label[text()=' "+ factType_Name +" ']"), "Exists", cmpEqual, true);
               break;
            }
            
            case "Remove Fact Type":
            {
              //Use FindElements to avoid Failure
               aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//label[text()=' "+ factType_Name +" ']"), "Exists", cmpEqual, false);
               break;
            }
           
            
            
        }
        
        Log.Message("Finish");
}