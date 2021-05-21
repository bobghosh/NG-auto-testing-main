function SelectedModelDefinitionInUse(ModelDefinition)
{
        let ModelDefinitions_list=Aliases.browser.pageSapiensDecision.FindElements("//p-table[@class='dcn-datagrid model-mapping-definition-list']//tbody//tr//td[1]");
        Log.Message(ModelDefinitions_list.length)
        for(let i=0;i<ModelDefinitions_list.length;i++)
        {
            
            let ModelDefinition_Text=ModelDefinitions_list[i].textContent;
            //Log.Message("Model Definition Name is "+ModelDefinition_Text)
            if(ModelDefinition_Text.includes(ModelDefinition))
            {
              ModelDefinitions_list[i].click();
              Aliases.browser.pageSapiensDecision.FindElement("//*[@class='dcn-datagrid model-mapping-definition-list']//tbody//tr["+i+"]//*[@class='icon-in_use spec-in-use-icon ng-star-inserted']")
              break;
            }
            
            if(i == (ModelDefinitions_list.length-1))
              {
                Log.Error("Option doesn't exists/Wrong Input Data"); 
                Option[0].click();
                break;
              }

 
  
        }




}