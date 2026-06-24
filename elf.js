// Arquivo: elf.js
const l2DataElf = [
    // ==========================================
    //   ELF FIGHTERS - ESPADACHINS E ARQUEIROS
    // ==========================================
    { 
        tipo: "Fighter", base: "Elven Fighter", c1: "Elven Knight", c2: "Temple Knight", c3: "Eva's Templar",
        
        quest1: `★ PATH TO AN ELVEN KNIGHT (1st Job - Lv 20) ★\n\n[NPC Inicial]: Master Sorius na guilda de guerreiros em Gludio Town.\n\n1. Fale com Sorius para receber as ordens de patrulha.\n2. Vá para as Ruínas da Agonia e cace "Tracker Skeletons" e "Scout Skeletons" até conseguir 20 pedaços de ossos rúnicos.\n3. Entregue os ossos para Sorius, ele te mandará para a Elven Forest falar com o Blacksmith Kluto.\n4. Kluto pedirá para você recuperar ferramentas caçando "Ol Mahum Novices" perto da fortaleza abandonada.\n5. Pegue os itens, devolva para Kluto e pegue a carta de recomendação.\n6. Volte a Sorius em Gludio, ganhe o "Elven Knight Brooch" e mude de classe na guilda.`,
        
        quest2: `★ PATH OF THE TEMPLE KNIGHT (2nd Job - Lv 40) ★\n\n[NPC Inicial]: Grand Master Hannavalt em Giran Town.\n\n1. Inicie o "Trial of Duty" com Hannavalt. Purifique espíritos caídos em Execution Ground e na Wasteland.\n2. Faça o "Test of Trust" conversando com o Rei Asterios na Elven Village. Ele pedirá para proteger a floresta eliminando invasores e Dryads corrompidas.\n3. Pegue o "Test of the Healer" em Giran. Ajude clérigos feridos e purifique monstros mortos-vivos nas masmorras de Dion.\n4. Reúna as marcas de Duty, Trust e Healer. Vá até a guilda de Giran e mude para Temple Knight.`,
        
        quest3: `★ SAGA OF EVA'S TEMPLAR (3rd Job - Lv 76) ★\n\n[NPC Inicial]: Master Reirin em Aden Town.\n\n1. Reirin te guiará até Goddard para conversar com o Guardião da Água Sagrada.\n2. Vá até Hot Springs e complete a quest do Chef Jeremy para garantir sua "Ice Crystal".\n3. Sintonize as Tablets of Vision:\n   • Tablet 1: Sul de TOI.\n   • Tablet 2: Valley of Saints (Derrote os guardas mágicos ao redor).\n   • Tablet 3: Border Outpost (Derrote o Cavaleiro Corrompido de quest sozinho).\n4. Conquiste aliança nível 2 com Ketra ou Varka para conseguir a "Divine Stone of Wisdom".\n5. Obtenha o 5º amuleto derrotando o Archon of Halisha (700 itens em Shrine of Loyalty).\n6. Complete a 6ª Tablet e torne-se um Eva's Templar em Aden.`
    },
    { 
        tipo: "Fighter", base: "Elven Fighter", c1: "Elven Knight", c2: "Swordsinger", c3: "Sword Muse",
        
        quest1: `★ PATH TO AN ELVEN KNIGHT (1st Job - Lv 20) ★\n\nMesmo procedimento da classe anterior (Elven Knight):\n1. Inicie com Master Sorius em Gludio.\n2. Cace os Skeletons em Ruínas da Agonia e visite o Blacksmith Kluto na Elven Village.\n3. Elimine Ol Mahums, colete as ferramentas, volte para Sorius e vire Elven Knight.`,
        
        quest2: `★ PATH OF THE SWORDSINGER (2nd Job - Lv 40) ★\n\n[NPC Inicial]: Master Reirin em Giran Town.\n\n1. Comece o "Trial of the Challenger". Você testará seu ritmo de batalha contra feras nas cavernas de Dion e monstros em Gorgo Blockhouse.\n2. Pegue o "Test of Trust" e consiga o apoio dos anciões élficos na vila natal, eliminando ameaças em Cruma Swamp.\n3. Faça o "Test of the Duelist" com Master Kaien em Oren Town. Você deverá caçar pares de monstros específicos em 5 regiões diferentes (Execution Ground, Cruma, Wasteland, Garden of Eva e Hardins Academy) para provar sua maestria com as lâminas dançantes.\n4. Retorne a Giran com as 3 insígnias e torne-se um Swordsinger.`,
        
        quest3: `★ SAGA OF THE SWORD MUSE (3rd Job - Lv 76) ★\n\n[NPC Inicial]: Grand Master Sedrick em Aden Town.\n\n1. Sedrick te mandará para Goddard falar com a Mestra da Canção, Radia.\n2. Viaje para Hot Springs e obtenha o "Ice Crystal" com Jeremy.\n3. Sintonize as Tablets of Vision 1, 2 e 3 (O Boss da 3ª placa deve ser derrotado sem ajudas ou summons).\n4. Adquira a "Divine Stone of Wisdom" no nível 2 de aliança com Ketra Orcs ou Varka Silenos.\n5. Consiga o amuleto da 5ª Tablet derrotando o Archon of Halisha após juntar 700 marcas em Shrine of Loyalty.\n6. Ative a última Tablet e consagre-se um Sword Muse.`
    },
    { 
        tipo: "Fighter", base: "Elven Fighter", c1: "Elven Scout", c2: "Plains Walker", c3: "Wind Rider",
        
        quest1: `★ PATH TO AN ELVEN SCOUT (1st Job - Lv 20) ★\n\n[NPC Inicial]: Master Reirin na guilda de guerreiros em Gludio Town.\n\n1. Fale com Reirin para obter a licença de batedor. Ele te dará o "Reirin's Report".\n2. Vá para as montanhas e cace "Ol Mahum Patrols" até coletar 10 relatórios inimigos.\n3. Volte a Reirin, ele te mandará para a Elven Forest falar com o Guardiana Moretti.\n4. Moretti pedirá para rastrear rastreadores perigosos e destruir "Priest Ol Mahum" nas proximidades.\n5. Colete as pistas, devolva para Moretti e pegue a carta final.\n6. Retorne a Reirin em Gludio e mude para Elven Scout.`,
        
        quest2: `★ PATH OF THE PLAINS WALKER (2nd Job - Lv 40) ★\n\n[NPC Inicial]: Hunter Guild Master em Hunter's Village.\n\n1. Pegue o "Trial of the Seeker". Siga pistas de contrabandistas velozes por Dion, Oren e Giran.\n2. Inicie o "Test of Trust" na Elven Village com o rei para manter a harmonia entre as raças aliadas.\n3. Faça o "Test of the Searcher" com Terry em Dion Town. Rastreie relatórios de invasão caçando orcs rebeldes nas montanhas.\n4. Junte as 3 marcas, vá à guilda dos guerreiros e mude sua classe para Plains Walker.`,
        
        quest3: `★ SAGA OF THE WIND RIDER (3rd Job - Lv 76) ★\n\n[NPC Inicial]: Hunter Guild Master em Hunter's Village.\n\n1. Fale com o mestre em Hunter's Village, depois vá para Goddard falar com a Wind Scout Ellia.\n2. Conclua a quest do "Ice Crystal" em Hot Springs com o NPC Jeremy.\n3. Visite e sintonize as Tablets of Vision 1, 2 e 3 (O assassino da 3ª placa deve ser solado).\n4. Pegue a "Divine Stone of Wisdom" subindo a aliança para nível 2 com Ketra ou Varka.\n5. Junte 700 itens em Shrine of Loyalty até o Archon of Halisha nascer e dropar o amuleto.\n6. Ative a 6ª placa e mude sua classe para Wind Rider.`
    },
    { 
        tipo: "Fighter", base: "Elven Fighter", c1: "Elven Scout", c2: "Silver Ranger", c3: "Moonlight Sentinel",
        
        quest1: `★ PATH TO AN ELVEN SCOUT (1st Job - Lv 20) ★\n\nMesmo procedimento da classe anterior (Elven Scout):\n1. Comece com Master Reirin em Gludio.\n2. Cace os Ol Mahum Patrols e complete a patrulha do Moretti na Elven Forest.\n3. Devolva os relatórios para Reirin e mude de classe para Elven Scout.`,
        
        quest2: `★ PATH OF THE SILVER RANGER (2nd Job - Lv 40) ★\n\n[NPC Inicial]: Master Bernard em Giran Town.\n\n1. Pegue o "Trial of the Seeker" para aprimorar sua velocidade e agilidade no arco.\n2. Faça o "Test of Trust" com a liderança sagrada de Einhasad para firmar sua honra.\n3. Pegue o "Test of the Sagittarius" com Hamamil em Dion. Cace arqueiros Lizardman na Floran Area e aranhas gigantes para obter as pontas de flecha de prata lendárias.\n4. Retorne à guilda dos guerreiros com as 3 marcas e mude para Silver Ranger.`,
        
        quest3: `★ SAGA OF THE MOONLIGHT SENTINEL (3rd Job - Lv 76) ★\n\n[NPC Inicial]: Guild Master Bernard em Hunter's Village.\n\n1. Bernard te enviará para Goddard falar com o Arqueiro Ancestral Kael.\n2. Faça a quest do "Ice Crystal" em Hot Springs com o Chef Jeremy.\n3. Sintonize as Tablets of Vision 1, 2 (limpe os guardiões) e 3 (derrote o boss de quest em duelo solo com seu arco).\n4. Consiga a "Divine Stone of Wisdom" via aliança nível 2 com Ketra Orcs ou Varka Silenos.\n5. Elimine o Archon of Halisha em Shrine of Loyalty coletando as 700 insígnias de caça.\n6. Complete a sintonia da última Tablet e consagre-se Moonlight Sentinel.`
    },

    // ==========================================
    //   ELF MAGES - MAGOS, SUMMONERS E SUPORTES
    // ==========================================
    { 
        tipo: "Mage", base: "Elven Mystic", c1: "Elven Wizard", c2: "Spellsinger", c3: "Mystic Muse",
        
        quest1: `★ PATH TO AN ELVEN WIZARD (1st Job - Lv 20) ★\n\n[NPC Inicial]: Rosella na Elven Village.\n\n1. Fale com Rosella para iniciar o teste de magia da água e do vento.\n2. Ela te mandará coletar 3 itens com aprendizes locais:\n   • Fale com Greenis e cace "Prowler Spiders" para obter a semente do vento.\n   • Fale com Thalia e cace "Dryads" para obter a flor imortal.\n   • Fale com Northwind e cace "Suker Toad" para obter a gema d'água.\n3. Entregue os 3 componentes rituais para Rosella.\n4. Ela te dará o "Fertile Jewel". Leve-o ao Grand Master da guilda mística e vire Elven Wizard.`,
        
        quest2: `★ PATH OF THE SPELLSINGER (2nd Job - Lv 40) ★\n\n[NPC Inicial]: High Priest Raymond na igreja de Gludio Town.\n\n1. Inicie o "Trial of the Scholar" com Raymond. Decifre os enigmas e textos ancestrais viajando até Ivory Tower.\n2. Pegue o "Test of Trust" na Elven Village com Asterios para garantir a bênção dos espíritos da floresta.\n3. Comece o "Test of Magus" com Bardis em Dion. Cace elementais da água e do vento em Cruma Swamp e Wasteland para reter as essências mágicas líquidas.\n4. Com as 3 marcas conquistadas, vá até a Magic Guild em Giran no Lv 40 e mude para Spellsinger.`,
        
        quest3: `★ SAGA OF THE MYSTIC MUSE (3rd Job - Lv 76) ★\n\n[NPC Inicial]: Grand Master Valleria na Magic Guild de Oren Town.\n\n1. Valleria te mandará para Goddard falar com a Magister Green.\n2. Conquiste o "Ice Crystal" em Hot Springs com Jeremy.\n3. Sintonize as Tablets of Vision:\n   • Tablet 1: Sul de TOI.\n   • Tablet 2: Valley of Saints (Limpe as gárgulas e guardas rúnicos).\n   • Tablet 3: Border Outpost (Derrote o elemental corrompido em duelo 1v1 mágico).\n4. Faça aliança nível 2 com Ketra ou Varka para ganhar a "Divine Stone of Wisdom".\n5. Destrua o Archon of Halisha em Shrine of Loyalty juntando 700 corações de monstros.\n6. Sintonize a última Tablet e vire uma Mystic Muse.`
    },
    { 
        tipo: "Mage", base: "Elven Mystic", c1: "Elven Wizard", c2: "Elemental Summoner", c3: "Elemental Master",
        
        quest1: `★ PATH TO AN ELVEN WIZARD (1st Job - Lv 20) ★\n\nMesmo procedimento da classe anterior (Elven Wizard):\n1. Inicie com Rosella na Elven Village.\n2. Consiga a Semente, a Flor e a Gema com os 3 aprendizes da floresta.\n3. Entregue para Rosella, pegue o "Fertile Jewel" e vire Elven Wizard na guilda mística.`,
        
        quest2: `★ PATH OF THE ELEMENTAL SUMMONER (2nd Job - Lv 40) ★\n\n[NPC Inicial]: High Priest Raymond na igreja de Gludio Town.\n\n1. Faça o "Trial of the Scholar" em Gludio para dominar as teorias dimensionais de Einhasad.\n2. Faça o "Test of Trust" na Elven Village para provar seu alinhamento com a natureza.\n3. Comece o "Test of the Summoner" com Galatea em Dion Town. Use seus espíritos para derrotar invocadores rivais em duelos oficiais e colete as cartas de aprovação caçando Mobs em Giran.\n4. Entregue as 3 insígnias na Magic Guild e mude para Elemental Summoner.`,
        
        quest3: `★ SAGA OF THE ELEMENTAL MASTER (3rd Job - Lv 76) ★\n\n[NPC Inicial]: Grand Master Valleria na Magic Guild de Oren Town.\n\n1. Valleria te mandará para Goddard falar com a Summoner Almina.\n2. Pegue o "Ice Crystal" em Hot Springs com Jeremy.\n3. Sintonize as Tablets of Vision 1, 2 e 3 (O monstro da 3ª placa deve ser derrotado apenas por você e seus espíritos elementais).\n4. Vá a Goddard e consiga a "Divine Stone of Wisdom" via aliança nível 2 com Ketra ou Varka.\n5. Colete 700 insígnias em Shrine of Loyalty até o Archon of Halisha ser conjurado e derrotado.\n6. Sintonize a última Tablet e vire Elemental Master.`
    },
    { 
        tipo: "Mage", base: "Elven Mystic", c1: "Elven Oracle", c2: "Elven Elder", c3: "Eva's Saint",
        
        quest1: `★ PATH TO AN ELVEN ORACLE (1st Job - Lv 20) ★\n\n[NPC Inicial]: Priest Manuel na igreja de Gludio Town.\n\n1. Fale com Manuel para receber o "Crystal of Hope". Ele te enviará para a costa de Gludin.\n2. Encontre o Allana perto do porto. Ela pedirá para você livrar a costa de "Lizardmen Captains".\n3. Retorne a Allana, ela rezará com você e enviará para o Perrin na fazenda de Gludin.\n4. Perrin sumonará um monstro de quest. Derrote-o usando sua magia e fale com Perrin novamente.\n5. Volte para Gludio Town e fale com Manuel. Ele te entregará a "Leaf of Oracle".\n6. Vá até o High Priest na igreja e mude sua classe para Elven Oracle.`,
        
        quest2: `★ PATH OF THE ELVEN ELDER (2nd Job - Lv 40) ★\n\n[NPC Inicial]: High Priest Raymond na igreja de Gludio Town.\n\n1. Inicie o "Trial of the Pilgrim" com Raymond. Viaje pelo continente conversando com eremitas e coletando os selos sagrados do conhecimento.\n2. Pegue o "Test of Trust" na Elven Village. O rei Asterios pedirá ajuda para selar portões de corrupção e acalmar espíritos da mata.\n3. Comece o "Test of the Reformer" com Pupina em Dion. Destrua cultistas malignos e liberte as almas aprisionadas em Execution Ground.\n4. Com as marcas de Pilgrim, Trust e Reformer, vá até a igreja de Giran no nível 40 e torne-se um Elven Elder.`,
        
        quest3: `★ SAGA OF EVA'S SAINT (3rd Job - Lv 76) ★\n\n[NPC Inicial]: High Priestess Hollint na igreja de Oren Town.\n\n1. Hollint te enviará para Goddard falar com o Saint's Guide Cornelius.\n2. Siga para Hot Springs e faça a quest do Chef Jeremy para pegar o "Ice Crystal".\n3. Sintonize as Tablets of Vision:\n   • Tablet 1: Sul de TOI.\n   • Tablet 2: Valley of Saints (Derrote os Quest Monsters rúnicos ao redor da placa).\n   • Tablet 3: Border Outpost (Destrua o Anjo Caído em duelo solo, sem ajuda externa).\n4. Conquiste aliança nível 2 com Ketra ou Varka para ganhar a "Divine Stone of Wisdom".\n5. Cace 700 mobs em Shrine of Loyalty até o Archon of Halisha nascer. Elimine-o para pegar o 5º amuleto.\n6. Sintonize a última Tablet, fale com a projeção e retorne a Oren para se consagrar uma EVA'S SAINT!`
    }
];