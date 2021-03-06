function EditMappedValues(AllowedValueinput)
{
  
  let MappedValueExist=Aliases.browser.pageSapiensDecision.FindElement("//dcn-model-mapping-allowed-values//div//div//div").Child(0).getAttribute("class")
  Log.Message(MappedValueExist);
  
  if(!MappedValueExist.includes('spec-no-data no-data'))
  {
    let AllowedValues_count;
    let page=Aliases.browser.pageSapiensDecision2;
    let AV= AllowedValueinput
    let AV_arr= AV.split(',')     
  
        for(var i = 0; i < AV_arr.length ; i++) 
        { 
          //Log.Message(AV_arr.length)
          var Mapped_data = AV_arr[i].split('-');
          var MVInput=Mapped_data[0];
          var AVInput=Mapped_data[1];
//          Log.Message(MVInput)
//          Log.Message(AVInput)
          AllowedValues_count= page.FindElements("//dcn-model-mapping-allowed-values//fx-field//label");
  
//          Log.Message(AllowedValues_count.length)
  
          for(i=0; i<AllowedValues_count.length; i++)
          {
            let AllowedValue= page.FindElement("//dcn-model-mapping-allowed-values//fx-field["+(i+1)+"]//label").textContent.trim();
          
            if(AllowedValue == MVInput)       
            {
              let AllowedValuetextbox= page.FindElement("//dcn-model-mapping-allowed-values//fx-field["+(i+1)+"]//div//span//input");
              let AllowedValueText_BeforeEdit = AllowedValuetextbox.Text
              
              Log.Message("Allowed Value text before editing is "+AllowedValueText_BeforeEdit);
              
              if(page.FindElement("//dcn-model-mapping-allowed-values//fx-field["+(i+1)+"]//div//span//input").Enabled==true)
              {
                 AllowedValuetextbox.SetText(AVInput);
                 let AllowedValueText_AfterEdit = AllowedValuetextbox.Text;
                 
                 Log.Message("Allowed Value text After editing is "+AllowedValueText_AfterEdit);
                 
                 if(AllowedValueText_BeforeEdit == AllowedValueText_AfterEdit)
                 {
                   Log.Error("Mapped Value is not updated or the input text is same as existing")
                 }
                 else
                 {
                   
                   Log.Checkpoint("Maped Value is updated successfully");
                 }
                 break;  
              }
              
              
              else
              {
                Log.Message("Allowed Values "+MVInput+" feild is disabled");
                break;
              }
                           
            }
          
          }
    
        }
  }
  
  else
  {
    Log.Message("Fact Type has no allowed values ")
    let textNode = Aliases.browser.pageSapiensDecision2.textnodeFactTypeHasNoAllowedValu;
    aqObject.CheckProperty(textNode, "Exists", cmpEqual, true);
    aqObject.CheckProperty(textNode, "contentText", cmpEqual, "Fact Type has no allowed values");
    
  }
  
}
