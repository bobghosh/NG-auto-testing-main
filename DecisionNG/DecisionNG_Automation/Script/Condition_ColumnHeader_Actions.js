function ConditionColumn_OpenSupportingRF()
{
   
  let page=Aliases.browser.pageSapiensDecision2
  page.FindElement("//div[@class='content-padding decision-table__conclusion-cell--normal ng-star-inserted']").click();
  let ConditionColumns= page.FindElements("//div[@class='fact-type-status-view rule-family-view-fact-type__condition-header']")
  Log.Message(ConditionColumns.length)
  for(let i=1;i<=ConditionColumns.length;i++)
  {
    let ConditionFT=page.FindElement("//div["+i+"][@class='wj-cell wj-header']//dcn-fact-type-status-view//span")
    let FT_Text= ConditionFT.textcontent
    Log.Message(FT_Text)
    if(FT_Text == "Condo Project Local Jurisdiction Certificate of Occupancy Issued Indicator")
    {
      ConditionFT.DblClick();
      break;
    }
    
  }
  //Verify if the navigation to Supporting RF is successfull
    let Supporting_RF_Conclusion = page.FindElement("//div[@class='wj-cell wj-header conclusionHeader']//span").textContent
    if(Supporting_RF_Conclusion == 'Condo Project Local Jurisdiction Certificate of Occupancy Issued Indicator')
    {
      Log.Checkpoint('Navigated to Supporting RF successfully')
    }
}
