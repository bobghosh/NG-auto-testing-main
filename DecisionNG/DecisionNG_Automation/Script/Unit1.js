function DecisionScreen_Enable_Editing()
{
  let Name= "Insured Major Location Change"
  var obj = Aliases.browser.pageSapiensDecision2.canvas;
  var RF = GetTextBlockCustom(obj, Name);
   if (RF != null)
  {
    let page=Aliases.browser.pageSapiensDecision2;
    RF.ClickNextTo(toBottom, 2);
    Delay(1000);
    OCR.Recognize(page.canvas).BlockByText('Enable Editing').ClickNextTo(toBottom, 2);
    Delay(8000);
  }
}


function GetTextBlockCustom(anObject,aPattern)
{
//  var anObject= Aliases.browser.pageSapiensDecision2.canvas;
//  var aPattern = "Insured Major Location Change"
  var obj = OCR.Recognize(anObject);
  Log.Message(obj.FullText);
  Log.Message(obj.BlockCount)
  if (obj.FullText != "" && obj.BlockCount > 1)
  {
    
    let sametext_Subarray=[]
    for (let i = 0; i < obj.BlockCount; i ++)
    {
      let re = new RegExp(aPattern);
      //Log.Message(re)
      Log.Message(obj.Block(i).Text);
      Matches = obj.Block(i).Text.match(re);
      if (Matches != null)
      {
        Log.Message("Entered");
        let a=obj.Block(i).Text
        if(!sametext_Subarray.includes(a))
        {
          sametext_Subarray.push(a)
        }
        else
        {
          return obj.Block(i);
        }
        
      }
      
    }

  return null;
  
  }
  
  else
    return null;

}
