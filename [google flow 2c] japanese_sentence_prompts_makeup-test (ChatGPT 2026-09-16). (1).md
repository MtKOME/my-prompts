# 【Google Flow】センテンスプロンプト メイクアップ編

ポートレイト生成のプロンプトに挿入して使うための日本語センテンスプロンプト集。
人物の顔立ち・髪型・衣装・年齢・肌色などを変更することではなく、メイクによる質感・色・濃淡・形・配置を指定することを目的としています。
効果を確認した画像を添付してるが、その効果のほどはそれぞれの判断に任せたい。実際のメイク系の用例画像もとても繊細で、個別にパッと見て判別出来るほどの知識も経験もないので、なんとなくでしかない。推しに髪や化粧のバリエーションへの意見を求められても、そもそも気づかなかったあの日を思い出してしまった。

---

## 印象ごとのメイクの系統

### ■ナチュラル

> **意味**:メイクを作り込んだ感じを抑え、素肌や本来の顔立ちが自然に見える状態。

> **狙い**:肌の質感や自然な血色、顔立ちの陰影を活かし、化粧をしていても「素の魅力」が前面に出る仕上がりにする。

<table>
<tr>
<td width="25%"><img src="images/makeup2/mkup-01_natural_01.jpeg" alt="ナチュラル1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-01_natural_02.jpeg" alt="ナチュラル2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-01_natural_03.jpeg" alt="ナチュラル3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-01_natural_04.jpeg" alt="ナチュラル4" width="100%"></td>
</tr>
</table>

``
ナチュラルな印象のメイクに仕上げている。肌は厚塗り感を抑え、素肌の質感と自然なツヤを残している。眉は元の形と毛流れをそのまま活かし、最小限の色でなぞっている。目元は肌になじむ色を薄くのせ、まぶた本来の陰影を目立たせすぎないようにしている。頬にはごく薄くチークを重ね、素の血色を邪魔しない程度に留めている。唇は地の色を活かした自然な血色感のあるリップにしている。
``

```copy
ナチュラルな印象のメイクに仕上げている。肌は厚塗り感を抑え、素肌の質感と自然なツヤを残している。眉は元の形と毛流れをそのまま活かし、最小限の色でなぞっている。目元は肌になじむ色を薄くのせ、まぶた本来の陰影を目立たせすぎないようにしている。頬にはごく薄くチークを重ね、素の血色を邪魔しない程度に留めている。唇は地の色を活かした自然な血色感のあるリップにしている。
```

### ■清楚

> **意味**:清潔感があり、控えめで爽やかな印象。派手さや強い色気を前面に出さない。

> **狙い**:肌や眉、目元、唇を整えて雑味を抑え、明るく清潔で端正な顔立ちに見せる。

<table>
<tr>
<td width="25%"><img src="images/makeup2/mkup-02_seiso_01.jpeg" alt="清楚1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-02_seiso_02.jpeg" alt="清楚2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-02_seiso_03.jpeg" alt="清楚3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-02_seiso_04.jpeg" alt="清楚4" width="100%"></td>
</tr>
</table>

``
清楚な印象のメイクに仕上げている。肌の色ムラやくすみを整え、清潔感のある明るく均一な質感にしている。眉は毛流れの乱れをなくし、自然な形に描いている。目元はアイラインを細く引き、アイシャドウの色を控えめにしている。頬には血色を補うように、淡い色のチークを薄く広げている。唇は色ムラをなくし、淡い色で仕上げている。
``

```copy
清楚な印象のメイクに仕上げている。肌の色ムラやくすみを整え、清潔感のある明るく均一な質感にしている。眉は毛流れの乱れをなくし、自然な形に描いている。目元はアイラインを細く引き、アイシャドウの色を控えめにしている。頬には血色を補うように、淡い色のチークを薄く広げている。唇は色ムラをなくし、淡い色で仕上げている。
```

### ■上品

> **意味**:派手さに頼らず、色・質感・形が整った洗練された印象。

> **狙い**:メイクの各要素を過度に主張させず、丁寧に調和させることで、落ち着きと品格のある顔立ちに仕上げる。

<table>
<tr>
<td width="25%"><img src="images/makeup2/mkup-03_jyouhin_01.jpeg" alt="上品1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-03_jyouhin_02.jpeg" alt="上品2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-03_jyouhin_03.jpeg" alt="上品3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-03_jyouhin_04.jpeg" alt="上品4" width="100%"></td>
</tr>
</table>

``
上品な印象のメイクに仕上げている。肌の質感をなめらかに整え、ツヤやカバー感を主張させすぎないようにしている。眉は形と色を控えめにまとめ、目元や唇と釣り合う太さに整えている。目元はアイシャドウの色を一色でまとめ、輪郭をぼかして仕上げている。頬のチークは肌になじむ色を薄く重ね、輪郭をぼかして入れている。唇は肌全体の色味に近い、落ち着いた色でまとめている。
``

```copy
上品な印象のメイクに仕上げている。肌の質感をなめらかに整え、ツヤやカバー感を主張させすぎないようにしている。眉は形と色を控えめにまとめ、目元や唇と釣り合う太さに整えている。目元はアイシャドウの色を一色でまとめ、輪郭をぼかして仕上げている。頬のチークは肌になじむ色を薄く重ね、輪郭をぼかして入れている。唇は肌全体の色味に近い、落ち着いた色でまとめている。
```

### ■フェミニン

> **意味**:柔らかく優しい、女性らしい華やかさや可憐さを感じさせる印象。

> **狙い**:柔らかな色、丸みのある表現、自然な血色や艶を使い、顔全体を優しく女性らしく見せる。

<table>
<tr>
<td width="25%"><img src="images/makeup2/mkup-04_feminine_01.jpeg" alt="フェミニン1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-04_feminine_02.jpeg" alt="フェミニン2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-04_feminine_03.jpeg" alt="フェミニン3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-04_feminine_04.jpeg" alt="フェミニン4" width="100%"></td>
</tr>
</table>

``
フェミニンな印象のメイクに仕上げている。肌はツヤを残しながら血色感を加え、ふんわりとした質感に仕上げている。眉は直線的にせず、緩やかな丸みを持たせて描いている。目元は淡いピンクやローズ系の色を使い、丸みのある形でまとめている。頬には丸くチークをふんわりとのせ、頬全体を優しく色づけている。唇は柔らかなツヤ感のあるピンク系の色で仕上げている。
``

```copy
フェミニンな印象のメイクに仕上げている。肌はツヤを残しながら血色感を加え、ふんわりとした質感に仕上げている。眉は直線的にせず、緩やかな丸みを持たせて描いている。目元は淡いピンクやローズ系の色を使い、丸みのある形でまとめている。頬には丸くチークをふんわりとのせ、頬全体を優しく色づけている。唇は柔らかなツヤ感のあるピンク系の色で仕上げている。
```

### ■華やか

> **意味**:顔に明るさや存在感があり、視線を引きつける印象。

> **狙い**:発色、艶、輝き、陰影、コントラストなどを適度に強め、顔立ちを明るく印象的に見せる。

<table>
<tr>
<td width="25%"><img src="images/makeup2/mkup-05_hanayaka_01.jpeg" alt="華やか1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-05_hanayaka_02.jpeg" alt="華やか2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-05_hanayaka_03.jpeg" alt="華やか3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-05_hanayaka_04.jpeg" alt="華やか4" width="100%"></td>
</tr>
</table>

``
華やかな印象のメイクに仕上げている。肌は明るく均一に整え、光を受けたときにツヤが際立つ仕上がりにしている。眉は輪郭をくっきりと描き、はっきりとした存在感を出している。目元にはラメや輝きのある色を使い、視線を引きつけるコントラストをつけている。頬には発色のよい色をやや広めに入れ、血色をはっきりと出している。唇は発色の強い色をしっかりとのせ、印象的な口元にしている。
``

```copy
華やかな印象のメイクに仕上げている。肌は明るく均一に整え、光を受けたときにツヤが際立つ仕上がりにしている。眉は輪郭をくっきりと描き、はっきりとした存在感を出している。目元にはラメや輝きのある色を使い、視線を引きつけるコントラストをつけている。頬には発色のよい色をやや広めに入れ、血色をはっきりと出している。唇は発色の強い色をしっかりとのせ、印象的な口元にしている。
```

### ■大人っぽい

> **意味**:幼さや可愛らしさを抑え、落ち着きや成熟した雰囲気を感じさせる印象。

> **狙い**:落ち着いた色調や陰影、洗練された輪郭表現を使い、顔立ちを成熟した印象に整える。

<table>
<tr>
<td width="25%"><img src="images/makeup2/mkup-06_otonappoi_01.jpeg" alt="大人っぽい1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-06_otonappoi_02.jpeg" alt="大人っぽい2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-06_otonappoi_03.jpeg" alt="大人っぽい3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-06_otonappoi_04.jpeg" alt="大人っぽい4" width="100%"></td>
</tr>
</table>

``
大人っぽい印象のメイクに仕上げている。肌は落ち着いた自然なツヤを残し、顔立ちの陰影が自然に見える質感に整えている。眉はやや直線的に整え、眉尻まで輪郭をすっきりと見せている。目元は落ち着いた色のアイシャドウで陰影を加え、目の輪郭を引き締めている。頬のチークは色を抑え、頬骨に沿って薄く入れている。唇は深みのある落ち着いた色で、輪郭を整えて仕上げている。
``

```copy
大人っぽい印象のメイクに仕上げている。肌は落ち着いた自然なツヤを残し、顔立ちの陰影が自然に見える質感に整えている。眉はやや直線的に整え、眉尻まで輪郭をすっきりと見せている。目元は落ち着いた色のアイシャドウで陰影を加え、目の輪郭を引き締めている。頬のチークは色を抑え、頬骨に沿って薄く入れている。唇は深みのある落ち着いた色で、輪郭を整えて仕上げている。
```

### ■クール 変更分

> **意味**: 甘さや可愛らしさを抑え、シャープで凛とした印象を与えるメイクの方向性。

> **狙い**: 直線的な眉やシャープなアイライン、落ち着いた色調を使い、顔立ちをすっきりと引き締めてクールな印象に整える。

`すっきりと整えた肌に、グレーやブラウン系のアイシャドウ、シャープなアイライン、自然に整えた眉、控えめなチークとベージュやローズ系のリップを合わせた、凛としたクールなメイク。`

```copy
すっきりと整えた肌に、グレーやブラウン系のアイシャドウ、シャープなアイライン、自然に整えた眉、控えめなチークとベージュやローズ系のリップを合わせた、凛としたクールなメイク。
```


### ■グラマラス 変更分

> **意味**: 目元や唇、顔立ちの立体感を強調し、華やかで存在感のある印象を与えるメイク。

> **狙い**: 艶のある肌、強調したまつ毛、立体的なアイメイク、深みのあるリップを組み合わせ、顔立ちのメリハリと華やかさを強く見せる。

`艶のある肌に、立体的な陰影をつけたアイメイク、強調したまつ毛、自然な立体感のあるチークと深みのあるリップを合わせた、華やかで存在感のあるグラマラスなメイク。`

```copy
艶のある肌に、立体的な陰影をつけたアイメイク、強調したまつ毛、自然な立体感のあるチークと深みのあるリップを合わせた、華やかで存在感のあるグラマラスなメイク。
```


### ■レトロ 変更分

> **意味**: 現代的な流行感よりも、過去の時代を思わせるクラシックで懐かしい印象を与えるメイク。

> **狙い**: 滑らかに整えた肌、くっきりしたアイライン、赤系のリップなど、時代を感じさせる定番的な要素を組み合わせ、クラシックな雰囲気を作る。

`滑らかに整えた肌に、自然な陰影をつけたアイシャドウ、くっきりとしたアイライン、整った眉、控えめなチークとクラシックな赤いリップを合わせた、懐かしく洗練されたレトロなメイク。`

```copy id="7f2kqm"
滑らかに整えた肌に、自然な陰影をつけたアイシャドウ、くっきりとしたアイライン、整った眉、控えめなチークとクラシックな赤いリップを合わせた、懐かしく洗練されたレトロなメイク。
```


### ■エレガント

> **意味**:落ち着いた華やかさと繊細な整い方を感じさせる、洗練された印象。

> **狙い**:肌の艶、繊細な目元、深みのある唇を調和させ、派手すぎず品のある華やかさを作る。

```text
エレガントな印象のメイクに仕上げている。肌は自然な艶のあるなめらかな質感に整えている。眉は形を整えながら柔らかく仕上げている。目元は繊細なパール感のあるアイシャドウで陰影をつけ、アイラインを細く整えている。頬は落ち着いた色のチークを薄く入れている。唇は深みのあるローズやボルドー系の色で上品に仕上げている。
```

### ■アンニュイ 変更分

> **意味**: はっきりとした華やかさや可愛らしさを抑え、どこか気だるく、儚げでつかみどころのない印象を与えるメイク。

> **狙い**: くすみ系の色や柔らかな陰影、控えめな血色感を使い、目元や唇を強く主張させず、曖昧で静かな雰囲気に整える。

`くすみのあるモーヴやブラウン系のアイシャドウで柔らかな陰影をつけ、アイラインやまつ毛は控えめに整え、チークとリップも淡い血色感に抑えた、気だるく儚げなアンニュイメイク。`

```copy id="k4m8tw"
くすみのあるモーヴやブラウン系のアイシャドウで柔らかな陰影をつけ、アイラインやまつ毛は控えめに整え、チークとリップも淡い血色感に抑えた、気だるく儚げなアンニュイメイク。
```

### ■キュート 変更分

> **意味**: 幼さや可愛らしさを感じさせる、明るく親しみやすい印象のメイク。

> **狙い**: 丸みのある目元や頬の血色感、明るいピンクやコーラル系の色を使い、顔全体を柔らかく愛らしい印象に整える。

`明るく整えた肌に、丸みを意識したアイメイク、ふんわりとした血色感のあるチーク、つやのあるピンクやコーラル系のリップを合わせた、あどけなく可愛らしいキュートなメイク。`

```copy
明るく整えた肌に、丸みを意識したアイメイク、ふんわりとした血色感のあるチーク、つやのあるピンクやコーラル系のリップを合わせた、あどけなく可愛らしいキュートなメイク。
```

### ■オフィス 変更分

> **意味**: 派手さを抑え、清潔感ときちんとした印象を重視した、仕事やフォーマルな場面に適したメイク。

> **狙い**: 肌を整え、ブラウン系の控えめなアイメイクとベージュ系のリップを組み合わせ、自然で落ち着いたきちんと感を作る。

`清潔感のある肌に、控えめなブラウン系アイシャドウと自然なアイライン、整った眉、淡い血色感のチークとベージュ系のリップを合わせた、きちんと感のあるオフィスメイク。`

```copy id="bq4m1x"
清潔感のある肌に、控えめなブラウン系アイシャドウと自然なアイライン、整った眉、淡い血色感のチークとベージュ系のリップを合わせた、きちんと感のあるオフィスメイク。
```

### ■スモーキー 変更分

> **意味**: 目元に深みのある陰影をつけ、ぼかした色使いで落ち着いた印象を与えるメイク。

> **狙い**: グレーやブラウンなどの深みのある色を目元に重ね、境目を柔らかくぼかすことで、目元の陰影と奥行きを強調する。

`グレーやブラウンなどの深みのあるアイシャドウを目元にぼかして陰影をつけ、アイラインとまつ毛で目の輪郭を引き締め、チークとリップは落ち着いた色味でまとめたスモーキーメイク。`

```copy
グレーやブラウンなどの深みのあるアイシャドウを目元にぼかして陰影をつけ、アイラインとまつ毛で目の輪郭を引き締め、チークとリップは落ち着いた色味でまとめたスモーキーメイク。
```

### ■サマー 変更分

> **意味**: 夏らしい明るさや軽やかさ、健康的な印象を感じさせるメイク。

> **狙い**: 軽やかな肌感とオレンジやコーラル系の血色感、みずみずしいリップなどを組み合わせ、暑い季節に合う爽やかな印象に整える。

`自然なツヤを残した軽やかな肌に、明るいベージュやコーラル系のアイシャドウ、健康的な血色感のチーク、つやのあるオレンジやコーラル系のリップを合わせた、爽やかなサマーメイク。`

```copy
自然なツヤを残した軽やかな肌に、明るいベージュやコーラル系のアイシャドウ、健康的な血色感のチーク、つやのあるオレンジやコーラル系のリップを合わせた、爽やかなサマーメイク。
```

### ■セクシー 変更分

> **意味**: 大人っぽさや色気を感じさせる、目元や唇を印象的に見せるメイク。

> **狙い**: 目元に陰影をつけて立体感を出し、アイラインやまつ毛、リップの存在感を高めることで、大人っぽく色気のある印象に整える。

`艶のある肌に、深みのあるアイシャドウで立体的な陰影をつけ、目元を強調するアイラインとまつ毛、自然な立体感のあるチーク、艶やかな赤やローズ系のリップを合わせた、色気のあるセクシーなメイク。`

```copy id="n8v3kc"
艶のある肌に、深みのあるアイシャドウで立体的な陰影をつけ、目元を強調するアイラインとまつ毛、自然な立体感のあるチーク、艶やかな赤やローズ系のリップを合わせた、色気のあるセクシーなメイク。
```

### ■ブライダル 変更分

> **意味**: 清らかさや上品さ、幸福感を感じさせる、結婚式などの特別な場面に合わせたメイク。

> **狙い**: 透明感のある肌に、パール感のある目元と自然な血色感を加え、華やかさを保ちながら清潔感と上品さを両立させる。

`透明感のある肌に、繊細なパール感のあるアイシャドウ、自然に整えた眉、控えめなアイラインとまつ毛、淡いピンクのチークとピンクベージュの艶やかなリップを合わせた、清らかで上品なブライダルメイク。`

```copy id="c6r2wp"
透明感のある肌に、繊細なパール感のあるアイシャドウ、自然に整えた眉、控えめなアイラインとまつ毛、淡いピンクのチークとピンクベージュの艶やかなリップを合わせた、清らかで上品なブライダルメイク。
```




---

## 特徴的なメイク サブカル / ファッション系統

メイクに加えて髪型・ファッション・文化的背景を含意する系統。印象別と組み合わせる際は、要素が重複・矛盾しないか確認して使用する。



### ■アイドル風 変更分

> **意味**: 明るく華やかで、親しみやすく可愛らしい印象を与える、ステージ映えを意識したメイク。

> **狙い**: 明るく整えた肌に、丸みを意識した目元、強調したまつ毛や涙袋、明るい血色感のチークとツヤのあるリップを組み合わせ、表情を華やかに見せる。

`明るく整えた肌に、丸みのあるアイメイクと強調したまつ毛、自然にぷっくりと見せた涙袋、明るい血色感のチークとツヤのあるピンクやコーラル系のリップを合わせた、華やかで可愛らしいアイドル風メイク。`

```copy
明るく整えた肌に、丸みのあるアイメイクと強調したまつ毛、自然にぷっくりと見せた涙袋、明るい血色感のチークとツヤのあるピンクやコーラル系のリップを合わせた、華やかで可愛らしいアイドル風メイク。
```

### ■地雷系

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-2-02_jiraikei_01.jpeg" alt="地雷系1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-02_jiraikei_02.jpeg" alt="地雷系2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-02_jiraikei_03.jpeg" alt="地雷系3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-02_jiraikei_04.jpeg" alt="地雷系4" width="100%"></td> </tr> </table>

``
地雷系のメイクに仕上げている。肌は明るく透明感のある質感に整えている。目の下から頬にかけて赤みのあるチークを入れている。涙袋には明るいハイライトを入れて立体感を出している。アイメイクは赤みのある色を取り入れて目元を強調している。唇は赤みのあるツヤリップに仕上げている。
``

```copy
地雷系のメイクに仕上げている。肌は明るく透明感のある質感に整えている。目の下から頬にかけて赤みのあるチークを入れている。涙袋には明るいハイライトを入れて立体感を出している。アイメイクは赤みのある色を取り入れて目元を強調している。唇は赤みのあるツヤリップに仕上げている。
```

### ■地雷系 変更分

> **意味**: 白く明るい肌に赤みのある目元や強調した涙袋などを組み合わせ、甘さの中に少し影のある印象を与えるメイク。

> **狙い**: 明るく均一な肌、赤みを含んだ目元、強調した涙袋、血色感のあるリップを組み合わせ、目元の存在感と独特の甘さを強調する。

`明るく均一に整えた肌に、赤みのあるアイシャドウで目元に陰影をつけ、強調した涙袋と存在感のあるまつ毛、淡い血色感のチークと赤みのあるリップを合わせた地雷系メイク。`

```copy
明るく均一に整えた肌に、赤みのあるアイシャドウで目元に陰影をつけ、強調した涙袋と存在感のあるまつ毛、淡い血色感のチークと赤みのあるリップを合わせた地雷系メイク。
```


### ■量産型

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-2-03_ryousangata_01.jpeg" alt="量産型1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-03_ryousangata_02.jpeg" alt="量産型2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-03_ryousangata_03.jpeg" alt="量産型3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-03_ryousangata_04.jpeg" alt="量産型4" width="100%"></td> </tr> </table>

``
量産型のメイクに仕上げている。アイシャドウは柔らかなピンクブラウン系でまとめている。涙袋には細かなパールのハイライトを入れて立体感を出している。チークは頬の高い位置に丸く入れている。唇は明るいピンク系のツヤリップに仕上げている。
``

```copy
量産型のメイクに仕上げている。アイシャドウは柔らかなピンクブラウン系でまとめている。涙袋には細かなパールのハイライトを入れて立体感を出している。チークは頬の高い位置に丸く入れている。唇は明るいピンク系のツヤリップに仕上げている。
```

### ■量産型 変更分

> **意味**: ピンク系の色使いや可愛らしい目元、ツヤのあるリップなどを組み合わせ、甘く華やかで可愛らしい印象を与えるメイク。

> **狙い**: 明るい肌にピンク系のアイメイクとチーク、ツヤのあるリップを合わせ、目元から頬、唇まで統一感のある甘い雰囲気に整える。

`明るく整えた肌に、ピンク系のアイシャドウと丸みのあるアイメイク、ふんわりとしたピンクのチーク、ツヤのあるピンク系のリップを合わせた、甘く可愛らしい量産型メイク。`

```copy
明るく整えた肌に、ピンク系のアイシャドウと丸みのあるアイメイク、ふんわりとしたピンクのチーク、ツヤのあるピンク系のリップを合わせた、甘く可愛らしい量産型メイク。
```


### ■ゴシック 変更分

> **意味**: 明るさや可愛らしさよりも、深い色調と強いコントラストで耽美でダークな印象を与えるメイク。

> **狙い**: 明るく均一な肌と濃いアイライン、深い色のリップを組み合わせ、肌と目元・唇のコントラストを強調してゴシックな雰囲気に整える。

`明るく均一に整えた肌に、深みのあるアイシャドウと濃く引いたアイライン、存在感のあるまつ毛、控えめなチーク、深いワインレッドやボルドー系のリップを合わせた、耽美でダークなゴシックメイク。`

```copy id="h3q7mx"
明るく均一に整えた肌に、深みのあるアイシャドウと濃く引いたアイライン、存在感のあるまつ毛、控えめなチーク、深いワインレッドやボルドー系のリップを合わせた、耽美でダークなゴシックメイク。
```

### ■ギャル系

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-2-04_gal_01.jpeg" alt="ギャル系1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-04_gal_02.jpeg" alt="ギャル系2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-04_gal_03.jpeg" alt="ギャル系3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-04_gal_04.jpeg" alt="ギャル系4" width="100%"></td> </tr> </table>

``
ギャル系のメイクに仕上げている。アイラインは目の輪郭を強調するようにやや太めに引いている。まつ毛は長く濃く見えるように仕上げている。眉はやや太めで存在感のある形に整えている。下まぶたには細かなラメを入れている。唇はベージュ系のツヤリップに仕上げている。
``

```copy
ギャル系のメイクに仕上げている。アイラインは目の輪郭を強調するようにやや太めに引いている。まつ毛は長く濃く見えるように仕上げている。眉はやや太めで存在感のある形に整えている。下まぶたには細かなラメを入れている。唇はベージュ系のツヤリップに仕上げている。
```



### ■モード系

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-2-05_mode_01.jpeg" alt="モード系1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-05_mode_02.jpeg" alt="モード系2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-05_mode_03.jpeg" alt="モード系3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-05_mode_04.jpeg" alt="モード系4" width="100%"></td> </tr> </table>

``
モード系のメイクに仕上げている。肌は余分なツヤを抑えたなめらかな質感に整えている。アイラインは黒でシャープに引いて目元を強調している。眉は直線的ですっきりした形に整えている。唇は深い赤やボルドーなど発色の強い色で仕上げている。
``

```copy
モード系のメイクに仕上げている。肌は余分なツヤを抑えたなめらかな質感に整えている。アイラインは黒でシャープに引いて目元を強調している。眉は直線的ですっきりした形に整えている。唇は深い赤やボルドーなど発色の強い色で仕上げている。
```

### ■姫系

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-2-06_hime_01.jpeg" alt="姫系1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-06_hime_02.jpeg" alt="姫系2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-06_hime_03.jpeg" alt="姫系3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-06_hime_04.jpeg" alt="姫系4" width="100%"></td> </tr> </table>

``
姫系のメイクに仕上げている。肌はきめ細かく明るいツヤ肌に整えている。アイシャドウは淡いピンク系に細かなパールを加えている。チークは頬の高い位置に丸く入れて上気した印象にしている。唇は明るいピンク系のグロスリップに仕上げている。
``

```copy
姫系のメイクに仕上げている。肌はきめ細かく明るいツヤ肌に整えている。アイシャドウは淡いピンク系に細かなパールを加えている。チークは頬の高い位置に丸く入れて上気した印象にしている。唇は明るいピンク系のグロスリップに仕上げている。
```

### ■和装

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-2-07_wasou_01.jpeg" alt="和装1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-07_wasou_02.jpeg" alt="和装2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-07_wasou_03.jpeg" alt="和装3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-07_wasou_04.jpeg" alt="和装4" width="100%"></td> </tr> </table>

``
和装に合うメイクに仕上げている。肌はきめ細かく均一な質感に整えている。眉は自然な形に整えている。目元は落ち着いた色で控えめに仕上げている。頬には淡い血色感を添えている。唇は赤みのあるリップで端正に仕上げている。
``

```copy
和装に合うメイクに仕上げている。肌はきめ細かく均一な質感に整えている。眉は自然な形に整えている。目元は落ち着いた色で控えめに仕上げている。頬には淡い血色感を添えている。唇は赤みのあるリップで端正に仕上げている。
```

### ■韓国風

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-2-01_kankokufuu_01.jpeg" alt="韓国風1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-01_kankokufuu_02.jpeg" alt="韓国風2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-01_kankokufuu_03.jpeg" alt="韓国風3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-01_kankokufuu_04.jpeg" alt="韓国風4" width="100%"></td> </tr> </table>

``
韓国風のメイクに仕上げている。肌は均一で透明感のあるツヤ肌に整えている。眉は眉頭から眉尻にかけて自然に濃くなるグラデーション眉にしている。アイシャドウはピーチブラウン系の柔らかなグラデーションでまとめている。唇は内側をやや濃く、外側に向かって淡くなるグラデーションリップに仕上げている。
``

```copy
韓国風のメイクに仕上げている。肌は均一で透明感のあるツヤ肌に整えている。眉は眉頭から眉尻にかけて自然に濃くなるグラデーション眉にしている。アイシャドウはピーチブラウン系の柔らかなグラデーションでまとめている。唇は内側をやや濃く、外側に向かって淡くなるグラデーションリップに仕上げている。
```

### ■韓国風 変更分

> **意味**: 韓国の美容・メイクトレンドを取り入れた、整った肌と目元を特徴とする現代的なメイク。

> **狙い**: 均一でツヤのある肌、直線的な眉、グラデーションのある目元、ぼかしたリップなどを組み合わせ、韓国風の洗練された印象に整える。

`均一に整えたツヤのある肌に、直線的に整えた眉、グラデーションのあるアイシャドウと自然な涙袋、控えめなアイライン、ぼかしたティントリップを合わせた韓国風メイク。`

```copy id="p7c2vn"
均一に整えたツヤのある肌に、直線的に整えた眉、グラデーションのあるアイシャドウと自然な涙袋、控えめなアイライン、ぼかしたティントリップを合わせた韓国風メイク。
```

### ■中華系

> **意味**:均一で立体感のある肌と、はっきりした眉・目元・唇を組み合わせた存在感のある印象。

> **狙い**:肌を整えたうえで眉や目元の輪郭を明確にし、陰影とリップの発色で顔全体を引き締める。

```text
中華系の印象のメイクに仕上げている。肌は均一でなめらかな質感に整え、自然な陰影を加えて立体感を出している。眉は形をはっきり整え、目元はアイラインと濃淡のあるアイシャドウで輪郭を強調している。頬は控えめな色で立体感を補っている。唇は発色のよい赤や深みのある色で輪郭を整えている。
```

### ■中華系 変更分

> **意味**: 中国の美容・メイクトレンドに見られる、くっきりとした目元や眉、立体感のある顔立ちを特徴とするメイク。

> **狙い**: 均一に整えた肌に、輪郭のはっきりした眉と目元、自然な陰影による立体感、深みのあるリップを組み合わせ、顔立ちを明確で印象的に見せる。

`均一に整えた肌に、はっきりと輪郭を整えた眉、深みのあるアイシャドウとくっきりしたアイライン、立体感を強調した陰影、落ち着いた色味のチークと深みのある赤やローズ系のリップを合わせた中華系メイク。`

```copy id="2y7qkp"
均一に整えた肌に、はっきりと輪郭を整えた眉、深みのあるアイシャドウとくっきりしたアイライン、立体感を強調した陰影、落ち着いた色味のチークと深みのある赤やローズ系のリップを合わせた中華系メイク。
```


### ■全体のコンセプト

#### ■中顔面短縮メイク

```text
中顔面を短く見せるメイクに仕上げている。目の下から頬の高い位置にチークを入れ、顔の縦方向の余白を抑えて見せている。目元の下側にも明るさを加え、顔の中心に視線が集まるように仕上げている。
```

#### ■コントゥア

```text
コントゥアメイクで顔立ちに自然な陰影を加えている。鼻筋の両側、頬骨の下、フェイスラインに薄い影を入れ、額や鼻筋など光を受ける部分には明るさを加えて、顔全体を立体的に見せている。
```

---

## 部位別 (補助・個別指定に)

### 眉


#### ■平行眉

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-1-01_heikou_01.jpeg" alt="平行眉1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-1-01_heikou_02.jpeg" alt="平行眉2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-1-01_heikou_03.jpeg" alt="平行眉3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-1-01_heikou_04.jpeg" alt="平行眉4" width="100%"></td> </tr> </table>

```text
眉は眉山を強調せず、直線的な平行眉に整えている。
```

#### ■グラデーション眉

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-1-02_gradation_01.jpeg" alt="グラデーション眉1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-1-02_gradation_02.jpeg" alt="グラデーション眉2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-1-02_gradation_03.jpeg" alt="グラデーション眉3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-1-02_gradation_04.jpeg" alt="グラデーション眉4" width="100%"></td> </tr> </table>
  
```text
眉頭から眉尻にかけて自然に濃くなるグラデーション眉にしている。
```

#### ■アーチ眉

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-1-03_arch_01.jpeg" alt="アーチ眉1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-1-03_arch_02.jpeg" alt="アーチ眉2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-1-03_arch_03.jpeg" alt="アーチ眉3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-1-03_arch_04.jpeg" alt="アーチ眉4" width="100%"></td> </tr> </table>

```text
眉は緩やかな曲線を描く自然なアーチ眉に整えている。
```

#### ■太眉

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-1-04_futo_01.jpeg" alt="太眉1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-1-04_futo_02.jpeg" alt="太眉2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-1-04_futo_03.jpeg" alt="太眉3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-1-04_futo_04.jpeg" alt="太眉4" width="100%"></td> </tr> </table>

```text
眉は自然な毛流れを残した、やや太めで存在感のある眉にしている。
```

#### ■細眉

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-1-05_hoso_01.jpeg" alt="細眉1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-1-05_hoso_02.jpeg" alt="細眉2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-1-05_hoso_03.jpeg" alt="細眉3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-1-05_hoso_04.jpeg" alt="細眉4" width="100%"></td> </tr> </table>

```text
眉は細めに整え、すっきりとした印象にしている。
```

### 目元

#### ■デカ目

```text
アイライン、まつ毛、涙袋を組み合わせて目元を強調し、目を大きく印象的に見せている。
```

#### ■涙袋強調

<table>
<tr>
<td width="25%"><img src="images/makeup2/mkup-3-2-01_namidabukuro_01.jpeg" alt="涙袋メイク1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-01_namidabukuro_02.jpeg" alt="涙袋メイク2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-01_namidabukuro_03.jpeg" alt="涙袋メイク3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-01_namidabukuro_04.jpeg" alt="涙袋メイク4" width="100%"></td>
</tr>
</table>

```text
涙袋のふくらみを自然に強調し、明るいハイライトを入れて立体感を出している。
```

#### ■囲みメイク

<table>
<tr>
<td width="25%"><img src="images/makeup2/mkup-3-2-02_kakomi_01.jpeg" alt="囲みメイク1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-02_kakomi_02.jpeg" alt="囲みメイク2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-02_kakomi_03.jpeg" alt="囲みメイク3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-02_kakomi_04.jpeg" alt="囲みメイク4" width="100%"></td>
</tr>
</table>

```text
上下のまぶたにアイラインとアイシャドウを入れ、目元を囲むように強調している。
```

#### ■たれ目メイク

<table>
<tr>
<td width="25%"><img src="images/makeup2/mkup-3-2-03_tareme_01.jpeg" alt="たれ目メイク1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-03_tareme_02.jpeg" alt="たれ目メイク2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-03_tareme_03.jpeg" alt="たれ目メイク3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-03_tareme_04.jpeg" alt="たれ目メイク4" width="100%"></td>
</tr>
</table>

```text
アイラインを目尻からやや下向きに延ばし、たれ目に見える柔らかな印象に仕上げている。
```

#### ■つり目メイク

<table>
<tr>
<td width="25%"><img src="images/makeup2/mkup-3-2-04_tsurime_01.jpeg" alt="つり目メイク1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-04_tsurime_02.jpeg" alt="つり目メイク2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-04_tsurime_03.jpeg" alt="つり目メイク3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-04_tsurime_04.jpeg" alt="つり目メイク4" width="100%"></td>
</tr>
</table>

```text
アイラインを目尻から斜め上向きに延ばし、目元をシャープに仕上げている。
```

#### ■粘膜ライナー

<table>
<tr>
<td width="25%"><img src="images/makeup2/mkup-3-2-05_nenmaku_01.jpeg" alt="粘膜ライナー1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-05_nenmaku_02.jpeg" alt="粘膜ライナー2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-05_nenmaku_03.jpeg" alt="粘膜ライナー3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-05_nenmaku_04.jpeg" alt="粘膜ライナー4" width="100%"></td>
</tr>
</table>

```text
下まぶたの粘膜部分に薄くラインを入れ、目元の輪郭を自然に強調している。
```

#### ■跳ね上げライン

<table>
<tr>
<td width="25%"><img src="images/makeup2/mkup-3-2-06_haneage_01.jpeg" alt="跳ね上げライン1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-06_haneage_02.jpeg" alt="跳ね上げライン2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-06_haneage_03.jpeg" alt="跳ね上げライン3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-06_haneage_04.jpeg" alt="跳ね上げライン4" width="100%"></td>
</tr>
</table>

```text
アイラインの目尻を斜め上に向かって細く跳ね上げている。
```

#### ■ラメアイメイク

<table>
<tr>
<td width="25%"><img src="images/makeup2/mkup-3-2-07_lame_01.jpeg" alt="ラメアイメイク1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-07_lame_02.jpeg" alt="ラメアイメイク2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-07_lame_03.jpeg" alt="ラメアイメイク3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-07_lame_04.jpeg" alt="ラメアイメイク4" width="100%"></td>
</tr>
</table>

```text
まぶたの中央に細かなラメをのせ、目元に繊細な輝きを加えている。
```

#### ■ブラウンアイシャドウ

<table>
<tr>
<td width="25%"><img src="images/makeup2/mkup-3-2-08_brownshadow_01.jpeg" alt="ブラウンアイシャドウ1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-08_brownshadow_02.jpeg" alt="ブラウンアイシャドウ2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-08_brownshadow_03.jpeg" alt="ブラウンアイシャドウ3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-08_brownshadow_04.jpeg" alt="ブラウンアイシャドウ4" width="100%"></td>
</tr>
</table>

```text
アイシャドウをベージュからブラウンの自然なグラデーションでまとめている。
```

#### ■ピンクアイシャドウ

<table>
<tr>
<td width="25%"><img src="images/makeup2/mkup-3-2-09_pinkshadow_01.jpeg" alt="ピンクアイシャドウ1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-09_pinkshadow_02.jpeg" alt="ピンクアイシャドウ2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-09_pinkshadow_03.jpeg" alt="ピンクアイシャドウ3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-2-09_pinkshadow_04.jpeg" alt="ピンクアイシャドウ4" width="100%"></td>
</tr>
</table>


```text
アイシャドウを淡いピンクからローズ系の色で柔らかくまとめている。
```

### まつ毛・つけまつげ

#### ■上向きカール

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-3_01_uwamukicurl_01.jpeg" alt="上向きカール1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_01_uwamukicurl_02.jpeg" alt="上向きカール2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_01_uwamukicurl_03.jpeg" alt="上向きカール3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_01_uwamukicurl_04.jpeg" alt="上向きカール4" width="100%"></td> </tr> </table>

```text
まつ毛を根元から自然に持ち上げ、毛先まできれいな上向きカールに仕上げている。
```

#### ■セパレートまつ毛

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-3_02_separatematsuge_01.jpeg" alt="セパレートまつ毛1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_02_separatematsuge_02.jpeg" alt="セパレートまつ毛2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_02_separatematsuge_03.jpeg" alt="セパレートまつ毛3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_02_separatematsuge_04.jpeg" alt="セパレートまつ毛4" width="100%"></td> </tr> </table>

```text
まつ毛を一本一本きれいにセパレートさせ、ダマのない繊細な仕上がりにしている。
```

#### ■ロングまつ毛

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-3_03_longmatsuge_01.jpeg" alt="ロングまつ毛1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_03_longmatsuge_02.jpeg" alt="ロングまつ毛2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_03_longmatsuge_03.jpeg" alt="ロングまつ毛3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_03_longmatsuge_04.jpeg" alt="ロングまつ毛4" width="100%"></td> </tr> </table>

```text
まつ毛に長さを出し、細くすっと伸びたロングまつ毛に仕上げている。
```

#### ■束感まつ毛

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-3_04_tabakanmatsuge_01.jpeg" alt="束感まつ毛1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_04_tabakanmatsuge_02.jpeg" alt="束感まつ毛2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_04_tabakanmatsuge_03.jpeg" alt="束感まつ毛3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_04_tabakanmatsuge_04.jpeg" alt="束感まつ毛4" width="100%"></td> </tr> </table>

```text
まつ毛を細かな束にまとめ、毛先がすっと細くなる自然な束感に仕上げている。
```

#### ■ボリュームまつ毛

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-3_05_volumematsuge_01.jpeg" alt="ボリュームまつ毛1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_05_volumematsuge_02.jpeg" alt="ボリュームまつ毛2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_05_volumematsuge_03.jpeg" alt="ボリュームまつ毛3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_05_volumematsuge_04.jpeg" alt="ボリュームまつ毛4" width="100%"></td> </tr> </table>

```text
まつ毛に適度なボリュームを加え、密度のある存在感のある仕上がりにしている。
```

#### ■繊細まつ毛

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-3_06_sensaimatsuge_01.jpeg" alt="繊細まつ毛1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_06_sensaimatsuge_02.jpeg" alt="繊細まつ毛2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_06_sensaimatsuge_03.jpeg" alt="繊細まつ毛3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_06_sensaimatsuge_04.jpeg" alt="繊細まつ毛4" width="100%"></td> </tr> </table>

```text
まつ毛一本一本を細く際立たせ、軽やかで繊細な仕上がりにしている。
```

#### ■扇状まつ毛

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-3_07_ougijyoumatsuge_01.jpeg" alt="扇状まつ毛1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_07_ougijyoumatsuge_02.jpeg" alt="扇状まつ毛2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_07_ougijyoumatsuge_03.jpeg" alt="扇状まつ毛3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_07_ougijyoumatsuge_04.jpeg" alt="扇状まつ毛4" width="100%"></td> </tr> </table>

```text
まつ毛を目の中央から目尻に向かって扇状に広げ、目元を大きく見せている。
```

#### ■束感つけまつ毛

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-3_08_tabakantsukema_01.jpeg" alt="束感つけまつ毛1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_08_tabakantsukema_02.jpeg" alt="束感つけまつ毛2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_08_tabakantsukema_03.jpeg" alt="束感つけまつ毛3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_08_tabakantsukema_04.jpeg" alt="束感つけまつ毛4" width="100%"></td> </tr> </table>

```text
細かな束になったつけまつげを使い、まとまりのある束感を出している。
```

#### ■ボリュームつけまつ毛

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-3_09_volumetsukema_01.jpeg" alt="ボリュームつけまつ毛1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_09_volumetsukema_02.jpeg" alt="ボリュームつけまつ毛2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_09_volumetsukema_03.jpeg" alt="ボリュームつけまつ毛3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-3_09_volumetsukema_04.jpeg" alt="ボリュームつけまつ毛4" width="100%"></td> </tr> </table>

```text
毛量のあるつけまつげを使い、まつ毛にしっかりとしたボリュームを加えている。
```

### カラコン

#### ■ブラウン系

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-4_01_naturalbrown-cc_01.jpeg" alt="ブラウン系1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-4_01_naturalbrown-cc_02.jpeg" alt="ブラウン系2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-4_01_naturalbrown-cc_03.jpeg" alt="ブラウン系3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-4_01_naturalbrown-cc_04.jpeg" alt="ブラウン系4" width="100%"></td> </tr> </table>

```text
カラコンは自然なブラウン系を使い、裸眼になじむ柔らかな瞳に仕上げている。
```


#### ■グレー系

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-4_02_glay-cc_01.jpeg" alt="グレー系1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-4_02_glay-cc_02.jpeg" alt="グレー系2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-4_02_glay-cc_03.jpeg" alt="グレー系3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-4_02_glay-cc_04.jpeg" alt="グレー系4" width="100%"></td> </tr> </table>

```text
カラコンは透明感のあるグレー系を使い、涼しげで印象的な瞳に仕上げている。
```


#### ■ヘーゼル系

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-4_03_hazel-cc_01.jpeg" alt="ヘーゼル系1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-4_03_hazel-cc_02.jpeg" alt="ヘーゼル系2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-4_03_hazel-cc_03.jpeg" alt="ヘーゼル系3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-4_03_hazel-cc_04.jpeg" alt="ヘーゼル系4" width="100%"></td> </tr> </table>

```text
カラコンは明るいヘーゼル系を使い、色素が薄く見える透明感のある瞳に仕上げている。
```


#### ■オリーブ系

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-4_04_olive-cc_01.jpeg" alt="オリーブ系1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-4_04_olive-cc_02.jpeg" alt="オリーブ系2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-4_04_olive-cc_03.jpeg" alt="オリーブ系3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-4_04_olive-cc_04.jpeg" alt="オリーブ系4" width="100%"></td> </tr> </table>

```text
カラコンはブラウンになじむオリーブ系を使い、自然な抜け感のある瞳に仕上げている。
```


#### ■大きめカラコン

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-4_05_ookii-cc_01.jpeg" alt="大きめ1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-4_05_ookii-cc_02.jpeg" alt="大きめ2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-4_05_ookii-cc_03.jpeg" alt="大きめ3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-4_05_ookii-cc_04.jpeg" alt="大きめ4" width="100%"></td> </tr> </table>

```text
カラコンは着色部分がやや大きめのデザインにして、瞳を大きく印象的に見せている。
```

### 肌

#### ■ツヤ肌

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-05_01_tsuyahada_01.jpeg" alt="ツヤ肌1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-05_01_tsuyahada_02.jpeg" alt="ツヤ肌2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-05_01_tsuyahada_03.jpeg" alt="ツヤ肌3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-05_01_tsuyahada_04.jpeg" alt="ツヤ肌4" width="100%"></td> </tr> </table>

```
肌はガラスのような透明感のあるツヤ肌に仕上げている。頬骨と鼻筋には細かなハイライトを入れている。
```

#### ■セミマット肌

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-05_02_semimattehada_01.jpeg" alt="セミマット肌1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-05_02_semimattehada_02.jpeg" alt="セミマット肌2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-05_02_semimattehada_03.jpeg" alt="セミマット肌3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-05_02_semimattehada_04.jpeg" alt="セミマット肌4" width="100%"></td> </tr> </table>

```text
肌の質感をなめらかなセミマットに仕上げ、わずかな自然なツヤを残している。
```

#### ■陶器肌

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-05_03_toukihada_01.jpeg" alt="陶器肌1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-05_03_toukihada_02.jpeg" alt="陶器肌2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-05_03_toukihada_03.jpeg" alt="陶器肌3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-05_03_toukihada_04.jpeg" alt="陶器肌4" width="100%"></td> </tr> </table>

```text
肌をなめらかに整え、毛穴や肌の凹凸が目立たない均一な質感に仕上げている。
```

#### ■透明感のある肌

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-05_04_toumeikanhada_01.jpeg" alt="透明感のある肌1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-05_04_toumeikanhada_02.jpeg" alt="透明感のある肌2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-05_04_toumeikanhada_03.jpeg" alt="透明感のある肌3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-05_04_toumeikanhada_04.jpeg" alt="透明感のある肌4" width="100%"></td> </tr> </table>

```text
肌を明るく均一に整え、薄いベールをかけたような透明感のある仕上がりにしている。
```

### チーク

#### ■囲みチーク

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-6_01_kakomicheek_01.jpeg" alt="囲みチーク1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-6_01_kakomicheek_02.jpeg" alt="囲みチーク2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-6_01_kakomicheek_03.jpeg" alt="囲みチーク3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-6_01_kakomicheek_04.jpeg" alt="囲みチーク4" width="100%"></td> </tr> </table>

```text
目の下から頬にかけてチークを広めに入れ、目元を囲むような血色感を出している。
```

#### ■ワンストロークチーク

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-6_02_onestrokecheek_01.jpeg" alt="ワンストロークチーク1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-6_02_onestrokecheek_02.jpeg" alt="ワンストロークチーク2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-6_02_onestrokecheek_03.jpeg" alt="ワンストロークチーク3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-6_02_onestrokecheek_04.jpeg" alt="ワンストロークチーク4" width="100%"></td> </tr> </table>

```text
頬骨に沿って斜め方向にチークを入れ、すっきりとした血色感を出している。
```

#### ■アップルチーク

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-6_03_applecheek_01.jpeg" alt="アップルチーク1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-6_03_applecheek_02.jpeg" alt="アップルチーク2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-6_03_applecheek_03.jpeg" alt="アップルチーク3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-6_03_applecheek_04.jpeg" alt="アップルチーク4" width="100%"></td> </tr> </table>

```text
頬の高い位置にチークを丸く入れ、明るく上気した印象に仕上げている。
```

### リップ

#### ■グラデーションリップ

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-7_01_gradationlip_01.jpeg" alt="グラデーションリップ1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-7_01_gradationlip_02.jpeg" alt="グラデーションリップ2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-7_01_gradationlip_03.jpeg" alt="グラデーションリップ3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-7_01_gradationlip_04.jpeg" alt="グラデーションリップ4" width="100%"></td> </tr> </table>

```text
唇の内側に色を集中させ、外側に向かって淡くなるようにぼかしている。
```

#### ■ティントリップ

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-7_02_tintlip_01.jpeg" alt="ティントリップ1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-7_02_tintlip_02.jpeg" alt="ティントリップ2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-7_02_tintlip_03.jpeg" alt="ティントリップ3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-7_02_tintlip_04.jpeg" alt="ティントリップ4" width="100%"></td> </tr> </table>

```text
唇全体に自然な赤みが残るようなティントリップに仕上げている。
```

#### ■オーバーリップ

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-7_03_overlip_01.jpeg" alt="オーバーリップ1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-7_03_overlip_02.jpeg" alt="オーバーリップ2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-7_03_overlip_03.jpeg" alt="オーバーリップ3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-7_03_overlip_04.jpeg" alt="オーバーリップ4" width="100%"></td> </tr> </table>

```text
唇の輪郭よりわずかに外側まで色をのせ、唇を自然に大きく見せている。
```

#### ■輪郭ぼかしリップ

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-7_04_rinkakubokasfilip_01.jpeg" alt="輪郭ぼかしリップ1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-7_04_rinkakubokasfilip_02.jpeg" alt="輪郭ぼかしリップ2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-7_04_rinkakubokasfilip_03.jpeg" alt="輪郭ぼかしリップ3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-7_04_rinkakubokasfilip_04.jpeg" alt="輪郭ぼかしリップ4" width="100%"></td> </tr> </table>

```text
リップライナーで輪郭を強調せず、唇の境目を柔らかくぼかしている。
```

#### ■マットリップ

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-3-7_05_mattelip_01.jpeg" alt="マットリップ1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-7_05_mattelip_02.jpeg" alt="マットリップ2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-7_05_mattelip_03.jpeg" alt="マットリップ3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-3-7_05_mattelip_04.jpeg" alt="マットリップ4" width="100%"></td> </tr> </table>

```text
唇の光沢を抑え、なめらかなマット質感のリップに仕上げている。
```

---

## 使用例(既存プロンプトへの接続イメージ)

``
…(既存のポートレイト設定文)…。大人っぽい印象のメイクに仕上げている。肌は落ち着いた自然なツヤを残し、顔立ちの陰影が自然に見える質感に整えている。眉はやや直線的に整え、眉尻まで輪郭をすっきりと見せている。目元は落ち着いた色のアイシャドウで陰影を加え、目の輪郭を引き締めている。頬のチークは色を抑え、頬骨に沿って薄く入れている。唇は深みのある落ち着いた色で、輪郭を整えて仕上げている。
``

``
…(既存のポートレイト設定文)…。大人っぽい印象のメイクに仕上げている。肌は落ち着いた自然なツヤを残し、顔立ちの陰影が自然に見える質感に整えている。眉はやや直線的に整え、眉尻まで輪郭をすっきりと見せている。目元は落ち着いた色のアイシャドウで陰影を加え、目の輪郭を引き締めている。頬のチークは色を抑え、頬骨に沿って薄く入れている。唇は深みのある落ち着いた色で、輪郭を整えて仕上げている。
``

---

## 構成メモ

- 印象別メイク6系統は、単なる色・質感の違いではなく「活かす/整える/調和させる/柔らかくする/際立たせる/陰影を引き立てる」という動詞の違いで区別している。ただしこの動詞は設計段階の狙いであり、各文にそのまま繰り返し書き込むものではない。狙いを反映した具体的なメイク操作(色の置き方・輪郭の描き方・質感の作り方)をパーツごとに異なる言葉で書くことで違いを表現する。
- 「1文=1要素」ではなく「1文=1つの視覚的指示」とする。ひとまとまりの技法は無理に分解しない。
- メイクによる質感・色・濃淡・形・配置を優先し、顔立ちそのものを変更するような指定は避ける。
- 「たれ目」「つり目」などはアイライン技法として記述し、目の形状そのものを変える指示にはしない。
- 「地雷系」「韓国風」などのサブカル系統は印象別と別枠にし、印象別と組み合わせる場合は要素の矛盾がないか確認する。
- 比喩的な表現(「ガラスのような」など)を使う場合も、具体的な視覚的特徴を併記する。
- 既存のポートレイト設定文に接続する場合は、必要な項目だけを選んで使用し、全体が長くなりすぎないよう調整する。
