/**
 * Lineage II Interlude (C6) Database - Recipes & Crafting
 * Projeto: Vinicius Dezanetti
 */

// Função auxiliar que gera o HTML da imagem baseado no nome do item
function getMaterialIcon(name) {
    const slug = name.toLowerCase()
        .trim()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove acentos
        .replace(/[^a-z0-9\s-]/g, "") // remove caracteres especiais como parênteses () e dois pontos :
        .replace(/\s+/g, "_"); // substitui espaços por underline

    // Retorna a tag de imagem. Se a imagem não for encontrada localmente, exibe um "?" estilizado de backup.
    return `<img src="img/materials/${slug}.png" alt="${name}" class="inline-block w-5 h-5 mr-1.5 align-middle border border-[#3d2f25] bg-[#0c0907] p-[1px] object-contain shadow" onerror="this.onerror=null; this.src='https://placehold.co/20/140f0c/e5c158?text=?';" />`;
}

const l2RecipesDatabase = [
    {
        nome: "Draconic Bow",
        arvoreHtml: `
            <div class="font-mono text-xs bg-[#0d0907] p-4 border border-[#3d2f25] overflow-x-auto space-y-1 text-[#d4c5b3] leading-relaxed shadow-inner">
                <div class="text-[#e5c158] font-bold pb-2 border-b border-[#3d2f25] mb-2">Recipe: Draconic Bow (level 9, quantity 1, rate 60%, MP 225) (recipe 100%)</div>
                
                <div class="flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Recipe Draconic Bow")} <strong>Recipe: Draconic Bow (60%)</strong> [Qtd: 1]</div>
                
                <div class="flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Warsmith Holder")} <strong>Warsmith's Holder</strong> [Qtd: 4]</div>
                <div class="pl-6 text-[#a89276] flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Maestro Holder")} Maestro Holder [Qtd: 2] (8 total)</div>
                <div class="pl-6 text-[#a89276] flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Varnish of Purity")} Varnish of Purity [Qtd: 10] (80 total)</div>
                <div class="pl-12 text-[#8a7b6e] flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Stone of Purity")} Stone of Purity [Qtd: 1] (80 total)</div>
                <div class="pl-12 text-[#8a7b6e] flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Varnish")} Varnish [Qtd: 3] (240 total)</div>
                <div class="pl-12 text-[#8a7b6e] flex items-center gap-1 py-0.5">└── ${getMaterialIcon("Coarse Bone Powder")} Coarse Bone Powder [Qtd: 3] (240 total)</div>
                <div class="text-[#6b5f54] font-bold flex items-center gap-1 py-0.5" style="padding-left: 4.5rem;">└── ${getMaterialIcon("Animal Bone")} Animal Bone [Qtd: 10] (2400 total)</div>
                <div class="pl-6 text-[#a89276] flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Mold Lubricant")} Mold Lubricant [Qtd: 10] (80 total)</div>
                <div class="pl-6 text-[#a89276] flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Mold Hardener")} Mold Hardener [Qtd: 10] (80 total)</div>
                <div class="pl-6 text-[#a89276] flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Mold Glue")} Mold Glue [Qtd: 10] (40 total)</div>
                <div class="pl-6 text-[#a89276] flex items-center gap-1 py-0.5">└── ${getMaterialIcon("Thread")} Thread [Qtd: 20] (80 total)</div>
                
                <div class="flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Draconic Bow Shaft")} <strong>Draconic Bow Shaft</strong> [Qtd: 17]</div>
                <div class="flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Gemstone S")} <strong>Gemstone S</strong> [Qtd: 43]</div>
                
                <div class="flex items-center gap-1 py-0.5">├── ${getMaterialIcon("High Grade Suede")} <strong>High Grade Suede</strong> [Qtd: 77]</div>
                <div class="pl-6 text-[#a89276] flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Coarse Bone Powder")} Coarse Bone Powder [Qtd: 1] (77 total)</div>
                <div class="pl-12 text-[#8a7b6e] flex items-center gap-1 py-0.5">└── ${getMaterialIcon("Animal Bone")} Animal Bone [Qtd: 10] (770 total)</div>
                <div class="pl-6 text-[#a89276] flex items-center gap-1 py-0.5">└── ${getMaterialIcon("Suede")} Suede [Qtd: 3] (231 total)</div>
                
                <div class="flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Compound Braid")} <strong>Compound Braid</strong> [Qtd: 77]</div>
                <div class="pl-6 text-[#a89276] flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Thread")} Thread [Qtd: 5] (385 total)</div>
                <div class="pl-6 text-[#a89276] flex items-center gap-1 py-0.5">└── ${getMaterialIcon("Braided Hemp")} Braided Hemp [Qtd: 5] (385 total)</div>
                <div class="pl-12 text-[#8a7b6e] flex items-center gap-1 py-0.5">└── ${getMaterialIcon("Stem")} Stem [Qtd: 5] (1925 total)</div>
                
                <div class="flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Enria")} <strong>Enria</strong> [Qtd: 77]</div>
                
                <div class="flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Durable Metal Plate")} <strong>Durable Metal Plate</strong> [Qtd: 154]</div>
                <div class="pl-6 text-[#a89276] flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Mithril Ore")} Mithril Ore [Qtd: 5] (770 total)</div>
                <div class="pl-6 text-[#a89276] flex items-center gap-1 py-0.5">└── ${getMaterialIcon("Metallic Thread")} Metallic Thread [Qtd: 5] (770 total)</div>
                <div class="pl-12 text-[#8a7b6e] flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Iron Ore")} Iron Ore [Qtd: 5] (3850 total)</div>
                <div class="pl-12 text-[#8a7b6e] flex items-center gap-1 py-0.5">└── ${getMaterialIcon("Thread")} Thread [Qtd: 10] (7700 total)</div>
                
                <div class="flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Crystal S Grade")} <strong>Crystal S Grade</strong> [Qtd: 214]</div>
                
                <div class="flex items-center gap-1 py-0.5">└── ${getMaterialIcon("Mithril Alloy")} <strong>Mithril Alloy</strong> [Qtd: 385]</div>
                <div class="pl-6 text-[#a89276] flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Mithril Ore")} Mithril Ore [Qtd: 1] (385 total)</div>
                <div class="pl-6 text-[#a89276] flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Varnish of Purity")} Varnish of Purity [Qtd: 1] (385 total)</div>
                <div class="pl-12 text-[#8a7b6e] flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Stone of Purity")} Stone of Purity [Qtd: 1] (385 total)</div>
                <div class="pl-12 text-[#8a7b6e] flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Varnish")} Varnish [Qtd: 3] (1155 total)</div>
                <div class="pl-12 text-[#8a7b6e] flex items-center gap-1 py-0.5">└── ${getMaterialIcon("Coarse Bone Powder")} Coarse Bone Powder [Qtd: 3] (1155 total)</div>
                <div class="text-[#6b5f54] font-bold flex items-center gap-1 py-0.5" style="padding-left: 4.5rem;">└── ${getMaterialIcon("Animal Bone")} Animal Bone [Qtd: 10] (11550 total)</div>
                <div class="pl-6 text-[#a89276] flex items-center gap-1 py-0.5">└── ${getMaterialIcon("Steel")} Steel [Qtd: 2] (770 total)</div>
                <div class="pl-12 text-[#8a7b6e] flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Varnish")} Varnish [Qtd: 5] (3850 total)</div>
                <div class="pl-12 text-[#8a7b6e] flex items-center gap-1 py-0.5">└── ${getMaterialIcon("Iron Ore")} Iron Ore [Qtd: 5] (3850 total)</div>
            </div>
        `,
        totaisHtml: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono bg-[#0d0907] p-4 border border-[#3d2f25] text-[#d4c5b3]">
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Recipe Draconic Bow")} Recipe: Draconic Bow (60%)</span>
                    <span class="text-[#e5c158] font-bold">1</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Stone of Purity")} Stone of Purity</span>
                    <span class="text-[#e5c158] font-bold">465</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Varnish")} Varnish</span>
                    <span class="text-[#e5c158] font-bold">5,245</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Animal Bone")} Animal Bone</span>
                    <span class="text-[#e5c158] font-bold">14,720</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Mold Lubricant")} Mold Lubricant</span>
                    <span class="text-[#e5c158] font-bold">80</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Mold Hardener")} Mold Hardener</span>
                    <span class="text-[#e5c158] font-bold">80</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Mold Glue")} Mold Glue</span>
                    <span class="text-[#e5c158] font-bold">40</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Thread")} Thread</span>
                    <span class="text-[#e5c158] font-bold">8,165</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Draconic Bow Shaft")} Draconic Bow Shaft</span>
                    <span class="text-[#e5c158] font-bold">17</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Gemstone S")} Gemstone S</span>
                    <span class="text-[#e5c158] font-bold">43</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Suede")} Suede</span>
                    <span class="text-[#e5c158] font-bold">231</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Stem")} Stem</span>
                    <span class="text-[#e5c158] font-bold">1,925</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Enria")} Enria</span>
                    <span class="text-[#e5c158] font-bold">77</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Mithril Ore")} Mithril Ore</span>
                    <span class="text-[#e5c158] font-bold">1,155</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Iron Ore")} Iron Ore</span>
                    <span class="text-[#e5c158] font-bold">7,700</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Crystal: S Grade")} Crystal: S Grade</span>
                    <span class="text-[#e5c158] font-bold">214</span>
                </div>
            </div>
        `
    },
    {
        nome: "Forgotten Blade",
        arvoreHtml: `
            <div class="font-mono text-xs bg-[#0d0907] p-4 border border-[#3d2f25] space-y-1 text-[#d4c5b3] shadow-inner">
                <div class="text-[#e5c158] font-bold pb-2 border-b border-[#3d2f25] mb-2">Recipe: Forgotten Blade (60%) (recipe 100%)</div>
                <div class="flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Recipe: Forgotten Blade (60%)")} <strong>Recipe: Forgotten Blade (60%)</strong> [Qtd: 1]</div>
                <div class="flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Forgotten Blade Edge")} <strong>Forgotten Blade Edge</strong> [Qtd: 17]</div>
                <div class="flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Gemstone S")} <strong>Gemstone S</strong> [Qtd: 43]</div>
                <div class="flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Warsmith's Holder")} <strong>Warsmith's Holder</strong> [Qtd: 4]</div>
                <div class="flex items-center gap-1 py-0.5">└── ${getMaterialIcon("Crystal: S Grade")} <strong>Crystal: S Grade</strong> [Qtd: 214]</div>
            </div>
        `,
        totaisHtml: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono bg-[#0d0907] p-4 border border-[#3d2f25] text-[#d4c5b3]">
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Recipe: Forgotten Blade (60%)")} Recipe: Forgotten Blade (60%)</span>
                    <span class="text-[#e5c158] font-bold">1</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Forgotten Blade Edge")} Forgotten Blade Edge</span>
                    <span class="text-[#e5c158] font-bold">17</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Gemstone S")} Gemstone S</span>
                    <span class="text-[#e5c158] font-bold">43</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Crystal: S Grade")} Crystal: S Grade</span>
                    <span class="text-[#e5c158] font-bold">214</span>
                </div>
            </div>
        `
    },
    {
        nome: "Tateossian Ring",
        arvoreHtml: `
            <div class="font-mono text-xs bg-[#0d0907] p-4 border border-[#3d2f25] space-y-1 text-[#d4c5b3] shadow-inner">
                <div class="text-[#e5c158] font-bold pb-2 border-b border-[#3d2f25] mb-2">Recipe: Tateossian Ring (70%)</div>
                <div class="flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Recipe: Tateossian Ring (70%)")} <strong>Recipe: Tateossian Ring (70%)</strong> [Qtd: 1]</div>
                <div class="flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Tateossian Ring Gem")} <strong>Tateossian Ring Gem</strong> [Qtd: 7]</div>
                <div class="flex items-center gap-1 py-0.5">├── ${getMaterialIcon("Asofe")} <strong>Asofe</strong> [Qtd: 2]</div>
                <div class="flex items-center gap-1 py-0.5">└── ${getMaterialIcon("Thons")} <strong>Thons</strong> [Qtd: 2]</div>
            </div>
        `,
        totaisHtml: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono bg-[#0d0907] p-4 border border-[#3d2f25] text-[#d4c5b3]">
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Recipe: Tateossian Ring (70%)")} Recipe: Tateossian Ring (70%)</span>
                    <span class="text-[#e5c158] font-bold">1</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Tateossian Ring Gem")} Tateossian Ring Gem</span>
                    <span class="text-[#e5c158] font-bold">7</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Asofe")} Asofe</span>
                    <span class="text-[#e5c158] font-bold">2</span>
                </div>
                <div class="flex justify-between border-b border-[#1f1712] pb-1 items-center">
                    <span class="flex items-center">${getMaterialIcon("Thons")} Thons</span>
                    <span class="text-[#e5c158] font-bold">2</span>
                </div>
            </div>
        `
    }
];