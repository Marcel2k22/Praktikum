Startseite:

Mein Betriebpraktikum in der Webentwicklung (Web 2.0 => Web 3.0)

untersten Punkt entferen             x 
Fimren Standort hinzufügen + URL     x
sdg - samlinux development group     x
Zeitraum des Praktikums hinzufügen.  x

Vor Nachteile beim Text hinzufügen bei Astro zb das astro gut für Webseiten ist aber nicht wenn eine Sekretärin zb was eingeben will auf einer Seite ohne code x


Inhatlasverzeichnis
Hauptunkte:
Wo             x
Was            x
Erkenttnis     x
FAQ            x

FAQ Seite Knöpfe weg    x

Seiten kurz umbenennen  x

links einfügen auf meine Wiki Seite   x

f4 Satz fängt oben an weiterführen statt "Was habe ich mit Astro gemacht" kurz erklären

link underline x








































---
import MainLayout from "../MainLayout/MainLayout.astro";
import GitBild from '../Image/git.svg';
import HtmlBild from '../Image/html.svg';
import CssBild from '../Image/css.svg';
import GimpBild from '../Image/gimp.svg';
import IcBild from '../Image/InternetComputer.svg';
import AstroBild from '../Image/astro.svg';
import { Image } from "astro:assets";
import Left from '../Image/left1.png';
import Right from '../Image/right5.png';
---

<MainLayout title="folie2">


  <div class="MainDiv">

    <div class="ButtonFeldLeft">
      <div class="ButtonLeft">
        <div class="ButtonText">
          <a href="/f2"> <Image src={Left} alt="bild" /> </a>
        </div>
      </div>
    </div>

   

    <div class="MainText">
      
      <div class="Headline">
        <div class="border1"></div>

        <div>
            <h3 class="typed">Mit was habe ich gearbeitet?</h3>
          </div>

        <div class="border2"></div>
      </div>

      <div class="TextDiv">
        <div class="HauptText">
          <div class="Text">
            <div class="border3"></div>

            <ul><div class="ÜberschriftListe"> HTML / CSS </div>
              <ul>
                <li>
                    Grundlagen
                </li>
              </ul>
            </ul>
            
            <ul><div class="ÜberschriftListe"> Astro </div>
              <ul>
                <div class="Liste">
                  <li>
                    Statischer Seiten Generator
                  </li>
                  <div class="Platzhalter1">
                  </div>
                  <li>
                    Framework
                  </li>
                </div>
              </ul>
            </ul>

      
            <ul><div class="ÜberschriftListe"> Gimp </div>
              <ul>
                <div class="Liste">
                  <li>
                      Struktur
                  </li>
                  <div class="Platzhalter3"></div>
                  <li>
                    Bild Bearbeitung
                  </li>
                </div>
              </ul>
            </ul>

            <ul><div class="ÜberschriftListe"> Git </div>
              <ul>
                <div class="Liste">
                <li>
                    Versionkontrollsystem
                </li>
                <div class="Platzhalter2"></div>
                <li>
                  Open Source
                </li>
              </div>
              </ul>
            </ul>

            <ul><div class="ÜberschriftListe"> Internet Computer </div>
              <ul>
                <div class="Liste">
                  <li>
                    Hosting
                  </li>
                  <div class="Platzhalter5"></div>
                  <li>
                    DApp
                  </li>
                </div>
              </ul>
            </ul>
            <div class="border4"></div>
          </div>
        </div>

        <div class="FotoDiv">
          <div class="FotoDivBilder">
           <div class="Bild1"> <Image src={HtmlBild} alt="Bild" width="150"/>  </div> 
           <div class="Bild2"> <Image src={CssBild} alt="Bild" width="150"/>   </div> 
           <div class="Bild3"> <Image src={AstroBild} alt="Bild" width="150"/> </div>
           <div class="Bild3"> <Image src={GimpBild} alt="Bild" width="150"/>  </div> 
           <div class="Bild2"> <Image src={GitBild} alt="Bild" width="150"/>   </div>
           <div class="Bild1"> <Image src={IcBild} alt="Bild" width="200"/>    </div>
         </div>
      </div>

    </div>

    <div class="ButtonFeldRight">
      <div class="ButtonRight">
        <div class="ButtonText">
          <a href="/f4"><Image src={Right} alt="bild" /></a>
        </div>
      </div>
    </div>

  </div>
</div>
</MainLayout>

<style>

.typed {
  overflow: hidden;
  white-space: nowrap;
  width: 0; 
  animation: typing 4s steps(200) forwards;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}




.FotoDiv{
    width: 400px;
    height: 700px;
    margin-top: 100px;
    margin-left: 10px;
    border: 1px solid black;
  }

  .FotoDivBilder{
    display: flex;
    flex-wrap: wrap;
    margin-top: 110px;
  }






.MainDiv {
    height: 100%;
    width: 100%;
    display: flex;
    background-color: red;
}

.Headline {
    padding-top: 20px;
    padding-left: 35px;
    font-size: 20px;
    font-weight: bolder;
}

.MainText {
    max-width: 980px;
}

.TextDiv {
    display: flex;
    flex-direction: row;
    background-color: aquamarine;
}

.HauptText {
    width: 570px;
    height: 800px;
}

.Text {
    margin-top: 215px;
    font-size: 20px;
}

/* .FotoDiv {
    display: flex;
    flex-direction: row;
    margin-top: 90px;
    height: 700px;
    width: 400px;
    border: 1px solid black;
} */


.ButtonFeldLeft {
    width: 150px;
    height: 1024px;
    display: flex;
    justify-content: center;
    
}

.ButtonLeft{
    width: 100px;
    height: 50px;
    border: 2px solid white;
    text-align: center;
    top: 50%;
    position: absolute;
    border-radius: 5px;
  }

.border1 {
    border-top: 2px solid white;
    width: 30%;
}

.border2 {
    border-bottom: 2px solid white;
    width: 55%;
}

.border3 {
    border-top: 2px solid white;
    margin-left: 35px;
    width: 90%;
}

.border4 {
    border-bottom: 2px solid white;
    margin-left: 35px;
    width: 90%;
    /* box-shadow: 1px 1px 1px 1px red; */
}


h3 {
    font-family: 'Bungee';
}

a {
    text-decoration: none;
    color: white;
}

ul li {
    list-style-type: disc;
}

.ButtonFeldRight {
    width: 150px;
    height: 1024px;
    background-color: antiquewhite;
    
    
}

/* .ButtonRight{
    text-align: center;
    position: relative;
    top: 51.8%;
    width: 150px;
    height: 50px;
    border: 2px solid white;
    border-radius: 5px;
  } */

  .ButtonRight{
    text-align: center;
    width: 100px;
    height: 50px;
    border: 2px solid white;
    border-radius: 5px;
  }

.ButtonRight:hover{
background: linear-gradient(to left bottom,turquoise , lightblue, white) ;
font-weight: bold;
}

.ButtonLeft:hover {
  background: linear-gradient(to left bottom,turquoise , lightblue, white) ;
  font-weight: bold;
}


.ÜberschriftListe{
    font-weight: bold;  
}

  .Liste{
    display: flex;
    flex-direction: column;
  }

  .Platzhalter1{
    margin-left: 30px;
  }

  .Platzhalter2{
    margin-left: 93px;
  }

  .Platzhalter3{
    margin-left: 217px;
  }

  .Platzhalter4{
    margin-left: 168px;
  }

  .Platzhalter5{
    margin-left: 220px;
  }

  body{
     background-image: url(../Image/folie3.png); 
  }

  /* .FotoDivBilder{
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
  } */

 
  .Bild1{
  margin: 10px;
}

.Bild2{
  margin: 10px;

}

.Bild3{
  margin: 10px;

}

.Bild4{
  margin: 10px;

}

.Bild5{
  margin: 10px;

}

.Bild6{
  margin: 10px;

}


</style>