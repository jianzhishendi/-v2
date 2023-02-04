const e="Genshin Impact Wish Simulator",a="Personaggio",i="Arma",t="Vision",n="Anemo",o="Cryo",r="Dendro",s="Electro",l="Hydro",c="Geo",p="Pyro",u="Bow",d="Catalyst",m="Claymore",g="Sword",v="Polearm",b="Extra",h="Ottenuto",f="Attendere",P="Connection Failed!",y="Conferma",z="Annulla",w="Tutte le risorse usate in questo sito sono di propriet\xE0 di Mihoyo.",S="Questa \xE8 un'applicazione fatta unicamente dai fan, divertiti !",C="Premi in un punto qualsiasi dell'area vuota per continuare",q="Instructions to Install to Home Screen/Desktop",N="Condividi",T="Scatta una Foto",F="Catturare",I="Premio per la prima condivisione : {qty}",W="Versione",E="Dona",A={wishTitle:"Wish",rollButton:"Wish {count}",stellaFortuna:"Stella Fortuna",banner:{text:"Banner",allBanner:"Tutti i Banner",previous:"Banner Precedente",findBanner:"Trova un Banner",group:"Gruppo",events:"Wish dell'Evento del Personaggio",beginner:"Wish&nbsp;per Principianti",weapons:"Wish per Armi",standard:"Wish Standard",wishDescription:"Ogni 10 wish se ne ha almeno uno a 4 o pi\xF9 stelle",novice:"Wish per Principianti",up:"UP!",beginnerSet:"10 set hanno il 20% di sconto. Per i primi 10 set potrai ricevere {character}.",beginnerNote:'"Come farebbe una cameriera rispettosa."',beginnerChance:"Chance Rimaste: {chances}",standardNote:"I wish standard non hanno una scadenza.",allWeaponTypes:"Tutti i Tipi di Armi",etc:"ecc.",probIncreased:"Probabilit\xE0 aumentata !",eventNote:"I personaggi a 5 stelle esclusivi dell'evento possono essere ottenuti solo nel wish specifico durante il periodo/i determinato.",viewDetails:"Visualizza i Dettagli per maggiori informazioni.",name:{wanderlust:"Wanderlust Invocation","epitome-invocation":"Incarnazione divina","adrift-in-the-harbor":"Adrift&nbsp;in The Harbor","azure-excursion":"Azure Excursion","ballad-in-goblets":"Ballad in Goblets","born-of-ocean-swell":"Born of Ocean Swell","dance-of-lantern":"Dance of Lantern","discerner-of-enigmas":"Discerner of Enigmas","drifting-luminescence":"Drifting Luminescence","everbloom-violet":"Everbloom Violet","farewell-of-snezhnaya":"Farewell of Snezhnaya","from-ashes-reborn":"Rinato dalle ceneri","gentry-of-hermitage":"Gentry of Hermitage","invitation-to-mundane-life":"Invitation&nbsp;to Mundane Life","leaves-in-the-wind":"Leaves in The Wind","moment-of-bloom":"Moment of Bloom","oni_s-royale":"Contesa di Oni","reign-of-serenity":"Reign of Serenity","secretum-secretorum":"Secretum Secretorum","sparkling-steps":"Sparkling Steps","tapestry-of-golden-flames":"Tapestry&nbsp;of Golden Flames","the-heron_s-court":"The Heron's Court","the-moongrass-enlightenment":"The&nbsp;Moongrass' Enlightenment","the-transcendent-one-returns":"The&nbsp;Transcendent One Returns","twilight-arbiter":"Twilight Arbiter","twirling-lotus":"Twirling Lotus","viridescent-vigil":"Viridescent Vigil"}},epitomizedPath:{text:"Epitomized Path",fatePoint:"Punti Fato",cancelPrompt:"Desideri cancellare il tuo Percorso attuale ?",cancelDesc:"La cancellazione azzerer\xE0 i Punti Fato accumulati",selectWeapon:"Seleziona l'Arma",chartCourseOf:"Grafico del Percorso per {target}",cancelCourse:"Annulla Percorso",chartCourse:"Grafico del Percorso",courseSetFor:"Percorso deciso per: {selectedCourse}",description:[`"Epitomized Path" \xE8 una meccanica dei desideri per "Epitome Invication". I viaggiatori possono tracciare un percorso verso un'arma a 5 stelle che sperano di ottenere.`,"Una volta che avrai tracciato un percorso verso l'arma scelta, otterrai un Punto Fato se <span> riceverai un'arma a 5 stelle che non \xE8 quella che hai scelto</span>. Puoi ottenere un massimo di 2 Punti Fato.",'Una volta che avrai raggiunto la quantit\xE0 massima di Punti Fato, la prossima arma a 5 stelle che sceglierai sar\xE0 quella scelta con "Epitomized Path".',"Quando otterrai l'arma scelta in Epitome Invocation con Epitomized Path, <span> i Punti Fato accumulati verranno cancellati</span>.","Se non usi Epitomized Path per ottenere un'arma, non accumulerai Punti Fato.","Il percorso tracciato verso un'arma pu\xF2 essere modificato o annullato. Tuttavia, dopo averlo fatto, tutti i Punti Fato correnti verranno cancellati.","Al termine del periodo di Epitome Invocation, tutti i Punti Fato correnti verranno cancellati."]},result:{skip:"Salta",meteorFailed:"Errore nel caricamento dell'animazione della Meteora",new:"Nuovo",convertion:"Conversione",title:"Risultato del Wish per {item} e altri"}},O={heading:"Outfit dei personaggi",default:"Default",setOutfit:"Seleziona l'Outfit",owned:"Gi\xE0 in possesso",purchasePrompt:"Non hai ancora un personaggio per questo outfit, sei sicuro di volerlo acquistare?",promptInfo:"Potrai ancora usare questo outfit dopo aver ottenuto il personaggio giusto",item:{"5-star-outrider":{name:"5-Star Outrider"},"favonian-fevotion":{name:"Favonian Devotion"},"flowing-fate":{name:"Flowing Fate"},"executor_s-thorns":{name:"Executor's Thorns"},"sea-breeze-dandelion":{name:"Sea Breeze Dandelion",description:"L'outfit estivo di Jean. Leggero e alla moda, ma non per questo poco elegante. La scelta perfetta per una gita al mare."},"summertime-sparkle":{name:"Summertime Sparkle",description:"L'outfit da spiaggia di Barbara. Questa graziosa gonna trabocca di vitalit\xE0 estiva e porta con s\xE9 una fresca brezza oceanica."},"opulent-splendor":{name:"Opulent Splendor",description:"L'outfit formale di Keqing. Nella splendida alba di Lantern Rite, i fili intrecciati in giorni di duro lavoro si uniscono in un aspetto leggero ma magnifico."},"orchid_s-evening-gown":{name:"Orchid's Evening Gown",description:"L'outfit formale di Ningguang. La lunga gonna ciano mette in evidenza le sue eleganti curve, e le ali di farfalla alle caviglie conferiscono un leggero tocco di grazia."},"ein-immernachtstraum":{name:"Ein Immernachtstraum",description:"L'outfit da cerimonia di Prinzessin. Possa, lei che \xE8 nobile, conservare per sempre il suo coraggio, la sua sincerit\xE0 e la sua gentilezza, in modo tale che nessun male possa mai sopraffarla."},"red-dead-of-night":{name:"Red Dead of Night",description:"Uno degli abiti che indossa Diluc durante le azioni segrete, ricorda una fiamma che danza nell'ombra. Le tracce rosso cremisi che lascia ai marigni della visuale del nemico sfregiano per sempre i loro incubi."}}},R={text:"Dettagli",promotional:"Promotional Items",itemlist:"List of Items",increasedRate:"Aumento del Tasso di Caduta",percentageDrop:"Percentuale di caduta di oggetti a {rarity} stelle: {percentage}",wishDetails:"Dettagli dei Wish",probInfo:"Probabilit\xE0 base di caduta di oggetti a {rarity} stelle: {singlePercentage} (Incl. guarantee: {avgPercentage})",itemWishFor:"Oggetto desiderato :",itemType:"Tipo dell'Oggetto",itemName:"Nome dell'Oggetto",beginnerInfo:"Nessun limite di tempo (si chiude dopo 20 wish)",limited:"Evento a Tempo Limitato",permanent:"Permanente",alert:"\u203B Questo \xE8 un {wishName}. La garanzia dei desideri viene accumulata solo all'interno di questo evento ed \xE8 indipendente dalle garanzie di altri desideri.",beginner:["Il <span> Wish </span> per principianti non ha limiti di tempo ed \xE8 rivolto ai viaggiatori che sono atterrati di recente a Teyvat. Sono disponibili personaggi e armi non promozionali. <br /> Nel Wish per principianti, i set da 10 wish costano il <span> 20%</span> in meno di Acquaint Fate, e il tuo primo set da 10 wish includer\xE0 sicuramente {character} , mentre il tuo secondo set da 10 wish includer\xE0 sicuramente un <span> altro </span> personaggio min. a 4 stelle! Il Wish per Principianti sparisce dopo <span> 20 </span> tentativi. Dopo essere sparito, la pagina scomparir\xE0.","\u203B Nella maggior parte dei casi, la probabilit\xE0 di base di tutti i personaggi e le armi \xE8 distribuita uniformemente. Se \xE8 in vigore un boost o una garanzia, fare riferimento alle regole corrispondenti.","\u3013Regole\u3013","Probabilit\xE0 base di vincere un personaggio a 5 stelle = <span> 0.600%</span> <br /> Probabilit\xE0 base di vincere un personaggio a 4 stelle = <span> 5.100%</span>; probabilit\xE0 consolidata (incl. garanzia) = <span> 13.000%</span>;"],standard:['"{bannerName}" \xE8 un wish standard senza limiti di tempo. Sono disponibili personaggi e armi non esclusivi per gli eventi.<br/> In questo wish, vincerai <span>sicuramente</span> un oggetto a 4 o pi\xF9 stelle almeno una volta ogni 10 tentativi.',"\u203BNella maggior parte dei casi, la probabilit\xE0 base di vincere qualsiasi personaggio o arma \xE8 distribuita uniformemente. Se \xE8 attivo un potenziamento o una garanzia fare riferimento alle rispettive regole.","\u3013Regole\u3013","Probabilit\xE0 base di vincere un oggetto a 5 stelle = <span>0.600%</span>; probabilit\xE0 base di vincere un personaggio a 5 stelle = <span>0.300%</span>, e probabilit\xE0 base di vincere un'arma a 5 stelle = <span>0.300%</span>; probabilit\xE0 consolidata (incl. garanzia) di vincere un oggetto a 5 stelle = <span>1.600%</span>; \xE8 assicurata la vittoria di un oggetto a 5 stelle almeno una volta ogni <span>90</span> tentativi. <br> Probabilit\xE0 base di vincere un oggetto a 4 stelle = <span>5.100%</span>; probabilit\xE0 base di vincere un personaggio a 4 stelle = <span>2.550%</span>, e probabilit\xE0 base di vincere un'arma a 4 stelle = <span>2.550%</span>; probabilit\xE0 consolidata (incl. garanzia) di vincere un oggetto a 4 stelle = <span>13.000%</span>; \xE8 assicurata la vittoria di un oggetto a 4 o pi\xF9 stelle almeno una volta ogni <span>10</span> tentativi; probabilit\xE0 di vincere un oggetto a 4 stelle grazie alla garanzia = <span>99.400%</span>, e probabilit\xE0 di vincere un oggetto a 5 stelle grazie alla garanzia = <span>0.600%</span>. "],events:[`L'Event Wish "{bannerName}" \xE8 disponibile ora. Durante questo evento, il personaggio a 5 stelle <span>esclusivo dell'evento</span> {featuredCharacter} come i personaggi a 4 stelle {rateupCharacters} riceveranno un <span>enorme aumento della percentuale di ottenimento</span>! <br/> <span> \u203B Tra questi personaggi, il personaggio esclusivo dell'evento non sar\xE0 disponibile nel wish "Wanderlust Invocation" standard.</span>`,"\u203B Nella maggior parte dei casi, la probabilit\xE0 base di vincere qualsiasi personaggio o arma \xE8 distribuita uniformemente. Se \xE8 attivo un potenziamento o una garanzia fare riferimento alle rispettive regole.","\u3013Regole\u3013","Oggetti a 5 stelle",`Per l'Event Wish "{bannerName}": Probabilit\xE0 base di vincere un personaggio a 5 stelle = <span>0.600%</span>; probabilit\xE0 consolidata (incl. garanzia) = <span>1.600%</span>; \xE8 assicurata la vittoria di un personaggio a 5 stelle almeno una volta ogni <span>90</span> tentativi.<br/> C'\xE8 un <span>50.000%</span> di possibilit\xE0 che il primo oggetto a 5 stelle vinto sia il personaggio promozionale {featuredCharacter}. Se il primo personaggio a 5 stelle vinto in questo evento non \xE8 il personaggio promozionale, allora il prossimo personaggio a 5 stelle che vincerai sar\xE0 <span>sicuramente</span> il personaggio promozionale.`,"Oggetti a 4 stelle",`Per l'Event Wish  "{bannerName}": Probabilit\xE0 base di vincere un oggetto a 4 stelle = <span>5.100%</span>; probabilit\xE0 base di vincere un personaggio a 4 stelle = <span>2.550%</span>, e probabilit\xE0 base di vincere un'arma a 4 stelle = <span>2.550%</span>; probabilit\xE0 consolidata (incl. garanzia) di vincere un oggetto a 4 stelle = <span>13.000%</span>; \xE8 assicurata la vittoria di un oggetto a 4 o pi\xF9 stelle almeno una volta ogni 10 tentativi; probabilit\xE0 di vincere un oggetto a 4 stelle grazie alla garanzia = <span>99.400%</span>, e probabilit\xE0 di vincere un oggetto a 5 stelle grazie alla garanzia = <span>0.600%</span>. <br/> C'\xE8 un <span>50.000%</span> di possibilit\xE0 che il primo oggetto a 4 stelle vinto sia uno dei personaggi in primo piano tra {rateupCharacters}. Se il primo oggetto a 4 stelle vinto in questo evento non \xE8 uno dei personaggi in primo piano, allora il prossimo oggetto a 4 stelle che vincerai sar\xE0 <span>sicuramente</span> un personaggio in primo piano. Quando vinci un oggetto a 4 stelle in primo piano, la probabilit\xE0 di ottenere un qualsiasi personaggio a 4 stelle in primo piano \xE8 uguale per ciascuno di loro.`],weapons:[`L'Event Wish "{bannerName}" \xE8 disponibile ora. Durante questo evento, l'arma a 5 stelle esclusive dell'evento {featuredWeapon1}, l'arma a 5 stelle {featuredWeapon2} e l'arma a 4 stelle esclusiva dell'evento {rateupWeapons} riceveranno un <span>enorme aumento della percentuale di ottenimento</span>! <br/> <span> \u203B Tra queste armi, le armi esclusive dell'evento non saranno disponibili nel wish "Wanderlust Invocation" standard.</span>`,"\u203B Nella maggior parte dei casi, la probabilit\xE0 base di vincere qualsiasi personaggio o arma \xE8 distribuita uniformemente. Se \xE8 attivo un potenziamento o una garanzia fare riferimento alle rispettive regole.","\u3013Regole\u3013","Oggetti a 5 stelle",`Per l'Event Wish "{bannerName}": probabilit\xE0 base di vincere un'arma a 5 stelle = <span>0.700%</span>; probabilit\xE0 consolidata (incl. garanzia) = <span>1.850%</span>; \xE8 assicurata la vittoria di un'arma a 5 stelle almeno una volta ogni <span>80</span> tentativi.<br/> C'\xE8 un <span>75.000%</span> di possibilit\xE0 che la prima arma a 5 stelle vinta sia una delle armi promozionali tra {featuredWeapon1} e {featuredWeapon2}. Se la prima arma a 5 stelle vinta in questo evento non \xE8 una delle armi promozionali, allora la prossima arma a 5 stelle che vincerai sar\xE0 <span>sicuramente</span> un'arma promozionale. Nel caso in cui si ottenga un oggetto promozionale a 5 stelle con un wish senza avere il massimo dei Punti Fato, la probabilit\xE0 di ottenere una qualsiasi arma a 5 stelle \xE8 uguale per ciascuna di loro. <br/> Per l'Event Wish "{bannerName}", puoi tracciare un percorso verso l'arma promozionale a 5 stelle scelta con "Epitomized Path." La scelta dell'arma sar\xE0 valida solo per il periodo dell'Event Wish "{bannerName}". <br/> Per l'Event Wish "{bannerName}", dopo aver tracciato un percorso verso un'arma scelta con "Epitomized Path," se ottieni un'arma a 5 stelle che non \xE8 l'arma scelta, riceverai 1 Punto Fato. Una volta raggiunta la <span>quantit\xE0 massima</span> di Punti Fato, l'arma a 5 stelle successiva sar\xE0 <span>sicuramente</span> l'arma scelta. Una volta ottenuta l'arma scelta, i Punti Fato si resetteranno a <span>0</span>, indipendentemente dal fatto che tu abbia raggiunto o meno il massimo dei punti, e dovrai accumularli nuovamente. Se non usi "Epitomized Path" per tracciare un percorso verso un'arma scelta, <span>not</span> riceverai Punti Fato. <br/> Dopo aver tracciato un percorso verso un'arma scelta, puoi cambiare la tua scelta o annullarla del tutto, ma cos\xEC facendo resetterai i Punti Fato a <span>0</span> e dovrai accumularli nuovamente. <br/> \u203B I Punti Fato per questo Wish in "Epitome Invocation" sono validi solo per il periodo dell'Event Wish. Al termine dell'Event Wish, i Punti Fato si resetteranno a <span>0</span>, e dovrai accumularli nuovamente.`,"Oggetti a 4 stelle",`Per l'Event Wish "{bannerName}": probabilit\xE0 base di vincere un oggetto a 4 stelle = <span>6.000%</span>; probabilit\xE0 base di vincere un personaggio a 4 stelle = <span>3.000%</span>, e probabilit\xE0 base di vincere un'arma a 4 stelle = <span>3.000%</span>; probabilit\xE0 consolidata (incl. garanzia) di vincere un oggetto a 4 stelle = <span>14.500%</span>; \xE8 assicurata la vittoria di un oggetto a 4 o pi\xF9 stelle almeno una volta ogni <span>10</span> tentativi; probabilit\xE0 di vincere un oggetto a 4 stelle grazie alla garanzia = <span>99.300%</span>, e probabilit\xE0 di vincere un oggetto a 5 stelle grazie alla garanzia = <span>0.700%</span>. <br/> C'\xE8 un <span>75.000%</span> di possibilit\xE0 che il primo oggetto a 4 stelle vinto sia una delle armi in primo piano tra {rateupWeapons}. Se il primo oggetto a 4 stelle vinto in questo evento non \xE8 una delle armi in primo piano, allora il prossimo oggetto a 4 stelle che vincerai sar\xE0 <span>sicuramente</span> un'arma in primo piano. Quando vinci un oggetto a 4 stelle in primo piano, la probabilit\xE0 di ottenere una qualsiasi arma a 4 stelle in primo piano \xE8 uguale per ciascuna di loro.`],convertion:{fiveStar:"Le armi a 5 stelle vinte con questo desiderio vengono fornite con {starglitter} \xD710;",fourStar:"Le armi a 4 stelle vinte con questo desiderio vengono fornite con {starglitter} \xD72;",threeStar:"Le armi a 3 stelle vinte con questo desiderio vengono fornite con {stardust} \xD715."},duplicate:{heading:"\u3013Personaggi Duplicati\u3013",text:"Se si ottiene un personaggio che si possiede gi\xE0 (ottenuto in un wish, riscattato dal negozio, o assegnato dal gioco): tra la seconda e la settima volta che si ottiene il personaggio, verr\xE0 convertito in {stellaFortuna} \xD71 del personaggio e {starglitter} {constBonus}; dall'ottava volta in poi verr\xE0 convertito in {starglitter} {fullConstBonus}."}},B={title:"Wish History",text:"Cronologia",resetButton:"Ripristino",resetPromptTitle:"Ripristino della Cronologia ?",resetPrompt:`Quest'operazione rimuover\xE0 anche tutti i personaggi e tutte le armi relativi al banner "{bannerName}" dal tuo inventario. <br /> Sei sicuro di volere ripristinare?`,resetSuccess:"Ripristino effettuato con successo !",selectWish:"Seleziona il tipo di wish:",disclaimer:"Non salviamo mai i tuoi data su archivi cloud. Tutti i dati sono archiviati in IndexedDB, questo significa che sono salvati nella memoria del browser. Non verranno mai eliminati finch\xE8 non li elimini manualmente con il pulsante di eliminazione/ripristino, oppure cancellando i dati del browser.",currentPity:"Pity Corrente :",totalPull:"Totale Tiri :",totalSpend:"Totale Spesa :",filterTxt:"Filtro",filter:"{rarity} Stella/e",filterAll:"Tutto",pity:"Pity",timeReceived:"Tempo Guadagnato",waiting:"Attendere",noData:"Nessun dato disponibile .",untracked:"Non Rintracciato",item:"Oggetto",win:"Vittoria 50/50",lose:"Perdita 50/50",guaranteed:"Assicurato",selected:"Oggetto Selezionato",primos:"Primos",olderLayout:"Older Layout",switchv2:"Switch to V2"},D={text:"Negozio",paimonBargains:"Paimon Bargains",fateNeeded:"\xC8 necessario un {rollQty} {currency} aggiuntivo.",primoNeeded:"Acquista con {primoPrice} Primogem ?",purchaseUpto:"Acquista fino a 1",purchaseConfirm:"Conferma d'Acquisto",exchangeHeading:"Oggetto da Scambiare",purchaseHeading:"Oggetto da acquistare",purchaseButton:"Acquista",pay:"Paga",product:"Prodotto",consume:"Consumo",selectPayment:"Seleziona il Tipo di Pagamento",unrealWallet:"UnReal Wallet",convertPrimo:"Convertire automaticamente in primogem ?",proceedPayment:"Procedi al Pagamento",qty:"Qty",insufficient:"Fondi Insufficienti",crystalTopup:"Crystal Top-Up",buyGenesisHeading:"Compra Genesis Crystal",recomendedHeading:"Oggetti Consigliati",paimonHeading:"Paimon's Bargains",welkinNote:"Pu\xF2 essere acquistato pi\xF9 volte",limitedOffer:"Offerta a tempo limitato",noLimitTime:"Nessun oggetto a tempo limitato disponibile",recomended:{welkin:"Blessing of the Welkin Moon",newOutfit:"Nuovi outfit per i personaggi",dayRemaining:"Giorni rimanenti: {days}",alreadyClaimed:"Gi\xE0 Riscattato oggi",instantlyGet:"Ottieni immediatamente",dailyGift:"Regalo giornaliero",obtainTotal:"Ottieni un totale di {totalGenesis} Genesis Crystal e {totalPrimo} Primogems in 30 giorni",claimingBlessing:"Fai click per riscattare le tue ricompense giornaliere di Blessing of the Welkin Moon",issuedPurchase:"Rilasciato all'acquisto",collect:"Raccogli le ricompense di accesso giornaliere per 30 giorni"},exchange:{starglitter:"Scambio Starglitter",stardust:"Scambio Stardust",primogem:"Scambia con Primogem"},item:{genesis:"Genesis Crystal",primogem:"Primogem",intertwined:"Intertwined Fate",acquaint:"Acquaint Fate",starglitter:"Masterless Starglitter",stardust:"Masterless Stardust"},description:{intertwined:"Una pietra fatidica che unisce i sogni. Il suo bagliore pu\xF2 intrecciare destini e unire sogni, proprio come il suo bagliore unisce le stelle alle forme dei desideri di un cuore.",acquaint:"Un seme che illumina la notte. Non importa la distanza, guidato dal bagliore della pietra, si incontrer\xE0 il fato sotto le stelle."}},L={text:"Inventario",unsetOutfit:"Outfit Non Selezionato",setOutfit:"Seleziona l'Outfit sul Personaggio",refinement:"Refinement {count}",constellation:"Costellazione {count}",extra:"Extra {count}",firstSummon:"Evocato per la prima volta alle : {date}",notOwned:"Non in Possesso",sort:"Ordina",rarity:"Rarit\xE0",name:"Nome",quantity:"Quantit\xE0",element:"Elemento",type:"Tipo",owned:"In Possesso",showAllOption:"Mostra Tutti {item} ( {qty} Evocati )"},x={no:"No",yes:"S\xEC",text:"Menu",options:"Opzioni",updates:"Aggiorna la Cronologia",language:"Lingua",currency:"Moneta",fates:"Fates Illimitati",mute:"Muta Audio ed Effetti Sonori",switchBanner:"Cambia Banner",showAllitems:"Mostra tutti gli oggetti nell'inventario",animeoff:"Auto Skip Splash Art",animatedbg:"Sfondo Animato",factoryReset:"Cancella i Dati e Ripristina",resetTitle:"Factory Reset",rotate:"Gira per un'esperienza migliore",clearCache:"Clear Caches ( {size} ) ? You will re-load the assets after this action!",resetButton:"Ripristina ora",resetPrompt:"Sei sicuro di voler cancellare <strong>Tutti i Dati</strong> e ripristinare le impostazioni predefinite ?",resetDetail:"Rimuove anche la Cronologia, il Calcolo Pity, il Saldo e tutti gli oggetti dell'Inventario.",resetSuccess:"Ripristino effettuato con successo",removeAds:"Remove Ads",removeKey:"Remove AdKey",removeKeyConfirm:"Are You sure to remove the current adKey ? You need to enter a new key to remove the future ads!",getNewKey:"Get a new one Here!",noKey:"Don't have a key?",verifyFail:"Failed to verifying AdKey, Check your Connection",invalidKey:"Your key isn't valid",adFreeUser:"You're enjoying Simulator Without Ads !",inputKeyPlaceholder:"Enter Key",inputKeyTxt:"Input the Key to Remove Ads !",checkingKey:"Checking Stored AdKey",authorNotes:"* I need to say sorry about the ads. Actually I don't want to ruin your wishing experience, but I don't have any Team or Sponsor to keep this app alive. If you don't want to spend anythings, You can still turn on the Ad Blocker or just use custom DNS, I will not forbid you."},G={title:e,character:a,weapon:i,vision:t,anemo:n,cryo:o,dendro:r,electro:s,hydro:l,geo:c,pyro:p,bow:u,catalyst:d,claymore:m,sword:g,polearm:v,extra:b,obtained:h,waiting:f,connectionFailed:P,confirmButton:y,cancelButton:z,disclaimer:w,fanmade:S,pressToContinue:C,installInstruction:q,share:N,screenshot:T,capturing:F,rewardFirstShare:I,version:W,donate:E,wish:A,outfit:O,details:R,history:B,shop:D,inventory:L,menu:x};export{n as anemo,u as bow,z as cancelButton,F as capturing,d as catalyst,a as character,m as claymore,y as confirmButton,P as connectionFailed,o as cryo,G as default,r as dendro,R as details,w as disclaimer,E as donate,s as electro,b as extra,S as fanmade,c as geo,B as history,l as hydro,q as installInstruction,L as inventory,x as menu,h as obtained,O as outfit,v as polearm,C as pressToContinue,p as pyro,I as rewardFirstShare,T as screenshot,N as share,D as shop,g as sword,e as title,W as version,t as vision,f as waiting,i as weapon,A as wish};