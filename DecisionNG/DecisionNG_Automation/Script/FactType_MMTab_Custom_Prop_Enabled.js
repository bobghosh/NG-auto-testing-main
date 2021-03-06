function Custom_Property_Enabled(CustomProperty_Enabled_Disabled,Verify_NoValues)
{
   
  let CustompropertyExist=Aliases.browser.pageSapiensDecision.FindElement("//dcn-model-mapping-custom-properties//div//div//div").Child(0).getAttribute("class")
  //Log.Message(CustompropertyExist);
  
  if(!CustompropertyExist.includes('no-data spec-no-custom-properties'))
  {
    let CustomProperty_count;
    let page=Aliases.browser.pageSapiensDecision2;

          CustomProperty_count= page.FindElements("//dcn-model-mapping-custom-properties//fx-field//label");

          for(let j=0; j<CustomProperty_count.length; j++)
          {
            
            let CP_App_data= page.FindElement("//dcn-model-mapping-custom-properties//fx-field["+(j+1)+"]//label").textContent.trim();
          
            let CP_textbox= page.FindElement("//dcn-model-mapping-custom-properties//fx-field["+(j+1)+"]//div//span//input")
               
            if(CP_textbox.Enabled==true)
            {
              if(CustomProperty_Enabled_Disabled == "Enabled")
                {
                  Log.Checkpoint("Custom Property "+CP_App_data+" feild textbox is Enabled");
                }
                else
                {
                  Log.Error("Custom Property "+CP_App_data+" feild textbox is Enabled")
                }                       
            }
            else
            {
              if(CustomProperty_Enabled_Disabled == "Disabled")
                  {
                    Log.Checkpoint("Custom Property "+CP_App_data+" feild textbox is Disabled");
                  }
                  else
                  {
                    Log.Error("Custom Property "+CP_App_data+" feild textbox is Disabled");
                  }    
               
            }
           
         }
  }
  
  
  
  else
  {
    if(Verify_NoValues == 'Yes')
    {
      Log.Checkpoint("The selected Model Definition has no Properties ");
      let textNode = Aliases.browser.pageSapiensDecision2.textnodeTheSelectedModelDefiniti;
      aqObject.CheckProperty(textNode, "contentText", cmpEqual, "The selected Model Definition has no Properties");
      aqObject.CheckProperty(textNode, "Exists", cmpEqual, true);
    }
    else
    {
      Log.Warning("The selected Model Definition has no Properties ")
      let textNode = Aliases.browser.pageSapiensDecision2.textnodeTheSelectedModelDefiniti;
      aqObject.CheckProperty(textNode, "contentText", cmpEqual, "The selected Model Definition has no Properties");
      aqObject.CheckProperty(textNode, "Exists", cmpEqual, true);
    }
    
  }
 
}
