const l2DataHuman = [
    // ════════════════════════════════════════════
    //  HUMAN FIGHTERS
    // ════════════════════════════════════════════
    {
        base: "Human Fighter",
        tipo: "Fighter",
        c1: "Warrior",
        c2: "Warlord",
        c3: "Dreadnought",
        
        quest1: `SAGA DA 1ª JOB: PATH TO A WARRIOR (Lv 20)
Inicio: Gludin Village
NPC: Master Auron
Recompensa: Medallion of Warrior

1. Fale com o Master Auron na guilda de Warriors em Gludin Village para receber a Auron's Letter.
2. Vá para Gludio Castle Town e encontre o Trader Simplon na Grocery Store. Entregue a carta e ele lhe dará a Warrior Guild Badge.
3. Saia de Gludio e cace Tracker Skeletons e Scout Skeletons (encontrados nas Ruínas da Agonia / Ruins of Agony). Você precisa coletar 10 Rusted Bronze Swords.
4. Quando tiver as 10 espadas, retorne ao Trader Simplon in Gludio. Ele pegará as espadas enferrujadas e lhe entregará uma Rusty Bronze Sword refinada e a Letter of Simplon.
5. Volte para Gludin Village e fale novamente com o Master Auron. Ele mandará você equipar a Rusty Bronze Sword que você recebeu (você DEVE usar esta espada para matar os próximos monstros).
6. Com a Rusty Bronze Sword equipada, vá para a região de Wasteland ou arredores de Gludin e cace Poison Spiders e Arachnid Trackers. Você precisa coletar 20 Poison Spider Legs usando essa arma.
7. Após coletar as 20 pernas de aranha, retorne a Gludin Village e fale com o Master Auron. Ele removerá os itens do seu inventário e lhe entregará o Medallion of Warrior.
8. Ao atingir o Level 20, fale com o Grand Master na guilda para mudar sua classe para Warrior.`,

        quest2: `SAGA DA 2ª JOB: WARLORD (Lv 40)
Quests Necessarias: Trial of the Challenger, Testimony of Trust, Test of the Champion
Recompensa: Mark of Challenger, Mark of Trust, Mark of Champion

[TRIAL OF THE CHALLENGER] (Lv 35)
1. Fale com Kash na Guilda de Warriors em Dion Castle Town. Ele enviará você para Shyslassys.
2. Vá para a Waterfall (Cachoeira) ao norte de Neutral Zone. Encontre a caverna, entre e cace Shyslassys para obter a Broken Key. Abra o baú atrás dela para pegar o Scroll of Shyslassys.
3. Retorne a Kash em Dion. Ele lhe dará a Letter of Kash. Vá para Giran Castle Town e fale com Martien perto da ponte.
4. Martien mandará você caçar o Gorr em uma caverna perto de Floran Village. Mate-o para pegar a Gorr's Eye. Volte a Martien.
5. Agora vá para a região de Gorgon Flower Garden e cace Baraham na caverna profunda. Mate-o para obter a Baraham's Eye.
6. Encontre o Champion Raldo que spawna perto. Ele enviará você para a Dwarf Village. Fale com Filaur.

[TESTIMONY OF TRUST] (Lv 37)
1. Fale com High Priest Hollint na igreja de Oren Castle Town. Empreende cartas de recomendação dos Elfos e Dark Elfos.
2. Vá para Elven Village, fale com Hierarch Asterios. Cace Lirein e Lirein Elder em Elven Forest até spawnar Luell Of Zephyr. Mate-o para pegar o Act of Verdure. Volte a Asterios.
3. Vá para Dark Elven Village, fale com Thifiell. Vá para Shilen-s Temple, fale com Arkenia. Vá para Dion, fale com Guard Leira, depois com Trader Mion. Cace Shaman Leto Lizardman até conseguir as escrituras. Entregue a Arkenia e depois pegue a carta com Thifiell.
4. Volte a Hollint in Oren. He mandará você para Giran falar com Cardinal Seresin, depois para Talking Island falar com Wilford e Lilith.
5. Cace Ant Warriors em Wasteland para obter os fragmentos finais. Retorne a Hollint em Oren para receber a Mark of Trust.

[TEST OF THE CHAMPION] (Lv 39)
1. Fale com Veteran Ascalon em Giran Castle Town. Ele mandará você falar com Mason em Dion.
2. Fale com Mason. Cace Bloody Axe Elites nas planícies de Dion até juntar 100 Bloody Axe Heads. Volte a Mason e depois a Ascalon.
3. Ascalon enviará você para Grosvenor em Giran, que por sua vez mandará você falar com Mouen em Oren.
4. Mouen pedirá para você caçar Road Scavengers em Death Pass (colete 100 Road Scavenger Heads) e Leto Lizardman Shamans/Overlords nas planícies de Oren (colete 100 Leto Lizardman Fangs).
5. Retorne a Mouen, depois a Ascalon in Giran para finalizar e receber a Mark of Champion.`,

        quest3: `SAGA DA 3ª JOB: SAGA OF THE DREADNOUGHT (Lv 76)
Inicio: Aden Castle Town
NPC: Master Aikaterine
Recompensa: Mudanca de classe para Dreadnought

1. Fale com o Master Aikaterine na guilda de Warriors em Aden para iniciar a quest Saga of the Dreadnought. Ela lhe dará o Report on the Information.
2. Vá para Goddard Castle Town e fale com Ulrich. Ele pedirá para você coletar informações com o Guard Ulrich.
3. Vá para Hot Springs e fale com Donath. Ele pedirá uma Ice Cry. Para consegui-la, você deve fazer a quest complementar "The Finest Ingredients - Part 1" com o Chef Jeremy em Hot Springs (matar 50 Nepenthes, 50 Atrox e 50 Bandersnatches). Entregue os itens a Jeremy para ganhar a Ice Cry.
4. Entregue a Ice Cry para Donath. Ele lhe dará o Mystical Delivery Box. Leve o Box de volta para Ulrich em Goddard.
5. Ulrich enviará você para a primeira Stone of Vision (Tablet of Vision #1 ao sul de Tower of Insolence). Comungue com ela.
6. Vá para a Tablet of Vision #2 em Valley of Saints. Mate os Quest Monsters "Guardian Angels" ao redor da pedra até dropar a Vision Stone. Comungue com a segunda pedra.
7. Vá para a Tablet of Vision #3 perto de Border Outpost. Clique na pedra para spawnar o Quest Monster Fallen Angel Tanake. Derrote-o SOZINHO. Clique na pedra novamente após a morte dele.
8. Vá para Goddard falar com Ulrich. Ele pedirá para você escolher uma aliança: com os Ketra Orcs (Quest: Alliance with Ketra Orcs) OU com os Varka Silenos (Quest: Alliance with Varka Silenos). Você precisa subir a aliança até o Nível 2 e fazer a quest "Magical Power of Water" (se for aliado Ketra) ou "Magical Power of Fire" (se for aliado Varka) para conseguir a Divine Stone of Wisdom.
9. Entregue a Divine Stone na Tablet of Vision #4 (localizada de acordo com sua aliança). Comungue com ela.
10. Vá para a Tablet of Vision #5 (perto de Wall of Argos). Interaja com ela e mate os Archon of Halisha que aparecem (ou cace-os dentro de Imperial Tomb / Four Sepulchers até juntar 700 Halisha's Marks).
11. Vá para a Tablet of Vision #6 (próxima a Hunters Village). Interaja com a pedra para spawnar o boss Monument Watcher Azrael e o NPC Cavalier. Ajude Cavalier a derrotar Azrael. Fale com Cavalier e depois comungue com a pedra final.
12. Retorne a Aden Castle Town e fale com Master Aikaterine para se tornar um Dreadnought.`
    },
    {
        base: "Human Fighter",
        tipo: "Fighter",
        c1: "Knight",
        c2: "Paladin",
        c3: "Phoenix Knight",
        
        quest1: `SAGA DA 1ª JOB: PATH TO A KNIGHT (Lv 20)
Inicio: Gludio Castle Town
NPC: Master Sir Klaus Vasper
Recompensa: Sword of Ritual

1. Fale com o Master Sir Klaus Vasper na guilda de Warriors em Gludio Castle Town. Ele pedirá que você colete 3 ou mais moedas de recomendação de Einhasad.
2. Vá para Gludin Village e fale com High Priest Levian na igreja. Ele pedirá para você caçar Langk Lizardmen em Langk Lizardman Dwellings até coletar 20 Lizardman Totems. Retorne a Levian para receber a Coin of Lord de Gludin.
3. Ainda em Gludin, vá até o Captain Bezique no portão norte. Ele pedirá para você caçar Poison Spiders e Bugbears para coletar 20 Spider Legs e 20 Bugbear Necklaces. Retorne a Bezique para pegar a Coin of Lord de Bezique.
4. Vá para Gludio e fale com Captain Bathis no portão leste. Ele pedirá para você caçar Bugbear Raiders em Maille Lizardman Barracks até juntar 20 Bugbear Trophies. Retorne a Bathis para pegar a Coin of Lord de Bathis.
5. Retorne a Gludio Town com pelo menos 3 moedas e fale com Sir Klaus Vasper. Ele testará sua honra e lhe entregará a Sword of Ritual.
6. Fale com o Grand Master na guilda ao atingir Level 20 para mudar de classe para Knight.`,

        quest2: `SAGA DA 2ª JOB: PALADIN (Lv 40)
Quests Necessarias: Trial of the Duty, Testimony of Trust, Test of the Healer
Recompensa: Mark of Duty, Mark of Trust, Mark of Healer

[TRIAL OF THE DUTY] (Lv 35)
1. Fale com Grand Master Hannamar na guilda de Warriors em Giran Castle Town. Ele lhe dará o Ring of Duty.
2. Vá para Oren e fale com Sir Aaron Tanford. Empreende caçar Spirit of Wasteland em Wasteland. Cace-o até conseguir a Old Key.
3. Vá para a guilda de cavaleiros em Aden e fale com Sir Edward. Ele mandará você caçar Hangman Tree em Execution Ground (Dion) para coletar 10 Trophies.
4. Vá para a igreja de Giran, fale com High Priest Dustin. Ele mandará você para Breka's Stronghold caçar Breka Orc Overlords até conseguir as escrituras sagradas perdidas. Retorne a Dustin, depois a Hannamar para fechar.

[TESTIMONY OF TRUST] (Lv 37)
1. Fale com High Priest Hollint na igreja de Oren Castle Town.
2. Colete o Act of Verdure com Asterios em Elven Village (matando monstros em Elven Forest).
3. Colete a Thifiell's Letter em Dark Elven Village (ajudando Arkenia em Shilen-s Temple e coletando escrituras com os Leto Lizardman).
4. Viaje para Talking Island e Giran para coletar os testemunhos dos humanos com Wilford e Seresin.
5. Junte os fragmentos em Wasteland com as Ants e retorne a Hollint para pegar a Mark of Trust.

[TEST OF THE HEALER] (Lv 39)
1. Fale com Priest Bandron na igreja de Giran. Ele lhe dará o Golden Statue of Einhasad.
2. Vá para Floran Village e fale com Perrin. Um monstro vai spawnar, derrote-o e fale com Perrin novamente. Ele mandará você falar com Allana.
3. Allana enviará você para Orphanage Director Gupu em Gludio. Gupu pedirá uma doação de 100.000 adena (selecione a opção de pagar para progredir rápido).
4. Fale com Windy Shaera perto de Wasteland. Ela pedirá que você visite a Tablet of Vision em Gorr's lair.
5. Cace Leto Lizardman Shamans em Plains of Glory até conseguir 20 itens de quest. Retorne a Bandron em Giran para receber a Mark of Healer.`,

        quest3: `SAGA DA 3ª JOB: SAGA OF THE PHOENIX KNIGHT (Lv 76)
Inicio: Aden Castle Town
NPC: Master Sedrick
Recompensa: Mudanca de classe para Phoenix Knight

1. Fale com o Grand Master Sedrick na guilda de Aden para iniciar a quest.
2. Vá para Goddard Town e fale com Thomas para obter pistas sobre as pedras de visão.
3. Siga para Hot Springs, pegue a quest de coletar ingredientes com o Chef Jeremy. Mate os monstros indicados em Hot Springs, traga os itens e pegue a Ice Cry. Entregue-a para progredir.
4. Vá para a Tablet of Vision #1 ao sul de TOI e comungue com ela.
5. Vá para a Tablet of Vision #2 em Valley of Saints, destrua os Guardian Angels que guardam o local, pegue a pedra e interaja com a Tablet.
6. Vá para a Tablet of Vision #3. Ative a pedra, derrote o Vision Quest Monster que aparecer em um duelo solo, e interaja novamente.
7. Faça sua Aliança com Ketra Orcs ou Varka Silenos até o nível 2. Obtenha a Divine Stone of Wisdom através da respectiva quest de magia (Water ou Fire).
8. Use a Divine Stone na Tablet of Vision #4.
9. Vá para a Tablet of Vision #5 em Wall of Argos. Mate os Archon de Halisha (coletando as 700 marcas ou matando-o diretamente na dungeon de Imperial Tomb).
10. Siga para a Tablet of Vision #6. Ative-a, ajude o NPC herói a derrotar o invasor das trevas, fale com o NPC e limpe a pedra.
11. Retorne a Sedrick em Aden para receber o título e o poder de Phoenix Knight.`
    },
    {
        base: "Human Fighter",
        tipo: "Fighter",
        c1: "Warrior",
        c2: "Gladiator",
        c3: "Duelist",
        
        quest1: `SAGA DA 1ª JOB: PATH TO A WARRIOR (Lv 20)
Inicio: Gludin Village
NPC: Master Auron
Recompensa: Medallion of Warrior

1. Fale com o Master Auron na guilda de Warriors em Gludin Village para receber a Auron's Letter.
2. Vá para Gludio Castle Town e encontre o Trader Simplon na Grocery Store. Entregue a carta e ele lhe dará a Warrior Guild Badge.
3. Saia de Gludio e cace Tracker Skeletons e Scout Skeletons (Ruins of Agony). Colete 10 Rusted Bronze Swords.
4. Retorne ao Trader Simplon em Gludio. Ele pegará as espadas enferrujadas e lhe entregará uma Rusty Bronze Sword refinada e a Letter of Simplon.
5. Volte para Gludin Village e fale com o Master Auron. Equipar a Rusty Bronze Sword que você recebeu (você DEVE usar esta espada para matar os próximos monstros).
6. Com a Rusty Bronze Sword equipada, vá para os arredores de Gludin e cace Poison Spiders e Arachnid Trackers. Colete 20 Poison Spider Legs usando essa arma.
7. Retorne a Gludin Village e fale com o Master Auron. Ele entregará o Medallion of Warrior.
8. Ao atingir o Level 20, mude sua classe para Warrior no Grand Master.`,

        quest2: `SAGA DA 2ª JOB: GLADIATOR (Lv 40)
Quests Necessarias: Trial of the Challenger, Testimony of Trust, Test of the Duelist
Recompensa: Mark of Challenger, Mark of Trust, Mark of Duelist

[TRIAL OF THE CHALLENGER] (Lv 35)
1. Fale com Kash na Guilda de Warriors em Dion Castle Town. Ele enviará você para Shyslassys.
2. Vá para a caverna na Cachoeira ao norte de Neutral Zone e cace Shyslassys para obter a Broken Key. Abra o baú atrás dela para pegar o Scroll of Shyslassys.
3. Retorne a Kash em Dion. Pegue a Letter of Kash, vá para Giran e fale com Martien perto da ponte.
4. Cace o Gorr em uma caverna perto de Floran Village. Mate-o para pegar a Gorr's Eye. Volte a Martien.
5. Vá para Gorgon Flower Garden e cace Baraham na caverna profunda para obter a Baraham's Eye.
6. Encontre o Champion Raldo que spawna perto. Ele enviará você para a Dwarf Village falar com Filaur.

[TESTIMONY OF TRUST] (Lv 37)
1. Fale com High Priest Hollint na igreja de Oren Castle Town. 
2. Vá para Elven Village, fale com Hierarch Asterios. Cace Lirein e Lirein Elder em Elven Forest até conseguir o Act of Verdure.
3. Vá para Dark Elven Village, fale com Thifiell. Vá para Shilen-s Temple, fale com Arkenia. Vá para Dion, fale com Guard Leira, depois com Trader Mion. Cace Shaman Leto Lizardman até conseguir as escrituras. Entregue a Arkenia e depois pegue a carta com Thifiell.
4. Volte a Hollint em Oren. Fale com Cardinal Seresin em Giran, depois com Wilford em Talking Island e Lilith.
5. Cace Ant Warriors em Wasteland para obter os fragmentos finais. Retorne a Hollint em Oren para receber a Mark of Trust.

[TEST OF THE DUELIST] (Lv 39)
1. Fale com Duelist Kaien em Oren Castle Town. Ele lhe dará uma lista de monstros para caçar em 5 regiões diferentes.
2. Regiao de Dion: Cace Marsh Stakato Drones em Cruma Swamp até obter 10 fragmentos.
3. Regiao de Giran: Cace Breka Orc Overlords até obter 10 fragmentos.
4. Regiao de Oren: Cace Leto Lizardman Overlords até obter 10 fragmentos.
5. Regiao de Aden: Cace Enchanted Monster Eyes em Tower of Insolence ou arredores até obter 10 fragmentos.
6. Regiao de Wasteland: Cace Monster Eye Destroyers até obter 10 fragmentos.
7. Retorne a Kaien em Oren com todos os fragmentos coletados para receber a Mark of Duelist.`,

        quest3: `SAGA DA 3ª JOB: SAGA OF THE DUELIST (Lv 76)
Inicio: Aden Castle Town
NPC: Master Grand Master Olvan
Recompensa: Mudanca de classe para Duelist

1. Fale com o Master Olvan na guilda de Aden para iniciar a quest Saga of the Duelist.
2. Vá para Goddard Castle Town e fale com information Broker Ulrich para coletar pistas.
3. Vá para Hot Springs e complete a quest "The Finest Ingredients - Part 1" com o Chef Jeremy (matar 50 Nepenthes, 50 Atrox e 50 Bandersnatches) para obter a Ice Cry.
4. Entregue a Ice Cry para o intermediário indicado em Hot Springs para liberar o Mystical Delivery Box e leve-o para Ulrich.
5. Siga para a Tablet of Vision #1 ao sul de TOI e comungue com ela.
6. Vá para a Tablet of Vision #2 em Valley of Saints. Elimine os Guardian Angels ao redor até dropar a Vision Stone. Interaja com a pedra.
7. Siga para a Tablet of Vision #3 perto de Border Outpost. Ative o Monumento, derrote o Quest Monster solo que vai aparecer e interaja novamente.
8. Suba o nível de Aliança com Ketra Orcs ou Varka Silenos até o Nível 2. Realize a quest mágica correspondente para obter a Divine Stone of Wisdom.
9. Entregue a Divine Stone na Tablet of Vision #4.
10. Vá para a Tablet of Vision #5 em Wall of Argos. Elimine os Archon of Halisha (juntando 700 marcas em Imperial Tomb ou derrotando-o diretamente).
11. Vá para a Tablet of Vision #6 perto de Hunters Village. Ative-a, ajude o NPC combatente a derrotar o boss Azrael, fale com o NPC e limpe a pedra.
12. Retorne a Aden e fale com o Grand Master Olvan para se tornar um Duelist.`
    },
    {
        base: "Human Fighter",
        tipo: "Fighter",
        c1: "Knight",
        c2: "Dark Avenger",
        c3: "Hell Knight",
        
        quest1: `SAGA DA 1ª JOB: PATH TO A KNIGHT (Lv 20)
Inicio: Gludio Castle Town
NPC: Master Sir Klaus Vasper
Recompensa: Sword of Ritual

1. Fale com o Master Sir Klaus Vasper na guilda de Warriors em Gludio Castle Town.
2. Vá para Gludin Village e fale com High Priest Levian na igreja. Cace Langk Lizardmen em Langk Lizardman Dwellings até coletar 20 Lizardman Totems. Pegue a Coin of Lord de Gludin.
3. Fale com o Captain Bezique no portão norte de Gludin. Cace Poison Spiders e Bugbears para coletar 20 Spider Legs e 20 Bugbear Necklaces. Pegue a Coin of Lord de Bezique.
4. Vá para Gludio e fale com Captain Bathis no portão leste. Cace Bugbear Raiders em Maille Lizardman Barracks até juntar 20 Bugbear Trophies. Pegue a Coin of Lord de Bathis.
5. Retorne a Gludio Town com as moedas e fale com Sir Klaus Vasper para receber a Sword of Ritual.
6. Fale com o Grand Master na guilda ao atingir Level 20 para mudar de classe para Knight.`,

        quest2: `SAGA DA 2ª JOB: DARK AVENGER (Lv 40)
Quests Necessarias: Trial of the Duty, Testimony of Trust, Test of Witchcraft
Recompensa: Mark of Duty, Mark of Trust, Mark of Witchcraft

[TRIAL OF THE DUTY] (Lv 35)
1. Fale com Hannamar na guilda de Giran Castle Town para receber the Ring of Duty.
2. Em Oren, fale com Sir Aaron Tanford. Cace Spirit of Wasteland em Wasteland até conseguir a Old Key.
3. Na guilda de cavaleiros em Aden, fale com Sir Edward. Cace Hangman Tree em Execution Ground para coletar 10 Trophies.
4. Fale com High Priest Dustin na igreja de Giran. Cace Breka Orc Overlords até conseguir as escrituras sagradas perdidas. Retorne a Hannamar.

[TESTIMONY OF TRUST] (Lv 37)
1. Fale com High Priest Hollint na igreja de Oren Castle Town.
2. Pegue o Act of Verdure com Asterios em Elven Village (caçando monstros em Elven Forest).
3. Pegue a Thifiell's Letter em Dark Elven Village (ajudando Arkenia em Shilen-s Temple e coletando escrituras com os Leto Lizardman).
4. Fale com Wilford em Talking Island e Seresin em Giran. Junte os fragmentos em Wasteland com as Ants e retorne a Hollint.

[TEST OF WITCHCRAFT] (Lv 39)
1. Fale com Shadow Orim em Dragon Valley (entrada da dungeon). Ele lhe dará a Orim's Diagram.
2. Vá para Giran e fale com Alexandria na Luxury Shop. Ela mandará você falar com Magister Iria na guilda de mages de Giran.
3. Vá para Dion e fale com Magister Kaira. Siga para Execution Ground e cace Ghoul até juntar 10 Ghoul Hearts.
4. Vá para Talking Island Village e fale com Somak. Cace Succubus em Dragon Valley para coletar as essências restantes.
5. Retorne a Orim em Dragon Valley para finalizar o teste e receber a Mark of Witchcraft.`,

        quest3: `SAGA DA 3ª JOB: SAGA OF THE HELL KNIGHT (Lv 76)
Inicio: Aden Castle Town
NPC: Master Mordred
Recompensa: Mudanca de classe para Hell Knight

1. Fale com o Master Mordred na guilda de Warriors em Aden para iniciar a quest.
2. Vá para Goddard Town e fale com o Guard do portão para receber as coordenadas sobre a investigação das Tablets.
3. Siga para Hot Springs, faça a quest de caça do Chef Jeremy e colete os itens para trocar pela Ice Cry.
4. Vá até a Tablet of Vision #1 ao sul de TOI e realize a comunhão.
5. Siga para a Tablet of Vision #2 em Valley of Saints, limpe os Guardian Angels ao redor do local, recolha a pedra de visão e use-a na Tablet.
6. Vá para a Tablet of Vision #3. Ative a pedra, derrote o monstro sombrio que vai spawnar em combate solo, e comungue com o monumento.
7. Conclua o alinhamento com Ketra Orcs ou Varka Silenos até o nível 2 e pegue a Divine Stone of Wisdom.
8. Utilize a Divine Stone na Tablet of Vision #4.
9. Siga para a Tablet of Vision #5 em Wall of Argos e elimine os Archon de Halisha até computar a visão.
10. Vá para a Tablet of Vision #6. Ajude o NPC da guilda contra o Monument Watcher invasor, fale com o sobrevivente e faça a comunhão com a última pedra.
11. Retorne a Mordred in Aden para ser condecorado como Hell Knight.`
    },
    {
        base: "Human Fighter",
        tipo: "Fighter",
        c1: "Rogue",
        c2: "Treasure Hunter",
        c3: "Adventurer",
        
        quest1: `SAGA DA 1ª JOB: PATH TO A ROGUE (Lv 20)
Inicio: Gludin Village
NPC: Captain Bezique
Recompensa: Bezique's Recommendation

1. Fale com o Captain Bezique no portão norte de Gludin Village para receber a Bezique's Letter.
2. Vá para a Neti's House em Gludin e fale com Neti. Ela lhe entregará o Neti's Bow e a Neti's Dagger. Você DEVE equipar e usar uma dessas duas armas para coletar os próximos itens.
3. Equipado com a arma da Neti, saia de Gludin e cace Tracker Skeletons e Scout Skeletons em Ruins of Agony até juntar 10 Spartoi's Bones.
4. Retorne a Neti em Gludin, entregue os ossos e ela lhe dará o Horseshoe of Light.
5. Fale novamente com o Captain Bezique. Ele pegará a ferradura e lhe dará a Bezique's Recommendation.
6. Vá até as Maille Lizardman Barracks e cace Maille Lizardmen, Maille Lizardman Scouts e Maille Lizardman Guards até coletar 10 Stolen Items.
7. Retorne ao Captain Bezique em Gludin, entregue os itens roubados e receba a Bezique's Recommendation final.
8. Ao atingir o Level 20, vá até o Grand Master na guilda para mudar sua classe para Rogue.`,

        quest2: `SAGA DA 2ª JOB: TREASURE HUNTER (Lv 40)
Quests Necessarias: Trial of the Seeker, Testimony of Trust, Test of the Searcher
Recompensa: Mark of Seeker, Mark of Trust, Mark of Searcher

[TRIAL OF THE SEEKER] (Lv 35)
1. Fale com Master Dufner na guilda de Warriors em Giran Castle Town para receber a Dufner's Letter.
2. Vá para Dion Castle Town e fale com Terry na guilda. Ele mandará você caçar Execution Ground Spiders até conseguir o Mysterious Rune Stone.
3. Volte a Terry. Ele enviará você para caçar Ol Mahum Captains em Partisan's Hideaway para coletar 4 Ol Mahum Runes.
4. Retorne a Terry, pegue a carta e vá falar com Viktor em Hunters Village. Viktor enviará você para Medusa Location (arredores de Giran) para coletar 10 Medusa Scales.
5. Volte a Viktor, receba as instruções e vá falar com Magister Marina em Oren. Marina enviará você para as minas de Cruma Tower para obter fragmentos.
6. Retorne a Dufner em Giran para receber a Mark of Seeker.

[TESTIMONY OF TRUST] (Lv 37)
1. Fale com High Priest Hollint na igreja de Oren Castle Town.
2. Obtenha o Act of Verdure com Asterios em Elven Village (caçando monstros em Elven Forest).
3. Obtenha a Thifiell's Letter em Dark Elven Village (ajudando Arkenia em Shilen-s Temple e caçando Leto Lizardman).
4. Viaje para Talking Island para falar com Wilford e Giran para falar com Seresin.
5. Junte as marcas de Halisha nas Formigas de Wasteland e retorne a Hollint em Oren para pegar a Mark of Trust.

[TEST OF THE SEARCHER] (Lv 39)
1. Fale com Master Luther na guilda de Warriors em Giran Castle Town para receber a Luther's Letter.
2. Vá para Dion Town e fale com Captain Alex. He mandará você investigar Floran Village.
3. Fale com Militiaman Leiryn em Floran. Cace Delu Lizardman Shamans nas planícies ao redor até juntar 10 Delu Totems.
4. Volte a Leiryn. Ela enviará você para falar com Chief Boron em Floran. Boron mandará você interceptar os contrabandistas.
5. Cace Ol Mahum Agents em Tanor Stronghold até coletar 10 Map Fragments.
6. Retorne a Alex em Dion, depois a Luther in Giran para concluir e receber a Mark of Searcher.`,

        quest3: `SAGA DA 3ª JOB: SAGA OF THE ADVENTURER (Lv 76)
Inicio: Aden Castle Town
NPC: Captain Hunter Black Cat
Recompensa: Mudanca de classe para Adventurer

1. Fale com a Captain Hunter Black Cat na guilda de Aden para iniciar a quest Saga of the Adventurer.
2. Vá para Goddard Castle Town e fale com o Information Broker Ulrich para obter os relatórios iniciais de rastreio.
3. Siga para Hot Springs e realize a quest de caça do Chef Jeremy (50 Nepenthes, 50 Atrox e 50 Bandersnatches) para garantir a Ice Cry.
4. Entregue a Ice Cry ao contato indicado nas fontes termais e recupere o Mystical Delivery Box, levando-o para Ulrich em Goddard.
5. Vá até a Tablet of Vision #1 ao sul de TOI e realize a primeira sintonia.
6. Siga para a Tablet of Vision #2 em Valley of Saints. Destrua os Guardian Angels que rodeiam o monumento, pegue a Vision Stone e sintonize com a pedra.
7. Vá para a Tablet of Vision #3 perto de Border Outpost. Ative a pedra, derrote o Quest Monster solo que vai spawnar de forma furtiva e interaja novamente.
8. Complete sua Aliança com Ketra Orcs ou Varka Silenos até o nível 2 e pegue a Divine Stone of Wisdom através da quest correspondente.
9. Entregue a Divine Stone na Tablet of Vision #4.
10. Siga para a Tablet of Vision #5 em Wall of Argos. Derrote os Archon of Halisha (reunindo as 700 marcas na dungeon de IT ou caçando-o diretamente).
11. Vá para a Tablet of Vision #6 próxima a Hunters Village. Ative o evento, auxilie o NPC herói a derrotar o boss invasor Azrael, converse com ele e limpe a pedra final.
12. Retorne a Aden e fale com a Black Cat para se tornar um Adventurer.`
    },
    {
        base: "Human Fighter",
        tipo: "Fighter",
        c1: "Rogue",
        c2: "Hawkeye",
        c3: "Sagittarius",
        
        quest1: `SAGA DA 1ª JOB: PATH TO A ROGUE (Lv 20)
Inicio: Gludin Village
NPC: Captain Bezique
Recompensa: Bezique's Recommendation

1. Fale com o Captain Bezique no portão norte de Gludin Village para receber a Bezique's Letter.
2. Vá para a Neti's House em Gludin e fale com Neti para receber o Neti's Bow e a Neti's Dagger.
3. Com o Neti's Bow ou Dagger equipado, cace Tracker Skeletons e Scout Skeletons em Ruins of Agony até conseguir 10 Spartoi's Bones.
4. Retorne a Neti em Gludin, entregue os ossos e pegue o Horseshoe of Light.
5. Fale novamente com o Captain Bezique. Eles pegarão a ferradura e lhe dará a Bezique's Recommendation.
6. Vá até as Maille Lizardman Barracks e cace Maille Lizardmen, Scouts e Guards até juntar 10 Stolen Items.
7. Retorne ao Captain Bezique em Gludin para receber a Bezique's Recommendation final.
8. Mude de classe para Rogue no Grand Master ao atingir Level 20.`,

        quest2: `SAGA DA 2ª JOB: HAWKEYE (Lv 40)
Quests Necessarias: Trial of the Seeker, Testimony of Trust, Test of the Sagittarius
Recompensa: Mark of Seeker, Mark of Trust, Mark of Sagittarius

[TRIAL OF THE SEEKER] (Lv 35)
1. Fale com Master Dufner na guilda de Giran para receber a Dufner's Letter.
2. Em Dion, fale com Terry na guilda. Cace Execution Ground Spiders até conseguir o Mysterious Rune Stone.
3. Cace Ol Mahum Captains em Partisan's Hideaway para coletar 4 Ol Mahum Runes.
4. Fale com Viktor em Hunters Village. Colete 10 Medusa Scales nos arredores de Giran.
5. Fale com Magister Marina em Oren, vá para Cruma Tower extrair os fragmentos e retorne a Dufner em Giran.

[TESTIMONY OF TRUST] (Lv 37)
1. Fale com High Priest Hollint na igreja de Oren Castle Town.
2. Pegue o Act of Verdure com Asterios em Elven Village (matando monstros em Elven Forest).
3. Pegue a Thifiell's Letter em Dark Elven Village (ajudando Arkenia em Shilen-s Temple e coletando escrituras com os Leto Lizardman).
4. Fale com Wilford em Talking Island e Seresin em Giran. Junte os fragmentos em Wasteland com as Ants e retorne a Hollint.

[TEST OF THE SAGITTARIUS] (Lv 39)
1. Fale com Hunter Bernard em Hunters Village para iniciar o teste do arqueiro.
2. Bernard mandará você falar com Hamil em Floran Village. Hamil enviará você para Wasteland.
3. Cace Ant Soldiers e Ant Warriors em Wasteland até obter as pontas de flecha antigas (10 Ant Arrowheads).
4. Volte a Hamil. Ele mandará você falar com Sir Aron Tanford em Oren.
5. Cace Leto Lizardman Captains e Shamans nas planícies de Oren até juntar 20 Lizardman Horns.
6. Retorne a Hamil em Floran, que enviará você para Execution Ground caçar Ghoul Lords para obter as runas finais de arco. Retorne a Bernard em Hunters Village para pegar a Mark of Sagittarius.`,

        quest3: `SAGA DA 3ª JOB: SAGA OF THE SAGITTARIUS (Lv 76)
Inicio: Hunters Village
NPC: Hunter Guild Master Bernard
Recompensa: Mudanca de classe para Sagittarius

1. Fale com o Guild Master Bernard em Hunters Village para iniciar a quest Saga of the Sagittarius.
2. Vá para Goddard Castle Town e fale com Grimba para obter instruções sobre a primeira Tablet.
3. Vá para Hot Springs e pegue a quest de ingredientes com o Chef Jeremy. Derrote os monstros indicados e obtenha a Ice Cry.
4. Entregue os relatórios em Goddard para liberar a rota secreta de visão.
5. Vá até a Tablet of Vision #1 ao sul de TOI e faça a comunhão.
6. Siga para a Tablet of Vision #2 em Valley of Saints. Derrote os Guardian Angels ao redor, recolha a Vision Stone dropada e interaja com o monumento.
7. Siga para a Tablet of Vision #3 perto de Border Outpost. Ative o selo, destrua o Quest Monster voador em combate solo e interaja de novo.
8. Monte sua aliança com os Ketra Orcs ou Varka Silenos (Nível 2) e consiga a Divine Stone of Wisdom.
9. Entregue a Divine Stone na Tablet of Vision #4.
10. Vá para a Tablet of Vision #5 em Wall of Argos. Elimine os Archon de Halisha coletando 700 marcas ou invadindo a dungeon correspondente.
11. Vá para a Tablet of Vision #6 perto de Hunters Village. Ative-a, defenda o NPC arqueiro derrubando o Monument Watcher Azrael, pegue o selo do NPC e ative a última pedra.
12. Retorne a Hunters Village e fale com Bernard para receber sua terceira classe como Sagittarius.`
    },

    // ════════════════════════════════════════════
    //  HUMAN MAGES
    // ════════════════════════════════════════════
    {
        base: "Human Mage",
        tipo: "Mage",
        c1: "Wizard",
        c2: "Sorcerer",
        c3: "Archmage",
        
        quest1: `SAGA DA 1ª JOB: PATH TO A WIZARD (Lv 20)
Inicio: Gludin Village
NPC: Parina
Recompensa: Bead of Season

1. Fale com a Parina na porta da Igreja em Gludin Village para receber as instruções.
2. Vá para as Ruins of Despair e encontre o Earth Snake Spirit. Ele pedirá que você mate Red Bears até conseguir o Red Bear Fleece. Volte a ele para pegar o Earth Spirit's Ring.
3. Encontre o Water Undine do outro lado de Ruins of Despair. Ela enviará você para matar Water Seer nas imediações até juntar 2 Sparkles of Water. Volte e pegue o Water Spirit's Ring.
4. Fale com a Flame Salamander em Ruins of Agony. Cace Ratman (arredores de Gludin) até obter a Key of Flame. Retorne a ela para pegar o Flame Spirit's Ring.
5. Fale com a Wind Sylph perto da entrada de Windawood Manor (Wasteland). Cace Vuku Orc Fighters até conseguir a Wind Feather. Volte e pegue o Wind Spirit's Ring.
6. Retorne a Parina em Gludin Village com os 4 anéis espirituais. Ela lhe entregará a Bead of Season.
7. Vá até o High Priest na Igreja ao atingir o Nível 20 para se tornar um Wizard.`,

        quest2: `SAGA DA 2ª JOB: SORCERER (Lv 40)
Quests Necessarias: Trial of the Scholar, Testimony of Trust, Test of the Magus
Recompensa: Mark of Scholar, Mark of Trust, Mark of Magus

[TRIAL OF THE SCHOLAR] (Lv 35)
1. Fale com Magister Mirien na guilda de Mages em Dion Town. Ela mandará você para High Priest Sylvain.
2. Sylvain mandará você para Maria na Grocery Store de Dion. Siga as instruções e cace os monstros solicitados em Cruma Swamp e Execution Ground para reunir símbolos mágicos.
3. Volte para Mirien. Ela mandará você falar com o Grand Magus Jurek em Giran. Cace Grandis e Breka Orcs para o teste dele e pegue seu selo de recomendação.
4. Retorne a Mirien para fechar o Trial e receber a Mark of Scholar.

[TESTIMONY OF TRUST] (Lv 37)
1. Fale com High Priest Hollint na igreja de Oren. Ele pedirá as assinaturas de confiança de todas as raças.
2. Pegue a carta dos Elfos com Asterios (caçando em Elven Forest).
3. Pegue a carta dos Dark Elfos com Thifiell (ajudando Arkenia em Shilen's Temple e lutando contra Lizardmen).
4. Viaje para Talking Island e Giran para coletar os testemunhos de Wilford e Seresin.
5. Junte os fragmentos das formigas em Wasteland e volte a Hollint.

[TEST OF THE MAGUS] (Lv 39)
1. Fale com Bard Rukal na praça de Dion Castle Town. Ele lhe entregará uma lista de essências mágicas para reunir.
2. Você precisará coletar encantamentos com 4 espíritos diferentes.
3. Fale com Parina em Gludin. Fale com Casian em Wasteland. Cace os monstros indicados por eles nas regiões de Gludio, Wasteland, e Giran (Singing Flower, Salamander, Undine, etc).
4. Após reunir todas as gemas elementais, retorne ao Bard Rukal em Dion.
5. Ele avaliará suas habilidades mágicas e entregará a Mark of Magus.`,

        quest3: `SAGA DA 3ª JOB: SAGA OF THE ARCHMAGE (Lv 76)
Inicio: Ivory Tower (Oren)
NPC: Grand Magus Valeria
Recompensa: Mudanca de classe para Archmage

1. Fale com a Grand Magus Valeria em Ivory Tower para iniciar a quest.
2. Vá para Goddard Town e fale com a Information Broker Misty.
3. Siga para Hot Springs, faça a quest de caça do Chef Jeremy e colete a Ice Cry para entregá-la. Leve o pacote misterioso de volta a Goddard.
4. Vá para a Tablet of Vision #1 ao sul de TOI e realize a comunhão mágica.
5. Siga para a Tablet of Vision #2 em Valley of Saints, limpe os Guardian Angels ao redor, recolha a pedra de visão e use-a.
6. Vá para a Tablet of Vision #3. Ative a pedra, derrote o Anjo Caído utilizando suas magias e faça a comunhão com o monumento.
7. Conclua o alinhamento com Ketra Orcs ou Varka Silenos até o nível 2 e obtenha a Divine Stone of Wisdom.
8. Utilize a Divine Stone na Tablet of Vision #4.
9. Siga para a Tablet of Vision #5 em Wall of Argos e elimine os Archon de Halisha (recolha 700 marcas na Imperial Tomb ou cace-o no campo).
10. Vá para a Tablet of Vision #6. Ajude o NPC feiticeiro a derrotar o Monument Watcher invasor, fale com ele e ative a última pedra.
11. Retorne a Valeria em Ivory Tower para transcender como Archmage.`
    },
    {
        base: "Human Mage",
        tipo: "Mage",
        c1: "Wizard",
        c2: "Necromancer",
        c3: "Soultaker",
        
        quest1: `SAGA DA 1ª JOB: PATH TO A WIZARD (Lv 20)
Inicio: Gludin Village
NPC: Parina
Recompensa: Bead of Season

1. Fale com Parina na entrada da Igreja em Gludin.
2. Visite o Earth Snake Spirit em Ruins of Despair. Cace Red Bears para o Fleece.
3. Visite o Water Undine na mesma área. Cace Water Seer para os Sparkles of Water.
4. Visite a Flame Salamander em Ruins of Agony. Cace Ratman para pegar a Key of Flame.
5. Visite a Wind Sylph perto de Windawood. Cace Vuku Orc Fighters para obter a Wind Feather.
6. Volte a Parina em Gludin com todos os itens elementais para pegar a Bead of Season.
7. Mude de classe para Wizard no Grand Magus ou High Priest da cidade.`,

        quest2: `SAGA DA 2ª JOB: NECROMANCER (Lv 40)
Quests Necessarias: Trial of the Scholar, Testimony of Trust, Test of Witchcraft
Recompensa: Mark of Scholar, Mark of Trust, Mark of Witchcraft

[TRIAL OF THE SCHOLAR] (Lv 35)
1. Fale com Magister Mirien em Dion Town.
2. Vá para High Priest Sylvain, depois para Maria na Grocery Store de Dion. Cace monstros em Cruma Swamp e Execution Ground para reunir os selos.
3. Retorne a Mirien e seja enviado ao Grand Magus Jurek em Giran. Realize o teste dele matando Grandis e Breka Orcs.
4. Volte a Mirien em Dion para receber a Mark of Scholar.

[TESTIMONY OF TRUST] (Lv 37)
1. Fale com High Priest Hollint em Oren.
2. Visite Asterios em Elven Village (para testar sua aliança com Elfos).
3. Visite Thifiell e Arkenia em Dark Elven Village e lute contra Lizardmen em Dion.
4. Visite Wilford e Seresin para conseguir os testemunhos humanos.
5. Derrote formigas em Wasteland e volte a Hollint.

[TEST OF WITCHCRAFT] (Lv 39)
1. Fale com Shadow Orim em Dragon Valley (próximo à entrada da caverna). Ele lhe dará o diagrama das trevas.
2. Vá para Giran e fale com Alexandria na Luxury Shop. Fale também com Magister Iria na guilda de mages local.
3. Vá para Dion e converse com Magister Kaira. Siga para Execution Ground e cace Ghouls até juntar 10 Ghoul Hearts.
4. Vá para Talking Island Village e fale com Somak. Siga para Dragon Valley e cace Succubus para obter as essências demoníacas.
5. Volte a Orim em Dragon Valley para apresentar os artefatos macabros e receber a Mark of Witchcraft.`,

        quest3: `SAGA DA 3ª JOB: SAGA OF THE SOULTAKER (Lv 76)
Inicio: Hardin's Academy
NPC: Magister Xenovia
Recompensa: Mudanca de classe para Soultaker

1. Fale com Magister Xenovia em Hardin's Academy (teleporte a partir de Hunters Village ou Giran).
2. Vá para Goddard e fale com o espião da guilda para rastrear as pedras.
3. Siga para Hot Springs, resolva a quest do Chef Jeremy e colete a Ice Cry para adquirir a caixa de entrega mística e retorne a Goddard.
4. Vá para a Tablet of Vision #1 e comungue com ela.
5. Siga para a Tablet of Vision #2 em Valley of Saints, invoque seus mortos-vivos para derrotar os Guardian Angels, pegue a pedra e interaja com o monumento.
6. Vá para a Tablet of Vision #3. Ative a pedra, destrua o Anjo Caído utilizando Death Spike/vampiric skills em duelo solo, e interaja de novo.
7. Eleve o nível de Aliança com Ketra ou Varka até 2 e pegue a Divine Stone of Wisdom.
8. Entregue a Divine Stone na Tablet of Vision #4.
9. Siga para a Tablet of Vision #5 em Wall of Argos. Derrote os Archon of Halisha matando os mobs específicos.
10. Siga para a Tablet of Vision #6. Ajude a misteriosa figura a derrotar o boss invasor Azrael, interaja com o NPC e limpe a pedra final.
11. Retorne a Hardin's Academy e reporte-se a Xenovia para ser coroado um Soultaker.`
    },
    {
        base: "Human Mage",
        tipo: "Mage",
        c1: "Wizard",
        c2: "Warlock",
        c3: "Arcana Lord",
        
        quest1: `SAGA DA 1ª JOB: PATH TO A WIZARD (Lv 20)
Inicio: Gludin Village
NPC: Parina
Recompensa: Bead of Season

1. Fale com Parina na Igreja em Gludin.
2. Em Ruins of Despair, cace Red Bears e entregue ao Earth Snake Spirit.
3. Cace Water Seers para o Water Undine na mesma ruína.
4. Em Ruins of Agony, cace Ratman e entregue para a Flame Salamander.
5. Cace Vuku Orc Fighters para a Wind Sylph perto de Windawood.
6. Volte com os 4 anéis elementais para Parina e pegue a Bead of Season.
7. Torne-se Wizard ao chegar no Level 20 falando com o NPC responsável.`,

        quest2: `SAGA DA 2ª JOB: WARLOCK (Lv 40)
Quests Necessarias: Trial of the Scholar, Testimony of Trust, Test of the Summoner
Recompensa: Mark of Scholar, Mark of Trust, Mark of Summoner

[TRIAL OF THE SCHOLAR] (Lv 35)
1. Fale com Magister Mirien em Dion Town.
2. Complete os pedidos de High Priest Sylvain e Maria em Dion, caçando em Cruma Swamp e Execution Ground.
3. Passe pelo teste do Grand Magus Jurek em Giran, matando os Grandis/Breka Orcs.
4. Volte a Mirien para pegar a Mark of Scholar.

[TESTIMONY OF TRUST] (Lv 37)
1. Fale com High Priest Hollint em Oren.
2. Colete assinaturas com Asterios em Elven Village e Thifiell em Dark Elven Village.
3. Reúna os depoimentos de Wilford e Seresin nas outras vilas.
4. Mate as Ant Warriors em Wasteland para obter os fragmentos cruciais.
5. Entregue a Hollint para obter a Mark of Trust.

[TEST OF THE SUMMONER] (Lv 39)
1. Fale com High Summoner Galatea em Gludin Village. Ela dirá que você precisa desafiar os Summoners em combates.
2. Você precisará de cristais mágicos para invocar os oponentes em cartas especiais de duelo (Arcana).
3. Vá para Dion, Giran e Oren para enfrentar os Summoners designados pelas missões secundárias atreladas a Galatea.
4. Colete as Cartas de Invocação de cada oponente (Derrote as bestas que eles invocam).
5. Depois de derrotar os guardiões invocados e reunir todos os Arcana Cards, retorne a Galatea em Gludin para ser condecorado com a Mark of Summoner.`,

        quest3: `SAGA DA 3ª JOB: SAGA OF THE ARCANA LORD (Lv 76)
Inicio: Ivory Tower (Oren)
NPC: High Summoner Sophia
Recompensa: Mudanca de classe para Arcana Lord

1. Fale com a High Summoner Sophia na guilda de Mages em Ivory Tower.
2. Vá para Goddard Town e obtenha as informações iniciais com o NPC da cidade.
3. Siga para Hot Springs, pegue a Ice Cry completando o pedido do Chef Jeremy e a entregue para liberar a relíquia mística.
4. Siga para a Tablet of Vision #1 e comungue com ela.
5. Vá para a Tablet of Vision #2 em Valley of Saints. Use suas summons (Kat the Cat, Mew the Cat, etc) para eliminar os Guardian Angels, pegue a pedra e ative a visão.
6. Siga para a Tablet of Vision #3. Invoque seu servitor mais forte, mate o anjo sombrio que fará o desafio solo, e comungue.
7. Complete a aliança nível 2 com Varka Silenos ou Ketra Orcs para adquirir a Divine Stone of Wisdom através da prova da água/fogo.
8. Use a Divine Stone na Tablet of Vision #4.
9. Na Tablet of Vision #5 em Wall of Argos, colete as marcas matando os Archon of Halisha nas profundezas do cemitério ou Tumba Imperial.
10. Na Tablet of Vision #6, auxilie o mestre invocador lutando ao lado do NPC para matar o Monument Watcher. Pegue a pedra e interaja.
11. Reporte-se a Sophia em Ivory Tower para se tornar um verdadeiro Arcana Lord.`
    },
    {
        base: "Human Mage",
        tipo: "Mage",
        c1: "Cleric",
        c2: "Bishop",
        c3: "Cardinal",
        
        quest1: `SAGA DA 1ª JOB: PATH TO A CLERIC (Lv 20)
Inicio: Gludin Village
NPC: Priest Zigaunt
Recompensa: Mark of Faith

1. Fale com Priest Zigaunt na Igreja de Gludin. Ele pedirá que você encontre 5 livros proibidos.
2. Fale com o Trader Simplon em Gludio. Ele lhe dará os 2 primeiros livros de forma pacífica.
3. Fale com o Guard Praga no portão oeste de Gludio para receber uma pista. Cace Zombies em Ruins of Agony/Despair até dropar o colar da mãe dele. Entregue e receba o 3º livro.
4. Volte a Zigaunt em Gludin. Ele revelará a localização do Lionel, o autor dos livros.
5. Encontre Lionel na Talking Island (perto do Obelisco/Porto). Ele lhe dará o 4º livro e pedirá ajuda.
6. Fale com Gallint na escola de magia de Talking Island e cumpra seu favor para ganhar o último livro.
7. Volte a Zigaunt em Gludin, entregue todos os livros hereges para receber a Mark of Faith.
8. Fale com o High Priest para mudar sua classe para Cleric.`,

        quest2: `SAGA DA 2ª JOB: BISHOP (Lv 40)
Quests Necessarias: Trial of the Pilgrim, Testimony of Trust, Test of the Healer
Recompensa: Mark of Pilgrim, Mark of Trust, Mark of Healer

[TRIAL OF THE PILGRIM] (Lv 35)
1. Fale com o Hermit Santiago no Orc Barracks (norte de Gludin).
2. Vá para Orc Village e fale com o Seer Tanapi. Cace monstros na Cave of Trials para provar seu valor e receber a relíquia dos Orcs.
3. Siga para Dwarven Village e fale com Gauri Twinklerock. Em seguida converse com Priest of the Earth. Cace monstros nas minas para pegar o item divino dos anões.
4. Volte a Santiago no Orc Barracks para encerrar a peregrinação e receber a Mark of Pilgrim.

[TESTIMONY OF TRUST] (Lv 37)
1. Fale com High Priest Hollint na igreja de Oren Castle Town.
2. Pegue o Act of Verdure com Asterios em Elven Village.
3. Pegue a Thifiell's Letter em Dark Elven Village.
4. Pegue a permissão de Wilford (Talking Island) e Seresin (Giran).
5. Colete os fragmentos de formiga em Wasteland e volte a Hollint em Oren.

[TEST OF THE HEALER] (Lv 39)
1. Fale com Priest Bandron na igreja de Giran. Ele entregará a Golden Statue of Einhasad.
2. Vá para Floran Village, fale com Perrin e derrote o bandido que spawnar. Em seguida, converse com Allana.
3. Encontre Orphanage Director Gupu na entrada oeste de Gludio. Pague a doação de 100.000 adena ou faça os favores demorados dele.
4. Fale com Windy Shaera perto de Wasteland (Gorr's Lair) e interaja com a Tablet of Vision.
5. Cace Leto Lizardman Shamans/Captains nas planícies até conseguir os 20 itens corrompidos para purificar.
6. Retorne ao Priest Bandron para receber a Mark of Healer.`,

        quest3: `SAGA DA 3ª JOB: SAGA OF THE CARDINAL (Lv 76)
Inicio: Oren Castle Town
NPC: Priestess Zigaunt / High Priest Hollint (Depende da crônica, siga a quest guide ingame)
Recompensa: Mudanca de classe para Cardinal

1. Fale com o líder da Igreja em Oren (Hollint/Zigaunt) para iniciar a peregrinação do Cardinal.
2. Vá para Goddard Town e colete as informações da rota com o mensageiro da igreja.
3. Siga para Hot Springs, cumpra a quest de caça para o Chef Jeremy, pegue a Ice Cry e realize a troca pelo pacote secreto.
4. Encontre a Tablet of Vision #1 e comungue.
5. Siga para a Tablet of Vision #2 em Valley of Saints. Purifique os Guardian Angels caçando-os com Inquisitor stance/magias, recolha a pedra e leia o monumento.
6. Vá para a Tablet of Vision #3. Ative a pedra, lute no embate solo contra o herege e limpe a visão.
7. Ali-se aos Ketra Orcs ou Varka Silenos até o Nível 2 e conclua a quest elementar para a Divine Stone of Wisdom.
8. Coloque a Divine Stone na Tablet of Vision #4.
9. Na Tablet of Vision #5 em Wall of Argos, expurgue os Archon of Halisha matando os demônios na tumba ou cemitério.
10. Na Tablet of Vision #6, abençoe o aliado herói e ajude-o a despachar o Monument Watcher sombrio. Fale com ele e faça a comunhão final.
11. Retorne a Igreja de Oren para ser consagrado como um Cardinal de Einhasad.`
    },
    {
        base: "Human Mage",
        tipo: "Mage",
        c1: "Cleric",
        c2: "Prophet",
        c3: "Hierophant",
        
        quest1: `SAGA DA 1ª JOB: PATH TO A CLERIC (Lv 20)
Inicio: Gludin Village
NPC: Priest Zigaunt
Recompensa: Mark of Faith

1. Fale com Priest Zigaunt na Igreja de Gludin.
2. Fale com Trader Simplon em Gludio para conseguir os 2 primeiros livros.
3. Ajude o Guard Praga em Gludio recuperando o colar de sua mãe (mate Zombies em Ruins of Agony/Despair). Receba o 3º livro.
4. Retorne a Zigaunt. Em seguida vá para Talking Island e fale com Lionel.
5. Fale com Gallint na escola de magia de Talking Island, complete a missão dele e pegue o último livro.
6. Entregue os 5 livros proibidos para Zigaunt e receba a Mark of Faith.
7. Torne-se Cleric com o High Priest da vila.`,

        quest2: `SAGA DA 2ª JOB: PROPHET (Lv 40)
Quests Necessarias: Trial of the Pilgrim, Testimony of Trust, Test of the Reformer
Recompensa: Mark of Pilgrim, Mark of Trust, Mark of Reformer

[TRIAL OF THE PILGRIM] (Lv 35)
1. Fale com Hermit Santiago no Orc Barracks ao norte de Gludin.
2. Em Orc Village, fale com Tanapi. Sobreviva aos desafios na Cave of Trials.
3. Em Dwarven Village, interaja com Gauri Twinklerock e o Priest of Earth. Cace nas minas.
4. Retorne a Santiago para pegar a Mark of Pilgrim.

[TESTIMONY OF TRUST] (Lv 37)
1. Fale com High Priest Hollint na Igreja de Oren.
2. Conquiste as recomendações dos Elfos com Asterios (Elven Village) e dos Dark Elfos com Thifiell (Dark Elven Village).
3. Ganhe o apoio dos humanos com Wilford e Seresin em Talking Island/Giran.
4. Reúna os fragmentos de formiga corrompidos em Wasteland e volte a Oren.

[TEST OF THE REFORMER] (Lv 39)
1. Fale com Priestess Pupina na igreja de Giran. Ela pedirá que você expurgue um demônio.
2. Vá para Execution Ground e cace Nameless Revenant até dropar os itens da alma condenada.
3. Volte a Pupina. Siga para Dion e fale com o Preacher Sla na praça central.
4. Sla enviará você para as planícies de Dion/Giran para ajudar os devotos Katari e Ol Mahums arrependidos caçando monstros específicos (Leto Lizardman ou Turek Orcs, dependendo da rota designada).
5. Destrua os ídolos pagãos matando as criaturas das trevas e recolha os itens.
6. Volte ao Preacher Sla em Dion e depois a Pupina em Giran para obter a Mark of Reformer.`,

        quest3: `SAGA DA 3ª JOB: SAGA OF THE HIEROPHANT (Lv 76)
Inicio: Oren Castle Town
NPC: High Priest Hollint / Zigaunt
Recompensa: Mudanca de classe para Hierophant

1. Fale com os líderes da Igreja em Oren para iniciar a trilha sagrada do Hierophant.
2. Viaje a Goddard Town e fale com os agentes de informação para encontrar as relíquias perdidas.
3. Em Hot Springs, faça a quest "The Finest Ingredients" com o Chef Jeremy para garantir a Ice Cry e trocar pelo selo místico de Goddard.
4. Localize a Tablet of Vision #1 perto de Tower of Insolence e absorva a mensagem.
5. Vá para a Tablet of Vision #2 em Valley of Saints. Destrua os Guardian Angels invocando a luz sagrada (usando magias de classe), obtenha a Vision Stone e faça a leitura.
6. Siga para a Tablet of Vision #3. Invoque o Quest Monster anjo caído da pedra, enfrente-o em um combate solo longo usando seus melhores buffs, e leia a tábua de pedra.
7. Complete a aliança nível 2 em Ketra Orcs ou Varka Silenos e tome posse da Divine Stone of Wisdom através da mágica secreta da tribo.
8. Coloque a Divine Stone na Tablet of Vision #4.
9. Na Tablet of Vision #5, destrua os Archon of Halisha matando os guardiões no fim do mundo (Wall of Argos/IT).
10. Na Tablet of Vision #6, proteja o combatente sagrado que aparecer. Dê buffs e cure o aliado enquanto ele derrota o Monument Watcher. Interaja com a pedra após a luta.
11. Volte à Igreja de Oren e fale com o sacerdote para receber as insígnias de Hierophant.`
    }
];