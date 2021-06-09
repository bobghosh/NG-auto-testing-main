function Model_Definition_Availability_Check(ModelDefinitionName)
{
  //let ModelDefinitionName;
  let Item = ModelDefinitionName;
  let PtableCount = Aliases.browser.PageSapiensDecision.FindElement("//p-table/div").ChildCount;
  Log.Message(PtableCount);
  let flag = 0;
  let hasNext = true;
  
  if(PtableCount>1)
  {
    Log.Message("Pagination is available");
    
//    for(var i = 0; i<PtableCount ; i++)
//    {
//        let ChildName = Aliases.browser.PageSapiensDecision.FindElement("//p-table/div").Child(i).getAttribute("class");
//             
//      if(dfName.includes("p-paginator"))
//      {
//        Log.Checkpoint("Pass");
//    
//      }    
//    
//    }
  }  
  
  do
  {    
    ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody/tr");
    
    //Iterate through all the rows and finding the desired Task
    for(var j = 1; j <= ItemCount.length ; j++)
    {
          var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[1]//a");

          //If the Item Name matches 
          if(HighlightedItemName.textContent == Item )
          {          
                 //HighlightedItemName.click();
                 flag =1;
                Log.Checkpoint("Model Definition is available");     
           }
           if(flag == 1)
           {
              break;
           }
      }
      if(flag ==1)
      {
        break;
      }
      
      if(PtableCount>1)
      {      
        
        var Next_Page_Button = Aliases.browser.pageSapiensDecision.FindElement("//a[@ng-reflect-klass='ui-paginator-next ui-paginator']");
      
        if(Next_Page_Button.getAttribute("class") == "ui-paginator-next ui-paginator-element ui-state-default ui-corner-all")
        {
          Next_Page_Button.click();          
        }
    
        else
        {
            hasNext = false;
        }
      
      }else
      {
        hasNext = false;
      }
     
  }
  while(hasNext == true)
  
  if(flag == 0)
  {
    Log.Checkpoint("Model Definition is not found");
  }
  
}
module.exports.Model_Definition_Availability_Check = Model_Definition_Availability_Check;