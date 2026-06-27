/**
 * Lineage II Interlude Database - Raid Bosses
 * Projeto: Vinicius Dezanetti
 */

function obterIdiomaAtivo() {
    return (typeof idiomaAtual !== 'undefined') ? idiomaAtual : 'pt';
}

// Base de dados completa de drops do Antharas (PT/US) com caminhos de ícones mapeados
const dropsAntharas = [
    // [ID_Imagem, Nome_EN, Nome_PT, Crystals, Chance]
    ["adena", "Adena (14,000,000 - 18,000,000)", "Adena (14.000.000 - 18.000.000)", "-", "100.00%"],
    ["adena", "Adena (14,000,000 - 18,000,000)", "Adena (14.000.000 - 18.000.000)", "-", "100.00%"],
    ["adena", "Adena (9,000,000 - 13,000,000)", "Adena (9.000.000 - 13.000.000)", "-", "100.00%"],
    ["adena", "Adena (14,000,000 - 18,000,000)", "Adena (14.000.000 - 18.000.000)", "-", "100.00%"],
    ["adena", "Adena (14,000,000 - 18,000,000)", "Adena (14.000.000 - 18.000.000)", "-", "100.00%"],
    ["adena", "Adena (14,000,000 - 18,000,000)", "Adena (14.000.000 - 18.000.000)", "-", "100.00%"],
    ["adena", "Adena (14,000,000 - 18,000,000)", "Adena (14.000.000 - 18.000.000)", "-", "100.00%"],
    ["divine_inspiration", "Ancient Book - Divine Inspiration (Manuscript) (12-29)", "Ancient Book - Divine Inspiration (Manuscript) (12-29)", "-", "100.00%"],
    ["b_soe", "Blessed Scroll Of Escape (1-59)", "Scroll de Escape Abençoado (1-59)", "-", "100.00%"],
    ["b_res", "Blessed Scroll Of Resurrection (1-39)", "Scroll de Ressurreição Abençoado (1-39)", "-", "100.00%"],
    ["ls_high_70", "High-Grade Life Stone: Level 70 (2-4)", "Pedra da Vida High-Grade: Nível 70 (2-4)", "-", "45.00%"],
    ["ls_high_76", "High-Grade Life Stone: Level 76 (2-4)", "Pedra da Vida High-Grade: Nível 76 (2-4)", "-", "40.00%"],
    ["scroll_enchant_weapon_a", "Scroll: Enchant Weapon (A) (1-19)", "Scroll: Enchant Weapon (A) (1-19)", "-", "100.00%"],
    ["ls_top_70", "Top-Grade Life Stone: Level 70 (1-2)", "Pedra da Vida Top-Grade: Nível 70 (1-2)", "-", "10.00%"],
    ["ls_top_76", "Top-Grade Life Stone: Level 76 (1-2)", "Pedra da Vida Top-Grade: Nível 76 (1-2)", "-", "5.00%"],
    
    // Weapons S
    ["angel_slayer", "Angel Slayer", "Angel Slayer", "2052 (S)", "20.00%"],
    ["arcana_mace", "Arcana Mace", "Arcana Mace", "2052 (S)", "20.00%"],
    ["basalt_battlehammer", "Basalt Battlehammer", "Basalt Battlehammer", "2052 (S)", "17.00%"],
    
    // Weapons A
    ["blood_tornado", "Blood Tornado (1-2)", "Blood Tornado (1-2)", "1128 (A)", "25.00%"],
    ["bloody_orchid", "Bloody Orchid (1-2)", "Bloody Orchid (1-2)", "1128 (A)", "25.00%"],
    ["branch_of_the_mother_tree", "Branch Of The Mother Tree (1-2)", "Branch Of The Mother Tree (1-2)", "1659 (A)", "20.00%"],
    ["carnage_bow", "Carnage Bow (1-2)", "Carnage Bow (1-2)", "1128 (A)", "25.00%"],
    ["dark_legions_edge", "Dark Legion's Edge (1-2)", "Dark Legion's Edge (1-2)", "1659 (A)", "25.00%"],
    ["dasparions_staff", "Dasparion's Staff (1-2)", "Dasparion's Staff (1-2)", "1128 (A)", "25.00%"],
    
    // Weapons S
    ["demon_splinter", "Demon Splinter", "Demon Splinter", "2052 (S)", "20.00%"],
    ["draconic_bow", "Draconic Bow", "Draconic Bow", "2052 (S)", "20.00%"],
    
    // Weapons A
    ["dragon_grinder", "Dragon Grinder (1-2)", "Dragon Grinder (1-2)", "1659 (A)", "20.00%"],
    
    // Weapons S
    ["dragon_hunter_axe", "Dragon Hunter Axe", "Dragon Hunter Axe", "2052 (S)", "17.00%"],
    
    // Weapons A
    ["dragon_slayer", "Dragon Slayer (1-2)", "Dragon Slayer (1-2)", "1659 (A)", "25.00%"],
    ["elemental_sword", "Elemental Sword (1-2)", "Elemental Sword (1-2)", "1128 (A)", "25.00%"],
    ["elysian", "Elysian (1-2)", "Elysian (1-2)", "1659 (A)", "25.00%"],
    
    // Weapons S
    ["forgotten_blade", "Forgotten Blade", "Forgotten Blade", "2052 (S)", "17.00%"],
    
    // Weapons A
    ["halberd", "Halberd (1-2)", "Halberd (1-2)", "1128 (A)", "25.00%"],
    
    // Weapons S
    ["heavens_divider", "Heaven's Divider", "Heaven's Divider", "2052 (S)", "16.00%"],
    ["imperial_staff", "Imperial Staff", "Imperial Staff", "2052 (S)", "20.00%"],
    
    // Weapons A
    ["meteor_shower", "Meteor Shower (1-2)", "Meteor Shower (1-2)", "1128 (A)", "25.00%"],
    
    // Weapons S
    ["saint_spear", "Saint Spear", "Saint Spear", "2052 (S)", "17.00%"],
    
    // Shields
    ["sealed_dark_crystal_shield", "Sealed Dark Crystal Shield (1-3)", "Sealed Dark Crystal Shield (1-3)", "75 (A)", "40.00%"],
    ["sealed_imperial_crusader_shield", "Sealed Imperial Crusader Shield", "Sealed Imperial Crusader Shield", "161 (S)", "20.00%"],
    ["sealed_shield_of_nightmare", "Sealed Shield Of Nightmare (1-3)", "Sealed Shield Of Nightmare (1-3)", "114 (A)", "40.00%"],
    
    // Weapons A
    ["soul_bow", "Soul Bow (1-2)", "Soul Bow (1-2)", "1659 (A)", "20.00%"],
    ["soul_separator", "Soul Separator (1-2)", "Soul Separator (1-2)", "1659 (A)", "20.00%"],
    ["sword_of_miracles", "Sword Of Miracles (1-2)", "Sword Of Miracles (1-2)", "1659 (A)", "25.00%"],
    ["tallum_blade", "Tallum Blade (1-2)", "Tallum Blade (1-2)", "1128 (A)", "25.00%"],
    
    // Weapons S
    ["tallum_blade_dark_legions_edge", "Tallum Blade*Dark Legion's Edge", "Tallum Blade*Dark Legion's Edge", "2052 (S)", "16.00%"],
    
    // Weapons A
    ["tallum_glaive", "Tallum Glaive (1-2)", "Tallum Glaive (1-2)", "1659 (A)", "20.00%"],
    
    // Epic Jewel
    ["earring_of_antharas", "Earring Of Antharas", "Brinco de Antharas (Epic)", "178 (S)", "100.00%"],
    
    // Armors A/S
    ["sealed_armor_of_nightmare", "Sealed Armor Of Nightmare (1-3)", "Sealed Armor Of Nightmare (1-3)", "704 (A)", "35.00%"],
    ["sealed_boots_of_nightmare", "Sealed Boots Of Nightmare (1-3)", "Sealed Boots Of Nightmare (1-3)", "108 (A)", "25.00%"],
    ["sealed_dark_crystal_boots", "Sealed Dark Crystal Boots (1-3)", "Sealed Dark Crystal Boots (1-3)", "71 (A)", "25.00%"],
    ["sealed_dark_crystal_breastplate", "Sealed Dark Crystal Breastplate (1-3)", "Sealed Dark Crystal Breastplate (1-3)", "285 (A)", "50.00%"],
    ["sealed_dark_crystal_gaiters", "Sealed Dark Crystal Gaiters (1-3)", "Sealed Dark Crystal Gaiters (1-3)", "178 (A)", "35.00%"],
    ["sealed_dark_crystal_gloves", "Sealed Dark Crystal Gloves (1-3)", "Sealed Dark Crystal Gloves (1-3)", "71 (A)", "25.00%"],
    ["sealed_dark_crystal_helmet", "Sealed Dark Crystal Helmet (1-3)", "Sealed Dark Crystal Helmet (1-3)", "107 (A)", "25.00%"],
    ["sealed_dark_crystal_leather_armor", "Sealed Dark Crystal Leather Armor (1-3)", "Sealed Dark Crystal Leather Armor (1-3)", "214 (A)", "25.00%"],
    ["sealed_dark_crystal_leggings", "Sealed Dark Crystal Leggings (1-3)", "Sealed Dark Crystal Leggings (1-3)", "134 (A)", "35.00%"],
    ["sealed_dark_crystal_robe", "Sealed Dark Crystal Robe (1-3)", "Sealed Dark Crystal Robe (1-3)", "347 (A)", "25.00%"],
    ["sealed_draconic_leather_armor", "Sealed Draconic Leather Armor", "Sealed Draconic Leather Armor", "748 (S)", "35.00%"],
    ["sealed_draconic_leather_boots", "Sealed Draconic Leather Boots", "Sealed Draconic Leather Boots", "153 (S)", "33.00%"],
    ["sealed_draconic_leather_glove", "Sealed Draconic Leather Glove", "Sealed Draconic Leather Glove", "153 (S)", "33.00%"],
    ["sealed_draconic_leather_helmet", "Sealed Draconic Leather Helmet", "Sealed Draconic Leather Helmet", "230 (S)", "33.00%"],
    ["sealed_gauntlets_of_nightmare", "Sealed Gauntlets Of Nightmare (1-3)", "Sealed Gauntlets Of Nightmare (1-3)", "108 (A)", "25.00%"],
    ["sealed_helm_of_nightmare", "Sealed Helm Of Nightmare (1-3)", "Sealed Helm Of Nightmare (1-3)", "163 (A)", "25.00%"],
    ["sealed_imperial_crusader_boots", "Sealed Imperial Crusader Boots", "Sealed Imperial Crusader Boots", "153 (S)", "34.00%"],
    ["sealed_imperial_crusader_breastplate", "Sealed Imperial Crusader Breastplate", "Sealed Imperial Crusader Breastplate", "613 (S)", "15.00%"],
    ["sealed_imperial_crusader_gaiters", "Sealed Imperial Crusader Gaiters", "Sealed Imperial Crusader Gaiters", "383 (S)", "15.00%"],
    ["sealed_imperial_crusader_gauntlet", "Sealed Imperial Crusader Gauntlet", "Sealed Imperial Crusader Gauntlet", "153 (S)", "34.00%"],
    ["sealed_imperial_crusader_helmet", "Sealed Imperial Crusader Helmet", "Sealed Imperial Crusader Helmet", "230 (S)", "34.00%"],
    ["sealed_leather_armor_of_nightmare", "Sealed Leather Armor Of Nightmare (1-3)", "Sealed Leather Armor Of Nightmare (1-3)", "528 (A)", "35.00%"],
    ["sealed_majestic_boots", "Sealed Majestic Boots (1-3)", "Sealed Majestic Boots (1-3)", "108 (A)", "25.00%"],
    ["sealed_majestic_circlet", "Sealed Majestic Circlet (1-3)", "Sealed Majestic Circlet (1-3)", "163 (A)", "25.00%"],
    ["sealed_majestic_earring", "Sealed Majestic Earring (1-5)", "Sealed Majestic Earring (1-5)", "120 (A)", "35.00%"],
    ["sealed_majestic_gauntlets", "Sealed Majestic Gauntlets (1-3)", "Sealed Majestic Gauntlets (1-3)", "108 (A)", "25.00%"],
    ["sealed_majestic_leather_armor", "Sealed Majestic Leather Armor (1-3)", "Sealed Majestic Leather Armor (1-3)", "528 (A)", "8.00%"],
    ["sealed_majestic_necklace", "Sealed Majestic Necklace (1-5)", "Sealed Majestic Necklace (1-5)", "160 (A)", "30.00%"],
    ["sealed_majestic_plate_armor", "Sealed Majestic Plate Armor (1-3)", "Sealed Majestic Plate Armor (1-3)", "704 (A)", "8.00%"],
    ["sealed_majestic_ring", "Sealed Majestic Ring (1-5)", "Sealed Majestic Ring (1-5)", "80 (A)", "35.00%"],
    ["sealed_majestic_robe", "Sealed Majestic Robe (1-3)", "Sealed Majestic Robe (1-3)", "528 (A)", "9.00%"],
    ["sealed_major_arcana_boots", "Sealed Major Arcana Boots", "Sealed Major Arcana Boots", "153 (S)", "33.00%"],
    ["sealed_major_arcana_circlet", "Sealed Major Arcana Circlet", "Sealed Major Arcana Circlet", "230 (S)", "33.00%"],
    ["sealed_major_arcana_glove", "Sealed Major Arcana Glove", "Sealed Major Arcana Glove", "153 (S)", "33.00%"],
    ["sealed_major_arcana_robe", "Sealed Major Arcana Robe", "Sealed Major Arcana Robe", "748 (S)", "35.00%"],
    ["sealed_nightmare_robe", "Sealed Nightmare Robe (1-3)", "Sealed Nightmare Robe (1-3)", "528 (A)", "30.00%"],
    ["sealed_phoenix_earring", "Sealed Phoenix Earring (1-5)", "Sealed Phoenix Earring (1-5)", "80 (A)", "35.00%"],
    ["sealed_phoenix_necklace", "Sealed Phoenix Necklace (1-5)", "Sealed Phoenix Necklace (1-5)", "107 (A)", "30.00%"],
    ["sealed_phoenix_ring", "Sealed Phoenix Ring (1-5)", "Sealed Phoenix Ring (1-5)", "54 (A)", "35.00%"],
    ["sealed_tallum_boots", "Sealed Tallum Boots (1-3)", "Sealed Tallum Boots (1-3)", "71 (A)", "25.00%"],
    ["sealed_tallum_gloves", "Sealed Tallum Gloves (1-3)", "Sealed Tallum Gloves (1-3)", "71 (A)", "25.00%"],
    ["sealed_tallum_helmet", "Sealed Tallum Helmet (1-3)", "Sealed Tallum Helmet (1-3)", "107 (A)", "25.00%"],
    ["sealed_tallum_leather_armor", "Sealed Tallum Leather Armor (1-3)", "Sealed Tallum Leather Armor (1-3)", "347 (A)", "25.00%"],
    ["sealed_tallum_plate_armor", "Sealed Tallum Plate Armor (1-3)", "Sealed Tallum Plate Armor (1-3)", "463 (A)", "25.00%"],
    ["sealed_tallum_stockings", "Sealed Tallum Stockings (1-3)", "Sealed Tallum Stockings (1-3)", "134 (A)", "30.00%"],
    ["sealed_tallum_tunic", "Sealed Tallum Tunic (1-3)", "Sealed Tallum Tunic (1-3)", "214 (A)", "25.00%"],
    ["sealed_tateossian_earring", "Sealed Tateossian Earring", "Sealed Tateossian Earring", "157 (S)", "35.00%"],
    ["sealed_tateossian_necklace", "Sealed Tateossian Necklace", "Sealed Tateossian Necklace", "209 (S)", "30.00%"],
    ["sealed_tateossian_ring", "Sealed Tateossian Ring", "Sealed Tateossian Ring", "105 (S)", "35.00%"]
];

const l2DataBosses = [
    {
        nome: "Antharas",
        name: "Antharas",
        level: 79,
        lvl: 79,
        
        get local() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Antharas' Nest (Dragon Valley)" 
                : "Antharas' Nest (Dragon Valley)";
        },
        get location() { return this.local; },

        get guia() {
            const lang = obterIdiomaAtivo();
            const btnMapText = lang === 'pt' ? "Ver Localização no Mapa" : "View Location on Map";
            const tableTitle = lang === 'pt' ? "Tabela de Drops" : "Drop Table";
            const thItem = lang === 'pt' ? "Item" : "Item";
            const thCrystals = lang === 'pt' ? "Cristais / Tipo" : "Crystals / Grade";
            const thChance = lang === 'pt' ? "Chance" : "Chance";

            // Geração automática e higienizada das linhas de drops da tabela
            const dropRows = dropsAntharas.map(d => {
                const imgName = d[0];
                const nomeExibido = lang === 'pt' ? d[2] : d[1];
                const crystals = d[3];
                const chance = d[4];

                return `
                    <tr class="border-b border-[#1f1712] hover:bg-[#140f0c] transition-colors">
                        <td class="p-2.5 border-r border-[#3d2f25] flex items-center gap-2 font-bold text-[#ff9e9e]">
                            <img src="img/materials/${imgName}.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="${nomeExibido}">
                            ${nomeExibido}
                        </td>
                        <td class="p-2.5 border-r border-[#3d2f25] text-center text-[#a89276]">${crystals}</td>
                        <td class="p-2.5 text-center text-[#ff9e9e] font-bold">${chance}</td>
                    </tr>
                `;
            }).join('');

            return `
                <div class="flex flex-col items-center space-y-6">
                    <!-- Nome e Nível Centralizado -->
                    <div class="text-center">
                        <h2 class="text-3xl font-l2-title text-[#ff9e9e] uppercase tracking-widest">ANTHARAS</h2>
                        <p class="text-xs text-[#c47070] font-bold uppercase tracking-widest mt-1">Level 79</p>
                    </div>

                    <!-- Quadro de Imagem (Aprox. 600x400) -->
                    <div class="w-full max-w-[600px] aspect-[3/2] bg-[#0d0907] border-4 border-double border-[#5c2424] overflow-hidden flex items-center justify-center shadow-lg relative">
                        <img src="img/bosses/antharas.png" alt="Antharas" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='https://placehold.co/600x400/140f0c/5c2424?text=Antharas';">
                    </div>

                    <!-- Bandeirinha Vermelha Clicável (Location) -->
                    <div class="text-center w-full max-w-[600px]">
                        <button onclick="toggleMap()" class="px-5 py-2 bg-[#5c2424] border border-[#9c3a3a] hover:bg-[#9c3a3a] hover:border-[#ff9e9e] text-[#ff9e9e] text-xs font-bold uppercase tracking-widest transition-all rounded-none shadow-[0_0_8px_rgba(92,36,36,0.4)]">
                            🚩 ${btnMapText}
                        </button>
                        
                        <!-- Mapa Oculto (Abre ao clicar) -->
                        <div id="boss-map-container" class="hidden mt-4 border-2 border-[#5c2424] bg-[#0d0907] p-2 max-w-[500px] mx-auto transition-all">
                            <img src="img/bosses/antharas_lair.png" alt="Antharas Lair Map" class="w-full h-auto object-contain" onerror="this.onerror=null; this.src='https://placehold.co/500x350/0d0907/ff9e9e?text=Map+Not+Found';">
                        </div>
                    </div>

                    <!-- Tabela de Drops com Rolagem Interna -->
                    <div class="w-full max-w-[600px] space-y-2">
                        <h3 class="text-[#ff9e9e] font-bold text-sm uppercase border-b border-[#5c2424] pb-1">${tableTitle}</h3>
                        <div class="overflow-y-auto max-h-[350px] border border-[#5c2424] bg-[#0d0907]">
                            <table class="w-full text-xs text-left font-mono border-collapse">
                                <thead class="sticky top-0 bg-[#140f0c] text-[#ff9e9e] border-b border-[#5c2424] z-10">
                                    <tr>
                                        <th class="p-2.5 border-r border-[#3d2f25]">${thItem}</th>
                                        <th class="p-2.5 border-r border-[#3d2f25] text-center">${thCrystals}</th>
                                        <th class="p-2.5 text-center">${thChance}</th>
                                    </tr>
                                </thead>
                                <tbody class="text-[#d4c5b3] divide-y divide-[#1f1712]">
                                    ${dropRows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `;
        }
    }
];

const dadosBosses = l2DataBosses;