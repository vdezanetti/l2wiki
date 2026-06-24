const l2DataHuman = [
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
    }
];