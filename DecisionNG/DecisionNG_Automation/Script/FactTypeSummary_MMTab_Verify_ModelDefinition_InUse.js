function SelectedModelDefinitionInUse(ModelDefinition)
{
        let ModelDefinitions_list=Aliases.browser.pageSapiensDecision.FindElements("//p-table[@class='dcn-datagrid model-mapping-definition-list']//tbody//tr//td[1]");
        Log.Message(ModelDefinitions_list.length)
        for(let i=0;i<ModelDefinitions_list.length;i++)
        {
            
            let ModelDefinition_Text=ModelDefinitions_list[i].textContent;
            
            Log.Message("Model Definition Name is "+ModelDefinition_Text);
            
            if(ModelDefinition_Text.includes(ModelDefinition))
            {
              //ModelDefinitions_list[i].click();
              
              let InUseicon = Aliases.browser.pageSapiensDecision.FindElement("//*[@class='dcn-datagrid model-mapping-definition-list']//tbody//tr["+(i+1)+"]//*[@class='icon-in_use spec-in-use-icon ng-star-inserted']").Exists
             
              if(InUseicon== true)
              {
                Log.Checkpoint("Model Definition "+ModelDefinition+" is InUse")
              }
              else
              {
                Log.Message("Model Definition "+ModelDefinition+" is Not InUse")
              }
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