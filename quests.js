/**
 * Lineage II Interlude Database - Quests
 * Projeto: Vinicius Dezanetti
 */

const l2DataQuests = [
    // ─── SUBCLASS QUESTS ──────────────────────────────────────────────────
    {
        nome: "Fate's Whisper (Subclass Part 1)",
        name: "Fate's Whisper",
        level: "75+",
        lvl: "75+",
        npc: "Maestro Reirin (Oren Territory - Leste de Oren)",
        desc: "Primeiro passo para obter a Subclasse. Requer derrotar Cabrio para obter a Reirin's Cabalist Box, além dos 3 Raid Bosses da Tower of Insolence: Death Lord Hallate (3º andar), Kernon (8º andar) e Longhorn Golkonda (11º andar). Por fim, utilize a Pipette Knife no Raid Boss Baium para coletar o sangue (ou opte pelo caminho alternativo limpando 30 Red Cloths nos monstros do 7º andar da TOI). Entrega a Star of Destiny.",
        description: "Quest de Subclasse Parte 1.",
        
        // EXEMPLO DE GUIA COM DIÁLOGOS E IMAGENS EM HTML
        guia: `
            <div class="space-y-6">
                <p>O <strong>Fate's Whisper</strong> é a primeira e mais demorada etapa para obter a Subclasse no Lineage II Interlude. Siga os passos detalhados abaixo:</p>

                <h4 class="text-[#e5c158] font-bold text-base border-b border-[#3d2f25] pb-1">Passo 1: Iniciando a jornada</h4>
                <p>Vá até o leste de Oren e localize o NPC <strong>Maestro Reirin</strong>.</p>
                
                <!-- Exemplo de caixa de Diálogo estilizada de NPC -->
                <div class="bg-[#0d0907] border-l-4 border-[#b58c56] p-4 my-4 italic text-[#a89276] font-mono text-xs">
                    "Maestro Reirin: Saudações, aventureiro. Se você deseja o segredo dos gigantes para liberar sua segunda classe, precisará provar seu valor recuperando minha preciosa caixa..."
                </div>

                <!-- Exemplo de imagem com moldura rústica (basta alterar o src para a sua imagem) -->
                <div class="text-center my-4">
                    <img src="img/maestro_reirin.jpg" alt="Localização Maestro Reirin" class="border-2 border-[#3d2f25] max-w-full mx-auto shadow-lg hover:border-[#b58c56] transition-colors" />
                    <span class="text-[10px] text-[#8a7b6e] block mt-1">Localização exata do Maestro Reirin a leste de Oren.</span>
                </div>

                <h4 class="text-[#e5c158] font-bold text-base border-b border-[#3d2f25] pb-1">Passo 2: A caçada aos Raid Bosses</h4>
                <p>Você precisará obter 4 baús de quests derrotando os seguintes chefes:</p>
                <ul class="list-disc list-inside space-y-2 pl-2">
                    <li><strong>Shilen's Messenger Cabrio:</strong> Localizado nos arredores de Cemetery. Fique atento para clicar no baú assim que ele morrer.</li>
                    <li><strong>Death Lord Hallate:</strong> 3º andar da Tower of Insolence (TOI).</li>
                    <li><strong>Kernon:</strong> 8º andar da TOI.</li>
                    <li><strong>Longhorn Golkonda:</strong> 11º andar da TOI.</li>
                </ul>

                <!-- Exemplo de Caixa de Alerta/Perigo vermelha -->
                <div class="bg-[#240c0c] border border-[#5c2424] p-3 text-xs text-[#ff9e9e]">
                    ⚠️ <strong>Atenção:</strong> Você não precisa estar na party que derrotou o boss, mas deve estar vivo e próximo à área para que o baú da quest apareça. Abra o baú rapidamente antes que ele desapareça!
                </div>
            </div>
        `
    },
    {
        nome: "Mimir's Elixir (Subclass Part 2)",
        name: "Mimir's Elixir",
        level: "75+",
        lvl: "75+",
        npc: "Magister Ladd (Ivory Tower - 4th Floor)",
        desc: "Inicia-se após concluir Fate's Whisper. Requer preparar o Pure Silver e o Pure Gold usando a Urna de Alquimia (Alchemist's Mixing Urn) no subsolo de Ivory Tower. Em seguida, cace Watchman Antharas em Dragon Valley para obter o Blood Fire. Misture os ingredientes na Urna com a temperatura certa para criar o Mimir's Elixir. Ao consumi-lo, sua subclasse será oficialmente liberada.",
        description: "Quest de Subclasse Parte 2.",
        guia: `
            <div class="space-y-6">
                <p>O <strong>Mimir's Elixir</strong> é a fase final da Subclasse, onde você fará misturas alquímicas.</p>
                
                <h4 class="text-[#e5c158] font-bold text-base border-b border-[#3d2f25] pb-1">Passo 1: Falar com Ladd</h4>
                <p>Com a <em>Star of Destiny</em> em sua mochila, suba ao 4º andar de Ivory Tower e fale com Ladd.</p>

                <!-- Exemplo de Diálogo -->
                <div class="bg-[#0d0907] border-l-4 border-[#b58c56] p-4 my-4 italic text-[#a89276] font-mono text-xs">
                    "Magister Ladd: A estrela em seu peito brilha intensamente. Mas para que possamos fundir sua alma, precisaremos de um elixir lendário..."
                </div>
            </div>
        `
    },

    // ─── NOBLESSE QUESTS ──────────────────────────────────────────────────
    {
        nome: "Possessor of a Precious Soul - Part 1 (Noblesse)",
        name: "Possessor of a Precious Soul - Part 1",
        level: "50+",
        lvl: "50+",
        npc: "Talien (Aden Castle Town)",
        desc: "Início da jornada Noblesse (deve ser feita na Subclasse). Talien solicitará que você encontre vários itens históricos no continente: fale com Gabrielle em Giran, Gilmore em Dragon Valley, derrote Baraham em Death Pass, fale com Kantabilon em Heine, obtenha garras de Malruk Succubus Turen em Dragon Valley e o Crimson Moss de um espelho em Giran. Finalize conversando com Virgil em Rune.",
        description: "Noblesse Parte 1",
        guia: "Tutorial da parte 1 de Noblesse em desenvolvimento."
    },
    {
        nome: "Possessor of a Precious Soul - Part 2 (Noblesse)",
        name: "Possessor of a Precious Soul - Part 2",
        level: "60+",
        lvl: "60+",
        npc: "Virgil (Rune Temple)",
        desc: "Ajude Cassandra a salvar os guerreiros afetados por uma praga misteriosa. Você deve caçar monstros em Swamp of Screams para coletar frascos de infecção (Splinter Stakato), falar com o Mysterious Knight no Valley of Saints, derrotar monstros na área para resgatar a alma de uma anja caída e retornar a Rune para entregar a cura.",
        description: "Noblesse Parte 2",
        guia: "Tutorial da parte 2 de Noblesse em desenvolvimento."
    },
    {
        nome: "Possessor of a Precious Soul - Part 3 (Noblesse)",
        name: "Possessor of a Precious Soul - Part 3",
        level: "65+",
        lvl: "65+",
        npc: "Caradine (Goddard Town)",
        desc: "Caradine enviará você para investigar mais mistérios no Valley of Saints. Você deve caçar Pilgrims e Judges para recuperar o Ring e o Necklace sagrados. O passo final e mais desafiador é derrotar o Raid Boss Flame of Splendor Barakiel para obter a Water Goblet (Cálice de Água).",
        description: "Noblesse Parte 3",
        guia: "Tutorial da parte 3 de Noblesse em desenvolvimento."
    },
    {
        nome: "Possessor of a Precious Soul - Part 4 (Noblesse)",
        name: "Possessor of a Precious Soul - Part 4",
        level: "75+",
        lvl: "75+",
        npc: "Caradine (Goddard Town)",
        desc: "O passo final. Certifique-se de estar com sua Subclasse no nível 75. Fale com Caradine em Goddard, que usará sua magia para teleportar você diretamente até a Lady of the Lake nas ruínas do Coliseum. Ao jurar lealdade, você receberá a Noblesse Tiara, o status de Nobreza permanente e a skill Noblesse Blessing.",
        description: "Noblesse Parte 4",
        guia: "Tutorial da parte 4 de Noblesse em desenvolvimento."
    },

    // ─── ALLIANCE KETRA ORCS ──────────────────────────────────────────────
    {
        nome: "Alliance with Ketra Orcs (Levels 1 to 5)",
        name: "Alliance with Ketra Orcs",
        level: "74+",
        lvl: "74+",
        npc: "Wahkan (Ketra Orc Outpost)",
        desc: "Alie-se aos Orcs de Ketra para obter receitas S-Grade e a Divine Stone necessária para a 3rd Class Transfer. \n• Lv 1: Colete 100 Soldier Badges de Varka Silenos.\n• Lv 2: Colete 200 Soldier e 100 Captain Badges.\n• Lv 3: Colete 300 Soldier, 200 Captain e 100 General Badges.\n• Lv 4: Colete as Badges anteriores e complete a quest 'Prove your Courage' (matando o herói de Varka).\n• Lv 5: Adicione a quest 'Slay the Enemy Commander' (matando o líder Varka). Cuidado: atacar qualquer Orc Ketra cancelará sua aliança!",
        description: "Aliança com Ketra Orcs.",
        guia: "Tutorial de aliança com Ketra Orcs em desenvolvimento."
    },

    // ─── ALLIANCE VARKA SILENOS ───────────────────────────────────────────
    {
        nome: "Alliance with Varka Silenos (Levels 1 to 5)",
        name: "Alliance with Varka Silenos",
        level: "74+",
        lvl: "74+",
        npc: "Naran Ashanuk (Varka Silenos Outpost)",
        desc: "Alie-se aos Silenos de Varka para obter receitas de armas/armaduras S-Grade e a Divine Stone para sua 3ª classe. \n• Lv 1: Colete 100 Soldier Badges de Ketra Orcs.\n• Lv 2: Colete 200 Soldier e 100 Captain Badges.\n• Lv 3: Colete 300 Soldier, 200 Captain e 100 General Badges.\n• Lv 4: Complete a quest 'Prove your Courage' (matando o herói de Ketra).\n• Lv 5: Adicione a quest 'Slay the Enemy Commander' (matando o líder Ketra). Cuidado: atacar qualquer Sileno de Varka cancelará instantaneamente sua aliança!",
        description: "Aliança com Varka Silenos.",
        guia: "Tutorial de aliança com Varka Silenos em desenvolvimento."
    }
];

// Garante compatibilidade caso o arquivo utilize variáveis com nomes diferentes
const dadosQuests = l2DataQuests;