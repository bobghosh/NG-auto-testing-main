﻿function SelectDesired_RF_from_DecisionScreen(Name)
{
  var obj = Aliases.browser.pageSapiensDecision2.canvas;
  var RF = GetTextBlockCustom(obj, Name);
   if (RF != null)
  {
  let page=Aliases.browser.pageSapiensDecision2 
  RF.ClickNextTo(toBottom, 2);
  Delay(2000)
  }
}

 


function GetTextBlockCustom(anObject, aPattern)
{
  
  var obj = OCR.Recognize(anObject);
  if (obj.FullText != "" && obj.BlockCount > 1)
  {

 

    for (let i = 0; i < obj.BlockCount; i ++)
    {
      let re = new RegExp(aPattern);
      Log.Message(re)
      Log.Message(obj.Block(i).Text);
      Matches = obj.Block(i).Text.match(re);
      if (Matches != null)
      {
        
        return obj.Block(i);
      }

 

    }

 

  return null;
  }
  else
    return null;

 

}