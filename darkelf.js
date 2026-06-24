// Arquivo: darkelf.js
const l2DataDarkElf = [
    // ==========================================
    //   DARK ELF FIGHTERS - LÂMINAS E SOMBRAS
    // ==========================================
    { 
        tipo: "Fighter", base: "Dark Fighter", c1: "Palus Knight", c2: "Shillien Knight", c3: "Shillien Templar",
        
        quest1: `★ PATH TO A PALUS KNIGHT (1st Job - Lv 20) ★\n\n[NPC Inicial]: Master Virgil na guilda de guerreiros em Gludio Town.\n\n1. Fale com Virgil para receber o "Virgil's Order". Ele te mandará para a Dark Elven Village.\n2. Encontre a Mestra Kalinta na loja de alquimia. Ela pedirá para você caçar "Poison Spiders" e "Arachnid Trackers" na floresta negra para obter 10 venenos puros.\n3. Entregue os venenos para Kalinta, ela forjará uma adaga de ritual.\n4. Volte para Gludio Town e fale com Virgil. Ele pedirá para você caçar "Lycanthropes" na Neutral Zone até juntar 5 peles raras.\n5. Entregue tudo para Virgil, ganhe o "Gaze of Abyss" e mude sua classe para Palus Knight com o Grand Master.`,
        
        quest2: `★ PATH OF THE SHILLIEN KNIGHT (2nd Job - Lv 40) ★\n\n[NPC Inicial]: Grand Master Hannavalt em Giran Town.\n\n1. Inicie o "Trial of Duty" com Hannavalt. Purifique os caídos e enfrente desafios sombrios em Execution Ground e Wasteland.\n2. Pegue o "Test of Trust" com Tetrarch Thifiell na Dark Elven Village. Ele exigirá que você destrua os traidores da raça e Marsh Stakatos em Cruma Swamp.\n3. Comece o "Test of Witchcraft" com Shadow Orim em Dragon Valley. Cace basiliscos, recolha sangue de demônios e prove seu controle sobre a magia negra de proteção.\n4. Junte as marcas de Duty, Trust e Witchcraft, vá até a guilda de Giran e consagre-se um Shillien Knight.`,
        
        quest3: `★ SAGA OF THE SHILLIEN TEMPLAR (3rd Job - Lv 76) ★\n\n[NPC Inicial]: Grand Master Angus na guilda de Giran Town.\n\n1. Angus te enviará para Goddard falar com o Inquisidor Valdis para rastrear o poder dos templários de Shillien.\n2. Vá até Hot Springs garantir sua "Ice Crystal" com o Chef Jeremy na quest "The Finest Ingredients - Part 1".\n3. Sintonize as Tablets of Vision:\n   • Tablet 1: Sul de Tower of Insolence.\n   • Tablet 2: Valley of Saints (Derrote os guardiões rúnicos ao redor da placa).\n   • Tablet 3: Border Outpost (Derrote o Cavaleiro do Abismo de quest em duelo estritamente solo).\n4. Conquiste aliança nível 2 com Ketra Orcs ou Varka Silenos para obter a "Divine Stone of Wisdom".\n5. Cace 700 mobs em Shrine of Loyalty para fazer o Archon of Halisha nascer e dropar o 5º amuleto.\n6. Ative a última Tablet, fale com o espírito ancestral e retorne a Giran para virar um SHILLIEN TEMPLAR!`
    },
    { 
        tipo: "Fighter", base: "Dark Fighter", c1: "Palus Knight", c2: "Bladedancer", c3: "Spectral Dancer",
        
        quest1: `★ PATH TO A PALUS KNIGHT (1st Job - Lv 20) ★\n\nMesmo procedimento da classe anterior (Palus Knight):\n1. Inicie com Master Virgil em Gludio Town.\n2. Colete os venenos com Kalinta e cace os Lycanthropes na Neutral Zone.\n3. Retorne a Virgil, ganhe o "Gaze of Abyss" e vire Palus Knight na guilda.`,
        
        quest2: `★ PATH OF THE BLADEDANCER (2nd Job - Lv 40) ★\n\n[NPC Inicial]: Master Reirin em Giran Town.\n\n1. Comece o "Trial of the Challenger". Desça nas cavernas de Dion e enfrente feras para provar seu ritmo de combate.\n2. Pegue o "Test of Trust" com Thifiell na Dark Elven Village para mediar as disputas territoriais e purificar o pântano de Cruma.\n3. Inicie o "Test of the Duelist" com Master Kaien em Oren Town. Você deve caçar pares de monstros específicos com suas duals em Execution Ground, Cruma, Wasteland, Garden of Eva e Hardins Academy.\n4. Retorne a Giran com as 3 insígnias completas e mude de classe para Bladedancer.`,
        
        quest3: `★ SAGA OF THE SPECTRAL DANCER (3rd Job - Lv 76) ★\n\n[NPC Inicial]: Grand Master Sedrick em Aden Town.\n\n1. Sedrick te mandará para Goddard falar com a Dançarina das Sombras, Justin.\n2. Viaje para Hot Springs e obtenha o "Ice Crystal" com o NPC Jeremy.\n3. Sintonize as Tablets of Vision 1, 2 e 3 (O Boss da 3ª placa deve ser derrotado em duelo solo sem ajuda externa).\n4. Adquira a "Divine Stone of Wisdom" no nível 2 de aliança com Ketra Orcs ou Varka Silenos.\n5. Consiga o amuleto da 5ª Tablet derrotando o Archon of Halisha após coletar 700 marcas em Shrine of Loyalty.\n6. Ative a última Tablet e consagre-se um Spectral Dancer.`
    },
    { 
        tipo: "Fighter", base: "Dark Fighter", c1: "Assassin", c2: "Abyss Walker", c3: "Ghost Hunter",
        
        quest1: `★ PATH TO AN ASSASSIN (1st Job - Lv 20) ★\n\n[NPC Inicial]: Triskel na guilda de guerreiros em Giran Town (ou Gludio).\n\n1. Fale com Triskel para receber o "Triskel's Order". Ele te enviará para falar com Arkenia nas ruínas da floresta escura.\n2. Arkenia pedirá para você caçar "Ashen Bats" e "Dark Horror Spiders" para coletar fragmentos de runas da morte.\n3. Leve os fragmentos para o Guard Leikan na saída norte de Gludio Town.\n4. Leikan pedirá para você caçar "Calnik Lizardmen" até juntar 10 dentes de lagarto.\n5. Entregue os dentes para Leikan, volte a falar com Triskel, receba o "Iron Heart" e vire Assassin.`,
        
        quest2: `★ PATH OF THE ABYSS WALKER (2nd Job - Lv 40) ★\n\n[NPC Inicial]: Hunter Guild Master em Hunter's Village.\n\n1. Pegue o "Trial of the Seeker" para testar suas habilidades de infiltração por Oren e Dion.\n2. Faça o "Test of Trust" com os líderes na Dark Elven Village para provar que suas lâminas servem ao conselho.\n3. Pegue o "Test of the Searcher" com Terry em Dion Town. Rastreie os contrabandistas de orcs caçando Mobs em Hunter's Village e Wasteland.\n4. Junte as 3 marcas, vá à guilda de guerreiros de Giran ou Oren e mude sua classe para Abyss Walker.`,
        
        quest3: `★ SAGA OF THE GHOST HUNTER (3rd Job - Lv 76) ★\n\n[NPC Inicial]: Hunter Guild Master em Hunter's Village.\n\n1. Fale com o mestre em Hunter's Village, depois vá para Goddard falar com a Ghost Scout Khof.\n2. Conclua a quest do "Ice Crystal" em Hot Springs com o Chef Jeremy.\n3. Visite e sintonize as Tablets of Vision 1, 2 e 3 (O assassino da 3ª placa deve ser solado obrigatoriamente).\n4. Pegue a "Divine Stone of Wisdom" subindo a aliança para nível 2 com Ketra Orcs ou Varka Silenos.\n5. Junte 700 itens em Shrine of Loyalty até o Archon of Halisha nascer e dropar o amuleto.\n6. Ative a 6ª placa e mude sua classe para Ghost Hunter.`
    },
    { 
        tipo: "Fighter", base: "Dark Fighter", c1: "Assassin", c2: "Phantom Ranger", c3: "Ghost Sentinel",
        
        quest1: `★ PATH TO AN ASSASSIN (1st Job - Lv 20) ★\n\nMesmo procedimento da classe anterior (Assassin):\n1. Inicie com Triskel e visite Arkenia na floresta negra.\n2. Pegue as ordens com Leikan em Gludio e cace os Calnik Lizardmen.\n3. Entregue os itens, pegue o "Iron Heart" e mude de classe para Assassin na guilda.`,
        
        quest2: `★ PATH OF THE PHANTOM RANGER (2nd Job - Lv 40) ★\n\n[NPC Inicial]: Master Bernard em Giran Town.\n\n1. Pegue o "Trial of the Seeker" para aprimorar sua precisão letal e velocidade com o arco longo.\n2. Faça o "Test of Trust" com Tetrarch Thifiell para garantir o aval religioso do Abismo.\n3. Pegue o "Test of the Sagittarius" com Hamamil em Dion. Cace arqueiros lizardman e feras em Floran Area para coletar sangues raros e penas para as flechas da destruição.\n4. Retorne à guilda dos guerreiros com as 3 marcas e mude para Phantom Ranger.`,
        
        quest3: `★ SAGA OF THE GHOST SENTINEL (3rd Job - Lv 76) ★\n\n[NPC Inicial]: Guild Master Bernard em Hunter's Village.\n\n1. Bernard te enviará para Goddard falar com o Arqueiro das Sombras, Hirat.\n2. Faça a quest do "Ice Crystal" em Hot Springs com o NPC Jeremy.\n3. Sintonize as Tablets of Vision 1, 2 (limpe os guardiões) e 3 (derrote o boss de quest em duelo solo com seu arco escuro).\n4. Consiga a "Divine Stone of Wisdom" via aliança nível 2 com Ketra ou Varka.\n5. Elimine o Archon of Halisha em Shrine of Loyalty coletando as 700 marcas de caça.\n6. Complete a sintonia da última Tablet e consagre-se Ghost Sentinel.`
    },

    // ==========================================
    //   DARK ELF MAGES - MAGIA NEGRA E SUPORTES
    // ==========================================
    { 
        tipo: "Mage", base: "Dark Mystic", c1: "Dark Wizard", c2: "Spellhowler", c3: "Storm Screamer",
        
        quest1: `★ PATH TO A DARK WIZARD (1st Job - Lv 20) ★\n\n[NPC Inicial]: Varika na Dark Elven Village.\n\n1. Fale com Varika para iniciar o teste de magia negra. Ela pedirá 4 sementes do caos.\n2. Fale com Charkeren na floresta e cace "Marsh Zombies" para obter a semente da dor.\n3. Fale com Annika na escola mística e cace "Horror Spiders" para obter a semente do medo.\n4. Fale com Arkenia nas ruínas e cace "Suker Toad" para obter a semente da raiva.\n5. Consiga a última semente da loucura diretamente com Varika após responder seu enigma.\n6. Entregue as 4 sementes, pegue o "Jewel of Darkness" e vire Dark Wizard na guilda mística.`,
        
        quest2: `★ PATH OF THE SPELLHOWLER (2nd Job - Lv 40) ★\n\n[NPC Inicial]: High Priest Raymond na igreja de Gludio Town.\n\n1. Inicie o "Trial of the Scholar" com Raymond. Decifre os mistérios proibidos em Ivory Tower.\n2. Pegue o "Test of Trust" com Thifiell para provar sua ambição controlada pelo conselho.\n3. Comece o "Test of Magus" com Bardis em Dion. Cace elementais do vento e da terra em Cruma Swamp e Wasteland para extrair suas energias e fundi-las na magia do vento negro.\n4. Com as 3 marcas coletadas, vá até a Magic Guild em Giran no Lv 40 e mude para Spellhowler.`,
        
        quest3: `★ SAGA OF THE STORM SCREAMER (3rd Job - Lv 76) ★\n\n[NPC Inicial]: Grand Master Valleria na Magic Guild de Oren Town.\n\n1. Valleria te mandará para Goddard falar com a Magister Feuran.\n2. Conquiste o "Ice Crystal" em Hot Springs através da quest do Jeremy.\n3. Sintonize as Tablets of Vision:\n   • Tablet 1: Sul de TOI.\n   • Tablet 2: Valley of Saints (Destrua as gárgulas e guardas rúnicos).\n   • Tablet 3: Border Outpost (Derrote o elemental da tempestade em duelo 1v1 mágico).\n4. Faça aliança nível 2 com Ketra Orcs ou Varka Silenos para ganhar a "Divine Stone of Wisdom".\n5. Destrua o Archon of Halisha em Shrine of Loyalty juntando 700 corações de monstros.\n6. Sintonize a última Tablet e vire um Storm Screamer.`
    },
    { 
        tipo: "Mage", base: "Dark Mystic", c1: "Dark Wizard", c2: "Phantom Summoner", c3: "Spectral Master",
        
        quest1: `★ PATH TO A DARK WIZARD (1st Job - Lv 20) ★\n\nMesmo procedimento da classe anterior (Dark Wizard):\n1. Inicie com Varika na Dark Elven Village.\n2. Recolha as 4 sementes do caos com os aprendizes da floresta.\n3. Entregue para Varika, pegue o "Jewel of Darkness" e vire Dark Wizard na guilda mística.`,
        
        quest2: `★ PATH OF THE PHANTOM SUMMONER (2nd Job - Lv 40) ★\n\n[NPC Inicial]: High Priest Raymond na igreja de Gludio Town.\n\n1. Faça o "Trial of the Scholar" em Gludio para dominar as teorias dimensionais e de invocação de espíritos.\n2. Faça o "Test of Trust" na Dark Elven Village para provar seu alinhamento com os planos das sombras.\n3. Comece o "Test of the Summoner" com Galatea em Dion Town. Use suas sombras para derrotar invocadores rivais em duelos oficiais e colete as cartas de aprovação caçando Mobs em Giran.\n4. Entregue as 3 insígnias na Magic Guild e mude para Phantom Summoner.`,
        
        quest3: `★ SAGA OF THE SPECTRAL MASTER (3rd Job - Lv 76) ★\n\n[NPC Inicial]: Grand Master Valleria na Magic Guild de Oren Town.\n\n1. Valleria te mandará para Goddard falar com o Summoner Basill.\n2. Pegue o "Ice Crystal" em Hot Springs com o NPC Jeremy.\n3. Sintonize as Tablets of Vision 1, 2 e 3 (O monstro da 3ª placa deve ser destruído apenas por você e seu summon de sombras).\n4. Vá a Goddard e consiga a "Divine Stone of Wisdom" via aliança nível 2 com Ketra ou Varka.\n5. Colete 700 insígnias em Shrine of Loyalty até o Archon of Halisha ser conjurado e derrotado.\n6. Sintonize a última Tablet e vire Spectral Master.`
    },
    { 
        tipo: "Mage", base: "Dark Mystic", c1: "Shillien Oracle", c2: "Shillien Elder", c3: "Shillien Saint",
        
        quest1: `★ PATH TO A SHILLIEN ORACLE (1st Job - Lv 20) ★\n\n[NPC Inicial]: Magister Sidra na Dark Elven Village.\n\n1. Fale com Sidra para iniciar o teste de devoção a Shillien. Ela te dará o "Sidra's Letter".\n2. Vá para Gludio Town falar com o Talbot na Magic Guild.\n3. Talbot te mandará para a Neutral Zone caçar "Shield Mushrooms" até conseguir 5 runas fungis.\n4. Entregue a Talbot, ele te dará o livro de rezas oráculo.\n5. Volte para a Dark Elven Village falar com Sidra. Ela avaliará seu conhecimento místico.\n6. Receba o "Orb of Abyss" e mude sua classe para Shillien Oracle com o Grand Master.`,
        
        quest2: `★ PATH OF THE SHILLIEN ELDER (2nd Job - Lv 40) ★\n\n[NPC Inicial]: High Priest Raymond na igreja de Gludio Town.\n\n1. Inicie o "Trial of the Pilgrim" com Raymond. Viaje pelo mundo conversando com os sábios antigos e acumulando os símbolos de fé.\n2. Pegue o "Test of Trust" com Tetrarch Thifiell na vila negra para legitimar seus rituais perante o conselho.\n3. Comece o "Test of the Reformer" com Pupina em Dion. Destrua os cultistas inimigos e liberte as almas em Execution Ground usando sua magia sagrada invertida.\n4. Com as marcas de Pilgrim, Trust e Reformer, vá até a igreja de Giran no nível 40 e torne-se um Shillien Elder.`,
        
        quest3: `★ SAGA OF THE SHILLIEN SAINT (3rd Job - Lv 76) ★\n\n[NPC Inicial]: High Priestess Hollint na igreja de Oren Town.\n\n1. Hollint te enviará para Goddard falar com o Saint's Guide Kamat.\n2. Siga para Hot Springs e faça a quest do Chef Jeremy para pegar o "Ice Crystal".\n3. Sintonize as Tablets of Vision:\n   • Tablet 1: Sul de TOI.\n   • Tablet 2: Valley of Saints (Derrote os Quest Monsters rúnicos ao redor da placa).\n   • Tablet 3: Border Outpost (Destrua o Anjo Caído em duelo solo de inquisição, sem ajuda externa).\n4. Conquiste aliança nível 2 com Ketra ou Varka para ganhar a "Divine Stone of Wisdom".\n5. Cace 700 mobs em Shrine of Loyalty até o Archon of Halisha nascer. Elimine-o para pegar o 5º amuleto.\n6. Sintonize a última Tablet, fale com a projeção e retorne a Oren para se consagrar uma SHILLIEN SAINT!`
    }
];