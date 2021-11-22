var Breadcrumb_Verify_Navigation = require("Breadcrumb_Verify_Navigation");
function Versions_Assets_withClassname(Asset_Type,compared_assets,context_of_asset,classname)
{
  // Function for Opening asset from subtabs
  let page =Aliases.browser.pageSapiensDecision2
  Delay(1000);
  let source_assets_array_xpath="//div[contains(@class,'sub-tab__list')]/dcn-link-label/parent::div";
  let source_assets_array= page.FindElements(source_assets_array_xpath);
  
  let expander_icon_assets=page.FindElements(source_assets_array_xpath+"//parent::div//div[contains(@class,'item__expander-icon--wrapper')]");
  
  Log.Message("No of Versions displayed in Additional info"+source_assets_array.length);
  let Flag;
  //let compared_assets_array=compared_assets.toString().split(",");
//for(let i=0;i<compared_assets_array.length;i++)
//{
 Flag="false";
    
   let compared_asset_status=compared_assets.toString().split("|"); //Taksing asset and status from the data sheet
   Log.Message("Asset to open:  "+compared_asset_status)
  for (let j=0;j<source_assets_array.length;j++)
  {
    let k=j+1;
   let source_asset=source_assets_array[j].TextContent.trim();
   let Asset_Status_AI;  //to store the status of the element
   
   //To Verify draft/Candidate asset
     
      let childElements=source_assets_array[j].childCount;
   
     if (childElements==1)
    {
      Asset_Status_AI="Approved";
     }
     else 
     {
       
       let statusicon=page.FindElement("("+source_assets_array_xpath+")["+k+"]//dcn-asset-state//dcn-entity-state");
 
     if (statusicon.getAttribute('class').includes("asset__status--draft"))
     {
        Asset_Status_AI="Draft";
         
     }
     else if (statusicon.getAttribute('class').includes("asset__status--candidate"))
     {
       Asset_Status_AI="Candidate";
     
     }
       
     }
  //ends verification on status icon 
  
      
     
     if((source_asset==compared_asset_status[0]) && (Asset_Status_AI==compared_asset_status[1]))
     {
       Flag="true";
       
    //Verify Asset icon in additional info
       let expander_icon=expander_icon_assets[j].lastChild; //to check plus expander icon exists
    
      let iconclass=page.FindElement("("+source_assets_array_xpath+"//i)["+k+"]").getAttribute('class');
      if(iconclass.includes(classname))
            {
              Log.Checkpoint(Asset_Type+" icon is Present");
              //to Check Expander icon
                if(expander_icon=="[HTMLElement]")
                    {
                        if(expander_icon.getAttribute('class').includes('expander-icon icon-link_plus'))
                        {
                          expander_icon.click();
                         let context_Elements=page.FindElements(source_assets_array_xpath+"//i[contains(@class,'context icon')]//following-sibling::div/a");
                         for(let index=0;index<context_Elements.length;index++)
                         {
                           context_element_text=context_Elements[index].TextContent.trim();
                           //Log.Message(context_element_text)
                           if(context_element_text==context_of_asset)
                           {
                             context_Elements[index].click();
                           }
                         }
                        }
         } 
                else{
              source_assets_array[j].click();
              }           
            }
       else
       {
         Log.Error(Asset_Type+" icon is not Present");
       }
      
     // end -Verify Asset icon in additional info
     
    
     
  break;
  }
}

if((Flag=="true")&&((Asset_Type=="Decision Flow")||(Asset_Type=="Decision View")||(Asset_Type=="Rule Family")))
{
     page.WaitElement(page.FindElement("//div[contains(@class,'breadcrumb ng-star')]"));
  //Verify the opened Asset's breadcrumb
 Breadcrumb_Verify_Navigation.Breadcrumb_Verify_Navigation(compared_asset_status[0]);
  Log.Checkpoint(compared_asset_status[0] +" with "+ compared_asset_status[1]+" status is opened");
}
else if((Flag=="true")&&((Asset_Type=="Knowledge Source")||(Asset_Type=="Fact Type")))
{
  page.WaitElement(page.FindElement("//dcn-dialog//div[contains(@class,'dialog--format')]"));
  let heading_dialog=page.FindElement("//dcn-dialog//div[contains(@class,'dialog--format')]//h1").textContent.trim();
  
    Log.Checkpoint(Asset_Type+" Dialog opened successfully");
    
    Log.Message("Heading of the Dialog is "+heading_dialog);
    Delay(1000);
    page.FindElement("//button//i[@class='icon-close']").click();
 
}

else{
   Log.Error(compared_asset_status[0] +" with status "+ compared_asset_status[1]+" doesn't exist");
   }
  
   
   
}



function AI_Subtab_Open_Asset(SubTabName,Open_Asset,context_of_asset){
  let classname;
switch(SubTabName)
{
  case "Flows":
   classname="icon-flow";
   Versions_Assets_withClassname("Decision Flow",Open_Asset,context_of_asset,classname);
   break;
  
  case "Decisions":
   classname="icon-decision_view";
   Versions_Assets_withClassname("Decision View",Open_Asset,context_of_asset,classname);
   break;
   
  case "Rule Families":
  classname="icon-rule_family_view";
   Versions_Assets_withClassname("Rule Family",Open_Asset,context_of_asset,classname);
   break;
  
  case "Fact Types":
  classname="icon-fact_type";
   Versions_Assets_withClassname("Fact Type",Open_Asset,context_of_asset,classname);
   break;
  
  default :
  classname="icon-knowledge_source";
   Versions_Assets_withClassname("Knowledge Source",Compared_Assets,context_of_asset,classname);
   break;
  
}
}


