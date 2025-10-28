# Repository klonen
```bash
git clone https://github.com/kestenbaum/calc-node.git
cd calc-node
```

# Abhängigkeiten installieren
```bash
npm install
```

# Programm starten
```bash
npm run start
```

# Oder direkt über ts-node:
```bash
npx ts-node src/app/index.ts
```

# Beispielausgabe
```bash
--- Tip Calculation Summary ---
Check Amount: $50.00
Tip Percentage: 15%
Tip Amount: $7.50
Total Bill: $57.50
Divide among people: yes
Split between how many people: 2
Each person pays: $28.75
-------------------------------
```


# Projektstruktur
```bash

src/
 ├─ app/
 │   └─ index.ts          # Hauptprogramm
 ├─ utils/
 │   ├─ calc.ts           # Berechnungsfunktionen
 │   ├─ checked.ts        # Eingabevalidierung
 │   ├─ format.ts         # Währungsformatierung
 │   ├─ questions.ts      # Textfragen
 |   ├─ checked.ts        # Checkedfragen
 |   |─ index.ts          # Export helpers
 |   |─ error.ts          # Beschreibt den Fehler
```

 
