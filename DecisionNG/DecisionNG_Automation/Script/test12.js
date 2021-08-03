function test45
()
{
  let Status = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-table-frozen-view')]//tbody//tr[1]//td[2]");
      
  if(Status.WaitProperty("textContent", "Requested", 100000) == false)
      {
        Log.Message("Pass")
      }
}