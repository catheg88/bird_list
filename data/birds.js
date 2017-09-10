const Birds = [{"speciesCode":"ostric2","comNameCodes":["COOS"],"bandingCodes":[],"comName":"Common Ostrich","category":"species","sciName":"Struthio camelus","sciNameCodes":["STCA"],"taxonID":"TC000002","taxonOrder":3},{"speciesCode":"ostric3","comNameCodes":["SOOS"],"bandingCodes":[],"comName":"Somali Ostrich","category":"species","sciName":"Struthio molybdophanes","sciNameCodes":["STMO"],"taxonID":"TC000003","taxonOrder":5},{"speciesCode":"grerhe1","comNameCodes":["GRRH"],"bandingCodes":[],"comName":"Greater Rhea","category":"species","sciName":"Rhea americana","sciNameCodes":["RHAM"],"taxonID":"TC000004","taxonOrder":7},{"speciesCode":"lesrhe2","comNameCodes":["LERH"],"bandingCodes":[],"comName":"Lesser Rhea","category":"species","sciName":"Rhea pennata","sciNameCodes":["RHPE"],"taxonID":"TC000005","taxonOrder":13},{"speciesCode":"tabtin1","comNameCodes":["TBTI"],"bandingCodes":[],"comName":"Tawny-breasted Tinamou","category":"species","sciName":"Nothocercus julius","sciNameCodes":["NOJU"],"taxonID":"TC000018","taxonOrder":32},{"speciesCode":"higtin1","comNameCodes":[],"bandingCodes":["HITI"],"comName":"Highland Tinamou","category":"species","sciName":"Nothocercus bonapartei","sciNameCodes":["NOBO"],"taxonID":"TC000019","taxonOrder":33},{"speciesCode":"hootin1","comNameCodes":["HOTI"],"bandingCodes":[],"comName":"Hooded Tinamou","category":"species","sciName":"Nothocercus nigrocapillus","sciNameCodes":["NONI"],"taxonID":"TC000022","taxonOrder":40},{"speciesCode":"grytin1","comNameCodes":["GRTI"],"bandingCodes":[],"comName":"Gray Tinamou","category":"species","sciName":"Tinamus tao","sciNameCodes":["TITA"],"taxonID":"TC000023","taxonOrder":43},{"speciesCode":"soltin1","comNameCodes":["SOTI"],"bandingCodes":[],"comName":"Solitary Tinamou","category":"species","sciName":"Tinamus solitarius","sciNameCodes":["TISO"],"taxonID":"TC000024","taxonOrder":48},{"speciesCode":"blatin1","comNameCodes":["BLTI"],"bandingCodes":[],"comName":"Black Tinamou","category":"species","sciName":"Tinamus osgoodi","sciNameCodes":["TIOS"],"taxonID":"TC000025","taxonOrder":49},{"speciesCode":"gretin1","comNameCodes":[],"bandingCodes":["GRTI"],"comName":"Great Tinamou","category":"species","sciName":"Tinamus major","sciNameCodes":["TIMA"],"taxonID":"TC000026","taxonOrder":52},{"speciesCode":"whttin1","comNameCodes":["WTTI"],"bandingCodes":[],"comName":"White-throated Tinamou","category":"species","sciName":"Tinamus guttatus","sciNameCodes":["TIGU"],"taxonID":"TC000027","taxonOrder":65},{"speciesCode":"cintin1","comNameCodes":["CITI"],"bandingCodes":[],"comName":"Cinereous Tinamou","category":"species","sciName":"Crypturellus cinereus","sciNameCodes":["CRCI"],"taxonID":"TC000029","taxonOrder":67},{"speciesCode":"bertin1","comNameCodes":["BETI"],"bandingCodes":[],"comName":"Berlepsch's Tinamou","category":"species","sciName":"Crypturellus berlepschi","sciNameCodes":["CRBE"],"taxonID":"TC000030","taxonOrder":68},{"speciesCode":"littin1","comNameCodes":[],"bandingCodes":["LITI"],"comName":"Little Tinamou","category":"species","sciName":"Crypturellus soui","sciNameCodes":["CRSO"],"taxonID":"TC000031","taxonOrder":69},{"speciesCode":"teptin1","comNameCodes":["TETI"],"bandingCodes":[],"comName":"Tepui Tinamou","category":"species","sciName":"Crypturellus ptaritepui","sciNameCodes":["CRPT"],"taxonID":"TC000032","taxonOrder":84},{"speciesCode":"brotin1","comNameCodes":["BRTI"],"bandingCodes":[],"comName":"Brown Tinamou","category":"species","sciName":"Crypturellus obsoletus","sciNameCodes":["CROB"],"taxonID":"TC000033","taxonOrder":85},{"speciesCode":"undtin1","comNameCodes":["UNTI"],"bandingCodes":[],"comName":"Undulated Tinamou","category":"species","sciName":"Crypturellus undulatus","sciNameCodes":["CRUN"],"taxonID":"TC000034","taxonOrder":95},{"speciesCode":"pabtin1","comNameCodes":["PBTI"],"bandingCodes":[],"comName":"Pale-browed Tinamou","category":"species","sciName":"Crypturellus transfasciatus","sciNameCodes":["CRTR"],"taxonID":"TC000035","taxonOrder":102},{"speciesCode":"bratin1","comNameCodes":["BRTI"],"bandingCodes":[],"comName":"Brazilian Tinamou","category":"species","sciName":"Crypturellus strigulosus","sciNameCodes":["CRST"],"taxonID":"TC000036","taxonOrder":103},{"speciesCode":"gyltin1","comNameCodes":["GLTI"],"bandingCodes":[],"comName":"Gray-legged Tinamou","category":"species","sciName":"Crypturellus duidae","sciNameCodes":["CRDU"],"taxonID":"TC000037","taxonOrder":104},{"speciesCode":"reltin1","comNameCodes":["RLTI"],"bandingCodes":[],"comName":"Red-legged Tinamou","category":"species","sciName":"Crypturellus erythropus","sciNameCodes":["CRER"],"taxonID":"TC000038","taxonOrder":105},{"speciesCode":"yeltin1","comNameCodes":["YLTI"],"bandingCodes":[],"comName":"Yellow-legged Tinamou","category":"species","sciName":"Crypturellus noctivagus","sciNameCodes":["CRNO"],"taxonID":"TC000039","taxonOrder":113},{"speciesCode":"blctin1","comNameCodes":["BCTI"],"bandingCodes":[],"comName":"Black-capped Tinamou","category":"species","sciName":"Crypturellus atrocapillus","sciNameCodes":["CRAT"],"taxonID":"TC000040","taxonOrder":116},{"speciesCode":"slbtin1","comNameCodes":[],"bandingCodes":["SBTI"],"comName":"Slaty-breasted Tinamou","category":"species","sciName":"Crypturellus boucardi","sciNameCodes":["CRBO"],"taxonID":"TC000041","taxonOrder":119},{"speciesCode":"chotin1","comNameCodes":[],"bandingCodes":["CHTI"],"comName":"Choco Tinamou","category":"species","sciName":"Crypturellus kerriae","sciNameCodes":["CRKE"],"taxonID":"TC000042","taxonOrder":122},{"speciesCode":"vartin1","comNameCodes":["VATI"],"bandingCodes":[],"comName":"Variegated Tinamou","category":"species","sciName":"Crypturellus variegatus","sciNameCodes":["CRVA"],"taxonID":"TC000043","taxonOrder":123},{"speciesCode":"thitin1","comNameCodes":[],"bandingCodes":["THTI"],"comName":"Thicket Tinamou","category":"species","sciName":"Crypturellus cinnamomeus","sciNameCodes":["CRCI"],"taxonID":"TC000044","taxonOrder":124},{"speciesCode":"rustin1","comNameCodes":["RUTI"],"bandingCodes":[],"comName":"Rusty Tinamou","category":"species","sciName":"Crypturellus brevirostris","sciNameCodes":["CRBR"],"taxonID":"TC000045","taxonOrder":134},{"speciesCode":"bartin2","comNameCodes":["BATI"],"bandingCodes":[],"comName":"Bartlett's Tinamou","category":"species","sciName":"Crypturellus bartletti","sciNameCodes":["CRBA"],"taxonID":"TC000046","taxonOrder":135},{"speciesCode":"smbtin1","comNameCodes":["SBTI"],"bandingCodes":[],"comName":"Small-billed Tinamou","category":"species","sciName":"Crypturellus parvirostris","sciNameCodes":["CRPA"],"taxonID":"TC000047","taxonOrder":136},{"speciesCode":"bartin1","comNameCodes":["BATI"],"bandingCodes":[],"comName":"Barred Tinamou","category":"species","sciName":"Crypturellus casiquiare","sciNameCodes":["CRCA"],"taxonID":"TC000048","taxonOrder":137},{"speciesCode":"tattin1","comNameCodes":["TATI"],"bandingCodes":[],"comName":"Tataupa Tinamou","category":"species","sciName":"Crypturellus tataupa","sciNameCodes":["CRTA"],"taxonID":"TC000049","taxonOrder":138},{"speciesCode":"rewtin1","comNameCodes":["RWTI"],"bandingCodes":[],"comName":"Red-winged Tinamou","category":"species","sciName":"Rhynchotus rufescens","sciNameCodes":["RHRU"],"taxonID":"TC000051","taxonOrder":144},{"speciesCode":"huatin1","comNameCodes":["HUTI"],"bandingCodes":[],"comName":"Huayco Tinamou","category":"species","sciName":"Rhynchotus maculicollis","sciNameCodes":["RHMA"],"taxonID":"TC000052","taxonOrder":148},{"speciesCode":"tactin1","comNameCodes":["TATI"],"bandingCodes":[],"comName":"Taczanowski's Tinamou","category":"species","sciName":"Nothoprocta taczanowskii","sciNameCodes":["NOTA"],"taxonID":"TC000053","taxonOrder":149},{"speciesCode":"orntin1","comNameCodes":["ORTI"],"bandingCodes":[],"comName":"Ornate Tinamou","category":"species","sciName":"Nothoprocta ornata","sciNameCodes":["NOOR"],"taxonID":"TC000054","taxonOrder":150},{"speciesCode":"chitin1","comNameCodes":["CHTI"],"bandingCodes":[],"comName":"Chilean Tinamou","category":"species","sciName":"Nothoprocta perdicaria","sciNameCodes":["NOPE"],"taxonID":"TC000055","taxonOrder":154},{"speciesCode":"brutin1","comNameCodes":["BRTI"],"bandingCodes":[],"comName":"Brushland Tinamou","category":"species","sciName":"Nothoprocta cinerascens","sciNameCodes":["NOCI"],"taxonID":"TC000056","taxonOrder":157},{"speciesCode":"andtin1","comNameCodes":["ANTI"],"bandingCodes":[],"comName":"Andean Tinamou","category":"species","sciName":"Nothoprocta pentlandii","sciNameCodes":["NOPE"],"taxonID":"TC000057","taxonOrder":160},{"speciesCode":"cubtin1","comNameCodes":["CBTI"],"bandingCodes":[],"comName":"Curve-billed Tinamou","category":"species","sciName":"Nothoprocta curvirostris","sciNameCodes":["NOCU"],"taxonID":"TC000058","taxonOrder":168},{"speciesCode":"whbnot1","comNameCodes":["WBNO"],"bandingCodes":[],"comName":"White-bellied Nothura","category":"species","sciName":"Nothura boraquira","sciNameCodes":["NOBO"],"taxonID":"TC000060","taxonOrder":172},{"speciesCode":"lesnot1","comNameCodes":["LENO"],"bandingCodes":[],"comName":"Lesser Nothura","category":"species","sciName":"Nothura minor","sciNameCodes":["NOMI"],"taxonID":"TC000061","taxonOrder":173},{"speciesCode":"darnot1","comNameCodes":["DANO"],"bandingCodes":[],"comName":"Darwin's Nothura","category":"species","sciName":"Nothura darwinii","sciNameCodes":["NODA"],"taxonID":"TC000062","taxonOrder":174},{"speciesCode":"sponot1","comNameCodes":["SPNO"],"bandingCodes":[],"comName":"Spotted Nothura","category":"species","sciName":"Nothura maculosa","sciNameCodes":["NOMA"],"taxonID":"TC000063","taxonOrder":180},{"speciesCode":"chanot1","comNameCodes":["CHNO"],"bandingCodes":[],"comName":"Chaco Nothura","category":"species","sciName":"Nothura chacoensis","sciNameCodes":["NOCH"],"taxonID":"TC000064","taxonOrder":189},{"speciesCode":"dwatin1","comNameCodes":["DWTI"],"bandingCodes":[],"comName":"Dwarf Tinamou","category":"species","sciName":"Taoniscus nanus","sciNameCodes":["TANA"],"taxonID":"TC000065","taxonOrder":190},{"speciesCode":"elctin1","comNameCodes":["ECTI","ELCT"],"bandingCodes":[],"comName":"Elegant Crested-Tinamou","category":"species","sciName":"Eudromia elegans","sciNameCodes":["EUEL"],"taxonID":"TC000066","taxonOrder":191},{"speciesCode":"quctin1","comNameCodes":["QUCT","QCTI"],"bandingCodes":[],"comName":"Quebracho Crested-Tinamou","category":"species","sciName":"Eudromia formosa","sciNameCodes":["EUFO"],"taxonID":"TC000067","taxonOrder":202},{"speciesCode":"puntin1","comNameCodes":["PUTI"],"bandingCodes":[],"comName":"Puna Tinamou","category":"species","sciName":"Tinamotis pentlandii","sciNameCodes":["TIPE"],"taxonID":"TC000068","taxonOrder":205}]

export default Birds
