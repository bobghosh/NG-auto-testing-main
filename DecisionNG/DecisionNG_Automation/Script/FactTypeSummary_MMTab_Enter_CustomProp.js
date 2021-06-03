function EnterCustomProperty(CP_name_DT_AV_InputValue)
{
  
  let CustompropertyExist=Aliases.browser.pageSapiensDecision.FindElement("//dcn-model-mapping-custom-properties//div//div//div").Child(0).getAttribute("class")
  Log.Message(CustompropertyExist);
  
  if(!CustompropertyExist.includes('no-data spec-no-custom-properties'))
  {
    let CustomProperty_count;
    let page=Aliases.browser.pageSapiensDecision2;
    let CP= CustomPropertyInput
    let CP_arr= CP.split(',')     
  
        for(var i = 0; i < CP_arr.length ; i++) 
        { 
          Log.Message(CP_arr.length)
          var CP_data = CP_arr[i].split('-');
          var cust_Property=CP_data[0];
          var cust_property_Input=CP_data[1];

          CustomProperty_count= page.FindElements("//dcn-model-mapping-custom-properties//fx-field//label");

          for(i=0; i<CustomProperty_count.length; i++)
          {
            let CP_App_data= page.FindElement("//dcn-model-mapping-custom-properties//fx-field["+(i+1)+"]//label").textContent.trim();
          
            if(CP_App_data == cust_Property)       
            {
              let CP_textbox= page.FindElement("//dcn-model-mapping-custom-properties//fx-field["+(i+1)+"]//div//span//input")
               
              if(CP_textbox.Enabled==true)
              {
                 CP_textbox.SetText(cust_property_Input);
                 break;  
              }
              else
              {
                Log.Message("CustomProperty "+cust_Property+" feild is disabled");
                break;
              }               
            }
          
          }
    
        }
  }
  
  else
  {
    Log.Message("The selected Model Definition has no Properties ")
    let textNode = Aliases.browser.pageSapiensDecision2.textnodeTheSelectedModelDefiniti;
    aqObject.CheckProperty(textNode, "contentText", cmpEqual, "The selected Model Definition has no Properties");
    aqObject.CheckProperty(textNode, "Exists", cmpEqual, true);
    
  }
  
}
