function VerifyModelDefinitionVersionStatus(ModelDefinitionVersion,Verify_Status)
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
            
            //Log.Message("Model Definition Name is "+ModelDefinition_Version_Text);
            
            if(ModelDefinition_Version_Text == MD_Version_Values[j])
            {
              //ModelDefinitions_list[i].click();
              
              let Version_Status = Aliases.browser.pageSapiensDecision.FindElement("//*[@class='dcn-datagrid model-definition-versions-list']//tbody//tr["+(i+1)+"]//td[3]//i").getAttribute("class")
             Log.Message(Version_Status)
              if(Version_Status.includes('icon-draft'))
              {
                if(Verify_Status == 'Draft')
                {
                  Log.Checkpoint("Model Definition version "+MD_Version_Values[j]+" Status is Draft");
                }
                else
                {
                  Log.Error("Model Definition version "+MD_Version_Values[j]+" Status is Draft instead of "+Verify_Status);
                  
                }
                
                
              }
              else if(Version_Status.includes('icon-candidate_inner'))
              {
                if(Verify_Status == 'Candidate')
                {
                   Log.Checkpoint("Model Definition version "+MD_Version_Values[j]+" Status is Candidate");
                }
                else
                {
                   Log.Error("Model Definition version "+MD_Version_Values[j]+" Status is Candidate in instead of "+Verify_Status)
                }
               
              }
              else
              {
                if(Verify_Status == 'Approved')
                Log.Checkpoint("Model Definition version "+MD_Version_Values[j]+" Status is Approved");
                else
                 Log.Error("Model Definition version "+MD_Version_Values[j]+" Status is Approved instead of  "+Verify_Status)
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