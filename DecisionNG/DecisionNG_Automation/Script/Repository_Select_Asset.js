function Select_Asset_Xpath(Asset_path,Asset_Name)
{
  let Paginator;
  let page =Aliases.browser.pageSapiensDecision2;
  if(page.FindElements("//dcn-paginator//p-paginator//div").length >0)
    {
      Paginator = "Yes";
    }
    else
    {
      Paginator = "No";
    }
    
    Log.Message(Paginator);
  
    
 var ItemCount;
    var flag = 0;
    var ItemName = Asset_Name
    var hasNext = true
    
   do{

    ItemCount = page.FindElements("//dcn-expandable-selectable-list-item//i[contains(@class,'"+Asset_path+"')]/following-sibling::div/a");
    
    //Iterate through all the rows and finding the desired Task
    for(let j = 1; j <= ItemCount.length ; j++)
    {
          //Log.Message(ItemCount.length)
          let HighlightedItemName = page.FindElement("//dcn-expandable-selectable-list-item["+j+"]//i[contains(@class,'"+Asset_path+"')]/following-sibling::div/a");
          //If the Item Name matches 
          
          if(HighlightedItemName.textContent.trim()== Asset_Name )
          {          
           //Delay(1000);
           Log.Message(HighlightedItemName.textContent);
           page.FindElement("//dcn-expandable-selectable-list-item["+j+"]//i[contains(@class,'"+Asset_path+"')]").click();
           Delay(1000);
           flag =1;
           break;
           }
           
           
   }
   if(flag ==1)
      {
        break;
      }


          if(Paginator == "Yes")
          {
            if(page.FindElement("//*[contains(@class,'i-paginator-next')]").getAttribute("class").includes("ui-state-disabled"))
            { 
              hasNext = "false";
            }
            else
            {
              page.FindElement("//*[contains(@class,'i-paginator-next')]").click(); 
              Delay(1000);    
              break;    
            }
          }
          else
          {
            hasNext = "false";
          }
       
        
      }while (hasNext==true)
}

function Select_SingleAsset(Asset_Type,Asset_Name){
  let AssetXpath;
switch (Asset_Type){
  
  case "Decision Flows":
    AssetXpath= "icon-flow";
    Select_Asset_Xpath(AssetXpath,Asset_Name);
    
  case "Decisions":
    AssetXpath= "icon-decision_view";
     Select_Asset_Xpath(AssetXpath,Asset_Name);
     
  case "Fact Types":
    AssetXpath="icon-fact_type";
    Select_Asset_Xpath(AssetXpath,Asset_Name);
    
  default:
    AssetXpath="icon-knowledge_source";
    Select_Asset_Xpath(AssetXpath,Asset_Name);
}
  
}

