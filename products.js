// CATÁLOGO INFORMATIVO (50 productos): juego > gama (set/expansión) > productos.
// Editá, borrá o agregá libremente. Las gamas "Colecciones premium", "Illustration Box", "Mazos de inicio" (ST27)
// y "El Hobbit" (Draft Night / Scene Box) salen de tus posteos de Instagram. El resto son lanzamientos recientes de cada juego:
// dejá solo lo que realmente tienen en stock.
// Actualizado el 21/10/2026.
const GAMES={pokemon:{n:"Pokémon",c:"#ffcb05"},onepiece:{n:"One Piece",c:"#ff4d4d"},magic:{n:"Magic",c:"#e8a15a"},riftbound:{n:"Riftbound",c:"#37d4ff"},dragonball:{n:"Dragon Ball",c:"#ff9a1f"}};
const D={"Booster Box":"Caja cerrada con todos los sobres de la expansión.","Elite Trainer Box":"Sobres, fundas, dados, marcadores y energías en una sola caja.","Booster Bundle":"Pack de sobres de la misma expansión.","Starter Deck":"Mazo de inicio, listo para jugar.","Play Booster Box":"Caja de Play Boosters, ideal para draft y sealed.","Collector Booster Box":"Caja de Collector Boosters con acabados premium.","Commander Deck":"Mazo precompuesto para el formato Commander.","Showdown Deck":"Mazo para dos jugadores, listo para jugar.","Champion Deck":"Mazo armado alrededor de un campeón."};
const mk=(id,game,name,types)=>({id,game,name,products:types.map(t=>Array.isArray(t)?{type:t[0],name:t[1],desc:t[2]}:{type:t,name:t,desc:D[t]})});
const SETS=[
  mk("colecciones-premium","pokemon","Colecciones premium",[["Colección premium","Blaziken ex y Volcanion ex","Incluye 2 cartas promo, 1 carta oversize y 10 sobres."],["Colección premium","Mega Zygarde ex","Colección premium con cartas promo, sobres de Perfect Order y un sticker reutilizable."],["Colección","30th Celebration: Poster Collection","Por el 30.º aniversario: incluye 3 cartas promo, 1 póster (aprox. 27 x 39 pulgadas) y 3 sobres."]]),
  mk("pitch-black","pokemon","Mega Evolution—Pitch Black",["Booster Box","Elite Trainer Box",["Booster Bundle","Booster Bundle","Pack con 6 sobres de Mega Evolution—Pitch Black."]]),
  mk("chaos-rising","pokemon","Chaos Rising",["Booster Box","Elite Trainer Box",["Booster Bundle","Booster Bundle","Pack con 6 sobres de Chaos Rising."]]),
  mk("perfect-order","pokemon","Perfect Order",["Booster Box","Elite Trainer Box",["Booster Bundle","Booster Bundle","Pack con 6 sobres de Perfect Order."]]),
  mk("ascended-heroes","pokemon","Ascended Heroes",["Elite Trainer Box",["Booster Bundle","Booster Bundle","Pack con 6 sobres de Ascended Heroes."]]),
  mk("phantasmal-flames","pokemon","Phantasmal Flames",["Booster Box","Elite Trainer Box",["Booster Bundle","Booster Bundle","Pack con 6 sobres de Phantasmal Flames."]]),
  mk("illustration-box","onepiece","Illustration Box",[["Illustration Box","Illustration Box Kid / Killer","Caja de ilustraciones con Kid y Killer."],["Illustration Box","Illustration Box Rayleigh / Shakuyaku","Caja de ilustraciones con Rayleigh y Shakuyaku."]]),
  mk("op-17","onepiece","OP-17 The World's Strongest Warriors",[["Booster Box","Booster Box OP-17","Set del 4.º aniversario con nuevos Leaders."]]),
  mk("mazos-de-inicio","onepiece","Mazos de inicio",[["Starter Deck","Black Marshall D. Teach (ST27)","Mazo de inicio listo para jugar."],["Starter Deck","Red Monkey D. Luffy (ST31)","Mazo de inicio listo para jugar. Incluye 1 sobre de OP-16."],["Starter Deck","Blue Ace & Newgate (ST22)","Mazo de inicio listo para jugar."]]),
  mk("op-15","onepiece","OP-15 Adventure on Kami's Island",["Booster Box"]),
  mk("op-14","onepiece","OP-14 The Azure Sea's Seven",["Booster Box"]),
  mk("op-09","onepiece","OP-09 Emperors in the New World",["Booster Box"]),
  mk("el-hobbit","magic","El Hobbit",[["Draft Night","El Hobbit: Draft Night","Draft rápido para 4 jugadores: 12 Play Boosters, 1 Collector Booster y 90 tierras."],["Scene Box","El Hobbit: Scene Box","Crack the Plates: 6 cartas de escena, 3 Play Boosters, 6 cartas de arte y un atril de exhibición."],"Play Booster Box","Collector Booster Box",["Bundle","Bundle","Incluye 9 Play Boosters."]]),
  mk("reality-fracture","magic","Reality Fracture",["Play Booster Box","Collector Booster Box","Commander Deck"]),
  mk("marvel-super-heroes","magic","Marvel Super Heroes",["Play Booster Box","Commander Deck"]),
  mk("secrets-of-strixhaven","magic","Secrets of Strixhaven",["Play Booster Box"]),
  mk("lorwyn-eclipsed","magic","Lorwyn Eclipsed",["Play Booster Box"]),
  mk("radiance","riftbound","Radiance",["Booster Box"]),
  mk("vendetta","riftbound","Vendetta",["Booster Box","Showdown Deck"]),
  mk("unleashed","riftbound","Unleashed",["Booster Box","Champion Deck"]),
  mk("spiritforged","riftbound","Spiritforged",["Booster Box","Champion Deck"]),
  mk("origins","riftbound","Origins",["Booster Box","Champion Deck"]),
  mk("fb10-cross-force","dragonball","FB10 Cross Force",["Booster Box"]),
  mk("fb09-dual-evolution","dragonball","FB09 Dual Evolution",["Booster Box"]),
  mk("fb11-brightness-of-hope","dragonball","FB11 Brightness of Hope",["Booster Box"]),
  mk("starter-decks-ex","dragonball","Starter Decks EX",[["Starter Deck EX","The Phase of Evolution (FS11)","Mazo de inicio deluxe, todo foil."],["Starter Deck EX","The Beat of Ki (FS12)","Mazo de inicio deluxe, todo foil."]])
];
// Fotos: assets/sets/<id>.png (logo de la gama) y assets/productos/<id-del-producto>.jpg (ver LEEME-FOTOS.txt)
const slug=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
SETS.forEach(s=>s.products.forEach(p=>p.id=s.id+"-"+slug(p.name)));
// Etiquetas de las gamas: NUEVO (lanzamiento reciente) y PRÓXIMAMENTE. Editá estas listas cuando cambie el stock.
const NUEVO=["pitch-black","op-17","el-hobbit","vendetta","fb10-cross-force","fb11-brightness-of-hope","colecciones-premium"];
const PROXIMO=["radiance","reality-fracture"];
SETS.forEach(s=>s.tag=PROXIMO.includes(s.id)?"Próximamente":NUEVO.includes(s.id)?"Nuevo":"");

// Info extra que se muestra en el modal de cada producto, según su tipo. Editá o agregá tipos.
const PINFO={
 "Booster Box":{que:"Una caja cerrada con todos los sobres de la expansión.",ideal:"Abrir muchos sobres, completar la colección de un set o jugar drafts y sealed."},
 "Elite Trainer Box":{que:"Una caja con sobres de la expansión, fundas, energías básicas, dados, marcadores y una caja para guardar todo.",ideal:"Quien empieza a coleccionar y quiere accesorios incluidos."},
 "Booster Bundle":{que:"Un pack con varios sobres de la misma expansión.",ideal:"Abrir sobres sin comprar una caja completa."},
 "Starter Deck":{que:"Un mazo armado, listo para jugar desde la primera partida.",ideal:"Aprender el juego o regalar un primer mazo."},
 "Starter Deck EX":{que:"Un mazo de inicio de edición deluxe, con todas las cartas foil.",ideal:"Quien quiere empezar con un mazo más vistoso."},
 "Play Booster Box":{que:"Una caja de Play Boosters, los sobres pensados para jugar.",ideal:"Drafts, sealed y armar mazos con cartas jugables."},
 "Collector Booster Box":{que:"Una caja de Collector Boosters, con más rarezas, foils y diseños especiales.",ideal:"Coleccionistas que buscan versiones especiales."},
 "Commander Deck":{que:"Un mazo ya armado para el formato Commander.",ideal:"Jugar en grupo sin armar el mazo desde cero."},
 "Showdown Deck":{que:"Un mazo armado para jugar de a dos.",ideal:"Jugar con un amigo sin construir mazos."},
 "Champion Deck":{que:"Un mazo armado alrededor de un campeón.",ideal:"Empezar con una estrategia clara."},
 "Illustration Box":{que:"Un producto de colección con arte especial de personajes.",ideal:"Coleccionistas y fans de los personajes."},
 "Colección premium":{que:"Una colección con cartas promo y sobres.",ideal:"Coleccionistas que buscan cartas exclusivas."},
 "Colección":{que:"Una colección especial de la expansión.",ideal:"Coleccionistas."},
 "Bundle":{que:"Un pack con varios Play Boosters de la expansión.",ideal:"Abrir sobres sin comprar una caja completa."},
 "Draft Night":{que:"Un producto pensado para organizar un draft entre amigos.",ideal:"Jugar un draft sin juntar sobres por separado."},
 "Scene Box":{que:"Una caja temática con sobres y cartas especiales.",ideal:"Quien busca un producto temático para jugar o coleccionar."}
};
