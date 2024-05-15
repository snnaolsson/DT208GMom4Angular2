# DT208G - Moment 4 - Angular 2
## Syfte
Uppgiftens syfte är 
+ att träna på att göra HTTP-anrop med Angular och HttpClient.
+ Skapa services med Angular
+ Presentera data på skärmen från Http-anrop 
+ Sortera och söka data

# Uppgiften
Uppgiften är att skapa en sida  med Angular som läser in ramschemat för webbutvecklingsprogrammet HT -23 och presentera detta i tabellformat på hemsidan. 

* Ett interface är skapat som innehåller struktur för varje Course.
* Ett service är skapat som sköter hämtningen av data från JSON - hämtningen sker via extern URL. 
* Sökfunktion består av metoden applyfilter som kallas när användaren skriver i sökrutan. I metoden så används filter-metoden för att skapa en ny array som endast innehåller de kurser från courselist som matchar användarens sökfras. I return-satsen så används en ||-operator för att kombinera två villkor: antingen att namnet på kursen innehåller sökfrasen eller att den konverterade kurskoden innehåller sökfrasen. Om något av dessa stämmer så läggs kursen till den nya filtrerade arrayen som då skrivs ut till sidan via en loop på html-sidan.
* Sorteringsfunktion för kurserna blablabla...