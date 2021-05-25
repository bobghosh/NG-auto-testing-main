function SelectedModelDefinitionInUse()
{
        let ModelDefinitions_list=Aliases.browser.pageSapiensDecision.FindElements("//p-table[@class='dcn-datagrid model-mapping-definition-list']//tbody//tr//td[1]");
        Log.Message(ModelDefinitions_list.length)
        for(let i=0;i<ModelDefinitions_list.length;i++)
        {
            
            let ModelDefinition_Text=ModelDefinitions_list[i].textContent;
            
            Log.Message("Model Definition Name is "+ModelDefinition_Text);
            
            if(ModelDefinition_Text.includes('FHA'))
            {
              ModelDefinitions_list[i].click();
              
              let InUseicon=Aliases.browser.pageSapiensDecision.FindElement("//*[@class='dcn-datagrid model-mapping-definition-list']//tbody//tr["+(i+1)+"]//td[2]//div//div")
              Log.Message(InUseicon)
//              if(InUseicon==true)
//              {
//                Log.Message("present")
//              }
//              else
//              {
//                Log.Message("not present")
//              }
              break;
            }
            
            if(i == (ModelDefinitions_list.length-1))
              {
                Log.Error("Option doesn't exists/Wrong Input Data"); 
                ModelDefinitions_list[0].click();
                break;
              }

 
  
        }




}