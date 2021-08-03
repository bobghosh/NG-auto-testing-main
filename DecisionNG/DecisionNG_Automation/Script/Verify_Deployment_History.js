function Verify_Deployment_History()
{
  //*[contains(@class,'i-table-frozen-view')]//tbody//tr
  
  let TagsList = Aliases.browser.pageSapiensDecision.FindElements("//*[contains(@class,'i-table-frozen-view')]//tbody//tr");
  
  for(var i = 1; i <TagsList.length ; i++)
  {
    let TagName = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-table-frozen-view')]//tbody//tr["+i+"]//td[3]");
  
    if (TagName.textContent == "Varsha")
    {
      let Status = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-table-frozen-view')]//tbody//tr["+i+"]//td[2]");
      
      if(Status.WaitProperty("textContent", "Failed", 100000) == false)
      {
        Log.Message("Pass")
      }
      
      //WaitElement
  
      //      if(Status.WaitProperty("textContent", "Failed", 100000))
//booen
//      {
//        Log.Message("Deployed Assets")
//      }
//      else if(Status.WaitProperty("textContent",Deployed, 50000))
//      {
//        Log.Message("Asset is failed")
//      }

//for successful submission of deployment
//  let browser = Aliases.browser;
//  aqObject.CheckProperty(browser.pageSapiensDecision.panel17, "contentText", cmpEqual, "Deployment task was submitted");
//  aqObject.CheckProperty(browser.pageSapiensDecision2.panel35, "Exists", cmpEqual, true);
//  
    }
  }
}
