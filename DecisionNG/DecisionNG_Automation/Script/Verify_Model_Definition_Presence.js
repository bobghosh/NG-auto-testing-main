function Verify_Model_Definition_Presence()
{  
  let ModelDefinitionName = "Test";
  let DeleteItem = "Yes";
  //Aliases.browser.pageSapiensDecision.form.form2.form4.textbox6.SetText(ModelDefinitionName);
  
  var ItemCount;
  var flag = 0;
  var hasNext = true
  
  do{

    ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody/tr");
    
    //Iterate through all the rows and finding the desired Task
    for(var j = 1; j <= ItemCount.length ; j++)
    {
      
      var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[1]//a");
    
      //If the Item Name matches 
      if(HighlightedItemName.textContent == ModelDefinitionName )
      {
          //Verify the Presence of the Model Definition
          Log.Message("Model Mapping is available " + ModelDefinitionName);
          flag =1                     
      }         
     if(flag == 1)
      {        
        break;
      }
    }
    
    if(flag == 1)
    {        
      break;
    }
    
    var Next_Page_Button = Aliases.browser.pageSapiensDecision.FindElement("//a[@ng-reflect-klass='ui-paginator-next ui-paginator']");
    if(Next_Page_Button.getAttribute("class") == "ui-paginator-next ui-paginator-element ui-state-default ui-corner-all")
    {
      Next_Page_Button.click();          
    }
    
    else
    {
        hasNext = false;
    }
  
  }while(hasNext == true)
  

}