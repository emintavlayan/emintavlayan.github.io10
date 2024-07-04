---
layout: default
title: Interaktif
nav_order: 6

---
<div class="checkbox-wrapper">
<div>
    <div>Frequency:</div>
    <div class="newCheckbox-group">
        <input type="checkbox" id="daily" value="daily" class="newcheckbox" data-group="frequency">
        <label for="daily">Daily</label>
        <input type="checkbox" id="monthly" value="monthly" class="newcheckbox" data-group="frequency">
        <label for="monthly">Monthly</label>
        <input type="checkbox" id="yearly" value="yearly" class="newcheckbox" data-group="frequency">
        <label for="yearly">Yearly</label>
    </div>
</div>
<div>
    <div>Machine Type:</div>
    <div class="newCheckbox-group">
        <input type="checkbox" id="carm" value="carm" class="newcheckbox" data-group="machine_type">
        <label for="carm">C-Arm</label>
        <input type="checkbox" id="oring" value="oring" class="newcheckbox" data-group="machine_type">
        <label for="oring">O-Ring</label>
    </div>
</div>
</div>

## **1.** Dozimetrik testler

### **1.1.** Output kontrolu

**Output Kontrolu** cok onemlidir ve bu paragraf alttaki secimden bagimsiz bir sekilde gorunur olmalidir.

**Gunluk** output kontrolleri icin kullanimi kolay cihazlarla kontroller yapilabilir. Daily QA gibi cihazlarinin bilinen Iyon odasi olcumleri ile dogru bir sekilde Cross-Calibre edilmis oldugundan emin olunmalidir
{: .daily }

**Aylik** kontrollerde, output kontrolu iyon odasi ve kati fantomlarda pratik bir sekilde yapilabilir. Yine de SSDL ile takip edilen su icinde referans dozimetre olcumleri ile cross calibrasyon katsayilarinin dogrulugundan emin olunmalidir. yukarida bahsedilen gunluk output kontrolu icin kullanilan tum sistemlerin AYlik kontrol sirasinda halen uyumlu olduklari da test edilmelidir.
{: .monthly }

**Yillik** output kontrolleri, direkt olarak PSDL evya SSDL sertifikasi olan iyon odalari ile referans kosullarda gerceklestirilmelidir. Gunluk ve  Aylik kontrollerde kullanilan tum sistemler ve gerekli katsayilar yillik olcum sirasinda yeniden olculmeli ve teyit edilmelidir
{: .yearly }

### **1.2.** Su fantomunun ile Profil olcumu
{: .yearly}

**Tum linaklarda Yilda en az bir defa profil kontrolleri yapilmalidir** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies ante at dolor rhoncus pulvinar. Curabitur lorem mauris, hendrerit vitae feugiat a, tempus ac purus. 
{: .yearly }

**Carm linaklarda normal sekilde kendi ayak mekanizmasi ile sabitlenir** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies ante at dolor rhoncus pulvinar. Curabitur lorem mauris, hendrerit vitae feugiat a, tempus ac purus. 
{: .yearly .carm}

**Laserler ve alan isigi ile isocenter a yerlestirilir** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies ante at dolor rhoncus pulvinar. Curabitur lorem mauris, hendrerit vitae feugiat a, tempus ac purus. 
{: .yearly .carm}

**Halcyon icin ayaklarindan kaldirilarak direkt masa uzerine konulur** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies ante at dolor rhoncus pulvinar. Curabitur lorem mauris, hendrerit vitae feugiat a, tempus ac purus. 
{: .yearly .oring}

**Isocenter goruntuleme sistemleri ile bulunur** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies ante at dolor rhoncus pulvinar. Curabitur lorem mauris, hendrerit vitae feugiat a, tempus ac purus. 
{: .yearly .oring}

[back](./)