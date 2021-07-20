let CustomProperty_array=[];
let CustompropertyafterEdit_array=[]
function Get_CustomProperty()
{
  let CustProp_subarray=[];
  let CustompropertyExist=Aliases.browser.pageSapiensDecision.FindElement("//dcn-model-mapping-custom-properties//div//div//div").Child(0).getAttribute("class")
  Log.Message(CustompropertyExist);
  
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
               let CustomProperty_text = CP_textbox.Text; 
               Log.Message(CustomProperty_text);
               CustProp_subarray.push(CustomProperty_text);                   
            }
            else
            {
              Log.Error("CustomProperty "+CP_App_data+" feild textbox is Disabled");               
            }
           
         }
          CustomProperty_array.push(CustProp_subarray);
          var CustomProperty_Text_array= new Array();
          CustomProperty_Text_array=CustomProperty_array.toString().split(",");  
          Project.Variables.MM_CustomProperty_BeforeEdit = CustomProperty_Text_array;
  }
  
  
  
  else
  {
    Log.Message("The selected Model Definition has no Properties ")
    let textNode = Aliases.browser.pageSapiensDecision2.textnodeTheSelectedModelDefiniti;
    aqObject.CheckProperty(textNode, "contentText", cmpEqual, "The selected Model Definition has no Properties");
    aqObject.CheckProperty(textNode, "Exists", cmpEqual, true);
  }
 
}


function Get_CustomPropertyAfterEdit()
{
  let CustProp_subarray=[];
  let CustompropertyExist=Aliases.browser.pageSapiensDecision.FindElement("//dcn-model-mapping-custom-properties//div//div//div").Child(0).getAttribute("class")
  Log.Message(CustompropertyExist);
  
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
               let CustomProperty_text = CP_textbox.Text; 
               Log.Message(CustomProperty_text);
               CustProp_subarray.push(CustomProperty_text);                   
            }
            else
            {
              Log.Error("Custom Property "+CP_App_data+" feild textbox is Disabled");               
            }
           
         }
          CustomProperty_array.push(CustProp_subarray);
          var CustomProperty_Text_array= new Array();
          CustomProperty_Text_array=CustomProperty_array.toString().split(",");  
          Project.Variables.MM_CustomProperty_AfterEdit = CustomProperty_Text_array;
  }
  
  
  
  else
  {
    Log.Message("The selected Model Definition has no Properties ")
    let textNode = Aliases.browser.pageSapiensDecision2.textnodeTheSelectedModelDefiniti;
    aqObject.CheckProperty(textNode, "contentText", cmpEqual, "The selected Model Definition has no Properties");
    aqObject.CheckProperty(textNode, "Exists", cmpEqual, true);
  }
 
}
