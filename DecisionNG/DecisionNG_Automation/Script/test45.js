function test56()
{
  let TabName = "Knowledge Sources";
  let SearchAsset;
  
  let userInput = "Condo Project Guide: 2.1.7 Special Assessments [V1]";
  if(TabName == "Decisions" || TabName == "Rule Families")
  {
    SearchAsset = userInput.split('(');
  }
  else if(TabName == "Decision Flows" || TabName == "Fact Types" || TabName == "Knowledge Sources")
  {
    SearchAsset = userInput.split('[');
  }
  Log.Message(SearchAsset[0])
  Log.Message(SearchAsset[1])
}