function MappedValuesEnabled_Verify(Verify_Enabled_Disabled,Verify_NoValues)
{
  
  let MappedValueExist=Aliases.browser.pageSapiensDecision.FindElement("//dcn-model-mapping-allowed-values//div//div//div").Child(0).getAttribute("class")
  Log.Message(MappedValueExist);
  
  if(!MappedValueExist.includes('spec-no-data no-data'))
  {
    let AllowedValues_count;
    let page=Aliases.browser.pageSapiensDecision2;

          AllowedValues_count= page.FindElements("//dcn-model-mapping-allowed-values//fx-field//label");
          Log.Message(AllowedValues_count.length)
          for(i=0; i< AllowedValues_count.length; i++)
          {
            let AllowedValue= page.FindElement("//dcn-model-mapping-allowed-values//fx-field["+(i+1)+"]//label").textContent.trim();

              let AllowedValuetextbox= page.FindElement("//dcn-model-mapping-allowed-values//fx-field["+(i+1)+"]//div//span//input");
              if(page.FindElement("//dcn-model-mapping-allowed-values//fx-field["+(i+1)+"]//div//span//input").Enabled==true)
              {
                if(Verify_Enabled_Disabled == "Enabled")
                {
                  Log.Checkpoint("Allowed Value "+AllowedValue+" feild textbox is Enabled");
                }
                else
                {
                  Log.Error("Allowed Value "+AllowedValue+" feild textbox is Enabled")
                }
                 
                   
              }
              else
              {
                if(Verify_Enabled_Disabled == "Disabled")
                {
                  Log.Checkpoint("Allowed Value "+AllowedValue+" feild textbox is Disabled");
                }
                else
                {
                  Log.Error("Allowed Value "+AllowedValue+" feild textbox is Disabled");
                }
                
                
              }
                           
            
          
          }
    
        
  }
  
  else
  {
    if(Verify_NoValues == 'Yes')
    {
      Log.Checkpoint("Fact Type has no allowed values ");
      let textNode = Aliases.browser.pageSapiensDecision2.textnodeFactTypeHasNoAllowedValu;
      aqObject.CheckProperty(textNode, "Exists", cmpEqual, true);
      aqObject.CheckProperty(textNode, "contentText", cmpEqual, "Fact Type has no allowed values");
    }
    else
    {
      Log.Warning("Fact Type has no allowed values ")
      let textNode = Aliases.browser.pageSapiensDecision2.textnodeFactTypeHasNoAllowedValu;
      aqObject.CheckProperty(textNode, "Exists", cmpEqual, true);
      aqObject.CheckProperty(textNode, "contentText", cmpEqual, "Fact Type has no allowed values");
    }
    
    
  }
  
}
