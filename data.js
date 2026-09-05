/* EAN Regional Teaching Course 2026 (Istanbul) — study data.
   Built from photographed course slides + scientific program + current literature. */

var CHEAT = [
{
day: "Day 1 — Multiple Sclerosis: CSF, Blood Biomarkers & Imaging",
topics: [
{
title: "CSF diagnostics in MS (Tumani)",
html: `
<h4>General principles</h4>
<ul>
<li><b>Take enough CSF and parallel blood</b> at LP; prefer <b>combined multiparameter analysis</b> over single tests — integration of all tests gives the highest diagnostic accuracy.</li>
<li>Typical MS CSF: mild pleocytosis, <b>plasma cells ~60%</b> of cases, intrathecal synthesis dominated by IgG (<b>IgG loc ~70%</b>, IgM ~20%, IgA ~5%).</li>
</ul>
<h4>Oligoclonal bands (OCB)</h4>
<ul>
<li><b>OCB-IgG positive in 90–98% of MS.</b></li>
<li>IEF patterns (Andersson 1994): Type 1 normal · <b>Type 2 local (intrathecal) synthesis</b> · <b>Type 3 local synthesis + identical bands</b> · Type 4 identical/mirror bands = systemic · Type 5 paraprotein/gammopathy.</li>
<li>➜ <b>Only patterns 2 and 3 indicate intrathecal synthesis.</b></li>
</ul>
<h4>Kappa free light chains (κ-FLC)</h4>
<ul>
<li><b>κ-FLC index = (CSF κFLC / serum κFLC) ÷ (CSF albumin / serum albumin)</b>.</li>
<li>PRO: quantitative, fast, cheap, robust (even with blood contamination). CONTRA: no clonality information, cut-offs not standardized.</li>
<li><b>Hegen 2023 consensus: κ-FLC is a useful addition but NOT a substitute for OCB-IgG.</b></li>
<li>Cohort n=507 (MS/CIS): κ-FLC Reiber diagram 95% &gt; κFLC index (6.1) 91% &gt; OCB 87% sensitivity.</li>
<li>OCB-IgG and κ-FLC together: <b>&gt;95% sensitivity</b> for intrathecal inflammation. <b>IgM synthesis = highest predictivity</b> for disease progression.</li>
</ul>
<h4>MRZ reaction</h4>
<ul>
<li>Polyspecific intrathecal antibody response against <b>M</b>easles, <b>R</b>ubella, <b>Z</b>oster (VZV) — positive in <b>~80% of MS</b>, highly MS-specific (helps vs mimics).</li>
</ul>
<h4>RIS → MS risk (Fissolo, JAMA 2025)</h4>
<ul>
<li>High serum NfL z-score + IgG OCB ➜ <b>58% 5-year risk</b> of clinical symptoms; young age + IgM OCB ➜ <b>82%</b>.</li>
</ul>
<span class="tr">Ozet: BOS'ta tek test degil kombine panel esastir. Sadece patern 2 ve 3 intratekal sentezi gosterir. Kappa-FLC hizli ve kantitatiftir ama OCB'nin yerini almaz, tamamlar. MRZ reaksiyonu MS icin oldukca ozguldur.</span>
`
},
{
title: "Blood biomarkers: NfL & GFAP",
html: `
<div class="tablewrap"><table>
<tr><th></th><th>NfL</th><th>GFAP</th></tr>
<tr><td>Cell source</td><td><b>Neurons/axons</b></td><td><b>Astrocytes</b> (30–40% of CNS cells)</td></tr>
<tr><td>Intermediate filament</td><td>Type <b>IV</b></td><td>Type <b>III</b></td></tr>
<tr><td>Elevation means</td><td>Neuroaxonal <b>damage</b></td><td>Damage <b>and/or</b> astrocyte proliferation ("sclerosis")</td></tr>
<tr><td>Tracks</td><td><b>Acute inflammatory activity</b>, relapses, Gd+ lesions</td><td><b>Progression / PIRA</b>, smouldering pathology</td></tr>
<tr><td>Anti-CD20 effect</td><td>Decreases</td><td>Largely <b>unchanged</b></td></tr>
</table></div>
<ul>
<li><b>NfL is strongly age-dependent</b> (and BMI-dependent) — use <b>z-scores / adjusted reference values</b>, never raw cut-offs (Khalil 2024).</li>
<li><b>OBOE study (JAMA Neurol 2024):</b> CSF GFAP &amp; NfH correlate with progression biology and predict long-term CDP24 (EDSS); NfL &amp; immune markers reflect acute inflammation and fall after anti-CD20 — GFAP does not.</li>
<li><b>Measure NfL and GFAP in parallel</b> — they capture the two sides of MS pathology (focal inflammation vs smouldering progression).</li>
<li>Biomarker roadmap (Lancet Reg Health 2024): diagnosis = OCB, κ-FLC, IgG index; prognosis/monitoring = NfL + GFAP.</li>
</ul>
<div class="pearl">Exam angle: NfL = neuronal damage / acute activity; GFAP = astrocyte / progression &amp; PIRA. Always age-adjust NfL.</div>
<span class="tr">NfL noronal hasari ve akut aktiviteyi, GFAP astrositik patolojiyi ve progresyonu (PIRA) yansitir. NfL yasa cok bagimli — z-skoru sart. Anti-CD20 NfL'yi dusurur, GFAP'i etkilemez.</span>
`
},
{
title: "MS imaging: lesion types & activity markers",
html: `
<h4>Gadolinium-enhancing lesions</h4>
<ul>
<li>= <b>blood–brain barrier disruption</b> from active (peripheral, T-cell-mediated) inflammation.</li>
<li>Up to <b>10× more sensitive than clinical relapses</b> for subclinical activity; more frequent in brain than cord; <b>absent in cortical grey matter</b>.</li>
</ul>
<h4>Chronic active lesions — 3 imaging read-outs</h4>
<ul>
<li><b>PRL (paramagnetic rim lesion):</b> rim of <b>iron-laden microglia/macrophages</b> on SWI/phase — the in-vivo MRI signature of chronic active lesions; marker of progression.</li>
<li><b>SEL (slowly expanding lesion):</b> longitudinal T1/T2 volumetric expansion. T1w-SELs expand over weeks–months (PPMS&gt;RRMS); iron-rim SELs expand over 3–5 years (late RRMS / early PMS).</li>
<li><b>TSPO-PET-positive lesions</b> (activated microglia).</li>
<li>SELs and PRLs <b>overlap but are not identical</b> — only "expanding PRLs" are both.</li>
</ul>
<h4>Cortical lesions</h4>
<ul>
<li>Need dedicated sequences: <b>DIR, PSIR, MPRAGE/MP2RAGE</b>.</li>
<li>Predict CIS ➜ MS conversion; <b>absent/rare in MS mimics</b> ➜ useful for differential diagnosis.</li>
</ul>
<h4>Other</h4>
<ul>
<li><b>Central vein sign (CVS):</b> perivenous lesion development, supports MS over mimics.</li>
<li><b>Choroid plexus volume:</b> correlates with lesion load, relapse rate, cognition/fatigue; predicts EDSS evolution better than T2LV or CELs.</li>
<li><b>Brain atrophy/volumetry: NOT recommended for routine individual monitoring</b> (confounders: pseudoatrophy, hydration, gliosis, oedema shifts).</li>
</ul>
<span class="tr">Gd tutulumu KBB yikimini gosterir ve klinik ataktan ~10 kat duyarlidir. PRL = demir yuklu mikroglia halkasi = kronik aktif lezyon. Kortikal lezyonlar ozel sekans ister (DIR/PSIR) ve taklitcilerde gorulmez. Rutin hasta takibinde beyin hacmi olcumu onerilmez.</span>
`
},
{
title: "2024 (revised) McDonald criteria — diagnostic flow",
html: `
<ul>
<li><b>5 DIS topographies:</b> periventricular · cortical/juxtacortical · infratentorial · spinal cord · <b>optic nerve (NEW)</b>.</li>
<li>First step is always: typical presentation? <b>any better explanation?</b> → exclude mimics.</li>
</ul>
<div class="tablewrap"><table>
<tr><th>Involved regions</th><th>Typical attack onset</th><th>Incidental / RIS</th></tr>
<tr><td><b>4–5</b></td><td><b>MS — no paraclinical tool needed</b></td><td>DIT + CSF + Select-6 CVS</td></tr>
<tr><td><b>2–3</b></td><td>1 paraclinical tool required</td><td>DIT + CSF + Select-6 CVS</td></tr>
<tr><td><b>1</b></td><td>2 tools: (DIT or +CSF) + (CVS or ≥1 PRL)</td><td><b>MS cannot be diagnosed</b></td></tr>
</table></div>
<ul>
<li><b>+CSF</b> = CSF-specific OCB <b>or elevated κ-FLC index</b>.</li>
<li><b>Select-6 CVS</b> = ≥6 CVS-positive lesions (or majority if &lt;10 lesions).</li>
<li><b>PRL:</b> ≥1 paramagnetic rim lesion counts as a lesion-characterization tool.</li>
<li><b>Optic nerve as 5th topography</b> — only with qualified evidence: orbital MRI, <b>OCT</b> (inter-eye asymmetry pRNFL ≥5 µm, GCIPL ≥4 µm) or <b>VEP</b>. MS-typical: short, unilateral, no chiasm, no marked perineuritis. <b>Red flags (suggest NMOSD/MOGAD): long lesion, chiasmal/posterior, bilateral, perineural enhancement.</b></li>
<li>Age caveats: <b>&lt;12 y ➜ test MOG-IgG</b>; <b>&gt;50 y or vascular comorbidity ➜ require cord lesion, +CSF or CVS</b>.</li>
</ul>
<span class="tr">2024 revizyonunda optik sinir 5. bolge oldu. Tipik atak + 4–5 bolge = direkt MS tanisi. Tek bolge varsa iki ek arac gerekir; rastlantisal MRG bulgusuyla (RIS) tek bolgede MS tanisi konamaz. kFLC index artik OCB'ye esdeger "+CSF" sayilir.</span>
`
},
{
title: "Differential diagnosis: MS vs AQP4-NMOSD vs MOGAD patterns",
html: `
<div class="tablewrap"><table>
<tr><th>Region</th><th>MS</th><th>AQP4-NMOSD</th><th>MOGAD</th></tr>
<tr><td>Optic nerve</td><td>Short, unilateral</td><td><b>Posterior / chiasmal, long</b></td><td><b>Anterior, long, bilateral, perineuritis</b></td></tr>
<tr><td>Spinal cord</td><td>Short, peripheral</td><td><b>Central LETM, bright spotty lesions</b></td><td>LETM, <b>H-sign</b>, conus</td></tr>
<tr><td>Brain</td><td>Ovoid periventricular / juxtacortical, callosal, U-fibre</td><td><b>Area postrema, periependymal, diencephalic</b></td><td><b>Fluffy ADEM-like</b>, cortical, deep grey</td></tr>
<tr><td>CVS / PRL</td><td><b>Present — support MS</b></td><td>Usually absent</td><td>Usually absent</td></tr>
</table></div>
<ul>
<li>Pathology (Höftberger, Lassmann): MS = large veins, CVS, chronic active / iron-rim lesions. MOGAD = <b>small veins, perivenous confluent ADEM-like</b>, <b>no CVS, no iron rims, no SELs</b>.</li>
<li>Start the differential from the <b>presenting syndrome</b> (ON → NMOSD/MOGAD/ischaemic; myelitis → NMOSD/MOGAD/vascular/compressive; progressive myelopathy → compression, dural AVF, B12…). <b>"MS is more than multiple white matter lesions."</b></li>
<li>Interpret <b>optic nerve + cord + brain together</b>.</li>
</ul>
<span class="tr">Uclu ayirici tani kaliplari: MS kisa/perifere yakin lezyonlar + CVS/PRL; AQP4 santral uzun myelit + area postrema; MOGAD on yerlesimli uzun optik nevrit + konus/H-sign + silik ADEM-benzeri beyin lezyonlari (CVS ve demir halkasi YOK).</span>
`
}
]
},
{
day: "Day 2 — NMOSD, AQP4 & MOGAD",
topics: [
{
title: "NMOSD 2015 IPND diagnostic criteria (Wingerchuk)",
html: `
<h4>With AQP4-IgG</h4>
<ul>
<li><b>≥1 core clinical characteristic</b> + positive AQP4-IgG (<b>cell-based assay strongly recommended</b>) + exclusion of alternatives.</li>
</ul>
<h4>Without AQP4-IgG (or unknown)</h4>
<ul>
<li><b>≥2 core characteristics</b> from ≥1 attack, with ALL of: (a) at least one of <b>ON, LETM myelitis, or area postrema syndrome</b>; (b) dissemination in space; (c) additional MRI requirements.</li>
</ul>
<h4>6 core clinical characteristics</h4>
<ol>
<li>Optic neuritis</li>
<li>Acute myelitis</li>
<li><b>Area postrema syndrome</b> — otherwise unexplained <b>hiccups or nausea/vomiting</b></li>
<li>Acute brainstem syndrome</li>
<li>Symptomatic narcolepsy / diencephalic syndrome with typical MRI</li>
<li>Symptomatic cerebral syndrome with NMOSD-typical brain lesions</li>
</ol>
<h4>MRI requirements (seronegative)</h4>
<ul>
<li>ON: brain MRI normal/nonspecific OR optic nerve lesion <b>&gt;½ nerve length or involving chiasm</b>.</li>
<li>Myelitis: <b>LETM ≥3 contiguous vertebral segments</b> (or ≥3-segment focal atrophy if remote).</li>
<li>APS: dorsal medulla / area postrema lesion; brainstem syndrome: periependymal lesions.</li>
</ul>
<span class="tr">AQP4 pozitifse tek cekirdek bulgu yeter. Seronegatifse iki bulgu gerekir ve en az biri ON / LETM / area postrema sendromu olmali. LETM ≥3 vertebra segmenti. Area postrema sendromu = inatci hicirik/bulanti-kusma (sinav klasigi).</span>
`
},
{
title: "Pathogenesis: AQP4 vs MOG antibodies & complement",
html: `
<div class="tablewrap"><table>
<tr><th></th><th>AQP4-IgG+ NMOSD</th><th>MOGAD</th></tr>
<tr><td>Target cell</td><td><b>Astrocyte</b> (water channel, perivascular endfeet)</td><td><b>Oligodendrocyte</b> (myelin surface)</td></tr>
<tr><td>Pathology</td><td>Demyelination + <b>astrocyte destruction</b>, <b>C9neo +++</b></td><td>Demyelination, <b>astrocytes preserved</b>, C9neo +</td></tr>
<tr><td>Mechanism</td><td><b>Complement-mediated tissue destruction</b></td><td>Complement + FcR + <b>T-cell activation</b> (mixed)</td></tr>
<tr><td>Antigen binding</td><td><b>Monovalent</b>; hexameric platform for C1q binding</td><td><b>Bivalent</b>; needs 2nd hydrophobic domain</td></tr>
<tr><td>Anti-complement Rx</td><td><b>Anti-C5 approved</b> (eculizumab, ravulizumab)</td><td>No approved therapy</td></tr>
</table></div>
<ul>
<li>Complement effector arms: (1) C1q/C3 opsonization → phagocytic clearance/remodelling; (2) C3b–CR3 augments FcR-mediated phagocytosis &amp; ADCC; (3) <b>C5b-9 MAC → direct lysis (CDC)</b> — key in AQP4-NMOSD.</li>
<li>B cells: circulating <b>AQP4-specific B cells correlate with serum titre</b>; <b>MOG-specific B cells in ~60% of MOGAD without titre correlation</b>.</li>
<li><b>MLC1-IgG</b> — emerging astrocytic antibody in double-seronegative NMOSD-like disease; can persist despite rituximab (live CBA detection).</li>
</ul>
<span class="tr">AQP4 hastaligi kompleman aracili bir astrositopatidir (C9neo birikimi, MAC lizisi) — bu yuzden anti-C5 ilaclar ise yarar. MOGAD'da astrositler korunur, mekanizma karma (kompleman+FcR+T hucre) ve onayli ilac yoktur. AQP4/MOG negatif NMOSD-benzeri tablolarda MLC1 gibi yeni antikorlar akilda tutulmali.</span>
`
},
{
title: "Treatment: approved drugs & trials",
html: `
<h4>AQP4-IgG+ NMOSD — 4 approved monoclonals</h4>
<ul>
<li><b>Eculizumab / Ravulizumab — anti-C5</b></li>
<li><b>Inebilizumab — anti-CD19</b></li>
<li><b>Satralizumab — anti-IL-6 receptor</b></li>
<li><b>Rituximab — anti-CD20 (approved in Japan)</b></li>
</ul>
<h4>MOGAD</h4>
<ul>
<li><b>No approved therapy.</b> Same targets under study.</li>
<li><b>METEOROID phase 3 trial: satralizumab reduced MOGAD attacks</b> with favourable safety.</li>
</ul>
<h4>Antibody titres & relapse (summary slide)</h4>
<ul>
<li>Rising titre → higher relapse likelihood; stable/falling titres do <b>not</b> rule a relapse out.</li>
<li><b>Seronegative conversion in MOGAD → lower relapse risk</b>; in AQP4-NMOSD unclear — <b>most would NOT stop treatment</b>.</li>
</ul>
<span class="tr">NMOSD'de 4 onayli ilac: ekulizumab/ravulizumab (C5), inebilizumab (CD19), satralizumab (IL-6R), rituksimab (Japonya). MOGAD'da onayli ilac yok; METEOROID calismasinda satralizumab ataklari azaltti. MOGAD'da seronegatiflesme guven verir, AQP4'te tedavi kesilmez.</span>
`
},
{
title: "MOGAD: clinical features & 2023 diagnostic criteria",
html: `
<h4>General features</h4>
<ul>
<li>Incidence 3.4/million, prevalence 2/100,000, <b>M:F ≈ 1:1</b> (no female predominance, unlike MS/NMOSD).</li>
<li>Children: monophasic &amp; diffuse (ADEM-like); adults: relapsing &amp; multifocal. Relapse rate at 5 y: 60–80%.</li>
<li><b>Progressive disease is NOT seen.</b> CSF pleocytosis ~44%; <b>OCB &lt;20%</b>.</li>
</ul>
<h4>2023 international criteria — need A + B + C</h4>
<ul>
<li><b>A. Core demyelinating event:</b> ON · myelitis · ADEM · cerebral mono/polyfocal deficits · brainstem/cerebellar · <b>cortical encephalitis often with seizures</b>.</li>
<li><b>B. Positive serum MOG-IgG (cell-based assay):</b>
<ul><li><b>Clear positive → no supporting features needed.</b></li>
<li>Low positive / positive without titre / seronegative-but-CSF-positive → <b>AQP4-IgG negative AND ≥1 supporting feature</b>.</li></ul></li>
<li><b>C. Exclusion of better diagnoses (incl. MS).</b></li>
</ul>
<h4>Supporting clinical/MRI features</h4>
<ul>
<li>ON: bilateral simultaneous; longitudinal involvement <b>&gt;50% of optic nerve</b>; <b>perineural sheath enhancement</b>; optic disc oedema.</li>
<li>Myelitis: LETM; <b>central cord / H-sign</b>; <b>conus lesion</b>.</li>
<li>Brain: multiple ill-defined ("fluffy") T2 lesions; deep grey matter; pons/middle cerebellar peduncle/medulla; cortical lesion ± meningeal enhancement.</li>
</ul>
<h4>Red flags (think MS instead)</h4>
<ul>
<li>Progressive impairment without attacks · <b>contrast enhancement persisting ≥6 months</b> · no response to high-dose steroids.</li>
<li>MS pointers: well-circumscribed T2 lesions meeting DIS, CSF OCB, silent new T2 lesions over time, lesion retention, <b>T1 black holes</b>. (MOGAD lesions often <b>resolve</b> on follow-up.)</li>
</ul>
<span class="tr">MOGAD'da cinsiyet farki yok, progresif faz YOK, OCB nadir (&lt;%20). Net pozitif serum MOG-IgG + uygun klinik = tani; dusuk pozitifte AQP4 negatifligi + ≥1 destekleyici bulgu sart. 6 aydan uzun kontrast tutulumu, steroide yanitsizlik ve sessiz yeni lezyonlar MS'i dusundurur.</span>
`
},
{
title: "MOG-IgG testing: assay, timing & TRUE-MOGAD score",
html: `
<h4>Assay methodology</h4>
<ul>
<li><b>Live cell-based assay (CBA) preferred</b> — native antigen conformation. Ask your lab which method it uses.</li>
<li>Fixed CBAs miss <b>5–10% of serum</b> positives and <b>up to 1/3 of CSF</b> positives (false-neg by antigen, CSF: GABA-B 33%, LGI1 14%, AMPAR 8%, NMDAR 4%).</li>
<li>Report as <b>negative / low positive / clear positive</b>. <b>Serum testing recommended</b>; routine paired CSF <b>not</b> recommended — CSF useful if serum negative but suspicion high (or after apheresis).</li>
<li>Avoid testing low-probability patients (false positives). A historical negative on an old/fixed assay does not exclude MOGAD — <b>retest on live CBA</b>.</li>
</ul>
<h4>Timing — titres fall!</h4>
<ul>
<li>Test <b>during the relapse / as early as possible</b>. Median 38.5 days to a clear-positive first result vs 205 days to low-positive.</li>
<li>~<b>25% of clear positives become low positive by 6 months</b>; ~<b>50% become seronegative by 12 months</b>.</li>
</ul>
<h4>TRUE-MOGAD score (Mayo, 2026) — for low positives / difficult cases</h4>
<div class="tablewrap"><table>
<tr><th>Letter</th><th>Variable</th><th>Points</th></tr>
<tr><td>T</td><td>Titre clear positive (≥1:100)</td><td>+1</td></tr>
<tr><td>R</td><td>Relapsing ON (≥3 episodes)</td><td>+1</td></tr>
<tr><td>U</td><td>Under 18 y at onset</td><td>+1</td></tr>
<tr><td>E</td><td>Encephalitis phenotype (ADEM / cortical encephalitis)</td><td><b>+2</b></td></tr>
<tr><td>M</td><td>MRI/other supportive features (2023 criteria)</td><td><b>+2</b></td></tr>
<tr><td>O</td><td>Oligoclonal bands in CSF</td><td><b>−2</b></td></tr>
<tr><td>G</td><td>Gradually progressive course</td><td><b>−2</b></td></tr>
<tr><td>A</td><td>Abrupt hyperacute onset (nadir &lt;24 h)</td><td><b>−2</b></td></tr>
<tr><td>D</td><td>Disappearance of ≥1 T2 lesion on follow-up</td><td>+1</td></tr>
</table></div>
<ul>
<li><b>Baseline (without R&amp;D): score ≥1 → MOGAD very likely (100% sens, 86.5% spec) → consider acute treatment.</b></li>
<li><b>Follow-up (full score): ≥2 → 92% sens, 97.3% spec → consider chronic treatment.</b></li>
</ul>
<div class="pearl">Teaching pearls: verify reported ON objectively (OCT/RNFL, VEP); do orbital + spinal MRI and fundus exam in suspected MOGAD; follow-up MRI matters (new or disappearing lesions).</div>
<span class="tr">MOG-IgG canli hucre bazli testle, serumdan ve atak sirasinda calisilmali (titre zamanla duser: 12 ayda %50 seronegatif). Sonuc negatif/dusuk/net pozitif olarak raporlanmali. TRUE-MOGAD skoru dusuk pozitiflerde gercek MOGAD'i ayirt eder; OCB pozitifligi, sinsi progresyon ve hiperakut baslangic MOGAD ALEYHINE puandir.</span>
`
}
]
},
{
day: "Day 3 — Autoimmune & Paraneoplastic Encephalitis",
topics: [
{
title: "Pathophysiology: surface vs intracellular antibodies",
html: `
<div class="tablewrap"><table>
<tr><th></th><th>Cell-surface antibodies</th><th>Intracellular (onconeural) antibodies</th></tr>
<tr><td>Examples</td><td>NMDAR, LGI1, CASPR2, GABA-B, AMPAR, GlyR, DPPX</td><td>Hu, Yo, Ri, CV2/CRMP5, Ma2, amphiphysin</td></tr>
<tr><td>Mechanism</td><td><b>Antibody itself pathogenic</b> (receptor internalization/blocking — e.g. NMDAR)</td><td>Antibody = <b>marker</b>; damage by <b>cytotoxic T cells</b></td></tr>
<tr><td>Tumour association</td><td>Variable (NMDAR–teratoma; LGI1 rare)</td><td><b>Strong — paraneoplastic</b></td></tr>
<tr><td>Response to immunotherapy</td><td><b>Good, often reversible</b></td><td>Poor; treat the tumour</td></tr>
</table></div>
<ul>
<li>Paraneoplastic mechanism: ectopic antigen expression by tumour → cross-reactive immune response against neural tissue.</li>
<li>For suspected AE, <b>test BOTH serum and CSF</b> (contrast with MOG: serum only). NMDAR-IgG is <b>more sensitive in CSF</b>; LGI1 often better in serum.</li>
</ul>
<span class="tr">Yuzey antikorlari (NMDAR, LGI1...) dogrudan patojeniktir, tedaviye iyi yanit verir. Hucre ici (onkonoral) antikorlar T-hucre aracili hasarin gostergesidir, tumorle guclu iliskilidir ve prognoz kotudur. AE suphesinde hem serum HEM BOS gonderilir.</span>
`
},
{
title: "Autoimmune encephalitis: Graus criteria & key syndromes",
html: `
<h4>Possible AE (Graus 2016) — all 3</h4>
<ul>
<li>Subacute (&lt;3 months) working-memory deficit, altered mental status, or psychiatric symptoms;</li>
<li>≥1 of: new focal CNS findings · unexplained seizures · CSF pleocytosis (&gt;5 WBC) · MRI features of encephalitis;</li>
<li>Exclusion of alternatives.</li>
</ul>
<h4>Definite autoimmune limbic encephalitis</h4>
<ul>
<li>Subacute limbic symptoms + <b>bilateral medial temporal T2/FLAIR hyperintensity</b> + (CSF pleocytosis or EEG temporal activity) + exclusion; antibody positivity confirms.</li>
</ul>
<h4>Key surface-antibody syndromes</h4>
<div class="tablewrap"><table>
<tr><th>Antibody</th><th>Classic picture</th><th>Association</th></tr>
<tr><td><b>NMDAR</b></td><td>Young woman: psychiatric onset → seizures → orofacial dyskinesias → dysautonomia/hypoventilation. <b>CSF more sensitive.</b></td><td><b>Ovarian teratoma</b>; post-HSV</td></tr>
<tr><td><b>LGI1</b></td><td>Older man: limbic encephalitis, <b>faciobrachial dystonic seizures</b>, <b>hyponatremia</b>; serum often sufficient</td><td>Tumour rare</td></tr>
<tr><td><b>CASPR2</b></td><td><b>Morvan syndrome</b>, neuromyotonia, limbic encephalitis, neuropathic pain</td><td>Thymoma</td></tr>
<tr><td><b>GABA-B R</b></td><td>Limbic encephalitis with <b>prominent early seizures</b></td><td><b>SCLC</b></td></tr>
<tr><td><b>AMPAR</b></td><td>Limbic encephalitis, psychiatric features</td><td>Lung/breast/thymoma</td></tr>
<tr><td><b>DPPX</b></td><td>Diarrhoea/weight loss + CNS hyperexcitability, PERM-like</td><td>Lymphoma (rare)</td></tr>
<tr><td><b>Glycine R</b></td><td>PERM / stiff-person spectrum</td><td>Thymoma (some)</td></tr>
</table></div>
<h4>Treatment principles</h4>
<ul>
<li>1st line: <b>IV steroids + IVIG and/or plasma exchange</b> (+ tumour removal!).</li>
<li>2nd line: <b>rituximab, cyclophosphamide</b>. Early treatment → better outcome.</li>
</ul>
<span class="tr">NMDAR: genc kadin, psikiyatrik baslangic, over teratomu, BOS daha duyarli. LGI1: yasli erkek, fasiyobrakiyal distonik nobet + hiponatremi. CASPR2: Morvan/nöromiyotoni + timoma. GABA-B: erken belirgin nobet + kucuk hucreli akciger CA. Tedavi: steroid + IVIG/plazmaferez, yanitsizsa rituksimab/siklofosfamid + tumor cikarimi.</span>
`
},
{
title: "Anti-IgLON5 disease — 'from seronegative cases to disease discovery'",
html: `
<ul>
<li>Discovered (Barcelona/Graus-Dalmau group, 2014) in patients with a distinctive <b>sleep disorder</b> initially considered antibody-negative — the course lecture's example of disease discovery from seronegative cohorts.</li>
<li>Clinical tetrad: <b>NREM/REM parasomnia + obstructive sleep apnea/stridor</b>, <b>bulbar dysfunction</b> (dysphagia, dysarthria), <b>gait instability</b>/PSP-like picture, chorea/cognitive decline.</li>
<li>Chronic, insidious course mimicking neurodegeneration; pathology shows <b>neuronal tau deposits</b> (brainstem/hypothalamus) — a bridge between autoimmunity and neurodegeneration.</li>
<li>Strong HLA association: <b>HLA-DRB1*10:01 / DQB1*05:01</b>.</li>
<li>IgG4-predominant antibody; response to immunotherapy often <b>partial/poor</b> — treat early.</li>
</ul>
<span class="tr">IgLON5: uyku bozuklugu (parasomni + stridor/OSA) + bulber bulgular + yurume dengesizligi; kronik seyirli, norodejenerasyonu taklit eder, tau birikimi ve guclu HLA-DRB1*10:01 iliskisi vardir. Seronegatif kohortlardan yeni hastalik kesfinin ornegidir.</span>
`
},
{
title: "Paraneoplastic neurological syndromes & onconeural antibodies",
html: `
<h4>PNS 2021 updated criteria (Graus)</h4>
<ul>
<li><b>High-risk phenotypes:</b> limbic encephalitis · rapidly progressive cerebellar syndrome · <b>sensory neuronopathy</b> · opsoclonus-myoclonus · encephalomyelitis · gastrointestinal pseudo-obstruction · Lambert-Eaton (LEMS).</li>
<li>Diagnosis scored by <b>PNS-Care score</b> (phenotype + antibody + cancer): possible / probable / <b>definite</b>.</li>
<li>High-risk ("well-characterized" onconeural) antibodies = intracellular targets, &gt;70% cancer association.</li>
</ul>
<h4>Classic onconeural antibody–tumour pairs</h4>
<div class="tablewrap"><table>
<tr><th>Antibody</th><th>Syndrome</th><th>Tumour</th></tr>
<tr><td><b>Anti-Hu (ANNA-1)</b></td><td><b>Sensory neuronopathy</b>, limbic encephalitis, encephalomyelitis</td><td><b>SCLC</b></td></tr>
<tr><td><b>Anti-Yo (PCA-1)</b></td><td><b>Cerebellar degeneration</b></td><td><b>Ovary / breast</b></td></tr>
<tr><td><b>Anti-Ri (ANNA-2)</b></td><td><b>Opsoclonus-myoclonus</b>, brainstem</td><td>Breast, lung</td></tr>
<tr><td><b>Anti-CV2/CRMP5</b></td><td>Encephalomyelitis, chorea, optic neuritis, neuropathy</td><td>SCLC, thymoma</td></tr>
<tr><td><b>Anti-Ma2</b></td><td>Limbic/diencephalic/brainstem encephalitis</td><td><b>Testicular germ-cell</b></td></tr>
<tr><td><b>Anti-amphiphysin</b></td><td><b>Stiff-person syndrome</b>, myelopathy</td><td>Breast, SCLC</td></tr>
</table></div>
<ul>
<li>Management: <b>find and treat the tumour</b> (whole-body imaging, repeat at intervals if negative); immunotherapy response limited (T-cell mediated).</li>
</ul>
<span class="tr">Klasik eslesmeler ezber: Hu→SCLC+duyusal noronopati, Yo→over/meme+serebellar dejenerasyon, Ri→meme+opsoklonus-miyoklonus, Ma2→testis, amfifizin→stiff-person+meme, CV2→SCLC/timoma. Tani PNS-Care skoru ile; esas tedavi tumorun bulunup tedavi edilmesidir.</span>
`
},
{
title: "Cross-cutting lab pearls (all 3 days)",
html: `
<ul>
<li><b>Live CBA &gt; fixed CBA &gt; ELISA</b> for conformational antigens (AQP4, MOG, neuronal surface). Fixed assays: ~5–10% serum and up to 1/3 CSF false negatives.</li>
<li>Where to test: <b>MOG-IgG → serum</b> (CSF only if serum-negative + high suspicion) · <b>AQP4-IgG → serum (CBA)</b> · <b>AE panel → serum + CSF</b> · <b>NMDAR → CSF more sensitive</b> · <b>LGI1 → serum often better</b>.</li>
<li>Timing: antibody titres fall with time and immunotherapy/apheresis — <b>sample early, during the attack, before treatment</b> when possible.</li>
<li>Not all labs are equal — ask about methodology; negative on an old/fixed assay ➜ retest on live CBA.</li>
<li>Interpret every antibody in <b>clinical context</b> (pre-test probability!) — avoid panel-testing low-probability patients.</li>
</ul>
<span class="tr">Ortak akil: canli hucre bazli test tercih edilir, ornek erken ve tedavi oncesi alinir, MOG serumdan / NMDAR BOS'tan daha duyarlidir, dusuk olasilikli hastada panel taramasi yapilmaz.</span>
`
}
]
}
];

var QUESTIONS = [
/* ---------------- MS (Day 1) ---------------- */
{cat:"ms", q:"According to the 2024 revised McDonald criteria, how many topographies count for dissemination in space (DIS)?",
opts:["4 — periventricular, juxtacortical, infratentorial, spinal cord","5 — the optic nerve is added as a new topography","3 — brain, cord, optic nerve","6 — including the area postrema"], a:1,
ex:`The 2024 revision adds the <b>optic nerve</b> as the 5th DIS topography (periventricular, cortical/juxtacortical, infratentorial, spinal cord, optic nerve), demonstrable by orbital MRI, OCT, or VEP.<span class="tr">2024 revizyonunda optik sinir 5. DIS bolgesi olarak eklendi.</span>`},
{cat:"ms", q:"A patient with a typical attack has MRI lesions in 4 of 5 DIS topographies. What is required to diagnose MS (2024 criteria)?",
opts:["Demonstration of dissemination in time","Positive CSF (OCB or κ-FLC index)","Nothing further — MS can be diagnosed outright","≥6 central-vein-sign lesions"], a:2,
ex:`With a typical attack and involvement of <b>4–5 topographies</b>, MS is diagnosed with <b>no additional paraclinical tool</b> — DIT is no longer required. Fewer regions require CSF, CVS/PRL, or DIT.<span class="tr">Tipik atak + 4–5 bolge tutulumu = ek arac gerekmeden MS tanisi.</span>`},
{cat:"ms", q:"Which CSF finding is accepted as '+CSF' in the 2024 McDonald criteria?",
opts:["Elevated IgG index only","CSF-specific oligoclonal bands or elevated kappa-FLC index","Pleocytosis >50 cells/µL","Positive MRZ reaction"], a:1,
ex:`The 2024 criteria accept <b>either CSF-specific OCB or an elevated κ-FLC index</b> as the CSF criterion — the first formal incorporation of kappa free light chains.<span class="tr">kFLC indeksi artik OCB'ye esdeger "+CSF" kabul ediliyor.</span>`},
{cat:"ms", q:"What does the 'Select-6' central vein sign (CVS) rule mean?",
opts:["6 Gd-enhancing lesions","≥6 CVS-positive lesions (or the majority if fewer than 10 lesions)","CVS in ≥60% of all lesions","6 periventricular lesions"], a:1,
ex:`<b>Select-6:</b> ≥6 CVS-positive lesions — or the majority of lesions when fewer than 10 are present — supports MS as an optional diagnostic tool.<span class="tr">Select-6 = ≥6 santral ven isaretli lezyon (lezyon sayisi &lt;10 ise cogunlugu).</span>`},
{cat:"ms", q:"A paramagnetic rim lesion (PRL) on susceptibility-weighted MRI corresponds to which pathology?",
opts:["Acute BBB breakdown with T-cell infiltration","Chronic active lesion with iron-laden microglia/macrophages at the edge","Remyelinated shadow plaque","Wallerian degeneration"], a:1,
ex:`PRL is the <b>in-vivo signature of chronic active (smouldering) lesions</b>: a rim of iron-laden microglia/macrophages around an inactive core, linked to progression. Only 'expanding PRLs' are also slowly expanding lesions.<span class="tr">PRL = demir yuklu mikroglia halkali kronik aktif lezyon; progresyonun goruntuleme belirteci.</span>`},
{cat:"ms", q:"In a patient with incidental MRI findings (RIS) and only 1 involved topography, the 2024 McDonald criteria allow:",
opts:["MS diagnosis if OCB positive","MS diagnosis if ≥1 PRL present","MS diagnosis after new T2 lesion on follow-up","MS cannot be diagnosed"], a:3,
ex:`In the incidental/RIS pathway, <b>a single involved region cannot yield an MS diagnosis</b>; 2–3 or 4–5 regions require DIT + CSF + Select-6 CVS.<span class="tr">RIS + tek bolge = MS tanisi konamaz.</span>`},
{cat:"ms", q:"Which oligoclonal band (IEF) patterns indicate intrathecal IgG synthesis?",
opts:["Patterns 1 and 2","Patterns 2 and 3","Patterns 3 and 4","Patterns 4 and 5"], a:1,
ex:`<b>Pattern 2</b> (CSF-restricted bands) and <b>pattern 3</b> (CSF bands plus identical serum bands) indicate local synthesis. Pattern 4 = mirror/systemic; pattern 5 = paraprotein.<span class="tr">Sadece patern 2 ve 3 intratekal sentez gosterir; 4 sistemik, 5 gammopatidir.</span>`},
{cat:"ms", q:"The MRZ reaction is:",
opts:["A measure of blood-CSF barrier dysfunction","A polyspecific intrathecal response against measles, rubella and varicella-zoster, positive in ~80% of MS and highly MS-specific","A serum test for prior infections","A quantitative measure of IgM synthesis"], a:1,
ex:`The <b>MRZ reaction</b> (Measles–Rubella–Zoster antibody indices) reflects polyspecific intrathecal synthesis: ~80% sensitive and among the most <b>specific</b> CSF findings for MS.<span class="tr">MRZ: kizamik-kizamikcik-VZV'ye karsi intratekal polispesifik yanit; ~%80 duyarli, MS icin cok ozgul.</span>`},
{cat:"ms", q:"Which statement about kappa free light chains (κ-FLC) in MS diagnostics is correct (Hegen 2023 consensus)?",
opts:["κ-FLC fully replaces OCB testing","κ-FLC is qualitative while OCB is quantitative","κ-FLC is a useful quantitative, rater-independent addition but NOT a substitute for OCB-IgG","κ-FLC is unreliable with blood contamination"], a:2,
ex:`κ-FLC is fast, cheap, <b>quantitative</b> and robust, but gives no clonality information — the consensus keeps it as an <b>addition to, not a replacement for, OCB</b>. (In the 507-patient cohort: κ-FLC Reiber diagram 95% vs OCB 87%.)<span class="tr">Kappa-FLC kantitatif ve pratiktir ama OCB'nin yerine gecmez; birlikte kullanilir.</span>`},
{cat:"ms", q:"Which CSF parameter carries the highest predictivity for MS disease progression according to the course lecture?",
opts:["IgA synthesis","Intrathecal IgM synthesis","Total protein","Albumin quotient"], a:1,
ex:`OCB-IgG and κ-FLC have the highest <b>sensitivity</b> (&gt;95%), while <b>intrathecal IgM synthesis has the highest predictivity</b> for disease progression.<span class="tr">En duyarli: OCB + kappa-FLC; prognozu en iyi ongoren: intratekal IgM sentezi.</span>`},
{cat:"ms", q:"Serum NfL interpretation requires which adjustment?",
opts:["Renal function only","Age (and BMI) — use z-scores or adjusted reference ranges","Time of day of sampling","Fasting status"], a:1,
ex:`Physiological NfL rises steeply with <b>age</b> (and varies with BMI/blood volume) — raw values are uninterpretable; use <b>age-adjusted z-scores/percentiles</b>.<span class="tr">NfL yasla fizyolojik olarak artar; yas (ve BKI) duzeltmeli z-skoru sarttir.</span>`},
{cat:"ms", q:"Which biomarker profile fits GFAP?",
opts:["Neuronal type IV filament reflecting acute axonal damage","Astrocytic type III filament associated with progression and PIRA, largely unaffected by anti-CD20 therapy","B-cell activity marker that falls with rituximab","Complement activation product"], a:1,
ex:`GFAP is the <b>type III intermediate filament of astrocytes</b>; elevation reflects astrocyte damage and/or proliferation, tracks <b>progression/PIRA</b>, and (unlike NfL) is not lowered by anti-CD20. NfL = neuronal, type IV, acute damage.<span class="tr">GFAP astrositik (tip III), progresyon/PIRA belirteci; NfL noronal (tip IV), akut hasar belirteci.</span>`},
{cat:"ms", q:"In the OBOE study (JAMA Neurol 2024), which CSF biomarkers correlated best with disease-progression biology?",
opts:["NfL and CXCL13","GFAP and NfH","IL-6 and TREM2","CD27 and CCL19"], a:1,
ex:`<b>GFAP and NfH</b> mapped onto progression biology (SELs, atrophy, EDSS; GFAP predicted CDP24), whereas NfL and immune markers tracked acute inflammation and fell after anti-CD20.<span class="tr">OBOE: GFAP+NfH progresyonla, NfL akut inflamasyonla iliskili.</span>`},
{cat:"ms", q:"In radiologically isolated syndrome, which combination conferred a 5-year clinical-conversion risk of ~58% (rising to ~82% with young age + IgM OCB)?",
opts:["High serum NfL z-score + positive IgG OCB","Elevated GFAP + pleocytosis","Positive MRZ + high IgG index","Vitamin D deficiency + EBV positivity"], a:0,
ex:`Fissolo (JAMA 2025): <b>high sNfL z-score + IgG OCB → 58%</b> 5-year risk; younger age plus <b>IgM OCB → 81.6%</b>.<span class="tr">RIS'te sNfL z-skoru + IgG OCB %58, genc yas + IgM OCB ile %82 donusum riski.</span>`},
{cat:"ms", q:"Gadolinium-enhancing lesions in MS:",
opts:["Reflect chronic microglial activation","Are more common in the spinal cord than the brain","Reflect BBB disruption and are up to 10× more sensitive than clinical relapses for detecting activity","Are typical of cortical grey matter"], a:2,
ex:`Gd enhancement = active, T-cell-mediated inflammation with <b>BBB breakdown</b>; ~<b>10× more sensitive than relapses</b>, more frequent in brain than cord, and <b>absent in cortical grey matter</b>.<span class="tr">Gd tutulumu KBB yikimini gosterir, subklinik aktiviteyi ataktan ~10 kat daha duyarli saptar, kortikal gri cevherde gorulmez.</span>`},
{cat:"ms", q:"Which MRI sequences are recommended for detecting cortical lesions?",
opts:["T1 SE and T2 FSE","DIR, PSIR, MP2RAGE","DWI and ADC","TOF angiography"], a:1,
ex:`Cortical lesions need dedicated sequences — <b>DIR, PSIR, MPRAGE/MP2RAGE</b>. They predict CIS→MS conversion and are <b>absent/rare in MS mimics</b>, aiding differential diagnosis.<span class="tr">Kortikal lezyonlar icin DIR/PSIR/MP2RAGE gerekir; MS taklitcilerinde nadirdir.</span>`},
{cat:"ms", q:"Routine individual-patient monitoring with brain volumetry/atrophy measures is:",
opts:["Recommended annually","Recommended only on 3T scanners","Not recommended — fluid shifts, pseudoatrophy and gliosis confound individual measurements","Mandatory before starting anti-CD20"], a:2,
ex:`Volume can fall (tissue loss, dehydration, oedema resolution) or rise (remyelination, gliosis, inflammation) for non-disease reasons — <b>volumetric monitoring is not recommended in routine practice</b>.<span class="tr">Beyin hacmi olcumu bireysel rutin takipte onerilmez (psodoatrofi, hidrasyon, gliozis karistiricidir).</span>`},
{cat:"ms", q:"Iron-rim slowly expanding lesions (SELs) are most characteristic of which disease phase?",
opts:["Radiologically isolated syndrome","Early RRMS at first attack","Late RRMS and early progressive MS, expanding over 3–5 years","Only PPMS"], a:2,
ex:`Iron-rim SELs (activated microglia rim) peak in <b>late RRMS / early progressive MS</b> and expand over <b>3–5 years</b>; T1w-SELs expand over weeks–months and are more frequent in PPMS than RRMS.<span class="tr">Demir halkali SEL'ler gec RRMS/erken progresif MS'te belirgindir ve 3–5 yilda genisler.</span>`},
{cat:"ms", q:"Elevated choroid plexus volume in MS has been associated with all EXCEPT:",
opts:["T2 lesion volume and contrast-enhancing lesions","Cognitive impairment and fatigue","Prediction of EDSS evolution better than T2LV","Improved remyelination capacity"], a:3,
ex:`CP volume correlates with lesion load, relapse activity, cognition/fatigue and <b>predicts EDSS evolution better than T2LV or CELs</b> — it is a marker of inflammation, not of repair.<span class="tr">Koroid pleksus hacmi kotu prognoz gostergesidir; remiyelinizasyonla iliskisi yoktur.</span>`},
{cat:"ms", q:"For optic nerve DIS evidence via OCT, the suggested inter-eye asymmetry thresholds are:",
opts:["pRNFL ≥5 µm, GCIPL ≥4 µm","pRNFL ≥10 µm, GCIPL ≥8 µm","pRNFL ≥2 µm, GCIPL ≥1 µm","No thresholds are defined"], a:0,
ex:`Optic-nerve topography requires qualified evidence (orbital MRI, OCT, VEP); suggested OCT inter-eye asymmetry: <b>pRNFL ≥5 µm, GCIPL ≥4 µm</b>. Red flags against MS-ON: long/chiasmal lesion, bilateral involvement, perineural enhancement.<span class="tr">OCT esikleri: pRNFL ≥5 µm, GCIPL ≥4 µm goz-arasi fark.</span>`},
{cat:"ms", q:"Per the 2024 McDonald age-related caveats, which is correct?",
opts:["Patients >50 years need no extra confirmation","Children <12 years should be tested for MOG-IgG; patients >50 y or with vascular comorbidity should have cord lesion, positive CSF or CVS confirmation","MOG testing is required at all ages","CVS cannot be used above age 50"], a:1,
ex:`<b>&lt;12 y → MOG-IgG testing recommended</b> (exclude MOGAD); <b>&gt;50 y or vascular disorders → require spinal cord lesion, +CSF or CVS</b> to avoid misdiagnosis from nonspecific white-matter lesions.<span class="tr">12 yas alti: MOG bak; 50 yas ustu/vaskuler riskli: kord lezyonu, BOS veya CVS ile dogrula.</span>`},

/* ---------------- NMOSD / MOGAD (Day 2) ---------------- */
{cat:"nmosd", q:"According to the 2015 IPND criteria, diagnosis of NMOSD with AQP4-IgG requires:",
opts:["≥2 core clinical characteristics","≥1 core clinical characteristic + positive AQP4-IgG (CBA) + exclusion of alternatives","LETM as a mandatory feature","Positive CSF oligoclonal bands"], a:1,
ex:`With AQP4-IgG (best method = <b>cell-based assay</b>), a <b>single core characteristic</b> plus exclusion of alternatives suffices. LETM is not mandatory when seropositive.<span class="tr">AQP4 pozitifse tek cekirdek klinik bulgu yeterlidir.</span>`},
{cat:"nmosd", q:"For seronegative NMOSD, at least one of the ≥2 core characteristics must be:",
opts:["Brainstem syndrome, narcolepsy, or cerebral syndrome","Optic neuritis, acute myelitis with LETM, or area postrema syndrome","Optic neuritis and diencephalic syndrome","Any two attacks of myelitis"], a:1,
ex:`Seronegative NMOSD: ≥2 core characteristics with DIS, and at least one must be <b>ON, LETM myelitis, or area postrema syndrome</b>, plus MRI requirements.<span class="tr">Seronegatif NMOSD'de bulgulardan en az biri ON / LETM miyelit / area postrema sendromu olmali.</span>`},
{cat:"nmosd", q:"Area postrema syndrome presents with:",
opts:["Sudden hearing loss","Otherwise unexplained intractable hiccups, nausea and vomiting","Trigeminal neuralgia","Optic disc oedema"], a:1,
ex:`<b>Intractable hiccups/nausea/vomiting</b> from a dorsal medulla (area postrema) lesion — a hallmark core feature of NMOSD, often misdiagnosed as GI disease.<span class="tr">Area postrema sendromu = aciklanamayan inatci hicirik/bulanti-kusma; NMOSD'nin klasik bulgusu.</span>`},
{cat:"nmosd", q:"LETM in NMOSD is defined as a cord lesion extending over:",
opts:["≥2 vertebral segments","≥3 contiguous vertebral segments","≥5 vertebral segments","The entire cord"], a:1,
ex:`LETM = intramedullary lesion over <b>≥3 contiguous vertebral segments</b> (or ≥3-segment focal atrophy with a compatible history), typically central with bright spotty lesions in AQP4-NMOSD.<span class="tr">LETM ≥3 bitisik vertebra segmenti; AQP4'te santral yerlesim tipiktir.</span>`},
{cat:"nmosd", q:"The core pathogenic mechanism of AQP4-IgG+ NMOSD is:",
opts:["T-cell mediated oligodendrocyte loss","Complement-mediated astrocyte destruction (C9neo deposition, MAC lysis)","Receptor internalization without cell death","Mitochondrial failure"], a:1,
ex:`AQP4-IgG binds astrocytic water channels <b>monovalently</b>, forms a hexameric platform for <b>C1q</b>, and drives <b>complement-mediated astrocytopathy</b> with heavy C9neo deposition — hence anti-C5 therapy works.<span class="tr">AQP4-NMOSD kompleman aracili astrositopatidir (C9neo+++, MAC lizisi) — anti-C5 tedavinin gerekcesi.</span>`},
{cat:"nmosd", q:"Which is NOT an approved therapy for AQP4-IgG+ NMOSD?",
opts:["Eculizumab (anti-C5)","Inebilizumab (anti-CD19)","Satralizumab (anti-IL-6R)","Natalizumab (anti-α4-integrin)"], a:3,
ex:`Approved: <b>eculizumab/ravulizumab (C5), inebilizumab (CD19), satralizumab (IL-6R)</b> — plus rituximab in Japan. <b>Natalizumab is an MS drug and can worsen NMOSD.</b><span class="tr">Natalizumab NMOSD'de onayli degildir, hatta kotulestirebilir.</span>`},
{cat:"nmosd", q:"Regarding MOGAD treatment, which statement is correct?",
opts:["Eculizumab is approved for MOGAD","No therapy is approved; the phase 3 METEOROID trial showed satralizumab reduces MOGAD attacks","Rituximab is approved worldwide for MOGAD","Interferon-beta is first line"], a:1,
ex:`MOGAD has <b>no approved therapy</b>. The <b>METEOROID</b> phase 3 trial showed <b>satralizumab (anti-IL-6R)</b> reduced attacks with favourable safety.<span class="tr">MOGAD'da onayli ilac yok; METEOROID'de satralizumab ataklari azaltti.</span>`},
{cat:"nmosd", q:"How do MOG-IgG and AQP4-IgG differ in antigen binding?",
opts:["Both bind monovalently","MOG-IgG binds bivalently; AQP4-IgG binds monovalently forming a hexameric C1q-binding platform","AQP4-IgG binds bivalently; MOG-IgG monovalently","Neither activates complement"], a:1,
ex:`<b>AQP4-IgG: monovalent</b> binding with hexameric C1q platform → strong complement activation. <b>MOG-IgG: bivalent</b>, needs the second hydrophobic domain; effector mechanisms are mixed (complement + FcR + T cells).<span class="tr">AQP4 monovalan (guclu kompleman), MOG bivalan baglanir.</span>`},
{cat:"nmosd", q:"Which feature argues AGAINST MOGAD?",
opts:["ADEM phenotype in a child","Optic disc oedema","Progressive neurological decline without attacks","Conus medullaris lesion"], a:2,
ex:`<b>Progressive disease is not seen in MOGAD</b> — progression without attacks, persistent enhancement ≥6 months and steroid non-response are red flags (think MS or another diagnosis).<span class="tr">MOGAD'da progresif faz olmaz; ataksiz kotulesme kirmizi bayraktir.</span>`},
{cat:"nmosd", q:"Typical CSF findings in MOGAD are:",
opts:["OCB in >90%, no pleocytosis","Pleocytosis in ~44%, OCB in <20%","Always acellular","OCB in ~50%, pleocytosis rare"], a:1,
ex:`MOGAD: <b>CSF pleocytosis ~44%</b>, <b>OCB &lt;20%</b> — very different from MS (OCB 90–98%). Persistent OCB should make you rethink MS.<span class="tr">MOGAD'da OCB nadirdir (&lt;%20); MS'te %90-98. OCB pozitifligi MOGAD aleyhine puandir.</span>`},
{cat:"nmosd", q:"In the 2023 MOGAD criteria, a patient with optic neuritis and a CLEAR positive serum MOG-IgG (live CBA) requires:",
opts:["≥1 supporting MRI feature","AQP4-IgG negativity plus 2 supporting features","No additional supporting features — criteria A+B fulfilled (if better diagnoses excluded)","CSF MOG-IgG confirmation"], a:2,
ex:`<b>Clear positive serum MOG-IgG + a core demyelinating event needs no supporting features</b>; only low-positive/no-titre/CSF-only results require AQP4 negativity + ≥1 supporting clinical/MRI feature.<span class="tr">Net pozitif MOG-IgG + uygun klinik = destekleyici bulgu gerekmez.</span>`},
{cat:"nmosd", q:"Recommended MOG-IgG testing practice includes:",
opts:["Routine paired serum and CSF testing in all patients","Fixed CBA for reproducibility","Serum testing by live CBA, reported as negative / low positive / clear positive; CSF only if serum negative with high suspicion","ELISA screening followed by immunoblot"], a:2,
ex:`Panel recommendations: <b>live CBA, serum</b>, qualitative reporting (<b>negative/low/clear positive</b>); routine CSF testing not recommended — reserve for serum-negative high-suspicion cases or after apheresis.<span class="tr">MOG-IgG: canli CBA ile serumdan; sonuc negatif/dusuk/net pozitif olarak raporlanmali.</span>`},
{cat:"nmosd", q:"Why should MOG-IgG be sampled early, during the attack?",
opts:["Titres rise over time","Because ~25% of clear positives become low positive by 6 months and ~50% seronegative by 12 months","Assays only work in the acute phase","Steroids increase titres"], a:1,
ex:`Titres fall with time and treatment: <b>~25% clear→low positive at 6 months, ~50% seronegative at 12 months</b>; median 38.5 days to a clear-positive first result vs 205 days to low-positive.<span class="tr">Titreler zamanla ve steroidle duser — ornek atak sirasinda, erken alinmali.</span>`},
{cat:"nmosd", q:"Compared with live cell-based assays, fixed CBAs:",
opts:["Are more sensitive for conformational epitopes","Miss ~5–10% of serum positives and up to one third of CSF positives","Are the gold standard for MOG-IgG","Eliminate false positives entirely"], a:1,
ex:`Fixation denatures conformational antigens: <b>5–10% of serum</b> cases and <b>up to 1/3 of CSF</b> samples are false-negative on fixed CBA (worst for GABA-B ~33%). A negative fixed test does not exclude disease — retest live.<span class="tr">Fikse testler konformasyonel epitoplari kacirir; negatiflik hastaligi dislamaz, canli CBA ile tekrar test edilmeli.</span>`},
{cat:"nmosd", q:"In the TRUE-MOGAD score, which variables give NEGATIVE points?",
opts:["ADEM phenotype, MRI supportive features, young age","CSF oligoclonal bands, gradually progressive course, abrupt hyperacute onset (<24 h to nadir)","Relapsing optic neuritis and lesion disappearance","Clear positive titre ≥1:100"], a:1,
ex:`Negative (−2 each): <b>O</b>CB positivity, <b>G</b>radually progressive course, <b>A</b>brupt onset with nadir &lt;24 h — all atypical for MOGAD. E (encephalitis phenotype) and M (MRI support) give +2.<span class="tr">TRUE-MOGAD'da OCB, sinsi progresyon ve hiperakut baslangic −2 puandir (MOGAD aleyhine).</span>`},
{cat:"nmosd", q:"TRUE-MOGAD baseline score cutoff ≥1 (without R & D) performs as:",
opts:["100% sensitivity, 86.5% specificity — supports considering acute treatment","92% sensitivity, 97.3% specificity","50% sensitivity, 99% specificity","Not validated at baseline"], a:0,
ex:`Baseline ≥1: <b>100% sensitivity, 86.5% specificity</b> (good rule-out → acute treatment); full score at follow-up ≥2: 92% sensitivity, <b>97.3% specificity</b> (rule-in → chronic treatment).<span class="tr">Baslangicta skor ≥1: %100 duyarli; takipte ≥2: %97.3 ozgul.</span>`},
{cat:"nmosd", q:"Which MRI feature is a supporting feature for MOGAD optic neuritis in the 2023 criteria?",
opts:["Short unilateral lesion sparing the sheath","Perineural optic sheath enhancement with >50% nerve-length involvement","Chiasmal predominance with hypothalamic extension","Periventricular Dawson fingers"], a:1,
ex:`MOGAD-ON support: <b>bilateral simultaneous ON, &gt;50% nerve length, perineural sheath enhancement, disc oedema</b>. Chiasmal/posterior long lesions favour AQP4-NMOSD; short unilateral favours MS.<span class="tr">MOGAD ON: bilateral, uzun (&gt;%50), perinoral kilif tutulumu, papil odemi. Kiazma tutulumu AQP4 lehine.</span>`},
{cat:"nmosd", q:"Which pathological/imaging profile fits MOGAD (vs MS)?",
opts:["Central vein sign with iron-rim lesions","Perivenous confluent ADEM-like demyelination around small veins, no CVS, no iron rims, no slowly expanding lesions","Large-vein-centred chronic active lesions","Cortical subpial demyelination with meningeal follicles only"], a:1,
ex:`MOGAD: <b>small veins/venules, perivenous confluent, ADEM-like</b> lesions; <b>no CVS, no iron rims/PRLs, no chronic active/SELs</b>. MS: large veins, CVS, iron-rim chronic active lesions.<span class="tr">MOGAD'da CVS ve demir halkasi yoktur; MS'in kronik aktif lezyon biyolojisi MOGAD'da gorulmez.</span>`},
{cat:"nmosd", q:"Regarding antibody titres and relapse risk:",
opts:["Falling titres exclude future relapses","Seronegative conversion in MOGAD lowers relapse likelihood; in AQP4-NMOSD most experts would NOT stop treatment","AQP4 titres reliably guide treatment discontinuation","Titres are meaningless in both diseases"], a:1,
ex:`Rising titres increase relapse likelihood, but stable/falling titres don't rule relapses out. <b>MOGAD seronegative conversion is reassuring; AQP4-NMOSD treatment is generally continued regardless</b>.<span class="tr">MOGAD'da seronegatiflesme atak riskini dusurur; AQP4'te titre dusse bile tedavi kesilmez.</span>`},
{cat:"nmosd", q:"A patient with an NMOSD phenotype is negative for both AQP4-IgG and MOG-IgG on live CBA. The course highlighted which emerging antibody?",
opts:["Anti-GluK2","MLC1-IgG (astrocytic membrane protein)","Anti-flotillin","Anti-KIR4.1"], a:1,
ex:`<b>MLC1-IgG</b> was shown persisting over 8 timepoints (titres 1:1600→1:400) despite rituximab — consider unrecognized astrocytic targets in double-seronegative NMOSD-like disease; results are assay-dependent.<span class="tr">Cift seronegatif NMOSD-benzeri tabloda MLC1-IgG gibi yeni astrositik antikorlar dusunulmeli.</span>`},

/* ---------------- Autoimmune / paraneoplastic encephalitis (Day 3) ---------------- */
{cat:"ae", q:"The fundamental difference between cell-surface and intracellular (onconeural) antibodies is:",
opts:["Surface antibodies are IgM, intracellular are IgG","Surface antibodies are directly pathogenic and immunotherapy-responsive; intracellular antibodies mark a cytotoxic T-cell-mediated, usually paraneoplastic process","Intracellular antibodies respond better to IVIG","Surface antibodies always indicate cancer"], a:1,
ex:`Surface antigens (NMDAR, LGI1…): <b>antibody itself pathogenic</b> (e.g. receptor internalization), often reversible. Intracellular (Hu, Yo, Ma2…): antibody is a <b>marker</b>; damage is <b>T-cell mediated</b>, strongly tumour-associated, poorer prognosis.<span class="tr">Yuzey antikoru = dogrudan patojenik + tedaviye yanitli; hucre ici antikor = T-hucre aracili, paraneoplastik, prognoz kotu.</span>`},
{cat:"ae", q:"A 22-year-old woman develops psychiatric symptoms, then seizures, orofacial dyskinesias and autonomic instability. Most likely antibody and associated tumour?",
opts:["LGI1 — thymoma","NMDAR — ovarian teratoma","GABA-B — SCLC","Yo — ovarian carcinoma"], a:1,
ex:`Classic <b>anti-NMDAR encephalitis</b>: young woman, psychiatric onset → seizures → dyskinesias → dysautonomia/hypoventilation; screen for <b>ovarian teratoma</b>. NMDAR-IgG is <b>more sensitive in CSF</b>.<span class="tr">NMDAR ensefaliti: genc kadin + psikiyatrik baslangic + diskinezi + otonomik bozukluk → over teratomu ara; BOS daha duyarli.</span>`},
{cat:"ae", q:"Faciobrachial dystonic seizures with hyponatremia in an older man suggest:",
opts:["Anti-NMDAR encephalitis","Anti-LGI1 encephalitis","Anti-Hu limbic encephalitis","CJD"], a:1,
ex:`<b>FBDS + hyponatremia + limbic encephalitis in older men = anti-LGI1</b>. Tumour association is rare; serum testing is often sufficient; early immunotherapy may prevent cognitive decline.<span class="tr">Fasiyobrakiyal distonik nobet + hiponatremi + yasli erkek = LGI1 (tumor nadir).</span>`},
{cat:"ae", q:"Morvan syndrome (neuromyotonia + encephalopathy + autonomic features) is associated with:",
opts:["CASPR2 antibodies and thymoma","AMPAR antibodies and breast cancer","DPPX antibodies","Glycine receptor antibodies"], a:0,
ex:`<b>CASPR2</b>: Morvan syndrome, neuromyotonia, limbic encephalitis, neuropathic pain — check for <b>thymoma</b>.<span class="tr">Morvan sendromu = CASPR2 + timoma taramasi.</span>`},
{cat:"ae", q:"Limbic encephalitis with unusually prominent early seizures in a smoker should prompt testing for:",
opts:["GABA-B receptor antibodies (SCLC association)","IgLON5 antibodies","Amphiphysin antibodies","MOG-IgG"], a:0,
ex:`<b>GABA-B receptor encephalitis</b> presents with severe early seizures/status and is associated with <b>small-cell lung cancer</b>. (Also the antigen with the highest CSF false-negative rate on fixed CBA — 33%.)<span class="tr">Erken belirgin nobetli limbik ensefalit + sigara = GABA-B, SCLC ara.</span>`},
{cat:"ae", q:"Graus criteria for definite autoimmune limbic encephalitis require all EXCEPT:",
opts:["Subacute onset (<3 months) of limbic symptoms","Bilateral medial temporal T2/FLAIR abnormalities","CSF pleocytosis or EEG temporal slowing/epileptiform activity","Antibody positivity is mandatory in every case"], a:3,
ex:`Definite limbic encephalitis can be diagnosed <b>without antibodies</b> when clinical + bilateral medial temporal MRI + CSF/EEG criteria are met and alternatives excluded — enabling early treatment.<span class="tr">Graus kriterlerinde antikor sart degildir; klinik+MRG+BOS/EEG yeterliyse tani konur ve tedavi geciktirilmez.</span>`},
{cat:"ae", q:"Anti-IgLON5 disease characteristically combines:",
opts:["Optic neuritis and myelitis","Sleep disorder (parasomnia, stridor/OSA), bulbar dysfunction, gait instability and chorea with neuronal tau pathology","Acute encephalopathy with teratoma","Pure cerebellar syndrome"], a:1,
ex:`<b>IgLON5</b>: insidious <b>sleep disorder</b> (NREM/REM parasomnia, stridor, OSA) + bulbar symptoms + gait instability/PSP-like ± chorea; <b>tau deposits</b> in brainstem/hypothalamus; strong <b>HLA-DRB1*10:01/DQB1*05:01</b>; IgG4-predominant, often poor immunotherapy response. Discovered from 'seronegative' cohorts — the lecture's theme of disease discovery.<span class="tr">IgLON5: uyku bozuklugu + bulber tutulum + yurume dengesizligi; tau patolojisi ve HLA-DRB1*10:01 iliskisi; norodejenerasyonu taklit eder.</span>`},
{cat:"ae", q:"Subacute sensory neuronopathy in a heavy smoker is most associated with:",
opts:["Anti-Yo and ovarian cancer","Anti-Hu (ANNA-1) and small-cell lung cancer","Anti-Ma2 and testicular tumour","Anti-Ri and breast cancer"], a:1,
ex:`<b>Anti-Hu → SCLC</b>; classic phenotypes: <b>sensory neuronopathy</b> (dorsal root ganglia), limbic encephalitis, encephalomyelitis, autonomic (pseudo-obstruction).<span class="tr">Anti-Hu = SCLC + duyusal noronopati (sinav klasigi).</span>`},
{cat:"ae", q:"Rapidly progressive cerebellar degeneration in a woman with breast/ovarian cancer suggests:",
opts:["Anti-Yo (PCA-1)","Anti-CASPR2","Anti-DPPX","Anti-GAD65"], a:0,
ex:`<b>Anti-Yo → paraneoplastic cerebellar degeneration</b> with <b>ovarian/breast</b> cancer; Purkinje cell loss, usually severe and poorly reversible.<span class="tr">Anti-Yo = kadin + over/meme CA + serebellar dejenerasyon.</span>`},
{cat:"ae", q:"Opsoclonus-myoclonus in an adult woman is classically linked to:",
opts:["Anti-Ri (ANNA-2) and breast cancer","Anti-Hu and thymoma","Anti-amphiphysin and melanoma","Anti-LGI1"], a:0,
ex:`<b>Anti-Ri → opsoclonus-myoclonus / brainstem syndrome</b>, associated with <b>breast</b> (and lung) cancer. In children, OMS points to neuroblastoma.<span class="tr">Anti-Ri = meme CA + opsoklonus-miyoklonus; cocukta OMS = noroblastom.</span>`},
{cat:"ae", q:"Limbic/diencephalic/brainstem encephalitis in a young man should prompt a search for:",
opts:["Ovarian teratoma (anti-NMDAR)","Testicular germ-cell tumour (anti-Ma2)","Colon cancer (anti-CV2)","Prostate cancer (anti-Yo)"], a:1,
ex:`<b>Anti-Ma2</b>: limbic/diencephalic/brainstem encephalitis (hypersomnia, vertical gaze palsy) in young men → <b>testicular germ-cell tumour</b> (orchiectomy may be needed even with normal imaging).<span class="tr">Genc erkek + limbik/diensefalik ensefalit = Ma2, testis tumoru ara.</span>`},
{cat:"ae", q:"Stiff-person-like syndrome in a woman with breast cancer suggests which antibody?",
opts:["Anti-amphiphysin","Anti-GAD65 (paraneoplastic)","Anti-glycine receptor","Anti-DPPX"], a:0,
ex:`Paraneoplastic stiff-person syndrome with <b>breast cancer → anti-amphiphysin</b>. (Non-paraneoplastic SPS is usually anti-GAD65; PERM → glycine receptor.)<span class="tr">Meme CA + stiff-person = amfifizin; idiyopatik SPS = GAD65; PERM = glisin reseptoru.</span>`},
{cat:"ae", q:"Which are 'high-risk phenotypes' in the 2021 PNS criteria?",
opts:["Migraine and tension headache","Limbic encephalitis, rapidly progressive cerebellar syndrome, sensory neuronopathy, opsoclonus-myoclonus, LEMS","Typical MS relapse and RIS","Carpal tunnel syndrome"], a:1,
ex:`PNS 2021 high-risk phenotypes: <b>limbic encephalitis, rapidly progressive cerebellar syndrome, sensory neuronopathy, OMS, encephalomyelitis, GI pseudo-obstruction, LEMS</b>; diagnosis graded by the <b>PNS-Care score</b> (phenotype + antibody + cancer).<span class="tr">PNS-2021 yuksek riskli fenotipler ve PNS-Care skoru (fenotip+antikor+kanser) ile tani derecelendirilir.</span>`},
{cat:"ae", q:"First-line treatment of autoimmune encephalitis is:",
opts:["Rituximab monotherapy","IV corticosteroids plus IVIG and/or plasma exchange, with tumour removal when present","Cyclophosphamide","Observation until antibodies return"], a:1,
ex:`1st line: <b>IV methylprednisolone + IVIG and/or PLEX</b> (+ tumour treatment). 2nd line: <b>rituximab, cyclophosphamide</b>. Early treatment improves outcome — don't wait for antibody results if criteria are met.<span class="tr">Ilk basamak: steroid + IVIG/plazmaferez + tumor tedavisi; yanitsizsa rituksimab/siklofosfamid. Antikor sonucu beklenmeden tedaviye baslanmali.</span>`},
{cat:"ae", q:"For suspected autoimmune encephalitis, antibody testing should be performed on:",
opts:["Serum only, like MOG-IgG","Both serum AND CSF (NMDAR-IgG is more sensitive in CSF)","CSF only","Whole blood PCR"], a:1,
ex:`AE panels: <b>test serum + CSF together</b> — NMDAR is more sensitive in <b>CSF</b>, LGI1 often in serum; paired testing also helps flag false positives. (Contrast: MOG-IgG → serum by live CBA.)<span class="tr">AE panelinde serum + BOS birlikte gonderilir; NMDAR BOS'ta, LGI1 serumda daha duyarlidir. (MOG ise serumdan bakilir — sinav tuzagi.)</span>`}
];
