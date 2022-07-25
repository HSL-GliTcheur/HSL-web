function ouvrirFermerSpoiler(div)
{
  var spoilers = document.getElementsByClassName("contenuSpoiler");
  var spoiler_clic = div.querySelector(".contenuSpoiler");
  for (var i = 0, nombres = spoilers.length; i < nombres; i++)
  {
    if ((spoilers[i].classList.contains("afficher") == true) && (spoilers[i] != spoiler_clic))
    {
      spoilers[i].classList.remove ('afficher');
      spoilers[i].classList.toggle ('cacher');
    }
  }
  var divContenu = div.getElementsByTagName('div')[1];
  if (divContenu.classList.contains("cacher") == true) 
  {
    divContenu.classList.remove ('cacher');
    divContenu.classList.toggle ('afficher');
  }
  else if (divContenu.classList.contains("afficher") == true) 
  {
    divContenu.classList.remove ('afficher');
    divContenu.classList.toggle ('cacher');
  }
}