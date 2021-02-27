const books = [
    {
        author: "Federico García Lorca",
        title: "Romancero gitano",
        content: [
            [
                "La luna vino a la fragua,",
                "con su polisón de nardos.",
                "El niño la mira mira.",
                "El niño la está mirando.",
                "En el aire conmovido",
                "mueve la luna sus brazos",
                "y enseña, lúbrica y pura,",
                "sus senos de duro estaño.",
                "Huye luna, luna, luna.",
                "Si vinieran los gitanos,",
                "harían con tu corazón",
                "collares y anillos blancos.",
                "Niño, déjame que baile.",
                "Cuando vengan los gitanos,",
                "te encontrarán sobre el yunque",
                "con los ojillos cerrados.",
                "Huye luna, luna, luna,",
                "que ya siento sus caballos.",
                "Niño, déjame, no pises",
                "mi blancor almidonado."
            ],
            [
                "El jinete se acercaba",
                "tocando el tambor del llano.",
                "Dentro de la fragua el niño,",
                "tiene los ojos cerrados."

            ],
            [
                "Por el olivar venían,",
                "bronce y sueño, los gitanos.",
                "Las cabezas levantadas",
                "y los ojos entornados."
            ],
            [
                "Cómo canta la zumaya,",
                "¡ay cómo canta en el árbol!",
                "Por el cielo va la luna",
                "con un niño de la mano.	"
            ],
            [
                "Dentro de la fragua lloran,",
                "dando gritos, los gitanos.",
                "El aire la vela, vela.",
                "El aire la está velando."
            ],
            [
                "Su luna de pergamino",
                "Preciosa tocando viene",
                "por un anfibio sendero",
                "de cristales y laureles.",
                "El silencio sin estrellas,",
                "huyendo del sonsonete,",
                "cae donde el mar bate y canta",
                "su noche llena de peces.",
                "En los picos de la sierra",
                "los carabineros duermen",
                "guardando las blancas torres",
                "donde viven los ingleses.",
                "Y los gitanos del agua	",
                "levantan por distraerse,",
                "glorietas de caracolas",
                "y ramas de pino verde."
            ],
            [
                "Niña, deja que levante",
                "tu vestido para verte.",
                "Abre en mis dedos antiguos",
                "la rosa azul de tu vientre."
            ],
            [
                "Preciosa tira el pandero",
                "y corre sin detenerse.",
                "El viento-hombrón la persigue",
                "con una espada caliente."
            ],
            [
                "Frunce su rumor el mar.",
                "Los olivos palidecen.",
                "Cantan las flautas de umbría",
                "y el liso gong de la nieve."

            ],
            [
                "¡Preciosa, corre, Preciosa,",
                "que te coge el viento verde!",
                "¡Preciosa, corre, Preciosa!",
                "¡Míralo por dónde viene!",
                "Sátiro de estrellas bajas",
                "con sus lenguas relucientes."
            ],
            [
                "Preciosa, llena de miedo,",
                "entra en la casa que tiene,",
                "más arriba de los pinos,",
                "el cónsul de los ingleses."
            ],
            [

                "Asustados por los gritos",
                "tres carabineros vienen,",
                "sus negras capas ceñidas",
                "y los gorros en las sienes."

            ],

            [
                "El inglés da a la gitana",
                "un vaso de tibia leche,",
                "y una copa de ginebra",
                "que Preciosa no se bebe."

            ],
            [
                "Y mientras cuenta, llorando,",
                "su aventura a aquella gente,",
                "en las tejas de pizarra",
                "el viento, furioso, muerde."


            ],

            [
                "En la mitad del barranco",
                "las navajas de Albacete,",
                "bellas de sangre contraria,",
                "relucen como los peces.",
                "Una dura luz de naipe",
                "recorta en el agrio verde,",
                "caballos enfurecidos",
                "y perfiles de jinetes.",
                "En la copa de un olivo",
                "lloran dos viejas mujeres.",
                "El toro de la reyerta",
                "se sube por las paredes.",
                "Ángeles negros traían",
                "pañuelos y agua de nieve.",
                "Ángeles con grandes alas",
                "de navajas de Albacete.",
                "Juan Antonio el de Montilla",
                "rueda muerto la pendiente,",
                "su cuerpo lleno de lirios",
                "y una granada en las sienes.",
                "Ahora monta cruz de fuego,",
                "carretera de la muerte."


            ],

            [
                "El juez, con guardia civil,",
                "por los olivares viene.",
                "Sangre resbalada gime",
                "muda canción de serpiente.",
                "Señores guardias civiles:",
                "aquí pasó lo de siempre.",
                "Han muerto cuatro romanos",
                "y cinco cartagineses."

            ],
            [
                "La tarde loca de higueras",
                "y de rumores calientes",
                "cae desmayada en los muslos",
                "heridos de los jinetes.",
                "Y ángeles negros volaban",
                "por el aire del poniente.",
                "Ángeles de largas trenzas",
                "y corazones de aceite."


            ],

            [
                "Verde que te quiero verde.",
                "Verde viento.Verdes ramas.",
                "El barco sobre la mar",
                "y el caballo en la montaña.",
                "Con la sombra en la cintura",
                "ella sueña en su baranda,",
                "verde carne, pelo verde,",
                "con ojos de fría plata.",
                "Verde que te quiero verde.",
                "Bajo la luna gitana,",
                "las cosas la están mirando",
                "y ella no puede mirarlas."


            ],
            [
                "Verde que te quiero verde.	",
                "Grandes estrellas de escarcha,",
                "vienen con el pez de sombra	",
                "que abre el camino del alba.",
                "La higuera frota su viento",
                "con la lija de sus ramas,",
                "y el monte, gato garduño", ,
                "eriza sus pitas agrias.",
                "¿Pero quién vendrá ?¿Y por dónde...?",
                "Ella sigue en su baranda,",
                "verde carne, pelo verde,",
                "soñando en la mar amarga.",
                "Compadre, quiero cambiar",
                "mi caballo por su casa,",
                "mi montura por su espejo,",
                "mi cuchillo por su manta.",
                "Compadre, vengo sangrando,",
                "desde los puertos de Cabra.",
                "Si yo pudiera, mocito,",
                "ese trato se cerraba.",
                "Pero yo ya no soy yo,",
                "ni mi casa es ya mi casa.",
                "Compadre, quiero morir",
                "decentemente en mi cama.",
                "De acero, si puede ser,",
                "con las sábanas de holanda.",
                "¿No ves la herida que tengo",
                "desde el pecho a la garganta?",
                "Trescientas rosas morenas",
                "lleva tu pechera blanca.",
                "Tu sangre rezuma y huele",
                "alrededor de tu faja.",
                "Pero yo ya no soy yo,",
                "ni mi casa es ya mi casa.",
                "Dejadme subir al menos",
                "hasta las altas barandas,",
                "¡dejadme subir!, dejadme",
                "hasta las verdes barandas.",
                "Barandales de la luna",
                "por donde retumba el agua."


            ],

            [
                "Ya suben los dos compadres",
                "hacia las altas barandas.",
                "Dejando un rastro de sangre.",
                "Dejando un rastro de lágrimas.",
                "Temblaban en los tejados",
                "farolillos de hojalata.",
                "Mil panderos de cristal,",
                "herían la madrugada."

            ],

            [
                "[Verde que te quiero verde,",
                "verde viento, verdes ramas.",
                "Los dos compadres subieron.",
                "El largo viento, dejaba",
                "en la boca un raro gusto",
                "de hiel, de menta y de albahaca.",
                "¡Compadre! ¿Dónde está, dime ?",
                "¿Dónde está tu niña amarga ?",
                "¡Cuántas veces te esperó!",
                "¡Cuántas veces te esperara,",
                "cara fresca, negro pelo,",
                "en esta verde baranda!]"]
            ,
            [
                "Sobre el rostro del aljibe",
                "se mecía la gitana.",
                "Verde carne, pelo verde,",
                "con ojos de fría plata.",
                "Un carámbano de luna",
                "la sostiene sobre el agua.",
                "La noche se puso íntima",
                "como una pequeña plaza.",
                "Guardias civiles borrachos",
                "en la puerta golpeaban.",
                "Verde que te quiero verde.",
                "Verde viento.Verdes ramas.",
                "El barco sobre la mar.",
                "Y el caballo en la montaña."
            ]
        ]

    }
    ,

    {
        author: "Federico García Lorca",
        title: "Romancero gitano",
        content:
            [

                [
                    "Asesinado por el cielo,",
                    "entre las formas que van hacia la sierpe",
                    "y las formas que buscan el cristal,",
                    "dejaré caer mis cabellos."
                ]
                ,
                [
                    "Con el árbol de muñones que no canta",
                    "y el niño con el blanco rostro de huevo."
                ],

                [
                    "Con los animalitos de cabeza rota",
                    "y el agua harapienta de los pies secos."
                ]
                ,
                [
                    "Con todo lo que tiene cansancio sordomudo",
                    "y mariposa ahogada en el tintero."
                ]
                ,
                [
                    "Tropezando con mi rostro distinto de cada día.",

                    "¡Asesinado por el cielo!"
                ]
                ,
                [
                    "Aquellos ojos míos de mil novecientos diez",
                    "no vieron enterrar a los muertos,",
                    "ni la feria de ceniza del que llora por la madrugada,",
                    "ni el corazón que tiembla arrinconado como un caballito de mar."
                ]
                ,
                [
                    "Aquellos ojos míos de mil novecientos diez",
                    "vieron la blanca pared donde orinaban las niñas,",
                    "el hocico del toro, la seta venenosa",
                    "y una luna incomprensible que iluminaba por los rincones",
                    "los pedazos de limón seco bajo el negro duro de las botellas."
                ]
                ,
                [
                    "Aquellos ojos míos en el cuello de la jaca,",
                    "en el seno traspasado de Santa Rosa dormida,",
                    "en los tejados del amor, con gemidos y frescas manos,",
                    "en un jardín donde los gatos se comían a las ranas."
                ]
                ,
                [
                    "Desván donde el polvo viejo congrega estatuas y musgos,",
                    "cajas que guardan silencio de cangrejos devorados",
                    "en el sitio donde el sueño tropezaba con su realidad.",
                    "Allí mis pequeños ojos."
                ]
                ,
                [
                    "No preguntarme nada.He visto que las cosas",
                    "cuando buscan su curso encuentran su vacío.	",
                    "Hay un dolor de huecos por el aire sin gente",
                    "y en mis ojos criaturas vestidas ¡sin desnudo!",
                ]
                ,
                [
                    "Enrique, Emilio, Lorenzo.",
                    "Estaban los tres helados:",
                    "Enrique por el mundo de las camas;",
                    "Emilio por el mundo de los ojos y las heridas de las manos,",
                    "Lorenzo por el mundo de las universidades sin tejados."
                ]
                ,
                [
                    "Lorenzo, Emilio, Enrique.",
                    "Estaban los tres quemados:",
                    "Lorenzo por el mundo de las hojas y las bolas de billar;",
                    "Emilio por el mundo de la sangre y los alfileres blancos,",
                    "Enrique por el mundo de los muertos y los periódicos abandonados."
                ]
                ,
                [
                    "Lorenzo, Emilio, Enrique.",
                    "Estaban los tres enterrados:",
                    "Lorenzo en un seno de Flora;",
                    "Emilio en la yerta ginebra que se olvida en el vaso,",
                    "Enrique en la hormiga, en el mar y en los ojos vacíos de los pájaros."
                ]
                ,
                [
                    "Lorenzo, Emilio, Enrique.",
                    "Fueron los tres en mis manos",
                    "tres montañas chinas,",
                    "tres sombras de caballo,",
                    "tres paisajes de nieve y una cabaña de azucenas",
                    "por los palomares donde la luna se pone plana bajo el gallo."
                ]
                ,
                [
                    "Uno y uno y uno.",
                    "Estaban los tres momificados,",
                    "con las moscas del invierno,",
                    "con los tinteros que orina el perro y desprecia el vilano,",
                    "con la brisa que hiela el corazón de todas las madres,",
                    "por los blancos derribos de Júpiter donde meriendan muerte los borrachos."]
                ,
                [
                    "Tres y dos y uno.",
                    "Los vi perderse llorando y cantando",
                    "por un huevo de gallina,",
                    "por la noche que enseñaba su esqueleto de tabaco,",
                    "por mi dolor lleno de rostros y punzantes esquirlas de luna,",
                    "por mi alegría de ruedas dentadas y látigos,",
                    "por mi pecho turbado por las palomas,",
                    "por mi muerte desierta con un solo paseante equivocado."
                ]
                ,
                [
                    "Yo había matado la quinta luna",
                    "y bebían agua por las fuentes los abanicos y los aplausos.",
                    "Tibia leche encerrada de las recién paridas",
                    "agitaba las rosas con un largo dolor blanco.",
                    "Enrique, Emilio, Lorenzo.",
                    "Diana es dura,",
                    "pero a veces tiene los pechos nublados.",
                    "Puede la piedra blanca latir en la sangre del ciervo",
                    "y el ciervo puede soñar por los ojos de un caballo."
                ]
                ,
                [
                    "Cuando se hundieron las formas puras	",
                    "bajo el cri cri de las margaritas,",
                    "comprendí que me habían asesinado.",
                    "Recorrieron los cafés y los cementerios y las iglesias,",
                    "abrieron los toneles y los armarios,",
                    "destrozaron tres esqueletos para arrancar sus dientes de oro.	",
                    "Ya no me encontraron.",
                    "¿No me encontraron ?",
                    "No.No me encontraron.",
                    "Pero se supo que la sexta luna huyó torrente arriba,",
                    "y que el mar recordó ¡de pronto!,",
                    "los nombres de todos sus ahogados."
                ]



            ]
    }]