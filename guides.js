// GUÍAS. Cada guía abre un modal con la info completa. Editá, borrá o agregá libremente.
// Campos: id, game, title, summary (se ve en la lista), intro, seq (true = pasos numerados),
// points: [{t: título, d: texto, l: [lista opcional]}], tip (consejo final).
const GUIDE_GAMES={pokemon:{n:"Pokémon",c:"#ffcb05"},onepiece:{n:"One Piece",c:"#ff4d4d"},magic:{n:"Magic",c:"#e8a15a"},riftbound:{n:"Riftbound",c:"#37d4ff"},digimon:{n:"Digimon",c:"#4da3ff"}};

const G_POKEMON=[
{id:"pokemon-basico-fase-1-fase-2",title:"Pokémon Básico, Fase 1 y Fase 2",summary:"Cómo evolucionan los Pokémon y qué cambia en cada etapa.",
 intro:"Las cartas de Pokémon evolucionan para hacerse más fuertes. Conocé cómo funciona cada etapa.",
 points:[
  {t:"Básico: el punto de partida",d:"No evoluciona desde ningún Pokémon y es la base de tu estrategia.",l:["Podés usar tantos Pokémon Básicos distintos como quieras en tu mazo (hasta 4 copias de cada uno)."]},
  {t:"Fase 1",d:"Evoluciona desde un Pokémon Básico específico que ya esté en juego.",l:["Ofrece más PS, ataques más fuertes y habilidades mejoradas.","Solo podés tener hasta 4 copias con el mismo nombre en tu mazo."]},
  {t:"Fase 2",d:"Evoluciona desde un Pokémon de Fase 1 específico.",l:["Suele ser de los más poderosos, con ataques y habilidades muy estratégicas.","Máximo 4 copias con el mismo nombre en tu mazo."]}],
 tip:"Planificá tus evoluciones, administrá tus recursos y llevá a tus Pokémon hasta su máximo potencial."},
{id:"pokemon-leer-carta",title:"Cómo leer una carta Pokémon",summary:"Dónde ver los PS, el tipo, los ataques, la debilidad y la retirada.",
 intro:"Todas las cartas de Pokémon muestran la información en el mismo orden. Una vez que lo sabés, leer cualquier carta es fácil.",
 points:[
  {t:"Nombre y etapa",d:"Arriba a la izquierda: el nombre del Pokémon y si es Básico, Fase 1 o Fase 2."},
  {t:"PS",d:"Arriba a la derecha: los puntos de salud. Cuando el daño que recibe los alcanza, el Pokémon queda fuera de combate."},
  {t:"Tipo",d:"El símbolo junto a los PS indica su tipo de energía."},
  {t:"Ataques y habilidades",d:"Cada ataque muestra el costo en energías y el daño que hace. Muchos tienen efectos extra escritos debajo."},
  {t:"Debilidad, resistencia y retirada",d:"Abajo: contra qué tipo recibe más daño, contra cuál recibe menos y cuántas energías cuesta retirarlo."},
  {t:"Número de carta",d:"Abajo del todo: indica la expansión y el número dentro de ella."}],
 tip:"Leé siempre el texto completo de los ataques y habilidades antes de decidir tu jugada."},
{id:"pokemon-como-ganar",title:"Cómo se gana una partida de Pokémon",summary:"Las tres formas de ganar.",
 intro:"Hay tres formas de ganar una partida de Pokémon TCG. Tenerlas presentes te ayuda a decidir qué jugada conviene.",
 points:[
  {t:"Tomá todas tus cartas de premio",d:"Al empezar apartás 6 cartas de premio. Cada vez que dejás fuera de combate a un Pokémon rival, tomás premios. Si tomás todos, ganás."},
  {t:"Dejá al rival sin Pokémon en juego",d:"Si tu oponente se queda sin Pokémon en el campo (ni Activo ni en la Banca), ganás."},
  {t:"Que el rival no pueda robar",d:"Si al empezar su turno no le quedan cartas en el mazo para robar, pierde."}],
 tip:"Mirá siempre cuántas cartas de premio le faltan a cada uno: define qué tan arriesgado podés jugar."},
{id:"pokemon-turno",title:"Cómo es un turno en Pokémon",summary:"Qué hacés en cada turno, paso a paso.",seq:true,
 intro:"Todos los turnos siguen el mismo orden. Si lo aprendés, podés jugar tus primeras partidas sin perderte.",
 points:[
  {t:"Robá una carta",d:"Al empezar tu turno robás una carta del mazo."},
  {t:"Hacé tus acciones",d:"En el orden que quieras, podés:",l:["Jugar Pokémon Básicos a tu Banca.","Evolucionar a tus Pokémon.","Unir una carta de energía a uno de tus Pokémon.","Jugar cartas de Entrenador (Objetos, Partidarios, Estadios, Herramientas)."]},
  {t:"Retirá a tu Pokémon Activo (opcional)",d:"Una vez por turno podés cambiarlo por uno de la Banca pagando su costo de retirada."},
  {t:"Atacá",d:"Elegí un ataque de tu Pokémon Activo. Al atacar, tu turno termina."}],
 tip:"Hacé todas tus acciones antes de atacar: después de atacar ya no podés hacer más."},
{id:"pokemon-energias",title:"Los tipos de energía",summary:"Qué tipos existen y cómo se usan.",
 intro:"Las energías se unen a tus Pokémon para pagar el costo de sus ataques y también el de retirada.",
 points:[
  {t:"Los tipos",d:"Planta, Fuego, Agua, Rayo, Psíquico, Lucha, Oscuridad, Metálico y Dragón."},
  {t:"Incolora",d:"En los costos de ataque, el símbolo incoloro se paga con cualquier tipo de energía."},
  {t:"Una por turno",d:"Podés unir una carta de energía a uno de tus Pokémon por turno."},
  {t:"Combiná con tus Pokémon",d:"Elegí energías que coincidan con los ataques de los Pokémon de tu mazo."}],
 tip:"Para tu primer mazo, un solo tipo de energía hace todo más simple."},
{id:"pokemon-primer-mazo",title:"Cómo armar tu primer mazo Pokémon",summary:"Un mazo de 60 cartas: Pokémon, Entrenadores y Energías.",
 intro:"Un mazo se arma con 60 cartas divididas en tres categorías.",
 points:[
  {t:"Pokémon",d:"Es tu equipo. Incluí varios Básicos para poder empezar la partida, y sus evoluciones."},
  {t:"Entrenador",d:"Objetos, Partidarios, Estadios y Herramientas que te dan ayuda extra: robar cartas, buscar Pokémon, curar y más."},
  {t:"Energías",d:"Las que necesitan tus Pokémon para atacar."},
  {t:"Copias",d:"Podés tener hasta 4 copias de cartas con el mismo nombre. Las energías básicas no tienen límite."},
  {t:"Distribución de referencia",d:"Una proporción orientativa es 12 a 18 Pokémon, 25 a 30 Entrenadores y 10 a 15 Energías."}],
 tip:"Para empezar, armá un mazo de un solo tipo: es más simple de jugar y de entender."},
{id:"pokemon-etb",title:"Qué trae un Elite Trainer Box",summary:"Todo lo que viene en la caja.",
 intro:"El Elite Trainer Box (ETB) es una caja pensada para empezar a coleccionar y jugar, con todo lo necesario en un solo lugar.",
 points:[
  {t:"Sobres de la expansión",d:"Varios sobres de la expansión de esa caja."},
  {t:"Fundas",d:"Fundas con el arte de la expansión para proteger tu mazo."},
  {t:"Energías básicas",d:"Cartas de energía para armar tus mazos."},
  {t:"Dados y marcadores",d:"Para llevar la cuenta del daño y de los estados especiales."},
  {t:"Guía del jugador y caja",d:"Una guía con la información de la expansión y una caja para guardar todo."}],
 tip:"Es una muy buena opción para empezar: tenés accesorios y sobres en un solo producto."}
].map(g=>({...g,game:"pokemon"}));

const G_MAGIC=[
{id:"magic-que-es-el-mana",title:"¿Qué es el maná?",summary:"El recurso que usás para jugar tus cartas y los 5 colores.",
 intro:"El maná es el recurso con el que pagás tus cartas. Sin maná no jugás nada, por eso es lo primero que hay que entender.",
 points:[
  {t:"¿Qué es?",d:"Es el recurso que pagás para jugar hechizos y activar habilidades."},
  {t:"¿Cómo se consigue?",d:"Principalmente girando tierras. Cada tierra produce ciertos colores de maná."},
  {t:"Los 5 colores de maná",d:"Cada color tiene su estilo:",l:["Blanco: orden, protección y trabajo en equipo.","Azul: conocimiento, control y estrategia.","Negro: poder, sacrificio y ambición.","Rojo: velocidad, caos y daño directo.","Verde: naturaleza, crecimiento y fuerza."]},
  {t:"¿Para qué sirve?",d:"Permite pagar el coste de criaturas, conjuros, instantáneos, artefactos y otras cartas."}],
 tip:"Jugá suficientes tierras y planificá tus recursos para poder jugar tus cartas a tiempo."},
{id:"magic-tipos-de-cartas",title:"Tipos de cartas en Magic",summary:"Criaturas, instantáneos, conjuros, encantamientos y más, explicados fácil.",
 intro:"Cada carta de Magic tiene un tipo que define cuándo y cómo se juega. Estos son los principales.",
 points:[
  {t:"Criaturas",d:"Son tus principales unidades en el campo de batalla. Pueden atacar, defender y tienen habilidades especiales."},
  {t:"Instantáneos",d:"Se juegan en cualquier momento, incluso durante el turno de tu oponente. Son efectos rápidos y sorpresivos."},
  {t:"Conjuros",d:"Se juegan en tu turno y, una vez que se resuelven, su efecto se aplica y van al cementerio."},
  {t:"Encantamientos",d:"Permanecen en el campo de batalla y generan efectos continuos que benefician tu estrategia."},
  {t:"Artefactos",d:"Pueden generar maná, dar habilidades o tener efectos muy variados. Funcionan en casi todos los mazos."},
  {t:"Tierras",d:"Son la fuente de maná de tu mazo y te permiten jugar el resto de tus cartas. Hay distintos tipos, que producen diferentes colores."},
  {t:"Planeswalkers",d:"Poderosos aliados con habilidades únicas. Permanecen en el campo de batalla y podés activar sus habilidades cada turno."},
  {t:"Batallas",d:"Un tipo más reciente. Se juegan como una amenaza que tu oponente debe derrotar. Al ser derrotadas, se transforman en un poderoso permanente."}]},
{id:"magic-armar-mazo",title:"Cómo armar un mazo de Magic",summary:"Tamaño, copias, tierras y colores para empezar.",
 intro:"Un mazo con un plan claro rinde mucho más que uno lleno de cartas fuertes sueltas.",
 points:[
  {t:"Tamaño",d:"En los formatos de mazo de 60, como Standard, el mínimo es de 60 cartas."},
  {t:"Copias",d:"Podés usar hasta 4 copias de la misma carta. Las tierras básicas no tienen límite."},
  {t:"Tierras",d:"Una referencia habitual es de unas 24 tierras en un mazo de 60 cartas. Ajustalo según qué tan caro sea tu mazo."},
  {t:"Colores",d:"Para empezar, jugá uno o dos colores: es más fácil conseguir el maná que necesitás."},
  {t:"Plan de juego",d:"Elegí una idea (criaturas rápidas, control, etc.) y sumá cartas que la apoyen."}],
 tip:"Probalo jugando: si te quedás sin tierras o con la mano trabada, ajustá la cantidad."},
{id:"magic-commander",title:"Qué es Commander",summary:"El formato multijugador más popular.",
 intro:"Commander es un formato pensado para jugar en grupo, muy popular entre jugadores casuales y coleccionistas.",
 points:[
  {t:"El comandante",d:"Elegís una criatura legendaria que queda fuera del mazo y podés lanzar cuando quieras. Cada vez que la volvés a lanzar, pagás 2 de maná extra por cada vez anterior."},
  {t:"El mazo",d:"Son 100 cartas en total, sin repetir ninguna (salvo las tierras básicas), y solo de los colores de tu comandante."},
  {t:"Vida",d:"Cada jugador empieza con 40 puntos de vida."},
  {t:"Daño de comandante",d:"Si un mismo comandante te hace 21 de daño en total, perdés la partida."},
  {t:"Jugadores",d:"Se suele jugar de a 4, aunque también se puede de a 2."}],
 tip:"Es un formato social: acordá con tu mesa el nivel de poder de los mazos antes de jugar."},
{id:"magic-draft",title:"Cómo funciona un draft",summary:"Armás el mazo en el momento, eligiendo cartas de los sobres.",seq:true,
 intro:"En un draft no traés el mazo armado: lo construís en el momento con las cartas que vas eligiendo.",
 points:[
  {t:"Abrí un sobre",d:"Cada jugador abre un sobre, elige una carta y pasa el resto al jugador de al lado."},
  {t:"Repetí",d:"Se sigue eligiendo y pasando hasta que se acaban las cartas del sobre. Después se abre el siguiente."},
  {t:"Armá tu mazo",d:"Con las cartas que elegiste hacés un mazo de al menos 40 cartas, sumando tierras básicas."},
  {t:"A jugar",d:"Te enfrentás a los demás jugadores de la mesa con el mazo que armaste."}],
 tip:"No te cases con un solo color al principio: elegí las cartas más fuertes y definí tu mazo más adelante."},
{id:"magic-fases-turno",title:"Las fases de un turno",summary:"El orden de un turno en Magic.",seq:true,
 intro:"Cada turno de Magic se divide en fases. Saber qué se puede hacer en cada una evita errores.",
 points:[
  {t:"Inicio del turno",d:"Enderezás tus cartas, hay un momento de mantenimiento y robás una carta."},
  {t:"Fase principal 1",d:"Podés jugar una tierra por turno y lanzar hechizos."},
  {t:"Combate",d:"Declarás qué criaturas atacan y el rival decide cómo bloquear."},
  {t:"Fase principal 2",d:"Podés jugar lo que te falte después de combatir."},
  {t:"Fin del turno",d:"Se resuelven los efectos de fin de turno y descartás hasta quedarte con siete cartas en la mano."}],
 tip:"Pensá si te conviene jugar tus criaturas antes o después de atacar: cambia la información que le das al rival."},
{id:"magic-play-collector",title:"Play Booster y Collector Booster",summary:"Para qué sirve cada tipo de sobre.",
 intro:"Los dos son sobres de la misma expansión, pero están pensados para cosas distintas.",
 points:[
  {t:"Play Booster",d:"Es el sobre para jugar: ideal para drafts, sealed y para armar mazos con cartas jugables."},
  {t:"Collector Booster",d:"Es el sobre para coleccionar: más cartas raras, versiones foil y diseños especiales. Suele ser más caro."},
  {t:"¿Cuál elegir?",d:"Si querés jugar, un Play Booster. Si querés coleccionar y buscar versiones especiales, un Collector Booster."}],
 tip:"No todas las expansiones tienen los mismos productos: consultanos cuáles hay de cada una."}
].map(g=>({...g,game:"magic"}));

const G_ONEPIECE=[
{id:"onepiece-atacar-lider-o-personajes",title:"¿Cuándo atacar al Líder y cuándo atacar personajes?",summary:"Cómo decidir el objetivo de cada ataque según el estado de la partida.",
 intro:"Saber a quién atacar en cada momento es una de las decisiones más importantes del juego.",
 points:[
  {t:"Atacar al Líder",d:"Reducir los puntos de vida del Líder a 0 para ganar la partida. Conviene cuando:",l:["Tenés una buena ventaja en el campo.","Podés poner presión y acercarte a la victoria.","El oponente tiene pocos o ningún personaje para defender.","Tu mazo se enfoca en un juego agresivo."]},
  {t:"Atacar personajes",d:"Eliminar amenazas y controlar el juego. Conviene cuando:",l:["El oponente tiene personajes clave en el campo.","Querés evitar que use habilidades o efectos importantes.","Necesitás limpiar el campo y asegurar tu próxima jugada.","Querés controlar el ritmo de la partida."]},
  {t:"Un detalle importante",d:"Solo podés atacar a los personajes del rival que estén girados (descansados)."}],
 tip:"Atacar personajes te da control del campo, mientras que atacar al Líder te acerca a la victoria. La clave es encontrar el equilibrio según cada partida."},
{id:"onepiece-don",title:"Cómo administrar tus DON!!",summary:"Cómo usar este recurso turno a turno sin quedarte corto.",
 intro:"Los DON!! son el recurso de One Piece: sirven para pagar tus cartas y para potenciar a tus personajes.",
 points:[
  {t:"Tu mazo de DON!!",d:"Tenés un mazo aparte, con 10 cartas DON!!."},
  {t:"Cada turno",d:"Al empezar tu turno sumás 2 DON!! a tu área de costo. Quien juega primero suma solo 1 en su primer turno."},
  {t:"Para pagar",d:"Girás DON!! para pagar el costo de jugar personajes, eventos y escenarios."},
  {t:"Para potenciar",d:"Podés adjuntar DON!! a tu Líder o a tus personajes: cada uno da +1000 de poder durante tu turno."},
  {t:"Máximo",d:"Podés tener hasta 10 DON!! en tu área de costo."}],
 tip:"No gastes todos tus DON!! en jugar cartas si necesitás poder para atacar: pensá qué necesitás este turno."},
{id:"onepiece-ko",title:"Qué significa K.O. en One Piece",summary:"Cuándo ocurre, cómo se evita y qué cambia en la mesa.",
 intro:"K.O. es cuando un personaje es derrotado y sale del campo.",
 points:[
  {t:"¿Cómo ocurre?",d:"Cuando un personaje recibe un ataque de un personaje o Líder con poder igual o mayor al suyo. También puede ocurrir por efectos de cartas."},
  {t:"¿Qué pasa después?",d:"El personaje se va del campo y se descarta."},
  {t:"Efectos de K.O.",d:"Algunas cartas tienen efectos que se activan cuando son derrotadas."},
  {t:"¿Cómo se evita?",d:"Con un Blocker que reciba el ataque, sumando poder con DON!! o usando cartas Counter."},
  {t:"¿Y el Líder?",d:"Tu Líder no recibe K.O.: si un ataque lo conecta, perdés una carta de Vida."}],
 tip:"Antes de atacar, comparar el poder de tu atacante con el del objetivo evita perder personajes."},
{id:"onepiece-rush-blocker-banish",title:"Diferencia entre Rush, Blocker y Banish",summary:"Las tres palabras clave más usadas.",
 intro:"Estas tres palabras clave aparecen en muchísimas cartas. Cada una cambia cómo juega una carta.",
 points:[
  {t:"Rush",d:"El personaje puede atacar el mismo turno en que lo jugás, sin esperar al siguiente."},
  {t:"Blocker",d:"Cuando tu oponente ataca, podés girar este personaje para que él reciba el ataque en lugar del objetivo original."},
  {t:"Banish",d:"Si esta carta hace daño a la Vida del rival, esa carta se descarta en lugar de ir a su mano, y no activa su efecto Trigger."}],
 tip:"Rush sirve para presionar, Blocker para defender y Banish para evitar que el rival aproveche sus Triggers."},
{id:"onepiece-mejorar-starter-deck",title:"Cómo mejorar un Starter Deck",summary:"6 pasos para pasar de un mazo de inicio a uno más competitivo.",seq:true,
 intro:"Los Starter Deck vienen listos para jugar, pero se pueden mejorar mucho con pequeños cambios.",
 points:[
  {t:"Conocé la estrategia",d:"Analizá el plan de juego del mazo y entendé sus puntos fuertes y débiles."},
  {t:"Identificá qué falta",d:"Revisá qué cartas te limitan y qué situaciones te cuesta resolver: eliminación, robo, costo de DON!!, etc."},
  {t:"Agregá cartas clave",d:"Sumá cartas que mejoren la consistencia del mazo, como más robo, eliminación o personajes que sinergicen con tu Líder."},
  {t:"Mantené el equilibrio",d:"Conservá la esencia del mazo, pero ajustá el balance de cartas para que sea más estable y competitivo."},
  {t:"Probá y ajustá",d:"Jugá varias partidas, identificá qué funciona y hacé ajustes según tu experiencia."},
  {t:"Evolucioná tu mazo",d:"Con el tiempo podés seguir mejorándolo con cartas de nuevas expansiones."}]}
].map(g=>({...g,game:"onepiece"}));

const G_RIFTBOUND=[
{id:"riftbound-estrategias-principiantes",title:"Estrategias para principiantes en Riftbound",summary:"6 consejos para empezar con el pie derecho.",seq:true,
 intro:"Aprendé, jugá, mejorá y forjá tu leyenda. Estos consejos te ayudan en tus primeras partidas.",
 points:[
  {t:"Conocé a tu campeón",d:"Aprendé sus habilidades, fortalezas y cómo se adapta a tu estilo de juego. Tu campeón define el rumbo de tu estrategia."},
  {t:"Controlá tus recursos",d:"Administrá bien tus recursos y tus cartas. Jugá de forma eficiente y evitá gastar más de lo necesario."},
  {t:"Construí sinergias",d:"Incluí cartas que funcionen bien juntas. Las sinergias potencian tu estrategia y te dan más opciones."},
  {t:"Pensá en la curva",d:"Equilibrá cartas de bajo, medio y alto costo. Una buena curva te permite mantener el control en todas las etapas de la partida."},
  {t:"Adaptá tu estrategia",d:"Observá cómo juega tu oponente y ajustá tu plan. La flexibilidad es clave para superar distintos desafíos."},
  {t:"Practicá y disfrutá",d:"La mejor forma de mejorar es jugar. Ganá experiencia, probá nuevas cartas y encontrá tu propio estilo en Runaterra."}]},
{id:"riftbound-control-agresivo-combo",title:"¿Control, agresivo o combo?",summary:"Los estilos de mazo y cuál se adapta a cómo jugás.",
 intro:"Casi todos los mazos entran en uno de estos tres estilos. Elegir el que va con vos hace que armar el mazo sea mucho más fácil.",
 points:[
  {t:"Agresivo",d:"Busca presionar desde el principio con cartas baratas y terminar la partida rápido. El riesgo: si el rival se defiende bien, te podés quedar sin recursos."},
  {t:"Control",d:"Responde a las jugadas del rival y gana a largo plazo con cartas más poderosas. El riesgo: si jugás muy pasivo, el rival toma ventaja."},
  {t:"Combo",d:"Junta varias cartas que, combinadas, generan un efecto muy fuerte. El riesgo: depende de conseguir las piezas y es más frágil si te interrumpen."}],
 tip:"Si estás empezando, el estilo agresivo suele ser el más fácil de manejar."},
{id:"riftbound-errores-comunes",title:"Errores comunes de principiantes en Riftbound",summary:"Lo que más se repite en las primeras partidas y cómo evitarlo.",
 intro:"Todos cometemos estos errores al empezar. Conocerlos de antemano te ahorra varias partidas.",
 points:[
  {t:"No leer bien las cartas",d:"El texto de cada carta define cuándo y cómo funciona. Leelo completo antes de jugarla."},
  {t:"Gastar todo en un turno",d:"Pensá también en el turno siguiente antes de usar todos tus recursos."},
  {t:"Mazo sin enfoque",d:"Un mazo de cartas sueltas, sin plan, rinde menos que uno con un objetivo claro."},
  {t:"Ignorar la curva",d:"Si todas tus cartas son caras, tardás demasiado en jugar. Si todas son baratas, te quedás sin poder."},
  {t:"No adaptarte al rival",d:"Observá cómo juega tu oponente y cambiá tu plan si hace falta."}],
 tip:"Después de cada partida, preguntate qué cambiarías: es la forma más rápida de mejorar."},
{id:"riftbound-cartas-clave",title:"Cartas clave que todo jugador debería conocer",summary:"Los tipos de cartas que conviene tener en cuenta al armar tu mazo.",
 intro:"Más allá de las cartas favoritas de cada uno, hay tipos de cartas que conviene tener en cuenta cuando armás tu mazo.",
 points:[
  {t:"Tu campeón",d:"Es la carta central de tu mazo: define tu estilo y tu estrategia."},
  {t:"Cartas de bajo costo",d:"Te permiten empezar a jugar desde el primer turno y no quedarte atrás."},
  {t:"Respuestas",d:"Cartas que te ayudan a frenar las amenazas del rival."},
  {t:"Robo y recursos",d:"Cartas que te dan más opciones o más recursos para los turnos siguientes."},
  {t:"Cartas de cierre",d:"Cartas poderosas que te ayudan a terminar la partida."}],
 tip:"Revisá la lista de cartas de cada expansión para encontrar las que mejor combinan con tu campeón."},
{id:"riftbound-sinergias",title:"Sinergias entre campeones y unidades",summary:"Cómo funcionan y cómo armar mazos alrededor de ellas.",
 intro:"Una sinergia es cuando dos o más cartas funcionan mejor juntas que por separado.",
 points:[
  {t:"Empezá por el campeón",d:"Leé sus habilidades y buscá cartas que las aprovechen."},
  {t:"Elegí unidades que se complementen",d:"Las que comparten efectos o ayudan a lo mismo se potencian entre sí."},
  {t:"Buscá que se repitan",d:"Sumá varias cartas que cumplan la misma función para que la sinergia aparezca seguido."},
  {t:"No te pases",d:"Con demasiadas piezas especiales, el mazo se vuelve difícil de jugar."}],
 tip:"Una buena sinergia hace que cada carta que robás sea útil."}
].map(g=>({...g,game:"riftbound"}));

const G_DIGIMON=[
{id:"digimon-primer-mazo",title:"Cómo construir tu primer mazo Digimon",summary:"Paso a paso para empezar a jugar.",seq:true,
 intro:"Paso a paso para armar un mazo y empezar a jugar.",
 points:[
  {t:"Elegí tu color y estrategia",d:"Cada color tiene un estilo de juego distinto. Elegí el que más se adapte a tu forma de jugar."},
  {t:"Definí tu Digimon principal",d:"Elegí una línea de evolución (por ejemplo, Agumon, Greymon y WarGreymon) y construí tu mazo alrededor de ella."},
  {t:"Incluí la distribución adecuada",d:"El mazo principal tiene 50 cartas y, aparte, podés llevar Digitama. Una distribución de referencia:",l:["Digitama: 4 a 5.","Digimon: 15 a 20.","Opciones: 8 a 12.","Tamer: 4 a 8."]},
  {t:"Buscá sinergias entre cartas",d:"Incluí cartas que se complementen para aprovechar efectos, reducir costos y mantener tu estrategia activa."},
  {t:"Probá y ajustá",d:"Jugá, analizá tus partidas y hacé cambios. La clave está en la práctica y en adaptar el mazo a tu estilo."},
  {t:"Disfrutá el juego",d:"Lo más importante es divertirte y seguir aprendiendo. Cada partida es una nueva oportunidad de evolucionar."}],
 tip:"No existe un mazo perfecto, solo mejores decisiones."}
].map(g=>({...g,game:"digimon"}));

// Se intercalan los juegos para que "Todas" muestre variedad en cada página.
const GUIDES=(()=>{const gs=[G_POKEMON,G_ONEPIECE,G_MAGIC,G_RIFTBOUND,G_DIGIMON],out=[];
  for(let i=0;gs.some(g=>i<g.length);i++)gs.forEach(g=>{if(g[i])out.push(g[i])});return out})();
