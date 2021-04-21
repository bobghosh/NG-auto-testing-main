function SelectingOptionfromDropdown(option,flag)
{
  if(flag=="Yes")
  {
    Aliases.browser.pageSapiensDecision.form.form2.form4.button10.ClickButton();
    var Option=Aliases.browser.pageSapiensDecision.FindElements("//div[@role='option']");
    //Log.Message(Option.length)
      for(let i=0;i<=Option.length;i++)
      {
        var Optiontext=Option[i].textContent;
        //Log.Message(Optiontext)
        if(Optiontext.includes(option))
          {
            Option[i].click();
            break;
          }
 
  
      }
  }
  else
  {  
        var Option=Aliases.browser.pageSapiensDecision.FindElements("//div[@role='option']");
        //Log.Message(Option.length)
        for(let i=0;i<=Option.length;i++)
        {
            var Optiontext=Option[i].textContent;
            //Log.Message(Optiontext)
            if(Optiontext.includes(option))
            {
              Option[i].click();
            break;
            }
 
  
        }
 
  
  }
  
 }
module.exports.SelectingOptionfromDropdown = SelectingOptionfromDropdown;