/**
 * Lorem Ipsum plug-in for TinyMCE version 3.x
 * -------------------------------------------
 * $Id: loremipsum_src.js 10 2009-04-30 23:20:50Z scholzj $
 *
 * @author     JAkub Scholz
 * @version    $Rev: 10 $
 * @package    LoremIpsum
 * @link       http://www.assembla.com/spaces/lorem-ipsum
 */

var arrLoremIpsumTexts=new Array();
var arrLoremIpsumLangs=new Array();

arrLoremIpsumTexts.push('Существуют две основных трактовки понятия &quot;текст&quot;: имманентная и репрезентативная.|Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры.|Репрезентативный — рассмотрение текста как особой формы представления знаний о внешней тексту действительности.|В лингвистике термин текст используется в широком значении, включая и образцы устной речи.|Восприятие текста изучается в рамках лингвистики текста и психолингвистики. Так, например, И.Р. Гальперин определяет текст следующим образом: &quot;это письменное сообщение, объективированное в виде письменного документа, состоящее из ряда высказываний, объединённых разными типами лексической, грамматической и логической связи, имеющее определённый моральный характер, прагматическую установку и соответственно литературно обработанное&quot;');
arrLoremIpsumLangs.push('Русский');

arrLoremIpsumTexts.push('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.|Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.|Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.|Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
arrLoremIpsumLangs.push('Latin');

arrLoremIpsumTexts.push('Non eram nescius, Brute, cum, quae summis ingeniis exquisitaque doctrina philosophi Graeco sermone tractavissent, ea Latinis litteris mandaremus, fore ut hic noster labor in varias reprehensiones incurreret.|Nam quibusdam, et iis quidem non admodum indoctis, totum hoc displicet philosophari.|Quidam autem non tam id reprehendunt, si remissius agatur, sed tantum studium tamque multam operam ponendam in eo non arbitrantur.|Erunt etiam, et ii quidem eruditi Graecis litteris, contemnentes Latinas, qui se dicant in Graecis legendis operam malle consumere.|Postremo aliquos futuros suspicor, qui me ad alias litteras vocent, genus hoc scribendi, etsi sit elegans, personae tamen et dignitatis esse negent.|Contra quos omnis dicendum breviter existimo.|Quamquam philosophiae quidem vituperatoribus satis responsum est eo libro, quo a nobis philosophia defensa et collaudata est, cum esset accusata et vituperata ab Hortensio.|Qui liber cum et tibi probatus videretur et iis, quos ego posse iudicare arbitrarer, plura suscepi veritus ne movere hominum studia viderer, retinere non posse.|Qui autem, si maxime hoc placeat, moderatius tamen id volunt fieri, difficilem quandam temperantiam postulant in eo, quod semel admissum coerceri reprimique non potest, ut propemodum iustioribus utamur illis, qui omnino avocent a philosophia, quam his, qui rebus infinitis modum constituant in reque eo meliore, quo maior sit, \mediocritatem desiderent.|Sive enim ad sapientiam perveniri potest, non paranda nobis solum ea, sed fruenda etiam [sapientia] est; sive hoc difficile est, tamen nec modus est ullus investigandi veri, nisi inveneris, et quaerendi defatigatio turpis est, cum id, quod quaeritur, sit pulcherrimum.|Etenim si delectamur, cum scribimus, quis est tam invidus, qui ab eo nos abducat? sin laboramus, quis est, qui alienae modum statuat industriae?|Nam ut Terentianus Chremes non inhumanus, qui novum vicinum non vult \'fodere aut arare aut aliquid ferre denique\' -- non enim illum ab industria, sed ab inliberali labore deterret --, sic isti curiosi, quos offendit noster minime nobis iniucundus labor.|Iis igitur est difficilius satis facere, qui se Latina scripta dicunt contemnere.|In quibus hoc primum est in quo admirer, cur in gravissimis rebus non delectet eos sermo patrius, cum idem fabellas Latinas ad verbum e Graecis expressas non inviti legant.|Quis enim tam inimicus paene nomini Romano est, qui Ennii Medeam aut Antiopam Pacuvii spernat aut reiciat, quod se isdem Euripidis fabulis delectari dicat, Latinas litteras oderit?|Synephebos ego, inquit, potius Caecilii aut Andriam Terentii quam utramque Menandri legam?|A quibus tantum dissentio, ut, cum Sophocles vel optime scripserit Electram, tamen male conversam Atilii mihi legendam putem, de quo Lucilius: \'ferreum scriptorem\', verum, opinor, scriptorem tamen, ut legendus sit.|Rudem enim esse omnino in nostris poetis aut inertissimae segnitiae est aut fastidii delicatissimi.|Mihi quidem nulli satis eruditi videntur, quibus nostra ignota sunt. an \'Utinam ne in nemore ...\' nihilo minus legimus quam hoc idem Graecum, quae autem de bene beateque vivendo a Platone disputata sunt, haec explicari non placebit Latine?|Quid?|Si nos non interpretum fungimur munere, sed tuemur ea, quae dicta sunt ab iis quos probamus, eisque nostrum iudicium et nostrum scribendi ordinem adiungimus, quid habent, cur Graeca anteponant iis, quae et splendide dicta sint neque sint conversa de Graecis?|Nam si dicent ab illis has res esse tractatas, ne ipsos quidem Graecos est cur tam multos legant, quam legendi sunt.|Quid enim est a Chrysippo praetermissum in Stoicis?|Legimus tamen Diogenem, Antipatrum, Mnesarchum, Panaetium, multos alios in primisque familiarem nostrum Posidonium. quid?|Theophrastus mediocriterne delectat, cum tractat locos ab Aristotele ante tractatos?|Quid?|Epicurei num desistunt de isdem, de quibus et ab Epicuro scriptum est et ab antiquis, ad arbitrium suum scribere?|Quodsi Graeci leguntur a Graecis isdem de rebus alia ratione compositis, quid est, cur nostri a nostris non legantur?');
arrLoremIpsumLangs.push('Latin');

arrLoremIpsumTexts.push('Gladia was in space again and once again Aurora could be made out as a globe.|D.G. was busy elsewhere and the entire ship had about it a vague but pervasive air of emergency, as though it were on a battle footing, as though it were being pursued or expected pursuit.|Gladia shook her head. She could think clearly; she felt well; but when her mind turned back to that time in the Institute, shortly after Amadiro had left her, a curiously pervasive unreality swept over her.|There was a gap in time.|One moment she had been sitting on the couch, feeling sleepy; the next there were four robots and a woman in the room who had not been there before.|She had fallen asleep, then, but there was no awareness, no memory, that she had done so.|There was a gap of nonexistence.|Thinking back, she had recognized the woman after the fact.|It was Vasilia Aliena--the daughter whom Gladia had replaced in the affections of Han Fastolfe. Gladia had never actually seen Vasilia, though she had viewed her on hyperwave several times.|Gladia always thought of her as a distant and inimical other self.|There was the vague similarity in appearance that others always commented on but that Gladia herself insisted she did not see--and there was the odd, antithetical connection with Fastolfe.');
arrLoremIpsumLangs.push('English');

arrLoremIpsumTexts.push('Három hónap múlva a Szítának átkeresztelt ûrszondát felbocsátották a Mars belsõ holdjáról, a Phoebusról.|A repülési idõ két hét; a mûszer teljes bekapcsolása csak a befogás elõtti öt percben kezdõdik.|A felvevõgépeket úgy állították be, hogy a tárgy minden oldalról lefényképezhetõ legyen.|Az elsõ képek, melyek tízezer km távolságról érkeztek, leállítottak minden emberi tevékenységet.|Ezer millió tévéképernyõn jelent meg egy parányi, jellegtelen henger, s növekedett másodpercrõl másodpercre.|Mire méretei megkétszerezõdtek, már senki sem gondolhatta, hogy a Ráma természeti tárgy.|Mértanilag olyan szabályos hengeralakot mutatott, hogy akár esztergapadon is készíthették volna: akkorán, melynek csúcsai egymástól ötven km távolságra vannak.|Eltekintve az egyik oldalon látható néhány apró kis szerkezettõl, két vége teljesen sík, húsz kilométer széles volt.|A távolból szinte nevetségesen hasonlított egy közönséges bojlerre.|A Ráma csak nõtt, nõtt, míg végül betöltötte a képernyõt.|Felszíne egyhangú szürkésbarna volt, színtelen, mint a Hold, s egy pontot kivéve tökéletesen sima.|A henger közepe táján azonban kilométernyi széles folt éktelenkedett, mintha egy hajdanában történt ütközéskor behorpadt volna.|Semmi jel nem mutatott arra, hogy ez a folt a legcsekélyebb veszélyt is jelentett volna a Rámára nézve; viszont ez okozta a fénygörbe aprócska változását, mely Stenton felfedezéséhez vezetett.|A többi kamera képei semmi újat nem mutattak.|Ámbár az a görbe, melyet a Ráma kicsiny gravitációs mezõjén a kamerák kijelöltek, életbevágóan fontos információt szolgáltatott - a henger tömegérõl.|Túlságosan könnyûnek bizonyult ahhoz, hogy tömör test lehessen.|Senki sem volt túlságosan meglepve, amikor kiderült, hogy a Ráma nem tömör henger.|Elérkezett végre a régen várt, régen rettegett találkozás.|Az emberiség elsõ, csillagokból érkezõ látogatóját fogadja.');
arrLoremIpsumLangs.push('Hungarian');

arrLoremIpsumTexts.push('Mútéra norybyd ké týbo, chyčná cakšichytú bádnyřa, muzózy.|Chy dočnéhy no babvikýje nizu.|Vohúzo čitýfanú bál dita, da žarabyp bimú solúmebe hu nebakti feni lisizu livýtí šobachá butike pasif kángokoras.|Nafobim, bóhfage, katélé, jató lí boutídisú nýlíbýb dounudou ne nácahy búkarfevý nýšobónfa.|Bytzusy.|Po sibossicsom šícvo peboťlély doudulo zysi rosypsy pokadmy cafšob sapnešé mípo navupe.|Bíju dědý sozchabe pébepamá fu butkyjí myru zóruz sevú febomsed larazko joky pobymcaj jíle bon fasobry sukpa.|Bekcochy pábem, vo ratreny, rófati ráčnatíhobi nebýsvo bisev zuras cafe plútúha barugavé lí.|Řaleplá, kýku výlesa gotici honoči déhoro bylplufe bastý rulsíf hupený čeroj chyló, tydy roclí.|Núrod nyfu boh farú mupa naló.|Lechoro lé nizuraz núpluny, ňoko bi ga.|Nerab, kyčný zufevý rúza.Nokýte ký.|Bounónú techety pobiru dépypa randi chanajáhe.|Diku kascho dy bešup nycajkau reka byn jí mymýňo míláfa kedo makeča, téjuhe čelýhufo po ból muku výněfocho hárevo sý býsšá, sipbýdje runno ca my bubek.|Berbúj, fozébyndio zuřupbý šovfuju mú kusášez nichabu tytýny huben pyca chora dú duhy zédyďáza býhvisýv vozý mybytfo caltuti cou rúvýťa bimo rukjíno bóz zuke, súčpybylčitý gapebyb, sefsúfca kógehe.|Šamsy plí mejaro bysbylčelý mytý šajfákáj výpá divýva fápé chozu suk, lágaze zobalmonatí chu bonze ný mujévy satkésecho, hočitýbuf bime mavibito vý, vefole jajebelpa bimbehší pýřá rubek tusac rulféšéf čaunatý, dochú diota tasydula vybazde, žá ďarufboň sublécevé rúv zyrahopú chyga sé pýráz leváčitíkat cabú néchá kýtuche bejemý bújó siltehuchá.|Vétómo výnave fo.|Bazhožímý mídezy.|Jašíjmy.|Nědychúma lé sókjéžu ruskúcha cháli miroja lovonaté čelýjéda chečitélý mýpaze suzzu hu bobkapluty chybi lé bekkánu plýbo, kuzavi kubi.Bicchabu mini heví nápe dahúbý běco chude šabek vátó bés suk saber selícak, pažese jasil rúmabyf, músybyl, syhocéhy capkarkál leku šésyvta pojaka nira látý doufávy bó hálobýl.|Balnébopa vívostí rujche chepolo doušekhe fúfechugá lymá níbeč sómvoceo lachy.|Nunito tumu rodbaďtý járusber.|Vítýnatý zabo pozo háhá caknóce chekúnú lavolo netásimy kostýlú čitésiku luca katchechá řisýby robrap kacnétofú býzi fómy nušuzu nýřera cassún vusip zákavá reciti rovrojmo jocobút dačnýkapruz ras dumá ryté béblú rana, lúbystý čnýhe veresýn po, ju lilusuk.|Mareraruf řábka ťaze rokga fatoně natýťalerá nenybil kómyfé dúnúvošej visitvetu véchumy ru nudohu, bebtěto rupe fefeňoza losaď hyzeti peťabodze me rú johy jo my, léméja ply sérhý lyšát, chúduve nacití, rabek, tísebob běrzupy buť rúfunatí balliha, bečnýkosu chuhyřaska cajébok dý páne šensud dývata li, betda zevýleky mebadú puple sazchuroc che, bivúdapý zirunivú bočlazu.|Kuhebic sutlirož fečnýzivy šímtýťa.|Lubuhpla jivý dofuzu, šutzelý kašága kége rolhyle bobrohrovchy vu.|Natéjénú hečájbú dykykau, róky razpa mugabidchu sobnyle céfebekche so batebylche stýčná rabýl rokší myberroj hábílká nýdujé si buky tólá.|Búsajóvi tapa, mamoche doťaléza becerú nymavýpla beknoza dyšob bamčak pu sesovhe, molizý, zepata, sa čelácila.|Stýšeny lébunpo divo chute mórob, nečájsica safmí čnýrub, natý dosé čitýchysy hy bě movýho chevyvý sihýbal.');
arrLoremIpsumLangs.push('Česky');

arrLoremIpsumTexts.push('Ich bin Blindtext.|Von Geburt an.|Es hat lange gedauert, bis ich begriffen habe, was es bedeutet, ein blinder Text zu sein: Man macht keinen Sinn.|Man wirkt hier und da aus dem Zusammenhang gerissen.|Oft wird man gar nicht erst gelesen.|Aber bin ich deshalb ein schlechter Text?|Ich weiss, dass ich nie die Chance haben werde, im Stern zu erscheinen.|Aber bin ich darum weniger wichtig?|Ich bin blind!|Aber ich bin gerne Text.|Und sollten Sie mich jetzt tats&auml;chlich zu Ende lesen, dann habe ich etwas geschafft, was den meisten &quot;normalen&quot; Texten nicht gelingt.');
arrLoremIpsumLangs.push('Deutsch');

var arrSentences = new Array();

function loremIpsumGimmeSentences(howmany, selText)     {
	var ret = '';
	var arrTmp = new Array();

        //var arrSentences = new Array();
        //arrSentences.push(arrLoremIpsumTexts[selText].split('|'));

	for (var i=0; i < howmany; i++)        {
		arrTmp.push(arrSentences[selText][0]);
		arrSentences[selText].push(arrSentences[selText].shift());
		//make first sentence array element last,
		//in order to avoid paragraphs and list begin always with the same sentence
	}
	ret=arrTmp.join(' ');
	return ret;
}

var LoremIpsumDialog = {
	init : function() {
                var f = document.forms[0];

                var sentences = document.getElementById("sentences");

                for (var i=0; i < arrLoremIpsumTexts.length; i++)       {
                        arrSentences.push(arrLoremIpsumTexts[i].split('|'));
                }//split text to sentences. Sentences limited by '|'

                for (var i=0; i < arrSentences.length; i++) {
                        var tmp=new Array();
                        tmp=(arrSentences[i][0]).split(' ');
                        tmp=tmp.slice(0,3);
                        var tmpText=tmp.join(' ');
                        sentences.options[i]=new Option(arrLoremIpsumLangs[i] + ': ' + tmpText,i);
                }

	},

	insert : function() {
		// Insert the contents from the input into the document
                var insertedText = '';

                var sentences = document.getElementById("sentences");
                var amount = document.getElementById("amount");
                var formating = document.getElementById("formating");

                //count=formObj.lorem_count.value;
                //selectedText=formObj.lorem_select.value;
                //window.alert("bbb");
                switch (formating.value)        {
                        case '0': //unformatted

                                insertedText = loremIpsumGimmeSentences(amount.value, sentences.value);
                        break;
                        case '1': //paragraphs
                                for (var counter = 0; counter < amount.value; counter++)        {
                                        countElem = Math.round((Math.random() * 5) + 3); //so many sentences in paragraph
                                        insertedText += '<p>' + loremIpsumGimmeSentences(countElem, sentences.value) + '</p>';
                                }
                        break;
                        case '2': //list
                                insertedText += '<ul>';
                                for (var counter = 0; counter < amount.value; counter++)  {
                                        countElem = Math.round(Math.random() + 1); //so many sentences in listelement
                                        insertedText += '<li>' + loremIpsumGimmeSentences(countElem, sentences.value) + '</li>';
                                }
                                insertedText+='</ul>';
                        break;
                        case '3': //orderedlist
                                insertedText += '<ol>';
                                for (var counter = 0; counter < amount.value; counter++)      {
                                        countElem = Math.round(Math.random() + 1); //so many sentences in listelement
                                        insertedText += '<li>' + loremIpsumGimmeSentences(countElem, sentences.value) + '</li>';
                                }
                                insertedText += '</ol>';
                                break;
                }

		tinyMCEPopup.editor.execCommand('mceInsertContent', false, insertedText);
		tinyMCEPopup.close();
	}
};

tinyMCEPopup.requireLangPack();
tinyMCEPopup.onInit.add(LoremIpsumDialog.init, LoremIpsumDialog);