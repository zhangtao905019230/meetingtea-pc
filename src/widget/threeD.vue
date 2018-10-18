<style>
  .container{background-color: #cccccc}
  .clearfix:before,
  .clearfix:after {
    content: " ";
    display: table;
  }

  .clearfix:after {
    clear: both;
  }
  .container>header,
  .codrops-top {
    font-family: 'Lato', Arial, sans-serif;
  }

  .container>header {
    margin: 0 auto;
    padding: 2em;
    text-align: center;
    background: rgba(0, 0, 0, 0.01);
  }

  .container>header h1 {
    font-size: 2.625em;
    line-height: 1.3;
    margin: 0;
    font-weight: 300;
  }

  .container>header span {
    display: block;
    font-size: 60%;
    opacity: 0.7;
    padding: 0 0 0.6em 0.1em;
  }

  /* To Navigation Style */
  .codrops-top {
    background: #fff;
    background: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    width: 100%;
    font-size: 0.69em;
    line-height: 2.2;
  }

  .codrops-top a {
    text-decoration: none;
    padding: 0 1em;
    letter-spacing: 0.1em;
    color: #888;
    display: inline-block;
  }

  .codrops-top a:hover {
    background: rgba(255, 255, 255, 0.95);
    color: #333;
  }

  .codrops-top span.right {
    float: right;
  }

  .codrops-top span.right a {
    float: left;
    display: block;
  }

  .codrops-icon:before {
    font-family: 'codropsicons';
    margin: 0 4px;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }

  .codrops-icon-drop:before {
    content: "\e001";
  }

  .codrops-icon-prev:before {
    content: "\e004";
  }

  /* Demo Buttons Style */
  .codrops-demos {
    padding-top: 1em;
    font-size: 0.9em;
  }

  .codrops-demos a {
    text-decoration: none;
    outline: none;
    display: inline-block;
    margin: 0.5em;
    padding: 0.7em 1.1em;
    border: 3px solid #b1aea6;
    color: #b1aea6;
    font-weight: 700;
  }

  .codrops-demos a:hover,
  .codrops-demos a.current-demo,
  .codrops-demos a.current-demo:hover {
    border-color: #89867e;
    color: #89867e;
  }

  @media screen and (max-width: 25em) {

    .codrops-icon span {
      display: none;
    }

  }

  /**,*/
  /**:after,*/
  /**:before {*/
    /*-webkit-box-sizing: border-box;*/
    /*-moz-box-sizing: border-box;*/
    /*box-sizing: border-box;*/
  /*}*/

  /*body {*/
    /*background: #fbc73b;*/
    /*font-family: 'Lato', Arial, sans-serif;*/
    /*color: #fff;*/
  /*}*/

  .wrapper {
    margin: 0 auto 100px auto;
    max-width: 960px;
  }

  .stage {
    list-style: none;
    padding: 0;
  }

  /*************************************
Build the scene and rotate on hover
**************************************/

  .scene {
    width: 260px;
    height: 400px;
    margin: 30px;
    float: left;
    -webkit-perspective: 1000px;
    -moz-perspective: 1000px;
    perspective: 1000px;
  }

  .movie {
    width: 260px;
    height: 400px;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform: translateZ(-130px);
    -moz-transform: translateZ(-130px);
    transform: translateZ(-130px);
    -webkit-transition: -webkit-transform 350ms;
    -moz-transition: -moz-transform 350ms;
    transition: transform 350ms;
  }

  .movie:hover {
    -webkit-transform: rotateY(-78deg) translateZ(20px);
    -moz-transform: rotateY(-78deg) translateZ(20px);
    transform: rotateY(-78deg) translateZ(20px);
  }

  /*************************************
Transform and style the two planes
**************************************/

  .movie .poster,
  .movie .info {
    position: absolute;
    width: 260px;
    height: 400px;
    background-color: #fff;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .movie .poster {
    -webkit-transform: translateZ(130px);
    -moz-transform: translateZ(130px);
    transform: translateZ(130px);
    background-size: cover;
    background-repeat: no-repeat;
  }

  .movie .info {
    -webkit-transform: rotateY(90deg) translateZ(130px);
    -moz-transform: rotateY(90deg) translateZ(130px);
    transform: rotateY(90deg) translateZ(130px);
    border: 1px solid #B8B5B5;
    font-size: 0.75em;
  }

  /*************************************
Shadow beneath the 3D object
**************************************/

  .csstransforms3d .movie::after {
    content: '';
    width: 260px;
    height: 260px;
    position: absolute;
    bottom: 0;
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.3);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
    -webkit-transform: rotateX(90deg) translateY(130px);
    -moz-transform: rotateX(90deg) translateY(130px);
    transform: rotateX(90deg) translateY(130px);
    -webkit-transition: box-shadow 350ms;
    -moz-transition: box-shadow 350ms;
    transition: box-shadow 350ms;
  }

  .csstransforms3d .movie:hover::after {
    box-shadow: 20px -5px 50px rgba(0, 0, 0, 0.3);
  }

  /*************************************
Movie information
**************************************/

  .info header {
    color: #cccccc;
    padding: 7px 10px;
    font-weight: bold;
    height: 195px;
    background-size: cover;
    background-repeat: no-repeat;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 1);
  }

  .info header h1 {
    margin: 0 0 2px;
    font-size: 1.4em;
  }

  .info header .rating {
    border: 1px solid #FFF;
    padding: 0px 3px;
  }

  .info p {
    padding: 1.2em 1.4em;
    margin: 2px 0 0;
    /*font-weight: 700;*/
    color: #666;
    line-height: 1.4em;
    border-top: 10px solid seagreen;
  }

  /*************************************
Generate "lighting" using box shadows
**************************************/

  .movie .poster,
  .movie .info,
  .movie .info header {
    -webkit-transition: box-shadow 350ms;
    -moz-transition: box-shadow 350ms;
    transition: box-shadow 350ms;
  }

  .csstransforms3d .movie .poster {
    box-shadow: inset 0px 0px 40px rgba(255, 255, 255, 0);
  }

  .csstransforms3d .movie:hover .poster {
    box-shadow: inset 300px 0px 40px rgba(255, 255, 255, 0.8);
  }

  .csstransforms3d .movie .info,
  .csstransforms3d .movie .info header {
    box-shadow: inset -300px 0px 40px rgba(0, 0, 0, 0.5);
  }

  .csstransforms3d .movie:hover .info,
  .csstransforms3d .movie:hover .info header {
    box-shadow: inset 0px 0px 40px rgba(0, 0, 0, 0);
  }

  /*************************************
Posters and still images
**************************************/
  /*.scene .movie .poster{background-size: cover}*/
  .scene:nth-child(1) .movie .poster {
    background-image: url(../assets/images/threeD/poster01.jpg);
  }

  .scene:nth-child(2) .poster {
    background-image: url(../assets/images/threeD/poster02.jpg);
  }

  .scene:nth-child(3) .poster {
    background-image: url(../assets/images/threeD/poster03.jpg);
  }

  .scene:nth-child(1) .info header {
    background-image: url(../assets/images/threeD/still01.jpg);
  }

  .scene:nth-child(2) .info header {
    background-image: url(../assets/images/threeD/still02.jpg);
  }

  .scene:nth-child(3) .info header {
    background-image: url(../assets/images/threeD/still03.jpg);
  }

  /*************************************
Fallback
**************************************/
  .no-csstransforms3d .movie .poster,
  .no-csstransforms3d .movie .info {
    position: relative;
  }

  /*************************************
Media Queries
**************************************/
  @media screen and (max-width: 60.75em) {
    .scene {
      float: none;
      margin: 30px auto 60px;
    }
  }
</style>
<template>
  <div class="threeD">
    <div class="container">
      <div class="wrapper">
        <ul class="stage clearfix">
          <li class="scene" v-for="(msg,index) of msgs">
            <div class="movie" onclick="return true">
              <div class="poster"></div>
              <div class="info">
                <header>
                  <h1>{{msg.h1}}</h1>
                  <span class="year">{{msg.span0}}</span>
                  <span class="rating">{{msg.span1}}</span>
                  <span class="duration">{{msg.span2}}</span>
                </header>
                <p>
                  {{msg.p}}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        msgs:[
          {h1:'龙井茶',span0:'天福',span1:'天心',span2:'茗茶',p:'唐朝时就被列为贡品，古人们又称碧螺春为“功夫茶”、“新血茶”。高级的碧螺春，茶芽之细嫩0.5公斤干茶需要茶芽6-7万个。炒成后的干茶条索紧结，白毫显露，色泽银绿，翠碧诱人，卷曲成螺，产于春季，故名“碧螺春”。此茶冲泡后杯中白云翻滚，清香袭入，是中国的名茶。主要工序为杀青、揉捻、搓团显毫、烘干。'},
          {h1:'龙井茶',span0:'天福',span1:'天心',span2:'茗茶',p:'唐朝时就被列为贡品，古人们又称碧螺春为“功夫茶”、“新血茶”。高级的碧螺春，茶芽之细嫩0.5公斤干茶需要茶芽6-7万个。炒成后的干茶条索紧结，白毫显露，色泽银绿，翠碧诱人，卷曲成螺，产于春季，故名“碧螺春”。此茶冲泡后杯中白云翻滚，清香袭入，是中国的名茶。主要工序为杀青、揉捻、搓团显毫、烘干。'},
          {h1:'龙井茶',span0:'天福',span1:'天心',span2:'茗茶',p:'唐朝时就被列为贡品，古人们又称碧螺春为“功夫茶”、“新血茶”。高级的碧螺春，茶芽之细嫩0.5公斤干茶需要茶芽6-7万个。炒成后的干茶条索紧结，白毫显露，色泽银绿，翠碧诱人，卷曲成螺，产于春季，故名“碧螺春”。此茶冲泡后杯中白云翻滚，清香袭入，是中国的名茶。主要工序为杀青、揉捻、搓团显毫、烘干。'}
      ]
    }
    }
  }
</script>
