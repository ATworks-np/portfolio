import React from 'react';
import {Box, Typography, Link} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { keyframes } from '@emotion/react';
import Planet from "./component/planet";
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import StarEffect from "./component/starEffect";
import SlideIn from "./component/SliteIn";
import Section from "./component/Section";

import Slide from '@mui/material/Slide';
// 円が回転するアニメーション
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// 小さい●が円のふちを回るアニメーション
const dotOrbit = keyframes`
  0% {
    transform: rotate(0deg) translateX(200px);
  }
  100% {
    transform: rotate(360deg) translateX(200px);
  }
`;

const App: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          flexDirection: 'column',
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 66%, rgba(255, 255, 255, 0.67) 100%)',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '96px', md: '96px' }, // レスポンシブなフォントサイズ
          }}
        >
          Atomin
        </Typography>
        <Typography
          variant="body1"
        >
          Kohta Koenuma, WEB Enginer
        </Typography>

      </Box>
      <Box
        sx={{
          height: '100vh',
          position: 'fixed',
          top: '50%',
          left: '50%',
          zIndex: '-1',
        }}
      >
        <Planet orbitRadius={20} planetRadius={5} sunRadius={5} color={'#E9D58D'}/>
        <Planet orbitRadius={80} planetRadius={10} sunRadius={5} color={'#14108D'}/>
        <Planet orbitRadius={120} planetRadius={10} sunRadius={5} color={'#F7894E'}/>
        <Planet orbitRadius={200} planetRadius={20} sunRadius={5} color={'#265095'}/>
      </Box>

      <Box
        sx={{
          padding: {xs:'20px'},
          backgroundColor: '#FFFFFFAA'
        }}
        display="flex"         // フレックスボックスを使用
        justifyContent="center" // 水平方向に中央揃え
      >
        <Box sx={{maxWidth: '900px', width: '100%'}}>
          <Stack spacing={20}>
            <Section title='About Me' position='left'>
              <>
                <Typography variant='body2'>
                  気が付いたらwebエンジニアになったモノづくり大好きマン<br/>
                  学生のころからいろんな意味で'変態'と呼ばれている<br/>
                  東京都東村山市生まれの東京生まれ東京育ち　東京から出たことない
                </Typography>
                <div style={{height: '10px'}}/>
                <Typography
                  sx={{
                    fontSize: { xs: '24px', md: '36px' },
                  }}
                >
                  Personal History
                </Typography>
                <Grid container spacing={1}>
                  <Grid size={{ xs: 3, md: 2}}>
                    <Typography variant='body2'>
                     2024年
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 9, md: 10}}>
                    <Typography variant='body2'>
                     株式会社ウェイブ入社
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 3, md: 2}}>
                    <Typography variant='body2'>
                     2022年
                    </Typography>
                  </Grid>
                 <Grid size={{ xs: 9, md: 10}}>
                    <Typography variant='body2'>
                     株式会社アフレル
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 3, md: 2}}>
                    <Typography variant='body2'>
                     2022年
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 9, md: 10}}>
                    <Typography variant='body2'>
                     東京農工大学大学院卒業
                    </Typography>
                  </Grid>
                </Grid>
              </>
            </Section>
            <Section title='Works' position='right'>
              <Grid container spacing={1}>
                <Grid size={{ xs: 3, md: 2}}>
                  <Typography variant='body2'>
                   2024年
                  </Typography>
                </Grid>
                <Grid size={{ xs: 9, md: 10}}>
                  <Typography variant='body2'>
                    <Link href="https://jp-contents-matome.web.app/" target="_blank" rel="noopener">
                      「異世界系アニメ まとめサイト」
                    </Link>
                    初期リリース
                  </Typography>
                </Grid>
                <Grid size={{ xs: 3, md: 2}}>
                  <Typography variant='body2'>
                   2024年
                  </Typography>
                </Grid>
                <Grid size={{ xs: 9, md: 10}}>
                  <Typography variant='body2'>
                    <Link href="" target="_blank" rel="noopener">
                      モチベ太陽
                    </Link>
                    制作
                  </Typography>
                </Grid>
                <Grid size={{ xs: 3, md: 2}}>
                  <Typography variant='body2'>
                   2024年
                  </Typography>
                </Grid>
                <Grid size={{ xs: 9, md: 10}}>
                  <Typography variant='body2'>
                    マンガ配信サイトにて
                    <Link href="" target="_blank" rel="noopener">
                      ぷるんぷるんエンジン
                    </Link>
                    リリース
                  </Typography>
                </Grid>
                <Grid size={{ xs: 3, md: 2}}>
                  <Typography variant='body2'>
                   2024年
                  </Typography>
                </Grid>
                <Grid size={{ xs: 9, md: 10}}>
                  <Typography variant='body2'>
                    「リアル服従の天秤」作成&nbsp; &nbsp;
                     <Link href="https://zenn.dev/wwwave/articles/0217265f79e04b" target="_blank" rel="noopener">
                      Zenn
                    </Link>
                    &nbsp; &nbsp;
                    <Link href="https://youtube.com/shorts/R9KwcLO7PH8?si=aYDm2TEOX_XVhKW3v" target="_blank" rel="noopener">
                      Youtube
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Section>
            <Section title='Presentations' position='left'>
              <Grid container spacing={1}>
                <Grid size={{ xs: 3, md: 2}}>
                  <Typography variant='body2'>
                   2023年
                  </Typography>
                </Grid>
                <Grid size={{ xs: 9, md: 10}}>
                  <Typography variant='body2'>
                    <Link href="https://afrel.co.jp/company/laboratory/seminar/54405/" target="_blank" rel="noopener">
                      国立大学法人福井大学　機械学習特論「第２回ＡＩ関連企業による講義」
                    </Link>
                  </Typography>
                </Grid>
                <Grid size={{ xs: 3, md: 2}}>
                  <Typography variant='body2'>
                   2022年
                  </Typography>
                </Grid>
                <Grid size={{ xs: 9, md: 10}}>
                  <Typography variant='body2'>
                    <Link href="https://afrel.co.jp/social/robocamp/2022_camp/report/" target="_blank" rel="noopener">
                      AIプログラミング体験型ワークショップ ロボ・キャンプ 2022
                    </Link>
                  </Typography>
                </Grid>
                <Grid size={{ xs: 3, md: 2}}>
                  <Typography variant='body2'>
                   2019年
                  </Typography>
                </Grid>
                <Grid size={{ xs: 9, md: 10}}>
                  <Typography variant='body2'>
                    <Link href="https://www.tms.org/TMS2019/downloads/finalProgram/AM19-TechnicalProgram-Web_print.pdf#page=258" target="_blank" rel="noopener">
                      2019 TMS Annual Meeting & Exhibition
                    </Link>
                  </Typography>
                </Grid>
                <Grid size={{ xs: 3, md: 2}}>
                  <Typography variant='body2'>
                   2018年
                  </Typography>
                </Grid>
                <Grid size={{ xs: 9, md: 10}}>
                  <Typography variant='body2'>
                    <Link href="https://mmm2018.jp/program/pdf/MMM2018-ProgramPoster-Final.pdf#page=4" target="_blank" rel="noopener">
                      The 9th International Conference on Multiscale Materials Modeling (MMM2018)
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Section>
            <Section title='Publications' position='right'>
              <Grid container spacing={1}>
                <Grid size={{ xs: 3, md: 2}}>
                  <Typography variant='body2'>
                   2020年
                  </Typography>
                </Grid>
                <Grid size={{ xs: 9, md: 10}}>
                  <Typography variant='body2'>
                    <Link href="https://www.jstage.jst.go.jp/article/sosei/61/709/61_48/_article/-char/ja" target="_blank" rel="noopener">
                      肥沼康太ほか, 深層学習を用いたアルミニウム合金板の集合組織に依存した応力－ひずみ曲線とr値の推定, 塑性と加工, Vol. 61, No. 709 (2020), pp. 48-55.
                    </Link>
                  </Typography>
                </Grid>
                <Grid size={{ xs: 3, md: 2}}>
                  <Typography variant='body2'>
                   2020年
                  </Typography>
                </Grid>
                <Grid size={{ xs: 9, md: 10}}>
                  <Typography variant='body2'>
                    <Link href="https://www.jstage.jst.go.jp/article/matertrans/advpub/0/advpub_P-M2020853/_article/-char/ja/" target="_blank" rel="noopener">
                      Kohta Koenuma et al. , Toshihiko Kuwabara, Estimation of Texture-Dependent Stress-Strain Curve and r-Value of Aluminum Alloy Sheet Using Deep Learning, Mater. Trans., Vol. 61, No. 12 (2020), pp. 2276-2283.
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Section>
            <Section title='Award' position='left'>
              <Grid container spacing={1}>
                  <Grid size={{ xs: 3, md: 2}}>
                    <Typography variant='body2'>
                     2021年
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 9, md: 10}}>
                    <Typography variant='body2'>
                      <Link href="http://www.jstp.jp/r/updata/56_2021.pdf" target="_blank" rel="noopener">
                        日本塑性加工学会2021年度学会賞 論文賞
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 3, md: 2}}>
                    <Typography variant='body2'>
                     2019年
                    </Typography>
                  </Grid>
                 <Grid size={{ xs: 9, md: 10}}>
                    <Typography variant='body2'>
                      <Link href="http://www.jstp.jp/r/updata/56_2021.pdf" target="_blank" rel="noopener">
                        2019年度塑性加工春季講演会 優秀論文講演奨
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 3, md: 2}}>
                    <Typography variant='body2'>
                     2018年
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 9, md: 10}}>
                    <Typography variant='body2'>
                      <Link href="https://web.tuat.ac.jp/~yamanaka/img/MMM2018_koenuma.jpg" target="_blank" rel="noopener">
                        Best Poster Award
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 3, md: 2}}>
                    <Typography variant='body2'>
                     2017年
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 9, md: 10}}>
                    <Typography variant='body2'>
                      <Link href="https://unisec.jp/archives/4194" target="_blank" rel="noopener">
                        能代宇宙イベント　CanSat競技　ミッション部門　タイプエス賞 タイプエス賞 2位
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 3, md: 2}}>
                    <Typography variant='body2'>
                     2016年
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 9, md: 10}}>
                    <Typography variant='body2'>
                      <Link href="https://unisec.jp/archives/1842" target="_blank" rel="noopener">
                        能代宇宙イベント　CanSat競技　ミッション部門　タイプエス賞 優勝
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
            </Section>
          </Stack>
        </Box>
      </Box>
      <div style={{height: '1000px'}}/>
    </>
  );
};

export default App;
