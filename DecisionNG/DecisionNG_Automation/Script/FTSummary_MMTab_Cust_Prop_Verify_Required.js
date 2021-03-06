
function CustomProperty_Required_verify(CP_name)
{
   
  let CustompropertyExist=Aliases.browser.pageSapiensDecision.FindElement("//dcn-model-mapping-custom-properties//div//div//div").Child(0).getAttribute("class")
  Log.Message(CustompropertyExist);
  
  if(!CustompropertyExist.includes('no-data spec-no-custom-properties'))
  {
    let CustomProperty_count;
    let page=Aliases.browser.pageSapiensDecision2;
    let CP= CP_name
    let CP_arr= CP.split(',')     
        Log.Message(CP_arr.length)
        for(var i = 0; i < CP_arr.length ; i++) 
        { 

          CustomProperty_count= page.FindElements("//dcn-model-mapping-custom-properties//fx-field//label");

          for(let j=0; j<CustomProperty_count.length; j++)
          {
            
            let CP_App_data= page.FindElement("//dcn-model-mapping-custom-properties//fx-field["+(j+1)+"]//label").textContent.trim();
          
            if(CP_App_data == CP_arr[i])       
            {
              var Object= Aliases.browser.pageSapiensDecision2.FindElement("//dcn-model-mapping-custom-properties//fx-field["+(j+1)+"]//div")
              var Classname= Object.getAttribute("class")
              Log.Message(Classname)
              if(Classname.includes("required"))
              {
                Log.Checkpoint("Custom Property "+CP_arr[i]+" is marked as required")
              }
              else
              Log.Checkpoint("Custom Property "+CP_arr[i]+" is not marked as required")
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