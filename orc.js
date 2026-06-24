// Arquivo: orc.js
const l2DataOrc = [
    // ==========================================
    //   ORC FIGHTERS - OS GUERREIROS IMPLACÁVEIS
    // ==========================================
    { 
        tipo: "Fighter", base: "Orc Fighter", c1: "Orc Raider", c2: "Destroyer", c3: "Titan",
        
        quest1: `★ PATH TO AN ORC RAIDER (1st Job - Lv 20) ★\n\n[NPC Inicial]: Prefect Karukia na Orc Village.\n\n1. Karukia pedirá para testar sua força caçando "Kasha Wolves" e "Kasha Blade Spiders" na região norte do platô.\n2. Junte os olhos e garras de quest e retorne a Karukia. Ele te dará duas cartas para entregar aos traidores Orcs escondidos na Cave of Trials.\n3. Vá até a Cave of Trials, enfrente os Orcs renegados (Kuruka Ratman) e recupere as insígnias roubadas.\n4. Volte para Karukia na vila natal.\n5. Ele te entregará o "Raider Token". Fale com o High Prefect na guilda e mude para Orc Raider.`,
        
        quest2: `★ PATH OF THE DESTROYER (2nd Job - Lv 40) ★\n\n[NPC Inicial]: Prefect Kasman na guilda Orc de Gludin Town.\n\n1. Inicie o "Trial of the Challenger" com Kasman. Mostre sua brutalidade derrotando feras de caverna em Dion e monstros de cerco em Gorgo Blockhouse.\n2. Faça o "Test of Glory" com Prefect Vokian em Giran. Você precisará caçar várias tribos rivais de Breka Orcs (Giran), Enku Orcs (Dion) e Leekin Orcs (Oren) para coletar seus cetros e provar sua soberania.\n3. Pegue o "Test of the Champion" com Ascalon em Giran. Ajude a defender as fronteiras eliminando Harpias e Medusas nas montanhas.\n4. Reúna as 3 marcas de provação, volte à guilda dos Orcs em Giran ou Aden no Lv 40 e torne-se um Destroyer.`,
        
        quest3: `★ SAGA OF THE TITAN (3rd Job - Lv 76) ★\n\n[NPC Inicial]: Prefect Donath na guilda Orc de Goddard Town.\n\n1. Donath te enviará para falar com o Flame Lord Kakai na Orc Village para receber a bênção ancestral.\n2. Vá até Hot Springs e complete a caçada do Chef Jeremy para garantir seu "Ice Crystal".\n3. Sintonize as Tablets of Vision:\n   • Tablet 1: Sul de Tower of Insolence.\n   • Tablet 2: Valley of Saints (Derrote os guardiões espirituais que cercam a placa).\n   • Tablet 3: Border Outpost (Invoque e derrote o Campeão Caído de quest em duelo puramente solo).\n4. Eleve sua aliança para nível 2 com Ketra Orcs ou Varka Silenos para obter a "Divine Stone of Wisdom".\n5. Cace em Shrine of Loyalty até juntar 700 itens e forçar o nascimento do Archon of Halisha. Mate-o para pegar o amuleto.\n6. Ative a última Tablet para liberar o poder total e retorne a Goddard para virar um TITAN!`
    },
    { 
        tipo: "Fighter", base: "Orc Fighter", c1: "Monk", c2: "Tyrant", c3: "Grand Khavatari",
        
        quest1: `★ PATH TO A MONK (1st Job - Lv 20) ★\n\n[NPC Inicial]: Gantaki na Orc Village.\n\n1. Gantaki te mandará falar com o Khavatari Rosheek perto do frozen waterfall para treinar seus punhos.\n2. Rosheek pedirá para você caçar "Kasha Bears" usando apenas suas garras vazias (ou armas de punho básicas) até coletar 10 couros.\n3. Depois, cace "Kasha Spiders" e "Scarlet Salamanders" na Cave of Trials para provar seus reflexos.\n4. Entregue os itens a Rosheek, pegue a carta e volte para Gantaki na vila.\n5. Ele te enviará para Gludin Town falar com o Khavatari Toruku. Cace uns Ratman fora da cidade, pegue o "Khali Token" e vire Monk.`,
        
        quest2: `★ PATH OF THE TYRANT (2nd Job - Lv 40) ★\n\n[NPC Inicial]: Prefect Kasman na guilda Orc de Gludin Town.\n\n1. Comece o "Trial of the Challenger". Lute contra os monstros subterrâneos e heróis caídos para testar sua resistência física.\n2. Pegue o "Test of Glory" e cace as tribos rebeldes de Orcs por todo o continente para coletar os dentes e insígnias de liderança.\n3. Inicie o "Test of the Duelist" com Master Kaien em Oren Town. Use suas garras/fists para caçar os monstros listados em Execution Ground, Cruma Swamp, Wasteland e Garden of Eva.\n4. Retorne à guilda dos Orcs com as 3 marcas conquistadas no nível 40 e mude sua classe para Tyrant.`,
        
        quest3: `★ SAGA OF THE GRAND KHAVATARI (3rd Job - Lv 76) ★\n\n[NPC Inicial]: Avatar Shakur na guilda Orc de Oren Town.\n\n1. Shakur te guiará até Goddard para encontrar o mestre de totem, Khavatari Primat.\n2. Vá para Hot Springs e consiga o "Ice Crystal" ajudando o Chef Jeremy na cozinha.\n3. Sintonize as Tablets of Vision 1, 2 e 3 (O desafio da 3ª placa deve ser vencido em combate solo sem assistências).\n4. Adquira a "Divine Stone of Wisdom" no nível 2 de aliança com Ketra Orcs ou Varka Silenos.\n5. Consiga o amuleto da 5ª Tablet caçando 700 monstros em Shrine of Loyalty e derrotando o Archon of Halisha.\n6. Ative a última Tablet e consagre-se como um lendário GRAND KHAVATARI.`
    },

    // ==========================================
    //   ORC MAGES - OS XAMÃS DE GUERRA
    // ==========================================
    { 
        tipo: "Mage", base: "Orc Mystic", c1: "Orc Shaman", c2: "Overlord", c3: "Dominator",
        
        quest1: `★ PATH TO AN ORC SHAMAN (1st Job - Lv 20) ★\n\n[NPC Inicial]: Tataru na Orc Village.\n\n1. Fale com Tataru para iniciar seu chamado espiritual. Ele te dará o "Spirits Leaf".\n2. Cace "Kasha Bear Totems" e "Kasha Spider Totems" para absorver as almas ancestrais da floresta.\n3. Tataru te enviará para a Neutral Zone falar com o Geist Umbar. Ele pedirá para coletar peles de "Grizzly Bears".\n4. Entregue as peles, fale com o totem de fogo na Cave of Trials para passar no teste de resiliência.\n5. Volte para a Orc Village, fale com o High Prefect na guilda e torne-se um Orc Shaman.`,
        
        quest2: `★ PATH OF THE OVERLORD (2nd Job - Lv 40) ★\n\n[NPC Inicial]: Flame Lord Kakai na realeza da Orc Village.\n\n1. Inicie o "Trial of the Pilgrim" para absorver os conhecimentos e filosofias sagradas das outras raças de Elmoraden.\n2. Pegue o "Test of Trust" na guilda para unificar os clãs Orcs sob uma única bandeira de guerra.\n3. Comece o "Test of Glory" e esmague as tribos rebeldes (Breka, Enku, Timak) que se recusam a obedecer às ordens do Flame Lord Kakai.\n4. Com os 3 selos de aprovação em mãos, vá até a guilda mística de Giran ou Aden no nível 40 e mude para Overlord.`,
        
        quest3: `★ SAGA OF THE DOMINATOR (3rd Job - Lv 76) ★\n\n[NPC Inicial]: Seer Rahorakti na guilda Orc de Rune Township.\n\n1. Rahorakti te enviará para o Flame Lord Kakai em Orc Village para obter o decreto máximo do clã.\n2. Conclua a quest do "Ice Crystal" em Hot Springs com o NPC Jeremy.\n3. Sintonize as Tablets of Vision:\n   • Tablet 1: Sul de TOI.\n   • Tablet 2: Valley of Saints (Derrote os guardas mágicos rúnicos).\n   • Tablet 3: Border Outpost (Esmague o espírito corrompido em duelo 1v1 usando seus debuffs e drenos).\n4. Consiga a "Divine Stone of Wisdom" via aliança nível 2 com Ketra ou Varka.\n5. Acumule 700 marcas em Shrine of Loyalty para caçar e derrotar o Archon of Halisha pelo 5º amuleto.\n6. Sintonize a última placa de visão e consagre-se como um Dominator.`
    },
    { 
        tipo: "Mage", base: "Orc Mystic", c1: "Orc Shaman", c2: "Warcryer", c3: "Doomcryer",
        
        quest1: `★ PATH TO AN ORC SHAMAN (1st Job - Lv 20) ★\n\nMesmo procedimento da classe anterior (Orc Shaman):\n1. Inicie com Tataru na Orc Village e colete as almas dos tótens.\n2. Complete as tarefas do Umbar na Neutral Zone e o ritual de fogo.\n3. Entregue os itens na guilda e mude de classe para Orc Shaman.`,
        
        quest2: `★ PATH OF THE WARCRYER (2nd Job - Lv 40) ★\n\n[NPC Inicial]: Seer Somak na guilda Orc de Giran Town.\n\n1. Faça o "Trial of the Pilgrim" viajando pelos templos do mundo e provando seu respeito pelos deuses antigos.\n2. Faça o "Test of Trust" com a liderança ancestral para provar que seus cantos de guerra são puros.\n3. Comece o "Test of Warcryer" com o Elder em Orc Village. Você deve visitar os tótens de proteção animal e caçar Mobs em Cruma Swamp e Wasteland para selar os cantos de fúria.\n4. Entregue os 3 selos na guilda mística Orc no nível 40 e torne-se um Warcryer.`,
        
        quest3: `★ SAGA OF THE DOOMCRYER (3rd Job - Lv 76) ★\n\n[NPC Inicial]: Seer Asmiron na guilda Orc de Goddard Town.\n\n1. Asmiron te mandará falar com o Seer em Aden Town para rastrear os tambores de guerra ancestrais.\n2. Colete o "Ice Crystal" nas termas de Hot Springs com o Chef Jeremy.\n3. Sintonize as Tablets of Vision 1, 2 e 3 (O guardião da 3ª placa deve ser derrotado sozinho em duelo místico).\n4. Vá até as frentes de batalha de Goddard e consiga a "Divine Stone of Wisdom" (Aliança Nvl 2 Ketra/Varka).\n5. Junte 700 corações em Shrine of Loyalty até invocar o Archon of Halisha. Derrote-o.\n6. Sintonize a 6ª Tablet e mude sua classe para Doomcryer.`
    }
];