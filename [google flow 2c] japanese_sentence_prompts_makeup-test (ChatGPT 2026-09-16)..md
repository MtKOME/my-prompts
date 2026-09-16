# 【Google Flow】 センテンスプロンプト メイクアップ編

既存のポートレイト設定文の末尾に接続して使う、日本語センテンスプロンプト集。
各プロンプトは同じ内容を2つのコードブロックで示しています。1つ目は視認用の`` `` ``(2連バッククォート)ブロック、2つ目はコピー用の```` ```copy ````ブロックです。内容はどちらも同一(改行なしの1文構成)で、コピーする際は「copy」ブロックの方をお使いください。

人物の顔立ち・髪型・衣装・年齢・肌色などを変更することではなく、メイクによる質感・色・濃淡・形・配置を指定することを目的としています。

---

## 設計思想：６系統を貫く「動詞」

「印象別メイク」6系統は、単に色や質感の違いではなく、**各パーツに対して何をする狙いか(動詞)**で区別しています。

| 系統 | 狙いの動詞 |
|---|---|
| ナチュラル | 活かす(素の状態を活かす) |
| 清楚 | 整える(雑味・ムラを整える) |
| 上品 | 調和させる(パーツ同士を調和させる) |
| フェミニン | 柔らかくする(丸み・柔らかさを加える) |
| 華やか | 際立たせる(発色・輝きを際立たせる) |
| 大人っぽい | 陰影を引き立てる(陰影・輪郭を引き締める) |

ただし、この動詞をすべての文にそのまま繰り返し書き込むわけではありません。設計は次の二段階で行っています。

1. 系統ごとの狙いを動詞として設定する(上表)
2. その狙いを実現する**具体的なメイク操作**を、パーツごとに異なる言葉で書く

同じ「調和させる」「柔らかい」「陰影」といった単語を各文に貼り付けるのではなく、狙いを反映した結果として、実際に画面に現れる操作(色の置き方、輪郭の描き方、質感の作り方)を書くことで違いを表現しています。

---

## 印象で分類するメイクの系統

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

---

## 特徴的なメイク サブカル / ファッション系統

メイクに加えて髪型・ファッション・文化的背景を含意する系統。印象別と組み合わせる際は、要素が重複・矛盾しないか確認して使用する。

### ■韓国風

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-2-01_kankokufuu_01.jpeg" alt="韓国風1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-01_kankokufuu_02.jpeg" alt="韓国風2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-01_kankokufuu_03.jpeg" alt="韓国風3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-01_kankokufuu_04.jpeg" alt="韓国風4" width="100%"></td> </tr> </table>

``
韓国風のメイクに仕上げている。肌は均一で透明感のあるツヤ肌に整えている。眉は眉頭から眉尻にかけて自然に濃くなるグラデーション眉にしている。アイシャドウはピーチブラウン系の柔らかなグラデーションでまとめている。唇は内側をやや濃く、外側に向かって淡くなるグラデーションリップに仕上げている。
``

```copy
韓国風のメイクに仕上げている。肌は均一で透明感のあるツヤ肌に整えている。眉は眉頭から眉尻にかけて自然に濃くなるグラデーション眉にしている。アイシャドウはピーチブラウン系の柔らかなグラデーションでまとめている。唇は内側をやや濃く、外側に向かって淡くなるグラデーションリップに仕上げている。
```

### ■地雷系

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-2-02_jiraikei_01.jpeg" alt="地雷系1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-02_jiraikei_02.jpeg" alt="地雷系2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-02_jiraikei_03.jpeg" alt="地雷系3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-02_jiraikei_04.jpeg" alt="地雷系4" width="100%"></td> </tr> </table>

``
地雷系のメイクに仕上げている。肌は明るく透明感のある質感に整えている。目の下から頬にかけて赤みのあるチークを入れている。涙袋には明るいハイライトを入れて立体感を出している。アイメイクは赤みのある色を取り入れて目元を強調している。唇は赤みのあるツヤリップに仕上げている。
``

```copy
地雷系のメイクに仕上げている。肌は明るく透明感のある質感に整えている。目の下から頬にかけて赤みのあるチークを入れている。涙袋には明るいハイライトを入れて立体感を出している。アイメイクは赤みのある色を取り入れて目元を強調している。唇は赤みのあるツヤリップに仕上げている。
```

### ■量産型

<table> <tr> <td width="25%"><img src="images/makeup2/mkup-2-03_ryousangata_01.jpeg" alt="量産型1" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-03_ryousangata_02.jpeg" alt="量産型2" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-03_ryousangata_03.jpeg" alt="量産型3" width="100%"></td><td width="25%"><img src="images/makeup2/mkup-2-03_ryousangata_04.jpeg" alt="量産型4" width="100%"></td> </tr> </table>

``
量産型のメイクに仕上げている。アイシャドウは柔らかなピンクブラウン系でまとめている。涙袋には細かなパールのハイライトを入れて立体感を出している。チークは頬の高い位置に丸く入れている。唇は明るいピンク系のツヤリップに仕上げている。
``

```copy
量産型のメイクに仕上げている。アイシャドウは柔らかなピンクブラウン系でまとめている。涙袋には細かなパールのハイライトを入れて立体感を出している。チークは頬の高い位置に丸く入れている。唇は明るいピンク系のツヤリップに仕上げている。
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

---

## 部位別(補助・個別指定用)

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

#### ■涙袋メイク

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

```text
カラコンは自然なブラウン系を使い、裸眼になじむ柔らかな瞳に仕上げている。
```


#### ■グレー系

```text
カラコンは透明感のあるグレー系を使い、涼しげで印象的な瞳に仕上げている。
```


#### ■ヘーゼル系

```text
カラコンは明るいヘーゼル系を使い、色素が薄く見える透明感のある瞳に仕上げている。
```


#### ■オリーブ系

```text
カラコンはブラウンになじむオリーブ系を使い、自然な抜け感のある瞳に仕上げている。
```


#### ■ぼかしフチ

```text
カラコンは輪郭をぼかしたデザインにして、瞳になじむ柔らかな印象に仕上げている。
```


#### ■細フチ

```text
カラコンは細いフチのデザインにして、瞳の輪郭を自然に際立たせている。
```


#### ■水光カラコン

```text
カラコンは光が入ったようなハイライトのあるデザインにして、潤んだような立体感のある瞳に仕上げている。
```

#### ■大きめカラコン

```text
カラコンは着色部分がやや大きめのデザインにして、瞳を大きく印象的に見せている。
```

### 肌

#### ■ツヤ肌
```
肌はガラスのような透明感のあるツヤ肌に仕上げている。頬骨と鼻筋には細かなハイライトを入れている。
```

#### ■セミマット肌
```text
肌の質感をなめらかなセミマットに仕上げ、わずかな自然なツヤを残している。
```

#### ■陶器肌
```text
肌をなめらかに整え、毛穴や肌の凹凸が目立たない均一な質感に仕上げている。
```

#### ■透明感のある肌
```text
肌を明るく均一に整え、薄いベールをかけたような透明感のある仕上がりにしている。
```

### チーク

#### ■囲みチーク
```text
目の下から頬にかけてチークを広めに入れ、目元を囲むような血色感を出している。
```

#### ■ワンストロークチーク
```text
頬骨に沿って斜め方向にチークを入れ、すっきりとした血色感を出している。
```

#### ■アップルチーク
```text
頬の高い位置にチークを丸く入れ、明るく上気した印象に仕上げている。
```

### リップ

#### ■グラデーションリップ
```text
唇の内側に色を集中させ、外側に向かって淡くなるようにぼかしている。
```

#### ■ティントリップ
```text
唇全体に自然な赤みが残るようなティントリップに仕上げている。
```

#### ■オーバーリップ
```text
唇の輪郭よりわずかに外側まで色をのせ、唇を自然に大きく見せている。
```

#### ■輪郭ぼかしリップ
```text
リップライナーで輪郭を強調せず、唇の境目を柔らかくぼかしている。
```

#### ■マットリップ
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
