function VerifyModelDefinitionVersionInUse(ModelDefinitionVersion)
{
        
        
        let MD = ModelDefinitionVersion
        let MD_Version_Values = MD.split(',');     
        for(let j = 0; j < MD_Version_Values.length ; j++) 
        { 
        
        let ModelDefinitions_Version_list=Aliases.browser.pageSapiensDecision.FindElements("//*[@class='dcn-datagrid model-definition-versions-list']//tbody//tr//td[1]");
        Log.Message(ModelDefinitions_Version_list.length)
        for(let i=0;i<ModelDefinitions_Version_list.length;i++)
        {          
            let ModelDefinition_Version_Text=ModelDefinitions_Version_list[i].textContent;
            
            //Log.Message("Model Definition Name is "+ModelDefinition_Text);
            
            if(ModelDefinition_Version_Text == MD_Version_Values[j])
            {
              //ModelDefinitions_list[i].click();
              
              let InUseicon = Aliases.browser.pageSapiensDecision.FindElement("//*[@class='dcn-datagrid model-definition-versions-list']//tbody//tr["+(i+1)+"]//*[@class='icon-in_use spec-in-use-icon ng-star-inserted']").Exists
             
              if(InUseicon== true)
              {
                Log.Checkpoint("Model Definition Version "+MD_Version_Values[j]+" is InUse");
                
              }
              else
              {
                Log.Message("Model Definition Version "+MD_Version_Values[j]+" is Not InUse")
              }
              break;
            }
            
            if(i == (ModelDefinitions_Version_list.length-1))
              {
                Log.Error("Option doesn't exists/Wrong Input Data"); 
                ModelDefinitions_Version_list[0].click();
                break;
              }

 
  
        }


}

}