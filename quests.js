/**
 * Lineage II Interlude Database - Quests
 * Projeto: Vinicius Dezanetti
 */

// Função auxiliar para identificar com segurança o idioma ativo no escopo global
function obterIdiomaAtivo() {
    return (typeof idiomaAtual !== 'undefined') ? idiomaAtual : 'pt';
}

const l2DataQuests = [
    // ─── SUBCLASS QUESTS ──────────────────────────────────────────────────
    {
        level: "75+",
        lvl: "75+",
        
        get nome() {
            return "FATE’S WHISPER";
        },
        get name() { return this.nome; },

        get npc() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Maestro Reirin (Território de Oren - Leste de Oren)" 
                : "Maestro Reirin (Oren Territory - East of Oren)";
        },

        get desc() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Primeiro passo para obter a Subclasse. Requer derrotar Cabrio para obter a Reiria's Soul Orb, além dos 3 Raid Bosses da Tower of Insolence para obter os scepters de Infernium. Por fim, golpeie o Raid Boss Baium utilizando a Pipette Knife para coletar o sangue e entregue os cristais B-grade e a arma top B-grade solicitados por Reorin para receber a Star of Destiny." 
                : "Upon hitting 75 you can begin the series of quests to add a subclass to your character. Slay Cabrio and the 3 Tower of Insolence Raid Bosses, get Infernium varnish/hammer/mold, use the Pipette Knife on Baium to collect blood, and deliver the top B-grade weapon and B-crystals to get your Star of Destiny.";
        },
        get description() { return this.desc; },
        
        get guia() {
            if (obterIdiomaAtivo() === 'pt') {
                return `
                    <div class="space-y-6">
                        <!-- Tabela de Informações Rápidas -->
                        <div class="bg-[#0d0907] border border-[#3d2f25] p-4 text-xs font-mono space-y-1 text-[#a89276]">
                            <p><strong class="text-[#e5c158]">Nível Inicial:</strong> 75</p>
                            <p><strong class="text-[#e5c158]">Local de Início:</strong> Território de Oren (Leste de Oren Castle Town)</p>
                            <p><strong class="text-[#e5c158]">NPC Inicial:</strong> Maestro Reorin</p>
                            <p><strong class="text-[#e5c158]">Raças / Classes:</strong> Todas</p>
                            <p><strong class="text-[#e5c158]">Repetível:</strong> Não (Única) / Party</p>
                            <p><strong class="text-[#e5c158]">Recompensas:</strong> Arma A-Grade (Low) à escolha & 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-[10px] text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/star_of_destiny.png" class="w-3.5 h-3.5 object-contain shrink-0" alt="Star of Destiny" onerror="this.style.display='none';">Star of Destiny
                                </span> (Necessário para a Subclasse)
                            </p>
                        </div>

                        <!-- Passo a Passo -->
                        <div class="space-y-4">
                            <h4 class="text-[#e5c158] font-bold text-base border-b border-[#3d2f25] pb-1">Passo a Passo Detalhado</h4>
                            
                            <p><strong>1.</strong> A jornada começa com o NPC <strong>Maestro Reorin</strong>, localizado a leste de Oren Castle Town. Ele pedirá que você liberte a alma de sua esposa Reiria derrotando o Shilen's Messenger Cabrio e recuperando a sua Soul Orb.</p>
                            
                            <p><strong>2.</strong> Vá até o nordeste do Cemetery e derrote o boss <strong>Shilen's Messenger Cabrio</strong>. Assim que ele for morto, um baú de quest (Cabalist Box) aparecerá. Abra-o rapidamente para obter a 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/reirias_soul_orb.png" class="w-4 h-4 object-contain shrink-0" alt="Reiria's Soul Orb" onerror="this.style.display='none';">
                                    Reiria's Soul Orb
                                </span>. 
                                Você não precisa dar o último golpe no boss nem estar na party que o matou, apenas certifique-se de estar próximo e vivo para abrir o baú a tempo. Retorne a Reorin.</p>
                            
                            <p><strong>3.</strong> Maestro Reorin pedirá para recuperar 3 Infernium Scepters guardados pelos Raid Bosses na <strong>Tower of Insolence (TOI)</strong>. Os baús de quest aparecerão logo após a morte de cada chefe:</p>
                            <ul class="list-disc list-inside space-y-2 pl-2 my-2">
                                <li><strong>TOI 3º Andar (Death Lord Hallate):</strong> Abra o baú para obter o 
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                        <img src="img/materials/hallate_infernium_scepter.png" class="w-3.5 h-3.5 object-contain shrink-0" alt="Hallate's Infernium Scepter" onerror="this.style.display='none';">Hallate's Infernium Scepter
                                    </span>.
                                </li>
                                <li><strong>TOI 8º Andar (Kernon):</strong> Abra o baú para obter o 
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                        <img src="img/materials/kernon_infernium_scepter.png" class="w-3.5 h-3.5 object-contain shrink-0" alt="Kernon's Infernium Scepter" onerror="this.style.display='none';">Kernon's Infernium Scepter
                                    </span>.
                                </li>
                                <li><strong>TOI 11º Andar (Longhorn Golkonda):</strong> Abra o baú para obter o 
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                        <img src="img/materials/golkonda_infernium_scepter.png" class="w-3.5 h-3.5 object-contain shrink-0" alt="Golkonda's Infernium Scepter" onerror="this.style.display='none';">Golkonda's Infernium Scepter
                                    </span>.
                                </li>
                            </ul>

                            <p><strong>4.</strong> Entregue os três cetros ao Reorin. Ele pedirá que vá até a cidade de Oren e fale com o Warehouse Freightman <strong>Cliff</strong> para obter o 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/infernium_varnish.png" class="w-4 h-4 object-contain shrink-0" alt="Infernium Varnish" onerror="this.style.display='none';">
                                    Infernium Varnish
                                </span>.
                            </p>
                            
                            <p><strong>5.</strong> Leve o verniz de volta a Reorin. Em seguida, ele o enviará para a cidade de Aden para recuperar seu Martelo com o Head Blacksmith <strong>Ferris</strong>:</p>
                            <p class="pl-4">
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/reorins_hammer.png" class="w-4 h-4 object-contain shrink-0" alt="Maestro Reorin's Hammer" onerror="this.style.display='none';">
                                    Maestro Reorin's Hammer
                                </span> (encontrado na ala leste da forja de Aden).
                            </p>
                            
                            <p><strong>6.</strong> Devolva o Martelo a Reorin. Agora ele precisará do seu Molde 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/reorins_mold.png" class="w-4 h-4 object-contain shrink-0" alt="Reorin's Mold" onerror="this.style.display='none';">
                                    Reorin's Mold
                                </span> 
                                com o Trader <strong>Zenkin</strong> em Oren. Zenkin informará que vendeu o molde para o Master <strong>Kaspar</strong> em Hardin's Private Academy.
                            </p>
                            
                            <p><strong>7.</strong> Fale com Master Kaspar em Hardin's Private Academy. Para entregar o Molde, ele exigirá que você use a 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/pipette_knife.png" class="w-4 h-4 object-contain shrink-0" alt="Pipette Knife" onerror="this.style.display='none';">
                                    Pipette Knife
                                </span> 
                                fornecida por ele para extrair o sangue de Baium. Para ter acesso à sala do Baium no topo da TOI, você precisará da 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/blooded_fabric.png" class="w-4 h-4 object-contain shrink-0" alt="Blooded Fabric" onerror="this.style.display='none';">
                                    Blooded Fabric
                                </span> (obtida na quest "An Arrogant Search" iniciada com Hanellin em Aden).
                            </p>
                            
                            <p><strong>8.</strong> Acesse a sala do Raid Boss <strong>Baium</strong> no 14º andar da Tower of Insolence utilizando a Blooded Fabric. Golpeie Baium com a faca da quest para obter a 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/red_pipette_knife.png" class="w-4 h-4 object-contain shrink-0" alt="Red Pipette Knife" onerror="this.style.display='none';">
                                    Red Pipette Knife
                                </span>.
                            </p>
                            
                            <p><strong>9.</strong> Retorne a Master Kaspar e troque a faca banhada em sangue pelo 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/reorins_mold.png" class="w-4 h-4 object-contain shrink-0" alt="Reorin's Mold" onerror="this.style.display='none';">
                                    Reorin's Mold
                                </span>.
                            </p>
                            
                            <p><strong>10.</strong> Para finalizar a missão com Maestro Reorin, você precisará entregar o Molde juntamente com <strong>uma arma Top B-Grade</strong> e 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/crystal_b.png" class="w-4 h-4 object-contain shrink-0" alt="B-Grade Crystals" onerror="this.style.display='none';">
                                    984 B-grade Crystals
                                </span>. 
                            </p>

                            <!-- Lista de Armas B-grade do Usuário (PT) -->
                            <div class="bg-[#0d0907] border border-[#3d2f25] p-4 my-3 space-y-3">
                                <span class="text-[#e5c158] font-bold text-xs uppercase block border-b border-[#3d2f25] pb-1">Armas B-Grade Requeridas (Escolha uma para Entregar):</span>
                                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e3dac9] font-mono"><img src="img/materials/sword_of_damascus.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Damascus"> Sword Of Damascus</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e3dac9] font-mono"><img src="img/materials/samurai_long_sword_duals.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="SLS Duals"> Samurai*Samurai Duals</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e3dac9] font-mono"><img src="img/materials/bow_of_peril.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Peril"> Bow Of Peril</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e3dac9] font-mono"><img src="img/materials/lance.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Lance"> Lance</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e3dac9] font-mono"><img src="img/materials/art_of_battle_axe.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="ABA"> Art Of Battle Axe</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e3dac9] font-mono"><img src="img/materials/staff_of_evil_spirits.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="SOES"> Staff Of Evil Spirits</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e3dac9] font-mono"><img src="img/materials/demon_dagger.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Demon"> Demon Dagger</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e3dac9] font-mono"><img src="img/materials/bellion_cestus.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Bellion"> Bellion Cestus</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e3dac9] font-mono"><img src="img/materials/deadmans_glory.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Deadman"> Deadman's Glory</span>
                                </div>
                            </div>

                            <p>Ao entregar uma das armas B acima, Reorin permitirá que você escolha trocar por uma <strong>arma A-Grade (Low-tier)</strong> e lhe dará o item final 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/star_of_destiny.png" class="w-4 h-4 object-contain shrink-0" alt="Star of Destiny" onerror="this.style.display='none';">
                                    Star of Destiny
                                </span>.
                            </p>

                            <!-- Lista de Armas A-grade do Usuário (PT) -->
                            <div class="bg-[#0d0907] border border-[#3d2f25] p-4 my-3 space-y-3">
                                <span class="text-[#e5c158] font-bold text-xs uppercase block border-b border-[#3d2f25] pb-1">Armas A-Grade para Escolher como Recompensa:</span>
                                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono"><img src="img/materials/tallum_blade.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Tallum"> Tallum Blade</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono"><img src="img/materials/carnage_bow.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Carnage"> Carnage Bow</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono"><img src="img/materials/halberd.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Halberd"> Halberd</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono"><img src="img/materials/elemental_sword.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Elemental"> Elemental Sword</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono"><img src="img/materials/dasparions_staff.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Dasparion"> Dasparion's Staff</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono"><img src="img/materials/bloody_orchid.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Orchid"> Bloody Orchid</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono"><img src="img/materials/meteor_shower.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Meteor"> Meteor Shower</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono"><img src="img/materials/keshanberk_duals.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Keshanberk"> Keshanberk*Keshanberk</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                return `
                    <div class="space-y-6">
                        <!-- Quick Info Table -->
                        <div class="bg-[#0d0907] border border-[#3d2f25] p-4 text-xs font-mono space-y-1 text-[#a89276]">
                            <p><strong class="text-[#e5c158]">Start Level:</strong> 75</p>
                            <p><strong class="text-[#e5c158]">Start Location:</strong> Town of Oren (East of Oren Castle Town)</p>
                            <p><strong class="text-[#e5c158]">Starting NPC:</strong> Maestro Reorin</p>
                            <p><strong class="text-[#e5c158]">Races / Classes:</strong> All</p>
                            <p><strong class="text-[#e5c158]">Repeatable:</strong> No (One-time quest) / Party</p>
                            <p><strong class="text-[#e5c158]">Rewards:</strong> Low A-Grade Weapon & 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-[10px] text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/star_of_destiny.png" class="w-3.5 h-3.5 object-contain shrink-0" alt="Star of Destiny" onerror="this.style.display='none';">Star of Destiny
                                </span> (Needed for Subclass)
                            </p>
                        </div>

                        <!-- Walkthrough -->
                        <div class="space-y-4">
                            <h4 class="text-[#e5c158] font-bold text-base border-b border-[#3d2f25] pb-1">Detailed Walkthrough</h4>
                            
                            <p><strong>1.</strong> The quest begins with <strong>Maestro Reorin</strong>, found east of Oren Castle Town. He will ask you to free his wife Reiria by slaying Shilen's Messenger Cabrio and recovering her soul orb.</p>
                            
                            <p><strong>2.</strong> <strong>Shilen's Messenger Cabrio</strong> is located northeast of the Cemetery. A quest box will spawn after he dies. Open it to receive 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/reirias_soul_orb.png" class="w-4 h-4 object-contain shrink-0" alt="Reiria's Soul Orb" onerror="this.style.display='none';">
                                    Reiria's Soul Orb
                                </span>. 
                                You do not need to deal the last blow or be in the killing party. Just open the box quickly before it despawns. Return to Reorin.</p>
                            
                            <p><strong>3.</strong> Maestro Reorin will ask you to go to the <strong>Tower of Insolence (TOI)</strong> to kill 3 Raid Bosses and retrieve 3 Infernium Scepters from their quest chests:</p>
                            <ul class="list-disc list-inside space-y-2 pl-2 my-2">
                                <li><strong>TOI 3rd Floor (Death Lord Hallate):</strong> Open the box to receive 
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                        <img src="img/materials/hallate_infernium_scepter.png" class="w-3.5 h-3.5 object-contain shrink-0" alt="Hallate's Infernium Scepter" onerror="this.style.display='none';">Hallate's Infernium Scepter
                                    </span>.
                                </li>
                                <li><strong>TOI 8th Floor (Kernon):</strong> Open the box to receive 
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                        <img src="img/materials/kernon_infernium_scepter.png" class="w-3.5 h-3.5 object-contain shrink-0" alt="Kernon's Infernium Scepter" onerror="this.style.display='none';">Kernon's Infernium Scepter
                                    </span>.
                                </li>
                                <li><strong>TOI 11th Floor (Longhorn Golkonda):</strong> Open the box to receive 
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                        <img src="img/materials/golkonda_infernium_scepter.png" class="w-3.5 h-3.5 object-contain shrink-0" alt="Golkonda's Infernium Scepter" onerror="this.style.display='none';">Golkonda's Infernium Scepter
                                    </span>.
                                </li>
                            </ul>

                            <p><strong>4.</strong> Deliver the scepters to Reorin. He will ask you to visit Warehouse Freightman <strong>Cliff</strong> in Oren to obtain the 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/infernium_varnish.png" class="w-4 h-4 object-contain shrink-0" alt="Infernium Varnish" onerror="this.style.display='none';">
                                    Infernium Varnish
                                </span>.</p>
                            
                            <p><strong>5.</strong> Bring the varnish back to Reorin. He will now send you to Aden to meet Head Blacksmith <strong>Ferris</strong> and retrieve his hammer:</p>
                            <p class="pl-4">
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/maestro_reorins_hammer.png" class="w-4 h-4 object-contain shrink-0" alt="Maestro Reorin's Hammer" onerror="this.style.display='none';">
                                    Maestro Reorin's Hammer
                                </span>.</p>
                            
                            <p><strong>6.</strong> Hand the Hammer to Reorin. Now he needs his mold 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/reorins_mold.png" class="w-4 h-4 object-contain shrink-0" alt="Reorin's Mold" onerror="this.style.display='none';">
                                    Reorin's Mold
                                </span> 
                                from Trader <strong>Zenkin</strong> in Oren, who informs you that he sold the mold to Master <strong>Kaspar</strong> at Hardin's Private Academy.</p>
                            
                            <p><strong>7.</strong> Talk to Master Kaspar at Hardin's Private Academy. To get the mold, he will require you to use the 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/pipette_knife.png" class="w-4 h-4 object-contain shrink-0" alt="Pipette Knife" onerror="this.style.display='none';">
                                    Pipette Knife
                                </span> 
                                to collect Baium's blood. To enter Baium's room, you must obtain a 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/blooded_fabric.png" class="w-4 h-4 object-contain shrink-0" alt="Blooded Fabric" onerror="this.style.display='none';">
                                    Blooded Fabric
                                </span> (from the quest "An Arrogant Search" started with Hanellin in Aden).</p>
                            
                            <p><strong>8.</strong> Enter <strong>Baium's</strong> room on the 14th floor of the Tower of Insolence with your Blooded Fabric. Hit Baium with the Pipette Knife to obtain the 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/red_pipette_knife.png" class="w-4 h-4 object-contain shrink-0" alt="Red Pipette Knife" onerror="this.style.display='none';">
                                    Red Pipette Knife
                                </span>.</p>
                            
                            <p><strong>9.</strong> Return to Master Kaspar and exchange the blooded knife for the 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/reorins_mold.png" class="w-4 h-4 object-contain shrink-0" alt="Reorin's Mold" onerror="this.style.display='none';">
                                    Reorin's Mold
                                </span>.</p>
                            
                            <p><strong>10.</strong> To finish the quest with Maestro Reorin, you must deliver the Mold along with <strong>one Top B-grade weapon</strong> and 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/crystal_b.png" class="w-4 h-4 object-contain shrink-0" alt="B-Grade Crystals" onerror="this.style.display='none';">
                                    984 B-grade Crystals
                                </span>.
                            </p>

                            <!-- B-grade weapons (EN) -->
                            <div class="bg-[#0d0907] border border-[#3d2f25] p-4 my-3 space-y-3">
                                <span class="text-[#e5c158] font-bold text-xs uppercase block border-b border-[#3d2f25] pb-1">Required B-Grade Weapons (Select One to Deliver):</span>
                                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e3dac9] font-mono"><img src="img/materials/sword_of_damascus.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Damascus"> Sword Of Damascus</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e3dac9] font-mono"><img src="img/materials/samurai_long_sword_duals.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="SLS Duals"> Samurai*Samurai Duals</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e3dac9] font-mono"><img src="img/materials/bow_of_peril.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Peril"> Bow Of Peril</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e3dac9] font-mono"><img src="img/materials/lance.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Lance"> Lance</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e3dac9] font-mono"><img src="img/materials/art_of_battle_axe.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="ABA"> Art Of Battle Axe</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e3dac9] font-mono"><img src="img/materials/staff_of_evil_spirits.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="SOES"> Staff Of Evil Spirits</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e3dac9] font-mono"><img src="img/materials/demon_dagger.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Demon"> Demon Dagger</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e3dac9] font-mono"><img src="img/materials/bellion_cestus.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Bellion"> Bellion Cestus</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e3dac9] font-mono"><img src="img/materials/deadmans_glory.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Deadman"> Deadman's Glory</span>
                                </div>
                            </div>

                            <p>When you give him the weapon, you can choose a <strong>low A-grade weapon</strong> and receive the final quest item: 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/star_of_destiny.png" class="w-4 h-4 object-contain shrink-0" alt="Star of Destiny" onerror="this.style.display='none';">
                                    Star of Destiny
                                </span>.
                            </p>

                            <!-- A-grade weapons (EN) -->
                            <div class="bg-[#0d0907] border border-[#3d2f25] p-4 my-3 space-y-3">
                                <span class="text-[#e5c158] font-bold text-xs uppercase block border-b border-[#3d2f25] pb-1">Low A-Grade Weapons To Choose from:</span>
                                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono"><img src="img/materials/tallum_blade.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Tallum"> Tallum Blade</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono"><img src="img/materials/carnage_bow.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Carnage"> Carnage Bow</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono"><img src="img/materials/halberd.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Halberd"> Halberd</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono"><img src="img/materials/elemental_sword.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Elemental"> Elemental Sword</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono"><img src="img/materials/dasparions_staff.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Dasparion"> Dasparion's Staff</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono"><img src="img/materials/bloody_orchid.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Orchid"> Bloody Orchid</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono"><img src="img/materials/meteor_shower.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Meteor"> Meteor Shower</span>
                                    <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono"><img src="img/materials/keshanberk_duals.png" class="w-4 h-4 object-contain shrink-0" onerror="this.style.display='none';" alt="Keshanberk"> Keshanberk*Keshanberk</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
    },

    // ─── NOBLESSE QUESTS ──────────────────────────────────────────────────
    {
        level: "50+",
        lvl: "50+",
        
        get nome() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Possessor of a Precious Soul - Part 1 (Noblesse)" 
                : "Possessor of a Precious Soul - Part 1";
        },
        get name() { return this.nome; },

        get npc() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Talien (Cidade de Aden)" 
                : "Talien (Aden Castle Town)";
        },

        get desc() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Início da jornada Noblesse (deve ser feita na Subclasse). Talien solicitará que você encontre vários itens históricos no continente: fale com Gabrielle em Giran, Gilmore em Dragon Valley, derrote Baraham em Death Pass, fale com Kantabilon em Heine, obtenha garras de Malruk Succubus Turen em Dragon Valley e o Crimson Moss de um espelho em Giran. Finalize conversando com Virgil em Rune." 
                : "Start of the Noblesse journey (must be done on your Subclass). Talien will request you to find various historical items across the continent: talk to Gabrielle in Giran, Gilmore in Dragon Valley, defeat Baraham in Death Pass, talk to Kantabilon in Heine, obtain claws from Malruk Succubus Turen in Dragon Valley, and Crimson Moss from a mirror in Giran. Conclude by talking to Virgil in Rune.";
        },
        get description() { return this.desc; },
        
        get guia() {
            if (obterIdiomaAtivo() === 'pt') {
                return `
                    <div class="space-y-6">
                        <!-- Tabela de Informações Rápidas -->
                        <div class="bg-[#0d0907] border border-[#3d2f25] p-4 text-xs font-mono space-y-1 text-[#a89276]">
                            <p><strong class="text-[#e5c158]">Nível:</strong> 50</p>
                            <p><strong class="text-[#e5c158]">Local de Início:</strong> Cidade de Aden (Escadarias da Igreja de Aden)</p>
                            <p><strong class="text-[#e5c158]">NPC Inicial:</strong> Talien</p>
                            <p><strong class="text-[#e5c158]">Raças / Classes:</strong> Todas</p>
                            <p><strong class="text-[#e5c158]">Repetível:</strong> Não (Party)</p>
                            <p><strong class="text-[#e5c158]">Requisitos:</strong> Subclasse Nível 50, 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-[10px] text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/hellfire_oil.png" class="w-3.5 h-3.5 object-contain shrink-0" alt="Hellfire Oil" onerror="this.onerror=null; this.src='https://placehold.co/16x16/140f0c/e5c158?text=H';">1 Hellfire Oil
                                </span> e 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-[10px] text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/lunaragent.png" class="w-3.5 h-3.5 object-contain shrink-0" alt="Lunaragent" onerror="this.onerror=null; this.src='https://placehold.co/16x16/140f0c/e5c158?text=L';">5 Lunaragents
                                </span> (obtidos na quest Supplier of Reagents em Ivory Tower)
                            </p>
                        </div>

                        <!-- Passo a Passo -->
                        <div class="space-y-4">
                            <h4 class="text-[#e5c158] font-bold text-base border-b border-[#3d2f25] pb-1">Passo a Passo Detalhado</h4>
                            
                            <p><strong>1.</strong> Fale com <strong>Talien</strong> na escadaria que leva à Igreja de Aden para começar a quest.</p>
                            
                            <p><strong>2.</strong> Teleporte para Giran e fale com <strong>Gabrielle</strong>, localizada no lado sul da praça principal.</p>
                            
                            <p><strong>3.</strong> Vá até a entrada de <strong>Dragon Valley</strong> e converse com o NPC <strong>Gilmore</strong> (se for semana de selo vitorioso dos Sete Signos, você pode teleportar diretamente até ele).</p>
                            
                            <p><strong>4.</strong> Teleporte para Dion e então para <strong>Beehive</strong>. Siga um pouco para o nordeste do local de chegada. Você encontrará uma caverna; entre nela e derrote o Quest Monster com aparência de medusa (Baraham) para obter o item de quest. Caso não encontre a entrada da caverna, guie-se pela marcação amarela no mapa.</p>
                            
                            <p><strong>5.</strong> Volte para Aden e relate a Talien. Em seguida, viaje para Heine. Fale com o anão Melody Maestro <strong>Kantabilon</strong> no Magic Trader.</p>
                            
                            <p><strong>6.</strong> Teleporte para Dragon Valley. Cace <em>Malruk Succubus</em> e <em>Malruk Succubus Tauren</em> até obter 10 garras 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/succubus_talon.png" class="w-4 h-4 object-contain shrink-0" alt="Succubus Talon" onerror="this.style.display='none';">
                                    Succubus Talon
                                </span>. 
                                A taxa de drop é um pouco baixa. Quando tiver todas, retorne a Kantabilon em Heine.</p>
                            
                            <p><strong>7.</strong> Retorne a Aden e fale novamente com Talien. Ele o enviará a Rune Castle Town. No templo de Rune, procure por <strong>Virgil</strong> na sacada superior junto com outros dois NPCs (sua neta Cassandra e o Mysterious Knight).</p>
                            
                            <p><strong>8.</strong> Siga para a Guilda dos Magos em Rune e converse com o <strong>Grand Seer Rahorakti</strong>.</p>
                            
                            <p><strong>9.</strong> Teleporte para a entrada oeste de <strong>Swamp of Screams</strong>. Derrote os <em>Splinter Stakato Drones</em> para obter 5 musgos carmesim 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/crimson_moss.png" class="w-4 h-4 object-contain shrink-0" alt="Crimson Moss" onerror="this.style.display='none';">
                                    Crimson Moss
                                </span>. 
                                Os monstros são agressivos e resistentes à mágica e flechas. Entregue os itens a Rahorakti para que ele crie a medicina.</p>
                            
                            <p><strong>10.</strong> Retorne ao templo de Rune, fale com Cassandra para curá-la e depois converse com Virgil. Ele o mandará falar com Caradine em Goddard.</p>
                            
                            <p><strong>11.</strong> Encontre <strong>Caradine</strong> no lado nordeste de Goddard. Ela o enviará ao ferreiro Noel. Entregue a ele 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/hellfire_oil.png" class="w-3.5 h-3.5 object-contain shrink-0" alt="Hellfire Oil" onerror="this.style.display='none';">1 Hellfire Oil
                                </span> e 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/lunaragent.png" class="w-3.5 h-3.5 object-contain shrink-0" alt="Lunaragent" onerror="this.style.display='none';">5 Lunaragents
                                </span>. 
                                Retorne a Caradine para finalizar esta etapa. Você receberá experiência e a 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/virgils_letter.png" class="w-4 h-4 object-contain shrink-0" alt="Virgil's Letter" onerror="this.style.display='none';">
                                    Virgil's Letter
                                </span>, liberando a jornada para o início da Parte 2.</p>
                        </div>
                    </div>
                `;
            } else {
                return `
                    <div class="space-y-6">
                        <!-- Quick Info Table -->
                        <div class="bg-[#0d0907] border border-[#3d2f25] p-4 text-xs font-mono space-y-1 text-[#a89276]">
                            <p><strong class="text-[#e5c158]">Level:</strong> 50</p>
                            <p><strong class="text-[#e5c158]">Start Location:</strong> Aden Castle Town (Aden Church Staircase)</p>
                            <p><strong class="text-[#e5c158]">Starting NPC:</strong> Talien</p>
                            <p><strong class="text-[#e5c158]">Races / Classes:</strong> All</p>
                            <p><strong class="text-[#e5c158]">Repeatable:</strong> No (Party)</p>
                            <p><strong class="text-[#e5c158]">Requirements:</strong> Subclass Level 50, 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-[10px] text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/hellfire_oil.png" class="w-3.5 h-3.5 object-contain shrink-0" alt="Hellfire Oil" onerror="this.onerror=null; this.src='https://placehold.co/16x16/140f0c/e5c158?text=H';">1 Hellfire Oil
                                </span> and 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-[10px] text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/lunaragent.png" class="w-3.5 h-3.5 object-contain shrink-0" alt="Lunaragent" onerror="this.onerror=null; this.src='https://placehold.co/16x16/140f0c/e5c158?text=L';">5 Lunaragents
                                </span> (obtained from Supplier of Reagents quest in Ivory Tower)
                            </p>
                        </div>

                        <!-- Step-by-Step -->
                        <div class="space-y-4">
                            <h4 class="text-[#e5c158] font-bold text-base border-b border-[#3d2f25] pb-1">Detailed Walkthrough</h4>
                            
                            <p><strong>1.</strong> Start the quest by speaking to <strong>Talien</strong>, who is on the east side of the stairs leading up to Aden Church.</p>
                            
                            <p><strong>2.</strong> Teleport to Giran. Speak to <strong>Gabrielle</strong> on the south side of the town square.</p>
                            
                            <p><strong>3.</strong> Go to the entrance of <strong>Dragon Valley</strong> and speak to <strong>Gilmore</strong> (if it is Seven Signs rewards week, you can teleport directly to DV if your alliance won).</p>
                            
                            <p><strong>4.</strong> Teleport to Dion, and then to <strong>Beehive</strong>. Move slightly northeast of the port location. You will find a cave. Head inside and kill the medusa-like quest monster (Baraham) to obtain the quest item. If you cannot find the cave, use the yellow thumbtack on your map for guidance.</p>
                            
                            <p><strong>5.</strong> Teleport back to Aden and speak to Talien. Afterward, go to Heine. Visit the Magic Trader and speak to Melody Maestro <strong>Kantabilon</strong>.</p>
                            
                            <p><strong>6.</strong> Teleport to Dragon Valley. Hunt <em>Malruk Succubus</em> and <em>Malruk Succubus Tauren</em> until you collect 10 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/succubus_talon.png" class="w-4 h-4 object-contain shrink-0" alt="Succubus Talon" onerror="this.style.display='none';">
                                    Succubus Talon
                                </span>. 
                                The drop rate is relatively low. Once completed, return to Kantabilon in Heine.</p>
                            
                            <p><strong>7.</strong> Go back up to Aden and talk to Talien. He will send you to Rune Castle Town. Run through the Rune Temple to find <strong>Virgil</strong> on the balcony alongside Cassandra and the Mysterious Knight.</p>
                            
                            <p><strong>8.</strong> Teleport to Rune Castle Town Guild and speak with <strong>Grand Seer Rahorakti</strong>.</p>
                            
                            <p><strong>9.</strong> Teleport to the western entrance of <strong>Swamp of Screams</strong>. Kill <em>Splinter Stakato Drones</em> to obtain 5 crimson moss 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/crimson_moss.png" class="w-4 h-4 object-contain shrink-0" alt="Crimson Moss" onerror="this.style.display='none';">
                                    Crimson Moss
                                </span>. 
                                They are aggressive and have magic and archer resistance. Return to Rahorakti to formulate the medicine.</p>
                            
                            <p><strong>10.</strong> Return to the Rune Temple. Speak to Cassandra to cure her, then talk to Virgil again. He will send you to Goddard to meet Caradine.</p>
                            
                            <p><strong>11.</strong> Locate <strong>Caradine</strong> northeast of the GK in Goddard. She will direct you to Blacksmith Noel. Hand over 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/hellfire_oil.png" class="w-3.5 h-3.5 object-contain shrink-0" alt="Hellfire Oil" onerror="this.onerror=null; this.src='https://placehold.co/16x16/140f0c/e5c158?text=H';">1 Hellfire Oil
                                </span> and 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/lunaragent.png" class="w-3.5 h-3.5 object-contain shrink-0" alt="Lunaragent" onerror="this.onerror=null; this.src='https://placehold.co/16x16/140f0c/e5c158?text=L';">5 Lunaragents
                                </span>. 
                                Finally, talk to Caradine again to finish the quest. You will receive experience and 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/virgils_letter.png" class="w-4 h-4 object-contain shrink-0" alt="Virgil's Letter" onerror="this.style.display='none';">
                                    Virgil's Letter
                                </span>, which is required to start Part 2.</p>
                        </div>
                    </div>
                `;
            }
        }
    },
    {
        level: "60+",
        lvl: "60+",
        
        get nome() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Possessor of a Precious Soul - Part 2 (Noblesse)" 
                : "Possessor of a Precious Soul - Part 2";
        },
        get name() { return this.nome; },

        get npc() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Virgil (Templo de Rune)" 
                : "Virgil (Rune Temple)";
        },

        get desc() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Ajude Cassandra a salvar os guerreiros afetados por uma praga misteriosa. Você deve caçar monstros em Swamp of Screams para coletar frascos de infecção (Splinter Stakato), falar com o Mysterious Knight no Valley of Saints, derrotar monstros na área para resgatar a alma de uma anja caída e retornar a Rune para entregar a cura." 
                : "Help Cassandra save warriors affected by a mysterious plague. You must hunt monsters in Swamp of Screams to collect infection flasks (Splinter Stakato), talk to the Mysterious Knight in Valley of Saints, defeat monsters in the area to rescue the soul of a fallen angel, and return to Rune to deliver the cure.";
        },
        get description() { return this.desc; },

        get guia() {
            if (obterIdiomaAtivo() === 'pt') {
                return `
                    <div class="space-y-6">
                        <!-- Tabela de Informações Rápidas -->
                        <div class="bg-[#0d0907] border border-[#3d2f25] p-4 text-xs font-mono space-y-1 text-[#a89276]">
                            <p><strong class="text-[#e5c158]">Nível:</strong> 60</p>
                            <p><strong class="text-[#e5c158]">Local de Início:</strong> Cidade de Rune (Templo de Rune)</p>
                            <p><strong class="text-[#e5c158]">NPC Inicial:</strong> Master Virgil</p>
                            <p><strong class="text-[#e5c158]">Raças / Classes:</strong> Todas</p>
                            <p><strong class="text-[#e5c158]">Repetível:</strong> Não (Party)</p>
                            <p><strong class="text-[#e5c158]">Requisitos:</strong> Subclasse Nível 60, Quest "Path of a Noblesse, Possessor of a Precious Soul - 1" concluída</p>
                        </div>

                        <!-- Passo a Passo -->
                        <div class="space-y-4">
                            <h4 class="text-[#e5c158] font-bold text-base border-b border-[#3d2f25] pb-1">Passo a Passo Detalhado</h4>
                            
                            <p><strong>1.</strong> Para começar a quest, fale com <strong>Virgil</strong> na Cidade de Rune (dentro do Templo de Rune). Ele pedirá que você converse com <strong>Kassandra</strong>. Ela enviará você até o NPC <strong>Ogmar</strong>.</p>
                            
                            <p><strong>2.</strong> Ogmar enviará você ao <strong>Swamp of Screams</strong> para se encontrar com o <strong>Mysterious Dark Knight</strong>.</p>
                            
                            <p><strong>3.</strong> Fale com o Cavaleiro e inspecione os anjos mortos ao redor para encontrar um fio de cabelo loiro (blonde hair).</p>
                            
                            <p><strong>4.</strong> Fale com o Cavaleiro novamente. Ele o enviará para uma bruxa chamada <strong>Kalis</strong>, que lhe deve um favor.</p>
                            
                            <p><strong>5.</strong> Converse com Kalis e ela solicitará alguns itens específicos para que seu feitiço de localização funcione.</p>
                            
                            <p><strong>6.</strong> Peça esses materiais para a Alquimista <strong>Matild</strong>. Assim que obtiver todos os itens, retorne e entregue-os para Kalis.</p>
                            
                            <p><strong>7.</strong> Kalis conjurará o feitiço e descobrirá o paradeiro da princesa, avisando que ela corre perigo. Siga imediatamente para o <strong>Valley of Saints</strong>.</p>
                            
                            <p><strong>8.</strong> Procure pela marcação amarela no seu mapa para encontrar a entrada da caverna. No interior, derrote os monstros de quest para obter a 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/orb_of_binding.png" class="w-4 h-4 object-contain shrink-0" alt="Orb of Binding" onerror="this.style.display='none';">
                                    Orb of Binding
                                </span>. 
                                Use as orbes obtidas para desfazer os selos nos 4 pilares ao redor do unicórnio aprisionado (o 4º selo consumirá todas as suas orbes). Após quebrar os selos, fale com o unicórnio, que voltará à vida e se revelará como a princesa. Retorne a Kassandra em Rune.
                            </p>
                            
                            <p><strong>9.</strong> Finalmente, converse com Virgil. Você receberá a 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/caradines_letter.png" class="w-4 h-4 object-contain shrink-0" alt="Caradine's Letter" onerror="this.style.display='none';">
                                    Caradine's Letter
                                </span>, 
                                item necessário para iniciar a próxima parte da jornada Noblesse (lembre-se de que a parte 3 exige que a sua Subclasse esteja no nível 65).
                            </p>
                        </div>
                    </div>
                `;
            } else {
                return `
                    <div class="space-y-6">
                        <!-- Quick Info Table -->
                        <div class="bg-[#0d0907] border border-[#3d2f25] p-4 text-xs font-mono space-y-1 text-[#a89276]">
                            <p><strong class="text-[#e5c158]">Level:</strong> 60</p>
                            <p><strong class="text-[#e5c158]">Start Location:</strong> Rune Castle Town (Rune Temple)</p>
                            <p><strong class="text-[#e5c158]">Starting NPC:</strong> Master Virgil</p>
                            <p><strong class="text-[#e5c158]">Races / Classes:</strong> All</p>
                            <p><strong class="text-[#e5c158]">Repeatable:</strong> No (Party)</p>
                            <p><strong class="text-[#e5c158]">Requirements:</strong> Subclass Level 60, Completed Path of a Noblesse, Possessor of a Precious Soul - 1</p>
                        </div>

                        <!-- Step by Step -->
                        <div class="space-y-4">
                            <h4 class="text-[#e5c158] font-bold text-base border-b border-[#3d2f25] pb-1">Quest steps</h4>
                            
                            <p><strong>1.</strong> To start the quest speak with <strong>Virgil</strong> in Rune Castle Town (inside the Rune Temple). He will tell you to speak with <strong>Kassandra</strong>, who will send you to <strong>Ogmar</strong>.</p>
                            
                            <p><strong>2.</strong> Ogmar will send you to the <strong>Swamp of Screams</strong> to meet with the <strong>Mysterious Dark Knight</strong>.</p>
                            
                            <p><strong>3.</strong> Speak with the Knight and inspect the dead angels nearby to find a single blonde hair.</p>
                            
                            <p><strong>4.</strong> Speak with him again and he will send you to a witch who owes him a favor - <strong>Kalis</strong>.</p>
                            
                            <p><strong>5.</strong> Talk to Kalis and she will ask you for some specific items in order for her spell to work.</p>
                            
                            <p><strong>6.</strong> Ask Alchemist <strong>Matild</strong> for these items. Once you have acquired them, return to Kalis.</p>
                            
                            <p><strong>7.</strong> Kalis will cast the tracking spell and locate the princess, but you must hurry as the princess is in grave danger. Go to the <strong>Valley of Saints</strong>.</p>
                            
                            <p><strong>8.</strong> Check where the yellow marker is on your map to locate the cave entrance. Inside the cave, defeat the quest monsters to obtain the 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/orb_of_binding.png" class="w-4 h-4 object-contain shrink-0" alt="Orb of Binding" onerror="this.style.display='none';">
                                    Orb of Binding
                                </span>. 
                                Interact with the 4 pillars/seals and use the orbs to unseal the unicorn (the 4th seal will consume all of your remaining orbs). Talk to the unicorn, who will come alive and turn out to be the princess. Return to Kassandra.
                            </p>
                            
                            <p><strong>9.</strong> Speak with Virgil to finish the quest. You will receive 
                                <span class="inline-flex items-center gap-1 bg-[#100c09] border border-[#3d2f25] px-1 py-0.5 text-xs text-[#e5c158] font-mono leading-none">
                                    <img src="img/materials/caradines_letter.png" class="w-4 h-4 object-contain shrink-0" alt="Caradine's Letter" onerror="this.style.display='none';">
                                    Caradine's Letter
                                </span>, 
                                which you will need to start the next Noblesse quest part (requires Subclass Level 65 to begin part 3).
                            </p>
                        </div>
                    </div>
                `;
            }
        }
    },
    {
        level: "65+",
        lvl: "65+",
        
        get nome() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Possessor of a Precious Soul - Part 3 (Noblesse)" 
                : "Possessor of a Precious Soul - Part 3";
        },
        get name() { return this.nome; },

        get npc() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Caradine (Cidade de Goddard)" 
                : "Caradine (Goddard Town)";
        },

        get desc() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Caradine enviará você para investigar mais mistérios no Valley of Saints. Você deve caçar Pilgrims e Judges para recuperar o Ring e o Necklace sagrados. O passo final e mais desafiador é derrotar o Raid Boss Flame of Splendor Barakiel para obter a Water Goblet (Cálice de Água)." 
                : "Caradine will send you to investigate more mysteries in Valley of Saints. You must hunt Pilgrims and Judges to recover the sacred Ring and Necklace. The final and most challenging step is defeating the Raid Boss Flame of Splendor Barakiel to obtain the Water Goblet.";
        },
        get description() { return this.desc; },

        get guia() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Tutorial da parte 3 de Noblesse em desenvolvimento." 
                : "Noblesse Part 3 tutorial under development.";
        }
    },
    {
        level: "75+",
        lvl: "75+",
        
        get nome() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Possessor of a Precious Soul - Part 4 (Noblesse)" 
                : "Possessor of a Precious Soul - Part 4";
        },
        get name() { return this.nome; },

        get npc() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Caradine (Cidade de Goddard)" 
                : "Caradine (Goddard Town)";
        },

        get desc() {
            return obterIdiomaAtivo() === 'pt' 
                ? "O passo final. Certifique-se de estar com sua Subclasse no nível 75. Fale com Caradine em Goddard, que usará sua magia para teleportar você diretamente até a Lady of the Lake nas ruínas do Coliseum. Ao jurar lealdade, você receberá a Noblesse Tiara, o status de Nobreza permanente e a skill Noblesse Blessing." 
                : "The final step. Make sure your Subclass is level 75. Talk to Caradine in Goddard, who will use her magic to teleport you directly to the Lady of the Lake in the Coliseum ruins. Upon swearing loyalty, you will receive the Noblesse Tiara, permanent Noblesse status, and the Noblesse Blessing skill.";
        },
        get description() { return this.desc; },

        get guia() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Tutorial da parte 4 de Noblesse em desenvolvimento." 
                : "Noblesse Part 4 tutorial under development.";
        }
    },

    // ─── ALLIANCE KETRA ORCS ──────────────────────────────────────────────
    {
        level: "74+",
        lvl: "74+",
        
        get nome() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Alliance with Ketra Orcs (Níveis 1 a 5)" 
                : "Alliance with Ketra Orcs (Levels 1 to 5)";
        },
        get name() { return this.nome; },

        get npc() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Wahkan (Posto Avançado Ketra Orc)" 
                : "Wahkan (Ketra Orc Outpost)";
        },

        get desc() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Alie-se aos Orcs de Ketra para obter receitas S-Grade e a Divine Stone necessária para a 3rd Class Transfer. \n• Lv 1: Colete 100 Soldier Badges de Varka Silenos.\n• Lv 2: Colete 200 Soldier e 100 Captain Badges.\n• Lv 3: Colete 300 Soldier, 200 Captain e 100 General Badges.\n• Lv 4: Colete as Badges anteriores e complete a quest 'Prove your Courage' (matando o herói de Varka).\n• Lv 5: Adicione a quest 'Slay the Enemy Commander' (matando o líder Varka). Cuidado: atacar qualquer Orc Ketra cancelará sua aliança!" 
                : "Ally with the Ketra Orcs to obtain S-Grade recipes and the Divine Stone required for your 3rd Class Transfer. \n• Lv 1: Collect 100 Soldier Badges from Varka Silenos.\n• Lv 2: Collect 200 Soldier and 100 Captain Badges.\n• Lv 3: Collect 300 Soldier, 200 Captain, and 100 General Badges.\n• Lv 4: Collect previous Badges and complete 'Prove your Courage' quest (killing the Varka hero).\n• Lv 5: Add 'Slay the Enemy Commander' quest (killing the Varka commander). Warning: attacking any Ketra Orc will instantly cancel your alliance!";
        },
        get description() { return this.desc; },

        get guia() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Tutorial de aliança com Ketra Orcs em desenvolvimento." 
                : "Ketra Orc alliance tutorial under development.";
        }
    },

    // ─── ALLIANCE VARKA SILENOS ───────────────────────────────────────────
    {
        level: "74+",
        lvl: "74+",
        
        get nome() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Alliance with Varka Silenos (Níveis 1 a 5)" 
                : "Alliance with Varka Silenos (Levels 1 to 5)";
        },
        get name() { return this.nome; },

        get npc() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Naran Ashanuk (Posto Avançado Varka Silenos)" 
                : "Naran Ashanuk (Varka Silenos Outpost)";
        },

        get desc() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Alie-se aos Silenos de Varka para obter receitas de armas/armaduras S-Grade e a Divine Stone para sua 3ª classe. \n• Lv 1: Colete 100 Soldier Badges de Ketra Orcs.\n• Lv 2: Colete 200 Soldier e 100 Captain Badges.\n• Lv 3: Colete 300 Soldier, 200 Captain e 100 General Badges.\n• Lv 4: Complete a quest 'Prove your Courage' (matando o herói de Ketra).\n• Lv 5: Adicione a quest 'Slay the Enemy Commander' (matando o líder Ketra). Cuidado: atacar qualquer Sileno de Varka cancelará instantaneamente sua aliança!" 
                : "Ally with the Varka Silenos to obtain S-Grade weapon/armor recipes and the Divine Stone required for your 3rd Class Transfer. \n• Lv 1: Collect 100 Soldier Badges from Ketra Orcs.\n• Lv 2: Collect 200 Soldier and 100 Captain Badges.\n• Lv 3: Collect 300 Soldier, 200 Captain, and 100 General Badges.\n• Lv 4: Complete 'Prove your Courage' quest (killing the Ketra hero).\n• Lv 5: Add 'Slay the Enemy Commander' quest (killing the Ketra commander). Warning: attacking any Varka Silenos will instantly cancel your alliance!";
        },
        get description() { return this.desc; },

        get guia() {
            return obterIdiomaAtivo() === 'pt' 
                ? "Tutorial de aliança com Varka Silenos em desenvolvimento." 
                : "Varka Silenos alliance tutorial under development.";
        }
    }
];

// Garante compatibilidade caso o arquivo utilize variáveis com nomes diferentes
const dadosQuests = l2DataQuests;