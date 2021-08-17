function Verify_Deployment_History()
{
  
  Aliases.browser.pageSapiensDecision.WaitElement(Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-table-frozen-view')]//tbody//tr[1]"), 10000);
  
  let Status = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-table-frozen-view')]//tbody//tr[1]//td[2]");
  
  let hasNext = "true";
  
  Delay(10000);
  
  do
  {
      Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Refresh']").click();
      
      if(Status.textContent == "DEPLOYED")
      {
        Log.Message("Tag is deployed");
        hasNext = false;
      }  
      else if(Status.textContent == "FAILED")
      {
        Log.Message("Tag is failed");
        hasNext = false;
      }
      else if(Status.textContent == "REQUESTED")
      {
        Log.Message("Tag is still in requested status");
        hasNext = true;
      }
  }while(hasNext == true)
  
  
}

//function Any_Deployment_History()
//{
//  
//  let TagsList = Aliases.browser.pageSapiensDecision.FindElements("//*[contains(@class,'i-table-frozen-view')]//tbody//tr");
//  
//  for(var i = 1; i <TagsList.length ; i++)
//  {
//    let TagName = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-table-frozen-view')]//tbody//tr["+i+"]//td[3]");
//  
//    if (TagName.textContent == "Varsha")
//    {
//      let Status = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-table-frozen-view')]//tbody//tr["+i+"]//td[2]");
//      
//      if(Status.WaitProperty("textContent", "Failed", 100000) == false)
//      {
//        Log.Message("Pass")
//      }
//      
//      //WaitElement
//  
//      //      if(Status.WaitProperty("textContent", "Failed", 100000))
////booen
////      {
////        Log.Message("Deployed Assets")
////      }
////      else if(Status.WaitProperty("textContent",Deployed, 50000))
////      {
////        Log.Message("Asset is failed")
////      }
//
////for successful submission of deployment
////  let browser = Aliases.browser;
////  aqObject.CheckProperty(browser.pageSapiensDecision.panel17, "contentText", cmpEqual, "Deployment task was submitted");
////  aqObject.CheckProperty(browser.pageSapiensDecision2.panel35, "Exists", cmpEqual, true);
////  
//    }
//  }
//}