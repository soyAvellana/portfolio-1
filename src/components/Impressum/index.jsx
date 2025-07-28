import { useEffect } from 'react';
import { FaUserShield, FaLock } from 'react-icons/fa';

function Legal() {
  useEffect(() => {
    document.title = 'Impressum & Datenschutz – Hazel';
  }, []);

  return (
    <div className="min-h-4 pt-36 pb-20 bg-gradient-to-br from-[#0f0f3d] via-[#1a0f4d] to-[#03001e] text-white px-6 flex items-center justify-center relative overflow-hidden">
      
     
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
      </div>


      <div className="max-w-4xl w-full relative z-10 text-center space-y-12">
        

        <div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-sans">
            IMPRESSUM & DATENSCHUTZ
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-4"></div>
        </div>

        
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 text-left space-y-6">
          <h2 className="text-2xl font-bold text-purple-300 flex items-center gap-2"><FaUserShield /> Impressum</h2>

          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p><strong>Angaben gemäß § 5 TMG</strong><br />
              Hazel Hamurcu<br />
              Davidstr.4 <br />
              73033 Göppingen
            </p>

            <p><strong>Kontakt</strong><br />
              E-Mail: hazelhmrcu@live.de<br />
            </p>

            <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
              Hazel Hamurcu, Anschrift wie oben
            </p>

            <p><strong>Haftungsausschluss:</strong><br />
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>
        </div>

 
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 text-left space-y-6">
          <h2 className="text-2xl font-bold text-pink-300 flex items-center gap-2"><FaLock /> Datenschutzerklärung</h2>

          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p><strong>1. Allgemeine Hinweise</strong><br />
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften.
            </p>

            <p><strong>2. Zugriffsdaten</strong><br />
              Beim Besuch dieser Website werden durch den Hostinganbieter automatisch Daten wie IP-Adresse, Browsertyp und Zeitpunkt gespeichert. Diese Daten sind nicht bestimmten Personen zuordenbar und werden nach gesetzlicher Frist gelöscht.
            </p>

            <p><strong>3. Kontaktaufnahme</strong><br />
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <p><strong>4. Cookies</strong><br />
              Diese Website verwendet keine Tracking-Cookies. Technisch notwendige Cookies dienen ausschließlich der Funktionalität und werden nicht ausgewertet.
            </p>

            <p><strong>5. Ihre Rechte</strong><br />
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit.
            </p>

            <p><strong>6. Verantwortliche Stelle</strong><br />
              Hazel Hamurcu, hazelhmrcu@live.de
            </p>

            <p><strong>7. SSL-/TLS-Verschlüsselung</strong><br />
              Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Legal;
