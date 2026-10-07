// CATÁLOGO INFORMATIVO (50 productos): juego > gama (set/expansión) > productos.
// Editá, borrá o agregá libremente. Las gamas "Colecciones premium", "Illustration Box", "Mazos de inicio" (ST27)
// y "El Hobbit" (Draft Night / Scene Box) salen de tus posteos de Instagram. El resto son lanzamientos recientes de cada juego:
// dejá solo lo que realmente tienen en stock.
const GAMES={pokemon:{n:"Pokémon",c:"#ffcb05"},onepiece:{n:"One Piece",c:"#ff4d4d"},magic:{n:"Magic",c:"#e8a15a"},riftbound:{n:"Riftbound",c:"#37d4ff"},dragonball:{n:"Dragon Ball",c:"#ff9a1f"}};
const D={"Booster Box":"Caja cerrada con todos los sobres de la expansión.","Elite Trainer Box":"Sobres, fundas, dados, marcadores y energías en una sola caja.","Booster Bundle":"Pack de sobres de la misma expansión.","Starter Deck":"Mazo de inicio, listo para jugar.","Play Booster Box":"Caja de Play Boosters, ideal para draft y sealed.","Collector Booster Box":"Caja de Collector Boosters con acabados premium.","Commander Deck":"Mazo precompuesto para el formato Commander.","Showdown Deck":"Mazo para dos jugadores, listo para jugar.","Champion Deck":"Mazo armado alrededor de un campeón."};
const mk=(id,game,name,types)=>({id,game,name,products:types.map(t=>Array.isArray(t)?{type:t[0],name:t[1],desc:t[2]}:{type:t,name:t,desc:D[t]})});
const SETS=[
  mk("colecciones-premium","pokemon","Colecciones premium",[["Colección premium","Blaziken ex y Volcanion ex","Colección premium con cartas promo y sobres."],["Colección premium","Mega Zygarde ex","Colección premium centrada en Mega Zygarde ex."],["Colección","30th Celebration: Poster Collection","Colección de póster por el 30.º aniversario."]]),
  mk("pitch-black","pokemon","Mega Evolution—Pitch Black",["Booster Box","Elite Trainer Box","Booster Bundle"]),
  mk("chaos-rising","pokemon","Chaos Rising",["Booster Box","Elite Trainer Box","Booster Bundle"]),
  mk("perfect-order","pokemon","Perfect Order",["Booster Box","Elite Trainer Box","Booster Bundle"]),
  mk("ascended-heroes","pokemon","Ascended Heroes",["Elite Trainer Box","Booster Bundle"]),
  mk("phantasmal-flames","pokemon","Phantasmal Flames",["Booster Box","Elite Trainer Box","Booster Bundle"]),
  mk("illustration-box","onepiece","Illustration Box",[["Illustration Box","Illustration Box Kid / Killer","Caja de ilustraciones con Kid y Killer."],["Illustration Box","Illustration Box Rayleigh / Shakuyaku","Caja de ilustraciones con Rayleigh y Shakuyaku."]]),
  mk("op-17","onepiece","OP-17 The World's Strongest Warriors",[["Booster Box","Booster Box OP-17","Set del 4.º aniversario con nuevos Leaders."]]),
  mk("mazos-de-inicio","onepiece","Mazos de inicio",[["Starter Deck","Black Marshall D. Teach (ST27)","Mazo de inicio listo para jugar."]]),
  mk("op-15","onepiece","OP-15 Adventure on Kami's Island",["Booster Box"]),
  mk("op-14","onepiece","OP-14 The Azure Sea's Seven",["Booster Box"]),
  mk("eb-04","onepiece","EB-04 Egghead Crisis",["Booster Box"]),
  mk("el-hobbit","magic","El Hobbit",[["Draft Night","El Hobbit: Draft Night","Producto pensado para armar un draft entre amigos."],["Scene Box","El Hobbit: Scene Box","Caja de escena con sobres y cartas especiales."],"Play Booster Box","Collector Booster Box","Commander Deck"]),
  mk("reality-fracture","magic","Reality Fracture",["Play Booster Box","Collector Booster Box","Commander Deck"]),
  mk("marvel-super-heroes","magic","Marvel Super Heroes",["Play Booster Box","Commander Deck"]),
  mk("tmnt","magic","Teenage Mutant Ninja Turtles",["Play Booster Box"]),
  mk("secrets-of-strixhaven","magic","Secrets of Strixhaven",["Play Booster Box"]),
  mk("lorwyn-eclipsed","magic","Lorwyn Eclipsed",["Play Booster Box"]),
  mk("vendetta","riftbound","Vendetta",["Booster Box","Showdown Deck"]),
  mk("unleashed","riftbound","Unleashed",["Booster Box","Champion Deck"]),
  mk("spiritforged","riftbound","Spiritforged",["Booster Box","Champion Deck"]),
  mk("origins","riftbound","Origins",["Booster Box","Champion Deck"]),
  mk("fb10-cross-force","dragonball","FB10 Cross Force",["Booster Box"]),
  mk("fb09-dual-evolution","dragonball","FB09 Dual Evolution",["Booster Box"]),
  mk("fb07-wish-for-shenron","dragonball","FB07 Wish for Shenron",["Booster Box"]),
  mk("starter-decks-ex","dragonball","Starter Decks EX",[["Starter Deck EX","The Phase of Evolution (FS11)","Mazo de inicio deluxe, todo foil."],["Starter Deck EX","The Beat of Ki (FS12)","Mazo de inicio deluxe, todo foil."]])
];
// Fotos: assets/sets/<id>.png (logo de la gama) y assets/productos/<id-del-producto>.jpg (ver LEEME-FOTOS.txt)
const slug=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
SETS.forEach(s=>s.products.forEach(p=>p.id=s.id+"-"+slug(p.name)));
