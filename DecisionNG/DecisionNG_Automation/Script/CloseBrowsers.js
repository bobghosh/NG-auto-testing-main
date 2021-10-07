function Close()
{

  while (Sys.WaitBrowser().Exists)
    Sys.WaitBrowser().Close();

}