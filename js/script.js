var inner = alert("Assalomu alaykum! O'zbekiston yoshlar fudbol akademiyasining ro'yxtdan o'tish bo'limiga xush kelibsiz! Ro'yxatdan o'tishni istaysizmi?")
var firstName = prompt("Ism familyangizni kiriting!")
var age = prompt('Yoshingizni kiriting', '');
var yes = document.createElement("p");
document.body.append(yes);

if(age >= 12) 
{
  yes.textContent = "Assalomu alaykum.Fudbol akademiyamizga xush kelibsiz! ";
} else 
{
  yes.style.color = "red";
  yes.textContent  = "Afsus😟. Fudbol akademiyamizga yoshingiz kichiklik qiladi!";
}