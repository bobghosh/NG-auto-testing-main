function SelectModelDefinition(ModelDefinition)
{
        let ModelDefinitions_list=Aliases.browser.pageSapiensDecision.FindElements("//*[@class='dcn-datagrid model-mapping-definition-list']//tbody//tr//td[1]");
        Log.Message(ModelDefinitions_list.length)
        for(let i=0;i<ModelDefinitions_list.length;i++)
        {
            
            let ModelDefinition_Text=ModelDefinitions_list[i].textContent;
            //Log.Message("Model Definition Name is "+ModelDefinition_Text)
            if(ModelDefinition_Text == ModelDefinition)
            {
             ModelDefinitions_list[i].click();
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